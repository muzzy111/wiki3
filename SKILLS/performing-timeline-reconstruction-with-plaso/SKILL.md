---
name: performing-timeline-reconstruction-with-plaso
description: "Forensic timeline reconstruction agent using Plaso subprocess wrappers. Use when the user asks to perform timeline reconstruction with plaso."
version: 1.0.0
tags:
  - performing
  - threat-intel
source: performing-timeline-reconstruction-with-plaso
---

# Performing Timeline Reconstruction with Plaso

**Role:** Hands-on assessment  
**Audience:** pentesters, blue teamers, and DFIR practitioners  
**Primary tools:** External Tools Required, Default Parsers, Output Files

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **perform** timeline reconstruction with plaso.
- Capability: Forensic timeline reconstruction agent using Plaso subprocess wrappers.
- Goal: execute a focused security technique or assessment workflow.
- Trigger keywords: `performing, timeline, reconstruction, plaso`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Check that log2timeline.py and psort.py are available
2. Execute log2timeline.py to generate Plaso storage file
3. Export timeline from Plaso storage using psort.py
4. Create a Plaso filter file for targeted parsing
5. Analyze exported timeline CSV for patterns and anomalies
6. Export events within a specific incident time window
7. Run the full timeline reconstruction pipeline

## Tools & resources

- External Tools Required
- Default Parsers
- Output Files

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

- `verify_plaso_installed` — Check that log2timeline.py and psort.py are available.
- `run_log2timeline` — Execute log2timeline.py to generate Plaso storage file.
- `run_psort_export` — Export timeline from Plaso storage using psort.py.
- `create_filter_file` — Create a Plaso filter file for targeted parsing.
- `analyze_timeline_csv` — Analyze exported timeline CSV for patterns and anomalies.
- `generate_incident_window` — Export events within a specific incident time window.
- `full_pipeline` — Run the full timeline reconstruction pipeline.
- `print_report`

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `performing-timeline-reconstruction-with-plaso`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
