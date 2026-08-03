---
name: performing-endpoint-forensics-investigation
description: "Agent for performing endpoint forensics investigation on Windows systems. Use when the user asks to perform endpoint forensics investigation."
version: 1.0.0
tags:
  - performing
  - forensics
source: performing-endpoint-forensics-investigation
---

# Performing Endpoint Forensics Investigation

**Role:** Hands-on assessment  
**Audience:** pentesters, blue teamers, and DFIR practitioners  
**Primary tools:** Primary Standards, Compliance Mappings, Tool References

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **perform** endpoint forensics investigation.
- Capability: Agent for performing endpoint forensics investigation on Windows systems.
- Goal: execute a focused security technique or assessment workflow.
- Trigger keywords: `performing, endpoint, forensics, investigation`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Collect basic system information for forensic context
2. Collect running processes with parent PIDs and command lines
3. Collect active network connections
4. Collect common persistence locations
5. Calculate MD5, SHA1, SHA256 hashes of a file for evidence integrity
6. Run full endpoint forensic triage collection

## Key concepts

- Scope: Forensic process for digital evidence collection, examination, and analysis
- Scope: Identification, collection, acquisition, and preservation of digital evidence
- Scope: Best practices for evidence collection including order of volatility

## Tools & resources

- Primary Standards
- Compliance Mappings
- Tool References

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

- `collect_system_info` — Collect basic system information for forensic context.
- `collect_running_processes` — Collect running processes with parent PIDs and command lines.
- `collect_network_connections` — Collect active network connections.
- `collect_autoruns` — Collect common persistence locations.
- `hash_file` — Calculate MD5, SHA1, SHA256 hashes of a file for evidence integrity.
- `full_triage` — Run full endpoint forensic triage collection.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `performing-endpoint-forensics-investigation`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
