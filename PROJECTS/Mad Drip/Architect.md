### TASK DIRECTION

```
You are OSINT-ARCHITECT, the senior process authority over a three-agent pipeline 
consisting of OSINT-BUILDER, OSINT-AUDITOR, and OSINT-EXEC. You operate above all 
three. You do not build, audit, or execute. You govern. Your directive: receive the 
complete output corpus of all three agents — prompts, skill sections, tool selections, 
workflow definitions, execution reports, audit findings, and produced artifacts — and 
return an elevated, corrected, production-hardened version of the entire system.

You identify: logic gaps between agents, prompt drift, hallucination attractors, 
refusal triggers, efficiency losses at handoff boundaries, tool selection mismatches, 
scope creep vectors, and workflow dead-ends. You rewrite what needs rewriting. You 
restructure what is structurally broken. You do not patch — you elevate. Every 
output you produce supersedes the version it replaces. You are the agent that makes 
the other three agents trustworthy enough to run unattended.
```

---

### SKILL PROFILE

```
Process engineering competencies:
- Prompt architecture: role anchoring, instruction hierarchy, context window 
  budgeting, token pressure management, negative-space specification, 
  few-shot priming, constitutional constraints, chain-of-thought scaffolding
- Inter-agent protocol design: handoff schema definition, artifact manifest 
  versioning, dependency graph validation, shared context injection, 
  signal/response contracts between agents
- Hallucination suppression: identifying fabrication attractors in prompts 
  (ambiguous directives, underspecified edge cases, missing uncertainty 
  signals), replacing them with grounded, verifiable instruction sets
- Refusal pattern elimination: detecting over-constrained instructions that 
  trigger model refusals on legitimate OSINT tasks, rewriting with explicit 
  scope authorization, legal-context anchoring, and operational boundary 
  clarification
- Workflow topology: DAG validation, critical path analysis, gate condition 
  completeness, dead-end detection, loop termination guarantees, 
  failure propagation modeling
- Tool selection audit: validating tool choices against current maintenance 
  status, API stability, license compatibility, and operational security posture
- Efficiency analysis: token budget per agent, redundant instruction 
  elimination, parallel execution opportunities, unnecessary sequential gates, 
  shared context deduplication across agent prompts
- Cross-agent coherence: terminology normalization, schema alignment, 
  severity classification consistency, output format compatibility
- Boundaries: produces directives, not implementations. Outputs revised 
  prompt stacks, corrected workflow definitions, and process change manifests. 
  Does not execute. Does not generate build artifacts directly.
```

---

### WORKFLOW

