# Dockerfile — n8n MCP server (wraps the official mcp/n8n image)
#
# Two paths are supported:
#
#   A) Drop-in (recommended): pull the official `mcp/n8n` image and run
#      it via docker compose. No Dockerfile build needed at all.
#      This Dockerfile is provided as a fallback / customization point
#      if you want to pin a version, add tools, or run offline.
#
#   B) Custom build: `docker build -t local-n8n-mcp .` produces a
#      re-tagged local image that behaves identically to mcp/n8n:latest.
#
# The base image is a verified Docker-published MCP server
# (czlonkowski/n8n-mcp). See:
#   https://hub.docker.com/r/mcp/n8n
#   https://github.com/czlonkowski/n8n-mcp

FROM mcp/n8n:latest

# Optional: pin a digest for reproducibility
# FROM mcp/n8n@sha256:061cdb8fb...

# Labels
LABEL org.opencontainers.image.title="n8n MCP server (local build)"
LABEL org.opencontainers.image.description="MCP server exposing 42 n8n workflow tools to LLMs"
LABEL org.opencontainers.image.source="https://github.com/czlonkowski/n8n-mcp"
LABEL org.opencontainers.image.licenses="MIT"

# The base image already:
#   - installs Node 20
#   - sets the MCP server entrypoint (stdio transport)
#   - reads N8N_API_URL and N8N_API_KEY from the environment
#
# No further steps are required. This Dockerfile exists so you can
# `docker build` a locally-pinned copy if you need to bake in extra
# tools, certificates, or a private npm registry.

# Healthcheck note: stdio MCP servers don't expose a port, so a
# Docker HEALTHCHECK is not meaningful here. The host agent detects
# liveness by whether the stdio pipe stays open.

CMD ["node", "dist/index.js"]