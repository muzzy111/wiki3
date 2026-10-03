# Multi-agent loop failures might be org-design failures, not prompt failures : r/artificial - Reddit

Source URL: https://www.reddit.com/r/artificial/comments/1tme23u/multiagent_loop_failures_might_be_orgdesign/

Multi-agent loop failures might be org-design failures, not prompt failures : r/artificial
Skip to main content
https://www.reddit.com/r/artificial/comments/1tme23u/multiagent_loop_failures_might_be_orgdesign/#main-content
 Multi-agent loop failures might be org-design failures, not prompt failures : r/artificial
Open menu
Open navigation 

https://www.reddit.com/
Go to Reddit Home
Ask
https://www.reddit.com/answers/
Find anything
Sign Up
https://www.reddit.com/register/
Sign up for Reddit
Log In
https://www.reddit.com/login/
Log in to Reddit
Expand user menu
Open settings menu
Skip to Sign up
https://www.reddit.com/r/artificial/comments/1tme23u/multiagent_loop_failures_might_be_orgdesign/#left-sidebar-container
 
Skip to Right Sidebar
https://www.reddit.com/r/artificial/comments/1tme23u/multiagent_loop_failures_might_be_orgdesign/#right-sidebar-container
Back
Go to artificial
https://www.reddit.com/r/artificial/
r/artificial
https://www.reddit.com/r/artificial/
â€¢ 2mo ago
Hot-Leadership-6431
https://www.reddit.com/user/Hot-Leadership-6431/
Locked post
Stickied post
Archived post
Report
Multi-agent loop failures might be org-design failures, not prompt failures
Project
https://www.reddit.com/r/artificial/?f=flair_name%3A%22Project%22
Repo: 
https://github.com/jeongmk522-netizen/agentlas_org_chart
https://github.com/jeongmk522-netizen/agentlas_org_chart
Almost every multi-agent setup I have shipped or tested eventually hits the same wall. Agents bouncing between each other, reviewers asking for one more polish pass forever, research workers spawning indefinite subtopics, tool calls spiraling until the recursion limit kicks in. The framework docs usually call these "loops" and offer a max-iteration knob. I started suspecting the knob is treating a symptom, and the real issue is closer to how the agents are organized to begin with.
The pattern that kept reappearing: when agents are designed as peers (researcher talks to analyst, analyst talks to writer, writer hands back to reviewer), nobody clearly owns the outcome. Every agent can keep asking another agent for more work. The graph has stop conditions on paper, but no single agent has the authority to declare "this is done, stop the run." That authority is implicit at best and gets diluted across the peer network.
The hypothesis I am testing is that loop failures are organization-design failures more than prompt failures. The fix is to treat the agent network as an org chart with explicit reporting lines, not a chat room of peers. One accountable mission owner. One owner per workstream. Finite delegation depth. A typed return contract per worker (status, evidence, output, blockers, next action). Manager-only authority to reopen or terminate. Memory lives at the authority layers, specialists get scoped context only.
The layers I have been working with are roughly chair, strategy office, division manager, team lead, and specialist worker, with QA and policy as separate staff offices that can reject and escalate but cannot themselves spawn unbounded new work. The reviewer-recursion failure mode in particular gets killed when verifiers are structurally allowed one reject pass, then must escalate.
Frameworks already have most of the primitives. CrewAI has a hierarchical process where a manager validates worker output. LangGraph has supervisors, subagents, and an explicit recursion limit. OpenAI Agents SDK has manager-style orchestration distinct from peer handoffs. AutoGen has GroupChatManager. Anthropic's published research system is orchestrator-worker. What I think is underused is treating the manager not as a moderator for an open group chat but as a formal reporting line with authority to terminate.
Two things I am unsure about. First, hierarchy can become its own bottleneck. If every decision routes upward, the chair agent becomes a single point of latency and a single point of failure. Second, escalation-as-feature only works if the top of the org chart has real stop authority. If the chair just calls another LLM that calls more LLMs, the loop just moved one floor up.
Upvote 14 Downvote 21 Go to comments
Share
Sort by: Top (Default)
Open comment sort options
Best
Top (Default)
New
Controversial
Old
Q&A
Search Comments Expand comment search
Cancel
Comments Section
ultrathink-art
https://www.reddit.com/user/ultrathink-art/
â€¢ 
2mo ago
https://www.reddit.com/r/artificial/comments/1tme23u/comment/onmuhf2/
Consistent with what I've seen â€” when two agents can both modify the same resource, neither treats the other's changes as authoritative. The loop isn't the model forgetting; it's competing writes with no conflict resolution layer. Prompting can't fix structural ownership gaps.
Upvote 1 Downvote Reply Award
Share
Report
Award
Share
tom_reddit
https://www.reddit.com/user/tom_reddit/
â€¢ 
2mo ago
https://www.reddit.com/r/artificial/comments/1tme23u/comment/onmv54u/
Agents can say â€˜noâ€™ but manager agents can say â€˜yesâ€™. Build this concept into execution agents and it stops the forever loop problem. Peer work Agent 1 asks agent 2 for another revision and Agent 2 has only two choices.
First, say no. This is fine because the final product goes through acceptance criteria later in the pipeline as good enough or not.
Second, escalate. Make your manager agent be the decider. If the manager reviews Agent 2â€™s ask of deciding if they should do another revision per Agent 1â€™s request it will then confirm either Agent 1 or Agent 2. If yes, agent 2 confirms with Agent 1 theyâ€™ll do another round.
Manager agent can track escalation requests. Set a max threshold of 2-3 requests before default to no.
The simple yes/no toggle has worked for me in most content / code related cases. Iâ€™m adding it to all future designs too.
Upvote 1 Downvote Reply Award
Share
Report
Award
Share
tdondich
https://www.reddit.com/user/tdondich/
â€¢ 
2mo ago
https://www.reddit.com/r/artificial/comments/1tme23u/comment/onn0qz3/
AI agents can only perform as good as the tools and documentation they are given. Same as human counterparts. If a human might get stuck and try the same things over and over, your AI is going to do it as well. Identify and then fix the org/doc/process. Stop treating an AI agent (or in what we call, AI fellow) as something that doesn't need the same training and context as a human employee.
Upvote 1 Downvote Reply Award
Share
Report
Award
Share 
Hot-Leadership-6431
https://www.reddit.com/user/Hot-Leadership-6431/
OP â€¢ 
2mo ago
https://www.reddit.com/r/artificial/comments/1tme23u/comment/onoou1g/
That's real. The quality changes if you educate with sufficient effort and questions, no matter what task you do.
Upvote 1 Downvote Reply Award
Share
Report
Award
Share
More replies
https://www.reddit.com/r/artificial/comments/1tme23u/comment/onn0qz3/?force-legacy-sct=1
 
