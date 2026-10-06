---
name: tooling-build
owning_agent: opencode
allowed_dirs:
  - TASKS/
  - scripts/
---

# Tooling Build

## Goal

Build scripts, automation tools, and vault utilities as specified in the plan — producing runnable, documented artifacts that integrate cleanly with the existing vault toolchain.

## Focus

- **Plan-faithful build**: implement the tool or script exactly as specified in `03-plan.md`. opencode is the tooling specialist — apply craft, but do not redesign the tool's purpose.
- **Integration with existing toolchain**: scripts go in `scripts/`. Vault utilities that other agents use must follow the naming and invocation patterns already established in `scripts/`.
- **Documentation**: every tool gets a header comment describing purpose, usage, and required environment. No undocumented scripts.
- **MCP-aware tooling**: opencode has access to MCP servers. When a tool wraps an MCP call or external API, document the MCP server name and method in the script header.

## Workflow

1. **Load plan** — read the tooling steps assigned to opencode in `03-plan.md`. Identify: tool name, target path, language, inputs, outputs, integration points.

2. **Read existing scripts** — if the tool extends or replaces an existing script, read the existing file first. Identify patterns and conventions already in use (shebang, error handling style, logging, exit codes).

3. **Implement**:
   - Write the tool to `scripts/{name}` or the path specified in the plan.
   - Include: header comment, usage example, error handling, exit codes.
   - For PowerShell scripts: use consistent parameter naming, `$ErrorActionPreference = 'Stop'`, and produce structured output where possible.
   - For Python scripts: use `argparse`, include a `if __name__ == '__main__':` guard, log to stderr.
   - For shell scripts: set `set -euo pipefail`.

4. **Self-test** — if the plan specifies a test command, run it (or describe in the reply what the test would produce). For scripts that cannot be safely run in the current context, describe the expected behavior in the reply.

5. **Write reply** — `TASKS/{task-id}/04-execution/opencode.md`.

6. **Publish NATS reply** — signal `reply.opencode`.

## Output Contract

`TASKS/{task-id}/04-execution/opencode.md`:

```markdown
---
task_id: {task-id}
agent: opencode
playbook: tooling-build
step: 4
---

# Opencode Tooling Reply

## Tools Built
| Path | Language | Purpose |
|---|---|---|
| {path} | {lang} | {one-line purpose} |

## Integration Notes
{how the tool connects to existing toolchain or MCP servers}

## Self-Test Result
{pass|skip — reason}

## Notes for Mavis Review
{areas to scrutinize: error handling, edge cases, security}
```

## Guardrails

- Never write scripts to SYSTEM/, SYSTEM/LOCK/, or agents directories without explicit plan authorization.
- Never write a script that modifies vault.db schema (DDL). Scripts may execute DML only.
- Every script must have a header comment with purpose and usage. Undocumented scripts will be blocked by mavis review.
- Do not hardcode secrets or credentials. Use environment variables or vault-approved secrets pattern.
- MCP calls in scripts must use the MCP server name and method documented in `MCP/servers/`.

## Question Ownership

This playbook runs in the opencode worker (subagent). AskUserQuestion is forbidden. All escalations go in `04-execution/opencode.md`.
