---
name: detecting-stuxnet-style-attacks
description: "Agent for detecting Stuxnet-style ICS/SCADA attacks targeting PLCs. Use when the user asks to detect stuxnet style attacks."
version: 1.0.0
tags:
  - detecting
  - threat-intel
source: detecting-stuxnet-style-attacks
---

# Detecting Stuxnet Style Attacks

**Role:** Detection engineering  
**Audience:** detection engineers and SOC analysts  
**Primary tools:** Modbus TCP Protocol, Siemens S7comm Protocol, Wireshark/tshark Filters, Stuxnet IOC Signatures, Snort/Suricata Rules for ICS

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **detect** stuxnet style attacks.
- Capability: Agent for detecting Stuxnet-style ICS/SCADA attacks targeting PLCs.
- Goal: identify malicious or anomalous activity with high-signal detections.
- Trigger keywords: `detecting, stuxnet, style, attacks`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Analyze PCAP for suspicious Modbus/S7 PLC communication
2. Check for Stuxnet-style rootkit driver files
3. Check Windows registry for Stuxnet IOCs
4. Check Step 7 project files for unauthorized OB modifications

## Tools & resources

- Modbus TCP Protocol
- Siemens S7comm Protocol
- Wireshark/tshark Filters
- Stuxnet IOC Signatures
- Snort/Suricata Rules for ICS

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

- `check_plc_communication` — Analyze PCAP for suspicious Modbus/S7 PLC communication.
- `scan_for_rootkit_drivers` — Check for Stuxnet-style rootkit driver files.
- `check_registry_indicators` — Check Windows registry for Stuxnet IOCs.
- `analyze_step7_project` — Check Step 7 project files for unauthorized OB modifications.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `detecting-stuxnet-style-attacks`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