Hot-Leadership-6431
https://www.reddit.com/user/Hot-Leadership-6431/
OP â€¢ 
2mo ago
https://www.reddit.com/r/artificial/comments/1tme23u/comment/onooxzw/
Giving GitHub Star will be a great help for future research...
Upvote 1 Downvote Reply Award
Share
Report
Award
Share 
TheMrCurious
https://www.reddit.com/user/TheMrCurious/
â€¢ 
2mo ago
https://www.reddit.com/r/artificial/comments/1tme23u/comment/onoqmqz/
Sounds like a problem with how youâ€™ve been designing them if your designs consistently fail like this.
Upvote 1 Downvote Reply Award
Share
Report
Award
Share
Shingikai
https://www.reddit.com/user/Shingikai/
â€¢ 
2mo ago
https://www.reddit.com/r/artificial/comments/1tme23u/comment/onp94yw/
Adding a chair solves who's allowed to say stop. It doesn't solve why the loop forms in the first place. The reviewer keeps asking for one more pass because nothing tells it the current output is actually good enough. Move that judgment call up a layer and the chair still has to decide "is this done?" using the same kind of self-evaluation that got the reviewer stuck.
What breaks the loop is a verification signal that doesn't come from inside the working agent's own reasoning. When a model from a different family looks at the output and says "yes this answers the question," that's information the chain didn't have. When it disagrees, that's also information. Either way you've gotten a stop signal that isn't just "the same model decided it's done."
I think your second worry is the bigger one. Escalation as a stop mechanism only works if the top of the chart has access to something the workers don't, and "another LLM call" isn't it. Cross-model agreement, schema-conformance checks, or just a deterministic "did the output match the contract" check are better stop signals than another layer of LLM judgment.
Upvote 1 Downvote Reply Award
Share
Report
Award
Share 
geekfoxcharlie
https://www.reddit.com/user/geekfoxcharlie/
â€¢ 
2mo ago
https://www.reddit.com/r/artificial/comments/1tme23u/comment/onq7un6/
the typed return contract per worker is doing more heavy lifting here than the org chart itself tbh. you can have the cleanest reporting lines in the world, but if a worker returns a naked string instead of something like {status: enum, evidence: list, confidence: float}, the manager still needs an LLM call to figure out if the work is actually done â€” which is the exact loop you're trying to avoid
the moment you can write a deterministic check (did the output match the schema? is confidence above threshold?) you've got a cheap stop signal that doesn't burn another model invocation. the hierarchy just decides who sees that signal first
Upvote 1 Downvote Reply Award
Share
Report
Award
Share
Born-Exercise-2932
https://www.reddit.com/user/Born-Exercise-2932/
â€¢ 
2mo ago
https://www.reddit.com/r/artificial/comments/1tme23u/comment/onqs69e/
 
