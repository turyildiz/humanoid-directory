import type { Metadata } from 'next';
import { robots } from '@/data/robots';
import { RobotCard } from '@/components/robot-card';
import { statusLabels } from '@/lib/status';

export const metadata: Metadata = { title: 'Humanoid Robots', description: 'Browse source-backed humanoid robot profiles by company, country, use case, and maturity status.' };

export default function RobotsPage() {
  return (
    <main>
      <section className="page-hero section-dark compact">
        <span className="eyebrow">ROBOT DIRECTORY</span>
        <h1>Humanoid robots</h1>
        <p>Comparable profiles for humanoid robots, with unknown values preserved and claims tied back to sources.</p>
      </section>
      <section className="section">
        <div className="filter-row">
          {Object.entries(statusLabels).map(([key, label]) => <span key={key}>{label}</span>)}
        </div>
        <div className="grid cards-grid">{robots.map((robot) => <RobotCard key={robot.slug} robot={robot} />)}</div>
      </section>
    </main>
  );
}
