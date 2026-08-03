---
name: implementing-zero-trust-network-access-with-zscaler
description: "Agent for auditing Zscaler Private Access (ZPA) zero trust configuration via API. Use when the user asks to implement zero trust network access with zscaler."
version: 1.0.0
tags:
  - implementing
  - network
  - identity
source: implementing-zero-trust-network-access-with-zscaler
---

# Implementing Zero Trust Network Access with Zscaler

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** ZPA Management API, NIST SP 800-207, CSA Software

## When to use

- The user wants to **implement** zero trust network access with zscaler.
- Capability: Agent for auditing Zscaler Private Access (ZPA) zero trust configuration via API.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, zero, trust, network, access, zscaler`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Authenticate to Zscaler ZPA API
2. List ZPA application segments
3. List server groups and their connectors
4. List ZPA access policies to verify least-privilege enforcement
5. Check connector enrollment and health status
6. Generate ZPA audit report

## Key concepts

- Enhanced Identity Governance: ZPA implements this model by using identity as the primary decision factor combined with device trust signals
- Micro-Segmentation: ZPA application segments function as software-defined microsegments at the application layer
- Software Defined Perimeters: ZPA directly implements the SDP model with its broker-based architecture
- Extends zero trust principles to multi-cloud environments
- ZPA App Connectors can be deployed across AWS, Azure, GCP, and on-premises
- Supports workload-to-workload zero trust with ZPA for workloads
- Client-to-Gateway: Standard ZPA deployment (user to application via Service Edge)
- Client-to-Server: ZPA Browser Access (direct browser connection through Service Edge)

## Tools & resources

- ZPA Management API
- NIST SP 800-207
- CSA Software

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

- `authenticate` — Authenticate to Zscaler ZPA API.
- `list_app_segments` — List ZPA application segments.
- `list_server_groups` — List server groups and their connectors.
- `list_access_policies` — List ZPA access policies to verify least-privilege enforcement.
- `check_connector_health` — Check connector enrollment and health status.
- `generate_report` — Generate ZPA audit report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-zero-trust-network-access-with-zscaler`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
