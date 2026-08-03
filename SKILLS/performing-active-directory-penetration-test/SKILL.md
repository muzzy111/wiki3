---
name: performing-active-directory-penetration-test
description: "Active Directory Penetration Test agent - automates AD enumeration using ldap3 for LDAP queries, subprocess for impacket tools, and generates a structured pentest findings report. Use when the user asks to perform active directory penetration test."
version: 1.0.0
tags:
  - performing
  - threat-intel
  - active-directory
  - incident-response
source: performing-active-directory-penetration-test
---

# Performing Active Directory Penetration Test

**Role:** Hands-on assessment  
**Audience:** pentesters, blue teamers, and DFIR practitioners  
**Primary tools:** ldap3 Library, Impacket Tools, Attack Techniques, Key Frameworks, AD Security Benchmarks

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **perform** active directory penetration test.
- Capability: Active Directory Penetration Test agent - automates AD enumeration using ldap3 for LDAP queries, subprocess for impacket tools, and generates a structured pentest findings report.
- Goal: execute a focused security technique or assessment workflow.
- Trigger keywords: `performing, active, directory, penetration, test`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Establish authenticated LDAP connection
2. Extract domain functional level and naming context
3. Enumerate all domain users with security-relevant attributes
4. Identify accounts vulnerable to AS-REP Roasting
5. Identify accounts vulnerable to Kerberoasting
6. Audit domain password policy
7. Run impacket GetUserSPNs for Kerberoasting
8. Run full AD pentest enumeration and build report

## Key concepts

- CIS Microsoft Windows Server Benchmark
- STIG (Security Technical Implementation Guide) for Windows
- Microsoft Security Compliance Toolkit

## Tools & resources

- ldap3 Library
- Impacket Tools
- Attack Techniques
- Key Frameworks
- AD Security Benchmarks

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

- `connect_ldap` — Establish authenticated LDAP connection.
- `get_domain_info` — Extract domain functional level and naming context.
- `enumerate_users` — Enumerate all domain users with security-relevant attributes.
- `find_asrep_roastable` — Identify accounts vulnerable to AS-REP Roasting.
- `find_kerberoastable` — Identify accounts vulnerable to Kerberoasting.
- `check_password_policy` — Audit domain password policy.
- `run_impacket_getspns` — Run impacket GetUserSPNs for Kerberoasting.
- `generate_report` — Run full AD pentest enumeration and build report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `performing-active-directory-penetration-test`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
