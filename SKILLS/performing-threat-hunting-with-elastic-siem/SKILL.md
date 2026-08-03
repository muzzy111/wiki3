---
name: performing-threat-hunting-with-elastic-siem
description: "Threat hunting agent for Elastic SIEM using elasticsearch-py. Use when the user asks to perform threat hunting with elastic siem."
version: 1.0.0
tags:
  - performing
  - threat-intel
source: performing-threat-hunting-with-elastic-siem
---

# Performing Threat Hunting with Elastic SIEM

**Role:** Hands-on assessment  
**Audience:** pentesters, blue teamers, and DFIR practitioners  
**Primary tools:** Elastic, Environment Variables

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **perform** threat hunting with elastic siem.
- Capability: Threat hunting agent for Elastic SIEM using elasticsearch-py.
- Goal: execute a focused security technique or assessment workflow.
- Trigger keywords: `performing, threat, hunting, elastic, siem`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Hunt for living-off-the-land binary abuse
2. Hunt for credential dumping activity (T1003)
3. Hunt for lateral movement patterns (T1021)
4. Hunt for persistence mechanisms (T1053, T1547)
5. Deploy a detection rule to Elastic Security via API

## Tools & resources

- Elastic
- Environment Variables

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
- `hunt_lolbins` — Hunt for living-off-the-land binary abuse.
- `hunt_credential_dumping` — Hunt for credential dumping activity (T1003).
- `hunt_lateral_movement` — Hunt for lateral movement patterns (T1021).
- `hunt_persistence` — Hunt for persistence mechanisms (T1053, T1547).
- `create_detection_rule` — Deploy a detection rule to Elastic Security via API.
- `run_all_hunts`
- `print_hunt_report`

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `performing-threat-hunting-with-elastic-siem`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
