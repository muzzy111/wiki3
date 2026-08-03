---
title: MCP Authoring
tags: [agent, hermes, skill, mcp]
created: 2026-07-01
type: skill
status: active
---

# MCP Authoring

> How Hermes creates and configures Model Context Protocol (MCP) servers for the team.

## Scope

This skill covers MCP server creation only. It is Hermes' job. If a server implementation needs code, OpenCode writes it. Hermes authors the configuration and the documentation; OpenCode may implement the server.

## When To Create an MCP Server

Hermes creates an MCP server when:

- An agent needs a capability that is not available locally (e.g., a proprietary API, a web-scraping backend, a domain-specific tool).
- The capability would be reused across multiple agents.
- The capability has credentials that should not be embedded in agent prompts.

Hermes does **not** create an MCP server when:

- The capability can be achieved with a single agent's existing tools.
- The capability is one-off and would not be reused.
- The capability requires sending vault content to a third party (this is a system rule violation; escalate).

## Two Flavors

Hermes authors two flavors of MCP server:

1. **Code-based** — Python or Node implementation that runs locally. Lightweight, fast iteration, easy to read.
2. **Docker-based** — server runs inside a Docker container. Better isolation, easier dependency management, slower iteration.

### Choosing Between Them

- Default to **code-based** unless the server has heavyweight dependencies (e.g., a database engine, a large ML model).
- Use **Docker-based** when:
  - The server needs a system library that would pollute the host.
  - The server has a complex dependency graph.
  - The server should be reproducible across machines (e.g., for a teammate).

## Authoring Workflow

### 1. Define the server

Write a `server-spec.md` in `MCP/servers/<server-name>/`. The spec includes:

- Name and purpose.
- Tools exposed (name, input schema, output schema, example call).
- Resources exposed (URI, MIME, description).
- Required credentials (names only — values live in env vars).
- Whether it is code-based or Docker-based.
- Which agents are expected to use it.

### 2. Write the configuration

For a **code-based** server:

- `MCP/servers/<server-name>/server.py` (or `server.js`) — the implementation.
- `MCP/servers/<server-name>/pyproject.toml` (or `package.json`) — dependencies.
- `MCP/servers/<server-name>/README.md` — how to install, run, and verify.
- `MCP/servers/<server-name>/env.example` — list of required env vars, no values.

For a **Docker-based** server:

- `MCP/servers/<server-name>/Dockerfile`.
- `MCP/servers/<server-name>/docker-compose.yml` (or `docker run` command in README).
- `MCP/servers/<server-name>/server.py` (or `server.js`) — the server code copied into the image.
- `MCP/servers/<server-name>/README.md` — how to build, run, and verify.
- `MCP/servers/<server-name>/env.example` — list of required env vars, no values.

### 3. Document the server

Update `MCP/README.md` (the MCP folder's master index) with the new server entry. Each entry points at the server's folder and README.

### 4. Verify

- Start the server locally.
- Call each tool with a known input and confirm the expected output.
- Verify credentials are read from env vars, not hardcoded.
- Confirm the server's logs do not print credentials.

### 5. Hand off for review

Open the review brief in `2.0MAVIS/CHAT/Inbox/<server-name> — MCP Review.md`. Mavis reviews:

- Does the spec match the implementation?
- Are credentials handled correctly?
- Is the README complete and reproducible?
- Are the tools' input schemas correct and minimal?
- Is error handling sane?

Mavis signs off (or sends back revisions). Hermes announces the server in chat with the user.

## Credentials Rule

> [!warning] Credentials never in code or notes
> All credentials are read from environment variables. The `env.example` file lists the variable names only. The actual values live in the user's shell, in a `.env` file that is gitignored, or in the agent runtime's secret store. If a credential value appears in any note or code, Hermes redacts it and writes a deviation entry.

## Discovery

Other agents discover MCP servers via `MCP/README.md` and the per-server README. The MCP folder is the catalog.

## Versioning

When a server's tools change in a breaking way, Hermes:

1. Bumps the version in the server's README.
2. Adds a changelog entry.
3. Notifies the user in chat.
4. Updates any agent prompts that reference the old tool shape.

## Server Lifecycle

- **Draft** — spec written, implementation not started.
- **Building** — OpenCode is implementing.
- **Review** — Mavis is reviewing.
- **Active** — running and in use.
- **Deprecated** — superseded by another server or no longer needed; kept for at least 30 days before removal.

The status is tracked in the server's `README.md` frontmatter.