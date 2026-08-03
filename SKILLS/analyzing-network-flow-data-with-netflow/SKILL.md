---
name: analyzing-network-flow-data-with-netflow
description: "NetFlow Analysis Agent - Parses NetFlow v9/IPFIX for anomalies, port scans, and exfiltration. Use when the user asks to analyze network flow data with netflow."
version: 1.0.0
tags:
  - analyzing
  - network
source: analyzing-network-flow-data-with-netflow
---

# Analyzing Network Flow Data with Netflow

**Role:** Deep analysis  
**Audience:** analysts and investigators  
**Primary tools:** NetFlow, CLI Tools, Detection Algorithms

## When to use

- The user wants to **analyze** network flow data with netflow.
- Capability: NetFlow Analysis Agent - Parses NetFlow v9/IPFIX for anomalies, port scans, and exfiltration.
- Goal: extract findings, indicators, and conclusions from technical evidence.
- Trigger keywords: `analyzing, network, flow, data, netflow`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Load preprocessed flow records from JSON file
2. Parse NetFlow packets from a PCAP capture using the netflow library
3. Detect port scanning: one source hitting many ports on same or multiple destinations
4. Detect potential data exfiltration via high-volume outbound flows
5. Detect C2 beaconing patterns via periodic connection analysis
6. Build statistical baseline of network traffic
7. Generate NetFlow analysis report

## Tools & resources

- NetFlow
- CLI Tools
- Detection Algorithms

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

- `load_flow_data` — Load preprocessed flow records from JSON file.
- `parse_netflow_capture` — Parse NetFlow packets from a PCAP capture using the netflow library.
- `detect_port_scanning` — Detect port scanning: one source hitting many ports on same or multiple destinations.
- `detect_data_exfiltration` — Detect potential data exfiltration via high-volume outbound flows.
- `detect_beaconing` — Detect C2 beaconing patterns via periodic connection analysis.
- `build_traffic_baseline` — Build statistical baseline of network traffic.
- `generate_report` — Generate NetFlow analysis report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `analyzing-network-flow-data-with-netflow`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
