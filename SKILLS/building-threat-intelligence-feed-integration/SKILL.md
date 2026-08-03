---
name: building-threat-intelligence-feed-integration
description: "Threat Intelligence Feed Integration Agent - Ingests STIX/TAXII and open-source TI feeds. Use when the user asks to build threat intelligence feed integration."
version: 1.0.0
tags:
  - building
  - threat-intel
source: building-threat-intelligence-feed-integration
---

# Building Threat Intelligence Feed Integration

**Role:** Capability building  
**Audience:** SOC leads, IR managers, and security engineers  
**Primary tools:** Key Functions, External APIs Used

## When to use

- The user wants to **build** threat intelligence feed integration.
- Capability: Threat Intelligence Feed Integration Agent - Ingests STIX/TAXII and open-source TI feeds.
- Goal: design and stand up an operational security capability or process.
- Trigger keywords: `building, threat, intelligence, feed, integration`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Ingest indicators from a TAXII 2.1 server collection
2. Ingest recent malicious URLs from Abuse.ch URLhaus
3. Ingest C2 IP blocklist from Abuse.ch Feodo Tracker
4. Convert raw indicators to STIX 2.1 Indicator objects
5. Deduplicate indicators across feeds by type:value hash
6. Export STIX 2.1 bundle to JSON file
7. Push indicators to Splunk ES threat intelligence framework

## Tools & resources

- Key Functions
- External APIs Used

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

- `ingest_taxii_feed` — Ingest indicators from a TAXII 2.1 server collection.
- `ingest_urlhaus_feed` — Ingest recent malicious URLs from Abuse.ch URLhaus.
- `ingest_feodotracker` — Ingest C2 IP blocklist from Abuse.ch Feodo Tracker.
- `normalize_to_stix` — Convert raw indicators to STIX 2.1 Indicator objects.
- `deduplicate` — Deduplicate indicators across feeds by type:value hash.
- `export_stix_bundle` — Export STIX 2.1 bundle to JSON file.
- `push_to_splunk_ti` — Push indicators to Splunk ES threat intelligence framework.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `building-threat-intelligence-feed-integration`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
