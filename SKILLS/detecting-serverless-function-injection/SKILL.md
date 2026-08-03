---
name: detecting-serverless-function-injection
description: "Serverless Function Injection Detection Agent - Scans Lambda functions for injection vulnerabilities, layer hijacking, and IAM escalation paths. Use when the user asks to detect serverless function injection."
version: 1.0.0
tags:
  - detecting
  - threat-intel
source: detecting-serverless-function-injection
---

# Detecting Serverless Function Injection

**Role:** Detection engineering  
**Audience:** detection engineers and SOC analysts  
**Primary tools:** Arguments, Key Functions, Exit Codes

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **detect** serverless function injection.
- Capability: Serverless Function Injection Detection Agent - Scans Lambda functions for injection vulnerabilities, layer hijacking, and IAM escalation paths.
- Goal: identify malicious or anomalous activity with high-signal detections.
- Trigger keywords: `detecting, serverless, function, injection`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Map Lambda runtime to language family
2. Enumerate all Lambda functions with their configurations
3. Get all event source mappings to identify injection entry points
4. Download function code and scan for injection patterns
5. Audit Lambda layers for security issues
6. Identify Lambda functions with overprivileged execution roles
7. Search CloudTrail for suspicious Lambda modifications
8. Check Lambda function URLs for insecure authentication

## Tools & resources

- Arguments
- Key Functions
- Exit Codes

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

- `detect_runtime_family` — Map Lambda runtime to language family.
- `enumerate_functions` — Enumerate all Lambda functions with their configurations.
- `get_event_source_mappings` — Get all event source mappings to identify injection entry points.
- `download_and_scan_function` — Download function code and scan for injection patterns.
- `audit_layers` — Audit Lambda layers for security issues.
- `detect_privilege_escalation_paths` — Identify Lambda functions with overprivileged execution roles.
- `check_cloudtrail_for_modifications` — Search CloudTrail for suspicious Lambda modifications.
- `check_function_url_security` — Check Lambda function URLs for insecure authentication.
- `generate_report` — Generate comprehensive serverless injection detection report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `detecting-serverless-function-injection`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
