---
name: implementing-dragos-platform-for-ot-monitoring
description: "Agent for implementing Dragos Platform OT network monitoring. Use when the user asks to implement dragos platform for ot monitoring."
version: 1.0.0
tags:
  - implementing
source: implementing-dragos-platform-for-ot-monitoring
---

# Implementing Dragos Platform for Ot Monitoring

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** Dragos Platform API, Monitored OT Protocols, Detection Categories, ICS-CERT Vulnerability Feeds

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **implement** dragos platform for ot monitoring.
- Capability: Agent for implementing Dragos Platform OT network monitoring.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, dragos, platform, monitoring`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Query the Dragos Platform API
2. Retrieve OT asset inventory from Dragos
3. Retrieve threat detections from Dragos
4. Retrieve OT vulnerabilities from Dragos
5. Analyze OT protocol traffic from exported logs
6. Generate OT monitoring configuration template

## Tools & resources

- Dragos Platform API
- Monitored OT Protocols
- Detection Categories
- ICS-CERT Vulnerability Feeds

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

- `query_dragos_api` — Query the Dragos Platform API.
- `get_asset_inventory` — Retrieve OT asset inventory from Dragos.
- `get_threat_detections` — Retrieve threat detections from Dragos.
- `get_vulnerabilities` — Retrieve OT vulnerabilities from Dragos.
- `analyze_ot_protocols` — Analyze OT protocol traffic from exported logs.
- `generate_monitoring_config` — Generate OT monitoring configuration template.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-dragos-platform-for-ot-monitoring`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
