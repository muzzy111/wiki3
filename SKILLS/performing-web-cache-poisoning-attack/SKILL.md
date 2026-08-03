---
name: performing-web-cache-poisoning-attack
description: "Web cache poisoning assessment agent using requests and subprocess. Use when the user asks to perform web cache poisoning attack."
version: 1.0.0
tags:
  - performing
  - appsec
source: performing-web-cache-poisoning-attack
---

# Performing Web Cache Poisoning Attack

**Role:** Hands-on assessment  
**Audience:** pentesters, blue teamers, and DFIR practitioners  
**Primary tools:** Unkeyed Headers Tested, Risk Levels

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **perform** web cache poisoning attack.
- Capability: Web cache poisoning assessment agent using requests and subprocess.
- Goal: execute a focused security technique or assessment workflow.
- Trigger keywords: `performing, cache, poisoning, attack`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Generate a unique cache buster parameter
2. Identify caching infrastructure from response headers
3. Determine if responses are being cached by comparing repeated requests
4. Test for unkeyed headers that are reflected in cached responses
5. Test cache key normalization issues
6. Test for web cache deception vulnerabilities
7. Full web cache poisoning assessment

## Tools & resources

- Unkeyed Headers Tested
- Risk Levels

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

- `generate_cache_buster` — Generate a unique cache buster parameter.
- `identify_cache_layer` — Identify caching infrastructure from response headers.
- `test_cache_hit_miss` — Determine if responses are being cached by comparing repeated requests.
- `test_unkeyed_headers` — Test for unkeyed headers that are reflected in cached responses.
- `test_cache_key_normalization` — Test cache key normalization issues.
- `test_cache_deception` — Test for web cache deception vulnerabilities.
- `run_assessment` — Full web cache poisoning assessment.
- `print_report`

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `performing-web-cache-poisoning-attack`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
