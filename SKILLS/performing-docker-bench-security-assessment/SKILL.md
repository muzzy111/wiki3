---
name: performing-docker-bench-security-assessment
description: "Agent for performing Docker CIS Benchmark security assessment. Use when the user asks to perform docker bench security assessment."
version: 1.0.0
tags:
  - performing
  - cloud
source: performing-docker-bench-security-assessment
---

# Performing Docker Bench Security Assessment

**Role:** Hands-on assessment  
**Audience:** pentesters, blue teamers, and DFIR practitioners  
**Primary tools:** Docker, Scoring

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **perform** docker bench security assessment.
- Capability: Agent for performing Docker CIS Benchmark security assessment.
- Goal: execute a focused security technique or assessment workflow.
- Trigger keywords: `performing, docker, bench, security, assessment`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Run docker-bench-security and parse results
2. Parse docker-bench-security output into structured findings
3. Check running container configurations against CIS benchmarks

## Key concepts

- PASS: Check meets CIS recommendation
- FAIL: Check does not meet recommendation (remediation required)
- WARN: Check requires manual verification
- INFO: Informational, no scoring impact

## Tools & resources

- Docker
- Scoring

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

- `run_docker_bench` — Run docker-bench-security and parse results.
- `parse_bench_output` — Parse docker-bench-security output into structured findings.
- `check_container_configs` — Check running container configurations against CIS benchmarks.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `performing-docker-bench-security-assessment`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
