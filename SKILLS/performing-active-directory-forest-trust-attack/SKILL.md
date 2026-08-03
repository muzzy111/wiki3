---
name: performing-active-directory-forest-trust-attack
description: "Agent for AD forest trust enumeration and security assessment using impacket. Use when the user asks to perform active directory forest trust attack."
version: 1.0.0
tags:
  - performing
  - threat-intel
  - active-directory
  - incident-response
source: performing-active-directory-forest-trust-attack
---

# Performing Active Directory Forest Trust Attack

**Role:** Hands-on assessment  
**Audience:** pentesters, blue teamers, and DFIR practitioners  
**Primary tools:** Trust Direction Values, Trust Attribute Flags, Impacket RPC Calls

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **perform** active directory forest trust attack.
- Capability: Agent for AD forest trust enumeration and security assessment using impacket.
- Goal: execute a focused security technique or assessment workflow.
- Trigger keywords: `performing, active, directory, forest, trust, attack`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Enumerate AD trust relationships via LDAP trustedDomain objects
2. Find foreign security principals (cross-forest members) in the domain
3. Resolve a SID across forest trust using LSA LookupSids RPC call
4. Assess security risk of trust relationships
5. Run comprehensive forest trust security audit

## Tools & resources

- Trust Direction Values
- Trust Attribute Flags
- Impacket RPC Calls

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

- `enumerate_trusts_ldap` — Enumerate AD trust relationships via LDAP trustedDomain objects.
- `enumerate_foreign_principals` — Find foreign security principals (cross-forest members) in the domain.
- `lookup_sid_cross_forest` — Resolve a SID across forest trust using LSA LookupSids RPC call.
- `assess_trust_risk` — Assess security risk of trust relationships.
- `full_audit` — Run comprehensive forest trust security audit.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `performing-active-directory-forest-trust-attack`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
