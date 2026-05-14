import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { articles, getArticle } from '@/data/articles';
import { getCompany } from '@/data/companies';
import { getRobot } from '@/data/robots';
import { getSource } from '@/data/sources';
import { ContentLayout, SourceList } from '@/components/content-layout';

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  return {
    title: article ? article.title : 'Article',
    description: article?.dek,
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const sources = article.sourceIds.map(getSource).filter(Boolean).map((source) => ({ title: source!.title, publisher: source!.publisher, url: source!.url }));
  const relatedRobots = article.relatedRobots.map(getRobot).filter(Boolean);
  const relatedCompanies = article.relatedCompanies.map(getCompany).filter(Boolean);

  return (
    <ContentLayout>
      <main>
        <article>
          <section className="page-hero section-dark compact article-hero">
            <span className="eyebrow">{article.category}</span>
            <h1>{article.title}</h1>
            <p>{article.dek}</p>
            <div className="profile-meta">
              <span>Published {article.publishedAt}</span>
              <span>Updated {article.updatedAt}</span>
              <span>{article.readingMinutes} min read</span>
            </div>
          </section>

          <section className="section article-layout">
            <div className="card article-body">
              {article.sections.map((section) => (
                <section key={section.heading}>
                  <h2>{section.heading}</h2>
                  <p>{section.body}</p>
                </section>
              ))}
            </div>
            <aside className="card article-aside">
              <span className="eyebrow light">SOURCES</span>
              <h2>References</h2>
              <SourceList sources={sources} />
            </aside>
          </section>
        </article>

        <section className="section split-section">
          <article className="card">
            <span className="eyebrow light">RELATED ROBOTS</span>
            <h2>Robot profiles</h2>
            <div className="link-stack">
              {relatedRobots.map((robot) => <Link href={`/robots/${robot!.slug}/`} key={robot!.slug}>{robot!.name} →</Link>)}
            </div>
          </article>
          <article className="card">
            <span className="eyebrow light">RELATED COMPANIES</span>
            <h2>Company profiles</h2>
            <div className="link-stack">
              {relatedCompanies.map((company) => <Link href={`/companies/${company!.slug}/`} key={company!.slug}>{company!.name} →</Link>)}
            </div>
          </article>
        </section>
      </main>
    </ContentLayout>
  );
}
