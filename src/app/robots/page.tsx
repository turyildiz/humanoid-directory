import type { Metadata } from 'next';
import { KillerRobotsPage } from '@/components/killer-directory-pages';

export const metadata: Metadata = {
  title: { absolute: 'Humanoid Robots — Humanoid Directory' },
  description: 'Search and filter source-backed humanoid robot profiles by status, country, company, and public evidence.',
};

export default function Page() {
  return <KillerRobotsPage />;
}
