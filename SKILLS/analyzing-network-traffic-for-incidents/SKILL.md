---
name: analyzing-network-traffic-for-incidents
description: "Network traffic incident analysis agent using scapy and tshark for PCAP investigation. Use when the user asks to analyze network traffic for incidents."
version: 1.0.0
tags:
  - analyzing
  - network
  - incident-response
source: analyzing-network-traffic-for-incidents
---

# Analyzing Network Traffic for Incidents

**Role:** Deep analysis  
**Audience:** analysts and investigators  
**Primary tools:** tshark, Zeek, Suricata - IDS/IPS, Lateral Movement Ports, Scapy, NetworkMiner

## When to use

- The user wants to **analyze** network traffic for incidents.
- Capability: Network traffic incident analysis agent using scapy and tshark for PCAP investigation.
- Goal: extract findings, indicators, and conclusions from technical evidence.
- Trigger keywords: `analyzing, network, traffic, incidents`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Run tshark with a display filter and extract specific fields
2. Get high-level PCAP statistics
3. Detect potential lateral movement patterns (SMB, RDP, WinRM, SSH)
4. Detect potential data exfiltration based on outbound data volume
5. Detect periodic beaconing patterns from TCP connections
6. Extract DNS queries and identify suspicious patterns
7. Run Suricata on the PCAP and extract alerts
8. Extract HTTP objects (files) from the PCAP

## Tools & resources

- tshark
- Zeek
- Suricata - IDS/IPS
- Lateral Movement Ports
- Scapy
- NetworkMiner

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

- `run_tshark` — Run tshark with a display filter and extract specific fields.
- `get_pcap_summary` — Get high-level PCAP statistics.
- `detect_lateral_movement` — Detect potential lateral movement patterns (SMB, RDP, WinRM, SSH).
- `detect_data_exfiltration` — Detect potential data exfiltration based on outbound data volume.
- `detect_beaconing` — Detect periodic beaconing patterns from TCP connections.
- `extract_dns_queries` — Extract DNS queries and identify suspicious patterns.
- `detect_ids_alerts` — Run Suricata on the PCAP and extract alerts.
- `extract_http_objects` — Extract HTTP objects (files) from the PCAP.
- `generate_incident_report` — Generate a network incident analysis report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `analyzing-network-traffic-for-incidents`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
