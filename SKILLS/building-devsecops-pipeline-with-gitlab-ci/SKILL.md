---
name: building-devsecops-pipeline-with-gitlab-ci
description: "DevSecOps Pipeline Builder Agent - Generates GitLab CI security scanning pipeline configurations. Use when the user asks to build devsecops pipeline with gitlab ci."
version: 1.0.0
tags:
  - building
source: building-devsecops-pipeline-with-gitlab-ci
---

# Building Devsecops Pipeline with Gitlab Ci

**Role:** Capability building  
**Audience:** SOC leads, IR managers, and security engineers  
**Primary tools:** GitLab CI, GitLab Security Templates, Security Variables, Security Scanning Tools, NIST SP 800, GitLab Scanner Coverage Matrix

## When to use

- The user wants to **build** devsecops pipeline with gitlab ci.
- Capability: DevSecOps Pipeline Builder Agent - Generates GitLab CI security scanning pipeline configurations.
- Goal: design and stand up an operational security capability or process.
- Trigger keywords: `building, devsecops, pipeline, gitlab`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Generate .gitlab-ci.yml with security scanning stages
2. Validate CI configuration via GitLab API
3. Assess security coverage of the pipeline
4. Generate DevSecOps pipeline report

## Key concepts

- SCS-1: Secure source code management with protected branches and signed commits
- SCS-2: Secure build pipelines with pinned template versions and runner isolation
- SCS-3: Verified dependencies through dependency scanning and license compliance
- SCS-4: Secure artifacts with container scanning and signed images
- SCS-5: Deployment security with manual gates and environment approvals

## Tools & resources

- GitLab CI
- GitLab Security Templates
- Security Variables
- Security Scanning Tools
- NIST SP 800
- GitLab Scanner Coverage Matrix

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

- `generate_gitlab_ci` — Generate .gitlab-ci.yml with security scanning stages.
- `validate_pipeline` — Validate CI configuration via GitLab API.
- `assess_pipeline_coverage` — Assess security coverage of the pipeline.
- `generate_report` — Generate DevSecOps pipeline report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `building-devsecops-pipeline-with-gitlab-ci`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