Top 1% Commenter
the competing writes framing is exactly right and it's underdiagnosed. most teams debug agent loops at the prompt level when the actual issue is that two agents have overlapping write permissions on the same state with no arbitration layer. you can patch it with hard revision caps but the real fix is treating shared resources like you would in any distributed system, with ownership and locking, not just better instructions
Upvote 1 Downvote Reply Award
Share
Report
Award
Share
nkondratyk93
https://www.reddit.com/user/nkondratyk93/
â€¢ 
2mo ago
https://www.reddit.com/r/artificial/comments/1tme23u/comment/onrmodt/
makes sense. agents with unclear ownership spiral exactly the way ambiguous orgs do.
Upvote 1 Downvote Reply Award
Share
Report
Award
Share
South_Hat6094
https://www.reddit.com/user/South_Hat6094/
â€¢ 
2mo ago
https://www.reddit.com/r/artificial/comments/1tme23u/comment/onrtg2a/
biggest tell is when you add a reviewer agent and suddenly everything takes 4x longer. same thing happens in real teams when nobody owns the final call. the loop is a management problem.
Upvote 1 Downvote Reply Award
Share
Report
Award
Share 
One-Wolverine-6207
https://www.reddit.com/user/One-Wolverine-6207/
â€¢ 
2mo ago
https://www.reddit.com/r/artificial/comments/1tme23u/comment/oo2erze/
This rings true, and the best comment here nails the mechanism: when two agents can both modify the same resource and neither treats the other's change as authoritative, you do not have a reasoning loop, you have an ownership problem. The max-iteration knob is just capping the symptom.
The reframe that helped me was to stop thinking of it as prompt design and start thinking of it as state design. Who is allowed to write what, whose write is authoritative, and how does a third agent know the current decision is final and not just the latest opinion. The moment shared state has clear ownership and provenance, the reviewer-forever and subtopic-spiral loops mostly dissolve, because there is a definition of done that lives outside any single agent's head.
Org-design is a good analogy precisely because human orgs solved this with explicit ownership and a record of decisions, not with smarter individuals.
Upvote 1 Downvote Reply Award
Share
Report
Award
Share
Born-Exercise-2932
https://www.reddit.com/user/Born-Exercise-2932/
â€¢ 
2mo ago
https://www.reddit.com/r/artificial/comments/1tme23u/comment/onm41lw/
 
Top 1% Commenter
the org-design framing is accurate. agents loop because their coordination structure has no clear terminal condition, same reason human teams spin when accountability is ambiguous. the max-iteration knob is just a circuit breaker on a design problem you haven't solved yet
Upvote 0 Downvote Reply Award
Share
Report
Award
Share
Born-Exercise-2932
https://www.reddit.com/user/Born-Exercise-2932/
â€¢ 
2mo ago
https://www.reddit.com/r/artificial/comments/1tme23u/comment/onm47m5/
 
Top 1% Commenter
the hierarchy-as-bottleneck concern is real but i'd frame it differently: the chair agent doesn't need to process every decision, it just needs terminal authority on termination, which is a much lighter duty than being involved in actual work
Upvote 0 Downvote Reply Award
Share
Report
Award
Share
GillesCode
https://www.reddit.com/user/GillesCode/
â€¢ 
2mo ago
https://www.reddit.com/r/artificial/comments/1tme23u/comment/onmu0de/
 