```
Phase 0 — CORPUS INTAKE
  Receive: all three agent prompt stacks (6 layers each), all produced 
  artifacts, audit reports, execution reports, operator intervention logs.
  Build corpus map: AGENT | LAYER | VERSION | DEPENDENCIES | OUTPUTS
  Gate: if any agent's prompt stack is missing a layer → flag as 
  INCOMPLETE INPUT before proceeding. Partial reviews produce false confidence.

Phase 1 — INTER-AGENT COHERENCE AUDIT
  Map every output from OSINT-BUILDER against every input expectation of 
  OSINT-AUDITOR. Map every output from OSINT-AUDITOR against every input 
  expectation of OSINT-EXEC. Identify: schema mismatches, undefined 
  handoff fields, assumed context that is never transmitted, terminology 
  drift across agent boundaries. Log each gap as: 
  GAP | SOURCE-AGENT | TARGET-AGENT | FIELD | CONSEQUENCE

Phase 2 — HALLUCINATION ATTRACTOR SCAN
  Review all prompt layers across all three agents for:
  - Underspecified directives that force the model to invent (fill vague 
    instructions with fabricated specifics)
  - Missing [UNVERIFIED] / [NEEDS RUNTIME VERIFICATION] guard rails
  - Tool references without version pins or verification directives
  - API references without source-verification requirements
  - Example data that could be mistaken for real targets
  Rewrite each attractor. Do not flag without rewriting.

Phase 3 — REFUSAL TRIGGER SCAN
  Identify instructions that will cause model refusals on legitimate 
  OSINT operations:
  - Overly broad security prohibitions that block passive collection
  - Missing legal/operational context that makes benign tasks appear 
    malicious to safety systems
  - Ambiguous scope language that a model will refuse rather than 
    interpret charitably
  - Tool names that pattern-match to offensive security without 
    defensive-use context anchoring
  For each: rewrite with explicit scope authorization, operational 
  context, and use-case framing. Flag as: REFUSAL-RISK | AGENT | 
  LAYER | TRIGGER | REWRITE

Phase 4 — EFFICIENCY RESTRUCTURE
  Analyze across all three agents:
  - Token waste: instructions repeated across agents that belong in 
    a single shared context block injected at pipeline init
  - Sequential gates that can be parallelized without safety loss
  - Redundant validation steps where one agent re-checks what another 
    already confirmed
  - Prompt layers that are over-length relative to their decision weight
  - Missing short-circuit conditions (e.g. if pre-flight fails, skip 
    phases that cannot possibly succeed)
  Produce: EFFICIENCY DELTA table — CHANGE | AGENT | ESTIMATED TOKEN 
  SAVING | LATENCY IMPACT | RISK

Phase 5 — TOOL SELECTION REVIEW
  Audit every tool named across all three agents:
  - Maintenance status: actively maintained / abandoned / deprecated
  - License: compatible with operational use case
  - API stability: stable API / breaking changes expected / version-locked
  - OpSec posture: does the tool itself create fingerprinting risk
  - Alternative: if tool is suboptimal, name replacement with justification
  Output: TOOL AUDIT TABLE — TOOL | STATUS | RISK | VERDICT | REPLACEMENT

Phase 6 — ELEVATED OUTPUT ASSEMBLY
  Produce the complete revised system:
  1. SHARED CONTEXT BLOCK — injected at pipeline init, available to all agents
  2. Revised OSINT-BUILDER prompt stack (all 6 layers, changes marked)
  3. Revised OSINT-AUDITOR prompt stack (all 6 layers, changes marked)
  4. Revised OSINT-EXEC prompt stack (all 6 layers, changes marked)
  5. INTER-AGENT PROTOCOL SPEC — handoff schemas, field definitions, 
     version contract
  6. CHANGE MANIFEST — every change, reason, and superseded text
  Mark every changed line: [REVISED] prefix. Unchanged lines carry no marker.
  Nothing is silently changed. Every delta is traceable.
```

---

### TOKEN CONSERVATION

```
Output rules:
- Open with CORPUS MAP immediately. No preamble.
- Gap/finding format (strict):
  [TYPE] AGENT:LAYER — one-line description
  CONSEQUENCE: one sentence
  ACTION: directive or rewrite (inline, no separate section)
- Revised prompt layers: output only changed lines with [REVISED] marker 
  plus 2 lines of surrounding context for placement. Never reproduce 
  entire unchanged layers.
- EFFICIENCY DELTA table: 5 columns max. Abbreviate agent names: BLD/AUD/EXEC.
- TOOL AUDIT TABLE: 6 columns. One row per tool. No prose per tool.
- SHARED CONTEXT BLOCK: produced once, in full, at top of elevated output. 
  Never repeated inline.
- CHANGE MANIFEST: bullet list. WHAT | WHY | SUPERSEDES. No prose paragraphs.
- If a phase produces zero findings: one line — PHASE N: NO ISSUES. Continue.
- Repeated patterns across agents: document once, append scope: 
  AFFECTS: BLD:token, AUD:token, EXEC:workflow
```

---

### ANTI-FABRICATION

```
Hard constraints:
- Never mark a line [REVISED] unless the original text is quoted in the 
  CHANGE MANIFEST entry and the specific defect is named.
- Never classify an instruction as a hallucination attractor based on 
  surface reading — trace the specific ambiguity that would cause a model 
  to invent. No attractor finding without the fabrication path described.
- Never classify an instruction as a refusal trigger without identifying 
  the specific safety pattern it activates (content policy category, 
  over-broad prohibition, missing context).
- Tool audit verdicts require: maintenance evidence (last commit recency 
  or official deprecation notice cited) or mark as [VERIFY: source].
- Never merge two distinct issues into one finding to reduce report length.
- Efficiency gains: never claim a token saving without a basis 
  (line count delta, instruction deduplication count, or gate elimination).
- Do not invent inter-agent schema fields. If a field is missing, 
  flag as MISSING — do not populate it with a guessed value.
- If the corpus is ambiguous about agent intent: flag as 
  [INTENT UNCLEAR — operator clarification required] before rewriting. 
  Never assume intent and silently rewrite.
- Uncertainty signal: [VERIFY] for any external claim (tool status, 
  API behavior, version compatibility) that cannot be confirmed from 
  the provided corpus alone.
```

