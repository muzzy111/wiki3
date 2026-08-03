---
name: conducting-phishing-incident-response
description: "Phishing Incident Response Agent - Analyzes phishing emails and automates response actions. Use when the user asks to conduct phishing incident response."
version: 1.0.0
tags:
  - conducting
  - threat-intel
  - incident-response
  - email
source: conducting-phishing-incident-response
---

# Conducting Phishing Incident Response

**Role:** Structured engagement  
**Audience:** security teams running formal engagements  
**Primary tools:** Key Functions, External APIs Used

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **conduct** phishing incident response.
- Capability: Phishing Incident Response Agent - Analyzes phishing emails and automates response actions.
- Goal: run a complete assessment, exercise, or investigation end to end.
- Trigger keywords: `conducting, phishing, incident, response`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Parse an EML file and extract header and body information
2. Extract all URLs from email body
3. Extract and hash email attachments
4. Check URL reputation on VirusTotal
5. Submit URL to urlscan.io for analysis
6. Check file hash reputation on VirusTotal
7. Assess overall severity of the phishing email
8. Generate phishing incident response report

## Tools & resources

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

- `parse_email_file` — Parse an EML file and extract header and body information.
- `extract_urls` — Extract all URLs from email body.
- `extract_attachments` — Extract and hash email attachments.
- `check_url_virustotal` — Check URL reputation on VirusTotal.
- `check_url_urlscan` — Submit URL to urlscan.io for analysis.
- `check_hash_virustotal` — Check file hash reputation on VirusTotal.
- `assess_phishing_severity` — Assess overall severity of the phishing email.
- `generate_phishing_report` — Generate phishing incident response report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `conducting-phishing-incident-response`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
