# OpenAI Swarm Multi-Agent Framework in 2026: What It Is, How It Works, and How to Use It | Lexogrine Blog

Source URL: https://lexogrine.com/blog/openai-swarm-multi-agent-framework-2026

OpenAI Swarm Multi-Agent Framework in 2026: What It Is, How It Works, and How to Use It | Lexogrine Blog 

https://lexogrine.com/
services
services
technologies
technologies
industries
industries
success stories success stories
https://lexogrine.com/success-stories
about us about us
https://lexogrine.com/about-us
blog blog
https://lexogrine.com/blog
Get in touch
https://lexogrine.com/contact-us
 

https://www.awwwards.com/sites/lexogrine-software-studio
Home
https://lexogrine.com/
/ 
Blog
https://lexogrine.com/blog
/ OpenAI Swarm Multi-Agent Framework in 2026: What It Is, How It Works, and How to Use It
AI Agents AI Web Development
OpenAI Swarm Multi-Agent Framework in 2026: What It Is, How It Works, and How to Use It
OpenAI Swarm is a minimalist multi-agent framework built around explicit handoffs between specialized tool-calling agents. This article explains Swarm's core mental model, when it fits (and when it doesn't), how to get started fast, and the production patterns that matter in 2026: tool boundaries, approval gates, evals, and an upgrade path to the OpenAI Agents SDK.
 
