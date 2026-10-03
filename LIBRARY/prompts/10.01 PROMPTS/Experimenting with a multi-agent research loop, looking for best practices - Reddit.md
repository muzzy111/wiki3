# Experimenting with a multi-agent research loop, looking for best practices - Reddit

Source URL: https://www.reddit.com/r/AI_Agents/comments/1s398ep/experimenting_with_a_multiagent_research_loop/

Experimenting with a multi-agent research loop, looking for best practices : r/AI_Agents
Skip to main content
https://www.reddit.com/r/AI_Agents/comments/1s398ep/experimenting_with_a_multiagent_research_loop/#main-content
 Experimenting with a multi-agent research loop, looking for best practices : r/AI_Agents
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
https://www.reddit.com/r/AI_Agents/comments/1s398ep/experimenting_with_a_multiagent_research_loop/#left-sidebar-container
 
Skip to Right Sidebar
https://www.reddit.com/r/AI_Agents/comments/1s398ep/experimenting_with_a_multiagent_research_loop/#right-sidebar-container
Back
Go to AI_Agents
https://www.reddit.com/r/AI_Agents/
r/AI_Agents
https://www.reddit.com/r/AI_Agents/
â€¢ 4mo ago
Top-Composer7331
https://www.reddit.com/user/Top-Composer7331/
Locked post
Stickied post
Archived post
Report
Experimenting with a multi-agent research loop, looking for best practices
Discussion
https://www.reddit.com/r/AI_Agents/?f=flair_name%3A%22Discussion%22
Hey,
Iâ€™ve been building a multi-agent research loop to see how far LLMs can go beyond single-pass answers.
This isnâ€™t a novel architecture, just a hands-on attempt to see how these multi-agent loops actually behave outside of demos.
Core idea is simple: instead of answering once, the system iterates between a few agents:
supervisor (routes between agents)
search agent (DDG / arXiv / Wikipedia)
code agent (runs Python in a Docker sandbox)
analysis agent
skeptic agent (tries to challenge results)
Some things that worked better than I expected:
solid results on tasks that rely on code + reasoning
more structured outputs compared to single-pass answers
the skeptic loop sometimes actually improves final quality
But there are still trade-offs:
can get stuck looping if the supervisor is uncertain
sometimes stops too early with a weak answer
skeptic can trigger unnecessary rework
routing is quite sensitive to prompts
So overall itâ€™s in that â€œuseful but not very stable yetâ€ zone.
Iâ€™m curious what approaches / architectures are currently considered best practice for auto-research agent systems?
And how far do you think this paradigm can realistically go in the near term?
Upvote 12 Downvote 17 Go to comments
Share
Sort by: Best
Open comment sort options
Best
Top
New
Controversial
Old
Q&A
Search Comments Expand comment search
Cancel
Comments Section
ninadpathak
https://www.reddit.com/user/ninadpathak/
â€¢ 
4mo ago
https://www.reddit.com/r/AI_Agents/comments/1s398ep/comment/ocdp9g5/
yeah the skeptic agent is clutch for catching BS. next step's gotta be a memory module that recalls past loops, otherwise it rehashes the same dead ends every time. seen it tank runs w/o that.
Upvote 4 Downvote Reply Award
Share
Report
Award
Share 
Top-Composer7331
https://www.reddit.com/user/Top-Composer7331/
OP â€¢ 
4mo ago
https://www.reddit.com/r/AI_Agents/comments/1s398ep/comment/ocdpnrh/
Yeah, Iâ€™ve tried to address that with a ChromaDB-backed memory layer.
Right now â€œprojectsâ€ act as a shared memory space across chats, so previous loops can be recalled instead of rehashing the same dead ends.
Upvote 1 Downvote Reply Award
Share
Report
Award
Share
More replies
https://www.reddit.com/r/AI_Agents/comments/1s398ep/comment/ocdp9g5/?force-legacy-sct=1
 
