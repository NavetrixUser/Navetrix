import { expect, type Page, test } from "@playwright/test";

const VALID = {
  name: "Ada Lovelace",
  email: "ada@example.com",
  phone: "+91 9876543210",
  message: "We need help connecting Salesforce to our accounting system.",
};

async function openModal(page: Page) {
  await page.goto("/");
  await page.getByRole("button", { name: "Chat with us" }).click();
  const dialog = page.getByRole("dialog");
  await expect(dialog.getByRole("heading", { name: "Get in touch" })).toBeVisible();
  return dialog;
}

async function fill(page: Page, values: Partial<typeof VALID>) {
  for (const [field, value] of Object.entries(values)) {
    await page.locator(`#${field}`).fill(value);
  }
}

// Clicks the hCaptcha checkbox. The web server uses hCaptcha's test site key,
// which passes without a challenge, but it still needs to reach hcaptcha.com.
async function solveCaptcha(page: Page) {
  await page.frameLocator('iframe[title*="checkbox"]').locator("#checkbox").click();
  await expect
    .poll(() => page.locator('[name="h-captcha-response"]').first().inputValue(), { timeout: 15_000 })
    .not.toBe("");
}

test.describe("contact modal", () => {
  test("opens from the navbar Contact link", async ({ page, isMobile }) => {
    await page.goto("/");
    if (isMobile) await page.getByRole("button", { name: "Open menu" }).click();
    await page.locator("#main-navbar").getByRole("link", { name: "Contact" }).filter({ visible: true }).click();
    await expect(page.getByRole("dialog")).toBeVisible();
  });

  test("closes with the close button, Escape, and backdrop click", async ({ page }) => {
    let dialog = await openModal(page);
    await dialog.getByRole("button", { name: "Close contact form" }).click();
    await expect(dialog).toBeHidden();

    dialog = await openModal(page);
    await page.keyboard.press("Escape");
    await expect(dialog).toBeHidden();

    dialog = await openModal(page);
    await dialog.click({ position: { x: 5, y: 5 } });
    await expect(dialog).toBeHidden();
  });

  test("shows field errors on blur", async ({ page }) => {
    await openModal(page);
    await fill(page, { name: "A", email: "not-an-email", phone: "abc", message: "short" });
    await page.locator("#name").click(); // blur the last field

    await expect(page.locator("#name-error")).toHaveText(/^Full Name must be at least \d+ characters\.$/);
    await expect(page.locator("#email-error")).toHaveText("Invalid email.");
    await expect(page.locator("#phone-error")).toHaveText("Invalid phone number.");
    await expect(page.locator("#message-error")).toHaveText("Message too short or incomplete.");
  });

  test("shows no field errors for valid values", async ({ page }) => {
    await openModal(page);
    await fill(page, VALID);
    await page.locator("#name").click(); // blur the last field

    for (const field of Object.keys(VALID)) {
      await expect(page.locator(`#${field}-error`)).toHaveText("");
    }
  });

  test("strips spaces from the email field", async ({ page }) => {
    await openModal(page);
    await page.locator("#email").pressSequentially("ada @example.com");
    await expect(page.locator("#email")).toHaveValue("ada@example.com");
  });

  test("requires the CAPTCHA before sending", async ({ page }) => {
    let posted = false;
    await page.route("**/api/contact", (route) => {
      posted = true;
      return route.abort();
    });
    await openModal(page);
    await fill(page, VALID);
    await page.getByRole("button", { name: "Send Message" }).click();
    await expect(page.getByText("Please complete the CAPTCHA.")).toBeVisible();
    expect(posted).toBe(false);
  });
});

// These talk to hcaptcha.com. The contact API is always mocked, so no email is sent.
test.describe("contact submission @captcha", () => {
  test("sends the form and shows the success message", async ({ page }) => {
    let body: Record<string, unknown> | undefined;
    await page.route("**/api/contact", async (route) => {
      body = route.request().postDataJSON();
      await route.fulfill({ status: 200, json: { ok: true } });
    });

    await openModal(page);
    await fill(page, VALID);
    await solveCaptcha(page);
    await page.getByRole("button", { name: "Send Message" }).click();

    await expect(page.getByText("Thanks, we've got your message and will reply by email.")).toBeVisible();
    expect(body).toMatchObject(VALID);
    expect(body?.hcaptchaToken).toEqual(expect.any(String));
    await expect(page.locator("#name")).toHaveValue("");
  });

  test("shows an error when the API fails", async ({ page }) => {
    await page.route("**/api/contact", (route) => route.fulfill({ status: 500, json: { error: "boom" } }));

    await openModal(page);
    await fill(page, VALID);
    await solveCaptcha(page);
    await page.getByRole("button", { name: "Send Message" }).click();

    await expect(page.getByText("Could not send message.")).toBeVisible();
  });
});
