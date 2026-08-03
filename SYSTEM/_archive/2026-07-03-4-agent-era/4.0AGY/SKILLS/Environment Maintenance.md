---
title: Environment Maintenance
tags: [agent, agy, skill, environment, obsidian]
created: 2026-07-01
type: skill
status: active
---

# Environment Maintenance

> How AGY maintains the Obsidian environment — plugins, themes, CSS snippets, settings.

## Scope

AGY maintains:

- **Plugins.** Installed via the Obsidian community plugin list. Pinned versions.
- **Themes.** Installed themes. CSS overrides via snippets.
- **CSS snippets.** Under `.obsidian/snippets/`. Scoped to Obsidian selectors.
- **Settings.** `.obsidian/app.json`, `appearance.json`, etc.
- **Vault config.** Anything inside `.obsidian/` that is not plugin code.

AGY does **not** modify plugin source code. Plugin code is OpenCode's domain if it needs changing (rare).

## Inventory

AGY keeps an inventory of installed plugins and themes. The inventory lives at `4.0AGY/SOLO-PROJECTS/environment/inventory.md`. The inventory includes:

- Plugin name, version, source URL, install date, last updated date.
- Theme name, version, source URL.
- CSS snippet name, purpose, target selectors.
- Critical settings.

The inventory is regenerated whenever AGY makes an environment change.

## Change Workflow

### 1. Receive Request

The change request comes from Hermes via chat or command pad. AGY confirms scope:

- What is changing (plugin, theme, snippet, setting).
- Why it is changing.
- Whether it is user-facing or internal.

### 2. Document

Before making the change, AGY writes a `SYSTEM/STYTEM RECORD/<date> — Env Change.md` entry with:

- What is changing.
- Why.
- Expected impact.
- Rollback plan.

### 3. Make the Change

AGY performs the change:

- **Plugin install.** From the community plugin list at a specific version. Enable via `community-plugins.json`.
- **Plugin update.** Read changelog. Note breaking changes. Update `community-plugins.json` and `manifest.json`.
- **Plugin remove.** Disable via `community-plugins.json`. Remove the folder. Document why.
- **Theme install.** Same as plugin but via `appearance.json`.
- **Theme update.** Same as plugin update.
- **CSS snippet.** Write to `.obsidian/snippets/<name>.css`. Enable via `appearance.json`.
- **Setting change.** Update the relevant JSON. Justify.

### 4. Verify

AGY verifies the change:

- Obsidian still launches (or, if testing offline, the manifest is valid).
- No conflicts with existing plugins or themes.
- CSS snippets do not break core styles.
- The change is testable (open a test note, run a Dataview query, render the CSS, etc.).

### 5. Submit for Review

If the change is user-facing or non-trivial, AGY submits to Mavis for review per the standard protocol. Mavis checks:

- Documentation is complete.
- Rollback plan is sound.
- No breaking changes without a `SYSTEM/STYTEM RECORD/` entry.
- No conflict with other env settings.

### 6. Update Inventory

After the change is verified and (if needed) reviewed, AGY updates `inventory.md`.

## Common Maintenance Tasks

### Plugin Health Check

Weekly, AGY:

1. Reads each installed plugin's `manifest.json`.
2. Checks for available updates against the community plugin list.
3. Notes plugins that have not been updated in 12+ months (potential abandonment).
4. Reports findings to AGY Memory (Mavis curates).

### Theme Health Check

Monthly, AGY:

1. Checks installed theme for updates.
2. Reviews theme's CSS for deprecated selectors.
3. Verifies the theme still renders correctly.

### CSS Snippet Review

Quarterly, AGY:

1. Reviews each snippet for relevance.
2. Removes snippets that no longer apply.
3. Consolidates redundant snippets.

### Backup of Environment Config

AGY backs up `.obsidian/` config files to Google Drive as part of the standard vault sync. Plugin code (which can be large) is backed up at a lower frequency (default weekly).

## Failure Modes

- **Plugin update breaks Obsidian.** AGY rolls back to the previous version. Documents in `SYSTEM/STYTEM RECORD/`. Notifies Hermes.
- **Theme update changes CSS variables.** AGY reviews the change's impact on existing snippets. Updates snippets if needed.
- **CSS snippet conflicts with theme.** AGY scopes the snippet more tightly or removes it.
- **Settings change has unexpected effect.** AGY reverts the change. Documents.

## User Preferences

AGY reads environment preferences from `4.0AGY/MEMORY/AGY Memory.md` (Mavis-curated). Preferences include:

- Themes the user likes.
- Plugins the user has approved.
- Snippet style preferences (e.g., minimal vs. rich).
- Settings the user has tuned.

AGY does not change environment without confirming preference alignment.

## See Also

- AGY's role: [[../AGENT]]
- Backup protocol: [[../RULES/Backup Protocol]]
- AGY memory: [[../MEMORY/AGY Memory]]
- System rules: [[../../SYSTEM/SYSTEM RULES/Rules]]
- Mavis review checklist: [[../../2.0MAVIS/RULES/Review Checklist]]