---
title: "Agent Entry Point"
type: agent-entry
status: active
created: 2026-10-03
---

# LOOP Vault: Agent Entry Point

Every agent reads this file first. It tells you where things are and what binds you. It does not replace the system documents; it routes to them.

## Authority, highest first

1. `SYSTEM/SYSTEM RULES/Rules.md` (binding on every agent and every instruction)
2. `SYSTEM/LOCK/` (read-only unless the user unlocks in the current session)
3. Your role definition: `<role folder>/AGENT.md`
4. Skills, prompts and workflows

## At the start of a session

1. Read `SYSTEM/Index.md` and `SYSTEM/agents.yaml` to find your role.
2. Read your role's `AGENT.md` and its `RULES/` folder.
3. Read `MEMORY/Index.md` for current state.
4. Check `TASKS/STATUS/` for open work before starting anything new.

## Map

| Area | Folders | Use |
|---|---|---|
| System | `SYSTEM/` | Rules, goals, registry, record, templates |
| Roles | `1.0COORDINATOR/` `2.0CODER/` `3.0RESEARCHER/` `4.0TOOLS/` `5.0MEMORY/` | One folder per role |
| CLI adapters | `agents/` | Per-CLI configuration for the ten agents in `agents.yaml` |
| Work | `TASKS/` `WORKFLOWS/` `CHAT/` `CANVAS/` `PROJECTS/` | Live work and its status |
| Memory | `MEMORY/` | Shared memory, including the Karpathy wiki |
| Capabilities | `SKILLS/` `PROMPTS/` `MCP/` `scripts/` | What agents can load and run |
| Reference | `KNOWLEDGE/` `LIBRARY/` | Notes, prompt collections and third-party skill packs. Read on demand |
| History | `ARCHIVE/` | Earlier OS generations and superseded copies. Do not load by default |
| Intake | `INBOX/` | Unsorted material waiting for triage |

## Working rules for this layout

- `SKILLS/` holds about 775 skills. Find one by name, then open only that `SKILL.md`. Do not scan the folder into context.
- `LIBRARY/skill-packs/` is reference material, not installed skills. Promote a pack into `SKILLS/` deliberately, through review.
- Code repositories are not in the vault. They live in `C:\AI-Workspace\repos`, with one pointer note each in `PROJECTS/_repos/`.
- Secrets never enter the vault. `.env` files stay with their repo and are git-ignored.
- History and sync are git. Google Drive does not sync this vault.

## Known stale documents

These predate the 2026-10-03 rebuild and still need reconciling. Trust this file and `SYSTEM/agents.yaml` where they disagree.

- `SYSTEM/SYSTEM RULES/Rules.md` names agents from the four-agent era (Hermes, Mavis, OpenCode, AGY) and old folder names.
- `SYSTEM/Operating Manual.md` gives old vault paths.
- `README.md` describes five roles; `SYSTEM/agents.yaml` registers ten CLI agents.

See `SYSTEM/SYSTEM RECORD/2026-10-03 — Vault Rebuild.md` for what changed and why.
