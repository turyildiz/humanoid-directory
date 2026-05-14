# Changelog — Humanoid Directory

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
