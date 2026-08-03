---
name: building-ioc-defanging-and-sharing-pipeline
description: "IOC Defanging and Sharing Pipeline Agent - Defangs, enriches, and shares IOCs in STIX format. Use when the user asks to build ioc defanging and sharing pipeline."
version: 1.0.0
tags:
  - building
  - threat-intel
source: building-ioc-defanging-and-sharing-pipeline
---

# Building IOC Defanging and Sharing Pipeline

**Role:** Capability building  
**Audience:** SOC leads, IR managers, and security engineers  
**Primary tools:** IOC Defanging Rules, VirusTotal API v3, AbuseIPDB API v2, TAXII 2.1 Sharing

## When to use

- The user wants to **build** ioc defanging and sharing pipeline.
- Capability: IOC Defanging and Sharing Pipeline Agent - Defangs, enriches, and shares IOCs in STIX format.
- Goal: design and stand up an operational security capability or process.
- Trigger keywords: `building, defanging, sharing, pipeline`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Extract IOCs from raw text
2. Defang an IOC for safe sharing
3. Refang a defanged IOC back to original form
4. Enrich IOC with threat intelligence from VirusTotal and AbuseIPDB
5. Convert IOCs to STIX 2.1 bundle for sharing
6. Defang all extracted IOCs
7. Generate IOC sharing pipeline report

## Tools & resources

- IOC Defanging Rules
- VirusTotal API v3
- AbuseIPDB API v2
- TAXII 2.1 Sharing

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

- `extract_iocs` — Extract IOCs from raw text.
- `defang_ioc` — Defang an IOC for safe sharing.
- `refang_ioc` — Refang a defanged IOC back to original form.
- `enrich_ioc` — Enrich IOC with threat intelligence from VirusTotal and AbuseIPDB.
- `to_stix_bundle` — Convert IOCs to STIX 2.1 bundle for sharing.
- `defang_all` — Defang all extracted IOCs.
- `generate_report` — Generate IOC sharing pipeline report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `building-ioc-defanging-and-sharing-pipeline`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
