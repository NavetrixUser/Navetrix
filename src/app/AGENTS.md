# AGENTS.md

This file applies to work under [src/app](.). Use it for route, content, and UI changes.

## Start here

- Use the repo-level guidance in [AGENTS.md](../AGENTS.md) and [CLAUDE.md](../../CLAUDE.md) for the broader project context.
- Keep changes inside [src/app](.) unless a task clearly requires another area.

## Content editing

- Service pages are driven by [src/app/services/content.ts](services/content.ts). Add or update entries there before changing page output.
- Preserve the standard fields for each service: `h1`, `intro`, `sections`, `process`, `engagement`, `examples`, and `faqs`.
- Add real testimonial data only. Keep the testimonials section hidden when the dataset is empty.
- For SEO pages and route metadata, follow [src/app/seo.ts](seo.ts) and emit structured data only when the pattern already exists.
- Do not add a second contact modal. The app mounts one modal and uses `openContactModal()` from [src/app/components/utils.ts](components/utils.ts).

## Testing workflow

- Prefer the smallest relevant check:
  - `npm test -- src/app/...` or `npx vitest run src/app/...` for focused unit tests.
  - `npx playwright test e2e/<spec>.spec.ts` for page or browser coverage.
- For API route changes, test the handler directly with `fetch` stubs instead of spinning up a full local server.
- Do not assume static export behavior for any route that needs a server, especially [src/app/api/contact/route.ts](api/contact/route.ts).
- If a page or route is added, keep sitemap and robots behavior aligned with [src/app/sitemap.ts](sitemap.ts) and [src/app/robots.ts](robots.ts).

## Avoid

- Creating a separate `components` or `lib` package under this app.
- Adding static `public/sitemap.xml` or `public/robots.txt` files.
- Broad refactors when a content-driven fix will do.
- Duplication of existing SEO, contact, or modal patterns.
