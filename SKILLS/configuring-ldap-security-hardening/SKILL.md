---
name: configuring-ldap-security-hardening
description: "LDAP security hardening audit agent using ldap3. Use when the user asks to configure ldap security hardening."
version: 1.0.0
tags:
  - configuring
  - active-directory
source: configuring-ldap-security-hardening
---

# Configuring LDAP Security Hardening

**Role:** Secure configuration  
**Audience:** security engineers and platform admins  
**Primary tools:** Key ldap3 Methods, Security Checks, External References

## When to use

- The user wants to **configure** ldap security hardening.
- Capability: LDAP security hardening audit agent using ldap3.
- Goal: harden and tune security tooling for production use.
- Trigger keywords: `configuring, ldap, security, hardening`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Check if LDAP signing is enforced
2. Check LDAPS (LDAP over TLS) availability
3. Check LDAP channel binding enforcement
4. Check for anonymous LDAP access and enumeration
5. Execute LDAP security hardening audit

## Tools & resources

- Key ldap3 Methods
- Security Checks
- External References

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

- `check_ldap_signing` — Check if LDAP signing is enforced.
- `check_ldaps` — Check LDAPS (LDAP over TLS) availability.
- `check_channel_binding` — Check LDAP channel binding enforcement.
- `audit_anonymous_access` — Check for anonymous LDAP access and enumeration.
- `run_audit` — Execute LDAP security hardening audit.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `configuring-ldap-security-hardening`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
