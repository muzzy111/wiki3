---
name: performing-dark-web-monitoring-for-threats
description: "Dark web threat monitoring agent. Monitors for organization-specific threats on the dark web by checking breach databases (Have I Been Pwned API), paste sites, and public threat intelligence feeds for leaked.... Use when the user asks to perform dark web monitoring for threats."
version: 1.0.0
tags:
  - performing
  - threat-intel
  - appsec
source: performing-dark-web-monitoring-for-threats
---

# Performing Dark Web Monitoring for Threats

**Role:** Hands-on assessment  
**Audience:** pentesters, blue teamers, and DFIR practitioners  
**Primary tools:** Credential Breach Monitoring, Brand Mention Monitoring, Domain Monitoring, Alerting, Dark Web Intelligence Classification, Dark Web Source Categories

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **perform** dark web monitoring for threats.
- Capability: Dark web threat monitoring agent. Monitors for organization-specific threats on the dark web by checking breach databases (Have I Been Pwned API), paste sites, and public threat intelligence feeds for leaked credentials, exposed data, and mentions of organizational domains.
- Goal: execute a focused security technique or assessment workflow.
- Trigger keywords: `performing, dark, monitoring, threats`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Check Have I Been Pwned for breaches involving a domain
2. Check if a specific email appears in known breaches
3. Check if a password appears in known breaches using k-anonymity
4. Check for organization mentions in paste sites via HIBP
5. Search public threat intelligence for domain mentions
6. Print monitoring summary

## Key concepts

- TLP: RED**: Dark web source details, forum credentials, HUMINT methods
- TLP: AMBER**: Specific threat actor mentions, leaked data analysis
- TLP: GREEN**: Aggregated trends, anonymized statistics
- TLP: CLEAR**: Public dark web monitoring advisories
- T1589 - Gather Victim Identity Information (credential theft)
- T1590 - Gather Victim Network Information (reconnaissance)
- T1597 - Search Closed Sources (dark web forums)
- T1598 - Phishing for Information

## Tools & resources

- Credential Breach Monitoring
- Brand Mention Monitoring
- Domain Monitoring
- Alerting
- Dark Web Intelligence Classification
- Dark Web Source Categories
- Legal and Ethical Framework

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
| `assets/` | Templates, checklists, and report scaffolds |

## Automation entry points

- `check_hibp_breaches` — Check Have I Been Pwned for breaches involving a domain.
- `check_hibp_email` — Check if a specific email appears in known breaches.
- `check_hibp_password` — Check if a password appears in known breaches using k-anonymity.
- `check_paste_dumps` — Check for organization mentions in paste sites via HIBP.
- `search_threat_intel_feeds` — Search public threat intelligence for domain mentions.
- `format_summary` — Print monitoring summary.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `performing-dark-web-monitoring-for-threats`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
