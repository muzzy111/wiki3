---
name: performing-android-app-static-analysis-with-mobsf
description: "MobSF Android static analysis agent. Automates APK upload, static analysis scanning, and report retrieval via the MobSF REST API. Extracts security findings including manifest analysis, code analysis, binary.... Use when the user asks to perform android app static analysis with mobsf."
version: 1.0.0
tags:
  - performing
  - mobile
source: performing-android-app-static-analysis-with-mobsf
---

# Performing Android App Static Analysis with Mobsf

**Role:** Hands-on assessment  
**Audience:** pentesters, blue teamers, and DFIR practitioners  
**Primary tools:** Core Operations

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **perform** android app static analysis with mobsf.
- Capability: MobSF Android static analysis agent. Automates APK upload, static analysis scanning, and report retrieval via the MobSF REST API. Extracts security findings including manifest analysis, code analysis, binary analysis, and certificate checks.
- Goal: execute a focused security technique or assessment workflow.
- Trigger keywords: `performing, android, static, analysis, mobsf`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Return MobSF server URL and API key from env or defaults
2. Upload an APK file to MobSF and return the file hash
3. Trigger static analysis scan on the uploaded APK
4. Retrieve the JSON report for a scanned APK
5. Retrieve the security scorecard for a scanned APK
6. Extract structured security findings from MobSF report JSON
7. Print a human-readable summary of the analysis

## Key concepts

- Section 4.1: Static analysis as mandatory step in mobile app vetting process
- Section 4.2: Automated tools should check for known vulnerability patterns
- Section 5: Integration of vetting into enterprise mobile device management

## Tools & resources

- Core Operations

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

- `get_mobsf_config` — Return MobSF server URL and API key from env or defaults.
- `upload_apk` — Upload an APK file to MobSF and return the file hash.
- `start_scan` — Trigger static analysis scan on the uploaded APK.
- `get_report` — Retrieve the JSON report for a scanned APK.
- `get_scorecard` — Retrieve the security scorecard for a scanned APK.
- `extract_findings` — Extract structured security findings from MobSF report JSON.
- `format_summary` — Print a human-readable summary of the analysis.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `performing-android-app-static-analysis-with-mobsf`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
