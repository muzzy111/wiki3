---
aliases: []
tags:
  - opencove
  - canvas
  - agent
  - github
---


# OpenCove: Guide to the AI-Native Infinite Canvas Workspace

_A reference guide compiled from the project's official GitHub repository, [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[README]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]], and release notes. OpenCove is an early-stage (Alpha) open-source project, so this guide reflects what the maintainers have documented as of mid-June 2026 — expect gaps where the project itself hasn't published detail yet._

---

## 1. What Is OpenCove?

OpenCove is an open-source **spatial development workspace** built by developer DeadWaveWave (GitHub handle) for working alongside CLI-based AI coding [[agents]] like Claude Code and Codex. Rather than the usual IDE layout of tabs, split panes, and a single scrolling chat thread, OpenCove puts everything — agent sessions, terminals, notes, and tasks — onto one virtually boundless 2D canvas that you pan and zoom around, the way you would in Figma or Miro.

The pitch is straightforward: when you're running several AI [[agents]] in parallel, a linear chat history makes it hard to keep track of what each one is doing, what you decided five minutes ago, and what's still unresolved. By spatially arranging agent windows, terminals, and notes next to each other, OpenCove tries to keep that context visibly "in the room" instead of buried in scrollback.

It's built as an Electron desktop app (macOS, Windows, Linux) using React, TypeScript, the `@xyflow/react` canvas engine, and `xterm.js`/`node-pty` for real terminal sessions running inside canvas nodes.

## 2. The Problem It's Trying to Solve

The [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[README]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] frames OpenCove's value proposition as a set of contrasts with typical chat-based or tabbed dev tools:

|Pain point in traditional tools|OpenCove's approach|
|---|---|
|**Linear amnesia** — context gets buried in long, scrolling chat histories|**Spatial context** — tasks, notes, and active work stay visibly pinned on the canvas|
|**Single-pane bottlenecks** — switching tabs breaks your train of thought|**Parallel execution** — watch and compare multiple [[agents]] at once without losing your place|
|**Opaque automation** — background agent work feels like a black box|**Transparent actions** — terminal output and side effects render live, in view, as they happen|

## 3. Core Features

Based on the project's documentation, OpenCove's feature set includes:

**Infinite spatial canvas.** A pannable, zoomable 2D surface (powered by the `@xyflow/react` library) where you freely place and arrange terminals, notes, tasks, and agent sessions in whatever spatial layout matches how you think about the work.

**Native CLI agent support.** OpenCove is built specifically around terminal-native agent tools — Claude Code and Codex are explicitly called out, with the architecture optimized for spawning these [[agents]] as canvas nodes, running several side by side, and watching their live state.

**Visualized context management.** Task planning and live execution sit next to each other spatially, so the plan you made doesn't get swallowed by the chat log of what actually happened.

**Persistent state and memory.** OpenCove saves your viewport position, node layout, terminal output, and agent state, so closing the app or switching projects doesn't cost you your working context — you reopen to exactly where you left off.

**Space archives.** You can snapshot a workspace state and revisit it later, effectively letting you bookmark a moment in a project's history and jump back into that exact context.

**Fine-grained workspace isolation.** Projects are separated using directories and **git worktrees**, so work on one branch/feature doesn't bleed context or files into another — each isolated workstream gets its own canvas space.

**Global search and a session control center.** A search function that reaches across both canvas content and terminal output, paired with a central place to manage all active agent sessions at once.

**Rich media and layout tools.** You can paste images directly onto the canvas, multi-select nodes, color-code items with labels, and use an "arrange" function to automatically tidy a cluttered board (a recent [[update]] specifically preserved window sizes when running this auto-arrange).

**AI-generated session titles.** Long-running agent sessions get short, AI-generated semantic titles in the session list rather than generic placeholders, with a fix already shipped for cases where long titles were getting truncated incorrectly.

**Experimental Worker Web UI.** A newer, experimental feature lets you open the canvas from a regular browser instead of the desktop app — including from other devices on your local network. It's enabled in Settings → Experimental → Worker Web UI, defaults to loopback-only (127.0.0.1) for security, and can optionally be exposed to your LAN with a password if you want to check on a session from your phone or another machine.

**"Vigilant mode."** The release notes reference a "vigilant mode" as a documented safety/permissions feature, but the project hasn't published detailed standalone documentation on it that's publicly indexed yet — treat it as a feature to look up directly in-app or in the docs folder of the repo once installed, rather than something this guide can describe in detail.

## 4. Getting Started

**[[Status]] check first:** OpenCove is explicitly labeled **Alpha**. The maintainers recommend it for early adopters and power users comfortable with rough edges, not as a finished daily-driver tool. Most public builds are nightly/prerelease rather than polished stable releases.

### Option A — Download a prebuilt binary

Prebuilt binaries for macOS (`.dmg`), Windows (`.exe`), and Linux (`.zip` and similar) are published on the project's GitHub Releases page, with both "Stable" and "Nightly" build tracks.

> **macOS note:** Current builds aren't signed or notarized with an Apple Developer ID, so Gatekeeper will likely block the app on first launch. The documented workaround is to run this in Terminal after installing:
> 
> ```
> xattr -dr com.apple.quarantine /Applications/OpenCove.app
> ```

### Option B — Build from source

Prerequisites:

- Node.js ≥ 22
- pnpm ≥ 9
- Claude Code or Codex installed globally (recommended, so you can actually exercise the agent-spawning features)

