# AGENTS.md

This repo is the Navetrix marketing website, built with Next.js 15 App Router, React 19, TypeScript, and Tailwind CSS v4.

## Primary references

- [CLAUDE.md](CLAUDE.md) — project-specific product and architecture notes.
- [README.md](README.md) — setup and deployment notes.
- [src/app/services/content.ts](src/app/services/content.ts) — source of truth for service pages.
- [src/app/seo.ts](src/app/seo.ts) — central SEO metadata and structured-data patterns.
- [src/app/api/contact/route.ts](src/app/api/contact/route.ts) — contact form API behavior.

## Commands

- `npm install` — install dependencies.
- `npm run dev` — run the app locally on http://localhost:3000 with Turbopack.
- `npm run build` — production build and the repo’s type check.
- `npm run lint` — run ESLint.
- `npm test` — run Vitest once.
- `npm run test:e2e` — run Playwright end-to-end tests.
- `npm run test:e2e:ui` — open the Playwright UI.

## Key architecture rules

- Keep app code under [src/app](src/app) and avoid creating a separate `components` or `lib` package.
- Service pages are content-driven: add/edit entries in [src/app/services/content.ts](src/app/services/content.ts); homepage cards, footer links, and sitemap generation read from that list.
- Prefer server components for content pages. If a route needs client-side rendering, keep the metadata in a sibling layout file, as done for the team/privacy/cookie routes.
- All page metadata should follow the SEO conventions in [src/app/seo.ts](src/app/seo.ts): use `pageMetadata({ title, description, path })`, set canonical URLs, and emit JSON-LD helpers when relevant.
- Do not create a second contact modal or duplicate modal wiring. The modal is mounted once in the navbar and opened via `openContactModal()` from [src/app/components/utils.ts](src/app/components/utils.ts).
- The contact API validates request data with the shared schema in [src/app/contact/yup.ts](src/app/contact/yup.ts); changing limits there affects both the client and server validation.
- For sitemap/robots behavior, do not add static `public/sitemap.xml` or `public/robots.txt` files; the app generates them dynamically.

## Content and SEO conventions

- New service or route content should include metadata and structured data, not just page text.
- Preserve existing patterns for `h1`, `intro`, `sections`, `process`, `engagement`, `examples`, and `faqs` when working with service entries.
- Only add real testimonials; the testimonials section stays hidden when the dataset is empty.
- Keep generated route metadata consistent with the existing brand and SEO naming. Do not add unrelated or duplicate content structures.

## Testing and verification

- Run the smallest relevant validation first: a specific Vitest file or Playwright spec when possible.
- For route-handler changes, prefer direct test coverage with `fetch` stubs rather than starting a full local server.
- Do not rely on static export assumptions for any feature that requires a server, especially `/api/contact`.

## Notes

- The project is optimized for Vercel deployment; server endpoints require server support.
- Environment variables are listed in [.env.example](.env.example) and must not be committed in a real `.env` file.
- Follow the repo’s content-driven patterns and avoid broad refactors unless the task clearly requires them.
