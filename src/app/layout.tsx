import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Humanoid Directory',
    template: '%s — Humanoid Directory',
  },
  description: 'The global directory of humanoid robots, companies, specs, demos, and source-backed status signals.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
