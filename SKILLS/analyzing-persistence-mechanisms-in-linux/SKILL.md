---
name: analyzing-persistence-mechanisms-in-linux
description: "Analyze Linux persistence mechanisms: crontab, systemd, LD_PRELOAD, shell profiles, SSH keys. Use when the user asks to analyze persistence mechanisms in linux."
version: 1.0.0
tags:
  - analyzing
  - linux
source: analyzing-persistence-mechanisms-in-linux
---

# Analyzing Persistence Mechanisms in Linux

**Role:** Deep analysis  
**Audience:** analysts and investigators  
**Primary tools:** LD_PRELOAD Detection, SSH Authorized Keys Audit

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **analyze** persistence mechanisms in linux.
- Capability: Analyze Linux persistence mechanisms: crontab, systemd, LD_PRELOAD, shell profiles, SSH keys.
- Goal: extract findings, indicators, and conclusions from technical evidence.
- Trigger keywords: `analyzing, persistence, mechanisms, linux`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Scan all crontab locations for suspicious entries
2. Scan systemd service and timer units for persistence
3. Check for LD_PRELOAD hijacking
4. Scan shell profile files for injected commands
5. Audit SSH authorized_keys files for unauthorized entries
6. Generate persistence analysis report

## Tools & resources

- LD_PRELOAD Detection
- SSH Authorized Keys Audit

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

- `scan_crontabs` — Scan all crontab locations for suspicious entries.
- `scan_systemd_units` — Scan systemd service and timer units for persistence.
- `scan_ld_preload` — Check for LD_PRELOAD hijacking.
- `scan_shell_profiles` — Scan shell profile files for injected commands.
- `scan_ssh_authorized_keys` — Audit SSH authorized_keys files for unauthorized entries.
- `generate_report` — Generate persistence analysis report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `analyzing-persistence-mechanisms-in-linux`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
