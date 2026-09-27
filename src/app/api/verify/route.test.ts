import { describe, expect, it } from "vitest";
import certificates from "../../certificates.json";
import { GET } from "./route";

const get = (query: string) => GET(new Request(`http://localhost/api/verify${query}`));
const [first, second] = certificates;

describe("GET /api/verify", () => {
  it.each([first.id, first.id.toLowerCase(), `  ${first.id}  `])("finds %j", async (id) => {
    const res = await get(`?id=${encodeURIComponent(id)}`);
    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({ name: first.name, program: first.program, date: first.date });
    expect(res.headers.get("cache-control")).toBe("no-store");
  });

  it("returns only the matching record, never the others", async () => {
    const text = await (await get(`?id=${first.id}`)).text();
    expect(text).not.toContain(second.name);
    expect(text).not.toContain(second.id);
  });

  it("unknown ID → 404", async () => {
    expect((await get("?id=CERT0000000")).status).toBe(404);
  });

  it.each([
    ["missing id", ""],
    ["empty id", "?id="],
    ["path traversal", "?id=../certificates"],
    ["too long", `?id=${"A".repeat(100)}`],
    ["wildcard", "?id=*"],
  ])("%s → 400", async (_label, query) => {
    expect((await get(query)).status).toBe(400);
  });
});
