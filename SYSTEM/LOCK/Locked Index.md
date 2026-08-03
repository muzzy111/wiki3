---
title: Locked Index
tags: [system, lock, index]
created: 2026-07-01
type: lock-index
status: active
---

# Locked Index

> Master list of every file or folder currently under lock. Empty by design — entries are added by Mavis as lock candidates are identified.

## How to Read This File

This is an append-only list. Each entry describes one locked item, the reason for locking, the unlock procedure, and the agent that identified the lock candidate.

## Current Entries

> [!note] No locks currently in effect
> The vault is bootstrapped and no files have been promoted to lock status yet. As the system matures, Mavis will identify lock candidates and add them below with a justification.

### Reserved Entry Template

```markdown
### <file path>

- **Locked on:** YYYY-MM-DD
- **Locked by:** <agent or operator>
- **Reason:** <credential / constitutional / external reference>
- **Unlock procedure:** <what the user must say to unlock>
- **Review cadence:** <how often this lock should be re-justified>
```

## Pending Lock Candidates

None yet.

## Recently Unlocked

None yet.

## How to Add a Lock

1. Mavis drafts a lock proposal in `SYSTEM/STYTEM RECORD/<date> — Lock Proposal.md`.
2. Hermes confirms the user understands the lock.
3. Mavis adds the entry here and either moves the file into `SYSTEM/LOCK/<category>/` or adds the `#security/private` tag with an annotation in the file's frontmatter.
4. The system record entry is updated with the resolution.

## How to Remove a Lock

1. User issues an explicit unlock directive in the current session.
2. Hermes writes a `deviation` entry to `SYSTEM/STYTEM RECORD/`.
3. Mavis removes the entry from this file and either moves the file out of `LOCK/` or removes the lock annotation.
4. The system record entry is updated with the resolution.