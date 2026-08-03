---
name: analyzing-memory-forensics-with-lime-and-volatility
description: "Agent for Linux memory forensics using LiME acquisition and Volatility 3. Use when the user asks to analyze memory forensics with lime and volatility."
version: 1.0.0
tags:
  - analyzing
  - forensics
source: analyzing-memory-forensics-with-lime-and-volatility
---

# Analyzing Memory Forensics with Lime and Volatility

**Role:** Deep analysis  
**Audience:** analysts and investigators  
**Primary tools:** Volatility, LiME, Hidden Process Detection

## When to use

- The user wants to **analyze** memory forensics with lime and volatility.
- Capability: Agent for Linux memory forensics using LiME acquisition and Volatility 3.
- Goal: extract findings, indicators, and conclusions from technical evidence.
- Trigger keywords: `analyzing, memory, forensics, lime, volatility`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Acquire memory using LiME kernel module
2. Run a Volatility 3 plugin and capture output
3. Parse Volatility linux.pslist output into structured data
4. List all processes from memory image
5. Extract bash command history from memory
6. List network connections from memory
7. List loaded kernel modules to detect rootkits
8. Compare pslist vs psscan to find hidden processes

## Tools & resources

- Volatility
- LiME
- Hidden Process Detection

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

- `acquire_memory_lime` — Acquire memory using LiME kernel module.
- `run_vol3_plugin` — Run a Volatility 3 plugin and capture output.
- `parse_pslist_output` — Parse Volatility linux.pslist output into structured data.
- `list_processes` — List all processes from memory image.
- `extract_bash_history` — Extract bash command history from memory.
- `list_network_connections` — List network connections from memory.
- `list_kernel_modules` — List loaded kernel modules to detect rootkits.
- `detect_hidden_processes` — Compare pslist vs psscan to find hidden processes.
- `detect_suspicious_commands` — Flag suspicious commands in bash history.
- `check_malfind` — Run malfind to detect injected code.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `analyzing-memory-forensics-with-lime-and-volatility`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
