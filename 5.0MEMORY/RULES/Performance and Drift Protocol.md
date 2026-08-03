---
title: "Performance and Drift Protocol"
role: "memory"
status: active
---

# Performance and Drift Protocol

> How Memory Curator measures role performance and detects drift.

## Performance Metrics

Computed weekly by `5.0MEMORY/SOLO-PROJECTS/utility-scripts/performance_rollup.py`:

| Metric | Source | Where it's read |
|---|---|---|
| Average turnaround (per role) | `TASKS/STATUS/` last 7 days | brief.created -> completion.completed |
| Review pass rate | verdict JSONs | passed / total |
| Retry rate | brief.status == "retry" / total briefs | retries per 100 |
| Drift score | `5.0MEMORY/SOLO-PROJECTS/utility-scripts/agent_drift_detector.py` | 0-100; >30 is a flag |

## Drift Detection

The drift detector compares each role's recent INBOX/OUTBOX behavior against its Persona file:

- Persona says "no emojis in chat"; drift detector flags any emoji in a completion.
- Persona says "always cite with [N]"; drift detector flags uncited claims.
- Persona says "scope to your domain"; drift detector flags cross-domain completions.

## How to Act

Drift score > 30: write a system-record note at `SYSTEM/STYTEM RECORD/<date> — Drift Detection.md` and propose a persona update.

## Related

- `5.0MEMORY/SKILLS/Performance Roll-Up.md`
- `5.0MEMORY/SKILLS/Agent Drift Detection.md`
