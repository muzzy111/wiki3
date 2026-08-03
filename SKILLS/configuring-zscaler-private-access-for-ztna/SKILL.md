---
name: configuring-zscaler-private-access-for-ztna
description: "Zscaler Private Access (ZPA) ZTNA audit agent using ZPA API. Use when the user asks to configure zscaler private access for ztna."
version: 1.0.0
tags:
  - configuring
source: configuring-zscaler-private-access-for-ztna
---

# Configuring Zscaler Private Access for Ztna

**Role:** Secure configuration  
**Audience:** security engineers and platform admins  
**Primary tools:** Key ZPA Concepts, External References, NIST SP 800-207, Zscaler Documentation, NIST SP 800-63-3, Gartner ZTNA Market Guide

## When to use

- The user wants to **configure** zscaler private access for ztna.
- Capability: Zscaler Private Access (ZPA) ZTNA audit agent using ZPA API.
- Goal: harden and tune security tooling for production use.
- Trigger keywords: `configuring, zscaler, private, access, ztna`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Map current VPN access patterns: which users access which applications
2. Identify all internal applications by FQDN, IP, and port
3. Group applications into logical segments by business function and sensitivity
4. Design App Connector placement: minimum 2 connectors per data center for HA
5. Plan DNS resolution: App Connectors must resolve all application FQDNs
6. Configure SAML 2.0 or OIDC integration with corporate IdP (Okta, Entra ID, Ping)
7. Map IdP user groups to ZPA access policy groups
8. Configure SCIM provisioning for automated user/group sync
9. Test SSO authentication flow end-to-end
10. Provision Linux VMs (CentOS/RHEL/Ubuntu) meeting minimum specs (2 vCPU, 4GB RAM)

## Key concepts

- Section 2.1: Zero Trust Tenets - ZPA implements "never trust, always verify" with per-session application access
- Section 3.1: Policy Engine / Policy Administrator - maps to ZPA access policy engine
- Section 3.3: Agent/Gateway Model - maps to Zscaler Client Connector + App Connector architecture
- Network Pillar: Application micro-segmentation - ZPA application segments eliminate network-level access
- Identity Pillar: Continuous validation - ZPA evaluates identity and posture per session
- Section 4-6: Identity assurance levels relevant to ZPA IdP integration
- Section 302/404: Access controls for financial systems - ZPA provides auditable per-application access
- Application-level access logging satisfies audit trail requirements

## Tools & resources

- Key ZPA Concepts
- External References
- NIST SP 800-207
- Zscaler Documentation
- NIST SP 800-63-3
- Gartner ZTNA Market Guide

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

- `audit_zpa_config` — Audit ZPA configuration for security posture.
- `run_audit` — Execute ZPA ZTNA audit.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `configuring-zscaler-private-access-for-ztna`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
