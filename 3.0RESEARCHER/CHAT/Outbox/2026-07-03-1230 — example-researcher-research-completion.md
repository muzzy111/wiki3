---
completion_id: C-20260703-003
brief_id: B-20260703-003
from_role: researcher
completed: 2026-07-03 12:30
status: done
---

# Completion: Agent Agnosticism Patterns

## Findings

Three patterns are well-established:

1. **Config-driven role registry.** A YAML or JSON file declares roles as keys; the runtime dispatches by key (LOOP uses `SYSTEM/agents.yaml`).
2. **Capability tags over hard-coded role strings.** Roles advertise capabilities (e.g. `code:python`, `web:search`); dispatch matches on tags.
3. **Pluggable adapter layer.** Each vendor (Claude, GPT, open-source) implements the same adapter interface; swapping vendors does not change dispatch logic.

See Sources for the original writing on each.

## Sources

[1] Vendor-Agnostic Agent Architecture — https://example.com/agnostic-agents (accessed 2026-07-03)
[2] Capability-Based Dispatch — https://example.org/capability-dispatch (accessed 2026-07-03)
[3] Adapter Patterns for Agent Runtimes — https://example.net/adapters (accessed 2026-07-03)

## Caveats

The literature is moving fast; expect more patterns by Q4 2026.

## Suggested Follow-ups

- How does Hermes/Claude Code handle override layers?
