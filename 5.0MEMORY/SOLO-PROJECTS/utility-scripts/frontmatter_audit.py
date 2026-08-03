#!/usr/bin/env python3
"""frontmatter_audit.py - checks every operational note for required frontmatter.

Required fields per Documentation Standards (5.0MEMORY/RULES/):
    title, type, status, created, modified, tags

Usage:
    python frontmatter_audit.py --vault-root /path
"""
from __future__ import annotations

import argparse
import os
import re
import sys
from pathlib import Path


REQUIRED = {"title", "type", "status", "created", "modified", "tags"}
_FM = re.compile(r"^---\s*\n(.*?)\n---\s*\n", re.DOTALL)


def parse_frontmatter(text: str) -> dict[str, str]:
    m = _FM.match(text)
    if not m:
        return {}
    fm = {}
    for line in m.group(1).splitlines():
        if ":" in line:
            k, _, v = line.partition(":")
            fm[k.strip()] = v.strip()
    return fm


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--vault-root", required=True)
    args = ap.parse_args()

    root = Path(os.path.abspath(args.vault_root))
    issues = []
    for f in sorted(root.rglob("*.md")):
        s = str(f)
        if ".omo" in s and "snapshots" in s:
            continue
        rel = f.relative_to(root).as_posix()
        text = f.read_text(encoding="utf-8", errors="replace")
        fm = parse_frontmatter(text)
        if not fm:
            issues.append((rel, "missing frontmatter"))
            continue
        missing = REQUIRED - set(fm.keys())
        if missing:
            issues.append((rel, f"missing {sorted(missing)}"))

    if not issues:
        total = sum(1 for _ in root.rglob("*.md") if "snapshots" not in str(_))
        print(f"OK: all {total} files pass frontmatter")
        return 0
    print(f"FAIL: {len(issues)} files")
    for rel, why in issues[:30]:
        print(f"  {rel}: {why}")
    return 1


if __name__ == "__main__":
    sys.exit(main())
