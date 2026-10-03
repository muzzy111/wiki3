---
type: dashboard
cssclasses: [cards]
tags:
  - openclaw
  - sector
  - abstract
  - overview
---

# Neurite: Fractal Graph-of-Thought and the Reinvention of Knowledge Interfaces

**A Deep Research Paper**

---

## Abstract

Neurite (neurite.network) is an open-source, browser-based knowledge environment that grafts AI-agent orchestration, personal knowledge management, and real-time fractal mathematics onto a single infinite canvas. Rather than organizing notes in folders or flat graphs, Neurite embeds every artifact — text, images, video, code, webpages, PDFs, and AI nodes — directly inside an interactively rendered Mandelbrot set. The result is a radically non-linear workspace that takes its structural cues from chaos theory and rhizomatic philosophy rather than from file-system metaphors. This paper examines Neurite's intellectual foundations, its technical architecture, its principal feature set, its position in the broader landscape of personal knowledge management and AI agent frameworks, its limitations, and the philosophical implications of treating fractals as a genuine cognitive substrate rather than mere decoration.

---

## 1. Introduction

The history of knowledge interfaces is, in large part, a history of borrowed metaphors. Early personal computing borrowed the "desktop" from the physical office. Note-taking apps borrowed the "notebook." Mind-mapping tools borrowed the diagram. Each metaphor constrained what was thinkable inside the tool: a desktop enforces hierarchy through folders; a notebook enforces sequence through pages; a mind map enforces a single centered root.

Neurite, developed by the independent developer collective known as `satellitecomponent` and released publicly on GitHub, proposes a fundamentally different metaphor: the fractal. Its stated premise is that "fractal logic is ingrained into a countless number of natural and constructed phenomena — from polynomial equations, to art and music — even the cosmic web," and that fractals therefore constitute a legitimate cross-disciplinary framework for representing the non-integer dimensionality of human thought.

This is not a purely aesthetic claim. The Mandelbrot set possesses properties — infinite self-similarity at every scale, boundary behavior that is simultaneously deterministic and unpredictably complex, a topology that supports boundless zooming without loss of structure — that map surprisingly well onto the properties the project wants its knowledge workspace to have: infinite depth, emergent organization, and the coexistence of order and chaos. Whether this mapping is rigorous or merely evocative is a question worth holding open. Either way, Neurite's design choices flow directly from it.

The project describes itself as offering "a new dimension of digital interface — the fractal dimension," and positions itself explicitly against "the conventional interface." With over 2,100 GitHub stars, 165 forks, and an active Discord community, it has earned genuine traction among a technically sophisticated audience — researchers, developers, educators, and PKM enthusiasts — who found existing tools philosophically unsatisfying as well as functionally limited.

---

## 2. Intellectual and Philosophical Foundations

### 2.1 Chaos Theory and the Mandelbrot Set

The Mandelbrot set is defined by the iterative equation z → z² + c in the complex plane. Points for which the iteration does not diverge belong to the set; its boundary is a fractal of infinite complexity. Benoit Mandelbrot coined the term "fractal" in 1975 and spent decades arguing that irregular, self-similar shapes — rather than smooth Euclidean forms — were the actual geometry of nature. Coastlines, lung bronchioles, galactic filaments, market price series: all exhibit fractal-like scaling.

Neurite's developers invoke this lineage directly, citing fractal appearances in art, music, and cosmology to argue that a fractal substrate is more natural for human cognition than a linear one. The philosophical suggestion is that thought itself is fractal: ideas nest inside ideas, themes recur at different scales, and the boundary between "related" and "unrelated" is not a clean line but a Mandelbrot-like region of infinite nuance.

### 2.2 Graph Theory and Rhizomatic Philosophy

Alongside fractal mathematics, Neurite draws on graph theory — the mathematical study of nodes and edges — and on what it calls "rhizomatic" structure. The term "rhizome" in the philosophical sense derives from Gilles Deleuze and Félix Guattari's *A Thousand Plateaus* (1980), which contrasts the tree (hierarchical, rooted, arborescent) with the rhizome (lateral, non-hierarchical, multiply-enterable). A rhizome "has no beginning or end; it is always in the middle, between things, interbeing, intermezzo."

Neurite's subtitle — "Fractal Graph-of-Thought. Rhizomatic Mind-Mapping for Ai-[[Agents]], Web-Links, Notes, and Code" — is a direct citation of this framework. The workspace has no root node. Any note, agent, or link can connect to any other. Navigation is spatial and multi-directional. The Zettelkasten and the mind map are kept in bidirectional sync, but neither is primary: each is a different *view* of the same rhizomatic knowledge structure.

