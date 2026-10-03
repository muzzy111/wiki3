---
aliases: []
tags:
  - agent
  - verifies
  - matrix
  - room
---

# CRLF Windows Shebang Bug in [[OmniRoute]] Shell Scripts

[[OmniRoute]] ships shell scripts (notably `check-permissions.sh`) that fail to execute inside Docker when the source repo is cloned on Windows with `git config core.autocrlf=true`. The shebang line `#!/bin/sh` becomes `#!/bin/sh\r` (with trailing carriage return), and Linux's `/bin/sh` rejects the malformed interpreter path.

## The bug

When you clone a repo on Windows with default Git settings:
- `core.autocrlf=true` causes Git to convert LF to CRLF on checkout.
- Shell script shebangs get CRLF endings.
- Inside a Linux container, `#!/bin/sh\r` is not a valid interpreter path. The kernel returns `exec format error` or "no such file or directory".

[[OmniRoute]]'s `docker-compose.yml` base profile runs `check-permissions.sh` as part of the entrypoint chain. With CRLF-corrupted shebangs, the container fails to start.

## The diagnosis

In the [[OmniRoute]] container logs:
```
exec /usr/local/bin/check-permissions.sh: no such file or directory
```
or
```
/bin/sh: bad interpreter: /bin/sh\r
```

The `\r` in the path is invisible in most log viewers — copy the line to a hex editor and you'll see `0d 0a` instead of just `0a` at the line ending.

## The workaround

Override the container entrypoint to bypass the broken shell script:

```yaml
# docker-compose.override.yml
services:
  omniroute-base:
    ports:
      - "20128:20128"
    entrypoint: ["node", "dev/run-standalone.mjs"]
    command: []
```

`dev/run-standalone.mjs` is the Node.js alternative to the shell-based entrypoint. It performs the same startup logic in JavaScript, sidestepping the shell shebang entirely.

## Alternative fixes

1. **Fix at the source**: `git config core.autocrlf false` before cloning. Or `dos2unix check-permissions.sh` after clone.
2. **Fix in the repo**: add `.gitattributes` to [[OmniRoute]] forcing `*.sh text eol=lf`.
3. **Fix in the container**: use a multi-line command that ignores the script:
   ```yaml
   entrypoint: ["sh", "-c", "node dev/run-standalone.mjs"]
   ```
4. **Fix via volume mount**: bind-mount a corrected `check-permissions.sh` from the host.

The override-entrypoint approach (option 4 in `Build\vault-core\01-[[omniroute]]-deploy\docker-compose.override.yml`) is the least invasive and doesn't require modifying either the repo or the host's git config.

## Detection

If [[OmniRoute]] containers fail healthcheck, check:

```bash
# Inside the container
docker exec -it <container> /bin/sh -c 'cat -A /usr/local/bin/check-permissions.sh | head -1'
# Look for "^M" at end of line (carriage return)
```

If you see `#!/bin/sh^M$`, you've found the bug.

## When this bites other projects

Same bug pattern affects any project that:
1. Ships shell scripts with shebangs.
2. Is cloned on Windows with `core.autocrlf=true`.
3. Runs the shell scripts inside a Linux container.

Common victims: Node.js projects with `bin/*.sh` wrappers, Python projects with `entrypoint.sh` for Docker, Go projects with Makefile-style shell helpers.

## Reference

- `Source\[[OmniRoute]] - Copy\docker-compose.yml` — references `check-permissions.sh` in entrypoint
- `Build\vault-core\01-[[omniroute]]-deploy\docker-compose.override.yml` — workaround applied
- `Build\vault-core\01-[[omniroute]]-deploy\verify.log` — shows successful start after workaround
- Discovery moment: `[[2026-06-29 vault-os-build session]].md`, [[[[event]]]] `[11:05]` (verify.log captured the workaround)

## Related

- [[Vault OS Core Loop Architecture]] — uses [[OmniRoute]] as the gateway
- [[RAW/2026-06-29 vault-os-build session]] — discovery context