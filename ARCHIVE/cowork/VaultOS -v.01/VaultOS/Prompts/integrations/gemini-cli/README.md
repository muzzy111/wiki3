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
serial: PRM-260625-0A9EA5
description: Legacy prompt imported into VaultOS schema.
---

# Gemini CLI Integration

Packages all Agency agents as Gemini CLI subagents. These agents
install to `~/.gemini/agents/`.

## Install

```bash
# Generate the Gemini CLI agent files first
./scripts/convert.sh --tool gemini-cli

# Then install them to ~/.gemini/agents/
./scripts/install.sh --tool gemini-cli
```

## Use an Agent

In Gemini CLI, reference an agent by name in your prompt:

```
Use the frontend-developer agent to help me build this UI.
```

Or invoke the agent directly if your version of Gemini CLI supports it:

```bash
gemini --agent frontend-developer "How should I structure this React component?"
```

## Structure

```
~/.gemini/agents/
  frontend-developer.md
  backend-architect.md
  reality-checker.md
  ...
```

## Regenerate

```bash
./scripts/convert.sh --tool gemini-cli
```

---
*VaultOS | Prompt Serial: `PRM-260625-0A9EA5`*
