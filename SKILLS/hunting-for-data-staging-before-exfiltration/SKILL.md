---
name: hunting-for-data-staging-before-exfiltration
description: "Detect data staging activity before exfiltration via archive creation and file consolidation monitoring. Use when the user asks to hunt for data staging before exfiltration."
version: 1.0.0
tags:
  - hunting
source: hunting-for-data-staging-before-exfiltration
---

# Hunting for Data Staging Before Exfiltration

**Role:** Threat hunting  
**Audience:** threat hunters and SOC analysts  
**Primary tools:** Archive Tool Detection Signatures, Common Staging Directories

## When to use

- The user wants to **hunt for** data staging before exfiltration.
- Capability: Detect data staging activity before exfiltration via archive creation and file consolidation monitoring.
- Goal: proactively search for adversary activity using hypotheses and telemetry.
- Trigger keywords: `hunting, data, staging, before, exfiltration`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Parse process creation logs (Sysmon/EDR JSON format)
2. Detect archive tool execution with compression arguments
3. Detect file writes to known staging directories
4. Detect bulk reads from sensitive directories (document consolidation)
5. Compute overall staging risk score (0-100)
6. Generate data staging hunt report

## Tools & resources

- Archive Tool Detection Signatures
- Common Staging Directories

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

- `parse_process_logs` — Parse process creation logs (Sysmon/EDR JSON format).
- `detect_archive_creation` — Detect archive tool execution with compression arguments.
- `detect_staging_directory_writes` — Detect file writes to known staging directories.
- `detect_sensitive_source_reads` — Detect bulk reads from sensitive directories (document consolidation).
- `score_staging_risk` — Compute overall staging risk score (0-100).
- `generate_report` — Generate data staging hunt report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `hunting-for-data-staging-before-exfiltration`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
