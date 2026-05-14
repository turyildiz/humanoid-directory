import type { Metadata } from 'next';
import Link from 'next/link';
import { articles } from '@/data/articles';
import { ContentLayout } from '@/components/content-layout';

export const metadata: Metadata = {
  title: 'Articles',
  description: 'Source-backed explainers, comparisons, and updates from Humanoid Directory.',
};

export default function ArticlesPage() {
  return (
    <ContentLayout>
      <main>
        <section className="page-hero section-dark compact">
          <span className="eyebrow">ARTICLES</span>
          <h1>Humanoid robotics, explained with sources.</h1>
          <p>Short, skeptical, source-backed guides that support the directory data.</p>
        </section>

        <section className="section">
          <div className="grid article-grid">
            {articles.map((article) => (
              <Link className="card article-card" href={`/articles/${article.slug}/`} key={article.slug}>
                <div className="card-topline"><span>{article.category}</span><span>{article.readingMinutes} min</span></div>
                <h2>{article.title}</h2>
                <p>{article.dek}</p>
                <span className="text-link">Read article →</span>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </ContentLayout>
  );
}
