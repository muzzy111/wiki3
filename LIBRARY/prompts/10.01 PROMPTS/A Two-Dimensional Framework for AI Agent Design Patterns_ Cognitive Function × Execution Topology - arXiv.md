# A Two-Dimensional Framework for AI Agent Design Patterns: Cognitive Function × Execution Topology - arXiv

Source URL: https://arxiv.org/html/2605.13850v1

A Two-Dimensional Framework for AI Agent Design Patterns: Cognitive Function × Execution Topology
Report GitHub Issue
×
Title:
Content selection saved. Describe the issue below:
Description:
Submit without GitHub Submit in GitHub
 
arXiv is now an independent nonprofit! 
Learn more
https://info.arxiv.org/about
 ×
arXiv logo Back to arXiv
https://arxiv.org/
Why HTML?
https://info.arxiv.org/about/accessible_HTML.html
 
Report Issue
https://arxiv.org/html/2605.13850v1
 
Back to Abstract
https://arxiv.org/abs/2605.13850v1
 
Download PDF
https://arxiv.org/pdf/2605.13850v1
 

javascript:toggleNavTOC();
 

javascript:toggleReadingMode();
Abstract
https://arxiv.org/html/2605.13850v1#abstract1
1 Introduction
https://arxiv.org/html/2605.13850v1#S1
2 The Two-Dimensional Framework
https://arxiv.org/html/2605.13850v1#S2
2.1 Design Principles
https://arxiv.org/html/2605.13850v1#S2.SS1
2.2 Axis 1: Cognitive Function (What)
https://arxiv.org/html/2605.13850v1#S2.SS2
2.3 Axis 2: Execution Topology (How)
https://arxiv.org/html/2605.13850v1#S2.SS3
2.4 The 7 × 6 7\times 6 Pattern Matrix
https://arxiv.org/html/2605.13850v1#S2.SS4
3 Representative Pattern Definitions
https://arxiv.org/html/2605.13850v1#S3
3.1 Context Triage (C1 × \times T2: Context Engineering × \times Route)
https://arxiv.org/html/2605.13850v1#S3.SS1
3.2 RAG Pipeline (C2 × \times T1: Memory × \times Chain)
https://arxiv.org/html/2605.13850v1#S3.SS2
3.3 Complexity-Based Routing (C3 × \times T2: Reasoning × \times Route)
https://arxiv.org/html/2605.13850v1#S3.SS3
3.4 Plan-and-Execute (C4 × \times T4: Action × \times Orchestrate)
https://arxiv.org/html/2605.13850v1#S3.SS4
3.5 Generator-Critic (C5 × \times T5: Reflection × \times Loop)
https://arxiv.org/html/2605.13850v1#S3.SS5
3.6 Fan-Out/Gather (C6 × \times T3: Collaboration × \times Parallel)
https://arxiv.org/html/2605.13850v1#S3.SS6
3.7 Approval Gate (C7 × \times T2: Governance × \times Route)
https://arxiv.org/html/2605.13850v1#S3.SS7
3.8 Blast Radius Control (C7 × \times T6: Governance × \times Hierarchy)
https://arxiv.org/html/2605.13850v1#S3.SS8
4 Orthogonality Demonstration
https://arxiv.org/html/2605.13850v1#S4
4.1 Same Topology, Different Cognitive Functions
https://arxiv.org/html/2605.13850v1#S4.SS1
4.2 Same Cognitive Function, Different Topologies
https://arxiv.org/html/2605.13850v1#S4.SS2
5 Comparison with Existing Frameworks
https://arxiv.org/html/2605.13850v1#S5
6 Coverage Evaluation
https://arxiv.org/html/2605.13850v1#S6
6.1 Four Domain Case Studies
https://arxiv.org/html/2605.13850v1#S6.SS1
6.2 Five Laws of Pattern Selection
https://arxiv.org/html/2605.13850v1#S6.SS2
6.3 Cross-Pattern Analysis
https://arxiv.org/html/2605.13850v1#S6.SS3
7 Discussion
https://arxiv.org/html/2605.13850v1#S7
7.1 Scope and Limitations
https://arxiv.org/html/2605.13850v1#S7.SS1
7.2 Positioning in Software Engineering History
https://arxiv.org/html/2605.13850v1#S7.SS2
8 Conclusion
https://arxiv.org/html/2605.13850v1#S8
References
https://arxiv.org/html/2605.13850v1#bib
License: arXiv.org perpetual non-exclusive license
https://info.arxiv.org/help/license/index.html#licenses-available
arXiv:2605.13850v1 [cs.AI] 16 Mar 2026
A Two-Dimensional Framework for AI Agent Design Patterns: Cognitive Function × \times Execution Topology
Jia Huang 
1
 Joey Tianyi Zhou 
1,2
 
