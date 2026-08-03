---
title: "Review Protocol"
role: "memory"
status: active
---

# Review Protocol

> How Memory Curator accepts review requests and writes verdicts.

## Acceptance

A review request arrives at `5.0MEMORY/CHAT/Inbox/<...>.md`. Memory Curator:

1. Reads the request and the linked target artifact.
2. Applies `5.0MEMORY/RULES/Review Checklist.md`.
3. Drafts a verdict in JSON.
4. Writes the verdict at `5.0MEMORY/CHAT/Outbox/<...>.md`.

## Verdict Schema

See `.omo/templates/review-verdict.md`.

## When to Block

- `must_fix` non-empty -> block the source role's completion; the Coordinator will retry.

## When to Approve

- `must_fix` empty, `passed: true` -> approve; the Coordinator will surface to the user.
