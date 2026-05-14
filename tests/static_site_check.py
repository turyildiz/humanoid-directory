#!/usr/bin/env python3
"""Static export checks for the Cloudflare Pages build output."""
from html.parser import HTMLParser
from pathlib import Path
import sys

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "out"
EXPECTED_PAGES = {
    "index.html": "Humanoid Directory — The global directory of humanoid robots",
    "robots/index.html": "Humanoid Robots — Humanoid Directory",
    "companies/index.html": "Humanoid Robot Companies — Humanoid Directory",
    "robots/figure-02/index.html": "Figure 02 — Humanoid Directory",
    "companies/figure-ai/index.html": "Figure AI — Humanoid Directory",
    "about/index.html": "Methodology — Humanoid Directory",
    "submit/index.html": "Submit a robot or update — Humanoid Directory",
    "articles/index.html": "Articles — Humanoid Directory",
    "articles/what-counts-as-a-humanoid-robot/index.html": "What counts as a humanoid robot? — Humanoid Directory",
    "articles/current-status-of-figure-02/index.html": "The current status of Figure 02 — Humanoid Directory",
    "robots/optimus/index.html": "Tesla Optimus — Humanoid Robot Profile — Humanoid Directory",
    "companies/tesla/index.html": "Tesla — Humanoid Robotics Company — Humanoid Directory",
}
LEGACY_FILENAMES = [
    "Humanoid Directory - Homepage.html",
    "Humanoid Directory - Robots.html",
    "Humanoid Directory - Companies.html",
    "Humanoid Directory - Figure 02.html",
    "Humanoid Directory - Figure AI.html",
    "Humanoid Directory - Robot Card.html",
    "Humanoid Directory - Design System.html",
]
REQUIRED_ASSETS = ["robots.txt", "sitemap.xml"]

class Parser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.titles = []
        self.hrefs = []
        self._in_title = False
    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == "title": self._in_title = True
        if tag == "a" and "href" in attrs: self.hrefs.append(attrs["href"])
    def handle_endtag(self, tag):
        if tag == "title": self._in_title = False
    def handle_data(self, data):
        if self._in_title: self.titles.append(data.strip())

def fail(msg: str) -> None:
    print(f"FAIL: {msg}")
    sys.exit(1)

def parse(path: Path) -> Parser:
    parser = Parser()
    parser.feed(path.read_text(encoding="utf-8"))
    return parser

def main() -> None:
    if not OUT.exists():
        fail("missing out/ directory; run npm run build first")
    for rel, expected_title in EXPECTED_PAGES.items():
        path = OUT / rel
        if not path.exists():
            fail(f"missing exported page out/{rel}")
        text = path.read_text(encoding="utf-8")
        parser = parse(path)
        title = " ".join(t for t in parser.titles if t)
        if title != expected_title:
            fail(f"out/{rel} title mismatch: {title!r}")
        for legacy in LEGACY_FILENAMES:
            if legacy in text:
                fail(f"out/{rel} still references legacy filename {legacy!r}")
        for href in parser.hrefs:
            if href.startswith("http") or href.startswith("#") or href.startswith("mailto:"):
                continue
            if " " in href:
                fail(f"out/{rel} has non-production href with spaces: {href!r}")
        if rel in {"index.html", "robots/index.html", "companies/index.html"}:
            for required_href in ("/", "/robots/", "/companies/", "/submit/"):
                if required_href not in parser.hrefs:
                    fail(f"out/{rel} missing routed navigation link {required_href!r}")
        if rel in {"index.html", "robots/index.html"} and "/robots/figure-02/" not in parser.hrefs:
            fail(f"out/{rel} missing linked Figure 02 card")
        if rel == "companies/index.html" and "/companies/figure-ai/" not in parser.hrefs:
            fail("out/companies/index.html missing linked Figure AI card")
        if rel == "articles/index.html" and "/articles/what-counts-as-a-humanoid-robot/" not in parser.hrefs:
            fail("out/articles/index.html missing article detail links")
        if rel == "articles/what-counts-as-a-humanoid-robot/index.html" and "/robots/figure-02/" not in parser.hrefs:
            fail("article page missing related robot links")
    for rel in REQUIRED_ASSETS:
        if not (OUT / rel).exists():
            fail(f"missing exported asset out/{rel}")
    print("OK: static export checks passed")

if __name__ == "__main__":
    main()