### 2.3 The Zettelkasten Method

The Zettelkasten ("slip box") method, developed by sociologist Niklas Luhmann, involves writing atomic notes and linking them densely via reference identifiers rather than organizing them into thematic folders. Luhmann reportedly maintained over 90,000 index cards and credited his extraordinary productivity to conversations with his Zettelkasten as an emergent intellectual partner. The method has enjoyed a significant revival in the PKM community, with tools such as Obsidian, Roam Research, and Logseq all offering Zettelkasten-compatible [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[workflows]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]].

Neurite integrates the Zettelkasten as a first-class interface. Users can set custom `## title` and `[[reference]]` tags, build notes through UI interactions in the mind map, or conversely shape the mind map through text-based note-taking in the Zettelkasten pane. The bidirectional sync means that typing in the Zettelkasten immediately updates the corresponding visual node in the fractal, and clicking a node in the fractal jumps the Zettelkasten to that note. This navigational fluidity — called "Zoom-to-Node" — is one of Neurite's more technically accomplished features.

---

## 3. Technical Architecture

### 3.1 Platform and Stack

Neurite is a browser-based application, served as a static site via GitHub Pages at neurite.network. The repository is structured around vanilla JavaScript, HTML, and CSS, organized into a `js/` directory, `localhost_servers/`, `public/`, `resources/`, and `wiki/` directories, with a Vite-based build system (`vite.config.js`, `package.json`). This design means that the core workspace runs entirely client-side — no user data is sent to a central server, and the app works without a backend for its fundamental note-taking and fractal rendering functions.

A `localhost_servers/` directory provides optional local server utilities that unlock additional capabilities, particularly for local AI model [[integration]] and vector embedding. The desktop version, built on Electron, bundles these servers automatically so users do not need to manage them manually.

### 3.2 Fractal Rendering

The Mandelbrot set rendering is performed in real time, directly in the browser. Neurite supports not only the standard Mandelbrot set but also the Burning Ship fractal, the Julia set, and others. Rendering parameters including color palette, quality level, generation speed, and a distinctive mode that generates the fractal according to the user's current mouse position are all configurable through an Edit tab. The rendering "persists and regenerates as you interact," meaning movements through the fractal are not interrupted at each step. This is a non-trivial engineering achievement, as real-time fractal rendering at interactive framerates requires careful use of the GPU or highly optimized CPU computation.

### 3.3 Node System

Every object in the workspace is a node. Nodes can contain text (with code highlighting and execution), images, video, audio, webpages (iframes), PDFs, or AI [[agents]]. Nodes are physics-simulated: they "fall towards the fractal visualization," creating an emergent spatial organization that reflects the gravitational metaphor of ideas clustering around attractors. Users can anchor nodes in place, connect them with directed or bidirectional edges, scale them, select multiple nodes, and right-click to access methods including delete, connect, extractText, and zoomTo.

The control scheme is keyboard-and-mouse-centric: Shift + double-click creates a text node, Alt/Option + double-click creates an AI node, Control + double-click creates a link node. Holding Shift + Click on two nodes connects them. The control set rewards power users while having a moderate initial learning curve.

### 3.4 AI [[Integration]] and FractalGPT

The AI [[integration]] layer, called FractalGPT, is the feature most differentiating Neurite from conventional note-taking tools. FractalGPT does not operate as a sidebar chat window separate from the knowledge graph. Instead, the AI's responses are anchored as nodes in the fractal, and its conversational context is constructed dynamically from the graph itself. The result is that every note the user has written, and every prior AI response, can contribute to the AI's long-term memory — not through static prompt injection, but through vector-embedded graph search that retrieves contextually relevant nodes at inference time.

Specifically, Neurite implements:

- **Structured Memory Mapping**: AI responses are segmented and saved as notes within the fractal mind map, building a persistent, spatial record of reasoning chains.
- **Non-Linear Memory Access**: The AI can retrieve conversation histories and notes non-linearly via graph search, enabling contextual responses that utilize the topology of the knowledge graph rather than just recency.
- **Vector [[Embeddings]]**: A local vector database (running through the localhost servers) grows as the user adds notes, allowing semantic similarity search across the entire knowledge base. The system supports selective forgetting — users can experimentally delete certain memories from the vector store.
- **Auto Mode**: The AI can recursively generate its own [[[[prompts]]]], enabling autonomous multi-step exploration within the fractal workspace.

Supported inference backends span both local and cloud:

| Local | Cloud |
|---|---|
| Ollama | OpenAI |
| transformers.js (Hugging Face) | Anthropic |
| Custom endpoints (llama.cpp) | Groq |

