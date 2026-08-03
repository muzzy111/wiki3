---
name: recovering-from-ransomware-attack
description: "Agent for ransomware attack recovery coordination. Manages recovery workflow: backup verification, system rebuild prioritization, credential reset tracking, and post-recovery validation checklists with timeline.... Use when the user asks to recovering from ransomware attack."
version: 1.0.0
tags:
  - recovering
  - malware
  - ransomware
source: recovering-from-ransomware-attack
---

# Recovering from Ransomware Attack

**Role:** Security workflow  
**Audience:** security practitioners  
**Primary tools:** Recovery Priority Order, KRBTGT Reset Procedure, 3-2-1-1-0 Backup Strategy, Frameworks, AD Recovery

## When to use

- The user wants to **recover** from ransomware attack.
- Capability: Agent for ransomware attack recovery coordination. Manages recovery workflow: backup verification, system rebuild prioritization, credential reset tracking, and post-recovery validation checklists with timeline documentation.
- Goal: complete the task.
- Trigger keywords: `recovering, ransomware, attack`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Clarify the objective for from ransomware attack
2. Gather inputs and required access
3. Execute the core workflow using skill scripts and references
4. Validate results and document findings
5. Recommend next actions

## Key concepts

- NIST SP 800-61r3: Computer Security Incident Handling Guide (Recover phase)
- NIST IR 8374: Ransomware Risk Management - Recovery section
- CISA #StopRansomware Guide: Recovery checklist
- CIS Controls v8: Control 11 (Data Recovery)
- NIST CSF 2.0: Recover function (RC.RP, RC.CO)
- Microsoft: AD Forest Recovery Guide - https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/manage/ad-forest-re
- T1053: Scheduled Task/Job (persistence to check)
- T1543: Create or Modify System Process (persistence to check)

## Tools & resources

- Recovery Priority Order
- KRBTGT Reset Procedure
- 3-2-1-1-0 Backup Strategy
- Frameworks
- AD Recovery

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

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `recovering-from-ransomware-attack`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
