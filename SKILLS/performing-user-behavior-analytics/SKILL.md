---
name: performing-user-behavior-analytics
description: "User Behavior Analytics (UEBA) agent using elasticsearch-py. Use when the user asks to perform user behavior analytics."
version: 1.0.0
tags:
  - performing
source: performing-user-behavior-analytics
---

# Performing User Behavior Analytics

**Role:** Hands-on assessment  
**Audience:** pentesters, blue teamers, and DFIR practitioners  
**Primary tools:** Elasticsearch Index Requirements, Risk Score Weights

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **perform** user behavior analytics.
- Capability: User Behavior Analytics (UEBA) agent using elasticsearch-py.
- Goal: execute a focused security technique or assessment workflow.
- Trigger keywords: `performing, user, behavior, analytics`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Calculate distance in km between two coordinates
2. Build behavioral baselines from historical authentication data
3. Detect logins from geographically distant locations within impossible timeframes
4. Detect logins outside user's normal working hours
5. Aggregate anomalies into composite risk scores per user

## Tools & resources

- Elasticsearch Index Requirements
- Risk Score Weights

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

- `get_es_client`
- `haversine` — Calculate distance in km between two coordinates.
- `build_user_baselines` — Build behavioral baselines from historical authentication data.
- `detect_impossible_travel` — Detect logins from geographically distant locations within impossible timeframes.
- `detect_off_hours_access` — Detect logins outside user's normal working hours.
- `calculate_risk_scores` — Aggregate anomalies into composite risk scores per user.
- `print_report`

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `performing-user-behavior-analytics`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
