---
alwaysApply: true
---

# Meta-Leakage Guard

This rule prevents internal harness metadata from leaking into vault output files and
agent-facing documents.

## Prohibited Content in Vault Files

Do not include the following in CLAUDE.md, agent definitions, skill files, task
documents, MEMORY files, or any user-facing output:

- References to the harness construction process (phase names, playbook names,
  external orchestrator tool names used to build this vault's harness)
- Internal template paths (`~/.claude/plugins/`, `${CLAUDE_PLUGIN_ROOT}`, etc.)
- Descriptions of Claude Code's own system architecture written in the context of
  harness construction rather than vault operations
- Meta-rules written for the harness-builder tool that do not apply to vault agents

## What This Protects

Leaking meta-content causes confusion when agents or users read vault documents:
- Instructions meant for the harness-builder are loaded as instructions for vault agents
- Internal paths expose plugin infrastructure users do not need to see
- The vault's CLAUDE.md becomes polluted with content that belongs in a different context

## Exceptions

- `docs/loop-vault-setup/` — setup artifacts intentionally reference the harness process
- Files explicitly stored in `.claude/backup/` — internal only, not loaded by agents
