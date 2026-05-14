import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { robots } from '@/data/robots';
import { getStaticHtmlMetadata, StaticHtmlPage } from '@/components/static-html-page';
import { RobotProfile } from '@/components/profile-pages';

export function generateStaticParams() {
  return robots.map((robot) => ({ slug: robot.slug }));
}

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  if (slug === 'figure-02') return getStaticHtmlMetadata('figure02');
  const robot = robots.find((item) => item.slug === slug);
  return {
    title: robot ? robot.seoTitle ?? `${robot.name} — Humanoid Robot Profile` : 'Robot profile',
    description: robot?.seoDescription ?? robot?.summary,
  };
}

export default async function RobotProfilePage({ params }: PageProps) {
  const { slug } = await params;
  if (slug === 'figure-02') return <StaticHtmlPage page="figure02" />;
  const robot = robots.find((item) => item.slug === slug);
  if (!robot) notFound();
  return <RobotProfile robot={robot} />;
}
