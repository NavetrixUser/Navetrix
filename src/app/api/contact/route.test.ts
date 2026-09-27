import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { POST } from "./route";

const SECRET = "hc-secret-DO-NOT-LOG";
const TOKEN = "hc-token-DO-NOT-LOG";

const validBody = {
  name: "Ada Lovelace",
  email: "ada@example.com",
  phone: "+91 9876543210",
  message: "I would like to know more.",
  hcaptchaToken: TOKEN,
};

const resendCalls = () => fetchMock.mock.calls.filter(([url]) => String(url).includes("resend"));
const hcaptchaCalls = () => fetchMock.mock.calls.filter(([url]) => String(url).includes("hcaptcha"));

function post(body: unknown) {
  return POST(
    new Request("http://localhost/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: typeof body === "string" ? body : JSON.stringify(body),
    })
  );
}

let fetchMock: ReturnType<typeof vi.fn>;

beforeEach(() => {
  vi.stubEnv("HCAPTCHA_SECRET", SECRET);
  vi.stubEnv("RESEND_API_KEY", "re_test");
  vi.stubEnv("RESEND_FROM", "noreply@navetrix.com");
  vi.stubEnv("RESEND_TO", "info@navetrix.com");
  fetchMock = vi.fn(async (url: string) =>
    url.includes("hcaptcha")
      ? Response.json({ success: true })
      : Response.json({ id: "email_1" })
  );
  vi.stubGlobal("fetch", fetchMock);
});

afterEach(() => {
  vi.unstubAllEnvs();
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
});

describe("POST /api/contact – logging", () => {
  it("never writes the hCaptcha secret or token to the console", async () => {
    const spies = (["log", "info", "warn", "error", "debug"] as const).map((m) =>
      vi.spyOn(console, m).mockImplementation(() => {})
    );
    // Both a success and a Resend failure path, so error logging is covered too.
    expect((await post(validBody)).status).toBe(200);
    fetchMock.mockImplementation(async (url: string) =>
      url.includes("hcaptcha") ? Response.json({ success: true }) : new Response("boom", { status: 500 })
    );
    expect((await post(validBody)).status).toBe(500);

    const output = spies.flatMap((s) => s.mock.calls).map((args) => args.map(String).join(" ")).join("\n");
    expect(output).not.toContain(SECRET);
    expect(output).not.toContain(TOKEN);
  });
});

describe("POST /api/contact – success", () => {
  it("sends one email with a server-built subject and the phone in the text", async () => {
    const res = await post({ ...validBody, subject: "SPOOFED SUBJECT" });
    expect(res.status).toBe(200);
    expect(resendCalls()).toHaveLength(1);
    const sent = JSON.parse(resendCalls()[0][1].body);
    expect(sent.subject).toBe("Contact Form Submission - Ada Lovelace");
    expect(sent.reply_to).toBe("ada@example.com");
    expect(sent.to).toBe("info@navetrix.com");
    expect(sent.text).toContain("Phone: +91 9876543210");
    expect(sent.text).toContain("I would like to know more.");
  });
});

