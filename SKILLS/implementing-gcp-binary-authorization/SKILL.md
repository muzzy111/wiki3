---
name: implementing-gcp-binary-authorization
description: "Agent for auditing and managing GCP Binary Authorization policies. Use when the user asks to implement gcp binary authorization."
version: 1.0.0
tags:
  - implementing
  - cloud
source: implementing-gcp-binary-authorization
---

# Implementing GCP Binary Authorization

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** GCP, Policy Structure, Break-Glass Annotation, SLSA Framework Levels, NIST 800-53, CIS GKE Benchmark

## When to use

- The user wants to **implement** gcp binary authorization.
- Capability: Agent for auditing and managing GCP Binary Authorization policies.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, binary, authorization`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Run a gcloud command and return parsed JSON output
2. Retrieve the Binary Authorization policy for a project
3. List all attestors in the project
4. List attestations for a given attestor
5. Check if a container image has a valid attestation
6. Audit a Binary Authorization policy for security issues
7. Generate a Binary Authorization policy YAML
8. Check continuous validation status on a GKE cluster

## Key concepts

- SLSA 1: Documentation of build process
- SLSA 2: Tamper resistance of build service
- SLSA 3: Extra resistance to threats
- SLSA 4: Highest levels of confidence and trust
- SA-10: Developer Configuration Management
- SA-12: Supply Chain Protection
- SI-7: Software, Firmware, and Information Integrity

## Tools & resources

- GCP
- Policy Structure
- Break-Glass Annotation
- SLSA Framework Levels
- NIST 800-53
- CIS GKE Benchmark

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

- `run_gcloud` — Run a gcloud command and return parsed JSON output.
- `get_binauthz_policy` — Retrieve the Binary Authorization policy for a project.
- `list_attestors` — List all attestors in the project.
- `list_attestations` — List attestations for a given attestor.
- `verify_image_attested` — Check if a container image has a valid attestation.
- `audit_policy` — Audit a Binary Authorization policy for security issues.
- `generate_policy` — Generate a Binary Authorization policy YAML.
- `check_cv_status` — Check continuous validation status on a GKE cluster.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-gcp-binary-authorization`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
