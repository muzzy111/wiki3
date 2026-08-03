---
name: detecting-arp-poisoning-in-network-traffic
description: "ARP poisoning detection agent for network traffic analysis. Use when the user asks to detect arp poisoning in network traffic."
version: 1.0.0
tags:
  - detecting
  - network
  - threat-intel
source: detecting-arp-poisoning-in-network-traffic
---

# Detecting Arp Poisoning in Network Traffic

**Role:** Detection engineering  
**Audience:** detection engineers and SOC analysts  
**Primary tools:** Scapy ARP Packet Fields, ARP Spoofing Indicators, Scapy PCAP Analysis, System ARP Table, Detection Tools, External References

## When to use

- The user wants to **detect** arp poisoning in network traffic.
- Capability: ARP poisoning detection agent for network traffic analysis.
- Goal: identify malicious or anomalous activity with high-signal detections.
- Trigger keywords: `detecting, poisoning, network, traffic`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Analyze PCAP file for ARP poisoning indicators
2. Detect ARP spoofing from analyzed ARP traffic
3. Read current system ARP table and check for duplicates
4. Parse arpwatch database for flip-flop entries
5. Execute ARP poisoning detection audit

## Tools & resources

- Scapy ARP Packet Fields
- ARP Spoofing Indicators
- Scapy PCAP Analysis
- System ARP Table
- Detection Tools
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

- `analyze_pcap_arp` — Analyze PCAP file for ARP poisoning indicators.
- `detect_arp_spoofing` — Detect ARP spoofing from analyzed ARP traffic.
- `check_arp_table` — Read current system ARP table and check for duplicates.
- `check_arpwatch_log` — Parse arpwatch database for flip-flop entries.
- `run_audit` — Execute ARP poisoning detection audit.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `detecting-arp-poisoning-in-network-traffic`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
