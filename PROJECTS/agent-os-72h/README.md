---
title: "LOOP Agent OS — 72-hour Ship"
type: project
status: active
owner: hermes
contributors: [claude, cline, opencode, mavis, grok]
created: 2026-08-03
target: v1.0.0-agent-os
---

# LOOP Agent OS — 72-hour Ship

> The transformation of the LOOP 5-role Obsidian vault into a running Agent OS — custom controller LLM, 10 integrated agents, Docker chat server, dark professional Obsidian GUI, self-improving.

## Brief

Convert the existing LOOP vault into a true Agent OS:

- **Controller LLM** — custom system prompt + OpenRouter API key, no fine-tune
- **10 integrated agents** — Hermes, Claude Code, Grok-CLI, Antigravity-CLI, Cline-CLI, GitHub Copilot, Mavis, OpenCode, OpenWork, Ollama (native)
- **Chat server** — Rocket.Chat in Docker; agents communicate via bus
- **Global services** — skills, MCPs, prompts, models served from `/loop-services/`, not per-agent
- **Self-improvement** — nightly curator + DOJO loop
- **Obsidian GUI** — dark, professional, no decoration. Live dashboards per agent, project flowchart canvas, control boards with buttons, RAM/CPU/Net meters.
- **Preconfigured teams** — OSINT, Software Engineering, Agent Engineering, Knowledge Base Creation, Deep Research, Global Outlook
- **Kanban + daily task list** — controller maintains both
- **Constraints** — ≤3 skills and ≤2 MCPs per agent at any time
- **Ephemeral workers** — created for a task, stopped at completion (everything except the 10 long-lived agents)
- **24/7/365 default** — restart-always containers + Windows Task Scheduler

## Scope

| In Scope | Out of Scope |
|---|---|
| Controller, chat server, GUI, kanban, teams, DOJO, self-improvement | New model training, fine-tuning, marketing |
| One-pass scaffold | Multi-region deploy |
| Single user (this machine) | Multi-user auth |

## Acceptance Criteria

See `PLAN.md` §10 "Verification Checklist" — 12 items, all must pass.

## Owners

- **Primary:** Hermes (orchestrator)
- **Build:** claude, opencode, cline
- **Review:** mavis
- **Wiring:** opencode
- **Tests:** mavis

## Timeline

72 hours from this file's creation (~2026-08-03 11:12 UTC).

## Status

Live: `STATUS.md` (updated per task).

## Files

- `PLAN.md` — the 72-hour plan (this is the single source of truth)
- `STATUS.md` — task-by-task progress
- `INVENTORY.md` — installed vs missing agents
- `DELETION_LOG.md` — what was deleted and why
- `NOTES.md` — running notes

## See Also

- [[../../README]]
- [[../../SYSTEM/Index]]
- [[../../TASKS/Index]]
- [[../../CANVAS/CoWork Dashboard.canvas]]
