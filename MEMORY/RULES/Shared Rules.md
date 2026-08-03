---
title: Shared Rules
tags: [memory, rules, cross-cutting]
created: 2026-07-01
type: shared-rules
status: active
---

# Shared Rules

> Rules that span multiple agents. Subordinate to `SYSTEM/SYSTEM RULES/`. Mavis curates.

## What Lives Here

Cross-cutting rules that do not belong to a single agent:

- Multi-agent collaboration protocols.
- Cross-cutting standards (e.g., how agents refer to each other in chat).
- Conventions for naming cross-agent artifacts.

## Authority Hierarchy

```
SYSTEM/SYSTEM RULES/  (highest)
   |
   +--> <agent>/RULES/  (agent-specific)
   |
   +--> MEMORY/RULES/  (this folder — cross-cutting)
```

`SYSTEM/SYSTEM RULES/` always wins. If this folder's rules conflict with system rules, system rules win.

## Curation

Mavis writes here. Hermes may propose entries. Other agents may suggest entries to Mavis.

## File Naming

`<topic>.md`. Examples:

- `Cross-Agent Handoff.md`
- `Naming Conventions for Cross-Agent Artifacts.md`

## See Also

- System rules: [[../../../SYSTEM/SYSTEM RULES/Rules]]
- Shared memory index: [[../Index]]