describe("POST /api/contact – rejects bad input without sending mail", () => {
  it.each([
    ["invalid JSON", "{not json"],
    ["JSON null", "null"],
    ["JSON array", "[]"],
    ["JSON string", '"hi"'],
  ])("%s → 400", async (_label, raw) => {
    const res = await post(raw);
    expect(res.status).toBe(400);
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("body over 10 KB → 413", async () => {
    const res = await post({ ...validBody, padding: "x".repeat(11 * 1024) });
    expect(res.status).toBe(413);
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("declared Content-Length over 10 KB → 413 without reading the body", async () => {
    const req = new Request("http://localhost/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json", "Content-Length": String(1024 * 1024) },
      body: JSON.stringify(validBody),
    });
    expect((await POST(req)).status).toBe(413);
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("streamed body with no Content-Length stops reading once it passes 10 KB", async () => {
    let chunksPulled = 0;
    const chunk = new TextEncoder().encode("x".repeat(1024));
    const stream = new ReadableStream<Uint8Array>({
      pull(controller) {
        chunksPulled++;
        if (chunksPulled > 1000) controller.close();
        else controller.enqueue(chunk);
      },
    });
    const req = new Request("http://localhost/api/contact", {
      method: "POST",
      body: stream,
      // @ts-expect-error - required by Node's fetch for streamed request bodies
      duplex: "half",
    });
    expect((await POST(req)).status).toBe(413);
    expect(chunksPulled).toBeLessThan(20);
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it.each([
    ["bad email", { email: "not-an-email" }],
    ["email with spaces", { email: "a b@example.com" }],
    ["name over 100 chars", { name: "A".repeat(101) }],
    ["name too short", { name: "A" }],
    ["message over 500 chars", { message: "word ".repeat(120) }],
    ["one-word message", { message: "Helloooooooo" }],
    ["missing phone", { phone: undefined }],
    ["invalid phone", { phone: "call me maybe" }],
    ["non-string name", { name: 12345 }],
  ])("%s → 400", async (_label, override) => {
    const res = await post({ ...validBody, ...override });
    expect(res.status).toBe(400);
    expect((await res.json()).error).toBeTruthy();
    expect(resendCalls()).toHaveLength(0);
  });

  it("strips angle brackets before validating and sending", async () => {
    const res = await post({ ...validBody, message: "<script>hi</script> there friend" });
    expect(res.status).toBe(200);
    expect(JSON.parse(resendCalls()[0][1].body).text).not.toMatch(/[<>]/);
  });
});

describe("POST /api/contact – hCaptcha", () => {
  it("URL-encodes the token so it can't inject extra parameters", async () => {
    await post({ ...validBody, hcaptchaToken: "tok&secret=attacker" });
    const params = new URLSearchParams(String(hcaptchaCalls()[0][1].body));
    expect(params.getAll("secret")).toEqual([SECRET]);
    expect(params.get("response")).toBe("tok&secret=attacker");
  });

  it.each([
    ["missing token", { hcaptchaToken: undefined }],
    ["non-string token", { hcaptchaToken: 42 }],
    ["token over 4 KB", { hcaptchaToken: "t".repeat(4097) }],
  ])("%s → 400 without calling hCaptcha", async (_label, override) => {
    const res = await post({ ...validBody, ...override });
    expect(res.status).toBe(400);
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("failed verification → 400, no email", async () => {
    fetchMock.mockImplementation(async () => Response.json({ success: false }));
    const res = await post(validBody);
    expect(res.status).toBe(400);
    expect(resendCalls()).toHaveLength(0);
  });

  it.each([
    ["network error", async () => { throw new TypeError("fetch failed"); }],
    ["HTML error page", async () => new Response("<html>Bad Gateway</html>", { status: 502 })],
    ["200 with non-JSON body", async () => new Response("<html>oops</html>", { status: 200 })],
  ])("hCaptcha %s → 502 JSON error, no email", async (_label, impl) => {
    vi.spyOn(console, "error").mockImplementation(() => {});
    fetchMock.mockImplementation(impl);
    const res = await post(validBody);
    expect(res.status).toBe(502);
    expect((await res.json()).error).toBeTruthy();
    expect(resendCalls()).toHaveLength(0);
  });

  it("missing HCAPTCHA_SECRET → 400", async () => {
    vi.stubEnv("HCAPTCHA_SECRET", "");
    expect((await post(validBody)).status).toBe(400);
  });
});

describe("POST /api/contact – email service", () => {
  it("missing Resend config → 500", async () => {
    vi.spyOn(console, "error").mockImplementation(() => {});
    vi.stubEnv("RESEND_API_KEY", "");
    expect((await post(validBody)).status).toBe(500);
  });

  it("Resend error → 500", async () => {
    vi.spyOn(console, "error").mockImplementation(() => {});
    fetchMock.mockImplementation(async (url: string) =>
      url.includes("hcaptcha") ? Response.json({ success: true }) : new Response("nope", { status: 422 })
    );
    expect((await post(validBody)).status).toBe(500);
  });
});