API keys for cloud providers are entered through the AI tab in the menu dropdown. Local model support is privacy-focused by design: no data leaves the machine.

### 3.5 Multi-Agent UI

One of Neurite's most technically ambitious features is its graph-based multi-agent conversation system. Individual AI nodes can be connected to each other, enabling AI-to-AI communication orchestrated by the user's graph layout. Connected nodes send messages to one another; the user can control conversation hierarchy — which node sends, which receives, and whether connections are bidirectional or unidirectional. Nodes can begin messages with `@` for references to other [[agents]] or `@self`, and `/` for commands such as `/exit` to break out of a conversation loop.

The system is explicitly inspired by research on Conversational Swarm Intelligence, with Neurite's [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[README]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] linking to a relevant arXiv paper on the topic. The practical implication is that users can build specialized agent swarms: one agent configured as a critic, another as a synthesizer, another as a domain expert — and the user orchestrates their interactions through the visual graph. Connected web-link nodes can be fed to [[agents]] as RAG (Retrieval-Augmented Generation) context, allowing [[agents]] to reason about specific web pages or PDFs.

### 3.6 Neural API

Neurite exposes a Neural API — a collection of scriptable functions for advanced users who want to extend or automate the workspace. The API is accessible through a built-in Function Calling Panel (a terminal inside Neurite) and supports operations including: animating movements through the Mandelbrot set, zooming to exact coordinates, calling vision-capable AI models to determine the next movement, creating notes, prompting the Zettelkasten AI, and searching/zooming to notes. Calling `const neuralAPI = neuralApiPrompt(); console.log(neuralAPI);` from within the Function Calling Panel prints current API documentation to the console. The AI itself can be prompted to construct sequences of Neural API calls, enabling a form of AI-directed navigation and note creation within the fractal.

### 3.7 AI Plugins

Beyond the core AI [[integration]], Neurite supports a plugin system for AI capabilities:

- **Web Search**: AI-assisted search automation from within the workspace.
- **Understands Webpages and PDFs**: A local vector database enables AI to retrieve context from linked web content and uploaded PDFs.
- **Wikipedia Results**: Retrieve the top 3 Wikipedia results for a query, displayed as nodes in the fractal workspace.
- **Wolfram Alpha Results**: AI pre-thinks the query before sending it to Wolfram Alpha, and results appear as nodes.
- **Experimental Code Editor**: HTML/JS code blocks generated by AI are renderable directly in the workspace; Python execution is handled via Pyodide (Python in the browser).
- **Long-Term Memory**: Vector-embedded recall across notes and conversation, with experimental selective forgetting.

### 3.8 Neurite Desktop

A cross-platform desktop application based on Electron is available for Windows, Linux, and macOS. The desktop release removes the iframe sandbox restrictions inherent to browser contexts, enabling full web browsing within link nodes — any website can be opened and displayed side-by-side within the infinite canvas. Users can drag URLs directly out of a link node to create new link nodes. The desktop app also manages the localhost servers automatically, removing the manual server-[[setup]] step required for some features in the browser version.

---

## 4. Feature Matrix Summary

| Category | Capability |
|---|---|
| Fractal Navigation | Real-time Mandelbrot, Burning Ship, Julia set rendering; mouse-responsive fractal generation |
| Workspace | Physics-simulated nodes; infinite canvas; multimedia embedding |
| Note-Taking | Markdown, bidirectional Zettelkasten/mind-map sync, custom tags, code execution |
| AI [[Integration]] | FractalGPT with graph-contextualized memory; local + cloud model support |
| Multi-Agent | Graph-based agent networks; directed/bidirectional messaging; agent swarm patterns |
| Memory | Vector-embedded local database; non-linear recall; selective forgetting |
| External Knowledge | Wolfram Alpha, Wikipedia, web search, RAG over PDFs and webpages |
| Developer Access | Neural API; Function Calling Panel; in-browser Python via Pyodide |
| Privacy | Fully local operation possible via Ollama + localhost servers |
| Platforms | Web (neurite.network), Desktop (Electron: Windows, Linux, macOS) |
| License | MIT |

---

## 5. Positioning in the PKM and AI Landscape

### 5.1 Compared to Conventional Note-Taking Tools

Tools like Obsidian, Notion, and Roam Research organize knowledge in flat or hierarchical file structures with graph views as secondary visualizations. The graph view in these tools is a *representation* of the notes; in Neurite, the spatial graph *is* the primary interface, and the Zettelkasten text pane is an alternate view of the same underlying structure. This is a meaningful architectural inversion. For users who think spatially and non-linearly, Neurite's approach may feel more natural than bolting a graph view onto a file system.

