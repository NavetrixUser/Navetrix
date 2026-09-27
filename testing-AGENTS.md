# AGENTS.md

This file is for testing work in this repo.

## Start here

- Read [AGENTS.md](AGENTS.md) for the broader project context.
- Prefer the smallest relevant validation before broader test runs.

## Test commands

- `npm test` — run Vitest once.
- `npx vitest run src/app/...` — run a focused Vitest file or folder.
- `npx playwright test e2e/<spec>.spec.ts` — run a targeted browser test.
- `npm run test:e2e:ui` — open the interactive Playwright runner.

## Testing expectations

- Keep tests focused on behavior, not implementation details.
- For API route changes, test the route handler directly with `fetch` stubs rather than starting a local server.
- Do not make assumptions about static export behavior for features that require server support, especially [src/app/api/contact/route.ts](src/app/api/contact/route.ts).
- If a new page or route is added, keep sitemap and robots behavior aligned with [src/app/sitemap.ts](src/app/sitemap.ts) and [src/app/robots.ts](src/app/robots.ts).
- Test the affected route or component directly; avoid broad suite runs unless the change is wide-reaching.

## Avoid

- Broad end-to-end runs for small local fixes.
- Mock-heavy tests that assert on mock-only behavior instead of real outcomes.
- Testing routes through a dev server when a direct `fetch` stub is enough.
