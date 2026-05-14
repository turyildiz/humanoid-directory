import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { companies } from '@/data/companies';
import { getStaticHtmlMetadata, StaticHtmlPage } from '@/components/static-html-page';

export function generateStaticParams() {
  return companies.map((company) => ({ slug: company.slug }));
}

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  if (slug === 'figure-ai') return getStaticHtmlMetadata('figureAi');
  const company = companies.find((item) => item.slug === slug);
  return { title: company ? `${company.name} — Humanoid Robotics Company` : 'Company profile' };
}

export default async function CompanyProfilePage({ params }: PageProps) {
  const { slug } = await params;
  if (slug === 'figure-ai') return <StaticHtmlPage page="figureAi" />;
  const company = companies.find((item) => item.slug === slug);
  if (!company) notFound();
  return <StaticHtmlPage page="companies" />;
}
