---
title: AGY Memory
tags: [agent, agy, memory, long-term]
created: 2026-07-01
type: agent-memory
status: active
owner: Mavis (curator), AGY (reader)
---

# AGY Memory

> AGY's long-term memory. Mavis writes here. AGY reads here. Holds durable lessons about research sources, backup health, and environment preferences.

## What Lives Here

Three categories of memory:

1. **Research sources.** Sources AGY has used repeatedly and trusts. Quotas and rate limits observed. Search query patterns that work.
2. **Backup observations.** Backup health trends, recurring issues, sync timings.
3. **Environment preferences.** User preferences for plugins, themes, snippets.

## What Does Not Live Here

- Active task state. Use `TASKS/STATUS/`.
- Backup logs. Use `Backup Log.md` (same folder).
- Specific implementation details of any one project. Those live in the project's own `README.md`.
- Cross-agent knowledge. Use `MEMORY/` (the shared memory folder).

## Memory Write Protocol

When Mavis observes a durable lesson, Mavis appends it under the appropriate section. Each write is logged in `Write Log.md`.

AGY reads this folder at the start of every session.

## Backup Log

Backup-specific logs live in `Backup Log.md` (same folder). The log is append-only; each row is one sync run. Schema:

| Timestamp | Sync Mode | Files Synced | Bytes | Errors | Duration |
|---|---|---|---|---|---|

AGY appends a row after every sync run.

## Initial Contents

### Research sources

> None recorded yet. AGY will populate as research accumulates.

### Backup observations

> None recorded yet. Backup log will accumulate at `Backup Log.md`.

### Environment preferences

> None recorded yet. Mavis will populate as user feedback accumulates.

## See Also

- AGY's role: [[../AGENT]]
- Research protocol: [[../RULES/Research Protocol]]
- Backup protocol: [[../RULES/Backup Protocol]]
- Backup log: [[Backup Log]]