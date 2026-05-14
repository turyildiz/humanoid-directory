# Cloudflare-First Architecture — Humanoid Directory

Last updated: 2026-05-14 by Hermes/Gonzo.

## Decision

Humanoid Directory should be built as a Cloudflare-first public directory product.

## Recommended production stack

### Frontend/application

- Next.js App Router
- TypeScript
- Tailwind CSS
- Static export for the first public MVP
- Local typed TS data files for seed robots, companies, sources, and timeline updates
- MDX/Markdown later for articles and weekly updates

### Deployment

- Cloudflare Pages for the public site
- Build command: `npm run build`
- Output directory: `out`
- Static export first, to stay simple, fast, free/cheap, and robust

### Cloudflare services roadmap

Phase 1 — public static MVP:

- Cloudflare Pages
- Cloudflare DNS for `humanoid.directory`
- Cloudflare Web Analytics
- Static sitemap and robots.txt

Phase 2 — submissions/newsletter:

- Cloudflare Pages Functions or Workers for form endpoints
- Cloudflare Turnstile for spam protection
- Email/newsletter provider integration only after the public site shape is stable

Phase 3 — database/admin:

- Cloudflare D1 for structured directory data, if Cloudflare-first remains the priority
- Cloudflare R2 for approved robot/company media assets
- Cloudflare Workers/Pages Functions for admin APIs
- Lightweight single-user admin auth before anything private is exposed

Alternative later:

- If D1/admin ergonomics become limiting, Supabase Postgres remains the fallback for database/admin while keeping Cloudflare Pages for the public frontend.

## Why this is the best fit

- The PRD requires every page to be indexable; static Next.js pages fit this perfectly.
- The MVP needs speed, SEO, credibility, and clean structured data more than backend complexity.
- Cloudflare Pages has a strong free plan and excellent global performance.
- Static export avoids edge-runtime/package complexity while the site is still content/data-driven.
- Local typed data keeps every factual claim reviewable in Git.
- Cloudflare D1/R2/Workers give a natural upgrade path when admin, submissions, and media workflows are needed.

## Implementation direction

Convert the existing static HTML design into a real Next.js App Router site:

```text
src/app/page.tsx
src/app/robots/page.tsx
src/app/robots/[slug]/page.tsx
src/app/companies/page.tsx
src/app/companies/[slug]/page.tsx
src/app/about/page.tsx
src/app/submit/page.tsx
src/components/*
src/data/*
src/lib/*
```

Use the current static HTML files as the visual reference. Do not keep the production implementation as copied HTML long-term.

## Guardrails

- No backend/admin/database until the public MVP and data model are proven.
- No invented specs, deployment claims, prices, partnerships, or funding.
- Every factual robot/company claim needs a source or an unknown/unverified label.
- Do not install or scaffold packages until Turgay explicitly confirms the package setup step.
