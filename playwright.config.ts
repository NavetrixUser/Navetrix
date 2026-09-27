import { defineConfig, devices } from "@playwright/test";

// End-to-end tests live in e2e/. They run against a production build served on
// PORT, so they exercise the same code Vercel serves. Unit tests stay in Vitest.
const PORT = 3100;
const BASE_URL = `http://localhost:${PORT}`;

// hCaptcha's public test key: the checkbox always passes without a challenge.
// It is inlined at build time, so it has to be set for `next build`.
const HCAPTCHA_TEST_SITEKEY = "10000000-ffff-ffff-ffff-000000000001";

// Screenshot comparisons only run in the visual-* projects. Rendering differs
// between operating systems, so baselines are stored per platform (see e2e/README.md).
const VISUAL = /visual\.spec\.ts/;

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: process.env.CI ? [["github"], ["html", { open: "never" }]] : [["list"], ["html", { open: "never" }]],
  snapshotPathTemplate: "{testDir}/__screenshots__/{platform}/{projectName}/{arg}{ext}",
  expect: {
    toHaveScreenshot: { animations: "disabled", caret: "hide", maxDiffPixelRatio: 0.01 },
  },
  use: {
    baseURL: BASE_URL,
    trace: "on-first-retry",
    screenshot: "only-on-failure",
  },
  projects: [
    { name: "desktop", testIgnore: VISUAL, use: { ...devices["Desktop Chrome"] } },
    { name: "firefox", testIgnore: VISUAL, use: { ...devices["Desktop Firefox"] } },
    { name: "webkit", testIgnore: VISUAL, use: { ...devices["Desktop Safari"] } },
    { name: "mobile", testIgnore: VISUAL, use: { ...devices["Pixel 7"] } },
    { name: "mobile-safari", testIgnore: VISUAL, use: { ...devices["iPhone 15"] } },
    { name: "visual-desktop", testMatch: VISUAL, use: { ...devices["Desktop Chrome"] } },
    { name: "visual-mobile", testMatch: VISUAL, use: { ...devices["Pixel 7"] } },
  ],
  webServer: {
    command: `npm run build && npm run start -- -p ${PORT}`,
    url: BASE_URL,
    reuseExistingServer: !process.env.CI,
    timeout: 300_000,
    env: { NEXT_PUBLIC_HCAPTCHA_SITEKEY: HCAPTCHA_TEST_SITEKEY, NEXT_DIST_DIR: ".next-e2e" },
  },
});
