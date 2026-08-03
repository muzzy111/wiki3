---
name: implementing-network-access-control
description: "Network Access Control (802.1X/NAC) monitoring agent using RADIUS and SNMP. Use when the user asks to implement network access control."
version: 1.0.0
tags:
  - implementing
  - network
source: implementing-network-access-control
---

# Implementing Network Access Control

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** 802.1X SNMP OIDs, RADIUS Attributes, EAP Methods, PacketFence NAC API, External References

## When to use

- The user wants to **implement** network access control.
- Capability: Network Access Control (802.1X/NAC) monitoring agent using RADIUS and SNMP.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, network, access, control`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Test RADIUS authentication for a user credential pair
2. Parse FreeRADIUS log file for authentication events
3. Query switch via SNMP for 802.1X port authentication status
4. Analyze authentication events for security issues
5. Generate a NAC compliance policy checklist
6. Run NAC security audit

## Tools & resources

- 802.1X SNMP OIDs
- RADIUS Attributes
- EAP Methods
- PacketFence NAC API
- External References

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

- `test_radius_auth` — Test RADIUS authentication for a user credential pair.
- `parse_radius_log` — Parse FreeRADIUS log file for authentication events.
- `check_switch_port_status` — Query switch via SNMP for 802.1X port authentication status.
- `analyze_auth_events` — Analyze authentication events for security issues.
- `generate_nac_policy_check` — Generate a NAC compliance policy checklist.
- `run_nac_audit` — Run NAC security audit.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-network-access-control`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
