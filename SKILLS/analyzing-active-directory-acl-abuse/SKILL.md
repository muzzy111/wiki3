---
name: analyzing-active-directory-acl-abuse
description: "Active Directory ACL abuse detection using ldap3 to find dangerous permissions. Use when the user asks to analyze active directory acl abuse."
version: 1.0.0
tags:
  - analyzing
  - threat-intel
  - active-directory
  - incident-response
source: analyzing-active-directory-acl-abuse
---

# Analyzing Active Directory ACL Abuse

**Role:** Deep analysis  
**Audience:** analysts and investigators  

## When to use

- The user wants to **analyze** active directory acl abuse.
- Capability: Active Directory ACL abuse detection using ldap3 to find dangerous permissions.
- Goal: extract findings, indicators, and conclusions from technical evidence.
- Trigger keywords: `analyzing, active, directory, abuse`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Ingest and validate inputs for active directory acl abuse
2. Establish baseline context (scope, hosts, time window, hypotheses)
3. Run structured analysis using the skill tools and references
4. Extract indicators, artifacts, and high-confidence findings
5. Correlate results and document conclusions with evidence pointers

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

- `is_admin_sid`
- `parse_sid`
- `parse_acl`
- `resolve_sid`
- `get_domain_sid`
- `analyze_acls`

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `analyzing-active-directory-acl-abuse`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