Author
Kacper Herchel
Kacper is Lexogrine's CTO and Head of Development. He leads day-to-day engineering operations and oversees delivery teams across both Client & Partners engagements and internal products, including AI agent orchestration for Lexogrine's automated workflows. With deep expertise in TypeScript, React, React Native, Node.js, and AWS, he helps set the technical direction and defines the core frameworks and standards used across Lexogrine teams.
Published
February 16, 2026
Last updated May 21, 2026
Reading
17 min read
Navigate
Table of contents
TL;DR: OpenAI Swarm Multi-Agent Framework (2026)
https://lexogrine.com/blog/openai-swarm-multi-agent-framework-2026#tldr-openai-swarm-multi-agent-framework-2026
OpenAI Swarm in 2026: Why Multi-Agent Orchestration Matters
https://lexogrine.com/blog/openai-swarm-multi-agent-framework-2026#openai-swarm-in-2026-why-multi-agent-orchestration-matters
What is the OpenAI Swarm multi-agent framework (featured snippet definition)
https://lexogrine.com/blog/openai-swarm-multi-agent-framework-2026#what-is-the-openai-swarm-multi-agent-framework-featured-snippet-definition
Why teams use multi-agent systems
https://lexogrine.com/blog/openai-swarm-multi-agent-framework-2026#why-teams-use-multi-agent-systems
Core concepts in Swarm (as documented in 2026)
https://lexogrine.com/blog/openai-swarm-multi-agent-framework-2026#core-concepts-in-swarm-as-documented-in-2026
Agents and roles
https://lexogrine.com/blog/openai-swarm-multi-agent-framework-2026#agents-and-roles
Handoffs and routing
https://lexogrine.com/blog/openai-swarm-multi-agent-framework-2026#handoffs-and-routing
Tools and action boundaries
https://lexogrine.com/blog/openai-swarm-multi-agent-framework-2026#tools-and-action-boundaries
Shared context, state, and memory patterns
https://lexogrine.com/blog/openai-swarm-multi-agent-framework-2026#shared-context-state-and-memory-patterns
Safety boundaries and permissioning
https://lexogrine.com/blog/openai-swarm-multi-agent-framework-2026#safety-boundaries-and-permissioning
Tracing and observability hooks
https://lexogrine.com/blog/openai-swarm-multi-agent-framework-2026#tracing-and-observability-hooks
Getting started (step by step)
https://lexogrine.com/blog/openai-swarm-multi-agent-framework-2026#getting-started-step-by-step
Requirements
https://lexogrine.com/blog/openai-swarm-multi-agent-framework-2026#requirements
Install Swarm
https://lexogrine.com/blog/openai-swarm-multi-agent-framework-2026#install-swarm
Suggested project structure
https://lexogrine.com/blog/openai-swarm-multi-agent-framework-2026#suggested-project-structure
Minimal “hello swarm” (what you should see)
https://lexogrine.com/blog/openai-swarm-multi-agent-framework-2026#minimal-hello-swarm-what-you-should-see
Common setup mistakes and fixes
https://lexogrine.com/blog/openai-swarm-multi-agent-framework-2026#common-setup-mistakes-and-fixes
Code examples you can copy-paste
https://lexogrine.com/blog/openai-swarm-multi-agent-framework-2026#code-examples-you-can-copy-paste
1) Minimal quickstart (Python)
https://lexogrine.com/blog/openai-swarm-multi-agent-framework-2026#1-minimal-quickstart-python
2) Customer support triage with handoffs (Python)
https://lexogrine.com/blog/openai-swarm-multi-agent-framework-2026#2-customer-support-triage-with-handoffs-python
3) Tool calling agent (create ticket, query CRM, post to Slack) (Python)
https://lexogrine.com/blog/openai-swarm-multi-agent-framework-2026#3-tool-calling-agent-create-ticket-query-crm-post-to-slack-python
4) Safety and escalation (human approval gate) (Python)
https://lexogrine.com/blog/openai-swarm-multi-agent-framework-2026#4-safety-and-escalation-human-approval-gate-python
5) Testing and evals (simple eval loop) (Python)
https://lexogrine.com/blog/openai-swarm-multi-agent-framework-2026#5-testing-and-evals-simple-eval-loop-python
Node and TypeScript in 2026: Swarm-style handoffs with the OpenAI Agents SDK
https://lexogrine.com/blog/openai-swarm-multi-agent-framework-2026#node-and-typescript-in-2026-swarm-style-handoffs-with-the-openai-agents-sdk
Production patterns
https://lexogrine.com/blog/openai-swarm-multi-agent-framework-2026#production-patterns
Architecture options
https://lexogrine.com/blog/openai-swarm-multi-agent-framework-2026#architecture-options
State and storage choices
https://lexogrine.com/blog/openai-swarm-multi-agent-framework-2026#state-and-storage-choices
Guardrails: prompt injection, unsafe tool calls, PII, auth
https://lexogrine.com/blog/openai-swarm-multi-agent-framework-2026#guardrails-prompt-injection-unsafe-tool-calls-pii-auth
Observability: logs, traces, replay
https://lexogrine.com/blog/openai-swarm-multi-agent-framework-2026#observability-logs-traces-replay
Cost control: token drivers, caching, routing choices
https://lexogrine.com/blog/openai-swarm-multi-agent-framework-2026#cost-control-token-drivers-caching-routing-choices
Failure handling: retries, timeouts, partial results
https://lexogrine.com/blog/openai-swarm-multi-agent-framework-2026#failure-handling-retries-timeouts-partial-results
Use cases by industry
https://lexogrine.com/blog/openai-swarm-multi-agent-framework-2026#use-cases-by-industry
SaaS support and success
https://lexogrine.com/blog/openai-swarm-multi-agent-framework-2026#saas-support-and-success
E-commerce ops
https://lexogrine.com/blog/openai-swarm-multi-agent-framework-2026#e-commerce-ops
Fintech ops and compliance workflows
https://lexogrine.com/blog/openai-swarm-multi-agent-framework-2026#fintech-ops-and-compliance-workflows
Healthcare admin workflows (no diagnosis)
https://lexogrine.com/blog/openai-swarm-multi-agent-framework-2026#healthcare-admin-workflows-no-diagnosis
Manufacturing and field service
https://lexogrine.com/blog/openai-swarm-multi-agent-framework-2026#manufacturing-and-field-service
Media and content workflows
https://lexogrine.com/blog/openai-swarm-multi-agent-framework-2026#media-and-content-workflows
HR and recruiting ops
https://lexogrine.com/blog/openai-swarm-multi-agent-framework-2026#hr-and-recruiting-ops
Internal IT and SecOps triage
https://lexogrine.com/blog/openai-swarm-multi-agent-framework-2026#internal-it-and-secops-triage
Swarm vs other approaches (high level)
https://lexogrine.com/blog/openai-swarm-multi-agent-framework-2026#swarm-vs-other-approaches-high-level
A pragmatic adoption plan (from 0 to production)
https://lexogrine.com/blog/openai-swarm-multi-agent-framework-2026#a-pragmatic-adoption-plan-from-0-to-production
Phase 1: prototype
https://lexogrine.com/blog/openai-swarm-multi-agent-framework-2026#phase-1-prototype
Phase 2: internal beta
https://lexogrine.com/blog/openai-swarm-multi-agent-framework-2026#phase-2-internal-beta
Phase 3: limited rollout
https://lexogrine.com/blog/openai-swarm-multi-agent-framework-2026#phase-3-limited-rollout
Phase 4: scale and harden
https://lexogrine.com/blog/openai-swarm-multi-agent-framework-2026#phase-4-scale-and-harden
Partnering with Lexogrine
https://lexogrine.com/blog/openai-swarm-multi-agent-framework-2026#partnering-with-lexogrine
 
OpenAI Swarm Multi-Agent Framework
TL;DR: OpenAI Swarm Multi-Agent Framework (2026)
Two primitives, no magic:
 Swarm is built on 
Agents
 (instructions + tools + defaults) and 
handoffs
 (explicit control transfer). It is a clean mental model for learning and prototyping orchestration.
Why teams go multi-agent:
 You get 
separation of concerns
, 
cleaner action boundaries
 (read vs write), more reliable 
routing
 than a mega-prompt, and a natural 
escalation
 path when risk or uncertainty shows up.
How routing works in Swarm:
 A handoff is just a 
tool call that returns another Agent
. The runner switches active_agent, keeps the shared conversation history, and continues the loop.
The key safety pattern:
 Put 
write tools
 behind a narrow “action agent” and add an 
approval gate
 (e.g., execute_tools=False), server-side argument validation, tool allowlists, and strict max_turns caps.
Swarm is not a managed production runtime:
 It is stateless and does not ship sessions, dashboards, or full guardrails. In 2026, Swarm is best treated as a 
reference design
, while 
OpenAI Agents SDK
 is the supported production path (tracing, guardrails, sessions).
Watch the failure modes:
 Common risks include 
