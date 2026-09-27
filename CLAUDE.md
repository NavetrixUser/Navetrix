# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing website for Navetrix Technologies (https://navetrix.com): a Next.js 15 App Router site with React 19, TypeScript, and Tailwind CSS v4 (via `@tailwindcss/postcss`). Unit tests use Vitest; test files sit next to the code as `*.test.ts`.

## Commands

- `npm run dev`: dev server with Turbopack on http://localhost:3000
- `npm run build`: production build (also the only type check)
- `npm run lint`: runs `next lint` (flat config in `eslint.config.mjs`)
- `npm test`: runs all Vitest tests once. `npx vitest run src/app/api/contact` runs one file or folder, and `-t "<name>"` runs a single test. The tests call route handlers directly with `fetch` stubbed, so they need no server or API keys.
- Vitest is pinned to v3, because v5 requires `@types/node` 22+ and this project uses 20.
- `npm run test:e2e`: Playwright end-to-end tests in `e2e/*.spec.ts`, on desktop and mobile Chromium. It builds into `.next-e2e` (via `NEXT_DIST_DIR`) and serves on port 3100, so it never touches your `.next` or a dev server on 3000. The build uses hCaptcha's test site key. `/api/contact` is always mocked, so no email is sent, but the `@captcha` tests need to reach hcaptcha.com; skip them with `--grep-invert @captcha`. `npm run test:e2e:ui` opens the interactive runner. Run `npx playwright install chromium` once after cloning.
- `npm start`: serves the production build
- `node scripts/optimize-images.js`: converts `public/images/hero/*` to `.webp` and `.avif` at a max width of 554px, then **deletes the original JPEGs**. It needs `sharp`, which is not in `package.json`.

## Architecture

All application code lives in `src/app/`. There is no separate `components` or `lib` package.

- **Root shell**: `layout.tsx` renders `Navbar`, `ClientInserts` (the floating action buttons), `<main>`, and `Footer` on every page. It also sets site-wide default metadata with `metadataBase` and injects Organization and WebSite JSON-LD.
- **Home page**: `page.tsx` is a thin server wrapper that exports `metadata` and renders `mainpage.tsx`, a large client component. Overview, services, testimonials, and contact are anchor sections on the home page (`/#services` and so on). The service cards come from `servicesData.tsx`, which maps over `SERVICES`. The testimonials section, and its links in `Navbar` and `FooterQuickLinks`, stay hidden while `testimonialsData` is empty. Add only real testimonials.
- **Service pages**: every service is one entry in `services/content.ts` (`SERVICES`): slug, card text, meta title and description, intro, sections, process, engagement options, examples, and FAQs. `services/[slug]/page.tsx` is a static route (`generateStaticParams`, `dynamicParams = false`). It builds metadata and JSON-LD (Service, BreadcrumbList, FAQPage) from that entry and renders `components/ServicePage.tsx`, a server component. To add a service, add an entry to `SERVICES` and an image to `public/images/`. The homepage cards, footer links, and sitemap pick it up automatically. Retired URLs get a permanent redirect in `next.config.ts`, as `/services/internship-programs` does.
- **Sitemap and robots**: `sitemap.ts` generates `/sitemap.xml` from `SERVICES` plus the static paths in `SITEMAP_PATHS`. `robots.ts` generates `/robots.txt`, which blocks `/api/`. Bump `CONTENT_UPDATED` when content changes. Don't add `public/sitemap.xml` or `public/robots.txt`, because they would conflict with the generated files. `sitemap.test.ts` fails when a `page.tsx` is neither in `SITEMAP_PATHS` nor in the test's `EXCLUDED` list, so a new page means updating one of the two.
- **SEO pattern**: `seo.ts` is the central source of truth. When you add or edit a route:
  - Export `metadata` using `pageMetadata({ title, description, path })`. It sets the canonical URL, Open Graph, and Twitter tags. Titles get the ` | Navetrix Technologies` suffix unless you pass `absoluteTitle`.
  - Emit structured data with `<JsonLd data={...} />` (`components/JsonLd.tsx`) using the `serviceJsonLd`, `breadcrumbJsonLd`, and `faqJsonLd` helpers. `organizationJsonLd` and `websiteJsonLd` are already emitted once in the root layout.
  - The `team` page component is a client component (`"use client"`). Because a client component can't export `metadata`, it has a sibling `layout.tsx` that holds its metadata. `privacy-policy` and `cookie-policy` keep the same layout split, although their pages are now server components. Keep that split when you add a client-rendered route. Prefer server components for new content pages.
- **Contact modal**: `contact/modal.tsx` is mounted once, inside `Navbar`, through `dynamic(..., { ssr: false })`. Other code opens it by calling `openContactModal()` from `components/utils.ts`, which dispatches a `window` `openContactModal` event. Don't mount a second modal.
- **Contact API**: the modal POSTs `{ name, email, phone, message, hcaptchaToken }`. `api/contact/route.ts` validates it as follows:
  - Rejects bodies over 10 KB (413).
  - Rejects invalid JSON and non-object bodies (400).
  - Sanitizes each field, then validates with the same `contactSchema` (`contact/yup.ts`) that the modal uses. Change limits there and they apply on both sides.

  It then checks the hCaptcha token and sends mail through the Resend REST API using `fetch`. The server builds the subject and email body itself; it never accepts them from the client. Never log the token or secrets. `nodemailer` is a listed dependency but the route doesn't use it.
- **Shared UI**: `components/` holds `Button`, `Card`, `Section`, `HeroSlider` (framer-motion), `ScheduleButton` (it accepts a custom label as children), `BackToServicesButton`, `ServicePage`, and `JsonLd`.

### Content folders not currently wired into routes

- `src/techContent/<topic>/`: each topic (ai, aws, azure, cybersecurity, and others) has a `guide.md`, a `topics.md`, and a `topics/*.md` folder. No code imports them.
- `src/app/blog/*.mdx` and `post.tsx`: not routable in their current form. `gray-matter` and `next-mdx-remote` are installed but not used yet.

## Deployment and environment

- Environment variables are listed in `.env.example`: `RESEND_API_KEY`, `RESEND_FROM`, `RESEND_TO`, `HCAPTCHA_SECRET`, and `NEXT_PUBLIC_HCAPTCHA_SITEKEY`.
- The primary target is Vercel, because the contact API route needs a server.
- Static export for cPanel/Namecheap was used before. `output: "export"` is commented out in `next.config.ts`, and `.htaccess` holds the Apache rewrites for that mode. Static export would break `/api/contact`.
- `images.unoptimized: true` is set, so `next/image` does no resizing. Pre-optimize images with the script above.
