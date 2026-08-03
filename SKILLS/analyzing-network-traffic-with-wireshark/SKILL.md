---
name: analyzing-network-traffic-with-wireshark
description: "Wireshark/tshark packet analysis agent for network security investigations. Use when the user asks to analyze network traffic with wireshark."
version: 1.0.0
tags:
  - analyzing
  - network
  - incident-response
source: analyzing-network-traffic-with-wireshark
---

# Analyzing Network Traffic with Wireshark

**Role:** Deep analysis  
**Audience:** analysts and investigators  
**Primary tools:** Wireshark, Live Capture, Field Extraction, Statistics, Object Export, Stream Following

## When to use

- The user wants to **analyze** network traffic with wireshark.
- Capability: Wireshark/tshark packet analysis agent for network security investigations.
- Goal: extract findings, indicators, and conclusions from technical evidence.
- Trigger keywords: `analyzing, network, traffic, wireshark`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Execute tshark with custom arguments
2. Start a live packet capture using tshark
3. Get overall PCAP capture statistics
4. Get protocol hierarchy statistics
5. Get conversation statistics (ip, tcp, udp, ethernet)
6. Get endpoint statistics
7. Extract HTTP requests with key fields
8. Extract DNS queries and responses

## Tools & resources

- Wireshark
- Live Capture
- Field Extraction
- Statistics
- Object Export
- Stream Following
- editcap
- mergecap

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

- `run_tshark` — Execute tshark with custom arguments.
- `capture_live` — Start a live packet capture using tshark.
- `get_capture_summary` — Get overall PCAP capture statistics.
- `get_protocol_hierarchy` — Get protocol hierarchy statistics.
- `get_conversations` — Get conversation statistics (ip, tcp, udp, ethernet).
- `get_endpoints` — Get endpoint statistics.
- `extract_http_requests` — Extract HTTP requests with key fields.
- `extract_dns_queries` — Extract DNS queries and responses.
- `extract_tls_info` — Extract TLS handshake information including JA3 fingerprints.
- `detect_suspicious_traffic` — Detect common suspicious traffic patterns.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `analyzing-network-traffic-with-wireshark`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
