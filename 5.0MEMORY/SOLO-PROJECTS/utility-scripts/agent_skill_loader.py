#!/usr/bin/env python3
"""agent_skill_loader.py - lists every role's SKILLS/*.md and prints a coverage report.

Usage:
    python agent_skill_loader.py --vault-root /path
"""
from __future__ import annotations

import argparse
import os
import re
import sys
from pathlib import Path


ROLE_DIRS = [
    "1.0COORDINATOR", "2.0CODER", "3.0RESEARCHER",
    "4.0TOOLS", "5.0MEMORY",
]
_FM = re.compile(r"^---\s*\n(.*?)\n---\s*\n", re.DOTALL)


def extract_title(text):
    m = _FM.match(text)
    if not m:
        return None
    for line in m.group(1).splitlines():
        if line.startswith("title:"):
            return line.split(":", 1)[1].strip()
    return None


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--vault-root", required=True)
    args = ap.parse_args()

    root = Path(os.path.abspath(args.vault_root))
    print(f"{'Role':<18} {'# Skills':<10} {'Titles'}")
    print("-" * 70)
    total = 0
    for role in ROLE_DIRS:
        skills_dir = root / role / "SKILLS"
        skills = sorted(skills_dir.glob("*.md")) if skills_dir.is_dir() else []
        titles = []
        for s in skills:
            text = s.read_text(encoding="utf-8", errors="replace")
            t = extract_title(text) or s.stem
            titles.append(t)
        print(f"{role:<18} {len(skills):<10} {', '.join(titles) or '-'}")
        total += len(skills)
    print(f"\nTotal: {total} skills across {len(ROLE_DIRS)} roles")
    return 0


if __name__ == "__main__":
    sys.exit(main())
