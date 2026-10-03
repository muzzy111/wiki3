---
title: "Multi-Seed Skill Evolution Beats Single-Seed"
type: wiki-note
domain: hermes-agent-self-evolution
source: "[[RAW/2026-07-07 hermes session journal]]"
tags:
  - domain/hermes-agent-self-evolution
  - type/wiki-note
  - status/active
  - signal/multi-seed
created: 2026-07-07
modified: 2026-07-07
status: active
---

The nightly cron at `~/.hermes/scripts/evolve_all_skills.py` runs at 3 iterations × 1 seed per skill on 57 Hermes skills. Last 2 nights' results show ~14 of those skills returning +0.00 delta — local-plateaus where the optimizer can't find a step in 3 trials.

Running the same 4 skills at **3 seeds × 10 iterations** (45 vs 3 trials per skill) moves them:

- maps: 57.35 -> 71.96 (+14.61)
- blogwatcher: 48.15 -> 67.10 (+18.95)
- gif-search: 42.59 -> 64.38 (+21.79)

Multi-seed sampling beats more iterations at single seed because the DSPy + MIPROv2 search has non-trivial variance per trial. Multi-seed sampling is more search-space coverage per compute unit than iter-bumping.

**Action**: replace the cron's `ITERATIONS=3` with a tiered approach — *daily* pass at 3-iter × 1-seed for fast catch (current); *friday-budget* pass at 10-iter × 3-seed for the plateau set only.

**Anti-pattern**: bumping iterations to 24 at single seed, hoping for a better local optimum. Variance per trial means single-seed 24-iter under-explores vs 3-seed 8-iter.

**Caveat**: the multi-seed "wins" still must pass the framework's constraint validator (see [[Holdout Score Does Not Mean Deployable]]). Multi-seed exploration makes numerical progress but most seed outputs fail constraint validation.

See also: [[dspy-self-evolution-loop]] skill — gotcha cluster and the verbose wrapper at `~/hermes-agent-self-evolution/run_evolution.py`.
