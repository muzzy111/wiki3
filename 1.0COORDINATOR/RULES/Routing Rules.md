---
title: "Routing Rules"
role: "coordinator"
status: active
---

# Routing Rules

> Canonical routing matrix for the 5-role LOOP topology. Mirrored from `SYSTEM/agents.yaml:routing_defaults`.

## The Five Roles

| Role key | Folder | What it owns |
|---|---|---|
| coordinator | 1.0COORDINATOR | Triage, dispatch, user channel, inter-agent routing. |
| coder | 2.0CODER | Code, scripts, plugins, DataviewJS, MCP server implementations. |
| researcher | 3.0RESEARCHER | Web research, math, written reports with citations. |
| tools | 4.0TOOLS | Docker, MCP wiring, APIs, local servers, environment, backup. |
| memory | 5.0MEMORY | Review, QA, audit, group memory, performance, drift. |

## Routing Logic

The router (in `hermes_bus.router`) reads `command.type` and `command.body`. When `agent_target: auto`, it falls back to this matrix:

| Command type | Default role | Notes |
|---|---|---|
| question | coordinator | Answer directly if scoped; dispatch to memory for retrieval; dispatch to researcher for external knowledge. |
| note | coordinator | Always handle in-channel. |
| status | coordinator | Read from current vault state; assemble summary. |
| system | coordinator | Run system commands directly (rename, lock, audit). |
| task with code hints | coder | "code", "script", "implement", "python", "dataviewjs", etc. |
| task with research hints | researcher | "research", "find out", "look up", "cite", "source". |
| task with infra hints | tools | "docker", "deploy", "wire up", "verify". |
| task (general) | coordinator | Triages via body sniff; dispatch is one role deep by default. |

## How to Override

A command can pin `agent_target: <role>` to bypass the matrix. Use explicit pinning when:

- The user names the role explicitly.
- The command's body has unambiguous keywords that would misroute.
- A previous dispatch should be re-routed for retry.

## How to Escalate

If a target role's completion looks wrong, the Coordinator writes back to that role's inbox with a `status: retry` block. If three retries fail, escalate to the Memory Curator for review.

## Why This Matrix

The 5-role split mirrors the host's actual CLI mix (chat director, code writer, research, infrastructure, review). A wrong initial dispatch does not lose fidelity because Memory Curator reviews every user-facing artifact.

## Related

- `SYSTEM/agents.yaml` — the registry (`routing_defaults:` block)
- `1.0COORDINATOR/CHAT/Inter-Agent Protocol.md` — message-edge contract
- `SYSTEM/SYSTEM RULES/Rules.md` — vault-wide rules
