---
title: "Documentation Standards"
role: "memory"
status: active
---

# Documentation Standards

> Vault-wide frontmatter and writing standards. Memory Curator enforces these during review.

## Required Frontmatter

Every operational note must have:

- `title` (string)
- `type` (one of: task / wiki / draft / template / system / role / skill)
- `status` (one of: active / stub / archived / draft)
- `created` (YYYY-MM-DD)
- `modified` (YYYY-MM-DD)
- `tags` (list, kebab-case)

## Optional Frontmatter

- `agent` / `role` (for role-owned notes)
- `migrates_from` (legacy path, for the 5-role migration)
- `evidence` (link to evidence file)

## Writing Style

- Plain text. No emojis. No icons. No ASCII art that obscures text.
- Markdown headings: `# `, `## `, `### ` only. No deeper levels.
- Wikilinks for cross-references; URLs only for external sources.

## Pitfalls

- **Pitfall: missing `modified`.** Update on every meaningful edit; the audit flags stale notes.
- **Pitfall: ad-hoc types.** Stick to the enumerated list; if you need a new type, propose it in the system-rules file.
