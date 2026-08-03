---
name: scanning-container-images-with-grype
description: "Agent for scanning container images with Anchore Grype. Runs Grype CLI against container images, parses JSON results, applies severity thresholds, and generates vulnerability reports with remediation guidance. Use when the user asks to scan container images with grype."
version: 1.0.0
tags:
  - scanning
source: scanning-container-images-with-grype
---

# Scanning Container Images with Grype

**Role:** Security scanning  
**Audience:** security engineers and vulnerability management teams  
**Primary tools:** Input Sources, Severity Levels, Industry Standards, CVSS Scoring Reference, Compliance Mappings

## When to use

- The user wants to **scan** container images with grype.
- Capability: Agent for scanning container images with Anchore Grype. Runs Grype CLI against container images, parses JSON results, applies severity thresholds, and generates vulnerability reports with remediation guidance.
- Goal: discover exposures, misconfigurations, and vulnerable assets.
- Trigger keywords: `scanning, container, images, grype`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Review critical/high findings from scan output
2. Check if fix versions are available (`fix.versions` in JSON output)
3. Update base image to latest patched version
4. Update application dependencies
5. Rebuild and rescan to verify remediation
6. Add accepted risks to `.grype.yaml` ignore list with documented justification

## Key concepts

- Section 4.1: Image vulnerabilities - Recommends scanning images for known vulnerabilities before deployment
- Section 4.2: Image configuration defects - Covers misconfigurations in container images
- Recommends integrating vulnerability scanning into CI/CD pipelines
- Rule 4.1: Ensure a user for the container has been created
- Rule 4.6: Add HEALTHCHECK instruction to the container image
- Rule 4.9: Ensure that COPY is used instead of ADD
- Rule 4.10: Ensure secrets are not stored in Dockerfiles
- RA-5: Vulnerability Monitoring and Scanning

## Tools & resources

- Input Sources
- Severity Levels
- Industry Standards
- CVSS Scoring Reference
- Compliance Mappings

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

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `scanning-container-images-with-grype`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
