import type { Metadata } from 'next';
import { KillerCompaniesPage } from '@/components/killer-directory-pages';

export const metadata: Metadata = {
  title: { absolute: 'Humanoid Robot Companies — Humanoid Directory' },
  description: 'Explore source-backed profiles of humanoid robot companies, tracked robot programs, countries, and maturity signals.',
};

export default function Page() {
  return <KillerCompaniesPage />;
}
