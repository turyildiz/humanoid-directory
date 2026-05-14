import Link from 'next/link';
import type { Company } from '@/lib/types';

export function CompanyCard({ company }: { company: Company }) {
  return (
    <article className="card company-card">
      <div className="card-topline"><span>{company.country}</span><span>{company.robots.length} robot{company.robots.length === 1 ? '' : 's'}</span></div>
      <h3><Link href={`/companies/${company.slug}/`}>{company.name}</Link></h3>
      <p>{company.summary}</p>
      <div className="chips">{company.focus.slice(0, 3).map((item) => <span key={item}>{item}</span>)}</div>
      <Link className="text-link" href={`/companies/${company.slug}/`}>Open company profile →</Link>
    </article>
  );
}
