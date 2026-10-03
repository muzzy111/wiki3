---
aliases: []
tags:
  - ollama
  - local
  - compose
  - model
---
2
Knowing you have the **LFM 2.5 1.2B Instruct** model ready to lock into that 2GB Nvidia GPU VRAM changes everything. That model punches way above its weight for structured extraction and agentic tasks, while your **Qwen 2.5 4B** is perfect for fallback or heavier analytical tasks.

Here are five highly technical, data-dense projects designed to make your agent think deeply about hardware boundaries, database normalization, local LLM orchestration, and self-healing automation.

##  Project 1: Semantic Local Code Reviewer & AST Linting Daemon

- **Target Stack:** Docker Compose, PostgreSQL (JSONB tracking), Python, Ollama (LFM 2.5 1.2B).
    
- **The Challenge:** Your agent must construct a system that watches a local directory for code changes (Python/JS), parses the code into an Abstract Syntax Tree (AST) to pinpoint exact functions, and feeds the functions to the LFM 2.5 on your GPU to generate local, automated code reviews.
    

Plaintext

```
Act as a Senior Developer Tools and AI Integration Engineer. Your task is to design and deploy a completely local, real-time AI Code Review & AST Linting Daemon that analyzes file updates on your host machine.

Hardware & Execution Constraints:
- Max RAM Envelope: 1.5GB total for infrastructure.
- Local AI Layer: Force inference exclusively to your local Ollama instance utilizing the 'liquid-lfm:2.5-1.2b-instruct' model running on the Nvidia GPU.

Requirements:
1. Orchestration Environment (Docker Compose):
   - Service A: PostgreSQL (Limited to 750MB RAM).
   - Service B: Code Watcher Daemon (Python, limited to 500MB RAM). Mount host directory `./src_projects` into `/app/src`. Enable `extra_hosts` to route traffic to the host gateway for Ollama access.
2. AST Parsing & Code Chunking:
   - Write a daemon that catches file saves (`.py` or `.js`). Instead of sending the whole file, use Python's native `ast` module (or `esprima` for JS) to split the code by individual class or function blocks.
3. Local GPU Extraction & Inference:
   - For every modified function block, send the raw function string to your local LFM 2.5 instance. 
   - Use a precise system prompt: "You are an automated code quality linter. Output valid JSON containing three keys: 'complexity_score' (1-10), 'potential_bugs' (string description), and 'refactored_code' (the cleaner code snippet if applicable)."
4. Database Ingestion & Change Ledger:
   - Store the structured analysis in PostgreSQL. If the function has been evaluated before, create an incremented revision entry to keep a historic tracking log of how the code quality changes over time.

Deliverables:
- Single-file `docker-compose.yml` with accurate network configurations.
- Schema creation script (`ledger_schema.sql`) utilizing index optimizations for fast code search.
- The complete Python watcher daemon code.

[PASTE YOUR UNIVERSAL REFLECTION TEMPLATE HERE]
```

##  Project 2: Multi-Agent Local Log Parser & Incident Response Matrix

- **Target Stack:** Docker Compose, Redis, Python Workers, Ollama (LFM 2.5 & Qwen 2.5 4B).
    
- **The Challenge:** This is a classic multi-tier agent layout. A fast log-ingestion container pipes system logs to Redis. Agent 1 (LFM 2.5) triages the logs instantly on the GPU. If it flags an anomaly, it hands the task off to Agent 2 (Qwen 2.5 4B), which spins up to do a deeper root-cause evaluation.
    

Plaintext

```
Act as a Principal DevSecOps and Site Reliability Engineer. Your task is to architect a local, automated Multi-Agent System Monitoring & Incident Response Pipeline that triages log streams asynchronously.

Hardware & Execution Constraints:
- Max RAM Envelope: 2GB total for the operational containers.
- Orchestration Layer: Divide inference jobs between two local models in Ollama: `liquid-lfm:2.5-1.2b-instruct` on the GPU for rapid sorting and `qwen2.5:4b` on the CPU for complex post-mortem analysis.

Requirements:
1. Operational Pipeline Architecture (Docker Compose):
   - Service A: Redis (The central asynchronous message broker).
   - Service B: Fast Triage Worker (Python, listening to the log queue).
   - Service C: Deep Analysis Worker (Python, watching the incident escalation queue).
2. Phase 1: Rapid Triage Engine (LFM 2.5):
   - Feed incoming raw server logs or mock logs into Redis. The Triage Worker pops the log and queries LFM 2.5 on the GPU using a high-throughput, low-latency instruction prompt to classify the log as `[INFO]`, `[WARN]`, or `[CRITICAL]`.
3. Phase 2: Escalation & Root Cause Analysis (Qwen 2.5 4B):
   - If a log is marked `[CRITICAL]`, the Triage Worker pushes the log along with LFM's reasoning into a separate escalation queue.
   - The Deep Analysis Worker pops the alert, collects context, and queries the larger Qwen 4B model to generate a structured step-by-step mitigation plan.
4. Output Management:
   - Write the escalated alerts and generated mitigation guides to a structured local markdown directory (`./incidents`) formatted as individual files for post-mortem tracking.

Deliverables:
- Combined `docker-compose.yml` with precise host-gateway configurations.
- The implementation scripts for both independent Python workers.
- A sample log generator script to run against the cluster to test the escalation threshold.

[PASTE YOUR UNIVERSAL REFLECTION TEMPLATE HERE]
```

