---
name: building-detection-rule-with-splunk-spl
description: "Splunk SPL Detection Rule Builder Agent - Generates and validates Splunk detection rules. Use when the user asks to build detection rule with splunk spl."
version: 1.0.0
tags:
  - building
  - threat-intel
source: building-detection-rule-with-splunk-spl
---

# Building Detection Rule with Splunk SPL

**Role:** Capability building  
**Audience:** SOC leads, IR managers, and security engineers  
**Primary tools:** Splunk, Alert Severity Levels, Industry Standards, Detection Engineering Maturity Model

## When to use

- The user wants to **build** detection rule with splunk spl.
- Capability: Splunk SPL Detection Rule Builder Agent - Generates and validates Splunk detection rules.
- Goal: design and stand up an operational security capability or process.
- Trigger keywords: `building, detection, rule, splunk`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Generate an SPL detection rule from template
2. Deploy a saved search to Splunk via REST API
3. Generate detection rule report

## Key concepts

- Primary mapping standard for detection rule categorization
- Version 18.1 (December 2025) is the latest release
- Use ATT&CK Navigator for visual coverage mapping
- Standard field naming convention for normalized data
- Data models: Authentication, Network_Traffic, Endpoint, Web, Email
- Enables cross-sourcetype correlation searches
- Log management planning and policy guidance
- Defines log collection, analysis, and retention best practices

## Tools & resources

- Splunk
- Alert Severity Levels
- Industry Standards
- Detection Engineering Maturity Model

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

- `generate_spl_rule` — Generate an SPL detection rule from template.
- `deploy_saved_search` — Deploy a saved search to Splunk via REST API.
- `generate_report` — Generate detection rule report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `building-detection-rule-with-splunk-spl`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
