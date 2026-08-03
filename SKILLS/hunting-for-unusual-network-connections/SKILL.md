---
name: hunting-for-unusual-network-connections
description: "Agent for hunting unusual network connections from endpoint and firewall logs. Use when the user asks to hunt for unusual network connections."
version: 1.0.0
tags:
  - hunting
  - network
  - threat-intel
source: hunting-for-unusual-network-connections
---

# Hunting for Unusual Network Connections

**Role:** Threat hunting  
**Audience:** threat hunters and SOC analysts  
**Primary tools:** Splunk SPL, KQL, Zeek conn.log Analysis, Beaconing Detection, Detection Data Sources

## When to use

- The user wants to **hunt for** unusual network connections.
- Capability: Agent for hunting unusual network connections from endpoint and firewall logs.
- Goal: proactively search for adversary activity using hypotheses and telemetry.
- Trigger keywords: `hunting, unusual, network, connections`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Convert dotted IP to integer
2. Check if IP is in private RFC1918 range
3. Load network connection logs from JSON lines
4. Find connections to unusual destination ports
5. Find rarely contacted external destinations
6. Find unusually long-lived connections (potential C2)
7. Detect periodic connections suggestive of beaconing

## Key concepts

- Red Canary Threat Detection Report
- SANS Threat Hunting Summit Resources

## Tools & resources

- Splunk SPL
- KQL
- Zeek conn.log Analysis
- Beaconing Detection
- Detection Data Sources

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

- `ip_to_int` — Convert dotted IP to integer.
- `is_private` — Check if IP is in private RFC1918 range.
- `load_connection_logs` — Load network connection logs from JSON lines.
- `detect_non_standard_ports` — Find connections to unusual destination ports.
- `detect_rare_destinations` — Find rarely contacted external destinations.
- `detect_long_connections` — Find unusually long-lived connections (potential C2).
- `detect_high_frequency_beaconing` — Detect periodic connections suggestive of beaconing.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `hunting-for-unusual-network-connections`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
