---
name: implementing-network-segmentation-for-ot
description: "OT Network Segmentation Agent - audits IT/OT boundaries, firewall rules, and zone compliance. Use when the user asks to implement network segmentation for ot."
version: 1.0.0
tags:
  - implementing
  - network
source: implementing-network-segmentation-for-ot
---

# Implementing Network Segmentation for Ot

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** Purdue Reference Model, Zone Audit Checks, Common OT Protocols

## When to use

- The user wants to **implement** network segmentation for ot.
- Capability: OT Network Segmentation Agent - audits IT/OT boundaries, firewall rules, and zone compliance.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, network, segmentation`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Discover hosts in an OT zone via nmap ping scan
2. Parse firewall rules for IT/OT boundary enforcement
3. Check for exposed OT protocols on the network
4. Audit zone assignment compliance against Purdue model

## Tools & resources

- Purdue Reference Model
- Zone Audit Checks
- Common OT Protocols

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

- `scan_zone_hosts` — Discover hosts in an OT zone via nmap ping scan.
- `check_firewall_rules` — Parse firewall rules for IT/OT boundary enforcement.
- `check_ot_protocol_exposure` — Check for exposed OT protocols on the network.
- `audit_zone_compliance` — Audit zone assignment compliance against Purdue model.
- `generate_report`

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-network-segmentation-for-ot`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