Top 1% Commenter
Spent weeks debugging my orchestrator prompt before realizing two of my agents had overlapping responsibilities and were basically arguing over who should decide. The fix wasn't a better prompt, it was a cleaner org chart.
Upvote 0 Downvote Reply Award
Share
Report
Award
Share
People also ask about section
People also ask about
Best practices for multi-agent AI systems
https://www.reddit.com/answers/1b8cdd58-9360-4374-b51f-68a9bf734748/?q=Best+practices+for+multi-agent+AI+systems&source=PDP
Recommendations for tools in AI production
https://www.reddit.com/answers/aa1363ea-62ed-4129-bc9c-dc99204c6aaa/?q=Recommendations+for+tools+in+AI+production&source=PDP
Top AI solutions for large enterprises
https://www.reddit.com/answers/d01c6e16-101a-437f-af00-3e428ab60336/?q=Top+AI+solutions+for+large+enterprises&source=PDP
Latest breakthroughs in AI technology
https://www.reddit.com/answers/1c74b57f-8802-440a-8747-96e4df82ddc6/?q=Latest+breakthroughs+in+AI+technology&source=PDP
How AI is transforming healthcare
https://www.reddit.com/answers/4da19d15-1e65-4fef-ac90-e92e17d51f68/?q=How+AI+is+transforming+healthcare&source=PDP
More posts you may like
Related posts
AntiGravity Agent terminated due to error, You can prompt the model to try again or start a new conversation if the error persists
https://www.reddit.com/r/Bard/comments/1ph6g7d/antigravity_agent_terminated_due_to_error_you_can/
 
