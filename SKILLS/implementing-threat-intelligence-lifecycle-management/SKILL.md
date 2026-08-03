---
name: implementing-threat-intelligence-lifecycle-management
description: "Threat intelligence lifecycle management agent. Manages the threat intelligence lifecycle: collection from feeds, processing/normalization of IOCs, analysis/enrichment via VirusTotal and AbuseIPDB, dissemination to.... Use when the user asks to implement threat intelligence lifecycle management."
version: 1.0.0
tags:
  - implementing
  - threat-intel
source: implementing-threat-intelligence-lifecycle-management
---

# Implementing Threat Intelligence Lifecycle Management

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** MISP API Operations, STIX 2.1 Intelligence Objects, Intelligence Lifecycle Phases

## When to use

- The user wants to **implement** threat intelligence lifecycle management.
- Capability: Threat intelligence lifecycle management agent. Manages the threat intelligence lifecycle: collection from feeds, processing/normalization of IOCs, analysis/enrichment via VirusTotal and AbuseIPDB, dissemination to SIEM/firewalls, and tracking of IOC aging and confidence scoring.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, threat, intelligence, lifecycle, management`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Extract IOCs from unstructured text
2. Load IOCs from a file (JSON, CSV, or plain text)
3. Normalize IOC into standard format
4. Enrich IOC via VirusTotal API v3
5. Calculate confidence score for an IOC (0-100)
6. Print lifecycle report

## Tools & resources

- MISP API Operations
- STIX 2.1 Intelligence Objects
- Intelligence Lifecycle Phases

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

- `extract_iocs` — Extract IOCs from unstructured text.
- `load_ioc_feed` — Load IOCs from a file (JSON, CSV, or plain text).
- `normalize_ioc` — Normalize IOC into standard format.
- `enrich_ioc_virustotal` — Enrich IOC via VirusTotal API v3.
- `calculate_confidence` — Calculate confidence score for an IOC (0-100).
- `format_summary` — Print lifecycle report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-threat-intelligence-lifecycle-management`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
