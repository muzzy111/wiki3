# n8n MCP Server

A Docker-based Model Context Protocol server that lets any MCP-compatible
LLM agent (Claude Desktop, Claude Code, Cursor, Continue, VS Code Copilot,
Cline, etc.) interact with your n8n instance — list, create, edit, trigger,
and validate workflows through natural language.

Built around the official **`mcp/n8n`** image by czlonkowski (100K+ pulls,
MIT licensed, cosign-verified by Docker). 42 tools, including:

- `n8n_list_workflows`, `n8n_get_workflow`, `n8n_create_workflow`,
  `n8n_update_partial_workflow`, `n8n_delete_workflow`
- `n8n_list_executions`, `n8n_get_execution`, `n8n_delete_execution`
- `n8n_trigger_webhook_workflow`
- `n8n_health_check`, `n8n_validate_workflow`, `n8n_autofix_workflow`
- Plus 30+ discovery / template / validation tools

## Architecture

```
+----------------------+      stdio (stdin/stdout)      +-------------------+
|   Host LLM agent     |  <-------------------------->  |  docker run       |
|   (Claude, Cursor,   |      JSON-RPC over stdio      |  mcp/n8n:latest   |
|    VS Code, etc.)    |                                +---------+---------+
+----------------------+                                          |
                                                          HTTPS (REST API)
                                                                  |
                                                                  v
                                                        +---------+---------+
                                                        |  n8n instance     |
                                                        |  (host or remote) |
                                                        +-------------------+
```

The MCP server does NOT contain n8n. It is a thin wrapper that exposes
n8n's REST API as MCP tools. You point it at an existing n8n instance
via `N8N_API_URL` + `N8N_API_KEY`.

## Files in this folder

| File                          | Purpose                                |
|-------------------------------|----------------------------------------|
| `Dockerfile`                  | Optional local build of mcp/n8n        |
| `docker-compose.yml`          | Compose stack (MCP + optional n8n)     |
| `.env.example`                | Copy to `.env`, fill in keys           |
| `host-configs/`               | Snippets for Claude/Cursor/VS Code/etc |
| `README.md`                   | This file                              |

## Prerequisites

1. **Docker Desktop** (or Docker Engine) — verified working with Docker
   29.x and Compose 5.x on this machine.
2. **An n8n instance** with API access enabled.
   - Already running locally: confirm with `docker ps | grep n8n`
   - Or remote: any HTTPS n8n endpoint.
3. **An n8n API key.** In n8n: `Settings -> n8n API -> Create API key`.
   Format: `n8n_api_xxxxxxxx...`

## Quickstart

### 1. Clone the files into a working directory (already done if you
   are reading this in `agent-cowork-space/Build/n8n-mcp/`)

### 2. Configure environment

```bash
cp .env.example .env
# Edit .env — set N8N_API_URL and N8N_API_KEY
```

### 3a. Use compose (recommended for persistence + bundling)

```bash
# Validate the compose file
docker compose config

# Pull the MCP image (no build step needed)
docker compose pull mcp

# (Compose-based MCP launch is unusual — stdio servers are normally
# spawned by the host agent. If you want a managed container, run it
# in the background with `docker compose up mcp` and wire your host
# agent to attach to it.)
```

### 3b. Direct `docker run` (the typical MCP pattern)

```bash
docker pull mcp/n8n:latest

# Smoke test: confirm the server boots and responds to MCP initialize.
# (The server is stdio; you must feed it valid JSON-RPC on stdin.)
echo '{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":"2024-11-05","capabilities":{},"clientInfo":{"name":"smoke","version":"0"}}}' \
  | docker run -i --rm \
      -e N8N_API_URL=http://host.docker.internal:5678 \
      -e N8N_API_KEY="$N8N_API_KEY" \
      mcp/n8n:latest
# Expect a JSON-RPC response with serverInfo + capabilities.
```

### 4. Register with your host agent

Pick your host from `host-configs/all-hosts.json` and merge its
`mcpServers.n8n` block into the host's existing config file.

For **Claude Desktop on Windows**, edit:

```
%APPDATA%\Claude\claude_desktop_config.json
```

and add:

