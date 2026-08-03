---
name: implementing-network-traffic-baselining
description: "Network traffic baselining agent using pandas for NetFlow/IPFIX statistical analysis. Use when the user asks to implement network traffic baselining."
version: 1.0.0
tags:
  - implementing
  - network
source: implementing-network-traffic-baselining
---

# Implementing Network Traffic Baselining

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** Pandas Analysis Functions, NetFlow Export Tools

## When to use

- The user wants to **implement** network traffic baselining.
- Capability: Network traffic baselining agent using pandas for NetFlow/IPFIX statistical analysis.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, network, traffic, baselining`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Load NetFlow/IPFIX records from CSV export
2. Compute hourly traffic volume baseline
3. Compute per-source-IP traffic baselines
4. Compute protocol distribution baseline
5. Detect anomalous hosts using z-score on bytes transferred
6. Detect outlier hosts using IQR method on bytes per flow
7. Detect hosts connecting to an unusually high number of unique ports

## Tools & resources

- Pandas Analysis Functions
- NetFlow Export Tools

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

- `load_netflow_csv` — Load NetFlow/IPFIX records from CSV export.
- `compute_hourly_baseline` — Compute hourly traffic volume baseline.
- `compute_host_baselines` — Compute per-source-IP traffic baselines.
- `compute_protocol_baseline` — Compute protocol distribution baseline.
- `detect_zscore_anomalies` — Detect anomalous hosts using z-score on bytes transferred.
- `detect_iqr_anomalies` — Detect outlier hosts using IQR method on bytes per flow.
- `detect_port_scan_pattern` — Detect hosts connecting to an unusually high number of unique ports.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-network-traffic-baselining`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
