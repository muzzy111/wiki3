---
name: performing-web-application-penetration-test
description: "Web application penetration test agent using requests and subprocess. Use when the user asks to perform web application penetration test."
version: 1.0.0
tags:
  - performing
  - appsec
source: performing-web-application-penetration-test
---

# Performing Web Application Penetration Test

**Role:** Hands-on assessment  
**Audience:** pentesters, blue teamers, and DFIR practitioners  
**Primary tools:** OWASP Test Coverage

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **perform** web application penetration test.
- Capability: Web application penetration test agent using requests and subprocess.
- Goal: execute a focused security technique or assessment workflow.
- Trigger keywords: `performing, application, penetration, test`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Identify technology stack from response headers and cookies
2. Check for presence of security headers
3. Test for dangerous HTTP methods
4. Test CORS configuration for misconfigurations
5. Run directory enumeration using ffuf if available
6. Test for basic SQL injection indicators
7. Test for basic reflected XSS
8. Run web application security assessment

## Tools & resources

- OWASP Test Coverage

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

- `fingerprint_technology` — Identify technology stack from response headers and cookies.
- `check_security_headers` — Check for presence of security headers.
- `test_http_methods` — Test for dangerous HTTP methods.
- `test_cors_config` — Test CORS configuration for misconfigurations.
- `run_directory_bruteforce` — Run directory enumeration using ffuf if available.
- `test_sql_injection_basic` — Test for basic SQL injection indicators.
- `test_xss_basic` — Test for basic reflected XSS.
- `run_assessment` — Run web application security assessment.
- `print_report`

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `performing-web-application-penetration-test`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
