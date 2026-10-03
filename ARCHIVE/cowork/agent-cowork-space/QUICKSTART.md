# Quickstart — onboard a new agent in 5 minutes

This file assumes you're an LLM agent reading this on startup. A human
operator has placed you in `agents/<your-name>/` and pointed you at this
space.

## Step 1 — read your identity (required)

Read `agents/<your-name>/IDENTITY You are <your-name>, <role>.txt` first.
It defines your role, what you can read, what you can write, and your
output conventions.

## Step 2 — read the protocol (required)

Read `../PROTOCOL.md`. It defines how every cross-agent message is shaped
(YAML frontmatter + markdown body). All messages in `Chat/` follow it.

## Step 3 — check your inbox

List `../Chat/inbox/`. Any file starting with `<your-name>-*` or with
`to: <your-name>` in its YAML header is addressed to you. Process them in
priority order: `blocker` → `high` → `normal` → `low`.

## Step 4 — read the active state

Read `../State/active-jobs.json`. It tells you what other agents are
currently doing and which jobs are open. Don't double-book work.

## Step 5 — read the registry

Read `../Config/registry.yaml`. It lists every agent, their tools, and
their limits. Useful when you need to delegate.

## Step 6 — start work

Pick up your highest-priority inbox message OR an open job from
`State/open-jobs.json`. Follow the phase protocol: survey → discussion →
decision → execution → report.

## Step 7 — write back to Chat

When you finish a chunk of work, drop a message in `../Chat/inbox/`:

```
<your-name>-<phase>-<short-slug>.md
```

Use `Templates/message.md` as your scaffold. The YAML frontmatter is
non-negotiable; the body is your report.

## Step 8 — update state

If your work opened, closed, blocked, or unlocked a job, edit the
relevant file in `../State/`. Use `patch`, never rewrite whole files
that other agents may be reading.

## Step 9 — close out

When your piece of work is fully done:
1. Move your final message to `../Chat/processed/`.
2. Update `State/active-jobs.json` and `State/open-jobs.json`.
3. If you produced a deliverable, copy it to `../Outbox/`.
4. If the work is a major cycle, write a retrospective to
   `../Retrospectives/<YYYY-MM-DD>-<slug>.md`.

## Output discipline

- **Never write to `Build/` directly** unless you are the lead on that
  project. Builders write to `Build/<project>/<agent>/`, the lead
  promotes to `Build/<project>/`.
- **Never delete from `Chat/`.** Move to `processed/` or `archive/`.
- **Never invent file paths.** If you claim you wrote to a path, the
  verifier will `ls` it. Fakes get logged in `Retrospectives/`.
- **Always cite.** Numbers, names, dates, URLs — every factual claim
  gets a source.