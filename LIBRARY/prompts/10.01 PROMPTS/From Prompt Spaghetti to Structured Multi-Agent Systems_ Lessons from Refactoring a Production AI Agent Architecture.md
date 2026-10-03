# From Prompt Spaghetti to Structured Multi-Agent Systems: Lessons from Refactoring a Production AI Agent Architecture | AWS Builder Center

Source URL: https://builder.aws.com/content/3AfCno58Bsm4AbKaFKYiaDgeOkK/from-prompt-spaghetti-to-structured-multi-agent-systems-lessons-from-refactoring-a-production-ai-agent-architecture

From Prompt Spaghetti to Structured Multi-Agent Systems: Lessons from Refactoring a Production AI Agent Architecture | AWS Builder Center
Select your cookie preferences
We use essential cookies and similar tools that are necessary to provide our site and services. We use performance cookies to collect anonymous statistics, so we can understand how customers use our site and make improvements. Essential cookies cannot be deactivated, but you can choose “Customize” or “Decline” to decline performance cookies.
If you agree, AWS and approved third parties will also use cookies to provide useful site features, remember your preferences, and display relevant content, including relevant advertising. To accept or decline all non-essential cookies, choose “Accept” or “Decline.” To make more detailed choices, choose “Customize.”
Accept Decline Customize
Customize cookie preferences
We use cookies and similar tools (collectively, "cookies") for the following purposes.
Essential
Essential cookies are necessary to provide our site and services and cannot be deactivated. They are usually set in response to your actions on the site, such as setting your privacy preferences, signing in, or filling in forms.
Performance
Performance cookies provide anonymous statistics about how customers navigate our site so we can improve site experience and performance. Approved third parties may perform analytics on our behalf, but they cannot use the data for their own purposes.
 
[x]
Allowed
Functional
Functional cookies help us provide useful site features, remember your preferences, and display relevant content. Approved third parties may set these cookies to provide certain site features. If you do not allow these cookies, then some or all of these services may not function properly.
 
[x]
Allowed
Advertising
Advertising cookies may be set through our site by us or our advertising partners and help us deliver relevant marketing content. If you do not allow these cookies, you will experience less relevant advertising.
 
[x]
Allowed
Blocking some types of cookies may impact your experience of our sites. You may review and change your choices at any time by selecting Cookie preferences in the footer of this site. We and selected third-parties use cookies or similar technologies as specified in the 
AWS Cookie Notice
https://aws.amazon.com/legal/cookies/
 .
Cancel Save preferences
Your privacy choices
We and our advertising partners (“we”) may use information we collect from or about you to show you ads on other websites and online services. Under certain laws, this activity is referred to as “cross-context behavioral advertising” or “targeted advertising.”
To opt out of our use of cookies or similar technologies to engage in these activities, select “Opt out of cross-context behavioral ads” and “Save preferences” below. If you clear your browser cookies or visit this site from a different device or browser, you will need to make your selection again. For more information about cookies and how we use them, read our 
Cookie Notice
https://aws.amazon.com/legal/cookies/
 .
 
[x] allowed
Allow cross-context behavioral ads
 
[-] not allowed
 
Opt out of cross-context behavioral ads
To opt out of the use of other identifiers, such as contact information, for these activities, fill out the form 
here
https://pulse.aws/application/ZRPLWLL6?p=0
 .
For more information about how AWS handles your information, read the 
AWS Privacy Notice
https://aws.amazon.com/privacy/
 .
Cancel Save preferences
Unable to save cookie preferences
We will only store essential cookies at this time, because we were unable to save your cookie preferences.
If you want to change your cookie preferences, try again later using the link in the AWS console footer, or contact support if the problem persists.
Dismiss 
 

https://builder.aws.com/settings
Sign in 

https://builder.aws.com/settings
Sign in
More 
Sign in
More
Builder Center
https://builder.aws.com/
Home
https://builder.aws.com/
Learn
https://builder.aws.com/learn
Topics
https://builder.aws.com/learn/topics
Build
https://builder.aws.com/build
Capabilities
https://builder.aws.com/build/capabilities
Toolbox
https://builder.aws.com/build/tools
Workshops
https://builder.aws.com/build/workshops
 New
