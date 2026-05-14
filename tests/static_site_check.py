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
    "robots/optimus/index.html": "Tesla Optimus humanoid robot profile — Humanoid Directory",
    "robots/unitree-g1/index.html": "Unitree G1 humanoid robot profile — Humanoid Directory",
    "robots/digit/index.html": "Agility Robotics Digit humanoid robot profile — Humanoid Directory",
    "robots/apollo/index.html": "Apptronik Apollo humanoid robot profile — Humanoid Directory",
    "robots/neo/index.html": "1X NEO humanoid robot profile — Humanoid Directory",
    "robots/phoenix/index.html": "Sanctuary AI Phoenix humanoid robot profile — Humanoid Directory",
    "robots/electric-atlas/index.html": "Boston Dynamics Electric Atlas humanoid robot profile — Humanoid Directory",
    "robots/gr-1/index.html": "Fourier GR-1 humanoid robot profile — Humanoid Directory",
    "robots/walker-s/index.html": "UBTECH Walker S humanoid robot profile — Humanoid Directory",
    "robots/pm01/index.html": "EngineAI PM01 humanoid robot profile — Humanoid Directory",
    "companies/tesla/index.html": "Tesla humanoid robotics profile — Humanoid Directory",
    "companies/unitree-robotics/index.html": "Unitree Robotics humanoid company profile — Humanoid Directory",
    "companies/agility-robotics/index.html": "Agility Robotics humanoid company profile — Humanoid Directory",
    "companies/apptronik/index.html": "Apptronik humanoid robotics company profile — Humanoid Directory",
    "companies/1x-technologies/index.html": "1X Technologies humanoid robotics company profile — Humanoid Directory",
    "companies/sanctuary-ai/index.html": "Sanctuary AI humanoid robotics company profile — Humanoid Directory",
    "companies/boston-dynamics/index.html": "Boston Dynamics humanoid robotics company profile — Humanoid Directory",
    "companies/fourier-intelligence/index.html": "Fourier Intelligence humanoid robotics company profile — Humanoid Directory",
    "companies/ubtech-robotics/index.html": "UBTECH Robotics humanoid robotics company profile — Humanoid Directory",
    "companies/engineai/index.html": "EngineAI humanoid robotics company profile — Humanoid Directory",
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
        if rel == "robots/figure-02/index.html" and "fleet-wide retirement" not in text:
            fail("Figure 02 page missing source-backed retirement/supersession update")
        if rel == "companies/figure-ai/index.html" and "Figure 03 / Helix program" not in text:
            fail("Figure AI page missing source-backed current-program update")
        if rel == "robots/optimus/index.html" and "no public commercial availability confirmed by Tesla" not in text:
            fail("Optimus profile missing cautious availability wording")
        if rel == "companies/tesla/index.html" and "Prototype program" not in text:
            fail("Tesla company profile missing program-stage enrichment")
        if rel == "robots/unitree-g1/index.html" and "Price from $13.5K" not in text:
            fail("Unitree G1 profile missing official commercial-listing evidence")
        if rel == "companies/unitree-robotics/index.html" and "Commercially listed humanoid platforms" not in text:
            fail("Unitree company profile missing stage enrichment")
        if rel == "robots/digit/index.html" and "Arc workflow software" not in text:
            fail("Digit profile missing logistics/workflow enrichment")
        if rel == "companies/agility-robotics/index.html" and "RoboFab" not in text:
            fail("Agility company profile missing RoboFab production context")
        if rel == "robots/apollo/index.html" and "55 Lbs payload" not in text:
            fail("Apollo profile missing official public payload spec")
        if rel == "robots/apollo/index.html" and "Mercedes-Benz, GXO, and Jabil" not in text:
            fail("Apollo profile missing partner commercialization evidence")
        if rel == "companies/apptronik/index.html" and "more than $935 million in Series A" not in text:
            fail("Apptronik company profile missing funding/commercialization context")
        if rel == "robots/neo/index.html" and "$499/month subscription" not in text:
            fail("1X NEO profile missing official order terms")
        if rel == "robots/neo/index.html" and "scheduled Expert Mode" not in text:
            fail("1X NEO profile missing early-autonomy/remote-supervision caveat")
        if rel == "companies/1x-technologies/index.html" and "Commercial pre-order / early-access home humanoid program" not in text:
            fail("1X company profile missing stage enrichment")
        if rel == "robots/phoenix/index.html" and "Gen 8 Phoenix" not in text:
            fail("Phoenix profile missing Gen 8 source-backed evidence")
        if rel == "robots/phoenix/index.html" and "21 degrees of freedom dexterous robotic hands" not in text:
            fail("Phoenix profile missing dexterous-hand evidence")
        if rel == "robots/phoenix/index.html" and "Magna" not in text:
            fail("Phoenix profile missing Magna partnership evidence")
        if rel == "companies/sanctuary-ai/index.html" and "Carbon AI control system" not in text:
            fail("Sanctuary company profile missing Carbon AI context")
        if rel == "companies/sanctuary-ai/index.html" and "Pilot and commercialization-stage industrial humanoid program" not in text:
            fail("Sanctuary company profile missing stage enrichment")
        if rel == "robots/electric-atlas/index.html" and "Hyundai" not in text:
            fail("Electric Atlas profile missing Hyundai pilot evidence")
        if rel == "robots/electric-atlas/index.html" and "56" not in text:
            fail("Electric Atlas profile missing public 56 DOF spec evidence")
        if rel == "robots/electric-atlas/index.html" and "50 kg" not in text:
            fail("Electric Atlas profile missing public lift/payload evidence")
        if rel == "companies/boston-dynamics/index.html" and "Pilot and productization-stage enterprise humanoid program" not in text:
            fail("Boston Dynamics company profile missing stage enrichment")
        if rel == "companies/boston-dynamics/index.html" and "Orbit" not in text:
            fail("Boston Dynamics company profile missing Orbit/productization context")
        if rel == "robots/gr-1/index.html" and "165 cm" not in text:
            fail("Fourier GR-1 profile missing official height spec")
        if rel == "robots/gr-1/index.html" and "first mass-produced humanoid robot" not in text:
            fail("Fourier GR-1 profile missing cautious company-reported rollout claim")
        if rel == "robots/gr-1/index.html" and "44" not in text:
            fail("Fourier GR-1 profile missing public joint/spec evidence")
        if rel == "companies/fourier-intelligence/index.html" and "Commercial/platform-listed humanoid robotics company" not in text:
            fail("Fourier company profile missing stage enrichment")
        if rel == "companies/fourier-intelligence/index.html" and "more than 2,000 institutions across 40 countries" not in text:
            fail("Fourier company profile missing company footprint context")
        if rel == "robots/walker-s/index.html" and "170 cm" not in text:
            fail("Walker S profile missing official height spec")
        if rel == "robots/walker-s/index.html" and "41" not in text:
            fail("Walker S profile missing servo-joint evidence")
        if rel == "robots/walker-s/index.html" and "SANY RE, BYD, NIO" not in text:
            fail("Walker S profile missing industrial/factory case evidence")
        if rel == "companies/ubtech-robotics/index.html" and "Industrial pilot/deployment-stage Walker humanoid program" not in text:
            fail("UBTECH company profile missing stage enrichment")
        if rel == "companies/ubtech-robotics/index.html" and "Hong Kong Stock Exchange" not in text:
            fail("UBTECH company profile missing HKEX/company context")
        if rel == "robots/pm01/index.html" and "140 cm" not in text:
            fail("PM01 profile missing official height spec")
        if rel == "robots/pm01/index.html" and "¥188,000" not in text:
            fail("PM01 profile missing official purchase price evidence")
        if rel == "robots/pm01/index.html" and "NVIDIA Jetson Orin NX" not in text:
            fail("PM01 profile missing education-edition compute evidence")
        if rel == "companies/engineai/index.html" and "Commercially listed / early-stage humanoid robotics company" not in text:
            fail("EngineAI company profile missing stage enrichment")
        if rel == "companies/engineai/index.html" and "October 2023" not in text:
            fail("EngineAI company profile missing founding context")
    for rel in REQUIRED_ASSETS:
        if not (OUT / rel).exists():
            fail(f"missing exported asset out/{rel}")
    print("OK: static export checks passed")

if __name__ == "__main__":
    main()
