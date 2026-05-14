# Changelog — Humanoid Directory

## 2026-05-14 — 1X NEO and 1X Technologies profiles enriched

- Enriched the 1X NEO robot profile with official 1X source evidence, public home-robot order terms, public hardware specs, Redwood AI context, scheduled Expert Mode caveats, SEO metadata, verification notes, and related robots.
- Added primary 1X source records for the homepage, NEO product page, Order NEO page, Artificial Intelligence page, and About page.
- Expanded 1X Technologies company profile with Norway/Silicon Valley context, home-humanoid commercialization positioning, Redwood AI focus, order-program stage, and early-autonomy caveats.
- Added 1X/NEO timeline milestones and refreshed methodology/status/market-map article references.
- Updated tests to verify NEO and 1X enrichment appears in typed data and static export.
- Verified `npm run build && npm test` and local staging routes for `/robots/neo/` and `/companies/1x-technologies/`.

## 2026-05-14 — Figure 02 and Figure AI source-backed alignment

- Enriched Figure 02 typed data with Figure primary sources, BMW deployment evidence, Figure 03 supersession context, Helix/BotQ research and manufacturing context, cautious retired/superseded status, SEO metadata, and verification notes.
- Added primary Figure source records for the homepage/news index, BMW production update, Helix, reinforcement-learning walking, BotQ, Series C, and Figure 03 announcement.
- Expanded Figure AI company data with current Figure 03 / Helix direction, BotQ manufacturing context, Series C funding note, and separation between Figure 02 historical deployment evidence and current-generation work.
- Preserved imported Figure 02 and Figure AI HTML visual pages while appending source-backed status update panels to resolve current-status drift without redesigning the pages.
- Updated Figure timeline events and refreshed methodology/status/comparison/market-map article references.
- Updated tests to verify Figure source-backed alignment appears in typed data and static output.
- Verified `npm run build && npm test` and local staging routes for `/robots/figure-02/`, `/companies/figure-ai/`, and `/articles/current-status-of-figure-02/`.

## 2026-05-14 — Apptronik Apollo and Apptronik profiles enriched

- Enriched the Apollo robot profile with official Apptronik source evidence, public specs, industrial/logistics use-case positioning, partner pilot/commercialization wording, cautious pilot-stage notes, SEO metadata, and related robots.
- Added primary Apptronik source records for the homepage, Apollo product page, Apollo unveiling release, Mercedes-Benz commercial agreement, GXO proof-of-concept, Jabil production collaboration, and Series A financing release.
- Expanded Apptronik company profile with Austin/UT Austin origin context, NASA Valkyrie-related background, Apollo production scaling focus, commercialization-stage label, and funding/program notes.
- Added Apollo/Apptronik timeline milestones and updated methodology/status/market-map article source references.
- Updated tests to verify Apollo and Apptronik enrichment appears in static export.
- Verified `npm run build && npm test` and local staging routes for `/robots/apollo/` and `/companies/apptronik/`.

## 2026-05-14 — Agility Digit and Agility Robotics profiles enriched

- Enriched the Digit robot profile with official Agility source evidence, logistics/manufacturing positioning, Arc workflow software context, customer-activity wording, cautious pilot-stage notes, SEO metadata, and related robots.
- Added primary Agility source records for the homepage, Digit/product page, Humanoid Solutions page, RoboFab page, and press releases.
- Expanded Agility Robotics company profile with humanoid-specific overview, Salem/RoboFab context, deployment-oriented stage, and program notes.
- Added Digit/Agility timeline milestones and updated methodology/market-map article source references.
- Updated tests to verify Digit and Agility enrichment appears in static export.
- Verified `npm run build && npm test` and local staging routes for `/robots/digit/` and `/companies/agility-robotics/`.

## 2026-05-14 — Unitree G1 and Unitree Robotics profiles enriched

- Enriched the Unitree G1 robot profile with official commercial-listing evidence, public product-page specs, cautious configuration notes, SEO metadata, related robots, and verification notes.
- Added primary Unitree source records for the homepage, G1 product page, G1 shop listing, and H1 product page.
- Expanded Unitree Robotics company profile with humanoid-specific overview, stage, focus areas, and commercial-listing caveats.
- Added Unitree/G1 timeline milestones and updated methodology/market-map article source references.
- Updated tests to verify Unitree enrichment appears in static export.
- Verified `npm run build && npm test` and local staging routes for `/robots/unitree-g1/` and `/companies/unitree-robotics/`.

## 2026-05-14 — Tesla Optimus and Tesla profiles enriched

- Enriched the Tesla Optimus robot profile with a fuller source-backed overview, cautious availability wording, verification notes, SEO metadata, and related robots.
- Added primary Tesla source records for AI Day 2022, Tesla Bot Update, Optimus Gen 2, and Sort & Stretch official videos.
- Expanded Tesla company profile with program overview, stage, focus areas, and humanoid-specific funding/program note.
- Added Tesla/Optimus timeline milestones and updated comparison article source references.
- Updated profile rendering so company program/funding notes are visible on generated company pages.
- Updated tests to verify the Tesla enrichment appears in static export.
- Verified `npm run build && npm test` and local staging routes for `/robots/optimus/` and `/companies/tesla/`.

## 2026-05-14 — Agent workflow updated

- Added an explicit agent workflow to `AGENTS.md` covering context loading, git checks, skill usage, visual parity preservation, source-backed content production, implementation/testing, docs updates, commit/push, and concise handoff expectations.
- Clarified that imported static HTML remains the visual source of truth unless Turgay explicitly approves a redesign.

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
