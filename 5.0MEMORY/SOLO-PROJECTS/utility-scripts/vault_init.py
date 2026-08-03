#!/usr/bin/env python3
"""vault_init.py - bootstrap a fresh vault clone (Tasks 1 + 2 wrapper around the smoke script).

Usage:
    python vault_init.py --vault-root /path/to/vault [--dry-run]
"""
from __future__ import annotations

import argparse
import os
import shutil
import sys
from pathlib import Path


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--vault-root", required=True)
    ap.add_argument("--dry-run", action="store_true")
    args = ap.parse_args()

    root = Path(os.path.abspath(args.vault_root))
    if not (root / "SYSTEM").is_dir():
        print(f"FAIL: {root} does not look like a LOOP vault (no SYSTEM/ subdir)", file=sys.stderr)
        return 1

    # Roles to ensure
    roles = ["1.0COORDINATOR", "2.0CODER", "3.0RESEARCHER", "4.0TOOLS", "5.0MEMORY"]
    subfolders = ["CHAT", "MEMORY", "PROMPTS", "RULES", "SKILLS", "SOLO-PROJECTS"]

    print(f"Vault root: {root}")
    print(f"Roles: {len(roles)}")
    for r in roles:
        rp = root / r
        if args.dry_run:
            print(f"  [dry] would create: {rp}")
        else:
            rp.mkdir(exist_ok=True)
            for s in subfolders:
                (rp / s).mkdir(parents=True, exist_ok=True)
            (rp / "CHAT/Inbox").mkdir(parents=True, exist_ok=True)
            (rp / "CHAT/Outbox").mkdir(parents=True, exist_ok=True)
            print(f"  OK: {r}/")

    print("Vault init complete.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
