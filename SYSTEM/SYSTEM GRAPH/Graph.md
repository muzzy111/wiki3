---
title: "System Graph"
type: system-graph
status: active
---

# System Graph

> Structural map of the LOOP vault under the 5-role topology.

## The Five Roles

| Role | Folder | Owner of |
|---|---|---|
| Coordinator | 1.0COORDINATOR | User channel, dispatch, routing. |
| Coder | 2.0CODER | Code, scripts, plugins, MCP server implementations. |
| Researcher | 3.0RESEARCHER | Web research, math, written reports. |
| Tools | 4.0TOOLS | Docker, MCP server wiring, environment, backup. |
| Memory | 5.0MEMORY | Review, audit, drift, performance. |

## Topology

```
USER
  |
  v
COORDINATOR (1.0COORDINATOR)
  |
  +---dispatch---> CODER (2.0CODER)         <---review--- MEMORY
  +---dispatch---> RESEARCHER (3.0RESEARCHER) <---review--- MEMORY
  +---dispatch---> TOOLS (4.0TOOLS)         <---review--- MEMORY
  +---review <--- MEMORY (5.0MEMORY)        
```

## Authority Hierarchy

1. SYSTEM/ — vault-wide configuration. Binding on every role.
2. SYSTEM/agents.yaml — single source of truth for the agent registry.
3. Role folders (1.0.../5.0...) — role-owned; subordinate to SYSTEM/.
4. CHAT/, MEMORY/, PROMPTS/, RULES/, SKILLS/, SOLO-PROJECTS/ — six-subfolder uniformity; see `SYSTEM/templates/agent-folder-scaffold.md`.

## Data Flow

- **INBOX.md** -> Coordinator (role-agnostic file)
- **<role>/CHAT/Inbox/** -> role-specific brief from Coordinator
- **<role>/CHAT/Outbox/** -> role-specific completion to Coordinator
- **MEMORY/<role> Memory.md** -> append-only per role
- **5.0MEMORY/CHAT/Inbox/** -> review-request receivers
- **5.0MEMORY/CHAT/Outbox/** -> verdicts

## Inter-Role Edges

| From | To | Edge |
|---|---|---|
| Coordinator | every role | dispatch (brief into inbox) |
| every role | Coordinator | completion (outbox) |
| every role | Memory Curator | review-request (template) |
| Memory Curator | every role | verdict (outbox) |
| Researcher | Coder | research findings -> implementation brief |
| Tools | Coder | infra constraint reports |

## Related

- `SYSTEM/agents.yaml` — the role registry.
- `SYSTEM/SYSTEM RULES/Rules.md` — vault-wide rules.
- `1.0COORDINATOR/CHAT/Inter-Agent Protocol.md` — message-edge contract.
