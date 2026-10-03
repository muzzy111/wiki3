# Changelog — agent-cowork-space template

All notable changes to this template are documented here. The format is
based on [Keep a Changelog](https://keepachangelog.com/), and the template
adheres to [Semantic Versioning](https://semver.org/).

## [Unreleased]

## [1.0.0] — 2026-06-30

### Added
- Initial release.
- Per-agent homes: Hermes (orchestrator), OpenCode (builder),
  Antigravity (strategist/reviewer), NotebookLM (knowledge retrieval).
- Shared spaces: `Chat/`, `Build/`, `Source/`, `Library/`, `Workflows/`,
  `Sessions/`, `Decisions/`, `Retrospectives/`, `Inbox/`, `Outbox/`,
  `Archive/`, `State/`, `Config/`, `Templates/`, `_meta/`.
- YAML-driven `Config/registry.yaml`, `Config/roster.yaml`,
  `Config/protocol-version.yaml`, per-agent `<agent>.yaml`.
- JSON state files: `State/active-jobs.json`, `State/open-jobs.json`,
  `State/locks.json`, `State/verifier-reports/`.
- Identity-file convention (TXT) at each agent home, modeled on
  VaultOS-v.02's `IDENTITY You are <agent>, <role>.txt`.
- Cross-agent message protocol (`PROTOCOL.md`) with YAML frontmatter.
- Document templates in `Templates/`.
- Workflow library (`Workflows/`) mirrored from `hlp/` patterns.
- Session log convention (`Sessions/Day-N-<slug>.md`).
- ADR (Architecture Decision Record) convention in `Decisions/`.
- Retrospective convention in `Retrospectives/`.
- Verifier hook: orchestrator periodically validates `Chat/` state.

### Inspired by
- `OBSIDIAN\cowork\VaultOS-v.02` — the original template this expands.
  Per-agent folders, shared `Chat/`, IDENTITY.txt files, phase-based
  survey → discussion → decision → build protocol.