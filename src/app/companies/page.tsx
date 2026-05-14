import type { Metadata } from 'next';
import { companies } from '@/data/companies';
import { CompanyCard } from '@/components/company-card';

export const metadata: Metadata = { title: 'Humanoid Robot Companies', description: 'Browse companies building humanoid robots.' };

export default function CompaniesPage() {
  return (
    <main>
      <section className="page-hero section-dark compact">
        <span className="eyebrow">COMPANY DIRECTORY</span>
        <h1>Humanoid robot companies</h1>
        <p>Track the companies building humanoid robots, from focused startups to major robotics labs.</p>
      </section>
      <section className="section">
        <div className="grid company-grid">{companies.map((company) => <CompanyCard key={company.slug} company={company} />)}</div>
      </section>
    </main>
  );
}
