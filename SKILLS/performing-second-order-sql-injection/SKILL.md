---
name: performing-second-order-sql-injection
description: "Second-Order SQL Injection agent — detects stored SQL injection payloads by analyzing database content and tracing data flow from input to secondary query execution points. Use when the user asks to perform second order sql injection."
version: 1.0.0
tags:
  - performing
  - threat-intel
  - appsec
source: performing-second-order-sql-injection
---

# Performing Second Order SQL Injection

**Role:** Hands-on assessment  
**Audience:** pentesters, blue teamers, and DFIR practitioners  
**Primary tools:** Attack Overview, Data Flow Tracing, Prevention

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **perform** second order sql injection.
- Capability: Second-Order SQL Injection agent — detects stored SQL injection payloads by analyzing database content and tracing data flow from input to secondary query execution points.
- Goal: execute a focused security technique or assessment workflow.
- Trigger keywords: `performing, second, order, injection`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Scan a database dump (JSON format) for stored SQL injection payloads
2. Scan source code for second-order SQL injection sinks (string concatenation with DB data)
3. Correlate stored payloads with code sinks to identify complete attack paths
4. Run analysis and build consolidated report

## Tools & resources

- Attack Overview
- Data Flow Tracing
- Prevention

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

- `scan_database_values` — Scan a database dump (JSON format) for stored SQL injection payloads.
- `scan_source_code` — Scan source code for second-order SQL injection sinks (string concatenation with DB data).
- `trace_data_flow` — Correlate stored payloads with code sinks to identify complete attack paths.
- `generate_report` — Run analysis and build consolidated report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `performing-second-order-sql-injection`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
