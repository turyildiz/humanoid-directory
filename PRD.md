# Humanoid Directory — Product Requirements Document

**Domain:** `humanoid.directory`  
**Product:** Humanoid Directory  
**Version:** 1.0  
**Date:** 2026-05-04  
**Owner:** Turgay  
**Prepared by:** Gonzo / Hermes

---

## 1. Executive Summary

Humanoid Directory is a public, searchable, source-backed directory of humanoid robots and the companies building them.

The product answers one simple question:

> **Which humanoid robots exist, what can they do, who builds them, and how real are they?**

The humanoid robotics market is moving fast. New demos, prototypes, pilots, funding announcements, and factory deployments appear across company websites, YouTube, X/Twitter, press releases, research labs, and investor materials. The information is scattered, inconsistent, and often overhyped.

Humanoid Directory turns that chaos into a clean, comparable, regularly updated database.

The product should feel like:

- **Wikipedia** for neutral robot facts
- **Crunchbase** for company landscape
- **GSMArena** for comparable specs
- **Product Hunt** for discovery and new launches
- **IMDb** for profiles, media, and timelines

The site must stay focused: **humanoid robots only**. Not AI agents. Not chatbots. Not generic robotics. The domain is strong because the concept is specific.

---

## 2. Vision

### Long-term Vision

Humanoid Directory becomes the default global reference for humanoid robots.

When someone searches:

- best humanoid robots
- humanoid robot companies
- commercial humanoid robots
- Tesla Optimus alternatives
- humanoid robots in China
- warehouse humanoid robots
- home humanoid robots
- Figure AI vs Tesla Optimus

Humanoid Directory should be the page they trust.

### Mission

Help people discover, compare, and track humanoid robots through verified, structured, and regularly updated information.

### Brand Promise

> **Every humanoid robot. Clearly listed. Regularly updated.**

---

## 3. Positioning

### Primary Positioning

**Humanoid Directory**  
*The global directory of humanoid robots.*

### One-liner

A curated database of humanoid robots, companies, specs, videos, sources, and deployment status.

### Tagline Options

- Discover every humanoid robot in one place.
- Track the companies building humanoid robots.
- Compare humanoid robots, specs, demos, and deployments.
- The living database of humanoid robots.
- Who is building the humanoid future?

### What This Is Not

Humanoid Directory is not:

- an AI agents directory
- a chatbot/tool directory
- a generic robotics directory
- a sci-fi fan wiki
- a hype blog
- a marketplace in version one

### What This Is

Humanoid Directory is:

- factual
- structured
- searchable
- source-backed
- SEO-native
- visually premium
- useful to investors, researchers, journalists, operators, students, and robotics enthusiasts

---

## 4. Target Users

### 4.1 Robotics Enthusiasts

People following humanoid robot progress online.

Needs:

- discover new robots
- watch demos
- compare specs
- track progress over time
- understand which projects are real vs hype

### 4.2 Investors and Analysts

VCs, angel investors, market researchers, and strategy analysts.

Needs:

- map the humanoid robotics landscape
- identify companies by geography and stage
- compare funding/status signals
- monitor competitors
- track commercial traction

### 4.3 Journalists and Creators

Tech journalists, YouTubers, newsletter writers, and robotics commentators.

Needs:

- accurate facts
- source links
- launch dates
- demo videos
- comparison pages
- story leads

### 4.4 Enterprise Buyers

Factories, warehouses, logistics providers, security firms, healthcare operators, and large companies evaluating automation.

Needs:

- know which humanoid robots are commercially available
- identify vendors
- understand use cases
- compare deployment maturity
- request vendor contact later

### 4.5 Students and Researchers

Students, robotics researchers, labs, and educators.

Needs:

- learn market structure
- find specs
- compare locomotion/hands/sensors
- cite sources
- follow research-to-commercial transitions

---

## 5. Core User Problems

1. **Information is scattered** — specs, demos, and company updates are distributed across many channels.
2. **Claims are inconsistent** — “autonomous”, “general purpose”, and “commercial” mean different things depending on who says them.
3. **Robots are hard to compare** — height, weight, payload, battery, speed, dexterity, autonomy, and availability are rarely normalized.
4. **Reality level is unclear** — some robots are deployed, some are prototypes, some are teleoperated demos, and some are concepts.
5. **The market changes fast** — a static article becomes outdated quickly.

