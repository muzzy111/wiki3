---
name: performing-api-rate-limiting-bypass
description: "API rate limiting bypass testing. Use when the user asks to perform api rate limiting bypass."
version: 1.0.0
tags:
  - performing
source: performing-api-rate-limiting-bypass
---

# Performing API Rate Limiting Bypass

**Role:** Hands-on assessment  
**Audience:** pentesters, blue teamers, and DFIR practitioners  
**Primary tools:** Rate Limit Response Headers, IP Spoofing Bypass Headers, Bypass Techniques, OWASP API4, External References

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **perform** api rate limiting bypass.
- Capability: API rate limiting bypass testing agent.
- Goal: execute a focused security technique or assessment workflow.
- Trigger keywords: `performing, rate, limiting, bypass`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Send initial request and extract rate limit response headers
2. Test rate limit bypass via IP spoofing headers
3. Test if rate limiting applies across HTTP methods
4. Test rate limit bypass via URL path manipulation
5. Test rate limit bypass via parameter encoding variations
6. Execute API rate limiting bypass audit

## Tools & resources

- Rate Limit Response Headers
- IP Spoofing Bypass Headers
- Bypass Techniques
- OWASP API4
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

- `detect_rate_limit_headers` — Send initial request and extract rate limit response headers.
- `test_header_bypass` — Test rate limit bypass via IP spoofing headers.
- `test_method_bypass` — Test if rate limiting applies across HTTP methods.
- `test_path_bypass` — Test rate limit bypass via URL path manipulation.
- `test_encoding_bypass` — Test rate limit bypass via parameter encoding variations.
- `run_audit` — Execute API rate limiting bypass audit.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `performing-api-rate-limiting-bypass`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
