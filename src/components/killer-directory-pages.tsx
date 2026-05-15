import Link from 'next/link';
import type { ReactNode } from 'react';
import { articles } from '@/data/articles';
import { companies } from '@/data/companies';
import { robots } from '@/data/robots';
import { DirectoryLaunchPanel } from '@/components/directory-launch-panel';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import type { Robot, RobotStatus } from '@/lib/types';

const publishedRobots = robots.filter((robot) => robot.published !== false);
const publishedCompanies = companies.filter((company) => company.published !== false);
const companyBySlug = new Map(publishedCompanies.map((company) => [company.slug, company]));
const featuredRobots = publishedRobots.filter((robot) => robot.featured).slice(0, 6);
const commercialRobots = publishedRobots.filter((robot) => robot.status === 'commercial');
const pilotRobots = publishedRobots.filter((robot) => robot.status === 'pilot');
const latestArticles = articles.slice(0, 3);

const statusLabels: Record<RobotStatus, string> = {
  concept: 'Concept',
  prototype: 'Prototype',
  research: 'Research',
  pilot: 'Pilot',
  commercial: 'Commercial',
  paused: 'Paused',
  discontinued: 'Discontinued',
  unknown: 'Unknown',
};

function companyName(robot: Robot) {
  return companyBySlug.get(robot.companySlug)?.name ?? robot.companySlug;
}

function specSummary(robot: Robot) {
  const parts = [
    robot.specs.heightCm ? `${robot.specs.heightCm} cm` : null,
    robot.specs.weightKg ? `${robot.specs.weightKg} kg` : null,
    robot.specs.payloadKg ? `${robot.specs.payloadKg} kg payload` : null,
    robot.specs.maxSpeedMps ? `${robot.specs.maxSpeedMps} m/s` : null,
  ].filter(Boolean);
  return parts.length ? parts.join(' · ') : 'Specs partially undisclosed';
}

function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="killer-site">
      <SiteHeader />
      {children}
      <SiteFooter />
    </div>
  );
}

function RobotCard({ robot, priority = false }: { robot: Robot; priority?: boolean }) {
  return (
    <Link className={`killer-card robot-proof ${priority ? 'is-priority' : ''}`} href={`/robots/${robot.slug}/`}>
      <span className={`killer-status status-${robot.status}`}>{statusLabels[robot.status]}</span>
      <strong>{robot.name}</strong>
      <span>{companyName(robot)} · {robot.country}</span>
      <p>{robot.summary}</p>
      <em>{specSummary(robot)}</em>
    </Link>
  );
}

function MetricStrip() {
  return (
    <section className="killer-metrics" aria-label="Directory coverage">
      <div><strong>{publishedRobots.length}</strong><span>source-backed robot profiles</span></div>
      <div><strong>{publishedCompanies.length}</strong><span>tracked builders</span></div>
      <div><strong>{commercialRobots.length}</strong><span>commercial/listed platforms</span></div>
      <div><strong>{pilotRobots.length}</strong><span>pilot/deployment-stage robots</span></div>
    </section>
  );
}

function TrustBar() {
  return (
    <div className="killer-trust" aria-label="Trust signals">
      <span>Humanoid robots only</span>
      <span>Public-source verified</span>
      <span>Unknowns stay visible</span>
      <span>Status labels explained</span>
    </div>
  );
}