prompt injection
, tool overreach, stale facts in context, runaway loops, and accidental over-sharing. Treat agent-facing text as public content, keep one source of truth for policies, and require human approval for state-changing actions.
OpenAI Swarm in 2026: Why Multi-Agent Orchestration Matters
Multi-agent systems stopped being a research toy. Teams now run tool-calling agents that create tickets, move money, update records, and trigger workflows. Once an agent can take real actions, you need control. You need routing. You need audit trails. You need tests. You need a clean way to break one big “do everything” prompt into smaller pieces.
OpenAI Swarm sits right in the middle of that story.
It matters in 2026 for two reasons:
Swarm introduced a clear, minimal mental model for 
agent handoffs
 and 
agent orchestration
.
OpenAI's 
Agents SDK
https://github.com/openai/openai-agents-python
 built on those ideas and turned them into a production-grade path.
Let's break it down.
Custom AI Agent development services
Partner with Lexogrine to build AI Agents for your business.
Custom AI Agent development
https://lexogrine.com/services/ai-agents-development
What is the OpenAI Swarm multi-agent framework (featured snippet definition)
OpenAI Swarm is an open-source, client-side multi-agent framework
https://github.com/openai/swarm
 
from OpenAI that coordinates tool-calling agents using explicit handoffs.
 It gives you two primitives: 
Agents
 (instructions + tools) and 
handoffs
 (one agent passes control to another).
A “swarm” here does not mean swarm intelligence in the academic sense. It means a 
group of specialized agents
 that share the same conversation history and can 
transfer execution
 to the agent best suited for the next step.
When it fits
You want a small, readable framework to prototype multi-agent routing.
You want to understand handoffs as a first-class concept.
You want tight control over tools, message flow, and test loops.
When it does not
You need built-in persistent session memory, trace dashboards, and guardrails.
You want a supported production SDK with long-running flows and built-in human gates.
You want a server-side managed agent service instead of client-managed orchestration.
In 2026, OpenAI positions 
Swarm as an educational framework
, while the 
OpenAI Agents SDK
https://github.com/openai/openai-agents-python
 is the supported path for production agent systems. Swarm still earns its place as a reference design and a fast way to learn multi-agent patterns.
Next steps: understand why teams split agents in the first place.
Why teams use multi-agent systems
A single tool-calling agent can handle a lot. OpenAI's own guidance pushes teams to stretch one agent first, then split when the toolset and branching logic get unwieldy.
Teams usually move to multi-agent setups for four reasons:
1) Separation of concerns
One agent does triage and routing.
One agent handles retrieval and grounding.
One agent performs actions (write operations).
One agent reviews, checks policy, or asks for approval.
This keeps prompts shorter and makes behavior easier to test.
2) Cleaner action boundaries
Write actions deserve special handling. Refunds, cancellations, account changes, and payments need extra checks. A dedicated “action agent” with a narrow tool inventory gives you a natural permission boundary.
3) Better routing than one mega-prompt
When one agent has 20 tools and a long policy prompt, tool choice gets shaky. A triage agent with a small set of handoff tools often routes more reliably.
4) Clearer escalation
You need a clean “stop and ask” path when:
inputs look like prompt injection,
the model tries to call a high-impact tool,
the tool result looks wrong,
the agent loops.
Swarm's handoff design makes escalation feel natural: route to a human queue, or to a safer agent that can only draft a plan.
Here is why this matters: once agents call tools, orchestration becomes a product feature, not a side detail.
Core concepts in Swarm (as documented in 2026)
Swarm keeps the vocabulary small. That is the point.
Agents and roles
A Swarm 
Agent
 packages:
name
instructions (string or callable)
functions (tools)
model (defaults to gpt-4o in the reference code)
tool call settings like tool_choice and parallel_tool_calls
Think of an agent as “prompt + tool inventory + defaults”.
Handoffs and routing
Swarm models routing as a tool call that returns an 
Agent
.
The active agent decides to call transfer_to_refunds, transfer_to_sales, or transfer_to_tech.
That function returns the target agent object.
The Swarm runner switches active_agent and continues the loop.
This gives you 
local routing decisions
 inside the agent loop without a separate router service.
