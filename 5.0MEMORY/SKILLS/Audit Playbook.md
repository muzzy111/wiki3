---
title: "Audit Playbook"
role: "memory"
status: active
---

# Audit Playbook

> The 9 audit categories run by the Memory Curator.

## The Categories

1. **Folder health.** Every top-level folder exists; no orphan .tmp files at root.
2. **Frontmatter compliance.** Every operational note has the required frontmatter.
3. **Wikilink integrity.** Every wikilink resolves or is a deliberate stub.
4. **Lock integrity.** Files in `SYSTEM/LOCK/` are unmodified.
5. **Backup currency.** Last backup <24h old; checksum matches.
6. **Orphan notes.** No notes with no inbound wikilinks (except top-level indexes).
7. **Task hygiene.** Every TASKS/STATUS/ task has either `status: done` or is <7 days old and `status: pending`.
8. **Memory hygiene.** Every role MEMORY has been curated in the last 30 days.
9. **Karpathy wiki health.** Every raw entry has been processed (or has a documented skip reason).

## How to Run

Either manually via this playbook, or via `WORKFLOWS/WEEKLY-AUDIT/run.ps1`.

## Output

Each run writes to `SYSTEM/STYTEM RECORD/Audit Log.md` (append-only).

## Pitfalls

- **Pitfall: forgetting to log.** Always append; otherwise drift detection can't compute baselines.

## Related

- `WORKFLOWS/WEEKLY-AUDIT/Flow.md`
