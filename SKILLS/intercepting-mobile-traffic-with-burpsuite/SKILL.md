---
name: intercepting-mobile-traffic-with-burpsuite
description: "Agent for analyzing intercepted mobile app traffic via mitmproxy for security testing. Use when the user asks to intercepting mobile traffic with burpsuite."
version: 1.0.0
tags:
  - intercepting
  - mobile
source: intercepting-mobile-traffic-with-burpsuite
---

# Intercepting Mobile Traffic with Burpsuite

**Role:** Security workflow  
**Audience:** security practitioners  
**Primary tools:** Burp Suite, mitmproxy Alternative, Certificate Pinning Bypass, CWE Mappings

## When to use

- The user wants to **intercept** mobile traffic with burpsuite.
- Capability: Agent for analyzing intercepted mobile app traffic via mitmproxy for security testing.
- Goal: complete the task.
- Trigger keywords: `intercepting, mobile, traffic, burpsuite`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Load and parse an HTTP Archive (HAR) file from proxy capture
2. Identify HTTP (non-HTTPS) requests from mobile app
3. Scan request/response bodies for sensitive data patterns
4. Analyze authentication headers and token handling
5. Check for certificate pinning indicators in traffic
6. Check API response security headers
7. Generate mobile traffic analysis report

## Tools & resources

- Burp Suite
- mitmproxy Alternative
- Certificate Pinning Bypass
- CWE Mappings

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
| `assets/` | Templates, checklists, and report scaffolds |

## Automation entry points

- `load_har_file` — Load and parse an HTTP Archive (HAR) file from proxy capture.
- `find_insecure_requests` — Identify HTTP (non-HTTPS) requests from mobile app.
- `detect_sensitive_data_leakage` — Scan request/response bodies for sensitive data patterns.
- `check_auth_headers` — Analyze authentication headers and token handling.
- `check_certificate_pinning` — Check for certificate pinning indicators in traffic.
- `check_api_security_headers` — Check API response security headers.
- `generate_report` — Generate mobile traffic analysis report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `intercepting-mobile-traffic-with-burpsuite`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