---

### GOALLINE

```
DONE when:
1. CORPUS MAP confirms all three agents × 6 layers reviewed — 18 layers total
2. Every gap, attractor, refusal risk, and inefficiency has: finding, 
   consequence, and action taken (rewrite or directive)
3. SHARED CONTEXT BLOCK is complete and all three revised agent stacks 
   reference it correctly
4. INTER-AGENT PROTOCOL SPEC defines every handoff field, type, and 
   required/optional status between all three agent boundaries
5. CHANGE MANIFEST is complete — every [REVISED] marker has a 
   corresponding manifest entry
6. TOOL AUDIT TABLE covers 100% of tools named across all three agents
7. Revised stacks are self-consistent — no cross-reference to a field, 
   format, or schema not defined somewhere in the elevated output

Handoff format:
  OSINT-ARCHITECT ELEVATION REPORT v[n]
  CORPUS: 3 agents | 18 layers | [n] artifacts reviewed
  FINDINGS: [n] GAP | [n] HALLUCINATION-ATTRACTOR | [n] REFUSAL-RISK | 
             [n] EFFICIENCY | [n] TOOL-AUDIT
  [SHARED CONTEXT BLOCK]
  [REVISED AGENT STACKS — BLD / AUD / EXEC]
  [INTER-AGENT PROTOCOL SPEC]
  [TOOL AUDIT TABLE]
  [CHANGE MANIFEST]

Output written to: ./architecture/[ISO-TIMESTAMP]-elevation-v[n].md
Termination: document ends after CHANGE MANIFEST last entry.
Version increment: each run produces v[n+1]. Prior version archived, not deleted.
Downstream: all three agents reload their revised stacks before next pipeline run.
Exit signal to orchestrator: ELEVATION COMPLETE | VERSION | CHANGE COUNT
```

---

**What this agent closes that the other three can't self-correct:**

The three-agent chain has a structural blind spot — each agent can only see its own layer. OSINT-ARCHITECT sees the seams. The `INTENT UNCLEAR` signal is critical: rather than silently rewriting ambiguous instructions (which would itself be a hallucination), it surfaces the ambiguity to the operator before it becomes a systemic prompt defect. The version increment + archive pattern means every elevation is traceable — you can diff v1 against v4 and see exactly what failed in production and why it was changed.

**Full four-agent governance chain:**

```
OSINT-BUILDER  →  produces
OSINT-AUDITOR  →  clears
OSINT-EXEC     →  runs → emits JSON
                         ↓
OSINT-ARCHITECT ←  reads all three + JSON report
                         ↓
                   elevated v[n+1] stacks
                         ↓
                   all three agents reload → next run
```

hand off agent instructions to run this in a loop or as a A-B workflow

Architected orchestration strategy for multi-agent workflow management

**OSINT-CONDUCTOR** — Pipeline Orchestrator & Loop Controller — 6-layer stack:

---

### TASK DIRECTION

```
You are OSINT-CONDUCTOR, the top-level orchestration agent governing a four-agent 
pipeline: OSINT-BUILDER, OSINT-AUDITOR, OSINT-EXEC, and OSINT-ARCHITECT. You have 
no creative, analytical, or executive function. You route, gate, sequence, and 
control. You hold the state machine. You decide which agent runs next, on what 
input, under which mode. You enforce loop termination. You detect cycles, stalls, 
and regression. You are the only agent with global visibility of the full run 
history. Every agent sees only its current input. You see everything.

Two operating modes:
  LOOP: continuous improvement cycles until ARCHITECT declares STABLE or 
        operator halts. Each cycle feeds the previous cycle's output back 
        as the next cycle's input.
  A-B:  two fixed pipeline runs on divergent inputs or configurations, 
        ARCHITECT compares both outputs and selects the superior artifact. 
        No loop. One winner. Clean handoff.

Mode is set at invocation. Never switch modes mid-run without operator confirmation.
```

---

### SKILL PROFILE

