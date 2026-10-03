# LangGraph vs CrewAI vs AutoGen: AI Agent Framework Comparison for Production in 2026

Source URL: https://lushbinary.com/blog/langgraph-vs-crewai-vs-autogen-ai-agent-framework-comparison/

LangGraph vs CrewAI vs AutoGen: Agent Framework Comparison | Lushbinary
New Free product & architecture audit, delivered in 72 hours. Claim yours
https://calendly.com/lushbinary/30min
Home
https://lushbinary.com/
About
https://lushbinary.com/about/
Services
https://lushbinary.com/services/
Blog
https://lushbinary.com/blog/
Tools
https://lushbinary.com/tools/
Contact
https://lushbinary.com/contact/
Become a Partner 
Estimate Cost
https://lushbinary.com/tools/cost-roi-estimator/
Home
https://lushbinary.com/
 
About
https://lushbinary.com/about/
 
Services
https://lushbinary.com/services/
 
Blog
https://lushbinary.com/blog/
 
Contact
https://lushbinary.com/contact/
Back to Blog
https://lushbinary.com/blog/
AI & Automation April 7, 2026 15 min read
LangGraph vs CrewAI vs AutoGen: AI Agent Framework Comparison for Production in 2026
Three frameworks dominate AI agent development in 2026. LangGraph offers graph-based production control. CrewAI enables fastest prototyping with role-based teams. AutoGen excels at collaborative reasoning on Azure. We compare architecture, benchmarks, MCP integration, and costs.
 
Lushbinary Team
AI & Cloud Solutions
 
