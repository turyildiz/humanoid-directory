import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { articles } from '@/data/articles';
import { companies } from '@/data/companies';
import { robots } from '@/data/robots';

const htmlMap = {
  homepage: 'Humanoid Directory - Homepage.html',
  robots: 'Humanoid Directory - Robots.html',
  companies: 'Humanoid Directory - Companies.html',
  figure02: 'Humanoid Directory - Figure 02.html',
  figureAi: 'Humanoid Directory - Figure AI.html',
  robotCard: 'Humanoid Directory - Robot Card.html',
  designSystem: 'Humanoid Directory - Design System.html',
} as const;

type HtmlKey = keyof typeof htmlMap;

function extractTag(html: string, tag: string) {
  const match = html.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, 'i'));
  return match?.[1] ?? '';
}

function extractTitle(html: string) {
  return html.match(/<title>([\s\S]*?)<\/title>/i)?.[1]?.trim() ?? 'Humanoid Directory';
}

function textContent(fragment: string) {
  return fragment
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}


function escapeHtml(value: string | number | null | undefined) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function mobileNavigationMarkup() {
  return `
    <details class="hd-mobile-nav">
      <summary class="mobile-nav-toggle" aria-label="Open site navigation">
        <span>Menu</span>
        <span class="mobile-nav-icon" aria-hidden="true"><i></i><i></i><i></i></span>
      </summary>
      <nav class="mobile-nav-panel" aria-label="Mobile navigation">
        <a href="/robots/">Robots</a>
        <a href="/companies/">Companies</a>
        <a href="/articles/">Articles</a>
        <a href="/about/">Methodology</a>
        <a href="/submit/">Submit update</a>
      </nav>
    </details>
  `;
}

function mobileNavigationStyles() {
  return `
    <style>
      .hd-mobile-nav{display:none;font-family:Inter,system-ui,sans-serif;background:rgba(10,12,16,.96);border-bottom:1px solid rgba(255,255,255,.1);color:#fff;position:sticky;top:0;z-index:60}.mobile-nav-toggle{list-style:none;display:flex;align-items:center;justify-content:space-between;gap:16px;padding:13px 18px;font-size:13px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;cursor:pointer}.mobile-nav-toggle::-webkit-details-marker{display:none}.mobile-nav-icon{display:grid;gap:4px}.mobile-nav-icon i{display:block;width:22px;height:2px;border-radius:999px;background:currentColor}.mobile-nav-panel{display:grid;gap:8px;padding:0 18px 18px}.mobile-nav-panel a{display:block;color:#f8fafc;text-decoration:none;padding:13px 14px;border:1px solid rgba(255,255,255,.12);border-radius:14px;background:rgba(255,255,255,.055);font-size:15px;font-weight:700}.mobile-nav-panel a:hover{background:rgba(255,255,255,.1)}
      @media (max-width:760px){.hd-mobile-nav{display:block}.nav .nav-links{display:none!important}}
    </style>
  `;
}

function statusLabel(status: string) {
  return status.replace('-', ' ');
}

function discoveryCard(title: string, meta: string, summary: string, href: string) {
  return `<a class="hd-discovery-card" href="${href}">
    <span class="hd-discovery-meta">${escapeHtml(meta)}</span>
    <strong>${escapeHtml(title)}</strong>
    <span>${escapeHtml(summary)}</span>
  </a>`;
}

function directoryDiscoveryMarkup(page: HtmlKey) {
  const featuredRobots = robots.filter((robot) => robot.published !== false).slice(0, 15);
  const featuredCompanies = companies.filter((company) => company.published !== false).slice(0, 12);
  const featuredArticles = articles.slice(0, 5);

  const robotCards = featuredRobots.map((robot) => discoveryCard(
    robot.name,
    `${statusLabel(robot.status)} · ${robot.country}`,
    robot.summary,
    `/robots/${robot.slug}/`,
  )).join('');
  const companyCards = featuredCompanies.map((company) => discoveryCard(
    company.name,
    `${company.country}${company.city ? ` · ${company.city}` : ''}`,
    company.summary,
    `/companies/${company.slug}/`,
  )).join('');
  const articleCards = featuredArticles.map((article) => discoveryCard(
    article.title,
    `${article.category} · ${article.readingMinutes} min read`,
    article.dek,
    `/articles/${article.slug}/`,
  )).join('');

  if (page === 'homepage') {
    return `<section class="hd-discovery" aria-label="Explore Humanoid Directory content">
      <div class="hd-discovery-head"><p>Explore the directory</p><h2>Robots, companies, and source-backed guides are now linked from here.</h2><a href="/robots/">Browse all robots →</a></div>
      <div class="hd-discovery-grid">${robotCards}</div>
      <div class="hd-discovery-split"><div><h3>Companies</h3><div class="hd-discovery-list">${companyCards}</div></div><div><h3>Articles</h3><div class="hd-discovery-list">${articleCards}</div></div></div>
    </section>`;
  }

  if (page === 'robots') {
    return `<section class="hd-discovery" aria-label="All linked humanoid robot profiles">
      <div class="hd-discovery-head"><p>Robot profiles</p><h2>Every enriched robot profile is reachable from this page.</h2><a href="/articles/status-labels-explained/">How status labels work →</a></div>
      <div class="hd-discovery-grid">${robotCards}</div>
    </section>`;
  }

  if (page === 'companies') {
    return `<section class="hd-discovery" aria-label="All linked humanoid robotics company profiles">
      <div class="hd-discovery-head"><p>Company profiles</p><h2>Every tracked company profile is reachable from this page.</h2><a href="/articles/humanoid-robot-companies-to-watch/">Read the market map →</a></div>
      <div class="hd-discovery-grid">${companyCards}</div>
    </section>`;
  }

  return '';
}

