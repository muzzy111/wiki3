---
name: detecting-process-injection-techniques
description: "Process injection detection agent using Volatility and Sysmon analysis. Use when the user asks to detect process injection techniques."
version: 1.0.0
tags:
  - detecting
  - threat-intel
source: detecting-process-injection-techniques
---

# Detecting Process Injection Techniques

**Role:** Detection engineering  
**Audience:** detection engineers and SOC analysts  
**Primary tools:** Volatility 3 Plugins, python-evtx Usage, Suspicious Parent-Child Relationships

## When to use

- The user wants to **detect** process injection techniques.
- Capability: Process injection detection agent using Volatility and Sysmon analysis.
- Goal: identify malicious or anomalous activity with high-signal detections.
- Trigger keywords: `detecting, process, injection, techniques`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Run Volatility malfind plugin to detect injected code
2. Detect process hollowing via VAD/PEB image path mismatch
3. Scan Sysmon logs for injection-related events
4. Detect processes with suspicious RWX memory regions (Windows)
5. Detect unusual parent-child process relationships
6. Generate process injection detection report

## Tools & resources

- Volatility 3 Plugins
- python-evtx Usage
- Suspicious Parent-Child Relationships

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

- `run_volatility_malfind` — Run Volatility malfind plugin to detect injected code.
- `run_volatility_hollowfind` — Detect process hollowing via VAD/PEB image path mismatch.
- `scan_sysmon_injection_events` — Scan Sysmon logs for injection-related events.
- `detect_rwx_memory_regions` — Detect processes with suspicious RWX memory regions (Windows).
- `check_unusual_parent_child` — Detect unusual parent-child process relationships.
- `generate_report` — Generate process injection detection report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `detecting-process-injection-techniques`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
