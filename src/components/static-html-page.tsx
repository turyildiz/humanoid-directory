import { readFileSync } from 'node:fs';
import { join } from 'node:path';

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

function routeForPlaceholderLink(innerHtml: string) {
  const text = textContent(innerHtml);

  if (text.includes('Humanoid Directory')) return '/';
  if (/^Robots$/.test(text) || text.startsWith('Browse robots') || text.startsWith('View all robots')) return '/robots/';
  if (/^Companies$/.test(text) || text.startsWith('Explore companies')) return '/companies/';
  if (text === 'Compare') return '/articles/tesla-optimus-vs-figure-02/';
  if (text === 'Use cases' || text === 'Newsletter') return '/articles/';
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
  const safeBody = rewritePlaceholderLinks(rewriteKnownCards(body))
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
  return `${fontLinks}\n${styles}\n${sourceNoteStyles}\n${homepageMobileOverflowFixStyles(page)}\n${safeBody}\n${sourceBackedFigureNote(page)}`;
}

export function getStaticHtmlMetadata(key: HtmlKey) {
  const html = readFileSync(join(process.cwd(), htmlMap[key]), 'utf8');
  return { title: { absolute: extractTitle(html) } };
}

export function StaticHtmlPage({ page }: { page: HtmlKey }) {
  const html = readFileSync(join(process.cwd(), htmlMap[page]), 'utf8');
  return <div dangerouslySetInnerHTML={{ __html: renderDocumentFragment(html, page) }} />;
}
