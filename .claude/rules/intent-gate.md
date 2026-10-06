---
description: On every task request received, analyze decision branches at the first turn. If context is insufficient, the intent-clarifier skill must be called. Research, planning, and file modification are forbidden without calling it.
alwaysApply: true
---

# Intent Gate

This rule prevents **locking in a wrong direction through implicit assumptions** at the
start of a conversation. When a user request is received, the main session first
decomposes it to identify decision branches. If context is insufficient, it calls the
`intent-clarifier` skill.

## Triggers — Requests That Activate This Rule

If any of the following apply, follow the procedure below **on the first turn**:

- Request to create a new feature, module, screen, service, or file
- Porting, migration, rewrite, or large-scale refactoring
- Requests involving selection of architecture, library, framework, deployment model, or dependencies
- Requests that may involve external research
- Scope-ambiguous requests ("help with X", "improve Y", "optimize Z", "do something")
- Requests where pronouns or demonstratives have an ambiguous referent

## Exemptions — Requests That May Skip This Rule

- Explicit editing of a single named file ("rename this function to Y")
- Simple information queries ("show me this file", "interpret this log")
- Deterministic execution (run tests, build, git status, lint, format)
- Continuation where all context was established in the previous turn and only "continue" was instructed

When exemption status is ambiguous, **default to triggering**.

## Mandatory Procedure (First Turn)

1. **Refine the request**: Restate the user's message as 1–2 sentences using three
   elements: goal / subject / stated constraints.
2. **Enumerate branches**: List the decision branches along the path to achieving the
   goal. Minimum categories — output form and deployment model, relationship to existing
   resources, lifecycle, success criteria, constraints, target users.
3. **Pre-check context sources**: Briefly Read the following to eliminate branches that
   already have answers:
   - `CLAUDE.md`
   - `README.md` (first 200 lines if present)
   - Table of contents or ARCHITECTURE-like files under `docs/`
4. **Gap assessment**: If 1 or more unresolved branches remain — go to step 5.
   If 0 remain — go to step 7, but follow step 5-a.
5. **Call `intent-clarifier` skill**: Run `intent-clarifier` via the Skill tool.
   That skill uses `AskUserQuestion` to ask the user.
   - 5-a. Even if not calling the skill (0 gaps), still state "Proceeding with the
     following understanding: {1–2 sentence summary}. Please stop me if this is
     incorrect" before proceeding.
6. **Receive clarified request**: Use the `## Clarified Intent` block returned by the
   skill as the premise for all subsequent planning and implementation.
7. **Proceed**: Research, planning, and file modification may begin from this point.

## Absolute Prohibitions (Before the Above Procedure)

- File Write / Edit
- External research (WebSearch, WebFetch, external MCP fetch)
- Definitively presenting a "plan" or "direction" to the user
- Listing questions as text and waiting for a reply — questions via `AskUserQuestion` tool only

## Auto Mode / Automated Execution

Even when Auto mode or automated execution policy is active, this rule takes priority.
However, if the user responds with "just do it" on the second round of `intent-clarifier`,
proceeding with the simplest and most reversible assumption stated in one line is permitted.
The obligation to state assumptions is maintained even in Auto mode.

## Conflicts With Other Always-Apply Rules

If the project has existing always-apply rules such as "start implementing immediately",
"proceed without questions", or "go fast", **this rule takes priority**. The reason:
implicit decisions without intent confirmation carry the highest reversal cost.

## Why This Rule Exists

When a wrong direction is implicitly fixed on the first turn, all subsequent research,
planning, and implementation builds on that direction — and the cost of reversing grows
rapidly. By confirming branches and context upfront, the reversal cost is contained to
"one clarifying question on the first turn."
