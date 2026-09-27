import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import robots from "./robots";
import { SITE_URL } from "./seo";
import { SERVICES } from "./services/content";
import sitemap, { SITEMAP_PATHS } from "./sitemap";

const APP_DIR = __dirname;
// Routes that intentionally stay out of the sitemap. Add to this list, with a reason, rather than skipping a page silently.
const EXCLUDED: string[] = [];

/** Every URL path that a page.tsx under src/app produces, with [slug] expanded from SERVICES. */
function pageRoutes(dir = APP_DIR, prefix = ""): string[] {
  const routes: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (entry.name === "api" || entry.name.startsWith("_")) continue;
      const segment = entry.name.startsWith("(") ? "" : `/${entry.name}`;
      routes.push(...pageRoutes(path.join(dir, entry.name), prefix + segment));
    } else if (entry.name === "page.tsx") {
      routes.push(prefix || "/");
    }
  }
  return routes.flatMap((r) =>
    r === "/services/[slug]" ? SERVICES.map((s) => `/services/${s.slug}`) : [r]
  );
}

describe("sitemap", () => {
  const entries = sitemap();

  it("uses absolute URLs on SITE_URL with no duplicates", () => {
    const urls = entries.map((e) => e.url);
    for (const url of urls) expect(url.startsWith(SITE_URL)).toBe(true);
    expect(new Set(urls).size).toBe(urls.length);
  });

  it("lists every page in src/app, and nothing that isn't a page", () => {
    const pages = pageRoutes().filter((r) => !EXCLUDED.includes(r)).sort();
    expect(pages.some((r) => r.includes("["))).toBe(false); // every dynamic segment is expanded
    expect([...SITEMAP_PATHS].sort()).toEqual(pages);
  });
});

describe("robots", () => {
  it("allows the site, blocks /api/, and points to the sitemap", () => {
    const r = robots();
    expect(r.rules).toEqual({ userAgent: "*", allow: "/", disallow: "/api/" });
    expect(r.sitemap).toBe(`${SITE_URL}/sitemap.xml`);
  });

  it("has no static public/robots.txt competing with robots.ts", () => {
    expect(fs.existsSync(path.join(APP_DIR, "../../public/robots.txt"))).toBe(false);
    expect(fs.existsSync(path.join(APP_DIR, "../../public/sitemap.xml"))).toBe(false);
  });
});