---

## 6. Product Principles

1. **Robots first** — every page should help users understand humanoid robots better.
2. **Evidence over hype** — claims need sources.
3. **Comparable structure** — consistent fields across robots.
4. **Clear status labels** — concept, prototype, research, pilot, commercial, paused, discontinued, unknown.
5. **Beautiful but serious** — futuristic without looking gimmicky.
6. **Fast browsing** — fast search, filters, cards, and profile pages.
7. **Editorial quality** — not thin AI-generated pages.
8. **SEO-native architecture** — categories, countries, statuses, and comparisons should be indexable.

---

## 7. MVP Scope

### Included in MVP

- public homepage
- robot directory
- robot detail pages
- company directory
- company detail pages
- search and filters
- source links
- featured/trending robots
- submit/update form
- admin content workflow
- SEO metadata and sitemap
- newsletter signup

### Not Included in MVP

- user accounts
- paid subscriptions
- vendor dashboards
- marketplace checkout
- paid API
- comments/reviews
- complex automated crawling
- job board
- investor CRM

---

## 8. Core Questions the Product Must Answer

1. What humanoid robots exist?
2. Who builds each robot?
3. Where is the company based?
4. What is the robot designed for?
5. Is it commercially available?
6. What are its key specs?
7. What demos or videos exist?
8. What is the latest known status?
9. Which robots are similar?
10. Where can the information be verified?

---

## 9. Information Architecture

### Main Navigation

MVP:

- Robots
- Companies
- Use Cases
- Submit

Later:

- Robots
- Companies
- Compare
- Countries
- Use Cases
- Updates
- Submit

### URL Structure

```text
/
/robots
/robots/[robot-slug]
/companies
/companies/[company-slug]
/countries/[country-slug]
/use-cases/[use-case-slug]
/status/[status-slug]
/compare
/compare/[robot-a]-vs-[robot-b]
/submit
/about
/contact
```

### SEO Landing Pages

```text
/best-humanoid-robots
/humanoid-robot-companies
/commercial-humanoid-robots
/humanoid-robots-usa
/humanoid-robots-china
/home-humanoid-robots
/warehouse-humanoid-robots
/factory-humanoid-robots
/humanoid-robot-videos
```

---

## 10. Core Entities

### Robot

A humanoid robot model.

Examples:

- Tesla Optimus
- Figure 02
- Unitree G1
- Agility Robotics Digit
- Apptronik Apollo
- 1X NEO
- Sanctuary AI Phoenix
- Boston Dynamics Atlas
- Fourier GR-1
- UBTECH Walker

### Company

A company, lab, university, or organization building humanoid robots.

Examples:

- Tesla
- Figure AI
- Unitree Robotics
- Agility Robotics
- Apptronik
- 1X Technologies
- Sanctuary AI
- Boston Dynamics
- Fourier Intelligence
- UBTECH

### Source

A verifiable reference for a claim.

Examples:

- official website
- product page
- press release
- YouTube demo
- research paper
- interview
- news article
- investor material

### Media Asset

Images and videos associated with a robot or company.

### Timeline Update

A dated event related to a robot or company.

Examples:

- robot announced
- model released
- pilot started
- customer deployment announced
- funding round closed
- partnership announced
- project discontinued

---

## 11. Robot Data Model

### Required Fields

```json
{
  "id": "uuid",
  "name": "Figure 02",
  "slug": "figure-02",
  "company_id": "uuid",
  "status": "pilot",
  "type": "general_purpose_humanoid",
  "country": "United States",
  "short_description": "A general-purpose humanoid robot designed for industrial work.",
  "website_url": "https://www.figure.ai",
  "created_at": "2026-05-04T00:00:00Z",
  "updated_at": "2026-05-04T00:00:00Z"
}
```

### Recommended Fields

