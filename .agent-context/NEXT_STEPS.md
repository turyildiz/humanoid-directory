# Next Steps — Humanoid Directory

Last updated: 2026-05-14 by Hermes/Gonzo.

## Current priority

Deepen the source-backed content layer: verify Tier 1 robots/companies, enrich profile fields, and migrate more visible pages from static placeholders into data-driven content while preserving visual parity.

The operating sequence remains:

```text
verified robot/company data
→ website profiles/articles
→ social posts/newsletter
```

## Current implementation baseline

The repo now contains a Next.js App Router application whose live visual layer wraps the imported static HTML frontend files, so staging matches the original designs first. React-native data/filter rebuilds can happen after the visual baseline is preserved.

Production routes:

1. `/`
2. `/robots/`
3. `/robots/[slug]/`
4. `/companies/`
5. `/companies/[slug]/`
6. `/articles/`
7. `/articles/[slug]/`
8. `/about/`
9. `/submit/`
10. `/sitemap.xml`
11. `/robots.txt`

Stack:

- Next.js App Router
- TypeScript
- Tailwind dependency installed; current visual system is implemented in `src/app/globals.css`
- Static export for Cloudflare Pages
- Local typed TS data in `src/data/`

## Immediate priorities

1. Verify and enrich Tier 1 profile content.
   - Tesla Optimus / Tesla, Figure 02 / Figure AI, Unitree G1 / Unitree Robotics, Digit / Agility Robotics, and Apollo / Apptronik have received enriched passes.
   - Next best target: 1X NEO / 1X Technologies, then remaining seed profiles.
   - Keep unknown values unknown; do not invent specs.

2. Improve article/content experience.
   - Add more internal links from imported homepage/robot/company pages into `/articles/`.
   - Add article cards to homepage once visual parity can be preserved.
   - Add structured data JSON-LD for articles and entity profiles.

3. Expand toward launch content bar.
   - 20 robots listed.
   - 15 companies listed.
   - 8–10 detailed profiles.
   - At least 3 polished articles live.

4. Deploy to Cloudflare Pages when content/design pass is ready.
   - Build command: `npm run build`
   - Output directory: `out`
   - Production branch: `main`

5. Later: Cloudflare backend layer.
   - D1 for database/admin if needed.
   - R2 for approved robot/company media.
   - Workers/Pages Functions for submissions/admin APIs.

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

## Verification commands

```bash
npm run build
npm test
npm start
```

## Notes

- Keep unknown values unknown; do not invent specs.
- Every factual claim should have a source or be marked unknown/unverified.
- Original static HTML files remain as design references but production implementation now lives under `src/`.
- npm audit currently reports moderate advisories through Next's nested PostCSS dependency; the suggested fix is an invalid major downgrade, so do not apply `npm audit fix --force` blindly.
