import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="footer">
      <div>
        <strong>Humanoid Directory</strong>
        <p>The source-backed directory of humanoid robots and the companies building them.</p>
      </div>
      <nav>
        <Link href="/robots/">Robots</Link>
        <Link href="/companies/">Companies</Link>
        <Link href="/about/">Methodology</Link>
        <Link href="/submit/">Submit update</Link>
      </nav>
    </footer>
  );
}
