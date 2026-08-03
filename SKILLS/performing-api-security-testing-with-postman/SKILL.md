---
name: performing-api-security-testing-with-postman
description: "Postman API security testing orchestration agent using Newman CLI. Use when the user asks to perform api security testing with postman."
version: 1.0.0
tags:
  - performing
source: performing-api-security-testing-with-postman
---

# Performing API Security Testing with Postman

**Role:** Hands-on assessment  
**Audience:** pentesters, blue teamers, and DFIR practitioners  
**Primary tools:** Tools, Postman Test Script Functions, OWASP API Security Tests, External References

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **perform** api security testing with postman.
- Capability: Postman API security testing orchestration agent using Newman CLI.
- Goal: execute a focused security technique or assessment workflow.
- Trigger keywords: `performing, security, testing, postman`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Execute a Postman collection using Newman CLI
2. Parse Newman JSON results for security test outcomes
3. Generate Postman collection for BOLA/IDOR testing across two user contexts
4. Generate Postman collection for injection testing
5. Execute Postman API security testing audit

## Tools & resources

- Tools
- Postman Test Script Functions
- OWASP API Security Tests
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

- `run_newman_collection` — Execute a Postman collection using Newman CLI.
- `parse_newman_results` — Parse Newman JSON results for security test outcomes.
- `generate_bola_collection` — Generate Postman collection for BOLA/IDOR testing across two user contexts.
- `generate_injection_collection` — Generate Postman collection for injection testing.
- `run_audit` — Execute Postman API security testing audit.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `performing-api-security-testing-with-postman`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
