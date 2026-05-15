import Link from 'next/link';
import { companies, getCompany } from '@/data/companies';
import { robots, getRobot } from '@/data/robots';
import { getSource } from '@/data/sources';
import { timelineForCompany, timelineForRobot } from '@/data/timeline';
import type { Company, Robot, RobotStatus } from '@/lib/types';
import { displayValue } from '@/lib/format';

function sourceItems(ids: string[]) {
  return ids.map(getSource).filter(Boolean).map((source) => ({ title: source!.title, publisher: source!.publisher, url: source!.url }));
}

function formatYear(value?: number | null) {
  return value ? String(value) : 'Not publicly disclosed';
}

function statusLabel(status: RobotStatus) {
  return status.replace(/-/g, ' ');
}

function badgeClass(status: RobotStatus) {
  if (status === 'commercial') return 'b-commercial';
  if (status === 'pilot') return 'b-pilot';
  if (status === 'prototype') return 'b-prototype';
  if (status === 'research') return 'b-research';
  if (status === 'discontinued' || status === 'paused') return 'b-discontinued';
  return 'b-unknown';
}

function initials(name: string) {
  return name.split(/\s+/).map((part) => part[0]).join('').slice(0, 3).toUpperCase();
}

function quickFacts(robot: Robot) {
  return [
    { key: 'Height', value: displayValue(robot.specs.heightCm, ' cm') },
    { key: 'Weight', value: displayValue(robot.specs.weightKg, ' kg') },
    { key: 'Payload', value: displayValue(robot.specs.payloadKg, ' kg') },
    { key: 'Battery', value: displayValue(robot.specs.batteryLifeHours, ' h') },
    { key: 'Speed', value: displayValue(robot.specs.maxSpeedMps, ' m/s') },
    { key: 'DOF', value: displayValue(robot.specs.degreesOfFreedom, '') },
  ];
}

function specRows(robot: Robot) {
  return [
    ['Height', displayValue(robot.specs.heightCm, ' cm')],
    ['Weight', displayValue(robot.specs.weightKg, ' kg')],
    ['Payload', displayValue(robot.specs.payloadKg, ' kg')],
    ['Battery life', displayValue(robot.specs.batteryLifeHours, ' h')],
    ['Max speed', displayValue(robot.specs.maxSpeedMps, ' m/s')],
    ['Degrees of freedom', displayValue(robot.specs.degreesOfFreedom, ' DOF')],
    ['Locomotion', robot.specs.locomotion ?? 'Not publicly disclosed'],
    ['Hands', robot.specs.hands ?? 'Not publicly disclosed'],
    ['Announced', formatYear(robot.announcedYear)],
  ];
}

function Shell({ children, active }: { children: React.ReactNode; active: 'robots' | 'companies' }) {
  return (
    <div className="hd-profile">
      <nav className="nav">
        <div className="nav-inner">
          <Link href="/" className="brand">
            <div className="brand-mark">H</div>
            <div className="brand-name">Humanoid Directory<span className="sub">/ humanoid.directory</span></div>
          </Link>
          <div className="nav-links">
            <Link className={active === 'robots' ? 'active' : ''} href="/robots/">Robots</Link>
            <Link className={active === 'companies' ? 'active' : ''} href="/companies/">Companies</Link>
            <Link href="/articles/">Articles</Link>
            <Link href="/about/">Methodology</Link>
          </div>
          <div className="nav-right">
            <Link href="/robots/" className="nav-search"><span>Search robots…</span><span className="kbd">⌘K</span></Link>
            <Link href="/submit/" className="btn btn-sm btn-primary-accent">Submit a robot</Link>
          </div>
        </div>
      </nav>
      {children}
      <footer className="foot">
        <div className="foot-inner">
          <div className="foot-row">
            <Link href="/" className="foot-brand"><span className="brand-mark">H</span><span>Humanoid Directory</span></Link>
            <div className="foot-links">
              <Link href="/robots/">Robots</Link>
              <Link href="/companies/">Companies</Link>
              <Link href="/articles/">Articles</Link>
              <Link href="/about/">Methodology</Link>
              <Link href="/submit/">Submit update</Link>
            </div>
          </div>
          <div className="foot-bottom"><span>SOURCE-BACKED HUMANOID ROBOTICS DIRECTORY</span><span>NO INVENTED SPECS</span></div>
        </div>
      </footer>
    </div>
  );
}