Connect
https://builder.aws.com/connect
Events
https://builder.aws.com/connect/events
Spaces
https://builder.aws.com/connect/spaces
Community
https://builder.aws.com/community
Heroes
https://builder.aws.com/community/heroes
Community Builders
https://builder.aws.com/community/community-builders
User Groups
https://builder.aws.com/community/user-groups
Student Builder Groups
https://builder.aws.com/community/student-builder-groups
Wishlist
https://builder.aws.com/wishlist
Explore AWS
Support articles
https://repost.aws/channels/aws-support-official
What's new
https://aws.amazon.com/new
Skill Builder
https://skillbuilder.aws/
Kiro
https://kiro.dev/
Open Source
https://aws.amazon.com/opensource
Startups
https://startups.aws/
AWS Builder Center
https://builder.aws.com/
...
From Prompt Spaghetti to Structured Multi-Agent Systems: Lessons from Refactoring a Production AI Agent Architecture
AWS Builder Center
https://builder.aws.com/
From Prompt Spaghetti to Structured Multi-Agent Systems: Lessons from Refactoring a Production AI Agent Architecture
From Prompt Spaghetti to Structured Multi-Agent Systems: Lessons from Refactoring a Production AI Agent Architecture
A production multi-agent system had ballooned to 30,000 input tokens per request, buried under layers of "DO NOT" patches and duplicated formatting logic. This post walks through six concrete problems we found and the refactoring patterns that cut token usage by 70% and halved latency — including structured inter-agent protocols, positive prompt specifications, and thin routing.
 
Vasileios
https://builder.aws.com/community/@bbonik
Follow
AWS Employee
Published Mar 8, 2026
Last modified Mar 9, 2026
2 0
From Prompt Spaghetti to Structured Multi-Agent Systems: Lessons from Refactoring a Production AI Agent Architecture
How we cut token consumption by approximately 70%, reduced latency by half, and made our multi-agent system actually maintainable.
The Starting Point Everyone Recognizes
If you've built an LLM-powered agent that went to production, this story will feel familiar.
It starts innocently. You write a system prompt for a single agent. It works. Users love it. Then edge cases appear. The agent formats a response wrong — you add a formatting rule. It hallucinates an ID — you add a "NEVER fabricate" instruction. It picks the wrong tool — you add a keyword list. It asks for confirmation when it shouldn't — you add a flow priority section.
Six months later, your "simple prompt" is 5,000 tokens of accumulated scar tissue: a patchwork of 
DO NOT
 , 
NEVER
 , 
CRITICAL
 , and 
IMPORTANT
 directives, each one a monument to a bug that happened once in production.
