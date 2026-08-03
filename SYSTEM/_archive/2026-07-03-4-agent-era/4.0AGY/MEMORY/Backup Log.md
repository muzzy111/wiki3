---
title: Backup Log
tags: [agent, agy, backup, log, audit]
created: 2026-07-01
type: backup-log
status: active
owner: AGY (writes)
---

# Backup Log

> Append-only log of every Google Drive backup run. AGY is the writer. Hermes and the user read this for backup health.

## Schema

| Timestamp | Sync Mode | Files Synced | Bytes | Errors | Duration |
|---|---|---|---|---|---|

- **Timestamp:** ISO 8601 (`YYYY-MM-DDTHH:MM:SS`).
- **Sync Mode:** `full` (initial mirror), `incremental` (default, only changed files), `verify` (no transfer, just checksum compare), `restore` (Drive -> local, rare).
- **Files Synced:** count of files transferred this run.
- **Bytes:** total bytes transferred.
- **Errors:** count of failed transfers. 0 means clean.
- **Duration:** elapsed time of the run in seconds.

## Current Entries

> No runs yet. AGY appends rows as syncs occur.

## Verification Commands

To check backup health on demand:

```powershell
# Count local files
(Get-ChildItem -Path 'C:\Users\Admin\OBSIDIAN\LOOP-20260630132527112' -Recurse -File).Count

# Compare with remote (Drive path varies; see AGY's env config)
```

## See Also

- AGY's role: [[../AGENT]]
- Backup protocol: [[../RULES/Backup Protocol]]
- Google Drive sync skill: [[../SKILLS/Google Drive Sync]]
- AGY memory: [[AGY Memory]]