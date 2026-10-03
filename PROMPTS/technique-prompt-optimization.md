---
name: "Prompt Optimization Playbook"
description: "Automatic and manual prompt optimization — GEPA, MIPRO, TextGrad, eval loops, and when to use each."
type: technique-prompt
tags: [prompt-optimization, dspy, gepa, textgrad, consolidated]
status: active
source: consolidated
---

# Prompt Optimization Playbook

## When to optimize

Optimize only after you have: (1) a fixed task, (2) a small eval set with gold or rubrics, (3) a baseline prompt with measured score.

## Method map

| Method | Idea | Best for | Cost |
|---|---|---|---|
| Manual iterate | Edit → eval → keep | Early design | Low |
| Few-shot bootstrap | Mine good traces as demos | Structured tasks | Low–med |
| MIPROv2 (DSPy) | Search instructions + demos | Pipelines in DSPy | Med |
| GEPA | Reflective evolutionary prompt search | Agentic / hard prompts | Med–high |
| TextGrad | Textual gradients as critique | Continuous refinement | Med |
| RL / policy gradient | Discrete prompt as policy | Research / large budget | High |

## Minimum eval harness

```text
For each test case:
  input → model(prompt, input) → score(output, rubric|gold)
Report: mean score, fail rate, cost, latency
Gate: never ship a prompt that loses on the smoke suite
```

## Manual optimization loop

1. Define success criteria and output schema
2. Collect 5–20 failures with reasons
3. Patch prompt with specific constraints (not "be better")
4. Re-run suite; keep only patches that improve net score
5. Version prompts (v1, v2, changelog)

## Critique prompt (TextGrad-style)

```text
You are a prompt critic. Given TASK, CURRENT_PROMPT, and FAILURES:
1. List failure modes (concrete)
2. Propose minimal prompt edits (diff-style)
3. Note risks of each edit (overfit, verbosity, brittleness)
Return JSON: {modes, edits[], risks[]}
```

## Evolutionary / reflective loop (GEPA-style)

```text
Population of prompts → evaluate → select parents →
reflect on failures → mutate instructions → re-evaluate → keep Pareto-best
```

Human role: own the metric. Bad metrics make confident wrong prompts.

## Production rules

- Freeze model + temperature when comparing prompts
- Separate train/dev/test cases
- Prefer smaller prompts that win on eval over clever long ones
- Re-run suite when the base model changes