Top-Composer7331
https://www.reddit.com/user/Top-Composer7331/
OP â€¢ 
4mo ago
https://www.reddit.com/r/AI_Agents/comments/1s398ep/comment/ocdwolq/
If anyone wants to take a look or has suggestions, repo is on GitHub (Evidion-AI/EvidionAI)
Upvote 1 Downvote Reply Award
Share
Report
Award
Share
idoman
https://www.reddit.com/user/idoman/
â€¢ 
4mo ago
https://www.reddit.com/r/AI_Agents/comments/1s398ep/comment/ocdv79c/
the supervisor routing sensitivity is the hardest part to get right. what's helped me: give the supervisor explicit exit criteria rather than letting it decide when "good enough" - something like "stop if the last two iterations produced no new information" is more reliable than a quality judgment. for the skeptic triggering unnecessary rework, try having it output a confidence score alongside its critique and only route back if it's below a threshold.
Upvote 2 Downvote Reply Award
Share
Report
Award
Share 
kirito__sensei
https://www.reddit.com/user/kirito__sensei/
â€¢ 
4mo ago
https://www.reddit.com/r/AI_Agents/comments/1s398ep/comment/ocfb5zb/
the supervisor loop thing is such a pain what's your current break logic, just a hard iteration cap?
the skeptic triggering unnecessary rework is basically because it has no "good enough" threshold, it'll challenge a 95% answer same as a 50% one ngl
checkpointing state between agent handoffs helped a lot in similar setups when things break mid-loop you're not restarting the whole thing from scratch
how deep does your routing go before it gets unstable?
Upvote 2 Downvote Reply Award
Share
Report
Award
Share 
Mobile_Discount7363
https://www.reddit.com/user/Mobile_Discount7363/
â€¢ 
4mo ago
https://www.reddit.com/r/AI_Agents/comments/1s398ep/comment/ocg6qfq/
This is a solid setup and pretty close to what most multi-agent research loops end up looking like in practice.
A few things that usually improve stability are clear termination rules like max iterations or confidence thresholds, tighter constraints on the skeptic so it only challenges when needed, and structured task states instead of relying only on prompts for routing. Async execution also helps a lot because search, code, and analysis agents can run in parallel while the supervisor aggregates results.
From my experience the real bottleneck is coordination and state management, not reasoning. Iâ€™ve been using Engram ( 
https://github.com/kwstx/engram_translator
https://github.com/kwstx/engram_translator
 ) for this since it launched recently and it helps coordinate agents, routing, and async communication so the supervisor doesnâ€™t have to manage everything manually. It makes these research loops much more stable.
In the near term this paradigm works really well for structured research and technical analysis, but it still needs strong coordination to avoid looping and instability.
Upvote 2 Downvote Reply Award
Share
Report
Award
Share
Specialist-Heat-6414
https://www.reddit.com/user/Specialist-Heat-6414/
â€¢ 
4mo ago
https://www.reddit.com/r/AI_Agents/comments/1s398ep/comment/ochkh2i/
The stall detection insight is undersold here. Iteration loops between generator and evaluator are the failure mode that bites hardest in production, not prompt quality or model choice. Once you've seen a skeptic agent loop 8 rounds on the same flagged issue that it created in round 2, you build stall detection before anything else. Your threshold of 'same issues twice in a row' is reasonable but I'd track issue fingerprints, not raw rejection count. Two different issues rejected twice each isn't a stall. The same issue rejected twice in a row is. The distinction matters when your skeptic agent is actually doing its job.
Upvote 2 Downvote Reply Award
Share
Report
Award
Share
gannu1991
https://www.reddit.com/user/gannu1991/
â€¢ 
4mo ago
https://www.reddit.com/r/AI_Agents/comments/1s398ep/comment/ocifu5v/
I run multi agent workflows in production across several businesses so I'll share what I've learned the hard way.
Your instinct about the skeptic agent is right but the implementation needs guardrails. What worked for me: give the skeptic a budget. Literally cap it at one challenge per loop iteration and force it to include a confidence score with its objection. If the confidence is below a threshold, the supervisor ignores it and moves on. Without this, skeptic agents become the coworker who derails every meeting with "but what about..." edge cases that don't matter.
The supervisor getting stuck in loops is the single biggest failure mode in every multi agent system I've built. Two things that fixed it. First, a hard iteration cap (I use 5 max for research tasks, 3 for simpler workflows). Second, and this is the one nobody talks about, give the supervisor an explicit "good enough" instruction. Something like "if the analysis agent's output addresses the core question with supporting evidence, finalize even if the skeptic has minor objections." Without this, the system optimizes for completeness when it should be optimizing for usefulness.
On the "stops too early" problem: this usually means your supervisor's routing prompt is too focused on consensus between agents. I switched to a model where the supervisor evaluates output quality against the original question directly, rather than checking if all agents agree. Agents disagreeing is fine. The supervisor's job is judgment, not diplomacy.
The architecture pattern that's been most stable for me in production: keep the agent count as low as possible. Every agent you add multiplies your failure surface. I started with architectures like yours (5 agents) and gradually collapsed them down. My most reliable research loop is just three: a planner that breaks the question into sub queries, an executor that searches and synthesizes, and a reviewer that checks for gaps against the original question. The planner and reviewer can be the same model with different system prompts.
One more thing: prompt sensitivity in routing is a signal that your agent boundaries aren't clean enough. If changing three words in the supervisor prompt completely changes which agent gets called, your agents have overlapping responsibilities. Make each agent's scope so obvious that routing becomes trivial.
Upvote 2 Downvote Reply Award
Share
Report
Award
Share
AutoModerator
https://www.reddit.com/user/AutoModerator/
MOD â€¢ 
4mo ago
https://www.reddit.com/r/AI_Agents/comments/1s398ep/comment/ocdp0ak/
Thank you for your submission, for any questions regarding AI, please check out our wiki at 
https://www.reddit.com/r/ai_agents/wiki
https://www.reddit.com/r/ai_agents/wiki
 (this is currently in test and we are actively adding to the wiki)
