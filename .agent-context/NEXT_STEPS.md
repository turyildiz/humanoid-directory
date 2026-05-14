# Next Steps — Humanoid Directory

Last updated: 2026-05-14 by Hermes/Gonzo.

## Current priority

Deploy the Cloudflare-first Next.js MVP, then improve verified source-backed data.

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
6. `/about/`
7. `/submit/`
8. `/sitemap.xml`
9. `/robots.txt`

Stack:

- Next.js App Router
- TypeScript
- Tailwind dependency installed; current visual system is implemented in `src/app/globals.css`
- Static export for Cloudflare Pages
- Local typed TS data in `src/data/`

## Immediate priorities

1. Deploy to Cloudflare Pages.
   - Build command: `npm run build`
   - Output directory: `out`
   - Production branch: `main`

2. Connect `humanoid.directory` DNS in Cloudflare.
   - Point the domain to the Cloudflare Pages project.
   - Enable SSL and Cloudflare Web Analytics.

3. Improve the first data/content layer.
   - Verify and refine the 12 seed robot profiles.
   - Add stronger source notes for every spec/claim.
   - Expand toward 20 high-quality profiles before broader launch.

4. Add launch-critical polish.
   - More complete methodology/about page.
   - Better submit/update flow; later Cloudflare Pages Function + Turnstile.
   - Open Graph image and richer structured data.
   - Lighthouse/mobile polish.

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
