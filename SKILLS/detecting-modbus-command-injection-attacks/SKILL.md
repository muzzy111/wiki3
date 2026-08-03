---
name: detecting-modbus-command-injection-attacks
description: "Modbus command injection detection agent for ICS/SCADA environments. Analyzes Modbus TCP traffic for unauthorized write operations, function code abuse, and anomalous register access patterns using Zeek logs or pcap.... Use when the user asks to detect modbus command injection attacks."
version: 1.0.0
tags:
  - detecting
  - threat-intel
source: detecting-modbus-command-injection-attacks
---

# Detecting Modbus Command Injection Attacks

**Role:** Detection engineering  
**Audience:** detection engineers and SOC analysts  
**Primary tools:** Modbus Function Codes, Zeek Modbus Log, Suricata Modbus Rules, pymodbus Library, Scapy Modbus Parsing, Detection Thresholds

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **detect** modbus command injection attacks.
- Capability: Modbus command injection detection agent for ICS/SCADA environments. Analyzes Modbus TCP traffic for unauthorized write operations, function code abuse, and anomalous register access patterns using Zeek logs or pcap analysis.
- Goal: identify malicious or anomalous activity with high-signal detections.
- Trigger keywords: `detecting, modbus, command, injection, attacks`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Define the detection hypothesis and data sources
2. Identify telemetry and features relevant to modbus command injection attacks
3. Build or refine detection logic (rules, queries, models)
4. Tune against baselined benign activity to reduce noise
5. Validate with true-positive cases and document coverage gaps

## Tools & resources

- Modbus Function Codes
- Zeek Modbus Log
- Suricata Modbus Rules
- pymodbus Library
- Scapy Modbus Parsing
- Detection Thresholds

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

- `parse_zeek_modbus_log`
- `analyze_modbus_traffic`
- `detect_write_floods`

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `detecting-modbus-command-injection-attacks`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
