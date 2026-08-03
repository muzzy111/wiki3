---
name: executing-red-team-exercise
description: "Red team exercise planning and ATT&CK technique tracking. Use when the user asks to executing red team exercise."
version: 1.0.0
tags:
  - executing
source: executing-red-team-exercise
---

# Executing Red Team Exercise

**Role:** Security workflow  
**Audience:** security practitioners  
**Primary tools:** Data Classes

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **execut** red team exercise.
- Capability: Red team exercise planning and ATT&CK technique tracking agent.
- Goal: complete the task.
- Trigger keywords: `executing, team, exercise`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Load MITRE ATT&CK Enterprise techniques from local cache or upstream
2. Extract techniques used by a specific threat actor from ATT&CK data
3. Create a red team operation plan based on emulated threat actor TTPs
4. Mark a technique as executed and record detection status
5. Produce a detection gap analysis comparing executed vs detected techniques

## Tools & resources

- Data Classes

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

- `load_attack_techniques` — Load MITRE ATT&CK Enterprise techniques from local cache or upstream.
- `get_actor_techniques` — Extract techniques used by a specific threat actor from ATT&CK data.
- `build_operation_plan` — Create a red team operation plan based on emulated threat actor TTPs.
- `log_technique_execution` — Mark a technique as executed and record detection status.
- `generate_detection_gap_report` — Produce a detection gap analysis comparing executed vs detected techniques.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `executing-red-team-exercise`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
