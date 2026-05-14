import Link from 'next/link';
import type { Robot } from '@/lib/types';
import { getCompany } from '@/data/companies';
import { StatusBadge } from '@/components/status-badge';

export function RobotCard({ robot, priority = false }: { robot: Robot; priority?: boolean }) {
  const company = getCompany(robot.companySlug);
  return (
    <article className={priority ? 'card robot-card featured' : 'card robot-card'}>
      <div className="card-topline"><StatusBadge status={robot.status} /><span>{robot.country}</span></div>
      <div className="robot-thumb" aria-hidden="true"><span>{robot.name.split(' ').map(w => w[0]).join('').slice(0, 3)}</span></div>
      <h3><Link href={`/robots/${robot.slug}/`}>{robot.name}</Link></h3>
      <p className="muted">{company?.name ?? 'Unknown company'}</p>
      <p>{robot.summary}</p>
      <div className="chips">{robot.useCases.slice(0, 3).map((item) => <span key={item}>{item}</span>)}</div>
      <Link className="text-link" href={`/robots/${robot.slug}/`}>View sourced profile →</Link>
    </article>
  );
}