##  Project 3: Automated Audio Transcriber & Structured Content Extractor

- **Target Stack:** Docker Compose, Python, FFmpeg, Whisper (Lightweight/Tiny), Ollama (LFM 2.5).
    
- **The Challenge:** Your agent must configure a watcher that captures audio files on the host, uses a tiny local Whisper model to convert audio to raw text, and then runs that text through LFM 2.5 to automatically output clean summaries, action items, and structural chapters.
    

Plaintext

```
Act as an Audio Pipeline and Data Engineer. Your task is to design a local, automated Transcription & Knowledge Extraction Factory that monitors a host directory for new audio recordings, extracts text, and processes them with AI.

Hardware & Execution Constraints:
- Max RAM Envelope: 2.5GB total.
- Models: Use a lightweight CPU-optimized Whisper variant (like `whisper-tiny`) for local audio decoding, and route the text extraction payload to your GPU-hosted LFM 2.5 Instruct model.

Requirements:
1. Media Ingestion Environment (Docker Compose):
   - Service A: Ingestion Daemon (Python/FFmpeg, mounted to host path `./audio_inbound`).
   - Service B: Persistence Layer (SQLite or local JSON file storage).
2. Processing Pipeline:
   - When an audio file (`.mp3`, `.wav`, `.m4a`) is dropped in the folder, the container must use FFmpeg to normalize the audio sample rate.
   - Run the audio through the local Whisper instance to output a raw timestamped text transcript.
3. Information Synthesis (LFM 2.5):
   - Send the messy raw transcript into the local LFM 2.5 instance. 
   - Prompt it to generate a highly structured documentation document: extract a meeting/lecture title, build an itemized list of core concepts discussed, list explicit action items, and output a 3-sentence summary block.
4. Vault Export:
   - Save the finalized documentation directly into a local folder as an AI-ready Markdown file featuring standard metadata blocks.

Deliverables:
- Clean `docker-compose.yml` tracking the volume mappings.
- The complete Python processing pipeline scripts (`transcribe.py`, `enrich.py`, `requirements.txt`).

[PASTE YOUR UNIVERSAL REFLECTION TEMPLATE HERE]
```

##  Project 4: AI-Driven Context Optimizer for Obsidian (RAG Pipeline)

- **Target Stack:** Docker Compose, PostgreSQL (pgvector), Python, Ollama (LFM 2.5).
    
- **The Challenge:** Building a local Retrieval-Augmented Generation (RAG) tool. Your agent must create an API that takes a user query, searches your notes inside a vector-enabled database, extracts the relevant pieces, and passes them to LFM 2.5 on your GPU to answer your questions using _only_ your personal vault notes as data ground truth.
    

Plaintext

```
Act as a Knowledge Management and AI Reasoning Systems Architect. Your task is to build a local, ultra-fast RAG (Retrieval-Augmented Generation) Context Engine that interfaces with local storage and generates verified answers via local inference.

Hardware & Execution Constraints:
- Max RAM Envelope: 2GB total.
- Inference Vector: Use your local GPU-accelerated LFM 2.5 Instruct model via Ollama for final text generation.

Requirements:
1. RAG Core Stack (Docker Compose):
   - Service A: PostgreSQL with the `pgvector` extension enabled (Capped at 1GB RAM).
   - Service B: Context Agent API (Python/FastAPI, capped at 1GB RAM). Mount local directory `./my_vault` to access your markdown documents.
2. Vector Embeddings & Indexing:
   - The engine must parse your markdown notes, calculate structural chunking bounds, generate vector profiles for the notes, and write them into the pgvector column space.
3. Retrieval & Generation Pipeline:
   - Expose an endpoint `/ask?q=YOUR_QUERY`. 
   - When hit, the system must vectorize the incoming query, perform a cosine similarity match inside PostgreSQL to get the top 3 most relevant note paragraphs, and combine those snippets into a strict context prompt template.
   - Send the query and context to your LFM 2.5 model. Instruct the model: "Answer the query using ONLY the provided text snippets. If the information is not present, state that you do not know."

Deliverables:
- Optimized `docker-compose.yml` including the pgvector database environment parameters.
- Database schema script setting up the vector match distances.
- The complete FastAPI logic managing vector retrieval and Ollama handshakes.

[PASTE YOUR UNIVERSAL REFLECTION TEMPLATE HERE]
```

##  Project 5: Self-Healing Web Scraper & Auto-Repair Selector Engine

