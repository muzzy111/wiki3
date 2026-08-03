---
name: analyzing-windows-registry-for-artifacts
description: "Agent for analyzing Windows Registry hives for forensic artifacts. Use when the user asks to analyze windows registry for artifacts."
version: 1.0.0
tags:
  - analyzing
  - windows
source: analyzing-windows-registry-for-artifacts
---

# Analyzing Windows Registry for Artifacts

**Role:** Deep analysis  
**Audience:** analysts and investigators  
**Primary tools:** regipy, Key Forensic Registry Paths, UserAssist Decoding, RegRipper Plugins

## When to use

- The user wants to **analyze** windows registry for artifacts.
- Capability: Agent for analyzing Windows Registry hives for forensic artifacts.
- Goal: extract findings, indicators, and conclusions from technical evidence.
- Trigger keywords: `analyzing, windows, registry, artifacts`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Extract Run/RunOnce autostart entries from SOFTWARE hive
2. Extract per-user autorun entries from NTUSER.DAT
3. Extract UserAssist program execution history (ROT13 decoded)
4. Extract RecentDocs MRU from NTUSER.DAT
5. Extract computer name, timezone, and shutdown time from SYSTEM hive
6. Extract installed software from Uninstall registry key
7. Flag autorun entries with suspicious characteristics

## Tools & resources

- regipy
- Key Forensic Registry Paths
- UserAssist Decoding
- RegRipper Plugins

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

- `extract_autorun_entries` — Extract Run/RunOnce autostart entries from SOFTWARE hive.
- `extract_user_autorun` — Extract per-user autorun entries from NTUSER.DAT.
- `extract_userassist` — Extract UserAssist program execution history (ROT13 decoded).
- `extract_recent_docs` — Extract RecentDocs MRU from NTUSER.DAT.
- `extract_system_info` — Extract computer name, timezone, and shutdown time from SYSTEM hive.
- `extract_installed_software` — Extract installed software from Uninstall registry key.
- `flag_suspicious_autorun` — Flag autorun entries with suspicious characteristics.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `analyzing-windows-registry-for-artifacts`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
