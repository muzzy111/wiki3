#!/usr/bin/env python3
"""wikilink_checker.py - scan the vault for broken [[wikilinks]].

Reports any wikilink target whose target file does not exist (and is not
marked as a deliberate stub).

Usage:
    python wikilink_checker.py --vault-root /path/to/vault [--json]
"""
from __future__ import annotations

import argparse
import json
import os
import re
import sys
from pathlib import Path


WIKILINK_RE = re.compile(r"\[\[([^\]\[|#]+)(?:#[^\]\|]+)?(?:\|[^\]]+)?\]\]")


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--vault-root", required=True)
    ap.add_argument("--json", action="store_true")
    args = ap.parse_args()

    root = Path(os.path.abspath(args.vault_root))
    if not root.is_dir():
        print(f"FAIL: {root} not a directory", file=sys.stderr)
        return 1

    all_files = {p.relative_to(root).as_posix() for p in root.rglob("*.md")}
    targets = {f[:-3] for f in all_files if f.endswith(".md")}

    broken = []
    for src in sorted(all_files):
        text = (root / src).read_text(encoding="utf-8", errors="replace")
        for m in WIKILINK_RE.finditer(text):
            target = m.group(1).strip()
            if not target or target.startswith("http"):
                continue
            if "/" not in target and "\\" not in target:
                if target not in targets:
                    broken.append((src, target))
            else:
                resolved = (root / target).with_suffix(".md")
                if not resolved.is_file():
                    broken.append((src, target))

    if args.json:
        print(json.dumps({"broken": [{"source": s, "target": t} for s, t in broken]}, indent=2))
    else:
        if not broken:
            print(f"OK: 0 broken wikilinks across {len(all_files)} files")
            return 0
        print(f"FAIL: {len(broken)} broken wikilink(s)")
        for s, t in broken[:50]:
            print(f"  {s} -> {t}")
        if len(broken) > 50:
            print(f"  ... ({len(broken) - 50} more)")
    return 0 if not broken else 1


if __name__ == "__main__":
    sys.exit(main())