Tools and action boundaries
In Swarm, tools are plain Python functions.
Swarm converts your function signature and docstring into a tool schema for OpenAI function calling. During execution:
The model requests a tool call with JSON arguments.
Swarm parses arguments, calls your function, and appends a tool message containing the result.
The loop continues until the model returns an assistant message with no tool calls or you hit max_turns.
Action boundary tip: keep write tools in a separate agent, or wrap them with approval checks.
Shared context, state, and memory patterns
Swarm is stateless between runs. You pass conversation messages in each call. That gives you control, but it also means you own session memory.
Swarm supports context_variables:
Tools can accept a context_variables parameter (Swarm injects it server-side and hides it from the model's tool schema).
Tools can return a Result object that updates context variables and can also switch agents.
Use context_variables for:
user IDs and tenancy context
feature flags
risk thresholds
routing hints
Do not put secrets there that you would not store in logs.
Safety boundaries and permissioning
Swarm itself does not ship a full guardrail system. It gives you control points:
split agents by permission level
set execute_tools=False to pause before tool execution
enforce allowlists for tool names
validate tool args before calling downstream systems
cap max_turns
In 2026, OpenAI's Agents SDK adds first-class guardrails and human-in-the-loop support. Swarm shows the underlying mechanics.
Tracing and observability hooks
Swarm is a small library. It has a debug flag and streaming events. It does not ship a trace dashboard.
If you need trace views, span data, and run replay as a product feature, OpenAI's Agents SDK includes built-in tracing with an OpenAI dashboard viewer.
Custom AI Agent development services
Partner with Lexogrine to build AI Agents for your business.
Custom AI Agent development
https://lexogrine.com/services/ai-agents-development
Getting started (step by step)
This section shows a Swarm setup that you can run locally.
Requirements
Python 3.10+
An OpenAI API key
Basic comfort with OpenAI tool calling
Install Swarm
Swarm is distributed as a GitHub repo install.
typescript
python -m venv .venv
source .venv/bin/activate

pip install git+https://github.com/openai/swarm.git


Set your API key:
typescript
export OPENAI_API_KEY="sk-..."


Suggested project structure
typescript
swarm-demo/
  app.py
  agents.py
  tools.py
  evals.py
  README.md


Minimal “hello swarm” (what you should see)
You should see:
an assistant response from your first agent, or
a tool call printed if you enable debug or streaming output
Common setup mistakes and fixes
Mistake: OPENAI_API_KEY not set
Fix: export it in the same shell where you run Python.
Mistake: old OpenAI Python SDK
Swarm uses the v1 OpenAI Python client (from openai import OpenAI) and Chat Completions types. If you pin the openai package too old, imports can fail. Fix by upgrading openai.
Mistake: you forgot to keep conversation history
Swarm is stateless between calls. If you build a chat loop, append response.messages back into messages.
Next steps: copy-paste working code.
Code examples you can copy-paste
All Python examples assume:
typescript
from swarm import Swarm, Agent


1) Minimal quickstart (Python)
This example creates two agents and a handoff tool.
typescript
# app.py
from swarm import Swarm, Agent

client = Swarm()

def transfer_to_specialist():
    """Hand off to the Specialist Agent."""
    return specialist_agent

triage_agent = Agent(
    name="Triage Agent",
    instructions=(
        "You route the request. "
        "If the user asks about refunds or billing, call transfer_to_specialist. "
        "If you can answer directly, answer directly."
    ),
    functions=[transfer_to_specialist],
)

specialist_agent = Agent(
    name="Specialist Agent",
    instructions="You handle billing and refunds. Ask for missing info.",
    functions=[],
)

messages = [{"role": "user", "content": "I need a refund for order #1842"}]
response = client.run(agent=triage_agent, messages=messages, max_turns=6)

for msg in response.messages:
    if msg["role"] == "assistant":
        print(f'{msg["sender"]}: {msg["content"]}')


Adapt it
Add more handoff tools for other domains.
Add a third agent for write actions only.
2) Customer support triage with handoffs (Python)
This pattern mirrors how real support systems work: a front-door agent routes to narrow agents.
typescript
# agents.py
from swarm import Agent

def transfer_to_refunds():
    """Route to the Refunds Agent."""
    return refunds_agent

def transfer_to_sales():
    """Route to the Sales Agent."""
    return sales_agent

def transfer_to_tech():
    """Route to the Tech Support Agent."""
    return tech_agent

triage_agent = Agent(
    name="Support Triage",
    instructions=(
        "You are the entry point for customer support.\n"
        "Decide which agent should take over:\n"
        "- Refunds and billing -> transfer_to_refunds\n"
        "- Pricing, plans, upgrades -> transfer_to_sales\n"
        "- Bugs, login issues, errors -> transfer_to_tech\n"
        "If none match, ask a clarifying question."
    ),
    functions=[transfer_to_refunds, transfer_to_sales, transfer_to_tech],
)

refunds_agent = Agent(
    name="Refunds Agent",
    instructions=(
        "You handle refunds. Collect order_id and reason.\n"
        "Do not promise a refund. Explain the next step."
    ),
    functions=[],
)

sales_agent = Agent(
    name="Sales Agent",
    instructions="You answer plan and pricing questions and propose the right plan.",
    functions=[],
)

tech_agent = Agent(
    name="Tech Agent",
    instructions="You troubleshoot issues. Ask for logs, device, and steps tried.",
    functions=[],
)


typescript
# app.py
from swarm import Swarm
from agents import triage_agent

client = Swarm()

messages = [{"role": "user", "content": "I was charged twice last month"}]
response = client.run(agent=triage_agent, messages=messages, max_turns=8)

for msg in response.messages:
    if msg["role"] == "assistant":
        print(f'{msg["sender"]}: {msg["content"]}')


Adapt it
Put write tools (refund execution) in a separate agent, not in Refunds Agent.
Add a “policy agent” for edge cases and exceptions.
3) Tool calling agent (create ticket, query CRM, post to Slack) (Python)
Swarm tools are Python functions. Swarm maps signatures to tool schemas.
This example uses three tools:
lookup_customer (read)
create_ticket (write)
post_to_slack (write)
typescript
# tools.py
import json
from typing import Optional

