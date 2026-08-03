---
name: testing-ransomware-recovery-procedures
description: "Agent for testing and validating ransomware recovery procedures. Measures RTO/RPO against targets, validates backup restore integrity, tracks recovery sequencing, and generates compliance reports. Use when the user asks to test ransomware recovery procedures."
version: 1.0.0
tags:
  - testing
  - malware
  - ransomware
source: testing-ransomware-recovery-procedures
---

# Testing Ransomware Recovery Procedures

**Role:** Security testing  
**Audience:** QA security, pentesters, and AppSec engineers  
**Primary tools:** Recovery Phases Tracked, RTO/RPO Calculation, Tier Definitions, Validation Checks

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **test** ransomware recovery procedures.
- Capability: Agent for testing and validating ransomware recovery procedures. Measures RTO/RPO against targets, validates backup restore integrity, tracks recovery sequencing, and generates compliance reports.
- Goal: validate defenses, applications, or controls under controlled conditions.
- Trigger keywords: `testing, ransomware, recovery, procedures`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Compute hashes for all files in a directory for integrity verification
2. Compare two hash manifests to detect missing, added, or changed files
3. Check if a service is running and responsive
4. Verify database is accessible after restore
5. Execute a recovery drill based on a configuration dict
6. Generate a recovery test report

## Tools & resources

- Recovery Phases Tracked
- RTO/RPO Calculation
- Tier Definitions
- Validation Checks

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

- `compute_file_hashes` — Compute hashes for all files in a directory for integrity verification.
- `compare_manifests` — Compare two hash manifests to detect missing, added, or changed files.
- `check_service_health` — Check if a service is running and responsive.
- `check_database_connectivity` — Verify database is accessible after restore.
- `run_recovery_drill` — Execute a recovery drill based on a configuration dict.
- `generate_report` — Generate a recovery test report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `testing-ransomware-recovery-procedures`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
