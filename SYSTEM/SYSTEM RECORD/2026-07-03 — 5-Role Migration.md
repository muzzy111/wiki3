---
title: "5-Role Migration"
type: system-record
status: resolved
created: 2026-07-03
migration: 4-agent -> 5-role
---

# 5-Role Migration

> Decision record: migrate from the 4-agent topology (Hermes, Mavis, OpenCode, AGY) to the 5-role topology (Coordinator, Coder, Researcher, Tools, Memory).

## Decision

All four legacy agent folders moved into `SYSTEM/_archive/2026-07-03-4-agent-era/`. Five new role folders replace them at the vault root.

## Why

1. Agent agnosticism. Roles, not CLIs.
2. Better separation of concerns. Researcher is research; Tools is infra; Memory is review.
3. Five skill surface rather than four.
4. Config-driven registry (`SYSTEM/agents.yaml`) replaces hard-coded paths.

## Risks

- **Risk:** wikilinks pointing at legacy paths break. **Mitigation:** legacy folders archived, not deleted; wikilinks resolve via the archive.
- **Risk:** other agents that knew the 4-agent topology get confused. **Mitigation:** `SYSTEM/agents.yaml` is the source of truth; daemon loads it at startup.

## Related

- `SYSTEM/agents.yaml`
- `SYSTEM/SYSTEM RULES/Rules.md` (migration section)
- `SYSTEM/SYSTEM GRAPH/Graph.md`
- `plan.txt`
