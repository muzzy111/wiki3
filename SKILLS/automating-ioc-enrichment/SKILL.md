---
name: automating-ioc-enrichment
description: "Agent for automating IOC enrichment with VirusTotal, AbuseIPDB, and STIX. Use when the user asks to automate ioc enrichment."
version: 1.0.0
tags:
  - automating
  - threat-intel
source: automating-ioc-enrichment
---

# Automating IOC Enrichment

**Role:** Automation  
**Audience:** SOC engineers and detection engineers  
**Primary tools:** VirusTotal API v3, AbuseIPDB API v2, Shodan API, STIX 2.1 Export, Rate Limits

## When to use

- The user wants to **automate** ioc enrichment.
- Capability: Agent for automating IOC enrichment with VirusTotal, AbuseIPDB, and STIX.
- Goal: turn a repeatable security workflow into a reliable pipeline.
- Trigger keywords: `automating, enrichment`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Auto-detect IOC type from value
2. Enrich an IP address via VirusTotal API v3
3. Enrich a file hash via VirusTotal API v3
4. Enrich a domain via VirusTotal API v3
5. Check an IP against AbuseIPDB
6. Calculate composite confidence score from enrichment sources
7. Enrich a single IOC through all available sources
8. Export enriched IOCs as STIX 2.1 indicators

## Tools & resources

- VirusTotal API v3
- AbuseIPDB API v2
- Shodan API
- STIX 2.1 Export
- Rate Limits

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

- `classify_ioc` — Auto-detect IOC type from value.
- `enrich_ip_virustotal` — Enrich an IP address via VirusTotal API v3.
- `enrich_hash_virustotal` — Enrich a file hash via VirusTotal API v3.
- `enrich_domain_virustotal` — Enrich a domain via VirusTotal API v3.
- `enrich_ip_abuseipdb` — Check an IP against AbuseIPDB.
- `compute_confidence` — Calculate composite confidence score from enrichment sources.
- `enrich_ioc` — Enrich a single IOC through all available sources.
- `export_stix_indicators` — Export enriched IOCs as STIX 2.1 indicators.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `automating-ioc-enrichment`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
