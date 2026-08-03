---
title: "Backup Verification Flow"
type: workflow
status: active
---

# Backup Verification Flow

> Reads `4.0TOOLS/MEMORY/Backup Log.md` and reports backup freshness. Runs daily at 03:00 local.

## Trigger

- Daily at 03:00.
- Manual: `run.ps1 -VaultRoot .`

## Steps

1. Locate `4.0TOOLS/MEMORY/Backup Log.md`.
2. Compute freshness = (now - last_run_timestamp). If missing, freshness is "unknown".
3. Emit a status line: `FRESH`, `STALE` (>24h), or `MISSING`.

## Outputs

- Status line printed.
- Exit code 0 (fresh), 1 (missing log), 2 (stale).

## Failure Handling

- Missing Backup Log: print a hint to set up the backup workflow; exit 1.
- Stale backup: print the age; exit 2.
