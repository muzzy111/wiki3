---
name: building-soc-metrics-and-kpi-tracking
description: "SOC Metrics and KPI Tracking Agent - Collects and reports SOC performance metrics. Use when the user asks to build soc metrics and kpi tracking."
version: 1.0.0
tags:
  - building
  - incident-response
source: building-soc-metrics-and-kpi-tracking
---

# Building SOC Metrics and Kpi Tracking

**Role:** Capability building  
**Audience:** SOC leads, IR managers, and security engineers  
**Primary tools:** Arguments, Key Functions

## When to use

- The user wants to **build** soc metrics and kpi tracking.
- Capability: SOC Metrics and KPI Tracking Agent - Collects and reports SOC performance metrics.
- Goal: design and stand up an operational security capability or process.
- Trigger keywords: `building, metrics, tracking`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Authenticate to Splunk and return session key
2. Execute a Splunk search and return results
3. Collect Mean Time to Detect metrics from Splunk ES notable events
4. Collect Mean Time to Respond metrics
5. Collect alert disposition and quality metrics
6. Collect per-analyst productivity metrics
7. Generate formatted SOC performance report

## Tools & resources

- Arguments
- Key Functions

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

- `authenticate_splunk` — Authenticate to Splunk and return session key.
- `run_splunk_search` — Execute a Splunk search and return results.
- `collect_mttd_metrics` — Collect Mean Time to Detect metrics from Splunk ES notable events.
- `collect_mttr_metrics` — Collect Mean Time to Respond metrics.
- `collect_alert_quality` — Collect alert disposition and quality metrics.
- `collect_analyst_productivity` — Collect per-analyst productivity metrics.
- `generate_report` — Generate formatted SOC performance report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `building-soc-metrics-and-kpi-tracking`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
