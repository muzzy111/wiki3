---
name: performing-threat-intelligence-sharing-with-misp
description: "MISP Threat Intelligence Sharing agent - creates events, manages attributes, searches IOCs, and validates sharing configuration via PyMISP. Use when the user asks to perform threat intelligence sharing with misp."
version: 1.0.0
tags:
  - performing
  - threat-intel
source: performing-threat-intelligence-sharing-with-misp
---

# Performing Threat Intelligence Sharing with MISP

**Role:** Hands-on assessment  
**Audience:** pentesters, blue teamers, and DFIR practitioners  
**Primary tools:** MISP, Creating Events, Searching Intelligence, Distribution Levels

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **perform** threat intelligence sharing with misp.
- Capability: MISP Threat Intelligence Sharing agent - creates events, manages attributes, searches IOCs, and validates sharing configuration via PyMISP
- Goal: execute a focused security technique or assessment workflow.
- Trigger keywords: `performing, threat, intelligence, sharing, misp`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Initialize PyMISP connection
2. Create a MISP event with attributes and tags
3. Validate event data quality for sharing readiness
4. Validate MISP sharing and feed configuration

## Tools & resources

- MISP
- Creating Events
- Searching Intelligence
- Distribution Levels

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

- `load_data`
- `connect_misp` — Initialize PyMISP connection.
- `create_event_from_data` — Create a MISP event with attributes and tags.
- `validate_event_quality` — Validate event data quality for sharing readiness.
- `validate_sharing_config` — Validate MISP sharing and feed configuration.
- `analyze`
- `generate_report`

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `performing-threat-intelligence-sharing-with-misp`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
