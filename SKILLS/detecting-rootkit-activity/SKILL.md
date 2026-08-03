---
name: detecting-rootkit-activity
description: "Rootkit detection agent using cross-view analysis and integrity checking. Use when the user asks to detect rootkit activity."
version: 1.0.0
tags:
  - detecting
  - malware
  - threat-intel
source: detecting-rootkit-activity
---

# Detecting Rootkit Activity

**Role:** Detection engineering  
**Audience:** detection engineers and SOC analysts  
**Primary tools:** Volatility 3, Cross-View Detection Method, Linux Rootkit Detection Tools, Rootkit Types, Memory Acquisition

## When to use

- The user wants to **detect** rootkit activity.
- Capability: Rootkit detection agent using cross-view analysis and integrity checking.
- Goal: identify malicious or anomalous activity with high-signal detections.
- Trigger keywords: `detecting, rootkit, activity`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. List processes using ActiveProcessLinks (EPROCESS linked list)
2. Scan physical memory for EPROCESS pool tags (rootkit-resistant)
3. Compare pslist vs psscan to find hidden processes (DKOM rootkits)
4. Check for SSDT (System Service Descriptor Table) hooks
5. List loaded kernel modules and detect unsigned/suspicious ones
6. Run rkhunter for Linux rootkit detection
7. Run chkrootkit for Linux rootkit detection
8. Check for hidden files and directories that may indicate a rootkit

## Tools & resources

- Volatility 3
- Cross-View Detection Method
- Linux Rootkit Detection Tools
- Rootkit Types
- Memory Acquisition

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

- `run_volatility_pslist` — List processes using ActiveProcessLinks (EPROCESS linked list).
- `run_volatility_psscan` — Scan physical memory for EPROCESS pool tags (rootkit-resistant).
- `cross_view_detection` — Compare pslist vs psscan to find hidden processes (DKOM rootkits).
- `check_ssdt_hooks` — Check for SSDT (System Service Descriptor Table) hooks.
- `check_kernel_modules` — List loaded kernel modules and detect unsigned/suspicious ones.
- `run_rkhunter` — Run rkhunter for Linux rootkit detection.
- `run_chkrootkit` — Run chkrootkit for Linux rootkit detection.
- `check_hidden_files_linux` — Check for hidden files and directories that may indicate a rootkit.
- `generate_report` — Generate comprehensive rootkit detection report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `detecting-rootkit-activity`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