```bash
git clone https://github.com/DeadWaveWave/opencove.git
cd opencove
pnpm install
pnpm dev
```

The repo's `docs/RELEASING.md` covers packaging/build details in more depth if you're producing your own distributable build.

## 5. How to Use OpenCove (Workflow Concepts)

Based on the documented feature set, a typical OpenCove session works roughly like this:

1. **Open or create a workspace**, scoped to a project directory. Workspace isolation means each project (or each git worktree within a project) gets its own canvas space, so contexts don't bleed into each other.
2. **Spawn agent nodes onto the canvas.** Launch Claude Code, Codex, or a plain terminal as a node you can drag, resize, and position anywhere on the board.
3. **Add notes and task nodes alongside the [[agents]]** to capture planning, decisions, or to-dos spatially next to the work they relate to, rather than scrolling up through chat history to find them.
4. **Run [[agents]] in parallel and compare them side by side** — useful for things like running the same prompt against two models, or having one agent handle a refactor while another writes tests, with both visibly running at once.
5. **Use multi-select and the auto-arrange tool** when the board gets cluttered, and apply label colors to visually group related nodes (e.g., color-coding everything tied to a particular feature branch).
6. **Paste images directly onto the canvas** — for example, a screenshot of a bug or a design mockup — right next to the agent session discussing it.
7. **Snapshot a "space archive"** before a risky change or at a natural milestone, so you can return to that exact canvas state later.
8. **Use global search** when you need to find something specific across either canvas content or terminal scrollback, instead of manually scanning the board.
9. **Optionally turn on the Worker Web UI** if you want to check on long-running agent sessions from a browser or another device on your network.

## 6. Example Canvas Layouts

A caveat up front: I could not find independently published canvas screenshots or walkthroughs from users (no Reddit threads, blog posts, or social posts showing real OpenCove boards turned up in research as of this writing — the project is small, at roughly 121 GitHub stars, and still in Alpha). The only visuals that exist are two official [[preview]] images in the repo itself: a header banner and an app-[[preview]] screenshot, both linked in the citations below. I'd recommend viewing those directly on GitHub for the most accurate look at the real UI.

What follows instead are **illustrative layout patterns** inferred from the documented feature set — useful as a starting mental model, not screenshots of actual boards:

- **Parallel-agent comparison layout:** Two or three agent terminal nodes placed side by side, each running Claude Code or Codex against a different approach to the same task, with a single note node above summarizing the comparison criteria.
- **Plan-and-execute layout:** A task/note node pinned at the top of a cluster describing the plan, with the live agent terminal(s) executing that plan arranged directly beneath it — keeping the "what we meant to do" visible next to "what's actually happening."
- **Per-worktree project layout:** One spatial cluster per git worktree/branch, each color-labeled, so a multi-feature project shows as several visually distinct neighborhoods on the same canvas rather than one undifferentiated mass of windows.
- **Research/triage layout:** A note node with pasted screenshots of a bug or design reference, an agent terminal investigating it, and a task node tracking resolution [[status]], all grouped together and archived as a space snapshot once resolved.

## 7. Technical Architecture (for the curious / contributors)

- **Framework:** Electron + React + TypeScript, scaffolded via `electron-vite`
- **Canvas engine:** `@xyflow/react`
- **Terminal layer:** `xterm.js` for rendering, `node-pty` for real PTY processes
- **Testing:** Vitest (unit) and Playwright (end-to-end)
- **License:** MIT
- **Languages in repo:** ~95% TypeScript, ~3% CSS, ~2% JavaScript

## 8. Current Limitations Worth Knowing About

- It's Alpha software from a small team (effectively one primary maintainer plus contributors) — expect bugs, breaking changes between nightly builds, and incomplete documentation.
- macOS builds are unsigned/unnotarized, requiring a manual Gatekeeper workaround.
- The Worker Web UI is explicitly labeled experimental.
- Detailed documentation on some named features (like "vigilant mode") exists only as in-app or in-repo references rather than fully published public docs at the time of writing.
- There's no indication yet of a hosted/cloud version — it's a local desktop app pointed at your own filesystem and agent CLIs.

---

## Sources / Citations

1. DeadWaveWave. _opencove_ (GitHub repository, [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[README]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]). Accessed June 16, 2026. https://github.com/DeadWaveWave/opencove
2. DeadWaveWave. _opencove — Releases_. GitHub. Accessed June 16, 2026. https://github.com/DeadWaveWave/opencove/releases
3. DeadWaveWave. _opencove — README_ZH.md_ (Chinese-language [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[README]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]], main branch). GitHub. Accessed June 16, 2026. https://github.com/DeadWaveWave/opencove/blob/main/README_ZH.md
4. GitHub Topics. _infinite-canvas_ (topic page listing opencove among related infinite-canvas projects). Accessed June 16, 2026. https://github.com/topics/infinite-canvas?l=typescript
5. Official [[preview]] images referenced in the OpenCove [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[README]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]:
    - Header banner: https://github.com/DeadWaveWave/opencove/raw/main/assets/images/opencove_header_readme.jpg
    - App [[preview]] screenshot: https://github.com/DeadWaveWave/opencove/raw/main/assets/images/opencove_app_preview_readme.jpg

_Note: OpenCove is unrelated to "OpenCover" (a .NET code-coverage tool) and to Brother's "CanvasWorkspace" software for cutting machines — both surfaced in research as unrelated namesakes and are excluded from this guide._