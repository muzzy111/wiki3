---
name: implementing-mimecast-targeted-attack-protection
description: "Mimecast Targeted Attack Protection Agent - monitors TAP events and URL/attachment threats. Use when the user asks to implement mimecast targeted attack protection."
version: 1.0.0
tags:
  - implementing
  - threat-intel
source: implementing-mimecast-targeted-attack-protection
---

# Implementing Mimecast Targeted Attack Protection

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** URL Protection Actions, Attachment Sandbox Results, Impersonation Types, Mimecast TTP Components, Compliance Alignment, Impersonation Protection Indicators

## When to use

- The user wants to **implement** mimecast targeted attack protection.
- Capability: Mimecast Targeted Attack Protection Agent - monitors TAP events and URL/attachment threats.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, mimecast, targeted, attack, protection`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Execute authenticated Mimecast API request
2. Get URL Protection logs
3. Get impersonation protection logs
4. Get attachment protection logs
5. Analyze URL click patterns and threat categories
6. Analyze impersonation attack patterns

## Key concepts

- T1566.001: Phishing: Spearphishing Attachment
- T1566.002: Phishing: Spearphishing Link
- T1534: Internal Spearphishing
- T1598: Phishing for Information
- T1656: Impersonation
- T1204.001: User Execution: Malicious Link
- T1204.002: User Execution: Malicious File
- CIS Controls v8 Control 9.2: Use DNS filtering services

## Tools & resources

- URL Protection Actions
- Attachment Sandbox Results
- Impersonation Types
- Mimecast TTP Components
- Compliance Alignment
- Impersonation Protection Indicators

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

- `mimecast_request` — Execute authenticated Mimecast API request.
- `get_url_logs` — Get URL Protection logs.
- `get_impersonation_logs` — Get impersonation protection logs.
- `get_attachment_logs` — Get attachment protection logs.
- `analyze_url_threats` — Analyze URL click patterns and threat categories.
- `analyze_impersonation` — Analyze impersonation attack patterns.
- `generate_report`

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-mimecast-targeted-attack-protection`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
