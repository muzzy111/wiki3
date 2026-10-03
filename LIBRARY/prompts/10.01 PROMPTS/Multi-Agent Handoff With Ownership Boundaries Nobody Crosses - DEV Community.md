# Multi-Agent Handoff With Ownership Boundaries Nobody Crosses - DEV Community

Source URL: https://dev.to/gabrielanhaia/multi-agent-handoff-with-ownership-boundaries-nobody-crosses-nll

Multi-Agent Handoff With Ownership Boundaries Nobody Crosses - DEV Community
Skip to content
https://dev.to/gabrielanhaia/multi-agent-handoff-with-ownership-boundaries-nobody-crosses-nll#main-content
Powered by Algolia
https://www.algolia.com/developers/?utm_source=devto&utm_medium=referral
Log in
https://dev.to/enter?signup_subforem=1
 
Create account
https://dev.to/enter?signup_subforem=1&state=new-user
DEV Community
0 Add reaction
 
0 Like
 
 
0 Unicorn
 
 
0 Exploding Head
 
 
0 Raised Hands
 
 
0 Fire
0 Jump to Comments 0 Save Boost
Copy link
Copied to Clipboard
Share to X
https://twitter.com/intent/tweet?text=%22Multi-Agent%20Handoff%20With%20Ownership%20Boundaries%20Nobody%20Crosses%22%20by%20Gabriel%20Anhaia%20%23DEVCommunity%20https%3A%2F%2Fdev.to%2Fgabrielanhaia%2Fmulti-agent-handoff-with-ownership-boundaries-nobody-crosses-nll
 
Share to LinkedIn
https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fdev.to%2Fgabrielanhaia%2Fmulti-agent-handoff-with-ownership-boundaries-nobody-crosses-nll&title=Multi-Agent%20Handoff%20With%20Ownership%20Boundaries%20Nobody%20Crosses&summary=A%20research%20agent%20and%20a%20writer%20agent%20kept%20passing%20the%20same%20task%20back%20and%20forth.%20Here%20is%20the%20handoff%20contract%20that%20finally%20stopped%20the%20loop.&source=DEV%20Community
 
Share to Facebook
https://www.facebook.com/sharer.php?u=https%3A%2F%2Fdev.to%2Fgabrielanhaia%2Fmulti-agent-handoff-with-ownership-boundaries-nobody-crosses-nll
 
Share to Mastodon
https://s2f.kytta.dev/?text=https%3A%2F%2Fdev.to%2Fgabrielanhaia%2Fmulti-agent-handoff-with-ownership-boundaries-nobody-crosses-nll
Report Abuse
https://dev.to/report-abuse
Gabriel Anhaia
https://dev.to/gabrielanhaia
Posted on Apr 27
Multi-Agent Handoff With Ownership Boundaries Nobody Crosses
# ai
https://dev.to/t/ai
 
# agents
https://dev.to/t/agents
 
# architecture
https://dev.to/t/architecture
 
# python
https://dev.to/t/python
Book:
 
AI Agents Pocket Guide
https://www.amazon.com/dp/B0GYJZ2XJD
My project:
 
Hermes IDE
https://hermes-ide.com/
 | 
GitHub
https://github.com/hermes-hq/hermes-ide
 — an IDE for developers who ship with Claude Code and other AI coding tools
Me:
 
xgabriel.com
https://xgabriel.com/
 | 
GitHub
https://github.com/gabrielanhaia
A team I talked to had two agents in a loop for 14 minutes before the budget guard killed the run. The research agent kept handing back to the writer with 
status: "needs_more_sources"
 . The writer kept handing back to the research agent with 
status: "draft_incomplete"
 . Neither agent had a definition of "done" the other one trusted. The orchestrator logged 47 handoffs and a $9.12 token bill before it tripped the circuit breaker.
The fix was a contract, not a smarter prompt. Two agents, two narrow jobs, one schema between them, one explicit "I'm done" signal, and a span at the boundary so you can see the handoff in your trace.
The failure mode you are trying to avoid
The OpenAI Agents SDK and LangGraph both push you toward the same shape: agents transfer control through an explicit handoff primitive instead of calling each other directly ( 
OpenAI Agents SDK docs
https://openai.github.io/openai-agents-python/
, 
LangChain on Command
https://blog.langchain.com/command-a-new-tool-for-multi-agent-architectures-in-langgraph/
). Two anti-patterns show up before teams adopt that shape.
Orchestrator-as-god.
 A single planner LLM holds the whole state, calls every sub-agent, and reasons about their output. Latency stacks. The planner becomes a bottleneck. One bad token in its context poisons the rest of the run.
