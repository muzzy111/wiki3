---
name: performing-dns-enumeration-and-zone-transfer
description: "DNS Enumeration and Zone Transfer Agent — AUTHORIZED TESTING ONLY Performs DNS reconnaissance including record enumeration, zone transfer attempts, and subdomain discovery using dnspython. WARNING: Only use with.... Use when the user asks to perform dns enumeration and zone transfer."
version: 1.0.0
tags:
  - performing
  - network
source: performing-dns-enumeration-and-zone-transfer
---

# Performing DNS Enumeration and Zone Transfer

**Role:** Hands-on assessment  
**Audience:** pentesters, blue teamers, and DFIR practitioners  
**Primary tools:** dnspython Library, DNS Record Types, Email Security Records, Common Subdomain Wordlists

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **perform** dns enumeration and zone transfer.
- Capability: DNS Enumeration and Zone Transfer Agent — AUTHORIZED TESTING ONLY Performs DNS reconnaissance including record enumeration, zone transfer attempts, and subdomain discovery using dnspython. WARNING: Only use with explicit written authorization for the target domain.
- Goal: execute a focused security technique or assessment workflow.
- Trigger keywords: `performing, enumeration, zone, transfer`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Enumerate common DNS record types for a domain
2. Resolve authoritative nameservers for a domain
3. Attempt AXFR zone transfer against each nameserver
4. Check SPF, DKIM, and DMARC DNS records
5. Brute-force subdomain discovery via DNS resolution
6. Generate DNS enumeration report

## Tools & resources

- dnspython Library
- DNS Record Types
- Email Security Records
- Common Subdomain Wordlists

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

- `enumerate_dns_records` — Enumerate common DNS record types for a domain.
- `get_nameservers` — Resolve authoritative nameservers for a domain.
- `attempt_zone_transfer` — Attempt AXFR zone transfer against each nameserver.
- `check_email_security` — Check SPF, DKIM, and DMARC DNS records.
- `brute_force_subdomains` — Brute-force subdomain discovery via DNS resolution.
- `generate_report` — Generate DNS enumeration report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `performing-dns-enumeration-and-zone-transfer`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
