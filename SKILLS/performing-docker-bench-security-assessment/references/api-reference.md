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

# API Reference — Performing Docker Bench Security Assessment

## [[Libraries]] Used
- **subprocess**: Run docker-bench-security container and docker inspect commands
- **json**: Parse docker inspect JSON output

## CLI Interface

```
python agent.py bench        # Run full docker-bench-security
python agent.py containers   # Check running container configurations
```

## Core Functions

### `run_docker_bench()`
Runs the docker/docker-bench-security container with host access for CIS benchmark checks.

### `parse_bench_output(output)`
Parses [WARN], [PASS], [NOTE] lines into structured findings with sections.

### `check_container_configs()`
Inspects all running containers for CIS Docker Benchmark violations.

### CIS Checks Performed on Containers

| Check | CIS ID | Severity |
|-------|--------|----------|
| Privileged mode | 5.4 | CRITICAL |
| Host PID namespace | 5.15 | HIGH |
| Host network namespace | 5.13 | HIGH |
| Dangerous capabilities | 5.3 | HIGH |
| Running as root | 4.1 | MEDIUM |
| Sensitive host mounts | 5.5 | HIGH |

## Dependencies
Docker must be installed and accessible. No Python packages required beyond stdlib.
