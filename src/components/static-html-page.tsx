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

function renderDocumentFragment(html: string) {
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
  return `${fontLinks}\n${styles}\n${safeBody}`;
}

export function getStaticHtmlMetadata(key: HtmlKey) {
  const html = readFileSync(join(process.cwd(), htmlMap[key]), 'utf8');
  return { title: { absolute: extractTitle(html) } };
}

export function StaticHtmlPage({ page }: { page: HtmlKey }) {
  const html = readFileSync(join(process.cwd(), htmlMap[page]), 'utf8');
  return <div dangerouslySetInnerHTML={{ __html: renderDocumentFragment(html) }} />;
}
