---
name: detecting-t1548-abuse-elevation-control-mechanism
description: "Agent for detecting T1548 Abuse Elevation Control Mechanism (UAC bypass, sudo abuse). Use when the user asks to detect t1548 abuse elevation control mechanism."
version: 1.0.0
tags:
  - detecting
  - threat-intel
source: detecting-t1548-abuse-elevation-control-mechanism
---

# Detecting T1548 Abuse Elevation Control Mechanism

**Role:** Detection engineering  
**Audience:** detection engineers and SOC analysts  
**Primary tools:** UAC Bypass, Windows UAC Configuration, Linux Privilege Escalation, Sysmon Detection Rules, Sigma Rule, Detection Events

## When to use

- The user wants to **detect** t1548 abuse elevation control mechanism.
- Capability: Agent for detecting T1548 Abuse Elevation Control Mechanism (UAC bypass, sudo abuse).
- Goal: identify malicious or anomalous activity with high-signal detections.
- Trigger keywords: `detecting, t1548, abuse, elevation, control, mechanism`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Check for UAC bypass registry modifications
2. Check Sysmon logs for auto-elevate binary abuse
3. Check auth logs for sudo abuse patterns
4. Find SUID/SGID binaries that could be abused for elevation

## Tools & resources

- UAC Bypass
- Windows UAC Configuration
- Linux Privilege Escalation
- Sysmon Detection Rules
- Sigma Rule
- Detection Events

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

- `check_uac_bypass_registry` — Check for UAC bypass registry modifications.
- `check_uac_bypass_processes` — Check Sysmon logs for auto-elevate binary abuse.
- `check_linux_sudo_abuse` — Check auth logs for sudo abuse patterns.
- `check_setuid_binaries` — Find SUID/SGID binaries that could be abused for elevation.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `detecting-t1548-abuse-elevation-control-mechanism`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
