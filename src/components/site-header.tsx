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
        <Link href="/robots/" className="nav-search">Search robots <span>⌘K</span></Link>
      </div>
    </header>
  );
}
