---
title: "Backup Verification"
type: wiki-note
domain: role/tools
source: "[[RAW/2026-07-03 — wiki-seed]]"
tags:
  - domain/role-tools
  - type/wiki-note
  - topic/tools
  - status/active
created: 2026-07-03
modified: 2026-07-03
status: active
---

# Backup Verification

> How the Tools role verifies Drive backups.
> Role domain: **tools**. Status: active.

## Summary

How the Tools role verifies Drive backups.

## Key Points

- Read 4.0TOOLS/MEMORY/Backup Log.md and compute freshness.
- FRESH if log is under 24h old; STALE otherwise.
- Verification workflow runs daily at 03:00.

## Application

When this role is the active agent in a dispatch, this wiki note provides
the working memory for the *backup verification* topic. Cross-reference with
the role's persona (in `1.0COORDINATOR/PROMPTS/`, `2.0CODER/PROMPTS/`, etc).

## Source

This wiki note was seeded as part of the 5-role migration; the canonical
source is `MEMORY/KARPATHY/raw/2026-07-03 — wiki-seed.md`.

## Related

- `SYSTEM/agents.yaml` — the registry
- `TOOLS/AGENT.md` — the role definition
- [[Master Index]] (Karpathy schema)
