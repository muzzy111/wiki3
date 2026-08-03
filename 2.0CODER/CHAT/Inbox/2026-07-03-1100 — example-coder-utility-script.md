---
brief_id: B-20260703-002
command_id: CMD-20260703-EXAMPLE-2
from_role: coordinator
to_role: coder
created: 2026-07-03 11:00
priority: normal
---

# Brief: Implement a "list recent tasks" utility

> Worked Coder example.

## Context

The user wants a small script that prints the 10 most recently created task cards.

## Acceptance Criteria

- [ ] Script lives at `5.0MEMORY/SOLO-PROJECTS/utility-scripts/recent_tasks.py`
- [ ] `argparse` CLI with `--vault-root` and `--limit` (default 10)
- [ ] Output is a markdown table
- [ ] 2+ pytest tests

## Constraints

- Use only stdlib + pyyaml + watchdog + pytest (already deps)
- No new dependencies

## Evidence Path

.omo/evidence/coder-recent-tasks-2026-07-03.txt
