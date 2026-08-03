---
name: performing-cryptographic-audit-of-application
description: "Application cryptographic audit agent. Audits application code and configurations for cryptographic weaknesses including weak algorithms, insecure key sizes, hardcoded keys, deprecated protocols, and missing.... Use when the user asks to perform cryptographic audit of application."
version: 1.0.0
tags:
  - performing
source: performing-cryptographic-audit-of-application
---

# Performing Cryptographic Audit of Application

**Role:** Hands-on assessment  
**Audience:** pentesters, blue teamers, and DFIR practitioners  
**Primary tools:** TLS Configuration Audit, Certificate Analysis, NIST Guidelines, OWASP References, Tools

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **perform** cryptographic audit of application.
- Capability: Application cryptographic audit agent. Audits application code and configurations for cryptographic weaknesses including weak algorithms, insecure key sizes, hardcoded keys, deprecated protocols, and missing certificate validation. Scans source files, config files, and TLS endpoints.
- Goal: execute a focused security technique or assessment workflow.
- Trigger keywords: `performing, cryptographic, audit, application`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Scan a single file for cryptographic weaknesses
2. Recursively scan a directory for cryptographic weaknesses
3. Audit TLS configuration of a remote endpoint
4. Print audit summary

## Key concepts

- Description: Defines deprecated, legacy, and acceptable algorithms
- Description: Minimum key sizes and algorithm recommendations
- Description: OWASP Top 10 #2 - Cryptographic Failures
- Description: Guidelines for secure cryptographic storage
- Description: Password hashing best practices
- Description: Python security linter with crypto checks
- Description: Static analysis with crypto-specific rules
- Description: Specialized cryptographic misuse detector

## Tools & resources

- TLS Configuration Audit
- Certificate Analysis
- NIST Guidelines
- OWASP References
- Tools

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

- `scan_file` — Scan a single file for cryptographic weaknesses.
- `scan_directory` — Recursively scan a directory for cryptographic weaknesses.
- `audit_tls_endpoint` — Audit TLS configuration of a remote endpoint.
- `format_summary` — Print audit summary.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `performing-cryptographic-audit-of-application`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
