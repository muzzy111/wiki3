---
title: "System Folder"
type: system-index
status: active
---

# System Folder

> System-level configuration, rules, goals, graph, registry, lock, and record. Subordinate to nothing; binding on everything.

## What's Here

```
SYSTEM/
+-- agents.yaml                 the role registry (single source of truth)
+-- Index.md                    this file
+-- templates/                  canonical templates (AGENT, Persona, Memory, SKILL)
+-- LOCK/                       read-only protected files
+-- STYTEM RECORD/              append-only system log (note: misspelled, rename planned)
+-- SYSTEM GOALS/               what the system is for
+-- SYSTEM GRAPH/               structural map (now 5-role)
+-- SYSTEM RULES/               binding rule set
+-- _archive/                   legacy folder holdings
+-- Hermes-Terminal-Bridge-Prompt.md  legacy reference for the ttyd bridge
```

## The 5-Role Topology

See `SYSTEM/agents.yaml` for the full registry and `SYSTEM/SYSTEM GRAPH/Graph.md` for the topology diagram.

## Authority

Files in `SYSTEM/` are the highest-authority documents in the vault. Subordinate to nothing. Binding on every agent and every user instruction.

If a user request conflicts with a system rule, the Coordinator explains and proposes a compliant alternative. No role silently overrides.

## See Also

- Vault root: `../README.md`
- Goals: `SYSTEM GOALS/Goals.md`
- Rules: `SYSTEM RULES/Rules.md`
- Graph: `SYSTEM GRAPH/Graph.md`
- Record: `STYTEM RECORD/Record.md`
- Lock: `LOCK/Lock.md`
- Templates: `templates/Index.md`
- Registry: `agents.yaml`
