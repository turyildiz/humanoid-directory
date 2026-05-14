import type { MetadataRoute } from 'next';
import { robots } from '@/data/robots';
import { companies } from '@/data/companies';
import { articles } from '@/data/articles';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://humanoid.directory';
  return [
    '', '/robots/', '/companies/', '/articles/', '/about/', '/submit/',
    ...robots.map((robot) => `/robots/${robot.slug}/`),
    ...companies.map((company) => `/companies/${company.slug}/`),
    ...articles.map((article) => `/articles/${article.slug}/`),
  ].map((path) => ({ url: `${base}${path}`, lastModified: new Date() }));
}
