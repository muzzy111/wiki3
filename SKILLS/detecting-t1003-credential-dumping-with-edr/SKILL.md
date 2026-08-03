---
name: detecting-t1003-credential-dumping-with-edr
description: "Agent for detecting T1003 credential dumping via EDR telemetry analysis. Use when the user asks to detect t1003 credential dumping with edr."
version: 1.0.0
tags:
  - detecting
  - threat-intel
source: detecting-t1003-credential-dumping-with-edr
---

# Detecting T1003 Credential Dumping with EDR

**Role:** Detection engineering  
**Audience:** detection engineers and SOC analysts  
**Primary tools:** CrowdStrike Falcon, Microsoft Defender ATP, Sigma Rules, Protection Controls, Known Credential Dumping Tools

## When to use

- The user wants to **detect** t1003 credential dumping with edr.
- Capability: Agent for detecting T1003 credential dumping via EDR telemetry analysis.
- Goal: identify malicious or anomalous activity with high-signal detections.
- Trigger keywords: `detecting, t1003, credential, dumping`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Query Sysmon Event ID 10 for LSASS process access
2. Check for known credential dumping tool processes
3. Check for SAM/NTDS.dit/SYSTEM registry hive access

## Tools & resources

- CrowdStrike Falcon
- Microsoft Defender ATP
- Sigma Rules
- Protection Controls
- Known Credential Dumping Tools

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

- `check_lsass_access_sysmon` — Query Sysmon Event ID 10 for LSASS process access.
- `check_credential_dump_processes` — Check for known credential dumping tool processes.
- `check_sam_ntds_access` — Check for SAM/NTDS.dit/SYSTEM registry hive access.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `detecting-t1003-credential-dumping-with-edr`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
