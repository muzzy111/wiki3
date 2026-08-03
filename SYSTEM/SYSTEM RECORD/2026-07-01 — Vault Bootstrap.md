---
title: Vault Bootstrap
date: 2026-07-01
type: decision
status: resolved
author: Mavis (on behalf of the operator)
tags: [system, bootstrap]
---

# 2026-07-01 — Vault Bootstrap

## Context

The vault `LOOP-20260630132527112` was created with a four-agent folder topology (HERMES, MAVIS, OPENCODE, AGY) and a complete shared infrastructure skeleton (CANVAS, CHAT, MCP, MEMORY, PROJECTS, SKILLS, SYSTEM, TASKS, WORKFLOWS), but no documentation existed in any folder. The user requested a complete documentation pass on the entire vault.

## Decision

1. **Authority model:** Hermes is the sole communicator with the user. Mavis reviews all work. OpenCode owns code. AGY owns research, backups, math, and environment.

2. **Folder uniformity:** Each agent folder uses the same six-subfolder layout: CHAT, MEMORY, PROMPTS, RULES, SKILLS, SOLO-PROJECTS. This uniformity enables consistent audit and routing.

3. **Misspelled folder names preserved:** `STYTEM RECORD` (should be SYSTEM RECORD) and `QUED` (should be QUEUED) are preserved as-is. Wikilinks and tooling depend on the literal name. A future migration is queued.

4. **Global style rule:** No emojis or icons in any markdown file, header, or callout. Enforced from the existing root `CLAUDE.md` and extended to all system notes.

5. **Review is mandatory:** Every work product from OpenCode and AGY passes through Mavis before the user sees it. No exceptions, no fast path.

6. **Backup model:** AGY owns Google Drive sync. The local vault is the source of truth. The remote mirror is read-only as a recovery target.

7. **MCP ownership:** Hermes configures every MCP server. Configurations live in `MCP/`. Each server has a documentation file.

## Impact

- All four agent folders are documented end-to-end.
- Shared infrastructure folders are documented.
- System rules are codified in `SYSTEM/SYSTEM RULES/Rules.md`.
- A backup cadence is set (AGY runs a continuous 15-minute sync).
- A weekly audit cadence is set (Mavis, Sundays at 22:00 local).

## Followups

- 2026-07-08 — First weekly audit due.
- 2026-07-15 — Initial MCP server catalog due (Hermes).
- TBD — Folder rename migration for `STYTEM` and `QUED`. See [[2026-07-01 — Folder Rename Backlog]].