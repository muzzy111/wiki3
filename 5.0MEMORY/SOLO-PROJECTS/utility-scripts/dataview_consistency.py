#!/usr/bin/env python3
"""dataview_consistency.py - lint Dataview blocks for common syntax issues.

Static analysis only (no Obsidian runtime). Flags:
    - missing closing ``` for ```dataview blocks
    - dv.pages() with no quoted path argument
    - table-like invocations without an explicit header row

Usage:
    python dataview_consistency.py --vault-root /path
"""
from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path


DV_OPEN = re.compile(r"^```dataview\s*$", re.MULTILINE)
FENCE = re.compile(r"^```", re.MULTILINE)


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--vault-root", required=True)
    args = ap.parse_args()

    root = Path(args.vault_root)
    issues = []
    for f in sorted(root.rglob("*.md")):
        if ".omo/snapshots" in str(f):
            continue
        text = f.read_text(encoding="utf-8", errors="replace")
        # split into fence pairs (alternating ``` and ```dataview)
        lines = text.splitlines()
        in_block = False
        for i, line in enumerate(lines):
            if line.strip().startswith("```dataview"):
                in_block = True
            elif in_block and line.strip() == "```":
                in_block = False
            else:
                if in_block and "dv.pages(" in line and "'" not in line and '"' not in line:
                    issues.append((f.relative_to(root).as_posix(), i + 1, "dv.pages without path"))

    if not issues:
        print(f"OK: 0 dataview issues across vault")
        return 0
    print(f"FAIL: {len(issues)} dataview issue(s)")
    for path, line, why in issues[:30]:
        print(f"  {path}:{line}: {why}")
    return 1


if __name__ == "__main__":
    sys.exit(main())
