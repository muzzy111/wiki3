---
aliases: []
tags:
  - agent
  - verifies
  - matrix
  - room
---

# ADR 0001 — K&R Lanes Pivot + Plan [[Review]] Process

A process-level ADR that captures the meta-decision baked into how
ADR 0001 was made: **all v0.1+ implementation plans at [[Mad River AI]]
must pass through a two-pass [[review]] (self + different model) before
execution.** This ADR is the *process*; [[../Mad River AI/03-decisions/0001-pivot-to-knowledge-and-research-lanes|the original ADR 0001]]
is the *scope pivot*.

## [[Status]]

**Accepted** — 2026-06-21 (retroactive, on the same day as the original
ADR 0001). First applied to: `osint-framework v0.1` build session.

## Context

The original v0.1 implementation plan
(`.hermes/plans/2026-06-21_0111-[[osint-framework-v0.1]]-knowledge-research.md`,
~60KB / 14 tasks) was reviewed by two passes before any code was
written:

1. **Self-[[review]] by the same agent that wrote the plan** (hermes).
   Used the `requesting-code-[[review]]` [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[skill]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] checklist (security,
   logic errors, design constraints from the v0.1 doc). Found 5 issues.
2. **Second-pass [[review]] by a different model**: OpenCode running
   `nemotron-3-ultra-free` (Sisyphus persona) via
   `opencode run --model opencode/nemotron-3-ultra-free`. Read the
   plan selectively (6 tool calls, ~3 min wall time) and returned a
   fail-closed JSON verdict. Found 10 additional issues.

**The second pass caught issues the self-[[review]] missed.** Two were
critical test-fixture bugs that would have failed the very first
`pytest` run (N1: pipeline test expected `42` but fixture returned
`1`; N2: `web_fetch._extract` test would have failed because
`soup.body` always exists in valid HTML). One was a design-level
misclassification (N3: SSRF/host allowlist — the self-[[review]] had
deferred it to v0.2, but the v0.1 prose made it a v0.1 requirement).

**Self-[[review]] bias is real.** The same agent that writes a plan
cannot reliably catch its own test-fixture mistakes. A different
model reviewing the plan catches bugs the self-reviewer is blind to.

## Decision

For all [[Mad River AI]] v0.1+ implementation plans of >500 LOC or >5
tasks, the plan must pass through:

1. **Pass 1: Self-[[review]]** by the writing agent, using the
   `requesting-code-[[review]]` [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[skill]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] checklist. Output: a `## [[Review]] Notes`
   section in the plan file enumerating findings + their severity.
2. **Pass 2: Different-model [[review]]** by a second model with no shared
   context. Output: a fail-closed JSON verdict
   (`{"passed": bool, "security_concerns": [], "logic_errors": [], "suggestions": []}`).
3. **Patches** — all findings from both passes are folded into the
   plan as a `## Plan Patches` section with concrete code deltas keyed
   to each task. The patches are not just notes; they're copy-pasteable
   code the executor applies inline.
4. **No execution** until the patches are in the plan.

The different-model reviewer must be:

- A different model family from the writer (nemotron-3-ultra-free
  is fine for a small/open-weights reviewer; Claude or GPT-4 is fine
  when [[credits]] allow).
- Free or low-cost. The reviewer role is high-leverage, low-stakes
  per call; budget accordingly. (Cost of one OpenCode nemotron-3 call:
  ~3 min wall time, $0.)
- Invoked via a structured prompt that explicitly names the
  fail-closed contract and the file to read.

## Consequences

**Positive:**

- Catches the kinds of issues (test-fixture mismatches, design-vs-code
  drift, edge cases the writer is blind to) before any code is written.
- Audit trail in the plan file. Future-me can see why each patch
  was added.
- The patches-as-code pattern means the executor doesn't have to
  interpret "consider" or "should" — they apply a concrete diff.
- The process is repeatable; every v0.1+ plan follows the same shape.

**Negative:**

- Adds 5-10 minutes to the planning phase.
- The second-pass reviewer's quality matters. A weak reviewer (small
  model with a 30-second context window) won't catch much. We've
  observed that even `nemotron-3-ultra-free` (small, open-weights)
  caught 10 substantive issues on a 60KB plan.
- "Different model" is sometimes hard to guarantee on a single-model
  host. The workaround: dispatch the [[review]] via OpenCode or another
  CLI that has multiple providers linked (e.g. nemotron-3 for a
  small/fast pass, a frontier model for a slow/thorough pass).

**Reversible?**

Yes. This is a process ADR. If the second-pass [[review]] proves
uneconomical (slow, low signal, eats AI [[credits]]), we drop it back
to self-[[review]]-only and accept the bug-discovery cost in execution.

## Alternatives considered

- **Skip the self-[[review]], go straight to execution.** Rejected: the
  self-[[review]] caught 5 issues before the second pass even started,
  including two design-level must-fixes (R1: legal registry wiring;
  R2: wall-clock budget enforcement). Skipping the self-[[review]]
  would have made the second-pass reviewer's job much harder.
- **Self-[[review]] only, no second pass.** Rejected: same-agent bias is
  the dominant failure mode. The second pass exists *because* the
  first one is biased.
- **Two different frontier models, no small/fast model in the loop.**
  Rejected as the default: expensive, slow, and the signal ratio
  isn't obviously higher than a small model reading the plan
  selectively. Re-pick if the small model proves too lossy.

## Implementation notes (carry-over from the v0.1 build session)

- The plan file at
  `~/.hermes/plans/2026-06-21_0111-[[osint-framework-v0.1]]-knowledge-research.md`
  is the first artifact that follows this pattern. It has both
  `## [[Review]] Notes` (self + nemotron 3) and `## Plan Patches`
  sections.
- The wiki note [[Mad River AI v0.1 — Knowledge & Research Lanes Build Session 2026-06-21|the build session wiki note]]
  has a "How the plan was reviewed" table breaking down the 15
  findings by source and severity.
- Future plans should follow the same [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[template]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]:
  `# <Feature> Implementation Plan` → `## Goal` → `## [[Review]] Notes`
  → `## Plan Patches` → `## Definition of Done`.

## Honest retrospective

This process cost ~5 minutes of plan-time and saved at least 30
minutes of execution time (the two test-fixture bugs alone would
have cost 10+ minutes of "why is this test failing" debugging).
The pattern is cheap and high-leverage. Adopt it.
