---
name: implementing-data-loss-prevention-with-microsoft-purview
description: "Microsoft Purview DLP Management Agent - Automates DLP policy deployment and monitoring via Graph API. Use when the user asks to implement data loss prevention with microsoft purview."
version: 1.0.0
tags:
  - implementing
source: implementing-data-loss-prevention-with-microsoft-purview
---

# Implementing Data Loss Prevention with Microsoft Purview

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** Arguments, Key Classes, Key Functions, Output Files, Health Finding Types

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **implement** data loss prevention with microsoft purview.
- Capability: Microsoft Purview DLP Management Agent - Automates DLP policy deployment and monitoring via Graph API.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, data, loss, prevention, microsoft, purview`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Retrieve DLP alerts from Microsoft Graph Security API
2. Retrieve all sensitivity labels from the tenant
3. Evaluate DLP protection scope for a specific user
4. Generate summary statistics from DLP alerts
5. Generate a report of sensitivity label configuration
6. Analyze DLP policy health based on alert patterns
7. Export DLP alerts to CSV for compliance reporting
8. Generate comprehensive DLP compliance report

## Tools & resources

- Arguments
- Key Classes
- Key Functions
- Output Files
- Health Finding Types

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

- `get_dlp_alerts` — Retrieve DLP alerts from Microsoft Graph Security API.
- `get_sensitivity_labels` — Retrieve all sensitivity labels from the tenant.
- `evaluate_dlp_protection_scope` — Evaluate DLP protection scope for a specific user.
- `generate_alert_summary` — Generate summary statistics from DLP alerts.
- `generate_label_report` — Generate a report of sensitivity label configuration.
- `check_policy_health` — Analyze DLP policy health based on alert patterns.
- `export_alerts_csv` — Export DLP alerts to CSV for compliance reporting.
- `generate_compliance_report` — Generate comprehensive DLP compliance report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-data-loss-prevention-with-microsoft-purview`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
