---
name: implementing-siem-use-cases-for-detection
description: "SIEM detection use case management agent with ATT&CK coverage mapping. Use when the user asks to implement siem use cases for detection."
version: 1.0.0
tags:
  - implementing
  - threat-intel
source: implementing-siem-use-cases-for-detection
---

# Implementing SIEM Use Cases for Detection

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** Use Case Lifecycle, Detection Quality Metrics, External References

## When to use

- The user wants to **implement** siem use cases for detection.
- Capability: SIEM detection use case management agent with ATT&CK coverage mapping.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, siem, cases, detection`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Calculate ATT&CK coverage percentage
2. Map all use case templates to ATT&CK techniques and tactics
3. Validate that required data sources are available for a use case
4. Generate a Sigma detection rule for a use case
5. Generate SIEM detection coverage report

## Tools & resources

- Use Case Lifecycle
- Detection Quality Metrics
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

- `get_attack_coverage` — Calculate ATT&CK coverage percentage.
- `map_use_cases_to_attack` — Map all use case templates to ATT&CK techniques and tactics.
- `validate_use_case_data_sources` — Validate that required data sources are available for a use case.
- `generate_sigma_rule` — Generate a Sigma detection rule for a use case.
- `run_detection_coverage_report` — Generate SIEM detection coverage report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-siem-use-cases-for-detection`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
