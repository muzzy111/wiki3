---
name: auditing-tls-certificate-transparency-logs
description: "CT Log Monitoring Agent - Monitors Certificate Transparency logs for unauthorized certificate issuance, subdomain discovery, and certificate alerting. For authorized security monitoring and defensive operations only. Use when the user asks to audit tls certificate transparency logs."
version: 1.0.0
tags:
  - auditing
  - network
source: auditing-tls-certificate-transparency-logs
---

# Auditing TLS Certificate Transparency Logs

**Role:** Security audit  
**Audience:** security auditors and cloud/IAM engineers  
**Primary tools:** Arguments, Key Functions, Alert Types

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **audit** tls certificate transparency logs.
- Capability: CT Log Monitoring Agent - Monitors Certificate Transparency logs for unauthorized certificate issuance, subdomain discovery, and certificate alerting. For authorized security monitoring and defensive operations only.
- Goal: measure configuration and access against policy and best practice.
- Trigger keywords: `auditing, certificate, transparency, logs`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Initialize SQLite database for certificate tracking
2. Query crt.sh JSON API for certificates matching domain pattern. Args: domain: Domain pattern, e.g. '%.example.com' for wildcard search. exclude_expired: If True, exclude expired certificates from results. timeout: HTTP request timeout in seconds. Returns: List of certificate records from crt.sh
3. Fetch detailed certificate information from crt.sh by ID
4. Extract individual subdomain entries from a crt.sh name_value field. The name_value field can contain multiple DNS names separated by newlines
5. Store certificates in database, return list of newly discovered ones
6. Extract and store unique subdomains from certificate name_value fields
7. Resolve a subdomain to IP addresses and CNAME targets
8. Resolve all unresolved subdomains for a parent domain

## Tools & resources

- Arguments
- Key Functions
- Alert Types

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

- `init_database` — Initialize SQLite database for certificate tracking.
- `query_crtsh` — Query crt.sh JSON API for certificates matching domain pattern. Args: domain: Domain pattern, e.g. '%.example.com' for wildcard search. exclude_expired: If True, exclude expired certificates from results. timeout: HTTP request timeout in seconds. Returns: List of certificate records from crt.sh.
- `get_certificate_detail` — Fetch detailed certificate information from crt.sh by ID.
- `extract_subdomains_from_names` — Extract individual subdomain entries from a crt.sh name_value field. The name_value field can contain multiple DNS names separated by newlines.
- `store_certificates` — Store certificates in database, return list of newly discovered ones.
- `discover_subdomains` — Extract and store unique subdomains from certificate name_value fields.
- `resolve_subdomain` — Resolve a subdomain to IP addresses and CNAME targets.
- `resolve_all_subdomains` — Resolve all unresolved subdomains for a parent domain.
- `check_unauthorized_ca` — Check if any new certificates were issued by unauthorized CAs.
- `check_new_subdomain_alerts` — Generate alerts for newly discovered subdomains.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `auditing-tls-certificate-transparency-logs`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
