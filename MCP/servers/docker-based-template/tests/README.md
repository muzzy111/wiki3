---
title: Docker-Based Server Tests
tags: [mcp, tests, docker-based-template]
created: 2026-07-01
type: mcp-server-tests
status: draft
---

# Docker-Based Server Tests

> Tests for the Docker-based MCP server template. Replace with real tests when implementing a server.

## What Lives Here

- Unit tests against the server source (run on the host, not inside the container).
- Container-level integration tests (run via docker-compose in a CI environment).

## Running Tests

### Unit tests (host)

```bash
pytest tests/
```

### Integration tests (container)

```bash
docker-compose up --build
# Run integration test script
./scripts/integration-test.sh
```

## Writing Tests

For each tool, write at least:

1. A happy-path test with representative input (unit, against source).
2. An error-path test with the documented error case.
3. A malformed-input test that verifies the schema validation.
4. A container integration test that confirms the tool works inside the running container.

For each resource, write at least one representative URI test.

## See Also

- Template README: [[../README]]
- Server spec: [[../server-spec]]
- Dockerfile: [[../Dockerfile]]
- docker-compose: [[../docker-compose]]