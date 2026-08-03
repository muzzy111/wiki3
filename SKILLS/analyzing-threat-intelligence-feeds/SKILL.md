---
name: analyzing-threat-intelligence-feeds
description: "Agent for analyzing threat intelligence feeds via TAXII 2.1 and STIX 2.1. Use when the user asks to analyze threat intelligence feeds."
version: 1.0.0
tags:
  - analyzing
  - threat-intel
source: analyzing-threat-intelligence-feeds
---

# Analyzing Threat Intelligence Feeds

**Role:** Deep analysis  
**Audience:** analysts and investigators  
**Primary tools:** taxii2-client

## When to use

- The user wants to **analyze** threat intelligence feeds.
- Capability: Agent for analyzing threat intelligence feeds via TAXII 2.1 and STIX 2.1.
- Goal: extract findings, indicators, and conclusions from technical evidence.
- Trigger keywords: `analyzing, threat, intelligence, feeds`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Discover TAXII 2.1 server and list available API roots and collections
2. Fetch STIX indicators from a TAXII 2.1 collection
3. Convert a raw IOC into a STIX 2.1 Indicator object
4. Deduplicate indicators by pattern value
5. Score feed quality based on indicator attributes
6. Export indicators as a STIX 2.1 bundle JSON file
7. Auto-detect IOC type from value

## Tools & resources

- taxii2-client

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

- `discover_taxii_server` — Discover TAXII 2.1 server and list available API roots and collections.
- `fetch_indicators` — Fetch STIX indicators from a TAXII 2.1 collection.
- `normalize_to_stix` — Convert a raw IOC into a STIX 2.1 Indicator object.
- `deduplicate_indicators` — Deduplicate indicators by pattern value.
- `score_feed_quality` — Score feed quality based on indicator attributes.
- `export_stix_bundle` — Export indicators as a STIX 2.1 bundle JSON file.
- `classify_ioc_type` — Auto-detect IOC type from value.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `analyzing-threat-intelligence-feeds`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
