#!/usr/bin/env python3
"""Project structure/data checks for the Next.js Cloudflare Humanoid Directory app."""
from pathlib import Path
import json
import re
import sys

ROOT = Path(__file__).resolve().parents[1]
REQUIRED_FILES = [
    "next.config.mjs",
    "tailwind.config.ts",
    "postcss.config.mjs",
    "src/app/layout.tsx",
    "src/app/page.tsx",
    "src/app/robots/page.tsx",
    "src/app/robots/[slug]/page.tsx",
    "src/app/companies/page.tsx",
    "src/app/companies/[slug]/page.tsx",
    "src/app/articles/page.tsx",
    "src/app/articles/[slug]/page.tsx",
    "src/app/about/page.tsx",
    "src/app/submit/page.tsx",
    "src/app/sitemap.ts",
    "src/app/robots.ts",
    "src/components/site-header.tsx",
    "src/components/site-footer.tsx",
    "src/components/robot-card.tsx",
    "src/components/company-card.tsx",
    "src/components/status-badge.tsx",
    "src/data/robots.ts",
    "src/data/companies.ts",
    "src/data/sources.ts",
    "src/data/articles.ts",
    "src/data/timeline.ts",
    "src/lib/types.ts",
]


def fail(message: str) -> None:
    print(f"FAIL: {message}")
    sys.exit(1)


def main() -> None:
    package_path = ROOT / "package.json"
    if not package_path.exists():
        fail("package.json missing")
    package = json.loads(package_path.read_text())
    scripts = package.get("scripts", {})
    for script in ["dev", "build", "start", "lint", "test"]:
        if script not in scripts:
            fail(f"package.json missing script {script}")
    for dep in ["next", "react", "react-dom"]:
        if dep not in package.get("dependencies", {}):
            fail(f"package.json missing dependency {dep}")
    for rel in REQUIRED_FILES:
        if not (ROOT / rel).exists():
            fail(f"missing required file {rel}")
    next_config = (ROOT / "next.config.mjs").read_text()
    if "output: 'export'" not in next_config and 'output: "export"' not in next_config:
        fail("next.config.mjs must use output: 'export' for Cloudflare Pages static export")
    robots_data = (ROOT / "src/data/robots.ts").read_text()
    robot_count = len(re.findall(r"slug:\s*['\"]", robots_data))
    if robot_count < 12:
        fail(f"expected at least 12 seed robots, found {robot_count}")
    if "sources:" not in robots_data:
        fail("robots data must include sources references")
    if "tesla-optimus-gen-2" not in robots_data or "no public commercial availability confirmed by Tesla" not in robots_data:
        fail("Tesla Optimus profile must include primary-source enrichment and cautious availability wording")
    if "unitree-g1-shop" not in robots_data or "Price from $13.5K" not in robots_data:
        fail("Unitree G1 profile must include official commercial-listing and shop evidence")
    if "unitree-h1-shop" not in robots_data or "heightCm: 180" not in robots_data or "3.3 m/s moving speed" not in robots_data:
        fail("Unitree H1 profile must include official H1/H1-2 product specs and shop visibility evidence")
    if "agility-solutions" not in robots_data or "Arc workflow software" not in robots_data:
        fail("Digit profile must include Agility solutions/workflow evidence")
    if "apptronik-mercedes" not in robots_data or "55 Lbs payload" not in robots_data:
        fail("Apollo profile must include Apptronik partner evidence and official public specs")
    if "figure-01-prnewswire" not in robots_data or "figure-01-robots-guide" not in robots_data or "heightCm: 168" not in robots_data or "payloadKg: 20" not in robots_data:
        fail("Figure 01 profile must include launch/source evidence and reported public specs")
    if "figure-bmw-production" not in robots_data or "fleet-wide retirement" not in robots_data:
        fail("Figure 02 profile must include BMW deployment evidence and retirement/supersession context")
    if "1x-eve-robots-guide" not in robots_data or "heightCm: 183" not in robots_data or "customer facilities globally" not in robots_data:
        fail("1X EVE profile must include deployment/source evidence and reported public specs")
    if "1x-order" not in robots_data or "$499/month subscription" not in robots_data or "scheduled Expert Mode" not in robots_data:
        fail("1X NEO profile must include official order terms and early-autonomy caveats")
    if "sanctuary-phoenix-gen8" not in robots_data or "21 degrees of freedom dexterous robotic hands" not in robots_data:
        fail("Phoenix profile must include Sanctuary Gen 8 and dexterous-hand evidence")
    if "boston-atlas-product-version" not in robots_data or "Hyundai" not in robots_data or "degreesOfFreedom: 56" not in robots_data:
        fail("Electric Atlas profile must include Boston Dynamics product-version, Hyundai pilot, and public spec evidence")
    if "fourier-lab" not in robots_data or "heightCm: 165" not in robots_data or "degreesOfFreedom: 44" not in robots_data:
        fail("Fourier GR-1 profile must include Fourier official rollout/source evidence and public specs")
    if "ubtech-humanoid-solutions" not in robots_data or "heightCm: 170" not in robots_data or "degreesOfFreedom: 41" not in robots_data:
        fail("UBTECH Walker S profile must include official industrial-solution evidence and public specs")
    if "engineai-purchase" not in robots_data or "heightCm: 140" not in robots_data or "degreesOfFreedom: 24" not in robots_data:
        fail("EngineAI PM01 profile must include official purchase-page evidence and public specs")
    if "pal-talos" not in robots_data or "heightCm: 175" not in robots_data or "degreesOfFreedom: 32" not in robots_data or "6 Kg" not in robots_data:
        fail("PAL Robotics TALOS profile must include official product-page evidence and public specs")
    companies_data = (ROOT / "src/data/companies.ts").read_text()
    if "pal-robotics" not in companies_data or "Barcelona" not in companies_data or "Since 2004" not in companies_data:
        fail("PAL Robotics company profile must include official company context")
    profile_pages = (ROOT / "src/components/profile-pages.tsx").read_text()
    for required in ["hd-profile", "crumbs", "hero-inner", "body-wrap", "qf-inner", "toc", "source-backed"]:
        if required not in profile_pages:
            fail(f"generated profile pages must use imported frontend-style structure; missing {required!r}")
    for rejected in ["ContentLayout", "profile-orb", "profile-layout"]:
        if rejected in profile_pages:
            fail(f"generated profile pages still use generic frontend template marker {rejected!r}")
    globals_css = (ROOT / "src/app/globals.css").read_text()
    for required in ["@media (max-width: 1180px)", "@media (max-width: 700px)", ".hd-profile", ".body-wrap", ".nav-inner"]:
        if required not in globals_css:
            fail(f"global stylesheet missing responsive/imported-style profile CSS marker {required!r}")
    if re.search(r"Not publicly disclosed|Unknown|null", robots_data) is None:
        fail("robots data should preserve unknown values instead of inventing facts")
    articles_data = (ROOT / "src/data/articles.ts").read_text()
    article_count = len(re.findall(r"slug:\s*['\"]", articles_data))
    if article_count < 5:
        fail(f"expected at least 5 launch articles, found {article_count}")
    if "sourceIds:" not in articles_data:
        fail("articles must include sourceIds references")
    timeline_data = (ROOT / "src/data/timeline.ts").read_text()
    if "sourceIds:" not in timeline_data:
        fail("timeline events must include sourceIds references")
    print("OK: Next.js Cloudflare app checks passed")


if __name__ == "__main__":
    main()
