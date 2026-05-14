import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { robots } from '@/data/robots';
import { getStaticHtmlMetadata, StaticHtmlPage } from '@/components/static-html-page';

export function generateStaticParams() {
  return robots.map((robot) => ({ slug: robot.slug }));
}

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  if (slug === 'figure-02') return getStaticHtmlMetadata('figure02');
  const robot = robots.find((item) => item.slug === slug);
  return { title: robot ? `${robot.name} — Humanoid Robot Profile` : 'Robot profile' };
}

export default async function RobotProfilePage({ params }: PageProps) {
  const { slug } = await params;
  if (slug === 'figure-02') return <StaticHtmlPage page="figure02" />;
  const robot = robots.find((item) => item.slug === slug);
  if (!robot) notFound();
  return <StaticHtmlPage page="robots" />;
}
