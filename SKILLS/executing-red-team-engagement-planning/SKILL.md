---
name: executing-red-team-engagement-planning
description: "Agent for planning and documenting red team engagements with scope, rules, and attack paths. Use when the user asks to executing red team engagement planning."
version: 1.0.0
tags:
  - executing
source: executing-red-team-engagement-planning
---

# Executing Red Team Engagement Planning

**Role:** Security workflow  
**Audience:** security practitioners  
**Primary tools:** Engagement Plan Structure, NIST SP 800-115, TIBER-EU Framework, Relevant CVE/CWE References, Compliance Frameworks Impacting Scope

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **execut** red team engagement planning.
- Capability: Agent for planning and documenting red team engagements with scope, rules, and attack paths.
- Goal: complete the task.
- Trigger keywords: `executing, team, engagement, planning`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Clarify the objective for red team engagement planning
2. Gather inputs and required access
3. Execute the core workflow using skill scripts and references
4. Validate results and document findings
5. Recommend next actions

## Key concepts

- Reconnaissance (TA0043): Pre-engagement intelligence gathering
- T1595 - Active Scanning
- T1592 - Gather Victim Host Information
- T1589 - Gather Victim Identity Information
- T1590 - Gather Victim Network Information
- T1591 - Gather Victim Org Information
- Resource Development (TA0042): Infrastructure and capability preparation
- T1583 - Acquire Infrastructure

## Tools & resources

- Engagement Plan Structure
- NIST SP 800-115
- TIBER-EU Framework
- Relevant CVE/CWE References
- Compliance Frameworks Impacting Scope

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

- `generate_engagement_plan` — Generate a structured red team engagement plan.
- `generate_attack_tree` — Generate an attack tree for a given scenario.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `executing-red-team-engagement-planning`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
