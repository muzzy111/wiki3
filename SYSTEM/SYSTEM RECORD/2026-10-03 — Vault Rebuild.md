---
title: "Vault Rebuild"
tags: [system, record, rebuild]
created: 2026-10-03
type: system-record
status: active
---

# 2026-10-03 — Vault Rebuild

## Context

The vault `wiki2` held four vaults in one folder: the numbered storage vault, this OS (`LOOP/`), earlier OS generations (`cowork/`), and a small vault merged in by mistake (`Mad Drip/`). Google Drive mirroring then scattered 18,350 `desktop.ini` files through it, created conflict copies, and nested `.obsidian` inside `.obsidian`. It had grown to 131,365 files, of which about 82,000 were dependency folders and generated caches.

## Decision

Build a clean vault from a frozen snapshot instead of repairing in place.

- The OS (`LOOP/`) became the vault root, keeping its git history and internal paths.
- Storage content moved under `KNOWLEDGE/`, `LIBRARY/`, `ARCHIVE/` and `INBOX/`.
- Code repositories moved out to `C:\AI-Workspace\repos`, with pointer notes in `PROJECTS/_repos/`.
- Sync is git with a private GitHub remote. Google Drive no longer syncs the vault.
- The main vault's Obsidian settings were kept; `Mad Drip` became `PROJECTS/Mad Drip/`.

## What changed

- 31 `SKILL.md` files had their links rewritten on 2026-10-02 into self-referencing paths (`[[LOOP/SKILLS/...]]`). They were restored from commit `d802d1f`.
- `10.03 SKILLS` duplicated `SKILLS/` (774 of 775 folders). One copy was kept; the 34 files that differed are in `ARCHIVE/superseded/`.
- 226 duplicate prompt files were removed from `LIBRARY/prompts/`; the list is in `ARCHIVE/_build-log/prompt-dedupe.csv`.
- Dependency folders, `.smart-env`, graphify output and `desktop.ini` were not carried over.
- Rules 7 to 9 (backup) were rewritten for git; the Drive wording is preserved in git history.
- `AGENTS.md` and `CLAUDE.md` were added at the root as the single agent entry point.

## Sources kept

- Snapshot: `C:\Vaults\_snapshots\wiki2-2026-10-03` with `.manifest.csv` beside it.
- Original: `C:\Users\Admin\Documents\OBSIDIAN\wiki2`, untouched.

## Followups

- Reconcile `Rules.md`, `README.md`, `Operating Manual.md` and `agents.yaml` to one topology.
- Merge `MEMORY/` with the memory holdings under `5.0MEMORY/`.
- Remove automated wikilinks from skill prose (for example `[[skill]]` inside sentences).
- Build a one-line-per-skill index for `SKILLS/`.
- Rotate any credential that was in a `.env` file while Drive was syncing.
