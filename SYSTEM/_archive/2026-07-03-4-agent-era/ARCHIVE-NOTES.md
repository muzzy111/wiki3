---
title: "4-Agent Era Archive"
type: archive-notes
status: active
archived: 2026-07-03
---

# 4-Agent Era Archive

> Pre-2026-07-03 LOOP vault state, when the topology was 4 named agents instead of 5 role-keyed roles.

## What's Here

| Folder | Original role | Mapped to |
|---|---|---|
| `1.0HERMES/` | Chat director, user channel, dispatch, MCP authoring | `1.0COORDINATOR/` |
| `2.0MAVIS/` | Review, audit, group memory, wiki curation | `5.0MEMORY/` |
| `3.0OPENCODE/` | Code, scripts, MCP implementation, DataviewJS, the `loop-chat-system` project | `2.0CODER/` |
| `4.0AGY/` | Web research, environment, Docker, MCP wiring, backup, Drive sync | `3.0RESEARCHER/` (research) + `4.0TOOLS/` (infra) |

## What Was Ported

The 22 legacy-file ports are documented in `SYSTEM/STYTEM RECORD/2026-07-03 — 5-Role Migration.md`. This archive preserves the originals unchanged.

## Rollback Procedure

```bash
# Reverse the archive (resolve by date if any conflict)
mv "SYSTEM/_archive/2026-07-03-4-agent-era/1.0HERMES" .
# ... repeat for each.
```

## Why Misspelled Folders Stay

`STYTEM RECORD` and `TASKS/QUED` are kept as-is per the user's "leave the misspellings" rule.

## See Also

- `SYSTEM/agents.yaml` (the new registry).
- `SYSTEM/STYTEM RECORD/2026-07-03 — 5-Role Migration.md`.
