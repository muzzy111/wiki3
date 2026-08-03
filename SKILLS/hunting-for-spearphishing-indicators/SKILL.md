---
name: hunting-for-spearphishing-indicators
description: "Agent for hunting spearphishing indicators across email and endpoint logs. Use when the user asks to hunt for spearphishing indicators."
version: 1.0.0
tags:
  - hunting
  - email
source: hunting-for-spearphishing-indicators
---

# Hunting for Spearphishing Indicators

**Role:** Threat hunting  
**Audience:** threat hunters and SOC analysts  
**Primary tools:** Email Header Analysis, Suspicious Attachment Types, Splunk SPL, KQL, SPF/DKIM/DMARC Validation, Detection Data Sources

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **hunt for** spearphishing indicators.
- Capability: Agent for hunting spearphishing indicators across email and endpoint logs.
- Goal: proactively search for adversary activity using hypotheses and telemetry.
- Trigger keywords: `hunting, spearphishing, indicators`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Load email logs from JSON lines file
2. Assess risk of email attachment by extension
3. Find emails with dangerous attachment types
4. Detect phishing URLs in email body or links
5. Detect social engineering urgency keywords
6. Detect display name vs envelope sender mismatches

## Key concepts

- Red Canary Threat Detection Report
- SANS Threat Hunting Summit Resources

## Tools & resources

- Email Header Analysis
- Suspicious Attachment Types
- Splunk SPL
- KQL
- SPF/DKIM/DMARC Validation
- Detection Data Sources

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

- `load_email_logs` — Load email logs from JSON lines file.
- `check_attachment_risk` — Assess risk of email attachment by extension.
- `detect_suspicious_attachments` — Find emails with dangerous attachment types.
- `detect_phishing_urls` — Detect phishing URLs in email body or links.
- `detect_urgency_lures` — Detect social engineering urgency keywords.
- `detect_sender_spoofing` — Detect display name vs envelope sender mismatches.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `hunting-for-spearphishing-indicators`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
