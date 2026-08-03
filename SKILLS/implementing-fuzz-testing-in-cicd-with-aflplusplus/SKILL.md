---
name: implementing-fuzz-testing-in-cicd-with-aflplusplus
description: "Agent for implementing AFL++ fuzz testing in CI/CD pipelines. Use when the user asks to implement fuzz testing in cicd with aflplusplus."
version: 1.0.0
tags:
  - implementing
source: implementing-fuzz-testing-in-cicd-with-aflplusplus
---

# Implementing Fuzz Testing in Cicd with Aflplusplus

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** OWASP Testing Guide v4.2, Fuzzing Maturity Levels

## When to use

- The user wants to **implement** fuzz testing in cicd with aflplusplus.
- Capability: Agent for implementing AFL++ fuzz testing in CI/CD pipelines.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, fuzz, testing, cicd, aflplusplus`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Compile target binary with AFL++ instrumentation
2. Prepare and minimize seed corpus using afl-cmin
3. Minimize seed corpus using afl-cmin
4. Run AFL++ fuzzer for a specified duration
5. Parse AFL++ fuzzer_stats file into a dict
6. Triage crash inputs to deduplicate and classify

## Key concepts

- WSTG-INPV-07: Testing for Input Validation --- AFL++ systematically tests boundary conditions
- WSTG-ERRH-01: Error Handling --- Crash analysis reveals improper error handling

## Tools & resources

- OWASP Testing Guide v4.2
- Fuzzing Maturity Levels

## How the agent should work

1. **Orient** — Restate the user's goal, scope, and constraints in one short paragraph.
2. **Load depth as needed** — Do **not** dump raw API tables into the chat. Read only the reference sections required for the current step.
   - Workflows and playbooks: `references/workflows.md` (if present)
   - Standards, data models, event IDs: `references/standards.md` (if present)
   - CLI/API flags and query snippets: `references/api-reference.md`
3. **Prefer automation** — Use `scripts/agent.py` (and `scripts/process.py` if present) for repeatable collection/analysis when the environment allows.
4. **Explain at the right altitude** — Lead with decisions and findings; put flags, full queries, and hex dumps in collapsible detail or appendices.
5. **Close the loop** — Summarize confidence, residual risk, and concrete next steps.

## Package layout

| Path | Purpose |
|------|---------|
| `SKILL.md` | This high-level playbook (start here) |
| `references/` | Deep procedure, standards, and CLI/API detail |
| `scripts/` | Automation helpers for collection/analysis |
| `assets/` | Templates, checklists, and report scaffolds |

## Automation entry points

- `compile_target` — Compile target binary with AFL++ instrumentation.
- `prepare_corpus` — Prepare and minimize seed corpus using afl-cmin.
- `minimize_corpus` — Minimize seed corpus using afl-cmin.
- `run_fuzzer` — Run AFL++ fuzzer for a specified duration.
- `parse_fuzzer_stats` — Parse AFL++ fuzzer_stats file into a dict.
- `triage_crashes` — Triage crash inputs to deduplicate and classify.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-fuzz-testing-in-cicd-with-aflplusplus`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
