---
title: Code-Based Server Tests
tags: [mcp, tests, code-based-template]
created: 2026-07-01
type: mcp-server-tests
status: draft
---

# Code-Based Server Tests

> Tests for the code-based MCP server template. Replace with real tests when implementing a server.

## What Lives Here

- Unit tests for each tool exposed by the server.
- Integration tests for resource handlers.
- Smoke tests for server startup and shutdown.

## Running Tests

```bash
pytest tests/
```

## Writing Tests

For each tool, write at least:

1. A happy-path test with representative input.
2. An error-path test with the documented error case.
3. A malformed-input test that verifies the schema validation.

For each resource, write at least one representative URI test.

## See Also

- Template README: [[../README]]
- Server spec: [[../server-spec]]
- Server implementation: [[../server]]
- Pyproject: [[../pyproject]]