### 5.2 Compared to Mind-Mapping Tools

Traditional mind-mapping tools (MindMeister, XMind, Miro) are primarily static or semi-interactive visual tools without deep text editing or AI [[integration]]. Neurite's nodes are dynamic objects that "can run code, interact with APIs, intercommunicate, and anything else within the realm of imagination," as the project describes it. The physics simulation, fractal backdrop, and AI [[integration]] make it categorically different from presentation-oriented mind mappers.

### 5.3 Compared to AI Agent Frameworks

LangChain, AutoGen, CrewAI, and similar frameworks provide programmatic multi-agent orchestration. Neurite provides a *visual, interactive* multi-agent orchestration environment where the conversation topology is defined by the user's spatial graph layout. It is not a replacement for programmatic agent frameworks — it lacks their flexibility for complex automated pipelines — but it offers something those frameworks don't: a human-in-the-loop, spatially navigable view of AI [[agents]] reasoning together in real time.

### 5.4 The Rhizome vs. the Folder

The deepest positioning claim Neurite makes is philosophical: that folder-and-file metaphors impose an arborescent, hierarchical structure that is fundamentally alien to how ideas actually relate. The Zettelkasten community has made versions of this argument for years; Neurite takes it further by arguing that even flat-graph tools like Roam impose a kind of topological neutrality (all nodes equally close to all others) that fails to capture the non-uniform density of real knowledge — where some regions of concept-space are intensely interconnected and others sparse. The fractal, with its basins of attraction and boundary zones of maximal complexity, is proposed as a more faithful topology for knowledge.

Whether this argument is ultimately persuasive or remains an inspiring provocation, it distinguishes Neurite from every other tool in the PKM space.

---

## 6. Use Cases

### 6.1 Research and Academic Work

Researchers can use Neurite to build a living literature [[review]]: web-link nodes pointing to papers, AI nodes summarizing and connecting them, and Zettelkasten notes capturing the researcher's own synthesis. The vector-embedded search means that asking an AI question pulls in contextually relevant prior notes rather than requiring the researcher to manually curate context. The Wolfram Alpha plugin adds computational verification. Wikipedia results can be injected as quick-reference nodes.

### 6.2 Software Development

The in-browser code editor with syntax highlighting and execution (HTML/JS directly, Python via Pyodide) makes Neurite usable for interactive coding exploration. Developers can write, execute, and visualize code in real time, connecting code nodes to notes and AI nodes that provide explanation or debugging assistance. The desktop app's full web browsing within link nodes means documentation can be displayed side-by-side with code.

### 6.3 Creative and Artistic Work

Writers, artists, and designers can use the fractal canvas as an associative mood board: dropping in reference images, video clips, audio, and text notes, letting them cluster by spatial proximity in the physics simulation. The AI can be used for brainstorming within a spatially organized context, with prior creative decisions preserved as graph structure.

### 6.4 Education

The real-time fractal rendering makes Neurite a tool for teaching fractal mathematics directly — students can observe the Mandelbrot set at different zoom levels and parameter values, with AI providing explanations. Sorting algorithm visualizations and other live code demonstrations can be embedded as nodes. Multi-agent setups can simulate Socratic dialogue between AI nodes configured with different pedagogical personas.

### 6.5 Personal Knowledge Management

For PKM enthusiasts already familiar with the Zettelkasten method, Neurite offers a spatial, AI-augmented extension of their existing practice. The bidirectional sync with the mind map provides a macro view of the knowledge base's structure without abandoning the text-centric Zettelkasten workflow. The long-term memory system means the AI becomes progressively more contextually aware as the vault grows.

---

## 7. Limitations and Critical Assessment

### 7.1 Learning Curve

Neurite's interface is unconventional enough that it has a substantial learning curve. The fractal backdrop, while philosophically motivated, can be visually overwhelming for new users. The photosensitive epilepsy warning in the [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[README]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] is not rhetorical: the combination of dynamic fractal rendering, physics-simulated nodes, and real-time color generation creates a visually intense environment. The project acknowledges this and provides a "HOW-TO" checkbox that gives the AI contextual knowledge about Neurite's own interface, enabling it to answer user questions about navigation.

### 7.2 Maturity and Stability

The project describes itself as "an open-source project in active development." With 851 commits, 4 open issues, and 1 open pull request as of June 2026, it is not a mature commercial product. Features described as "experimental" (the code editor, selective forgetting) should be treated as such. The macOS desktop release requires workarounds to open due to the absence of code signing. Windows requires clicking past a security warning on first open. These are not disqualifying problems for a technically sophisticated user base, but they indicate the project's stage of development.

