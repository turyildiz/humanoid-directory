import type { Metadata } from 'next';
import { ContentLayout } from '@/components/content-layout';

export const metadata: Metadata = { title: 'Submit a robot or update', description: 'Submit a humanoid robot, company, source, or correction for review.' };

export default function SubmitPage() {
  return (
    <ContentLayout>
      <main>
        <section className="page-hero section-dark compact"><span className="eyebrow">SUBMISSIONS</span><h1>Submit a robot, company, source, or correction.</h1><p>The first version is a review placeholder. Public form handling will move to Cloudflare Pages Functions with Turnstile.</p></section>
        <section className="section split-section">
          <div className="card detail-card"><h2>What to send</h2><ul><li>Robot or company name</li><li>Official source URL</li><li>What changed or should be added</li><li>Whether the claim is official, reported, or unverified</li></ul></div>
          <div className="data-console"><code>Phase 1: placeholder</code><code>Phase 2: Cloudflare Pages Function</code><code>Spam protection: Turnstile</code><code>Review queue: D1 or Git-backed workflow</code></div>
        </section>
      </main>
    </ContentLayout>
  );
}
