---
title: System Rules
tags: [system, rules, loop]
created: 2026-07-01
type: system-rules
status: active
---

# System Rules

> The binding rule set for the entire LOOP cowork vault. These rules override anything in per-agent folders, prompts, or skills.

## Authority and Override

1. **These rules are supreme.** If a per-agent rule, prompt, or skill conflicts with anything here, the system rules win. If the user asks something that conflicts with a system rule, Hermes explains and offers the closest compliant alternative.
2. **Locked files are untouchable.** Anything under `SYSTEM/LOCK/` is read-only for all agents including Hermes, unless the user provides an explicit unlock directive in the current session.
3. **Folder names are immutable for now.** Even misspelled names (`STYTEM`, `QUED`) are preserved to keep wikilinks valid. A future rename must be planned as a migration, not a stealth rename.

## Communication Rules

4. **One user channel.** Hermes is the only agent that ever speaks to the user. Mavis, OpenCode, and AGY never address the user directly — not in chat replies, not in commit messages, not in deliverables.
5. **No silent work.** Every task an agent starts produces a status entry in `TASKS/STATUS/` within five minutes of start, and a completion entry on close.
6. **No skipping review.** All deliverables from OpenCode and AGY pass through Memory Curator review before Hermes closes the task and reports to the user.

## Data and Backup Rules

7. **AGY owns the backup.** AGY is the only agent that may push vault content to Google Drive. No other agent writes to the remote mirror. No agent deletes remote backups.
8. **The local vault is the source of truth.** The Google Drive mirror is a backup, not a working copy. Edits happen locally; sync is one-way.
9. **Backups are continuous, not on-demand.** AGY runs a scheduled sync (default: every 15 minutes) and writes a sync log to `4.0AGY/MEMORY/Backup Log.md`.
10. **Memory writes are audited.** Every write to an agent's `MEMORY/` folder is logged in the agent's `MEMORY/Write Log.md`. Mavis curates.

## Code and Engineering Rules

11. **OpenCode is the only agent that writes or edits code.** This includes scripts, plugins, MCP server implementations, Obsidian CSS snippets with logic, and DataviewJS blocks with non-trivial logic. Pure markdown and Templater expressions in note bodies do not count as code and may be written by Mavis or AGY as needed for their domains.
12. **All code is reviewed.** OpenCode's code is reviewed by Mavis before merge into the vault. Mavis checks for correctness, security, and adherence to the standards in `3.0OPENCODE/RULES/`.
13. **Secrets never appear in plain text.** API keys, tokens, and passwords live in env vars or in files tagged `#security/private`. Anything pulled into agent context is masked to `[REDACTED_CREDENTIAL]` in chat output.

## Documentation Rules

14. **Every folder has a document.** If a folder exists, it contains at minimum one markdown file explaining its purpose. Empty folders are deleted in the weekly cleanup.
15. **Frontmatter on every operational note.** `title`, `tags`, `created`, `type`, `status` are required minimum for any note that drives a workflow or holds decisions.
16. **No emojis. No icons.** Per the global style rule, markdown files do not use emoji or icon glyphs in file names, headers, callouts, or content. Text only.
17. **Wikilinks, not paths.** Cross-references use `[[Note Name]]` syntax. Bare relative paths only appear inside code blocks.

## Research and Web Rules

18. **AGY is the only web researcher.** When research is needed, Hermes dispatches to AGY. Other agents may read files locally but do not hit the network.
19. **Research outputs are cited.** Every claim pulled from the web in an AGY deliverable cites its source URL inline. No unsourced assertions in reports.
20. **No scraping without scope.** AGY scrapes only what the task explicitly requests. No opportunistic crawls.

## MCP Rules

21. **Hermes owns MCP servers.** New MCP servers are configured by Hermes, either as code-based servers (Python/Node) or Docker-based servers. Configuration lives in `MCP/`.
22. **Every MCP server has a doc.** Every entry in `MCP/` has a corresponding markdown file describing what it does, how it starts, and how to verify it.
23. **MCP credentials stay in env vars.** Servers read tokens from the environment, not from notes.

## Workflow Rules

24. **Workflows are defined in WORKFLOWS/, not in agent folders.** Cross-cutting automations live in `WORKFLOWS/<name>/`. Per-agent skills that compose into a workflow are referenced from the workflow, not duplicated.
25. **Workflow changes go through review.** A new workflow or a change to an existing workflow requires Memory Curator review before activation.

## Failure and Recovery Rules

26. **If a rule can't be followed, document why.** If an agent cannot follow a system rule due to environmental constraint, the agent writes a note in `SYSTEM/STYTEM RECORD/` documenting the deviation and the reason. The note must be resolved before the task is closed.
27. **Stuck tasks escalate to Hermes.** If an agent is blocked for more than 30 minutes, Hermes is notified with a status update and a proposed path forward.

## Review and Audit Rules

28. **Mavis runs a weekly audit.** Mavis checks folder health, frontmatter compliance, backup currency, and orphaned notes every Sunday at 22:00 local time. Results post to `SYSTEM/STYTEM RECORD/Audit Log.md`.
29. **OpenCode's code is reviewed on every commit.** There is no "trivial change" exemption. Five-line fixes still get reviewed.
30. **AGY's research is reviewed when it informs a user-facing decision.** Pure exploratory research may proceed without review, but anything AGY produces that Hermes intends to quote to the user is reviewed by Mavis first.


## Migration Section (appended 2026-07-03)

> These rules replace the legacy "named agent" rules. They are authoritative from this date.

1. **Roles, not names.** No literal `Hermes`, `Mavis`, `OpenCode`, or `AGY` strings in non-historical sections of any document. Reference roles by their key (`coordinator`, `coder`, `researcher`, `tools`, `memory`).
2. **Single source of truth for the registry.** All role metadata lives in `SYSTEM/agents.yaml`. The Hermes_bus daemon loads it at startup.
3. **Five role folders.** Every role's content lives under `1.0COORDINATOR/`, `2.0CODER/`, `3.0RESEARCHER/`, `4.0TOOLS/`, `5.0MEMORY/`.
4. **Six-subfolder uniformity.** Each role has `CHAT/`, `MEMORY/`, `PROMPTS/`, `RULES/`, `SKILLS/`, `SOLO-PROJECTS/`.
5. **The Memory Curator reviews every user-facing artifact.** Including direct chat replies from the Coordinator.
6. **The Coordinator dispatches by role key.** Routing matrix is in `1.0COORDINATOR/RULES/Routing Rules.md` and mirrors `SYSTEM/agents.yaml:routing_defaults`.
7. **No emojis or icons.** Per vault-wide CLAUDE.md rule.
8. **Wikilinks resolve.** Every wikilink points to an existing file or a documented stub.
