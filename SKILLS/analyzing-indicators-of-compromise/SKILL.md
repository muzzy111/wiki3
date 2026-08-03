---
name: analyzing-indicators-of-compromise
description: "IOC analysis and enrichment agent using VirusTotal, AbuseIPDB, and MalwareBazaar APIs. Use when the user asks to analyze indicators of compromise."
version: 1.0.0
tags:
  - analyzing
source: analyzing-indicators-of-compromise
---

# Analyzing Indicators of Compromise

**Role:** Deep analysis  
**Audience:** analysts and investigators  
**Primary tools:** VirusTotal API v3, AbuseIPDB API v2, URLScan.io API, Shodan API, IOC Confidence Scoring Framework, Defanging Convention

## When to use

- The user wants to **analyze** indicators of compromise.
- Capability: IOC analysis and enrichment agent using VirusTotal, AbuseIPDB, and MalwareBazaar APIs.
- Goal: extract findings, indicators, and conclusions from technical evidence.
- Trigger keywords: `analyzing, indicators, compromise`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Classify an IOC by type: ipv4, domain, url, sha256, sha1, md5, email
2. Defang an IOC for safe documentation
3. Refang a defanged IOC for querying APIs
4. Check if an IP is RFC 1918 private
5. Query VirusTotal for a file hash
6. Query VirusTotal for domain reputation
7. Query AbuseIPDB for IP reputation
8. Query MalwareBazaar for file hash information

## Tools & resources

- VirusTotal API v3
- AbuseIPDB API v2
- URLScan.io API
- Shodan API
- IOC Confidence Scoring Framework
- Defanging Convention

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

- `classify_ioc` — Classify an IOC by type: ipv4, domain, url, sha256, sha1, md5, email.
- `defang_ioc` — Defang an IOC for safe documentation.
- `refang_ioc` — Refang a defanged IOC for querying APIs.
- `is_private_ip` — Check if an IP is RFC 1918 private.
- `query_virustotal_hash` — Query VirusTotal for a file hash.
- `query_virustotal_domain` — Query VirusTotal for domain reputation.
- `query_abuseipdb` — Query AbuseIPDB for IP reputation.
- `query_malwarebazaar` — Query MalwareBazaar for file hash information.
- `score_ioc` — Assign a confidence score and disposition to an IOC.
- `enrich_ioc` — Enrich a single IOC with multi-source intelligence.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `analyzing-indicators-of-compromise`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