- **Target Stack:** Docker Compose, Playwright/Puppeteer, Python, Ollama (LFM 2.5).
    
- **The Challenge:** Web scrapers break constantly because websites change their HTML structure/CSS selectors. Your agent must build a scraper that, if it fails to find its data target, takes a snapshot of the raw DOM element tree, sends it to the LFM 2.5 model, and asks the AI to find the _new_ corrected CSS selector dynamically so the code can repair itself and finish the run.
    

Plaintext

```
Act as a Principal Data Scraping and Automation Systems Engineer. Your task is to construct a Self-Healing Web Scraper that utilizes local vision/text processing capabilities to programmatically repair broken HTML paths and CSS selectors during runtime.

Hardware & Execution Constraints:
- Max RAM Envelope: 2.5GB total. 
- AI Orchestration: Rely on your local `liquid-lfm:2.5-1.2b-instruct` model to perform high-speed HTML layout evaluation on the GPU.

Requirements:
1. Automation Cluster (Docker Compose):
   - Service A: Scraper Engine (Python/Playwright in headless mode, limited to 1.5GB RAM).
   - Service B: Local Target Mirror or Data Target Cache Engine.
2. Dynamic Error Detection and Interception:
   - Program the scraper to look for specific target objects on a webpage using a default CSS selector string (e.g., `div.product-price`).
   - If the script returns an empty value or a timeout error (simulating a target layout design update), it must capture a raw text string of the immediate parent DOM container elements.
3. Automated Selector Repair (LFM 2.5):
   - Pass the parent HTML block to LFM 2.5 via Ollama. 
   - Execute a repair prompt: "The original selector 'div.product-price' failed. Analyze this raw HTML snippet and return ONLY a valid raw CSS selector string pointing to where the pricing text is now hidden."
4. Runtime Continuation:
   - The Python script must ingest the AI's response text string, immediately apply it to the live browser execution context, re-try the element extract, and log the updated working path into a configuration ledger file on the host.

Deliverables:
- Combined `docker-compose.yml` running the headless environment.
- Resilient self-healing Python scraper engine script (`self_healer.py`).
- A demo mock webpage structure that changes its tags to safely test the execution fix
```




Act as an Automation and Infrastructure Engineer. Your task is to design a resilient, resource-capped Ephemeral Browser Farm that executes heavy scraping tasks, then uses a local Ollama model to clean and summarize the ingested content before storage.

Hardware & Footprint Constraints:
- Max RAM Envelope: 3GB total.
- AI Layer: Route inference requests to your local host Ollama daemon using an optimized, sub-3B parameter model.

Requirements:
1. Containerized Stack (Docker Compose):
   - Service A: Redis (Job queue).
   - Service B: Browser Worker (Headless Playwright/Puppeteer context capped at 2 parallel browser contexts).
2. Scraping & AI Compression Workflow:
   - The worker pops a URL from Redis, opens the headless browser, and extracts the primary page text.
   - Because raw web text is bloated, the worker must send the text payload directly to your local Ollama instance (`/api/chat`). 
   - Prompt the sub-3B model to act as a markdown cleaner: "Strip out all navigation links, ads, and footers. Format the core content of this webpage into clean Markdown with an H1 title."
3. Persistence:
   - Save the highly compressed, AI-cleaned markdown file directly to the host storage mount.

Deliverables:
- Combined `docker-compose.yml` mapping host network aliases for Ollama access.
- Resilient Worker script with error handling for when Ollama or the browser times out.

[PASTE YOUR UNIVERSAL REFLECTION [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[TEMPLATE]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] HERE]



Act as an Automation and Infrastructure Engineer. Your task is to design a resilient, resource-capped Ephemeral Browser Farm that executes heavy scraping tasks, then uses a local Ollama model to clean and summarize the ingested content before storage.

Hardware & Footprint Constraints:
- Max RAM Envelope: 3GB total.
- AI Layer: Route inference requests to your local host Ollama daemon using an optimized, sub-3B parameter model.

Requirements:
1. Containerized Stack (Docker Compose):
   - Service A: Redis (Job queue).
   - Service B: Browser Worker (Headless Playwright/Puppeteer context capped at 2 parallel browser contexts).
2. Scraping & AI Compression Workflow:
   - The worker pops a URL from Redis, opens the headless browser, and extracts the primary page text.
   - Because raw web text is bloated, the worker must send the text payload directly to your local Ollama instance (`/api/chat`). 
   - Prompt the sub-3B model to act as a markdown cleaner: "Strip out all navigation links, ads, and footers. Format the core content of this webpage into clean Markdown with an H1 title."
3. Persistence:
   - Save the highly compressed, AI-cleaned markdown file directly to the host storage mount.

Deliverables:
- Combined `docker-compose.yml` mapping host network aliases for Ollama access.
- Resilient Worker script with error handling for when Ollama or the browser times out.

[PASTE YOUR UNIVERSAL REFLECTION [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[TEMPLATE]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] HERE]





``