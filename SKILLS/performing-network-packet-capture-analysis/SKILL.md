---
name: performing-network-packet-capture-analysis
description: "Agent for performing network packet capture analysis with scapy and tshark. Use when the user asks to perform network packet capture analysis."
version: 1.0.0
tags:
  - performing
  - network
  - threat-intel
source: performing-network-packet-capture-analysis
---

# Performing Network Packet Capture Analysis

**Role:** Hands-on assessment  
**Audience:** pentesters, blue teamers, and DFIR practitioners  
**Primary tools:** Wireshark, tshark, tcpdump, Scapy (Python), Zeek (Bro), NetworkMiner

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **perform** network packet capture analysis.
- Capability: Agent for performing network packet capture analysis with scapy and tshark.
- Goal: execute a focused security technique or assessment workflow.
- Trigger keywords: `performing, network, packet, capture, analysis`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Analyze PCAP file using scapy for protocol statistics
2. Extract HTTP requests from PCAP using tshark
3. Detect suspicious network patterns in PCAP
4. Analyze TCP/UDP conversations using tshark

## Key concepts

- NIST SP 800-86: Guide to Integrating Forensic Techniques
- RFC 791 (IP), RFC 793 (TCP), RFC 768 (UDP)
- Wireshark: GUI packet analyzer
- tshark: Command-line packet analyzer
- tcpdump: Packet capture utility
- Scapy (Python): Packet manipulation library
- Zeek (Bro): Network security monitoring
- NetworkMiner: Network forensic analysis tool

## Tools & resources

- Wireshark
- tshark
- tcpdump
- Scapy (Python)
- Zeek (Bro)
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
| `assets/` | Templates, checklists, and report scaffolds |

## Automation entry points

- `analyze_pcap_scapy` — Analyze PCAP file using scapy for protocol statistics.
- `extract_http_requests` — Extract HTTP requests from PCAP using tshark.
- `detect_suspicious_traffic` — Detect suspicious network patterns in PCAP.
- `conversation_analysis` — Analyze TCP/UDP conversations using tshark.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `performing-network-packet-capture-analysis`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
