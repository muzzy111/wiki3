---
name: performing-vlan-hopping-attack
description: "VLAN hopping assessment agent using scapy for DTP and double-tagging tests. Use when the user asks to perform vlan hopping attack."
version: 1.0.0
tags:
  - performing
source: performing-vlan-hopping-attack
---

# Performing Vlan Hopping Attack

**Role:** Hands-on assessment  
**Audience:** pentesters, blue teamers, and DFIR practitioners  
**Primary tools:** Scapy Layers Used

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **perform** vlan hopping attack.
- Capability: VLAN hopping assessment agent using scapy for DTP and double-tagging tests.
- Goal: execute a focused security technique or assessment workflow.
- Trigger keywords: `performing, vlan, hopping, attack`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Get network interface details
2. Check current VLAN configuration on the interface
3. Listen for DTP frames to assess trunk negotiation status
4. Capture CDP/LLDP frames to discover switch information
5. Send DTP desirable frames to attempt trunk negotiation
6. Create a VLAN subinterface
7. Send double-tagged 802.1Q frames for VLAN hopping
8. Remove VLAN subinterfaces created during testing

## Tools & resources

- Scapy Layers Used

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

- `get_interface_info` — Get network interface details.
- `check_vlan_config` — Check current VLAN configuration on the interface.
- `listen_for_dtp` — Listen for DTP frames to assess trunk negotiation status.
- `listen_for_cdp_lldp` — Capture CDP/LLDP frames to discover switch information.
- `send_dtp_desirable` — Send DTP desirable frames to attempt trunk negotiation.
- `create_vlan_interface` — Create a VLAN subinterface.
- `send_double_tagged` — Send double-tagged 802.1Q frames for VLAN hopping.
- `cleanup_vlan_interfaces` — Remove VLAN subinterfaces created during testing.
- `run_assessment` — Run full VLAN hopping assessment.
- `print_report`

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `performing-vlan-hopping-attack`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
