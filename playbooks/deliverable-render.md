---
name: deliverable-render
owning_agent: opencode, openwork
allowed_dirs:
  - TASKS/
---

# Deliverable Render

## Goal

Format and render the final user-facing output from a completed task pipeline into `TASKS/{task-id}/06-deliverable.md` — clear, structured, and ready for user delivery.

## Shared Ownership

This playbook is shared between **opencode** (secondary owner — leads when the deliverable is code, tool output, or structured export) and **openwork** (primary owner — leads when the deliverable is a document, narrative, or research summary). Both agents load this same file. The content-redteam reviews all deliverables before user delivery.

## Focus

- **Source fidelity**: the deliverable is derived from the approved step artifacts (`04-execution/_merged.md`, `05-review.md`, `MEMORY/Karpathy/wiki/` updates). Never add new claims not in the source artifacts.
- **User-facing clarity**: the deliverable is read by the user, not agents. Write at user-appropriate clarity. Avoid internal agent jargon.
- **Format selection**: choose the format (markdown document, structured list, code block, table) that best serves the user's stated output type from `01-intake.md`.
- **Completeness check**: the deliverable must answer the user's original normalized goal from `01-intake.md`.

## Workflow

1. **Load sources** — read:
   - `TASKS/{task-id}/01-intake.md` for the original goal and output type.
   - `TASKS/{task-id}/04-execution/_merged.md` for the execution results.
   - `TASKS/{task-id}/05-review.md` for the approved state.
   - Any Karpathy wiki pages written during this task.

2. **Verify approval** — confirm `05-review.md` contains `APPROVE`. Do not render if status is BLOCK.

3. **Select format** — based on `01-intake.md` output type:
   - `code`: wrap primary outputs in code blocks with language specifier.
   - `doc`: narrative prose with headings.
   - `memory-update`: summary of what changed in MEMORY/, with links.
   - `config`: structured YAML/JSON/TOML blocks.
   - `mixed`: combine formats as needed.

4. **Draft deliverable** — write `TASKS/{task-id}/06-deliverable.md`. Structure:
   - Summary (1–3 sentences answering the original goal).
   - Main content (format as selected).
   - What changed (files created/modified/deleted).
   - Next steps for the user (if applicable).

5. **Self-check against intake goal** — re-read `01-intake.md` normalized goal. Does the deliverable directly answer it? If not, revise.

6. **Write reply** — update `TASKS/{task-id}/04-execution/{agent}.md` (opencode or openwork as appropriate).

7. **Publish NATS reply** — signal `reply.{agent}` to hermes.

## Output Contract

`TASKS/{task-id}/06-deliverable.md`:

```markdown
---
task_id: {task-id}
grade: {S|M|L}
output_type: {code|doc|memory-update|config|mixed}
rendered_by: {opencode|openwork}
---

# {Task Title}

## Summary
{1–3 sentences directly answering the original goal}

## {Main Content Section}
{format-appropriate content}

## Changes Made
| File | Operation |
|---|---|
| {path} | created|modified|deleted |

## Next Steps
{user-facing next steps or "none"}
```

## Guardrails

- Never add new factual claims not present in the source artifacts.
- Never render a deliverable without an approved `05-review.md`.
- Do not use agent-internal jargon in user-facing sections.
- The "Summary" section must directly address the user's normalized goal from intake. If it does not, the content-redteam will BLOCK.
- Do not combine multiple unrelated task outputs in one deliverable.

## Question Ownership

This playbook runs in the opencode or openwork worker (subagent). AskUserQuestion is forbidden. All escalations go in the respective execution reply file.
