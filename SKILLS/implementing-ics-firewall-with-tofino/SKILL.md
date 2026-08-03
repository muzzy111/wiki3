---
name: implementing-ics-firewall-with-tofino
description: "Agent for auditing and configuring Tofino ICS firewall rules. Use when the user asks to implement ics firewall with tofino."
version: 1.0.0
tags:
  - implementing
  - incident-response
source: implementing-ics-firewall-with-tofino
---

# Implementing Ics Firewall with Tofino

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** OT Protocol Ports, Risky Modbus Function Codes, Tofino Xenon Configuration, Rule Audit Checks

## When to use

- The user wants to **implement** ics firewall with tofino.
- Capability: Agent for auditing and configuring Tofino ICS firewall rules.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, firewall, tofino`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Audit Tofino firewall rules for security issues
2. Analyze OT network traffic log for anomalies
3. Generate Tofino firewall rules from zone configuration

## Tools & resources

- OT Protocol Ports
- Risky Modbus Function Codes
- Tofino Xenon Configuration
- Rule Audit Checks

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

- `audit_firewall_rules` — Audit Tofino firewall rules for security issues.
- `analyze_ot_traffic_log` — Analyze OT network traffic log for anomalies.
- `generate_zone_rules` — Generate Tofino firewall rules from zone configuration.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-ics-firewall-with-tofino`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
