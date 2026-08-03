---
name: performing-ios-app-security-assessment
description: "iOS App Security Assessment Agent - Automates Frida-based iOS security testing including SSL pinning bypass, keychain extraction, IPA static analysis, and runtime method hooking. Use when the user asks to perform ios app security assessment."
version: 1.0.0
tags:
  - performing
  - mobile
source: performing-ios-app-security-assessment
---

# Performing IOS App Security Assessment

**Role:** Hands-on assessment  
**Audience:** pentesters, blue teamers, and DFIR practitioners  
**Primary tools:** Arguments, Key Functions, Frida Script Payloads, OWASP MASVS Coverage

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **perform** ios app security assessment.
- Capability: iOS App Security Assessment Agent - Automates Frida-based iOS security testing including SSL pinning bypass, keychain extraction, IPA static analysis, and runtime method hooking.
- Goal: execute a focused security technique or assessment workflow.
- Trigger keywords: `performing, security, assessment`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Perform static analysis on an IPA file
2. Execute a Frida script against a target iOS application
3. Execute an Objection command against a target app
4. Dump and analyze keychain items for insecure storage practices
5. Generate comprehensive iOS security assessment report

## Tools & resources

- Arguments
- Key Functions
- Frida Script Payloads
- OWASP MASVS Coverage

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

- `analyze_ipa_static` — Perform static analysis on an IPA file.
- `run_frida_script` — Execute a Frida script against a target iOS application.
- `run_objection_command` — Execute an Objection command against a target app.
- `assess_keychain_security` — Dump and analyze keychain items for insecure storage practices.
- `generate_report` — Generate comprehensive iOS security assessment report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `performing-ios-app-security-assessment`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
