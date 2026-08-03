---
name: performing-plc-firmware-security-analysis
description: "Agent for performing PLC firmware security analysis. Use when the user asks to perform plc firmware security analysis."
version: 1.0.0
tags:
  - performing
  - incident-response
source: performing-plc-firmware-security-analysis
---

# Performing Plc Firmware Security Analysis

**Role:** Hands-on assessment  
**Audience:** pentesters, blue teamers, and DFIR practitioners  

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **perform** plc firmware security analysis.
- Capability: Agent for performing PLC firmware security analysis.
- Goal: execute a focused security technique or assessment workflow.
- Trigger keywords: `performing, firmware, security, analysis`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Extract firmware image using binwalk
2. Analyze firmware file metadata and calculate hashes
3. Scan extracted firmware for hardcoded credentials
4. Scan extracted firmware for common vulnerability patterns
5. Run full firmware security analysis pipeline

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

- `extract_firmware` — Extract firmware image using binwalk.
- `analyze_firmware_metadata` — Analyze firmware file metadata and calculate hashes.
- `scan_for_credentials` — Scan extracted firmware for hardcoded credentials.
- `scan_for_vulnerabilities` — Scan extracted firmware for common vulnerability patterns.
- `full_analysis` — Run full firmware security analysis pipeline.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `performing-plc-firmware-security-analysis`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
