---
name: analyzing-email-headers-for-phishing-investigation
description: "Email header analysis agent for phishing investigation and sender verification. Use when the user asks to analyze email headers for phishing investigation."
version: 1.0.0
tags:
  - analyzing
  - email
source: analyzing-email-headers-for-phishing-investigation
---

# Analyzing Email Headers for Phishing Investigation

**Role:** Deep analysis  
**Audience:** analysts and investigators  
**Primary tools:** Python email Module, dig, pyspf, dkimpy, AbuseIPDB, VirusTotal

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **analyze** email headers for phishing investigation.
- Capability: Email header analysis agent for phishing investigation and sender verification.
- Goal: extract findings, indicators, and conclusions from technical evidence.
- Trigger keywords: `analyzing, email, headers, phishing, investigation`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Parse an EML file and extract key header fields
2. Extract and parse the Received header chain (bottom-up = chronological)
3. Extract SPF, DKIM, and DMARC results from Authentication-Results headers
4. Detect mismatch between From and Reply-To addresses
5. Extract all URLs from the email body
6. Detect hyperlinks where display text differs from actual href
7. Extract and hash all email attachments
8. Perform DNS lookup for SPF/DKIM/DMARC records

## Tools & resources

- Python email Module
- dig
- pyspf
- dkimpy
- AbuseIPDB
- VirusTotal
- whois

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

- `parse_email_file` — Parse an EML file and extract key header fields.
- `extract_received_chain` — Extract and parse the Received header chain (bottom-up = chronological).
- `extract_authentication_results` — Extract SPF, DKIM, and DMARC results from Authentication-Results headers.
- `check_from_replyto_mismatch` — Detect mismatch between From and Reply-To addresses.
- `extract_urls` — Extract all URLs from the email body.
- `detect_url_mismatch` — Detect hyperlinks where display text differs from actual href.
- `extract_attachments` — Extract and hash all email attachments.
- `dns_lookup` — Perform DNS lookup for SPF/DKIM/DMARC records.
- `check_domain_spf` — Look up the SPF record for a domain.
- `check_domain_dmarc` — Look up the DMARC record for a domain.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `analyzing-email-headers-for-phishing-investigation`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