```json
{
  "generation": "02",
  "announced_year": 2024,
  "availability": "Pilot deployments",
  "primary_use_cases": ["manufacturing", "logistics"],
  "height_cm": 168,
  "weight_kg": 70,
  "payload_kg": null,
  "battery_life_hours": 5,
  "max_speed_mps": null,
  "degrees_of_freedom": null,
  "locomotion": "Bipedal walking",
  "hands": "Dexterous hands",
  "sensors": ["cameras"],
  "actuation": null,
  "compute": null,
  "autonomy_level": "partially_autonomous",
  "teleoperation_supported": true,
  "speech_supported": null,
  "image_url": null,
  "youtube_url": null,
  "source_urls": [],
  "last_verified_at": "2026-05-04"
}
```

### Important Rule

Unknown values must stay unknown. Do not invent specs.

Display:

```text
Unknown
Not publicly disclosed
Unverified
Reported
Estimated
```

---

## 12. Company Data Model

```json
{
  "id": "uuid",
  "name": "Figure AI",
  "slug": "figure-ai",
  "country": "United States",
  "city": "Sunnyvale",
  "website_url": "https://www.figure.ai",
  "short_description": "A robotics company building general-purpose humanoid robots.",
  "founded_year": 2022,
  "founders": [],
  "employee_count_range": "101-250",
  "funding_total_usd": null,
  "latest_funding_stage": null,
  "investors": [],
  "logo_url": null,
  "source_urls": [],
  "last_verified_at": "2026-05-04"
}
```

---

## 13. Status Taxonomy

Robot statuses:

```text
concept
prototype
research
pilot
commercial
paused
discontinued
unknown
```

Definitions:

- **Concept:** render, announcement, or idea without demonstrated physical prototype.
- **Prototype:** physical robot shown publicly, but no real deployment.
- **Research:** primarily academic/lab platform.
- **Pilot:** tested with partners/customers in controlled real-world environments.
- **Commercial:** can be bought, leased, reserved, or deployed by external customers.
- **Paused:** inactive or delayed, but not officially discontinued.
- **Discontinued:** ended, replaced, or no longer active.
- **Unknown:** insufficient evidence.

Status must be evidence-backed. Marketing language alone is not enough.

---

## 14. Taxonomies

### Robot Types

```text
general_purpose_humanoid
industrial_humanoid
warehouse_humanoid
home_humanoid
research_humanoid
entertainment_humanoid
healthcare_humanoid
service_humanoid
education_humanoid
```

### Use Cases

```text
manufacturing
warehouse
logistics
home_assistance
eldercare
healthcare
hospitality
retail
security
education
research
entertainment
disaster_response
inspection
teleoperation
manipulation
last_mile_delivery
```

### Capabilities

```text
bipedal_walking
running
stair_climbing
object_manipulation
dexterous_hands
speech_interaction
vision_language_model
autonomous_navigation
teleoperation
tool_use
mobile_manipulation
whole_body_control
facial_expression
human_robot_interaction
```

---

## 15. Homepage Requirements

### Goal

Make visitors immediately understand the site and start browsing robots.

### Hero Copy

```text
The global directory of humanoid robots.

Discover humanoid robots, compare specs, track companies, and follow the machines shaping the next era of automation.
```

### Hero Elements

- headline
- subheadline
- search bar
- CTA: Browse Robots
- CTA: Explore Companies
- visual grid of robot cards

### Homepage Sections

1. Hero
2. Featured humanoid robots
3. Recently updated profiles
4. Browse by status
5. Browse by use case
6. Browse by country
7. Featured companies
8. Newsletter signup
9. Submit a robot/company

---

## 16. Robot Directory Requirements

### Filters

Required:

- search
- company
- country
- status
- type
- use case

Later:

- availability
- height range
- payload range
- battery range
- has video
- has verified specs
- recently updated

### Sort Options

```text
Recently updated
Newest announced
Alphabetical
Commercial maturity
Most viewed
```

### Robot Card Fields

- robot image
- robot name
- company name
- country
- status badge
- short description
- key tags
- quick specs

Example:

```text
Figure 02
Figure AI · United States
Status: Pilot
General-purpose humanoid for industrial work.
168 cm · 70 kg · ~5h battery
```

---

## 17. Robot Detail Page Requirements

### Sections

1. Hero summary
2. Key facts
3. Technical specs
4. Capabilities
5. Use cases
6. Videos and media
7. Timeline
8. Company information
9. Sources
10. Similar robots

### Key Facts

```text
Company
Country
Status
Type
Announced
Availability
Primary use cases
Height
Weight
Payload
Battery life
Locomotion
Hands
```

