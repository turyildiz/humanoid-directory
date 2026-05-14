# Humanoid Directory — Content Production Plan

Date: 2026-05-14
Owner: Gonzo / Hermes

## Goal

Turn Humanoid Directory from a visual prototype into a source-backed robotics reference product.

The site should answer:

- Which humanoid robots exist?
- Who builds them?
- How real are they: concept, prototype, pilot, commercial, discontinued?
- What specs and use cases are publicly known?
- Which claims are verified by primary sources?
- What changed recently?

## Editorial Standard

Humanoid Directory must be factual, neutral, useful, and source-backed.

Rules:

1. Prefer primary sources: official company pages, press releases, technical posts, official videos, investor/company announcements.
2. Use reputable secondary sources only for context: TechCrunch, IEEE, The Robot Report, Reuters, Bloomberg, company/customer press pages.
3. Never invent specs, dates, funding, deployments, employee counts, prices, or partnerships.
4. Unknown values stay `Unknown`, `Not publicly disclosed`, or blank depending on UI.
5. Every profile should have a `lastVerifiedAt` date.
6. Every important factual claim should map to at least one source.
7. Avoid hype language like “revolutionary”, “game-changing”, “world-changing” unless quoted and clearly attributed.

## Content Layers

### 1. Directory Data

Structured facts used by listing cards, filters, profile pages, comparisons, and SEO metadata.

Entities:

- Robots
- Companies
- Sources
- Timeline updates
- Use cases
- Countries
- Status categories

### 2. Profile Pages

Longer structured pages for each robot and company.

Each robot profile should include:

- One-sentence summary
- Status label and confidence
- Company
- Country
- Announced/unveiled date if known
- Availability/commercial status
- Use cases
- Capabilities
- Specs table
- Known deployments / pilots
- Timeline
- Sources
- Similar robots

Each company profile should include:

- One-sentence summary
- Country and city
- Founded year if verified
- Website/social links
- Robots/products
- Funding/stage only if source-backed
- Deployment/customer signals
- Timeline
- Sources

### 3. Articles / Updates

Short source-backed editorial pages that make the directory discoverable and current.

Article types:

- Robot launch/update brief
- Company profile explainer
- Comparison article
- Country landscape article
- Use-case guide
- Monthly humanoid robotics roundup
- “What is the status of X?” reality-check article

### 4. Social / Newsletter Output

Website content feeds social, not the other way around.

Flow:

```text
Source checked → directory data updated → article/brief published → social/newsletter draft
```

## First Content Sprint

### Sprint Objective

Build enough credible content for the MVP to feel real:

- 20 robot profiles
- 15 company profiles
- 5 source-backed articles
- 1 methodology page
- 1 weekly update format

## Robot Profile Priority List

### Tier 1 — Must-have launch profiles

1. Figure 02 — Figure AI
2. Tesla Optimus — Tesla
3. Unitree G1 — Unitree Robotics
4. Unitree H1 — Unitree Robotics
5. Digit — Agility Robotics
6. Apollo — Apptronik
7. NEO — 1X Technologies
8. Phoenix — Sanctuary AI
9. Electric Atlas — Boston Dynamics
10. GR-1 — Fourier Intelligence
11. Walker S — UBTECH Robotics
12. PM01 — EngineAI

### Tier 2 — Add next

13. Figure 01 — Figure AI
14. EVE — 1X Technologies
15. Walker X / Walker series — UBTECH Robotics
16. CyberOne — Xiaomi
17. Alter / research humanoids — Osaka University / research groups, only if clearly categorized as research
18. ARMAR series — Karlsruhe Institute of Technology, research category
19. HRP series — AIST / Kawada, historical/research category
20. TALOS — PAL Robotics
21. REEM-C — PAL Robotics
22. Kangaroo / Kaleido-style historical entries only if source-backed and clearly labeled discontinued/research

### Tier 3 — Market expansion candidates

- Leju Robotics humanoids
- LimX Dynamics humanoid platforms
- Booster Robotics humanoids
- XPENG humanoid / Iron-related robotics if source-backed
- Toyota humanoid research systems if relevant and source-backed
- Honda ASIMO as historical/discontinued reference

## Company Profile Priority List

### Tier 1 — Must-have launch companies

1. Figure AI
2. Tesla
3. Unitree Robotics
4. Agility Robotics
5. Apptronik
6. 1X Technologies
7. Sanctuary AI
8. Boston Dynamics
9. Fourier Intelligence
10. UBTECH Robotics
11. EngineAI

### Tier 2 — Add next

12. PAL Robotics
13. Xiaomi Robotics / Xiaomi robotics program
14. LimX Dynamics
15. Leju Robotics
16. Booster Robotics
17. Honda Robotics / ASIMO historical
18. AIST / HRP research lineage
19. KAIST / HUBO historical/research lineage
20. Toyota Research / humanoid robotics research, if relevant and source-backed

## First Five Articles

1. `What counts as a humanoid robot?`
   - Purpose: methodology/SEO/trust.
   - Internal links: Robots, Companies, statuses.

2. `The current status of Figure 02`
   - Purpose: support featured robot page.
   - Sources: Figure official page/videos, customer/pilot announcements, reputable press.

3. `Tesla Optimus vs Figure 02: what is actually known?`
   - Purpose: high-search comparison article.
   - Rule: comparison must separate known specs from undisclosed claims.

4. `Commercial, pilot, prototype: how Humanoid Directory labels robot status`
   - Purpose: trust and reusable status taxonomy.

5. `Humanoid robot companies to watch`
   - Purpose: company directory SEO and overview.
   - Start with Tier 1 companies only.

## Data Model Improvements Needed

Current data is a good seed, but content now needs richer fields.

Add to robot records:

- `seoTitle`
- `seoDescription`
- `shortDescription`
- `overview`
- `statusConfidence`
- `verificationNotes`
- `media`
- `timeline`
- `sourceClaims`
- `similarRobots`
- `published`

Add to company records:

- `seoTitle`
- `seoDescription`
- `overview`
- `stage`
- `fundingSummary`
- `socialLinks`
- `timeline`
- `sourceClaims`
- `published`

Add source fields:

- `accessedAt`
- `claimIds`
- `archiveUrl` optional
- `reliability`: primary / secondary / database / social / video

## First Implementation Move

The current staged site is wrapping imported HTML to preserve design. Content implementation should happen in this order:

1. Keep the imported HTML visual layer stable.
2. Add richer structured data in `src/data/*`.
3. Create reusable profile renderers that visually match the imported Figure 02 and Figure AI pages.
4. Replace non-Figure robot/company profile fallback pages with real data-driven profiles.
5. Keep Figure 02 and Figure AI as visual gold standards while migrating them to data-driven rendering later.

## Immediate Next Tasks

1. Expand source-backed data for Tier 1 robots and companies.
2. Build a `timeline.ts` file for robot/company updates.
3. Create generic data-driven robot profile page matching the Figure 02 design.
4. Create generic data-driven company profile page matching the Figure AI design.
5. Add `/articles` and `/articles/[slug]` routes.
6. Draft the first five articles in MD/TS content.
7. Add internal links from robot/company profiles to articles.

## Quality Bar Before Production Launch

Minimum content for credible MVP:

- 20 robots listed
- 15 companies listed
- 8–10 detailed profiles
- Every visible profile has sources
- Methodology/status page exists
- At least 3 articles live
- Sitemap includes robot/company/article routes
- No fake specs or invented deployment claims
