---
name: performing-kerberoasting-attack
description: "Agent for performing Kerberoasting attack simulation and detection — authorized testing only. Use when the user asks to perform kerberoasting attack."
version: 1.0.0
tags:
  - performing
source: performing-kerberoasting-attack
---

# Performing Kerberoasting Attack

**Role:** Hands-on assessment  
**Audience:** pentesters, blue teamers, and DFIR practitioners  
**Primary tools:** Encryption Types, NIST SP 800-63B, CIS Benchmark, Detection References

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **perform** kerberoasting attack.
- Capability: Agent for performing Kerberoasting attack simulation and detection — authorized testing only.
- Goal: execute a focused security technique or assessment workflow.
- Trigger keywords: `performing, kerberoasting, attack`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Enumerate service principal name (SPN) accounts via LDAP query
2. Request TGS tickets for Kerberoasting using Impacket GetUserSPNs
3. Analyze captured Kerberoast hashes
4. Detect Kerberoasting from Windows Security Event ID 4769

## Key concepts

- Recommends minimum 8-character passwords
- Service accounts should use 25+ character passwords
- Managed Service Accounts (MSA/gMSA) automatically rotate passwords
- Ensure 'Network security: Configure encryption types allowed for Kerberos' excludes RC4
- Monitor Event ID 4769 for anomalous service ticket requests
- Implement AES-only encryption for service accounts
- Use Group Managed Service Accounts where possible

## Tools & resources

- Encryption Types
- NIST SP 800-63B
- CIS Benchmark
- Detection References

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

- `enumerate_spn_accounts` — Enumerate service principal name (SPN) accounts via LDAP query.
- `request_tgs_tickets` — Request TGS tickets for Kerberoasting using Impacket GetUserSPNs.
- `analyze_kerberoast_hashes` — Analyze captured Kerberoast hashes.
- `detect_kerberoasting` — Detect Kerberoasting from Windows Security Event ID 4769.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `performing-kerberoasting-attack`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
