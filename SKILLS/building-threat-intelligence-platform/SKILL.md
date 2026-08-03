---
name: building-threat-intelligence-platform
description: "Threat intelligence platform builder. Core TIP components: STIX/TAXII ingestion, indicator lifecycle management, confidence scoring, sharing groups, and intelligence dissemination. Use when the user asks to build threat intelligence platform."
version: 1.0.0
tags:
  - building
  - threat-intel
source: building-threat-intelligence-platform
---

# Building Threat Intelligence Platform

**Role:** Capability building  
**Audience:** SOC leads, IR managers, and security engineers  
**Primary tools:** STIX 2.1 Indicator Object, OpenCTI GraphQL API, MISP REST API, TIP Architecture Standards, Platform Component Standards

## When to use

- The user wants to **build** threat intelligence platform.
- Capability: Threat intelligence platform builder. Core TIP components: STIX/TAXII ingestion, indicator lifecycle management, confidence scoring, sharing groups, and intelligence dissemination.
- Goal: design and stand up an operational security capability or process.
- Trigger keywords: `building, threat, intelligence, platform`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Classify indicator type from raw value
2. Create a STIX 2.1 Indicator object
3. Convert TLP label to STIX marking definition ID
4. Calculate indicator confidence score (0-100)
5. Build STIX 2.1 Bundle from list of indicators
6. Generate TIP status report

## Key concepts

- STIX 2.1: Native data model for CTI representation
- TAXII 2.1: Transport protocol for CTI sharing
- MITRE ATT&CK: Technique taxonomy for TTP mapping
- Diamond Model: Intrusion analysis framework
- Kill Chain: Lockheed Martin Cyber Kill Chain for attack phase tracking
- MISP Sync Protocol: Push/Pull over HTTPS with API key auth
- OpenCTI Connectors: RabbitMQ-based message queue for async processing
- Cortex Analyzers: Docker-based analyzers with standardized I/O

## Tools & resources

- STIX 2.1 Indicator Object
- OpenCTI GraphQL API
- MISP REST API
- TIP Architecture Standards
- Platform Component Standards

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

- `classify_indicator` — Classify indicator type from raw value.
- `create_stix_indicator` — Create a STIX 2.1 Indicator object.
- `tlp_to_marking_ref` — Convert TLP label to STIX marking definition ID.
- `calculate_indicator_score` — Calculate indicator confidence score (0-100).
- `build_stix_bundle` — Build STIX 2.1 Bundle from list of indicators.
- `generate_tip_report` — Generate TIP status report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `building-threat-intelligence-platform`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
