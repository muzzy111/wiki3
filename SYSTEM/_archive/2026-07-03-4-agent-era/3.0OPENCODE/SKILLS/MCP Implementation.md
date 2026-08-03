---
title: MCP Implementation
tags: [agent, opencode, skill, mcp]
created: 2026-07-01
type: skill
status: active
---

# MCP Implementation

> How OpenCode implements MCP servers per Hermes' spec.

## Scope

This skill covers the **implementation** side of MCP server creation. The **architecture and configuration** side is Hermes' responsibility — see [[../../1.0HERMES/SKILLS/MCP Authoring]]. OpenCode does not author MCP specs; OpenCode implements them.

## Inputs

OpenCode receives:

1. The server spec from Hermes at `MCP/servers/<server-name>/server-spec.md`.
2. A coding brief from Hermes in `3.0OPENCODE/CHAT/Inbox/<task-id>.md` referencing the spec.
3. Any existing scaffold in `MCP/servers/<server-name>/`.

If the spec is missing or incomplete, OpenCode returns the brief with `blocked` status and asks Hermes to clarify. OpenCode does not invent the spec.

## Implementation Standards

OpenCode follows `../RULES/Coding Standards.md`. For MCP servers specifically:

- **Language.** Python (default) or TypeScript/Node. Match what the spec calls for.
- **Framework.** Use the official MCP SDK: `mcp` (Python) or `@modelcontextprotocol/sdk` (TypeScript). Do not roll your own protocol layer.
- **Transport.** stdio for local servers. Streamable HTTP for remote servers.
- **State.** Stateless by default. Persistent state lives in a backing store (sqlite, redis, file) and is documented.
- **Concurrency.** Handle concurrent requests safely. Use asyncio (Python) or async/await (Node).
- **Logging.** Logs to stderr (per MCP convention). Never log secrets or sensitive inputs.

## Project Layout (Code-Based Server)

```
MCP/servers/<server-name>/
|-- server-spec.md           (Hermes-authored)
|-- server.py                (or server.ts — OpenCode-authored)
|-- pyproject.toml           (Python deps) or package.json (Node deps)
|-- README.md                (Hermes-authored or OpenCode-authored)
|-- env.example              (Hermes-authored)
|-- tests/
|   `-- test_server.py
|-- Dockerfile               (only if also Docker-based)
`-- docker-compose.yml       (only if Docker-based)
```

## Project Layout (Docker-Based Server)

Same as above plus:

```
MCP/servers/<server-name>/
|-- Dockerfile
|-- docker-compose.yml
|-- server.py                (copied into image)
|-- ... (rest as above)
```

## Tool Implementation

For each tool defined in the spec:

1. **Input validation.** Validate every input against the schema in the spec. Reject malformed inputs with a clear error.
2. **Error handling.** Catch errors and return a structured MCP error response. Never raise uncaught exceptions to the client.
3. **Output.** Match the output schema in the spec exactly. Extra fields are forbidden; missing fields are bugs.
4. **Idempotency.** Where the spec says a tool should be idempotent, implement idempotency. Document idempotency in the tool docstring.
5. **Side effects.** Document side effects in the tool docstring. Do not introduce undocumented side effects.

Example tool implementation (Python):

```python
from mcp.server.fastmcp import FastMCP

mcp = FastMCP("example-server")


@mcp.tool()
def wikilink_check(vault_path: str, link: str) -> dict:
    """Check whether a wikilink resolves in the given vault.

    Args:
        vault_path: Absolute path to the vault root.
        link: The wikilink target, without the surrounding [[ ]].

    Returns:
        A dict with `exists: bool` and `target_path: str | None`.
    """
    target = Path(vault_path) / f"{link}.md"
    exists = target.is_file()
    return {"exists": exists, "target_path": str(target) if exists else None}
```

## Resource Implementation

For each resource defined in the spec:

1. **URI scheme.** Documented in the spec. Match exactly.
2. **MIME type.** Match the spec.
3. **Content.** Return the content as defined. Do not transform.

## Credentials

- All credentials read from environment variables.
- Variable names listed in `env.example` (Hermes-authored).
- OpenCode never writes credential values into code, comments, or logs.

## Testing

OpenCode writes tests for:

- Each tool with happy-path input.
- Each tool with the documented error cases.
- Each tool with malformed input.
- Resource handlers with at least one representative URI.

Tests use the MCP client's test harness or direct function calls. Tests live in `tests/`.

## Documentation

OpenCode updates the server's `README.md` with:

- How to install (per `Coding Standards.md`).
- How to run (per `Coding Standards.md`).
- How to test.
- Tool and resource reference (auto-generated where possible).
- Known limitations.

If the README does not exist (Hermes-authored), OpenCode drafts it and notes in the review request that the README is new and needs Mavis' review.

## Review

OpenCode submits the implementation to Mavis per the standard [[../CHAT/Coding Brief Protocol]]. Mavis checks:

- Spec adherence (every tool and resource from the spec is implemented correctly).
- Input validation.
- Error handling.
- Security (no hardcoded secrets, no unsafe operations).
- Tests.
- Documentation.

## Handoff

When Mavis approves, OpenCode:

1. Marks the task `done`.
2. Posts a completion note to `3.0OPENCODE/CHAT/Outbox/<task-id>.md` referencing the server's path and Mavis' verdict.
3. Notifies Hermes that the server is ready for Hermes to verify (start the server, call each tool, confirm expected output).

Hermes performs the final verification per [[../../1.0HERMES/SKILLS/MCP Authoring]] and announces the server to the user.

## See Also

- Hermes' MCP authoring: [[../../1.0HERMES/SKILLS/MCP Authoring]]
- Coding standards: [[../RULES/Coding Standards]]
- Coding brief protocol: [[../CHAT/Coding Brief Protocol]]
- Review protocol: [[../../2.0MAVIS/CHAT/Review Protocol]]