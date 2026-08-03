---
name: performing-purple-team-atomic-testing
description: "Purple Team Atomic Testing Agent Parses Atomic Red Team YAML definitions, correlates execution logs with detection results, generates MITRE ATT&CK Navigator layers, and produces coverage gap reports. Usage: python.... Use when the user asks to perform purple team atomic testing."
version: 1.0.0
tags:
  - performing
source: performing-purple-team-atomic-testing
---

# Performing Purple Team Atomic Testing

**Role:** Hands-on assessment  
**Audience:** pentesters, blue teamers, and DFIR practitioners  
**Primary tools:** Arguments, Key Functions, Sigma Rule Templates

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **perform** purple team atomic testing.
- Capability: Purple Team Atomic Testing Agent Parses Atomic Red Team YAML definitions, correlates execution logs with detection results, generates MITRE ATT&CK Navigator layers, and produces coverage gap reports. Usage: python agent.py --atomics-path /path/to/atomics --log-dir /path/to/logs python agent.py --atomics-path /path/to/atomics --detections detection_results.json python agent.py --mode navigator --output-layer coverage.json python agent.py --mode report --output-report coverage_report.json Requirements: pip install pyyaml
- Goal: execute a focused security technique or assessment workflow.
- Trigger keywords: `performing, purple, team, atomic, testing`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Parse all Atomic Red Team YAML files into a technique inventory
2. Load atomic test execution logs from JSON files
3. Load SIEM detection validation results
4. Generate a comprehensive coverage gap analysis report
5. Produce an ATT&CK Navigator v4.5 layer JSON
6. Suggest Sigma rule stubs for blind spot techniques
7. Print formatted coverage report to stdout
8. Generate a PowerShell script to re-test blind spot techniques

## Tools & resources

- Arguments
- Key Functions
- Sigma Rule Templates

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

- `load_atomics_inventory` — Parse all Atomic Red Team YAML files into a technique inventory.
- `load_execution_logs` — Load atomic test execution logs from JSON files.
- `load_detection_results` — Load SIEM detection validation results.
- `compute_coverage_report` — Generate a comprehensive coverage gap analysis report.
- `generate_navigator_layer` — Produce an ATT&CK Navigator v4.5 layer JSON.
- `suggest_sigma_rules` — Suggest Sigma rule stubs for blind spot techniques.
- `print_coverage_report` — Print formatted coverage report to stdout.
- `generate_powershell_test_script` — Generate a PowerShell script to re-test blind spot techniques.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `performing-purple-team-atomic-testing`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