### Technical Spec Groups

- Body
- Mobility
- Manipulation
- Power
- Sensors
- Compute
- AI/autonomy
- Developer access

### Timeline Entry Example

```json
{
  "date": "2024-08-06",
  "title": "Figure 02 announced",
  "description": "Figure introduced its second-generation humanoid robot.",
  "source_url": "https://example.com"
}
```

---

## 18. Company Pages

### Company Directory

Filters:

- search
- country
- product status
- founded year
- company type
- funding stage

Company card fields:

- logo
- name
- country/city
- short description
- robot count
- known robot names/statuses

### Company Detail Page

Sections:

1. Company overview
2. Robots by this company
3. Company facts
4. Funding/market info if available
5. News/timeline
6. Official links
7. Sources

---

## 19. Compare Feature

### MVP Compare

Simple side-by-side comparison for two or three robots.

Fields:

```text
Company
Country
Status
Type
Height
Weight
Payload
Battery
Speed
Hands
Use cases
Availability
Official website
```

### SEO Compare Pages

```text
/compare/tesla-optimus-vs-figure-02
/compare/unitree-g1-vs-fourier-gr-1
/compare/agility-digit-vs-apptronik-apollo
```

Each comparison page should include a human-written summary, not only a table.

---

## 20. Submit Flow

### Submit Types

- new robot
- new company
- correction
- source/video update

### Form Fields

Required:

- submission type
- name
- source URL
- submitter email
- notes

Optional:

- company name
- robot name
- country
- status suggestion
- additional URLs

Submissions must not publish automatically.

Workflow:

```text
user submits
→ admin reviews
→ admin verifies source
→ profile created/updated
→ published
```

---

## 21. Admin Requirements

MVP admin must support:

- create/edit robot
- publish/unpublish robot
- create/edit company
- add/edit source
- add/edit media
- add/edit timeline update
- review submissions
- update last verified date

### Editorial Checklist

Before publishing a robot:

- robot has company
- robot has status
- robot has short description
- robot has at least one source
- official website or company URL exists
- status is defensible
- unknown specs are marked unknown
- image/video usage is safe

---

## 22. Content Standards

### Tone

- clear
- neutral
- precise
- skeptical of hype
- accessible to non-engineers

Avoid unsupported claims like:

- revolutionary
- game-changing
- most advanced ever
- fully autonomous, unless proven

Good description example:

```text
A bipedal humanoid robot designed for industrial automation, with public demos showing walking and object manipulation. Commercial availability has not been fully disclosed.
```

### Claims Requiring Sources

- price
- payload
- speed
- battery life
- autonomy
- commercial availability
- customer names
- funding amount
- deployment claims
- production volume

---

## 23. Verification System

Each important field should eventually support a verification level:

```text
official
credible_media
community_reported
estimated
unknown
```

Every robot/company should show:

```text
Last verified: May 2026
```

This matters because robotics information goes stale quickly.

---

## 24. Initial Seed Dataset

Launch target:

- 50 robot profiles
- 40 company profiles
- top 20 profiles with high-quality sources/media

### Priority Robot Candidates to Verify

1. Tesla Optimus
2. Figure 01
3. Figure 02
4. Unitree G1
5. Unitree H1
6. Agility Robotics Digit
7. Apptronik Apollo
8. 1X NEO
9. 1X EVE
10. Sanctuary AI Phoenix
11. Boston Dynamics Atlas
12. Electric Atlas
13. Fourier GR-1
14. Fourier GR-2
15. UBTECH Walker S
16. UBTECH Walker X
17. EngineAI PM01
18. EngineAI SE01
19. XPENG Iron
20. Kepler Forerunner
21. AgiBot / Zhiyuan A2
22. AgiBot Raise A1
23. Galbot G1
24. Clone Alpha
25. MenteeBot
26. PAL Robotics TALOS
27. PAL Robotics REEM-C
28. Toyota T-HR3
29. Honda ASIMO
30. Kawada HRP series
31. Xiaomi CyberOne
32. LimX Dynamics CL-1
33. Pudu D9
34. MagicLab MagicBot
35. Neura Robotics 4NE-1
36. Rainbow Robotics HUBO
37. Dobot Atom
38. Booster Robotics T1
39. Toyota humanoid research robots
40. KAIST HUBO variants

