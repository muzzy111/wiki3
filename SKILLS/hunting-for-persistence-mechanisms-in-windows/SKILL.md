---
name: hunting-for-persistence-mechanisms-in-windows
description: "Agent for hunting Windows persistence mechanisms across registry, services, and scheduled tasks. Use when the user asks to hunt for persistence mechanisms in windows."
version: 1.0.0
tags:
  - hunting
  - windows
source: hunting-for-persistence-mechanisms-in-windows
---

# Hunting for Persistence Mechanisms in Windows

**Role:** Threat hunting  
**Audience:** threat hunters and SOC analysts  

## When to use

- The user wants to **hunt for** persistence mechanisms in windows.
- Capability: Agent for hunting Windows persistence mechanisms across registry, services, and scheduled tasks.
- Goal: proactively search for adversary activity using hypotheses and telemetry.
- Trigger keywords: `hunting, persistence, mechanisms, windows`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Enumerate common Windows registry persistence locations using reg query
2. Parse reg query output into structured entries
3. List scheduled tasks and flag suspicious ones
4. List Windows services and flag those running from unusual paths

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

- `enumerate_registry_persistence` — Enumerate common Windows registry persistence locations using reg query.
- `parse_reg_output` — Parse reg query output into structured entries.
- `enumerate_scheduled_tasks` — List scheduled tasks and flag suspicious ones.
- `enumerate_services` — List Windows services and flag those running from unusual paths.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `hunting-for-persistence-mechanisms-in-windows`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
