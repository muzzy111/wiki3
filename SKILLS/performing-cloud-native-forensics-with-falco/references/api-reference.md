---
name: Document design
description: This skill should be used when the user asks to "create a proposal", "design a report", "make a one-pager", "build a PDF", "create a newsletter", "design slides", "make event materials", "design a flyer", or needs help with print-ready HTML documents. Provides brand configuration, CSS patterns for print layout, and document design best practices.
version: 1.0.0
tags:
  - brand
  - content
  - footer
  - config
---

# API Reference: Performing Cloud Native Forensics with Falco

## Falco Rule YAML Structure

```yaml
- rule: Shell Spawned in Container
  desc: Detect shell in container
  condition: >
    spawned_process and container
    and proc.name in (bash, sh, zsh)
  output: >
    Shell spawned (user=%user.name command=%proc.cmdline
    container=%container.name image=%container.image.repository)
  priority: WARNING
  tags: [container, shell, mitre_execution]
```

## Falco Condition Fields

| Field | Description |
|-------|-------------|
| `proc.name` | Process name |
| `proc.cmdline` | Full command line |
| `proc.pname` | Parent process name |
| `user.name` | User running process |
| `fd.name` | File descriptor name/path |
| `container.name` | Container name |
| `container.image.repository` | Container image |
| `container.privileged` | Privileged flag |
| `evt.type` | Syscall type (execve, open, connect) |

## Falco Priority Levels

`EMERGENCY > ALERT > CRITICAL > ERROR > WARNING > NOTICE > INFO > DEBUG`

## Falco HTTP API

```python
import requests
# Health check
requests.get("http://localhost:8765/healthz")
# Version
requests.get("http://localhost:8765/version")
```

## Helm Deployment

```bash
helm repo add falcosecurity https://falcosecurity.github.io/charts
helm install falco falcosecurity/falco \
  --set driver.kind=ebpf \
  --set falcosidekick.enabled=true
```

### References

- Falco: https://falco.org/docs/
- Falco rules: https://github.com/falcosecurity/rules
- Falcosidekick: https://github.com/falcosecurity/falcosidekick
