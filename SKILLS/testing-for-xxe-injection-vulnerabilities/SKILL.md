---
name: testing-for-xxe-injection-vulnerabilities
description: "Agent for testing XXE injection vulnerabilities during authorized assessments. Use when the user asks to test for xxe injection vulnerabilities."
version: 1.0.0
tags:
  - testing
  - threat-intel
source: testing-for-xxe-injection-vulnerabilities
---

# Testing for Xxe Injection Vulnerabilities

**Role:** Security testing  
**Audience:** QA security, pentesters, and AppSec engineers  
**Primary tools:** XXE Payload Types, File Paths for Testing

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **test** for xxe injection vulnerabilities.
- Capability: Agent for testing XXE injection vulnerabilities during authorized assessments.
- Goal: validate defenses, applications, or controls under controlled conditions.
- Trigger keywords: `testing, injection, vulnerabilities`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Test if endpoints accept XML content type
2. Test if a JSON endpoint also accepts XML
3. Test an endpoint with XXE payloads
4. Test SVG file upload for XXE
5. Demonstrate safe XML parsing with defusedxml
6. Generate XXE assessment report

## Tools & resources

- XXE Payload Types
- File Paths for Testing

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

- `detect_xml_endpoints` — Test if endpoints accept XML content type.
- `test_content_type_switch` — Test if a JSON endpoint also accepts XML.
- `test_xxe_payloads` — Test an endpoint with XXE payloads.
- `test_svg_upload` — Test SVG file upload for XXE.
- `verify_safe_parsing` — Demonstrate safe XML parsing with defusedxml.
- `generate_report` — Generate XXE assessment report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `testing-for-xxe-injection-vulnerabilities`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
