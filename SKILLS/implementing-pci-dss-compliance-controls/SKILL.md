---
name: implementing-pci-dss-compliance-controls
description: "PCI DSS compliance control audit agent. Audits systems and configurations against PCI DSS v4.0 requirements including network segmentation, encryption, access controls, logging, vulnerability management, and secure.... Use when the user asks to implement pci dss compliance controls."
version: 1.0.0
tags:
  - implementing
source: implementing-pci-dss-compliance-controls
---

# Implementing Pci Dss Compliance Controls

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** Core Compliance Checks, Summary, Findings, Primary Standard, Key Requirements, Cross-References

## When to use

- The user wants to **implement** pci dss compliance controls.
- Capability: PCI DSS compliance control audit agent. Audits systems and configurations against PCI DSS v4.0 requirements including network segmentation, encryption, access controls, logging, vulnerability management, and secure configuration checks.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, compliance, controls`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. PCI DSS Req 4.2.1 - Strong cryptography for transmission
2. PCI DSS Req 8.3.6 - Password complexity requirements
3. PCI DSS Req 10.2 - Audit logging configuration
4. PCI DSS Req 11.5.2 - File integrity monitoring
5. PCI DSS Req 2.2.2 - Change vendor defaults
6. PCI DSS Req 1.3 - Network segmentation check
7. Print PCI DSS audit summary

## Key concepts

- Standard: PCI DSS v4.0.1
- Governing Body: PCI Security Standards Council
- Requirement 1: Install and maintain network security controls
- Requirement 2: Apply secure configurations to all system components
- Requirement 3: Protect stored account data
- Requirement 4: Protect cardholder data with strong cryptography during transmission
- Requirement 5: Protect all systems and networks from malicious software
- Requirement 6: Develop and maintain secure systems and software

## Tools & resources

- Core Compliance Checks
- Summary
- Findings
- Primary Standard
- Key Requirements
- Cross-References

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

- `check_tls_configuration` — PCI DSS Req 4.2.1 - Strong cryptography for transmission.
- `check_password_policy` — PCI DSS Req 8.3.6 - Password complexity requirements.
- `check_audit_logging` — PCI DSS Req 10.2 - Audit logging configuration.
- `check_file_integrity` — PCI DSS Req 11.5.2 - File integrity monitoring.
- `check_default_credentials` — PCI DSS Req 2.2.2 - Change vendor defaults.
- `check_network_segmentation` — PCI DSS Req 1.3 - Network segmentation check.
- `format_summary` — Print PCI DSS audit summary.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-pci-dss-compliance-controls`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
