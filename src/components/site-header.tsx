import Link from 'next/link';

export function SiteHeader() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <Link href="/" className="brand" aria-label="Humanoid Directory home">
          <span className="brand-mark">H</span>
          <span className="brand-name">Humanoid Directory<span>/ humanoid.directory</span></span>
        </Link>
        <nav className="nav-links" aria-label="Primary navigation">
          <Link href="/robots/">Robots</Link>
          <Link href="/companies/">Companies</Link>
          <Link href="/articles/">Articles</Link>
          <Link href="/about/">Methodology</Link>
          <Link href="/submit/">Submit</Link>
        </nav>
        <div className="nav-right">
          <Link href="/robots/" className="nav-search">Search robots <span>⌘K</span></Link>
          <details className="hd-mobile-nav">
            <summary className="mobile-nav-toggle" aria-label="Open site navigation">
              <span>Menu</span>
              <span className="mobile-nav-icon" aria-hidden="true"><i /><i /><i /></span>
            </summary>
            <nav className="mobile-nav-panel" aria-label="Mobile navigation">
              <Link href="/robots/">Robots</Link>
              <Link href="/companies/">Companies</Link>
              <Link href="/articles/">Articles</Link>
              <Link href="/about/">Methodology</Link>
              <Link href="/submit/">Submit update</Link>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
