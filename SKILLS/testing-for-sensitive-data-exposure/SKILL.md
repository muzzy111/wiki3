---
name: testing-for-sensitive-data-exposure
description: "Agent for testing sensitive data exposure vulnerabilities during authorized assessments. Use when the user asks to test for sensitive data exposure."
version: 1.0.0
tags:
  - testing
source: testing-for-sensitive-data-exposure
---

# Testing for Sensitive Data Exposure

**Role:** Security testing  
**Audience:** QA security, pentesters, and AppSec engineers  
**Primary tools:** requests Library, Exposed File Checks, Sensitive API Response Fields, Cache-Control for Sensitive Pages

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **test** for sensitive data exposure.
- Capability: Agent for testing sensitive data exposure vulnerabilities during authorized assessments.
- Goal: validate defenses, applications, or controls under controlled conditions.
- Trigger keywords: `testing, sensitive, data, exposure`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Download and scan JavaScript files for hardcoded secrets
2. Check for exposed configuration files
3. Check API responses for excessive sensitive data
4. Check Cache-Control and security headers on sensitive pages
5. Basic TLS configuration check
6. Test if error responses leak sensitive information
7. Generate sensitive data exposure report

## Tools & resources

- requests Library
- Exposed File Checks
- Sensitive API Response Fields
- Cache-Control for Sensitive Pages

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

- `scan_javascript_files` — Download and scan JavaScript files for hardcoded secrets.
- `check_config_files` — Check for exposed configuration files.
- `check_api_data_exposure` — Check API responses for excessive sensitive data.
- `check_security_headers` — Check Cache-Control and security headers on sensitive pages.
- `check_tls_config` — Basic TLS configuration check.
- `check_error_verbosity` — Test if error responses leak sensitive information.
- `generate_report` — Generate sensitive data exposure report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `testing-for-sensitive-data-exposure`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
