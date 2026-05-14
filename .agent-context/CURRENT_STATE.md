# Current State — Humanoid Directory

Last updated: 2026-05-14 by Hermes/Gonzo.

## Product state

Humanoid Directory is in planning/foundation stage with an imported static HTML frontend reference.

Existing source-of-truth files:

- `PRD.md` — full product requirements document for humanoid.directory.
- `homepage-image-prompt.md` — premium homepage design prompt and visual direction.
- `content-social-operating-plan.md` — plan tying website articles and social channels together.
- `docs-website-first-implementation-plan.md` — website-first implementation plan.

Imported frontend files from `https://github.com/turyildiz/humanoid-directory`:

- `Humanoid Directory - Homepage.html`
- `Humanoid Directory - Robots.html`
- `Humanoid Directory - Companies.html`
- `Humanoid Directory - Figure 02.html`
- `Humanoid Directory - Figure AI.html`
- `Humanoid Directory - Robot Card.html`
- `Humanoid Directory - Design System.html`

## Current strategic direction

Turgay decided the website should be built first, with social/content downstream of verified website data.

The project is going all-in as a multi-platform humanoid robotics media/directory operation:

- Website: source-backed directory and articles.
- X/Twitter: research, discovery, conversation, fast updates.
- LinkedIn: professional/investor/enterprise credibility.
- Instagram: visual education and carousel distribution.
- TikTok: mainstream short-form discovery.
- Facebook: cross-post/community distribution.
- Newsletter: owned audience via Humanoid Weekly.

## Repo state

Local path: `/home/repos/humanoid-directory`

GitHub remote:

- `origin`: `https://github.com/turyildiz/humanoid-directory.git`
- Default branch: `main`

The repo now contains static HTML frontend pages plus planning/context docs. It is not yet a Next.js/app-code implementation.

A pre-import backup was created under `/home/hermes/backups/` before importing the frontend.

## Content/data state

Seed robot and company candidates are listed in `PRD.md`, but not yet verified or transformed into structured data files.

Turgay has a large list of robotics accounts to use as source material, but it has not been imported yet.

## Shared knowledge base

Social/content strategy notes live under:

- `/home/knowledge-base/social-media-twitter/`

Humanoid-specific social strategy:

- `/home/knowledge-base/social-media-twitter/ideas/humanoid-directory-social-strategy.md`

## Guardrails

- Humanoid robots only; avoid diluting into generic AI/robotics.
- Every factual claim needs sources or uncertainty labels.
- Do not store secrets in repo/context files.
- Do not paste or request social/API secrets in chat.
- Do not install new tooling without Turgay's explicit confirmation.
- Preserve planning/context files when working with imported frontend assets.
