---
type: dashboard
cssclasses: [cards]
tags:
  - neurite
  - sector
  - abstract
  - overview
---

# Forking OpenCove — Strategic Thoughts

> [!meta] Note Metadata
> - **Project/Context:** [[00.08 Opencove]]
> - **Author:** Supreme Obsidian Vault Architect
> - **[[Status]]:** #[[status]]/planning (Draft Analysis)
> - **Topic:** Forking Strategy & Codebase Health Audit

---

## Executive Summary

> [!abstract] Spatial IDE for AI-Agent [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[Workflows]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
> An Electron app that puts Claude Code/Codex sessions, terminals, tasks, and notes on a shared infinite 2D canvas (`@xyflow/react`), with persistence, worktree isolation, and a control-plane that can run headlessly (Web UI + CLI). The **"killer feature"** is spatial context — instead of tabs, you arrange parallel work as nodes on a board you can see all at once.

---

## Codebase Assessment

Based on reading the codebase graph (`[[graphify-out]]/graph.json`) and the actual source, here is where it stands:

### Strengths

> [!success] Core Strengths
> - **Architecturally Deliberate:** The graph's first two god nodes (`OpenCoveApi`, `AgentSettings`) sit exactly where they should — the preload bridge and the user-prefs aggregate. The codebase has clearly thought about boundaries (DDD contexts, clean layer [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[template]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]], dependency-direction rules, all documented in `docs/architecture/`). That discipline is rare.
> - **Well-Designed IPC Pattern:** The `control-surface` + `control-surface-invoke` pattern (`src/app/preload/index.d.ts:168`) is genuinely well-designed. A generic `invoke<T>(request): Promise<T>` on the renderer, backed by a typed command/query/[[[[event]]]] registry in main, lets you add new IPC methods without touching the preload bridge. Most Electron apps don't have this.
> - **Robust Worktree Isolation:** The worktree isolation story (`docs/architecture/WORKTREE.md`) is the kind of feature [[agents]] need (parallel agent runs, each in its own worktree, no stomping). It's not a marketing bullet — it's first-class in the data model.
> - **Headless Support:** CLI/headless/worker modes are real. The graph shows `cli.getStatus`, `worker.start`, `worker.getWebUiUrl`, `workerClient.*` — the architecture supports running without the desktop, which is what serious users want.

### Weaknesses

> [!warning] Key Weaknesses & Architectural Debt
> - **The 79% Isolated-Node Problem:** The graph has 2,127 nodes with zero edges. Even after accounting for AST extractor bugs, the underlying signal is true: this is a sprawling renderer with a lot of internal hooks (`useNodesStore.*`, `useSpaces.*`, `useInteractions.*`) that are probably over-fractured. Each `.ts` file in `workspaceCanvas/hooks/` exports a small slice of a state machine. The cohesion is real but the discoverability is awful — you can't read the code top-down because every concept is split across 5-10 tiny files.
> - **Duplicate Execution Pathways:** Two parallel paths to do the same thing: Direct IPC (`pty.spawn(...)`) AND control-surface invoke (`controlSurface.invoke({...})`) for terminal/agent ops. The graph showed `ControlSurface` and `ControlSurfaceInvokeRequest` sitting next to the direct-IPC methods on `OpenCoveApi`. That's a maintenance trap, not a clean abstraction.
> - **Over-Engineered DDD Contexts:** The DDD-contexts [[file structure]] is over-engineered for an alpha. You have `contexts/workspace/application/nodeControl/`, `contexts/workspace/infrastructure/approval/`, `contexts/workspace/presentation/.../hooks/useInteractions.startState.ts`. That's 6+ levels of nesting for one feature. Combined with the over-fractured hooks, the cognitive load to onboard a contributor is very high.
> - **Dual-Entry Risk:** The web UI is treated as "experimental" but ships in the same binary. That's a quality risk — the dual-entry bootstrap (Electron + browser) means bugs can hide in one entry and not the other.
> - **Lack of Agent Orchestration:** No opinionated agent-orchestration story. The app launches [[agents]] in parallel, but there's no concept of agent team, agent [[handoff]], agent supervisor, agent role (planner vs implementer vs reviewer). That's a missing primitive.

---

## Strategic Fork Directions

If I were forking this, I'd pick one of these directions and commit hard, because each implies a different product.

### Direction 1: "Spatial IDE for AI Teams" (The Ambitious Path)

> [!info] The Bet
> **Multi-agent orchestration will be the default.** Today, OpenCove is for one developer running one or two [[agents]]. Tomorrow's user runs five [[agents]] in parallel: a planner, an implementer, a reviewer, a tester, and a researcher. They need to be visible together and they need to talk.

#### Concrete Changes
1. **Agent Team Primitive:** A team is a named collection of agent roles. Roles have typed responsibilities (planner, implementer, reviewer, tester, researcher). Each role has its own context window, system prompt, and output shape. Teams are saved as first-class workspace objects.
2. **Inter-Agent Canvas Messaging:** Currently nodes are passive. Replace with: nodes can have edges typed `delegates_to`, `awaits_input_from`, `cites`, `blocks`. The renderer visualizes these as canvas edges with semantic styling. This makes the flow of work visible, not just the work.
3. **Conductor Agent:** A long-running supervisor that watches all [[agents]] in a space, handles retries, escalates blockers, and writes progress to a shared note note. This is the killer feature for multi-agent: the conductor's decisions are visible on the canvas, not hidden in a chat log.
4. **Worktree-as-Actor:** Each agent role gets its own worktree, branched off a common base, and merges are gated on the reviewer-role's approval. This is the natural extension of the existing worktree isolation story.
5. **Playbook Pattern:** Teams can save their [[setup]] (roles, [[[[prompts]]]], worktree config, retry rules) as a reusable playbook. *"I want to start a research team on this codebase"* → one click, all four [[agents]] spin up.

#### Technical Requirements
- A real session state machine (the codebase already has a partial one — `agentRuntimeStatus`, `sessionFinalMessage` are the beginnings).
- A typed [[[[event]]]] bus for inter-agent messages (probably extending the existing `controlSurface` [[[[event]]]] protocol).
- A canvas-edge schema (currently the workspace canvas only models nodes, not typed edges between them).
- Worktree merge automation.

> [!danger] Risk & Competition
> This is a **6-12 month rebuild**. You'd be competing with LangGraph, CrewAI, and the openagents space. However, OpenCove has the canvas-first UI that none of them have.

### Direction 2: "Local-First, Cloud-Optional" (The Practical Path)

> [!info] The Bet
> **The current product is good for a solo developer + local [[agents]].** Most users don't actually need multi-agent orchestration. What they need is better local-first features.

#### Concrete Changes
1. **Promote Web UI & Drop Electron Priority:** Keep the Web UI as primary. The control-surface + worker + Web UI scaffolding is already there. Promote it. The Web UI becomes the product; the Electron shell becomes a packaging option for users who want a "real app." This halves the maintenance surface area.
2. **Real Local-First Sync (CRDTs):** Currently the persistence model is local SQLite + manual export. Add `Yjs` (or `Loro`) for the workspace state, allowing the Web UI to sync to a phone/tablet, work offline, and merge edits. This is the missing piece for "spatial context" — your board follows you.
3. **First-Class File Canvas Attachments:** Make `DocumentNode` and `ImageNode` robust: drag a folder, get a node per file, with [[preview]]-on-hover, full-text search across all nodes (using `ripgrep` under the hood, exposing results as a new node type), and click-to-open in the default app.
4. **NPM Installation Bootstrapper:** Replace the CLI install story with `npx opencove`. The current PowerShell install script is Windows-first and breaks the moment GitHub releases rename. A simple `npx opencove` removes 90% of the friction.
5. **Opt-in Git Worktree Toggle:** Drop the worktree complexity into an opt-in "Power Mode." The current default tries to make worktrees invisible. Most users don't have multi-worktree needs. Hide it behind a toggle.

#### Technical Requirements
- Drop the Electron main process, rewrite `app/main/controlSurface` as a worker that runs on Node directly.
- Adopt `Yjs` for workspace state.
- Better TypeScript strictness on the persistence layer.
- Development timeline: **3-6 months**.

> [!danger] Risk & Tradeoffs
> You lose the macOS/Windows native feel (notifications, dock [[integration]], native file dialogs). However, you gain portability, lower download size, easier updates, and a real mobile story.

### Direction 3: "AI Workflow Recorder" (The Contrarian Path)

> [!info] The Bet
> **Most users actually want to watch [[agents]] work, not run them.** The canvas-first UI is the perfect medium for this. A "session recording" of an agent's thinking, decisions, and outputs, played back on a canvas with timestamped nodes, would be a genuinely new product.

#### Concrete Changes
1. **Automatic Session Recording:** Record every agent session automatically. Use the control-surface [[[[event]]]] stream to log every command, query, and [[[[event]]]]. Persist the recording alongside the workspace.
2. **Canvas TimeSlider:** A horizontal scrubber at the bottom of the canvas. Drag it and the canvas re-renders the state of the workspace at that exact moment. Every node's position, content, and edges are interpolated. Like a video editor timeline, but for agent work.
3. **Branch-Aware Playback:** When the agent did two things in parallel (e.g., spawned a sub-agent and continued its own work), the timeline shows them as parallel tracks. You can click a branch to "follow" it, or stay in the unified view.
4. **Annotation & Sharing:** Add the ability to mark a moment in the timeline, add a comment, and export that moment as a shareable link that opens to the same canvas state.
5. **Branch Diffing:** When the agent made a decision, jump to a diff of the workspace state before/after that decision.

#### Technical Requirements
- A timeline metadata format (probably append-only [[[[event]]]] log keyed by timestamp + `workspace_id` + `session_id`).
- A canvas renderer that can hydrate from any point in the timeline.
- Disk format for time-indexed snapshots (probably SQLite with an [[[[event]]]] table).
- Development timeline: **4-8 months**.

> [!danger] Risk
> No one has built this. The market is unproven. But if it works, you become the **"Loom for AI [[agents]]"** — a category-defining product.

### Direction 4: "Compliance-Aware Agent Workspace" (The Enterprise Niche Path)

> [!info] The Bet
> **Enterprises will adopt agentic coding inside regulated industries (finance, healthcare, government).** The blocker isn't the agent itself — it's the audit trail. A canvas where every agent action is recorded, signed, and queryable, with role-based visibility, would be the only one of its kind.

#### Concrete Changes
1. **Immutable Audit Trails:** Append-only audit log on every node mutation, every IPC call, and every worktree change.
2. **Redaction Primitives:** Admins can mark a node as containing PII/secrets. The canvas shows it as redacted, but the audit log retains the full text with role-based access.
3. **Signed Timeline Export:** Every session produces a tarball with a signed manifest for verification.
4. **Per-Action Policy Engine:** Block [[agents]] from writing to `secrets/**` or require human approval for actions like `git push`.
5. **Compliance Reporting:** Out-of-the-box SOC 2 evidence (e.g., *"all agent actions in the last 90 days are recorded and tamper-evident"*).

> [!danger] Risk & Timeline
> Boring to build. But very lucrative.
> Development timeline: **4-6 months**.

---

## Strategic Recommendation

> [!tip] Which path should you choose?
> - **If optimizing for Impact:** **Direction 1 (Spatial IDE for AI Teams)**. It builds on OpenCove's strongest asset (the canvas) and goes where the market is going. It's also the hardest, so you'll learn the most.
> - **If optimizing for Speed & Shipping:** **Direction 2 (Local-First, Cloud-Optional)**. The codebase is 70% of the way there. The Web UI + CLI + worker pattern is already a real product. You just need to commit to it and drop the Electron shell.
> - **If optimizing for Differentiation:** **Direction 3 (AI Workflow Recorder)**. Highest upside, lowest competition, hardest to validate.
> - **If optimizing for Revenue:** **Direction 4 (Compliance-Aware)**. Slow but real money.

---

## Tactical Refactoring Suggestions

Regardless of the strategic direction selected, these tactical improvements will address technical debt:

### 1. Consolidate File-Fractured Hooks
Cut the file-fractured hooks down by 5x (e.g., `useInteractions.selectionRectToggle.ts`, `useInteractions.terminalCreation.ts`, `useInteractions.websiteContextMenu.ts`, `useInteractions.clientPoint.ts`, `useInteractions.types.ts`). Merge them. The graph shows 1,268 isolated nodes in `contexts/workspace/presentation/...`; most of those are the result of this over-decomposition.
> [!tip] Rule of Thumb
> If a file is `<50` lines and is imported by exactly one other file in the same directory, inline it.

### 2. Unify the IPC Pathway
Pick one path for IPC: direct or control-surface, not both. Currently you have `pty.spawn(...)` and a `controlSurface.invoke({ kind: 'pty.spawn', ... })`. Pick one. The `control-surface` path is better for cross-process typed contracts; the direct path is better for ergonomics. I'd go control-surface only, with the renderer being a thin client.

### 3. Promote Case Studies to Regression Tests
`docs/cases/` contains records of Vitest electron mock issues, xterm hit-test anomalies, and multi-worktree testing. These are real bugs. Each case study should be a test file in `tests/cases/` that fails if the bug regresses. The current [[setup]] is *"write a doc, hope someone reads it."* That's not how you keep bugs from coming back.

### 4. Flatten Renderer DDD Nesting
The renderer is a React app. It doesn't need `contexts/workspace/application/` — it needs `features/workspace/hooks/`, `features/workspace/components/`, `features/workspace/state/`. The DDD context structure makes sense for the backend (main process, workers, IPC), where you have clear bounded contexts. The renderer is a UI; it should follow UI conventions.

### 5. Establish a Type-Safety Budget in CI
Add a `tsc --noEmit` budget to the CI. The codebase has 1,056 TS files, and the graph shows type leakage. Set a hard cap on `OpenCoveApi` surface size (currently 165 methods, 208 lines, 80+ imports) — every PR that adds a method should justify why it can't be added to the control-surface registry instead. A 200-line cap is a real forcing function.

### 6. Preserve Documentation [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[Standards]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
The `[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[README]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]` is great, and the architecture docs are unusually thorough for an alpha. Don't lose that voice when you fork. The documents `docs/architecture/STORE_REACTIVITY.md`, `docs/architecture/CONTROL_SURFACE.md`, and the clean-layer [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[template]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] in `docs/architecture/ARCHITECTURE.md` are excellent. Preserve them.

---

## Summary Outlook

> [!summary] TL;DR
> The OpenCove codebase is in better shape than its alpha badge suggests. The architecture is genuinely thoughtful, the control-surface pattern is correct, and worktree isolation is a real differentiator.
> 
> **Main Weaknesses:** The renderer's [[file structure]] (1,268 isolated nodes, 5+ files per hook) and the duplicate IPC paths (direct IPC + control-surface invoke).
> 
> **Next Steps:** Pick your fork direction based on your 18-month vision:
> - **Direction 1 (Spatial IDE for AI Teams)** has the highest potential success rate because the canvas-first UX is OpenCove's moat, and multi-agent orchestration is the obvious next market.
> - **Direction 2 (Local-First, Web UI Primary)** is the most shippable and cleanest product pathway.

---

## Action Items & Notes [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[Template]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] Checklist
- [ ] [[Review]] the `docs/architecture/` folder in OpenCove source.
- [ ] Determine the target fork direction (Direction 1 or 2 recommended).
- [ ] Run a test compile with `tsc --noEmit` on the codebase.
- [ ] Sketch out the initial team primitive database schema (if going with Direction 1).