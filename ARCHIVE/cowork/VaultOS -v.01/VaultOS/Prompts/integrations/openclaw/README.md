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
serial: PRM-260625-410DE0
description: Legacy prompt imported into VaultOS schema.
---

# OpenClaw Integration

OpenClaw agents are installed as workspaces containing `SOUL.md`, `AGENTS.md`,
and `IDENTITY.md` files. The installer copies each workspace into
`~/.openclaw/agency-agents/` and registers it when the `openclaw` CLI is
available.

Before installing, generate the OpenClaw workspaces:

```bash
./scripts/convert.sh --tool openclaw
```

## Install

```bash
./scripts/install.sh --tool openclaw
```

## Activate an Agent

After installation, agents are available by `agentId` in OpenClaw sessions.

If the OpenClaw gateway is already running, restart it after installation:

```bash
openclaw gateway restart
```

## Regenerate

```bash
./scripts/convert.sh --tool openclaw
```

---
*VaultOS | Prompt Serial: `PRM-260625-410DE0`*
