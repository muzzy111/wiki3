---
name: building-cloud-siem-with-sentinel
description: "Agent for managing Microsoft Sentinel SIEM operations. Use when the user asks to build cloud siem with sentinel."
version: 1.0.0
tags:
  - building
  - cloud
source: building-cloud-siem-with-sentinel
---

# Building Cloud SIEM with Sentinel

**Role:** Capability building  
**Audience:** SOC leads, IR managers, and security engineers  
**Primary tools:** Microsoft Sentinel, azure-monitor, azure-mgmt-securityinsight, Sentinel Data Connectors

## When to use

- The user wants to **build** cloud siem with sentinel.
- Capability: Agent for managing Microsoft Sentinel SIEM operations.
- Goal: design and stand up an operational security capability or process.
- Trigger keywords: `building, cloud, siem, sentinel`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Get Azure credential for authentication
2. Execute a KQL query against a Log Analytics workspace
3. Detect impossible travel sign-ins using KQL
4. Detect AWS credential abuse via CloudTrail in Sentinel
5. Detect mass S3 object deletion (potential ransomware)
6. Get incident summary from Sentinel
7. Match network traffic against threat intelligence indicators
8. List active Sentinel analytics rules

## Tools & resources

- Microsoft Sentinel
- azure-monitor
- azure-mgmt-securityinsight
- Sentinel Data Connectors

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

- `get_credential` — Get Azure credential for authentication.
- `run_kql_query` — Execute a KQL query against a Log Analytics workspace.
- `detect_impossible_travel` — Detect impossible travel sign-ins using KQL.
- `detect_aws_credential_abuse` — Detect AWS credential abuse via CloudTrail in Sentinel.
- `detect_mass_deletion` — Detect mass S3 object deletion (potential ransomware).
- `get_incident_summary` — Get incident summary from Sentinel.
- `match_threat_intelligence` — Match network traffic against threat intelligence indicators.
- `list_analytics_rules` — List active Sentinel analytics rules.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `building-cloud-siem-with-sentinel`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
