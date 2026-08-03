---
name: performing-web-cache-deception-attack
description: "Agent for testing web cache deception vulnerabilities. Appends static file extensions to authenticated URLs to test whether CDN/proxy caches serve personalized content to other users. Use when the user asks to perform web cache deception attack."
version: 1.0.0
tags:
  - performing
  - appsec
source: performing-web-cache-deception-attack
---

# Performing Web Cache Deception Attack

**Role:** Hands-on assessment  
**Audience:** pentesters, blue teamers, and DFIR practitioners  
**Primary tools:** Attack Technique, Static Extensions to Test, Cache Detection Headers, Path Delimiter Confusion, Mitigation

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **perform** web cache deception attack.
- Capability: Agent for testing web cache deception vulnerabilities. Appends static file extensions to authenticated URLs to test whether CDN/proxy caches serve personalized content to other users.
- Goal: execute a focused security technique or assessment workflow.
- Trigger keywords: `performing, cache, deception, attack`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Confirm scope, authorization, and safety constraints
2. Prepare tooling and environment for web cache deception attack
3. Execute the technique methodically and record evidence
4. Validate outcomes and eliminate false paths
5. Report results with clear remediation guidance

## Tools & resources

- Attack Technique
- Static Extensions to Test
- Cache Detection Headers
- Path Delimiter Confusion
- Mitigation

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

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `performing-web-cache-deception-attack`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