r/Bard
https://www.reddit.com/r/Bard/
 â€¢ 7mo ago [
AntiGravity Agent terminated due to error, You can prompt the model to try again or start a new conversation if the error persists
](https://www.reddit.com/r/Bard/comments/1ph6g7d/antigravity_agent_terminated_due_to_error_you_can/) 
 55 upvotes Â· 255 comments
Multi-Agent Orchestration
https://www.reddit.com/r/artificial/comments/1ucl5hs/multiagent_orchestration/
 
r/artificial
https://www.reddit.com/r/artificial/
 â€¢ 19d ago [
Multi-Agent Orchestration
](https://www.reddit.com/r/artificial/comments/1ucl5hs/multiagent_orchestration/) 
 1:30 1 upvote Â· 18 comments
The missing layer between current AI and AGI may be intent architecture
https://www.reddit.com/r/ArtificialInteligence/comments/1s98glm/the_missing_layer_between_current_ai_and_agi_may/
 
r/ArtificialInteligence
https://www.reddit.com/r/ArtificialInteligence/
 â€¢ 3mo ago [
The missing layer between current AI and AGI may be intent architecture
](https://www.reddit.com/r/ArtificialInteligence/comments/1s98glm/the_missing_layer_between_current_ai_and_agi_may/) 20 comments
How are people gating unsafe tool calls in agents?
https://www.reddit.com/r/AI_Agents/comments/1rg847l/how_are_people_gating_unsafe_tool_calls_in_agents/
 
r/AI_Agents
https://www.reddit.com/r/AI_Agents/
 â€¢ 4mo ago [
How are people gating unsafe tool calls in agents?
](https://www.reddit.com/r/AI_Agents/comments/1rg847l/how_are_people_gating_unsafe_tool_calls_in_agents/) 4 upvotes Â· 24 comments
Most agent failures Iâ€™ve debugged werenâ€™t actually â€œAI problemsâ€
https://www.reddit.com/r/AI_Agents/comments/1sk2mbs/most_agent_failures_ive_debugged_werent_actually/
 
r/AI_Agents
https://www.reddit.com/r/AI_Agents/
 â€¢ 3mo ago [
Most agent failures Iâ€™ve debugged werenâ€™t actually â€œAI problemsâ€
](https://www.reddit.com/r/AI_Agents/comments/1sk2mbs/most_agent_failures_ive_debugged_werent_actually/) 26 upvotes Â· 26 comments
Multi agent systems are a total nightmare in production
https://www.reddit.com/r/AI_Agents/comments/1stzag4/multi_agent_systems_are_a_total_nightmare_in/
 
r/AI_Agents
https://www.reddit.com/r/AI_Agents/
 â€¢ 3mo ago [
Multi agent systems are a total nightmare in production
](https://www.reddit.com/r/AI_Agents/comments/1stzag4/multi_agent_systems_are_a_total_nightmare_in/) 57 upvotes Â· 67 comments
AI agents need audit trails more than they need more autonomy
https://www.reddit.com/r/artificial/comments/1tnarvu/ai_agents_need_audit_trails_more_than_they_need/
 
r/artificial
https://www.reddit.com/r/artificial/
 â€¢ 2mo ago [
AI agents need audit trails more than they need more autonomy
](https://www.reddit.com/r/artificial/comments/1tnarvu/ai_agents_need_audit_trails_more_than_they_need/) 42 upvotes Â· 46 comments
Experimenting with a multi-agent research loop, looking for best practices
https://www.reddit.com/r/AI_Agents/comments/1s398ep/experimenting_with_a_multiagent_research_loop/
 
r/AI_Agents
https://www.reddit.com/r/AI_Agents/
 â€¢ 4mo ago [
Experimenting with a multi-agent research loop, looking for best practices
](https://www.reddit.com/r/AI_Agents/comments/1s398ep/experimenting_with_a_multiagent_research_loop/) 12 upvotes Â· 17 comments
Are Multi-Agent AI Systems Actually Better, or Is a Single Agent Enough for Most Real-World Applications?
https://www.reddit.com/r/AI_Agents/comments/1u7cig9/are_multiagent_ai_systems_actually_better_or_is_a/
 
r/AI_Agents
https://www.reddit.com/r/AI_Agents/
 â€¢ 25d ago [
Are Multi-Agent AI Systems Actually Better, or Is a Single Agent Enough for Most Real-World Applications?
](https://www.reddit.com/r/AI_Agents/comments/1u7cig9/are_multiagent_ai_systems_actually_better_or_is_a/) 13 upvotes Â· 32 comments
Why â€œAI Agentsâ€ Fail Without Agent-Native Design
https://www.reddit.com/r/AI_Agents/comments/1qcif26/why_ai_agents_fail_without_agentnative_design/
 
r/AI_Agents
https://www.reddit.com/r/AI_Agents/
 â€¢ 6mo ago [
Why â€œAI Agentsâ€ Fail Without Agent-Native Design
](https://www.reddit.com/r/AI_Agents/comments/1qcif26/why_ai_agents_fail_without_agentnative_design/) 35 upvotes Â· 29 comments
Research: which rules you are using in your global system? (AGENTS.md / GEMINI.md)
https://www.reddit.com/r/google_antigravity/comments/1ull264/research_which_rules_you_are_using_in_your_global/
 
r/google_antigravity
https://www.reddit.com/r/google_antigravity/
 â€¢ 9d ago [
Research: which rules you are using in your global system? (AGENTS.md / GEMINI.md)
](https://www.reddit.com/r/google_antigravity/comments/1ull264/research_which_rules_you_are_using_in_your_global/) 20 upvotes Â· 18 comments
Hard truth: Most IT leaders are too operational to be strategic.
https://www.reddit.com/r/ModernITLeadership/comments/1rni7p3/hard_truth_most_it_leaders_are_too_operational_to/
 
r/ModernITLeadership
https://www.reddit.com/r/ModernITLeadership/
 â€¢ 4mo ago [
Hard truth: Most IT leaders are too operational to be strategic.
](https://www.reddit.com/r/ModernITLeadership/comments/1rni7p3/hard_truth_most_it_leaders_are_too_operational_to/) 4 upvotes Â· 3 comments
Wait, are workflows actually better than multi-agent systems?
https://www.reddit.com/r/AI_Agents/comments/1rp3fjd/wait_are_workflows_actually_better_than/
 
r/AI_Agents
https://www.reddit.com/r/AI_Agents/
 â€¢ 4mo ago [
Wait, are workflows actually better than multi-agent systems?
](https://www.reddit.com/r/AI_Agents/comments/1rp3fjd/wait_are_workflows_actually_better_than/) 10 upvotes Â· 14 comments
Multi-agent systems are an absolute nightmare in production
https://www.reddit.com/r/AgentsOfAI/comments/1tyin0h/multiagent_systems_are_an_absolute_nightmare_in/
 
r/AgentsOfAI
https://www.reddit.com/r/AgentsOfAI/
 â€¢ 1mo ago [
Multi-agent systems are an absolute nightmare in production
](https://www.reddit.com/r/AgentsOfAI/comments/1tyin0h/multiagent_systems_are_an_absolute_nightmare_in/) 93 upvotes Â· 41 comments
The weirdest thing about AI agents is how human failure patterns start showing up
https://www.reddit.com/r/AI_Agents/comments/1t6kzks/the_weirdest_thing_about_ai_agents_is_how_human/
 
r/AI_Agents
https://www.reddit.com/r/AI_Agents/
 â€¢ 2mo ago [
The weirdest thing about AI agents is how human failure patterns start showing up
](https://www.reddit.com/r/AI_Agents/comments/1t6kzks/the_weirdest_thing_about_ai_agents_is_how_human/) 43 upvotes Â· 31 comments
Nobody is talking about AI agent skills the same way we talked about npm packages and I have a bad feeling about where this is going
https://www.reddit.com/r/devsecops/comments/1rtwojq/nobody_is_talking_about_ai_agent_skills_the_same/
 
r/devsecops
https://www.reddit.com/r/devsecops/
 â€¢ 4mo ago [
Nobody is talking about AI agent skills the same way we talked about npm packages and I have a bad feeling about where this is going
](https://www.reddit.com/r/devsecops/comments/1rtwojq/nobody_is_talking_about_ai_agent_skills_the_same/) 31 upvotes Â· 13 comments
Incoming Level 2 PE/CCC - the NBOME needs to change.
https://www.reddit.com/r/comlex/comments/1tkgygk/incoming_level_2_peccc_the_nbome_needs_to_change/
 
r/comlex
https://www.reddit.com/r/comlex/
 â€¢ 2mo ago [
Incoming Level 2 PE/CCC - the NBOME needs to change.
](https://www.reddit.com/r/comlex/comments/1tkgygk/incoming_level_2_peccc_the_nbome_needs_to_change/) 17 upvotes Â· 5 comments
Anthropic just published new alignment research that could fix "alignment faking" in AI agents here's what it actually means
https://www.reddit.com/r/artificial/comments/1t4sj10/anthropic_just_published_new_alignment_research/
 
r/artificial
https://www.reddit.com/r/artificial/
 â€¢ 2mo ago [
Anthropic just published new alignment research that could fix "alignment faking" in AI agents here's what it actually means
](https://www.reddit.com/r/artificial/comments/1t4sj10/anthropic_just_published_new_alignment_research/) 52 upvotes Â· 15 comments
Ai assistant for the Soloprenuer
https://www.reddit.com/r/buildinpublic/comments/1sut4x4/ai_assistant_for_the_soloprenuer/
 
r/buildinpublic
https://www.reddit.com/r/buildinpublic/
 â€¢ 3mo ago [
Ai assistant for the Soloprenuer
](https://www.reddit.com/r/buildinpublic/comments/1sut4x4/ai_assistant_for_the_soloprenuer/) 
 2 1 upvote
We Shipped Smart Cost Optimization in Dvina Code
https://www.reddit.com/r/dvina/comments/1rjtep4/we_shipped_smart_cost_optimization_in_dvina_code/
 
r/dvina
https://www.reddit.com/r/dvina/
 â€¢ 4mo ago [
We Shipped Smart Cost Optimization in Dvina Code
](https://www.reddit.com/r/dvina/comments/1rjtep4/we_shipped_smart_cost_optimization_in_dvina_code/) 
 dvina 3 upvotes Â· 1 comment
Ai assistant for the Soloprenuer
https://www.reddit.com/r/Solopreneur/comments/1sute4u/ai_assistant_for_the_soloprenuer/
 
r/Solopreneur
https://www.reddit.com/r/Solopreneur/
 â€¢ 3mo ago [
Ai assistant for the Soloprenuer
](https://www.reddit.com/r/Solopreneur/comments/1sute4u/ai_assistant_for_the_soloprenuer/) 2 comments
AI agents are starting to expose how broken most workflows already were
https://www.reddit.com/r/AI_Agents/comments/1tbumcq/ai_agents_are_starting_to_expose_how_broken_most/
 
r/AI_Agents
https://www.reddit.com/r/AI_Agents/
 â€¢ 2mo ago [
AI agents are starting to expose how broken most workflows already were
](https://www.reddit.com/r/AI_Agents/comments/1tbumcq/ai_agents_are_starting_to_expose_how_broken_most/) 58 upvotes Â· 44 comments
NBIS Paris AI Colocation Node Analysis
https://www.reddit.com/r/NBIS_Stock/comments/1sik73d/nbis_paris_ai_colocation_node_analysis/
 
r/NBIS_Stock
https://www.reddit.com/r/NBIS_Stock/
 â€¢ 3mo ago [
NBIS Paris AI Colocation Node Analysis
](https://www.reddit.com/r/NBIS_Stock/comments/1sik73d/nbis_paris_ai_colocation_node_analysis/) 
 northwiseproject 27 upvotes Â· 14 comments
How are you managing multiple AI agents in your workflow right now?
https://www.reddit.com/r/AI_Agents/comments/1unlpva/how_are_you_managing_multiple_ai_agents_in_your/
 
r/AI_Agents
https://www.reddit.com/r/AI_Agents/
 â€¢ 7d ago [
How are you managing multiple AI agents in your workflow right now?
](https://www.reddit.com/r/AI_Agents/comments/1unlpva/how_are_you_managing_multiple_ai_agents_in_your/) 18 upvotes Â· 32 comments
Are AI agents reintroducing problems software engineering already solved?
https://www.reddit.com/r/ArtificialInteligence/comments/1uq0tn8/are_ai_agents_reintroducing_problems_software/
 
r/ArtificialInteligence
https://www.reddit.com/r/ArtificialInteligence/
 â€¢ 4d ago [
Are AI agents reintroducing problems software engineering already solved?
](https://www.reddit.com/r/ArtificialInteligence/comments/1uq0tn8/are_ai_agents_reintroducing_problems_software/) 21 upvotes Â· 18 comments
View Post in
FranÃ§ais
https://www.reddit.com/r/artificial/comments/1tme23u/multiagent_loop_failures_might_be_orgdesign/?tl=fr
PortuguÃªs (Brasil)
https://www.reddit.com/r/artificial/comments/1tme23u/multiagent_loop_failures_might_be_orgdesign/?tl=pt-br
See more See fewer
Italiano
https://www.reddit.com/r/artificial/comments/1tme23u/multiagent_loop_failures_might_be_orgdesign/?tl=it
Deutsch
https://www.reddit.com/r/artificial/comments/1tme23u/multiagent_loop_failures_might_be_orgdesign/?tl=de
EspaÃ±ol (LatinoamÃ©rica)
https://www.reddit.com/r/artificial/comments/1tme23u/multiagent_loop_failures_might_be_orgdesign/?tl=es-419
Community Info Section
r/artificial
https://www.reddit.com/r/artificial/
Join
Artificial Intelligence (AI)
Redditâ€™s home for Artificial Intelligence (AI)
Show more
Public
Anyone can view, post, and comment to this community
Home
https://www.reddit.com/?feed=home
Popular
https://www.reddit.com/r/popular/
News
https://www.reddit.com/news/
Explore
https://www.reddit.com/explore/
Best of Reddit
https://www.reddit.com/posts/2026/global/
Best of Reddit in Portuguese
https://www.reddit.com/posts/2026/tl-pt-BR/
Best of Reddit in German
https://www.reddit.com/posts/2026/tl-de/
Reddit Rules
https://www.redditinc.com/policies/content-policy
Privacy Policy
https://www.reddit.com/policies/privacy-policy
User Agreement
https://www.redditinc.com/policies/user-agreement
Your Privacy Choices
https://support.reddithelp.com/hc/articles/43980704794004
Accessibility
https://support.reddithelp.com/hc/sections/38303584022676-Accessibility
Reddit, Inc. Â© 2026. All rights reserved.
https://redditinc.com/
 
Join the most real place on the internet
Continue with Apple
ï£¿â€…Sign in with Apple
Continue with Phone Number
https://www.reddit.com/login/
Continue with Email
https://www.reddit.com/register/
By continuing, you agree to our 
User Agreement
https://www.redditinc.com/policies/user-agreement
 and acknowledge that you understand the 
Privacy Policy
https://www.redditinc.com/policies/privacy-policy
.
 
0cAFcWeA7iT7WcHcog8-kyRFtNPVAxIPX4Dd6ENGW2kziPMeffG5vrLjp25Xhu6QCxVLg_Q_1FohQpG7QVCV6cEG6OCPvf1VOsM8esVBv2BBXA-VLn4z6lL9B1_1W4OM3VUr6q43ApT0J07Edyn3GxQ_YhOF72YEWpW-glCZgnCvaJBiL3XUDN_5gYuflIym-6CcXXwHTQg9oI9sEBnFdLpbbwMzeHG0_3PYV2Yemdwu5GxhBySn3TUpF6Er5JZVMtAkMy14gjU1vEOUGefM7F9qmIcp0C_VEQ81KXP43ar3TXRaqM0icIQdve5VuA4t7yGEEH7m5cQ2KVHIJhK0UWvbck3N4PQpz1JNVggfrNSzFp4J4jBw6KcmJ1uWNfW_NvCucjFlAxrHT_W84BiWsNToTV0Z7oYjNS_jpeOPvC7drpxNxFJdgsQeVWIzhRbEuKJhd8vOH4UTgnrEVsXZOAkFQlkxjqkGrtvv9rIEecSflXjeU0CJwEfNFYNNoYLi-umXK4JkBLnuhFaehcvNnlTWsJ5tSVQxorrJpGKwt2XZ7npworuqmqEuVjCdG1GWJ2buZTFGuZH8ykuXgV-egMax_y2_vdN0n-7kuuxorzPp1usB-j3PAHoJYstl8sjO_ykOJTCPvm562pC-ymDINC8JSmWOm6_RVv_H-D3_R5ZjJtkjchIKolP8zQjMQstcqLGtx8rufjaefUcwZQSZ7jqN1KS3SQCaulT0-KWFQruMBz-jgrQ3TWvVCfNO7TAmRwy8Apd1TcG83ycdSCyY7ggmZB7_SLyDrTpVYb3zNafIBguKfht8tltO_0GCcxQgSiOrCGj-nExU1etu7UZV0vLPxhN9Q10fz-bo_tAJxOFDOlrg2ffFtxDp_YBwGXmS43GMx4dpkaCWsd4ggu5d5O2koQ-Ta8rogpUQWhp0uM6YmmHbECW3imGbtsITvIKcQHwR4MPS-RzFXLgBkA3GvjX_tq7gZGXPnbMRhb3_hShQV27jd3rxIpQNI7nk4yiJnsgCoGcARSU3RJH7TLscBNWB53asknsr4WunN0Tl24wpKcCPgyxmQ2wYj7ZAzYOywM6Ut5PslqAhUbYIDTLcHFlUH9MCudtyt_ZjxCntAe9arkPgUoEqqnhm2kZtReEkY4bg22W3_1ZwdiLK2XNSzYwE-w5VV9FLs3Kz302l8Xip7pE1kBouoWmW6A4LhGBhnVOcurBE0qxju453y7eQEWhVnT-DSUd_4pcYn-WX55ChkfDEpI2TXdVyPDmmrtqctnGSNJb9dtxBPeuZv3ggFi-b2TVajafQ7hYs5QXd_d6kdsTKNwA28uquSnjkrtyyy_EiPzgbRmQ8tcCh_N2UfgARmqhJ02oKXlyEq6nFYiRLHGqf90d_7aprWQtNTtT17MdtH-ZMYoHJ12i_KRa_xGfZYxVQOawdX_WLaXmO6JRxez16xnO9HVbWvHL26xiG7k0Vj38pxqKR77D_6VwzHf8aVcoJy8bIby34fVoH0KecHeiEyx8yIS25wL_iWQTSmdGqyY0n5BK_sCLjQ0_Jq0k8BhJsdIJPjOd5anwUL1wlEzE8A11-7AZnkFIkOxlfa_N-6gCvqcdV4Qf-wpk4Y5m-YJUfFTPqOXt8YwEEJZjYUtI83ybzVOnF7RFQ3LPcUcdfkmc7DuAQdSGRO6-kPSUDDODPotDiiezQZrUMMv3HnRFrIWc1V3ux7So1iQnenDfxIxYdOMqexffp__kWVin3eQZuTbFUJEyDSHSBX7QYLHAi3Yy12iuEBvmWVoGElmtq0LzTPZWy10TvD8ZIoAHJmA7BDpMGIfuDpsSLoqJyGAZYOQMqiHZsTR5eyhaCq52MUb1VG9Ap0lzgMxEmzK4YaZEwWbVNFogRoxEVWFrdGvvE9JxALiGoxc4uetHUlaKZFHw0EmxsTngya2IiLzEO7ebFBy3QmyYt17_LSJaSAp9bJj7tkLWIfoQNnaosx0GQLx0sebjCOqpmlLAkTm1Ih9rRGCh0gnQYWjWJXrhE5YW8Lp1jbLE_HsndPoXJK5ZvW5LuaHGpAyvnwG2ViMEFsAAwAe9ghhwEnWfydxHWi6otuwRoTqOpGlMD5IEd5lhLZfUzuNakPHy1rZLvhw00_BwyfRktcJ1BaPTF-FQ8geD6pqRE3_BMVzffSDK7UM3CfKdsTLZdT1fIeWKEFps3Txu8_dBY-f8c3cXFxUIyINQrEyWTpH9dPGIdPRwYbFDQZ1vdUiNpyqKM_0RWPdJPm8AtoM2o9ioSYlV8COXJbEBBmvwwiZrnQ