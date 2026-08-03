---
name: performing-ai-driven-osint-correlation
description: "Agent for performing AI-driven OSINT correlation. Collects and normalizes OSINT data from multiple sources (Sherlock, theHarvester, SpiderFoot, breach databases), performs cross-source entity resolution and.... Use when the user asks to perform ai driven osint correlation."
version: 1.0.0
tags:
  - performing
source: performing-ai-driven-osint-correlation
---

# Performing Ai Driven Osint Correlation

**Role:** Hands-on assessment  
**Audience:** pentesters, blue teamers, and DFIR practitioners  
**Primary tools:** Supported Data Sources, Correlation Confidence Scoring

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **perform** ai driven osint correlation.
- Capability: Agent for performing AI-driven OSINT correlation. Collects and normalizes OSINT data from multiple sources (Sherlock, theHarvester, SpiderFoot, breach databases), performs cross-source entity resolution and correlation, and generates unified intelligence profiles with confidence scoring.
- Goal: execute a focused security technique or assessment workflow.
- Trigger keywords: `performing, driven, osint, correlation`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Load and normalize Sherlock username enumeration results
2. Load and normalize theHarvester results
3. Load and normalize SpiderFoot scan results
4. Load and normalize breach/HIBP results
5. Load and combine findings from all OSINT sources
6. Extract unique identifiers (usernames, emails, IPs, domains) from findings
7. Perform cross-source correlation to identify linked entities
8. Generate structured OSINT correlation report

## Tools & resources

- Supported Data Sources
- Correlation Confidence Scoring

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

- `load_sherlock_results` — Load and normalize Sherlock username enumeration results.
- `load_harvester_results` — Load and normalize theHarvester results.
- `load_spiderfoot_results` — Load and normalize SpiderFoot scan results.
- `load_breach_results` — Load and normalize breach/HIBP results.
- `normalize_all_sources` — Load and combine findings from all OSINT sources.
- `extract_identifiers` — Extract unique identifiers (usernames, emails, IPs, domains) from findings.
- `correlate_findings` — Perform cross-source correlation to identify linked entities.
- `generate_report` — Generate structured OSINT correlation report.
- `generate_markdown_report` — Generate a Markdown intelligence profile from the report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `performing-ai-driven-osint-correlation`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
