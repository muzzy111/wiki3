---
name: implementing-ransomware-kill-switch-detection
description: "Ransomware kill switch detection and mutex vaccination agent. Detects ransomware kill switch mechanisms (mutexes, domains, registry keys) and can proactively deploy mutex vaccinations to prevent known ransomware.... Use when the user asks to implement ransomware kill switch detection."
version: 1.0.0
tags:
  - implementing
  - malware
  - threat-intel
  - ransomware
source: implementing-ransomware-kill-switch-detection
---

# Implementing Ransomware Kill Switch Detection

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** Known Kill Switch Domains, Velociraptor Mutex Hunting, DNS Kill Switch Monitoring, Mutex Vaccination Deployment Methods

## When to use

- The user wants to **implement** ransomware kill switch detection.
- Capability: Ransomware kill switch detection and mutex vaccination agent. Detects ransomware kill switch mechanisms (mutexes, domains, registry keys) and can proactively deploy mutex vaccinations to prevent known ransomware families from executing. Monitors for kill switch domain DNS queries.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, ransomware, kill, switch, detection`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Check if a named mutex exists on Windows using PowerShell
2. Create a named mutex on Windows for vaccination
3. Check if a kill switch domain resolves (indicating it is active)
4. Scan for all known kill switch mechanisms
5. Deploy mutex vaccinations to prevent ransomware execution
6. Generate a PowerShell script for persistent mutex vaccination

## Tools & resources

- Known Kill Switch Domains
- Velociraptor Mutex Hunting
- DNS Kill Switch Monitoring
- Mutex Vaccination Deployment Methods

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

## Automation entry points

- `check_mutex_exists_windows` — Check if a named mutex exists on Windows using PowerShell.
- `create_mutex_windows` — Create a named mutex on Windows for vaccination.
- `check_kill_switch_domain` — Check if a kill switch domain resolves (indicating it is active).
- `scan_all_kill_switches` — Scan for all known kill switch mechanisms.
- `vaccinate_endpoint` — Deploy mutex vaccinations to prevent ransomware execution.
- `generate_vaccination_script` — Generate a PowerShell script for persistent mutex vaccination.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-ransomware-kill-switch-detection`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
