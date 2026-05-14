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
    if "agility-solutions" not in robots_data or "Arc workflow software" not in robots_data:
        fail("Digit profile must include Agility solutions/workflow evidence")
    if "apptronik-mercedes" not in robots_data or "55 Lbs payload" not in robots_data:
        fail("Apollo profile must include Apptronik partner evidence and official public specs")
    if "figure-bmw-production" not in robots_data or "fleet-wide retirement" not in robots_data:
        fail("Figure 02 profile must include BMW deployment evidence and retirement/supersession context")
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