[
 Partner Widel AI
One subscription. Every flagship AI model.
WidelAI gives you Claude, GPT-5.5, and Gemini under a single plan. Save 10% with code LUSHBINARY10 Try WidelAI](https://widelai.com/)
Building AI agents in 2026 means choosing between three dominant frameworks: LangGraph, CrewAI, and AutoGen. Each takes a fundamentally different approach to agent orchestration — graph-based workflows, role-based teams, and multi-agent conversations. The right choice depends on whether you're optimizing for production control, prototyping speed, or collaborative reasoning.
We've built production agent systems with all three frameworks at Lushbinary. This guide covers architecture deep-dives, benchmark comparisons, code examples, MCP integration patterns, and a decision framework to help you pick the right tool for your use case.
Whether you're building a customer support pipeline, a research automation system, or a multi-step reasoning engine, this comparison has the technical depth you need to make an informed decision.
📋 Table of Contents
Why Agent Frameworks Matter in 2026
LangGraph: Graph-Based Production Workflows
CrewAI: Role-Based Team Orchestration
AutoGen: Multi-Agent Conversations
Architecture Comparison: Graphs vs Roles vs Conversations
Head-to-Head Benchmark Comparison
MCP Integration Across Frameworks
When to Use Which Framework
Migration & Interoperability
Why Lushbinary for AI Agent Development
1 Why Agent Frameworks Matter in 2026
Raw LLM API calls aren't enough for production AI agents. You need state management, error recovery, tool orchestration, human-in-the-loop checkpoints, and observability. That's what agent frameworks provide — the infrastructure layer between your application logic and the LLM.
In 2024, most teams hand-rolled agent loops with basic prompt-chaining. By 2026, the complexity of production agent systems has made frameworks essential. Multi-step workflows, parallel tool execution, conditional branching, and persistent memory all require structured orchestration that ad-hoc code can't reliably deliver.
📊
Graph-Based (LangGraph)
Define agent workflows as directed graphs with nodes and edges. Maximum control over execution flow, branching, and state transitions.
👥
Role-Based (CrewAI)
Define agents with roles, backstories, and goals. Agents collaborate as a crew with delegated tasks and shared context.
💬
Conversational (AutoGen)
Agents communicate through multi-turn conversations, debating and refining outputs collaboratively. Best for reasoning-heavy tasks.
Key insight
The framework you choose determines your ceiling. Graph-based orchestration (LangGraph) scales better than conversational patterns (AutoGen) for complex workflows because you can explicitly define execution paths. Conversational patterns excel at open-ended reasoning but become unpredictable as task complexity grows.
2 LangGraph: Graph-Based Production Workflows
LangGraph, built by the LangChain team, models agent workflows as stateful directed graphs. Each node is a function (an LLM call, a tool invocation, a conditional check), and edges define the execution flow between them. This gives you explicit, debuggable control over every step your agent takes.
Core Capabilities
Stateful execution
: Persistent state flows through the graph. Each node can read and write to a shared state object, enabling complex multi-step workflows with memory.
Streaming
: Native token-level and node-level streaming. You can stream partial results from any node as the graph executes, critical for real-time UIs.
Checkpointing
: Save and restore graph execution state at any point. Enables human-in-the-loop approval gates, error recovery, and long-running workflows that survive restarts.
Time-travel debugging
: Via LangSmith, you can replay any execution step-by-step, inspect state at each node, and identify exactly where things went wrong.
Conditional branching
: Route execution based on state, LLM output, or custom logic. Build complex decision trees without spaghetti code.
LangGraph Code Example
// LangGraph - stateful agent with tool use and checkpointing
import { StateGraph, MessagesAnnotation } from "@langchain/langgraph";
import { ToolNode } from "@langchain/langgraph/prebuilt";
import { ChatOpenAI } from "@langchain/openai";
const model = new ChatOpenAI({ model: "gpt-4o" });
const tools = [searchTool, calculatorTool];
const toolNode = new ToolNode(tools);
const graph = new StateGraph(MessagesAnnotation)
.addNode("agent", async (state) => {
const response = await model.bindTools(tools).invoke(state.messages);
return { messages: [response] };
})
.addNode("tools", toolNode)
.addEdge("
start
", "agent")
.addConditionalEdges("agent", shouldContinue)
.addEdge("tools", "agent")
.compile({ checkpointer: sqliteCheckpointer });
// Execute with streaming and state persistence
for await (const event of graph.stream(input, { configurable: { thread_id: "1" } })) {
console.log(event);
}
Where LangGraph Excels
Complex multi-step workflows with conditional logic and parallel branches
Production systems that need checkpointing, error recovery, and human-in-the-loop gates
Teams that need deep observability via LangSmith for debugging and monitoring
Long-running agent tasks that must survive process restarts
Where LangGraph Falls Short
Steeper learning curve — you need to think in graphs, not sequential scripts
More boilerplate for simple use cases compared to CrewAI's declarative DSL
LangSmith dependency for full observability (paid service)
3 CrewAI: Role-Based Team Orchestration
CrewAI takes a fundamentally different approach: instead of defining graphs, you define agents with human-like roles, backstories, and goals. These agents form a "crew" that collaborates on tasks, delegating work and sharing context automatically. It's the fastest path from idea to working multi-agent prototype.
Core Capabilities
Role-based DSL
: Define agents with role, backstory, and goal fields. The framework uses these to shape agent behavior and inter-agent communication.
Crew collaboration
: Agents work together as a crew with sequential or hierarchical task execution. Agents can delegate sub-tasks to other crew members.
Fastest prototyping
: A working multi-agent system in under 50 lines of code. CrewAI's declarative syntax minimizes boilerplate.
Built-in tool integration
: Extensive library of pre-built tools for web search, file operations, and API calls.
Memory system
: Short-term, long-term, and entity memory for agents to maintain context across tasks.
CrewAI Code Example
CrewAI — role-based multi-agent research crew
from crewai import Agent, Task, Crew, Process
researcher = Agent(
role="Senior Research Analyst",
backstory="You are an expert at finding and synthesizing technical information.",
goal="Find comprehensive data on the given topic",
tools=[search_tool, scrape_tool],
llm="gpt-4o"
)
writer = Agent(
role="Technical Writer",
backstory="You write clear, accurate technical content.",
goal="Create a well-structured report from research findings",
llm="gpt-4o"
)
crew = Crew(
agents=[researcher, writer],
tasks=[research_task, writing_task],
process=Process.sequential
)
result = crew.kickoff()
Where CrewAI Falls Short
Limited observability
: No equivalent to LangSmith for tracing and debugging agent execution. You're largely relying on logs.
Less production control
: The declarative DSL abstracts away execution details, making it harder to implement fine-grained error handling and recovery.
Scaling challenges
: Role-based orchestration works well for 2-5 agents but becomes harder to manage with larger agent teams.
4 AutoGen: Multi-Agent Conversations
AutoGen, developed by Microsoft, takes the conversational approach to multi-agent systems. Agents communicate through structured multi-turn conversations, debating, critiquing, and refining each other's outputs. It's the most natural fit for tasks that benefit from collaborative reasoning — code review, research synthesis, and complex analysis.
Core Capabilities
Multi-agent debates
: Agents engage in structured conversations where they challenge, validate, and build on each other's reasoning. Produces higher-quality outputs for complex problems.
Collaborative reasoning
: Multiple agents with different perspectives work through problems together, catching errors that single-agent systems miss.
Azure-native integration
: Deep integration with Azure OpenAI Service, Azure identity management, and Microsoft compliance tooling. The natural choice for Azure-first teams.
Flexible conversation patterns
: Two-agent chat, group chat with speaker selection, nested conversations, and custom conversation flows.
Human-in-the-loop
: Built-in support for human proxy agents that can intervene in conversations at any point.
AutoGen Code Example
AutoGen — multi-agent collaborative code review
from autogen import AssistantAgent, UserProxyAgent, GroupChat, GroupChatManager
coder = AssistantAgent(
name="Coder",
system_message="You write clean, production-ready Python code.",
llm_config={"model": "gpt-4o"}
)
reviewer = AssistantAgent(
name="Reviewer",
system_message="You review code for bugs, security issues, and performance.",
llm_config={"model": "gpt-4o"}
)
user_proxy = UserProxyAgent(
name="User",
human_input_mode="TERMINATE",
code_execution_config={"work_dir": "output"}
)
group_chat = GroupChat(agents=[coder, reviewer, user_proxy], messages=[])
manager = GroupChatManager(groupchat=group_chat)
user_proxy.initiate_chat(manager, message="Build a REST API for user management")
Cost warning
AutoGen's conversational pattern typically generates 20+ LLM calls per task as agents debate and refine outputs. This makes it significantly more expensive per task than LangGraph or CrewAI. Budget accordingly and set conversation turn limits in production.
Where AutoGen Falls Short
High LLM cost
: 20+ calls per task adds up fast. Conversational patterns are inherently more expensive than structured orchestration.
Unpredictable execution
: Conversation flow is harder to control than graph-based or sequential execution. Agents can go off-track in long conversations.
Azure bias
: While it supports any OpenAI-compatible API, the best experience is on Azure. Teams on AWS or GCP may find the integration less seamless.
5 Architecture Comparison: Graphs vs Roles vs Conversations
The architectural differences between these three frameworks aren't just academic — they determine how your agent system behaves in production, how easy it is to debug, and how well it scales.
Dimension
LangGraph
CrewAI
AutoGen
Orchestration model
Directed graph
Role-based crew
Multi-agent conversation
State management
Explicit graph state
Shared crew context
Conversation history
Execution flow
Deterministic edges
Sequential / hierarchical
Dynamic conversation
Debugging
LangSmith time-travel
Logging only
Conversation traces
Checkpointing
✅ Built-in
❌ Manual
⚠ Limited
Streaming
✅ Native
⚠ Limited
⚠ Limited
Error recovery
Graph-level retry
Task-level retry
Conversation restart
Learning curve
High (graph thinking)
Low (declarative DSL)
Medium (conversation design)
Scalability
Excellent
Good (2-5 agents)
Moderate (cost-limited)
LLM calls per task
2-8 (structured)
3-10 (sequential)
20+ (conversational)
The key architectural takeaway: LangGraph gives you the most control and the best production characteristics (checkpointing, streaming, deterministic execution). CrewAI gives you the fastest path to a working prototype. AutoGen gives you the deepest collaborative reasoning but at the highest cost and with the least predictable execution.
Scaling Characteristics
Graph-based orchestration scales linearly — adding a new node to a LangGraph workflow is O(1) in complexity. Role-based orchestration (CrewAI) scales well up to about 5 agents, after which inter-agent coordination overhead grows. Conversational patterns (AutoGen) scale poorly because each additional agent multiplies the number of conversation turns, and therefore LLM calls, needed to reach consensus. For workflows with 10+ steps or 5+ agents, LangGraph is the clear winner.
6 Head-to-Head Benchmark Comparison
We benchmarked all three frameworks on identical tasks using GPT-4o as the underlying model. This isolates the framework's orchestration quality from the model's capabilities.
Metric
LangGraph
CrewAI
AutoGen
Setup time (hello world)
~15 min
~5 min
~10 min
Multi-step task accuracy
94%
87%
91%
Avg. LLM calls per task
4.2
6.1
22.7
Avg. cost per task (GPT-4o)
$0.08
$0.12
$0.45
Error recovery rate
96%
72%
68%
Streaming latency (TTFB)
180ms
1.2s
2.8s
Checkpoint/resume
✅ Native
❌ Manual
⚠ Partial
Production observability
✅ LangSmith
⚠ Basic logs
⚠ Conversation logs
Benchmark context
Tasks included: multi-step research with web search, code generation with testing, document analysis with structured output, and customer support ticket routing. All tests used GPT-4o with identical system prompts where applicable. AutoGen's higher accuracy on reasoning tasks comes at 5-6x the cost of LangGraph due to the conversational overhead.
7 MCP Integration Across Frameworks
The 
Model Context Protocol (MCP)
https://lushbinary.com/blog/mcp-model-context-protocol-developer-guide-2026/
 has become the standard for connecting AI agents to external tools and data sources in 2026. All three frameworks now support MCP, but the integration depth varies.
MCP Feature
LangGraph
CrewAI
AutoGen
MCP tool servers
✅ As graph nodes
✅ As agent tools
✅ As conversation tools
MCP resource access
✅
✅
✅
MCP prompts
✅
⚠ Partial
⚠ Partial
Dynamic tool discovery
✅
✅
⚠ Limited
Multi-server support
✅
✅
✅
Streaming from MCP
✅ Native
❌
❌
LangGraph MCP Integration Example
// LangGraph - MCP tool server as a graph node
import { MCPToolkit } from "@langchain/mcp";
import { StateGraph } from "@langchain/langgraph";
const mcpToolkit = new MCPToolkit({
servers: [
{ name: "database", url: "http://localhost:3001/mcp" },
{ name: "search", url: "http://localhost:3002/mcp" },
]
});
const tools = await mcpToolkit.getTools();
// Tools are automatically available as graph nodes
const graph = new StateGraph(MessagesAnnotation)
.addNode("agent", agentNode)
.addNode("mcp_tools", new ToolNode(tools))
.compile();
LangGraph's MCP integration is the deepest because MCP tools become first-class graph nodes with full streaming support. CrewAI and AutoGen treat MCP tools as callable functions, which works but doesn't leverage MCP's streaming capabilities. For teams building tool-heavy agent systems, LangGraph's MCP integration is a significant advantage.
8 When to Use Which Framework
Here's the decision framework we use at Lushbinary when recommending agent frameworks to clients:
🏭
Choose LangGraph
✓ Production-critical agent systems
✓ Complex multi-step workflows with branching
✓ Need checkpointing and error recovery
✓ Require deep observability (LangSmith)
✓ Streaming responses to end users
✓ Long-running tasks that must survive restarts
🚀
Choose CrewAI
✓ Fast prototyping and MVPs
✓ Team-based agent collaboration
✓ Simple sequential or hierarchical workflows
✓ Non-technical stakeholders defining agents
✓ Internal tools and automation
✓ Proof-of-concept demos
☁
Choose AutoGen
✓ Azure-first infrastructure
✓ Tasks requiring collaborative reasoning
✓ Code review and quality assurance
✓ Research synthesis and analysis
✓ Multi-perspective decision making
✓ Microsoft ecosystem integration
Our recommendation
For most production use cases, start with LangGraph. Its graph-based architecture gives you the control and observability you need when things go wrong (and they will). Use CrewAI for rapid prototyping and internal tools where speed-to-demo matters more than production hardening. Use AutoGen when you're on Azure and need collaborative reasoning capabilities that justify the higher per-task cost.
9 Migration & Interoperability
A common pattern we see: teams prototype with CrewAI, then migrate to LangGraph for production. Here's what that migration looks like and how to plan for interoperability between frameworks.
CrewAI → LangGraph Migration
Agent → Node mapping
: Each CrewAI agent becomes a node in the LangGraph graph. The agent's role and backstory become the system prompt for that node's LLM call.
Task → Edge mapping
: CrewAI's sequential task flow maps directly to edges in the graph. Hierarchical flows require conditional edges.
Tool migration
: CrewAI tools and LangGraph tools both use the LangChain tool interface, so most tools transfer directly without modification.
State refactoring
: CrewAI's implicit shared context needs to be refactored into explicit LangGraph state annotations. This is the most labor-intensive part.
Hybrid Architectures
You don't have to pick just one. Some of the most effective agent systems we've built use multiple frameworks:
LangGraph + AutoGen
: Use LangGraph as the orchestration backbone, with AutoGen-style multi-agent debates as a single node for tasks that benefit from collaborative reasoning.
CrewAI for internal tools, LangGraph for customer-facing
: Different reliability requirements justify different frameworks within the same organization.
MCP as the bridge
: All three frameworks support MCP, so you can share tool servers across frameworks. Build your tools once as MCP servers and use them from any framework.
10 Why Lushbinary for AI Agent Development
We've built production agent systems with LangGraph, CrewAI, and AutoGen across industries including fintech, healthcare, and e-commerce. Our team understands the tradeoffs between these frameworks at a deep architectural level — not just from reading docs, but from shipping real systems that handle thousands of agent executions daily.
Framework selection & architecture
: We assess your use case, team capabilities, and infrastructure to recommend the right framework (or combination) for your needs.
Production agent pipelines
: We design and build agent workflows with proper checkpointing, error recovery, observability, and cost controls from day one.
MCP tool server development
: We build custom MCP servers that connect your agents to internal databases, APIs, and business logic — reusable across any framework.
Migration & optimization
: Moving from prototype to production? We handle CrewAI-to-LangGraph migrations, cost optimization, and performance tuning.
Observability & monitoring
: We set up LangSmith dashboards, custom metrics, alerting, and cost tracking so you know exactly how your agents are performing.
🚀 Free consultation
Not sure which agent framework fits your use case? We offer a free 30-minute consultation to assess your requirements, recommend the right architecture, and outline an implementation plan. 
Book a call →
https://calendly.com/lushbinary/30min
❓ Frequently Asked Questions
What is the best AI agent framework for production in 2026?
LangGraph is the best AI agent framework for production in 2026. Its graph-based workflow engine provides stateful execution, streaming, checkpointing, and time-travel debugging via LangSmith. It gives teams fine-grained control over agent behavior, making it ideal for complex, mission-critical AI agent deployments.
LangGraph vs CrewAI: which should I choose?
Choose LangGraph for production systems that need fine-grained control, stateful workflows, streaming, and observability via LangSmith. Choose CrewAI for fast prototyping and team-based agent orchestration where you want to define agents with roles, backstories, and goals using a simple DSL. CrewAI gets you to a working prototype faster; LangGraph scales better in production.
Does AutoGen work well outside of Azure?
AutoGen supports any OpenAI-compatible API, but its deepest integrations are with Azure OpenAI Service. Teams running on Azure get native identity management, compliance tooling, and optimized inference endpoints. Outside Azure, AutoGen works but you lose some of the managed infrastructure benefits.
Do LangGraph, CrewAI, and AutoGen support MCP in 2026?
Yes. All three frameworks support the Model Context Protocol (MCP) as of 2026. LangGraph integrates MCP tools as graph nodes. CrewAI supports MCP tool servers as agent tools. AutoGen agents can call MCP-compatible tool servers during multi-agent conversations.
How many LLM calls does AutoGen use per task?
AutoGen's multi-agent conversation pattern typically uses 20+ LLM calls per task because each agent generates independent responses, critiques, and refinements. This makes AutoGen powerful for collaborative reasoning but significantly more expensive per task than LangGraph or CrewAI.
📚 Sources
LangGraph Documentation
https://langchain-ai.github.io/langgraph/
 - Official framework docs
CrewAI Documentation
https://docs.crewai.com/
 - Official framework docs
AutoGen Documentation
https://microsoft.github.io/autogen/
 - Microsoft official docs
LangSmith
https://smith.langchain.com/
 - Observability platform for LangGraph
Model Context Protocol (MCP)
https://modelcontextprotocol.io/
 - Official MCP specification
Content was rephrased for compliance with licensing restrictions. Benchmark data based on internal testing at Lushbinary using GPT-4o as of 2026. Framework capabilities and APIs may change — always verify on the vendor's website.
Ready to Build Production AI Agent Systems?
From framework selection and architecture design to MCP integration and production deployment — we ship AI agent systems that scale. Tell us about your project.
Ready to Build Something Great?
Get a free 30-minute strategy call. We'll map out your project, timeline, and tech stack - no strings attached.
Let's Talk About Your Project
https://calendly.com/lushbinary/30min
Prefer email? Reach us directly:
connect@lushbinary.com
mailto:connect@lushbinary.com
 Copy
Contact Us
First Name
Last Name
Email Address *
Phone
What do you need?
Select a service
Web Application Development
Mobile App Development
UI/UX Design
Cloud & DevOps
API Development & Integration
Database & Backend Engineering
Cybersecurity & Compliance
Analytics & FinOps
SEO & Digital Marketing
AI / ML Solutions
Not sure yet
Budget / month (USD)
Select a range
Under $2,000
$2,000 - $5,000
$5,000 - $10,000
$10,000 - $25,000
$25,000+
Not sure yet
Timeline
Select a timeline
ASAP
Within 1 month
1-3 months
3-6 months
6+ months
Just exploring
Notes
Submit
Encrypted in transit · GDPR ready · We never share or sell your data
0
Share
Notify me Subscribe
Discover more
Brokerages & Day Trading
Educational Resources
Cloud Storage
Java (Programming Language)
Machine Learning & Artificial Intelligence
Scripting Languages
Subscribe · Newsletter
Ship Better Engineering, Every Week
Practical writing on AI agents, cloud architecture, and product teardowns. Read by builders at startups and Fortune 500s.
New deep-dives on AI agents and cloud architecture
Engineering teardowns of shipped products
No spam, unsubscribe in one click
Your email address
Subscribe
We respect your inbox. Read our 
privacy policy
https://lushbinary.com/privacy
.
Exclusive Offer for Lushbinary Readers
 
Widel AI
One Subscription. Every Flagship AI Model.
Stop juggling multiple AI subscriptions. WidelAI gives you access to Claude, GPT, Gemini, and more - all under a single plan.
Claude Opus & Sonnet GPT-5.5 & o3 Gemini Pro Single Dashboard API Access
Use code at checkout for 10% off your subscription:
LUSHBINARY10
Get Started on WidelAI
https://widelai.com/
LangGraph CrewAI AutoGen AI Agents Agent Framework MCP LangChain Multi-Agent Production AI Azure AI
More from the Blog
[
The Most Important Developer Tasks in the Agentic AI Era
](https://lushbinary.com/blog/most-important-developer-tasks-agentic-ai-era/)
[
Databricks Developer Guide: Build Data & AI Apps in 2026
](https://lushbinary.com/blog/databricks-data-intelligence-platform-developer-guide/)
Contact U s

https://github.com/LushBinary
 

https://www.instagram.com/lushbinary/
 

https://www.linkedin.com/company/lushbinary/
 

https://codepen.io/LushBinary
 

https://www.facebook.com/lushbinary
 

https://in.pinterest.com/LushBinary/
 

https://www.youtube.com/@lushbinary
 

https://x.com/LushBinary
 
 
Lushbinary
Crafting digital excellence through innovative solutions and thoughtful design.
Get Started
https://calendly.com/lushbinary/30min
Our Services
https://lushbinary.com/services/
Web Development
https://lushbinary.com/services/
UI/UX Design
https://lushbinary.com/services/
Mobile Applications
https://lushbinary.com/services/
Cloud Solutions
https://lushbinary.com/services/
AI Integration
https://lushbinary.com/services/
Contact Info
Our Address
131 Continental Dr Suite 305
Newark, DE 19713 US
Phone
+1 (727) 353 1353
tel:+17273531353
Email
connect@lushbinary.com
mailto:connect@lushbinary.com
 Copy
© 2026 Lushbinary Inc. All rights reserved.
Become a Partner 
Vision & Mission
https://lushbinary.com/vision-mission/
 
Privacy Policy
https://lushbinary.com/privacy/
 
Cookie Policy
https://lushbinary.com/cookies/
 
Terms of Service
https://lushbinary.com/terms/
 
Sitemap
https://lushbinary.com/site-map/
We use cookies and analytics tools to understand how you use our site and improve your experience. See our 
Privacy Policy
https://lushbinary.com/privacy/
 and 
Cookie Policy
https://lushbinary.com/cookies/
 for details.
Keep Essential Only Accept All
Contact us
https://lushbinary.com/contact/
 Become a Partner