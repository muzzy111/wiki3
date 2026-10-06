---
phase: 0
completed: true
status: ok
advisor_status: N/A
track: full
---

# 00 — Target Path & Pre-collected Answers

## Summary

Phase 0 interview complete. All 10 items (path + A1–A10) collected via three sequential AskUserQuestion calls. No silent inference. Language preference set to English.

## Files Generated

- `docs/loop-vault-setup/00-target-path.md` (this file)

## Pre-collected Answers

| Item | Answer | Source Call# | Option Label |
|------|--------|-------------|--------------|
| Path | `C:\Vaults\wiki3` | AskUserQuestion#1 | (free text — N/A) |
| A1 Name | LOOP Vault — LOOP Agent OS | AskUserQuestion#2 | `LOOP Vault — LOOP Agent OS` |
| A2 Type | Agent pipeline | AskUserQuestion#1 | `에이전트 파이프라인` |
| A3 Solo/Team | Solo | AskUserQuestion#1 | `솔로` |
| A5 Performance | High-performance (Opus) | AskUserQuestion#2 | `High-performance (Opus)` |
| A6 Quality axes | Agent pipeline focus | AskUserQuestion#2 | `Agent pipeline focus` |
| A7 Frequency | High / operational (multiple times daily or team infra) | AskUserQuestion#2 | `High / operational (multiple times daily or team infra)` |
| A8 Maturity | Personal tool | AskUserQuestion#3 | `Personal tool` |
| A9 Complexity | Complex | AskUserQuestion#3 | `Complex` |
| A10 Scope | Full (10+ agents, 3+ reviewers, ~50 files, 60+ min, HITL gates, Session Recovery) | AskUserQuestion#3 | `Full (10+ agents, 3+ reviewers, ~50 files, 60+ min, HITL gates, Session Recovery)` |

## Context for Next Phase

- Target path: `C:\Vaults\wiki3`
- Request name: `loop-vault-setup`
- Route: TBD by phase-setup scan (existing CLAUDE.md + AGENTS.md detected — may route to harness-audit)
- Operating mode: Full Mode (no --fast keyword)
- Language preference: **English** (user cannot read Korean — all generated harness files must be in English)
- Agreed Scope: Full (10+ agents, 3+ reviewers, ~50 files, HITL gates, Session Recovery)
- AI Recommended: Full
- Justification: Opus tier + Agent pipeline + High-operational + Complex tasks → full oversight and recovery patterns warranted; A8=Personal tool keeps reviewer count lean but does not reduce pipeline review gates
- A7 vs A8 tension: high-frequency / personal-only → keep HITL gates, omit team-sharing rules and branch protection patterns
- A6 = Agent pipeline focus → Fast-Forward (Phase 3–5 integration) path is a candidate

## Escalations

None.

## Next Steps

1. Spawn `harness-architect:phase-setup` against `C:\Vaults\wiki3`
2. Phase-setup reads this file for pre-collected answers before running its own interview
