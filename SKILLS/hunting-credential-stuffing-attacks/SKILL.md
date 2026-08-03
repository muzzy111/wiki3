---
name: hunting-credential-stuffing-attacks
description: "Agent for hunting credential stuffing attacks in authentication logs. Use when the user asks to hunt for credential stuffing attacks."
version: 1.0.0
tags:
  - hunting
source: hunting-credential-stuffing-attacks
---

# Hunting Credential Stuffing Attacks

**Role:** Threat hunting  
**Audience:** threat hunters and SOC analysts  
**Primary tools:** Detection Thresholds

## When to use

- The user wants to **hunt for** credential stuffing attacks.
- Capability: Agent for hunting credential stuffing attacks in authentication logs.
- Goal: proactively search for adversary activity using hypotheses and telemetry.
- Trigger keywords: `hunting, credential, stuffing, attacks`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Load authentication logs from CSV or JSON lines
2. Detect credential stuffing by analyzing failed login patterns
3. Detect password spray attacks (one password, many accounts)
4. Detect distributed credential stuffing (many IPs per account)
5. Find accounts with successful login after many failures (compromised)
6. Detect automation by analyzing user-agent distribution
7. Calculate overall authentication attack metrics

## Tools & resources

- Detection Thresholds

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

- `load_auth_logs` — Load authentication logs from CSV or JSON lines.
- `detect_credential_stuffing` — Detect credential stuffing by analyzing failed login patterns.
- `detect_password_spray` — Detect password spray attacks (one password, many accounts).
- `detect_distributed_attack` — Detect distributed credential stuffing (many IPs per account).
- `analyze_success_after_failures` — Find accounts with successful login after many failures (compromised).
- `analyze_user_agent_patterns` — Detect automation by analyzing user-agent distribution.
- `calculate_attack_metrics` — Calculate overall authentication attack metrics.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `hunting-credential-stuffing-attacks`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
