---
name: collecting-threat-intelligence-with-misp
description: "Threat intelligence collection agent using MISP/PyMISP. Connects to MISP instances to collect, filter, and export threat intelligence including events, attributes, and feeds via the PyMISP REST API client. Use when the user asks to collecting threat intelligence with misp."
version: 1.0.0
tags:
  - collecting
  - threat-intel
source: collecting-threat-intelligence-with-misp
---

# Collecting Threat Intelligence with MISP

**Role:** Security workflow  
**Audience:** security practitioners  
**Primary tools:** MISP, Client Initialization, Attribute Search, Common Attribute Types, Feed Management

## When to use

- The user wants to **collect** threat intelligence with misp.
- Capability: Threat intelligence collection agent using MISP/PyMISP. Connects to MISP instances to collect, filter, and export threat intelligence including events, attributes, and feeds via the PyMISP REST API client.
- Goal: complete the task.
- Trigger keywords: `collecting, threat, intelligence, misp`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Initialize PyMISP client
2. Search MISP events by tags and date
3. Extract attributes from a MISP event
4. Collect IOCs filtered by attribute type
5. List configured MISP feeds
6. Export MISP event as STIX 2.1 bundle

## Key concepts

- MISP JSON Format: Native event format used for synchronization between instances
- MISP Galaxy: Cluster-based knowledge base linked to MITRE ATT&CK, threat actors, tools
- MISP Taxonomies: Machine-readable tagging schemes (TLP, PAP, admiralty-scale, OSINT)
- MISP Warninglists: Lists of well-known indicators to reduce false positives (Alexa Top 1M, Office 365 IPs)
- Standard language for representing cyber threat intelligence
- MISP supports import/export of STIX 2.1 bundles
- Object types: Indicator, Malware, Threat Actor, Attack Pattern, Campaign, Observed Data
- Relationship types: uses, targets, attributed-to, indicates, mitigates

## Tools & resources

- MISP
- Client Initialization
- Attribute Search
- Common Attribute Types
- Feed Management

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

- `init_misp` — Initialize PyMISP client.
- `search_events` — Search MISP events by tags and date.
- `extract_attributes` — Extract attributes from a MISP event.
- `collect_iocs_by_type` — Collect IOCs filtered by attribute type.
- `list_feeds` — List configured MISP feeds.
- `export_stix2` — Export MISP event as STIX 2.1 bundle.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `collecting-threat-intelligence-with-misp`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
