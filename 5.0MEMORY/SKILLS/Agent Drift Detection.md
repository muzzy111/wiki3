---
title: "Agent Drift Detection"
role: "memory"
status: active
---

# Agent Drift Detection

> How Memory Curator detects when a role's behavior drifts from its persona.

## Procedure

1. Read each role's Persona file.
2. Read the last 20 completion notes per role from `<role>/CHAT/Outbox/`.
3. Score drift: for each persona rule, count completions that violate it.
4. Drift score = (sum of violations) / (rules * completions) * 100.

## Action Levels

- **score < 10:** healthy.
- **10 ≤ score < 30:** log; monitor.
- **30 ≤ score < 60:** propose persona update at next memory review.
- **60 ≤ score:** escalate immediately; halt user-channel replies from that role until reset.

## Output

Writes to `5.0MEMORY/MEMORY/Drift/<date>.md` per run.

## Pitfalls

- **Pitfall: false positives.** Some violations are intentional (e.g., a Coder completion that doesn't cite is fine if it's a code comment, not a research brief). The detector should only score on persona rules that are absolute.
