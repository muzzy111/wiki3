---
title: Docker-Based MCP Server Template
tags: [mcp, template, docker-based, readme]
created: 2026-07-01
type: mcp-server
status: draft
flavor: docker-based
---

# Docker-Based MCP Server Template

> Copy this folder, rename, and fill in the spec.

## Status

- **State:** draft
- **Flavor:** docker-based
- **Last updated:** 2026-07-01

## What This Is

This is the template for a **Docker-based** MCP server — runs inside a container for isolation, reproducibility, and dependency management. Use this template when:

- The server has heavyweight dependencies (databases, ML models, system libraries).
- The server should be reproducible across machines.
- You want to keep the host clean.

For lightweight servers, use the `code-based-template/` instead.

## Files

- `server-spec.md` — Hermes fills this in. Source of truth.
- `server.py` — the server implementation. Copied into the image.
- `Dockerfile` — image build instructions. OpenCode fills in.
- `docker-compose.yml` — orchestration. OpenCode fills in.
- `env.example` — list of required env vars. Hermes fills in.
- `README.md` — this file.
- `tests/test_server.py` — tests. OpenCode writes.

## Build & Run

```bash
# Build the image
docker build -t mcp-server-template .

# Run with docker-compose
docker-compose up

# Or with docker run (stdio transport requires -i -t)
docker run -i --rm mcp-server-template
```

## Configuration

Copy `env.example` to `.env` and fill in real values. Pass them to the container via `docker-compose.yml` (with `.env` referenced) or `-e` flags. Credentials never appear in `Dockerfile` or are baked into the image.

## Development

For local development without rebuilding the image on every change, mount the source as a volume:

```yaml
# docker-compose.yml override
services:
  mcp-server:
    volumes:
      - ./server.py:/app/server.py
```

## See Also

- [[../../../1.0HERMES/SKILLS/MCP Authoring]] — how Hermes authors MCP servers
- [[../../../3.0OPENCODE/SKILLS/MCP Implementation]] — how OpenCode implements MCP servers
- [[../../../2.0MAVIS/CHAT/Review Protocol]] — how Mavis reviews
- [[../../README]] — the MCP catalog