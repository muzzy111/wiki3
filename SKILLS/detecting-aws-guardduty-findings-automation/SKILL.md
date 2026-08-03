---
name: detecting-aws-guardduty-findings-automation
description: "AWS GuardDuty findings automation and detection. Use when the user asks to detect aws guardduty findings automation."
version: 1.0.0
tags:
  - detecting
  - cloud
  - threat-intel
source: detecting-aws-guardduty-findings-automation
---

# Detecting AWS Guardduty Findings Automation

**Role:** Detection engineering  
**Audience:** detection engineers and SOC analysts  
**Primary tools:** AWS, Key boto3 GuardDuty Methods, Finding Severity Levels, GuardDuty Finding Types, GuardDuty Protection Features, FindingCriteria Filter

## When to use

- The user wants to **detect** aws guardduty findings automation.
- Capability: AWS GuardDuty findings automation and detection agent.
- Goal: identify malicious or anomalous activity with high-signal detections.
- Trigger keywords: `detecting, guardduty, findings, automation`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Get the active GuardDuty detector ID
2. List GuardDuty findings filtered by severity
3. Get finding count grouped by type and severity
4. Audit GuardDuty detector configuration for coverage gaps
5. Check GuardDuty member account enrollment in multi-account setup
6. Auto-archive findings below severity threshold
7. Execute GuardDuty findings automation audit

## Key concepts

- TA0001 Initial Access: UnauthorizedAccess findings
- TA0003 Persistence: Persistence:IAMUser findings
- TA0005 Defense Evasion: Stealth findings
- TA0006 Credential Access: CredentialAccess findings
- TA0010 Exfiltration: Exfiltration findings
- TA0040 Impact: CryptoCurrency/Trojan findings
- IR-4: Incident Handling
- IR-5: Incident Monitoring

## Tools & resources

- AWS
- Key boto3 GuardDuty Methods
- Finding Severity Levels
- GuardDuty Finding Types
- GuardDuty Protection Features
- FindingCriteria Filter
- External References
- NIST 800-53

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

- `get_guardduty_detector` — Get the active GuardDuty detector ID.
- `list_findings` — List GuardDuty findings filtered by severity.
- `get_finding_statistics` — Get finding count grouped by type and severity.
- `check_detector_configuration` — Audit GuardDuty detector configuration for coverage gaps.
- `check_member_accounts` — Check GuardDuty member account enrollment in multi-account setup.
- `auto_archive_low_severity` — Auto-archive findings below severity threshold.
- `run_audit` — Execute GuardDuty findings automation audit.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `detecting-aws-guardduty-findings-automation`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
