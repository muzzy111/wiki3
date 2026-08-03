---
name: deploying-palo-alto-prisma-access-zero-trust
description: "Palo Alto Prisma Access zero trust deployment audit. Use when the user asks to deploy palo alto prisma access zero trust."
version: 1.0.0
tags:
  - deploying
  - identity
source: deploying-palo-alto-prisma-access-zero-trust
---

# Deploying Palo Alto Prisma Access Zero Trust

**Role:** Deployment  
**Audience:** security platform engineers  
**Primary tools:** Base URL, Security Rule Actions, HIP Match Criteria, External References

## When to use

- The user wants to **deploy** palo alto prisma access zero trust.
- Capability: Palo Alto Prisma Access zero trust deployment audit agent.
- Goal: roll out a security platform or agent capability safely.
- Trigger keywords: `deploying, palo, alto, prisma, access, zero`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Plan rollout, dependencies, and rollback
2. Deploy components for palo alto prisma access zero trust
3. Smoke-test health and integrations
4. Monitor early telemetry and fix issues
5. Document operational ownership

## Tools & resources

- Base URL
- Security Rule Actions
- HIP Match Criteria
- External References

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

- `audit_security_rules` — Check for overly permissive security rules.
- `run_audit` — Execute Prisma Access zero trust audit.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `deploying-palo-alto-prisma-access-zero-trust`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