function Sources({ ids }: { ids: string[] }) {
  const sources = sourceItems(ids);
  if (!sources.length) return <p className="muted">No public source references attached yet.</p>;
  return (
    <div className="sources-list">
      {sources.map((source, index) => (
        <a className="source-item" href={source.url} key={source.url}>
          <span className="ix">{String(index + 1).padStart(2, '0')}</span>
          <span><strong>{source.title}</strong><small>{source.publisher} · source-backed claim reference</small></span>
          <span className="meta">↗</span>
        </a>
      ))}
    </div>
  );
}

function RobotCard({ robot }: { robot: Robot }) {
  const company = getCompany(robot.companySlug);
  return (
    <Link className="robot-card" href={`/robots/${robot.slug}/`}>
      <div className="rc-frame">
        <span className={`badge ${badgeClass(robot.status)} badge-tl`}><span className="dot"></span>{statusLabel(robot.status)}</span>
        <span className="id-tr">HD-{robot.slug.slice(0, 6).toUpperCase()}</span>
        <div className="figure"><span>{initials(robot.name)}</span></div>
      </div>
      <div className="rc-body">
        <h3 className="rc-name">{robot.name}</h3>
        <p className="rc-company">{company?.name ?? robot.companySlug}<span className="sep"></span>{robot.country}</p>
        <p className="rc-desc">{robot.summary}</p>
        <div className="rc-specs">
          {quickFacts(robot).slice(0, 4).map((fact) => <span className="chip" key={fact.key}>{fact.value}</span>)}
        </div>
        <div className="rc-foot"><span>{robot.announcedYear ? `Announced ${robot.announcedYear}` : 'Tracked profile'}</span><span>View profile →</span></div>
      </div>
    </Link>
  );
}

