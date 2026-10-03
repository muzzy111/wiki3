---
aliases: []
tags:
  - agent
  - verifies
  - matrix
  - room
---

# Container Security Defaults for Local Stacks

Security baseline baked into [[MCP Stack Deploy Script]] for
[[Self-Hosted MCP Stack on Docker Desktop]]. These are the defaults
applied to every container unless explicitly overridden.

## The Defaults

| Setting | Value | Why |
|---|---|---|
| Port binding | `127.0.0.1:<port>:<port>` (loopback only) | Never accidentally expose to LAN/Wi-Fi. The OS firewall won't help if Docker binds to `0.0.0.0`. |
| Restart policy | `unless-stopped` | Survive Docker Desktop restarts, host reboots, but not explicit `docker stop` |
| Memory cap | per-container (128m-1024m) | 15.5 GB host. A bug in one container can't OOM-kill the host. |
| Network | user-defined `mcp-net` bridge | Containers can find each other by name (`mcp-redis`, etc.) without touching the default bridge or LAN |
| Named volume | `mcp-<name>-data` | Data survives `docker rm`; cleanup is explicit |
| Labels | `hermes.mcp.managed-by=deploy-mcp-stack.sh`, `hermes.mcp.category=<cat>` | Inventory + bulk removal via `docker ps --filter label=...` |
| Run as root | YES (Docker default; not overridden) | Local workstation, no untrusted input. Privilege escalation is not in the threat model. |
| Read-only fs | NO | Most of these tools need to write to /data, /config, /workspace |
| Drop capabilities | NO | Many images (JVM, Python ML) break with `--cap-drop=ALL`; not worth the maintenance burden for a local stack |
| User namespace remap | NO | Docker Desktop on Windows ignores it anyway |

## What's NOT in the Defaults (and why)

- **No TLS termination** — loopback only, so TLS would be theatre.
  If a service later gets exposed to the LAN, add a reverse proxy
  with TLS first.
- **No `read_only: true`** — would break too many tools. Use
  bind-mounts with `nosuid,nodev` if you need to harden a specific
  service.
- **No `--user <uid>` for most services** — code-server wants
  `PUID=1000` (set), jupyter wants root to install packages on the
  fly (set), the rest inherit the image's default user.
- **No `--security-opt no-new-privileges`** — false sense of safety
  with `--restart unless-stopped`; if you really care, use a rootless
  Docker daemon, which Docker Desktop on Windows can't run anyway.
- **No resource CPU cap** — Windows hosts over-commit CPU; the
  `--memory` cap is the practical one.

## Threat Model

This is a single-user, local-only workstation. The threat model is:

1. **Accidental LAN exposure** (default-deny: 127.0.0.1 binding)
2. **OSINT runaways** that DOS the host (default-deny: --memory caps)
3. **Stale containers surviving forever** (mitigated by labels + the
   `--remove` flag for bulk cleanup)
4. **Data loss on `docker system prune`** (mitigated by named
   volumes — but they're still subject to `docker volume prune`)

Threats NOT in scope: container escape, malicious image, supply-chain
compromise, network sniffing. For those, the model is "trust the
upstream image" (Docker Hub official namespaces: `mcp/`, `docker/`,
`redis/`, `qdrant/`, etc.) and accept the risk.

## Bulk Cleanup

```bash
# Stop and remove every container this script manages:
bash deploy-mcp-stack.sh --remove

# Then nuke the network:
docker network rm mcp-net

# Keep volumes by default — only drop them when you really want a fresh start:
# docker volume rm $(docker volume ls -q --filter label=...)
```

## Related

- [[Self-Hosted MCP Stack on Docker Desktop]]
- [[MCP Stack Deploy Script]]
- [[n8n Container Setup on Docker Desktop]]
