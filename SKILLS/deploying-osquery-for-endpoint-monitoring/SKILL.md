---
name: deploying-osquery-for-endpoint-monitoring
description: "osquery endpoint monitoring agent for security auditing. Use when the user asks to deploy osquery for endpoint monitoring."
version: 1.0.0
tags:
  - deploying
source: deploying-osquery-for-endpoint-monitoring
---

# Deploying Osquery for Endpoint Monitoring

**Role:** Deployment  
**Audience:** security platform engineers  
**Primary tools:** osquery, External References

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **deploy** osquery for endpoint monitoring.
- Capability: osquery endpoint monitoring agent for security auditing.
- Goal: roll out a security platform or agent capability safely.
- Trigger keywords: `deploying, osquery, endpoint, monitoring`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Execute osquery and return results
2. Check Fleet server host enrollment status
3. Execute osquery security audit

## Key concepts

- NIST SP 800-53 SI-4: System Monitoring - osquery provides endpoint visibility
- CIS Control 1: Inventory of Enterprise Assets - osquery software/hardware inventory
- CIS Control 2: Software Inventory - osquery package/process queries

## Tools & resources

- osquery
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
| `assets/` | Templates, checklists, and report scaffolds |

## Automation entry points

- `run_osquery` — Execute osquery and return results.
- `check_fleet_status` — Check Fleet server host enrollment status.
- `run_audit` — Execute osquery security audit.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `deploying-osquery-for-endpoint-monitoring`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
