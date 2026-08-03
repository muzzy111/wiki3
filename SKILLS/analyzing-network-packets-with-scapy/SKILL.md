---
name: analyzing-network-packets-with-scapy
description: "Network packet analysis agent using Scapy for pcap parsing and anomaly detection. Use when the user asks to analyze network packets with scapy."
version: 1.0.0
tags:
  - analyzing
  - network
source: analyzing-network-packets-with-scapy
---

# Analyzing Network Packets with Scapy

**Role:** Deep analysis  
**Audience:** analysts and investigators  
**Primary tools:** Scapy, Protocol Fields Reference

## When to use

- The user wants to **analyze** network packets with scapy.
- Capability: Network packet analysis agent using Scapy for pcap parsing and anomaly detection.
- Goal: extract findings, indicators, and conclusions from technical evidence.
- Trigger keywords: `analyzing, network, packets, scapy`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Load packets from a pcap/pcapng file
2. Extract structured info from each packet with IP layer
3. Compute overall traffic statistics
4. Detect SYN flood by counting SYN-only packets per destination IP
5. Calculate Shannon entropy of a string
6. Detect DNS tunneling via long/high-entropy query names
7. Detect port scanning by counting unique destination ports per source IP

## Tools & resources

- Scapy
- Protocol Fields Reference

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

- `load_pcap` — Load packets from a pcap/pcapng file.
- `extract_packet_info` — Extract structured info from each packet with IP layer.
- `compute_traffic_stats` — Compute overall traffic statistics.
- `detect_syn_flood` — Detect SYN flood by counting SYN-only packets per destination IP.
- `calculate_entropy` — Calculate Shannon entropy of a string.
- `detect_dns_tunneling` — Detect DNS tunneling via long/high-entropy query names.
- `detect_port_scan` — Detect port scanning by counting unique destination ports per source IP.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `analyzing-network-packets-with-scapy`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
