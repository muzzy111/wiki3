---
name: performing-brand-monitoring-for-impersonation
description: "Brand impersonation monitoring agent. Monitors for brand impersonation by checking Certificate Transparency logs for suspicious domain registrations, performing DNS lookups for typosquatting domains, and scanning.... Use when the user asks to perform brand monitoring for impersonation."
version: 1.0.0
tags:
  - performing
source: performing-brand-monitoring-for-impersonation
---

# Performing Brand Monitoring for Impersonation

**Role:** Hands-on assessment  
**Audience:** pentesters, blue teamers, and DFIR practitioners  
**Primary tools:** Certificate Transparency Log Monitoring

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **perform** brand monitoring for impersonation.
- Capability: Brand impersonation monitoring agent. Monitors for brand impersonation by checking Certificate Transparency logs for suspicious domain registrations, performing DNS lookups for typosquatting domains, and scanning social media profile names. Uses crt.sh API and DNS resolution to identify potential phishing domains.
- Goal: execute a focused security technique or assessment workflow.
- Trigger keywords: `performing, brand, monitoring, impersonation`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Generate common typosquatting domain variants
2. Check which typosquat domains actually resolve
3. Search crt.sh for certificates containing the brand name
4. Print monitoring summary

## Tools & resources

- Certificate Transparency Log Monitoring

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

- `generate_typosquat_variants` — Generate common typosquatting domain variants.
- `check_domain_resolution` — Check which typosquat domains actually resolve.
- `search_certificate_transparency` — Search crt.sh for certificates containing the brand name.
- `format_summary` — Print monitoring summary.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `performing-brand-monitoring-for-impersonation`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
