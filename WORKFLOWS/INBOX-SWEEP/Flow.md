---
title: "Inbox Sweep Flow"
type: workflow
status: active
---

# Inbox Sweep Flow

> Runs every 5 minutes via cron / Windows Task Scheduler. Picks up new briefs in role inboxes; the daemon one-shot processes them.

## Trigger

- Every 5 minutes.

## Inputs

- `VaultRoot` — vault root path.

## Steps

1. Verify the vault root.
2. Invoke `python -m hermes_bus.daemon --vault <VaultRoot> --once` (one-shot sweep).
3. Capture stdout/stderr to `4.0TOOLS/MEMORY/Inbox Sweep Log.md`.

## Outputs

- Per-role inbox files are processed.
- OUTBOX.md gets updated with new completions.
- Log appended to `4.0TOOLS/MEMORY/Inbox Sweep Log.md`.

## Failure Handling

- Daemon failure: log to Inbox Sweep Log; sleep 60s; retry next tick.
- Vault not found: log and exit 1; cron will retry next tick.
