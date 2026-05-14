import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { companies } from '@/data/companies';
import { getStaticHtmlMetadata, StaticHtmlPage } from '@/components/static-html-page';
import { CompanyProfile } from '@/components/profile-pages';

export function generateStaticParams() {
  return companies.map((company) => ({ slug: company.slug }));
}

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  if (slug === 'figure-ai') return getStaticHtmlMetadata('figureAi');
  const company = companies.find((item) => item.slug === slug);
  return {
    title: company ? company.seoTitle ?? `${company.name} — Humanoid Robotics Company` : 'Company profile',
    description: company?.seoDescription ?? company?.summary,
  };
}

export default async function CompanyProfilePage({ params }: PageProps) {
  const { slug } = await params;
  if (slug === 'figure-ai') return <StaticHtmlPage page="figureAi" />;
  const company = companies.find((item) => item.slug === slug);
  if (!company) notFound();
  return <CompanyProfile company={company} />;
}
