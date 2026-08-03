---
name: implementing-beyondcorp-zero-trust-access-model
description: "BeyondCorp zero trust access assessment agent using Google Cloud IAP API via requests. Use when the user asks to implement beyondcorp zero trust access model."
version: 1.0.0
tags:
  - implementing
  - identity
source: implementing-beyondcorp-zero-trust-access-model
---

# Implementing Beyondcorp Zero Trust Access Model

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** Google Cloud APIs Used, NIST SP 800-207, Google BeyondCorp Papers, Google Cloud IAP Documentation, NIST SP 800-63-3

## When to use

- The user wants to **implement** beyondcorp zero trust access model.
- Capability: BeyondCorp zero trust access assessment agent using Google Cloud IAP API via requests.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, beyondcorp, zero, trust, access, model`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Get access token from gcloud CLI
2. List IAP-protected resources in a GCP project
3. Get IAP settings for a specific resource
4. List Access Context Manager access levels
5. Audit IAM policy bindings for IAP-secured resources
6. Assess BeyondCorp zero trust posture for a project
7. Generate BeyondCorp zero trust assessment report

## Key concepts

- Section 2: Zero Trust Tenets - defines the core principles BeyondCorp implements
- Section 3.1: Policy Engine (PE) and Policy Administrator (PA) - maps to IAP and Access Context Manager
- Section 3.2: Trust Algorithm - corresponds to Access Levels evaluation
- Section 4.1: Device Agent/Gateway-Based Deployment - matches BeyondCorp connector model
- Identity Pillar: MFA enforcement, continuous validation - maps to IAP re-authentication
- Device Pillar: Device health monitoring, compliance enforcement - maps to Endpoint Verification
- Network Pillar: Micro-segmentation, encrypted traffic - maps to IAP tunnel encryption
- Application Pillar: Application access authorization - maps to per-service IAP policies

## Tools & resources

- Google Cloud APIs Used
- NIST SP 800-207
- Google BeyondCorp Papers
- Google Cloud IAP Documentation
- NIST SP 800-63-3

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

- `get_gcloud_token` — Get access token from gcloud CLI.
- `list_iap_resources` — List IAP-protected resources in a GCP project.
- `get_iap_settings` — Get IAP settings for a specific resource.
- `list_access_levels` — List Access Context Manager access levels.
- `audit_iap_bindings` — Audit IAM policy bindings for IAP-secured resources.
- `assess_zero_trust_posture` — Assess BeyondCorp zero trust posture for a project.
- `generate_report` — Generate BeyondCorp zero trust assessment report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-beyondcorp-zero-trust-access-model`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
