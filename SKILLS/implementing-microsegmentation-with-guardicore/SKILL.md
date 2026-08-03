---
name: implementing-microsegmentation-with-guardicore
description: "Guardicore Microsegmentation Agent - audits segmentation policies and network flow visibility. Use when the user asks to implement microsegmentation with guardicore."
version: 1.0.0
tags:
  - implementing
source: implementing-microsegmentation-with-guardicore
---

# Implementing Microsegmentation with Guardicore

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** Akamai Guardicore API, Policy Modes, Segmentation Metrics, Traffic Analysis Fields

## When to use

- The user wants to **implement** microsegmentation with guardicore.
- Capability: Guardicore Microsegmentation Agent - audits segmentation policies and network flow visibility.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, microsegmentation, guardicore`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Authenticate to Guardicore Centra and get access token
2. Retrieve all segmentation policies
3. Get recent network flow data for analysis
4. Get all asset labels/tags
5. Get deployed agent status
6. Analyze how well policies cover observed traffic
7. Identify potential lateral movement patterns in east-west traffic
8. Audit deployment agent health status

## Tools & resources

- Akamai Guardicore API
- Policy Modes
- Segmentation Metrics
- Traffic Analysis Fields

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

- `gc_request`
- `authenticate` — Authenticate to Guardicore Centra and get access token.
- `get_segmentation_policies` — Retrieve all segmentation policies.
- `get_network_flows` — Get recent network flow data for analysis.
- `get_labels` — Get all asset labels/tags.
- `get_agents` — Get deployed agent status.
- `analyze_policy_coverage` — Analyze how well policies cover observed traffic.
- `detect_lateral_movement_risk` — Identify potential lateral movement patterns in east-west traffic.
- `audit_agent_health` — Audit deployment agent health status.
- `generate_report`

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-microsegmentation-with-guardicore`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
