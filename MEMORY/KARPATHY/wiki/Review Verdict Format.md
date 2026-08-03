---
title: "Review Verdict Format"
type: wiki-note
domain: role/memory
source: "[[RAW/2026-07-03 — wiki-seed]]"
tags:
  - domain/role-memory
  - type/wiki-note
  - topic/review
  - status/active
created: 2026-07-03
modified: 2026-07-03
status: active
---

# Review Verdict Format

> The verdict JSON schema used for reviews.
> Role domain: **memory**. Status: active.

## Summary

The verdict JSON schema used for reviews.

## Key Points

- passed; must_fix; nits; evidence; summary.
- must_fix non-empty means block the source role's completion.
- Memory Curator always writes verdicts to its Outbox.

## Application

When this role is the active agent in a dispatch, this wiki note provides
the working memory for the *review verdict format* topic. Cross-reference with
the role's persona (in `1.0COORDINATOR/PROMPTS/`, `2.0CODER/PROMPTS/`, etc).

## Source

This wiki note was seeded as part of the 5-role migration; the canonical
source is `MEMORY/KARPATHY/raw/2026-07-03 — wiki-seed.md`.

## Related

- `SYSTEM/agents.yaml` — the registry
- `MEMORY/AGENT.md` — the role definition
- [[Master Index]] (Karpathy schema)
