import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Methodology', description: 'How Humanoid Directory classifies robots and verifies public claims.' };

export default function AboutPage() {
  return (
    <main>
      <section className="page-hero section-dark compact"><span className="eyebrow">METHODOLOGY</span><h1>Source-backed, skepticism-first robotics data.</h1><p>Humanoid Directory exists to make a fast-moving market understandable without repeating hype as fact.</p></section>
      <section className="section prose-grid">
        <article className="card"><h2>What counts</h2><p>We track humanoid robots and the companies building them. We do not list generic AI agents, chatbots, or unrelated robotics tools.</p></article>
        <article className="card"><h2>How claims are handled</h2><p>Specifications, deployments, funding, partnerships, and availability need a source. Unknown values remain unknown rather than filled with guesses.</p></article>
        <article className="card"><h2>Status taxonomy</h2><p>Robots are classified as concept, prototype, research, pilot, commercial, paused, discontinued, or unknown based on public evidence.</p></article>
      </section>
    </main>
  );
}
