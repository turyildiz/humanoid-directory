import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getRobot, robots } from '@/data/robots';
import { getCompany } from '@/data/companies';
import { getSource } from '@/data/sources';
import { StatusBadge } from '@/components/status-badge';
import { displayValue } from '@/lib/format';
import { statusDescriptions } from '@/lib/status';

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return robots.map((robot) => ({ slug: robot.slug })); }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const robot = getRobot(slug);
  if (!robot) return { title: 'Robot not found' };
  return { title: robot.name, description: robot.summary };
}

export default async function RobotDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const robot = getRobot(slug);
  if (!robot) notFound();
  const company = getCompany(robot.companySlug);
  const specs = [
    ['Height', displayValue(robot.specs.heightCm, ' cm')],
    ['Weight', displayValue(robot.specs.weightKg, ' kg')],
    ['Payload', displayValue(robot.specs.payloadKg, ' kg')],
    ['Battery', displayValue(robot.specs.batteryLifeHours, ' h')],
    ['Max speed', displayValue(robot.specs.maxSpeedMps, ' m/s')],
    ['Degrees of freedom', displayValue(robot.specs.degreesOfFreedom)],
    ['Locomotion', displayValue(robot.specs.locomotion)],
    ['Hands', displayValue(robot.specs.hands)],
  ];
  return (
    <main>
      <section className="profile-hero section-dark">
        <div>
          <span className="eyebrow">ROBOT PROFILE</span>
          <h1>{robot.name}</h1>
          <p>{robot.summary}</p>
          <div className="profile-meta"><StatusBadge status={robot.status} /><span>{company?.name}</span><span>{robot.country}</span><span>Verified {robot.lastVerifiedAt}</span></div>
        </div>
        <div className="profile-orb">{robot.name.split(' ').map(w => w[0]).join('').slice(0, 3)}</div>
      </section>
      <section className="section profile-layout">
        <article className="card detail-card">
          <h2>Readiness signal</h2>
          <p>{statusDescriptions[robot.status]}</p>
          <h2>Use cases</h2>
          <div className="chips">{robot.useCases.map((item) => <span key={item}>{item}</span>)}</div>
          <h2>Capabilities</h2>
          <ul>{robot.capabilities.map((item) => <li key={item}>{item}</li>)}</ul>
          {company && <p><Link className="text-link" href={`/companies/${company.slug}/`}>View {company.name} company profile →</Link></p>}
        </article>
        <aside className="card specs-card">
          <h2>Specs</h2>
          {specs.map(([label, value]) => <div className="spec-row" key={label}><span>{label}</span><strong>{value}</strong></div>)}
          <h2>Sources</h2>
          <ul className="sources-list">
            {robot.sources.map((id) => {
              const source = getSource(id);
              return source ? <li key={id}><a href={source.url} target="_blank" rel="noreferrer">{source.title}</a><span>{source.publisher}</span></li> : null;
            })}
          </ul>
        </aside>
      </section>
    </main>
  );
}
