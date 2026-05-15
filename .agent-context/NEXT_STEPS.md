# Next Steps — Humanoid Directory

Last updated: 2026-05-15 by Hermes/Gonzo.

## Current priority

Keep turning the preserved visual frontend into a complete, browsable product: source-backed profile enrichment remains important, but navigation, content discovery, and working user journeys are now first-class requirements before adding more raw content.

The operating sequence remains:

```text
verified robot/company data
→ website profiles/articles
→ social posts/newsletter
```

## Current implementation baseline

The repo now contains a Next.js App Router application whose live visual layer wraps the imported static HTML frontend files for the main pages, and generated robot/company profiles now use an imported-frontend-style responsive shell so enriched pages do not look detached from the approved frontend. React-native data/filter rebuilds can happen after the visual baseline is preserved.

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
   - Tesla Optimus / Tesla, Figure 01 / Figure AI, Figure 02 / Figure AI, Unitree G1 / Unitree Robotics, Unitree H1 / Unitree Robotics, Digit / Agility Robotics, Apollo / Apptronik, 1X EVE / 1X Technologies, 1X NEO / 1X Technologies, Sanctuary AI Phoenix / Sanctuary AI, Boston Dynamics Electric Atlas / Boston Dynamics, Fourier GR-1 / Fourier Intelligence, UBTECH Walker S / UBTECH Robotics, EngineAI PM01 / EngineAI, and PAL Robotics TALOS / PAL Robotics have received enriched/source-backed passes.
   - Next best target: expand the launch set toward 20 robots with another source-backed humanoid profile from the backlog/research set.
   - Keep unknown values unknown; do not invent specs.

2. Improve product navigation and content experience.
   - Treat broken/disconnected navigation as launch-blocking, not cosmetic.
   - Keep homepage, robots index, companies index, articles, and generated profiles mutually linked with visible cards/CTAs.
   - Perform mobile browser review after deploy; automated checks now cover mobile menu presence and key discovery links, but visual QA should confirm the menu and discovery sections feel usable.
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
2. Figure 01
3. Figure 02
4. Unitree G1
5. Unitree H1
6. Agility Robotics Digit
7. Apptronik Apollo
8. 1X EVE
9. 1X NEO
10. Sanctuary AI Phoenix
11. Boston Dynamics Electric Atlas
12. Fourier GR-1
13. UBTECH Walker S
14. EngineAI PM01
15. PAL Robotics TALOS

## Verification commands

```bash
npm run build
npm test
npm start
```

For frontend/layout work, `npm test` must include the responsive audit and the handoff should mention whether all exported public routes were smoke-checked locally. Browser/real-device QA is still recommended before launch; when the user reports a visual mobile issue, verify with an actual narrow viewport screenshot/render and compare `scrollWidth` to `clientWidth` on the affected route, not only structural responsive markers.

## Notes

- Keep unknown values unknown; do not invent specs.
- Every factual claim should have a source or be marked unknown/unverified.
- Original static HTML files remain as design references but production implementation now lives under `src/`.
- npm audit currently reports moderate advisories through Next's nested PostCSS dependency; the suggested fix is an invalid major downgrade, so do not apply `npm audit fix --force` blindly.
