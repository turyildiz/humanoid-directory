# Next Steps — Humanoid Directory

Last updated: 2026-05-14 by Hermes/Gonzo.

## Current priority

Website first.

Turgay clarified: build the Humanoid Directory website before expanding social account operations.

Social remains part of the broader plan, but it is downstream of the website:

```text
verified robot/company data
→ website profiles/articles
→ social posts/newsletter
```

## Current frontend baseline

The GitHub frontend has been imported into `/home/repos/humanoid-directory` without deleting the existing planning/context files.

Static HTML reference pages now available:

1. `Humanoid Directory - Homepage.html`
2. `Humanoid Directory - Robots.html`
3. `Humanoid Directory - Companies.html`
4. `Humanoid Directory - Figure 02.html`
5. `Humanoid Directory - Figure AI.html`
6. `Humanoid Directory - Robot Card.html`
7. `Humanoid Directory - Design System.html`

## Immediate priorities

1. Review the imported static HTML frontend.
   - Identify reusable visual system, sections, cards, typography, navigation, and data structures.
   - Check whether any claims/specs in the HTML need source verification before publishing.

2. Decide implementation path.
   - Option A: keep static HTML temporarily for visual review.
   - Option B: convert the HTML into a proper Next.js App Router project.
   - Proposed production path remains: Next.js App Router + TypeScript + Tailwind + static seed data first.
   - Do not install/scaffold packages until Turgay explicitly confirms.

3. Create first structured seed dataset.
   - Start with 12 high-recognition humanoid robots.
   - Keep unknown values unknown.
   - Add sources for every factual claim.

4. Build first visible MVP.
   - Homepage
   - Robot directory
   - Robot detail pages
   - Company directory
   - Company detail pages
   - About/methodology
   - Submit/update placeholder
   - SEO metadata and sitemap

5. Then resume content/social expansion.
   - Turgay's robotics account list becomes source monitoring input.
   - Social posts should point back to website pages/articles.

## First seed robot list

1. Tesla Optimus
2. Figure 02
3. Unitree G1
4. Unitree H1
5. Agility Robotics Digit
6. Apptronik Apollo
7. 1X NEO
8. Sanctuary AI Phoenix
9. Boston Dynamics Electric Atlas
10. Fourier GR-1
11. UBTECH Walker S
12. EngineAI PM01

Note: Verify/refine the seed list before turning it into structured data.

## Needed from Turgay next

If converting the static HTML into a Next.js application, get explicit confirmation before any package install/scaffolding.

Safe next command from Turgay:

```text
Confirmed, convert the Humanoid Directory HTML frontend into a Next.js app.
```

Optional but helpful:

- Preferred deployment target: Vercel, Cloudflare Pages, VPS, etc.
- Whether public brand/domain copy should be exactly `Humanoid Directory` / `humanoid.directory`.

Do not send API keys, passwords, or social account credentials in chat.
