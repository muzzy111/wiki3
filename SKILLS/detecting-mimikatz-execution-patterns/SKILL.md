---
name: detecting-mimikatz-execution-patterns
description: "Mimikatz execution pattern detection agent. Detects Mimikatz and related credential theft tools by analyzing process creation logs, LSASS access patterns, and known command-line signatures. Use when the user asks to detect mimikatz execution patterns."
version: 1.0.0
tags:
  - detecting
  - threat-intel
source: detecting-mimikatz-execution-patterns
---

# Detecting Mimikatz Execution Patterns

**Role:** Detection engineering  
**Audience:** detection engineers and SOC analysts  
**Primary tools:** Mimikatz Command Signatures, LSASS Dump Techniques, Sysmon Detection Events, Splunk SPL Detection, YARA Rule, Detection Data Sources

## When to use

- The user wants to **detect** mimikatz execution patterns.
- Capability: Mimikatz execution pattern detection agent. Detects Mimikatz and related credential theft tools by analyzing process creation logs, LSASS access patterns, and known command-line signatures.
- Goal: identify malicious or anomalous activity with high-signal detections.
- Trigger keywords: `detecting, mimikatz, execution, patterns`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Define the detection hypothesis and data sources
2. Identify telemetry and features relevant to mimikatz execution patterns
3. Build or refine detection logic (rules, queries, models)
4. Tune against baselined benign activity to reduce noise
5. Validate with true-positive cases and document coverage gaps

## Key concepts

- Red Canary Threat Detection Report
- SANS Threat Hunting Summit Resources

## Tools & resources

- Mimikatz Command Signatures
- LSASS Dump Techniques
- Sysmon Detection Events
- Splunk SPL Detection
- YARA Rule
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

- `scan_evtx`
- `scan_text_log`

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `detecting-mimikatz-execution-patterns`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
