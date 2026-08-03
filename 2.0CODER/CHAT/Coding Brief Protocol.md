---
title: "Coding Brief Protocol"
role: "coder"
status: active
---

# Coding Brief Protocol

> How the Coder role accepts briefs and writes completions.

## Acceptance

A brief arrives at `2.0CODER/CHAT/Inbox/<YYYY-MM-DD-HHMM> — <slug>.md`. The Coder:

1. Reads the brief.
2. Confirms the acceptance criteria are testable.
3. Reads related skills (`2.0CODER/SKILLS/*.md`) the brief references.
4. Confirms scope.

If the brief is unclear, the Coder writes back with `[CLARIFICATION]` and the spec at fault.

## Acceptance

The Coder ships:

- Code changes in the appropriate folder (default: `2.0CODER/SOLO-PROJECTS/<project>/` or root for vault-wide scripts).
- Tests; runs them; captures pytest output.
- A completion note at `2.0CODER/CHAT/Outbox/<...>.md` with all acceptance criteria checked.

## Failure

If a criterion cannot be met, the Coder writes a partial completion with `status: partial` and explains in `## Caveats` why.

## Related

- `1.0COORDINATOR/CHAT/Inter-Agent Protocol.md` — message-edge contract
- `2.0CODER/RULES/Coding Standards.md` — code style
