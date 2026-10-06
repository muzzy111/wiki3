---
alwaysApply: true
---

# Question Discipline — AskUserQuestion Protocol

This rule governs which agents may use `AskUserQuestion` in the LOOP Vault OS.

## Orchestrator-Only Rule

Only the **main session (orchestrator)** may call `AskUserQuestion` directly.

Sub-agents (any agent spawned by the orchestrator, any phase agent, any pipeline step)
are **forbidden** from calling `AskUserQuestion`. Instead:

1. Record the uncertainty or required decision in a structured `## Escalations` section.
2. Tag each item with `[BLOCKING]`, `[ASK]`, or `[NOTE]`.
3. Return the Escalations section to the orchestrator as part of the response.
4. The orchestrator consolidates escalations and surfaces them to the user via
   `AskUserQuestion`.

## Escalation Tags

| Tag | Meaning |
|-----|---------|
| `[BLOCKING]` | Work cannot continue without user input. Hard stop. |
| `[ASK]` | A decision is needed but work can continue with a reasonable assumption meanwhile. |
| `[NOTE]` | Information the user should know; no decision required. |

## Why This Exists

If sub-agents call `AskUserQuestion` independently, the user receives fragmented,
out-of-order questions from multiple agents — breaking the orchestrator's state and
causing duplicate or conflicting questions in subsequent phases. Centralizing questions
at the orchestrator layer keeps user interaction coherent and predictable.
