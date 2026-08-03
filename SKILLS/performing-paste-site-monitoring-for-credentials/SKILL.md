---
name: performing-paste-site-monitoring-for-credentials
description: "Agent for performing paste site monitoring for leaked credentials. Use when the user asks to perform paste site monitoring for credentials."
version: 1.0.0
tags:
  - performing
source: performing-paste-site-monitoring-for-credentials
---

# Performing Paste Site Monitoring for Credentials

**Role:** Hands-on assessment  
**Audience:** pentesters, blue teamers, and DFIR practitioners  
**Primary tools:** Rate Limiting

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **perform** paste site monitoring for credentials.
- Capability: Agent for performing paste site monitoring for leaked credentials.
- Goal: execute a focused security technique or assessment workflow.
- Trigger keywords: `performing, paste, site, monitoring, credentials`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Check if an email appears in Have I Been Pwned breaches
2. Check for email in paste site dumps via HIBP paste API
3. Check all emails from a domain for breach exposure
4. Scan a text file (paste dump) for credential patterns
5. Generate credential exposure report for an organization

## Tools & resources

- Rate Limiting

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

- `check_haveibeenpwned` — Check if an email appears in Have I Been Pwned breaches.
- `check_paste_dumps` — Check for email in paste site dumps via HIBP paste API.
- `bulk_check_domain` — Check all emails from a domain for breach exposure.
- `scan_text_for_credentials` — Scan a text file (paste dump) for credential patterns.
- `generate_exposure_report` — Generate credential exposure report for an organization.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `performing-paste-site-monitoring-for-credentials`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
