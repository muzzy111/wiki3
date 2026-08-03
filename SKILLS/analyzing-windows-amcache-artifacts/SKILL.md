---
name: analyzing-windows-amcache-artifacts
description: "Windows Amcache.hve forensic analysis agent. Parses Amcache.hve registry hive to extract program execution history, file metadata, and device information using the regipy library. Use when the user asks to analyze windows amcache artifacts."
version: 1.0.0
tags:
  - analyzing
  - windows
source: analyzing-windows-amcache-artifacts
---

# Analyzing Windows Amcache Artifacts

**Role:** Deep analysis  
**Audience:** analysts and investigators  
**Primary tools:** Amcache.hve Location, Registry Keys, regipy Python Library, Forensic Value

## When to use

- The user wants to **analyze** windows amcache artifacts.
- Capability: Windows Amcache.hve forensic analysis agent. Parses Amcache.hve registry hive to extract program execution history, file metadata, and device information using the regipy library.
- Goal: extract findings, indicators, and conclusions from technical evidence.
- Trigger keywords: `analyzing, windows, amcache, artifacts`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Parse InventoryApplicationFile entries from Amcache.hve
2. Parse InventoryApplication entries
3. Flag suspicious entries based on path and name patterns

## Tools & resources

- Amcache.hve Location
- Registry Keys
- regipy Python Library
- Forensic Value

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

- `parse_amcache_files` — Parse InventoryApplicationFile entries from Amcache.hve.
- `parse_amcache_apps` — Parse InventoryApplication entries.
- `detect_suspicious` — Flag suspicious entries based on path and name patterns.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `analyzing-windows-amcache-artifacts`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
