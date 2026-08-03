"""Run a single tick of the orchestrator (no watcher)."""

from .daemon import main


if __name__ == "__main__":
    raise SystemExit(main())
