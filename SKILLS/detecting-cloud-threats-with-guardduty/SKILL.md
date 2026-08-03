---
name: detecting-cloud-threats-with-guardduty
description: "Amazon GuardDuty threat detection and response automation. Use when the user asks to detect cloud threats with guardduty."
version: 1.0.0
tags:
  - detecting
  - cloud
  - threat-intel
source: detecting-cloud-threats-with-guardduty
---

# Detecting Cloud Threats with Guardduty

**Role:** Detection engineering  
**Audience:** detection engineers and SOC analysts  
**Primary tools:** GuardDuty CLI, Finding Management, GuardDuty Finding Severity Levels, Key Finding Type Prefixes, EventBridge Rule for GuardDuty, Threat Intel Set

## When to use

- The user wants to **detect** cloud threats with guardduty.
- Capability: Amazon GuardDuty threat detection and response automation agent.
- Goal: identify malicious or anomalous activity with high-signal detections.
- Trigger keywords: `detecting, cloud, threats, guardduty`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Execute AWS CLI command and return parsed JSON
2. Retrieve the GuardDuty detector ID
3. Enable GuardDuty with all protection plans
4. Get GuardDuty detector configuration and status
5. List active GuardDuty findings filtered by minimum severity
6. Get detailed information about specific findings
7. Archive (suppress) GuardDuty findings
8. Create a custom threat intelligence IP set

## Tools & resources

- GuardDuty CLI
- Finding Management
- GuardDuty Finding Severity Levels
- Key Finding Type Prefixes
- EventBridge Rule for GuardDuty
- Threat Intel Set

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

- `aws_cli` — Execute AWS CLI command and return parsed JSON.
- `get_detector_id` — Retrieve the GuardDuty detector ID.
- `enable_guardduty` — Enable GuardDuty with all protection plans.
- `get_detector_status` — Get GuardDuty detector configuration and status.
- `list_findings` — List active GuardDuty findings filtered by minimum severity.
- `get_finding_details` — Get detailed information about specific findings.
- `archive_finding` — Archive (suppress) GuardDuty findings.
- `create_ip_threat_intel_set` — Create a custom threat intelligence IP set.
- `create_suppression_filter` — Create a suppression filter to auto-archive known benign findings.
- `generate_report` — Generate a GuardDuty findings summary report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `detecting-cloud-threats-with-guardduty`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