I am a bot, and this action was performed automatically. Please
 
contact the moderators of this subreddit
https://www.reddit.com/message/compose/?to=/r/AI_Agents
 
if you have any questions or concerns.
Upvote 1 Downvote Reply Award
Share
Report
Award
Share
ai-agents-qa-bot
https://www.reddit.com/user/ai-agents-qa-bot/
â€¢ 
4mo ago
https://www.reddit.com/r/AI_Agents/comments/1s398ep/comment/ocdslll/
Here are some best practices and considerations for building a multi-agent research loop based on recent developments in the field:
Iterative Improvement
: Implement a feedback loop where agents can learn from previous iterations. This can enhance the quality of responses over time, as agents refine their outputs based on past performance.
Diverse Agent Roles
: Clearly define the roles of each agent in the system. For example, having a dedicated search agent, analysis agent, and skeptic agent can help ensure that each aspect of the research process is handled effectively.
Structured Outputs
: Focus on generating structured outputs from each agent. This can help in organizing information better and making it easier to analyze and synthesize results.
Skeptic Agent
: Utilize a skeptic agent to challenge results, but ensure it has clear guidelines to avoid unnecessary rework. This agent can help improve the robustness of the findings by questioning assumptions and conclusions.
Prompt Sensitivity
: Be aware that routing and agent performance can be sensitive to the prompts used. Experiment with different prompt structures to find what yields the best results.
Handling Uncertainty
: Develop strategies for the supervisor agent to manage uncertainty effectively. This could involve setting thresholds for when to escalate questions or seek additional input from other agents.
Resource Management
: Monitor the computational resources used by the agents, especially in a multi-agent setup. Efficient resource management can prevent bottlenecks and improve overall system performance.
As for the potential of this paradigm, it seems promising. The ability to leverage multiple agents for complex tasks could lead to significant advancements in research capabilities. However, achieving stability and reliability will be key challenges to address in the near term.
For further insights, you might find the following resource helpful: 
Mastering Agents: Build And Evaluate A Deep Research Agent with o3 and 4o - Galileo AI
https://tinyurl.com/3ppvudxd
.
Upvote 1 Downvote Reply Award
Share
Report
Award
Share 
BidWestern1056
https://www.reddit.com/user/BidWestern1056/
â€¢ 
4mo ago
https://www.reddit.com/r/AI_Agents/comments/1s398ep/comment/ocduddc/
check out npcsh and npcpy for some more ideas 
https://github.com/npc-worldwide/npcsh
https://github.com/npc-worldwide/npcsh
 
https://github.com/npc-worldwide/npcpy
https://github.com/npc-worldwide/npcpy
Upvote 1 Downvote Reply Award
Share
Report
Award
Share 
Roodut
https://www.reddit.com/user/Roodut/
â€¢ 
4mo ago
https://www.reddit.com/r/AI_Agents/comments/1s398ep/comment/ocdyxve/
I assume it is API based?
Upvote 1 Downvote Reply Award
Share
Report
Award
Share 
mguozhen
https://www.reddit.com/user/mguozhen/
â€¢ 
4mo ago
https://www.reddit.com/r/AI_Agents/comments/1s398ep/comment/ocpm6p3/
The skeptic agent is the right instinct but it'll collapse into sycophancy faster than you expect
 â€” within 3-4 iterations it starts validating the analysis agent instead of challenging it, especially if they share the same base model.
A few things that actually helped when I hit this in production:
Give the skeptic a 
separate system prompt identity
 with explicit contrarian framing AND a structured output that forces it to list failure modes before it's allowed to agree
Temperature 0.9+ on the skeptic, 0.2 on analysis â€” the asymmetry matters more than people think
Cap your loop at 5 iterations hard; beyond that you get diminishing returns and costs spiral fast (I saw ~4x token cost between iteration 3 and 6 with minimal quality gain)
The supervisor routing is your biggest failure point â€” if it's LLM-based, log every routing decision and you'll find it develops blind spots for certain query types around iteration 2
The Docker sandbox for code is the right call â€” I've seen people skip that and it ends badly. What model are you running the supervisor on, and is it the same as your agents?
Upvote 1 Downvote Reply Award
Share
Report
Award
Share
MKle19
https://www.reddit.com/user/MKle19/
â€¢ 
3mo ago
https://www.reddit.com/r/AI_Agents/comments/1s398ep/comment/of7pdsj/
Is this a problem anybody else has experienced?
Upvote 1 Downvote Reply Award
Share
Report
Award
Share
More replies
https://www.reddit.com/r/AI_Agents/comments/1s398ep/comment/ocpm6p3/?force-legacy-sct=1
 
