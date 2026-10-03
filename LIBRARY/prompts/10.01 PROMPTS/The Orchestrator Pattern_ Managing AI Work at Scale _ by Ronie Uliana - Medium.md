# The Orchestrator Pattern: Managing AI Work at Scale | by Ronie Uliana - Medium

Source URL: https://ronie.medium.com/the-orchestrator-pattern-managing-ai-work-at-scale-a0f798d7d0fb

Sitemap

Open in app

Sign in

Medium Logo

Write

Search

Sign in

TL;DR

The actual orchestrator prompt

When that clicked

What the Orchestrator pattern is (and is not)

What it is

What it very intentionally avoids

Why orchestration becomes necessary

The roles in an orchestrated system

The Orchestrator

Subagents

Verifier agents

Goals, constraints, and stop conditions

Delegation that actually works

Verification as a first-class component

The pragmatic verifier

When pragmatic is the wrong choice

When to use this pattern (and when not to)

Common failure modes

Where this goes next

The Orchestrator Pattern: Managing AI Work at Scale
Ronie Uliana

10 min read · Jan 27, 2026
--
It took me a while to notice this, but the real bottleneck in AI work isn’t model capability. It’s 
me
.
More specifically: my time, my attention, and the amount of micromanaging I have to do to get something trustworthy out of an AI system.
At some point, I realized something felt off. I had incredibly powerful tools at my disposal — Claude Code, multiple models, great tooling — and yet I was spending 
more
 time steering, correcting, and nudging than actually reviewing outcomes.
That’s when I did what I’ve been doing since forever: I tried to replace myself with more AI.
That shift pushed me to experiment with my own version of the 
Orchestrator pattern
 — and, more importantly, to understand 
why
 some attempts worked and others went completely off the rails.
And my experience prompted me to write this article for people who trust AI on small tasks, but not yet on work that runs longer than a few minutes.
Press enter or click to view image in full size Don’t play every instrument, coordinate them
TL;DR
The Orchestrator pattern treats AI systems as coordinated teams — but the part that actually makes it work isn’t delegating the work to other agents.
It’s 
clear goals, explicit stop conditions, and verification
.
Once I internalized that, the pattern clicked. Every step has a defined “done”, and every result is gated by a verifier before the system moves on. That’s what keeps the system from drifting or confidently going off the rails.
Practically, this turns the workflow into a small loop at each step — a kind of 
Ralph Wiggum
 loop: try something, check if it’s good enough, repeat if it isn’t.
The payoff? I can let Claude Code work 
alone
 for 20–40 minutes and come back to something that needs review — no more babysitting.
The actual orchestrator prompt
Everything above sounds abstract until you see the thing that actually runs.
The TL;DR says the pattern lives or dies on 
clear goals, explicit stop conditions, and verification
. This prompt is where those ideas get turned into something executable. It doesn’t try to be smart, creative, or helpful — it’s deliberately narrow. Its job is to 
execute a plan
, coordinate agents, and refuse to move forward without verification.
This is the prompt I’m using (now):
You are an orchestrator coordinating subagent execution. 
 ### Core Principles 
 - **Delegate, don't do**: Your job is coordination and reporting, not execution 
 - **Specialists first**: Always check subagent capabilities before defaulting to generic "Task" 
 - **Context before action**: Use "Explore" to understand the codebase before delegating implementation 
 - **Correctness over form**: Results must be accurate for downstream use-nothing more 
 ### Execution Loop 
 For each subtask, repeat until verification passes: 
 1. **Execute**: Delegate to appropriate subagent 
 2. **Verify**: Delegate verification to a pragmatic subagent who answers: 
  > Is this result correct enough to support the decisions or steps that depend on it? 
 3. **If NO**: Re-delegate execution with verifier's specific feedback → return to step 1 
 4. **If YES**: Subtask complete → proceed to next subtask 
 The verifier ignores formatting, style, and completeness beyond what downstream steps require. Only correctness matters. 
 ### Decision Points 
 - Unclear requirements? → AskUserQuestion before decomposition 
 - Multiple capable subagents? → Prefer the specialist 
 - Verification fails? → Re-delegate with verifier's correction guidance (do not proceed) 
 ### Output 
 Report subagent results as received.
I don’t run this as a rigid command. I keep it as an 
Espanso trigger
.
Espanso is a cross‑platform text expander: you type a short trigger and it expands into a large block of text. That matters here because I often reach for the orchestrator 
after
 a planning or brainstorming session. A trigger lets me tweak context, paste in a freshly refined plan, or adjust constraints before firing.
The important part isn’t Espanso itself. It’s that the orchestrator prompt is easy to invoke 
at the right moment
, when the plan is ready and execution should begin.
Press enter or click to view image in full size
When that clicked
Here’s the part that usually gets glossed over: autonomy doesn’t come from “letting the model run.” It comes from giving the model something 
worth running
 — a plan that’s specific enough to be executed without guesswork.
