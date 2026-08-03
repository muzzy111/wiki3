---
name: configuring-microsegmentation-for-zero-trust
description: "Microsegmentation audit agent for zero trust network enforcement. Use when the user asks to configure microsegmentation for zero trust."
version: 1.0.0
tags:
  - configuring
  - identity
source: configuring-microsegmentation-for-zero-trust
---

# Configuring Microsegmentation for Zero Trust

**Role:** Secure configuration  
**Audience:** security engineers and platform admins  
**Primary tools:** Key boto3 EC2 Methods, Segmentation Enforcement Modes, External References, NIST SP 800-207, PCI DSS v4.0, VMware NSX Distributed Firewall

## When to use

- The user wants to **configure** microsegmentation for zero trust.
- Capability: Microsegmentation audit agent for zero trust network enforcement.
- Goal: harden and tune security tooling for production use.
- Trigger keywords: `configuring, microsegmentation, zero, trust`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Audit AWS security groups for microsegmentation compliance
2. Check Illumio workload segmentation status
3. Generate microsegmentation policy recommendations
4. Execute microsegmentation audit

## Key concepts

- Places individual or groups of resources on a unique network segment protected by a gateway security component
- This approach can be implemented using software-defined networking (SDN) or hypervisor-level enforcement
- AC-4 (Information Flow Enforcement): Microsegmentation enforces approved information flows between workloads
- SC-7 (Boundary Protection): Each microsegment boundary acts as a security boundary
- SI-4 (Information System Monitoring): Microsegmentation tools provide flow telemetry for monitoring
- Flow telemetry from microsegmentation agents feeds into SIEM/SOAR
- Application dependency maps provide baseline for anomaly detection
- Policy violation alerts enable real-time incident detection

## Tools & resources

- Key boto3 EC2 Methods
- Segmentation Enforcement Modes
- External References
- NIST SP 800-207
- PCI DSS v4.0
- VMware NSX Distributed Firewall
- Illumio Core Platform

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

- `audit_aws_security_groups` — Audit AWS security groups for microsegmentation compliance.
- `check_illumio_workloads` — Check Illumio workload segmentation status.
- `generate_segmentation_policy` — Generate microsegmentation policy recommendations.
- `run_audit` — Execute microsegmentation audit.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `configuring-microsegmentation-for-zero-trust`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
