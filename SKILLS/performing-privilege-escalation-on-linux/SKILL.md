---
name: performing-privilege-escalation-on-linux
description: "Agent for performing Linux privilege escalation enumeration — authorized testing only. Use when the user asks to perform privilege escalation on linux."
version: 1.0.0
tags:
  - performing
  - linux
source: performing-privilege-escalation-on-linux
---

# Performing Privilege Escalation on Linux

**Role:** Hands-on assessment  
**Audience:** pentesters, blue teamers, and DFIR practitioners  
**Primary tools:** Common Kernel CVEs, CIS Benchmark - Linux

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **perform** privilege escalation on linux.
- Capability: Agent for performing Linux privilege escalation enumeration — authorized testing only.
- Goal: execute a focused security technique or assessment workflow.
- Trigger keywords: `performing, privilege, escalation, linux`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Gather basic system information for privilege escalation assessment
2. Check sudo permissions for current user
3. Find SUID/SGID binaries that may allow privilege escalation
4. Find world-writable files and directories of interest
5. Enumerate cron jobs for privilege escalation opportunities
6. Find binaries with Linux capabilities set
7. Run complete privilege escalation enumeration

## Key concepts

- Ensure permissions on /etc/crontab are configured (600 root:root)
- Ensure SUID/SGID files are reviewed regularly
- Ensure sudo is configured to use a pseudo-TTY
- Ensure no world-writable files exist in system paths

## Tools & resources

- Common Kernel CVEs
- CIS Benchmark - Linux

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

- `enumerate_system_info` — Gather basic system information for privilege escalation assessment.
- `check_sudo_permissions` — Check sudo permissions for current user.
- `find_suid_binaries` — Find SUID/SGID binaries that may allow privilege escalation.
- `check_writable_files` — Find world-writable files and directories of interest.
- `check_cron_jobs` — Enumerate cron jobs for privilege escalation opportunities.
- `check_capabilities` — Find binaries with Linux capabilities set.
- `full_enumeration` — Run complete privilege escalation enumeration.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `performing-privilege-escalation-on-linux`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