export function RobotProfile({ robot }: { robot: Robot }) {
  const company = getCompany(robot.companySlug);
  const timeline = timelineForRobot(robot.slug);
  const similar = (robot.similarRobots ?? robots.filter((item) => item.slug !== robot.slug && item.status === robot.status).slice(0, 3).map((item) => item.slug))
    .map(getRobot)
    .filter(Boolean) as Robot[];

  return (
    <Shell active="robots">
      <div className="crumbs">
        <div className="crumbs-inner">
          <Link href="/">Humanoid Directory</Link><span className="dot"></span><Link href="/robots/">Robots</Link><span className="dot"></span><span className="current">{robot.name}</span>
        </div>
      </div>

      <header className="hero robot-hero">
        <div className="hero-inner">
          <div className="hero-left">
            <div className="meta-top">
              <span className={`badge ${badgeClass(robot.status)}`}><span className="dot"></span>{statusLabel(robot.status)}</span>
              <span>{robot.generation ?? 'Tracked platform'}</span><span className="sep"></span><span>Announced {formatYear(robot.announcedYear)}</span>
            </div>
            <h1>{robot.name}</h1>
            <p className="company-line">
              {company ? <Link className="accent" href={`/companies/${company.slug}/`}>{company.name}</Link> : <span className="accent">{robot.companySlug}</span>}
              <span className="sep"></span><span>{robot.country}</span>
            </p>
            <p className="desc">{robot.summary}</p>
            <div className="hero-actions">
              {company?.websiteUrl ? <a href={company.websiteUrl} className="btn btn-primary-accent">Visit official website ↗</a> : null}
              <Link href="/articles/" className="btn btn-secondary-dark">Related analysis</Link>
              <Link href="/robots/" className="btn btn-ghost-dark">Browse robots</Link>
            </div>
            <div className="verified-line"><span className="pulse"></span><span>Verified {robot.lastVerifiedAt}</span><span className="sep"></span><span><span className="accent">{robot.sources.length}</span> sources</span></div>
          </div>
          <div className="hero-visual" aria-hidden="true"><div className="bot-silhouette">{initials(robot.name)}</div></div>
        </div>
      </header>

      <section className="facts-bar" aria-label="Robot quick facts">
        <div className="qf-inner">
          {quickFacts(robot).map((fact) => <div className="qf-cell" key={fact.key}><span className="k">{fact.key}</span><span className="v">{fact.value}</span></div>)}
        </div>
      </section>

      <main className="body-wrap">
        <aside className="toc" aria-label="On this page">
          <div className="toc-title">On this page</div>
          <a href="#overview" className="active"><span className="ix">01</span>Overview</a>
          <a href="#specs"><span className="ix">02</span>Specs</a>
          <a href="#timeline"><span className="ix">03</span>Timeline</a>
          <a href="#sources"><span className="ix">04</span>Sources</a>
        </aside>
        <div className="content">
          <section className="section source-backed" id="overview">
            <div className="sec-head"><span className="ix">§ 01</span><h2>Overview</h2><span className="right">Source-backed</span></div>
            <p className="lead">{robot.overview ?? robot.summary}</p>
            <div className="details-grid two">
              <div className="detail-block"><h4>Availability</h4><p>{robot.availability}</p></div>
              <div className="detail-block"><h4>Verification notes</h4><p>{robot.verificationNotes ?? 'Profile is based on public company and source material. Unknown values remain undisclosed until stronger sources are available.'}</p></div>
              <div className="detail-block"><h4>Use cases</h4><div className="detail-list">{robot.useCases.map((item) => <span className="detail-tag" key={item}>{item}</span>)}</div></div>
              <div className="detail-block"><h4>Capabilities</h4><div className="detail-list">{robot.capabilities.map((item) => <span className="detail-tag" key={item}>{item}</span>)}</div></div>
            </div>
          </section>

          <section className="section" id="specs">
            <div className="sec-head"><span className="ix">§ 02</span><h2>Known public specs</h2><span className="right">Unknowns preserved</span></div>
            <div className="specs">
              <div className="spec-group"><h4>Robot data</h4><table className="spec-table"><tbody>{specRows(robot).map(([label, value]) => <tr key={label}><td className="k">{label}</td><td>{value}</td></tr>)}</tbody></table></div>
              <div className="spec-group"><h4>Company</h4><table className="spec-table"><tbody><tr><td className="k">Builder</td><td>{company?.name ?? 'Not publicly disclosed'}</td></tr><tr><td className="k">Location</td><td>{company?.city ? `${company.city}, ${company.country}` : robot.country}</td></tr><tr><td className="k">Status confidence</td><td>{robot.statusConfidence ?? 'unknown'}</td></tr></tbody></table></div>
            </div>
          </section>

          <section className="section" id="timeline">
            <div className="sec-head"><span className="ix">§ 03</span><h2>Known public updates</h2><span className="right">{timeline.length} milestones</span></div>
            <div className="timeline">{timeline.length ? timeline.map((event, index) => <div className={`tl-item ${index === 0 ? 'first' : ''}`} key={event.id}><div className="tl-date"><span>{event.date}</span><span className="kind-tag product">Update</span></div><h3 className="tl-title">{event.title}</h3><p className="tl-desc">{event.summary}</p></div>) : <p className="muted">No timeline entries yet. This profile needs deeper source work.</p>}</div>
          </section>

          <section className="section" id="sources">
            <div className="sec-head"><span className="ix">§ 04</span><h2>Sources</h2><span className="right">Primary references</span></div>
            <Sources ids={robot.sources} />
          </section>

          {similar.length ? <section className="similar-section"><div className="sec-head"><span className="ix">Related</span><h2>Similar robots</h2><Link className="right" href="/robots/">View all →</Link></div><div className="similar-grid">{similar.map((item) => <RobotCard robot={item} key={item.slug} />)}</div></section> : null}
        </div>
      </main>
    </Shell>
  );
}

