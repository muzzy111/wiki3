---
name: detecting-modbus-protocol-anomalies
description: "Modbus protocol anomaly detection agent for OT/ICS networks. Detects protocol-level anomalies in Modbus TCP traffic including malformed packets, timing deviations, register range violations, and replay attacks. Use when the user asks to detect modbus protocol anomalies."
version: 1.0.0
tags:
  - detecting
  - threat-intel
source: detecting-modbus-protocol-anomalies
---

# Detecting Modbus Protocol Anomalies

**Role:** Detection engineering  
**Audience:** detection engineers and SOC analysts  
**Primary tools:** Modbus Protocol Limits, Anomaly Detection Methods, Zeek Modbus Log Fields, Suricata Modbus Rules, Scapy Modbus Analysis, Baseline Monitoring

## When to use

- The user wants to **detect** modbus protocol anomalies.
- Capability: Modbus protocol anomaly detection agent for OT/ICS networks. Detects protocol-level anomalies in Modbus TCP traffic including malformed packets, timing deviations, register range violations, and replay attacks.
- Goal: identify malicious or anomalous activity with high-signal detections.
- Trigger keywords: `detecting, modbus, protocol, anomalies`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Define the detection hypothesis and data sources
2. Identify telemetry and features relevant to modbus protocol anomalies
3. Build or refine detection logic (rules, queries, models)
4. Tune against baselined benign activity to reduce noise
5. Validate with true-positive cases and document coverage gaps

## Tools & resources

- Modbus Protocol Limits
- Anomaly Detection Methods
- Zeek Modbus Log Fields
- Suricata Modbus Rules
- Scapy Modbus Analysis
- Baseline Monitoring

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

- `parse_modbus_log`
- `detect_timing_anomalies`
- `detect_register_anomalies`
- `detect_scan_patterns`

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `detecting-modbus-protocol-anomalies`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
