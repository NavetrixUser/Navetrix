import { expect, test } from "@playwright/test";
import nextConfig from "../next.config";
import { SERVICES } from "../src/app/services/content";

for (const s of SERVICES) {
  test(`service page /services/${s.slug} renders with SEO data`, async ({ page }) => {
    const res = await page.goto(`/services/${s.slug}`);
    expect(res?.status()).toBe(200);

    await expect(page).toHaveTitle(`${s.metaTitle} | Navetrix Technologies`);
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(s.h1);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", `https://navetrix.com/services/${s.slug}`);
    await expect(page.locator('meta[name="description"]')).toHaveAttribute("content", s.metaDescription);

    for (const sec of s.sections) {
      await expect(page.getByRole("heading", { level: 2, name: sec.heading, exact: true })).toBeVisible();
    }

    const types = await page
      .locator('script[type="application/ld+json"]')
      .evaluateAll((els) => els.flatMap((el) => [JSON.parse(el.textContent || "null")].flat().map((d) => d?.["@type"])));
    expect(types).toEqual(expect.arrayContaining(["Service", "BreadcrumbList", "FAQPage"]));
  });
}

test("'Book a consultation' opens the contact modal", async ({ page }) => {
  await page.goto(`/services/${SERVICES[0].slug}`);
  await page.getByRole("button", { name: "Book a consultation" }).first().click();
  await expect(page.getByRole("dialog")).toBeVisible();
});

test("every redirect in next.config.ts is permanent and lands on its destination", async ({ request }) => {
  const redirects = (await nextConfig.redirects?.()) ?? [];
  for (const r of redirects) {
    const res = await request.get(r.source, { maxRedirects: 0 });
    expect(res.status(), r.source).toBe(308);
    expect(new URL(res.headers()["location"], "http://x").pathname, r.source).toBe(r.destination);
  }
});

test("unknown service slug returns 404", async ({ page }) => {
  const res = await page.goto("/services/does-not-exist");
  expect(res?.status()).toBe(404);
  await expect(page.getByRole("heading", { name: "404 - Page Not Found" })).toBeVisible();
});
