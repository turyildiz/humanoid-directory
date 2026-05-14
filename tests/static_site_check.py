#!/usr/bin/env python3
"""Static production site checks for Humanoid Directory."""
from html.parser import HTMLParser
from pathlib import Path
import re
import sys

ROOT = Path(__file__).resolve().parents[1]
EXPECTED_PAGES = {
    "index.html": "Humanoid Directory — The global directory of humanoid robots",
    "robots/index.html": "Humanoid Robots — Humanoid Directory",
    "companies/index.html": "Humanoid Robot Companies — Humanoid Directory",
    "robots/figure-02/index.html": "Figure 02 — Humanoid Directory",
    "companies/figure-ai/index.html": "Figure AI — Humanoid Directory",
    "design-system/index.html": "Humanoid Directory — Design System",
    "components/robot-card/index.html": "Humanoid Directory — Robot Card Component Sheet",
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
REQUIRED_NAV_LINKS = ["/", "/robots/", "/companies/"]

class Parser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.titles = []
        self.hrefs = []
        self._in_title = False
    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == "title":
            self._in_title = True
        if tag == "a" and "href" in attrs:
            self.hrefs.append(attrs["href"])
    def handle_endtag(self, tag):
        if tag == "title":
            self._in_title = False
    def handle_data(self, data):
        if self._in_title:
            self.titles.append(data.strip())

def parse(path: Path) -> Parser:
    p = Parser()
    p.feed(path.read_text(encoding="utf-8"))
    return p

def fail(msg: str) -> None:
    print(f"FAIL: {msg}")
    sys.exit(1)

def main() -> None:
    for rel, expected_title in EXPECTED_PAGES.items():
        path = ROOT / rel
        if not path.exists():
            fail(f"missing production page {rel}")
        text = path.read_text(encoding="utf-8")
        parser = parse(path)
        title = " ".join(t for t in parser.titles if t)
        if title != expected_title:
            fail(f"{rel} title mismatch: {title!r}")
        for legacy in LEGACY_FILENAMES:
            if legacy in text:
                fail(f"{rel} still links/references legacy filename {legacy!r}")
        for href in parser.hrefs:
            if href.startswith("http") or href.startswith("#") or href.startswith("mailto:"):
                continue
            if " " in href:
                fail(f"{rel} has non-production href with spaces: {href!r}")
    homepage_hrefs = parse(ROOT / "index.html").hrefs
    for required in REQUIRED_NAV_LINKS:
        if required not in homepage_hrefs:
            fail(f"homepage missing nav link {required}")
    print("OK: static site production checks passed")

if __name__ == "__main__":
    main()