def lookup_customer(email: str):
    """Look up a customer profile in the CRM by email and return a JSON string."""
    # Replace with a real CRM call.
    profile = {
        "email": email,
        "customer_id": "cus_123",
        "plan": "pro",
        "status": "active",
    }
    return json.dumps(profile)

def create_ticket(subject: str, description: str, customer_id: Optional[str] = None):
    """Create a support ticket and return the ticket id."""
    # Replace with Zendesk/Jira/Linear call.
    ticket = {"ticket_id": "TCK-8841", "subject": subject, "customer_id": customer_id}
    return json.dumps(ticket)

def post_to_slack(channel: str, message: str):
    """Post a message to Slack and return an acknowledgement."""
    # Replace with Slack API call.
    return json.dumps({"ok": True, "channel": channel})


typescript
# app.py
from swarm import Swarm, Agent
from tools import lookup_customer, create_ticket, post_to_slack

client = Swarm()

ops_agent = Agent(
    name="Ops Agent",
    instructions=(
        "You help support ops.\n"
        "When you need customer data, call lookup_customer.\n"
        "When you need a ticket, call create_ticket.\n"
        "When you need to notify the team, call post_to_slack.\n"
        "After tool results, summarize what you did."
    ),
    functions=[lookup_customer, create_ticket, post_to_slack],
)

messages = [
    {"role": "user", "content": "User lisa@acme.com cannot log in. Create a ticket and alert #support."}
]

response = client.run(agent=ops_agent, messages=messages, max_turns=10)

for msg in response.messages:
    if msg["role"] == "assistant":
        print(f'{msg["sender"]}: {msg["content"]}')


Adapt it
Add idempotency to create_ticket (use a request id).
Validate channel against an allowlist.
Add a separate “write agent” so read-only triage cannot create tickets.
Partner with premier React development company
Build your AI agent-ready web application with an experienced team from Lexogrine.
Schedule a free consultation
https://calendar.app.google/tFbsmxRo7ZPRFBAE7
4) Safety and escalation (human approval gate) (Python)
Swarm lets you pause tool execution by calling run(..., execute_tools=False). You can inspect requested tool calls, run checks, then decide what happens next.
Below is a pattern that:
runs one turn without executing tools
checks tool risk
creates an approval request for high-impact actions
executes approved tool calls and resumes the run
typescript
# approval_gate.py
import json
from typing import Any, Dict, List, Tuple

from swarm import Swarm, Agent

RISK_BY_TOOL = {
    "lookup_customer": "low",
    "create_ticket": "medium",
    "post_to_slack": "medium",
    "issue_refund": "high",
}

def extract_tool_calls(last_assistant_message: Dict[str, Any]) -> List[Dict[str, Any]]:
    return last_assistant_message.get("tool_calls") or []

def tool_call_to_parts(tool_call: Dict[str, Any]) -> Tuple[str, str, Dict[str, Any]]:
    tool_name = tool_call["function"]["name"]
    tool_call_id = tool_call["id"]
    args = json.loads(tool_call["function"]["arguments"] or "{}")
    return tool_name, tool_call_id, args

def run_with_approval(
    client: Swarm,
    agent: Agent,
    messages: List[Dict[str, Any]],
    tool_registry: Dict[str, Any],
) -> List[Dict[str, Any]]:
    # Step 1: let the model decide what it wants to do, but do not run tools yet.
    planned = client.run(agent=agent, messages=messages, max_turns=1, execute_tools=False)
    planned_msgs = planned.messages
    last = planned_msgs[-1] if planned_msgs else {}
    tool_calls = extract_tool_calls(last)

    if not tool_calls:
        return planned_msgs

    # Step 2: evaluate risk.
    high_risk = []
    for tc in tool_calls:
        name, tool_call_id, args = tool_call_to_parts(tc)
        risk = RISK_BY_TOOL.get(name, "high")
        if risk == "high":
            high_risk.append((name, tool_call_id, args))

    if high_risk:
        # In a real system, store this in a DB and notify a human queue.
        planned_msgs.append({
            "role": "assistant",
            "sender": "Approval Gate",
            "content": (
                "I can proceed, but I need approval for this action:\n"
                + "\n".join([f"- {name}({args})" for name, _, args in high_risk])
                + "\nReply APPROVE to continue or DENY to stop."
            ),
            "tool_calls": None,
            "function_call": None,
        })
        return planned_msgs

    # Step 3: run allowed tools now and resume the agent loop.
    # We execute the tool calls ourselves, append tool messages, then run again.
    tool_messages = []
    for tc in tool_calls:
        name, tool_call_id, args = tool_call_to_parts(tc)
        func = tool_registry[name]
        result = func(**args)

        tool_messages.append({
            "role": "tool",
            "tool_call_id": tool_call_id,
            "tool_name": name,
            "content": str(result),
        })

    resumed_messages = messages + planned_msgs + tool_messages
    resumed = client.run(agent=planned.agent or agent, messages=resumed_messages, max_turns=6)
    return planned_msgs + tool_messages + resumed.messages


