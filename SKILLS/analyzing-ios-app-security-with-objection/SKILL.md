---
name: analyzing-ios-app-security-with-objection
description: "iOS app security analysis agent using Objection/Frida concepts. Performs runtime security assessment of iOS apps including SSL pinning bypass, keychain dumping, filesystem inspection, and jailbreak detection bypass. Use when the user asks to analyze ios app security with objection."
version: 1.0.0
tags:
  - analyzing
  - mobile
  - threat-intel
source: analyzing-ios-app-security-with-objection
---

# Analyzing IOS App Security with Objection

**Role:** Deep analysis  
**Audience:** analysts and investigators  
**Primary tools:** Objection, Frida CLI, iOS App Sandbox Paths, OWASP MASTG Test Cases, Apple Platform Security Requirements

## When to use

- The user wants to **analyze** ios app security with objection.
- Capability: iOS app security analysis agent using Objection/Frida concepts. Performs runtime security assessment of iOS apps including SSL pinning bypass, keychain dumping, filesystem inspection, and jailbreak detection bypass.
- Goal: extract findings, indicators, and conclusions from technical evidence.
- Trigger keywords: `analyzing, security, objection`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Execute an Objection command against a target app
2. Execute a Frida script against target app
3. Dump keychain items accessible by the application
4. Dump HTTP cookies stored by the application
5. List Objective-C classes loaded in the app
6. Check and bypass SSL certificate pinning
7. Check for and bypass jailbreak detection
8. Inspect the application's filesystem sandbox

## Tools & resources

- Objection
- Frida CLI
- iOS App Sandbox Paths
- OWASP MASTG Test Cases
- Apple Platform Security Requirements

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

- `run_objection` — Execute an Objection command against a target app.
- `run_frida` — Execute a Frida script against target app.
- `dump_keychain` — Dump keychain items accessible by the application.
- `dump_cookies` — Dump HTTP cookies stored by the application.
- `list_classes` — List Objective-C classes loaded in the app.
- `check_ssl_pinning` — Check and bypass SSL certificate pinning.
- `check_jailbreak_detection` — Check for and bypass jailbreak detection.
- `inspect_filesystem` — Inspect the application's filesystem sandbox.
- `dump_plist` — Dump application plist configuration files.
- `check_pasteboard` — Check pasteboard/clipboard for sensitive data.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `analyzing-ios-app-security-with-objection`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
