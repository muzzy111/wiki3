---
name: analyzing-ransomware-network-indicators
description: "Detect ransomware network indicators: C2 beaconing, TOR connections, data exfiltration via Zeek/NetFlow. Use when the user asks to analyze ransomware network indicators."
version: 1.0.0
tags:
  - analyzing
  - malware
  - network
  - ransomware
source: analyzing-ransomware-network-indicators
---

# Analyzing Ransomware Network Indicators

**Role:** Deep analysis  
**Audience:** analysts and investigators  
**Primary tools:** Zeek conn.log Fields, Beaconing Detection Algorithm, TOR Exit Node Detection

## When to use

- The user wants to **analyze** ransomware network indicators.
- Capability: Detect ransomware network indicators: C2 beaconing, TOR connections, data exfiltration via Zeek/NetFlow.
- Goal: extract findings, indicators, and conclusions from technical evidence.
- Trigger keywords: `analyzing, ransomware, network, indicators`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Parse Zeek conn.log TSV format into structured records
2. Parse NetFlow CSV export into connection records
3. Fetch current TOR exit node IP list from Tor Project
4. Detect C2 beaconing by analyzing connection interval regularity
5. Cross-reference connections against TOR exit node list
6. Detect potential data exfiltration by high outbound byte transfer
7. Generate ransomware network indicator report

## Tools & resources

- Zeek conn.log Fields
- Beaconing Detection Algorithm
- TOR Exit Node Detection

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

- `parse_zeek_conn_log` — Parse Zeek conn.log TSV format into structured records.
- `parse_netflow_csv` — Parse NetFlow CSV export into connection records.
- `fetch_tor_exit_nodes` — Fetch current TOR exit node IP list from Tor Project.
- `detect_beaconing` — Detect C2 beaconing by analyzing connection interval regularity.
- `detect_tor_connections` — Cross-reference connections against TOR exit node list.
- `detect_exfiltration` — Detect potential data exfiltration by high outbound byte transfer.
- `generate_report` — Generate ransomware network indicator report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `analyzing-ransomware-network-indicators`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
