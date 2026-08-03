---
title: "Tools Brief Protocol"
role: "tools"
status: active
---

# Tools Brief Protocol

> How the Tools role accepts briefs from the Coordinator (typically: "deploy the new filesystem MCP server").

## Acceptance

A brief arrives at `4.0TOOLS/CHAT/Inbox/<...>.md`. Tools:

1. Reads the brief and the referenced spec.
2. Confirms environment (Docker running, Python on PATH).
3. Deploys per `4.0TOOLS/RULES/Docker and Server Protocol.md`.
4. Runs the smoke call.
5. Writes a completion at `4.0TOOLS/CHAT/Outbox/<...>.md` with: deployment record, smoke call output, evidence path.

## Failure

If the smoke fails, Tools halts and writes a partial completion with `status: failed` and the failure mode in Caveats.
