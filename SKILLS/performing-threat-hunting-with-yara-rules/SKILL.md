---
name: performing-threat-hunting-with-yara-rules
description: "Threat hunting agent using YARA rules. Scans files and directories with yara-python, supports rule compilation, multi-rule scanning, and structured JSON match output. Use when the user asks to perform threat hunting with yara rules."
version: 1.0.0
tags:
  - performing
  - threat-intel
source: performing-threat-hunting-with-yara-rules
---

# Performing Threat Hunting with YARA Rules

**Role:** Hands-on assessment  
**Audience:** pentesters, blue teamers, and DFIR practitioners  
**Primary tools:** YARA, Match Object Fields, Community Rule Sources

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **perform** threat hunting with yara rules.
- Capability: Threat hunting agent using YARA rules. Scans files and directories with yara-python, supports rule compilation, multi-rule scanning, and structured JSON match output.
- Goal: execute a focused security technique or assessment workflow.
- Trigger keywords: `performing, threat, hunting, yara, rules`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Compile YARA rules from strings or directory
2. Scan a single file with compiled YARA rules
3. Recursively scan directory with YARA rules

## Tools & resources

- YARA
- Match Object Fields
- Community Rule Sources

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

- `compile_rules` — Compile YARA rules from strings or directory.
- `scan_file` — Scan a single file with compiled YARA rules.
- `scan_directory` — Recursively scan directory with YARA rules.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `performing-threat-hunting-with-yara-rules`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
