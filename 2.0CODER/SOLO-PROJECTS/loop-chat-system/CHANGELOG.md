# CHANGELOG — Loop Chat System

## 0.1.0 — 2026-07-01

Initial operational release.

- **`frontmatter.py`** — minimal frontmatter parser/serializer with
  sub-block support.
- **`parser.py`** — INBOX.md command parser; skips the example template;
  emits structured `Command` dataclass.
- **`router.py`** — keyword-based routing honoring `agent_target`
  override; defaults to AGY on no-match.
- **`agent_runner.py`** — `opencode run` and `agy --print` subprocess
  wrappers with per-run timeout and log capture.
- **`mavis_runner.py`** — review pipeline; structured JSON verdict
  parser; tolerant fallback to `approved-with-notes`.
- **`inbox_watcher.py`** — watchdog-based file/dir listener with a
  polling fallback (no dependency on watchdog at runtime).
- **`orchestrator.py`** — session loop: pickup -> route -> dispatch ->
  monitor -> review -> reply -> mark done.
- **`daemon.py`** — long-running entry point with `--once` mode for
  batch processing.

## 0.0.0 — pre-release

Initial scaffolding.
