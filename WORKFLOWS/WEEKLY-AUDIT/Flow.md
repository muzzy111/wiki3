---
title: "Weekly Audit Flow"
type: workflow
status: active
---

# Weekly Audit Flow

> Memory Curator's 9-category audit. Runs weekly (recommended: Sunday 02:00 local).

## Trigger

- Manual (`run.ps1 -VaultRoot .`)
- Scheduled (Windows Task Scheduler; see `scheduler-task.xml`)

## Inputs

- `VaultRoot` — absolute or relative path to the LOOP vault.

## Steps

The Memory Curator runs these 9 audit categories and emits a table per category:

1. **Folder health** — every top-level folder exists; no orphan .tmp files at root.
2. **Frontmatter compliance** — every operational note has the required frontmatter.
3. **Wikilink integrity** — every wikilink resolves or is a documented stub.
4. **Lock integrity** — files in `SYSTEM/LOCK/` are unmodified since their checksum baseline.
5. **Backup currency** — last backup <24h old; checksum matches the manifest in `4.0TOOLS/MEMORY/`.
6. **Orphan notes** — no notes with no inbound wikilinks (except top-level indexes).
7. **Task hygiene** — every TASKS/STATUS/ task has either `status: done` or is <7 days old and pending.
8. **Memory hygiene** — every role MEMORY has been curated in the last 30 days.
9. **Karpathy wiki health** — every raw entry has been processed (or has a documented skip reason).

## Outputs

- Append to `SYSTEM/STYTEM RECORD/Audit Log.md` with timestamp and per-category results.
- Exit code 0 if clean, 1 if any issue.

## Failure Handling

- Log to `SYSTEM/STYTEM RECORD/Audit Log.md` regardless of pass/fail.
- Never crash; surface issues as a table.
