---
title: Chat Archive
tags: [chat, archive, audit]
created: 2026-07-01
type: chat-archive
status: active
---

# Chat Archive

> Quarterly archive of chat inbox and outbox files. Old INBOX.md and OUTBOX.md content moves here when a quarter ends.

## Purpose

The current INBOX and OUTBOX are append-only and grow indefinitely. Quarterly, Hermes (or AGY on Hermes' behalf) archives them so the live files stay scannable.

## Layout

```
CHAT/Archive/
|-- 2026/
|   |-- Q3/
|   |   |-- INBOX — 2026-07-01 to 2026-09-30.md
|   |   `-- OUTBOX — 2026-07-01 to 2026-09-30.md
|   `-- Q4/
|       |-- INBOX — 2026-10-01 to 2026-12-31.md
|       `-- OUTBOX — 2026-10-01 to 2026-12-31.md
`-- 2027/
    `-- ...
```

## Archive Process

At the end of each quarter (last day of March, June, September, December):

1. Read the live `CHAT/INBOX.md` and `CHAT/OUTBOX.md`.
2. Create the archive folder if it does not exist (`CHAT/Archive/<year>/<quarter>/`).
3. Copy the live file to the archive with a date-range suffix.
4. Reset the live files: keep the structure (frontmatter, indexes, `<!-- USER_COMMANDS_START -->` markers) but clear the command list.

The live files remain the source of truth for the current quarter. The archive is read-only.

## What Is Archived

- All completed commands and replies.
- All cancelled commands (with cancellation reasons).
- All session log entries for the quarter.

What is **not** archived:

- Pending commands. These remain in the live INBOX until processed.
- The template, reference, guide files. These stay in the live CHAT folder.

## Search and Retrieval

Archived files are searchable via Obsidian's full-text search. To find a specific command or reply:

1. Open the archive folder for the year and quarter.
2. Use Cmd/Ctrl+F or Obsidian's search.

Mavis may build Dataview queries that span the archive for audit purposes (e.g., "show all cancelled commands in 2026").

## See Also

- [[../INBOX]] — live command pad
- [[../OUTBOX]] — live reply pad
- [[../Command Reference]] — full syntax spec