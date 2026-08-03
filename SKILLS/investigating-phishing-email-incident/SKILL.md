---
name: investigating-phishing-email-incident
description: "Phishing Email Investigation Agent Analyzes reported phishing emails by parsing headers, checking URL/attachment reputation via VirusTotal and URLScan.io, and identifying impacted recipients. Use when the user asks to investigating phishing email incident."
version: 1.0.0
tags:
  - investigating
  - incident-response
  - email
source: investigating-phishing-email-incident
---

# Investigating Phishing Email Incident

**Role:** Security workflow  
**Audience:** security practitioners  
**Primary tools:** URLScan.io API, VirusTotal API v3, MalwareBazaar API

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **investigat** phishing email incident.
- Capability: Phishing Email Investigation Agent Analyzes reported phishing emails by parsing headers, checking URL/attachment reputation via VirusTotal and URLScan.io, and identifying impacted recipients.
- Goal: complete the task.
- Trigger keywords: `investigating, phishing, email, incident`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Parse an .eml file and extract investigation-relevant headers
2. Extract all URLs from email body
3. Submit URL to URLScan.io for analysis
4. Check URL reputation on VirusTotal
5. Calculate MD5 and SHA-256 hashes for an attachment
6. Look up file hash on VirusTotal
7. Compile indicators of compromise from the investigation
8. Generate phishing investigation report

## Tools & resources

- URLScan.io API
- VirusTotal API v3
- MalwareBazaar API

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

- `parse_email_headers` — Parse an .eml file and extract investigation-relevant headers.
- `extract_urls_from_email` — Extract all URLs from email body.
- `check_url_urlscan` — Submit URL to URLScan.io for analysis.
- `check_url_virustotal` — Check URL reputation on VirusTotal.
- `hash_attachment` — Calculate MD5 and SHA-256 hashes for an attachment.
- `check_hash_virustotal` — Look up file hash on VirusTotal.
- `generate_ioc_list` — Compile indicators of compromise from the investigation.
- `generate_report` — Generate phishing investigation report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `investigating-phishing-email-incident`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
