---
name: detecting-living-off-the-land-attacks
description: "LOLBin (Living Off the Land Binary) detection agent. Parses Windows Sysmon Event ID 1 (Process Create) and Event ID 3 (Network Connection) logs in EVTX or JSON format to detect suspicious LOLBin execution patterns,.... Use when the user asks to detect living off the land attacks."
version: 1.0.0
tags:
  - detecting
  - threat-intel
source: detecting-living-off-the-land-attacks
---

# Detecting Living Off The Land Attacks

**Role:** Detection engineering  
**Audience:** detection engineers and SOC analysts  
**Primary tools:** LOLBins Detected, Suspicious Parent-Child Pairs Detected, Network-Suspicious LOLBins

## When to use

- The user wants to **detect** living off the land attacks.
- Capability: LOLBin (Living Off the Land Binary) detection agent. Parses Windows Sysmon Event ID 1 (Process Create) and Event ID 3 (Network Connection) logs in EVTX or JSON format to detect suspicious LOLBin execution patterns, anomalous parent-child relationships, and LOLBin network activity.
- Goal: identify malicious or anomalous activity with high-signal detections.
- Trigger keywords: `detecting, living, land, attacks`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Parse a Sysmon EVTX file and extract Event ID 1 and 3 records
2. Parse Sysmon events from a JSON lines file
3. Load Sysmon events from EVTX or JSON file
4. Detect suspicious LOLBin command-line patterns
5. Detect suspicious parent-child process relationships
6. Detect LOLBins making outbound network connections
7. Generate summary statistics

## Tools & resources

- LOLBins Detected
- Suspicious Parent-Child Pairs Detected
- Network-Suspicious LOLBins

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

- `parse_sysmon_evtx` — Parse a Sysmon EVTX file and extract Event ID 1 and 3 records.
- `parse_sysmon_json` — Parse Sysmon events from a JSON lines file.
- `load_events` — Load Sysmon events from EVTX or JSON file.
- `detect_lolbin_abuse` — Detect suspicious LOLBin command-line patterns.
- `detect_parent_child_anomalies` — Detect suspicious parent-child process relationships.
- `detect_lolbin_network` — Detect LOLBins making outbound network connections.
- `generate_statistics` — Generate summary statistics.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `detecting-living-off-the-land-attacks`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
