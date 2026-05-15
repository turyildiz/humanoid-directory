# AGENTS.md — Humanoid Directory

## Project

Humanoid Directory is a public, source-backed directory and media platform for humanoid robots and the companies building them.

Project root: `/home/repos/humanoid-directory`

## Product focus

- Humanoid robots only.
- Not generic robotics.
- Not AI agents/chatbots/tools.
- Website and social/content operation are linked: articles and social posts should feed the directory, and directory updates should feed social posts.

## Required context files

Before meaningful work, read:

1. `/home/repos/AGENTS.md`
2. `/home/repos/humanoid-directory/AGENTS.md`
3. `/home/repos/humanoid-directory/.agent-context/CURRENT_STATE.md`
4. `/home/repos/humanoid-directory/.agent-context/NEXT_STEPS.md`
5. `/home/repos/humanoid-directory/PRD.md`

After meaningful work, update:

- `.agent-context/CHANGELOG.md`
- `.agent-context/CURRENT_STATE.md` if reality changed
- `.agent-context/NEXT_STEPS.md` if priorities changed
- `.agent-context/DECISIONS.md` if a decision was locked in

## Agent workflow

Use this sequence for meaningful work on Humanoid Directory:

1. **Context first**
   - Read the required context files listed above.
   - Check `git status --short` and the latest commit before editing.
   - Load the `owned-directory-product-ops` skill for product/content work.
   - Load relevant implementation skills for code, Cloudflare/static export, debugging, or social/source monitoring.

2. **Preserve visual source of truth**
   - The imported static HTML files remain the visible design source of truth unless Turgay explicitly approves a redesign.
   - When adding features, prefer additive routes/data/components over replacing supplied visual pages.
   - If migrating an imported page to React, preserve visual parity section-by-section and verify links/cards still work.

3. **Source-backed content loop**
   - Pick the next item from `content-backlog.csv` or `.agent-context/NEXT_STEPS.md`.
   - Gather primary/credible sources before writing claims.
   - Update typed data in `src/data/` and add article/profile content only when claims are sourced or uncertainty-labeled.
   - Add internal links between articles, robots, companies, and methodology pages.

4. **Implementation loop**
   - Make small, coherent changes.
   - Update tests when routes/data/content expectations change.
   - Run `npm run build && npm test` for code/content route changes.
   - For frontend/layout changes, verify responsive behavior across every exported public page family. `npm test` includes `tests/responsive_site_check.py`; also smoke-check all exported public routes from `out/` when layout/nav/CSS changes.
   - For staging-facing changes, verify local/public routes when possible.

5. **Documentation and handoff**
   - Update `.agent-context/CHANGELOG.md` after meaningful work.
   - Update `.agent-context/CURRENT_STATE.md` if implementation reality changed.
   - Update `.agent-context/NEXT_STEPS.md` if priorities changed.
   - Commit and push finished coherent changes to `main`.
   - Tell Turgay what changed, why it matters, what was verified, and the next recommended step.

## Content standards

- Every factual robot/company claim should be source-backed or marked unknown/unverified.
- Do not invent specs, prices, deployment claims, funding, partnerships, or dates.
- Prefer primary sources: company pages, press releases, official videos, credible reporting, research papers.
- Be skeptical of hype. Distinguish demo/prototype/pilot/commercial.
- Do not blindly rehost copyrighted images/video.

## Design direction

Premium, futuristic, credible, spacious, not scary.

Preferred:
- dark cinematic hero
- light titanium/off-white body sections
- editorial clarity
- precise data cards
- robotics-specific visuals

Avoid:
- generic SaaS
- cyberpunk
- gamer HUD
- crypto/neon overload
- dystopian, military, scary mood

## Social/media operation

The social strategy lives in the shared knowledge base:

- `/home/knowledge-base/social-media-twitter/ideas/humanoid-directory-social-strategy.md`

The plan is to build the website and social audience together across X/Twitter, LinkedIn, Instagram, TikTok, Facebook, and newsletter.

## Secrets

Never write secrets, API keys, tokens, cookies, passwords, or raw credential file contents into repo files or context files.