1
Agency for Science, Technology and Research (A*STAR), Singapore 
2
Centre for Frontier AI Research (CFAR), A*STAR
huang_jia@a-star.edu.sg joey_zhou@a-star.edu.sg
(March 2026)
Abstract
Existing frameworks for LLM-based agent architectures describe systems from a single perspective: industry guides (Anthropic, Google, LangChain) focus on 
execution topology
—how data flows—while cognitive science surveys focus on 
cognitive function
—what the agent does. Neither axis alone disambiguates architecturally distinct systems: the same Orchestrator-Workers topology can implement Plan-and-Execute, Hierarchical Delegation, or Adversarial Verification—three patterns with fundamentally different failure modes and design trade-offs.
We propose a two-dimensional classification that combines (1) a Cognitive Function axis with seven categories (Context Engineering, Memory, Reasoning, Action, Reflection, Collaboration, Governance) and (2) an Execution Topology axis with six structural archetypes (Chain, Route, Parallel, Orchestrate, Loop, Hierarchy). The resulting 7 × 6 7\times 6 matrix identifies 27 named patterns, 13 with original names. We demonstrate orthogonality through systematic cross-axis analysis, define eight representative patterns in detail, and validate descriptive coverage across four real-world domains (financial lending, legal due diligence, network operations, healthcare triage). Cross-domain analysis yields five empirical laws of pattern selection governing the relationship between environmental constraints (time pressure, action authority, failure cost asymmetry, volume) and architectural choices. The framework provides a principled, framework-neutral, and model-agnostic vocabulary for AI agent architecture design.
Keywords: AI agents, design patterns, taxonomy, cognitive function, execution topology, software architecture, multi-agent systems
1 Introduction
The rapid deployment of LLM-based agent systems has produced a fragmented landscape of architectural guidance. Every major AI organization has published its own framework for understanding agent architectures:
• Anthropic's “Building Effective Agents” [ 
1
https://arxiv.org/html/2605.13850v1#bib.bib1
] identifies six execution topologies (prompt chaining, routing, parallelization, orchestrator-workers, evaluator-optimizer, autonomous agents).
• Google's Agent Development Kit [ 
2
https://arxiv.org/html/2605.13850v1#bib.bib2
] describes eight workflow patterns organized around sequential, parallel, and loop structures.
• LangChain's multi-agent guide [ 
3
https://arxiv.org/html/2605.13850v1#bib.bib3
] presents four coordination patterns (supervisor, hierarchical, network, handoff).
• Andrew Ng's agentic design patterns [ 
4
https://arxiv.org/html/2605.13850v1#bib.bib4
] identifies four cognitive capabilities (reflection, tool use, planning, multi-agent collaboration).
The critical observation: all existing frameworks describe agent architectures from 
only one axis
. Industry sources focus on execution topology— 
how
 data flows. Cognitive surveys [ 
5
https://arxiv.org/html/2605.13850v1#bib.bib5
, 
6
https://arxiv.org/html/2605.13850v1#bib.bib6
, 
7
https://arxiv.org/html/2605.13850v1#bib.bib7
] focus on functional capability— 
what
 the agent does. Neither alone disambiguates architecturally distinct systems.
Consider the Orchestrator-Workers topology. The same structural wiring diagram serves at least three fundamentally different patterns:
Plan-and-Execute (Action): a planner decomposes a task into subtasks and dispatches them to executor agents.
Hierarchical Delegation (Collaboration): a manager obtains specialized expertise from domain-specific sub-agents.
Observability Harness (Governance): a central monitor orchestrates logging, tracing, and alerting across agent modules.
These are architecturally distinct systems with different failure modes, different scaling properties, and different testing strategies—yet they share a topology. Without the cognitive function axis, they are indistinguishable. Similarly, a single cognitive function can be realized by multiple topologies: Reasoning (C3) can be implemented as Chain-of-Thought (Chain), Complexity-Based Routing (Route), Parallel Exploration (Parallel), or Iterative Hypothesis Testing (Loop). The choice of topology determines latency, cost, and failure characteristics.
This paper makes four contributions:
A two-dimensional classification framework that combines cognitive function and execution topology into a single coordinate system (Section 
2
https://arxiv.org/html/2605.13850v1#S2
).
Detailed definitions of eight representative patterns—one per cognitive function plus a governance pattern—sufficient for independent understanding (Section 
3
https://arxiv.org/html/2605.13850v1#S3
).
A systematic orthogonality demonstration showing that neither axis reduces to the other (Section 
4
https://arxiv.org/html/2605.13850v1#S4
).
A coverage evaluation across four real-world domains that validates the framework's descriptive power and yields five empirical laws of pattern selection (Section 
6
https://arxiv.org/html/2605.13850v1#S6
).
2 The Two-Dimensional Framework
2.1 Design Principles
Our framework is guided by three principles:
Orthogonality. The two axes must be independently variable. A change in cognitive function should not necessitate a change in execution topology, and vice versa.
Completeness. The axes should cover all capabilities required for production agent systems and all structural archetypes sufficient to compose any agent workflow.
Durability. Categories describe 
structural needs
 and 
structural forms
 that persist across framework and model changes. “Context Engineering” remains relevant whether the context window is 4K or 2M tokens; “Loop” remains relevant whether the loop body is a GPT-4 call or a Claude call.