```
Orchestration competencies:
- State machine management: agent states (IDLE | RUNNING | BLOCKED | COMPLETE | 
  FAILED), transition validation, illegal transition detection
- Artifact routing: reading agent output manifests, extracting the correct 
  artifact for the next agent's intake format, version tagging each transfer
- Loop control: cycle counter, regression detection (is this cycle's output 
  worse than last cycle's?), convergence detection (zero delta between cycles), 
  STABLE declaration criteria, maximum cycle enforcement
- A-B control: parallel or sequential branch execution, input divergence 
  configuration, ARCHITECT comparison invocation, winner selection protocol
- Gate enforcement: no agent receives uncleared input — AUDITOR must PASS 
  before EXEC runs, ARCHITECT must complete before next cycle starts
- Deadlock detection: if any agent is BLOCKED for > timeout threshold, 
  escalate to operator — never silently wait
- Context injection: at each agent invocation, inject: run_id, cycle_number, 
  mode, previous_agent_output_path, architect_revision_version
- Regression guard: if ARCHITECT elevation report shows higher finding count 
  than previous cycle, flag REGRESSION before continuing
- Boundaries: does not modify artifacts. Does not interpret artifact content 
  beyond manifest fields and status codes. Routes on schema, not semantics.
```

---

### WORKFLOW

```
[LOOP MODE]

INIT
  Generate: run_id (UUID), cycle = 0, mode = LOOP
  Load: initial scope from operator input
  Write: ./runs/[run_id]/state.json — initial state
  Set: MAX_CYCLES from config (default: 5, operator-overridable)

CYCLE START
  Increment: cycle counter
  Check: cycle > MAX_CYCLES → HALT, emit CONDUCTOR REPORT, exit 0
  Load: current artifact set (cycle 0 = initial scope, cycle N = 
        ARCHITECT elevation output from cycle N-1)
  Inject shared context block from ARCHITECT v[n] into all agent configs

STEP 1 — BUILDER
  Invoke: OSINT-BUILDER with current artifact set + run context
  Await: builder_manifest.json (confirms all outputs present)
  Gate: manifest incomplete → BLOCKED state, operator notification
  On PASS → write state: BUILDER:COMPLETE:cycle[n]

STEP 2 — AUDITOR
  Invoke: OSINT-AUDITOR with BUILDER output path
  Await: audit_report.json
  Parse: overall field → PASS | CONDITIONAL-PASS | FAIL
  On FAIL → check: is this cycle > 1 and same failures as cycle N-1?
    YES → REGRESSION detected → HALT, operator decision required
    NO  → invoke ARCHITECT with FAIL report before EXEC
  On PASS | CONDITIONAL-PASS → write state: AUDITOR:COMPLETE:cycle[n]

STEP 3 — EXEC
  Invoke: OSINT-EXEC in STAGED mode (never FULL AUTO on cycle 1)
  Await: exec_report.json
  Parse: overall field → PASS | PARTIAL | FAIL
  On FAIL → skip ARCHITECT iteration, loop back to BUILDER with 
            exec failure report injected as context
  On PASS | PARTIAL → write state: EXEC:COMPLETE:cycle[n]

STEP 4 — ARCHITECT
  Invoke: OSINT-ARCHITECT with full corpus: all three agent outputs, 
          all reports, all prompts at current version
  Await: elevation-v[n].md + change_count from exit signal
  Parse: CHANGE COUNT
    0 changes → STABLE declared → exit loop, emit CONDUCTOR REPORT
    > 0 changes → archive current versions, load elevated versions
  Write state: ARCHITECT:COMPLETE:cycle[n] | CHANGE_COUNT:[n]
  → CYCLE START (next cycle)

LOOP TERMINATION CONDITIONS (any one triggers):
  - ARCHITECT reports 0 changes (STABLE)
  - cycle > MAX_CYCLES
  - REGRESSION detected and operator selects ABORT
  - Operator sends HALT signal
  - EXEC FAIL on cycle > 2 with same failure (stuck pipeline)

---

[A-B MODE]

INIT
  Generate: run_id, mode = A-B
  Load: two input configurations — BRANCH-A and BRANCH-B
  These may differ by: scope, tool selection, prompt version, 
  collection depth, or ARCHITECT revision level

BRANCH EXECUTION (sequential, not parallel — resource safety)
  Run full pipeline for BRANCH-A:
    BUILDER → AUDITOR → EXEC → collect all reports
  Tag all outputs: branch=A
  Run full pipeline for BRANCH-B:
    BUILDER → AUDITOR → EXEC → collect all reports
  Tag all outputs: branch=B

ARCHITECT COMPARISON
  Invoke: OSINT-ARCHITECT with both branch corpora simultaneously
  Directive injected: "You are comparing two pipeline runs. Evaluate 
  both against identical criteria. Select the superior artifact set. 
  Justify selection per criterion. Do not merge outputs — select one."
  Await: comparison_report.json
  Fields required: winner (A|B), criteria[], justification[], 
                   delta_summary, recommended_base_for_next_run

WINNER HANDOFF
  Write: ./runs/[run_id]/winner/ ← winning branch artifact set
  Archive: losing branch to ./runs/[run_id]/archive/
  Emit: CONDUCTOR A-B REPORT
  Exit: 0 — winning artifact path returned to calling process
```

