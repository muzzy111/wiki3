---
name: implementing-device-posture-assessment-in-zero-trust
description: "Device posture assessment agent for zero trust endpoint compliance evaluation. Use when the user asks to implement device posture assessment in zero trust."
version: 1.0.0
tags:
  - implementing
  - identity
source: implementing-device-posture-assessment-in-zero-trust
---

# Implementing Device Posture Assessment in Zero Trust

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** Posture Checks, NIST SP 800-207, NIST SP 800-124r2, CrowdStrike ZTA Documentation, Microsoft Intune Compliance, Jamf Pro Compliance

## When to use

- The user wants to **implement** device posture assessment in zero trust.
- Capability: Device posture assessment agent for zero trust endpoint compliance evaluation.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, device, posture, assessment, zero, trust`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Check OS version and patch level
2. Check if disk encryption is enabled
3. Check if host firewall is enabled
4. Check if antivirus/EDR is running
5. Check if screen lock is configured with timeout
6. Compute device posture compliance score
7. Generate device posture assessment report

## Key concepts

- Section 2, Tenet 5: "The enterprise monitors and measures the integrity and security posture of all owned and associated assets"
- Section 3.3: Agent/Gateway Model includes device health as access input
- Traditional: Limited visibility into device health
- Initial: Compliance enforcement via MDM
- Advanced: Continuous monitoring with automated remediation
- Optimal: Real-time posture integrated into every access decision
- Section 3.2: Device compliance checking requirements
- Section 4.1: MDM security capabilities for posture enforcement

## Tools & resources

- Posture Checks
- NIST SP 800-207
- NIST SP 800-124r2
- CrowdStrike ZTA Documentation
- Microsoft Intune Compliance
- Jamf Pro Compliance

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

- `check_os_version` — Check OS version and patch level.
- `check_disk_encryption` — Check if disk encryption is enabled.
- `check_firewall_status` — Check if host firewall is enabled.
- `check_antivirus` — Check if antivirus/EDR is running.
- `check_screen_lock` — Check if screen lock is configured with timeout.
- `compute_posture_score` — Compute device posture compliance score.
- `generate_report` — Generate device posture assessment report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-device-posture-assessment-in-zero-trust`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
