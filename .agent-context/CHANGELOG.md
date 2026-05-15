# Changelog — Humanoid Directory

## 2026-05-15 — Robots/companies mobile horizontal scroll fix

- Fixed the imported robots and companies index pages so their mobile filter/sidebar and footer layouts no longer create horizontal scroll on real phone-width viewports.
- Added directory-specific mobile overflow overrides after imported inline styles for `.page-body`, `.sidebar`, filter groups/lists/items/search, cards/grids, and footer links.
- Extended `tests/responsive_site_check.py` with robots/companies overflow guard markers so this regression is covered alongside the previous homepage overflow guard.
- Verified with `npm run build && npm test`, all 40 exported routes over the local static server, headless 393px viewport measurements showing `/robots/` and `/companies/` at `scrollWidth == clientWidth == 393`, and a real 393px robots screenshot review.

## 2026-05-15 — Navigation and content discoverability pass

- Added a mobile `Menu` / hamburger navigation pattern across imported static pages and generated robot/company/article pages so mobile users are not stranded without primary navigation.
- Added real discovery sections to the homepage, robots index, and companies index so enriched robot profiles, company profiles, and articles are reachable from visible cards instead of hidden only in the sitemap.
- Rewrote remaining homepage/robots/companies prototype `href="#"` placeholders into production routes for the public browsing flow.
- Extended static and responsive checks to require mobile navigation and real discoverability links for key robot, company, and article pages.
- Verified with `npm run build`, `npm test`, all exported public route smoke checks, link audits showing zero placeholder links on homepage/robots/companies, and 393px mobile screenshots with the menu closed and open.

## 2026-05-15 — Homepage mobile overflow fix

- Fixed the imported homepage hero on real mobile widths by adding a homepage-specific mobile overflow override after imported inline styles.
- The fix contains the nav/search/header into a single-column mobile shell, constrains the live status pill, wraps hero CTA buttons, and keeps the hero search within the viewport.
- Extended `tests/responsive_site_check.py` with homepage-specific overflow guard markers so this regression is not missed by structural responsive checks again.
- Verified with `npm run build`, `npm test`, a local headless 393px-wide screenshot review, and full exported-route HTTP smoke checks.

## 2026-05-15 — Site-wide responsive QA and workflow guardrail

- Added `tests/responsive_site_check.py` and wired it into `npm test` so every exported public page is checked for viewport metadata, responsive CSS/media-query coverage, fluid sizing, responsive nav shell, and family-specific responsive layout markers.
- Wrapped `/about/` and `/submit/` in the shared responsive `ContentLayout` so they have the same mobile-safe nav/footer chrome as articles and data-driven pages.
- Smoke-checked all 40 exported public routes from `out/` locally after build; every route returned HTTP 200 with viewport metadata.
- Updated the agent workflow so future changes require responsive checks across page families, not only desktop/static route checks.

## 2026-05-15 — Responsive frontend parity fix for generated profiles

- Reworked generated robot/company profile pages so non-imported profiles now use an imported-frontend-style layout rather than the generic React profile shell.
- Added shared responsive CSS for data-driven profile pages and improved mobile/tablet behavior for global navigation, cards, article layouts, profile facts, sidebars, sources, and footer sections.
- Added regression checks that reject the old generic profile markers and require imported-style profile structure plus mobile breakpoints.
- Verified `npm run build`, `npm test`, and local static routes for TALOS/PAL Robotics plus representative robot/company/index pages.

## 2026-05-15 — PAL Robotics TALOS research platform added

- Added a source-backed TALOS robot profile as PAL Robotics’ full-size torque-controllable humanoid research platform.
- Added official/credible source records for the PAL Robotics homepage, About page, TALOS product page, and IEEE Spectrum Robots Guide TALOS profile.
- Added public TALOS specs with source caution: 175 cm height, 95 kg weight, 6 Kg per-arm payload, 1.5h walking / 3h standby battery context, 32 DOF, ROS/Ubuntu/real-time OS, EtherCAT, torque sensing, and open-source simulation model context.
- Added PAL Robotics company profile with Barcelona, Spain context, service-robotics history since 2004, and careful TALOS quote-based availability wording.
- Added TALOS/PAL Robotics timeline milestones and updated the content backlog status.
- Updated tests to verify TALOS/PAL Robotics typed data and static export output.
- Verified `npm run build && npm test` and local routes for `/robots/talos/` and `/companies/pal-robotics/`.