Every-agent-can-call-every-agent.
 Each agent has tools that invoke any other agent. The graph becomes a mesh. There is no single place to log a handoff, no single place to enforce a budget, and the loop above is one prompt regression away.
The pattern below sits between them. Two agents, one direction of flow, one terminal signal.
The shared state schema
State is a typed object both agents read and write. Same shape on both sides. No hidden fields.
from dataclasses import dataclass, field
from typing import Literal
from uuid import uuid4

Status = Literal[
    "research_in_progress",
    "research_done",
    "writing_in_progress",
    "writing_done",
    "failed",
]

@dataclass
class Source:
    url: str
    quote: str
    confidence: float  # 0.0 - 1.0


A 
Source
 is the unit the research agent produces and the writer consumes. The writer never fetches its own sources. The research agent never writes prose.
@dataclass
class RunState:
    run_id: str = field(default_factory=lambda: str(uuid4()))
    topic: str = ""
    sources: list[Source] = field(default_factory=list)
    draft: str = ""
    status: Status = "research_in_progress"
    owner: Literal["research", "writer", "done"] = "research"
    handoff_count: int = 0


owner
 is the load-bearing field. At any moment exactly one agent owns the state. The other one is not allowed to mutate it. 
handoff_count
 is your loop guard. Bound it and you bound the failure above.
The handoff contract
Two rules, written down so both agents see the same thing.
The owner is the only writer. Everyone else gets a read-only view.
A handoff is a single function call that returns a payload, not a tool call into the other agent.
@dataclass
class HandoffPayload:
    from_agent: str
    to_agent: str
    reason: str
    state: RunState

def handoff(state: RunState, to: str, reason: str) -> HandoffPayload:
    state.handoff_count += 1
    if state.handoff_count > 4:
        state.status = "failed"
        state.owner = "done"
        raise RuntimeError(
            f"handoff budget exceeded: {state.handoff_count}"
        )
    payload = HandoffPayload(
        from_agent=state.owner,
        to_agent=to,
        reason=reason,
        state=state,
    )
    state.owner = to  # type: ignore[assignment]
    return payload


Four handoffs is a lot for two agents. If you need more, you have the wrong decomposition or the wrong "done" signal. The 
RuntimeError
 is intentional. Failing loud beats burning tokens.
The research agent
The research agent has one job: produce at least N high-confidence sources for the topic, then hand off. It does not write. It does not edit. It does not call the writer.
from openai import OpenAI

client = OpenAI()
MIN_SOURCES = 3
MIN_CONFIDENCE = 0.6

def research_agent(state: RunState) -> HandoffPayload:
    assert state.owner == "research", "not my turn"

    new_sources = fetch_sources(state.topic)
    state.sources.extend(
        s for s in new_sources if s.confidence >= MIN_CONFIDENCE
    )

    if len(state.sources) >= MIN_SOURCES:
        state.status = "research_done"
        return handoff(state, to="writer", reason="sources ready")

    state.status = "failed"
    state.owner = "done"
    raise RuntimeError("could not gather enough sources")


The "done" signal is a check on 
len(state.sources)
 against a threshold the team agreed to. When the check passes, ownership moves. When it fails, the agent fails the run instead of bouncing the work back. 
fetch_sources
 is your retrieval call: a search API, a vector store, a scraper. The agent's only loop is inside its own turn. It does not loop with the writer.
The writer agent
The writer reads 
state.sources
 and produces 
state.draft
 . It cannot mutate sources. If the sources are bad, it fails. It does not bounce work back to research with a vague complaint.
def writer_agent(state: RunState) -> HandoffPayload:
    assert state.owner == "writer", "not my turn"
    assert state.status == "research_done", "input not ready"

    state.status = "writing_in_progress"
    state.draft = generate_draft(state.topic, state.sources)

    if len(state.draft) < 200:
        state.status = "failed"
        state.owner = "done"
        raise RuntimeError("draft too short")

    state.status = "writing_done"
    return handoff(state, to="done", reason="draft ready")


The writer's terminal handoff goes to the literal string 
"done"
 , not back to research. There is no reverse edge in this graph. The flow is research → writer → done, and that is the whole topology.