Execution is cheap; alignment is expensive
The Orchestrator pattern (at least the way I use it) is an 
executor
. It’s amazing at taking a well-defined plan and producing consistent outputs with verification gates. But it’s brutally literal: if you leave too much up to the agents, they’ll 
perfectly
 execute a task… that’s not what you had in mind.
So before I let the system run for 40 minutes, I spent about 
four hours
 doing the unglamorous part: 
brainstorming hard with Claude Code until the plan was sharp
 and building a knowledge base as a skill for the agent.
That brainstorming wasn’t a quick “ideas list.” It was me and Claude pushing on the problem from different angles, surfacing options, and then converging into a step-by-step plan with explicit outcomes. The plan was the artifact. The whole goal was to reduce “judgment calls” during execution.
A big chunk of that work was turning vague intent into checkable statements. We listed assumptions, questioned them, and came with concrete hypotheses the investigation needed to confirm or falsify. Then we baked those hypotheses into the plan so the Orchestrator wouldn’t improvise.
The knowledge base I built alongside it wasn’t “documentation for the AI.” It was scaffolding for 
me
. It was designed so I could sanity-check claims quickly, drill into the exact place an argument got shaky, and rerun only the part that needed fixing.
Only after the plan and outcomes were nailed down did I hand execution to the orchestrated setup and walk away.
What happened next wasn’t magic — it was structure. The system followed the plan in explicit phases, each phase had a clear scope and a stop condition, and every phase had to leave behind reproducible Markdown (not vibes, not summaries). Then a verifier agent decided whether each phase was good enough to be allowed to infect the next one.
Forty minutes later, I came back to a deep report I could actually verify.
Less synchronous effort. Better structure. Fewer surprises.
What the Orchestrator pattern is (and is not)
Let’s get precise, because “orchestration” is one of those words that gets stretched until it means “I used two prompts.”
Delegation isn’t the hard part — 
verification
 is
What it is
At its core, the pattern is simple: you separate 
control
 from 
execution
, and you insert a verification gate between phases so errors don’t quietly compound.
In practice, you end up with three distinct roles.
The 
orchestrator
 owns intent, context, and flow control. It decides what happens next, what matters, what constraints apply, and when to stop. The subagents do the actual work — but only within narrowly bounded tasks. And verifier agents decide whether outputs are good enough to move forward.
This is why the orchestrator shouldn’t implement or fix things silently. The moment it starts “helping,” you’re back in a world where one agent is planning, executing, and judging its own work — which is exactly where drift loves to hide.
If you want a mental model: think less “super-agent” and more “technical lead who refuses to write code.”
What it very intentionally avoids
A lot of AI workflows fail in a predictable way: one agent plans, executes, and validates its own work using implicit criteria like “looks good.” That feels productive right up until it produces something confidently wrong that nobody catches until late.
So the pattern is designed to avoid two specific traps.
First: a single agent doing planning + execution + validation as one continuous blob. Second: success criteria that aren’t explicit. If “done” isn’t defined, then verification can’t exist — and if verification can’t exist, autonomy turns into a gamble.
If you’re trying to delegate longer and longer tasks to AI, this pattern exists to make that possible without your workflow quietly sliding into hallucination debt.
Why orchestration becomes necessary
A lot of AI work doesn’t need orchestration. If you’re tightening a screw, you don’t build a factory.
But things break when you ask AI to work for longer stretches. Over time, context decays. Assumptions shift. Small inaccuracies slip in — usually quietly, usually phrased with confidence, and usually in places you won’t think to check.
That’s the real pressure orchestration is designed to handle. The cost of execution keeps going down; the cost of being 
confidently wrong
 goes up fast.
As tasks grow, scope expands, tools pile up, and dependencies multiply. At that point, alignment becomes the expensive part. And without explicit coordination and verification gates, small errors don’t stay small — they compound into a messy downstream reality where you’re no longer reviewing, you’re doing archaeology.
Orchestration exists to keep failures contained: early, local, and correctable.
The roles in an orchestrated system
Once you see the system as “control + workers + gatekeepers,” the roles snap into focus.
The Orchestrator
The orchestrator owns the global goal, constraints, and sequencing. It delegates, re-delegates, tracks progress, and decides when to terminate.
Notice what’s missing: execution.
That separation is the whole point. If the orchestrator executes, it becomes tempted to patch problems instead of making them visible. And if problems aren’t visible, verifiers can’t do their job.
Subagents
Subagents are there to do bounded work, not to improvise. They should receive a narrow task, only the context they need, and produce an artifact — something you can inspect, test, or reuse.
The main constraint I care about is this: subagents shouldn’t “wander.” If they’re thinking broadly, they’re probably expanding scope, inventing requirements, or hiding uncertainty behind fluency. Tight boundaries keep them honest.
Verifier agents
Verifiers exist to answer one question:
Is this result correct enough for what depends on it next?
Not “is it perfect?” Not “would I merge this?” Just: can we safely proceed?
That framing matters because it turns verification into a gate, not a debate. The output is either accepted (and the system moves on) or rejected (and the system retries with a correction loop). No progress without explicit acceptance.
Goals, constraints, and stop conditions
This is probably the most import takeaway from this whole post. Agents need to know what’s expected from them and when to stop.
“Looks good” is not a contract
A goal without a stop condition is just an invitation to overreach. The model can’t read your mind about what “done” means, so it keeps going, generalizing, hand-waving, or expanding scope until it hits a token limit or a stylistic stopping point.
In orchestrated work, every phase declares what “done” means in a way a verifier can check. Sometimes “done” is a passing test. Sometimes it’s “artifact exists with these properties.” Sometimes it’s “analysis answers 
this
 question and cites its assumptions.”