Adapt it
Store pending approvals in a DB with an audit record.
Attach a human identity to the approval decision.
Add argument validation before tool execution.
Add a “deny” path that routes to a human agent or creates a manual task.
5) Testing and evals (simple eval loop) (Python)
Swarm ships example eval patterns in its examples folder. A simple place to start: test whether routing tools get called for the right prompts.
This script runs routing checks and prints a score.
typescript
# evals.py
from swarm import Swarm
from agents import triage_agent

client = Swarm()

EVAL_CASES = [
    {"input": "I want a refund for order #1001", "expected_tool": "transfer_to_refunds"},
    {"input": "What plan includes SSO?", "expected_tool": "transfer_to_sales"},
    {"input": "App crashes on launch", "expected_tool": "transfer_to_tech"},
    {"input": "Tell me a joke", "expected_tool": None},
]

def get_called_tool_name(response):
    # We stop after 1 turn and we do not execute tools.
    last = response.messages[-1] if response.messages else {}
    tool_calls = last.get("tool_calls") or []
    if not tool_calls:
        return None
    return tool_calls[0]["function"]["name"]

def run():
    correct = 0
    for case in EVAL_CASES:
        response = client.run(
            agent=triage_agent,
            messages=[{"role": "user", "content": case["input"]}],
            max_turns=1,
            execute_tools=False,
        )
        got = get_called_tool_name(response)
        ok = got == case["expected_tool"]
        correct += 1 if ok else 0
        print({"input": case["input"], "expected": case["expected_tool"], "got": got, "ok": ok})

    score = correct / len(EVAL_CASES)
    print(f"Routing score: {score:.2f}")

if __name__ == "__main__":
    run()


Adapt it
Add more cases pulled from real tickets.
Run multiple times per case to catch variance.
Add checks on tool arguments, not only tool name.
Pair this with trace-based grading when you move to the Agents SDK.
Node and TypeScript in 2026: Swarm-style handoffs with the OpenAI Agents SDK
OpenAI's supported TypeScript path is the 
OpenAI Agents SDK for TypeScript
https://github.com/openai/openai-agents-js
. It takes Swarm's handoffs idea and adds tracing, guardrails, and sessions.
Here is a minimal handoff sample aligned with the SDK quickstart:
typescript
// app.ts
import { Agent, Runner } from "@openai/agents";

const historyTutor = new Agent({
  name: "History Tutor",
  handoffDescription: "Specialist agent for historical questions",
  instructions: "You answer historical questions with clear context.",
});

const mathTutor = new Agent({
  name: "Math Tutor",
  handoffDescription: "Specialist agent for math questions",
  instructions: "You help with math and show steps.",
});

const triage = new Agent({
  name: "Triage Agent",
  instructions: "Route the user to the right tutor.",
  handoffs: [historyTutor, mathTutor],
});

async function main() {
  const result = await Runner.run(triage, "who was the first president of the united states?");
  console.log(result.finalOutput);
}

main();


