import { expect, test } from "@playwright/test";
import { SERVICES } from "../src/app/services/content";

test.describe("home page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("has the SEO title and main sections", async ({ page }) => {
    await expect(page).toHaveTitle(/IT Consulting, Azure Integration & Software Development/);
    await expect(page.locator("#hero h1")).toBeVisible();
    await expect(page.locator("#overview")).toBeAttached();
    await expect(page.getByRole("heading", { name: "Our Services" })).toBeVisible();
  });

  test("shows one card per service, linking to its page", async ({ page }) => {
    const cards = page.locator("#services h3 a");
    await expect(cards).toHaveCount(SERVICES.length);
    for (const s of SERVICES) {
      await expect(page.locator(`#services a[href="/services/${s.slug}"]`)).toBeVisible();
    }
  });

  test("service card navigates to the service page", async ({ page }) => {
    const first = SERVICES[0];
    await page.locator(`#services a[href="/services/${first.slug}"]`).click();
    await expect(page).toHaveURL(`/services/${first.slug}`);
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(first.h1);
  });

  test("hides the testimonials section while there are none", async ({ page }) => {
    await expect(page.locator("#testimonials")).toHaveCount(0);
    await expect(page.getByRole("link", { name: "Testimonials" })).toHaveCount(0);
  });

  test("emits Organization and WebSite JSON-LD", async ({ page }) => {
    const types = await page
      .locator('script[type="application/ld+json"]')
      .evaluateAll((els) => els.flatMap((el) => [JSON.parse(el.textContent || "null")].flat().map((d) => d?.["@type"])));
    expect(types).toEqual(expect.arrayContaining(["Organization", "WebSite"]));
  });
});

test.describe("navigation", () => {
  test("desktop nav links scroll to sections", async ({ page, isMobile }) => {
    test.skip(isMobile, "desktop nav is hidden on small screens");
    await page.goto("/");
    await page.locator("#main-navbar").getByRole("link", { name: "Services" }).click();
    await expect(page).toHaveURL(/#services$/);
    await expect(page.locator("#services")).toBeInViewport();
  });

  test("mobile menu opens and navigates", async ({ page, isMobile }) => {
    test.skip(!isMobile, "hamburger menu only shows on small screens");
    await page.goto("/");
    await page.getByRole("button", { name: "Open menu" }).click();
    const menu = page.locator("#main-navbar ul").last();
    await expect(menu).toBeVisible();
    await menu.getByRole("link", { name: "Services" }).click();
    await expect(page).toHaveURL(/#services$/);
    await expect(menu).toBeHidden();
  });
});
