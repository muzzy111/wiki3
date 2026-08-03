---
name: investigating-ransomware-attack-artifacts
description: "Ransomware Attack Artifact Investigation Agent Collects and analyzes ransomware artifacts including ransom notes, encrypted file samples, registry modifications, and event logs to identify the variant, attack vector,.... Use when the user asks to investigating ransomware attack artifacts."
version: 1.0.0
tags:
  - investigating
  - malware
  - ransomware
source: investigating-ransomware-attack-artifacts
---

# Investigating Ransomware Attack Artifacts

**Role:** Security workflow  
**Audience:** security practitioners  
**Primary tools:** VirusTotal API v3, ID Ransomware, No More Ransom Project, MalwareBazaar API

## When to use

- The user wants to **investigat** ransomware attack artifacts.
- Capability: Ransomware Attack Artifact Investigation Agent Collects and analyzes ransomware artifacts including ransom notes, encrypted file samples, registry modifications, and event logs to identify the variant, attack vector, and encryption scope.
- Goal: complete the task.
- Trigger keywords: `investigating, ransomware, attack, artifacts`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Search filesystem for common ransom note filenames
2. Identify encrypted files by extension and calculate scope
3. Extract IOCs and payment details from ransom notes
4. Look up file hash on VirusTotal for ransomware identification
5. Parse exported Windows event log CSV for ransomware indicators
6. Generate ransomware investigation report

## Tools & resources

- VirusTotal API v3
- ID Ransomware
- No More Ransom Project
- MalwareBazaar API

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

- `collect_ransom_notes` — Search filesystem for common ransom note filenames.
- `identify_encrypted_files` — Identify encrypted files by extension and calculate scope.
- `analyze_ransom_note_content` — Extract IOCs and payment details from ransom notes.
- `check_hash_virustotal` — Look up file hash on VirusTotal for ransomware identification.
- `parse_windows_event_logs` — Parse exported Windows event log CSV for ransomware indicators.
- `generate_report` — Generate ransomware investigation report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `investigating-ransomware-attack-artifacts`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
