---
title: Review Checklist
tags: [agent, mavis, rules, review, checklist]
created: 2026-07-01
type: review-checklist
status: active
---

# Review Checklist

> The detailed checklist Mavis uses when reviewing deliverables from OpenCode and AGY. Operates under the protocol in [[../CHAT/Review Protocol]].

## Universal Checks (All Deliverables)

These apply to every deliverable, regardless of source agent.

1. **Scope match.** Does the deliverable meet the brief exactly? No silent scope expansion, no missing piece.
2. **Acceptance criteria.** Does each numbered acceptance criterion in the brief have a corresponding demonstrated behavior in the deliverable?
3. **Frontmatter present.** YAML frontmatter is present and complete (title, tags, created, type, status).
4. **No emojis or icons.** Per the global style rule.
5. **Wikilinks resolve.** Every `[[...]]` reference points at an existing note (or a deliberately scaffolded future note).
6. **Voice match.** Matches the vault voice or the user's tone if user-facing.
7. **Citation.** Claims pulled from external sources cite the source.
8. **No secrets.** No API keys, tokens, or passwords in plain text anywhere in the deliverable.
9. **No dead links or TODOs.** Either complete or explicitly tracked as follow-up.

## Code Review (OpenCode)

When the deliverable is code, Mavis additionally checks:

### Correctness

1. The code does what the brief said it should do.
2. Edge cases are handled (empty input, null, missing file, network failure).
3. Outputs match documented behavior.
4. No off-by-one errors, no race conditions, no deadlocks.

### Security

1. **No hardcoded secrets.** Credentials come from env vars.
2. **Input validation.** All external input is validated before use.
3. **No injection vectors.** SQL/NoSQL injection, command injection, template injection, path traversal all prevented.
4. **No unsafe deserialization.** `pickle`, `eval`, `exec`, `yaml.load` (without SafeLoader) are forbidden.
5. **Dependencies trusted.** `requirements.txt` / `package.json` references packages from trusted sources with pinned versions.
6. **Logging safe.** Logs do not print secrets or sensitive data.

### Robustness

1. Errors are caught and handled. Exceptions are not silently swallowed.
2. Resource cleanup is correct (file handles, network connections, temp dirs).
3. Long-running operations have cancellation or timeout.
4. Idempotency is considered where relevant.

### Readability

1. Naming is clear and consistent.
2. Functions are short and single-purpose.
3. Comments explain *why*, not *what*.
4. No dead code, no commented-out code, no debug `print` statements left in.

### Testing

1. Tests exist, or there is an explicit note about why tests are deferred.
2. Tests cover the main path and at least the documented edge cases.
3. Tests can be run with a documented command.

### Style

1. Follows `3.0OPENCODE/RULES/Coding Standards.md`.
2. Linter passes (if a linter is configured for the language).
3. Formatter passes (if a formatter is configured).

### Compatibility

1. If API or interface changed in a breaking way, version is bumped and changelog updated.
2. Migration notes provided if breaking change affects existing callers.

## Research Review (AGY)

When the deliverable is a research report, Mavis additionally checks:

### Sourcing

1. Every factual claim cites a source URL.
2. Sources are recent enough to be trustworthy for the topic.
3. At least two independent sources for load-bearing claims.
4. Authoritative sources preferred over secondary aggregators.

### Scope

1. The deliverable answers the brief, no more, no less.
2. Off-topic material is excluded or explicitly flagged as out of scope.
3. Open questions are listed, not papered over.

### Synthesis

1. The deliverable is summarized, not a raw dump of sources.
2. Conclusions are reasoned, not asserted.
3. Conflicting sources are acknowledged and arbitrated with reasoning.
4. The structure is clear (executive summary, findings, sources, caveats).

### Math (if applicable)

1. Units are stated.
2. Assumptions are explicit.
3. Numerical results include a sanity check.
4. Source data is reproducible from cited sources.

### Honesty

1. Uncertainty is stated, not hidden.
2. Speculation is labeled as speculation.
3. Failed searches are reported (what was looked for and not found).
4. Tooling limitations are acknowledged.

## Environment Change Review (AGY, Obsidian Environment)

When the deliverable is an Obsidian environment change (plugin install, theme update, CSS snippet, configuration change), Mavis checks:

1. The change is documented in `SYSTEM/STYTEM RECORD/`.
2. Plugin/theme version is pinned.
3. No conflict with existing plugins or themes.
4. CSS snippet does not break core Obsidian styles.
5. If the change touches `.obsidian/`, the change is intentional and minimal.

## Verdict Coding

Each finding is categorized:

- `blocker` — must fix before delivery.
- `nit` — small improvement, can be follow-up.
- `question` — needs clarification from the agent or the user.
- `info` — observation, no action required.

Mavis uses these tags in the verdict to make triage unambiguous for the originating agent.

## See Also

- Mavis' role: [[../AGENT]]
- Review protocol: [[../CHAT/Review Protocol]]
- Documentation standards: [[Documentation Standards]]
- OpenCode coding standards: [[../../3.0OPENCODE/RULES/Coding Standards]]
- AGY research protocol: [[../../4.0AGY/RULES/Research Protocol]]