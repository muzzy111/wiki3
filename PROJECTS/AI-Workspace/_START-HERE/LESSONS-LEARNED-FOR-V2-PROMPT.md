# A warning from the future: read this before you prompt Claude Desktop to build v2

This is a retro on the AI-Workspace multi-agent fleet (NATS bus + hermes/cline/
opencode/antigravity/mavis pollers + Docker MCP stack), written after a cleanup
session that had to fix a long list of problems the *original build prompt*
never guarded against. If you're regenerating or "versioning" this project,
paste the sections below into your build prompt as constraints, not just
this paragraph as color — every item here cost real debugging time.

The pattern behind almost everything that went wrong: **generated components
were declared done when they existed, not when they were verified working
end-to-end.** A file existing, a container defined, a doc written — none of
that means the thing actually runs. Every rule below is a specific case of
that one failure mode.

---

## 1. "Fixed" code that never reached the running process

**What happened:** A real bug fix (PID-lock race + silent pull-loop failures,
consolidated into `poller_lib.py`) was correctly written and copied into
`scripts\`. But the *launchers* (`antigravity-poller.ps1`, `mavis-poller.ps1`)
still pointed at the old root-level `.py` files, and the *live process*
for `cline` had been running the old buggy code the entire time. The fix was
100% correct and 0% deployed.

**Bake into v2:**
- Every fix task ends with "kill the running process and relaunch it,
  confirm the new PID is running the new file's log signature" — not
  "file written, done."
- Launchers and the code they launch must be updated in the same commit/patch,
  never as separate steps that can drift.
- If a script's job is "start component X", it should read the path to X
  from one place (a config/constant), not have that path hand-typed into
  every launcher independently — that's how four different launchers ended
  up with four different opinions about where the poller lived.

## 2. Silent infrastructure death with no alerting

**What happened:** The NATS broker container had been sent a clean SIGTERM
and just... stayed down. Nothing paged anyone. Agents kept "running" but
every message pull was silently failing. This wasn't found by monitoring —
it was found by manually diffing `docker ps` against what should have been
running, hours after the fact.

**Bake into v2:**
- `watchdog.py` (or `HealthCheck.ps1`) must alert on **the broker itself**,
  not just agent heartbeats. An agent heartbeat depends on NATS; a NATS-down
  state currently looks identical to "everything's fine but quiet."
  Watchdog is doing agent-liveness. Add infra-liveness.
- Any container with `restart: unless-stopped` that's actually stopped should
  be a loud, visible fact — a `docker ps --filter status=exited` check in
  `HealthCheck.ps1`, not something a human has to think to run.
- When a poller's NATS client throws "connection closed" repeatedly, that
  should trigger a process restart (or at minimum a loud log escalation)
  instead of spinning forever on a dead connection object. `poller_lib.py`'s
  reconnect story needs to actually recover from a full broker restart, not
  just brief network blips.

## 3. Docker Compose files that were never actually completed

**What happened:** `docker-compose.mcp.yml` referenced `mcp/filesystem-server:latest`,
`mcp/browser-server:latest`, etc. — images that don't exist on any registry.
The file's own comment admitted it: `# replace with your actual image/build`.
This was scaffolding, checked in and treated as finished infrastructure.
Nobody ran `docker compose up -d` against it until this cleanup session,
months (in-world) after it was "shipped."

**Bake into v2:**
- No compose file gets marked done without a `docker compose config` **and**
  a real `docker compose up -d` run against it at generation time. If the
  images don't exist yet, don't write `image: fake/name:latest` as a
  placeholder that looks legitimate — write `# TODO: no image chosen yet,
  see docs/xyz` so it fails loud and obvious instead of failing at pull time
  with a cryptic registry error.
- The docs (`prompts/00-README.md`) claimed MCP servers were reachable at
  `http://localhost:8080-8083/sse` via a `supergateway` wrapper. The compose
  file never actually included supergateway or published any ports. Docs and
  infra drifted apart because nothing checked them against each other. If a
  doc makes a claim about running infrastructure, generate it *from* the
  compose file (or validate it against the compose file), don't hand-write
  both independently.

## 4. Workspace root as a dumping ground

