---
phase: 1-2
completed: true
status: ok
advisor_status: manual_override
---

# 01 — Discovery Answers & Base Harness

## Summary

Phase 1-2 (Scan + Base Harness) complete for LOOP Vault — LOOP Agent OS.

**Route determined**: Fresh-setup. The `.claude/` directory existed but contained only
`settings.local.json` (421B) with no `settings.json`, `rules/`, `agents/`, or `skills/`.
`CLAUDE.md` was 11 bytes (`@AGENTS.md` only). Treated as effectively a greenfield harness.

**Project archetype**: Agent pipeline (10-agent OS, NATS bus, 5 roles). The vault IS the
agent OS — CLAUDE.md is written as a router pointing to AGENTS.md, SYSTEM/agents.yaml,
and workflow specs. Anti-duplication gate triggered (A6 = Agent pipeline, multi-agent
structure confirmed). No workflow detail in CLAUDE.md body.

**Non-code project**: No source code directories, no package manifests, no language
detected. A6 = Agent pipeline focus (not a code development axis). `code-researcher`
agent installation skipped. Orchestrator routing protocol section omitted from CLAUDE.md.

**Intent Gate baseline**: Installed unconditionally — `intent-gate.md` rule +
`intent-clarifier` skill. Translated to English per task requirement.

**Language note**: All generated files are in English. The intent-gate.md and
intent-clarifier/SKILL.md templates were translated from their Korean source forms per
the explicit task requirement ("All generated files must be written in English").
Template structure and behavior are fully preserved.

---

## Scan Results

```
[Target Project Scan]
Path:                C:\Vaults\wiki3
Key files:           AGENTS.md, CLAUDE.md (11B), README.md, opencode.json,
                     SYSTEM/agents.yaml, SYSTEM/Index.md, MEMORY/Index.md
Language(s):         Markdown (primary), YAML
Framework:           LOOP Agent OS — 10-agent NATS-bus orchestration system
Build tool:          None (vault, not a code project)
Test setup:          None
Git:                 .git present; .gitignore present (54 lines)
Existing harness:    CLAUDE.md (11B, @AGENTS.md only)
                     .claude/settings.local.json (421B, find-allow + MCP config)
                     No .cursor/ directory
Source file count:   0 (non-code vault — code repos live at C:\AI-Workspace\repos)
Max dir depth:       ~4 levels (e.g. SYSTEM/SYSTEM RECORD/2026-10-03 — Vault Rebuild.md)
Env files:           None (.env* gitignored)
CI workflows:        None
docker-compose:      None
Extra package.json:  0
```

### Agent Project Signals (Step 3-A)

All signals present:
- A2 = Agent pipeline (explicit)
- 10 CLI agents in SYSTEM/agents.yaml (hermes, claude, cline, grok, opencode, mavis,
  antigravity, copilot, openwork, ollama)
