import Link from 'next/link';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

export function ContentLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      {children}
      <SiteFooter />
    </>
  );
}

export function SourceList({ sources }: { sources: { title: string; publisher: string; url: string }[] }) {
  if (!sources.length) return null;
  return (
    <ol className="sources-list">
      {sources.map((source) => (
        <li key={source.url}>
          <Link className="text-link" href={source.url}>{source.title}</Link>
          <span>{source.publisher} · source-backed claim reference</span>
        </li>
      ))}
    </ol>
  );
}
