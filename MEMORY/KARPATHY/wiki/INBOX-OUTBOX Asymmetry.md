---
title: "INBOX-OUTBOX Asymmetry"
type: wiki-note
domain: role/coordinator
source: "[[RAW/2026-07-03 — wiki-seed]]"
tags:
  - domain/role-coordinator
  - type/wiki-note
  - topic/inter-agent
  - status/active
created: 2026-07-03
modified: 2026-07-03
status: active
---

# INBOX-OUTBOX Asymmetry

> Why inboxes are role-specific and outboxes are append-only.
> Role domain: **coordinator**. Status: active.

## Summary

Why inboxes are role-specific and outboxes are append-only.

## Key Points

- Inboxes are role-named so briefs are obvious.
- Outboxes are append-only and readonly after creation.
- The inter-agent protocol flows in then work then out.

## Application

When this role is the active agent in a dispatch, this wiki note provides
the working memory for the *inbox-outbox asymmetry* topic. Cross-reference with
the role's persona (in `1.0COORDINATOR/PROMPTS/`, `2.0CODER/PROMPTS/`, etc).

## Source

This wiki note was seeded as part of the 5-role migration; the canonical
source is `MEMORY/KARPATHY/raw/2026-07-03 — wiki-seed.md`.

## Related

- `SYSTEM/agents.yaml` — the registry
- `COORDINATOR/AGENT.md` — the role definition
- [[Master Index]] (Karpathy schema)
