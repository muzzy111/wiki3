---
name: implementing-purdue-model-network-segmentation
description: "Purdue model OT network segmentation audit agent. Audits OT/ICS network segmentation against the Purdue Enterprise Reference Architecture by testing connectivity between network zones, verifying firewall rules, and.... Use when the user asks to implement purdue model network segmentation."
version: 1.0.0
tags:
  - implementing
  - network
source: implementing-purdue-model-network-segmentation
---

# Implementing Purdue Model Network Segmentation

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** Purdue Model Levels, Core Audit Functions

## When to use

- The user wants to **implement** purdue model network segmentation.
- Capability: Purdue model OT network segmentation audit agent. Audits OT/ICS network segmentation against the Purdue Enterprise Reference Architecture by testing connectivity between network zones, verifying firewall rules, and mapping discovered hosts to Purdue levels.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, purdue, model, network, segmentation`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Test TCP connectivity between two hosts on specified ports
2. Audit network segmentation between Purdue zones
3. Check for exposed OT/ICS protocols on target hosts
4. Load zone-to-host mapping from config file
5. Print audit summary

## Tools & resources

- Purdue Model Levels
- Core Audit Functions

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

- `test_connectivity` — Test TCP connectivity between two hosts on specified ports.
- `audit_zone_separation` — Audit network segmentation between Purdue zones.
- `audit_ot_protocols` — Check for exposed OT/ICS protocols on target hosts.
- `load_zone_map` — Load zone-to-host mapping from config file.
- `format_summary` — Print audit summary.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-purdue-model-network-segmentation`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
