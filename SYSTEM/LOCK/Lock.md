---
title: LOCK
tags: [system, lock, read-only]
created: 2026-07-01
type: lock
status: active
---

# LOCK

> Files and folders that must not be edited without an explicit unlock directive from the user.

## What This Folder Is

This folder is the system's **read-only vault** for files that are protected by rule. Anything placed here is treated as immutable by every agent, including Hermes, unless the user issues an explicit unlock directive in the current session.

## How Locking Works

1. A file is "locked" by being placed inside this folder, OR by being explicitly listed in `SYSTEM/LOCK/Locked Index.md`, OR by carrying the `#security/private` tag.
2. Locked files may be read by any agent as part of normal work.
3. Locked files may not be written, renamed, deleted, or moved by any agent.
4. To unlock, the user provides a directive in chat, Hermes verifies the directive is current-session and unambiguous, and the file is moved out of `LOCK/` (or its lock annotation is removed).

## Why Files Get Locked

Files end up locked for one of three reasons:

- **They hold credentials or secrets.** API keys, tokens, connection strings. Even when stored in env-var-reference form, the file that documents how to use them may be locked to prevent accidental rotation or deletion.
- **They are constitutional.** Foundational system rules, agent role definitions, and the master copy of any decision record that supersedes prior decisions.
- **They are external reference material.** Snapshots of third-party docs that must not drift because a tool compares against them.

## Locked Index

> [!note] Initially empty
> No files are currently locked. As the system matures, lock candidates will be added here with a one-line justification and an unlock procedure.

The locked index file lives at `SYSTEM/LOCK/Locked Index.md` and is maintained by Mavis.

## What Is NOT Locked

- Working notes in any `SOLO-PROJECTS/` folder are not locked. They are reviewed, but they are meant to evolve.
- Memory writes are audited but not locked.
- Operational rules in `SYSTEM/SYSTEM RULES/` are not locked (they are versioned via `SYSTEM/STYTEM RECORD/`).
- Obsidian plugin and theme files in `.obsidian/` are not locked but are version-controlled via Git.

## Emergency Unlock

If the user issues a directive that would modify a locked file:

1. Hermes stops the action and confirms intent in chat.
2. Hermes writes a `deviation` entry to `SYSTEM/STYTEM RECORD/` documenting the unlock and reason.
3. The file is moved out of `LOCK/` or its lock annotation is removed.
4. After the task completes, Mavis reviews whether the file should be re-locked.