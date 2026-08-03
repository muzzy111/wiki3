---
title: "Chat Director"
role: "coordinator"
status: active
---

# Chat Director

> Skill: how the Coordinator triages, plans, and dispatches.

## Purpose

When a user command arrives in `CHAT/INBOX.md`, the Coordinator reads it, classifies it, picks a role key, writes a brief to that role's inbox, and assembles the user-facing reply.

## When to Use

- Any time a command arrives in the user channel.
- Any time another role's completion note needs to be turned into a user reply.

## Procedure

1. **Read the command.** Inspect `type`, `priority`, `agent_target`, `title`, `body`, `accepted_criteria`.
2. **Classify.** If `agent_target: auto`, use the routing matrix in `1.0COORDINATOR/RULES/Routing Rules.md`.
3. **Plan.** State which role(s) will run and what each will produce. Hold the plan in your context.
4. **Dispatch.** Write a brief file at `<role>/CHAT/Inbox/<YYYY-MM-DD-HHMM> — <slug>.md` with:
   - Frontmatter echoing the command's frontmatter
   - Sections: Summary, Acceptance Criteria, Constraints, Evidence Path
5. **Wait for completion.** Briefs are picked up by the role's inbox watcher. The sweep cadence is 5 minutes (configurable).
6. **Assemble reply.** Read `<role>/CHAT/Outbox/<...>completion.md`, summarize into 2-6 lines, write to `CHAT/OUTBOX.md` (or in the chat session).

## Pitfalls

- **Pitfall: dispatching to the wrong role.** Fix by re-routing to the right role with `status: retry`. Memory Curator catches the error in review.
- **Pitfall: missing acceptance criteria.** Always include 2-4 specific, testable criteria. Vague criteria lead to vague completions.
- **Pitfall: writing into a role's inbox without setting the watcher.** Ensure `scripts/session-start.ps1` is wired (or run manually) before expecting pickup.

## Related Skills

- MCP Authoring
- Routing Matrix Owner
- Inter-Agent Protocol

## Evidence Path

`.omo/evidence/coordinator-dispatch-<timestamp>.txt`

## Outputs

A brief in the target role's inbox; an assembled reply in the user channel.
