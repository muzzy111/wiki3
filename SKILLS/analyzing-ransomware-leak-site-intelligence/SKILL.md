---
name: analyzing-ransomware-leak-site-intelligence
description: "Ransomware leak site intelligence analysis agent. Monitors and analyzes ransomware group leak site data for threat intelligence, victim tracking, and TTI (time-to-intelligence) reporting. Use when the user asks to analyze ransomware leak site intelligence."
version: 1.0.0
tags:
  - analyzing
  - malware
  - ransomware
source: analyzing-ransomware-leak-site-intelligence
---

# Analyzing Ransomware Leak Site Intelligence

**Role:** Deep analysis  
**Audience:** analysts and investigators  
**Primary tools:** ransomware.live API, ransomlook.io API, ID Ransomware, Intelligence Collection Framework, STIX Representation

## When to use

- The user wants to **analyze** ransomware leak site intelligence.
- Capability: Ransomware leak site intelligence analysis agent. Monitors and analyzes ransomware group leak site data for threat intelligence, victim tracking, and TTI (time-to-intelligence) reporting.
- Goal: extract findings, indicators, and conclusions from technical evidence.
- Trigger keywords: `analyzing, ransomware, leak, site, intelligence`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Query ransomwatch or ransomware.live API for leak site data
2. Query ransomlook.io API for group information
3. Analyze victim listing data for intelligence
4. Search victims by name, domain, or sector
5. Assess activity level of a specific ransomware group
6. Generate ransomware threat intelligence report

## Tools & resources

- ransomware.live API
- ransomlook.io API
- ID Ransomware
- Intelligence Collection Framework
- STIX Representation

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

- `query_ransomwatch_api` — Query ransomwatch or ransomware.live API for leak site data.
- `query_ransomlook_group` — Query ransomlook.io API for group information.
- `analyze_victim_data` — Analyze victim listing data for intelligence.
- `search_victims` — Search victims by name, domain, or sector.
- `assess_group_activity` — Assess activity level of a specific ransomware group.
- `generate_intelligence_report` — Generate ransomware threat intelligence report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `analyzing-ransomware-leak-site-intelligence`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
