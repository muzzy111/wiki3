---
name: conducting-mobile-app-penetration-test
description: "Mobile App Penetration Testing Agent - Tests Android/iOS apps for OWASP MASTG vulnerabilities. Use when the user asks to conduct mobile app penetration test."
version: 1.0.0
tags:
  - conducting
  - mobile
  - threat-intel
source: conducting-mobile-app-penetration-test
---

# Conducting Mobile App Penetration Test

**Role:** Structured engagement  
**Audience:** security teams running formal engagements  
**Primary tools:** Key Functions, OWASP MASTG Coverage

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **conduct** mobile app penetration test.
- Capability: Mobile App Penetration Testing Agent - Tests Android/iOS apps for OWASP MASTG vulnerabilities.
- Goal: run a complete assessment, exercise, or investigation end to end.
- Trigger keywords: `conducting, mobile, penetration, test`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Decompile Android APK using apktool for static analysis
2. Extract hardcoded strings from APK for sensitive data detection
3. Analyze AndroidManifest.xml for security misconfigurations
4. Test if the app enforces certificate pinning via mitmproxy check
5. Check for insecure data storage on connected Android device via adb
6. Test mobile app API endpoints for common vulnerabilities
7. Check if the app implements root/jailbreak detection
8. Generate mobile app penetration test report

## Tools & resources

- Key Functions
- OWASP MASTG Coverage

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

- `decompile_apk` — Decompile Android APK using apktool for static analysis.
- `extract_strings_from_apk` — Extract hardcoded strings from APK for sensitive data detection.
- `check_android_manifest` — Analyze AndroidManifest.xml for security misconfigurations.
- `test_certificate_pinning` — Test if the app enforces certificate pinning via mitmproxy check.
- `check_insecure_storage_adb` — Check for insecure data storage on connected Android device via adb.
- `test_api_endpoints` — Test mobile app API endpoints for common vulnerabilities.
- `check_root_detection` — Check if the app implements root/jailbreak detection.
- `generate_report` — Generate mobile app penetration test report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `conducting-mobile-app-penetration-test`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
