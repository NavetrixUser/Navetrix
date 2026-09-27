import { NextResponse } from "next/server";
import { ValidationError } from "yup";
import { contactSchema } from "../../contact/yup";

function sanitizeInput(input: string): string {
  return input
    .replace(/[<>]/g, "") // Remove angle brackets
    .replace(/\u202e|\u202d|\u202c|\u202b|\u202a/g, "") // Remove unicode directionals
    .replace(/\r?\n/g, "\n") // Normalize newlines
    .trim();
}

// The client validates with the same schema, but the endpoint must not trust it.
const MAX_BODY_BYTES = 10 * 1024;
const MAX_TOKEN_LENGTH = 4096;

// Reads the body but stops as soon as it passes the limit, so an oversized
// request is never fully buffered. Returns null when the limit is exceeded.
async function readBodyWithLimit(req: Request, limit: number): Promise<string | null> {
  const declared = Number(req.headers.get("content-length"));
  if (Number.isFinite(declared) && declared > limit) return null;
  if (!req.body) return "";

  const reader = req.body.getReader();
  const chunks: Uint8Array[] = [];
  let total = 0;
  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    total += value.byteLength;
    if (total > limit) {
      await reader.cancel();
      return null;
    }
    chunks.push(value);
  }
  const bytes = new Uint8Array(total);
  let offset = 0;
  for (const chunk of chunks) {
    bytes.set(chunk, offset);
    offset += chunk.byteLength;
  }
  return new TextDecoder().decode(bytes);
}

export async function POST(req: Request) {
  const raw = await readBodyWithLimit(req, MAX_BODY_BYTES);
  if (raw === null) {
    return NextResponse.json({ error: "Request too large." }, { status: 413 });
  }
  let body: unknown;
  try {
    body = JSON.parse(raw);
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
  if (typeof body !== "object" || body === null || Array.isArray(body)) {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
  const fields = body as Record<string, unknown>;
  const str = (v: unknown) => (typeof v === "string" ? sanitizeInput(v) : "");

  let name: string, email: string, phone: string, message: string;
  try {
    ({ name, email, phone, message } = await contactSchema.validate(
      {
        name: str(fields.name),
        email: str(fields.email),
        phone: str(fields.phone),
        message: str(fields.message),
      },
      { abortEarly: true, stripUnknown: true }
    ));
  } catch (err) {
    const msg = err instanceof ValidationError ? err.message : "Invalid request.";
    return NextResponse.json({ error: msg }, { status: 400 });
  }
  const subject = `Contact Form Submission - ${name}`;

  const token = typeof fields.hcaptchaToken === "string" ? fields.hcaptchaToken : "";
  const hcaptchaSecret = process.env.HCAPTCHA_SECRET;

  // hCaptcha verification
  if (!token || token.length > MAX_TOKEN_LENGTH || !hcaptchaSecret) {
    return NextResponse.json({ error: "CAPTCHA verification failed." }, { status: 400 });
  }
  let captchaOk = false;
  try {
    const captchaRes = await fetch("https://hcaptcha.com/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret: hcaptchaSecret, response: token }),
    });
    if (!captchaRes.ok) {
      console.error("hCaptcha siteverify returned", captchaRes.status);
      return NextResponse.json({ error: "Could not verify CAPTCHA. Please try again." }, { status: 502 });
    }
    const captchaData = await captchaRes.json();
    captchaOk = captchaData?.success === true;
  } catch (err) {
    console.error("hCaptcha verification error:", err);
    return NextResponse.json({ error: "Could not verify CAPTCHA. Please try again." }, { status: 502 });
  }
  if (!captchaOk) {
    return NextResponse.json({ error: "CAPTCHA verification failed." }, { status: 400 });
  }

  // Use Resend API
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM;
  const to = process.env.RESEND_TO || "info@navetrix.com";

  if (!apiKey || !from) {
    console.error("Email service not configured. RESEND_API_KEY or RESEND_FROM missing.");
    return NextResponse.json({ error: "Email service not configured." }, { status: 500 });
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to,
        subject:  subject,
        reply_to: email,
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`,
      }),
    });
    if (!res.ok) {
      const errorText = await res.text();
      console.error("Resend API error:", errorText);
      return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
    }
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Unexpected error while sending email:", err);
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }
}
