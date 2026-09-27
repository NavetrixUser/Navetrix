# AGENTS.md

This file is for content and SEO authoring work in this repo.

## Start here

- Read [AGENTS.md](AGENTS.md) and [CLAUDE.md](CLAUDE.md) for the project rules and architecture.
- Keep changes aligned with the repo’s content-driven structure.

## Content and SEO rules

- Service pages are defined in [src/app/services/content.ts](src/app/services/content.ts). Update the content there before changing rendered output.
- Preserve the standard service fields: `h1`, `intro`, `sections`, `process`, `engagement`, `examples`, and `faqs`.
- Add metadata and structured data when creating or editing a page or service entry.
- Follow [src/app/seo.ts](src/app/seo.ts) for canonical URLs, metadata patterns, and JSON-LD usage.
- Do not add unrelated or duplicate content structures.
- Only add real testimonials; keep the testimonials section hidden when the dataset is empty.

## Route and app conventions

- Keep app code under [src/app](src/app); avoid adding a separate `components` or `lib` package.
- Prefer server components for content pages, unless a route genuinely needs client-side rendering.
- Keep metadata in the appropriate route layout or file when a client component cannot export `metadata`.
- Do not create a second contact modal or duplicate modal wiring. The modal is mounted once and opened via `openContactModal()` from [src/app/components/utils.ts](src/app/components/utils.ts).
- Do not add static `public/sitemap.xml` or `public/robots.txt` files; the app generates them dynamically.

## Avoid

- Editing marketing copy without preserving the service-page pattern.
- Adding duplicate SEO schemas or inconsistent route metadata.
- Broad refactors when a content-only change is enough.
- Adding placeholders, fake testimonials, or duplicate service entries.