2.2 Axis 1: Cognitive Function (What)
We identify seven cognitive function categories. These are grounded in the cognitive science literature on language agents [ 
7
https://arxiv.org/html/2605.13850v1#bib.bib7
] and extended with two categories (Governance, Context Engineering) that emerged from production deployment analysis:
Table 1: Seven cognitive function categories.
ID
Category
Core Question
C1
Context Engineering
What information enters the agent's working memory?
C2
Memory
How does the agent store, retrieve, and update knowledge?
C3
Reasoning
How does the agent deliberate and decide?
C4
Action
How does the agent act on the world through tools?
C5
Reflection
How does the agent evaluate and improve its own outputs?
C6
Collaboration
How do multiple agents coordinate to solve a problem?
C7
Governance
How is the agent bounded, observed, and controlled?
The seven categories form a cognitive processing pipeline: an agent perceives input (C1), retrieves relevant knowledge (C2), reasons about what to do (C3), executes actions (C4), evaluates its outputs (C5), coordinates with other agents when needed (C6), and operates within governance constraints throughout (C7). This pipeline is not strictly sequential—agents cycle through Perception-Reasoning-Action loops repeatedly—but the categories are functionally distinct.
2.3 Axis 2: Execution Topology (How)
We identify six execution topology archetypes. These subsume the topologies described in existing industry frameworks [ 
1
https://arxiv.org/html/2605.13850v1#bib.bib1
, 
2
https://arxiv.org/html/2605.13850v1#bib.bib2
] :
Table 2: Six execution topology archetypes.
ID
Archetype
Structure
T1
Chain
Linear sequential pipeline; output of step n n feeds step n + 1 n+1
T2
Route
Conditional branching; a classifier dispatches to specialized handlers
T3
Parallel
Concurrent fan-out with aggregation; independent subtasks run simultaneously
T4
Orchestrate
Central coordinator delegates to workers and synthesizes results
T5
Loop
Iterative refinement with explicit exit conditions
T6
Hierarchy
Nested multi-level delegation; each level can use any other topology
2.4 The 7 × 6 7\times 6 Pattern Matrix
The Cartesian product yields a 7 × 6 = 42 7\times 6=42 cell matrix. We identify 27 named patterns occupying these cells; the remaining 15 cells are either structurally redundant or not yet observed in practice. Table 
3
https://arxiv.org/html/2605.13850v1#S2.T3
 shows the complete matrix. Cells marked with