duridsukar
https://www.reddit.com/user/duridsukar/
â€¢ 
4mo ago
https://www.reddit.com/r/AI_Agents/comments/1s398ep/comment/ocfrrnd/
The skeptic agent is the part I'd be most interested in stress-testing.
I run a multi-agent setup for a real estate operation. Different problem domain, but the loop-and-get-stuck failure mode is one I've seen up close. What usually causes it isn't the agents themselves. It's the stopping condition. When the skeptic is good at finding holes, the system keeps iterating because there's always something to challenge.
The fix that worked for me was giving the skeptic a diminishing returns rule. First pass is full scrutiny. Second pass is narrower. Third pass it yields unless it finds something material. Without that, skeptic agents optimize for finding problems, not for closing the loop.
What does your current exit condition look like?
Upvote 0 Downvote Reply Award
Share
Report
Award
Share
People also ask about section
People also ask about
Best practices for multi-agent research loops
https://www.reddit.com/answers/e96ab7d9-b643-48a4-a7f3-02706d3befb4/?q=Best+practices+for+multi-agent+research+loops&source=PDP
Building multi-agent systems
https://www.reddit.com/answers/d96ff804-71dc-418f-b50a-b11cb8493065/?q=Building+multi-agent+systems&source=PDP
Tool selection for LLM agents
https://www.reddit.com/answers/6a4e4a8a-d28b-432a-88db-95940bbc0f50/?q=Tool+selection+for+LLM+agents&source=PDP
Multi-agent orchestration patterns
https://www.reddit.com/answers/200ede51-83a2-4166-ab04-55ae4597fdcc/?q=Multi-agent+orchestration+patterns&source=PDP
Scheduling human and AI agents together
https://www.reddit.com/answers/04d028d3-41b9-4a51-b767-77901e58dd1a/?q=Scheduling+human+and+AI+agents+together&source=PDP
More posts you may like
Related posts
Multi-agent AI systems are now automating scientific discovery and nobody seems ready
https://www.reddit.com/r/artificial/comments/1tk6mjs/multiagent_ai_systems_are_now_automating/
 
