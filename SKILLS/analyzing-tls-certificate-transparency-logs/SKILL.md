---
name: analyzing-tls-certificate-transparency-logs
description: "Agent for analyzing Certificate Transparency logs for phishing detection. Use when the user asks to analyze tls certificate transparency logs."
version: 1.0.0
tags:
  - analyzing
  - network
source: analyzing-tls-certificate-transparency-logs
---

# Analyzing TLS Certificate Transparency Logs

**Role:** Deep analysis  
**Audience:** analysts and investigators  
**Primary tools:** pycrtsh, Key Certificate Fields

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **analyze** tls certificate transparency logs.
- Capability: Agent for analyzing Certificate Transparency logs for phishing detection.
- Goal: extract findings, indicators, and conclusions from technical evidence.
- Trigger keywords: `analyzing, certificate, transparency, logs`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Search crt.sh for certificates matching a domain
2. Get full certificate details from crt.sh by ID
3. Query crt.sh REST API directly for certificate records
4. Compute Levenshtein distance between two strings
5. Detect typosquatting domains using Levenshtein distance
6. Find certificates issued by unauthorized Certificate Authorities
7. Find certificates issued in the last N hours
8. Identify wildcard certificates that could cover many subdomains

## Tools & resources

- pycrtsh
- Key Certificate Fields

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

- `search_certificates` — Search crt.sh for certificates matching a domain.
- `get_certificate_details` — Get full certificate details from crt.sh by ID.
- `search_crtsh_api` — Query crt.sh REST API directly for certificate records.
- `levenshtein_distance` — Compute Levenshtein distance between two strings.
- `detect_typosquatting` — Detect typosquatting domains using Levenshtein distance.
- `detect_unauthorized_cas` — Find certificates issued by unauthorized Certificate Authorities.
- `monitor_new_certificates` — Find certificates issued in the last N hours.
- `find_wildcard_certificates` — Identify wildcard certificates that could cover many subdomains.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `analyzing-tls-certificate-transparency-logs`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
