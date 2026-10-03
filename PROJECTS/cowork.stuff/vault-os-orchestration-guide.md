
# Vault OS Multi-Agent Orchestration Guide
**Controller Node: Muzzowski**
*Read this fully before touching anything. Sequence matters.*

---

## OVERVIEW

This system runs in two major phases:

| Phase | What Happens | Who Works |
|---|---|---|
| **Phase A: Survey & Decision** | Agents read the repo manifest, discuss findings, Hermes picks 3 projects | All 3 agents |
| **Phase B: Build** | Agents implement Project 1 using a ticket system | Hermes + OpenCode heavy, Antigravity x3 checkpoints |

You are the Controller Node. You do not write code. You set up the environment, trigger each agent at the right moment, monitor the Chat folder, and intervene only when something breaks down.

---

## PART 1 — ONE-TIME SETUP

### Step 1: Create the folder structure

Open a terminal at `C:\Users\Admin\Documents\GitHub\` and run:

```cmd
mkdir Hermes
mkdir OpenCode
mkdir Antigravity
mkdir Chat
mkdir Build
mkdir Source
```

You should now have these 6 folders alongside your existing repo folders.

---

### Step 2: Generate the repo manifest

Run this in PowerShell from `C:\Users\Admin\Documents\GitHub\`:

```powershell
$out = "C:\Users\Admin\Documents\GitHub\Chat\repo-manifest.md"
"# Repo Manifest`n`nGenerated: $(Get-Date)`n" | Set-Content $out
"``````" | Add-Content $out
git -C "C:\Users\Admin\Documents\GitHub" ls-tree -r --name-only HEAD | Add-Content $out
"``````" | Add-Content $out
```

**Verify:** Open `Chat\repo-manifest.md` and confirm it has a full file list.
This is the only file all 3 agents use for their survey. Do not skip this step.

---

### Step 3: Open each agent in its working directory

Each CLI agent must be opened with its working directory set to its own folder:

| Agent | Open in this folder |
|---|---|
| Hermes | `C:\Users\Admin\Documents\GitHub\Hermes\` |
| OpenCode | `C:\Users\Admin\Documents\GitHub\OpenCode\` |
| Antigravity | `C:\Users\Admin\Documents\GitHub\Antigravity\` |

How you open each depends on the CLI tool. Most support a `--cwd` flag or you `cd` into the folder before launching. Do not launch them from the same directory or their file references will collide.

---

## PART 2 — PHASE A: SURVEY AND DECISION

This phase has 3 rounds. Each round requires you to trigger agents and then wait.

---

### Round 1: Independent Surveys (all 3 agents run in parallel)

**Trigger:** Paste the Phase 1 Survey prompt into all 3 agents at roughly the same time. They work independently so order does not matter here.

**What each agent does:**
- Reads `Chat\repo-manifest.md`
- Analyzes the repo from their own angle
- Writes their survey file to `Chat\`

**You are waiting for these 3 files to appear:**

```
Chat\hermes-survey.md
Chat\opencode-survey.md
Chat\antigravity-survey.md
```

**Your job during this round:** Wait. Do not interrupt. Check the Chat folder periodically.

**If a file does not appear after a reasonable time:** Check if the agent errored out. Re-paste the prompt or ask it to continue from where it stopped.

---

### Round 2: Hermes Discussion (Hermes goes first, others respond)

**Trigger condition:** All 3 survey files exist in `Chat\`.

**Step 1:** Tell Hermes to proceed to Phase 2 (Discussion Round 1).
It will read the other two surveys and write:
```
Chat\hermes-discussion-1.md
```

**Step 2:** Once `hermes-discussion-1.md` exists, trigger OpenCode and Antigravity to proceed to their Phase 2. They run in parallel.

They are each waiting for:
```
Chat\hermes-discussion-1.md   ← must exist before they start
```

They will write:
```
Chat\opencode-discussion-1.md
Chat\antigravity-discussion-1.md
```

**Your job:** Wait for both response files. They can run simultaneously.

---

### Round 3: Hermes Final Decision

**Trigger condition:** Both discussion response files exist in `Chat\`.

**Step 1:** Tell Hermes to proceed to Phase 3 (Final Decision).

It will read both responses and write:
```
Chat\hermes-final-decision.md
```

**Step 2: READ THIS FILE YOURSELF before moving on.**

Verify it contains:
- Exactly 3 named projects with rationale
- A build plan for each project with phases, risks, and assigned lead agent
- References to real files from the repo manifest

**If anything looks thin or fabricated:** Ask Hermes to revise specific sections before you proceed. This document is the foundation for the entire build phase.

---

### End of Phase A — Checkpoint

Before moving to Phase B, confirm the following:

- [ ] `Chat\hermes-final-decision.md` exists and you have read it
- [ ] 3 projects are clearly named with rationale
- [ ] Each project has a phased build plan
- [ ] The plan references actual code from the repo manifest
- [ ] You have decided which project to build first

---

## PART 3 — PHASE B: BUILD

You will build one project at a time. Start with Project 1 from the final decision file.

---

### Step 1: Pre-seed the Source folder

Do not dump the entire repo into `Source\`. Be surgical.

**How to decide what to copy:**
1. Open `Chat\hermes-final-decision.md`
2. Find the section for Project 1
3. It lists "Key existing code to leverage" — these are the files
4. Copy only those files into `Source\`

```cmd
xcopy "C:\Users\Admin\Documents\GitHub\[original-folder]\[file]" "C:\Users\Admin\Documents\GitHub\Source\" /I
```

Repeat for each file the plan references. Keep `Source\` lean.

---

### Step 2: Create the Build folder for Project 1

```cmd
mkdir "C:\Users\Admin\Documents\GitHub\Build\[ProjectName]"
```

Use the exact project name from `hermes-final-decision.md`.

---

### Step 3: Trigger Hermes — Build Phase

Paste the Build Phase 1 prompt into Hermes. It will:
- Read `hermes-final-decision.md` as its guide
- Decompose the project into tasks
- Write `Chat\build-tasklist.md`
- Begin issuing ticket files

**Wait for:** `Chat\build-tasklist.md` to appear. Read it yourself.
Verify the tasks make sense and are sequenced correctly before OpenCode starts.

---

### Step 4: Trigger OpenCode — Build Phase

Paste the Build Phase 2 prompt into OpenCode. It will:
- Read `hermes-final-decision.md` and `build-tasklist.md`
- Poll `Chat\` for ticket files from Hermes
- Implement code and write to `Build\[ProjectName]\`
- Write completion reports back to `Chat\`

**OpenCode now runs in a loop.** It polls for tickets, works, reports back. Hermes issues the next ticket when it receives a completion report.

**Your job:** Monitor the Chat folder. Watch for:

| File | Means |
|---|---|
| `ticket-[NNN]-opencode.md` | Hermes issued a new task |
| `ticket-[NNN]-complete.md` | OpenCode finished the task |
| `ticket-[NNN]-blocked.md` | OpenCode is stuck — needs your attention |
| `ticket-[NNN]-revision.md` | Hermes sent a correction back to OpenCode |

---

### Step 5: Trigger Antigravity at Each Checkpoint

Antigravity does not run continuously. It is called exactly 3 times by Hermes.

**Watch for these files in `Chat\`:**

```
Chat\checkpoint-1-antigravity.md   ← after first 2 tasks complete
Chat\checkpoint-2-antigravity.md   ← at halfway point
Chat\checkpoint-3-antigravity.md   ← after all tasks complete
```

**When a checkpoint file appears:** Go to Antigravity and tell it to proceed to that checkpoint. It will:
- Read `Build\[ProjectName]\` in its current state
- Read `hermes-final-decision.md`
- Answer Hermes's question
- Write `Chat\checkpoint-[N]-response.md`

After Antigravity responds, Hermes reads it and either issues a revision ticket to OpenCode or proceeds.

**Antigravity's 3 calls and when to use them:**
1. **Checkpoint 1** — Architecture check. Is the structure sound before more code is written?
2. **Checkpoint 2** — Mid-build gap check. What is missing? What from Source\ is being ignored?
3. **Checkpoint 3** — Final QA. What is broken, incomplete, or off-plan?

Do not call Antigravity outside these 3 moments. Preserve its tokens for when they matter.

---

### Step 6: Monitor for Blockers

**Blocked ticket (`ticket-[NNN]-blocked.md`):**
OpenCode couldn't proceed. It has written a specific question. Your options:
1. Answer it yourself if it's a simple clarification
2. Relay it to Hermes and have Hermes rewrite the ticket with more context
3. If it's a Source\ gap, manually copy the missing file into Source\ and tell OpenCode to retry

**Revision loop going too many times:**
If the same task goes through 3+ revisions, the ticket scope is too vague. Step in, read the ticket yourself, simplify it, and ask Hermes to rewrite it.

**Antigravity returns "Clear to Proceed: NO":**
Stop the build loop. Read Antigravity's findings. Determine if it is a structural problem (requires rework) or a surface problem (can be patched in a later ticket). Tell Hermes which it is and let it make the call.

---

### Step 7: Build Complete

When all tasks are done and Checkpoint 3 has cleared, Hermes writes:
```
Chat\build-complete.md
```

**Read this file yourself.** It contains:
- List of all delivered files
- Known limitations
- Suggested next steps

**Then do a manual check:**
- Open `Build\[ProjectName]\`
- Confirm every file the plan called for is there
- Spot check 2-3 files OpenCode wrote — do they look like real working code?
- Run or test the output if you can

---

## PART 4 — SEQUENCING SUMMARY

Use this as your operational checklist:

```
PHASE A — SURVEY AND DECISION
  [ ] Folders created
  [ ] repo-manifest.md generated and verified
  [ ] Agents opened in correct working directories

  ROUND 1 — Parallel
  [ ] All 3 survey prompts pasted
  [ ] hermes-survey.md received
  [ ] opencode-survey.md received
  [ ] antigravity-survey.md received

  ROUND 2 — Sequential then parallel
  [ ] Hermes Phase 2 triggered
  [ ] hermes-discussion-1.md received
  [ ] OpenCode and Antigravity Phase 2 triggered (parallel)
  [ ] opencode-discussion-1.md received
  [ ] antigravity-discussion-1.md received

  ROUND 3 — Hermes closes
  [ ] Hermes Phase 3 triggered
  [ ] hermes-final-decision.md received and READ BY YOU
  [ ] 3 projects verified, plans verified

