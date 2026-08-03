---
name: hunting-for-startup-folder-persistence
description: "Agent for hunting T1547.001 startup folder persistence on Windows. Use when the user asks to hunt for startup folder persistence."
version: 1.0.0
tags:
  - hunting
source: hunting-for-startup-folder-persistence
---

# Hunting for Startup Folder Persistence

**Role:** Threat hunting  
**Audience:** threat hunters and SOC analysts  
**Primary tools:** Startup Folder Paths, File Extension Risk Scores, Additional Risk Factors

## When to use

- The user wants to **hunt for** startup folder persistence.
- Capability: Agent for hunting T1547.001 startup folder persistence on Windows.
- Goal: proactively search for adversary activity using hypotheses and telemetry.
- Trigger keywords: `hunting, startup, folder, persistence`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Return user-specific and all-users startup folder paths
2. Compute SHA-256 hash of a file
3. Analyze a single file in a startup directory
4. Scan all startup directories and analyze contents
5. Check Registry Run keys for autostart entries
6. Monitor startup folders in real-time using watchdog
7. Run comprehensive startup persistence threat hunt

## Tools & resources

- Startup Folder Paths
- File Extension Risk Scores
- Additional Risk Factors

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

- `get_startup_paths` — Return user-specific and all-users startup folder paths.
- `compute_file_hash` — Compute SHA-256 hash of a file.
- `analyze_file` — Analyze a single file in a startup directory.
- `scan_startup_folders` — Scan all startup directories and analyze contents.
- `check_registry_run_keys` — Check Registry Run keys for autostart entries.
- `monitor_startup` — Monitor startup folders in real-time using watchdog.
- `full_hunt` — Run comprehensive startup persistence threat hunt.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `hunting-for-startup-folder-persistence`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
