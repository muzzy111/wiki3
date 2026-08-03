---
name: triaging-security-alerts-in-splunk
description: "Agent for triaging security alerts in Splunk Enterprise Security. Use when the user asks to triaging security alerts in splunk."
version: 1.0.0
tags:
  - triaging
source: triaging-security-alerts-in-splunk
---

# Triaging Security Alerts in Splunk

**Role:** Security workflow  
**Audience:** security practitioners  
**Primary tools:** Splunk, Disposition Categories

## When to use

- The user wants to **tria** security alerts in splunk.
- Capability: Agent for triaging security alerts in Splunk Enterprise Security.
- Goal: complete the task.
- Trigger keywords: `triaging, security, alerts, splunk`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Connect to Splunk Enterprise instance
2. Query notable events from Splunk ES Incident Review
3. Investigate brute force activity from a source IP
4. Correlate alerts across multiple data sources for a given IP
5. Check an indicator against Splunk ES threat intelligence
6. Enrich an alert with asset and identity context
7. Get triage performance metrics
8. Generate a structured triage report

## Tools & resources

- Splunk
- Disposition Categories

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

- `connect_splunk` — Connect to Splunk Enterprise instance.
- `get_notable_events` — Query notable events from Splunk ES Incident Review.
- `investigate_brute_force` — Investigate brute force activity from a source IP.
- `correlate_across_sources` — Correlate alerts across multiple data sources for a given IP.
- `check_threat_intel` — Check an indicator against Splunk ES threat intelligence.
- `enrich_with_asset_identity` — Enrich an alert with asset and identity context.
- `get_triage_metrics` — Get triage performance metrics.
- `generate_triage_report` — Generate a structured triage report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `triaging-security-alerts-in-splunk`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
