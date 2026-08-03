---
name: detecting-network-anomalies-with-zeek
description: "Zeek network anomaly detection agent for log analysis and threat hunting. Use when the user asks to detect network anomalies with zeek."
version: 1.0.0
tags:
  - detecting
  - network
  - threat-intel
source: detecting-network-anomalies-with-zeek
---

# Detecting Network Anomalies with ZEEK

**Role:** Detection engineering  
**Audience:** detection engineers and SOC analysts  
**Primary tools:** Zeek, Beaconing Detection Formula

## When to use

- The user wants to **detect** network anomalies with zeek.
- Capability: Zeek network anomaly detection agent for log analysis and threat hunting.
- Goal: identify malicious or anomalous activity with high-signal detections.
- Trigger keywords: `detecting, network, anomalies, zeek`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Check Zeek installation and running status
2. Parse Zeek conn.log for connection statistics and anomalies
3. Parse Zeek dns.log for DNS anomaly detection
4. Parse Zeek ssl.log for TLS anomalies and certificate issues
5. Detect C2 beaconing patterns from Zeek conn.log
6. Analyze a PCAP file with Zeek to generate logs
7. Generate comprehensive Zeek network analysis report

## Tools & resources

- Zeek
- Beaconing Detection Formula

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

- `check_zeek_status` — Check Zeek installation and running status.
- `parse_conn_log` — Parse Zeek conn.log for connection statistics and anomalies.
- `parse_dns_log` — Parse Zeek dns.log for DNS anomaly detection.
- `parse_ssl_log` — Parse Zeek ssl.log for TLS anomalies and certificate issues.
- `detect_beaconing` — Detect C2 beaconing patterns from Zeek conn.log.
- `analyze_pcap` — Analyze a PCAP file with Zeek to generate logs.
- `generate_report` — Generate comprehensive Zeek network analysis report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `detecting-network-anomalies-with-zeek`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
