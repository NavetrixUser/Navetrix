import { expect, type Page, test } from "@playwright/test";
import { SITEMAP_PATHS } from "../src/app/sitemap";

// Screenshot comparisons. Update baselines after an intended design change with
// `npm run test:visual:update` and review the new images before committing them.

function name(path: string) {
  return path === "/" ? "home" : path.slice(1).replaceAll("/", "-");
}

async function settle(page: Page) {
  await page.evaluate(() => document.fonts.ready);
  // Lazy images below the fold only load once scrolled to.
  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += window.innerHeight) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 50));
    }
    window.scrollTo(0, 0);
  });
  await page.waitForFunction(() => Array.from(document.images).every((img) => img.complete));
}

for (const path of SITEMAP_PATHS) {
  test(`${path} looks the same`, async ({ page }) => {
    await page.goto(path);
    await settle(page);
    await expect(page).toHaveScreenshot(`${name(path)}.png`, {
      fullPage: true,
      // The hero background rotates every 5 seconds.
      mask: [page.locator("#hero img")],
    });
  });
}

test("contact modal looks the same", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Chat with us" }).click();
  const dialog = page.getByRole("dialog");
  await expect(dialog.getByRole("heading", { name: "Get in touch" })).toBeVisible();
  await page.evaluate(() => document.fonts.ready);
  await expect(dialog).toHaveScreenshot("contact-modal.png", {
    // hCaptcha renders its own widget, which we don't control.
    mask: [page.locator('iframe[src*="hcaptcha"]'), page.locator("#hero img")],
  });
});
