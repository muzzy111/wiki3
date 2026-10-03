---
type: dashboard
cssclasses: [cards]
tags:
  - inbox
  - sector
  - abstract
  - overview
---
**Stop reading about [[agents]]. Start building them.**

This is the repo for engineers who want to understand what's behind popular [[agents]] like **Claude Code**, **Codex**, and **GitHub Copilot** and how to build one by yourself. From your first LLM call to a production eval harness.

> Building AI [[agents]] is engineering, not magic. Master the constraints, not the hype.

##  Why you need to learn this? [Fundamental skills and knowledge you must have in 2026 for SWE](https://www.youtube.com/clip/UgkxNl2grro6BiM_x9bGSH_xMOSl32fxvthr)

> *How many of you actually can pull out a whiteboard and build me an agent? Can you show me the inferencing loop?*
> 
> ***If you don't know this, your career is in jeopardy.***
> 
> *What is a tool call? If you don't know what that is, you need to learn what it is and all these basic fundamentals. I preference candidates if they know what a tool call is, how the inferencing loop works, pull out a whiteboard — the same way we used to say, show me a linked list, reverse me this data structure.*
> 
> ***This is now baseline knowledge** because we're getting candidates in that can answer this stuff.*
> 
> — **Geoffrey Huntley**, creator of [Ralph Wiggum](https://ghuntley.com/ralph/)

Agent fluency is the new data-structures interview. We teach it **from first principles** - you build the loop, the tool calls, the memory, and the evals yourself before we ever introduce a framework. No magic. No black boxes. Just the primitives, in the order they were invented.

>  None of this requires fancy frameworks. Just an LLM API, some tools, and a loop. **Build one this weekend. You'll understand [[agents]] better than reading 100 blog posts.**

No prior AI/ML experience required - just Python basics and **curiosity** about building LLM-powered [[agents]].

##  Why this repo?- **We take production [[agents]] apart.** The [*Disassembling AI Agents*](https://agenticloopsai.substack.com) Substack series reverse-engineers Claude Code, GitHub Copilot, and OpenCode. You read how real [[agents]] work, then rebuild the pieces here.
- **First principles, no black boxes.** You build the agent loop, the tool executor, the memory layer, the eval harness from scratch — *before* we introduce a single framework. Learn what each abstraction is hiding before you let one hide it for you.
- **Runnable in one command.** `uv run --directory <tutorial> python <script>.py`. No conda dance. No Jupyter kernel hunt.

##  60-second quickstartbrew install uv   # or: pipx install uv
git clone https://github.com/agenticloops-ai/[[agentic-ai-engineering]].git
cd [[agentic-ai-engineering]]
cp .env.example .env   # add your Anthropic and/or OpenAI keys

uv run --directory 01-foundations/01-simple-llm-call python 01\_llm\_call\_anthropic.py

That's it. Every tutorial is self-contained and idempotent — you can jump in anywhere. Full [[setup]] details in [SETUP.md](/agenticloops-ai/agentic-ai-engineering/blob/main/SETUP.md). Or [open in Codespaces](https://codespaces.new/agenticloops-ai/agentic-ai-engineering) and skip local [[setup]] entirely.

> If you find this useful, a  star helps us know we're on the right track. Join the [ discussion](https://github.com/agenticloops-ai/agentic-ai-engineering/discussions) or [[[[report]]]] an [ issue](https://github.com/agenticloops-ai/agentic-ai-engineering/issues) — your input directly shapes what we build next.

---

##  Companion readingThe tutorials teach you to build. Our [Substack](https://agenticloopsai.substack.com) gives you the mental model first - a foundational primer on how [[agents]] actually work, followed by teardowns of real production [[agents]] you use every day. **Read the post. Open the tutorial. Rebuild the pattern.**

[**How Agents Work: The Patterns Behind the Magic**](https://agenticloopsai.substack.com/p/how-agents-work-the-patterns-behind) - the core agentic loop from first principles. The four pattern levels (one-shot → single-tool → ReAct → planning), the role of the system prompt as behavioral design, and Ralph Mode as the outer loop. If you read one thing before opening the repo, read this. Pairs with → `01-foundations`.

##  Tutorials StructureThe tutorials are organized into **modules** (`01-foundations`, `02-effective-[[agents]]`) that progress from basics to advanced concepts. Each module contains numbered **tutorials** that build on previous lessons. Inside each tutorial folder, you'll find:

- **Python scripts** [![Python](https://camo.githubusercontent.com/f636726e986288988d9c1517be4ecfa917bf07ced1c80b8c1740a1b4b190439d/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f507974686f6e2d332e31312b2d3337373641423f6c6f676f3d707974686f6e266c6f676f436f6c6f723d7768697465)](https://camo.githubusercontent.com/f636726e986288988d9c1517be4ecfa917bf07ced1c80b8c1740a1b4b190439d/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f507974686f6e2d332e31312b2d3337373641423f6c6f676f3d707974686f6e266c6f676f436f6c6f723d7768697465) - Self-contained, runnable examples demonstrating key concepts
- **[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[README]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]].md** - Detailed explanations, code walkthroughs, and learning objectives

You can explore individual scripts independently or follow the complete learning path from start to finish. Each module ends with a [![ capstone](https://camo.githubusercontent.com/db1b36ade40ee1dcd9028fde787086e1ed83a8bc1fa8ca61bbadd2209b772bce/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2546302539462538462538365f63617073746f6e652d626c7565)](https://camo.githubusercontent.com/db1b36ade40ee1dcd9028fde787086e1ed83a8bc1fa8ca61bbadd2209b772bce/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2546302539462538462538365f63617073746f6e652d626c7565) project that combines all concepts from the module into a single, production-style agent.

###  [01 - Foundations](/agenticloops-ai/agentic-ai-engineering/blob/main/01-foundations/README.md) [![new](https://camo.githubusercontent.com/15252d63e30dfe2dd4481de4d3347888e822efe630b1c2bc2365f4c0e33583f8/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6e65772d627269676874677265656e)](https://camo.githubusercontent.com/15252d63e30dfe2dd4481de4d3347888e822efe630b1c2bc2365f4c0e33583f8/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6e65772d627269676874677265656e)Your first steps — from a single API call to a fully autonomous agent loop. Build everything from scratch to understand what's really happening under the hood.

1. **[Simple LLM Call](/agenticloops-ai/agentic-ai-engineering/blob/main/01-foundations/01-simple-llm-call)** — First API call with token tracking
2. **[Prompt Engineering](/agenticloops-ai/agentic-ai-engineering/blob/main/01-foundations/02-prompt-engineering)** — Guide model behavior
3. **[Chat](/agenticloops-ai/agentic-ai-engineering/blob/main/01-foundations/03-chat)** — Interactive chat with message history
4. **[Tool Use](/agenticloops-ai/agentic-ai-engineering/blob/main/01-foundations/04-tool-use)** — Enable function calling
5. **[Agent Loop](/agenticloops-ai/agentic-ai-engineering/blob/main/01-foundations/05-agent-loop)** — Autonomous tool-using [[agents]]
6. **[Codebase Navigator](/agenticloops-ai/agentic-ai-engineering/blob/main/01-foundations/06-codebase-navigator)** [![ capstone](https://camo.githubusercontent.com/db1b36ade40ee1dcd9028fde787086e1ed83a8bc1fa8ca61bbadd2209b772bce/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2546302539462538462538365f63617073746f6e652d626c7565)](https://camo.githubusercontent.com/db1b36ade40ee1dcd9028fde787086e1ed83a8bc1fa8ca61bbadd2209b772bce/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2546302539462538462538365f63617073746f6e652d626c7565) — The Augmented LLM with RAG, tools, and memory

###  [02 - Effective Agents Patterns](/agenticloops-ai/agentic-ai-engineering/blob/main/02-effective-agents/README.md) [![new](https://camo.githubusercontent.com/15252d63e30dfe2dd4481de4d3347888e822efe630b1c2bc2365f4c0e33583f8/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6e65772d627269676874677265656e)](https://camo.githubusercontent.com/15252d63e30dfe2dd4481de4d3347888e822efe630b1c2bc2365f4c0e33583f8/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6e65772d627269676874677265656e)Architectural patterns that separate toy demos from real [[agents]]. Based on Anthropic's "[Building Effective Agents](https://www.anthropic.com/engineering/building-effective-agents)" — learn when to chain, route, parallelize, or delegate.

1. **[Prompt Chaining](/agenticloops-ai/agentic-ai-engineering/blob/main/02-effective-agents/01-prompt-chaining)** — Sequential multi-step pipelines
2. **[Routing](/agenticloops-ai/agentic-ai-engineering/blob/main/02-effective-agents/02-routing)** — Classify input, dispatch to specialized handlers
3. **[Parallelization](/agenticloops-ai/agentic-ai-engineering/blob/main/02-effective-agents/03-parallelization)** — Fan-out/fan-in, parallel tool calls
4. **[Orchestrator-Workers](/agenticloops-ai/agentic-ai-engineering/blob/main/02-effective-agents/04-orchestrator-workers)** — Dynamic task decomposition
5. **[Evaluator-Optimizer](/agenticloops-ai/agentic-ai-engineering/blob/main/02-effective-agents/05-evaluator-optimizer)** — Self-critique, iterative refinement
6. **[Human in the Loop](/agenticloops-ai/agentic-ai-engineering/blob/main/02-effective-agents/06-human-in-the-loop)** — Approval gates, escalation, feedback
7. **[Content Writer](/agenticloops-ai/agentic-ai-engineering/blob/main/02-effective-agents/07-content-writer)** [![ capstone](https://camo.githubusercontent.com/db1b36ade40ee1dcd9028fde787086e1ed83a8bc1fa8ca61bbadd2209b772bce/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2546302539462538462538365f63617073746f6e652d626c7565)](https://camo.githubusercontent.com/db1b36ade40ee1dcd9028fde787086e1ed83a8bc1fa8ca61bbadd2209b772bce/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2546302539462538462538365f63617073746f6e652d626c7565) — Full agent composing all agentic workflow patterns

###  [03 - Advanced Techniques](/agenticloops-ai/agentic-ai-engineering/blob/main/03-advanced-techniques/README.md) [![new](https://camo.githubusercontent.com/15252d63e30dfe2dd4481de4d3347888e822efe630b1c2bc2365f4c0e33583f8/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6e65772d627269676874677265656e)](https://camo.githubusercontent.com/15252d63e30dfe2dd4481de4d3347888e822efe630b1c2bc2365f4c0e33583f8/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6e65772d627269676874677265656e)Practical engineering problems you'll hit the moment [[agents]] leave the prototype stage. Context, cost, memory, multimodality, safety — solved one tutorial at a time.

1. **[Structured Output](/agenticloops-ai/agentic-ai-engineering/blob/main/03-advanced-techniques/01-structured-output)** — JSON mode, schemas, constrained generation
2. **[Streaming](/agenticloops-ai/agentic-ai-engineering/blob/main/03-advanced-techniques/02-streaming)** — SSE, token-by-token output, streaming tool calls
3. **[Context Engineering](/agenticloops-ai/agentic-ai-engineering/blob/main/03-advanced-techniques/03-context-engineering)** — Window strategies, summarization, tool context
4. **[Cost Optimization](/agenticloops-ai/agentic-ai-engineering/blob/main/03-advanced-techniques/04-cost-optimization)** — Prompt caching, model routing
5. **[Memory](/agenticloops-ai/agentic-ai-engineering/blob/main/03-advanced-techniques/05-memory)** — Short-term, long-term, memory inspection
6. **[RAG Techniques](/agenticloops-ai/agentic-ai-engineering/blob/main/03-advanced-techniques/06-rag-techniques)** — Hybrid search, agentic retrieval
7. **[Multimodal](/agenticloops-ai/agentic-ai-engineering/blob/main/03-advanced-techniques/07-multimodal)** — Vision, image generation, audio
8. **[Guardrails](/agenticloops-ai/agentic-ai-engineering/blob/main/03-advanced-techniques/08-guardrails)** — Input/output filtering, safety patterns

###  [04 - Testing & Evaluation](/agenticloops-ai/agentic-ai-engineering/blob/main/04-testing-evaluation/README.md) [![new](https://camo.githubusercontent.com/15252d63e30dfe2dd4481de4d3347888e822efe630b1c2bc2365f4c0e33583f8/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6e65772d627269676874677265656e)](https://camo.githubusercontent.com/15252d63e30dfe2dd4481de4d3347888e822efe630b1c2bc2365f4c0e33583f8/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6e65772d627269676874677265656e)[[Agents]] are non-deterministic — testing them requires different thinking. Measure quality, catch regressions, and build confidence before shipping.

1. **[Unit Testing Agents](/agenticloops-ai/agentic-ai-engineering/blob/main/04-testing-evaluation/01-unit-testing-agents)** — Mocking LLMs, deterministic tests
2. **[Evals](/agenticloops-ai/agentic-ai-engineering/blob/main/04-testing-evaluation/02-evals)** — Accuracy, quality, regression benchmarks
3. **[Tracing & Debugging](/agenticloops-ai/agentic-ai-engineering/blob/main/04-testing-evaluation/03-tracing-debugging)** — Observability during development
4. **[Red Teaming & Safety](/agenticloops-ai/agentic-ai-engineering/blob/main/04-testing-evaluation/04-red-teaming-safety)** — Adversarial testing, guardrails
5. **[Benchmarking](/agenticloops-ai/agentic-ai-engineering/blob/main/04-testing-evaluation/05-benchmarking)** — Comparing models, [[[[prompts]]]], architectures head-to-head
6. **[Eval Frameworks](/agenticloops-ai/agentic-ai-engineering/blob/main/04-testing-evaluation/06-eval-frameworks)** — Promptfoo, Braintrust, [[Langfuse]] [[integration]]
7. **[Eval Harness](/agenticloops-ai/agentic-ai-engineering/blob/main/04-testing-evaluation/07-eval-harness)** [![ capstone](https://camo.githubusercontent.com/db1b36ade40ee1dcd9028fde787086e1ed83a8bc1fa8ca61bbadd2209b772bce/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2546302539462538462538365f63617073746f6e652d626c7565)](https://camo.githubusercontent.com/db1b36ade40ee1dcd9028fde787086e1ed83a8bc1fa8ca61bbadd2209b772bce/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2546302539462538462538365f63617073746f6e652d626c7565) — Complete eval pipeline combining all techniques

###  [05 - Frameworks](/agenticloops-ai/agentic-ai-engineering/blob/main/05-frameworks/README.md) [![coming soon](https://camo.githubusercontent.com/abd620cb48a2c72847827854d6ca2612a6c7e08812aef5fbe035c1a1e6677e96/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f636f6d696e67253230736f6f6e2d6f72616e6765)](https://camo.githubusercontent.com/abd620cb48a2c72847827854d6ca2612a6c7e08812aef5fbe035c1a1e6677e96/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f636f6d696e67253230736f6f6e2d6f72616e6765)One agent, nine implementations. Build the same system with each framework and compare trade-offs with your own hands.

1. **[No Framework](/agenticloops-ai/agentic-ai-engineering/blob/main/05-frameworks/01-no-framework)** — Raw SDK baseline
2. **[LangGraph](/agenticloops-ai/agentic-ai-engineering/blob/main/05-frameworks/02-langgraph)** — Graph-based orchestration
3. **[Pydantic AI](/agenticloops-ai/agentic-ai-engineering/blob/main/05-frameworks/03-pydantic-ai)** — Type-safe [[agents]]
4. **[Google ADK](/agenticloops-ai/agentic-ai-engineering/blob/main/05-frameworks/04-google-adk)** — Google's Agent Development Kit
5. **[AWS Strands](/agenticloops-ai/agentic-ai-engineering/blob/main/05-frameworks/05-aws-strands)** — AWS agent SDK
6. **[CrewAI](/agenticloops-ai/agentic-ai-engineering/blob/main/05-frameworks/06-crewai)** — Role-based multi-agent collaboration
7. **[AutoGen](/agenticloops-ai/agentic-ai-engineering/blob/main/05-frameworks/07-autogen)** — Multi-agent conversations
8. **[LlamaIndex](/agenticloops-ai/agentic-ai-engineering/blob/main/05-frameworks/08-llamaindex)** — Data-centric [[agents]]
9. **[Semantic Kernel](/agenticloops-ai/agentic-ai-engineering/blob/main/05-frameworks/09-semantic-kernel)** — Microsoft AI orchestration

###  [06 - Production](/agenticloops-ai/agentic-ai-engineering/blob/main/06-production/README.md) [![coming soon](https://camo.githubusercontent.com/abd620cb48a2c72847827854d6ca2612a6c7e08812aef5fbe035c1a1e6677e96/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f636f6d696e67253230736f6f6e2d6f72616e6765)](https://camo.githubusercontent.com/abd620cb48a2c72847827854d6ca2612a6c7e08812aef5fbe035c1a1e6677e96/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f636f6d696e67253230736f6f6e2d6f72616e6765)The gap between "works on my laptop" and "runs reliably at scale." Principles, deployment, monitoring, cost control, and security.

1. **[12-Factor Agents](/agenticloops-ai/agentic-ai-engineering/blob/main/06-production/01-twelve-factor-agents)** — Principles for production-grade [[agents]]
2. **[Deployment Strategies](/agenticloops-ai/agentic-ai-engineering/blob/main/06-production/02-deployment-strategies)** — Containers, serverless, scaling
3. **[Monitoring & Observability](/agenticloops-ai/agentic-ai-engineering/blob/main/06-production/03-monitoring-observability)** — Metrics, logging, tracing in prod
4. **[Cost Optimization](/agenticloops-ai/agentic-ai-engineering/blob/main/06-production/04-cost-optimization)** — Token budgets, caching, model routing
5. **[Security & Guardrails](/agenticloops-ai/agentic-ai-engineering/blob/main/06-production/05-security-guardrails)** — Auth, sandboxing, injection defense
6. **[Error Handling & Resilience](/agenticloops-ai/agentic-ai-engineering/blob/main/06-production/06-error-handling-resilience)** — Retries, fallbacks, graceful degradation

##  Support UsIf you find this project useful, consider supporting us:

[![Sponsor](https://camo.githubusercontent.com/b849c824d3afac07cf8f8c35f2ff39c36b181c12a8f188ef25e095ae74566bfc/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f53706f6e736f722d537570706f72745f55732d6561346161613f6c6f676f3d67697468756273706f6e736f7273266c6f676f436f6c6f723d7768697465)](https://github.com/sponsors/agenticloops-ai)

##  FAQ**Module not found?** Run `uv sync` in the lesson directory.

**API errors or [[authentication]] failures?** You need API keys from [Anthropic](https://console.anthropic.com/), [OpenAI](https://platform.openai.com/), or both, depending on which examples you run. See [SETUP.md](/agenticloops-ai/agentic-ai-engineering/blob/main/SETUP.md) for details.