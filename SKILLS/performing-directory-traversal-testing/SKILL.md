---
name: performing-directory-traversal-testing
description: "Directory Traversal Testing Agent — AUTHORIZED TESTING ONLY Tests web applications for path traversal (LFI) vulnerabilities by injecting traversal sequences into file path parameters. WARNING: Only use with explicit.... Use when the user asks to perform directory traversal testing."
version: 1.0.0
tags:
  - performing
  - incident-response
source: performing-directory-traversal-testing
---

# Performing Directory Traversal Testing

**Role:** Hands-on assessment  
**Audience:** pentesters, blue teamers, and DFIR practitioners  
**Primary tools:** Traversal Payload Encodings, Vulnerability Indicators, requests Library, Key Libraries, OWASP Testing Guide

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **perform** directory traversal testing.
- Capability: Directory Traversal Testing Agent — AUTHORIZED TESTING ONLY Tests web applications for path traversal (LFI) vulnerabilities by injecting traversal sequences into file path parameters. WARNING: Only use with explicit written authorization for the target application.
- Goal: execute a focused security technique or assessment workflow.
- Trigger keywords: `performing, directory, traversal, testing`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Identify URL parameters that likely handle file paths
2. Test a parameter for directory traversal vulnerability
3. Test null byte injection to bypass file extension checks
4. Test PHP wrapper protocols for LFI exploitation
5. Generate directory traversal testing report

## Tools & resources

- Traversal Payload Encodings
- Vulnerability Indicators
- requests Library
- Key Libraries
- OWASP Testing Guide

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

- `identify_file_parameters` — Identify URL parameters that likely handle file paths.
- `test_traversal` — Test a parameter for directory traversal vulnerability.
- `test_null_byte_bypass` — Test null byte injection to bypass file extension checks.
- `test_wrapper_protocols` — Test PHP wrapper protocols for LFI exploitation.
- `generate_report` — Generate directory traversal testing report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `performing-directory-traversal-testing`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
