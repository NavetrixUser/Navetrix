import { expect, test } from "@playwright/test";
import { SERVICES } from "../src/app/services/content";

// External links are checked by their attributes only: visiting Facebook, LinkedIn
// and the rest from a test would be slow and flaky, and they block automated traffic.
const EXTERNAL_LINKS = [
  { name: "Facebook", href: "https://www.facebook.com/people/Navetrix-Technologies/61578175604800/" },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/navetrixtechnologies" },
  { name: "Instagram", href: "https://www.instagram.com/navetrixtechnologies" },
  { name: "YouTube", href: "https://www.youtube.com/@NavetrixTechnologies" },
];

test.describe("footer", () => {
  test("lists every service, and each link opens its page", async ({ page }) => {
    await page.goto("/privacy-policy");
    const nav = page.getByRole("navigation", { name: "Services" });
    await expect(nav.getByRole("link")).toHaveCount(SERVICES.length);

    for (const s of SERVICES) {
      await nav.getByRole("link", { name: s.name, exact: true }).click();
      await expect(page).toHaveURL(`/services/${s.slug}`);
      await expect(page.getByRole("heading", { level: 1 })).toHaveText(s.h1);
    }
  });

  test("quick links reach home page sections from another page", async ({ page }) => {
    for (const section of ["Overview", "Services"]) {
      await page.goto("/privacy-policy");
      await page.locator("footer").getByRole("link", { name: section, exact: true }).click();
      await expect(page).toHaveURL(`/#${section.toLowerCase()}`);
      await expect(page.locator(`#${section.toLowerCase()}`)).toBeInViewport();
    }
  });

  test("quick links jump to sections on the home page", async ({ page }) => {
    await page.goto("/");
    await page.locator("footer").getByRole("link", { name: "Overview", exact: true }).click();
    await expect(page).toHaveURL(/#overview$/);
    await expect(page.locator("#overview")).toBeInViewport();
  });

  test("policy links open their pages", async ({ page }) => {
    for (const [name, path] of [["Privacy Policy", "/privacy-policy"], ["Cookie Policy", "/cookie-policy"]]) {
      await page.goto("/");
      await page.locator("footer").getByRole("link", { name }).click();
      await expect(page).toHaveURL(path);
      await expect(page.getByRole("heading", { level: 1 })).toHaveText(name);
    }
  });

  test("Contact opens the contact modal", async ({ page }) => {
    await page.goto("/");
    await page.locator("footer").getByRole("button", { name: "Contact" }).click();
    await expect(page.getByRole("dialog").getByRole("heading", { name: "Get in touch" })).toBeVisible();
  });

  test("email link points to info@navetrix.com", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("footer").getByRole("link", { name: "info@navetrix.com" })).toHaveAttribute(
      "href",
      "mailto:info@navetrix.com",
    );
  });

  test("social links open the right profiles in a new tab", async ({ page }) => {
    await page.goto("/");
    const footer = page.locator("footer");
    for (const { name, href } of EXTERNAL_LINKS) {
      const link = footer.getByRole("link", { name, exact: true });
      await expect(link).toHaveAttribute("href", href);
      await expect(link).toHaveAttribute("target", "_blank");
      await expect(link).toHaveAttribute("rel", /noopener/);
    }
  });

  test("shows the current year in the copyright line", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("footer")).toContainText(`© ${new Date().getFullYear()} Navetrix Technologies`);
  });
});

test.describe("floating actions", () => {
  test("WhatsApp button opens a chat with the business number in a new tab", async ({ page }) => {
    await page.goto("/");
    const link = page.getByRole("link", { name: "WhatsApp" });
    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute("href", "https://wa.me/919840192637");
    await expect(link).toHaveAttribute("target", "_blank");
    await expect(link).toHaveAttribute("rel", /noopener/);
  });

  test("chat button opens the contact modal on every page", async ({ page }) => {
    for (const path of ["/", `/services/${SERVICES[0].slug}`, "/team"]) {
      await page.goto(path);
      await page.getByRole("button", { name: "Chat with us" }).click();
      await expect(page.getByRole("dialog")).toBeVisible();
      await page.keyboard.press("Escape");
      await expect(page.getByRole("dialog")).toBeHidden();
    }
  });
});
