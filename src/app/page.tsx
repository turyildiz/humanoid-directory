import Link from 'next/link';
import { robots, featuredRobots } from '@/data/robots';
import { companies } from '@/data/companies';
import { RobotCard } from '@/components/robot-card';
import { CompanyCard } from '@/components/company-card';

export default function HomePage() {
  const countries = Array.from(new Set(robots.map((robot) => robot.country))).length;
  return (
    <main>
      <section className="hero section-dark">
        <div className="eyebrow">GLOBAL HUMANOID INTELLIGENCE / SOURCE-BACKED</div>
        <h1>Track every serious humanoid robot in one place.</h1>
        <p className="hero-copy">Humanoid Directory turns scattered demos, specs, funding news, pilots, and company claims into a clean, comparable database built for researchers, operators, investors, journalists, and robotics obsessives.</p>
        <div className="hero-actions">
          <Link className="btn primary" href="/robots/">Browse robots</Link>
          <Link className="btn secondary" href="/about/">How we verify claims</Link>
        </div>
        <div className="hero-panel">
          <span>Directory signal</span>
          <strong>{robots.length} seed robots</strong>
          <p>{companies.length} companies · {countries} regions · every public claim tied to sources or marked unknown.</p>
        </div>
      </section>

      <section className="stats-strip">
        <div><strong>{robots.length}</strong><span>seed profiles</span></div>
        <div><strong>{companies.length}</strong><span>companies</span></div>
        <div><strong>100%</strong><span>source-first claims</span></div>
        <div><strong>Cloudflare</strong><span>first architecture</span></div>
      </section>

      <section className="section">
        <div className="section-heading">
          <span className="eyebrow light">FEATURED ROBOTS</span>
          <h2>The humanoid race, without the hype fog.</h2>
          <p>Start with the most visible robots, then expand into a complete global directory.</p>
        </div>
        <div className="grid cards-grid">{featuredRobots.map((robot) => <RobotCard key={robot.slug} robot={robot} priority />)}</div>
      </section>

      <section className="section split-section">
        <div>
          <span className="eyebrow light">DATA MODEL</span>
          <h2>Built like a database, designed like a premium robotics publication.</h2>
          <p>Every profile separates confirmed facts, unknown specs, deployment maturity, source links, company context, and timeline updates.</p>
          <Link className="text-link" href="/robots/">Explore the robot directory →</Link>
        </div>
        <div className="data-console">
          <code>status: pilot | prototype | commercial</code>
          <code>claims: source_id required</code>
          <code>unknown_values: never invented</code>
          <code>export: Cloudflare Pages / out</code>
        </div>
      </section>

      <section className="section">
        <div className="section-heading row">
          <div>
            <span className="eyebrow light">COMPANIES</span>
            <h2>Who is building the humanoid future?</h2>
          </div>
          <Link className="text-link" href="/companies/">View all companies →</Link>
        </div>
        <div className="grid company-grid">{companies.slice(0, 3).map((company) => <CompanyCard key={company.slug} company={company} />)}</div>
      </section>
    </main>
  );
}
