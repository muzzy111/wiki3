---
name: building-soc-escalation-matrix
description: "SOC Escalation Matrix Agent - Builds and validates SOC escalation paths and response workflows. Use when the user asks to build soc escalation matrix."
version: 1.0.0
tags:
  - building
  - incident-response
source: building-soc-escalation-matrix
---

# Building SOC Escalation Matrix

**Role:** Capability building  
**Audience:** SOC leads, IR managers, and security engineers  
**Primary tools:** Priority Tiers, Alert Categories, Escalation Chain, Notification Channels, PagerDuty Incident API, Slack Webhook Notification

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **build** soc escalation matrix.
- Capability: SOC Escalation Matrix Agent - Builds and validates SOC escalation paths and response workflows.
- Goal: design and stand up an operational security capability or process.
- Trigger keywords: `building, escalation, matrix`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Classify alert priority based on category, tags, and asset criticality
2. Build complete escalation matrix structure
3. Validate the escalation matrix for completeness and consistency
4. Simulate alert classification through the escalation matrix
5. Generate escalation matrix report

## Key concepts

- Defines incident categories and severity levels
- Recommends functional impact, information impact, and recoverability as factors
- Guides escalation based on incident classification
- P1-P4 priority classification framework
- Impact x Urgency = Priority matrix
- SLA management for each priority level
- Level 1: Ad-hoc escalation, no formal process
- Level 2: Defined escalation paths, documented SLAs

## Tools & resources

- Priority Tiers
- Alert Categories
- Escalation Chain
- Notification Channels
- PagerDuty Incident API
- Slack Webhook Notification
- Auto-Escalation Rules
- ITIL Incident Management

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
| `assets/` | Templates, checklists, and report scaffolds |

## Automation entry points

- `classify_alert` — Classify alert priority based on category, tags, and asset criticality.
- `build_escalation_matrix` — Build complete escalation matrix structure.
- `validate_escalation_matrix` — Validate the escalation matrix for completeness and consistency.
- `simulate_alerts` — Simulate alert classification through the escalation matrix.
- `generate_report` — Generate escalation matrix report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `building-soc-escalation-matrix`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