export function KillerHomePage() {
  const heroRobot = publishedRobots.find((robot) => robot.slug === 'unitree-g1') ?? featuredRobots[0];
  const comparison = articles.find((article) => article.slug === 'tesla-optimus-vs-figure-02') ?? articles[0];
  const marketMap = articles.find((article) => article.slug === 'humanoid-robot-companies-to-watch') ?? articles[articles.length - 1];

  return (
    <Shell>
      <main className="killer-main">
        <section className="killer-hero">
          <div className="killer-hero-copy">
            <p className="killer-eyebrow">Humanoid Directory · verified robotics database</p>
            <h1>The clearest map of humanoid robots being built right now.</h1>
            <p className="killer-dek">Search robots, compare maturity, track companies, and separate working evidence from demo hype — all from public sources.</p>
            <div className="killer-actions">
              <Link className="killer-button primary" href="/robots/">Browse robots</Link>
              <Link className="killer-button" href="/companies/">Explore companies</Link>
              <Link className="killer-button subtle" href="/articles/status-labels-explained/">How statuses work</Link>
            </div>
            <TrustBar />
          </div>
          <aside className="killer-hero-panel" aria-label="Featured robot preview">
            <span className="panel-label">Featured profile</span>
            <h2>{heroRobot.name}</h2>
            <p>{heroRobot.summary}</p>
            <dl>
              <div><dt>Status</dt><dd>{statusLabels[heroRobot.status]}</dd></div>
              <div><dt>Builder</dt><dd>{companyName(heroRobot)}</dd></div>
              <div><dt>Evidence</dt><dd>{heroRobot.statusConfidence ?? 'unknown'} · verified {heroRobot.lastVerifiedAt}</dd></div>
            </dl>
            <Link href={`/robots/${heroRobot.slug}/`}>Open source-backed profile →</Link>
          </aside>
        </section>

        <MetricStrip />

        <section className="killer-section hd-discovery">
          <div className="killer-section-head">
            <p>Start with the database</p>
            <h2>Robots worth checking first</h2>
            <Link href="/robots/">View all robots →</Link>
          </div>
          <div className="killer-grid robots-grid">
            {featuredRobots.map((robot, index) => <RobotCard robot={robot} priority={index === 0} key={robot.slug} />)}
          </div>
        </section>

        <section className="killer-split-section">
          <div>
            <p className="killer-eyebrow">Company landscape</p>
            <h2>Track the builders, not just the demos.</h2>
            <p>Each company profile links robot programs, focus areas, funding or production signals when sourced, and the gaps that still need verification.</p>
            <Link className="killer-button primary" href="/companies/">Open company map</Link>
          </div>
          <div className="killer-company-list">
            {publishedCompanies.slice(0, 6).map((company) => (
              <Link href={`/companies/${company.slug}/`} key={company.slug}>
                <strong>{company.name}</strong>
                <span>{company.country} · {company.robots.length} tracked robot{company.robots.length === 1 ? '' : 's'}</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="killer-section">
          <div className="killer-section-head">
            <p>Editorial layer</p>
            <h2>Methodology and market context</h2>
            <Link href="/articles/">Read articles →</Link>
          </div>
          <div className="killer-grid article-grid-lite">
            {latestArticles.map((article) => (
              <Link className="killer-card article-proof" href={`/articles/${article.slug}/`} key={article.slug}>
                <span>{article.category} · {article.readingMinutes} min</span>
                <strong>{article.title}</strong>
                <p>{article.dek}</p>
              </Link>
            ))}
            <Link className="killer-card article-proof" href={`/articles/${comparison.slug}/`}>
              <span>Comparison</span>
              <strong>{comparison.title}</strong>
              <p>{comparison.dek}</p>
            </Link>
            <Link className="killer-card article-proof" href={`/articles/${marketMap.slug}/`}>
              <span>Market map</span>
              <strong>{marketMap.title}</strong>
              <p>{marketMap.dek}</p>
            </Link>
          </div>
        </section>
      </main>
    </Shell>
  );
}

export function KillerRobotsPage() {
  return (
    <Shell>
      <main className="killer-main directory-main">
        <section className="directory-hero">
          <p className="killer-eyebrow">Robot database</p>
          <h1>Humanoid robots, ranked by evidence — not hype.</h1>
          <p>Filter the full launch set by maturity, country, and builder. Every card links to a source-backed profile with public evidence and visible unknowns.</p>
          <div className="killer-actions directory-actions">
            <a className="killer-button primary" href="#launch-directory">Filter robots</a>
            <Link className="killer-button subtle" href="/articles/status-labels-explained/">Read methodology</Link>
          </div>
          <MetricStrip />
        </section>
        <DirectoryLaunchPanel kind="robots" robots={publishedRobots} companies={publishedCompanies} />
        <section className="killer-section compact">
          <div className="killer-section-head">
            <p>Reality labels</p>
            <h2>Commercial, pilot, prototype — separated clearly.</h2>
            <Link href="/articles/status-labels-explained/">Read the methodology →</Link>
          </div>
        </section>
      </main>
    </Shell>
  );
}

export function KillerCompaniesPage() {
  return (
    <Shell>
      <main className="killer-main directory-main">
        <section className="directory-hero">
          <p className="killer-eyebrow">Company landscape</p>
          <h1>The builders behind the humanoid robot market.</h1>
          <p>Browse companies by country, tracked programs, focus area, and maturity signals. Profiles keep funding, deployments, and availability claims cautious.</p>
          <div className="killer-actions directory-actions">
            <a className="killer-button primary" href="#launch-directory">Filter companies</a>
            <Link className="killer-button subtle" href="/articles/humanoid-robot-companies-to-watch/">Read market map</Link>
          </div>
          <MetricStrip />
        </section>
        <DirectoryLaunchPanel kind="companies" companies={publishedCompanies} />
        <section className="killer-section compact">
          <div className="killer-section-head">
            <p>Market map</p>
            <h2>Start with companies shaping the category.</h2>
            <Link href="/articles/humanoid-robot-companies-to-watch/">Read the company map →</Link>
          </div>
        </section>
      </main>
    </Shell>
  );
}
