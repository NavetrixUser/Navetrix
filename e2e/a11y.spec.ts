import AxeBuilder from "@axe-core/playwright";
import { expect, type Page, test } from "@playwright/test";
import { SITEMAP_PATHS } from "../src/app/sitemap";

// axe checks the DOM, not how each engine renders it, so Chromium (desktop and mobile) is enough.
test.skip(({ browserName }) => browserName !== "chromium", "axe results are the same in every browser");

const WCAG_TAGS = ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"];

async function scan(page: Page, include?: string) {
  const builder = new AxeBuilder({ page }).withTags(WCAG_TAGS);
  if (include) builder.include(include);
  const { violations } = await builder.analyze();
  // A readable summary makes a failure actionable without opening the report.
  return violations.map((v) => ({
    rule: v.id,
    impact: v.impact,
    help: v.help,
    targets: v.nodes.map((n) => n.target.join(" ")),
  }));
}

for (const path of [...SITEMAP_PATHS, "/no-such-page"]) {
  test(`${path} has no WCAG A/AA violations`, async ({ page }) => {
    await page.goto(path);
    await page.evaluate(() => document.fonts.ready);
    expect(await scan(page)).toEqual([]);
  });
}

test("the open contact modal has no WCAG A/AA violations", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Chat with us" }).click();
  await expect(page.getByRole("dialog").getByRole("heading", { name: "Get in touch" })).toBeVisible();
  // The hCaptcha iframe is third-party markup we can't change.
  expect(await scan(page, '[role="dialog"]')).toEqual([]);
});
