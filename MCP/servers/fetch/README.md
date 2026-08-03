# Fetch MCP Server

> URL fetching with markdown extraction and link extraction; honors robots.txt by default
> State: **active**.

## Install

```bash
# Editable install (recommended for development)
cd MCP/servers/fetch
pip install -e .
```

## Run

### stdio transport

```bash
python src/fetch_server.py
```

### Docker

```bash
docker build -t loop-fetch-mcp:dev .
docker run -i --rm -v ${LOOP_VAULT_ROOT}:/vault:ro \
    -e LOOP_VAULT_ROOT=/vault loop-fetch-mcp:dev
```

## Verify (smoke call)

```bash
echo '{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":"2024-11-05","capabilities":{},"clientInfo":{"name":"smoke","version":"0"}}}' | python src/fetch_server.py
```

Expected response (excerpt):
```json
{"jsonrpc":"2.0","id":1,"result":{"protocolVersion":"2024-11-05",...}}
```

## Wire to Claude Desktop / OpenCode

In `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "fetch": {
      "command": "python",
      "args": ["C:/Users/Admin/OBSIDIAN/LOOP/MCP/servers/fetch/src/fetch_server.py"],
      "env": { "LOOP_VAULT_ROOT": "C:/Users/Admin/OBSIDIAN/LOOP" }
    }
  }
}
```

## Tools

See `server-spec.md` for the canonical tool list.

## Tests

```bash
python -m pytest tests/ -q
```

## Related

- Spec: `server-spec.md`
- Environment template: `env.example`
- See `../../README.md` for the catalog.
