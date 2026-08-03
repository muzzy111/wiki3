---
name: implementing-google-workspace-phishing-protection
description: "Agent for auditing Google Workspace phishing and malware protection settings. Use when the user asks to implement google workspace phishing protection."
version: 1.0.0
tags:
  - implementing
  - threat-intel
  - email
source: implementing-google-workspace-phishing-protection
---

# Implementing Google Workspace Phishing Protection

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** Admin Console Path, Gmail Safety Controls, Recommended Actions for Spoofing, Key Protection Settings

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **implement** google workspace phishing protection.
- Capability: Agent for auditing Google Workspace phishing and malware protection settings.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, google, workspace, phishing, protection`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Run a GAM (Google Apps Manager) command
2. Retrieve Gmail safety settings via Admin SDK (simulated via GAM)
3. Audit Google Workspace phishing protection configuration
4. Analyze DMARC aggregate report for alignment issues
5. Analyze phishing incident log for patterns
6. Generate recommended Google Workspace phishing protection settings

## Key concepts

- Admin Console > Apps > Google Workspace > Gmail > Safety
- Admin Console > Security > Gmail Enhanced Safe Browsing
- Admin Console > Apps > Google Workspace > Gmail > Authenticate email
- T1566.001: Phishing: Spearphishing Attachment
- T1566.002: Phishing: Spearphishing Link
- T1656: Impersonation
- T1586.002: Compromise Accounts: Email Accounts

## Tools & resources

- Admin Console Path
- Gmail Safety Controls
- Recommended Actions for Spoofing
- Key Protection Settings

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

- `gam_command` — Run a GAM (Google Apps Manager) command.
- `get_gmail_safety_settings` — Retrieve Gmail safety settings via Admin SDK (simulated via GAM).
- `audit_phishing_protection` — Audit Google Workspace phishing protection configuration.
- `audit_dmarc_alignment` — Analyze DMARC aggregate report for alignment issues.
- `analyze_phishing_incidents` — Analyze phishing incident log for patterns.
- `generate_recommended_settings` — Generate recommended Google Workspace phishing protection settings.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-google-workspace-phishing-protection`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
