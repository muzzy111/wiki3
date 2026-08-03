---
name: reverse-engineering-ios-app-with-frida
description: "Agent for iOS app reverse engineering with Frida. Uses frida-tools to attach to iOS processes, hook Objective-C methods, bypass SSL pinning, dump keychain entries, and trace API calls for security assessment. Use when the user asks to reverse engineer ios app with frida."
version: 1.0.0
tags:
  - reverse-engineering
  - mobile
source: reverse-engineering-ios-app-with-frida
---

# Reverse Engineering IOS App with Frida

**Role:** Reverse engineering  
**Audience:** malware analysts and reverse engineers  
**Primary tools:** Frida CLI Tools, Frida JavaScript API, Common iOS Security Hooks, CWE Mappings

## When to use

- The user wants to **reverse engineer** ios app with frida.
- Capability: Agent for iOS app reverse engineering with Frida. Uses frida-tools to attach to iOS processes, hook Objective-C methods, bypass SSL pinning, dump keychain entries, and trace API calls for security assessment.
- Goal: disassemble and reason about binaries, malware, or protocols.
- Trigger keywords: `reverse, engineering, frida`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Triage the sample safely (hash, packer, environment)
2. Static analysis pass for ios app with frida
3. Dynamic / behavioral analysis as needed
4. Recover capabilities, IOCs, and C2 patterns
5. Document family attribution and detection ideas

## Tools & resources

- Frida CLI Tools
- Frida JavaScript API
- Common iOS Security Hooks
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

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `reverse-engineering-ios-app-with-frida`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
