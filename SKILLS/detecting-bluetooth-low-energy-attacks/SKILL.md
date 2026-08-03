---
name: detecting-bluetooth-low-energy-attacks
description: "BLE Attack Detection Agent - Scans, enumerates, and analyzes Bluetooth Low Energy devices for security vulnerabilities including weak pairing, replay susceptibility, insecure GATT permissions, and advertising spoofing. Use when the user asks to detect bluetooth low energy attacks."
version: 1.0.0
tags:
  - detecting
  - threat-intel
source: detecting-bluetooth-low-energy-attacks
---

# Detecting Bluetooth Low Energy Attacks

**Role:** Detection engineering  
**Audience:** detection engineers and SOC analysts  
**Primary tools:** Arguments, Key Functions, Threat Detection Coverage

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **detect** bluetooth low energy attacks.
- Capability: BLE Attack Detection Agent - Scans, enumerates, and analyzes Bluetooth Low Energy devices for security vulnerabilities including weak pairing, replay susceptibility, insecure GATT permissions, and advertising spoofing.
- Goal: identify malicious or anomalous activity with high-signal detections.
- Trigger keywords: `detecting, bluetooth, energy, attacks`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Analyze a BLE packet capture file for attack indicators using tshark
2. Start a BLE packet capture with Ubertooth One
3. Generate comprehensive BLE security assessment report

## Tools & resources

- Arguments
- Key Functions
- Threat Detection Coverage

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

- `analyze_pcap_for_ble_attacks` — Analyze a BLE packet capture file for attack indicators using tshark.
- `run_ubertooth_capture` — Start a BLE packet capture with Ubertooth One.
- `generate_report` — Generate comprehensive BLE security assessment report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `detecting-bluetooth-low-energy-attacks`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
