---
name: detecting-ransomware-precursors-in-network
description: "Agent for detecting ransomware precursor activity in network traffic and logs. Use when the user asks to detect ransomware precursors in network."
version: 1.0.0
tags:
  - detecting
  - malware
  - network
  - threat-intel
  - ransomware
source: detecting-ransomware-precursors-in-network
---

# Detecting Ransomware Precursors in Network

**Role:** Detection engineering  
**Audience:** detection engineers and SOC analysts  
**Primary tools:** Suricata CLI, Splunk SPL, abuse.ch Threat Intelligence Feeds, Industry References

## When to use

- The user wants to **detect** ransomware precursors in network.
- Capability: Agent for detecting ransomware precursor activity in network traffic and logs.
- Goal: identify malicious or anomalous activity with high-signal detections.
- Trigger keywords: `detecting, ransomware, precursors, network`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Parse Zeek conn.log for suspicious network connections
2. Check Windows event logs for ransomware precursors
3. Check running processes for ransomware tooling
4. Detect mass file renaming or new encrypted extensions

## Key concepts

- T1078: Valid Accounts (compromised credentials from IABs)
- T1133: External Remote Services (VPN/RDP exploitation)
- T1566: Phishing (email-based initial access)
- T1071.001: Application Layer Protocol: Web (HTTPS beacons)
- T1071.004: Application Layer Protocol: DNS (DNS tunneling)
- T1573: Encrypted Channel (C2 over TLS)
- T1090: Proxy (redirectors and relay infrastructure)
- T1558.003: Kerberoasting

## Tools & resources

- Suricata CLI
- Splunk SPL
- abuse.ch Threat Intelligence Feeds
- Industry References

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

- `parse_zeek_conn_log` — Parse Zeek conn.log for suspicious network connections.
- `analyze_event_logs_windows` — Check Windows event logs for ransomware precursors.
- `scan_process_list` — Check running processes for ransomware tooling.
- `check_file_encryption_activity` — Detect mass file renaming or new encrypted extensions.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `detecting-ransomware-precursors-in-network`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