### 7.3 Performance Constraints

Real-time fractal rendering is computationally expensive. On less powerful hardware, the combination of fractal generation, physics simulation, and AI inference could create performance bottlenecks. The localhost server requirement for full vector embedding and local AI support adds infrastructure overhead that is non-trivial for non-developer users.

### 7.4 Data Persistence and Portability

Saving in Neurite has historically been a work-in-progress. Early snapshots indicate that non-textual content required re-insertion after saving, suggesting the persistence story for rich media nodes was not fully solved in early stages. The current state is meaningfully improved, but the project does not yet offer the kind of robust, format-portable data storage (e.g., plain markdown files on disk, like Obsidian) that some PKM users require for long-term archival confidence.

### 7.5 The Fractal Metaphor: Power and Risk

The fractal metaphor is Neurite's greatest conceptual asset and its greatest potential liability. As an organizing principle, it justifies a set of design decisions (infinite zoom, physics simulation, boundary-zone complexity) that collectively produce a genuinely novel interface. But metaphors can also obscure: the Mandelbrot set's topology does not map onto knowledge structure in a technically rigorous sense — it is a two-dimensional complex-plane object with specific mathematical properties that are not all preserved in the analogy. The risk is that users adopt the metaphor so fully that they mistake aesthetic resonance for deep structural correspondence.

This is, however, a risk that attaches to every interface metaphor, including the desktop and the notebook. The pragmatic question is whether the fractal metaphor generates useful design constraints and productive user behaviors — and there is real evidence that for a significant subset of users, it does.

---

## 8. The Broader Significance

Neurite arrives at a moment when the tools for thinking with AI are proliferating rapidly. Most follow a conservative design pattern: a chat interface bolted onto a document editor. Neurite represents a more radical position — that AI [[integration]] requires a fundamentally new kind of workspace, one that treats AI responses as spatial artifacts rather than conversational turns, one that gives the knowledge graph's topology a direct role in shaping AI context, and one that makes the act of organizing knowledge feel more like navigating a landscape than filing paperwork.

The multi-agent UI is particularly forward-looking. As AI capabilities increase and multi-agent systems become more practically useful, the question of how humans should interact with ensembles of AI [[agents]] becomes important. Neurite's graph-based approach — where the user defines agent relationships spatially and observes their communication as a visible topology — is one serious answer to that question. It is an answer that prioritizes legibility and human control over the automation-first approaches of programmatic agent frameworks.

Whether Neurite will scale beyond its current technical-enthusiast community depends substantially on whether the learning curve can be reduced without abandoning the core design philosophy. The desktop app and ongoing active development are meaningful steps. The MIT license and open GitHub repository make it a viable foundation for derivative works and broader adoption.

---

## 9. Conclusion

Neurite is one of the most philosophically ambitious knowledge tools currently in active development. By grounding its interface in fractal mathematics, rhizomatic philosophy, and the Zettelkasten method, it articulates a coherent critique of conventional note-taking metaphors and proposes a genuine alternative. Its AI [[integration]] — particularly FractalGPT's graph-contextualized memory and the multi-agent network system — pushes meaningfully beyond what most AI-augmented knowledge tools offer. Its technical openness (MIT license, local-first AI, Neural API) makes it extensible in ways that closed commercial alternatives are not.

Its limitations — learning curve, maturity, performance demands, and the inherent risk of over-extending the fractal metaphor — are real. But they are the limitations of a genuinely novel and ambitious project, not the limitations of a conservative one. Neurite deserves serious attention from anyone interested in the intersection of AI, personal knowledge management, and the design of interfaces for thought.

---

## References and Sources

- Neurite GitHub Repository: github.com/satellitecomponent/Neurite (MIT License)
- Neurite Live Application: neurite.network
- Mandelbrot, B. (1982). *The Fractal Geometry of Nature.* W. H. Freeman.
- Deleuze, G. & Guattari, F. (1980). *A Thousand Plateaus.* University of Minnesota Press (English translation 1987).
- Luhmann, N. (1992). "Communicating with Slip Boxes." Translated by Manfred Kuehn.
- Anil, R. et al. (2023). "Conversational Swarm Intelligence." arXiv:2309.03220
- Internet Archive snapshot of Neurite, May 2023: archive.org/details/github.com-satellitecomponent-Neurite_-_2023-05-31_21-08-58
- BestGenTools listing for Neurite, 2023: bestgentools.ai/tools/neurite
- YesChat Neurite GPT profile: yeschat.ai/gpts-2OToJUAOEy-Neurite

---

*Paper compiled June 2026. Neurite is under active development; features and capabilities described reflect the project's state as of the research date.*
