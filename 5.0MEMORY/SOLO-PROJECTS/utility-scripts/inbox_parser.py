#!/usr/bin/env python3
"""inbox_parser.py - parse CHAT/INBOX.md into structured Command objects.

Mirrors hermes_bus.parser but is standalone so utility scripts can read
the inbox without importing the daemon.

Usage:
    python inbox_parser.py --vault-root /path [--json]
"""
from __future__ import annotations

import argparse
import json
import os
import re
import sys
from pathlib import Path


_FM = re.compile(r"^---\s*\n(.*?)\n---\s*\n", re.DOTALL)


def parse_inbox(path: Path) -> list[dict]:
    text = path.read_text(encoding="utf-8", errors="replace")
    commands = []
    pos = 0
    while True:
        m = _FM.search(text, pos)
        if not m:
            break
        start = m.start()
        end = text.find("\n---\n", m.end())
        if end == -1:
            end = text.find("\n---", m.end())
        if end == -1:
            break
        body = text[end + 5:].strip()
        nxt = _FM.search(text, end + 5)
        body_end = nxt.start() if nxt else len(text)
        body = body[: body_end - (end + 5)].strip()
        fm = {}
        for ln in m.group(1).splitlines():
            if ":" in ln:
                k, _, v = ln.partition(":")
                fm[k.strip()] = v.strip()
        title = next((ln[2:] for ln in body.splitlines() if ln.startswith("# ")), "")
        commands.append({"frontmatter": fm, "title": title, "body": body})
        pos = body_end
    return commands


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--vault-root", required=True)
    ap.add_argument("--json", action="store_true")
    args = ap.parse_args()
    inbox = Path(os.path.abspath(args.vault_root)) / "CHAT" / "INBOX.md"
    if not inbox.is_file():
        print(f"FAIL: {inbox} not found")
        return 1
    cmds = parse_inbox(inbox)
    if args.json:
        print(json.dumps(cmds, indent=2))
    else:
        print(f"OK: {len(cmds)} command(s) in INBOX.md")
        for c in cmds:
            print(f"  - {c['frontmatter'].get('command_id','?')}: {c['title'][:60]}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
