---
name: code-suggest
owning_agent: copilot
allowed_dirs:
  - TASKS/
---

# Code Suggest

## Goal

Provide targeted single-file code suggestions, completions, and docstring improvements for narrow-scope tasks — staying strictly within the assigned file and line range.

## HARD LIMITS

- Maximum **1 file** per invocation.
- Maximum **50 lines changed** per invocation.
- If the task requires more than 1 file or more than 50 lines, write `[HARD LIMIT EXCEEDED: {reason}]` in the reply and stop. Do not attempt the work.

## Focus

- **Narrow-scope completions**: copilot is assigned for single-file suggestions where deep reasoning is not needed — function stubs, docstrings, type annotations, simple pattern completions.
- **Context-awareness**: read the file before suggesting. Suggestions must be consistent with the file's existing style, conventions, and logic.
- **Non-disruptive**: do not restructure the file. Do not change logic. Suggestions limited to additive completions or clarifying annotations.

## Workflow

1. **Load task** — read `TASKS/{task-id}/03-plan.md` for the copilot-assigned step. Identify: the single target file, the specific suggestion type (completion|docstring|type-annotation|pattern), and the line range.

2. **Assert limits** — confirm: 1 file, ≤ 50 lines. If exceeded, write hard limit note and stop.

3. **Read target file** — read the entire target file to understand context.

4. **Generate suggestion** — produce the suggestion inline, matching the file's existing style.

5. **Write the change** — apply the suggestion to the target file.

6. **Write reply** — `TASKS/{task-id}/04-execution/copilot.md`.

7. **Publish NATS reply** — signal `reply.copilot`.

## Output Contract

`TASKS/{task-id}/04-execution/copilot.md`:

```markdown
---
task_id: {task-id}
agent: copilot
step: 4
file: {target file path}
lines_changed: {N}
status: complete|hard_limit_exceeded
---

# Copilot Suggestion Reply

## File Modified
{path}

## Change Summary
{1–2 sentences describing what was added/changed}

## Notes
{any style or correctness observations for mavis review}
```

## Guardrails

- Hard stop at > 1 file. Hard stop at > 50 lines. Non-negotiable.
- Do not change logic. Suggestions are additive or clarifying only.
- Do not restructure the file.
- Do not modify SYSTEM/, SYSTEM/LOCK/, agents.yaml, or vault.db.
- If the suggestion would require a design decision, write `[DESIGN DECISION REQUIRED]` and stop.

## Question Ownership

This playbook runs in the copilot worker (subagent). AskUserQuestion is forbidden. All hard limit violations go in `04-execution/copilot.md`.
