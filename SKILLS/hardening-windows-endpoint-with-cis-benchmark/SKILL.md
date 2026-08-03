---
name: hardening-windows-endpoint-with-cis-benchmark
description: "Agent for auditing Windows endpoints against CIS Benchmark hardening controls. Use when the user asks to hardening windows endpoint with cis benchmark."
version: 1.0.0
tags:
  - hardening
  - windows
source: hardening-windows-endpoint-with-cis-benchmark
---

# Hardening Windows Endpoint with CIS Benchmark

**Role:** Security workflow  
**Audience:** security practitioners  
**Primary tools:** CIS Benchmark Sections, Key Registry Settings, Password Policy Settings, Advanced Audit Policy, GPO Export and Analysis, Automated Tools

## When to use

- The user wants to **harde** windows endpoint with cis benchmark.
- Capability: Agent for auditing Windows endpoints against CIS Benchmark hardening controls.
- Goal: complete the task.
- Trigger keywords: `hardening, windows, endpoint, benchmark`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Run PowerShell command and return output
2. CIS 1.1 — Password Policy
3. CIS 17 — Advanced Audit Policy
4. CIS 9 — Windows Firewall
5. CIS 2.3 — Security Options
6. CIS 18 — Windows Features

## Key concepts

- Publisher: Center for Internet Security (CIS)
- Scope: 400+ security configuration recommendations organized into 19 sections
- Profiles: Level 1 (Corporate), Level 2 (High Security), BitLocker (BL), Next Generation Windows Security (NG)
- Scope: Server-specific recommendations for Member Server and Domain Controller roles
- Profiles: Level 1 (MS/DC), Level 2 (MS/DC)
- Relevance: Foundational server hardening guidance that CIS benchmarks operationalize
- Key sections: OS hardening, user account management, resource access controls
- CIS Controls v8: Maps to Implementation Group (IG) 1, 2, and 3 for prioritized implementation

## Tools & resources

- CIS Benchmark Sections
- Key Registry Settings
- Password Policy Settings
- Advanced Audit Policy
- GPO Export and Analysis
- Automated Tools
- Primary Standards
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

## Automation entry points

- `run_ps` — Run PowerShell command and return output.
- `check_password_policy` — CIS 1.1 — Password Policy.
- `check_audit_policy` — CIS 17 — Advanced Audit Policy.
- `check_windows_firewall` — CIS 9 — Windows Firewall.
- `check_security_options` — CIS 2.3 — Security Options.
- `check_windows_features` — CIS 18 — Windows Features.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `hardening-windows-endpoint-with-cis-benchmark`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
