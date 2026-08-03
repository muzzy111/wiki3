---
title: "Docker and Server Protocol"
role: "tools"
status: active
---

# Docker and Server Protocol

> How Tools deploys, runs, and verifies containers and local servers.

## Deploy Procedure

1. Read the spec / brief; identify the image and the transport.
2. Pull or build the image; record the digest.
3. Run with explicit env vars and volume mounts; **no implicit defaults**.
4. Health check within 30 seconds (`docker inspect` for running; HTTP 200 for exposed).
5. Write the deployment record to `4.0TOOLS/MEMORY/Server Health.md` (append-only).

## Local Servers

- ttyd bridge: see `4.0TOOLS/SOLO-PROJECTS/local-server-bridge/README.md`.
- When starting a local server, write the PID + log path to a `RUNNING.md` file.

## Rollback

If a deploy fails the health check, Tools halts the deploy and writes a partial completion. The Coordinator decides whether to retry or escalate.

## Pitfalls

- **Pitfall: running containers as root.** Always specify a non-root user in the Dockerfile.
- **Pitfall: no volume mounts.** State must persist between container restarts.
- **Pitfall: not validating the smoke call.** Always run a JSON-RPC `initialize` after deploy.

## Related

- `2.0CODER/SKILLS/MCP Implementation.md` — the implementation contract
- `1.0COORDINATOR/SKILLS/MCP Authoring.md` — the spec contract
