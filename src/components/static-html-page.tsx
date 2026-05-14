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

function renderDocumentFragment(html: string) {
  const head = extractTag(html, 'head');
  const body = extractTag(html, 'body');
  const styles = Array.from(head.matchAll(/<style[^>]*>[\s\S]*?<\/style>/gi)).map((match) => match[0]).join('\n');
  const fontLinks = Array.from(head.matchAll(/<link[^>]+fonts\.googleapis\.com[^>]*>|<link[^>]+fonts\.gstatic\.com[^>]*>/gi)).map((match) => match[0]).join('\n');

  // Inline scripts inserted through dangerouslySetInnerHTML do not execute in React,
  // so strip them for deterministic static rendering. The imported HTML is currently
  // used as the visual/design source of truth; interactive filters can be rebuilt in React later.
  const safeBody = body
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