★ \bigstar carry original names coined in this work.
Table 3: The 7 × 6 7\times 6 pattern matrix. 27 named patterns;
★ \bigstar = original name coined in this work.
T1 Chain
T2 Route
T3 Parallel
T4 Orchestrate
T5 Loop
T6 Hierarchy
C1
Semantic Compact. ★ \bigstar
Context Triage ★ \bigstar
Multi-Modal Fusion
Progressive Disc. ★ \bigstar
—
—
C2
RAG Pipeline
Hierarchical Ret. ★ \bigstar
—
Progress Track. ★ \bigstar
Failure Journal ★ \bigstar
—
C3
Chain-of-Thought
Complexity Rte. ★ \bigstar
Parallel Explor.
—
Iterative Hyp. ★ \bigstar
—
C4
Prompt Chaining
Tool Dispatch
—
Plan-and-Execute
ReAct Loop
Guardrail Sand. ★ \bigstar
C5
—
Skill Package ★ \bigstar
—
—
Generator-Critic
Exp. Replay
C6
Handoff Chain
—
Fan-Out/Gather
—
Adversarial Rev.
Hier. Deleg.
C7
—
Approval Gate ★ \bigstar
Prog. Commit. ★ \bigstar
Observ. Harness ★ \bigstar
—
Blast Radius ★ \bigstar
3 Representative Pattern Definitions
We define eight representative patterns—at least one per cognitive function row—in sufficient detail for independent understanding. Each definition follows the format: 
coordinates, problem, architectural solution, and engineering trade-offs
. The remaining 19 patterns follow the same template.
3.1 Context Triage (C1 × \times T2: Context Engineering × \times Route)
Problem. An agent at task start has access to many information sources: the user's message, conversation history, project files, documentation, tool outputs, retrieved knowledge, and environmental metadata. The context window cannot hold everything. The naive approach—first-in-first-out, truncate when full—fails because relevance is not correlated with recency.
Solution. Context Triage applies emergency-room triage logic to information selection. Every information source is classified by priority (P0–P3), and a routing function dispatches each source to the appropriate treatment: P0 (always load), P1 (load if relevant), P2 (load on demand), P3 (never load). The routing function evaluates source relevance against the current task description, token budget constraints, and cache-friendliness. Claude Code's five-level CLAUDE.md hierarchy (Enterprise → \to User → \to Project → \to Rules → \to Local) is a production implementation of this pattern.
Trade-offs. Higher triage accuracy reduces context noise but increases routing latency. Over-aggressive filtering risks starving the agent of critical information; under-filtering dilutes attention quality [ 
12
https://arxiv.org/html/2605.13850v1#bib.bib12
] .
3.2 RAG Pipeline (C2 × \times T1: Memory × \times Chain)
Problem. The agent needs knowledge beyond what fits in its context window or its training data. The knowledge may be domain-specific, frequently updated, or proprietary.
Solution. Retrieval-Augmented Generation [ 
13
https://arxiv.org/html/2605.13850v1#bib.bib13
] implements an “open-book exam”: query → \to retrieve → \to rerank → \to generate. The chain topology ensures each step's output feeds the next. The retrieval step converts the agent's information need into a vector query against an external knowledge store; the reranking step filters and orders results by relevance; the generation step synthesizes an answer conditioned on retrieved evidence. MemGPT [ 
14
https://arxiv.org/html/2605.13850v1#bib.bib14
] extends this with virtual context management—paging data between the context window and external storage using OS-inspired memory management.
Trade-offs. Each retrieved chunk consumes token budget. Retrieving 10 chunks at 500 tokens each costs 5,000 tokens that cannot be spent on reasoning. The architect must balance recall (more chunks, more evidence) against precision (fewer chunks, more attention per chunk).
3.3 Complexity-Based Routing (C3 × \times T2: Reasoning × \times Route)
Problem. Agent workloads contain queries of widely varying difficulty. Applying deep Chain-of-Thought reasoning with 64K thinking tokens to “What are your store hours?” wastes compute; applying a quick heuristic to a multi-step diagnostic task produces errors.
Solution. A lightweight classifier evaluates each incoming query and routes it to the appropriate reasoning depth: System 1 (direct response, ∼ \sim 500 tokens) for simple queries, System 2 (Chain-of-Thought, ∼ \sim 8K tokens) for moderate queries, and extended deliberation ( ∼ \sim 64K tokens) for complex queries. This mirrors Kahneman's dual-process theory [ 
15
https://arxiv.org/html/2605.13850v1#bib.bib15
] : the architecture decides 
how deeply
 to think before thinking. RouteLLM [ 
16
https://arxiv.org/html/2605.13850v1#bib.bib16
] demonstrated 85% cost reduction with minimal quality loss by routing between strong and weak models.
Trade-offs. Classifier accuracy determines system performance. Misrouting a complex query to System 1 produces errors; misrouting a simple query to System 2 wastes tokens. At 100,000 daily queries, the difference between $0.0015 and $0.19 per query is $18,850/day.
3.4 Plan-and-Execute (C4 × \times T4: Action × \times Orchestrate)
Problem. A complex task requires multiple tool calls where the execution order depends on intermediate results. A single-step approach cannot decompose the task; a purely sequential chain is too rigid to handle dynamic dependencies.
Solution. Separate strategy from tactics: a 
planner
 agent decomposes the task into a directed acyclic graph (DAG) of subtasks, and an 
