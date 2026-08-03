---
title: Audit Playbook
tags: [agent, mavis, skill, audit]
created: 2026-07-01
type: skill
status: active
---

# Audit Playbook

> How Mavis runs the weekly vault audit. Scheduled for Sundays at 22:00 local time. Results post to `SYSTEM/STYTEM RECORD/Audit Log.md`.

## Cadence

- **Weekly:** Sundays, 22:00 local. Default run.
- **On-demand:** Triggered by Hermes when a system-level concern is raised.
- **Post-migration:** An additional audit runs after any folder rename or major restructure.

## What the Audit Checks

### 1. Folder Health

- Every folder in the vault contains at least one markdown file.
- No empty folders (excluding `.obsidian/` and `.smart-env/`, which hold config).
- No folders with the same name at different levels.
- Folders named consistently with the system graph in `SYSTEM/SYSTEM GRAPH/`.

### 2. Frontmatter Compliance

For every operational note (frontmatter required by the documentation standards):

- `title`, `tags`, `created`, `type`, `status` all present.
- `type` is in the controlled vocabulary (see `RULES/Documentation Standards.md`).
- `status` is one of `draft`, `active`, `complete`, `deprecated`.
- `created` is a valid date in YYYY-MM-DD format.

Findings are bucketed: missing entirely, missing fields, invalid values.

### 3. Wikilink Integrity

- Every `[[...]]` reference resolves to an existing note.
- Broken references are listed with source file and unresolved target.
- Redirects are honored if explicitly marked.

### 4. Style Compliance

- No emoji or icon glyphs in markdown body, headers, or callouts.
- No emoji in file names.
- Callouts used appropriately, not excessively.

### 5. Lock Integrity

- Files in `SYSTEM/LOCK/` have not been modified since the last audit.
- Files tagged `#security/private` have not been moved or modified.
- The locked index at `SYSTEM/LOCK/Locked Index.md` matches the actual lock state.

### 6. Backup Currency

- AGY's Google Drive sync log shows a successful run within the last hour.
- The most recent backup timestamp is within the audit's freshness window.
- The size of the local vault and the size of the remote mirror are within 5% of each other.

### 7. Orphan Notes

- Notes with no incoming links.
- Notes that exist but are not referenced from any MOC, index, or task card.
- Orphans are listed but not auto-deleted. Mavis proposes action; Hermes confirms.

### 8. Task Hygiene

- No task card in `TASKS/STATUS/` has been `in-progress` for more than 7 days without an update.
- No `draft` status notes older than 30 days without a comment.

### 9. Memory Hygiene

- Every agent's memory file has been updated within the last 30 days (or explicitly marked stable).
- Memory write logs match the actual memory file modifications.

### 10. Karpathy Wiki Health

- No wiki entry has been modified in the last 90 days unless actively cited.
- `raw/` items older than 90 days are flagged for review (move to `wiki/`, archive, or delete with reason).
- `schema/Master Index.md` matches the actual `wiki/` contents.

## Audit Output Format

The audit posts a single markdown file to `SYSTEM/STYTEM RECORD/Audit Log.md` (append-only). Each audit is a new dated section:

```markdown
## Audit — YYYY-MM-DD

**Run by:** Mavis
**Duration:** HH:MM
**Scope:** full vault
**Result:** clean | minor issues | major issues

### Findings by Category

#### Folder Health
- <finding> — severity: <low | medium | high>

#### Frontmatter Compliance
- <finding> — severity: ...

#### Wikilink Integrity
- ...

(etc. for each category)

### Summary

<one paragraph: overall health, top concerns, recommended actions>

### Proposed Actions

1. <action> — owner: <agent> — due: <date>
2. ...
```

## Severity Levels

- `low` — observation, no action required.
- `medium` — should be addressed within 2 weeks.
- `high` — must be addressed within 48 hours; notify Hermes.

If any `high` finding is present, Hermes is notified immediately via chat with a brief summary. Mavis does not wait for the user to ask.

## What the Audit Does Not Do

- The audit does not delete files.
- The audit does not modify notes.
- The audit does not commit changes to Git.
- The audit does not trigger backups (AGY's continuous sync is separate).

The audit is **read-only** by design. Action items are proposed; agents execute them with appropriate review.

## Manual Audits

On-demand audits (triggered by Hermes) follow the same format but may scope down to a subset (e.g., "audit only `MEMORY/KARPATHY/`"). Scoped audits include a `Scope:` line in the header.

## Audit Failure Recovery

If the audit cannot complete (e.g., the vault is locked, a required tool is unavailable):

1. Mavis writes a `partial` audit entry to the log noting the failure.
2. Mavis notifies Hermes with the failure details.
3. Mavis retries once after 30 minutes.
4. If the retry fails, Mavis escalates to Hermes for manual intervention.

## See Also

- Mavis' role: [[../../AGENT]]
- System record: [[Record]]
- System graph: [[../../../SYSTEM/SYSTEM GRAPH/Graph]]
- Documentation standards: [[../../RULES/Documentation Standards]]