This list must be verified before publication. Some entries may be discontinued, research-only, regional, renamed, or not currently commercial.

### Priority Companies

1. Tesla
2. Figure AI
3. Unitree Robotics
4. Agility Robotics
5. Apptronik
6. 1X Technologies
7. Sanctuary AI
8. Boston Dynamics
9. Fourier Intelligence
10. UBTECH Robotics
11. EngineAI
12. XPENG Robotics
13. Kepler Exploration Robot
14. AgiBot / Zhiyuan Robotics
15. Clone Robotics
16. Mentee Robotics
17. PAL Robotics
18. Toyota Research Institute
19. Honda Robotics
20. Kawada Robotics
21. Xiaomi Robotics
22. LimX Dynamics
23. Pudu Robotics
24. MagicLab
25. Neura Robotics
26. Rainbow Robotics
27. Galbot
28. Dobot
29. Booster Robotics

---

## 25. Design Direction

### Feel

- futuristic
- clean
- technical
- premium
- trustworthy
- editorial

Avoid:

- crypto-style neon clutter
- toy robot aesthetic
- generic SaaS template
- unreadable sci-fi UI

### Recommended Direction

Use **clean editorial pages** with **futuristic dark hero sections**.

This gives:

- trust for reading and SEO
- visual impact for robotics
- premium feel without gimmicks

### Robot Card

```text
[Robot image]
PILOT
Figure 02
Figure AI · United States
General-purpose humanoid for industrial work.
168 cm · 70 kg · ~5h battery
```

---

## 26. SEO Strategy

### Primary Keywords

- humanoid robots
- humanoid robot directory
- humanoid robot companies
- best humanoid robots
- commercial humanoid robots
- humanoid robots 2026
- humanoid robot manufacturers
- humanoid robot comparison

### Programmatic SEO Pages

Country pages:

- Humanoid Robots in the United States
- Humanoid Robots in China
- Humanoid Robots in Japan
- Humanoid Robots in Europe
- Humanoid Robots in Germany

Use-case pages:

- Humanoid Robots for Warehouses
- Humanoid Robots for Manufacturing
- Humanoid Robots for Home Assistance
- Humanoid Robots for Healthcare
- Humanoid Robots for Research

Status pages:

- Commercial Humanoid Robots
- Prototype Humanoid Robots
- Humanoid Robots in Pilot Deployments
- Research Humanoid Robots

Comparison pages:

- Tesla Optimus vs Figure 02
- Unitree G1 vs Fourier GR-1
- Digit vs Apollo
- NEO vs Tesla Optimus

### Metadata Requirements

Every page needs:

- unique title
- meta description
- canonical URL
- Open Graph image
- structured data where appropriate
- updated date

Schema.org candidates:

- Organization
- Product
- Article
- BreadcrumbList
- FAQPage

---

## 27. Newsletter Strategy

### Newsletter Name

**Humanoid Weekly**

### CTA

```text
Track the humanoid robot race.
Get weekly updates on new robots, demos, deployments, and company news.
```

### Weekly Sections

- New robot profiles
- Updated specs
- New demo videos
- Commercial deployments
- Funding and partnerships
- Research highlights
- Most viewed robots

---

## 28. Monetization Strategy

Do not monetize before authority. First build traffic, trust, and data quality.

### Phase 1: Audience

- free directory
- newsletter
- submissions
- source-backed pages

### Phase 2: Sponsorship

- newsletter sponsorship
- sponsored but labeled company spotlight
- robotics event sponsors

### Phase 3: Lead Generation

Enterprise buyer form:

```text
Interested in humanoid robots for your facility?
Tell us your use case and we’ll connect you with relevant vendors.
```

Fields:

- company
- industry
- country
- use case
- timeline
- budget range
- robot type needed

### Phase 4: Premium Data/API

- CSV export
- API access
- market maps
- funding tracker
- deployment tracker
- quarterly reports

### Phase 5: Job Board

A focused humanoid robotics job board can come later.

---

## 29. Suggested Database Schema

### `companies`

