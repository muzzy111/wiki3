---
title: "Backup Protocol"
role: "tools"
status: active
---

# Backup Protocol

> Tools role owns backup.

## Daily Drive Sync

- Trigger: 03:00 local time via Windows Task Scheduler.
- Tool: a wrapper around Google Drive desktop sync OR rclone against a Drive remote.
- Scope: the LOOP vault root, excluding `.smart-env/event_logs/`, `.obsidian/workspace.json`, `*.tmp`.
- Output: `4.0TOOLS/MEMORY/Backup Log.md` is appended with a row (timestamp, files synced, delta vs prior).

## Verification

After every sync, the Tools role computes a SHA-256 checksum of every non-excluded file and writes the manifest to `4.0TOOLS/MEMORY/Manifest-<date>.sha256`. The `WORKFLOWS/BACKUP-VERIFICATION/run.ps1` reads the manifest and reports freshness.

## Rollback

If a sync error is detected (file count mismatch, checksum mismatch), the Tools role writes `4.0TOOLS/MEMORY/Backup Log.md` with the error and halts further syncs until user confirms.

## Related

- `WORKFLOWS/BACKUP-VERIFICATION/Flow.md`
- `4.0TOOLS/SKILLS/Backup Verification.md`