If you find yourself wanting to add a 
writer → research
 edge for "needs better sources," resist it. Add a critic agent after the writer instead, or raise the bar inside the research agent. A reverse edge is the loop in disguise.
The boundary span
The handoff is the most interesting line in the trace. Instrument it. Both OpenAI's SDK and LangGraph emit handoff events you can pick up; if you are rolling your own, OpenTelemetry plus a context manager covers the shape.
from opentelemetry import trace

tracer = trace.get_tracer("agents")

def run(topic: str) -> RunState:
    state = RunState(topic=topic)

    with tracer.start_as_current_span("agent.research") as span:
        span.set_attribute("run_id", state.run_id)
        payload = research_agent(state)
        span.set_attribute("sources.count", len(state.sources))

    with tracer.start_as_current_span("agent.handoff") as span:
        span.set_attribute("from", payload.from_agent)
        span.set_attribute("to", payload.to_agent)
        span.set_attribute("reason", payload.reason)
        span.set_attribute("count", state.handoff_count)

    with tracer.start_as_current_span("agent.writer") as span:
        span.set_attribute("run_id", state.run_id)
        writer_agent(state)
        span.set_attribute("draft.len", len(state.draft))

    return state


The boundary span is what lets you answer "where did this run go wrong" without re-reading every prompt. Loops show up as 
handoff_count
 climbing in span attributes. A stall is one span much wider than the rest, and a wrong payload shows in 
reason
 .
If you are on Langfuse, Arize, Braintrust, or W&B Weave, the agent-handoff event is a first-class span type in 2026. Use it.
Why this is not orchestrator-as-god
There is no planner LLM in the loop above. The graph is hard-coded: 
run
 calls research, then handoff, then writer. The agents are LLM-backed; the topology is not.
This is the shape OpenAI's SDK calls a "handoff graph" and LangGraph implements with 
Command(goto=...)
 ( 
How Agent Handoffs Work in Multi-Agent Systems
https://towardsdatascience.com/how-agent-handoffs-work-in-multi-agent-systems/
). Each node decides where control goes next based on its own state check, not on a god-planner's reasoning. You get the dynamism of LLM agents without paying for an extra LLM turn at every junction.
The trade is honest: you give up the planner's flexibility for predictable cost, predictable latency, and a graph you can draw on a whiteboard. For a two-agent pipeline, that trade always wins.
Closer
When two agents loop, the bug is rarely in either prompt. It is in the gap between them. The loop your team is fighting next quarter is probably one 
handoff_count
 guard away from being a 90-second incident instead of a 14-minute one.
If this was useful
The handoff pattern above is one of about a dozen the 
AI Agents Pocket Guide
 walks through with the same level of code: supervisor, swarm, planner-executor, critic loops, tool-routing, and the failure modes each one ships with. If you are putting two or more agents in front of users this quarter, it is the kind of book you read in an afternoon and reach for in code review.
profile The DEV Team
https://dev.to/devteam
Promoted
What's a billboard?
https://dev.to/billboards
Manage preferences
https://dev.to/settings/customization#sponsors
Report billboard
https://dev.to/report-abuse?billboard=263808
How we slashed an AI Agent's latency by 80% in 60 minutes
https://dev.to/googleai/how-we-slashed-an-ai-agents-latency-by-80-in-60-minutes-86e?bb=263808
Building an AI agent is fun. Fixing its production latency when it's juggling live data, RAG, and text-to-speech? Not so fun.
Read more →
https://dev.to/googleai/how-we-slashed-an-ai-agents-latency-by-80-in-60-minutes-86e?bb=263808
Read More
Top comments (0)
Subscribe
 
Personal Trusted User
Create template
https://dev.to/settings/response-templates
Templates let you quickly answer FAQs or store snippets for re-use.
Submit Preview 
Dismiss
https://dev.to/404.html
Code of Conduct
https://dev.to/code-of-conduct
• 
Report abuse
https://dev.to/report-abuse
Are you sure you want to hide this comment? It will become hidden in your post, but will still be visible via the comment's 
permalink
https://dev.to/gabrielanhaia/multi-agent-handoff-with-ownership-boundaries-nobody-crosses-nll
.
 
