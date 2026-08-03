---
name: performing-threat-emulation-with-atomic-red-team
description: "Agent for threat emulation with Atomic Red Team test execution. Use when the user asks to perform threat emulation with atomic red team."
version: 1.0.0
tags:
  - performing
  - threat-intel
source: performing-threat-emulation-with-atomic-red-team
---

# Performing Threat Emulation with Atomic Red Team

**Role:** Hands-on assessment  
**Audience:** pentesters, blue teamers, and DFIR practitioners  
**Primary tools:** atomic

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **perform** threat emulation with atomic red team.
- Capability: Agent for threat emulation with Atomic Red Team test execution.
- Goal: execute a focused security technique or assessment workflow.
- Trigger keywords: `performing, threat, emulation, atomic, team`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Load Atomic Red Team test definitions for a technique
2. List all available Atomic Red Team techniques
3. Get detailed information about tests for a technique
4. Execute an Atomic Red Team test using atomic-operator
5. Execute atomic test manually by parsing YAML and running commands
6. Run cleanup commands for an atomic test
7. Compare available atomic tests against detection rules for gap analysis

## Tools & resources

- atomic

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

- `load_atomic_tests` — Load Atomic Red Team test definitions for a technique.
- `list_available_techniques` — List all available Atomic Red Team techniques.
- `get_test_details` — Get detailed information about tests for a technique.
- `execute_atomic_test` — Execute an Atomic Red Team test using atomic-operator.
- `execute_atomic_manual` — Execute atomic test manually by parsing YAML and running commands.
- `run_cleanup` — Run cleanup commands for an atomic test.
- `build_coverage_matrix` — Compare available atomic tests against detection rules for gap analysis.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `performing-threat-emulation-with-atomic-red-team`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