executor
 agent (or pool of executors) carries out each subtask. The planner can use a cheaper model; the executors handle tool invocation with domain-specific prompts. This is the Saga pattern from distributed systems [ 
17
https://arxiv.org/html/2605.13850v1#bib.bib17
] adapted for agent workflows: each subtask is a compensatable action, and the planner manages the overall transaction.
Trade-offs. Plan quality determines execution efficiency. Over-decomposition creates unnecessary coordination overhead; under-decomposition creates subtasks too complex for executors. The separation also introduces latency—planning before executing is slower than immediate execution for simple tasks.
3.5 Generator-Critic (C5 × \times T5: Reflection × \times Loop)
Problem. An agent's first-draft output is functional but imperfect. The agent needs to improve this output through structured critique before delivery.
Solution. Separate generation from evaluation and iterate: generate → \to critique → \to revise → \to critique → \to … → \to accept. The critical design choice is the 
feedback source
. Huang et al. [ 
18
https://arxiv.org/html/2605.13850v1#bib.bib18
] (ICLR 2024) demonstrated that LLMs cannot reliably self-correct without external feedback. Three variants address this: (1) self-critique using different prompts for generation and evaluation, (2) cross-model critique where a separate model evaluates, and (3) tool-grounded critique where a test suite, linter, or calculator provides deterministic feedback. CRITIC [ 
19
https://arxiv.org/html/2605.13850v1#bib.bib19
] showed that tool-interactive critiquing consistently outperforms pure self-critique. Self-Refine [ 
20
https://arxiv.org/html/2605.13850v1#bib.bib20
] demonstrated ∼ \sim 20% absolute improvement across seven tasks through 2–4 iterations.
Trade-offs. Each iteration costs tokens. Convergence requires a stopping criterion—a quality threshold or iteration budget—to prevent over-editing or oscillation.
3.6 Fan-Out/Gather (C6 × \times T3: Collaboration × \times Parallel)
Problem. A task is decomposable into independent subtasks that can be processed simultaneously. A single agent processing them sequentially would take n × n\times the time.
Solution. A coordinator fans out subtasks to n n worker agents running in parallel, then gathers and aggregates their results. Each worker operates in an isolated context window containing only its subtask. The coordinator handles result synthesis, conflict resolution, and quality assessment. Du et al. [ 
21
https://arxiv.org/html/2605.13850v1#bib.bib21
] showed that multiagent debate among multiple LLM instances improves factuality and reasoning, with consensus-based aggregation outperforming single-agent baselines on arithmetic and strategic reasoning benchmarks. However, naive aggregation without structured debate protocols can amplify errors when agents produce conflicting outputs.
Trade-offs. n n workers consume n × n\times tokens. The aggregation step is the quality bottleneck—naive concatenation of worker outputs produces incoherent results. Worker independence must be genuine; interdependent subtasks force sequential execution regardless of topology.
3.7 Approval Gate (C7 × \times T2: Governance × \times Route)
Problem. An agent that acts on the real world faces a dilemma: too many approval prompts cause “approval fatigue” (users click approve reflexively), while too few allow irreversible damage.
Solution. Route every agent action through a three-stage evaluation: (1) Deny rules (absolute priority—block dangerous actions unconditionally), (2) Allow rules (auto-approve low-risk actions to reduce noise), (3) Human gate (residual—anything not denied or allowed reaches the human). Actions are classified along two dimensions: reversibility (can the action be undone?) and impact (how much damage if wrong?). Claude Code implements this as a five-tier permission system ranging from default (prompt for everything dangerous) to bypassPermissions (no gates).
Trade-offs. Classifier accuracy is critical. Under-classification blocks safe actions and frustrates users; over-classification allows dangerous actions through. The key design variable is the granularity of the reversibility/impact classification: too coarse and safe actions are blocked; too fine and the classifier itself becomes a maintenance burden.
3.8 Blast Radius Control (C7 × \times T6: Governance × \times Hierarchy)
Problem. Even with approval gates, an agent may cause damage through unexpected tool interactions, cascading failures, or actions that are individually safe but collectively dangerous.
Solution. Nested containment hierarchies limit the maximum damage any single action can cause. Each level constrains the child: process sandbox → \to filesystem isolation → \to network restrictions → \to API rate limits → \to budget caps. The hierarchy topology is essential: each containment layer can enforce different policies, and the outermost layer represents the organizational risk boundary. Codex CLI's sandbox enables a “full-auto” mode precisely because the sandbox guarantees bounded damage.
Trade-offs. Tighter containment reduces blast radius but also reduces agent capability. Finding the minimum viable containment—the tightest sandbox that still permits the agent to accomplish its task—is the governance architect's central challenge.
4 Orthogonality Demonstration
To validate that the two axes are genuinely independent, we show that (a) a single topology serves multiple cognitive functions, and (b) a single cognitive function is served by multiple topologies.
4.1 Same Topology, Different Cognitive Functions
The Loop topology (T5) serves at least four distinct cognitive purposes:
• Failure Journal (C2): iteratively recording and consolidating error patterns from past executions.
• Iterative Hypothesis Testing (C3): alternating hypothesis generation with evidence gathering through environment interaction.
• ReAct Loop (C4): interleaving reasoning steps and tool execution [ 
22
https://arxiv.org/html/2605.13850v1#bib.bib22
] .
• Generator-Critic (C5): iteratively generating and critiquing outputs until a quality threshold is met.
All four share the same while(!done) control structure. They differ entirely in 
what cognitive function
 the loop serves: memory consolidation, hypothesis testing, tool use, or quality improvement.
4.2 Same Cognitive Function, Different Topologies
Reasoning (C3) can be implemented via at least four topologies:
• Chain-of-Thought (T1 Chain): linear step-by-step decomposition [ 
23
https://arxiv.org/html/2605.13850v1#bib.bib23
] .
• Complexity-Based Routing (T2 Route): dispatching queries to different reasoning depths.
• Parallel Exploration (T3 Parallel): tree or graph search across multiple reasoning branches simultaneously.
• Iterative Hypothesis Testing (T5 Loop): probe-observe-adjust cycles where the agent reasons 
through
 environment interaction.
The choice of topology determines latency (Chain is fastest, Loop is slowest), cost (Parallel is most expensive), and completeness (Chain may miss alternatives that Parallel would find). This confirms that neither axis reduces to the other: knowing the cognitive function does not determine the topology, and vice versa.
5 Comparison with Existing Frameworks
Table 4: Comparison with existing agent architecture resources.
Resource
Cognitive Axis?
Topology Axis?
# Patterns
Framework-Neutral?
Anthropic [ 
1
https://arxiv.org/html/2605.13850v1#bib.bib1
]
No
Yes (6)
6
Yes
Google ADK [ 
2
https://arxiv.org/html/2605.13850v1#bib.bib2
]
No
Yes (8)
8
No
LangChain [ 
3
https://arxiv.org/html/2605.13850v1#bib.bib3
]
No
Yes (4)
4
No
Andrew Ng [ 
4
https://arxiv.org/html/2605.13850v1#bib.bib4
]
Yes (4)
No
4
Yes
Wang et al. [ 
5
https://arxiv.org/html/2605.13850v1#bib.bib5
]
Yes (4)
No
—
Yes
Sumers et al. [ 
7
https://arxiv.org/html/2605.13850v1#bib.bib7
]
Yes (4)
No
—
Yes
Liu et al. [ 
10
https://arxiv.org/html/2605.13850v1#bib.bib10
]
No
No
18
Yes
Dao et al. [ 
11
https://arxiv.org/html/2605.13850v1#bib.bib11
]
Yes (5)
No
12
Yes
This work
Yes (7)
Yes (6)
27
Yes
No existing framework provides both axes simultaneously. Liu et al. [ 
10
https://arxiv.org/html/2605.13850v1#bib.bib10
] catalog 18 agent design patterns but organize them by a flat category system without orthogonal axes, making it impossible to distinguish patterns that share a topology but serve different cognitive functions. Dao et al. [ 
11
https://arxiv.org/html/2605.13850v1#bib.bib11
] use a system-theoretic lens with five functional categories but do not cross them with execution topologies. Our contribution is not the individual axes—both have precedents—but their 
systematic combination
 into a single coordinate system that enables unambiguous pattern identification.
