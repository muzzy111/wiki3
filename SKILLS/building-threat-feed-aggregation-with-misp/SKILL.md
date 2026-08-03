---
name: building-threat-feed-aggregation-with-misp
description: "Threat Feed Aggregation Agent - Aggregates and correlates threat intelligence feeds using MISP. Use when the user asks to build threat feed aggregation with misp."
version: 1.0.0
tags:
  - building
  - threat-intel
source: building-threat-feed-aggregation-with-misp
---

# Building Threat Feed Aggregation with MISP

**Role:** Capability building  
**Audience:** SOC leads, IR managers, and security engineers  
**Primary tools:** MISP, Common Feed Sources, Feed Configuration Fields

## When to use

- The user wants to **build** threat feed aggregation with misp.
- Capability: Threat Feed Aggregation Agent - Aggregates and correlates threat intelligence feeds using MISP.
- Goal: design and stand up an operational security capability or process.
- Trigger keywords: `building, threat, feed, aggregation, misp`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Make authenticated MISP API request
2. List configured MISP feeds
3. Fetch and cache data from a specific feed
4. Search MISP attributes across all events
5. Aggregate statistics across all feeds
6. Correlate an IOC across all feed events
7. Assess health and coverage of configured feeds
8. Generate threat feed aggregation report

## Tools & resources

- MISP
- Common Feed Sources
- Feed Configuration Fields

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

- `misp_request` — Make authenticated MISP API request.
- `list_feeds` — List configured MISP feeds.
- `fetch_feed_data` — Fetch and cache data from a specific feed.
- `search_attributes` — Search MISP attributes across all events.
- `aggregate_feed_statistics` — Aggregate statistics across all feeds.
- `correlate_across_feeds` — Correlate an IOC across all feed events.
- `assess_feed_health` — Assess health and coverage of configured feeds.
- `generate_report` — Generate threat feed aggregation report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `building-threat-feed-aggregation-with-misp`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
