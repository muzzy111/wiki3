---
name: detecting-dll-sideloading-attacks
description: "DLL sideloading detection agent using Sysmon Event ID 7 (Image Loaded) analysis. Detects unsigned DLLs loaded by signed executables from non-standard paths, a common APT persistence and defense evasion technique.... Use when the user asks to detect dll sideloading attacks."
version: 1.0.0
tags:
  - detecting
  - threat-intel
source: detecting-dll-sideloading-attacks
---

# Detecting DLL Sideloading Attacks

**Role:** Detection engineering  
**Audience:** detection engineers and SOC analysts  
**Primary tools:** python-evtx Usage, Known Sideloading Targets, Splunk SPL Detection, Sigma Rule Fields, Windows DLL Search Order, Known Vulnerable Applications

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **detect** dll sideloading attacks.
- Capability: DLL sideloading detection agent using Sysmon Event ID 7 (Image Loaded) analysis. Detects unsigned DLLs loaded by signed executables from non-standard paths, a common APT persistence and defense evasion technique (T1574.002).
- Goal: identify malicious or anomalous activity with high-signal detections.
- Trigger keywords: `detecting, sideloading, attacks`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Define the detection hypothesis and data sources
2. Identify telemetry and features relevant to dll sideloading attacks
3. Build or refine detection logic (rules, queries, models)
4. Tune against baselined benign activity to reduce noise
5. Validate with true-positive cases and document coverage gaps

## Key concepts

- Tactic: Persistence (TA0003), Privilege Escalation (TA0004), Defense Evasion (TA0005)
- Data Sources: File monitoring, DLL monitoring, Process monitoring

## Tools & resources

- python-evtx Usage
- Known Sideloading Targets
- Splunk SPL Detection
- Sigma Rule Fields
- Windows DLL Search Order
- Known Vulnerable Applications
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

- `parse_sysmon_dll_loads`
- `scan_directory_for_sideloading`
- `generate_sigma_rule`

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `detecting-dll-sideloading-attacks`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
