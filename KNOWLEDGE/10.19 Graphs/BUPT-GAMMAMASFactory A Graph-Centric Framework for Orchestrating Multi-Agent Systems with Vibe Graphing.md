---
type: dashboard
cssclasses: [cards]
tags:
  - opencove
  - sector
  - abstract
  - overview
---
[![MASFactory](/BUPT-GAMMA/MASFactory/raw/main/docs/src/public/svg/logo-dark-centered.svg#gh-dark-mode-only)](/BUPT-GAMMA/[[MASFactory]]/blob/main/docs/src/public/svg/logo-dark-centered.svg#gh-dark-mode-only)

 [![Chinese README](https://camo.githubusercontent.com/8877c8d45409b94483c6eb1573bf5c2767b2d4977fe6c79aabb8adca40ad806c/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f524541444d452d2545342542382541442545362539362538372d356337636661)](/BUPT-GAMMA/[[MASFactory]]/blob/main/[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[README]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]].zh.md)[![Paper](https://camo.githubusercontent.com/7cb078238922f07dfb2ff9cc5725c03f3526eeda50bbe1c8348b301d668f7d32/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f50617065722532302537432532302d323630332e30363030372d6233316231623f6c6f676f3d6172786976266c6f676f436f6c6f723d7768697465) ](http://arxiv.org/abs/2603.06007)[![Video Vibe Graphing](https://camo.githubusercontent.com/1724dab90b2731059d7f3f3e9c398f28f05cca2a7b108f38ecfe97c158c327b3/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f566964656f2532302537432532302d566962652532304772617068696e672d6666303030303f6c6f676f3d796f7574756265266c6f676f436f6c6f723d7768697465) ](https://www.youtube.com/watch?v=QFlQuX_cddk)[![Video Demonstration](https://camo.githubusercontent.com/0285df7154dddbb4c3638f41cf0a07f6d38e75d96a72cd4e9e7b1eac3b9a2859/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f566964656f2532302537432532302d44656d6f2d6433353430303f6c6f676f3d796f7574756265266c6f676f436f6c6f723d7768697465) ](https://www.youtube.com/watch?v=ANynzVfY32k)[![License](https://camo.githubusercontent.com/bfbadbeadaae9b96aac4a43752ccc45bde69e2a701020d5ab4c9d42b03a18a45/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4c6963656e73652d417061636865253230322e302d356238633561)](/BUPT-GAMMA/[[MASFactory]]/blob/main/LICENSE)  
 [![Discord](https://camo.githubusercontent.com/8c3a741026a94240f61889e97799a59b851e349a0587f71392205adec2108e12/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f436f6e746163742d446973636f72642d3538363546323f6c6f676f3d646973636f7264266c6f676f436f6c6f723d7768697465)](https://discord.gg/RWRYhWq7)[![QQ](https://camo.githubusercontent.com/bcb4d51bb73331b51422c2e0508770c39173f7343147b27fa7f6f469b950fafd/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f436f6e746163742d51512d3132423746353f6c6f676f3d7171266c6f676f436f6c6f723d7768697465)](https://qm.qq.com/cgi-bin/qm/qr?k=jTn5-wNlUg2SZ0OfyMlA4h9eqBx4OX6x&jump_from=webapi&authKey=NDNs1xg1usRYTIuO7XsgQjJVYqwntJL6NX1pOmR9J15tAPoJ8B3NSAVTD1tnR2+m)

**[[MASFactory]]** is a graph-centric framework for orchestrating Multi-Agent Systems with **Vibe Graphing**:

Start from intent, generate a graph design, [[preview]] and refine it in a visual environment, compile it into an executable workflow, and trace node states, messages, and shared state at runtime.

- Paper: [http://arxiv.org/abs/2603.06007](http://arxiv.org/abs/2603.06007)
- Documentation: [https://docs.masfactory.dev/](https://docs.masfactory.dev/)
- Project Website: [https://masfactory.dev](https://masfactory.dev)
- Demonstration Video: [https://www.youtube.com/watch?v=ANynzVfY32k](https://www.youtube.com/watch?v=ANynzVfY32k)
- Vibe Graphing explainer (Discover AI): [https://www.youtube.com/watch?v=QFlQuX\_cddk](https://www.youtube.com/watch?v=QFlQuX_cddk)

##  Key Features-  **Vibe Graphing (intent → graph)**  
	Turn natural-language intent into a structural design, then iteratively converge to an executable, reusable workflow.
-  **Graph-style composition**  
	Describe workflow and field contracts explicitly with `Node` / `Edge`; supports subgraphs, loops, branches, and composite components.
-  **Visualization and observability**  
	**[[MASFactory]] Visualizer** provides topology [[preview]], runtime tracing, and human-in-the-loop interaction.
-  **Context protocol (`ContextBlock`)**  
	Organize Memory / RAG / MCP context sources in a structured way, with automatic injection and on-demand retrieval.

##  Why Choose MASFactoryAs multi-agent systems grow more capable, orchestration is still largely stuck in the age of manual assembly: either teams hand-write workflow code, or they drag and configure nodes one by one on a canvas. With Vibe Graphing, [[MASFactory]] aims to free people from tedious orchestration work: express the intent in natural language, let AI draft the collaboration structure, keep refining it with human corrections and confirmations, and finally compile the result into an executable graph workflow.

[![Vibe Graphing pipeline from intent to executable workflow](/BUPT-GAMMA/MASFactory/raw/main/docs/src/public/imgs/readme/vibegraphing_diagram_en.png)](/BUPT-GAMMA/[[MASFactory]]/blob/main/docs/src/public/imgs/[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[readme]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]/vibegraphing_diagram_en.png)

This shifts human effort away from low-level wiring and repetitive configuration, and back toward designing the multi-agent system itself.

Viewed more directly, today's multi-agent development frameworks roughly fall into the following categories:

| Platform                                   | Products                                           | Focus                                                                     | Strength & Limits                                                                                                                                             |
| ------------------------------------------ | -------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Code frameworks**                        | `[[MASFactory]]`, ChatDev2(DevAll), LangGraph, AutoGen | Build complex multi-agent systems                                         | Offer extremely high flexibility and extensibility, but have a higher entry barrier, require learning a DSL, and usually involve substantial development cost |
| **Low-code workflow platforms**            | `[[MASFactory]]`, ChatDev2(DevAll), Coze, Dify         | Lower the barrier to building multi-agent systems with low-code [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[workflows]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] | Lower the development barrier, but still rely heavily on manual human orchestration                                                                           |
| **Vibe Graphing orchestration frameworks** | `[[MASFactory]]`                                       | Rapidly design and iterate multi-agent systems with lower human cost      | Humans do not need to spend much effort on coding or dragging nodes, only on clearly describing needs and refining the design through dialogue                |

##  System ArchitectureMASFactory adopts the widely used graph-centric approach to multi-agent orchestration and abstracts the system into four layers:

[![MASFactory framework layers](/BUPT-GAMMA/MASFactory/raw/main/docs/src/public/imgs/readme/framework.png)](/BUPT-GAMMA/[[MASFactory]]/blob/main/docs/src/public/imgs/[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[readme]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]/framework.png)

- **Graph skeleton layer:** `Node` and `Edge` are the lowest-level abstractions, using graph structure to represent collaboration relationships, dependencies, and message flow among [[agents]].
- **Component layer:** this layer further packages `Node` and `Edge` into reusable collaboration units, so developers do not need to assemble [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[workflows]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] from scratch every time and can instead build multi-agent systems like reusable blocks:

> - `Agent` is the most basic execution unit: an agent node with roles, instructions, tools, Memory, RAG, and related capabilities, responsible for concrete analysis, generation, and tool-use tasks.
> - `Graph` packages multiple nodes as a nestable subgraph, allowing complex [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[workflows]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] to be designed hierarchically and reused locally. A single phase can itself become a node inside a larger graph.
> - `Loop` handles iterative tasks such as repeated discussion, continuous revision, or testing until success. It turns "repeat execution until a condition is met" into a standard component.
> - `Switch` supports branching and dynamic routing. It can switch execution paths based on explicit conditions or use model capabilities to decide where messages should go, enabling more flexible collaboration topologies.
> - `Human` brings human-in-the-loop steps such as confirmation, conversational input, file [[review]], and editing into the graph, so the system is not limited to fully automated execution and can involve people at key stages.
> - `ComposedGraph` and `NodeTemplate` provide two additional reuse mechanisms on top of the components above. The former focuses on "declare a structure first, then instantiate and assemble it," while the latter packages common collaboration structures into reusable components. [[MASFactory]] includes built-in graph patterns such as `InstructorAssistantGraph` and `BrainstormingGraph` for out-of-the-box use.

**Protocol layer:** through `Message Adapter` and `Context Adapter`, [[MASFactory]] unifies communication protocols together with Memory, RAG, MCP, and related context capabilities, making it easier to integrate external frameworks into the system.

- **Interaction layer:** [[MASFactory]] supports three development paradigms:

> - Natural-language workflow construction based on `Vibe Graphing`, reducing the human cost of system development.
> - Two code-centric styles, `Declarative` and `Imperative`, for developers who want more flexible control over workflow authoring.
> - Manual workflow design through `[[MASFactory]] Visualizer`, preserving familiar low-code drag-and-drop habits.

[[MASFactory]]'s advantage is not that it offers yet another way to build [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[workflows]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]], but that it unifies code authoring, visual editing, and natural-language-driven orchestration inside the same system. Developers can write [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[workflows]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] by hand, assemble them visually, or let AI draft the structure first and then compile it into an executable multi-agent workflow. These three modes are not isolated from one another; they can coexist inside the same project.

##  Flexible Combination of Three Development Modes with Unified Runtime TracingWhether you start from code, drag-and-drop editing, or Vibe Graphing, the resulting graph structure can enter the same Visualizer for [[preview]], tracing, and human intervention.

### Coding with Graph [[Preview]] [![Code preview in MASFactory Visualizer](/BUPT-GAMMA/MASFactory/raw/main/docs/src/public/imgs/readme/coding.gif)](/BUPT-GAMMA/[[MASFactory]]/blob/main/docs/src/public/imgs/[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[readme]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]/coding.gif) ![Code preview in MASFactory Visualizer](https://github.com/BUPT-GAMMA/MASFactory/raw/main/docs/src/public/imgs/readme/coding.gif)### Drag-and-Drop Design [![Drag and drop workflow design](/BUPT-GAMMA/MASFactory/raw/main/docs/src/public/imgs/readme/drag.gif)](/BUPT-GAMMA/[[MASFactory]]/blob/main/docs/src/public/imgs/[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[readme]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]/drag.gif) ![Drag and drop workflow design](https://github.com/BUPT-GAMMA/MASFactory/raw/main/docs/src/public/imgs/readme/drag.gif)### Vibe Graphing Interaction [![Vibe Graphing interaction](/BUPT-GAMMA/MASFactory/raw/main/docs/src/public/imgs/readme/vibe_2.gif)](/BUPT-GAMMA/[[MASFactory]]/blob/main/docs/src/public/imgs/[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[readme]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]/vibe_2.gif) ![Vibe Graphing interaction](https://github.com/BUPT-GAMMA/MASFactory/raw/main/docs/src/public/imgs/readme/vibe_2.gif)### Runtime Monitoring [![Runtime monitoring and tracing](/BUPT-GAMMA/MASFactory/raw/main/docs/src/public/imgs/readme/monitor.gif)](/BUPT-GAMMA/[[MASFactory]]/blob/main/docs/src/public/imgs/[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[readme]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]/monitor.gif) ![Runtime monitoring and tracing](https://github.com/BUPT-GAMMA/MASFactory/raw/main/docs/src/public/imgs/readme/monitor.gif)##  Quick Start### 1) Install [[MASFactory]] (PyPI)Requirements: Python `>= 3.10`

pip install -U [[masfactory]]

Verify installation:

python -c "from importlib.metadata import version; print('[[masfactory]] version:', version('[[masfactory]]'))"
python -c "from [[masfactory]] import RootGraph, Graph, Loop, Agent, CustomNode; print('import ok')"

### 2) Install [[MASFactory]] Visualizer (VS Code Extension)[[MASFactory]] Visualizer is used for graph [[preview]], runtime tracing, and human-in-the-loop interaction.

Install from the VS Code Marketplace:

1. Open VS Code → Extensions
2. Search for `[[MASFactory]] Visualizer`
3. Install and reload

Open it via:

- Activity Bar → **[[MASFactory]] Visualizer** → **Graph [[Preview]]**, or
- Command Palette:
	- `[[MASFactory]] Visualizer: Start Graph [[Preview]]`
		- `[[MASFactory]] Visualizer: Open Graph in Editor Tab`

##  Simple Example (from "First Code")A minimal two-stage agent workflow: **ENTRY → analyze → answer → EXIT**.

import os
from [[masfactory]] import RootGraph, Agent, OpenAIModel, NodeTemplate

model \= OpenAIModel(
    api\_key\=os.getenv("OPENAI\_API\_KEY", ""),
    base\_url\=os.getenv("OPENAI\_BASE\_URL") or os.getenv("BASE\_URL") or None,
    model\_name\=os.getenv("OPENAI\_MODEL\_NAME", "gpt-4o-mini"),
)

BaseAgent \= NodeTemplate(Agent, model\=model)

g \= RootGraph(
    name\="qa\_two\_stage",
    nodes\=\[
        ("analyze", BaseAgent(instructions\="You are a problem analysis expert.", prompt\_template\="User question: {query}")),
        ("answer", BaseAgent(instructions\="You are a solution expert. Provide the final answer based on the analysis.", prompt\_template\="Question: {query}\\nAnalysis: {analysis}")),
    \],
    edges\=\[
        ("entry", "analyze", {"query": "User question"}),
        ("analyze", "answer", {"query": "Original question", "analysis": "Analysis result"}),
        ("answer", "exit", {"answer": "Final answer"}),
    \],
)

g.build()
out, \_attrs \= g.invoke({"query": "I want to learn Python. Where should I start?"})
print(out\["answer"\])

##  Reusable Skill ExampleSkills are loaded explicitly from a directory-based Anthropic-style `SKILL.md` package and attached to an `Agent` with `skills=[...]`.

import os
from masfactory import Agent, OpenAIModel, ParagraphMessageFormatter, load\_skill

model \= OpenAIModel(
    api\_key\=os.getenv("OPENAI\_API\_KEY", ""),
    model\_name\=os.getenv("OPENAI\_MODEL\_NAME", "gpt-4o-mini"),
)

paper\_summary \= load\_skill("./skills/paper-summary")

agent \= Agent(
    name\="researcher",
    instructions\="You are a research assistant.",
    model\=model,
    formatters\=ParagraphMessageFormatter(),
    skills\=\[paper\_summary\],
)

Example skill package:

```
skills/
 paper-summary/
     SKILL.md
     template.md
     examples/
         sample.md
```

`SKILL.md`:

\---
name: paper-summary
description: Summarize research papers clearly
\---
Focus on the paper's problem, method, findings, and limitations.
Keep the summary concise and faithful.

##  Application DemoBelow are three example applications built with MASFactory for common agentic workflow scenarios: a daily AI paper briefing, a paper-to-PPT workflow, and a visual skill-building studio. The workflow code behind these products is open-sourced in this repository for reuse and study.

### NowWhat**NowWhat** stands for "Now what are my peers working on?" It is an information-filtering app for AI researchers and developers. The service turns a daily stream of AI papers into a structured briefing, helping users quickly understand which papers are worth reading and what signals matter most.

- Hosted experience: [https://what.masfactory.dev](https://what.masfactory.dev)

[![NowWhat English product preview](/BUPT-GAMMA/MASFactory/raw/main/applications/nowwhat/assets/nowwhat-preview-en.png)](/BUPT-GAMMA/[[MASFactory]]/blob/main/applications/nowwhat/assets/nowwhat-[[preview]]-en.png)

### OhNoPPT**OhNoPPT** is a **Paper2PPT** application for research-paper presentations. Users upload a paper and describe the presentation goal, and [[MASFactory]] orchestrates the full process from paper understanding to deck generation. Unlike many slide-generation tools that stop at static exports, OhNoPPT delivers a genuinely editable `.pptx` file.

- Hosted experience: [https://ppt.masfactory.dev](https://ppt.masfactory.dev)

[![OhNoPPT English product preview](/BUPT-GAMMA/MASFactory/raw/main/applications/ohnoppt/assets/ohnoppt-preview-en.png)](/BUPT-GAMMA/[[MASFactory]]/blob/main/applications/ohnoppt/assets/ohnoppt-[[preview]]-en.png)

### ClawCanvas**ClawCanvas** is a visual [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[skill]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] studio for designing, testing, and packaging [[MASFactory]] [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[workflows]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] as reusable [[skills]]. Users can build an agent workflow on a web canvas, validate the graph structure, run supported nodes through [[MASFactory]], and export the workflow together with [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[skill]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] metadata as a publishable [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[skill]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] package.

- Hosted experience: [https://clawcanvas.masfactory.dev](https://clawcanvas.masfactory.dev)
- Application code: `applications/clawcanvas/`

[![ClawCanvas English product preview](/BUPT-GAMMA/MASFactory/raw/main/applications/clawcanvas/assets/clawcanvas-preview-en.png)](/BUPT-GAMMA/[[MASFactory]]/blob/main/applications/clawcanvas/assets/clawcanvas-[[preview]]-en.png)

##  Run the Multi-Agent Reproductions in This Repo (`applications/`)Most [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[workflows]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] require `OPENAI_API_KEY`. Some scripts also read `OPENAI_BASE_URL` / `BASE_URL` and `OPENAI_MODEL_NAME`.

# ChatDev
python -m applications.chatdev.workflow.main --task "Develop a basic Gomoku game." --name "Gomoku"

# ChatDev Lite (simplified)
python -m applications.chatdev\_lite.workflow.main --task "Develop a basic Gomoku game." --name "Gomoku"

# ChatDev Lite (VibeGraphing version)
python -m applications.chatdev\_lite\_vibegraph.main --task "Write a Ping-Pong (Pong) game." --name "PingPong"

# VibeGraph Demo (intent → graph\_design.json → compile → run)
python -m applications.vibegraph\_demo.main

# AgentVerse · PythonCalculator
python applications/agentverse/tasksolving/pythoncalculator/run.py --task "write a simple calculator GUI using Python3."

# CAMEL role-playing demo
python applications/camel/main.py "Create a sample adder by using python"

##  Learning IndexDocumentation: [https://docs.masfactory.dev/](https://docs.masfactory.dev/)

- Quick Start: Introduction → Installation → Visualizer → First Code
- Progressive Tutorials: ChatDev Lite (Declarative / Imperative / VibeGraph)
- Development Guide: Core Concepts → Message Passing → NodeTemplate → Agent Runtime → Context Adapters (Memory / RAG / MCP) → Visualizer → Model Adapters

##  Project Structure```
.
 masfactory/                       # MASFactory framework
    core/                         # Core primitives: Node / Edge / Gate / MessageFormatter
    components/                   # Main workflow components
       agents/                   # Agent / DynamicAgent / SingleAgent
       controls/                 # LogicSwitch / AgentSwitch
       graphs/                   # Graph / RootGraph / Loop
       human/                    # Human-in-the-loop nodes
       composed_graph/           # Composite components
       vibe/                     # Vibe Graphing
    adapters/                     # Model / Memory / Retrieval / MCP adapters
    integrations/                 # Third-party integrations
    utils/                        # Utilities
    visualizer/                   # Runtime bridge for MASFactory Visualizer
 masfactory-visualizer/            # VS Code extension: MASFactory Visualizer
 applications/                     # Example and reproduction apps
    chatdev/
    chatdev_lite/
    chatdev_lite_vibegraph/
    agentverse/
    camel/
    clawcanvas/
    hugggpt2/
    metagpt/
    nowwhat/
    ohnoppt/
    vibegraph_demo/
 docs/                             # VitePress documentation site
 README.md
 README.zh.md
 pyproject.toml
 requirements.txt
 uv.lock
```

##  Citation@article{liu2026masfactory,
  title   = {[[MASFactory]]: A Graph-centric Framework for Orchestrating LLM-Based Multi-Agent Systems with Vibe Graphing},
  author  = {Yang Liu and Jinxuan Cai and Yishen Li and Qi Meng and Zedi Liu and Xin Li and Chen Qian and Chuan Shi and Cheng Yang},
  journal = {arXiv preprint arXiv:2603.06007},
  year    = {2026},
  doi     = {10.48550/arXiv.2603.06007},
  url     = {https://arxiv.org/abs/2603.06007}
}