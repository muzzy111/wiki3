---
name: bypassing-authentication-with-forced-browsing
description: "Forced Browsing Authentication Bypass Agent - Tests for unprotected endpoints. Use when the user asks to bypassing authentication with forced browsing."
version: 1.0.0
tags:
  - bypassing
source: bypassing-authentication-with-forced-browsing
---

# Bypassing Authentication with Forced Browsing

**Role:** Security workflow  
**Audience:** security practitioners  
**Primary tools:** Arguments, Key Functions

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **bypass** authentication with forced browsing.
- Capability: Forced Browsing Authentication Bypass Agent - Tests for unprotected endpoints.
- Goal: complete the task.
- Trigger keywords: `bypassing, authentication, forced, browsing`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Load directory/file wordlist from file
2. Test a single endpoint with and without authentication
3. Enumerate directories and test authentication enforcement
4. Test HTTP method-based authentication bypass
5. Test path normalization bypass techniques
6. Check for exposed backup and configuration files
7. Generate pentest finding report for forced browsing results

## Tools & resources

- Arguments
- Key Functions

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

- `load_wordlist` — Load directory/file wordlist from file.
- `test_endpoint` — Test a single endpoint with and without authentication.
- `enumerate_directories` — Enumerate directories and test authentication enforcement.
- `test_http_method_bypass` — Test HTTP method-based authentication bypass.
- `test_path_traversal_bypass` — Test path normalization bypass techniques.
- `check_sensitive_files` — Check for exposed backup and configuration files.
- `generate_report` — Generate pentest finding report for forced browsing results.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `bypassing-authentication-with-forced-browsing`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
