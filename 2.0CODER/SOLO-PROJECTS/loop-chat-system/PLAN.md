# PLAN — Loop Chat System

Status: implemented.

## Goal

Turn the LOOP vault's documented chat topology into a runnable system
where Hermes actually handles user communications end-to-end.

## Architecture

```
        user appends command to CHAT/INBOX.md
                       |
                       v
        hermes_bus daemon -- watches file
                       |
              +--------+--------+
              v                 v
       COMMAND PARSER     COMMAND PARSER
              |                 |
        route via     ->   write brief per agent
        router.py          CHAT/Inbox/<task-id>.md
              |
              v
        AGENT RUNNER (opencode run / agy --print)
              |
              v
        deliverable lands in SOLO-PROJECTS/<task-id>/
              |
              v
        MAVIS REVIEW (agy --print with JSON verdict prompt)
              |
              v
        hermes composes reply -> CHAT/OUTBOX.md
              |
              v
        index updated; command marked done
```

## Phases

1. **v0.1 (this build):** core bus, parser, router, runner, review,
   daemon. Stub-friendly — works with `agy --print` even when no MCP
   servers are configured.

2. **v0.2 (deferred):** NotebookLM grounding for Mavis' review using the
   `notebooklm-mcp` server as a private reference set.

3. **v0.3 (deferred):** Cron-driven pickup loop in `WORKFLOWS/`.

## Risks

| Risk | Mitigation |
|------|------------|
| `agy --print` blocks large context | Per-run timeout (default 600s); fall back to AGY-TUI mode if needed. |
| Frontmatter parser drift | Conservative YAML subset only; Mavis flags drift; backed by tests. |
| Vault lock contention | All writes are direct file IO; no atomic-rename contention. Add file lock if Mavis audit shows races. |
| Cost overrun on `agy --print` | Each dispatch counts as one agent call; orchestrator logs duration; budget reports go to `4.0AGY/MEMORY/`. |
| Secrets leaking via prompts | Secrets are env vars only; agent runner inherits `os.environ` and explicitly filters nothing except values passed by the caller. |