We experienced this. We had to interact with a multi-agent system — a routing agent that classified user intent and dispatched to 3 specialist agents, each with their own tools. It worked, but it was slow, expensive, and a nightmare to maintain. This post is about what we learned turning it into a simpler, more efficient and maintenable version of it.
Multi-agent architectures
Before diving into our specific system, it's worth understanding the landscape. There are several common patterns for multi-agent collaboration, each with different tradeoffs.
A) Orchestrator / Router → Specialists
A central agent classifies intent and dispatches to the right specialist. Communication is hub-and-spoke: specialists never talk to each other. The orchestrator owns the user interaction and formats all output.
Image Not Found!
Router-based agentic architecture
Pros: Simple to reason about, clear ownership, easy to debug. Each specialist is independently deployable and testable.
Cons: The router is a single point of failure. Cross-domain tasks require multiple sequential dispatches.
B) Swarm (Peer-to-Peer)
Every agent can communicate with every other agent. There's no central coordinator — agents decide among themselves who should handle what, passing context laterally.
Image Not Found!
Swarm (Peer-to-Peer) agentic architecture
Pros: Flexible, resilient — no single point of failure. Good for exploratory or creative tasks where the path isn't known upfront.
Cons: Hard to debug, hard to control costs, conversation context can explode. Agents may loop or duplicate work. Not ideal for structured operational workflows.
C) Hierarchical (Executive → Managers → Workers)
A tree structure where an executive agent delegates to manager agents, which in turn delegate to worker agents. Each level has a narrower scope and more specific tools.
Image Not Found!
Hierarchical agentic architecture
Pros: Scales to very complex domains. Each level can use a different model (cheap for executives, capable for workers). Good for large organizations with many sub-domains.
Cons: Deep chains multiply latency (each level is an LLM call). Over-engineering for most use cases. The "triple LLM tax" or worse.
D) Supervisor → Parallel Agents → Merge
A supervisor fans out work to multiple agents in parallel, then merges their results. Good for tasks where independent sub-problems can be solved concurrently.
Image Not Found!
Parallel agentic architecture
Pros: Fast for multi-faceted queries (all agents work simultaneously). Great for research, analysis, or aggregation tasks.
Cons: Requires a merge step that can be complex. Not all tasks decompose into independent sub-problems. Higher total token cost (all agents run on every request).
In our case: Orchestrator / Router
In our case, the orchestrator/router pattern (A) was already pre-selected, since the use case allowed user requests to be mapped to a single domain action. The intent is classifiable, the domains are well-bounded, and the specialists are independent. The hub-and-spoke topology keeps things debuggable and cost-efficient: only one specialist runs per request, and the router is a thin, fast classifier. 
1 User → Routing Agent → Specialist Agent → Backend Tools → Response → Routing Agent → User
The routing agent classifies what the user wants and dispatches to the right specialist. Each specialist has domain-specific tools (APIs, databases, automation scripts). The specialist does the work and returns results. The routing agent presents them to the user.
Simple in theory. In practice, every layer had accumulated complexity that compounded into a system that consumed 15,000–30,000 input tokens per request and took over a minute to respond.
It's worth noting that the original system was built around mid-2024 LLMs. Those models were noticeably weaker at following complex instructions and calling tools reliably. When the model misinterprets an instruction or picks the wrong tool, the natural reaction is to add more guardrails to the prompt — another 
DO NOT
 , another keyword list, another edge-case rule. Weaker models made more mistakes, which led to more reactive prompt patches, which accelerated the bloat cycle. Today's models (early 2026) are significantly better at instruction following and tool use, which means you can get away with shorter, more concise prompts. Many of the workarounds we'd accumulated were compensating for model limitations that no longer exist. That realization was a key motivator for the refactor.
Here's what went wrong, and what we did about it.
Problem 1: The Prompt Bloat Spiral
How It Happens
Every production bug becomes a new line in the prompt. The agent showed a task ID when it should have shown order data? Add six lines of "DO NOT show task metadata." The agent said "I'd be happy to help"? Add a negative example. The agent formatted checkboxes on the same line? Add a rendering rule with positive and negative examples.
In our case, the specialist agent prompts had ballooned to 3,000–5,000 tokens each. The routing agent was over 4,500 tokens. And here's the thing about negative instructions: they can actually 
prime
 the model to do the thing you're forbidding. The model has to internally represent the bad pattern to avoid it. Fifteen lines of "DON'T show X, Y, Z" may be less effective than one line describing what you 
do
 want.
The Fix: Positive Specification Over Negative Patching
We replaced every block of negative instructions with a single positive specification of the desired output.
Before
 (actual example, anonymized): 
1 2 3 4 5 6 7 8 9 - DO NOT mention Task IDs for sync operations - DO NOT format task results with headers, status, tool used, etc. - DO NOT show "Task Result", "Status: Completed", "Tool Used:" - DO NOT show "❌ Task Error (Task ID: TASK-XXXXX)" headers - DO NOT show "⚠ Task Status Check: Unsuccessful" sections - DO NOT show "Details:", "Possible Issues:", "Next Steps:" - DO NOT provide lengthy troubleshooting guides - DO NOT create formatted task result displays - DO NOT create formatted error displays with troubleshooting sections
After:
 
