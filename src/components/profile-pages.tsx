import Link from 'next/link';
import { companies, getCompany } from '@/data/companies';
import { robots, getRobot } from '@/data/robots';
import { getSource } from '@/data/sources';
import { timelineForCompany, timelineForRobot } from '@/data/timeline';
import type { Company, Robot } from '@/lib/types';
import { displayValue } from '@/lib/format';
import { ContentLayout, SourceList } from '@/components/content-layout';

function sourceItems(ids: string[]) {
  return ids.map(getSource).filter(Boolean).map((source) => ({ title: source!.title, publisher: source!.publisher, url: source!.url }));
}

function formatYear(value?: number | null) {
  return value ? String(value) : 'Not publicly disclosed';
}

function specRows(robot: Robot) {
  return [
    ['Height', displayValue(robot.specs.heightCm, ' cm')],
    ['Weight', displayValue(robot.specs.weightKg, ' kg')],
    ['Payload', displayValue(robot.specs.payloadKg, ' kg')],
    ['Battery', displayValue(robot.specs.batteryLifeHours, ' h')],
    ['Max speed', displayValue(robot.specs.maxSpeedMps, ' m/s')],
    ['Degrees of freedom', displayValue(robot.specs.degreesOfFreedom, ' DOF')],
    ['Locomotion', robot.specs.locomotion ?? 'Not publicly disclosed'],
    ['Hands', robot.specs.hands ?? 'Not publicly disclosed'],
  ];
}

export function RobotProfile({ robot }: { robot: Robot }) {
  const company = getCompany(robot.companySlug);
  const timeline = timelineForRobot(robot.slug);
  const similar = (robot.similarRobots ?? robots.filter((item) => item.slug !== robot.slug && item.status === robot.status).slice(0, 3).map((item) => item.slug))
    .map(getRobot)
    .filter(Boolean) as Robot[];

  return (
    <ContentLayout>
      <main>
        <section className="profile-hero section-dark">
          <div>
            <span className="eyebrow">ROBOT PROFILE</span>
            <h1>{robot.name}</h1>
            <p>{robot.summary}</p>
            <div className="profile-meta">
              <span className={`status ${robot.status}`}>{robot.status}</span>
              {company ? <Link href={`/companies/${company.slug}/`}>{company.name}</Link> : null}
              <span>{robot.country}</span>
              <span>Verified {robot.lastVerifiedAt}</span>
            </div>
          </div>
          <div className="profile-orb">{robot.name.split(' ').map((part) => part[0]).join('').slice(0, 3)}</div>
        </section>

        <section className="section profile-layout">
          <article className="card detail-card">
            <span className="eyebrow light">OVERVIEW</span>
            <h2>What it is</h2>
            <p>{robot.overview ?? robot.summary}</p>

            <h2>Availability</h2>
            <p>{robot.availability}</p>

            <h2>Use cases</h2>
            <div className="chips">{robot.useCases.map((item) => <span key={item}>{item}</span>)}</div>

            <h2>Capabilities</h2>
            <div className="chips">{robot.capabilities.map((item) => <span key={item}>{item}</span>)}</div>

            <h2>Verification notes</h2>
            <p>{robot.verificationNotes ?? 'Profile is based on public company and source material. Unknown values remain undisclosed until stronger sources are available.'}</p>
          </article>

          <aside className="card specs-card">
            <span className="eyebrow light">SPECS</span>
            <h2>Known public specs</h2>
            {specRows(robot).map(([label, value]) => (
              <div className="spec-row" key={label}><span>{label}</span><strong>{value}</strong></div>
            ))}
            <div className="spec-row"><span>Announced</span><strong>{formatYear(robot.announcedYear)}</strong></div>
          </aside>
        </section>

        <section className="section split-section">
          <article className="card">
            <span className="eyebrow light">TIMELINE</span>
            <h2>Known public updates</h2>
            {timeline.length ? timeline.map((event) => (
              <div className="timeline-item" key={event.id}>
                <strong>{event.date} — {event.title}</strong>
                <p>{event.summary}</p>
              </div>
            )) : <p className="muted">No timeline entries yet. This profile needs deeper source work.</p>}
          </article>
          <article className="card">
            <span className="eyebrow light">SOURCES</span>
            <h2>Primary references</h2>
            <SourceList sources={sourceItems(robot.sources)} />
          </article>
        </section>

        {similar.length ? (
          <section className="section">
            <div className="section-heading row">
              <div><span className="eyebrow light">RELATED</span><h2>Similar robots</h2></div>
              <Link className="text-link" href="/robots/">View all robots →</Link>
            </div>
            <div className="grid cards-grid">
              {similar.map((item) => (
                <Link className="card" href={`/robots/${item.slug}/`} key={item.slug}>
                  <div className="card-topline"><span>{item.country}</span><span className={`status ${item.status}`}>{item.status}</span></div>
                  <h3>{item.name}</h3>
                  <p>{item.summary}</p>
                </Link>
              ))}
            </div>
          </section>
        ) : null}
      </main>
    </ContentLayout>
  );
}

