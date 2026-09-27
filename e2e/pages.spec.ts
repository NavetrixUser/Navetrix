import { expect, test } from "@playwright/test";
import { SITEMAP_PATHS } from "../src/app/sitemap";

const STATIC_PAGES = [
  { path: "/team", title: "Our Team | Navetrix Technologies", h1: "Our Team" },
  { path: "/privacy-policy", title: "Privacy Policy | Navetrix Technologies", h1: "Privacy Policy" },
  { path: "/cookie-policy", title: "Cookie Policy | Navetrix Technologies", h1: "Cookie Policy" },
];

for (const p of STATIC_PAGES) {
  test(`${p.path} renders`, async ({ page }) => {
    const res = await page.goto(p.path);
    expect(res?.status()).toBe(200);
    await expect(page).toHaveTitle(p.title);
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(p.h1);
  });
}

test("every sitemap page loads without console errors", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", (e) => errors.push(`${page.url()}: ${e.message}`));
  page.on("console", (m) => {
    if (m.type() === "error") errors.push(`${page.url()}: ${m.text()}`);
  });

  for (const path of SITEMAP_PATHS) {
    const res = await page.goto(path);
    expect(res?.status(), path).toBe(200);
    await expect(page.locator("#main-navbar")).toBeVisible();
    await expect(page.locator("footer")).toBeAttached();
  }
  expect(errors).toEqual([]);
});

test("unknown routes show the 404 page", async ({ page }) => {
  const res = await page.goto("/no-such-page");
  expect(res?.status()).toBe(404);
  await page.getByRole("link", { name: "Go to Home" }).click();
  await expect(page).toHaveURL("/");
});

test("robots.txt blocks /api/ and points to the sitemap", async ({ request }) => {
  const body = await (await request.get("/robots.txt")).text();
  expect(body).toContain("Disallow: /api/");
  expect(body).toContain("Sitemap: https://navetrix.com/sitemap.xml");
});

test("sitemap.xml lists every sitemap path", async ({ request }) => {
  const body = await (await request.get("/sitemap.xml")).text();
  for (const path of SITEMAP_PATHS) {
    const url = path === "/" ? "https://navetrix.com" : `https://navetrix.com${path}`;
    expect(body).toContain(`<loc>${url}</loc>`);
  }
});