**What happened:** By the time of cleanup, `C:\AI-Workspace\` root had: four
duplicate `docker-compose*.yml` files (stale copies of the real ones in
`docker\`), four duplicate poller `.py` files (superseded by `scripts\`),
orphaned `.pid`/`.log`/`.err` files from failed or abandoned launch attempts
using inconsistent naming conventions (`opencode.poller.pid` vs.
`bus.opencode.poller.pid`), and a pile of one-off incident-response scripts
with no lifecycle (never archived, never marked done).

**Bake into v2:**
- Decide the canonical location for each artifact type up front (compose
  files live in `docker\`, pollers live in `scripts\`, one-off/incident
  scripts live in a dated `scripts\incidents\` or similar) and never let a
  second copy exist at the workspace root "temporarily."
- Give one-off incident scripts an explicit lifecycle: a place they move to
  once the incident's resolved (or a header comment marking them historical),
  so a future cleanup pass doesn't have to reverse-engineer "is this still
  needed?" from git-blame-style archaeology.
- Pick **one** naming convention for pid/log files (`bus.<name>.poller.pid`
  was already the convention three of five agents used) and enforce it in
  the shared library, not per-agent.

## 5. Graph/tooling output polluting itself

**What happened:** Running `/graphify` a second time inside `graphify-out\`
produced a nested `graphify-out\graphify-out\` that graphed the *tool's own
manifest and cache files* as if they were project source. Purely accidental,
wasted a full extraction pass, and had to be found and deleted by hand.

**Bake into v2:**
- Never invoke a directory-scanning tool with a scan root that's inside its
  own output directory. If regenerating this project's graph, always target
  the real project root, never `graphify-out\` itself.

## 6. No single "start everything" / "stop everything" — until asked

**What happened:** There was no one script that brought up Docker Desktop,
the container stack, the five pollers, and the watchdog together. Every
component had its own launcher (or, for two of five agents, *no* launcher at
all), so "is the fleet actually up" required manually checking five different
places.

**Bake into v2:**
- Ship a `Start-Everything` / `Stop-Everything` pair from day one, not as a
  later add-on. It's the cheapest possible insurance against exactly the
  "half the fleet is on old code, half is down, nobody noticed" state this
  session started in.
- Every component the start script brings up must be idempotent (safe to
  run twice, refuses to double-launch) — this was true of four of five
  pollers by luck of a shared library; make it true by design, not by luck.

## 7. New capabilities added without a privilege/trust checkpoint

**What happened:** Mid-session, "add these 5 MCP servers" quietly could have
meant giving the *whole autonomous agent fleet* direct Docker-socket control
(create/kill/inspect any container, unsupervised) and installing a
third-party, non-Google tool with browser-automation access to a real Google
account — both bundled in with clearly-safe requests like "add a filesystem
MCP server." These are categorically different in blast radius and need to
be surfaced as their own decision, not defaulted silently.

**Bake into v2:**
- Anywhere the build prompt says "give the agents access to X," ask: does X
  cross a privilege boundary (host control, another service's credentials,
  another person's account, spend)? If yes, that's a named, called-out
  decision in the plan — never bundled into a bigger "add these tools" ask
  and defaulted to "sure, all of it."
- Distinguish, explicitly, "tools *I* (the human operator) use through my
  own coding assistant" from "tools the *unattended, always-on agent fleet*
  gets to use while I'm not watching." The second category needs a much
  higher bar.

## 8. "Byte-identical" was necessary but not sufficient

**What happened:** Verifying that pasted-in fix files matched the source
folder exactly was the *right* check and it passed — but it only proved the
paste worked, not that the fix was live, not that its dependencies were
running, not that its launcher pointed at it. "The files match" and "the
fix is deployed and working" turned out to be a big gap.

**Bake into v2:**
- Treat file-diff verification as step one of three: (1) files match source,
  (2) the process that uses those files has been restarted since, (3) the
  restarted process is observed doing the thing the fix was supposed to fix
  (e.g., a heartbeat, a clean log line, a successful reconnect) — not just
  "it started without a stack trace."

---

## Quick checklist to paste at the top of a v2 build prompt

- [ ] Every launcher script's target path is fixed at every point that fix touches it — no orphaned old-path launchers.
- [ ] Every long-running component has exactly one canonical source location; no root-level duplicates "just for now."
- [ ] Every Docker Compose file is validated with a real `up -d` before being called done — no placeholder images.
- [ ] Docs that claim running infrastructure (ports, endpoints, health paths) are checked against the actual compose file, not hand-written independently.
- [ ] Health checks cover infrastructure (broker, containers) not just application-level heartbeats.
- [ ] A poller/agent that loses its broker connection recovers on its own or restarts — doesn't spin forever on a dead handle.
- [ ] `Start-Everything.ps1` / `Stop-Everything.ps1` exist from the start and are idempotent.
- [ ] Any request that expands an autonomous agent's privileges (host/Docker control, third-party account access) is called out and confirmed on its own, never folded into a bigger ask.
- [ ] "Fixed" is only claimed after: files match source, the process was restarted, and the restarted process was observed actually doing the fixed behavior.
