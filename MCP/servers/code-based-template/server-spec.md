---
title: Server Spec Template
tags: [mcp, server-spec, template, code-based]
created: 2026-07-01
type: mcp-server
status: draft
flavor: code-based
language: python | node
---

# Server Specification Template

> Hermes fills this in for each new MCP server. OpenCode implements from this spec. Mavis reviews against this spec.

## Server Identity

- **Name:** `<server-name>`
- **Purpose:** <one paragraph — what this server does and why>
- **Flavor:** code-based
- **Language:** python | node
- **Transport:** stdio (default for local servers) | streamable-http (for remote)

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

### `<resource_uri_scheme_2>`

...

## Credentials

List every required credential. **Names only, never values.**

| Env var | Purpose | Required |
|---|---|---|
| `<VAR_NAME>` | <what it's used for> | yes/no |

## Configuration

| Env var | Default | Purpose |
|---|---|---|
| `<VAR_NAME>` | <default> | <purpose> |

## Dependencies

- **Python:** list packages with exact versions
- **Node:** list packages with exact versions

## Build & Run

```bash
# Install
<install command>

# Run
<run command>

# Test
<test command>
```

## Verification

After implementation, verify:

- [ ] Server starts without errors
- [ ] Each tool responds to a representative call
- [ ] Each resource returns the expected content
- [ ] Credentials are read from env vars, not hardcoded
- [ ] Logs do not contain secrets
- [ ] Tests pass

## Notes

<anything else the implementer or reviewer should know>