export function CompanyProfile({ company }: { company: Company }) {
  const companyRobots = company.robots.map(getRobot).filter(Boolean) as Robot[];
  const timeline = timelineForCompany(company.slug);

  return (
    <ContentLayout>
      <main>
        <section className="profile-hero section-dark">
          <div>
            <span className="eyebrow">COMPANY PROFILE</span>
            <h1>{company.name}</h1>
            <p>{company.summary}</p>
            <div className="profile-meta">
              <span>{company.city ? `${company.city}, ${company.country}` : company.country}</span>
              <span>Founded {formatYear(company.foundedYear)}</span>
              {company.websiteUrl ? <Link href={company.websiteUrl}>Official website ↗</Link> : null}
            </div>
          </div>
          <div className="profile-orb">{company.name.split(' ').map((part) => part[0]).join('').slice(0, 3)}</div>
        </section>

        <section className="section profile-layout">
          <article className="card detail-card">
            <span className="eyebrow light">OVERVIEW</span>
            <h2>What it builds</h2>
            <p>{company.overview ?? company.summary}</p>
            <h2>Focus areas</h2>
            <div className="chips">{company.focus.map((item) => <span key={item}>{item}</span>)}</div>
            <h2>Content note</h2>
            <p>Company profiles track humanoid-related activity only. Broader corporate history is included only when it helps explain the humanoid robotics program.</p>
          </article>

          <aside className="card specs-card">
            <span className="eyebrow light">COMPANY DATA</span>
            <h2>Known fields</h2>
            <div className="spec-row"><span>Country</span><strong>{company.country}</strong></div>
            <div className="spec-row"><span>City</span><strong>{company.city ?? 'Not publicly disclosed'}</strong></div>
            <div className="spec-row"><span>Founded</span><strong>{formatYear(company.foundedYear)}</strong></div>
            <div className="spec-row"><span>Tracked robots</span><strong>{companyRobots.length}</strong></div>
            {company.stage ? <div className="spec-row"><span>Stage</span><strong>{company.stage}</strong></div> : null}
          </aside>
        </section>

        <section className="section">
          <div className="section-heading row">
            <div><span className="eyebrow light">ROBOTS</span><h2>Tracked robots by {company.name}</h2></div>
            <Link className="text-link" href="/robots/">View robot directory →</Link>
          </div>
          <div className="grid cards-grid">
            {companyRobots.map((robot) => (
              <Link className="card" href={`/robots/${robot.slug}/`} key={robot.slug}>
                <div className="card-topline"><span>{robot.country}</span><span className={`status ${robot.status}`}>{robot.status}</span></div>
                <h3>{robot.name}</h3>
                <p>{robot.summary}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="section split-section">
          <article className="card">
            <span className="eyebrow light">TIMELINE</span>
            <h2>Known public updates</h2>
            {timeline.length ? timeline.map((event) => (
              <div className="timeline-item" key={event.id}>
                <strong>{event.date} — {event.title}</strong>
                <p>{event.summary}</p>
              </div>
            )) : <p className="muted">No timeline entries yet. This profile needs deeper source work.</p>}
          </article>
          <article className="card">
            <span className="eyebrow light">SOURCES</span>
            <h2>Primary references</h2>
            <SourceList sources={sourceItems(company.sources)} />
          </article>
        </section>
      </main>
    </ContentLayout>
  );
}
