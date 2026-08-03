---
name: hunting-for-dcsync-attacks
description: "DCSync Detection Agent - hunts for unauthorized AD replication requests via Event ID 4662 analysis. Use when the user asks to hunt for dcsync attacks."
version: 1.0.0
tags:
  - hunting
source: hunting-for-dcsync-attacks
---

# Hunting for Dcsync Attacks

**Role:** Threat hunting  
**Audience:** threat hunters and SOC analysts  
**Primary tools:** Key Detection GUIDs, Elastic KQL Detection, PowerShell Detection, Response Checklist

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **hunt for** dcsync attacks.
- Capability: DCSync Detection Agent - hunts for unauthorized AD replication requests via Event ID 4662 analysis.
- Goal: proactively search for adversary activity using hypotheses and telemetry.
- Trigger keywords: `hunting, dcsync, attacks`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Get list of legitimate domain controller machine accounts
2. Query Windows Event ID 4662 for directory service access events
3. Filter events for DS-Replication GUID access
4. Identify non-DC accounts performing replication requests
5. Analyze patterns in suspected DCSync activity
6. Check which accounts have replication rights on the domain object
7. Generate DCSync hunt report

## Tools & resources

- Key Detection GUIDs
- Elastic KQL Detection
- PowerShell Detection
- Response Checklist

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

- `get_domain_controllers` — Get list of legitimate domain controller machine accounts.
- `query_event_4662` — Query Windows Event ID 4662 for directory service access events.
- `filter_replication_events` — Filter events for DS-Replication GUID access.
- `identify_dcsync_suspects` — Identify non-DC accounts performing replication requests.
- `analyze_suspect_patterns` — Analyze patterns in suspected DCSync activity.
- `check_replication_acls` — Check which accounts have replication rights on the domain object.
- `generate_report` — Generate DCSync hunt report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `hunting-for-dcsync-attacks`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
