---
name: implementing-network-deception-with-honeypots
description: "Honeypot Deployment Agent - deploys OpenCanary honeypots and analyzes interaction logs. Use when the user asks to implement network deception with honeypots."
version: 1.0.0
tags:
  - implementing
  - network
source: implementing-network-deception-with-honeypots
---

# Implementing Network Deception with Honeypots

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** OpenCanary Installation, OpenCanary CLI, Available Service Modules, Log Type Codes, Cowrie SSH Honeypot, Syslog Forwarding

## When to use

- The user wants to **implement** network deception with honeypots.
- Capability: Honeypot Deployment Agent - deploys OpenCanary honeypots and analyzes interaction logs.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, network, deception, honeypots`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Generate OpenCanary configuration with specified services enabled
2. Deploy OpenCanary with generated configuration
3. Parse OpenCanary JSON log file for interaction events
4. Analyze honeypot interactions for threat intelligence
5. Check if OpenCanary daemon is running
6. Generate honeypot deployment and interaction report

## Tools & resources

- OpenCanary Installation
- OpenCanary CLI
- Available Service Modules
- Log Type Codes
- Cowrie SSH Honeypot
- Syslog Forwarding

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

- `generate_config` — Generate OpenCanary configuration with specified services enabled.
- `deploy_opencanary` — Deploy OpenCanary with generated configuration.
- `parse_opencanary_log` — Parse OpenCanary JSON log file for interaction events.
- `analyze_interactions` — Analyze honeypot interactions for threat intelligence.
- `check_honeypot_status` — Check if OpenCanary daemon is running.
- `generate_report` — Generate honeypot deployment and interaction report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-network-deception-with-honeypots`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
