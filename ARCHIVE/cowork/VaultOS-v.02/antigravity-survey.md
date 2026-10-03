AGENT: Antigravity
PHASE: Survey
STATUS: Complete
TIMESTAMP: 2026-06-29T09:40:00-04:00

### 1. Categories of Work Represented
- **Agent Frameworks & Infrastructure:** agent-file, agentfs, AgentLoop, MASFactory, open-multi-agent, gitagent, orca, hermes-agent, hermes-agent-self-evolution.
- **Scraping & Data Acquisition:** crawlee-python, DocketScraperAPI, Instagram-Hashtag-Scraper, multilogin-automation, kameleo.
- **Skills, Prompts & Applied Legal/Research:** Anthropic-Cybersecurity-Skills, autoresearch, autoresearch-skill, claude-for-legal-tutorial, claude-legal-skill, oh-my-hermes-for-legal-researcher.
- **Routing & Execution Tooling:** OmniRoute, omniwire, LLM_MapReduce, markdowner.
- **Entertainment / Gaming (Anomaly):** A-Defection (Blockchain/AI narrative game).

### 2. Patterns Across Projects
- **Agent Extensions:** A massive proliferation of skills, prompts, and plugins specifically targeting Claude/Hermes (e.g. awesome-claude-corporate-skills, openclaw-skills-Lawliet, OpenCode-goal-plugin).
- **Data Ingestion via Browsers:** High reliance on stealth and scraping architectures (multilogin, kameleo, crawlee) suggesting a need to pull unstructured data into the agentic ecosystem.
- **Legal/Research Workflows:** A repeating motif of applying AI to legal documents and research (DocketScraperAPI, claude-legal-skill, autoresearch).

### 3. Gaps
- **Unified Memory/Knowledge Base:** While there is `supermemory` and `agentfs`, the scraping tools and agent workflows appear disconnected. There isn't a clear unified context or semantic storage layer mapping the scraped data to agent execution.
- **Observability:** `langfuse` and `getsentry-dotagents` exist, but many of the raw agent wrappers lack standardized logging or state-tracking mechanisms.

### 4. Themes
- **The builder is heavily focused on creating an autonomous legal/research apparatus.** They are assembling the parts: data scrapers that bypass bot protections, applied skills for legal context, and agent frameworks to execute them. They are trying to build researchers that can autonomously gather real-world data and synthesize it.

### 5. Abandoned / Mid-Thought Projects
- **A-Defection:** Looks like a very ambitious narrative/blockchain AI game that is functionally isolated from the rest of the ecosystem. It contains its own massive sub-project ("ECC" / Everything Claude Code) but feels like a separate track.
- **LLM_MapReduce:** A powerful concept for scaling context windows across large codebases or documents, but seems isolated among all the prompt-based repos.

### 6. Wild Card
- **LLM_MapReduce:** This is an incredibly powerful architectural pattern for processing huge document sets (like legal dockets or large codebases). If integrated into the scraping + hermes pipeline, it could supercharge the research capabilities.
- **A-Defection\ECC:** A massive embedded ecosystem (Everything Claude Code) that seems highly developed with robust hooks, agents, and templates. It might be underutilized if it's trapped within a game directory.
