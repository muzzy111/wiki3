---
name: analyzing-linux-kernel-rootkits
description: "Linux Kernel Rootkit Detection Agent - analyzes memory dumps with Volatility3 and live system with rkhunter. Use when the user asks to analyze linux kernel rootkits."
version: 1.0.0
tags:
  - analyzing
  - linux
  - malware
source: analyzing-linux-kernel-rootkits
---

# Analyzing Linux Kernel Rootkits

**Role:** Deep analysis  
**Audience:** analysts and investigators  
**Primary tools:** Volatility3 Linux Plugins, Memory Acquisition Tools, Known Linux Rootkits Detected, Cross-View Detection

## When to use

- The user wants to **analyze** linux kernel rootkits.
- Capability: Linux Kernel Rootkit Detection Agent - analyzes memory dumps with Volatility3 and live system with rkhunter.
- Goal: extract findings, indicators, and conclusions from technical evidence.
- Trigger keywords: `analyzing, linux, kernel, rootkits`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Run a Volatility3 Linux plugin and return parsed output
2. Detect hooked system calls using linux.check_syscall
3. Detect hidden kernel modules using cross-view analysis
4. Check Interrupt Descriptor Table for hooks
5. Run rkhunter rootkit scanner on live system
6. Compare /proc/modules with /sys/module for hidden modules

## Tools & resources

- Volatility3 Linux Plugins
- Memory Acquisition Tools
- Known Linux Rootkits Detected
- Cross-View Detection

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

- `run_vol3_plugin` — Run a Volatility3 Linux plugin and return parsed output.
- `check_syscall_hooks` — Detect hooked system calls using linux.check_syscall.
- `detect_hidden_modules` — Detect hidden kernel modules using cross-view analysis.
- `check_idt_hooks` — Check Interrupt Descriptor Table for hooks.
- `run_rkhunter` — Run rkhunter rootkit scanner on live system.
- `check_proc_sys_discrepancy` — Compare /proc/modules with /sys/module for hidden modules.
- `generate_report`

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `analyzing-linux-kernel-rootkits`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
