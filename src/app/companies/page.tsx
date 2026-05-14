import type { Metadata } from 'next';
import { getStaticHtmlMetadata, StaticHtmlPage } from '@/components/static-html-page';

export const metadata: Metadata = getStaticHtmlMetadata('companies');

export default function Page() {
  return <StaticHtmlPage page="companies" />;
}