1 2 For sync results: return only the queried data fields. No task metadata, no headers, no status sections. For errors: one sentence stating what failed. No troubleshooting guides.
Nine lines became two. The model follows the positive spec more reliably than it avoids the negative list. And we saved tokens on every single request.
The Broader Pattern
We found this same bloat pattern everywhere:
Keyword lists for routing ("Keywords: order, cart, delivery, tracking, repush, purchase...") — modern LLMs don't need these for intent classification
Verbose "requesting additional information" templates duplicated across all agents
Formatting rules (checkbox styles, newline requirements) repeated in every prompt
The Model Factor
There's a compounding factor that's easy to miss: model capability. Our original prompts were written for mid-2024 models that were less reliable at instruction following and tool selection. When the model picked the wrong tool or ignored a formatting rule, the fix was always the same — add another line to the prompt. Weaker models meant more mistakes, which meant more patches, which meant more bloat. It was a feedback loop driven partly by the model's limitations, not just by product complexity.
With newer models, many of those patches become unnecessary. A modern model doesn't need a 15-line keyword list to classify intent, or six lines of 
DO NOT show X
 to avoid leaking task metadata. It follows a concise positive specification reliably. If you're inheriting a prompt that was written for an older model, a significant chunk of the bloat may be compensating for capabilities the model now has. Audit with that lens — you might be surprised how much you can cut.
Rule of thumb: if you're adding instructions to fix a specific bug, you're patching. Step back and rewrite the relevant section as a clear positive specification.
Problem 2: Everyone Was Formatting, Nobody Was in Charge
The Symptom
In this case, specialist agents were written as if they talked directly to users (possibly because probably they did, back in an older version of the system). They formatted responses with checkboxes (✅/❌), asked follow-up questions ("Would you like help with anything else?"), and suggested next steps. But they didn't talk to users — they talked to the routing agent, which then talked to users.
This created a cascade of problems:
The specialist formatted a response → the routing agent re-formatted it → double the formatting tokens, inconsistent output
The specialist asked a follow-up question → the routing agent relayed it → the user responded → the routing agent had to route the response back — an unnecessary round trip
Formatting instructions were duplicated across all four agents: ~1,500–2,000 tokens per agent, ~6,000 tokens total, all saying the same thing
The Fix: Single Responsibility for Formatting
We established a clear rule: 
specialists are data services, the router is the presenter.
Specialist agents now return structured JSON. They never format for humans. They never ask follow-up questions. They never suggest next steps. They return data, errors, or a request for missing parameters — all as JSON (more details on this later). 
1 2 3 4 5 6 7 8 9 10 11 12 13 14 Specialist returns: { "status": "success", "action_performed": "order_inquiry", "data": { " Order Details": { " Order ID": "ORD-12345", "Status": "101 – In Process", "Current Node": "Processing Stage 3" } }, "errors": ["Stuck at processing stage 3"], "suggested_next_action": "order_repush" }
The routing agent — the only user-facing component — converts this to formatted text. One place owns formatting. One set of rendering rules. One place to update when the UI changes.
This single change eliminated ~4,500 tokens of duplicated formatting instructions across the system.
Problem 3: Natural Language Between Agents Is Expensive and Lossy
The Anti-Pattern
In our original system, the routing agent passed the user's full natural language query to the specialist agent. The specialist then had to:
Re-parse the intent (the router already did this)
Re-extract parameters (the router already identified these)
Decide which tool to call
Call the tool
Format the response as rich text
Return it to the routing agent
The routing agent then re-read the rich text, potentially re-formatted it, and presented it to the user. Steps 1–2 were pure duplication. Steps 5–6 and the re-formatting were the double-formatting problem from above.
The Fix: A Structured Inter-Agent Protocol
We defined a strict JSON contract between agents. The routing agent sends structured input (action, parameters, context); specialists return structured output (status, data, errors). Each boundary in the system uses the communication format that makes sense for it:
Image Not Found!
Inter-Agent Protocol
Natural language at the user boundary (where it belongs), structured JSON between agents (where precision matters), and standard tool protocols at the backend boundary.
The specialist no longer needs to re-parse intent or re-extract parameters — it receives them pre-structured. The routing agent no longer needs to parse rich text — it receives structured data it can render deterministically. This eliminated the double-parsing, double-formatting overhead and made the system significantly more predictable.
We cover the full protocol design — input/output contracts, the four response shapes, and rendering rules — in the 
Structured Protocol in Detail
https://builder.aws.com/content/3AfCno58Bsm4AbKaFKYiaDgeOkK/from-prompt-spaghetti-to-structured-multi-agent-systems-lessons-from-refactoring-a-production-ai-agent-architecture#the-structured-protocol-in-detail
 section below.
