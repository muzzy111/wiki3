---
title: Code-Based MCP Server Template
tags: [mcp, template, code-based, readme]
created: 2026-07-01
type: mcp-server
status: draft
flavor: code-based
---

# Code-Based MCP Server Template

> Copy this folder, rename, and fill in the spec.

## Status

- **State:** draft
- **Flavor:** code-based
- **Last updated:** 2026-07-01

## What This Is

This is the template for a **code-based** MCP server — a Python (or Node) implementation that runs locally. Use this template when:

- The server has lightweight dependencies.
- The server does not need a system-level library.
- Fast iteration matters more than reproducibility across machines.

For heavier dependencies or reproducibility needs, use the `docker-based-template/` instead.

## Files

- `server-spec.md` — Hermes fills this in. Source of truth for the implementation.
- `server.py` — the server implementation. OpenCode fills this in.
- `pyproject.toml` — Python deps. OpenCode updates with real deps.
- `env.example` — list of required env vars. Hermes fills in.
- `README.md` — this file. Updated as the server evolves.
- `tests/test_server.py` — tests. OpenCode writes.

## Setup

```bash
# Install dependencies
pip install -e ".[dev]"

# Run the server
python server.py

# Run tests
pytest tests/
```

## Configuration

Copy `env.example` to `.env` and fill in real values. The server reads credentials from environment variables.

## See Also

- [[../../../1.0HERMES/SKILLS/MCP Authoring]] — how Hermes authors MCP servers
- [[../../../3.0OPENCODE/SKILLS/MCP Implementation]] — how OpenCode implements MCP servers
- [[../../../2.0MAVIS/CHAT/Review Protocol]] — how Mavis reviews
- [[../../README]] — the MCP catalog