#!/usr/bin/env python3
"""Responsive coverage checks for the static Humanoid Directory export.

This is not a replacement for human visual QA, but it prevents obvious desktop-only
regressions across every exported public page family.
"""
from html.parser import HTMLParser
from pathlib import Path
import re
import sys

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "out"
EXCLUDED = {"404/index.html", "_not-found/index.html"}


class Parser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.meta_viewport = False
        self.css_hrefs: list[str] = []
        self.inline_styles: list[str] = []
        self.classes: set[str] = set()
        self._in_style = False

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == "meta" and attrs.get("name") == "viewport" and "width=device-width" in attrs.get("content", ""):
            self.meta_viewport = True
        if tag == "link" and attrs.get("rel") == "stylesheet" and attrs.get("href"):
            self.css_hrefs.append(attrs["href"])
        if tag == "style":
            self._in_style = True
        if "class" in attrs:
            self.classes.update(attrs["class"].split())

    def handle_endtag(self, tag):
        if tag == "style":
            self._in_style = False

    def handle_data(self, data):
        if self._in_style:
            self.inline_styles.append(data)


def fail(message: str) -> None:
    print(f"FAIL: {message}")
    sys.exit(1)


def parse(path: Path) -> Parser:
    parser = Parser()
    parser.feed(path.read_text(encoding="utf-8"))
    return parser


def page_css(parser: Parser) -> str:
    chunks = list(parser.inline_styles)
    for href in parser.css_hrefs:
        if href.startswith("http"):
            continue
        css_path = OUT / href.lstrip("/")
        if css_path.exists():
            chunks.append(css_path.read_text(encoding="utf-8"))
    return "\n".join(chunks)


def exported_pages() -> list[Path]:
    return sorted(p for p in OUT.rglob("index.html") if str(p.relative_to(OUT)) not in EXCLUDED)


def main() -> None:
    if not OUT.exists():
        fail("missing out/ directory; run npm run build first")

    pages = exported_pages()
    if len(pages) < 40:
        fail(f"expected broad static export coverage, found only {len(pages)} pages")

    for path in pages:
        rel = str(path.relative_to(OUT))
        parser = parse(path)
        css = page_css(parser)

        if not parser.meta_viewport:
            fail(f"out/{rel} missing mobile viewport meta tag")
        if "@media" not in css:
            fail(f"out/{rel} has no responsive media-query CSS")
        if not ("max-width" in css or "clamp(" in css):
            fail(f"out/{rel} missing fluid/max-width sizing CSS")
        if re.search(r"(?<!max-)width:\s*(?:1[2-9]\d{2}|[2-9]\d{3})px", css):
            fail(f"out/{rel} contains a large fixed width instead of max-width/responsive sizing")

        # Main public pages should keep navigational chrome or the imported nav shell.
        if rel not in {"components/robot-card/index.html"}:
            if not ({"nav", "nav-inner"} & parser.classes):
                fail(f"out/{rel} missing responsive navigation shell")

        # Data-driven and article page families must collapse common desktop grids.
        if rel.startswith(("robots/", "companies/")) and rel not in {"robots/index.html", "companies/index.html"}:
            for required in ["hd-profile", "body-wrap", "qf-inner"]:
                if required not in parser.classes and rel not in {"robots/figure-02/index.html", "companies/figure-ai/index.html"}:
                    fail(f"out/{rel} missing responsive profile class {required!r}")
        if rel.startswith("articles/"):
            if "article-layout" not in parser.classes and rel != "articles/index.html":
                fail(f"out/{rel} missing responsive article layout class")

    globals_css = (ROOT / "src/app/globals.css").read_text(encoding="utf-8")
    for marker in [
        "@media (max-width: 1180px)",
        "@media (max-width: 700px)",
        "overflow-x: auto",
        ".article-layout",
        ".hd-profile .body-wrap",
        ".hd-profile .qf-inner",
    ]:
        if marker not in globals_css:
            fail(f"global responsive CSS missing marker {marker!r}")

    homepage_css = page_css(parse(OUT / "index.html"))
    for marker in [
        "/* mobile-overflow-hotfix */",
        ".hero-search { width: 100%; max-width: 100%; }",
        ".live-badge .pill { width: 100%; max-width: 100%; }",
        ".hero-cta-row { flex-direction: column; }",
        ".hero h1 .title { font-size: clamp(42px, 15vw, 56px); }",
    ]:
        if marker not in homepage_css:
            fail(f"homepage mobile overflow CSS missing marker {marker!r}")

    print("OK: responsive static export checks passed")


if __name__ == "__main__":
    main()