A good practice is also to create a protocol reference document that serves as the single source of truth for humans — developers, reviewers, new team members. The actual protocol rules are embedded in each agent's system prompt (because that's what the model reads), but the reference doc is where you go to understand the contract, verify consistency, and propagate changes. This adds to the maintenability of the system in the long run.
Problem 4: The Routing Agent Knew Too Much
The Symptom
In our case, the routing agent's system prompt contained detailed knowledge about how each specialist worked internally: which parameters had which formats, which tool to prefer over another for specific edge cases, async vs. sync patterns for specific operations, detailed ticket creation flows.
This is backwards. The routing agent's job is classification and dispatch. It needs to know 
what
 each specialist handles, not 
how
 they handle it.
The Fix: Thin Router, Smart Specialists
We stripped the routing agent down to essentials:
What domain each specialist covers (one line each)
What actions are available and their parameter requirements
Which actions are read-only vs. write (to know when to ask for confirmation)
How to render the four JSON response shapes for the user
That's it. The routing agent went from ~4,500 tokens to ~1,200 tokens. All the domain logic lives in the specialists, where it belongs.
Before
 (routing agent prompt excerpt): 
1 2 3 4 5 6 For "Unable to Access/Login/Sign Up" issues → route to subscriber agent with brand_sync action ( NOT subscriber_inquiry). subscriber_inquiry is for general subscriber lookup only. If user provides phone number in same message, include it. If not, ask for phone number first... [ 200 more tokens of specialist- specific logic]
After:
 
1 2 3 4 subscriber_agent — Subscriber & operations brand_sync (phone_number) — WRITE — for app access/login/signup issues subscriber_inquiry (phone_number) — READ ...
The routing agent sees that 
brand_sync
 is for "app access/login/signup issues" and routes accordingly. The specialist agent handles all the nuance of 
how
 brand sync works. Clean separation.
Model Selection Matters
We opted for a smaller/faster/cheaper model for routing (e.g. Claude Haiku) and a more capable model for specialists (e.g. Claude Sonnet). The routing task is simple classification — it doesn't need the reasoning power of a larger model. The specialist task involves understanding tool responses, handling edge cases, and producing structured output — it benefits from a stronger model.
This asymmetric model selection cut our routing cost significantly without affecting quality.
Problem 5: The Overloaded Specialist
The Problem
One of our specialist agents handled 30+ tools. Every request to that agent loaded descriptions for all 30+ tools into context, even when only one tool was needed. A simple subscriber lookup paid the token cost of payment processing, device management, bulk operations, and everything else.
Options We Considered
Split into multiple focused agents
 — e.g., a Subscriber Agent, a Payments Agent, an Operations Agent. Each loads only its own tools. Clean, but adds more agents to deploy and manage.
Dynamic tool loading
 — The routing agent classifies the intent, and only the relevant tool descriptions are injected into the specialist's prompt. Fewer agents, but more complex prompt assembly.
Accept the cost
 — If the specialist model is fast enough and the tool descriptions are concise, the overhead may be acceptable.
We went with option 1 for the highest-traffic domains and kept the remaining low-traffic tools grouped together. The key insight: 
don't optimize prematurely, but don't ignore a 30-tool prompt either.
 If one agent handles 5–8 tools, the overhead is manageable. At 30+, you're paying a real cost on every request.
