---
name: performing-wireless-security-assessment-with-kismet
description: "Agent for wireless security assessment with Kismet. Interfaces with Kismet's REST API for device enumeration, rogue AP detection, channel analysis, and wireless threat monitoring during security assessments. Use when the user asks to perform wireless security assessment with kismet."
version: 1.0.0
tags:
  - performing
  - incident-response
source: performing-wireless-security-assessment-with-kismet
---

# Performing Wireless Security Assessment with Kismet

**Role:** Hands-on assessment  
**Audience:** pentesters, blue teamers, and DFIR practitioners  
**Primary tools:** Device Fields, Kismet CLI

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **perform** wireless security assessment with kismet.
- Capability: Agent for wireless security assessment with Kismet. Interfaces with Kismet's REST API for device enumeration, rogue AP detection, channel analysis, and wireless threat monitoring during security assessments.
- Goal: execute a focused security technique or assessment workflow.
- Trigger keywords: `performing, wireless, security, assessment, kismet`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Confirm scope, authorization, and safety constraints
2. Prepare tooling and environment for wireless security assessment with kismet
3. Execute the technique methodically and record evidence
4. Validate outcomes and eliminate false paths
5. Report results with clear remediation guidance

## Tools & resources

- Device Fields
- Kismet CLI

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

*High-level skill guide for `performing-wireless-security-assessment-with-kismet`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