function discoveryStyles() {
  return `
    <style>
      .hd-discovery{font-family:Inter,system-ui,sans-serif;max-width:1180px;margin:56px auto;padding:0 24px;color:#0f172a}.hd-discovery-head{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:18px;align-items:end;margin-bottom:22px}.hd-discovery-head p{grid-column:1/-1;margin:0;color:#64748b;text-transform:uppercase;letter-spacing:.16em;font-size:12px;font-weight:800}.hd-discovery-head h2{margin:0;font-size:clamp(28px,4vw,46px);line-height:1.02;letter-spacing:-.055em;color:#111827}.hd-discovery-head a{color:#111827;text-decoration:none;font-weight:800;border-bottom:1px solid rgba(15,23,42,.28)}.hd-discovery-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px}.hd-discovery-card{display:flex;flex-direction:column;gap:10px;min-height:190px;padding:20px;border-radius:24px;background:linear-gradient(180deg,#fff,#f8fafc);border:1px solid rgba(15,23,42,.1);box-shadow:0 18px 50px rgba(15,23,42,.08);color:#0f172a;text-decoration:none}.hd-discovery-card:hover{transform:translateY(-2px);box-shadow:0 24px 70px rgba(15,23,42,.12)}.hd-discovery-card strong{font-size:20px;letter-spacing:-.03em}.hd-discovery-card span:last-child{color:#475569;line-height:1.55}.hd-discovery-meta{color:#2563eb!important;text-transform:uppercase;letter-spacing:.12em;font-size:11px;font-weight:900}.hd-discovery-split{display:grid;grid-template-columns:1fr 1fr;gap:22px;margin-top:28px}.hd-discovery-split h3{font-size:24px;margin:0 0 14px;letter-spacing:-.035em}.hd-discovery-list{display:grid;gap:12px}.hd-discovery-list .hd-discovery-card{min-height:0}.hd-discovery-list .hd-discovery-card strong{font-size:18px}
      @media (max-width:900px){.hd-discovery-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.hd-discovery-split{grid-template-columns:1fr}}
      @media (max-width:640px){.hd-discovery{margin:36px auto;padding:0 18px}.hd-discovery-head{grid-template-columns:1fr}.hd-discovery-grid{grid-template-columns:1fr}.hd-discovery-card{min-height:0}.hd-discovery-head h2{font-size:32px}}
    </style>
  `;
}

function routeForPlaceholderLink(innerHtml: string) {
  const text = textContent(innerHtml);

  if (text.includes('Humanoid Directory')) return '/';
  if (/^Robots$/.test(text) || text.startsWith('Browse robots') || text.startsWith('View all robots')) return '/robots/';
  if (/^Companies$/.test(text) || text.startsWith('Explore companies')) return '/companies/';
  if (text === 'Compare') return '/articles/tesla-optimus-vs-figure-02/';
  if (text === 'Use cases' || text === 'Newsletter') return '/articles/';
  if (text === 'Learn the methodology') return '/about/';
  if (text.startsWith('Start exploring')) return '/robots/';
  if (text.startsWith('See companies')) return '/companies/';
  if (text.startsWith('Track updates')) return '/articles/';
  if (text.startsWith('View methodology') || text === 'Methodology' || text === 'Editorial guidelines' || text === 'Sources & citations') return '/about/';
  if (text.startsWith('Submit')) return '/submit/';
  if (text === 'About') return '/about/';
  if (text.startsWith('View full company profile')) return '/companies/figure-ai/';
  if (text.startsWith('View profile')) return '/robots/figure-02/';
  if (text === 'Design system') return '/design-system/';
  if (text === 'Components') return '/components/robot-card/';

  return '#';
}

