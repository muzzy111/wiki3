---
title: "Google Drive Sync"
role: "tools"
status: active
---

# Google Drive Sync

> Skill: how the Tools role syncs the LOOP vault to Google Drive.

## Tool

Either Google Drive desktop sync (default) or rclone against a configured remote.

## Procedure

1. Verify the vault root path.
2. Start the sync (or rely on desktop sync's auto-trigger).
3. Confirm the file count post-sync matches pre-sync.
4. Write a row to `4.0TOOLS/MEMORY/Backup Log.md`.

## Pitfalls

- **Pitfall: sync lag.** Drive sync may take 10-30s; the verification workflow should wait before checking.
- **Pitfall: sync exclusion drift.** If you add a new exclusion path, update the protocol doc.

## Related

- `WORKFLOWS/BACKUP-VERIFICATION/Flow.md`
