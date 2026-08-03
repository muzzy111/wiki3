---
name: performing-dmarc-policy-enforcement-rollout
description: "Agent for performing DMARC policy enforcement rollout with DNS record analysis. Use when the user asks to perform dmarc policy enforcement rollout."
version: 1.0.0
tags:
  - performing
source: performing-dmarc-policy-enforcement-rollout
---

# Performing Dmarc Policy Enforcement Rollout

**Role:** Hands-on assessment  
**Audience:** pentesters, blue teamers, and DFIR practitioners  
**Primary tools:** DMARC Policy Levels, Core Protocol Standards, DMARC Policy Progression, SPF Lookup Limit

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **perform** dmarc policy enforcement rollout.
- Capability: Agent for performing DMARC policy enforcement rollout with DNS record analysis.
- Goal: execute a focused security technique or assessment workflow.
- Trigger keywords: `performing, dmarc, policy, enforcement, rollout`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Query and parse DMARC record for a domain
2. Query and analyze SPF record
3. Query DKIM public key record
4. Audit multiple domains for DMARC/SPF/DKIM readiness

## Key concepts

- RFC 7489: Domain-based Message Authentication, Reporting, and Conformance (DMARC)
- RFC 7208: Sender Policy Framework (SPF) for Authorizing Use of Domains in Email
- RFC 6376: DomainKeys Identified Mail (DKIM) Signatures
- RFC 8616: Email Authentication for Internationalized Mail
- RFC 8601: Message Header Field for Indicating Message Authentication Status
- Google Bulk Sender Requirements: DMARC required for senders of 5,000+ messages/day to Gmail
- Yahoo Sender Requirements: DMARC authentication required for bulk senders
- PCI DSS 4.0 Requirement 5.3: Anti-phishing mechanisms including email authentication

## Tools & resources

- DMARC Policy Levels
- Core Protocol Standards
- DMARC Policy Progression
- SPF Lookup Limit

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

- `check_dmarc` — Query and parse DMARC record for a domain.
- `parse_dmarc_tags`
- `check_spf` — Query and analyze SPF record.
- `check_dkim` — Query DKIM public key record.
- `audit_domains` — Audit multiple domains for DMARC/SPF/DKIM readiness.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `performing-dmarc-policy-enforcement-rollout`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
