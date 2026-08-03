---
name: building-ioc-enrichment-pipeline-with-opencti
description: "IOC enrichment pipeline using OpenCTI and the pycti Python client. Queries OpenCTI's GraphQL API to enrich indicators of compromise with threat context, relationships, and scoring from connected intelligence sources. Use when the user asks to build ioc enrichment pipeline with opencti."
version: 1.0.0
tags:
  - building
  - threat-intel
source: building-ioc-enrichment-pipeline-with-opencti
---

# Building IOC Enrichment Pipeline with OpenCTI

**Role:** Capability building  
**Audience:** SOC leads, IR managers, and security engineers  
**Primary tools:** OpenCTI, pycti, Enrichment Service APIs

## When to use

- The user wants to **build** ioc enrichment pipeline with opencti.
- Capability: IOC enrichment pipeline using OpenCTI and the pycti Python client. Queries OpenCTI's GraphQL API to enrich indicators of compromise with threat context, relationships, and scoring from connected intelligence sources.
- Goal: design and stand up an operational security capability or process.
- Trigger keywords: `building, enrichment, pipeline, opencti`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Initialize OpenCTI API client
2. Enrich a single indicator via OpenCTI GraphQL API
3. Enrich a STIX Cyber Observable via OpenCTI
4. Get STIX relationships for an entity
5. Classify IOC type from value string
6. Build enrichment report for a list of IOCs

## Key concepts

- Indicator: Contains detection patterns (STIX patterning, YARA, Sigma)
- Malware: Represents malware families and variants
- Threat Actor: Describes adversary groups and individuals
- Campaign: Groups related intrusion activity
- Attack Pattern: Maps to MITRE ATT&CK techniques
- Infrastructure: Represents adversary-owned systems (C2, exploit kits)
- Tool: Legitimate software used by adversaries
- IPv4-Addr / IPv6-Addr: Network addresses

## Tools & resources

- OpenCTI
- pycti
- Enrichment Service APIs

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

- `init_client` — Initialize OpenCTI API client.
- `enrich_indicator` — Enrich a single indicator via OpenCTI GraphQL API.
- `enrich_observable` — Enrich a STIX Cyber Observable via OpenCTI.
- `get_relationships` — Get STIX relationships for an entity.
- `classify_ioc` — Classify IOC type from value string.
- `build_enrichment_report` — Build enrichment report for a list of IOCs.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `building-ioc-enrichment-pipeline-with-opencti`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
