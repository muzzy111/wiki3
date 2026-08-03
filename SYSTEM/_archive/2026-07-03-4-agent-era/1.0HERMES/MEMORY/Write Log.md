---
title: Write Log — Hermes Memory
tags: [agent, hermes, memory, log, audit]
created: 2026-07-01
type: memory-log
status: active
---

# Write Log — Hermes Memory

> Audit trail of every write to Hermes' long-term memory folder. Append-only. Mavis is the writer; this log is the record.

## How to Append

When Mavis writes a new memory or edits an existing one, Mavis appends a row to the table below:

```markdown
| YYYY-MM-DD HH:MM | <what was written> | <category> | <why durable> |
```

Mavis updates `Hermes Memory.md` first, then appends here. Hermes reads both.

## Current Entries

| Date | What | Category | Why durable |
|---|---|---|---|
| 2026-07-01 | Bootstrap entry — `Hermes Memory.md` initialized | bootstrap | Sets the file's existence and structure |

## Pruning History

Entries that are removed from `Hermes Memory.md` and the reason are recorded here.

> None yet.