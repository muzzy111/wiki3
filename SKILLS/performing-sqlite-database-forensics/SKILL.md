---
name: performing-sqlite-database-forensics
description: "Agent for SQLite database forensics. Parses SQLite file headers, analyzes freelist pages for deleted records, examines WAL files, decodes browser/app timestamps, and extracts evidence from common forensic databases. Use when the user asks to perform sqlite database forensics."
version: 1.0.0
tags:
  - performing
  - forensics
source: performing-sqlite-database-forensics
---

# Performing Sqlite Database Forensics

**Role:** Hands-on assessment  
**Audience:** pentesters, blue teamers, and DFIR practitioners  
**Primary tools:** DB Browser for SQLite, sqlcipher, Belkasoft Evidence Center, Exponent SQLite Explorer

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **perform** sqlite database forensics.
- Capability: Agent for SQLite database forensics. Parses SQLite file headers, analyzes freelist pages for deleted records, examines WAL files, decodes browser/app timestamps, and extracts evidence from common forensic databases.
- Goal: execute a focused security technique or assessment workflow.
- Trigger keywords: `performing, sqlite, database, forensics`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Confirm scope, authorization, and safety constraints
2. Prepare tooling and environment for sqlite database forensics
3. Execute the technique methodically and record evidence
4. Validate outcomes and eliminate false paths
5. Report results with clear remediation guidance

## Key concepts

- NIST SP 800-86: Guide to Integrating Forensic Techniques
- SWGDE Best Practices for Mobile Device Forensics
- DB Browser for SQLite: Open-source GUI editor
- sqlcipher: Encrypted SQLite database handling
- Belkasoft Evidence Center: Commercial SQLite forensic analysis
- Exponent SQLite Explorer: Forensic SQLite viewer with timestamp auto-detection
- FORC (Forensic Operations for Recognizing SQLite Content): Automated Android extraction
- Chrome History: %LOCALAPPDATA%\Google\Chrome\User Data\Default\History

## Tools & resources

- DB Browser for SQLite
- sqlcipher
- Belkasoft Evidence Center
- Exponent SQLite Explorer

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

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `performing-sqlite-database-forensics`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
