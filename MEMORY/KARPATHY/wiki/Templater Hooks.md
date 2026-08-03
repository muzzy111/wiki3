---
title: "Templater Hooks"
type: wiki-note
domain: role/coder
source: "[[RAW/2026-07-03 — wiki-seed]]"
tags:
  - domain/role-coder
  - type/wiki-note
  - topic/templater
  - status/active
created: 2026-07-03
modified: 2026-07-03
status: active
---

# Templater Hooks

> Templater scripts for automation in the LOOP vault.
> Role domain: **coder**. Status: active.

## Summary

Templater scripts for automation in the LOOP vault.

## Key Points

- Templater prompt runs at insertion time, not on every open.
- Date math via moment; prefer tp.date.now format with bracket-percent patterns.
- Hooks should be idempotent.

## Application

When this role is the active agent in a dispatch, this wiki note provides
the working memory for the *templater hooks* topic. Cross-reference with
the role's persona (in `1.0COORDINATOR/PROMPTS/`, `2.0CODER/PROMPTS/`, etc).

## Source

This wiki note was seeded as part of the 5-role migration; the canonical
source is `MEMORY/KARPATHY/raw/2026-07-03 — wiki-seed.md`.

## Related

- `SYSTEM/agents.yaml` — the registry
- `CODER/AGENT.md` — the role definition
- [[Master Index]] (Karpathy schema)
