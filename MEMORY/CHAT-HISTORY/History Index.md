---
title: Cross-Agent Chat History
tags: [memory, chat-history, cross-agent]
created: 2026-07-01
type: chat-history
status: active
---

# Cross-Agent Chat History

> Snapshots and digests of cross-agent chat activity. Useful for retrospective analysis, training, and audit.

## What Lives Here

This folder holds:

- **Monthly digests.** Summaries of agent-to-agent chat activity, written by Mavis at the end of each month.
- **Notable conversations.** Long-form captures of important multi-agent discussions.
- **Audit extracts.** Specific chat excerpts pulled for review purposes.

## Why Not Just Use Agent Inboxes

Agent inboxes (`<agent>/CHAT/`) hold the raw, real-time chat log. This folder holds the **distilled** and **annotated** versions — the things worth remembering after the originals age out.

## Cadence

Mavis writes a monthly digest at the end of each month. The digest:

1. Summarizes the month's chat activity per agent pair.
2. Highlights notable patterns.
3. Notes any deviations or anomalies.
4. Cross-references to relevant task cards in `TASKS/STATUS/`.

## File Naming

`<YYYY-MM> — Chat Digest.md`.

## See Also

- Shared memory index: [[../Index]]
- Agent chat protocols:
  - Hermes: [[../../../1.0HERMES/CHAT/Chat Protocol]]
  - Mavis: [[../../../2.0MAVIS/CHAT/Review Protocol]]
  - OpenCode: [[../../../3.0OPENCODE/CHAT/Coding Brief Protocol]]
  - AGY: [[../../../4.0AGY/CHAT/Research Brief Protocol]]