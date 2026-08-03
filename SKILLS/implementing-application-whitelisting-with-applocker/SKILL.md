---
name: implementing-application-whitelisting-with-applocker
description: "Agent for implementing and auditing AppLocker application whitelisting policies. Use when the user asks to implement application whitelisting with applocker."
version: 1.0.0
tags:
  - implementing
source: implementing-application-whitelisting-with-applocker
---

# Implementing Application Whitelisting with Applocker

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** PowerShell AppLocker Management, Rule Collections, GPO Configuration Path, Default Rule Paths, Primary Standards, Compliance Mappings

## When to use

- The user wants to **implement** application whitelisting with applocker.
- Capability: Agent for implementing and auditing AppLocker application whitelisting policies.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, application, whitelisting, applocker`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Parse an exported AppLocker policy XML file
2. Audit AppLocker rules for security weaknesses
3. Analyze AppLocker event logs for blocked and audit events
4. Generate a baseline AppLocker policy recommendation

## Key concepts

- Scope: Comprehensive guidance on planning, implementing, and maintaining application whitelisting
- Key sections: Technology overview, planning process, policy creation, maintenance operations
- Publisher: Australian Cyber Security Centre
- Scope: Application control is Mitigation Strategy #1 in the Essential Eight
- Maturity levels: L1 (block executables in user profiles), L2 (block from all user-writable paths), L3 (Microsoft recommended bl
- Publisher: Center for Internet Security
- Relevance: CIS Controls v8 Control 2 requires software allowlisting for authorized applications
- WDAC and AppLocker Feature Availability: Comparison of capabilities between AppLocker and WDAC

## Tools & resources

- PowerShell AppLocker Management
- Rule Collections
- GPO Configuration Path
- Default Rule Paths
- Primary Standards
- Compliance Mappings
- Microsoft Documentation
- Supporting References

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

- `parse_applocker_policy` — Parse an exported AppLocker policy XML file.
- `audit_applocker_rules` — Audit AppLocker rules for security weaknesses.
- `analyze_applocker_events` — Analyze AppLocker event logs for blocked and audit events.
- `generate_baseline_policy` — Generate a baseline AppLocker policy recommendation.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-application-whitelisting-with-applocker`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