```sql
CREATE TABLE companies (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  short_description TEXT,
  long_description TEXT,
  country TEXT,
  city TEXT,
  founded_year INTEGER,
  website_url TEXT,
  logo_url TEXT,
  x_url TEXT,
  linkedin_url TEXT,
  youtube_url TEXT,
  funding_total_usd BIGINT,
  latest_funding_stage TEXT,
  status TEXT DEFAULT 'active',
  last_verified_at DATE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
```

### `robots`

```sql
CREATE TABLE robots (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  company_id UUID REFERENCES companies(id) ON DELETE SET NULL,
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  short_description TEXT,
  long_description TEXT,
  status TEXT NOT NULL DEFAULT 'unknown',
  type TEXT,
  country TEXT,
  announced_year INTEGER,
  availability TEXT,
  website_url TEXT,
  image_url TEXT,
  hero_video_url TEXT,
  height_cm NUMERIC,
  weight_kg NUMERIC,
  payload_kg NUMERIC,
  battery_life_hours NUMERIC,
  max_speed_mps NUMERIC,
  degrees_of_freedom INTEGER,
  locomotion TEXT,
  hands TEXT,
  sensors TEXT[],
  actuation TEXT,
  compute TEXT,
  autonomy_level TEXT,
  teleoperation_supported BOOLEAN,
  speech_supported BOOLEAN,
  developer_sdk BOOLEAN,
  api_available BOOLEAN,
  primary_use_cases TEXT[],
  capabilities TEXT[],
  last_verified_at DATE,
  published BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
```

### `sources`

