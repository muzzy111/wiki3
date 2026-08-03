---
name: analyzing-memory-dumps-with-volatility
description: "Memory forensics agent using Volatility 3 for malware detection in RAM dumps. Use when the user asks to analyze memory dumps with volatility."
version: 1.0.0
tags:
  - analyzing
  - forensics
source: analyzing-memory-dumps-with-volatility
---

# Analyzing Memory Dumps with Volatility

**Role:** Deep analysis  
**Audience:** analysts and investigators  
**Primary tools:** Volatility, Windows Plugins, Memory Acquisition Tools, Symbols

## When to use

- The user wants to **analyze** memory dumps with volatility.
- Capability: Memory forensics agent using Volatility 3 for malware detection in RAM dumps.
- Goal: extract findings, indicators, and conclusions from technical evidence.
- Trigger keywords: `analyzing, memory, dumps, volatility`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Execute a Volatility 3 plugin and return output
2. Identify the OS from the memory dump
3. List all running processes using pslist
4. Scan for hidden/unlinked processes using psscan
5. Compare pslist and psscan to identify DKOM-hidden processes
6. Detect injected code using malfind plugin
7. Extract network connections using netscan
8. Extract process command lines

## Tools & resources

- Volatility
- Windows Plugins
- Memory Acquisition Tools
- Symbols

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

- `run_vol3` — Execute a Volatility 3 plugin and return output.
- `get_os_info` — Identify the OS from the memory dump.
- `list_processes` — List all running processes using pslist.
- `scan_hidden_processes` — Scan for hidden/unlinked processes using psscan.
- `find_hidden_processes` — Compare pslist and psscan to identify DKOM-hidden processes.
- `detect_code_injection` — Detect injected code using malfind plugin.
- `get_network_connections` — Extract network connections using netscan.
- `get_command_lines` — Extract process command lines.
- `dump_credentials` — Extract cached credentials using hashdump and lsadump.
- `scan_with_yara` — Scan memory with YARA rules.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `analyzing-memory-dumps-with-volatility`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
