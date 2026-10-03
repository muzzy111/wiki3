---
title: README
type: agent-prompt
domain: prompts
status: active
tags:
- domain/prompts
- type/agent-prompt
- status/active
- prompt
created: 2026-06-10
serial: PRM-260625-B4FB62
description: Legacy prompt imported into VaultOS schema.
---

# Claude Code Integration

The Agency was built for Claude Code. No conversion needed — agents work
natively with the existing `.md` + YAML frontmatter format.

## Install

```bash
# Copy all agents to your Claude Code agents directory
./scripts/install.sh --tool claude-code

# Or manually copy a category
cp engineering/*.md ~/.claude/agents/
```

## Activate an Agent

In any Claude Code session, reference an agent by name:

```
Activate Frontend Developer and help me build a React component.
```

```
Use the Reality Checker agent to verify this feature is production-ready.
```

## Agent Directory

Agents are organized into divisions. See the [main README](../../README.md) for
the full Agency roster.

---
*VaultOS | Prompt Serial: `PRM-260625-B4FB62`*
