"""Run one tick of every layer the daemon drives.

Order of operations:
    1. Vault init (idempotent folder creation)
    2. User-channel sweep (orchestrator)
    3. Inter-agent sweep (inter_agent.poll_all_inboxes)

Usage:
    python -m hermes_bus.session_start --vault <path>

This is the script Mavis recommends invoking at the start of every
Hermes session to process whatever has accumulated in INBOX.md and the
agent inboxes since the previous session ended.
"""

from __future__ import annotations

import argparse
import sys
from pathlib import Path

from .agent_runner import AgentRunner
from .inter_agent import poll_all_inboxes
from .orchestrator import Orchestrator
from .vault_init import ensure as vault_ensure


def parse_args() -> argparse.Namespace:
    ap = argparse.ArgumentParser(prog="hermes-bus-session-start")
    ap.add_argument("--vault", required=True, type=Path)
    ap.add_argument(
        "--timeout-s",
        type=int,
        default=300,
        help="per-task timeout for any agent subprocess invocation",
    )
    return ap.parse_args()


def main() -> int:
    args = parse_args()
    vault = args.vault.resolve()
    vault_ensure(vault)

    print(f"[session-start] VAULT = {vault}")

    orch = Orchestrator(vault_root=vault)
    user_results = orch.run_once()
    print(
        f"[session-start] user-channel sweep: "
        f"{len(user_results)} command(s) processed"
    )
    for cid, outcome in user_results:
        print(f"    - {cid}: {outcome}")

    inter = poll_all_inboxes(vault, runner=AgentRunner(), seen=set(), timeout_s=args.timeout_s)
    print(
        f"[session-start] inter-agent sweep: "
        f"{len(inter.handled)} handled, {len(inter.skipped)} skipped"
    )
    for k, s in inter.handled:
        print(f"    [handled] {k}: {s}")
    for k, s in inter.skipped:
        print(f"    [skipped] {k}: {s}")

    print("[session-start] done.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