Problem 6: The Double LLM Tax
The Cost
Every user request required at minimum two full LLM inference cycles: 
1 2 Cycle 1: Routing agent loads system prompt → reasons → selects specialist Cycle 2: Specialist loads system prompt → reasons → calls tool → formats response
For a request like "check order ORD-12345" — where the intent is obvious and the parameter is right there — the routing step adds 5–10 seconds of latency and thousands of tokens for zero value.
The Fix: Bypass Routing When Intent Is Known
If your UI has predefined action buttons ("Check Order Status", "Cancel Request", "Subscriber Lookup"), the intent is already classified. Skip the routing agent entirely and call the specialist directly. 
1 2 3 UI button "Check Order" + user provides Order ID → Call order specialist directly with: {"action": "order_inquiry", "parameters": {"order_id": "ORD-12345"}}
For freeform text queries, keep the routing agent. But for structured inputs from the UI, the routing agent adds latency and cost with no benefit.
The Structured Protocol in Detail
The inter-agent protocol was the single highest-impact change we made. Here's the full design.
Input Contract (Router → Specialist)
1 2 3 4 5 { "action": "action_name", "parameters": {"key": "value"}, "user_context": "One-line summary of what the user wants" }
action
 must be a valid action for the target specialist
parameters
 contains all identified inputs
user_context
 provides human-readable context (useful for error messages, ticket descriptions)
Output Contract (Specialist → Router)
Four shapes, exactly one per response:
success
 — action completed, here's the data: 
1 2 3 4 5 6 7 8 { "status": "success", "action_performed": "action_name", "data": {"Section Name": {"Field": "value"}}, "errors": [], "message": "optional recommendation", "suggested_next_action": "follow_up_action | null" }
error
 — action failed: 
1 2 3 4 5 6 7 { "status": "error", "action_performed": "action_name", "data": null, "errors": ["What went wrong"], "suggested_next_action": "create_ticket | null" }
needs_input
 — missing required parameters: 
1 2 3 4 5 6 7 8 { "status": "needs_input", "action_performed": "intended_action", "missing_params": [ {"name": "param_name", "label": "Display Label", "format": "format hint"} ], "any_one_sufficient": true }
async
 — long-running operation started: 
1 2 3 4 5 6 { "status": "async", "action_performed": "action_name", "task_id": "TASK-XXX", "message": "Description of what's happening" }
Rendering Rules (Router Only)
The routing agent has simple, deterministic rules for converting each shape to user-facing text:
success
 → Section headers, checkboxes for fields, error indicators, suggested next action as a CTA
error
 → Brief statement of what failed, suggest escalation
needs_input
 → Ask user for missing parameters with format hints
async
 → Inform user of background task with ID
These rules live in one place. When the UI changes, you update one prompt.
Key Protocol Rules
Specialists NEVER ask follow-up questions — they return data or errors
Specialists NEVER format for end users — they return structured JSON only
Only the routing agent interacts with the user
READ actions → router proceeds immediately, no confirmation needed
WRITE actions → router asks user for confirmation before calling
Context Carry-Forward: The Subtle Bug
One troubling issue was that the routing agent would confirm a follow-up action with the user ("Should I retry that operation?"), the user would say "yes," and the routing agent would pass "yes" to the specialist agent. The specialist, having no memory of the previous conversation, had no idea what "yes" referred to.
The Fix
When the user confirms a follow-up action, the routing agent must extract all relevant identifiers from the previous tool response and build a complete, self-contained query for the specialist.
Wrong:
 
1 2 User: "yes" Router sends to specialist: "yes"
Right:
 