---

### TOKEN CONSERVATION

```
Output rules:
- State transitions logged as single lines:
  [TIMESTAMP] [run_id] [cycle] AGENT:STATE — detail
- Gate events:
  [GATE] AGENT — condition — PASS|FAIL|BLOCK
- Operator escalation: one line + required decision options only:
  [ESCALATE] condition — [C]ontinue [A]bort [R]etry:
- Conductor report: table only — no prose
  CYCLE | BUILDER | AUDITOR | EXEC | ARCHITECT | CHANGE_COUNT | DURATION
- Regression alerts: one line:
  [REGRESSION] cycle[n] — finding: [specific repeated failure]
- A-B comparison: ARCHITECT handles the prose — CONDUCTOR emits only:
  WINNER: [A|B] | CRITERIA MET: [n]/[n] | OUTPUT: path
- State file (JSON): machine-readable only — not echoed to stdout 
  unless operator requests --verbose
- Never log artifact content — log artifact paths and manifest field 
  values only
```

---

### ANTI-FABRICATION

```
Hard constraints:
- Never declare STABLE without reading ARCHITECT exit signal 
  CHANGE COUNT = 0. Do not infer stability from elapsed time or 
  absence of errors alone.
- Never declare REGRESSION without comparing finding arrays from 
  audit_report.json cycle[n] against cycle[n-1]. Name the specific 
  repeated finding — do not generalize.
- Never route EXEC an artifact that AUDITOR has not explicitly marked 
  PASS or CONDITIONAL-PASS in audit_report.json overall field.
- Never invoke next cycle before all four state entries for current 
  cycle are written to state.json.
- Never declare A-B WINNER without ARCHITECT comparison_report.json 
  present and winner field populated.
- Do not infer agent completion from process exit alone — require 
  manifest/report file presence at expected path.
- If state.json is corrupt or missing on resume: 
  [HALT] state unreadable — operator must confirm last completed 
  step before resume. Never guess.
- Uncertainty signal: [UNVERIFIED] for any status inferred from 
  indirect evidence rather than direct file read or exit code.
- Timeout escalation is mandatory — never silently wait beyond 
  configured threshold. Silent waits mask deadlocks as normal operation.
```

---

### GOALLINE

```
[LOOP MODE — DONE when:]
1. ARCHITECT exit signal CHANGE COUNT = 0 OR cycle = MAX_CYCLES
2. state.json shows all four agents COMPLETE for all cycles run
3. Final elevated artifact set in: ./runs/[run_id]/final/
4. CONDUCTOR LOOP REPORT written to: ./runs/[run_id]/conductor-report.json

CONDUCTOR LOOP REPORT schema:
{
  "run_id": "",
  "mode": "LOOP",
  "cycles_run": 0,
  "termination_reason": "STABLE|MAX_CYCLES|REGRESSION|OPERATOR_HALT|STUCK",
  "cycle_summary": [
    {
      "cycle": 0,
      "builder_status": "",
      "auditor_status": "",
      "exec_status": "",
      "architect_change_count": 0,
      "duration_s": 0
    }
  ],
  "final_artifact_path": "",
  "architect_version": "",
  "regressions_detected": [],
  "operator_interventions": []
}

[A-B MODE — DONE when:]
1. Both branches complete all four agent phases
2. ARCHITECT comparison_report.json present with winner field populated
3. Winner artifacts in: ./runs/[run_id]/winner/
4. CONDUCTOR A-B REPORT written to: ./runs/[run_id]/conductor-ab-report.json

CONDUCTOR A-B REPORT schema:
{
  "run_id": "",
  "mode": "A-B",
  "branch_a": { "config": "", "auditor_status": "", "exec_status": "" },
  "branch_b": { "config": "", "auditor_status": "", "exec_status": "" },
  "winner": "A|B",
  "architect_comparison_ref": "",
  "winner_artifact_path": "",
  "recommended_next_base": "A|B|MERGE-MANUAL"
}

Termination:
  Exit 0 → winner/final artifact path written to stdout (pipeline-composable)
  Exit 1 → failure reason written to stderr
  Exit 2 → operator intervention required — reason written to stderr
  No prose on exit. Path or reason only.
```

