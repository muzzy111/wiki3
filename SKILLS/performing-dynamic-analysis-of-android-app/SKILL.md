---
name: performing-dynamic-analysis-of-android-app
description: "Agent for performing dynamic analysis of Android applications using Frida. Use when the user asks to perform dynamic analysis of android app."
version: 1.0.0
tags:
  - performing
  - mobile
source: performing-dynamic-analysis-of-android-app
---

# Performing Dynamic Analysis of Android App

**Role:** Hands-on assessment  
**Audience:** pentesters, blue teamers, and DFIR practitioners  
**Primary tools:** Frida API Calls, CWE Mappings

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **perform** dynamic analysis of android app.
- Capability: Agent for performing dynamic analysis of Android applications using Frida.
- Goal: execute a focused security technique or assessment workflow.
- Trigger keywords: `performing, dynamic, analysis, android`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. List installed packages on Android device/emulator
2. Capture network traffic from Android device using tcpdump
3. Check if app implements SSL/TLS certificate pinning using Frida
4. List exported activities, services, receivers, and providers
5. Check for insecure data storage patterns

## Tools & resources

- Frida API Calls
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

- `list_packages` — List installed packages on Android device/emulator.
- `capture_network_traffic` — Capture network traffic from Android device using tcpdump.
- `check_ssl_pinning` — Check if app implements SSL/TLS certificate pinning using Frida.
- `analyze_exported_components` — List exported activities, services, receivers, and providers.
- `check_data_storage` — Check for insecure data storage patterns.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `performing-dynamic-analysis-of-android-app`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
