import type { Metadata } from 'next';
import { KillerHomePage } from '@/components/killer-directory-pages';

export const metadata: Metadata = {
  title: { absolute: 'Humanoid Directory — The global directory of humanoid robots' },
  description: 'A source-backed directory of humanoid robots, companies, specs, status labels, and public evidence.',
};

export default function Page() {
  return <KillerHomePage />;
}
