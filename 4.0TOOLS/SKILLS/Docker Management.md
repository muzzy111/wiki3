---
title: "Docker Management"
role: "tools"
status: active
---

# Docker Management

> Skill: how the Tools role works with Docker.

## Procedure

- `docker build -t <name>:<tag> <context>`
- `docker run -d --name <name> -p <host>:<container> -v <host>:<container> -e <KEY>=<VAL> <image>`
- `docker logs --tail 100 <name>` for stderr.
- `docker inspect <name>` for state; `docker stats --no-stream` for resource usage.
- Cleanup: `docker container prune -f` (with backup verification first).

## Pitfalls

- **Pitfall: dangling volumes.** Always bind-mount, never copy-into on each deploy.
- **Pitfall: mixing Windows and Linux paths.** Containers run Linux; mount paths use forward slashes.

## Related

- `2.0CODER/SKILLS/MCP Implementation.md`
