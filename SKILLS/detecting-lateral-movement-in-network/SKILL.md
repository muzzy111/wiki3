---
name: detecting-lateral-movement-in-network
description: "Lateral movement detection agent using Zeek logs and Windows event analysis. Use when the user asks to detect lateral movement in network."
version: 1.0.0
tags:
  - detecting
  - network
  - threat-intel
source: detecting-lateral-movement-in-network
---

# Detecting Lateral Movement in Network

**Role:** Detection engineering  
**Audience:** detection engineers and SOC analysts  
**Primary tools:** Zeek Script, python-evtx

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **detect** lateral movement in network.
- Capability: Lateral movement detection agent using Zeek logs and Windows event analysis.
- Goal: identify malicious or anomalous activity with high-signal detections.
- Trigger keywords: `detecting, lateral, movement, network`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Parse Zeek conn.log for internal lateral movement patterns
2. Parse Zeek smb_mapping.log for file share access patterns
3. Analyze Windows Security EVTX for lateral movement indicators
4. Detect pass-the-hash indicators from auth events
5. Generate comprehensive lateral movement detection report

## Tools & resources

- Zeek Script
- python-evtx

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

- `parse_zeek_conn_log` — Parse Zeek conn.log for internal lateral movement patterns.
- `parse_zeek_smb_log` — Parse Zeek smb_mapping.log for file share access patterns.
- `analyze_windows_auth_logs` — Analyze Windows Security EVTX for lateral movement indicators.
- `detect_pass_the_hash_pattern` — Detect pass-the-hash indicators from auth events.
- `generate_report` — Generate comprehensive lateral movement detection report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `detecting-lateral-movement-in-network`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
