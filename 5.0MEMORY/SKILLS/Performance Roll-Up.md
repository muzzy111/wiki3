---
title: "Performance Roll-Up"
role: "memory"
status: active
---

# Performance Roll-Up

> Skill: how Memory Curator computes weekly performance metrics.

## Procedure

1. Read `TASKS/STATUS/` (last 7 days).
2. Compute per-role: average turnaround, review pass rate, retry rate.
3. Write the roll-up to `5.0MEMORY/MEMORY/Performance/<YYYY-Wxx>.md`.
4. If any metric deviates >1 sigma from prior 4-week mean, append a flag row.

## Output Format

```markdown
| Role | Turnaround (mean s) | Pass rate | Retry rate |
|---|---|---|---|
| coordinator | 12 | 0.98 | 0.02 |
| coder | 380 | 0.91 | 0.09 |
| ... |
```

## Pitfalls

- **Pitfall: small sample.** Don't compute stats on <3 completions.
