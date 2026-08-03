---
name: performing-fuzzing-with-aflplusplus
description: "AFL++ fuzzing campaign management and crash triage. Use when the user asks to perform fuzzing with aflplusplus."
version: 1.0.0
tags:
  - performing
source: performing-fuzzing-with-aflplusplus
---

# Performing Fuzzing with Aflplusplus

**Role:** Hands-on assessment  
**Audience:** pentesters, blue teamers, and DFIR practitioners  
**Primary tools:** AFL++ CLI Tools, afl-fuzz Key Flags, fuzzer_stats File Fields, Crash Triage Tools, External References

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **perform** fuzzing with aflplusplus.
- Capability: AFL++ fuzzing campaign management and crash triage agent.
- Goal: execute a focused security technique or assessment workflow.
- Trigger keywords: `performing, fuzzing, aflplusplus`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Compile target with AFL++ instrumentation
2. Minimize seed corpus using afl-cmin
3. Parse afl-fuzz fuzzer_stats file for campaign metrics
4. Enumerate and classify crash files from AFL++ output
5. Minimize a crash test case with afl-tmin
6. Run afl-whatsup to get multi-instance campaign summary
7. Execute AFL++ fuzzing campaign audit

## Tools & resources

- AFL++ CLI Tools
- afl-fuzz Key Flags
- fuzzer_stats File Fields
- Crash Triage Tools
- External References

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

## Automation entry points

- `instrument_target` — Compile target with AFL++ instrumentation.
- `minimize_corpus` — Minimize seed corpus using afl-cmin.
- `parse_fuzzer_stats` — Parse afl-fuzz fuzzer_stats file for campaign metrics.
- `triage_crashes` — Enumerate and classify crash files from AFL++ output.
- `minimize_crash` — Minimize a crash test case with afl-tmin.
- `run_whatsup` — Run afl-whatsup to get multi-instance campaign summary.
- `run_audit` — Execute AFL++ fuzzing campaign audit.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `performing-fuzzing-with-aflplusplus`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
