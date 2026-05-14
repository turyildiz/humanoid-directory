# Changelog — Humanoid Directory

## 2026-05-14 — Articles and data-driven content profiles added

- Added `src/data/articles.ts` with five initial source-backed editorial pieces.
- Added `src/data/timeline.ts` for source-linked robot/company timeline events.
- Added `/articles/` and `/articles/[slug]/` static routes.
- Added generic data-driven robot/company profile renderers for non-imported profile pages.
- Updated sitemap and tests to cover article routes and generated profiles.
- Wired imported placeholder links so Compare routes to the Optimus/Figure article and Use cases/Newsletter-style placeholders route to `/articles/`.
- Verified `npm run build && npm test` and live staging content routes.

## 2026-05-14 — Content production plan started

- Added `docs-content-production-plan.md` with editorial standards, first sprint priorities, profile/article targets, data model improvements, and launch content quality bar.
- Added `content-backlog.csv` with Tier 1 robot/company/profile/article production queue.
- Content direction: source-backed directory first, then articles/social/newsletter derived from verified website content.


## 2026-05-14 — Featured cards linked to profile pages

- Converted known imported card blocks into clickable card links while preserving the imported visual design.
- Linked Figure 02 cards on the homepage and robots page to `/robots/figure-02/`.
- Linked the Figure AI company card on the companies page to `/companies/figure-ai/`.
- Added static export checks for those card links and verified local/public HTML contains the expected hrefs.

## 2026-05-14 — Placeholder nav links routed

- Rewrote key imported `href="#"` placeholders at render time so main navigation and core CTAs route to clean Next pages (`/`, `/robots/`, `/companies/`, `/submit/`, `/about/`, profiles, design-system/component demos).
- Added static export checks that exported homepage/robots/companies pages include routed navigation links.
- Verified `npm run build && npm test` passes and confirmed both local port `3040` and `https://humanoid.heyturgay.com/` include routed nav hrefs.

## 2026-05-14 — Staging visual layer realigned to imported HTML

- Replaced the live Next.js route rendering for `/`, `/robots/`, `/companies/`, `/robots/figure-02/`, `/companies/figure-ai/`, `/design-system/`, and `/components/robot-card/` with wrappers around the imported static HTML files.
- Removed the custom Next.js layout header/footer from those rendered pages so the supplied frontend design is the visible source of truth.
- Rewrote legacy `.html` links inside the imported pages to clean app routes.
- Verified `npm run build` and `npm test` pass after the visual realignment.

## 2026-05-14 — Next.js Cloudflare app scaffolded and implemented

- Installed/scaffolded the confirmed Next.js stack: Next.js App Router, React, TypeScript, Tailwind/PostCSS tooling, ESLint config dependency.
- Converted the imported static HTML design into a real data-driven Next.js app under `src/`.
- Added Cloudflare Pages static export config with `output: 'export'` and output directory `out/`.
- Added public routes for homepage, robot directory, robot profiles, company directory, company profiles, methodology, and submit placeholder.
- Added typed seed data for 12 humanoid robots, companies, and sources.
- Added generated `sitemap.xml` and `robots.txt` metadata routes.
- Added tests for app structure/data and static export output.
- Verified `npm run build`, `npm test`, and local HTTP serving of exported routes.

## 2026-05-14 — Cloudflare-first stack decision recorded

- Decided Humanoid Directory should be a Cloudflare-first project.
- Recorded the chosen production direction: Next.js App Router + TypeScript + Tailwind + static export + Cloudflare Pages.
- Added `docs-cloudflare-first-architecture.md` with deployment and Cloudflare roadmap.
- Updated `.agent-context/DECISIONS.md` with the architecture decision.

## 2026-05-14 — Static frontend implemented with production routes

- Converted imported static HTML files into clean production routes:
  - `/`
  - `/robots/`
  - `/companies/`
  - `/robots/figure-02/`
  - `/companies/figure-ai/`
  - `/design-system/`
  - `/components/robot-card/`
- Added `package.json` with no-install scripts: `npm test` and `npm run serve`.
- Added `tests/static_site_check.py` to verify routed pages, titles, and legacy filename links.
- Verified all production routes return HTTP 200 locally via `python3 -m http.server`.

## 2026-05-14 — Static HTML frontend imported

- Connected `/home/repos/humanoid-directory` to `https://github.com/turyildiz/humanoid-directory.git` on branch `main`.
- Imported the static HTML frontend pages from GitHub without deleting existing planning/context files.
- Preserved existing docs: `PRD.md`, `AGENTS.md`, `homepage-image-prompt.md`, `content-social-operating-plan.md`, `docs-website-first-implementation-plan.md`, and `.agent-context/`.
- Created a pre-import backup under `/home/hermes/backups/`.
- Updated current state and next steps to reflect that the repo now has a static HTML frontend reference, not yet a Next.js implementation.

## 2026-05-12 — Website-first priority recorded

- Recorded Turgay's clarification that the website should be built first.
- Added `docs-website-first-implementation-plan.md` with proposed Next.js/static-data MVP plan.
- Updated `.agent-context/NEXT_STEPS.md` to prioritize website scaffolding before social expansion.
- Updated `.agent-context/DECISIONS.md` with the website-first decision.

## 2026-05-12 — Social/content strategy connected to project

- Added `AGENTS.md` project guidance.
- Added `.agent-context/` files for durable project context.
- Added `content-social-operating-plan.md` tying Humanoid Directory website, articles, and multi-platform social channels together.
- Recorded decision that website and social media should be developed as one combined operation.
- Documented next steps for importing Turgay's robotics account list and creating the first content batch.
