---
name: detecting-insider-data-exfiltration-via-dlp
description: "Agent for detecting insider data exfiltration via DLP analysis. Use when the user asks to detect insider data exfiltration via dlp."
version: 1.0.0
tags:
  - detecting
  - threat-intel
source: detecting-insider-data-exfiltration-via-dlp
---

# Detecting Insider Data Exfiltration via Dlp

**Role:** Detection engineering  
**Audience:** detection engineers and SOC analysts  
**Primary tools:** Pandas Behavioral Analytics, Exfiltration Indicators, Microsoft Purview DLP API

## When to use

- The user wants to **detect** insider data exfiltration via dlp.
- Capability: Agent for detecting insider data exfiltration via DLP analysis.
- Goal: identify malicious or anomalous activity with high-signal detections.
- Trigger keywords: `detecting, insider, data, exfiltration`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Load file/cloud activity logs
2. Detect users with data transfer volume exceeding baseline
3. Detect file access during off-hours
4. Detect bulk file downloads in short time windows
5. Detect access to sensitive file types or directories
6. Detect USB device usage for data transfer

## Tools & resources

- Pandas Behavioral Analytics
- Exfiltration Indicators
- Microsoft Purview DLP API

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

- `load_activity_logs` — Load file/cloud activity logs.
- `detect_volume_anomalies` — Detect users with data transfer volume exceeding baseline.
- `detect_off_hours_activity` — Detect file access during off-hours.
- `detect_bulk_downloads` — Detect bulk file downloads in short time windows.
- `detect_sensitive_file_access` — Detect access to sensitive file types or directories.
- `detect_usb_activity` — Detect USB device usage for data transfer.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `detecting-insider-data-exfiltration-via-dlp`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
