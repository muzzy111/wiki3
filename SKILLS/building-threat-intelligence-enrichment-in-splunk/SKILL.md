---
name: building-threat-intelligence-enrichment-in-splunk
description: "Threat intelligence enrichment pipeline for Splunk. Manages threat intel lookups, KV store collections, and modular inputs for enriching Splunk events with IOC context from MISP, OTX, and CSV feeds. Use when the user asks to build threat intelligence enrichment in splunk."
version: 1.0.0
tags:
  - building
  - threat-intel
source: building-threat-intelligence-enrichment-in-splunk
---

# Building Threat Intelligence Enrichment in Splunk

**Role:** Capability building  
**Audience:** SOC leads, IR managers, and security engineers  
**Primary tools:** Splunk, SPL Threat Matching, AlienVault OTX API, Threat Intelligence Standards

## When to use

- The user wants to **build** threat intelligence enrichment in splunk.
- Capability: Threat intelligence enrichment pipeline for Splunk. Manages threat intel lookups, KV store collections, and modular inputs for enriching Splunk events with IOC context from MISP, OTX, and CSV feeds.
- Goal: design and stand up an operational security capability or process.
- Trigger keywords: `building, threat, intelligence, enrichment, splunk`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Fetch IOCs from AlienVault OTX pulse
2. Convert IOC list to Splunk KV store format
3. Generate CSV file for Splunk lookup table
4. Build SPL query for threat intelligence correlation

## Key concepts

- Version 2.1 is the current standard for representing threat intelligence
- Defines objects: Indicator, Malware, Attack Pattern, Threat Actor, Campaign
- Used as the interchange format between TI platforms and SIEMs
- Transport mechanism for STIX data
- TAXII 2.1 provides RESTful API for feed collection
- Supports Collection and Channel sharing models
- Mandiant's open framework for sharing IOCs
- XML-based format for indicator definitions

## Tools & resources

- Splunk
- SPL Threat Matching
- AlienVault OTX API
- Threat Intelligence Standards

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

- `fetch_otx_pulse_iocs` — Fetch IOCs from AlienVault OTX pulse.
- `convert_iocs_to_splunk_lookup` — Convert IOC list to Splunk KV store format.
- `generate_splunk_lookup_csv` — Generate CSV file for Splunk lookup table.
- `build_spl_correlation_search` — Build SPL query for threat intelligence correlation.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `building-threat-intelligence-enrichment-in-splunk`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
