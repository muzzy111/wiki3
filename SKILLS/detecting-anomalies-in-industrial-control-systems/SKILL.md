---
name: detecting-anomalies-in-industrial-control-systems
description: "ICS/SCADA anomaly detection agent for industrial control systems. Use when the user asks to detect anomalies in industrial control systems."
version: 1.0.0
tags:
  - detecting
  - threat-intel
source: detecting-anomalies-in-industrial-control-systems
---

# Detecting Anomalies in Industrial Control Systems

**Role:** Detection engineering  
**Audience:** detection engineers and SOC analysts  
**Primary tools:** Modbus TCP Protocol, Common ICS Ports, pymodbus Client Usage, Anomaly Detection Thresholds, External References

## When to use

- The user wants to **detect** anomalies in industrial control systems.
- Capability: ICS/SCADA anomaly detection agent for industrial control systems.
- Goal: identify malicious or anomalous activity with high-signal detections.
- Trigger keywords: `detecting, anomalies, industrial, control, systems`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Read Modbus device identification and holding registers
2. Analyze Modbus traffic patterns for anomalies from parsed PCAP data
3. Verify ICS network segmentation by testing connectivity to OT ports
4. Query process historian for anomalous sensor readings
5. Execute ICS anomaly detection audit

## Tools & resources

- Modbus TCP Protocol
- Common ICS Ports
- pymodbus Client Usage
- Anomaly Detection Thresholds
- External References

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

- `scan_modbus_device` — Read Modbus device identification and holding registers.
- `analyze_modbus_traffic` — Analyze Modbus traffic patterns for anomalies from parsed PCAP data.
- `check_ics_network_segmentation` — Verify ICS network segmentation by testing connectivity to OT ports.
- `query_historian_anomalies` — Query process historian for anomalous sensor readings.
- `run_audit` — Execute ICS anomaly detection audit.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `detecting-anomalies-in-industrial-control-systems`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