```json
{
  "mcpServers": {
    "n8n": {
      "command": "docker",
      "args": [
        "run", "-i", "--rm",
        "-e", "N8N_API_URL",
        "-e", "N8N_API_KEY",
        "mcp/n8n:latest"
      ],
      "env": {
        "N8N_API_URL": "http://host.docker.internal:5678",
        "N8N_API_KEY": "n8n_api_REPLACE_ME"
      }
    }
  }
}
```

Restart Claude Desktop. The 42 n8n tools will appear in its tool list.

### 5. Verify

In Claude Desktop, ask: *"List the workflows in my n8n instance."*
The agent should call `n8n_list_workflows` and return your workflow list.

If tools are missing: see **Troubleshooting** below.

## CLI reference

```bash
# Build (only if you want a local-pinned copy)
docker build -t local-n8n-mcp .

# Pull latest official image
docker pull mcp/n8n:latest

# Run interactively (stdio transport)
docker run -i --rm \
  -e N8N_API_URL=http://host.docker.internal:5678 \
  -e N8N_API_KEY="n8n_api_xxx" \
  mcp/n8n:latest

# Run from compose
docker compose up -d mcp        # detached
docker compose logs -f mcp      # follow logs
docker compose down             # stop

# Inspect a running mcp/n8n container
docker inspect n8n-mcp-server --format '{{.State.Status}}'

# Verify image signature (Docker cosign)
COSIGN_REPOSITORY=mcp/signatures \
  cosign verify mcp/n8n:latest \
  --key https://raw.githubusercontent.com/docker/keyring/refs/heads/main/public/mcp/latest.pub

# Clean up
docker rm -f n8n-mcp-server
```

## Environment variables

| Var                | Required | Default                          | Notes |
|--------------------|----------|----------------------------------|-------|
| `N8N_API_URL`      | yes      | `http://host.docker.internal:5678` | Base URL of n8n's REST API |
| `N8N_API_KEY`      | yes      | (none)                            | API key from n8n settings |
| `N8N_TIMEOUT`      | no       | 30                                | Per-request timeout (sec) |

When using `host.docker.internal`, the MCP container resolves the host
machine via Docker's loopback gateway. On Linux without Docker Desktop,
add `--add-host=host.docker.internal:host-gateway` to the `docker run`
args. (Compose handles this automatically on Docker Desktop / macOS /
Windows; on Linux servers you may need to adjust.)

## Network scenarios

| n8n location                                | N8N_API_URL                          |
|---------------------------------------------|--------------------------------------|
| Locally on this Docker host, port 5678      | `http://host.docker.internal:5678`   |
| In the same compose stack (`n8n` service)   | `http://n8n:5678`                    |
| Remote / cloud                              | `https://n8n.your-domain.com`        |
| Remote with self-signed cert                | needs custom image with `NODE_EXTRA_CA_CERTS` |

## Troubleshooting

| Symptom                                        | Fix |
|------------------------------------------------|-----|
| Host agent says "no MCP servers"               | Restart host after editing config. Verify JSON parses. |
| Tools list empty                               | Check stderr — most hosts log MCP startup failures to console/log. |
| `401 Unauthorized` from n8n                   | API key wrong / revoked. Regenerate in n8n settings. |
| `ENOTFOUND n8n` or connection refused          | `N8N_API_URL` wrong. If using compose, ensure `n8n` service is up. |
| Linux: `host.docker.internal` not found        | Use `--add-host=host.docker.internal:host-gateway` or run n8n in compose. |
| Slow first call                                | Cold-start; mcp/n8n initializes a workflow docs DB on first run. |
| `permission denied` on docker.sock             | MCP server does not need docker.sock — only the host agent does, and only at launch time. |

## Security notes

- **Never commit `.env`.** Add to `.gitignore`.
- **API keys are full n8n admin.** Treat them like database root passwords.
- The MCP server runs as a short-lived container (`--rm`); nothing
  persists unless you mount a volume (you usually shouldn't).
- For production n8n, prefer a dedicated API key with restricted scopes
  over your personal admin key.

## References

- Official image: https://hub.docker.com/r/mcp/n8n
- Source repo: https://github.com/czlonkowski/n8n-mcp
- MCP spec: https://modelcontextprotocol.io
- n8n API docs: https://docs.n8n.io/api/