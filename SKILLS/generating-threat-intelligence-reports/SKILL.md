---
name: generating-threat-intelligence-reports
description: "Threat intelligence report generation agent using jinja2 for template-based reporting. Use when the user asks to generating threat intelligence reports."
version: 1.0.0
tags:
  - generating
  - threat-intel
source: generating-threat-intelligence-reports
---

# Generating Threat Intelligence Reports

**Role:** Security workflow  
**Audience:** security practitioners  
**Primary tools:** TLP Levels

## When to use

- The user wants to **generat** threat intelligence reports.
- Capability: Threat intelligence report generation agent using jinja2 for template-based reporting.
- Goal: complete the task.
- Trigger keywords: `generating, threat, intelligence, reports`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Map confidence level to ICD 203 language
2. Render a threat intelligence report from template and data
3. Validate that required fields are present for the report type
4. Run quality checks on rendered report
5. Load data, validate, render, and save the report

## Tools & resources

- TLP Levels

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

- `confidence_label` — Map confidence level to ICD 203 language.
- `render_report` — Render a threat intelligence report from template and data.
- `validate_report_data` — Validate that required fields are present for the report type.
- `quality_check` — Run quality checks on rendered report.
- `generate_report` — Load data, validate, render, and save the report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `generating-threat-intelligence-reports`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
