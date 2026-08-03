---
title: "Coder Memory"
role: "coder"
status: active
---

# Coder Memory

## Long-term Memory

- The loop-chat-system project at `2.0CODER/SOLO-PROJECTS/loop-chat-system/` uses Pydantic, watchdog, and pytest.
- All Python code must run on Python 3.10+; we test on 3.11 and 3.14.
- The daemon's CLI surface (`python -m hermes_bus.daemon --vault <path> --once`) is contractual; do not break it without a major version bump.

## Recent Context

- 2026-07-03: 5-role migration underway; hermes_bus daemon refactor coming in Wave 3 (T16-T22). Will move from hard-coded agent names to `SYSTEM/agents.yaml`-based registry.

## Outstanding Questions

- Should we add a conftest.py for shared fixtures to consolidate the 6 currently-duplicated helper functions?

## How to Update

- Append to "Recent Context" for each session.
