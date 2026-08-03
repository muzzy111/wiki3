---
name: analyzing-threat-landscape-with-misp
description: "MISP Threat Landscape Analysis Agent - Generates threat landscape reports from MISP event data. Use when the user asks to analyze threat landscape with misp."
version: 1.0.0
tags:
  - analyzing
  - threat-intel
source: analyzing-threat-landscape-with-misp
---

# Analyzing Threat Landscape with MISP

**Role:** Deep analysis  
**Audience:** analysts and investigators  
**Primary tools:** MISP, Attribute Types, Galaxy Tag Prefixes, Statistics API

## When to use

- The user wants to **analyze** threat landscape with misp.
- Capability: MISP Threat Landscape Analysis Agent - Generates threat landscape reports from MISP event data.
- Goal: extract findings, indicators, and conclusions from technical evidence.
- Trigger keywords: `analyzing, threat, landscape, misp`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Connect to MISP instance
2. Fetch events from the last N days
3. Break down events by threat level
4. Analyze distribution of attribute types across events
5. Extract and categorize tags from events
6. Analyze event creation trends over time (weekly buckets)
7. Analyze contributing organizations
8. Compute IOC statistics: total count, unique values, categories

## Tools & resources

- MISP
- Attribute Types
- Galaxy Tag Prefixes
- Statistics API

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

- `connect_misp` — Connect to MISP instance.
- `fetch_events` — Fetch events from the last N days.
- `analyze_threat_levels` — Break down events by threat level.
- `analyze_attribute_types` — Analyze distribution of attribute types across events.
- `extract_tags` — Extract and categorize tags from events.
- `analyze_temporal_trends` — Analyze event creation trends over time (weekly buckets).
- `analyze_organizations` — Analyze contributing organizations.
- `compute_ioc_stats` — Compute IOC statistics: total count, unique values, categories.
- `generate_report` — Generate threat landscape report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `analyzing-threat-landscape-with-misp`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