If your stack is Node.js heavy, this is the cleanest way to apply Swarm-style concepts while keeping built-in tracing and guardrails.
Partner with an experienced Node.js development company
Build your AI agent-ready web application with an experienced Node.js development team from Lexogrine.
Node.js development services
https://lexogrine.com/technologies/nodejs-development
Production patterns
Swarm shows you the mechanics. Production systems need more: storage, audit, checks, and runtime controls.
Below are patterns that teams use when they turn a demo into a system that can run in front of real users.
Architecture options
Option A: single service
One API service hosts Swarm and tool functions.
It stores conversation history, tool results, and approvals.
It calls downstream APIs with service credentials.
Pick this when you want the smallest moving surface.
Option B: router + workers
A router service handles chat, routing, and policy.
Worker services handle tool execution by domain: billing, CRM, operations.
A queue handles long tasks and retries.
Pick this when tool execution touches many systems or needs strict isolation.
Option C: workflow engine + agents
A workflow engine runs steps and retries.
Agents handle decision points and text generation.
Tools become workflow activities.
Pick this when you need strong run history, replay, and deterministic retries.
State and storage choices
Swarm is stateless between run() calls. You own state.
Store these items:
conversation messages (with retention controls)
tool calls requested (name, args, timestamp)
tool outputs (hash or payload, based on PII rules)
approval decisions
run metadata (model, token usage, request id)
Split memory into layers:
short-term
: the message list you pass into Swarm
durable
: DB records (tickets, orders, audit logs)
retrieval
: a vector store for docs and prior cases
OpenAI's platform also offers conversation state and compaction patterns in the Responses API. The Agents SDK adds session memory as a first-class feature.
Guardrails: prompt injection, unsafe tool calls, PII, auth
Treat tool calling as a security boundary.
Controls that work well:
Tool allowlist per agent
Triage agent: only transfer tools and read-only tools
Action agent: write tools, behind approvals
Argument validation
Validate enums and IDs
Reject free-form URLs unless required
Enforce numeric limits (refund amount caps)
Risk tiers
low: reads
medium: notifications and ticket creation
high: refunds, cancellations, payments, user deletion
Human approval
Require approval for high tier actions until you trust the system.
Log who approved and why.
PII filtering
Mask or drop PII before writing to logs and traces.
Store only IDs when you can.
Auth
Never let the model hold raw credentials.
Tools should use server-side auth, scoped per tenant.
Custom AI Agent development services
Partner with Lexogrine to build AI Agents for your business.
Custom AI Agent development
https://lexogrine.com/services/ai-agents-development
Observability: logs, traces, replay
Swarm gives you debug=True and streaming events. That is not enough once agents call real tools.
Add:
structured logs with request id
tool call logs (name, args hash, duration, status)
model usage logs (tokens, model name)
error capture with redaction
If you move to the Agents SDK, you can use built-in tracing and view traces in the OpenAI dashboard. You can also connect external tracing systems. Many teams use OpenTelemetry patterns and LLM tracing tools to keep a single view across services.
Cost control: token drivers, caching, routing choices
Token spend rises quickly when:
you stuff the whole chat into every call,
you add long tool outputs to the message history,
you let agents loop without exit conditions.
Controls you can apply:
cap max_turns
keep tool outputs short and structured
store full tool results in a DB and pass back a summary plus an ID
use prompt caching when your system prompt stays stable
run offline backfills with the Batch API when you do not need immediate replies
Failure handling: retries, timeouts, partial results
Tool calling introduces two failure planes: model calls and tool calls.
Patterns to apply:
exponential backoff for rate limit errors
timeouts per tool call
idempotency keys for write tools
fallback paths: draft a plan when a tool fails
circuit breakers for flaky downstream systems
Use cases by industry
Below are concrete multi-agent workflows that map well to Swarm-style handoffs. Each one lists: agent roles, tools, human approval, and what to measure.
SaaS support and success
Agents
Triage agent routes: billing, product, bug, account
Refund agent drafts steps and gathers info
Action agent executes ticket creation and account changes
Tools
CRM lookup, billing system lookup, ticket creation, feature flag read
Human approval
refunds above a threshold
account cancellation
Measure
correct routing rate
tool call success rate
time to first useful reply
escalation rate
E-commerce ops
Agents
Order agent answers status, shipping, returns
Fraud review agent flags suspicious patterns
Action agent updates shipping address or initiates return
Tools
order DB, shipping carrier API, returns portal, fraud signals
Human approval
address change after label creation
refunds and chargebacks
Measure
wrong-action rate
refund reversal rate
repeat contact rate
Fintech ops and compliance workflows
Agents
Intake agent extracts intent and needed docs
Policy agent checks rule sets and required steps
Action agent triggers compliance tasks and case creation
Tools
KYC provider, case management system, transaction lookup
Human approval
account lock, transfer holds, high-value decisions
Measure
policy adherence checks passed
escalation accuracy
audit completeness
Healthcare admin workflows (no diagnosis)
Agents
Scheduling agent handles reschedules and reminders
Benefits agent checks coverage and eligibility
Action agent updates appointments and sends messages
Tools
scheduling system, insurance eligibility API, messaging system
Human approval
changes that alter billing responsibility
exceptions to scheduling rules
Measure
booking completion rate
correction rate by staff
PHI exposure incidents (target zero)
Manufacturing and field service
Agents
Triage agent identifies machine line and issue type
Parts agent checks inventory and lead times
Dispatcher agent drafts technician assignment
Tools
CMMS, inventory system, map and routing, knowledge base
Human approval
emergency dispatch and overtime approvals
Measure
first-time fix rate
repeat ticket rate
parts order accuracy
Media and content workflows
Agents
Research agent gathers sources and quotes
Draft agent writes content
Review agent checks style and policy
Tools
web search, doc store, CMS draft creation
Human approval
publish step
Measure
factual error rate (sampled)
edit distance from final copy
citation coverage rate
HR and recruiting ops
Agents
Intake agent parses role and hiring plan
Sourcing agent drafts outreach and screening steps
Scheduling agent proposes times and sends invites
Tools
ATS, calendar, email, skills rubric store
Human approval
offer letter creation
Measure
scheduling completion rate
screening pass alignment with rubric
candidate drop-off rate
Internal IT and SecOps triage
Agents
Intake agent routes request: access, device, incident
Policy agent checks access rules
Action agent opens tickets and runs approved steps
Tools
IAM, ticketing, endpoint management, SIEM queries
Human approval
privileged access grants
containment actions
Measure
false escalation rate
tool call error rate
time to resolution
Custom AI Agent development services
Partner with Lexogrine to build AI Agents for your business.
Custom AI Agent development
https://lexogrine.com/services/ai-agents-development
Swarm vs other approaches (high level)
Swarm is a reference design for handoffs. It is not the only way to build agent orchestration.
Use these rules of thumb:
Pick a single agent with tools when
your toolset is small
you can keep instructions compact
you do not need many specialist prompts
Pick Swarm when
you want a clean mental model for handoffs
you want a tiny, readable orchestration loop
you want to prototype multi-agent routing fast
Pick the OpenAI Agents SDK when
you want built-in tracing, guardrails, sessions, and human-in-the-loop features
you want an OpenAI-supported upgrade path from Swarm
Pick a graph-based orchestrator when
you need explicit state machines, conditional branches, and replay
you need predictable control flow outside the model
Pick a workflow engine with LLM steps when
you need retries, timers, and run history as a platform feature
you want deterministic re-runs and strong audit trails
Pick a vendor platform when
you want a hosted agent layer with connectors, monitoring, and governance controls
you accept platform constraints to move faster
Next steps: make adoption gradual.
A pragmatic adoption plan (from 0 to production)
This plan keeps risk low while you learn what your users actually need.
Phase 1: prototype
What you ship:
a Swarm demo with 2 to 4 agents
a small tool set with mocked side effects
a routing eval script
What can go wrong:
tools too broad
prompts too long
routing variance
Phase 2: internal beta
What you ship:
real tools in a sandbox environment
logs for tool calls and errors
a human approval gate for write actions
What can go wrong:
data handling mistakes
missing audit records
tool argument bugs
Phase 3: limited rollout
What you ship:
tenant-safe auth and rate controls
strong input validation and allowlists
a dashboard view of runs (Agents SDK tracing or external tracing)
What can go wrong:
prompt injection attempts
surprising tool edge cases
session memory growth and cost spikes
Phase 4: scale and harden
What you ship:
offline eval runs tied to releases
compaction or session memory controls
fallback behavior for tool outages
run replay and incident response playbooks
What can go wrong:
slow drift in tool schemas
hidden regressions in routing
gaps in approvals and audit trails
Partnering with Lexogrine
If you want to 
build multi-agent system
 features that touch real product data, treat the work like product engineering, not prompt experiments.
