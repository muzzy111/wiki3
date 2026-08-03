---
title: "Refactor hermes_bus.router to remove hard-coded agent names"
type: task-card
status: done
owner: coder
example: true
created: 2026-07-01
completed: 2026-07-03
priority: normal
---

# EXAMPLE-001 (closed)

> Worked example of a Coder task card. Shows the lifecycle end-to-end.

## Source

> User said: "Refactor hermes_bus.router to use the Registry instead of hard-coded agent names."

## Goal

Bring router.py under the role-keyed registry. No literal `Hermes`, `Mavis`, `OpenCode`, or `AGY` strings in the dispatch logic.

## Acceptance Criteria

- [ ] `router.route()` returns a `RouteDecision` with a `role` field (key from VALID_ROLES).
- [ ] Legacy agent names raise `ValueError("legacy agent name")` in the router (not silently mapped).
- [ ] All prior router tests pass.
- [ ] 2+ new tests cover role-keyed dispatch.

## Plan

- [x] Add `VALID_ROLES` to `hermes_bus.router`.
- [x] Replace `agent` field on `RouteDecision` with `role`.
- [x] Add the legacy-name rejection block.
- [x] Update `tests/test_router.py` fixtures.
- [x] Run pytest.

## Deliverables

- `src/hermes_bus/router.py` (updated)
- `tests/test_router.py` (updated)

## Review

- Memory Curator verdict: **approved with one nit** — the rejection message could be more specific about which legacy name was rejected.

## Resolution

- status: done (closed 2026-07-01)
- Commits: `refactor(hermes_bus): router uses registry and role keys`


## Source

> User-channel command (placeholder).
> command_id: CMD-EXAMPLE-001