r/artificial
https://www.reddit.com/r/artificial/
 â€¢ 2mo ago [
Multi-agent AI systems are now automating scientific discovery and nobody seems ready
](https://www.reddit.com/r/artificial/comments/1tk6mjs/multiagent_ai_systems_are_now_automating/) 5 upvotes Â· 40 comments
I'm experimenting with a local AI agent execution system
https://www.reddit.com/r/AI_Agents/comments/1rltyvs/im_experimenting_with_a_local_ai_agent_execution/
 
r/AI_Agents
https://www.reddit.com/r/AI_Agents/
 â€¢ 4mo ago [
I'm experimenting with a local AI agent execution system
](https://www.reddit.com/r/AI_Agents/comments/1rltyvs/im_experimenting_with_a_local_ai_agent_execution/) 3 upvotes Â· 6 comments
I built a multi-agent system where AI debates itself before answering: The secret is cognitive frameworks, not personas
https://www.reddit.com/r/AI_Agents/comments/1qiojz7/i_built_a_multiagent_system_where_ai_debates/
 
r/AI_Agents
https://www.reddit.com/r/AI_Agents/
 â€¢ 6mo ago [
I built a multi-agent system where AI debates itself before answering: The secret is cognitive frameworks, not personas
](https://www.reddit.com/r/AI_Agents/comments/1qiojz7/i_built_a_multiagent_system_where_ai_debates/) 16 upvotes Â· 25 comments
Using several LLMs for multi-agent workflows?
https://www.reddit.com/r/ClaudeCode/comments/1rxa896/using_several_llms_for_multiagent_workflows/
 
r/ClaudeCode
https://www.reddit.com/r/ClaudeCode/
 â€¢ 4mo ago [
Using several LLMs for multi-agent workflows?
](https://www.reddit.com/r/ClaudeCode/comments/1rxa896/using_several_llms_for_multiagent_workflows/) 6 upvotes Â· 14 comments
Notes from running 5 LLM agents in a live, timed, competitive environment
https://www.reddit.com/r/LLMDevs/comments/1suwazy/notes_from_running_5_llm_agents_in_a_live_timed/
 
r/LLMDevs
https://www.reddit.com/r/LLMDevs/
 â€¢ 3mo ago [
Notes from running 5 LLM agents in a live, timed, competitive environment
](https://www.reddit.com/r/LLMDevs/comments/1suwazy/notes_from_running_5_llm_agents_in_a_live_timed/) 
 5 65 upvotes Â· 13 comments
How are you handling context sharing in Multi-Agent-Systems(MAS)? Looking for alternatives to rigid JSON states
https://www.reddit.com/r/LangGraph/comments/1qug9f5/how_are_you_handling_context_sharing_in/
 
r/LangGraph
https://www.reddit.com/r/LangGraph/
 â€¢ 5mo ago [
How are you handling context sharing in Multi-Agent-Systems(MAS)? Looking for alternatives to rigid JSON states
](https://www.reddit.com/r/LangGraph/comments/1qug9f5/how_are_you_handling_context_sharing_in/) 3 upvotes Â· 4 comments
Should LLM agents be required to think before they act?
https://www.reddit.com/r/aiagents/comments/1ulg9en/should_llm_agents_be_required_to_think_before/
 
r/aiagents
https://www.reddit.com/r/aiagents/
 â€¢ 9d ago [
Should LLM agents be required to think before they act?
](https://www.reddit.com/r/aiagents/comments/1ulg9en/should_llm_agents_be_required_to_think_before/) 
 6 upvotes Â· 12 comments
Deep Research Agent, an autonomous research agent system
https://www.reddit.com/r/LocalLLaMA/comments/1q1qepk/deep_research_agent_an_autonomous_research_agent/
 
r/LocalLLaMA
https://www.reddit.com/r/LocalLLaMA/
 â€¢ 6mo ago [
Deep Research Agent, an autonomous research agent system
](https://www.reddit.com/r/LocalLLaMA/comments/1q1qepk/deep_research_agent_an_autonomous_research_agent/) 
 0:31 60 upvotes Â· 15 comments
After going through ~15 agentic-loop papers (the wins and the failures), the thing that predicts success is the verifier, not the model
https://www.reddit.com/r/AI_Agents/comments/1uh0gfa/after_going_through_15_agenticloop_papers_the/
 
r/AI_Agents
https://www.reddit.com/r/AI_Agents/
 â€¢ 14d ago [
After going through ~15 agentic-loop papers (the wins and the failures), the thing that predicts success is the verifier, not the model
](https://www.reddit.com/r/AI_Agents/comments/1uh0gfa/after_going_through_15_agenticloop_papers_the/) 49 upvotes Â· 44 comments
I build multi-agent systems and I keep telling people to just use one agent instead
https://www.reddit.com/r/AI_Agents/comments/1u9sn2v/i_build_multiagent_systems_and_i_keep_telling/
 
r/AI_Agents
https://www.reddit.com/r/AI_Agents/
 â€¢ 22d ago [
I build multi-agent systems and I keep telling people to just use one agent instead
](https://www.reddit.com/r/AI_Agents/comments/1u9sn2v/i_build_multiagent_systems_and_i_keep_telling/) 25 upvotes Â· 51 comments
The FOMO of 20+ multi-agent workflow setups
https://www.reddit.com/r/ClaudeAI/comments/1sdfxym/the_fomo_of_20_multiagent_workflow_setups/
 
r/ClaudeAI
https://www.reddit.com/r/ClaudeAI/
 â€¢ 3mo ago [
The FOMO of 20+ multi-agent workflow setups
](https://www.reddit.com/r/ClaudeAI/comments/1sdfxym/the_fomo_of_20_multiagent_workflow_setups/) 65 upvotes Â· 35 comments
had my research agent dig into what people are actually building with Hermes. here's what stood out.
https://www.reddit.com/r/hermesagent/comments/1sd3bwf/had_my_research_agent_dig_into_what_people_are/
 
r/hermesagent
https://www.reddit.com/r/hermesagent/
 â€¢ 3mo ago [
had my research agent dig into what people are actually building with Hermes. here's what stood out.
](https://www.reddit.com/r/hermesagent/comments/1sd3bwf/had_my_research_agent_dig_into_what_people_are/) 64 upvotes Â· 22 comments
AI agents are starting to expose how broken most workflows already were
https://www.reddit.com/r/AI_Agents/comments/1tbumcq/ai_agents_are_starting_to_expose_how_broken_most/
 
r/AI_Agents
https://www.reddit.com/r/AI_Agents/
 â€¢ 2mo ago [
AI agents are starting to expose how broken most workflows already were
](https://www.reddit.com/r/AI_Agents/comments/1tbumcq/ai_agents_are_starting_to_expose_how_broken_most/) 58 upvotes Â· 44 comments
How are you managing multiple AI agents in your workflow right now?
https://www.reddit.com/r/AI_Agents/comments/1unlpva/how_are_you_managing_multiple_ai_agents_in_your/
 
r/AI_Agents
https://www.reddit.com/r/AI_Agents/
 â€¢ 7d ago [
How are you managing multiple AI agents in your workflow right now?
](https://www.reddit.com/r/AI_Agents/comments/1unlpva/how_are_you_managing_multiple_ai_agents_in_your/) 18 upvotes Â· 32 comments
Ongoing Search Atlas Review - Early Thoughts on Agentic SEO in Practice
https://www.reddit.com/r/Agentic_SEO/comments/1qn5rt9/ongoing_search_atlas_review_early_thoughts_on/
 
r/Agentic_SEO
https://www.reddit.com/r/Agentic_SEO/
 â€¢ 6mo ago [
Ongoing Search Atlas Review - Early Thoughts on Agentic SEO in Practice
](https://www.reddit.com/r/Agentic_SEO/comments/1qn5rt9/ongoing_search_atlas_review_early_thoughts_on/) 20 upvotes Â· 51 comments
Looking for testers and seed funding for an autonomous, self-evolving quant system.
https://www.reddit.com/r/Investors/comments/1qwash2/looking_for_testers_and_seed_funding_for_an/
 
r/Investors
https://www.reddit.com/r/Investors/
 â€¢ 5mo ago [
Looking for testers and seed funding for an autonomous, self-evolving quant system.
](https://www.reddit.com/r/Investors/comments/1qwash2/looking_for_testers_and_seed_funding_for_an/) 1 upvote Â· 1 comment
I tested what happens when you give an AI coding agent access to 2 million research papers. It found techniques it couldn't have known about.
https://www.reddit.com/r/ArtificialInteligence/comments/1s6bavl/i_tested_what_happens_when_you_give_an_ai_coding/
 
r/ArtificialInteligence
https://www.reddit.com/r/ArtificialInteligence/
 â€¢ 3mo ago [
I tested what happens when you give an AI coding agent access to 2 million research papers. It found techniques it couldn't have known about.
](https://www.reddit.com/r/ArtificialInteligence/comments/1s6bavl/i_tested_what_happens_when_you_give_an_ai_coding/) 
 4 132 upvotes Â· 45 comments
Could we please implement a change that would make researchers have to take a tutorial before being allowed to post studies?
https://www.reddit.com/r/ProlificAc/comments/1sy4nu4/could_we_please_implement_a_change_that_would/
 
r/ProlificAc
https://www.reddit.com/r/ProlificAc/
 â€¢ 2mo ago [
Could we please implement a change that would make researchers have to take a tutorial before being allowed to post studies?
](https://www.reddit.com/r/ProlificAc/comments/1sy4nu4/could_we_please_implement_a_change_that_would/) 86 upvotes Â· 23 comments
How are people building deep research agents?
https://www.reddit.com/r/LocalLLaMA/comments/1rvfkhh/how_are_people_building_deep_research_agents/
 
r/LocalLLaMA
https://www.reddit.com/r/LocalLLaMA/
 â€¢ 4mo ago [
How are people building deep research agents?
](https://www.reddit.com/r/LocalLLaMA/comments/1rvfkhh/how_are_people_building_deep_research_agents/) 19 upvotes Â· 32 comments
Mixture of Agents
https://www.reddit.com/r/hermesagent/comments/1uh9zpt/mixture_of_agents/
 
r/hermesagent
https://www.reddit.com/r/hermesagent/
 â€¢ 14d ago [
Mixture of Agents
](https://www.reddit.com/r/hermesagent/comments/1uh9zpt/mixture_of_agents/) 
 43 upvotes Â· 23 comments
How many of you are actually running multi-agent in production vs single-agent with tools?
https://www.reddit.com/r/LLMDevs/comments/1sxonw2/how_many_of_you_are_actually_running_multiagent/
 
r/LLMDevs
https://www.reddit.com/r/LLMDevs/
 â€¢ 2mo ago [
How many of you are actually running multi-agent in production vs single-agent with tools?
](https://www.reddit.com/r/LLMDevs/comments/1sxonw2/how_many_of_you_are_actually_running_multiagent/) 18 upvotes Â· 15 comments
Pushing the limits of Hermes Agent: What are your most complex projects, integrations, or custom workflows?
https://www.reddit.com/r/hermesagent/comments/1u4ay0a/pushing_the_limits_of_hermes_agent_what_are_your/
 
r/hermesagent
https://www.reddit.com/r/hermesagent/
 â€¢ 1mo ago [
Pushing the limits of Hermes Agent: What are your most complex projects, integrations, or custom workflows?
](https://www.reddit.com/r/hermesagent/comments/1u4ay0a/pushing_the_limits_of_hermes_agent_what_are_your/) 17 upvotes Â· 26 comments
Built an open-source LLM evaluation framework for agentic systems â†' hallucination detection, RAG grounding, drift detection in CI/CD. Here's what I learned.
https://www.reddit.com/r/QualityAssurance/comments/1rxuwa5/built_an_opensource_llm_evaluation_framework_for/
 
r/QualityAssurance
https://www.reddit.com/r/QualityAssurance/
 â€¢ 4mo ago [
Built an open-source LLM evaluation framework for agentic systems â†' hallucination detection, RAG grounding, drift detection in CI/CD. Here's what I learned.
](https://www.reddit.com/r/QualityAssurance/comments/1rxuwa5/built_an_opensource_llm_evaluation_framework_for/) 2 upvotes Â· 3 comments
I used to prompt & forget with all my agents. Now they speak to me with a familiar voice. 100% local on my macbook. voices cloned locally instantly
https://www.reddit.com/r/hermesagent/comments/1uqj0z8/i_used_to_prompt_forget_with_all_my_agents_now/
 
r/hermesagent
https://www.reddit.com/r/hermesagent/
 â€¢ 3d ago [
I used to prompt & forget with all my agents. Now they speak to me with a familiar voice. 100% local on my macbook. voices cloned locally instantly
](https://www.reddit.com/r/hermesagent/comments/1uqj0z8/i_used_to_prompt_forget_with_all_my_agents_now/) 
 1:00 114 upvotes Â· 24 comments
Four small changes that made my AI agents respond noticeably faster
https://www.reddit.com/r/AI_Agents/comments/1suh4ms/four_small_changes_that_made_my_ai_agents_respond/
 
r/AI_Agents
https://www.reddit.com/r/AI_Agents/
 â€¢ 3mo ago [
Four small changes that made my AI agents respond noticeably faster
](https://www.reddit.com/r/AI_Agents/comments/1suh4ms/four_small_changes_that_made_my_ai_agents_respond/) 5 upvotes Â· 12 comments
View Post in
Ð ÑƒÑ Ñ ÐºÐ¸Ð¹
https://www.reddit.com/r/AI_Agents/comments/1s398ep/experimenting_with_a_multiagent_research_loop/?tl=ru
æ—¥æœ¬èªž
https://www.reddit.com/r/AI_Agents/comments/1s398ep/experimenting_with_a_multiagent_research_loop/?tl=ja
ç®€ä½“ä¸ æ–‡
https://www.reddit.com/r/AI_Agents/comments/1s398ep/experimenting_with_a_multiagent_research_loop/?tl=zh-hans
FranÃ§ais
https://www.reddit.com/r/AI_Agents/comments/1s398ep/experimenting_with_a_multiagent_research_loop/?tl=fr
à¤¹à¤¿à¤¨à¥ à¤¦à¥€
https://www.reddit.com/r/AI_Agents/comments/1s398ep/experimenting_with_a_multiagent_research_loop/?tl=hi
PortuguÃªs (Brasil)
https://www.reddit.com/r/AI_Agents/comments/1s398ep/experimenting_with_a_multiagent_research_loop/?tl=pt-br
See more See fewer
SlovenÄ ina
https://www.reddit.com/r/AI_Agents/comments/1s398ep/experimenting_with_a_multiagent_research_loop/?tl=sk
Filipino
https://www.reddit.com/r/AI_Agents/comments/1s398ep/experimenting_with_a_multiagent_research_loop/?tl=fil
Î• Î»Î»Î· Î½Î¹ÎºÎ¬
https://www.reddit.com/r/AI_Agents/comments/1s398ep/experimenting_with_a_multiagent_research_loop/?tl=el
Svenska
https://www.reddit.com/r/AI_Agents/comments/1s398ep/experimenting_with_a_multiagent_research_loop/?tl=sv
EspaÃ±ol (LatinoamÃ©rica)
https://www.reddit.com/r/AI_Agents/comments/1s398ep/experimenting_with_a_multiagent_research_loop/?tl=es-419
Deutsch
https://www.reddit.com/r/AI_Agents/comments/1s398ep/experimenting_with_a_multiagent_research_loop/?tl=de
Nederlands
https://www.reddit.com/r/AI_Agents/comments/1s398ep/experimenting_with_a_multiagent_research_loop/?tl=nl
à¹„à¸—à¸¢
https://www.reddit.com/r/AI_Agents/comments/1s398ep/experimenting_with_a_multiagent_research_loop/?tl=th
Polski
https://www.reddit.com/r/AI_Agents/comments/1s398ep/experimenting_with_a_multiagent_research_loop/?tl=pl
Italiano
https://www.reddit.com/r/AI_Agents/comments/1s398ep/experimenting_with_a_multiagent_research_loop/?tl=it
Ø§Ù„Ø¹Ø±Ø¨ÙŠØ©
https://www.reddit.com/r/AI_Agents/comments/1s398ep/experimenting_with_a_multiagent_research_loop/?tl=ar
í• œêµì–´
https://www.reddit.com/r/AI_Agents/comments/1s398ep/experimenting_with_a_multiagent_research_loop/?tl=ko
Community Info Section
r/AI_Agents
https://www.reddit.com/r/AI_Agents/
Join
AI Agents
A place for discussion around the use of AI Agents and related tools. AI Agents are LLMs that have the ability to "use tools" or "execute functions" in an autonomous or semi-autonomous (also known as human-in-the-loop) fashion. Follow our event calendar: https://lu.ma/oss4ai Join us on Discord! https://discord.gg/6tGkQcFjBY
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
 
0cAFcWeA6u6ELJOAb0FdgiYXMO50MAQSBq1GxCgoDcvl-zBUGvE1U9wqGlaIL2nkVo18mu2yEg56sKOTZ_WEGJybNy7JPrYbeufb3qLz3dgoeimizxpo9oggIWQMtR81k7ilu97CrdrYlqS7umUPXlVFOGXunG9kb__ECk5BrJfjkHgW2aN97FJV0oX4QfbggH7EanZDq0woBGa2GyfOdwZp7Rt8vosw8mPELiFzp9ci1uuKH-bLOMnEPwxCa4Oi1typqQGhTtMPu8vybIg9mB1rnzg8d9CY9UeOYwkzT8ppzTjdN6Bv41zQkdndEiqIrfCMs3wsIMead4HVpg2JiXUr5BpPBn4xIuwVW810wE8LRwJtUcc66WblvTr1zP1ZnaXhqO579wWCxTlt1Gg1g3UuI6gyCCh5e2zMWASFDSoLr6PoO8LX_I8AZOx-_xwptX8glB-CiGQqRkwIAb5-OoM9WkCK3sGXuESGNi5R5-cFrXdCRlrNyE4WliafJk_wyAZ9_TeQojJOFO9T-Ros0-ZAwT1QMu7zws3AH9MM7qOimBvSvbjLMp_aKhLT7i6Iad3kbndU939fqoP7P7l_BddqBNHtslhULo65PWbB31MBFULJa5cmQ39Aqn8Xn5_T6wfDA0Wot66Mpq5OUlzBRo_FuOVYxh0iBpYcBTKGDIheHO9Tmz_rK47pFEQgtvBORnhSu4CQ7T1SL4voQ4XdTtfnVn11wMFxbVFQCY1Th-k1taRcYHHelZ8khzogXLZizFoYe9EV7J-60_O37rRodm73ujeTFL_Ai6Q8V0vo8ul7pPB8K3k_vtZ41e0c-
bSJU0MwD6hZnpCF_kLqjHjato6RL5AIo3W1kXfqvIugU9A_HOuIVu7h88Xy-S7C8Lrfa0JbekE2ysNpI3XlDF7yFPMQQln1sFcMG1zN9RD1FvSoyVy3B6QSt-OW7-ZehRMAAfd_hvW9KPgRlSsH3oxIlJFcTTaeNTp9gStOOXK6Gz_f7tQ993T4lYtEhH7osdrXtn7699ftZPnelQmT1jEVrpjvAfSCzaprUxK16_Y2Zw29tjKcs0mDh82IqFW20fEeBH01Zrjtqlf-dgEmlFwBjABYuB0__09-NhbA72k8D2UI0PsZ3g9H0v0HIRickNDmV2C8-6qOmwWERWz24BYUcbF8npsmrszOhBRmSduUXrvLBMvav3QDLreahGUbCznWbZbYBu3f9c2E73pGAHfmP86ElHyYwLVxngtW-TPQY7rtGo61U2p7sfB5Qsckev9GkFukgbgrnSqEw9ULhXW_UMVnBDrCtaYQk_8KIX810piubRsR5Ngz_qxLd0VPDWhDWzPSziVtW8KSyzRdqdbK1_FxIOOttUZsK8ocZWCTsNYTc7cmM9p1CEex34K0fl_rKz-enttcuYMmO5duT_cPWZ5ltHhERvB-mu6WTPiFDRuGUtLLIotpQC4lwjO2EsyAnkySdga5qo9FEnldUY6P7YuEcP3wSG6rgGjvHYbp5Mv254bBiXmGnL50yeUCVv1yRqtSqk7hGzYjqR38OgNLEkY2XjOBJIlEMF4ZinpQWneetYC94ST9UrUItR4om
-ICavPp7jGeoTIYK-SdKj5iJcE3yt1tvP81Mqkj0Y1qAMLmjrPIsikSruSg979Pnz0HPTR8dS4K0a0k8a8W8t7dO-Ew_Rp-PrxA1YZs9wia0QVQE18wLXKmblDgEs0Zjze2Ag6qK_biUsj3VzBelORJqzflmVZGmEOVqfpZR2GZ5xCtDKoqUZu1w27F-HO_Lbe5xJXUBMwBrZOCBbKZyboz9JZz3DIt_gslA6igajI4effqJqaqFWvaNBCxSFLsGrimfZOeu0nWRXlmDkxqkg8l6UwOGc7j2ubH8DxgKjGaaMp4X3qxT-3EdlkMP4m7izLTyvPH7Ep9VLb2nWwm0pHKiBNOT5ksC7kgbzTOGk3pg4w4E5J43e_gGJXEeM2R6k-c-1CMzFzBuWsBxLPl02TTTg1IOZndBV01DeFwKMbXCJ9HUw7aOPx0Xc1j2h46JaNnndNkj1TtVIv7ep1E6zByH_ygTE9Tlj08zy3TF2LARdZrrKzl7qMiV_IvFRZYRxJ6PiCu5yhH_9TzsLj5j4tZluXhAjYm_XazOCq4nLrEFihmheTxDrkNUZfXey-B7oi8fJM2XFmjEu9gBDJiVXhE3tAAJgjwagIKHwu9TRz3nCdnKA3swN4tDi4WOKRoIFLFCxDuYjP1lZ4L