---
name: implementing-email-sandboxing-with-proofpoint
description: "Agent for implementing and monitoring Proofpoint email sandboxing. Use when the user asks to implement email sandboxing with proofpoint."
version: 1.0.0
tags:
  - implementing
  - email
source: implementing-email-sandboxing-with-proofpoint
---

# Implementing Email Sandboxing with Proofpoint

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** Proofpoint TAP SIEM API, Threat Categories, URL Defense Configuration, NIST Guidelines, Sandbox File Types

## When to use

- The user wants to **implement** email sandboxing with proofpoint.
- Capability: Agent for implementing and monitoring Proofpoint email sandboxing.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, email, sandboxing, proofpoint`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Query Proofpoint TAP SIEM API for threats
2. Analyze Proofpoint sandbox detonation results
3. Calculate email security metrics from logs
4. Generate Proofpoint URL Defense configuration

## Key concepts

- T1566.001: Phishing: Spearphishing Attachment (primary detection)
- T1566.002: Phishing: Spearphishing Link (URL Defense)
- T1204.001/002: User Execution: Malicious Link/File
- T1059: Command and Scripting Interpreter (macro detection)
- T1027: Obfuscated Files or Information
- NIST SP 800-177: Trustworthy Email - attachment security
- NIST SP 800-83 Rev.1: Guide to Malware Incident Prevention
- NIST SP 800-53: SI-3 Malicious Code Protection, SI-8 Spam Protection

## Tools & resources

- Proofpoint TAP SIEM API
- Threat Categories
- URL Defense Configuration
- NIST Guidelines
- Sandbox File Types

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

- `get_tap_threats` — Query Proofpoint TAP SIEM API for threats.
- `analyze_sandbox_results` — Analyze Proofpoint sandbox detonation results.
- `calculate_email_metrics` — Calculate email security metrics from logs.
- `generate_url_defense_config` — Generate Proofpoint URL Defense configuration.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-email-sandboxing-with-proofpoint`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
