---
title: "Worked Example — 5-role dispatch"
type: worked-example
status: closed
command_id: CMD-EXAMPLE-001
---

# Worked Example: full 5-role dispatch

> One worked example showing the full Coordinator -> 5 roles -> Memory Curator -> user-channel flow.

## Source user command

> (added to CHAT/INBOX.md) "Set up the vault so I can run `bash scripts/turnkey-smoke.sh` tomorrow morning."

## Dispatch (Coordinator -> 5 roles)

| Step | Role | Brief | Inbox file |
|---|---|---|---|
| 1 | Coordinator (self) | "triage user command, plan dispatch" | (handled directly) |
| 2 | Coder | "author turnkey-smoke.sh and turnkey-bootstrap.sh" | `2.0CODER/CHAT/Inbox/2026-07-03-1000 — example-coder-utility-script.md` |
| 3 | Researcher | "skipped (no research needed)" | (nothing in `3.0RESEARCHER/CHAT/Inbox/`) |
| 4 | Tools | "wire the smoke command and add to scheduler" | `4.0TOOLS/CHAT/Inbox/2026-07-03-1300 — example-tools-mcp-deploy.md` (proxy) |
| 5 | Memory Curator | "review every artifact for QA" | `5.0MEMORY/CHAT/Inbox/2026-07-03-1400 — example-memory-review.md` |

## Completions (per role's Outbox)

| Role | Outbox file | Status |
|---|---|---|
| Coordinator | `1.0COORDINATOR/CHAT/Outbox/2026-07-03-1005 — example-coordinator-triage-completion.md` | done |
| Coder | `2.0CODER/CHAT/Outbox/2026-07-03-1115 — example-coder-utility-script-completion.md` | done |
| Tools | `4.0TOOLS/CHAT/Outbox/2026-07-03-1315 — example-tools-mcp-deploy-completion.md` | done |
| Memory | `5.0MEMORY/CHAT/Outbox/2026-07-03-1415 — example-memory-review-completion.md` | done |

## Final user reply

> Coordinator assembles the reply:
> - "bootstrap + smoke scripts authored (Coder); smoke passes (FRB exit code 0); audit-passed (Memory). Ready for tomorrow's run."

## Coverage

This 5-role flow is the canonical worked example. The per-role Worked Examples (already in CHAT/Inbox + CHAT/Outbox) cover each role in isolation; this doc covers the full multi-role flow.