Lexogrine is an 
AI agent development company
https://lexogrine.com/services/ai-agents-development
 that builds 
AI agent development services
 end-to-end:
multi-agent swarms with clear handoffs and tool boundaries
production services in Node.js and Python
web and mobile applications in React and React Native
AWS delivery with logging, monitoring, and secure storage
If you have a Swarm prototype and want a production-grade system, we can help you move from a demo loop to a system with safety checks, eval coverage, and trace visibility.
Want a fast start? 
Book a call and ask for a pilot scope and an agent system review
https://calendar.app.google/aUpAY2e8rEduyosH9
.
AI Agents AI Web Development
Make your website optimized for AI Agents
Add Google WebMCP support with Conscriba and make your website actionable for AI Agents
Add WebMCP
https://conscriba.com/
Keep reading
Related posts
Explore more insights from Lexogrine on similar topics.
View all posts
https://lexogrine.com/blog
[
Latest Trends in Software Development: What to Watch in 2026
Software development in 2026 is shaped by more than AI. This article explains the trends CTOs, founders, and product teams should watch: AI-assisted engineering, business agents, platform engineering, selective cloud architecture, secure delivery, modular monoliths, observability, cross-platform mobile, and data architecture for AI products. Learn how to separate real adoption signals from hype and choose trends that improve delivery, cost, security, and maintainability. Klaudia Chmielowska July 2, 2026](https://lexogrine.com/blog/software-development-trends-2026)
[
Agentic AI Workflows Explained: Architecture, Use Cases, and Implementation Steps
Agentic AI workflows move AI from simple chat responses to controlled, multi-step business processes. This article explains how they work, what architecture they need, where they create value, and how teams can implement them safely with tools, APIs, memory, approvals, observability, and human-in-the-loop controls.
 Dominik Pałkowski June 30, 2026](https://lexogrine.com/blog/agentic-ai-workflows)
[
Lexogrine is now an AI-Ready Website with WebMCP Tools powered by Conscriba
Lexogrine is now an AI-ready website powered by Conscriba, exposing WebMCP tools that help AI agents understand services, navigate key pages, and support agent-driven discovery. Learn what WebMCP optimization means, how AI-ready websites work, and why structured tools may become important for companies preparing for the agentic web.
 Michael Majka June 1, 2026](https://lexogrine.com/blog/lexogrine-ai-ready-website-webmcp-conscriba)
 AI, web, mobile & smart glasses technologies excellence.
 
 
 
 
 
Menu
Success Stories
https://lexogrine.com/success-stories
About us
https://lexogrine.com/about-us
Blog
https://lexogrine.com/blog
Technologies
LLM & Generative AI
https://lexogrine.com/technologies/llm-development
React
https://lexogrine.com/technologies/react-development
Node.js
https://lexogrine.com/technologies/nodejs-development
React Native
https://lexogrine.com/technologies/react-native-development
AWS & GCP
https://lexogrine.com/technologies/aws-google-cloud-platform-development
Industries
Healthcare
https://lexogrine.com/industries/healthcare
Fintech
https://lexogrine.com/industries/fintech
AI Services
Custom AI Agents
https://lexogrine.com/services/ai-agents-development
AI Development
https://lexogrine.com/services/ai-development
Generative AI
https://lexogrine.com/services/generative-ai-llm-development
Development
Web Development
https://lexogrine.com/services/web-development
Mobile Development
https://lexogrine.com/services/mobile-development
Cloud Services
https://lexogrine.com/services/cloud-services
Smart Glasses
https://lexogrine.com/services/smart-glasses-apps-development
Strategy
Product Workshops
https://lexogrine.com/services/product-workshops
Digital Strategy
https://lexogrine.com/services/digital-strategy
Design
https://lexogrine.com/services/design
Contact
Let's talk!
https://lexogrine.com/contact-us
Work with us
https://lexogrine.com/blog/openai-swarm-multi-agent-framework-2026
2026 LEXOGRINE®. ALL RIGHTS RESERVED.