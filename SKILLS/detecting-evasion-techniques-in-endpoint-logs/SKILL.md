---
name: detecting-evasion-techniques-in-endpoint-logs
description: "Defense evasion detection agent for endpoint logs. Detects MITRE ATT&CK TA0005 evasion techniques including log clearing, timestomping, process injection indicators, and security tool disabling by analyzing Sysmon.... Use when the user asks to detect evasion techniques in endpoint logs."
version: 1.0.0
tags:
  - detecting
  - threat-intel
source: detecting-evasion-techniques-in-endpoint-logs
---

# Detecting Evasion Techniques in Endpoint Logs

**Role:** Detection engineering  
**Audience:** detection engineers and SOC analysts  
**Primary tools:** python-evtx Usage, Splunk SPL Detection, Primary Standards, Compliance Mappings, Supporting References

## When to use

- The user wants to **detect** evasion techniques in endpoint logs.
- Capability: Defense evasion detection agent for endpoint logs. Detects MITRE ATT&CK TA0005 evasion techniques including log clearing, timestomping, process injection indicators, and security tool disabling by analyzing Sysmon and Windows Security event logs.
- Goal: identify malicious or anomalous activity with high-signal detections.
- Trigger keywords: `detecting, evasion, techniques, endpoint, logs`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Define the detection hypothesis and data sources
2. Identify telemetry and features relevant to evasion techniques in endpoint logs
3. Build or refine detection logic (rules, queries, models)
4. Tune against baselined benign activity to reduce noise
5. Validate with true-positive cases and document coverage gaps

## Key concepts

- Scope: 43 techniques and 80+ sub-techniques for defense evasion
- Key techniques: T1055 (Process Injection), T1070 (Indicator Removal), T1036 (Masquerading), T1218 (System Binary Proxy Executi
- Scope: Community-maintained detection rules in vendor-agnostic format
- Evasion rules: rules/windows/process_creation/proc_creation_win_*, rules/windows/sysmon/
- Scope: Catalog of Windows binaries that can be used for defense evasion, with detection recommendations
- SANS Hunt Evil Poster: Comprehensive guide to suspicious Windows process behavior

## Tools & resources

- python-evtx Usage
- Splunk SPL Detection
- Primary Standards
- Compliance Mappings
- Supporting References

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

- `analyze_evtx_for_evasion`

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `detecting-evasion-techniques-in-endpoint-logs`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