## 2026-05-15 — 1X EVE predecessor/enterprise profile added

- Added a source-backed EVE robot profile as 1X Technologies’ wheeled self-balancing enterprise humanoid predecessor to NEO.
- Added official/credible source records for the 1X EVE page, 1X About timeline, 1X Series B announcement, and IEEE Spectrum Robots Guide EVE profile.
- Added reported public EVE specs with source caution: 183 cm height, 83 kg weight, 14.4 km/h / ~4 m/s speed, 25 DOF, Revo1 quasi direct-drive actuators, HDR panoramic cameras, and shared-autonomy operation.
- Updated 1X Technologies company profile to distinguish EVE enterprise/logistics/guarding/customer-facility lineage from current NEO home-robot and Redwood AI direction.
- Added EVE timeline milestones and refreshed methodology/status/market-map article references.
- Updated tests to verify EVE typed data and static export output.
- Verified `npm run build && npm test` and local routes for `/robots/eve/` and `/companies/1x-technologies/`.

## 2026-05-14 — Figure 01 predecessor profile added

- Added a source-backed Figure 01 robot profile as Figure AI’s first public humanoid predecessor, now labeled discontinued/superseded rather than current-generation.
- Added Figure 01 launch, BMW agreement, OpenAI speech-to-speech demo, and IEEE Spectrum Robots Guide source records.
- Added reported Figure 01 specs with source caution: 168 cm height, 60 kg weight, 20 kg payload, 4.3 km/h / 1.2 m/s speed, 40+ DOF, and about five hours of battery runtime.
- Updated Figure AI company data to include Figure 01 predecessor context alongside Figure 02 retired/pilot evidence and Figure 03/Helix current direction.
- Added Figure 01 timeline milestones and refreshed article references so methodology, status, comparison, and market-map content can link the predecessor history.
- Updated tests to verify Figure 01 typed data and static export output.
- Verified `npm run build && npm test` and local routes for `/robots/figure-01/` and `/companies/figure-ai/`.

## 2026-05-14 — Unitree H1 and Unitree Robotics profiles deepened

- Deepened the Unitree H1 robot profile with official Unitree H1/H1-2 product-page evidence, shop-listing evidence, public H1 specs, H1-2 variant context, SEO metadata, and verification notes.
- Added H1 public details including about 180 cm height, about 47 kg weight, 3.3 m/s moving speed, potential mobility above 5 m/s, 864 Wh quick-replace battery, 360 N·m maximum joint torque, 3D LiDAR + depth-camera perception, Intel i5/i7 and optional NVIDIA Jetson Orin NX compute context, and H1-2 optional dexterous-hand context.
- Added primary Unitree source records for the H1 shop listing and Unitree News Center, and updated the H1 product source title to H1/H1-2.
- Expanded the Unitree Robotics company profile with H1/H1-2, H2/R1 product-family context, full-size bipedal-mobility focus, and cautious treatment of exact purchase terms, delivered configurations, customer usage, and deployment-scale unknowns.
- Added Unitree H1/H1-2 timeline milestones and refreshed methodology/status/market-map article references.
- Updated tests to verify H1 enrichment appears in typed data and static export.
- Verified `npm run build && npm test` and local routes for `/robots/unitree-h1/` and `/companies/unitree-robotics/`.

## 2026-05-14 — EngineAI PM01 and EngineAI profiles enriched

- Enriched the EngineAI PM01 robot profile with official EngineAI source evidence, public ¥188,000 purchase-page pricing, product-page specs, 140 cm / 43 kg / 24 DOF / >2 m/s / ~2 hour battery details, NVIDIA Jetson Orin NX education-edition compute context, openness/secondary-development positioning, SEO metadata, and verification notes.
- Added primary EngineAI source records for the English homepage, PM01 product page, product purchase page, About EngineAI page, and media/news page.
- Expanded EngineAI company profile with Shenzhen/October 2023 founding context, PM01/SE01/T800/SA01/S2/JS01 product-family positioning, commercially listed stage wording, and cautious treatment of delivery, export, support, production-volume, and customer-usage unknowns.
- Added EngineAI/PM01 timeline milestones and refreshed methodology/status/market-map article references.
- Updated tests to verify PM01 and EngineAI enrichment appears in typed data and static export.
- Verified `npm run build && npm test` and local routes for `/robots/pm01/` and `/companies/engineai/`.

