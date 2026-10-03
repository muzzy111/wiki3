# ADR 0001 — Template bootstrap

- **Status:** accepted
- **Date:** 2026-06-30
- **Deciders:** Muzzy (hermundo)

## Context

A multi-agent collaboration space is needed that:

1. Lives on disk as folders + markdown + JSON + YAML only.
2. Supports ≥ 4 agents (orchestrator + builders + reviewers + retriever).
3. Is easy to extend with new agents and new workflows.
4. Is decoupled from any specific agent runtime (Hermes, OpenCode,
   Antigravity, NotebookLM, or future).

The existing `OBSIDIAN\cowork\VaultOS-v.02` template demonstrates the
core pattern (per-agent folders, IDENTITY.txt files, `Chat/` bus,
survey → discussion → decision protocol) but is sized for a single
build cycle and not generalized.

## Decision

Adopt VaultOS-v.02's structural patterns and generalize them into
`agent-cowork-space/`:

- Keep the per-agent home folder convention (`agents/<name>/`).
- Keep the `IDENTITY You are <agent>, <role>.txt` entry-point file.
- Generalize the `Chat/` bus with a YAML-frontmatter message protocol
  (`PROTOCOL.md`).
- Add `State/` (JSON) for live state and `Config/` (YAML) for
  configuration, replacing the implicit conventions in VaultOS-v.02.
- Add a workflow library (`Workflows/`) mirroring the `hlp/` patterns.
- Add a session log convention (`Sessions/Day-N-<slug>.md`) modeled on
  VaultOS-v.02's day-journals.
- Add an ADR convention (`Decisions/`) so that protocol changes are
  themselves versioned.

## Consequences

- The space is runtime-agnostic. Any agent that can read/write files
  can participate.
- The space can hold many concurrent projects (`Build/<project>/`).
- The space has a clear upgrade path (`_meta/CHANGELOG.md`,
  `_meta/TEMPLATE_VERSION.yaml`).
- More moving parts than VaultOS-v.02 — the verifier exists to catch
  protocol drift.

## Alternatives considered

- **Status quo (use VaultOS-v.02 as-is).** Rejected: not generalized,
  not durable across many cycles, no JSON state.
- **Git-as-database (everything in a git repo).** Rejected: too much
  noise for a coordination layer; git is fine for individual projects
  under `Build/<project>/`, not the whole space.
- **Notion / Obsidian-only with no JSON.** Rejected: lack of
  machine-readable state makes verifier passes harder.

## References

- `VaultOS-v.02/PROTOCOL.md` (does not exist in source — pattern
  inferred from `IDENTITY` files and `Chat/` folder).
- `VaultOS-v.02/hermes-final-decision.md` (exemplar of the
  decision-record pattern).
- `VaultOS-v.02/AntiGravity Day 1.md` (exemplar of session journal).