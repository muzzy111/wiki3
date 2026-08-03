"""Ensure the LOOP vault has every folder the daemon expects.

Idempotent. Safe to call on every daemon start. Logs which folders it
ensured and which ones already existed.

Usage:
    python -m hermes_bus.vault_init --vault <path>
"""

from __future__ import annotations

import argparse
from pathlib import Path


REQUIRED_DIRS = [
    "CHAT",
    "CHAT/Archive",
    "1.0HERMES/CHAT/Inbox",
    "1.0HERMES/CHAT/Outbox",
    "2.0MAVIS/CHAT/Inbox",
    "2.0MAVIS/CHAT/Outbox",
    "3.0OPENCODE/CHAT/Inbox",
    "3.0OPENCODE/CHAT/Outbox",
    "4.0AGY/CHAT/Inbox",
    "4.0AGY/CHAT/Outbox",
    "TASKS/STATUS",
]


def ensure(vault: Path) -> list[tuple[str, str]]:
    """Ensure every required directory exists. Return [(path, status)] tuples."""
    out: list[tuple[str, str]] = []
    for rel in REQUIRED_DIRS:
        target = vault / rel
        existed = target.exists()
        target.mkdir(parents=True, exist_ok=True)
        out.append((str(target), "existed" if existed else "created"))
    return out


def parse_args() -> argparse.Namespace:
    ap = argparse.ArgumentParser(prog="hermes-bus-vault-init")
    ap.add_argument("--vault", required=True, type=Path)
    return ap.parse_args()


def main() -> int:
    args = parse_args()
    vault = args.vault.resolve()
    results = ensure(vault)
    print(f"Vault init for {vault}")
    for path, status in results:
        print(f"  {status:8s} {path}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
