---
name: deploying-cloudflare-access-for-zero-trust
description: "Cloudflare Access zero trust audit agent using Cloudflare API. Use when the user asks to deploy cloudflare access for zero trust."
version: 1.0.0
tags:
  - deploying
  - cloud
  - identity
source: deploying-cloudflare-access-for-zero-trust
---

# Deploying Cloudflare Access for Zero Trust

**Role:** Deployment  
**Audience:** security platform engineers  
**Primary tools:** Access Policy Rule Types, External References, NIST SP 800-207, Cloudflare Documentation, SOC 2 Type II, GDPR

## When to use

- The user wants to **deploy** cloudflare access for zero trust.
- Capability: Cloudflare Access zero trust audit agent using Cloudflare API.
- Goal: roll out a security platform or agent capability safely.
- Trigger keywords: `deploying, cloudflare, access, zero, trust`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Create Cloudflare account and navigate to Zero Trust dashboard
2. Select team name (organization identifier for WARP enrollment)
3. Choose subscription plan based on user count
4. Configure authentication: add primary IdP (Okta, Entra ID, Google Workspace)
5. Add secondary IdP for contractors or partners if needed
6. Enable MFA requirements at the IdP level
7. Install `cloudflared` on a server within the private network
8. Authenticate with `cloudflared tunnel login`
9. Create named tunnel: `cloudflared tunnel create <name>`
10. Configure ingress rules in `config.yml` mapping hostnames to internal services

## Key concepts

- Section 2: ZTA Tenets - Cloudflare Access implements per-request identity verification
- Section 3.2: Enhanced Identity Governance - Access policies enforce continuous authorization
- Section 4.2: Cloud-Based SDP - Cloudflare Tunnel maps to software-defined perimeter architecture
- Identity: SSO with MFA via integrated IdP support
- Device: WARP client posture checks for OS, encryption, EDR
- Network: Cloudflare Tunnel eliminates inbound firewall rules
- Application: Per-application Access policies with session controls
- Cloudflare maintains SOC 2 Type II certification

## Tools & resources

- Access Policy Rule Types
- External References
- NIST SP 800-207
- Cloudflare Documentation
- SOC 2 Type II
- GDPR

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

- `audit_access_config` — Audit Cloudflare Access configuration.
- `run_audit` — Execute Cloudflare Access audit.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `deploying-cloudflare-access-for-zero-trust`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
