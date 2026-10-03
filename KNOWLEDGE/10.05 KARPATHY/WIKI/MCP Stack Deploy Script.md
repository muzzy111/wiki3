---
aliases: []
tags:
  - agent
  - verifies
  - matrix
  - room
---

# MCP Stack Deploy Script

The idempotent bash script that deploys the
[[Self-Hosted MCP Stack on Docker Desktop]]. Written 2026-06-16 from a
running journal. Lives at
`C:\Users\Admin\AppData\Local\hermes\scripts\deploy-mcp-stack.sh`.

## Why a Bash Script (Not Compose)

- Single file, easy to read, easy to diff
- No YAML indenting brittleness
- Runs the same on Windows git-bash, Linux, macOS, WSL
- Can be invoked from cron, terminal, or interactive shell
- A future Docker Compose file is a likely v2, but not needed yet

## How It Works

The script holds a `CATS` bash array where each row is a single
container spec:

```
category|name|image|hostport:contport|memory|env_pairs|data_mount_path
```

For each row it:

1. **Ensures the named volume** exists (`docker volume create` only if
   missing — `inspect` first)
2. **Inspects the container** by name
   - If it exists: `docker start` (idempotent)
   - If it doesn't: `docker run -d` with the full flag set
3. **Builds the run command** with:
   - `--restart unless-stopped`
   - `--network mcp-net`
   - `--memory <cap>`
   - `--label hermes.mcp.managed-by=deploy-mcp-stack.sh`
   - `-p 127.0.0.1:<port>:<port>` (loopback only)
   - `-e KEY=VAL` for each semicolon-separated env pair
   - `-v <vol>:<mount>`
   - image-specific `--health-cmd` for redis/meili/qdrant
   - image-specific overrides for code-server, theia, jupyter,
     ubuntu-base

## Modes

| Flag | Behavior |
|---|---|
| (none) | Deploy the stack. Idempotent — safe to re-run. |
| `--[[status]]` | Print what would be deployed, don't touch anything. |
| `--dry-run` | Print the `docker` commands without executing them. |
| `--remove` | Stop and remove all containers with the `hermes.mcp.managed-by` label. |

## Cron Runner

A thin Python wrapper
(`C:\Users\Admin\AppData\Local\hermes\scripts\deploy-mcp-stack-runner.py`)
invokes the bash script with a 30-minute timeout, captures stdout/stderr,
and exits with the script's exit code. Cron runs the Python wrapper —
the agent loop is NOT involved (see
[[MCP Stack Deploy Cron Job]]).

## Idempotency Guarantees

- Network: created only if missing
- Volumes: created only if missing
- Containers: `start` if exists, `run` if not
- 10pm cron can re-run any time without breaking already-deployed
  containers

## Pitfalls Discovered

- **`docker manifest inspect` is unreliable on this Windows host** —
  silently times out for many images. Verification was done via
  `curl` to the Docker Hub registry HTTP API instead.
- **`scrapy/scrapyd` does not exist** — the subagent's research was
  wrong. `scrapydata/scrapyd` is the working replacement.
- **Ghost containers**: when a `docker run` fails (e.g. missing
  network) it can leave a stopped container with the same name, which
  blocks the next attempt. Always `docker rm -f <name>` before a fresh
  `docker run` with the same name.
- **`args[-1]=` is zsh syntax** — don't use it in bash. The script
  uses individual `case` branches for image-specific overrides
  instead of trying to mutate the args array.

## Related

- [[Self-Hosted MCP Stack on Docker Desktop]]
- [[MCP Stack Deploy Cron Job]]
- [[Container Security Defaults for Local Stacks]]
