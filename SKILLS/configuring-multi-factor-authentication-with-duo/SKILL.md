---
name: configuring-multi-factor-authentication-with-duo
description: "Duo MFA configuration and audit agent using Duo Admin API. Use when the user asks to configure multi factor authentication with duo."
version: 1.0.0
tags:
  - configuring
source: configuring-multi-factor-authentication-with-duo
---

# Configuring Multi Factor Authentication with Duo

**Role:** Secure configuration  
**Audience:** security engineers and platform admins  
**Primary tools:** External References, NIST Standards, Duo Documentation, CISA Guidance, Compliance

## When to use

- The user wants to **configure** multi factor authentication with duo.
- Capability: Duo MFA configuration and audit agent using Duo Admin API.
- Goal: harden and tune security tooling for production use.
- Trigger keywords: `configuring, multi, factor, authentication`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Audit MFA enrollment coverage
2. Analyze authentication logs for anomalies
3. Execute Duo MFA audit

## Key concepts

- NIST SP 800-63B: Digital Identity Guidelines - Authentication and Lifecycle Management
- AAL1: Single-factor authentication
- AAL2: Multi-factor authentication (Duo Push, TOTP)
- AAL3: Hardware-based phishing-resistant (FIDO2, PIV)
- NIST SP 800-53 Rev 5: IA-2, IA-2(1), IA-2(2), IA-2(6), IA-2(8), IA-3, IA-5
- CISA MFA Guidance: Phishing-resistant MFA requirement for federal agencies
- EO 14028: Executive Order on Improving the Nation's Cybersecurity - MFA mandate
- PCI DSS 4.0: Requirement 8.3.1 - MFA for all access to CDE

## Tools & resources

- External References
- NIST Standards
- Duo Documentation
- CISA Guidance
- Compliance

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

- `audit_mfa_coverage` — Audit MFA enrollment coverage.
- `analyze_auth_logs` — Analyze authentication logs for anomalies.
- `run_audit` — Execute Duo MFA audit.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `configuring-multi-factor-authentication-with-duo`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
