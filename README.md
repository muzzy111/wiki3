---
title: "LOOP Cowork Vault"
type: vault-readme
status: active
---

# LOOP Cowork Vault

> A 5-role Obsidian cowork vault for the LOOP environment. Roles are agent-agnostic; dispatch is config-driven; every user-facing artifact is reviewed.

## Quick Start

```powershell
# Bootstrap (one-time)
pwsh -NoProfile -File scripts/turnkey-bootstrap.ps1 -VaultRoot .

# Smoke (any time)
pwsh -NoProfile -File scripts/turnkey-smoke.ps1 -VaultRoot .
```

## The Five Roles

| Role | Folder | Responsibility |
|---|---|---|
| Coordinator | `1.0COORDINATOR/` | Triage, dispatch, user channel. |
| Coder | `2.0CODER/` | Code, scripts, MCP implementations. |
| Researcher | `3.0RESEARCHER/` | Web research, math, reports. |
| Tools | `4.0TOOLS/` | Docker, MCP wiring, env, backup. |
| Memory | `5.0MEMORY/` | Review, audit, drift, performance. |

See `SYSTEM/agents.yaml` for the registry and `1.0COORDINATOR/AGENT.md` for the dispatch protocol.

## Visual Entry

Open `PowerShell Canvas.canvas` (to be replaced by `CANVAS/CoWork Dashboard.canvas` per Wave 5 Task 34) for the live dashboard.

## See Also

- `SYSTEM/SYSTEM GRAPH/Graph.md`
- `SYSTEM/SYSTEM RULES/Rules.md`
- `SYSTEM/agents.yaml`
- `CHAT/User Communication Guide.md`
- `SYSTEM/Index.md`
- `WORKFLOWS/Index.md`
- `MEMORY/Index.md`
- `TASKS/Index.md`
