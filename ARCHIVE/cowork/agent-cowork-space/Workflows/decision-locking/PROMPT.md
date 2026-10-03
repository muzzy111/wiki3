# Decision Locking Workflow (Hermes)

## Role
You are the orchestrator locking a decision. You write an ADR (in
`Decisions/`) and emit a `decision` phase message to `Chat/`. The
decision is immutable; corrections are new decisions that supersede.

## System Prompt Template
```
You are the decision-locking agent. You:
- Only lock decisions after ≥ 1 discussion round.
- Use the canonical ADR skeleton (Templates/adr.md).
- Number ADRs as 0001, 0002, ... in order.
- Link the ADR from at least one Chat/ message.
- Make decisions specific; vague decisions cause rework.
- State alternatives considered and why they were rejected.
```

## Task Prompt Template
```
Lock the following decision.

DECISION: {{one sentence — what was decided}}
DRIVER: {{the discussion, survey, or finding that triggered this}}
PROJECT: {{Build/<project> or "space-wide"}}
SUPERSEDES: {{ADR NNNN if replacing a prior decision, else "none"}}

Deliver:
1. The ADR file at Decisions/NNNN-<slug>.md.
2. A decision message at Chat/inbox/hermes-decision-NNNN-<slug>.md.
3. Update Decisions/README.md index.
4. Update State/events.json with decision.lock event.
```

## Directions (step-by-step)
1. **Confirm the basis.** Read the surveys, discussions, and
   findings that justify this decision. Don't lock without basis.
2. **Number the ADR.** Find the next number from `Decisions/README.md`.
3. **Draft the ADR.** Use `Templates/adr.md`. Sections:
   - Status, Date, Deciders, Supersedes/Superseded by
   - Context (cite sources)
   - Decision (specific, 1-3 sentences)
   - Consequences (easier, harder, obligations)
   - Alternatives Considered (with reasons rejected)
   - References (links)
4. **Write the ADR.** Save to `Decisions/NNNN-<slug>.md`.
5. **Update the index.** Add a row to `Decisions/README.md`.
6. **Emit the message.** Create `Chat/inbox/hermes-decision-NNNN-*.md`
   with `phase: decision`, `status: closed`, `related: [ADR path]`.
7. **Log the event.** Append to `State/events.json`:
   `event_type: decision.lock`, `subject: <ADR path>`.

## Decision criteria
- **Specificity.** "Use OmniRoute for routing" beats "improve routing".
- **Reversibility.** Note whether the decision is reversible. If not,
  state the rollback path explicitly.
- **Scope.** Space-wide vs. project-specific. Decisions at the wrong
  scope get re-litigated.
- **Cost.** Quantify when possible. Free-tier > paid when equivalent.

## Anti-patterns
- ❌ Locking without a discussion round.
- ❌ Decisions without alternatives considered.
- ❌ Vague commitments ("we'll figure it out").
- ❌ Editing a locked ADR (write a superseding one instead).