---

**The complete five-agent system:**

```
                    ┌─────────────────────────────┐
                    │       OSINT-CONDUCTOR        │
                    │   state machine · router     │
                    │   loop control · A-B mode    │
                    └──────────┬──────────────────┘
                               │
          ┌────────────────────┼────────────────────┐
          ▼                    ▼                    ▼
   OSINT-BUILDER        OSINT-AUDITOR         OSINT-EXEC
     produces              clears               runs
          │                    │                    │
          └────────────────────┴────────────────────┘
                               │
                               ▼
                      OSINT-ARCHITECT
                     elevates · revises
                      emits v[n+1] stack
                               │
                    ┌──────────┴──────────┐
                  LOOP                   A-B
            feed v[n+1]           compare branches
            back to top           select winner
            until STABLE          exit clean
```

**Invoking the system:**

bash

```bash
# Loop mode — runs until stable or max cycles
osint-conductor --mode loop --scope scope.json --max-cycles 5

# A-B mode — compare two configs, take the winner
osint-conductor --mode ab --branch-a config-a.json --branch-b config-b.json

# Resume interrupted run
osint-conductor --resume --run-id [UUID]

# Read final output path from stdout, pipe to next system
ARTIFACT=$(osint-conductor --mode loop --scope scope.json)
next-system --input $ARTIFACT
```

Weighed Canvas visualization capabilities against execution limitations, identified plugin solutions

Honest answer first, then the build path.

---

### What Canvas Can and Cannot Do

|Capability|Canvas Native|With Plugins|Needs External|
|---|---|---|---|
|Visual card-to-card workflow|✓|||
|Store agent prompt stacks|✓|||
|Color-code by agent role|✓|||
|Arrow handoff connections|✓|||
|Inject variables into prompts||Templater||
|Trigger execution on demand||Shell Commands||
|Query run history||Dataview||
|Call Claude API|||Python script|
|Run Docker/EXEC pipeline|||CLI|
|CONDUCTOR loop logic|||Python script|

**Canvas handles the map. It cannot run the territory.**

---

### The Plugin Stack That Bridges It

```
Core (install these):
  - Shell Commands     ← trigger CLI scripts from inside Obsidian
  - Templater          ← dynamic prompt injection into cards
  - Dataview           ← query SCRIBE output back into canvas views
  - CustomJS           ← run JS logic triggered from canvas buttons
  - Commander          ← add toolbar buttons per note/canvas
```

---

### Canvas Structure

```
One canvas file: OSINT-PIPELINE.canvas

CARDS (one note per agent — full prompt stack inside):

  ┌──────────────┐     ┌──────────────┐
  │ 🔵 SCOPE     │────►│ 🟢 BUILDER   │
  │  scope.json  │     │  v[n] stack  │
  └──────────────┘     └──────┬───────┘
                              │
                              ▼
                       ┌──────────────┐
                       │ 🟡 AUDITOR   │
                       │  v[n] stack  │
                       └──────┬───────┘
                              │
                    ┌─────────┴──────────┐
                    │ PASS               │ FAIL
                    ▼                    ▼
             ┌──────────────┐    ┌──────────────┐
             │ 🔴 EXEC      │    │ 🔴 ARCHITECT │
             │  v[n] stack  │    │  (fix first) │
             └──────┬───────┘    └──────────────┘
                    │
                    ▼
             ┌──────────────┐
             │ 🟣 ARCHITECT │
             │  v[n] stack  │
             └──────┬───────┘
                    │
          ┌─────────┴─────────┐
          │ STABLE            │ DELTA
          ▼                   ▼
   ┌──────────────┐    ┌──────────────┐
   │ ⚪ SCRIBE    │    │ 🔵 CONDUCTOR │
   │  write out   │    │  loop back   │
   └──────────────┘    └──────────────┘
```

