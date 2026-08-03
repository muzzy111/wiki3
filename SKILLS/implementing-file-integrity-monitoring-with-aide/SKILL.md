---
name: implementing-file-integrity-monitoring-with-aide
description: "AIDE (Advanced Intrusion Detection Environment) configuration generator and check runner. Use when the user asks to implement file integrity monitoring with aide."
version: 1.0.0
tags:
  - implementing
source: implementing-file-integrity-monitoring-with-aide
---

# Implementing File Integrity Monitoring with Aide

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** Available Check Attributes, Cron Automation

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **implement** file integrity monitoring with aide.
- Capability: AIDE (Advanced Intrusion Detection Environment) configuration generator and check runner.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, file, integrity, monitoring, aide`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Generate aide.conf configuration file content
2. Run aide --init to create the baseline database
3. Run aide --check and parse the results
4. Parse AIDE check output into structured findings
5. Generate cron job for automated AIDE integrity checks
6. Generate AIDE deployment and check report

## Tools & resources

- Available Check Attributes
- Cron Automation

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

- `generate_aide_config` — Generate aide.conf configuration file content.
- `initialize_baseline` — Run aide --init to create the baseline database.
- `run_integrity_check` — Run aide --check and parse the results.
- `parse_aide_output` — Parse AIDE check output into structured findings.
- `generate_cron_config` — Generate cron job for automated AIDE integrity checks.
- `generate_report` — Generate AIDE deployment and check report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-file-integrity-monitoring-with-aide`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
