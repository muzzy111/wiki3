---
aliases: []
tags:
  - agent
  - verifies
  - matrix
  - room
---

# Vault OS v.02 — Full Session Record

The complete raw record of the Vault OS v.02 multi-agent build session (Survey → Decision → Build of Project 1: vault-core, 2026-06-29) lives in two locations:

1. **`C:\Users\Admin\OBSIDIAN\cowork\VaultOS-v.02\`** — verbatim session transcripts with tool calls, model thoughts, [[[[prompts]]]], and outputs from each agent.
2. **`C:\Users\Admin\OBSIDIAN\cowork\VaultOS-v.02\Build\vault-core\`** — the actual built artifacts ([[OmniRoute]] deploy, headroom proxy, vault_llm.py bridge, modified [[AgentLoop]] DecisionEngine, docker-compose + CLI wrappers). Moved from `C:\Users\Admin\Documents\GitHub\Build\vault-core\` at session close.

3. **`C:\Users\Admin\OBSIDIAN\cowork\VaultOS-v.02\Chat\`** — the coordination channel (tickets, completions, acceptances, checkpoints, build-complete). Moved from `C:\Users\Admin\Documents\GitHub\Chat\` at session close.

Plus the **derived wiki notes** in this folder (multi-agent pattern, headroom gotcha, etc.) and the **journal** in `RAW\`.

## What's in `cowork\VaultOS-v.02\`

The folder contains the raw input/output of every agent session, in three groups:

### Survey / Decision / Discussion phase (Day 1)

| File | Agent | Content |
|------|-------|---------|
| `Hermes Day 1.md` | Hermes | Full session transcript: terminal commands, file reads, todo plans, internal thinking, write_file actions for `hermes-survey.md` and `hermes-discussion-1.md` |
| `Opencode Day 1.md` | OpenCode | Full session transcript: terminal output, file reads (manifest, identity files), write of `opencode-survey.md` and `opencode-discussion-1.md` |
| `AntiGravity Day 1.md` | Antigravity | AGY CLI session: Gemini 3.1 Pro reading the survey prompt and survey files, producing `antigravity-survey.md` and `antigravity-discussion-1.md` |

### Build phase

| File | Agent | Content |
|------|-------|---------|
| `Hermes build.md` | Hermes | Full session transcript: poll loops, ticket issuance, revisions, OpenCode CLI fallback invocations (`opencode run --model big-pickle`), acceptance records, checkpoint writes, [[integration]] pass |
| `Opencode Build.md` | OpenCode | Full session transcript: terminal polls of `Chat/`, file reads of tickets and Source/, Docker compose builds, file writes to `Build/vault-core/` |

### Shared channel artifacts (the canonical outputs)

These are the files that survive the sessions and constitute the actual deliverables:

| File | Phase | Purpose |
|------|-------|---------|
| `repo-manifest.csv` / `repo-manifest.md` | Pre-survey | Full file tree of the surveyed repo |
| `opencode-survey.md` | Survey | OpenCode's 22-project tiered survey |
| `antigravity-survey.md` | Survey | Antigravity's pattern-based analysis |
| `hermes-survey.md` | Survey | Hermes's survey with two corrections to other [[agents]] |
| `opencode-discussion-1.md` | Discussion | OpenCode's top-3 projects + build plan synthesis |
| `antigravity-discussion-1.md` | Discussion | Antigravity's wild cards ([[LLM_MapReduce]], ECC) + dark horse ([[agentfs]]) |
| `hermes-discussion-1.md` | Discussion | Hermes's synthesis + per-agent follow-up questions |
| `hermes-final-decision.md` | Decision | The 3-project selection + build plans |

## What's in `Build\vault-core\`

The actual built project, 5 tasks + [[integration]] guide:

```
Build\vault-core\
├── README.md                              # Top-level integration guide
├── 01-omniroute-deploy\                   # Task 001: OmniRoute on :20128
├── 02-headroom-proxy\                     # Task 002: headroom on :8787
├── 03-bridge\                             # Task 003: vault_llm.py (87 lines)
├── 04-loop-integration\                   # Task 004: modified DecisionEngine + verify_loop
└── 05-cli\                                # Task 005: docker-compose + bash + PowerShell wrappers
```

Plus in `Chat\`:

| File | Purpose |
|------|---------|
| `Chat\build-tasklist.md` | The 5-task decomposition |
| `Chat\ticket-NNN-opencode.md` and revisions | The ticket lifecycle |
| `Chat\ticket-NNN-complete.md` | Completion reports (where OpenCode put them) |
| `Chat\hermes-acceptance-NNN.md` | Hermes's acceptance records |
| `Chat\checkpoint-1-antigravity.md` and `checkpoint-1-response.md` | Checkpoint 1 (Antigravity's session timed out, Hermes proxied) |
| `Chat\build-complete.md` | Final close — files delivered, limitations, next steps |

## Why two locations?

`cowork\VaultOS-v.02\` is the **immutable raw record** — every keystroke, every model thought, every tool call. It's a faithful log of what actually happened, including dead ends, revisions, and protocol deviations. Future [[agents]] can replay sessions to understand *why* decisions were made, not just *what* was decided.

`Build\vault-core\` is the **actionable artifact** — what to actually run. Anyone who wants to use vault-core reads `Build\vault-core\[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[README]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]].md` and follows the [[quickstart]].

`Chat\` is the **coordination channel** — the artifacts each agent wrote during the session. Some are pure coordination (tickets, acceptances), some are derived outputs (decision, completion reports).

`RAW\` and `WIKI\` in this Karpathy folder are the **distilled knowledge** — the journal is the curated timeline; the wiki notes are the atomic patterns extracted from the session.

## How to navigate

- **Want to replay the session?** Open `cowork\VaultOS-v.02\Hermes build.md` (or any of the 5 transcripts). They're timestamped chat logs with all tool calls visible.
- **Want to use the build?** Open `Build\vault-core\[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[README]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]].md` for the [[quickstart]], then drill into each task's folder.
- **Want to understand the architecture?** Read the [[Vault OS Core Loop Architecture]] wiki note, then trace through `hermes-final-decision.md` for the rationale.
- **Want to learn the patterns?** Read the [[Multi-Agent Orchestrator Identity File Pattern]] note — it links to all the others.

## Honest caveats

This session was messy. Documented in `build-complete.md`:
- Antigravity's session timed out twice on Checkpoint 1; Hermes proxied the [[review]].
- OpenCode's primary session went idle mid-way; Hermes dispatched via CLI directly.
- OpenCode built Tasks 003-005 without explicit Hermes tickets (scope creep, but artifacts match plan).
- User paused Docker compose-up operations after Task 001 verify, blocking end-to-end runtime verification.
- headroom compression is in passthrough mode (Rust toolchain missing on host).

The transcripts show all of this honestly. Don't read them and assume the orchestration was clean — it wasn't. Read them as an honest record of what actually happened.

## Related

- [[Multi-Agent Orchestrator Identity File Pattern]]
- [[Vault OS Core Loop Architecture]]
- [[Headroom Proxy Upstream Configuration]]
- [[Agent Delegation Fallback When Primary Session Goes Idle]]
- [[CRLF Windows Shebang Bug in OmniRoute Shell Scripts]]
- [[RAW/2026-06-29 vault-os-build session]]