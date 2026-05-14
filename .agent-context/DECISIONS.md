# Decisions — Humanoid Directory

## 2026-05-14 — Cloudflare-first architecture

Decision: Build Humanoid Directory as a Cloudflare-first project.

Chosen stack:
- Next.js App Router
- TypeScript
- Tailwind CSS
- Static export for the first MVP
- Local typed TS data first
- Cloudflare Pages for deployment

Rationale:
- Cloudflare has a strong free plan and excellent global performance.
- The PRD needs indexable, SEO-friendly pages; static Next.js output fits this well.
- The MVP is primarily public directory/content pages, so backend complexity should wait.
- Local typed data keeps source-backed facts reviewable in Git.
- Cloudflare has a natural upgrade path: Pages → Functions/Workers → D1/R2/Turnstile.

Implementation implication:
- Convert the imported HTML design into a real Next.js App Router app.
- Deploy the public MVP on Cloudflare Pages with output directory `out`.
- Add Cloudflare D1/R2/Workers later only when submissions/admin/media workflows require it.
- Keep Supabase/Postgres as a fallback only if Cloudflare D1/admin ergonomics become limiting.

See: `docs-cloudflare-first-architecture.md`.

## 2026-05-12 — Website first

Decision: Build the Humanoid Directory website before expanding social account operations.

Rationale:
- The website is the durable asset and source-backed authority hub.
- Social channels should distribute verified website data/articles, not exist as disconnected content accounts.
- A visible MVP will clarify brand, design, data model, SEO, and article structure before automation.

Implementation implication:
- Proposed first stack: Next.js App Router + TypeScript + Tailwind + static seed data.
- Start with homepage, robots directory, robot profiles, companies directory, company profiles, about/methodology, and submit placeholder.
- Defer social account creation/API automation until website MVP is underway.

## 2026-05-12 — Website and social media are one operation

Decision: Build Humanoid Directory website and social media presence together, but with the website as the hub.

Rationale:
- The website needs source-backed articles and fresh updates.
- Social channels provide discovery, distribution, community feedback, and source discovery.
- Turgay has a large robotics account list that can seed monitoring and content.

Implications:
- Content planning should produce both website articles and social posts.
- X/Twitter starts as the primary research/conversation channel.
- Expand to LinkedIn, Instagram, TikTok, Facebook, and newsletter after the website foundation.
- Every social post should ideally connect back to directory data, articles, or source-backed insights.

## Existing product decision — Focus on humanoid robots only

Decision: Humanoid Directory stays focused on humanoid robots and companies building them.

Non-goals:
- AI agents directory
- chatbot/tool directory
- generic robotics directory
- sci-fi fan wiki
- hype blog