[-] 1
Hide child comments as well
Confirm
For further actions, you may consider blocking this person and/or 
reporting abuse
https://dev.to/report-abuse
profile The DEV Team
https://dev.to/devteam
Promoted
What's a billboard?
https://dev.to/billboards
Manage preferences
https://dev.to/settings/customization#sponsors
Report billboard
https://dev.to/report-abuse?billboard=263563
How I built a supersonic AI riddling duel in under 20 Minutes (with zero manual coding)
https://dev.to/googleai/how-i-built-a-supersonic-ai-riddling-duel-in-under-20-minutes-with-zero-manual-coding-16ah?bb=263563
Can an AI developer agent build complex full-stack logic without constant hand-holding?
To test this, I set up the #NapkinChallenge: take a rough architectural sketch on a paper napkin and turn it into a fully functional web application in under 20 minutes.
Read more →
https://dev.to/googleai/how-i-built-a-supersonic-ai-riddling-duel-in-under-20-minutes-with-zero-manual-coding-16ah?bb=263563
Gabriel Anhaia
https://dev.to/gabrielanhaia
Follow
Senior Software Engineer @ Monta · 10+ years in backend, distributed systems & AI agents · Creator of Hermes IDE (AI-native terminal) & Neural Playground · Author of 2 books · Open-source enthusiast
Location Berlin, Germany
Work Software Engineer and Book Author
Joined Jul 6, 2020
More from 
Gabriel Anhaia
https://dev.to/gabrielanhaia
What to Capture on an Agent Span (and What to Redact) # ai # agents # observability # python
https://dev.to/gabrielanhaia/what-to-capture-on-an-agent-span-and-what-to-redact-490k
Trace Sampling for Agents: Keeping the Trajectories That Matter # ai # agents # observability # tracing
https://dev.to/gabrielanhaia/trace-sampling-for-agents-keeping-the-trajectories-that-matter-46ak
Per-Agent Cost and Token Attribution Straight From Your Traces # ai # agents # observability # llm
https://dev.to/gabrielanhaia/per-agent-cost-and-token-attribution-straight-from-your-traces-55pp
profile The DEV Team
https://dev.to/devteam
Promoted
What's a billboard?
https://dev.to/billboards
Manage preferences
https://dev.to/settings/customization#sponsors
Report billboard
https://dev.to/report-abuse?billboard=263309
Explored Web3 but not sure where to start?
https://events.mlh.io/events/13995-100-days-of-solana?bb=263309
100 Days of Solana is a hands-on challenge series that takes you from curiosity to capability. By the end, you won't just understand Solana, you'll be ready to build something useful with it.
Start here
https://events.mlh.io/events/13995-100-days-of-solana?bb=263309
DEV Takeovers
What's a billboard?
https://dev.to/billboards
Manage preferences
https://dev.to/settings/customization#sponsors
Report billboard
https://dev.to/report-abuse?billboard=263821
What Can You Build In A Weekend?
Create someting inspired by "passion" for a chance to be one of FIVE winners.
Join Now
https://dev.to/devteam/join-our-dev-weekend-challenge-passion-edition-1000-in-prizes-across-five-winners-submissions-10j5?bb=263821
💎 DEV Diamond Sponsors
Thank you to our Diamond Sponsors for supporting the DEV Community
Google AI is the official AI Model and Platform Partner of DEV
Neon is the official database partner of DEV
Algolia is the official search partner of DEV
DEV Community
https://dev.to/
 — A space to discuss and keep up software development and manage your software career
Home
https://dev.to/
DEV Challenges
https://dev.to/challenges
DEV++
https://dev.to/++
Videos
https://dev.to/videos
DEV Education Tracks
https://dev.to/deved
DEV Help
https://dev.to/help
Advertise on DEV
https://dev.to/advertise
Organization Accounts
https://dev.to/organizations
DEV Showcase
https://dev.to/showcase
About
https://dev.to/about
Contact
https://dev.to/contact
Free Postgres Database
https://dev.to/free-postgres-database-tier
DEV Shop
https://shop.forem.com/
MLH
https://mlh.io/
Code of Conduct
https://dev.to/code-of-conduct
Privacy Policy
https://dev.to/privacy
Terms of Use
https://dev.to/terms
Built on 
Forem
https://www.forem.com/
 — the 
open source
https://dev.to/t/opensource
 software that powers 
DEV
https://dev.to/
 and other inclusive communities.
Made with love and 
Ruby on Rails
https://dev.to/t/rails
. DEV Community © 2016 - 2026.
 
We're a place where coders share, stay up-to-date and grow their careers.
Log in
https://dev.to/enter?signup_subforem=1
 
Create account
https://dev.to/enter?signup_subforem=1&state=new-user