## 2026-05-14 — UBTECH Walker S and UBTECH Robotics profiles enriched

- Enriched the UBTECH Walker S robot profile with official UBTECH source evidence, Walker S/S1/S2 product-line context, industrial-solution cases, public 170 cm / 41 servo-joint details, ROSA 2.0 and perception/navigation capabilities, SEO metadata, cautious pilot/deployment-stage wording, and verification notes.
- Added primary UBTECH source records for the homepage, Walker S, Walker S1, Walker S2, humanoid industrial solutions, company profile, and HKEX listing/news context.
- Expanded UBTECH Robotics company profile with Shenzhen/founding context, HKEX listing context, Walker-series industrial positioning, robotics/software capability notes, and cautious treatment of customer/fleet-scale unknowns.
- Added UBTECH/Walker S timeline milestones and refreshed methodology/status/market-map article references.
- Updated tests to verify Walker S and UBTECH Robotics enrichment appears in typed data and static export.
- Verified `npm run build && npm test` and local routes for `/robots/walker-s/` and `/companies/ubtech-robotics/`.

## 2026-05-14 — Fourier GR-1 and Fourier Intelligence profiles enriched

- Enriched the Fourier GR-1 robot profile with official Fourier source evidence, GRx product-series context, 2023 rollout language, public 165 cm / 55 kg / 44 joints / 5 km/h specs, Fourier Smart Actuator and sensor details, SEO metadata, cautious commercial/platform-listed wording, and verification notes.
- Added primary Fourier source records for the homepage, GRx series page, GR-1 product page, Fourier Lab, About Fourier, and resources/documentation page.
- Expanded Fourier Intelligence company profile with Shanghai/founding context, rehabilitation robotics roots, GRx series positioning, company-reported institution/country footprint, and cautious treatment of mass-production claims.
- Added Fourier/GR-1 timeline milestones and refreshed methodology/status/market-map article references.
- Updated tests to verify Fourier GR-1 and Fourier Intelligence enrichment appears in typed data and static export.
- Verified `npm run build && npm test` and local routes for `/robots/gr-1/` and `/companies/fourier-intelligence/`.

## 2026-05-14 — Boston Dynamics Electric Atlas and Boston Dynamics profiles enriched

- Enriched the Electric Atlas robot profile with official Boston Dynamics source evidence, all-electric Atlas launch context, hydraulic Atlas retirement, Hyundai field-testing language, autonomous part-sequencing demo evidence, 2026 product-version claims, public 56 DOF / 50 kg lift / 2.3 m reach details, SEO metadata, cautious pilot/productization wording, and verification notes.
- Added primary Boston Dynamics source records for the Atlas product page, electric Atlas launch post, Atlas Goes Hands On video page, 2026 product-version announcement, Atlas evolution article, and enterprise humanoid design webinar.
- Expanded Boston Dynamics company profile with Waltham context, enterprise humanoid strategy, Spot/Stretch productization background, Orbit software integration, Hyundai ownership/context, and stage/program notes.
- Added Boston Dynamics/Atlas timeline milestones and refreshed methodology/status/market-map article references.
- Updated tests to verify Electric Atlas and Boston Dynamics enrichment appears in typed data and static export.
- Verified `npm run build && npm test` and local routes for `/robots/electric-atlas/` and `/companies/boston-dynamics/`.

## 2026-05-14 — Sanctuary AI Phoenix and Sanctuary AI profiles enriched

- Enriched the Phoenix robot profile with official Sanctuary source evidence, Gen 8 Phoenix context, Carbon AI positioning, tactile-sensor and hydraulic-hand manipulation evidence, Magna partnership context, Microsoft/Hannover Messe demo evidence, cautious pilot/commercialization wording, SEO metadata, and verification notes.
- Added primary Sanctuary source records for the homepage, technology page, Gen 8 Phoenix release, touch-sensor update, hydraulic-hand reinforcement-learning update, Magna partnership, and Microsoft/Messe demo post.
- Expanded Sanctuary AI company profile with Vancouver/founding context, industrial humanoid strategy, Carbon AI focus, dexterous manipulation emphasis, and stage/program notes.
- Added Sanctuary/Phoenix timeline milestones and refreshed methodology/status/market-map article references.
- Updated tests to verify Phoenix and Sanctuary enrichment appears in typed data and static export.
- Verified `npm run build && npm test` and local routes for `/robots/phoenix/` and `/companies/sanctuary-ai/`.

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