- NATS bus architecture (nats://localhost:4222)
- WORKSHOP/, MONITOR/, SKILLS/, agents/ directories
- Playbooks/ pattern not used (vault uses SKILLS/ + WORKFLOWS/)

Decision: Fast-Forward (Phase 3-5 integration) path is recommended.

### Frontend Signal Score (Step 3-E)

Score: 0 / 8. No UI framework, no component libraries, no styling tools. No record needed.

### Code Project Classification (Step 3-D)

- No src/, lib/, app/, backend/, frontend/, server/, client/ directories
- No package.json, requirements.txt, Cargo.toml, go.mod, etc.
- Language detection: empty (vault = markdown + yaml)
- A6 does not include code development axes
- Vault explicitly states: code repos are NOT in the vault (AGENTS.md)

Result: **Non-code project**. code-researcher agent: SKIPPED.

---

## Pre-collected Answers

| Item | Answer | Source |
|------|--------|--------|
| Path | `C:\Vaults\wiki3` | AskUserQuestion#1 |
| A1 Name | LOOP Vault — LOOP Agent OS | AskUserQuestion#2 |
| A2 Type | Agent pipeline | AskUserQuestion#1 |
| A3 Solo/Team | Solo | AskUserQuestion#1 |
| A5 Performance | High-performance (Opus) | AskUserQuestion#2 |
| A6 Quality axes | Agent pipeline focus | AskUserQuestion#2 |
| A7 Frequency | High / operational (multiple times daily or team infra) | AskUserQuestion#2 |
| A8 Maturity | Personal tool | AskUserQuestion#3 |
| A9 Complexity | Complex | AskUserQuestion#3 |
| A10 Scope | Full (10+ agents, 3+ reviewers, ~50 files, 60+ min, HITL gates, Session Recovery) | AskUserQuestion#3 |

---

## Context for Next Phase

- **Project type**: Agent pipeline / Agent OS
- **Tech stack**: Markdown vault, YAML configs, NATS bus, 10 CLI agents on diverse models
  (OpenRouter/DeepSeek controller, Opus-class workers, local Ollama fallback)
- **Solo/Team**: Solo (personal tool, no branch protection or team-sharing patterns needed)
- **Agent project**: YES — Fast-Forward (Phase 3-5 integration) path recommended.
  10 agents, NATS-based message routing, 5 role folders. Full scope (A10).
- **Directory structure summary**:
  - SYSTEM/ (rules, registry, goals, templates, lock, record)
  - 1.0COORDINATOR/ 2.0CODER/ 3.0RESEARCHER/ 4.0TOOLS/ 5.0MEMORY/ (role folders)
  - agents/ (per-CLI adapter configs)
  - WORKSHOP/ MONITOR/ (agent lifecycle + status)
  - TASKS/ WORKFLOWS/ CHAT/ CANVAS/ PROJECTS/ (live work)
  - MEMORY/ (shared memory + Karpathy wiki)
  - SKILLS/ (~775 skills, reference only — do not load by default)
  - LIBRARY/ KNOWLEDGE/ (reference material)
  - ARCHIVE/ INBOX/ (history + intake)
  - Source files: 0 code files, ~775 SKILL.md files
  - Max directory depth: ~4 levels
- **Existing harness**: Minimal (.claude/ had only settings.local.json)
  - No env files, no CI workflows, no docker-compose
- **Code project**: NO — vault is documentation + configuration, no source code
- **code-researcher agent**: skipped (non-code project)
- **Frontend preset**: skipped (score 0, no frontend signals)
- **Intent Gate baseline**: INSTALLED
  - `.claude/rules/intent-gate.md` (alwaysApply: true)
  - `.claude/skills/intent-clarifier/SKILL.md` (name: intent-clarifier)
  - CLAUDE.md "Before Starting Any Task" section (references intent-gate.md + intent-clarifier)
- **Agreed Scope**: Full, AI Recommended: Full,
  Justification: Opus tier + Agent pipeline + High-operational + Complex tasks → full
  oversight and recovery patterns warranted; A8=Personal tool keeps reviewer count lean
  but does not reduce pipeline review gates (A7=high-operational)
- **User-Declared Structure**: 10-agent OS, 5 roles, NATS bus orchestration, BYOK overrides,
  central SQLite DB (MEMORY/vault.db), Karpathy wiki memory system

---

## Files Generated

| File | Description |
|------|-------------|
| `C:\Vaults\wiki3\CLAUDE.md` | Updated — router format with "Before Starting Any Task" section, workflow matrix, @AGENTS.md import. 57 lines. |
| `C:\Vaults\wiki3\.claude\settings.json` | Created — basic git allow list + 4 deny entries |
| `C:\Vaults\wiki3\.claude\rules\intent-gate.md` | Created — alwaysApply intent gate rule (translated to English from template) |
| `C:\Vaults\wiki3\.claude\rules\question-discipline.md` | Created — AskUserQuestion orchestrator-only protocol for multi-agent vault |
| `C:\Vaults\wiki3\.claude\rules\meta-leakage-guard.md` | Created — prevents harness metadata from leaking into vault agent files |
| `C:\Vaults\wiki3\.claude\skills\intent-clarifier\SKILL.md` | Created — decision-branch clarification skill (translated to English from template) |
| `C:\Vaults\wiki3\CLAUDE.local.md` | Created — personal overrides stub (git-ignored) |
| `C:\Vaults\wiki3\.gitignore` | Updated — added `CLAUDE.local.md` entry |

---

## Escalations

[NOTE] Agent project detected — Fast-Forward (Phase 3-5 integration) path recommended.
10 CLI agents confirmed in SYSTEM/agents.yaml. A2=Agent pipeline, A10=Full scope.

[NOTE] Non-code project — code-researcher agent installation skipped. Vault explicitly
states code repos are at C:\AI-Workspace\repos, not in the vault. Orchestrator routing
protocol section omitted from CLAUDE.md per non-code classification.

[NOTE] Intent Gate baseline installed — intent-gate.md (alwaysApply rule) + intent-clarifier
skill + CLAUDE.md "Before Starting Any Task" section. Translated to English from Korean
source templates per task requirement. Template behavior and structure fully preserved.

[ASK] Q5: Core development principles for vault work. Example options: documentation-first,
intent-confirmation-first, agent-isolation (strict role boundaries), minimal-state-in-main-session.
What principles should be elevated to always-apply rules?

[ASK] Q6: Commit message conventions. Detected: .gitignore suggests regular git use.
Options: (a) Conventional Commits (feat/fix/chore), (b) free-form English, (c) include
agent name in commit scope (e.g. `chore(vault): ...`). Any Korean commits OK?

[ASK] Q7: Additional Claude auto-allowed commands beyond the git set already in settings.json.
Candidates from vault structure: `loopd reload`, `nats` CLI commands, `sqlite3` for vault.db,
`ollama run`, `python -m ...` for scripts/. Which should be auto-allowed vs. prompt-each-time?

[ASK] Q8: Additional forbidden commands beyond the default deny list. Any vault-specific
operations that should never run without explicit approval (e.g. deleting SYSTEM/ files,
pushing to a remote, modifying agents.yaml directly)?

[ASK] Q9: Special requirements. Known signals: Windows 11, NATS server dependency,
SQLite vault.db, MCP open-knowledge server already in settings.local.json. Any encoding
preferences, BYOK overrides, or domain-specific skills to install from LIBRARY/?

[ASK] Q10: 'Ask-first when uncertain' directive in CLAUDE.md (recommended: Yes). A version
is already embedded via the "Before Starting Any Task" section and question-discipline rule.
Should an additional "Collaboration Protocol" line be added reminding agents to ask before
assuming? (It is already in CLAUDE.md — confirm to keep or remove.)

---

## Next Steps

Phase 3-4: workflow + pipeline design (harness-architect:phase-design)

Given A10=Full and A2=Agent pipeline, the recommended path is **Fast-Forward
(Phase 3-5 integration)** — workflow steps and agent pipeline designed in one pass.

Key inputs for Phase 3-4:
- 10 agents, 5 roles, NATS bus routing
- Agreed Scope: Full (HITL gates, Session Recovery, ~50 files)
- A7=High-operational, A8=Personal tool → lean reviewers, strong HITL gates
- Non-code project → no code-quality workflows, pipeline-focused workflows only
- Stale documents need reconciliation as a workflow step
- Escalation items Q5–Q10 above should be resolved before Phase 3-4 proceeds