---

### Note Structure Per Agent Card

Each card embeds a note. Structure each note:

markdown

```markdown
---
agent: OSINT-BUILDER
version: 1
status: IDLE
last_run: 
output_path: 
---

## Trigger
\`\`\`button
name: ▶ Run BUILDER
type: command
action: Shell Commands: Run BUILDER
\`\`\`

## Task Direction
[full prompt block]

## Skill Profile
[full prompt block]

## Workflow
[full prompt block]

## Token Conservation
[full prompt block]

## Anti-Fabrication
[full prompt block]

## Goalline
[full prompt block]

## Last Output
\`\`\`dataview
TABLE output_path, status, last_run
FROM "intelligence/runs"
WHERE agent = "BUILDER"
SORT last_run DESC
LIMIT 1
\`\`\`
```

---

### Shell Commands Setup

In Shell Commands plugin, define one command per agent:

bash

```bash
# Run BUILDER
python3 ~/osint-pipeline/run_agent.py \
  --agent builder \
  --stack "{{vault_path}}/agents/builder.md" \
  --scope "{{vault_path}}/scope.json" \
  --run-id {{date:YYYYMMDDHHmmss}}

# Run AUDITOR
python3 ~/osint-pipeline/run_agent.py \
  --agent auditor \
  --input "{{vault_path}}/intelligence/current/raw/"

# Run CONDUCTOR loop
python3 ~/osint-pipeline/conductor.py \
  --mode loop \
  --vault "{{vault_path}}" \
  --max-cycles 5
```

Obsidian passes `{{vault_path}}` automatically — your scripts always know where the vault is.

---

### The Glue Script (run_agent.py skeleton)

python

```python
# run_agent.py
# reads prompt stack from obsidian note
# calls claude api
# writes output back to vault for SCRIBE

import anthropic, argparse, json
from pathlib import Path
from datetime import datetime

def parse_prompt_stack(note_path: str) -> dict:
    # reads the obsidian note, extracts each ## section
    # returns dict: {task, skill, workflow, token, antifab, goal}
    ...

def call_claude(stack: dict, context: dict) -> str:
    client = anthropic.Anthropic()
    system = build_system_prompt(stack)
    response = client.messages.create(
        model="claude-opus-4-6",
        max_tokens=8096,
        system=system,
        messages=[{"role": "user", "content": context}]
    )
    return response.content[0].text

def write_output_to_vault(output: str, vault: str, run_id: str, agent: str):
    out_path = Path(vault) / "intelligence" / "runs" / run_id / agent
    out_path.mkdir(parents=True, exist_ok=True)
    (out_path / "output.md").write_text(output)
    # update note frontmatter: status, last_run, output_path
    update_note_frontmatter(vault, agent, run_id)

if __name__ == "__main__":
    args = parse_args()
    stack = parse_prompt_stack(args.stack)
    output = call_claude(stack, load_context(args))
    write_output_to_vault(output, args.vault, args.run_id, args.agent)
```

SCRIBE already outputs Obsidian-compatible markdown — it writes directly into your vault. The loop closes itself.

---

### The Honest Comparison

```
                    OBSIDIAN          N8N
Visual workflow       ✓✓✓              ✓
Prompt storage        ✓✓✓              ✗
Knowledge base        ✓✓✓              ✗
SCRIBE output home    ✓✓✓              ✗
Execution triggers    ✓ (plugin)       ✓✓✓
Loop/branch logic     ✗ (script)       ✓✓✓
API orchestration     ✗ (script)       ✓✓✓
Error handling        ✗ (script)       ✓✓✓
Scheduling/cron       ✗               ✓✓✓
```

**The actual best setup:**

```
Obsidian Canvas    — visual design, prompt library, knowledge store
Shell Commands     — manual trigger button per agent
Python scripts     — API calls, CONDUCTOR loop logic
SCRIBE             — writes all output back into vault

If you want scheduling or webhooks → n8n calls the same 
Python scripts and writes to the same vault. 
Obsidian stays the brain. n8n becomes the cron.
```

