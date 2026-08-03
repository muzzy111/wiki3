---
name: building-soc-playbook-for-ransomware
description: "Ransomware Playbook Automation Agent - Automates SOC ransomware response steps. Use when the user asks to build soc playbook for ransomware."
version: 1.0.0
tags:
  - building
  - malware
  - incident-response
  - ransomware
source: building-soc-playbook-for-ransomware
---

# Building SOC Playbook for Ransomware

**Role:** Capability building  
**Audience:** SOC leads, IR managers, and security engineers  
**Primary tools:** Arguments, Key Functions, External APIs Used

## When to use

- The user wants to **build** soc playbook for ransomware.
- Capability: Ransomware Playbook Automation Agent - Automates SOC ransomware response steps.
- Goal: design and stand up an operational security capability or process.
- Trigger keywords: `building, playbook, ransomware`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Upload encrypted file sample to ID Ransomware for variant identification
2. Check No More Ransom Project for available decryptors
3. Query MalwareBazaar for IOC details by SHA-256 hash
4. Isolate a compromised host via CrowdStrike Falcon API
5. Search Splunk for IOC matches across the enterprise
6. Generate a structured ransomware incident response report
7. Extract IOCs from a ransomware sample file hash

## Tools & resources

- Arguments
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

- `check_id_ransomware` — Upload encrypted file sample to ID Ransomware for variant identification.
- `query_nomoreransom` — Check No More Ransom Project for available decryptors.
- `query_malwarebazaar_hash` — Query MalwareBazaar for IOC details by SHA-256 hash.
- `isolate_host_crowdstrike` — Isolate a compromised host via CrowdStrike Falcon API.
- `search_iocs_splunk` — Search Splunk for IOC matches across the enterprise.
- `generate_ir_report` — Generate a structured ransomware incident response report.
- `collect_iocs_from_sample` — Extract IOCs from a ransomware sample file hash.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `building-soc-playbook-for-ransomware`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
