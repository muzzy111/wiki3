---
name: performing-content-security-policy-bypass
description: "Content Security Policy (CSP) analysis and bypass testing agent. Fetches and analyzes CSP headers from web applications to identify misconfigurations, overly permissive directives, and potential bypass vectors. Tests.... Use when the user asks to perform content security policy bypass."
version: 1.0.0
tags:
  - performing
source: performing-content-security-policy-bypass
---

# Performing Content Security Policy Bypass

**Role:** Hands-on assessment  
**Audience:** pentesters, blue teamers, and DFIR practitioners  
**Primary tools:** CSP Directive Reference, Core Operations

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **perform** content security policy bypass.
- Capability: Content Security Policy (CSP) analysis and bypass testing agent. Fetches and analyzes CSP headers from web applications to identify misconfigurations, overly permissive directives, and potential bypass vectors. Tests for unsafe-inline, unsafe-eval, wildcard sources, missing directives, and known CSP bypass patterns. AUTHORIZED TESTING ONLY: Only use against targets you have explicit written permission to test.
- Goal: execute a focused security technique or assessment workflow.
- Trigger keywords: `performing, content, security, policy, bypass`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Fetch CSP header(s) from a URL
2. Parse a CSP string into a structured dict
3. Analyze CSP directives for security weaknesses
4. Print analysis summary

## Tools & resources

- CSP Directive Reference
- Core Operations

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

- `fetch_csp` — Fetch CSP header(s) from a URL.
- `parse_csp` — Parse a CSP string into a structured dict.
- `analyze_csp` — Analyze CSP directives for security weaknesses.
- `format_summary` — Print analysis summary.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `performing-content-security-policy-bypass`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
