---
name: conducting-external-reconnaissance-with-osint
description: "External Reconnaissance Agent - Maps organization attack surface using passive OSINT. Use when the user asks to conduct external reconnaissance with osint."
version: 1.0.0
tags:
  - conducting
  - threat-intel
source: conducting-external-reconnaissance-with-osint
---

# Conducting External Reconnaissance with Osint

**Role:** Structured engagement  
**Audience:** security teams running formal engagements  
**Primary tools:** Key Functions, External APIs Used

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **conduct** external reconnaissance with osint.
- Capability: External Reconnaissance Agent - Maps organization attack surface using passive OSINT.
- Goal: run a complete assessment, exercise, or investigation end to end.
- Trigger keywords: `conducting, external, reconnaissance, osint`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Discover subdomains via certificate transparency logs
2. Query public DNS records for a domain using DNS-over-HTTPS
3. Search Shodan for hosts belonging to an organization
4. Check SPF, DKIM, and DMARC records for email security posture
5. Search Have I Been Pwned for breached accounts (requires API key)
6. Identify web technologies via HTTP response headers
7. Search GitHub for leaked credentials related to the target domain
8. Generate external reconnaissance report

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

- `enumerate_subdomains_crtsh` — Discover subdomains via certificate transparency logs.
- `enumerate_dns_records` — Query public DNS records for a domain using DNS-over-HTTPS.
- `shodan_org_search` — Search Shodan for hosts belonging to an organization.
- `check_email_security` — Check SPF, DKIM, and DMARC records for email security posture.
- `search_breach_data` — Search Have I Been Pwned for breached accounts (requires API key).
- `check_web_technologies` — Identify web technologies via HTTP response headers.
- `search_github_leaks` — Search GitHub for leaked credentials related to the target domain.
- `generate_recon_report` — Generate external reconnaissance report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `conducting-external-reconnaissance-with-osint`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
