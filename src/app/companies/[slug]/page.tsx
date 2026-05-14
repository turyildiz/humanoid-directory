import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { companies, getCompany } from '@/data/companies';
import { robots } from '@/data/robots';
import { getSource } from '@/data/sources';
import { RobotCard } from '@/components/robot-card';

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return companies.map((company) => ({ slug: company.slug })); }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const company = getCompany(slug);
  if (!company) return { title: 'Company not found' };
  return { title: company.name, description: company.summary };
}

export default async function CompanyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const company = getCompany(slug);
  if (!company) notFound();
  const companyRobots = robots.filter((robot) => robot.companySlug === company.slug);
  return (
    <main>
      <section className="profile-hero section-dark">
        <div>
          <span className="eyebrow">COMPANY PROFILE</span>
          <h1>{company.name}</h1>
          <p>{company.summary}</p>
          <div className="profile-meta"><span>{company.country}</span>{company.city && <span>{company.city}</span>}{company.foundedYear && <span>Founded {company.foundedYear}</span>}</div>
        </div>
        <div className="profile-orb">{company.name.split(' ').map(w => w[0]).join('').slice(0, 3)}</div>
      </section>
      <section className="section profile-layout">
        <article>
          <div className="section-heading"><span className="eyebrow light">ROBOTS</span><h2>Robots by {company.name}</h2></div>
          <div className="grid cards-grid">{companyRobots.map((robot) => <RobotCard key={robot.slug} robot={robot} />)}</div>
        </article>
        <aside className="card specs-card">
          <h2>Focus</h2>
          <div className="chips">{company.focus.map((item) => <span key={item}>{item}</span>)}</div>
          {company.websiteUrl && <p><a className="text-link" href={company.websiteUrl} target="_blank" rel="noreferrer">Official website →</a></p>}
          <h2>Sources</h2>
          <ul className="sources-list">{company.sources.map((id) => { const source = getSource(id); return source ? <li key={id}><a href={source.url} target="_blank" rel="noreferrer">{source.title}</a><span>{source.publisher}</span></li> : null; })}</ul>
          <p><Link className="text-link" href="/companies/">← All companies</Link></p>
        </aside>
      </section>
    </main>
  );
}
