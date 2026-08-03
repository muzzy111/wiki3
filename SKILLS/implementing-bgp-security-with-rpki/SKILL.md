---
name: implementing-bgp-security-with-rpki
description: "BGP RPKI validation agent using RIPEstat and Cloudflare RPKI APIs. Use when the user asks to implement bgp security with rpki."
version: 1.0.0
tags:
  - implementing
source: implementing-bgp-security-with-rpki
---

# Implementing Bgp Security with Rpki

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** APIs Used

## When to use

- The user wants to **implement** bgp security with rpki.
- Capability: BGP RPKI validation agent using RIPEstat and Cloudflare RPKI APIs.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, security, rpki`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Validate a prefix against RPKI using RIPEstat
2. Get Route Origin Authorizations for an ASN from Cloudflare RPKI
3. Get prefix routing overview from RIPEstat
4. Check RPKI adoption status for an ASN
5. Validate multiple prefixes against RPKI
6. Generate RPKI validation report for an ASN and its prefixes

## Tools & resources

- APIs Used

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

- `validate_prefix_rpki` — Validate a prefix against RPKI using RIPEstat.
- `get_roas_for_asn` — Get Route Origin Authorizations for an ASN from Cloudflare RPKI.
- `get_prefix_overview` — Get prefix routing overview from RIPEstat.
- `check_rpki_adoption` — Check RPKI adoption status for an ASN.
- `validate_multiple_prefixes` — Validate multiple prefixes against RPKI.
- `generate_report` — Generate RPKI validation report for an ASN and its prefixes.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-bgp-security-with-rpki`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
