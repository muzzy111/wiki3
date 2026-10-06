# LOOP Vault — LOOP Agent OS

## Before Starting Any Task

Before research, planning, or file modifications, confirm user intent first.
The full procedure is enforced by `.claude/rules/intent-gate.md`. When context is
insufficient, invoke `.claude/skills/intent-clarifier/` using `AskUserQuestion`.

- Create / port / design / decide / ambiguous-scope requests require intent confirmation
- Questions via `AskUserQuestion` tool only (no text-wait pattern)
- No file writes, external research, or finalized plans before confirmation

## What This Vault Is

LOOP Vault is a 10-agent orchestration OS. Agents run as persistent CLI processes on a
NATS bus and coordinate through this vault's rules, skills, and task folders.

Core references (read at session start):
- `AGENTS.md` — entry point: authority hierarchy, vault map, and working rules
- `SYSTEM/agents.yaml` — 10 CLI agents, NATS subjects, model profiles
- `SYSTEM/Index.md` — system folder overview and authority
- `MEMORY/Index.md` — memory topology
- `TASKS/STATUS/` — open work before starting anything new

@AGENTS.md

## Workflow Matrix

| Workflow | Purpose | Entry condition | Spec |
|---|---|---|---|
| New agent | Create and deploy a new agent | User requests new capability | `WORKSHOP/Index.md` |
| Task routing | Route work to the right agent | Incoming task via NATS or chat | `MONITOR/Agents.md` |
| Karpathy curation | Promote raw captures to wiki | Weekly or on-demand | `5.0MEMORY/SKILLS/Karpathy Wiki Curation.md` |
| Skill install | Promote a skill pack into `SKILLS/` | User requests promotion from `LIBRARY/` | `WORKSHOP/Index.md` |
| Vault rebuild | Restructure OS generation | User initiates major overhaul | `SYSTEM/SYSTEM RECORD/` |

When a request arrives: pick the most specific workflow above. If none fits, check
`TASKS/STATUS/` for open work first, then handle inline with the lowest-complexity path.

## Collaboration Protocol

When uncertain or when two or more reasonable choices exist, use `AskUserQuestion`
before proceeding. Base actions only on explicit answers or facts confirmed in the vault.

Sub-agents do not call `AskUserQuestion`. They record uncertainties under an
`## Escalations` section with `[BLOCKING]` / `[ASK]` / `[NOTE]` tags and return
them to the orchestrator. The orchestrator consolidates and surfaces to the user.

## Git Conventions

Commit format: `v{major}.{minor}.{patch}-{slug}: {description}`  
Examples from history: `v2.0.0-vault-rebuild: rebuild from wiki2 snapshot` · `v1.0.0-agent-os: LOOP Agent OS shipped`

BYOK model overrides: `MCP/servers/byok-gateway/BYOK.md` — add `llm:` block to agent entry in `SYSTEM/agents.yaml`.

## Known Stale Documents

The following predate the 2026-10-03 rebuild — trust `AGENTS.md` and `SYSTEM/agents.yaml`
where they disagree:
- `SYSTEM/SYSTEM RULES/Rules.md` — references four-agent era names and old folder paths
- `SYSTEM/Operating Manual.md` — references old vault paths
- `README.md` — describes five roles; `agents.yaml` registers ten CLI agents

See `SYSTEM/SYSTEM RECORD/2026-10-03 — Vault Rebuild.md` for what changed and why.
