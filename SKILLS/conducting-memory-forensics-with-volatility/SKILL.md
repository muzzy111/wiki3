---
name: conducting-memory-forensics-with-volatility
description: "Memory Forensics Agent - Automates Volatility 3 analysis of memory dumps for incident response. Use when the user asks to conduct memory forensics with volatility."
version: 1.0.0
tags:
  - conducting
  - forensics
  - threat-intel
source: conducting-memory-forensics-with-volatility
---

# Conducting Memory Forensics with Volatility

**Role:** Structured engagement  
**Audience:** security teams running formal engagements  
**Primary tools:** Volatility, Key Functions, Suspicious Process Indicators

## When to use

- The user wants to **conduct** memory forensics with volatility.
- Capability: Memory Forensics Agent - Automates Volatility 3 analysis of memory dumps for incident response.
- Goal: run a complete assessment, exercise, or investigation end to end.
- Trigger keywords: `conducting, memory, forensics, volatility`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Execute a Volatility 3 plugin and return parsed output
2. List running processes and identify suspicious ones
3. Extract network connections and identify C2 communication
4. Detect process injection using malfind plugin
5. List loaded DLLs for a process or all processes
6. Extract command line history from process memory
7. List registry hives in memory
8. List kernel modules and detect potential rootkits

## Tools & resources

- Volatility
- Key Functions
- Suspicious Process Indicators

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

- `run_volatility` — Execute a Volatility 3 plugin and return parsed output.
- `analyze_processes` — List running processes and identify suspicious ones.
- `analyze_network_connections` — Extract network connections and identify C2 communication.
- `detect_process_injection` — Detect process injection using malfind plugin.
- `analyze_dlls` — List loaded DLLs for a process or all processes.
- `extract_command_history` — Extract command line history from process memory.
- `extract_registry_hives` — List registry hives in memory.
- `check_kernel_modules` — List kernel modules and detect potential rootkits.
- `generate_forensics_report` — Generate memory forensics analysis report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `conducting-memory-forensics-with-volatility`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
