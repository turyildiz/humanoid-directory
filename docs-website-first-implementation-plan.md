# Website-First Implementation Plan

> **For Hermes:** Website comes before social-channel buildout. Use this plan to scaffold and ship the public Humanoid Directory MVP first, then feed social from website content.

**Goal:** Build a polished first version of `humanoid.directory` with homepage, robot directory, company directory, robot/company profile pages, source-backed seed data, SEO basics, and newsletter/submission placeholders.

**Architecture:** Start with a static-data Next.js app so we can move fast, keep every page indexable, and avoid database/admin complexity on day one. Store initial robots, companies, sources, and timeline updates as typed local data files. Add database/admin later after the public product shape and data model are proven.

**Tech Stack:** Proposed: Next.js App Router, TypeScript, Tailwind CSS, static JSON/TS data, MDX or markdown articles later. Node and npm are already available on this machine. New package installation/scaffolding requires Turgay's explicit confirmation before execution.

---

## Product priority change

Turgay's latest direction: build the website first.

Social still matters, but it becomes downstream of the website:

```text
verified robot/company data
→ website pages/articles
→ social posts/newsletter
```

Do not spend time creating social accounts or API automations until the website MVP is underway.

## MVP scope for website-first build

### Include now

- Homepage with premium hybrid dark/light design.
- Robot directory with cards, search/filter UI.
- Robot detail pages.
- Company directory.
- Company detail pages.
- Source-backed seed data for first 10-20 robots/companies.
- Clear status taxonomy: concept/prototype/research/pilot/commercial/paused/discontinued/unknown.
- Methodology/about page.
- Submit/update placeholder form.
- Newsletter placeholder CTA.
- SEO metadata, sitemap, robots.txt.

### Defer

- Full admin CRUD.
- Database-backed CMS.
- User accounts.
- Automated crawling.
- Multi-platform posting automation.
- Paid products/API.

## Recommended first stack

Use Next.js + static data first.

Why:

- Fastest path to visible website.
- Great SEO.
- Easy to deploy.
- Easy to migrate to database later.
- Keeps facts reviewable in Git.
- Avoids spending days on admin/backend before the product exists.

## Data files to create

```text
src/data/companies.ts
src/data/robots.ts
src/data/sources.ts
src/data/timeline.ts
src/lib/types.ts
src/lib/status.ts
src/lib/seo.ts
```

## Routes to build first

```text
/
/robots
/robots/[slug]
/companies
/companies/[slug]
/about
/submit
```

Later:

```text
/compare
/countries/[slug]
/use-cases/[slug]
/status/[slug]
/updates
/articles/[slug]
```

## Initial robots for first build

Start with 12 high-recognition profiles, verified before publication:

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

For unknown values, display `Not publicly disclosed` or `Unknown`, never invent.

## Implementation tasks

### Task 1: Confirm stack and scaffold app

**Objective:** Create the Next.js app structure in the existing repo.

**Requires Turgay confirmation:** This task installs/scaffolds packages.

Command proposal after confirmation:

```bash
cd /home/repos/humanoid-directory
npm create next-app@latest . -- --ts --tailwind --eslint --app --src-dir --import-alias "@/*"
```

Verification:

```bash
npm run lint
npm run build
```

### Task 2: Add domain data types

Create:

- `src/lib/types.ts`
- `src/lib/status.ts`

Types:

- Robot
- Company
- Source
- TimelineUpdate
- RobotStatus
- VerificationLevel

Verification:

```bash
npm run build
```

### Task 3: Add seed data

Create:

- `src/data/companies.ts`
- `src/data/robots.ts`
- `src/data/sources.ts`
- `src/data/timeline.ts`

Rules:

- Include sources for any factual claims.
- Unknown values remain null/unknown.
- `published: false` until verified enough.

### Task 4: Build visual system

Create reusable components:

- `src/components/site-header.tsx`
- `src/components/site-footer.tsx`
- `src/components/status-badge.tsx`
- `src/components/robot-card.tsx`
- `src/components/company-card.tsx`
- `src/components/search-filter-shell.tsx`

Design:

- premium, futuristic, credible, spacious, not scary
- dark cinematic hero
- light titanium body sections
- precise data cards

### Task 5: Homepage

Modify:

- `src/app/page.tsx`

Sections:

1. Hero
2. Search module
3. Stats row
4. Featured robots
5. Humanoid intelligence/dashboard strip
6. Browse by use case/status/country
7. Compare preview
8. Latest updates
9. Newsletter CTA

### Task 6: Robot directory

Create:

- `src/app/robots/page.tsx`

Features:

- grid/list cards
- basic client-side search/filter if needed
- filter chips for status/country/use case
- sort placeholders

### Task 7: Robot detail page

Create:

- `src/app/robots/[slug]/page.tsx`

Sections:

- hero summary
- key facts
- specs
- capabilities/use cases
- videos/media links
- timeline
- company link
- sources
- similar robots placeholder

### Task 8: Company pages

Create:

- `src/app/companies/page.tsx`
- `src/app/companies/[slug]/page.tsx`

Include company overview, robots by company, official links, and source list.

### Task 9: About/methodology and submit pages

Create:

- `src/app/about/page.tsx`
- `src/app/submit/page.tsx`

About should explain:

- independent directory
- source policy
- status labels
- last verified dates
- correction process

Submit can start as a static form placeholder until backend is chosen.

### Task 10: SEO and production basics

Create/update:

- `src/app/sitemap.ts`
- `src/app/robots.ts`
- metadata in each route
- Open Graph defaults

Verification:

```bash
npm run lint
npm run build
```

## First definition of done

The website-first MVP is good enough for a private review when:

- Homepage looks premium and robotics-specific.
- `/robots` lists at least 12 seed profiles.
- Every robot has a detail page.
- `/companies` lists related companies.
- Unknown specs are shown safely.
- Sources section exists on profiles.
- About/methodology page exists.
- Build passes.

## Confirmation needed

To actually scaffold/build the app, Turgay must confirm package installation/scaffolding.

Exact confirmation phrase:

```text
Confirmed, scaffold the Humanoid Directory Next.js website.
```
