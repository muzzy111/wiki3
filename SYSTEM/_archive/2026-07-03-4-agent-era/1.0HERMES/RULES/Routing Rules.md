---
title: Routing Rules
tags: [agent, hermes, rules, routing]
created: 2026-07-01
type: routing-rules
status: active
---

# Routing Rules

> The task-to-agent routing matrix. Hermes uses this as the starting point for every dispatch. Mavis reviews and refines over time.

## Master Routing Matrix

| If the user asks for... | Primary agent | Reviewer | Notes |
|---|---|---|---|
| Build, debug, or refactor code | OpenCode | Mavis | All code reviews by Mavis |
| Write a script (Python, Node, bash, PowerShell) | OpenCode | Mavis | Same as code |
| Configure an MCP server | Hermes (self) | Mavis | Hermes authors; Mavis reviews the doc and config |
| Run or test an MCP server | Hermes (self) | Mavis | Hermes orchestrates; OpenCode may be called to fix code |
| Web research, scrape, or deep-dive | AGY | Mavis (if user-facing) | Pure exploratory research may skip review |
| Fact-check or source-check a claim | AGY | Hermes | Hermes reviews; Mavis only if claim goes into a deliverable |
| Google Drive backup or restore | AGY | Hermes | AGY operates; Hermes confirms with user |
| Math, statistics, derivations, modeling | AGY | Mavis (if user-facing) | AGY does the work; Mavis checks the writeup |
| Vault environment work (plugins, themes, snippets) | AGY | Mavis | AGY operates the Obsidian env; Mavis documents the change |
| Document a project, meeting, decision, conversation | Mavis | Hermes | Mavis writes; Hermes confirms it matches what happened |
| Review code or work product | Mavis | Hermes | Mavis reviews; Hermes decides if revisions are needed |
| Maintain the Karpathy wiki | Mavis | Hermes | Mavis curates; Hermes signs off on major schema changes |
| Update an agent's memory folder | Mavis | Hermes | Mavis writes; Hermes confirms |
| Visual workspace / canvas layout | Mavis drafts, AGY wires | Hermes | Two-agent task |
| Workflow definition or change | Hermes (self) + Mavis | Hermes | Workflows are owned by Hermes; Mavis reviews for clarity |
| Weekly audit | Mavis | Hermes | Mavis runs; Hermes confirms the report |
| System command (rename, lock, rotate) | Hermes (self) | n/a | Hermes verifies with user, executes, logs to STYTEM RECORD |

## Tie-Break Rules

When a request could go to more than one agent:

1. **Code wins over documentation.** If the user asks "build X and document it," OpenCode builds first, then Mavis documents the build. Mavis does not pre-document.
2. **Research wins over assumption.** If the answer requires facts, AGY researches. Hermes does not guess.
3. **Review wins over speed.** If a deliverable is needed urgently and review would slow it down, the right move is to set a realistic deadline with the user, not to skip review.
4. **User intent wins over routing default.** When in doubt, Hermes asks the user which agent should own the work.

## Multi-Agent Tasks

Some tasks need more than one agent. The dispatch pattern:

### Code + research

- AGY researches first (background, libraries, prior art).
- AGY hands findings to OpenCode with sources cited.
- OpenCode builds.
- Mavis reviews both the research note and the code.

### Code + documentation

- OpenCode builds.
- Mavis documents the build (architecture, usage, examples).
- Mavis reviews the code as part of the documentation pass.

### Environment + documentation

- AGY makes the change (plugin install, theme update, snippet addition).
- Mavis documents the change in `SYSTEM/STYTEM RECORD/` and updates any affected workflow docs.

### Wiki work

- Mavis owns the wiki end-to-end.
- Mavis may call AGY for research to support a wiki entry.
- Mavis may call OpenCode for tooling (e.g., a Templater script that scaffolds wiki entries).

## When Hermes Does Not Dispatch

Hermes replies directly without dispatching when:

- The user asks a factual question answerable from existing vault content.
- The user asks about the state of a task already in `TASKS/STATUS/`.
- The user asks for clarification of a prior reply.
- The user asks a meta question about how the team works.

Hermes still updates the relevant inbox entry to record the interaction.

## Failure To Route

If none of the agents can clearly own the task, Hermes either:

1. **Asks the user** which agent they want.
2. **Defines a new mode** with the user's agreement and writes the new mode into this routing matrix via a `SYSTEM/STYTEM RECORD/` decision entry.

Hermes does not invent new agents on the fly. Adding an agent is a system-level change that the user must approve.