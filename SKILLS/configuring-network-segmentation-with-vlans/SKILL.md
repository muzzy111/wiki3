---
name: configuring-network-segmentation-with-vlans
description: "VLAN Network Segmentation Agent - Configures and audits VLAN segmentation on managed switches. Use when the user asks to configure network segmentation with vlans."
version: 1.0.0
tags:
  - configuring
  - network
source: configuring-network-segmentation-with-vlans
---

# Configuring Network Segmentation with Vlans

**Role:** Secure configuration  
**Audience:** security engineers and platform admins  
**Primary tools:** Key Functions, Security Checks, Supported Device Types

## When to use

- The user wants to **configure** network segmentation with vlans.
- Capability: VLAN Network Segmentation Agent - Configures and audits VLAN segmentation on managed switches.
- Goal: harden and tune security tooling for production use.
- Trigger keywords: `configuring, network, segmentation, vlans`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Establish SSH connection to network device via Netmiko
2. Retrieve current VLAN configuration from the switch
3. Create a new VLAN on the switch
4. Configure a switch port as an access port in a specific VLAN
5. Configure a switch port as a trunk port with specific allowed VLANs
6. Shut down and assign unused ports to a quarantine VLAN
7. Configure access control lists for inter-VLAN routing
8. Audit VLAN configuration for common security issues

## Tools & resources

- Key Functions
- Security Checks
- Supported Device Types

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

- `connect_netmiko` — Establish SSH connection to network device via Netmiko.
- `get_vlan_config` — Retrieve current VLAN configuration from the switch.
- `create_vlan` — Create a new VLAN on the switch.
- `configure_access_port` — Configure a switch port as an access port in a specific VLAN.
- `configure_trunk_port` — Configure a switch port as a trunk port with specific allowed VLANs.
- `harden_unused_ports` — Shut down and assign unused ports to a quarantine VLAN.
- `configure_inter_vlan_acl` — Configure access control lists for inter-VLAN routing.
- `audit_vlan_security` — Audit VLAN configuration for common security issues.
- `get_napalm_config` — Retrieve device configuration using NAPALM for multi-vendor support.
- `generate_report` — Generate VLAN segmentation audit report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `configuring-network-segmentation-with-vlans`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
