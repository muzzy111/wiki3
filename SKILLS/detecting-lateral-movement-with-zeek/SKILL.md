---
name: detecting-lateral-movement-with-zeek
description: "Zeek lateral movement detection agent. Parses Zeek conn.log, smb_mapping.log, smb_files.log, dce_rpc.log, ntlm.log, and kerberos.log to detect lateral movement indicators: admin share access, PsExec-style service.... Use when the user asks to detect lateral movement with zeek."
version: 1.0.0
tags:
  - detecting
  - network
  - threat-intel
source: detecting-lateral-movement-with-zeek
---

# Detecting Lateral Movement with ZEEK

**Role:** Detection engineering  
**Audience:** detection engineers and SOC analysts  
**Primary tools:** Zeek, Lateral Movement Ports Tracked, Detection Types in Output, Detection References

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **detect** lateral movement with zeek.
- Capability: Zeek lateral movement detection agent. Parses Zeek conn.log, smb_mapping.log, smb_files.log, dce_rpc.log, ntlm.log, and kerberos.log to detect lateral movement indicators: admin share access, PsExec-style service creation, Pass-the-Hash, and anomalous internal host-to-host connections.
- Goal: identify malicious or anomalous activity with high-signal detections.
- Trigger keywords: `detecting, lateral, movement, zeek`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Check if an IP address is in RFC1918 private ranges
2. Parse a Zeek TSV log file, skipping comment/header lines
3. Parse a Zeek JSON log file (one JSON object per line)
4. Auto-detect Zeek log format (TSV or JSON) and parse accordingly
5. Convert Zeek epoch timestamp string to ISO 8601
6. Analyze conn.log for internal lateral movement connections
7. Analyze smb_mapping.log for admin share access
8. Analyze smb_files.log for file writes to network shares

## Key concepts

- SANS: Detecting Lateral Movement with Zeek
- Red Canary Threat Detection Report — Lateral Movement chapter

## Tools & resources

- Zeek
- Lateral Movement Ports Tracked
- Detection Types in Output
- Detection References

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

- `is_internal` — Check if an IP address is in RFC1918 private ranges.
- `parse_zeek_tsv` — Parse a Zeek TSV log file, skipping comment/header lines.
- `parse_zeek_json` — Parse a Zeek JSON log file (one JSON object per line).
- `parse_zeek_log` — Auto-detect Zeek log format (TSV or JSON) and parse accordingly.
- `ts_to_iso` — Convert Zeek epoch timestamp string to ISO 8601.
- `analyze_conn_log` — Analyze conn.log for internal lateral movement connections.
- `analyze_smb_mapping` — Analyze smb_mapping.log for admin share access.
- `analyze_smb_files` — Analyze smb_files.log for file writes to network shares.
- `analyze_dce_rpc` — Analyze dce_rpc.log for remote execution operations.
- `analyze_ntlm` — Analyze ntlm.log for Pass-the-Hash and authentication anomalies.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `detecting-lateral-movement-with-zeek`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
