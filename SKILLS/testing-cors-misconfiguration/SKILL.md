---
name: testing-cors-misconfiguration
description: "Agent for testing CORS misconfiguration vulnerabilities during authorized assessments. Use when the user asks to test cors misconfiguration."
version: 1.0.0
tags:
  - testing
source: testing-cors-misconfiguration
---

# Testing Cors Misconfiguration

**Role:** Security testing  
**Audience:** QA security, pentesters, and AppSec engineers  
**Primary tools:** requests Library, CORS Response Headers, Testing Checklist

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **test** cors misconfiguration.
- Capability: Agent for testing CORS misconfiguration vulnerabilities during authorized assessments.
- Goal: validate defenses, applications, or controls under controlled conditions.
- Trigger keywords: `testing, cors, misconfiguration`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Generate domain-specific bypass origins for testing
2. Test if server reflects arbitrary Origin headers
3. Test OPTIONS preflight request handling
4. Test for wildcard CORS with credentials (invalid but sometimes misconfigured)
5. Test if null Origin is accepted (exploitable via sandboxed iframes)
6. Test if internal/development origins are trusted
7. Scan multiple endpoints for CORS issues
8. Generate CORS misconfiguration assessment report

## Tools & resources

- requests Library
- CORS Response Headers
- Testing Checklist

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

- `build_dynamic_origins` — Generate domain-specific bypass origins for testing.
- `test_origin_reflection` — Test if server reflects arbitrary Origin headers.
- `test_preflight` — Test OPTIONS preflight request handling.
- `test_wildcard_with_credentials` — Test for wildcard CORS with credentials (invalid but sometimes misconfigured).
- `test_null_origin` — Test if null Origin is accepted (exploitable via sandboxed iframes).
- `test_internal_origins` — Test if internal/development origins are trusted.
- `scan_endpoints` — Scan multiple endpoints for CORS issues.
- `generate_report` — Generate CORS misconfiguration assessment report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `testing-cors-misconfiguration`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