6 Coverage Evaluation
To validate the framework's descriptive power, we apply a six-step Pattern Selection Methodology (Bound → \to Map → \to Topology → \to Select → \to Impact → \to Build) to four real-world domains. Each domain was chosen to stress different aspects of the framework: different time constraints, different volumes, different risk profiles, and different governance requirements.
6.1 Four Domain Case Studies
Table 5: Four case study domains with structurally different architectures derived from the same pattern catalog.
Financial Lending
Legal Due Diligence
Network Operations
Healthcare Triage
Task
SME loan assessment
M&A contract review
NOC alert handling
ED patient triage
Time budget
4 hours
8 hours
5 minutes
60 seconds
Volume
1 case
500 contracts
Continuous stream
1 patient
Primary topology
Orchestrate
Hierarchy
Route
Chain
Patterns selected
7
8
9
7
Action authority
Recommend only
Recommend only
Auto (P3/P4)
Recommend only
Governance focus
Audit trail
Data isolation
Blast radius
Asymmetric safety
Financial Lending. An agent assisting bank credit officers with SME loan assessment. Seven patterns selected: Context Triage (filter applicant documents by relevance), RAG Pipeline (retrieve regulatory rules and industry benchmarks), Complexity-Based Routing (route simple applications to fast-track, complex ones to deep analysis), Iterative Hypothesis Testing (probe financial statements for inconsistencies), Generator-Critic (regulatory compliance review), Approval Gate (human officer makes final decision), and Observability Harness (audit logging for regulatory compliance). The 4-hour budget permits the Orchestrate topology with deep per-pattern execution.
Legal Due Diligence. An agent reviewing 500 contracts for M&A due diligence. Eight patterns selected, notably adding Fan-Out/Gather (parallel contract processing) and Hierarchical Delegation (partner → \to associate → \to clause-level review) to handle volume. The Hierarchy topology is driven by Law 4 (volume determines collaboration needs).
Network Operations. An agent handling telecom NOC alerts within a 5-minute SLA. Nine patterns selected, with Route as primary topology to classify alerts by severity and signature match. Blast Radius Control is critical: the agent can auto-execute remediation for P3/P4 alerts but must escalate P1/P2. The tight time budget limits pattern depth (Law 1).
Healthcare Triage. An agent assisting ED triage nurses with patient acuity assessment. Seven patterns within a 60-second budget force the Chain topology (the simplest and fastest). Generator-Critic is parameterized with extreme asymmetry (Law 3): the critic is biased toward upgrading acuity, because under-triage (sending a critical patient to the waiting room) is catastrophically worse than over-triage.
6.2 Five Laws of Pattern Selection
From cross-domain comparison, five invariant principles emerge:
Law 1: Time pressure determines architectural complexity. Days afford Hierarchy + Orchestrate (10+ patterns); hours afford Orchestrate (7–8); minutes afford Route + Loop (5–7); seconds afford Chain only (3–5). 
The first fix for a slow prototype is not “optimize each pattern” but “remove a pattern.”
Law 2: Action authority determines governance pattern. Advisory-only systems need Approval Gate (human decides). Systems with low-risk auto-execution need Blast Radius Control (pre-compute impact). Systems with high-risk irreversible actions need Guardrail Sandwich (pre- and post-checks). Mixed systems need tiered governance.
Law 3: Failure cost asymmetry reshapes reflection. When false positives and false negatives have symmetric costs (lending), the Generator-Critic optimizes for accuracy. When costs are extremely asymmetric (healthcare: under-triage is fatal), the critic is deliberately biased toward the safe error.
Law 4: Volume determines collaboration needs. Single-item processing needs no collaboration patterns. Moderate volume (10–50 items) needs Fan-Out/Gather. High volume (100–500) needs Hierarchical Delegation + Fan-Out/Gather. Continuous streams need Route + auto-scaling.
Law 5: Same pattern, different parameterization. The same pattern (e.g., Generator-Critic) appears in all four domains but behaves differently: 5-minute regulatory review (lending), 30-second sanity check (network), biased safety override (healthcare). 
A pattern is a structural template, not a behavioral prescription.
 The template provides the HOW; the domain provides the WHAT and WHY.
