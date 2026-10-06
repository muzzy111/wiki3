---
name: intent-clarifier
description: Identifies decision branches in a user task request, finds context gaps, and asks the user using AskUserQuestion. Called on the first turn of create, port, migrate, design, or scope-ambiguous requests. Triggered by the intent-gate rule; proceeding to research, planning, or file modification without this skill is forbidden.
---

# Intent Clarifier

Decomposes a user request on the first turn, identifies decision branches and context
gaps, and asks the user directly using `AskUserQuestion`. Iterates through a question
loop until sufficient context is gathered, then passes control back to the caller.

## Request Types That Require This Skill

- Creating a new feature, module, screen, service, or file
- Porting, migration, rewrite, or large-scale refactoring
- Requests that require selecting architecture, library, framework, deployment model,
  or dependencies
- Requests that may involve external research (web/context search, documentation review)
- Scope-ambiguous requests: "help with X", "improve Y", "optimize Z", "do something"
- Requests where pronouns (this/it/that) have an ambiguous referent

## Requests That Do Not Require This Skill

- Explicit editing of a single named file: "rename this function to Y"
- Simple information queries: "show me this file", "interpret this log"
- Deterministic execution: run tests, build, git status, lint, format
- Continuation where all context was established in the previous turn

When exemption status is ambiguous, **default to calling this skill**.

## Procedure

### Step 1 — Refine the Request (internalize as 1–2 sentences)

Reconstruct the user's message using three elements:

- **Goal**: The outcome the user ultimately wants, in one sentence
- **Subject**: The target to which the goal applies (file/module/service/project)
- **Constraint hints (if any)**: Constraints or preferences already in the message

If reconstruction is impossible, do not skip to Step 2 — add **re-confirmation of the
request itself** as the first question in Step 3.

### Step 2 — Enumerate Decision Branches

List all the forks in the path to achieving the goal. For each branch, do not assume
the user implicitly chose A/B/C — list the options explicitly. Check at minimum:

1. **Output form and deployment model** — standalone / monorepo integration / merge into
   existing file / public-facing
2. **Relationship to existing resources** — import / copy / reference / replace /
   deprecate / maintain in parallel
3. **Lifecycle and ownership** — long-term maintained / experimental / scheduled for
   deprecation / self / team
4. **Success criteria** — definition of "done", required acceptance conditions,
   exclusion conditions
5. **Constraints** — tech stack, language, framework, library, performance, security,
   compatibility, schedule
6. **Target users and scenarios** — internal tool / teammates / external developers /
   end users
7. **If external research is involved** — which sources to treat as authoritative;
   at what confidence level to finalize results

### Step 3 — Identify Context Gaps

Remove branches that **already have explicit answers** in:

- The user's current message
- Agreed decisions from the immediately preceding turn
- The project's `CLAUDE.md`, `README.md`, or relevant files under `docs/`

Remaining unresolved branches = questions to ask. Compress to a maximum of 4 (by
priority). If more than 4, prioritize the most upstream or dependency-heavy branches.

### Step 4 — Execute Questions

**Use the `AskUserQuestion` tool.** Do not list questions as text and wait for a reply.

- Maximum 4 questions per call
- Each question: `question` (body), `header` (≤12 chars), `options` (2–4 with labels
  and descriptions), `multiSelect` (if applicable)
- If a recommended option exists, mark it "(recommended)"
- Explain trade-offs in 1 line in the description

Do not proceed until the user's actual response is received.

### Step 5 — Sufficiency Check (Loop)

After receiving responses:

- Did new information clarify additional branches? → If so, repeat Steps 2–4.
  **Maximum 3 rounds** (initial 1 + up to 2 more).
- Are all branches resolved? → Return a **clarified request summary** to the caller
  and exit:

```
## Clarified Intent
- Goal: {reconstructed}
- Subject: {reconstructed}
- Decided branches:
  - {branch 1}: {selected value} (basis: {user answer summary})
  - {branch 2}: {selected value} (basis: ...)
- Branches left open (re-confirm if needed during work):
  - {list if any, otherwise "none"}
- Assumptions (proceeding without user response):
  - {list each on one line if any; mark each "please correct if wrong"}
```

- If still unresolved after round 3: present "It seems the requirements need more time
  to clarify. Should I pause?" via `AskUserQuestion`, then pause.

## Prohibitions

- Listing questions as text then awaiting response (must use `AskUserQuestion`)
- Write/Edit/WebSearch/WebFetch before receiving answers
- Making implicit decisions based on "reasonable defaults"
- Including unconfirmed items as "decided" in a higher-level plan
- Bundling multiple decisions into one question

## Exception: Proceeding With Assumptions

If the user responds with "I don't know" or "just do it" on the second round:

1. Select the single simplest and most reversible assumption
2. State in one line: "Proceeding with the following assumption: {X}. Please correct
   me immediately if this is wrong"
3. Record the assumption in the work record
4. This one-line statement obligation is maintained even in Auto mode

## Return Format to Caller

The return is the `## Clarified Intent` block from Step 5. The main session uses this
as the premise for all subsequent research, planning, and implementation decisions.
