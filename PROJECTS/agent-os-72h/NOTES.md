---
title: "Notes — Agent OS 72h"
type: project-notes
status: active
created: 2026-08-03
---

# Notes — Agent OS 72h

> Running notes during the 72-hour build.

## Pre-build observations

- `agents.yaml` currently lists only 5 roles (coordinator/coder/researcher/tools/memory). Must be extended to 10+ agents.
- `appearance.json` not found at vault root; the theme is in `.obsidian/themes/PLN`. Replace with `loop-os.css`.
- The LN planner suggests picking a chat server. Rocket.Chat is the safest pick because: (1) self-hosted in Docker, (2) bot SDK, (3) REST + WebSocket, (4) battle-tested. Matterbridge is lighter but lacks bot APIs. Element (Matrix) is heavy. Picking Rocket.Chat.
- The user said "the controller will be custom made by you and will use an openrouter api key." That means a custom system prompt + OpenRouter, not a fine-tune. The prompt lives in `SYSTEM/Architecture.md` and `loopd/controller.py`.
- The user said "the back and front end will be built in obsidian using as few outside resources as possible." That means vault-only. No new web frontend.
- The user said "no emojis, no SVG, no icons, no thumbnails, no decoration of any kind." That means a Phase 3.1 purge is mandatory.
- The user said "the centerpiece of this system should be the gui." Phase 3 is the longest block (18h) by design.
- The user said "i will be supplying over 2 billion tokens a month at a minimum." So the 1B/week budget is one-off, then 2B+/month. Plan for token efficiency above token spend.

## Risks observed

- Phase 2.6 (spawner) is the hardest test of "agent independence" — if `grok` CLI doesn't accept `--inbox`/`--brief` flags, the wrapper must adapt.
- The custom controller LLM needs grounding. Without RAG, it will hallucinate agent paths. Mitigation: hard-coded registry + budget enforcement. The LLM only chooses *which* agent + *what* brief; the registry decides *how* to invoke it.
- Obsidian's Buttons plugin and DataviewJS both run *inside* Obsidian. They cannot trigger Python directly. So control boards must call `loopd` via a REST endpoint OR a local shell command. Make that a Phase 2 task.
- The "24/7 default" claim requires careful Windows host tuning. Docker Desktop may sleep without notification; bind loopd to a Windows Task Scheduler watchdog.

## Decisions made

| Question | Decision | Reason |
|---|---|---|
| Chat server | Rocket.Chat | Self-hosted, mature, bot SDK |
| Custom controller | Prompt + OpenRouter, no fine-tune | User said "use an openrouter api key" |
| Metric store | Prometheus + Grafana | Standard, integrates with node-exporter |
| GUI framework | Obsidian + DataviewJS + Buttons | User spec |
| Inter-agent transport | File-backed (existing `CHAT/INBOX.md`) mirrored to Rocket.Chat | Visible in vault, robust |
| Skill budget | 3 per agent | User spec |
| MCP budget | 2 per agent | User spec |
| Ephemeral rule | All except the 10 named agents | User spec |
| Theme | Single dark CSS, no decoration | User spec |

## Open follow-ups (post-ship)

- REST API for ad-hoc dispatch (`POST /dispatch`)
- Multi-user auth on Rocket.Chat
- Self-improving skill promotion: a skill can be auto-bumped to a workflow recipe
- Predictive scheduler: rebalance work based on expected token cost
- Webhook triggers for the chat server

## Time spent

| Phase | Started | Ended | Hours |
|---|---|---|---|
| 1 | 2026-08-03 11:12 UTC | TBD | TBD |
| 2 | TBD | TBD | TBD |
| 3 | TBD | TBD | TBD |
| 4 | TBD | TBD | TBD |
| 5 | TBD | TBD | TBD |
| 6 | TBD | TBD | TBD |
| **Total** | | | 72h target |
