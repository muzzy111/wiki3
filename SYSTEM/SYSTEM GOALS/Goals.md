---
title: "System Goals"
type: system-goals
status: active
---

# System Goals

> What the LOOP vault exists to do.

## Primary Goals

1. **Turnkey cowork.** A new agent joining the system can run a smoke test and start working within an hour, without reading 100+ files.
2. **Agent agnosticism.** No hard-coded agent names anywhere in the runtime. Roles are referenced by key from `SYSTEM/agents.yaml`.
3. **Reviewable work.** Every user-facing artifact is reviewed by the Memory Curator before reaching the user.
4. **Auditable history.** Every change is captured in the system record, wikis trace to raw sources, and the Karpathy wiki is curated.
5. **Cross-role compatibility.** The Coordinator dispatches by role key; Coder, Researcher, Tools, Memory each maintain a uniform 6-subfolder layout.

## Non-Goals

- **No multi-user features.** Single user (Admin) model.
- **No mobile sync.** The vault is desktop + obsidian-desktop only.
- **No live Drive sync wiring in code.** Tools documents the protocol; Tools (or user) wires the actual sync.
- **No renaming of STYTEM RECORD or TASKS/QUED.** The legacy misspellings stay.

## Success Criteria

- All 5 role folders exist and follow the 6-subfolder layout.
- `SYSTEM/agents.yaml` parses with 5 roles.
- `hermes_bus` daemon CLI surface is unchanged: `python -m hermes_bus.daemon --vault <path> --once` works.
- All 48 prior hermes_bus tests still pass; new tests bring the total to 60+.
- A single command (`bash scripts/turnkey-smoke.sh` or pwsh variant) exits 0 with all checks passing.

## Related

- `SYSTEM/SYSTEM RULES/Rules.md`
- `SYSTEM/SYSTEM GRAPH/Graph.md`