function rewritePlaceholderLinks(html: string) {
  return html.replace(/<a([^>]*)href="#"([^>]*)>([\s\S]*?)<\/a>/gi, (match, before, after, innerHtml) => {
    const route = routeForPlaceholderLink(innerHtml);
    return route === '#' ? match : `<a${before}href="${route}"${after}>${innerHtml}</a>`;
  });
}

function escapeRegex(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function removeNestedAnchors(cardHtml: string) {
  return cardHtml.replace(/<a([^>]*)href=(['"])[\s\S]*?\2([^>]*)>([\s\S]*?)<\/a>/gi, '<span$1$3>$4</span>');
}

function linkCardByText(html: string, className: string, requiredText: string, route: string) {
  const pattern = new RegExp(`<article class="${escapeRegex(className)}">([\\s\\S]*?${escapeRegex(requiredText)}[\\s\\S]*?)<\\/article>`, 'i');

  return html.replace(pattern, (_match, cardBody) => {
    return `<a href="${route}" class="${className}" style="display:block;color:inherit;text-decoration:none;">${removeNestedAnchors(cardBody)}</a>`;
  });
}

function rewriteRemainingPrototypeLinks(html: string, page: HtmlKey) {
  if (page === 'homepage') return html.replace(/href="#"/g, 'href="/robots/"');
  if (page === 'robots') return html.replace(/href="#"/g, 'href="/robots/figure-02/"');
  if (page === 'companies') return html.replace(/href="#"/g, 'href="/companies/figure-ai/"');
  return html;
}

function rewriteKnownCards(html: string) {
  return linkCardByText(
    linkCardByText(
      linkCardByText(html, 'feature-card', 'Figure 02', '/robots/figure-02/'),
      'robot-card',
      'Figure 02',
      '/robots/figure-02/',
    ),
    'co-card',
    'Figure AI',
    '/companies/figure-ai/',
  );
}

function homepageMobileOverflowFixStyles(page: HtmlKey) {
  if (page !== 'homepage') return '';

  return `
    <style>
      /* mobile-overflow-hotfix */
      @media (max-width: 760px) {
        html, body { width: 100%; max-width: 100%; overflow-x: hidden; }
        .nav, .hero, .section, .foot { max-width: 100vw; overflow-x: hidden; }
        .nav-inner { grid-template-columns: minmax(0, 1fr); gap: 14px; padding: 14px 18px; }
        .brand, .brand-name, .nav-right { min-width: 0; width: 100%; }
        .brand-name { white-space: normal; }
        .nav-right { justify-content: stretch; }
        .nav-search { width: 100%; max-width: 100%; min-width: 0; justify-content: space-between; }
        .nav-search span:not(.kbd) { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .nav-right .btn { display: none; }
        .hero-inner { width: 100%; max-width: 100%; padding: 46px 18px 50px; }
        .live-badge { width: 100%; margin-bottom: 42px; }
        .live-badge .pill { width: 100%; max-width: 100%; }
        .live-badge .pill { display: grid; grid-template-columns: 1fr; gap: 6px; justify-items: center; text-align: center; padding: 10px 12px; letter-spacing: .12em; }
        .live-badge .pill .sep { display: none; }
        .hero-split, .hero-left { min-width: 0; width: 100%; }
        .hero h1 { overflow-wrap: anywhere; }
        .hero h1 .title { font-size: clamp(42px, 15vw, 56px); }
        .hero .sub { max-width: 100%; font-size: 16px; overflow-wrap: break-word; }
        .hero-search { width: 100%; max-width: 100%; }
        .hero-search { min-width: 0; height: auto; min-height: 58px; padding: 10px 10px 10px 14px; gap: 8px; }
        .hero-search .input-wrap { min-width: 0; overflow: hidden; }
        .hero-search .ghost-cycle { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .hero-search .kbd { display: none; }
        .hero-search .go { flex: 0 0 auto; padding: 0 13px; }
        .hero-search .go svg { display: none; }
        .hero-cta-row { flex-direction: column; }
        .hero-cta-row { width: 100%; gap: 10px; margin-bottom: 44px; }
        .hero-cta-row .btn { width: 100%; }
        .corner.tr, .corner.br { right: 18px; }
      }
    </style>
  `;
}

function sourceBackedFigureNote(page: HtmlKey) {
  if (page === 'figure02') {
    return `
      <section class="source-backed-note" aria-label="Source-backed status update">
        <p class="source-backed-eyebrow">Source-backed status update · 2026-05-14</p>
        <h2>Figure 02 is now tracked as a retired / superseded pilot platform</h2>
        <p>Figure’s own BMW deployment update says F.02 contributed to production of 30,000 cars at BMW Group Plant Spartanburg, then returned to Figure HQ as part of fleet-wide retirement. The visual page remains preserved as the imported design reference, while the directory data now treats Figure 02 as historically important deployment evidence rather than a currently available commercial product.</p>
        <p class="source-backed-links"><a href="https://www.figure.ai/news/production-at-bmw">Figure BMW deployment update ↗</a> <a href="https://www.figure.ai/news/introducing-figure-03">Figure 03 announcement ↗</a></p>
      </section>
    `;
  }

  if (page === 'figureAi') {
    return `
      <section class="source-backed-note" aria-label="Source-backed company status update">
        <p class="source-backed-eyebrow">Source-backed company update · 2026-05-14</p>
        <h2>Figure AI profile aligned with Figure 03, Helix, BotQ, and F.02 retirement context</h2>
        <p>Figure AI remains a leading humanoid robotics company, but the structured directory record now separates Figure 02 historical deployment evidence from the current Figure 03 / Helix program. Figure also says it exceeded $1B in committed Series C capital at a $39B post-money valuation in 2025.</p>
        <p class="source-backed-links"><a href="https://www.figure.ai/news/series-c">Figure Series C release ↗</a> <a href="https://www.figure.ai/news/botq">BotQ manufacturing release ↗</a></p>
      </section>
    `;
  }

  return '';
}

function renderDocumentFragment(html: string, page: HtmlKey) {
  const head = extractTag(html, 'head');
  const body = extractTag(html, 'body');
  const styles = Array.from(head.matchAll(/<style[^>]*>[\s\S]*?<\/style>/gi)).map((match) => match[0]).join('\n');
  const fontLinks = Array.from(head.matchAll(/<link[^>]+fonts\.googleapis\.com[^>]*>|<link[^>]+fonts\.gstatic\.com[^>]*>/gi)).map((match) => match[0]).join('\n');

  // Inline scripts inserted through dangerouslySetInnerHTML do not execute in React,
  // so strip them for deterministic static rendering. The imported HTML is currently
  // used as the visual/design source of truth; interactive filters can be rebuilt in React later.
  const safeBody = rewriteRemainingPrototypeLinks(rewritePlaceholderLinks(rewriteKnownCards(body)), page)
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replaceAll('Humanoid Directory - Homepage.html', '/')
    .replaceAll('Humanoid Directory - Robots.html', '/robots/')
    .replaceAll('Humanoid Directory - Companies.html', '/companies/')
    .replaceAll('Humanoid Directory - Figure 02.html', '/robots/figure-02/')
    .replaceAll('Humanoid Directory - Figure AI.html', '/companies/figure-ai/')
    .replaceAll('Humanoid Directory - Design System.html', '/design-system/')
    .replaceAll('Humanoid Directory - Robot Card.html', '/components/robot-card/');
  const sourceNoteStyles = `
    <style>
      .source-backed-note{max-width:1180px;margin:32px auto 56px;padding:28px;border:1px solid rgba(148,163,184,.32);border-radius:28px;background:linear-gradient(135deg,rgba(15,23,42,.94),rgba(30,41,59,.9));color:#e5edf7;box-shadow:0 24px 80px rgba(15,23,42,.22);font-family:Inter,system-ui,sans-serif}.source-backed-note h2{margin:0 0 12px;font-size:clamp(1.4rem,2.2vw,2rem);letter-spacing:-.03em}.source-backed-note p{max-width:920px;line-height:1.7;color:#cbd5e1}.source-backed-eyebrow{margin:0 0 10px!important;text-transform:uppercase;letter-spacing:.14em;font-size:.74rem;color:#93c5fd!important}.source-backed-links{display:flex;gap:16px;flex-wrap:wrap;margin-top:18px!important}.source-backed-links a{color:#bfdbfe;text-decoration:none;border-bottom:1px solid rgba(191,219,254,.45)}
    </style>
  `;
  return `${fontLinks}\n${styles}\n${sourceNoteStyles}\n${mobileNavigationStyles()}\n${discoveryStyles()}\n${homepageMobileOverflowFixStyles(page)}\n${safeBody.replace('</nav>', `</nav>${mobileNavigationMarkup()}`)}\n${directoryDiscoveryMarkup(page)}\n${sourceBackedFigureNote(page)}`;
}

export function getStaticHtmlMetadata(key: HtmlKey) {
  const html = readFileSync(join(process.cwd(), htmlMap[key]), 'utf8');
  return { title: { absolute: extractTitle(html) } };
}

export function StaticHtmlPage({ page }: { page: HtmlKey }) {
  const html = readFileSync(join(process.cwd(), htmlMap[page]), 'utf8');
  return <div dangerouslySetInnerHTML={{ __html: renderDocumentFragment(html, page) }} />;
}
