---
name: implementing-proofpoint-email-security-gateway
description: "Proofpoint email security gateway audit agent. Audits Proofpoint TAP (Targeted Attack Protection) via the SIEM API to retrieve blocked threats, clicked URLs, delivered messages, and campaign attribution data for.... Use when the user asks to implement proofpoint email security gateway."
version: 1.0.0
tags:
  - implementing
  - email
source: implementing-proofpoint-email-security-gateway
---

# Implementing Proofpoint Email Security Gateway

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** Core Operations, Industry Standards, Proofpoint-Specific References, Compliance Alignment, Email Security Gateway Market

## When to use

- The user wants to **implement** proofpoint email security gateway.
- Capability: Proofpoint email security gateway audit agent. Audits Proofpoint TAP (Targeted Attack Protection) via the SIEM API to retrieve blocked threats, clicked URLs, delivered messages, and campaign attribution data for email security monitoring.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, proofpoint, email, security, gateway`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Return Proofpoint TAP API credentials
2. Make authenticated Proofpoint TAP API call
3. Get URLs that were blocked when clicked
4. Get messages that were blocked
5. Get threats that were delivered (missed by filters)
6. Get URLs that were permitted when clicked (potential misses)
7. Analyze threat data for security insights
8. Print email security summary

## Key concepts

- NIST SP 800-177 Rev.1: Trustworthy Email - guidelines for email security deployment
- RFC 7208: Sender Policy Framework (SPF) for authorizing use of domains in email
- RFC 6376: DomainKeys Identified Mail (DKIM) Signatures
- RFC 7489: Domain-based Message Authentication, Reporting & Conformance (DMARC)
- CIS Controls v8 Control 9: Email and Web Browser Protections
- T1566.001: Phishing: Spearphishing Attachment
- T1566.002: Phishing: Spearphishing Link
- T1566.003: Phishing: Spearphishing via Service

## Tools & resources

- Core Operations
- Industry Standards
- Proofpoint-Specific References
- Compliance Alignment
- Email Security Gateway Market

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

- `get_pp_config` — Return Proofpoint TAP API credentials.
- `pp_api` — Make authenticated Proofpoint TAP API call.
- `get_blocked_clicks` — Get URLs that were blocked when clicked.
- `get_blocked_messages` — Get messages that were blocked.
- `get_delivered_threats` — Get threats that were delivered (missed by filters).
- `get_permitted_clicks` — Get URLs that were permitted when clicked (potential misses).
- `analyze_threats` — Analyze threat data for security insights.
- `format_summary` — Print email security summary.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-proofpoint-email-security-gateway`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
