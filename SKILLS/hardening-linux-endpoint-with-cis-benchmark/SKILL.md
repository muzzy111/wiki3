---
name: hardening-linux-endpoint-with-cis-benchmark
description: "Agent for auditing Linux endpoints against CIS Benchmark hardening controls. Use when the user asks to hardening linux endpoint with cis benchmark."
version: 1.0.0
tags:
  - hardening
  - linux
source: hardening-linux-endpoint-with-cis-benchmark
---

# Hardening Linux Endpoint with CIS Benchmark

**Role:** Security workflow  
**Audience:** security practitioners  
**Primary tools:** CIS Benchmark Sections, Key sysctl Parameters, Service Management, File Permissions, Automated Tools, Primary Standards

## When to use

- The user wants to **harde** linux endpoint with cis benchmark.
- Capability: Agent for auditing Linux endpoints against CIS Benchmark hardening controls.
- Goal: complete the task.
- Trigger keywords: `hardening, linux, endpoint, benchmark`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. CIS Section 1 — Filesystem Configuration
2. CIS Section 2 — Services
3. CIS Section 3 — Network Parameters
4. CIS Section 5 — Access, Authentication, Authorization
5. CIS Section 4 — Logging and Auditing
6. CIS Section 6 — System File Permissions

## Key concepts

- NIST SP 800-123: Guide to General Server Security
- DISA STIG: Security Technical Implementation Guide for RHEL/Ubuntu

## Tools & resources

- CIS Benchmark Sections
- Key sysctl Parameters
- Service Management
- File Permissions
- Automated Tools
- Primary Standards
- Compliance Mappings
- Supporting References

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

- `check_filesystem_config` — CIS Section 1 — Filesystem Configuration.
- `check_services` — CIS Section 2 — Services.
- `check_network_parameters` — CIS Section 3 — Network Parameters.
- `check_access_auth` — CIS Section 5 — Access, Authentication, Authorization.
- `check_audit_logging` — CIS Section 4 — Logging and Auditing.
- `check_file_permissions` — CIS Section 6 — System File Permissions.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `hardening-linux-endpoint-with-cis-benchmark`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
