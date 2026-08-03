---
title: "n8n MCP Server"
mcp_id: "n8n"
state: "draft"
---

# n8n MCP Server

> State: **draft**. Stub only; not yet implemented as an MCP server.

## Purpose

The n8n workflow automation integration. n8n is the user's long-running workflow
engine; this MCP server (when implemented) would let AI agents read, trigger,
and create n8n workflows over JSON-RPC.

## Tools (planned)

- `list_workflows` - enumerate active workflows
- `execute_workflow` - trigger a workflow by id, passing JSON input
- `create_workflow` - POST a new workflow spec
- `get_workflow_runs` - paginate over a workflow's run history

## Transport

stdio (JSON-RPC). Compatible with Claude Desktop and OpenCode.

## Configuration

The server reads `N8N_API_URL` and `N8N_API_KEY` env vars (placeholders only in
`env.example`; never commit values).

## Verified Facts (current n8n on host)

> Folded in from the legacy `MCP/servers/N8N.md` reference.

```
Build/n8n-mcp/
├── Dockerfile                  # Optional local build of mcp/n8n
├── docker-compose.yml          # MCP service + optional bundled n8n
├── .env.example                # Copy to .env, fill in keys
├── README.md                   # Quickstart, network scenarios, troubleshooting
└── host-configs/
    ├── all-hosts.json          # Snippets for Claude/Cursor/VS Code/Continue
    └── claude_desktop_config.json  # Standalone drop-in for Claude Desktop
```

Built around: the official `mcp/n8n` Docker image (czlonkowski, 100K+ pulls, MIT, cosign-verified by Docker Inc., 42 tools). This is the verified, real artifact — not a fictional one.

## 1. Docker Setup

Dockerfile (optional local build):

FROM mcp/n8n:latest LABEL org.opencontainers.image.source="https://github.com/czlonkowski/n8n-mcp" CMD ["node", "dist/index.js"]

docker-compose.yml — MCP service in stdio mode, optional bundled n8n:

Code· yaml

```
services:
  mcp:
    image: mcp/n8n:latest
    stdin_open: true
    tty: true           # stdio pattern — NO ports mapping
    environment:
      N8N_API_URL: ${N8N_API_URL:-http://host.docker.internal:5678}
      N8N_API_KEY: ${N8N_API_KEY:?required — set it in .env}
    networks: [n8n-net]
  # n8n: (commented) — uncomment to bundle n8n itself
networks: { n8n-net: { driver: bridge } }
```

## 2. CLI Commands

Code· bash

```
# Pull image (no build step needed)
docker pull mcp/n8n:latest

# Smoke test: pipe a JSON-RPC `initialize` to verify the server boots
echo '{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":"2024-11-05","capabilities":{},"clientInfo":{"name":"smoke","version":"0"}}}' \
  | docker run -i --rm \
      -e N8N_API_URL=http://host.docker.internal:5678 \
      -e N8N_API_KEY="$N8N_API_KEY" \
      mcp/n8n:latest

# Validate compose config (after creating .env)
docker compose config

# Build the optional local image
docker build -t local-n8n-mcp .

# Compose-based detached run (less common for stdio MCP)
docker compose up -d mcp
docker compose logs -f mcp
docker compose down

# Cleanup
docker rm -f n8n-mcp-server
```

Port mapping: none. The MCP transport is stdio, not SSE — the host agent attaches stdin/stdout to the container. Verified via `stdin_open: true` + `tty: true` + no `ports:` block.

## 3. Host Integration Config

Drop-in for Claude Desktop (`%APPDATA%\Claude\claude_desktop_config.json`):

Code· json

```
{
  "mcpServers": {
    "n8n": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "-e", "N8N_API_URL",
        "-e", "N8N_API_KEY",
        "mcp/n8n:latest"
      ],
      "env": {
        "N8N_API_URL": "http://host.docker.internal:5678",
        "N8N_API_KEY": "n8n_api_REPLACE_WITH_YOUR_KEY"
      }
    }
  }
}
```

Equivalent snippets for Claude Code (`.mcp.json` / `~/.claude.json`), VS Code Copilot (`.vscode/mcp.json`), Cursor (`~/.cursor/mcp.json`), and Continue.dev are in `host-configs/all-hosts.json` — all using `docker run` as t

## Sources

- Pre-migration reference: `../../archive/n8n-pre-migration.md` (the original N8N.md, archived)
- n8n docs: https://docs.n8n.io/api/

## Related

- 1.0COORDINATOR: MCP Authoring (spec)
- 4.0TOOLS: MCP Server Wiring (deploy)
- 4.0TOOLS/SOLO-PROJECTS/local-server-bridge (the live n8n container is one
  of the host's long-running services)
