---
aliases: []
tags:
  - shannon
  - repo
  - path
  - report
---

 [[Shannon]] — Beginner's Guide

    [[Shannon]] is an autonomous AI pentester. You point it at a target web app, give it the source code, and it reads the code, plans attacks, runs real exploits in a browser, and writes a Markdown [[[[report]]]] of what it actually broke.

    The 30-second mental model

    Think of [[Shannon]] as a junior pentester that never sleeps:

    1. Reads your source code — finds login flows, routes, API calls, input handling
    2. Explores the live app with a real browser (Chromium)
    3. Tries to break it — injection, XSS, SSRF, auth bypass, IDOR, etc.
    4. Keeps what it can prove — only findings with a working exploit end up in the [[[[report]]]]
    5. Writes up the proof — each finding has the exploit steps and a fix

    A full run takes 1-1.5 hours and [[costs]] API [[credits]] (since you configured MiniMax as the provider, it'll consume from your subscription).

    What you actually need to start

    | Item                       | What it is                    | Why                            |
    |----------------------------|-------------------------------|--------------------------------|
    | A target URL               | The running web app           | What [[Shannon]] attacks           |
    | A source repo              | The code on your disk         | What [[Shannon]] reads to plan     |
    | The repo must be reachable | [[Shannon]] mounts it read-only   | It needs to grep files         |
    | Auth (optional)            | A YAML config with test creds | For testing logged-in features |

    Hard rule: only run against systems you own or have written authorization to test. [[Shannon]] really does exploit — it creates users, submits forms, mutates state.

    The 4 commands you'll use

    From C:\Users\Admin\Documents\GitHub\[[shannon]]:

    Start a scan

    ./[[shannon]] start -u https://your-app.com -r /path/to/your-repo


    Watch it run

    ./[[shannon]] [[status]]          # what scans are alive
    ./[[shannon]] logs <workspace># tail the live workflow log


    Stop / clean up

    ./[[shannon]] stop            # kills running scans
    ./[[shannon]] stop --clean    # also removes stopped containers + volumes


    List past runs

    ./[[shannon]] workspaces


    The Temporal [[dashboard]] at http://localhost:8233 shows everything in detail — workflow timeline, agent activity, per-step errors.

    Outputs land here

    After a run completes:


    workspaces/{hostname}_{sessionId}/
    ├── Security-Assessment-[[[[Report]]]].md    ← the deliverable (read this)
    └── .[[shannon]]/                        ← internals
        ├── deliverables/                ← [[[[report]]]] source, per-phase analysis
        ├── [[agents]]/                      ← logs from each AI agent
        ├── [[[[prompts]]]]/                     ← rendered [[[[prompts]]]]
        ├── scratchpad/                  ← screenshots, scripts
        ├── session.json                 ← resume state
        └── workflow.log


    The Security-Assessment-[[[[Report]]]].md is the file you actually read and share.

    Options you'll want to know


    -u, --url <url>           target URL (required)
    -r, --repo <path>         repo path (required)
    -w, --workspace <name>    named workspace — auto-resumes if it exists
    -c, --config <path>       YAML config for authenticated testing
    -o, --output <path>       copy deliverables here after the run
        --pipeline-testing    fast smoke test (~minutes, minimal [[[[prompts]]]])
        --debug               keeps the worker container around after exit


    Adding [[authentication]] (optional but recommended)

    Create a YAML config file. Templates live in the repo at apps/worker/configs/. The config tells [[Shannon]] things like:
    - Where to log in
    - What test credentials to use
    - Which areas to focus on or skip
    - Rules of engagement (e.g., "don't touch /admin")

    Pass it with -c /path/to/your-config.yaml.

    Resuming interrupted runs

    If something dies mid-scan, just re-run with the same -w workspace-name. [[Shannon]] picks up where it left off using the checkpoints in .[[shannon]]/session.json. Don't worry about losing hours of work — interrupted scans are explicitly handled.

    Common first-run pitfalls

    1. App not reachable from Docker — if your target runs on localhost:3000 on the host, use http://host.docker.internal:3000 instead. [[Shannon]]'s worker is in a container and can't see host localhost.
    2. Repo path with spaces or weird permissions — use an absolute path with no trailing slash.
    3. API quota exceeded — a full run eats a non-trivial amount of tokens. Watch your MiniMax [[dashboard]].
    4. Forgot to bring up Temporal — if docker compose up -d hasn't been run yet, [[Shannon]] does it for you on first start. But the worker image has to exist first (yours does — [[shannon]]-worker:latest).

    A safe first run for learning

    The maintainers recommend testing against an intentionally vulnerable app. Three that ship with sample reports in this repo:

    - OWASP Juice Shop — Node.js, ~20 findings
    - c{api}tal API — Go API, ~15 critical/high findings
    - OWASP crAPI — Python/Node, ~15 critical/high findings

    Pick one, follow its [[setup]] instructions to run it locally, then point [[Shannon]] at http://host.docker.internal:<port> and the repo path. It's the fastest way to see what a real [[Shannon]] [[[[report]]]] looks like without risking anything real.

    Where to read more

    - [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[README]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]].md — the main entry doc
    - docs/development.md — clone/build/CLI commands
    - docs/configuration.md — auth, focus areas, rate limits, output filters
    - docs/workspaces.md — naming, resuming, storage
    - docs/safety.md — read this before scanning anything you didn't build
    - docs/coverage-roadmap.md — what [[Shannon]] tests vs. what it doesn't
    - sample-reports/ — three real example reports to see what output looks like

    That's it. You don't need to understand Temporal, the worker internals, or any of the TypeScript code to use [[Shannon]]. The CLI handles everything.