export function CompanyProfile({ company }: { company: Company }) {
  const companyRobots = company.robots.map(getRobot).filter(Boolean) as Robot[];
  const timeline = timelineForCompany(company.slug);

  return (
    <Shell active="companies">
      <div className="crumbs">
        <div className="crumbs-inner"><Link href="/">Humanoid Directory</Link><span className="dot"></span><Link href="/companies/">Companies</Link><span className="dot"></span><span className="current">{company.name}</span></div>
      </div>

      <header className="hero company-hero">
        <div className="hero-inner company-hero-inner">
          <div className="hero-top">
            <div className="hero-logo">{initials(company.name).slice(0, 1)}</div>
            <div className="hero-name-block">
              <div className="meta"><span className="badge b-active"><span className="dot"></span>Active</span><span>Founded {formatYear(company.foundedYear)}</span>{company.stage ? <><span className="sep"></span><span>{company.stage}</span></> : null}</div>
              <h1>{company.name}</h1>
              <p className="place-line"><span>{company.city ? `${company.city}, ${company.country}` : company.country}</span><span className="sep"></span><span>{companyRobots.length} tracked robot{companyRobots.length === 1 ? '' : 's'}</span></p>
            </div>
          </div>
          <p className="desc">{company.summary}</p>
          <div className="hero-actions">{company.websiteUrl ? <a href={company.websiteUrl} className="ext-link"><span className="ic">↗</span>Official website</a> : null}<Link href="/robots/" className="ext-link"><span className="ic">H</span>Robot directory</Link></div>
        </div>
      </header>

      <section className="facts-bar" aria-label="Company facts">
        <div className="qf-inner company-facts">
          <div className="qf-cell"><span className="k">Founded</span><span className="v">{formatYear(company.foundedYear)}</span></div>
          <div className="qf-cell"><span className="k">Country</span><span className="v">{company.country}</span></div>
          <div className="qf-cell"><span className="k">City</span><span className="v">{company.city ?? 'Not disclosed'}</span></div>
          <div className="qf-cell"><span className="k">Robots</span><span className="v">{companyRobots.length}</span></div>
        </div>
      </section>

      <main className="body-wrap">
        <aside className="toc" aria-label="On this page"><div className="toc-title">On this page</div><a className="active" href="#robots"><span className="ix">01</span>Robots</a><a href="#timeline"><span className="ix">02</span>Timeline</a><a href="#details"><span className="ix">03</span>Details</a><a href="#sources"><span className="ix">04</span>Sources</a></aside>
        <div className="content">
          <section className="section source-backed" id="robots"><div className="sec-head"><span className="ix">§ 01</span><h2>Humanoid robots by {company.name}</h2><span className="right">{companyRobots.length} robots</span></div><div className="robot-grid">{companyRobots.map((robot) => <RobotCard robot={robot} key={robot.slug} />)}</div></section>
          <section className="section" id="timeline"><div className="sec-head"><span className="ix">§ 02</span><h2>Funding & timeline</h2><span className="right">{timeline.length} milestones</span></div><div className="timeline">{timeline.length ? timeline.map((event, index) => <div className={`tl-item ${index === 0 ? 'first' : ''}`} key={event.id}><div className="tl-date"><span>{event.date}</span><span className="kind-tag product">Update</span></div><h3 className="tl-title">{event.title}</h3><p className="tl-desc">{event.summary}</p></div>) : <p className="muted">No timeline entries yet. This company profile needs deeper source work.</p>}</div></section>
          <section className="section" id="details"><div className="sec-head"><span className="ix">§ 03</span><h2>Company details</h2><span className="right">Source-backed</span></div><p className="lead">{company.overview ?? company.summary}</p><div className="details-grid"><div className="detail-block"><h4>Focus areas</h4><div className="detail-list">{company.focus.map((item) => <span className="detail-tag" key={item}>{item}</span>)}</div></div>{company.fundingSummary ? <div className="detail-block"><h4>Funding / program note</h4><p>{company.fundingSummary}</p></div> : null}<div className="detail-block"><h4>Content note</h4><p>Company profiles track humanoid-related activity only. Broader corporate history is included only when it helps explain the humanoid robotics program.</p></div></div></section>
          <section className="section" id="sources"><div className="sec-head"><span className="ix">§ 04</span><h2>Sources</h2><span className="right">Primary references</span></div><Sources ids={company.sources} /></section>
        </div>
      </main>
    </Shell>
  );
}
