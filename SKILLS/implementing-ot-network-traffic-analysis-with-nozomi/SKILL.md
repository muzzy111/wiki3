---
name: implementing-ot-network-traffic-analysis-with-nozomi
description: "Nozomi Networks OT Traffic Analysis Agent - monitors ICS protocols and detects anomalies. Use when the user asks to implement ot network traffic analysis with nozomi."
version: 1.0.0
tags:
  - implementing
  - network
source: implementing-ot-network-traffic-analysis-with-nozomi
---

# Implementing Ot Network Traffic Analysis with Nozomi

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** Nozomi Guardian REST API, Supported OT Protocols, Alert Risk Levels, Sensor Deployment

## When to use

- The user wants to **implement** ot network traffic analysis with nozomi.
- Capability: Nozomi Networks OT Traffic Analysis Agent - monitors ICS protocols and detects anomalies.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, network, traffic, analysis, nozomi`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Capture requirements, risks, and success metrics
2. Design the control architecture for ot network traffic analysis with nozomi
3. Implement configuration, policies, and integrations
4. Test effectiveness and failure modes
5. Hand off operational docs and monitoring

## Tools & resources

- Nozomi Guardian REST API
- Supported OT Protocols
- Alert Risk Levels
- Sensor Deployment

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

- `nozomi_api`
- `get_alerts`
- `get_assets`
- `get_sessions`
- `analyze_ot_protocols`
- `detect_anomalies`
- `audit_asset_inventory`
- `generate_report`

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-ot-network-traffic-analysis-with-nozomi`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
