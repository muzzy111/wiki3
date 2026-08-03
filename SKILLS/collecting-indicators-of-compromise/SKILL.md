---
name: collecting-indicators-of-compromise
description: "IOC Collection Agent - Extracts, enriches, and exports indicators of compromise. Use when the user asks to collecting indicators of compromise."
version: 1.0.0
tags:
  - collecting
  - threat-intel
source: collecting-indicators-of-compromise
---

# Collecting Indicators of Compromise

**Role:** Security workflow  
**Audience:** security practitioners  
**Primary tools:** Key Functions, External APIs Used, IOC Types Supported

## When to use

- The user wants to **collect** indicators of compromise.
- Capability: IOC Collection Agent - Extracts, enriches, and exports indicators of compromise.
- Goal: complete the task.
- Trigger keywords: `collecting, indicators, compromise`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Extract IOCs (IPs, domains, hashes, URLs) from unstructured text
2. Extract IOCs from a file (text report, log file, etc.)
3. Enrich an IP address using VirusTotal API
4. Enrich a file hash using MalwareBazaar API
5. Check domain reputation via AbuseIPDB
6. Assign confidence score (0-100) based on enrichment results
7. Export IOCs as a STIX 2.1 bundle
8. Print a formatted IOC report

## Tools & resources

- Key Functions
- External APIs Used
- IOC Types Supported

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

- `extract_iocs_from_text` — Extract IOCs (IPs, domains, hashes, URLs) from unstructured text.
- `extract_iocs_from_file` — Extract IOCs from a file (text report, log file, etc.).
- `enrich_ip_virustotal` — Enrich an IP address using VirusTotal API.
- `enrich_hash_malwarebazaar` — Enrich a file hash using MalwareBazaar API.
- `enrich_domain_abuseipdb` — Check domain reputation via AbuseIPDB.
- `score_ioc` — Assign confidence score (0-100) based on enrichment results.
- `export_stix_bundle` — Export IOCs as a STIX 2.1 bundle.
- `generate_ioc_report` — Print a formatted IOC report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `collecting-indicators-of-compromise`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