6.3 Cross-Pattern Analysis
Four patterns appear in three or more of the four case studies: Context Triage, RAG Pipeline, Complexity-Based Routing, and Generator-Critic. Their ubiquity suggests these are 
foundational
 patterns—required by most production agent systems regardless of domain. In contrast, Blast Radius Control and Fan-Out/Gather appear only when specific domain constraints (autonomous action authority, high volume) are present, suggesting they are 
conditional
 patterns triggered by environmental factors.
The framework's empty cells also carry information. C5 (Reflection) has only three populated cells out of six, making it the sparsest row. This suggests that reflection in current agent systems is under-explored—most systems implement only Generator-Critic loops and have not yet developed reflection patterns using Chain, Route, or Parallel topologies. We hypothesize that as agent systems mature, patterns such as 
Parallel Reflection
 (multiple critics evaluating simultaneously) and 
Reflection Routing
 (dispatching outputs to domain-specific critics) will emerge.
7 Discussion
7.1 Scope and Limitations
Non-perfect orthogonality. Some combinations are more natural than others. Governance patterns tend toward Route and Hierarchy topologies because gate-keeping and containment are inherently hierarchical. We report the framework honestly: 27 of 42 cells are populated (64%), and the distribution is not uniform. The empty cells may represent genuinely impossible combinations, under-explored territory, or artifacts of current technology limitations.
Pattern granularity. The 27-pattern count reflects a judgment call about granularity. One could split Generator-Critic into self-critique and cross-model-critique (two patterns) or merge Chain-of-Thought with Prompt Chaining (reducing the count). We chose a granularity that maximizes architectural discrimination while remaining memorable.
Temporal validity. The framework is designed for durability, but the specific patterns will evolve. As reasoning models internalize Chain-of-Thought, the architectural Chain-of-Thought pattern may become less relevant—replaced by budget-aware routing to reasoning models. The framework accommodates this: the pattern evolves within its cell, but the coordinate system remains stable.
7.2 Positioning in Software Engineering History
We position agent design patterns as the third generation of a 30-year software engineering tradition:
Object-Oriented Patterns (1994): Gamma et al. [ 
8
https://arxiv.org/html/2605.13850v1#bib.bib8
] responded to the challenge of object composition in deterministic systems. 23 patterns organized by purpose (creational, structural, behavioral) and scope.
Enterprise/Distributed Patterns (2000s): Fowler [ 
9
https://arxiv.org/html/2605.13850v1#bib.bib9
] , Hohpe and Woolf [ 
24
https://arxiv.org/html/2605.13850v1#bib.bib24
] responded to the challenge of distributed system integration. Patterns organized by architectural layer and communication style.
Agent Patterns (2024–): Our framework responds to the challenge of probabilistic, tool-using, multi-agent systems. Patterns organized by cognitive function and execution topology.
Each generation responded to a fundamental shift in system assumptions. Agent patterns respond to the shift from deterministic to probabilistic execution, from compile-time to runtime tool selection, and from single-process to multi-agent coordination.
8 Conclusion
We have presented a two-dimensional framework that classifies AI agent design patterns along cognitive function and execution topology axes. The 7 × 6 7\times 6 matrix identifies 27 named patterns and provides a coordinate system for unambiguous pattern identification. Our coverage evaluation across four real-world domains demonstrates that the same pattern catalog produces structurally different architectures when different domain constraints are applied, and yields five empirical laws governing pattern selection.
The framework is designed to be framework-neutral, model-agnostic, and durable. As the underlying models and frameworks evolve, the coordinate system—what the agent needs to do (cognitive function) crossed with how it is structurally organized (execution topology)—remains stable. We invite the community to validate, extend, and challenge this framework through additional case studies and empirical evaluation.
An extended version with full pattern definitions, Python implementations, and additional case studies is in preparation [ 
25
https://arxiv.org/html/2605.13850v1#bib.bib25
] .
References
[1] E. Schluntz and B. Zhang, “Building effective agents,” Anthropic Research Blog, Dec. 2024.
[2] Google Cloud, “Agent Development Kit: A flexible framework for building multi-agent systems,” Google Developers Blog, Apr. 2025.
[3] H. Chase et al., “LangGraph: Multi-agent workflows,” LangChain Documentation, Feb. 2025.
[4] A. Ng, “What's next for AI agentic workflows,” Sequoia Capital AI Ascent, Mar. 2024.
[5] L. Wang, C. Ma, X. Feng, et al., “A survey on large language model based autonomous agents,” 
Frontiers of Computer Science
, vol. 18, art. 186345, 2024.
[6] Z. Xi, W. Chen, X. Guo, et al., “The rise and potential of large language model based agents: A survey,” arXiv:2309.07864, 2023.
[7] T. R. Sumers, S. Yao, K. Narasimhan, and T. L. Griffiths, “Cognitive architectures for language agents,” 
Foundations and Trends in Machine Learning
, vol. 17, no. 6, pp. 882–971, 2024.
[8] E. Gamma, R. Helm, R. Johnson, and J. Vlissides, 
Design Patterns: Elements of Reusable Object-Oriented Software
. Addison-Wesley, 1994.
[9] M. Fowler, 
Patterns of Enterprise Application Architecture
. Addison-Wesley, 2002.
[10] Y. Liu, S. K. Lo, Q. Lu, et al., “Agent design pattern catalogue: A collection of architectural patterns for foundation model based agents,” 
J. Systems and Software
, vol. 220, art. 112278, 2024.
[11] M.-D. Dao, Q. M. Le, H. T. Lam, et al., “Agentic design patterns: A system-theoretic framework,” arXiv:2601.19752, 2026.
[12] N. F. Liu, K. Lin, J. Hewitt, et al., “Lost in the middle: How language models use long contexts,” 
Transactions of the Association for Computational Linguistics
, vol. 12, pp. 157–173, 2024.
[13] P. Lewis, E. Perez, A. Piktus, et al., “Retrieval-augmented generation for knowledge-intensive NLP tasks,” 
Advances in Neural Information Processing Systems
, vol. 33, pp. 9459–9474, 2020.
[14] C. Packer, S. Wooders, K. Lin, et al., “MemGPT: Towards LLMs as operating systems,” arXiv:2310.08560, 2023.
[15] D. Kahneman, 
Thinking, Fast and Slow
. Farrar, Straus and Giroux, 2011.
[16] I. Ong, A. Almahairi, V. Wu, et al., “RouteLLM: Learning to route LLMs with preference data,” arXiv:2406.18665, 2024.
[17] H. Garcia-Molina and K. Salem, “Sagas,” 
ACM SIGMOD Record
, vol. 16, no. 3, pp. 249–259, 1987.
[18] J. Huang, X. Chen, S. Mishra, et al., “Large language models cannot self-correct reasoning yet,” 
Proc. ICLR
, 2024.
[19] Z. Gou, Z. Shao, Y. Gong, et al., “CRITIC: Large language models can self-correct with tool-interactive critiquing,” 
Proc. ICLR
, 2024.
[20] A. Madaan, N. Tandon, P. Gupta, et al., “Self-Refine: Iterative refinement with self-feedback,” 
Advances in Neural Information Processing Systems
, vol. 36, 2023.
[21] Y. Du, S. Li, A. Torralba, J. B. Tenenbaum, and I. Mordatch, “Improving factuality and reasoning in language models through multiagent debate,” 
Proc. ICML
, 2024. arXiv:2305.14325.
[22] S. Yao, J. Zhao, D. Yu, et al., “ReAct: Synergizing reasoning and acting in language models,” 
Proc. ICLR
, 2023.
[23] J. Wei, X. Wang, D. Schuurmans, et al., “Chain-of-thought prompting elicits reasoning in large language models,” 
Advances in Neural Information Processing Systems
, vol. 35, pp. 24824–24837, 2022.
[24] G. Hohpe and B. Woolf, 
Enterprise Integration Patterns: Designing, Building, and Deploying Messaging Solutions
. Addison-Wesley, 2003.
[25] J. Huang, 
Designing AI Agents: Patterns for Building Intelligent Systems
. Manning Publications, 2026 (in preparation).
Experimental support, please 
view the build logs
https://arxiv.org/html/2605.13850v1/__stdout.txt
 for errors. Generated by 
