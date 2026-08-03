---
title: Folder Rename Backlog
date: 2026-07-01
type: rename
status: open
author: Mavis
tags: [system, migration, rename]
---

# 2026-07-01 — Folder Rename Backlog

## Context

Two top-level folders in the vault have spelling errors from prior iterations:

- `SYSTEM/STYTEM RECORD/` — `STYTEM` should be `SYSTEM`
- `TASKS/QUED/` — `QUED` should be `QUEUED`

Renaming today would break wikilinks and any tooling that points at the literal path. The current rule (preserved from the bootstrap decision) is to leave them alone until a coordinated migration can be run.

## Plan

When migration is approved:

1. Audit every wikilink that points at `STYTEM` or `QUED` and record the source file.
2. Create new folders with correct spelling.
3. Move files in batch.
4. Update every wikilink using Obsidian's link-update workflow or a script.
5. Delete old folders.
6. Verify with a Dataview query that no broken links remain.
7. Mark this record `superseded` and append a resolution entry.

## When to Run

- After the initial vault operations stabilize (at least one weekly audit cycle complete).
- When the user explicitly requests the rename.
- When the link-update tooling is confirmed reliable.

## Impact While Open

- Wikilinks must use the misspelled path: `[[../STYTEM RECORD/Record]]`, `[[../../TASKS/QUED/Queue]]`.
- New notes in these folders use the misspelled parent path.
- Documentation files reference the misspellings explicitly so future operators are not confused.

## Owner

Migration will be coordinated by Mavis, executed by OpenCode (script-driven link update), and approved by the user before running.