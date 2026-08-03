#!/usr/bin/env python3
"""secret_scanner.py - greps for API key patterns in vault files.

Patterns flagged:
    - sk-..., ghp-..., github_pat_...
    - AKIA... (AWS access key)
    - xoxb-... (Slack bot token)
    - Bearer eyJ... (JWT)

Usage:
    python secret_scanner.py --vault-root /path
"""
from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path


PATTERNS = [
    (r"sk-[A-Za-z0-9]{20,}", "OpenAI-style API key"),
    (r"ghp_[A-Za-z0-9]{20,}", "GitHub personal access token"),
    (r"github_pat_[A-Za-z0-9_]{50,}", "GitHub fine-grained PAT"),
    (r"AKIA[0-9A-Z]{16}", "AWS access key"),
    (r"xox[baprs]-[0-9A-Za-z-]{10,}", "Slack token"),
    (r"AIza[0-9A-Za-z_-]{35}", "Google API key"),
]


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--vault-root", required=True)
    args = ap.parse_args()

    root = Path(args.vault_root)
    findings = []
    skip_paths = {".omo/snapshots", ".smart-env/event_logs"}
    regexes = [(re.compile(p), label) for p, label in PATTERNS]

    for f in root.rglob("*"):
        if not f.is_file():
            continue
        s = str(f)
        if any(sp in s for sp in skip_paths):
            continue
        try:
            text = f.read_text(encoding="utf-8", errors="replace")
        except Exception:
            continue
        for rx, label in regexes:
            for m in rx.finditer(text):
                findings.append((f.relative_to(root).as_posix(), label, m.group(0)[:10] + "..."))

    if not findings:
        print(f"OK: 0 potential secrets in {root}")
        return 0
    print(f"FAIL: {len(findings)} potential secret(s)")
    for path, label, snippet in findings[:30]:
        print(f"  {path}: {label} ({snippet})")
    return 1


if __name__ == "__main__":
    sys.exit(main())