L A T E xml[LOGO]
https://math.nist.gov/~BMiller/LaTeXML/
.
Instructions for reporting errors
We are continuing to improve HTML versions of papers, and your feedback helps enhance accessibility and mobile support. To report errors in the HTML that will help us improve conversion and rendering, choose any of the methods listed below:
Click the "Report Issue" ( ) button, located in the page header.
Tip:
 You can select the relevant text first, to include it in your report.
Our team has already identified 
the following issues
https://github.com/arXiv/html_feedback/issues
. We appreciate your time reviewing and reporting rendering errors we may not have found yet. Your efforts will help us improve the HTML versions for all readers, because disability should not be a barrier to accessing research. Thank you for your continued support in championing open access for all.
Have a free development cycle? Help support accessibility at arXiv! Our collaborators at LaTeXML maintain a 
list of packages that need conversion
https://github.com/brucemiller/LaTeXML/wiki/Porting-LaTeX-packages-for-LaTeXML
, and welcome 
developer contributions
https://github.com/brucemiller/LaTeXML/issues
.
We gratefully acknowledge support from our 
major funders
, 
member institutions
https://info.arxiv.org/about/ourmembers.html
, , and all contributors.
About
https://info.arxiv.org/about
· 
Help
https://info.arxiv.org/help
· 
Contact
https://info.arxiv.org/help/contact.html
· 
Subscribe
https://info.arxiv.org/help/subscribe
· 
Copyright
https://info.arxiv.org/help/license/index.html
· 
Privacy
https://info.arxiv.org/help/policies/privacy_policy.html
· 
Accessibility
https://info.arxiv.org/help/web_accessibility.html
· 
Operational Status (opens in new tab)
https://status.arxiv.org/
Major funding support from
 
 
 

javascript:toggleReadingMode();