---
name: monitoring-scada-modbus-traffic-anomalies
description: "Modbus TCP Traffic Anomaly Detector - Monitors SCADA networks for suspicious Modbus activity. Use when the user asks to monitoring scada modbus traffic anomalies."
version: 1.0.0
tags:
  - monitoring
source: monitoring-scada-modbus-traffic-anomalies
---

# Monitoring Scada Modbus Traffic Anomalies

**Role:** Security workflow  
**Audience:** security practitioners  
**Primary tools:** Arguments, Key Classes, Key Functions, Alert Types

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **monitor** scada modbus traffic anomalies.
- Capability: Modbus TCP Traffic Anomaly Detector - Monitors SCADA networks for suspicious Modbus activity.
- Goal: complete the task.
- Trigger keywords: `monitoring, scada, modbus, traffic, anomalies`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Parse 7-byte Modbus Application Protocol header from raw TCP payload
2. Parse Modbus PDU to extract function code, register addresses, and values
3. Analyze a pcap file for Modbus TCP anomalies using Scapy
4. Capture and analyze Modbus TCP traffic in real-time using Scapy

## Tools & resources

- Arguments
- Key Classes
- Key Functions
- Alert Types

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

- `parse_mbap_header` — Parse 7-byte Modbus Application Protocol header from raw TCP payload.
- `parse_modbus_pdu` — Parse Modbus PDU to extract function code, register addresses, and values.
- `analyze_pcap` — Analyze a pcap file for Modbus TCP anomalies using Scapy.
- `live_capture` — Capture and analyze Modbus TCP traffic in real-time using Scapy.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `monitoring-scada-modbus-traffic-anomalies`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
