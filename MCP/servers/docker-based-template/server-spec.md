---
title: Server Spec Template
tags: [mcp, server-spec, template, docker-based]
created: 2026-07-01
type: mcp-server
status: draft
flavor: docker-based
language: python | node
---

# Server Specification Template

> Hermes fills this in for each new Docker-based MCP server. OpenCode implements from this spec. Mavis reviews against this spec.

## Server Identity

- **Name:** `<server-name>`
- **Purpose:** <one paragraph — what this server does and why>
- **Flavor:** docker-based
- **Language:** python | node (inside the container)
- **Transport:** stdio (default) | streamable-http

## Image Base

- **Base image:** <e.g., python:3.11-slim, node:20-slim>
- **Why this base:** <rationale for the choice>

## Tools

For each tool the server exposes:

### `<tool_name>`

- **Description:** <one sentence — what the tool does>
- **Input schema:** <JSON schema or example>
- **Output schema:** <JSON schema or example>
- **Errors:** <what errors can be returned and when>
- **Side effects:** <none | read-only | writes to <target> | etc.>
- **Idempotent:** yes | no
- **Example call:** <input and expected output>

### `<tool_name_2>`

...

## Resources

For each resource the server exposes:

### `<resource_uri_scheme>`

- **URI pattern:** `<scheme>://<path>`
- **MIME type:** <e.g., text/markdown, application/json>
- **Description:** <what the resource contains>
- **Example:** `<scheme>://example/path>`

## Credentials

List every required credential. **Names only, never values.**

| Env var | Purpose | Required |
|---|---|---|
| `<VAR_NAME>` | <what it's used for> | yes/no |

## Volumes

For data persistence or shared volumes:

| Host path | Container path | Purpose |
|---|---|---|
| `<host>` | `<container>` | <purpose> |

## Ports

For network-exposed services:

| Container port | Host port | Purpose |
|---|---|---|
| `<container>` | `<host>` | <purpose> |

## Build & Run

```bash
# Build
docker build -t <server-name> .

# Run (with docker run)
docker run -i --rm \
  -e VAR_NAME=value \
  <server-name>

# Or with docker-compose
docker-compose up
```

## Verification

After implementation, verify:

- [ ] Container builds without errors
- [ ] Server starts inside the container
- [ ] Each tool responds to a representative call
- [ ] Each resource returns the expected content
- [ ] Credentials are passed via env vars, not baked into the image
- [ ] Logs do not contain secrets
- [ ] Tests pass

## Notes

<anything else the implementer or reviewer should know>