```sql
CREATE TABLE sources (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  url TEXT NOT NULL UNIQUE,
  source_type TEXT,
  publisher TEXT,
  published_at DATE,
  archived_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

### `robot_sources`

```sql
CREATE TABLE robot_sources (
  robot_id UUID REFERENCES robots(id) ON DELETE CASCADE,
  source_id UUID REFERENCES sources(id) ON DELETE CASCADE,
  claim TEXT,
  PRIMARY KEY (robot_id, source_id)
);
```

### `robot_media`

```sql
CREATE TABLE robot_media (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  robot_id UUID REFERENCES robots(id) ON DELETE CASCADE,
  media_type TEXT NOT NULL,
  url TEXT NOT NULL,
  title TEXT,
  caption TEXT,
  credit TEXT,
  source_url TEXT,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

### `timeline_updates`

```sql
CREATE TABLE timeline_updates (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  robot_id UUID REFERENCES robots(id) ON DELETE CASCADE,
  company_id UUID REFERENCES companies(id) ON DELETE CASCADE,
  date DATE NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  source_url TEXT,
  update_type TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

### `submissions`

```sql
CREATE TABLE submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  submission_type TEXT NOT NULL,
  name TEXT,
  email TEXT,
  robot_name TEXT,
  company_name TEXT,
  url TEXT,
  notes TEXT,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  reviewed_at TIMESTAMPTZ
);
```

---

## 30. Functional Requirements

### Public Site

- user can browse robots
- user can search robots
- user can filter robots
- user can open robot profile
- user can browse companies
- user can open company profile
- user can submit a robot/company/update
- user can subscribe to newsletter

### Admin

- admin can create robot
- admin can edit robot
- admin can publish/unpublish robot
- admin can create company
- admin can edit company
- admin can review submissions
- admin can add sources
- admin can add timeline updates

### Search

Search should match:

- robot name
- company name
- country
- type
- use case
- capabilities

Example URL:

```text
/robots?q=warehouse&status=pilot&country=United%20States
```

---

## 31. Performance and Accessibility

Targets:

```text
Lighthouse Performance: 90+
Lighthouse SEO: 95+
Lighthouse Accessibility: 90+
LCP: < 2.5s
CLS: < 0.1
```

Accessibility:

- images have alt text
- cards are keyboard navigable
- filters are accessible
- color contrast passes WCAG AA
- status badges include text, not only color
- forms have labels and errors
- semantic headings

---

## 32. Legal and Content Risks

### Images

Do not blindly rehost copyrighted images.

Preferred:

- official press kit images where permitted
- YouTube embeds
- company-submitted images
- credited source links
- neutral placeholders where unsure

### Accuracy

Use careful labels:

```text
Reported
Estimated
Not publicly disclosed
Last verified
```

### Disclaimer

```text
Humanoid Directory is an independent directory and is not affiliated with the companies listed unless explicitly stated. Company and robot names may be trademarks of their respective owners.
```

---

## 33. Analytics

Track:

- page views
- robot profile views
- company profile views
- search queries
- filter usage
- outbound website clicks
- submit form completions
- newsletter signups
- comparison page views

Business metrics:

- most viewed robots
- most searched companies
- countries with highest interest
- most used filters
- profiles needing updates

---

## 34. Success Metrics

### 30-Day MVP

- 50 robot profiles published
- 40 company profiles published
- 10 SEO landing pages indexed
- 100 newsletter subscribers
- 10 organic submissions
- 1,000 monthly organic visits

### 6-Month Target

- 150 robot profiles
- 100 company profiles
- 50 SEO pages
- 5,000 newsletter subscribers
- 50,000 monthly organic visits
- first sponsorship or lead-gen revenue

### Quality Metrics

- 90%+ profiles have at least 2 sources
- 80%+ profiles verified within last 90 days
- less than 5% broken outbound links
- all commercial/pilot statuses source-backed

---

## 35. Roadmap

### Phase 0 — Foundation

- choose stack
- define schema
- create brand identity
- collect 50 robot candidates
- define content template

### Phase 1 — Public Directory

- homepage
- robot directory
- robot detail pages
- company directory
- company detail pages
- basic search/filtering
- SEO metadata

### Phase 2 — Admin Workflow

- admin CRUD
- source management
- submissions inbox
- timeline updates
- publish/draft workflow

### Phase 3 — SEO Expansion

- country pages
- use-case pages
- status pages
- comparison pages
- sitemap
- structured data

### Phase 4 — Newsletter

- newsletter signup
- weekly issue format
- recent updates page
- new demo/video tracker

### Phase 5 — Monetization Tests

- sponsor slots
- vendor lead form
- premium dataset waitlist
- robotics jobs waitlist

---

## 36. Launch Checklist

### Content

- [ ] 50 robot profiles
- [ ] 40 company profiles
- [ ] each robot has at least one source
- [ ] top 20 robots have images or videos
- [ ] status labels reviewed
- [ ] homepage copy finalized
- [ ] about page written
- [ ] disclaimer added

### Technical

- [ ] production domain connected
- [ ] SSL active
- [ ] sitemap generated
- [ ] robots.txt configured
- [ ] analytics installed
- [ ] responsive mobile design tested
- [ ] Lighthouse checked
- [ ] forms tested
- [ ] admin auth protected

### SEO

- [ ] titles/meta descriptions
- [ ] Open Graph images
- [ ] structured data
- [ ] canonical URLs
- [ ] Search Console connected
- [ ] core landing pages submitted

### Operations

- [ ] submission review process defined
- [ ] weekly update workflow defined
- [ ] source verification checklist ready
- [ ] update cadence defined

---

## 37. Definition of Done for MVP

The MVP is done when:

1. `humanoid.directory` loads a polished homepage.
2. Users can browse at least 50 humanoid robot profiles.
3. Users can browse company profiles.
4. Users can filter robots by country, status, and use case.
5. Each robot has a detail page with specs and sources.
6. Users can submit corrections or new robots.
7. Admin can create and edit robots/companies.
8. SEO basics are complete: sitemap, metadata, canonical URLs.
9. Newsletter signup works.
10. The site feels credible enough to share with robotics people.

---

## 38. Final Recommendation

Build Humanoid Directory as a focused, source-backed directory of humanoid robots.

Do not dilute it with AI agents or generic robotics. The domain is powerful because it is specific.

The wedge:

```text
A clean, trustworthy, regularly updated directory of every humanoid robot and the companies building them.
```

Start with 50 excellent profiles, not 500 weak ones.

Make the data structured from day one.

Make every page indexable.

Make every claim traceable.

Make the site beautiful enough that robotics people want to share it.

---

## 39. Immediate Next Steps

1. Create a seed dataset JSON/CSV with 50 robot candidates.
2. Pick the stack.
3. Design homepage and robot card UI.
4. Implement database schema.
5. Build robots directory and detail pages.
6. Publish first 20 verified profiles.
7. Add remaining 30 profiles.
8. Launch soft with robotics communities.
9. Collect corrections and submissions.
10. Start weekly updates/newsletter.