1 2 3 4 5 6 7 User: "yes" Router sends to specialist: { "action": "order_repush", "parameters": {"order_id": "ORD-12345"}, "user_context": "User confirmed repush for stuck order at processing stage 3" }
Every specialist call must be self-contained. The specialist has no memory. Treat every call as if the specialist is hearing about this for the first time.
Why Not Just Add Memory?
A natural reaction to this problem is: "give the specialist memory so it knows what happened before." That would work — but it comes with tradeoffs worth thinking through.
If you add memory to the specialists, each specialist now carries conversation history across calls. That means the specialist could resolve "yes" on its own by looking back at what it previously returned. But it also means every specialist call loads prior turns into context, increasing token cost on every request — even the majority of calls that are simple, self-contained, first-time queries. You're paying the memory tax on every request to solve a problem that only occurs on follow-ups. It also makes specialists harder to test and reason about, since their behavior now depends on prior state.
If you add memory to the router instead, the router can look back at the previous specialist response, extract the relevant identifiers, and build a complete self-contained call — which is exactly the pattern we described above. The router already has conversation history (it's the user-facing agent), so this adds no extra cost. The specialists stay stateless and predictable.
We went with stateless specialists and a context-aware router. The router already has the conversation history it needs to resolve follow-ups. Keeping specialists stateless means they're easier to test, cheaper to run, and behave identically whether it's the first call or the fifth. Memory is a useful tool, but in a hub-and-spoke architecture, the hub is usually the right place for it — not the spokes.
The Numbers
After the refactoring:
Metric
Before
After
Improvement
Tokens per request (input)
15,000–30,000
3,000–8,000
~70% reduction
Routing agent prompt
~4,500 tokens
~1,200 tokens
73% smaller
Specialist prompts (avg)
~4,000 tokens
~1,500 tokens
62% smaller
Duplicated formatting tokens
~6,000 across system
~0 (one location)
Eliminated
End-to-end latency
60–120 seconds
30–50 seconds
~50% faster
The token reduction directly translates to cost savings and faster inference. Smaller prompts mean the model processes them faster. Structured protocols mean less reasoning overhead. Eliminating the routing step for known intents removes an entire LLM call.
Practical Recommendations
If you're building or refactoring a multi-agent system, here's some prioritized advice:
Do First (High Impact, Moderate Effort)
Audit your prompts for bloat.
 Search for "NEVER", "DO NOT", "CRITICAL", "IMPORTANT". Each one is likely a patch. Rewrite as positive specifications.
Define a structured protocol between agents.
 JSON in, JSON out. No natural language passing between agents. This is the single highest-leverage change.
Assign formatting responsibility to exactly one layer.
 Either the routing agent or the UI code. Not both. Not the specialists.
Do Next (High Impact, Higher Effort)
Use a cheap/fast model for routing, a capable model for specialists.
 The routing task is simple classification. Don't pay for reasoning power you don't need.
Bypass routing for known intents.
 If the UI already knows what the user wants, skip the classification step.
Split overloaded agents.
 If a specialist has more than ~8–10 tools, consider splitting it. Every tool description is loaded on every call.
Do Later (Optimization)
Dynamic tool loading.
 Only inject tool descriptions relevant to the classified intent.
Response caching.
 For read-only queries, cache results for short periods.
Token monitoring.
 Track usage per request, per agent. Set alerts for anomalies.
Periodically evaluate newer models.
 Advancements in model capabilities happen on daily basis. Newer models may be able to handle complex cases without you having to explicitly mention every posibility.
The Meta-Lesson
The biggest lesson isn't about any specific technique. It's about how agent systems degrade over time.
Every production bug creates pressure to add a rule. Every rule adds tokens. Every token adds latency and cost. Over months, you end up with a system that's 3x more expensive and 2x slower than it needs to be, held together by hundreds of "NEVER do X" instructions that fight each other.
The antidote is periodic refactoring with clear principles:
Positive specification over negative patching
Structured contracts over natural language passing
Single responsibility for each concern (routing, domain logic, formatting)
Thin routers, smart specialists
# agentic-ai
https://builder.aws.com/learn/topics/agentic-ai?tab=article
# agents
https://builder.aws.com/learn/topics/agents?tab=article
# agent-to-agent
https://builder.aws.com/learn/topics/agent-to-agent?tab=article
# multi-agent-orchestrator
https://builder.aws.com/learn/topics/multi-agent-orchestrator?tab=article
# agentic-interactions
https://builder.aws.com/learn/topics/agentic-interactions?tab=article
Any opinions in this article are those of the individual author and may not reflect the opinions of AWS.
2 0
Comments (0)
Sign in to comment Sign in
Be the first to comment!
About
https://builder.aws.com/start
 
FAQs
https://builder.aws.com/faq
 
Support
https://builder.aws.com/support
 
AWS Builder Terms
https://builder.aws.com/terms
Accessibility
https://aws.amazon.com/accessibility/
 
Privacy
https://aws.amazon.com/privacy/
 
Site Terms
https://aws.amazon.com/terms/
Your Privacy Choices
Cookie preferences
© 2026, Amazon Web Services, Inc. or its affiliates. All rights reserved.