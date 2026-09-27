import { NextResponse } from "next/server";
// Bundled into the server route only; the full list is never served to browsers.
import certificates from "../../certificates.json";

type Certificate = { id: string; name: string; program: string; date: string };

const ID_RE = /^[A-Za-z0-9-]{1,40}$/;
const NO_STORE = { "Cache-Control": "no-store" };

/** GET /api/verify?id=CERT2024001 → the one matching certificate, or 404. */
export async function GET(req: Request) {
  const id = new URL(req.url).searchParams.get("id")?.trim() ?? "";
  if (!ID_RE.test(id)) {
    return NextResponse.json({ error: "Invalid certificate ID." }, { status: 400, headers: NO_STORE });
  }
  const match = (certificates as Certificate[]).find((c) => c.id.toLowerCase() === id.toLowerCase());
  if (!match) {
    return NextResponse.json({ error: "Certificate not found." }, { status: 404, headers: NO_STORE });
  }
  const { name, program, date } = match;
  return NextResponse.json({ name, program, date }, { headers: NO_STORE });
}