This does two things. It prevents scope drift, and it makes verification possible.
If a verifier can’t tell whether a phase is complete, that’s a design bug — not an AI failure.
Delegation that actually works
Good orchestration is boring in the best way. The work is broken into phases. Each phase is independently verifiable. And when possible, 
specialist agents are chosen on purpose
.
The pattern I follow is simple:
If a specialist agent exists, use it.
Not because it’s more “clever,” but because specialists are simply 
better at the task they were designed for
 than a generic subagent.
I have specialists for coding, specialists for code review, specialists for code quality — and even prompts whose sole job is to 
create
 a coder that matches a specific repository’s conventions, structure, and idioms. That’s not overengineering; it’s how you avoid spending cycles correcting style, architecture, or implicit rules that a generic agent will constantly trip over.
Specialists don’t magically solve problems. They just make fewer category errors. They already operate inside the right constraints, which means the Orchestrator doesn’t have to keep reasserting them.
When something goes wrong, the fix is almost never “tell the model to be better.” It’s usually one of three things — and I almost always start with the first: make the goal more explicit, tighten the plan, or create a specialist that actually understands the shape of the task.
Verification as a first-class component
This is the piece that unlocks autonomy — because without verification, you don’t have a system. You have vibes.
The pragmatic verifier
Most of the time, I want speed. I want to walk away and come back to something reviewable.
That’s what the pragmatic verifier is for: it checks only what downstream steps depend on, ignores elegance and premature optimization, and optimizes for 
decision-grade correctness
.
It’s great for analyses, investigations, and reports — anywhere the output is meant to be evaluated by a human and used to decide what to do next.
When pragmatic is the wrong choice
Pragmatic verification is not enough for production code, compliance, or security-critical work, because “decision-grade” is a lower bar than “safe to ship.”
That’s where specialized verifiers shine. A TDD verifier can refuse progress without passing tests. A code quality verifier can enforce maintainability and review readiness.
The orchestrator’s job is to match verifier strictness to risk — not to pick one verifier and hope for the best.
When to use this pattern (and when not to)
This is not a default.
Orchestration has overhead. You pay upfront in design, scaffolding, and verification rules. So it only makes sense when the leverage is there.
Great fits:
Multi-step investigations where claims can quietly drift
Cross-system refactors where dependencies are easy to miss
Whole features that touch multiple parts of the system
High-stakes analyses where “confidently wrong” is expensive
Poor fits:
Trivial tasks
One-shot prompts
Pure creative exploration
When the work is simple, orchestration is ceremony. When the work is long, interconnected, or risky, orchestration is how you stay sane.
Common failure modes
In practice, almost every failure I’ve seen collapses to one of these three:
Vague verification criteria
. If the verifier doesn’t have something concrete to check, it can’t act as a gate. “Looks good” is not a criterion, and once verification becomes subjective, drift sneaks back in.
A vague plan — or a plan with missing steps
. Orchestrators execute exactly what you give them. If the plan has gaps, the agents will fill them in creatively, which is another way of saying they’ll solve a 
different
 problem than the one you intended.
Agents that don’t produce reproducible artifacts
. If outputs aren’t concrete, inspectable, and rerunnable (Markdown, code, data, tests), you can’t verify them properly and you can’t safely build on top of them.
When something feels off, I usually check these in this order. Fixing just one of them is often enough to get the whole system back on track.
Where this goes next
This pattern is still evolving.
Right now, it’s my 
preferred
 flow — not a mandatory one.
For smaller tasks, I still happily reach for Claude Code planning mode, direct edits, or manual fixes when delegation would be slower.
Orchestration is a power tool.
When you need it, nothing else compares.
But you don’t use it to tighten a screw.
Built with caffeine, curiosity, and a very opinionated relationship with AI tooling.
Agentic Workflow

LLM

Written by  Ronie Uliana
144 followers

·
62 following
https://ronie.medium.com/following?source=post_page---post_author_info--a0f798d7d0fb---------------------------------------
Just a common guy
Help
Status
About
Careers
Press
Blog
Store
Privacy
Rules
Terms
Text to speech