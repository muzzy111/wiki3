---
name: extracting-credentials-from-memory-dump
description: "Memory dump credential extraction agent using volatility3 subprocess and pypykatz. Use when the user asks to extracting credentials from memory dump."
version: 1.0.0
tags:
  - extracting
  - forensics
  - threat-intel
source: extracting-credentials-from-memory-dump
---

# Extracting Credentials from Memory Dump

**Role:** Security workflow  
**Audience:** security practitioners  
**Primary tools:** Volatility3 Plugins Used

## When to use

- The user wants to **extract** credentials from memory dump.
- Capability: Memory dump credential extraction agent using volatility3 subprocess and pypykatz.
- Goal: complete the task.
- Trigger keywords: `extracting, credentials, memory, dump`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Verify memory dump exists and compute hash
2. Run a volatility3 plugin and return stdout
3. Identify OS version from memory dump
4. Find LSASS process PID from process list
5. Extract SAM hashes using windows.hashdump
6. Extract LSA secrets using windows.lsadump
7. Extract cached domain credentials using windows.cachedump
8. Run pypykatz against LSASS minidump or full memory for credential extraction

## Tools & resources

- Volatility3 Plugins Used

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

- `verify_dump` — Verify memory dump exists and compute hash.
- `run_vol3` — Run a volatility3 plugin and return stdout.
- `get_os_info` — Identify OS version from memory dump.
- `find_lsass_pid` — Find LSASS process PID from process list.
- `extract_hashdump` — Extract SAM hashes using windows.hashdump.
- `extract_lsadump` — Extract LSA secrets using windows.lsadump.
- `extract_cachedump` — Extract cached domain credentials using windows.cachedump.
- `run_pypykatz` — Run pypykatz against LSASS minidump or full memory for credential extraction.
- `parse_pypykatz_creds` — Parse pypykatz JSON output into structured credential list.
- `search_cloud_keys` — Search memory strings for cloud credentials and auth tokens.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `extracting-credentials-from-memory-dump`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
