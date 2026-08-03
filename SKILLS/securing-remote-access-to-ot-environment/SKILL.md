---
name: securing-remote-access-to-ot-environment
description: "Agent for securing remote access to OT environments. Manages remote access sessions with MFA verification, session recording, role-based access policies, vendor co-attendance requirements, and CIP-005 compliance auditing. Use when the user asks to secure remote access to ot environment."
version: 1.0.0
tags:
  - securing
  - incident-response
source: securing-remote-access-to-ot-environment
---

# Securing Remote Access to Ot Environment

**Role:** Hardening  
**Audience:** security engineers and system owners  
**Primary tools:** Session States, User Roles and Policies, CIP-005-7 R2 Requirements, PAM Solutions

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **secure** remote access to ot environment.
- Capability: Agent for securing remote access to OT environments. Manages remote access sessions with MFA verification, session recording, role-based access policies, vendor co-attendance requirements, and CIP-005 compliance auditing.
- Goal: reduce attack surface and enforce strong security posture.
- Trigger keywords: `securing, remote, access, environment`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Assess current exposure and priorities
2. Apply hardening controls for remote access to ot environment
3. Verify controls do not break critical workflows
4. Document residual risk and monitoring

## Tools & resources

- Session States
- User Roles and Policies
- CIP-005-7 R2 Requirements
- PAM Solutions

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

*High-level skill guide for `securing-remote-access-to-ot-environment`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
