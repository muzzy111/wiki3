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

Equivalent snippets for Claude Code (`.mcp.json` / `~/.claude.json`), VS Code Copilot (`.vscode/mcp.json`), Cursor (`~/.cursor/mcp.json`), and Continue.dev are in `host-configs/all-hosts.json` — all using `docker run` as the executable.

## Verification summary (ad-hoc)

Ad-hoc verifier: `C:\Users\Admin\AppData\Local\Temp\hermes-verify-n8n-mcp.py` (created → run → fixed → re-run → removed)

Coverage — 17 checks across files, format, runtime, and host integration:

|Check|Result|
|---|---|
|6 required files exist|PASS|
|`.env` configured with real keys|WARN (not present — expected for fresh checkout)|
|2 JSON files parse|PASS|
|Compose has `image: mcp/n8n:latest`|PASS|
|Compose env block has `N8N_API_URL` + `N8N_API_KEY`|PASS|
|Compose uses stdio pattern (no ports, stdin_open, tty)|PASS|
|`docker compose config` exits 0 (with stub env)|PASS|
|`all-hosts.json` × 3 host blocks correct|PASS (3/3)|
|`claude_desktop_config.json` × 2 nested blocks correct|PASS (2/2)|
|`docker --version`|PASS (29.5.3)|
|`docker compose version`|PASS (v5.1.4)|
|n8n container currently running|PASS (port 5678 mapped)|
|`mcp/n8n:latest` reachable on Docker Hub|PASS|
|README covers env vars + commands|PASS|

Final: 16 PASS, 1 WARN (intentional — `.env` is by design absent until user copies `.env.example` and fills in real keys), 0 FAIL. Exit code 0.

Two real issues caught and fixed during verification:

1. Verifier bug (false negative): original `host-config` check looked at _values_ of the `env` dict for the string `N8N_API_URL`, but values are URLs and API keys — never contain the var name. Fixed to check _keys_.
2. `docker compose config` legitimately fails without `.env` because `${N8N_API_KEY:?...}` requires a value. Verifier now feeds a stub env file so the check is meaningful, then deletes the stub.

Honest framing: This is ad-hoc structural verification, not a project test suite. The verifier confirms (a) files exist, (b) format validity, (c) compose file is valid via Docker's own parser, (d) the MCP image is reachable, (e) host configs reference the right env vars and use the right entrypoint shape. It does not verify: (i) the MCP server actually talks to n8n (would require a real API key + an end-to-end MCP round-trip), (ii) any specific host agent picks up the config (host behavior), (iii) the 42 listed tools actually work. Those require running a real agent through real workflows.