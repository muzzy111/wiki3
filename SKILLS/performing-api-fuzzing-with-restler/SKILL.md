---
name: performing-api-fuzzing-with-restler
description: "RESTler API fuzzing orchestration and result analysis. Use when the user asks to perform api fuzzing with restler."
version: 1.0.0
tags:
  - performing
source: performing-api-fuzzing-with-restler
---

# Performing API Fuzzing with Restler

**Role:** Hands-on assessment  
**Audience:** pentesters, blue teamers, and DFIR practitioners  
**Primary tools:** Key CLI Flags, Security Checkers, Output Directory Structure, External References

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **perform** api fuzzing with restler.
- Capability: RESTler API fuzzing orchestration and result analysis agent.
- Goal: execute a focused security technique or assessment workflow.
- Trigger keywords: `performing, fuzzing, restler`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Compile OpenAPI spec into RESTler fuzzing grammar
2. Run RESTler in test, fuzz-lean, or fuzz mode
3. Parse RESTler run summary JSON from results directory
4. Parse RESTler bug bucket files for discovered vulnerabilities
5. Generate a security-focused fuzzing dictionary for RESTler
6. Execute RESTler fuzzing audit workflow

## Tools & resources

- Key CLI Flags
- Security Checkers
- Output Directory Structure
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

- `compile_spec` — Compile OpenAPI spec into RESTler fuzzing grammar.
- `run_fuzz_mode` — Run RESTler in test, fuzz-lean, or fuzz mode.
- `parse_run_summary` — Parse RESTler run summary JSON from results directory.
- `parse_bug_buckets` — Parse RESTler bug bucket files for discovered vulnerabilities.
- `generate_custom_dictionary` — Generate a security-focused fuzzing dictionary for RESTler.
- `run_audit` — Execute RESTler fuzzing audit workflow.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `performing-api-fuzzing-with-restler`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
