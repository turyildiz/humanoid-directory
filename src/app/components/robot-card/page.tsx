import type { Metadata } from 'next';
import { getStaticHtmlMetadata, StaticHtmlPage } from '@/components/static-html-page';
export const metadata: Metadata = getStaticHtmlMetadata('robotCard');
export default function Page() { return <StaticHtmlPage page="robotCard" />; }
