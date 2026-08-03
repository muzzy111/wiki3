---
name: processing-stix-taxii-feeds
description: "STIX/TAXII threat intelligence feed processor using taxii2-client and stix2. Use when the user asks to processing stix taxii feeds."
version: 1.0.0
tags:
  - processing
source: processing-stix-taxii-feeds
---

# Processing STIX Taxii Feeds

**Role:** Security workflow  
**Audience:** security practitioners  
**Primary tools:** STIX Object Types Handled, Environment Variables

## When to use

- The user wants to **process** stix taxii feeds.
- Capability: STIX/TAXII threat intelligence feed processor using taxii2-client and stix2.
- Goal: complete the task.
- Trigger keywords: `processing, stix, taxii, feeds`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Discover TAXII server API roots and collections
2. Fetch STIX objects from a TAXII collection with pagination
3. Parse and validate a STIX 2.1 bundle, categorizing objects by type
4. Extract actionable IOCs from parsed STIX indicators
5. Map relationships between STIX objects

## Tools & resources

- STIX Object Types Handled
- Environment Variables

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

- `discover_server` — Discover TAXII server API roots and collections.
- `fetch_collection` — Fetch STIX objects from a TAXII collection with pagination.
- `parse_stix_bundle` — Parse and validate a STIX 2.1 bundle, categorizing objects by type.
- `extract_iocs` — Extract actionable IOCs from parsed STIX indicators.
- `build_relationship_graph` — Map relationships between STIX objects.
- `print_report`

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `processing-stix-taxii-feeds`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