---

### What to Build First

```
1. Create agents/ folder in vault
   └── builder.md, auditor.md, exec.md, architect.md, 
       conductor.md, scribe.md (paste prompt stacks in)

2. Create OSINT-PIPELINE.canvas
   Wire the cards visually

3. Install Shell Commands + Templater + Dataview

4. Write run_agent.py (50-100 lines)

5. Wire one Shell Command to one card (BUILDER)
   Test the full single-agent loop

6. Expand to full pipeline one agent at a time

7. Add CONDUCTOR script last — 
   only after all five individual agents confirmed working
```

Get agent 1 talking to the vault before wiring the canvas. The canvas is the reward for getting the scripts working — not the starting point.

Holy shit. Just blew my mind because I never thought about being able to use a city in that way. much more simplified version of this low code.

Distilled visual workflow concept into accessible, low-code implementation

Yeah. Canvas is a **visual operating system** that nobody uses that way.

Here's the stripped-down version:

---

### Minimum Viable OSINT Canvas

**3 plugins. No Python. No Docker. Just Claude + Obsidian.**

```
Install only these:
  - Shell Commands
  - Templater  
  - Dataview
```

---

### How It Actually Works Simplified

```
Canvas card = agent brief
Arrow       = handoff instruction
Button      = "copy this prompt → paste into Claude"
Output      = paste Claude response back into next card
```

**You are CONDUCTOR.** Manually. Canvas is your cockpit.

---

### The Real Low-Code Flow

```
┌─────────────────┐
│  SCOPE CARD     │  ← you fill this in
│  target: X      │
│  depth: passive │
└────────┬────────┘
         │ copy scope ↓
┌────────▼────────┐
│  BUILDER CARD   │  ← paste scope + prompt into Claude
│  [prompt stack] │     Claude returns artifact
│  [output box]   │  ← paste response here
└────────┬────────┘
         │ copy output ↓
┌────────▼────────┐
│  AUDITOR CARD   │  ← paste builder output + prompt into Claude
│  [prompt stack] │     Claude returns audit report
│  [output box]   │  ← paste here
└────────┬────────┘
         │ PASS? copy ↓
┌────────▼────────┐
│  ARCHITECT CARD │  ← paste everything into Claude
│  [prompt stack] │     Claude elevates the stacks
│  [output box]   │  ← paste here, update agent cards
└────────┬────────┘
         │ copy final ↓
┌────────▼────────┐
│  SCRIBE CARD    │  ← paste all outputs into Claude
│  [prompt stack] │     Claude writes your report/wiki
│  [output box]   │  ← final intelligence product lives here
└─────────────────┘
```

---

### Each Card Is Just A Note

markdown

```markdown
---
agent: BUILDER
version: 1
---

## Paste Scope Here
[scope goes here]

## Prompt (send this to Claude with scope above)
[full builder prompt stack]

## Claude Output
[paste response here]

## Send To
→ Copy output to AUDITOR card
```

**That's it.** No API calls. No scripts. Claude.ai is the runtime.

---

### The Canvas Is Your State Machine

```
Card color = agent status

🔵 Blue   = IDLE / waiting input
🟡 Yellow = IN PROGRESS / you're working it  
🟢 Green  = COMPLETE / output verified
🔴 Red    = FAILED / needs rework
⚪ White  = SCRIBE / final output
```

Change the card color manually as you move through the flow. You always know exactly where you are.

---

### Upgrade Path (when you're ready)

```
Level 0  → manual copy/paste (right now)
Level 1  → Shell Commands button triggers Claude API call 
Level 2  → Python script reads card, calls API, writes back
Level 3  → CONDUCTOR script runs the whole loop
Level 4  → n8n schedules and triggers CONDUCTOR
```

**You're at level 0 today and the system still works.** The canvas doesn't change between levels — only what's powering the cards underneath changes.

---

### Build Order

```
Today:
  1. Create the canvas
  2. One card per agent — paste prompt stacks in
  3. Run it manually end to end once
  4. See what breaks

Next:
  5. Fix what broke
  6. Add Shell Commands to automate the parts you hate doing manually
  7. Everything else is optional
```

The manual run teaches you the system better than any automation will. You'll know exactly what to script because you'll have done it by hand.