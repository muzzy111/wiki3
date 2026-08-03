"""Long-running Hermes daemon entry point.

Use:
    python -m hermes_bus.daemon --vault <path> [--once] [--poll-interval 5]

Default is to watch CHAT/INBOX.md continuously. `--once` processes the
current inbox and exits (useful for batch testing).

Public surface:
    main()    - entry point (CLI)
"""

from __future__ import annotations

import argparse
import signal
import sys
import time
from pathlib import Path

from .inbox_watcher import make_md_watcher
from .inter_agent import poll_all_inboxes
from .orchestrator import Orchestrator
from .vault_init import ensure as vault_ensure


def parse_args() -> argparse.Namespace:
    ap = argparse.ArgumentParser(prog="hermes-bus-daemon")
    ap.add_argument(
        "--vault",
        required=True,
        type=Path,
        help="Path to the LOOP vault root (the folder containing CHAT/, 1.0HERMES/, etc.)",
    )
    ap.add_argument("--once", action="store_true", help="Process inbox and exit (no watching)")
    ap.add_argument("--poll-interval", type=float, default=5.0, help="Poll cadence for the watcher")
    return ap.parse_args()


def run(args: argparse.Namespace) -> int:
    vault = args.vault.resolve()
    # Ensure the vault has the required directories before we start watching.
    vault_ensure(vault)
    orch = Orchestrator(vault_root=vault)
    seen: set[str] = set()

    if args.once:
        processed = orch.run_once(seen)
        print(f"Processed {len(processed)} command(s):")
        for cid, outcome in processed:
            print(f"  {cid}: {outcome}")
        return 0

    inbox = vault / "CHAT" / "INBOX.md"
    if not inbox.exists():
        print(f"INBOX.md not found at {inbox}; creating empty placeholder.", file=sys.stderr)
        inbox.parent.mkdir(parents=True, exist_ok=True)
        inbox.touch()

    # initial sweep
    orch.run_once(seen)
    _sweep_inter_agent(vault, seen)

    stop_flag = {"stop": False}

    def on_change(_path):
        # Coalesce: if events arrive in quick succession, the orchestrator
        # is idempotent on command_id, so repeated triggers are safe.
        orch.run_once(seen)
        _sweep_inter_agent(vault, seen)

    def on_signal(signum, frame):
        stop_flag["stop"] = True

    signal.signal(signal.SIGINT, on_signal)
    signal.signal(signal.SIGTERM, on_signal)
    if hasattr(signal, "SIGBREAK"):
        signal.signal(signal.SIGBREAK, on_signal)

    watcher = make_md_watcher(inbox, on_change)
    watcher.start()
    print(f"Hermes daemon watching {inbox} (Ctrl-C to stop)...")

    try:
        while not stop_flag["stop"]:
            time.sleep(args.poll_interval)
    finally:
        watcher.stop()
    print("Stopped.")
    return 0


def main() -> int:
    return run(parse_args())


def _sweep_inter_agent(vault: Path, seen: set[str]) -> None:
    """Run the inter-agent inbox scan after the user-channel sweep.

    Side-effects: writes completion-handler STATUS blocks, brokered
    handoff briefs, and verdict mirrors. Pure side-effect function; it
    never raises (errors are caught and logged in the per-handler try
    blocks inside `poll_all_inboxes`).
    """
    try:
        # The runner here is the same AgentRunner the orchestrator uses.
        from .agent_runner import AgentRunner

        result = poll_all_inboxes(vault, runner=AgentRunner(), seen=seen)
        if result.handled:
            print("[hermes-bus] inter-agent sweep handled:")
            for k, s in result.handled:
                print(f"  - {k}: {s}")
    except Exception as exc:  # noqa: BLE001
        print(f"[hermes-bus] inter-agent sweep error: {exc}", file=sys.stderr)


if __name__ == "__main__":
    raise SystemExit(main())
