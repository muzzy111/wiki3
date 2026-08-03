---
name: performing-credential-access-with-lazagne
description: "LaZagne credential access detection agent. Detects evidence of LaZagne credential harvesting tool execution on endpoints by scanning for process artifacts, file system indicators, and Windows event log entries.... Use when the user asks to perform credential access with lazagne."
version: 1.0.0
tags:
  - performing
source: performing-credential-access-with-lazagne
---

# Performing Credential Access with Lazagne

**Role:** Hands-on assessment  
**Audience:** pentesters, blue teamers, and DFIR practitioners  
**Primary tools:** Available Modules, Official Resources, Detection References

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **perform** credential access with lazagne.
- Capability: LaZagne credential access detection agent. Detects evidence of LaZagne credential harvesting tool execution on endpoints by scanning for process artifacts, file system indicators, and Windows event log entries associated with credential dumping. Used for defensive detection and incident response, not offensive use.
- Goal: execute a focused security technique or assessment workflow.
- Trigger keywords: `performing, credential, access, lazagne`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Scan file system for LaZagne artifacts
2. Check Windows Security event logs for LaZagne-related activity
3. Check if credential stores have been recently accessed unusually
4. Print detection summary

## Key concepts

- Windows Event 5379: Credential Manager credentials were read
- DPAPI CryptUnprotectData monitoring
- Chrome Login Data file access monitoring

## Tools & resources

- Available Modules
- Official Resources
- Detection References

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
| `assets/` | Templates, checklists, and report scaffolds |

## Automation entry points

- `scan_filesystem_indicators` — Scan file system for LaZagne artifacts.
- `check_windows_event_logs` — Check Windows Security event logs for LaZagne-related activity.
- `check_credential_store_integrity` — Check if credential stores have been recently accessed unusually.
- `format_summary` — Print detection summary.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `performing-credential-access-with-lazagne`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
