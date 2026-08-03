---
name: analyzing-command-and-control-communication
description: "C2 communication analysis agent for beacon detection and protocol decoding. Use when the user asks to analyze command and control communication."
version: 1.0.0
tags:
  - analyzing
source: analyzing-command-and-control-communication
---

# Analyzing Command and Control Communication

**Role:** Deep analysis  
**Audience:** analysts and investigators  
**Primary tools:** Scapy, dpkt, tshark, CobaltStrikeParser, Suricata

## When to use

- The user wants to **analyze** command and control communication.
- Capability: C2 communication analysis agent for beacon detection and protocol decoding.
- Goal: extract findings, indicators, and conclusions from technical evidence.
- Trigger keywords: `analyzing, command, control, communication`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Analyze PCAP for periodic beacon patterns using TCP SYN timing
2. Extract HTTP requests from a PCAP file using dpkt
3. Extract DNS queries from a PCAP for C2 domain identification
4. Match HTTP request patterns against known C2 framework signatures
5. Generate Suricata IDS rules from observed C2 patterns

## Tools & resources

- Scapy
- dpkt
- tshark
- CobaltStrikeParser
- Suricata

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

- `detect_beacons` — Analyze PCAP for periodic beacon patterns using TCP SYN timing.
- `extract_http_requests` — Extract HTTP requests from a PCAP file using dpkt.
- `extract_dns_queries` — Extract DNS queries from a PCAP for C2 domain identification.
- `identify_c2_framework` — Match HTTP request patterns against known C2 framework signatures.
- `generate_suricata_rules` — Generate Suricata IDS rules from observed C2 patterns.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `analyzing-command-and-control-communication`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
