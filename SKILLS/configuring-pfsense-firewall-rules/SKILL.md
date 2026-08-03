---
name: configuring-pfsense-firewall-rules
description: "pfSense Firewall Configuration Agent - Manages firewall rules via pfSense API. Use when the user asks to configure pfsense firewall rules."
version: 1.0.0
tags:
  - configuring
  - incident-response
source: configuring-pfsense-firewall-rules
---

# Configuring Pfsense Firewall Rules

**Role:** Secure configuration  
**Audience:** security engineers and platform admins  
**Primary tools:** Prerequisites, Key Functions, Rule Templates

## When to use

- The user wants to **configure** pfsense firewall rules.
- Capability: pfSense Firewall Configuration Agent - Manages firewall rules via pfSense API.
- Goal: harden and tune security tooling for production use.
- Trigger keywords: `configuring, pfsense, firewall, rules`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Retrieve all firewall rules from pfSense
2. Create a new firewall rule on pfSense
3. Create standard LAN-to-WAN egress rules
4. Create DMZ isolation rules allowing only inbound web traffic
5. Create guest network isolation rules - internet only, no internal access
6. Create a NAT port forward rule
7. Audit firewall rules for common security issues
8. Retrieve recent firewall log entries

## Tools & resources

- Prerequisites
- Key Functions
- Rule Templates

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

- `get_firewall_rules` — Retrieve all firewall rules from pfSense.
- `create_firewall_rule` — Create a new firewall rule on pfSense.
- `create_lan_to_wan_rules` — Create standard LAN-to-WAN egress rules.
- `create_dmz_rules` — Create DMZ isolation rules allowing only inbound web traffic.
- `create_guest_isolation_rules` — Create guest network isolation rules - internet only, no internal access.
- `configure_nat_port_forward` — Create a NAT port forward rule.
- `audit_firewall_rules` — Audit firewall rules for common security issues.
- `get_firewall_logs` — Retrieve recent firewall log entries.
- `generate_report` — Generate pfSense firewall configuration report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `configuring-pfsense-firewall-rules`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