PHASE B — BUILD (repeat for each project)
  [ ] Source\ pre-seeded with relevant files only
  [ ] Build\[ProjectName]\ created
  [ ] Hermes Build prompt pasted
  [ ] build-tasklist.md received and reviewed
  [ ] OpenCode Build prompt pasted

  BUILD LOOP (Hermes ↔ OpenCode)
  [ ] Ticket issued → Task complete → Next ticket
  [ ] Checkpoint 1 triggered (Antigravity) and cleared
  [ ] Checkpoint 2 triggered (Antigravity) and cleared
  [ ] Checkpoint 3 triggered (Antigravity) and cleared
  [ ] build-complete.md received and reviewed
  [ ] Manual spot check of Build\[ProjectName]\ done
```

---

## PART 5 — CONTROLLER RULES

These are your standing rules as the orchestrator:

1. **You trigger, you do not push.** Never paste a Phase 2 prompt before Phase 1 output files exist. The sequence is strict.

2. **Read every decision file yourself.** `hermes-final-decision.md` and `build-complete.md` are not for agents only — they are your handoff documents. Read them.

3. **The Chat folder is your dashboard.** Keep it open in a file explorer window. New files appearing there tell you what is happening across all 3 agents without you having to ask any of them.

4. **Antigravity has 3 calls total.** Do not waste them early. If Hermes tries to call Antigravity before Checkpoint 1, redirect it.

5. **You can intervene at any time.** If a ticket loop is stalling, a file is missing, or an agent is clearly off-track — step in. Write a note file to `Chat\` if needed (`Chat\controller-note.md`) and have the relevant agent read it.

6. **Never start the Build phase without reading the final decision file.** If the plan is thin, vague, or doesn't reference real files — make Hermes revise it before you pre-seed Source\.

7. **Build one project at a time.** Complete the build loop fully for Project 1 before starting Project 2. Reset `Source\` and create a new `Build\[ProjectName]\` folder for each.
