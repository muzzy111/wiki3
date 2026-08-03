---
name: detecting-dnp3-protocol-anomalies
description: "DNP3 protocol anomaly detection agent for ICS/SCADA environments. Analyzes DNP3 network traffic captures (via Zeek or pcap) to detect unauthorized control commands, protocol violations, and traffic anomalies. Use when the user asks to detect dnp3 protocol anomalies."
version: 1.0.0
tags:
  - detecting
  - threat-intel
source: detecting-dnp3-protocol-anomalies
---

# Detecting Dnp3 Protocol Anomalies

**Role:** Detection engineering  
**Audience:** detection engineers and SOC analysts  
**Primary tools:** DNP3 Function Codes, Zeek DNP3 Log Fields, Zeek DNP3 Protocol Analyzer, Suricata DNP3 Rules, Scapy DNP3 Parsing, ICS-CERT Detection Indicators

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **detect** dnp3 protocol anomalies.
- Capability: DNP3 protocol anomaly detection agent for ICS/SCADA environments. Analyzes DNP3 network traffic captures (via Zeek or pcap) to detect unauthorized control commands, protocol violations, and traffic anomalies.
- Goal: identify malicious or anomalous activity with high-signal detections.
- Trigger keywords: `detecting, dnp3, protocol, anomalies`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Define the detection hypothesis and data sources
2. Identify telemetry and features relevant to dnp3 protocol anomalies
3. Build or refine detection logic (rules, queries, models)
4. Tune against baselined benign activity to reduce noise
5. Validate with true-positive cases and document coverage gaps

## Tools & resources

- DNP3 Function Codes
- Zeek DNP3 Log Fields
- Zeek DNP3 Protocol Analyzer
- Suricata DNP3 Rules
- Scapy DNP3 Parsing
- ICS-CERT Detection Indicators

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

- `load_authorized_hosts`
- `parse_zeek_dnp3_log`
- `analyze_dnp3_traffic`
- `detect_protocol_anomalies`

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `detecting-dnp3-protocol-anomalies`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
