---
name: performing-graphql-depth-limit-attack
description: "Agent for performing GraphQL depth limit attack testing. Use when the user asks to perform graphql depth limit attack."
version: 1.0.0
tags:
  - performing
source: performing-graphql-depth-limit-attack
---

# Performing Graphql Depth Limit Attack

**Role:** Hands-on assessment  
**Audience:** pentesters, blue teamers, and DFIR practitioners  
**Primary tools:** Severity Classification

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **perform** graphql depth limit attack.
- Capability: Agent for performing GraphQL depth limit attack testing.
- Goal: execute a focused security technique or assessment workflow.
- Trigger keywords: `performing, graphql, depth, limit, attack`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Build a deeply nested GraphQL query string
2. Probe GraphQL endpoint for query depth enforcement
3. Test circular reference queries (e.g., user.posts.author.posts...)
4. Test if batched queries bypass depth limits
5. Test wide + deep queries for resource exhaustion potential

## Tools & resources

- Severity Classification

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

- `build_nested_query` — Build a deeply nested GraphQL query string.
- `test_depth_limit` — Probe GraphQL endpoint for query depth enforcement.
- `test_circular_query` — Test circular reference queries (e.g., user.posts.author.posts...).
- `test_batch_query` — Test if batched queries bypass depth limits.
- `test_resource_exhaustion` — Test wide + deep queries for resource exhaustion potential.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `performing-graphql-depth-limit-attack`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
