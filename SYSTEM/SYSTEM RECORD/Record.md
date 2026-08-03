---
title: System Record
tags: [system, record, log, audit]
created: 2026-07-01
type: system-record
status: active
---

# System Record

> Running ledger of system-level decisions, deviations, and audit results. Append-only.

## How to Use This Folder

This folder is the system's append-only log. Every entry is a markdown file with the date and a short slug in the name. Examples:

- `2026-07-01 — Vault Bootstrap.md`
- `2026-07-08 — Weekly Audit.md`
- `2026-07-15 — Folder Rename STYTEM — SYSTEM.md` (planned)

Mavis owns writes here. Hermes may add entries when a user-facing decision is system-relevant. Other agents do not write here.

## Entry Format

Every entry uses this structure:

```markdown
---
title: <short title>
date: YYYY-MM-DD
type: decision | audit | deviation | rename | migration
status: open | resolved | superseded
author: <which agent or operator>
---

# <Title>

## Context

What triggered this entry.

## Decision / Finding

What was decided or what was found.

## Impact

What changes because of this entry.

## Followups

What needs to happen next, by when, by whom.
```

## Active Entries

> [!info] Initial bootstrap entry
> See [[2026-07-01 — Vault Bootstrap]] for the foundational decisions made when this record was first opened.

## Index of Entries

To be populated as entries are written. Future audit and decision entries are appended below in chronological order.

- 2026-07-01 — [[2026-07-01 — Vault Bootstrap]] — Vault initialized with four-agent topology
- 2026-07-01 — [[2026-07-01 — Folder Rename Backlog]] — Misspelled folder names queued for future migration
- 2026-07-01 — [[2026-07-01 — Chat System Operational Rebuild]] — Hermes daemon operationalized; user channel wired end-to-end; 32/32 tests green
- 2026-07-01 — [[2026-07-01 — Inter-Agent Protocol Implementation]] — All four-agent edges implemented; Hermes-mediated handoffs; 48/48 tests green

## Open Deviations

None currently.

## Superseded Records

None yet.