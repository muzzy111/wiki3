---
title: "Holdout Score Does Not Mean Deployable"
type: wiki-note
domain: hermes-agent-self-evolution
source: "[[RAW/2026-07-07 hermes session journal]]"
tags:
  - domain/hermes-agent-self-evolution
  - type/wiki-note
  - status/active
  - signal/verifier-confusion
created: 2026-07-07
modified: 2026-07-07
status: active
---

The DSPy + MIPROv2 optimizer reports `Best score so far: X.YY` after a run. That is the optimizer's *holdout metric* — the score on a held-out synthetic evaluation set. It is **necessary but not sufficient** for the evolved `SKILL.md` to be deployable.

The framework's constraint validator runs **after** the optimizer and either:
- writes `output/<skill>/evolved.md` (validator passed — deployable), or
- writes `output/<skill>/evolved_FAILED.md` (validator rejected — NOT deployable, keeps the cron's prior `evolved.md`)

The validator rejects when the optimizer's output: (a) is missing YAML frontmatter (per gotcha #5 in the `dspy-self-evolution-loop` skill: framework strips frontmatter pre-validation, requires reassemble dance), (b) exceeds the 15 KB size cap, or (c) violates the no-empty skill body rule.

**Verifier check** — count real deployable wins as:
```
output/<skill>/evolved.md exists
  AND output/<skill>/evolved.md.md5 != output/<skill>/evolved.md.prior.md5
  AND output/<skill>/evolved_FAILED.md does NOT exist
```

The friday_megapass.py orchestrator reported 13 "wins" but only 2 (codex, airtable) passed that check. Of the 11 false positives, 11/11 had `evolved_FAILED.md` and no `evolved.md` — the constraint validator had silently rejected them.

See also: [[Multi-Seed Skill Evolution Beats Single-Seed]], [[dspy-self-evolution-loop]] (gotcha #4 — body byte-identical to baseline is a feature, not a bug; gotcha #5 — reassemble dance).

**Disposition**: any future orchestrator must distinguish "Best score so far" (numerical) from "evolved.md deployed" (physical). Reporting either without the other is misleading.
