---
name: implementing-dmarc-dkim-spf-email-security
description: "Agent for implementing and auditing DMARC, DKIM, and SPF email security. Use when the user asks to implement dmarc dkim spf email security."
version: 1.0.0
tags:
  - implementing
  - email
source: implementing-dmarc-dkim-spf-email-security
---

# Implementing Dmarc Dkim Spf Email Security

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** dnspython Lookups, DMARC Policy Levels, Recommended DNS Records, RFC Standards, NIST Guidelines, Government Mandates

## When to use

- The user wants to **implement** dmarc dkim spf email security.
- Capability: Agent for implementing and auditing DMARC, DKIM, and SPF email security.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, dmarc, dkim, email, security`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Check SPF record for a domain
2. Check DMARC record for a domain
3. Check DKIM record for a domain and selector
4. Audit multiple domains for email security records
5. Generate recommended SPF, DMARC, and DKIM DNS records

## Key concepts

- RFC 7208 (SPF): Sender Policy Framework - authorizing sending hosts via DNS
- RFC 6376 (DKIM): DomainKeys Identified Mail Signatures
- RFC 7489 (DMARC): Domain-based Message Authentication, Reporting and Conformance
- RFC 8301: Cryptographic Algorithm and Key Usage Update to DKIM (mandates RSA 2048-bit minimum)
- RFC 8616: Email Authentication for Internationalized Mail
- RFC 8617 (ARC): Authenticated Received Chain - preserving authentication through forwarding
- RFC 7960: Interoperability Issues between DMARC and Indirect Email Flows
- RFC 6591: Authentication Failure Reporting Using ARF

## Tools & resources

- dnspython Lookups
- DMARC Policy Levels
- Recommended DNS Records
- RFC Standards
- NIST Guidelines
- Government Mandates
- Industry Best Practices
- DMARC Tag Reference

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

- `check_spf_record` — Check SPF record for a domain.
- `check_dmarc_record` — Check DMARC record for a domain.
- `check_dkim_record` — Check DKIM record for a domain and selector.
- `audit_domains` — Audit multiple domains for email security records.
- `generate_dns_records` — Generate recommended SPF, DMARC, and DKIM DNS records.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-dmarc-dkim-spf-email-security`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
