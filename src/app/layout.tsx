import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

export const metadata: Metadata = {
  metadataBase: new URL('https://humanoid.directory'),
  title: { default: 'Humanoid Directory — The global directory of humanoid robots', template: '%s — Humanoid Directory' },
  description: 'A source-backed directory of humanoid robots, companies, specs, videos, sources, and deployment status.',
  openGraph: { title: 'Humanoid Directory', description: 'Track the humanoid robot race with source-backed robot and company profiles.', url: 'https://humanoid.directory', siteName: 'Humanoid Directory', type: 'website' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
