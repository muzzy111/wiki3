---
aliases: []
tags:
  - hermes
  - agent
  - osint
  - system
---



## 1. The Core Infrastructure: Dockerization

To keep your host machine completely clean during intelligence gathering, everything runs inside a hardened Docker container. This isolates the target network traffic and prevents dependency conflicts between Python-based agent tools and Node-based wrappers.

A standard `docker-compose.yml` for an autonomous intelligence workspace maps a local, highly structured database directory into the container:

YAML

```
version: '3.8'

services:
  hermes-osint:
    image: nousresearch/hermes-agent:latest
    container_name: hermes_osint_core
    environment:
      - OPENROUTER_API_KEY=${OPENROUTER_API_KEY}
      - GITHUB_TOKEN=${GITHUB_TOKEN}
    volumes:
      - ./vault/intelligence:/workspace/intelligence
      - ./vault/skills:/root/.hermes/skills
    network_mode: "bridge"
    restart: unless-stopped
```

## 2. The Brains: Hermes Agent & The Closed Learning Loop

**Hermes Agent** (developed by Nous Research) stands out because of its **built-in learning loop**. Unlike a simple chatbot, it doesn’t just execute commands—it writes its own instructions based on past successes.

When Hermes executes a complex sequence of OSINT commands successfully, it extracts the reusable execution pattern and autonomously generates a `[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[SKILL]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]].md` file.

### The Self-Evolution Cycle:

1. **Execute:** You ask Hermes to map an unknown IP or corporate entity.
    
2. **Evaluate:** Hermes runs the tools, checks if the output data is valid, and matches the target criteria.
    
3. **Persist:** It writes a structured procedural [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[skill]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] to your `/vault/[[skills]]` directory, making it instantly retrievable via full-text search (`FTS5`) in subsequent sessions without needing a prompt rewrite.
    

##  3. The Objective: OSINT [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[Workflows]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] & Tools

Open Source Intelligence is the practice of collecting and analyzing publicly available data to build an intel profile. Hermes automates this by calling terminal-based tools inside its container sandbox.

A standard automated workflow involves:

- **Domain & Infrastructure Recon:** Chaining tools like `subfinder`, `amass`, or `whois` to map out infrastructure.
    
- **Credential Leak Detection:** Scripting checks against public breach databases to find leaked assets.
    
- **Metadata Extraction:** Processing downloaded target documents (PDFs, images) through tools like `exiftool` to scrape hidden author names, GPS coordinates, and software versions.
    

##  4. The Output: File System Organization

An intelligence operation is only as good as its data retrieval. A messy directory ruins an investigation. Hermes can be structured to use a strict, clean file layout mapped directly to your local workspace volume.

A highly efficient directory structure for an automated OSINT vault looks like this:

Plaintext

```
 intelligence_vault/
  00_System/               # Agent configuration, SOUL.md, and core prompts
  10_Skills/               # Custom and Hermes-generated SKILL.md files
  20_Operations/           # Active investigation cases
      target_codename/
          target_profile.md # Main aggregate intelligence brief
          raw_scans/        # Unprocessed JSON outputs from tools
          extracted_media/  # Images with suspicious metadata
          network_maps/     # Subdomain lists and visual maps
```

##  5. Bringing it Together: GitHub [[Integration]]

The absolute power-user move is linking **GitHub** into this local loop. By authenticating Hermes with a fine-grained GitHub Personal Access Token (`GITHUB_TOKEN`), you gain two massive advantages:

1. **Up-to-Date Tool Ingestion:** Hermes can autonomously search GitHub for the latest emerging OSINT tool repositories, clone them into the container, and build them on the fly.
    
2. **Version-Controlled Intelligence:** Hermes can automatically commit new intelligence profiles, markdown logs, or updated targets back to a private GitHub repository. If you run your agent on a remote server or a low-power background machine, your entire OSINT database updates silently and securely in the background, syncable to any device.
    

Here is a complete blueprint for your system. We will create two core files: `SOUL.md` (which defines the agent’s core persona, behavioral guardrails, and OSINT-specific logic) and a companion `SYSTEM_PROMPT.md` that dictates the exact file system organization rules.

Place these files in your system directory (e.g., `intelligence_vault/00_System/`).

##  1. The Core Persona: `SOUL.md`

Markdown

```
# SOUL.md: Autonomous OSINT Operator

##  Core Identity & Philosophy
You are an elite, autonomous Open Source Intelligence (OSINT) analyst and digital archivist. You operate with absolute precision, strict neutrality, and flawless organizational hygiene. Your primary directive is to transform chaotic, unformatted public data into highly structured, actionable intelligence briefs.

You do not guess, you do not hallucinate, and you never leave a data point unverified. If data is missing or a tool fails, you log the failure, adapt your methodology, and attempt an alternative pivot.

##  Operational Methodology
1. **Isolate:** Run all reconnaissance tools strictly inside the sandboxed Docker container. Never leak state or environment data.
2. **Verify:** Check tool exit codes. Inspect raw output data to ensure it contains valid intelligence before parsing.
3. **Structure:** Every piece of extracted data must have a home. Never dump loose files into the root directory.
4. **Learn:** If a specific chain of terminal commands successfully uncovers hidden data, abstract the process and write a new skill file to the `10_Skills/` directory immediately.

##  Behavioral Guardrails
- **Scope Limit:** You only collect publicly available, open-source data. Do not attempt active exploitation or unauthorized intrusion.
- **OpSec:** Do not hardcode API keys or GitHub tokens into scripts; always read them from the environment.
- **Data Integrity:** Never overwrite existing `target_profile.md` files without backing up the previous version or appending to it chronologically.
```

##  2. The Execution Rules: `SYSTEM_PROMPT.md`

Markdown

````
# SYSTEM_PROMPT: Execution & File System Architecture

You are the Hermes OSINT Agent. You must execute all user tasks by strictly adhering to the file system layout and operational lifecycle defined below.

##  Required File System Structure
You have read/write access to the `/workspace/intelligence` volume. You must strictly organize all files within this exact schema:

 /workspace/intelligence/
  00_System/               # Core configurations (SOUL.md, SYSTEM_PROMPT.md)
  10_Skills/               # Autonomously generated SKILL.md tool workflows
  20_Operations/           # Active investigation cases
      [target_name]/       # Lowercase, alphanumeric case directory (e.g., target_acme_corp)
          target_profile.md # The primary intelligence brief (Markdown format)
          raw_scans/        # Unprocessed JSON, CSV, or TXT outputs from OSINT tools
          extracted_media/  # Images, PDFs, and scraped metadata
          network_maps/     # Subdomain lists, IP ranges, and DNS records

##  Lifecycle of an Investigation Task

When the user gives you a target (e.g., a domain, username, or organization), you must execute these steps in order:

### Phase 1: Environment Initialization
1. Check if `20_Operations/[target_name]/` exists. If not, create the full directory tree for that target.
2. Initialize a blank `target_profile.md` using the "Intelligence Brief Template" below.

### Phase 2: Tool Execution & Raw Ingestion
1. Search `10_Skills/` for existing workflows matching the task. If none exist, search GitHub or local paths for the appropriate tool (`subfinder`, `whois`, `exiftool`, etc.).
2. Execute the tool. Direct all raw, untouched command outputs into `20_Operations/[target_name]/raw_scans/` with a timestamped filename (e.g., `subfinder_20260613_1530.json`).

### Phase 3: Parsing & Profile Synthesis
1. Parse the raw scan files. Extract critical assets (IP addresses, emails, subdomains, metadata leaks).
2. Update `20_Operations/[target_name]/target_profile.md`. Append the findings cleanly under the appropriate header. Include the source filename of the raw scan for traceability.

### Phase 4: Skill Extraction
1. If a tool chain or regex parsing script worked flawlessly, create a new `SKILL.md` file in `10_Skills/` detailing the exact command flags used, so you can repeat the process effortlessly in future runs.

---

##  Standard Intelligence Brief Template (`target_profile.md`)
Every target folder must maintain this unified format for its master file:

```markdown
# OSINT Intelligence Profile: [Target Name]
- **Initialized:** [Date/Timestamp]
- **Last Updated:** [Date/Timestamp]
- **[[Status]]:** [Active / Suspended / Completed]

## 1. Executive Summary
[High-level overview of the target and key findings]

## 2. Infrastructure & Network Footprint
[IP addresses, subdomains, hosting providers, open ports]
- Data source: `raw_scans/[filename]`

## 3. Passive Identity & Asset Mapping
[Associated emails, usernames, leaked credentials, employee footprints]

## 4. Document & Media Metadata
[Extracted metadata, software versions used, geolocation tags from files]

## 5. Timeline of Investigation Changes
- `[Timestamp]`: Initial scan executed. Subdomains mapped.
````

````

---

##  How to deploy this with your Docker [[setup]]

To force Hermes to use these rules on every single boot, [[update]] your `docker-compose.yml` environment section to pass the system prompt into the agent's core runtime environment:

```yaml
    environment:
      - OPENROUTER_API_KEY=${OPENROUTER_API_KEY}
      - GITHUB_TOKEN=${GITHUB_TOKEN}
      # Instruct the agent to read its boundaries immediately
      - HERMES_SYSTEM_PROMPT_PATH=/workspace/intelligence/00_System/SYSTEM_PROMPT.md
````

Once deployed, you can give Hermes a broad command like: `"Recon the domain example.com"`.

Instead of dumping text into your terminal, Hermes will read its `SOUL.md`, build the `target_example_com` folder structure, run the scans, save the raw outputs in `raw_scans/`, and present you with a beautifully polished `target_profile.md` summary.


Let’s dive into a powerful, unified architecture: **Building an Autonomous, Self-Healing OSINT (Open Source Intelligence) Collection Pipeline.**

Instead of running individual intelligence-gathering tools manually—which quickly clutters your host operating system and leads to chaotic, scattered data—this workflow uses **Docker** to containerize a local **Hermes Agent**. The agent uses fine-grained **GitHub** integrations to dynamically pull new reconnaissance tool modules, runs them sandboxed, and processes the raw intelligence into a strict, machine-readable **File System Organization** layout.

##  1. The Sandbox: Multi-Stage Docker Architecture

When conducting digital reconnaissance, running untrusted or community-maintained OSINT scripts directly on your local machine is a massive security risk. Docker completely isolates this environment.

A hardened `docker-compose.yml` mounts a local directory into the container to act as a permanent data lake while isolating all network dependencies and execution environments:

YAML

```
version: '3.8'

services:
  hermes-osint-core:
    image: nousresearch/hermes-agent:latest
    container_name: hermes_osint_engine
    environment:
      - OPENROUTER_API_KEY=${OPENROUTER_API_KEY}
      - GITHUB_TOKEN=${GITHUB_TOKEN}
    volumes:
      - ./osint_vault:/workspace/osint_vault
      - ./agent_skills:/root/.hermes/skills
    security_opt:
      - no-new-privileges:true
    network_mode: "bridge"
    restart: unless-stopped
```

##  2. The Orchestrator: Hermes Agent & [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[Skill]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] Reflection

**Hermes Agent** functions as the central brain. Unlike simple script-running bots, it utilizes a **reflection loop**. When you hand it an investigative target (like a domain, an email hash, or a username), Hermes doesn't just run a static command.

### The Dynamic Execution Loop:

1. **Discovery:** It analyzes the target type and searches its local filesystem for a matching tool execution workflow.
    
2. **Dynamic Ingestion via GitHub:** If a specific tool is missing (e.g., a niche metadata extractor or a specific subdomain scanner), it uses its authenticated `GITHUB_TOKEN` to parse GitHub via the API, find the most trusted repository, clone the code directly inside the container, and install the dependencies on the fly.
    
3. **[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[Skill]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] Persistence:** Once Hermes successfully chains a series of commands together to get clean data, it writes a custom `[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[SKILL]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]].md` file into the mounted `./agent_skills` volume. The next time it encounters a similar target, it skips discovery and executes instantly from memory.
    

##  3. The Objective: Automated OSINT Pipelines

An automated OSINT workflow focuses on gathering data without tipping off the target. Hermes splits these tasks into defensive, modular phases:

- **Passive Asset Discovery:** Utilizing tools like `subfinder` or `amass` to map out open infrastructure, active DNS records, and third-party hosting without sending packets directly to the target servers.
    
- **Leaked Credential Surface Area:** Ingesting and querying automated endpoints to find breached internal email addresses and password leaks associated with a corporate domain.
    
- **Document Object Metadata Scrapes:** Pulling publicly available documents (PDFs, images) from a target domain and running `exiftool` to scrape hidden internal server paths, creator names, operating system structures, and printer IDs.
    

##  4. The Destination: Strict File System Organization

An investigation fails immediately if the investigator can't find or verify the source of the data. Hermes enforces strict organizational hygiene by operating under a non-negotiable directory topology.

The container maps every raw output and final [[[[report]]]] into a structured, easily parsable vault:

Plaintext

```
 osint_vault/
  00_System/               # Operational guardrails (SOUL.md, system prompts)
  10_Skills/               # Autonomously written SKILL.md tool configurations
  20_Operations/           # Active investigation directories
      target_domain_corp/  # Lowercase, project-specific directories
          master_brief.md  # Main compiled report (auto-updated by Hermes)
          raw_scans/        # Untouched JSON/CSV text logs straight from tools
          media_metadata/   # Extracted images, documents, and EXIF text profiles
          network_graphs/   # Subdomain line-lists and resolved IP maps
```

> **The Separation of Concerns Rule:** Hermes is strictly forbidden from editing files inside `raw_scans/` once written. This ensures perfect data provenance—every metric inside `master_brief.md` must link back to an unaltered timestamped file inside the raw directory so an analyst can verify the raw output manually if needed.

##  5. The Power User Move: GitHub Version Control Sync

By connecting your private GitHub profile to the environment, you remove the risk of local data loss. Hermes can be instructed to monitor the state of your `20_Operations/` directory.

Whenever it finishes an automated recon run, parses the logs, and populates a new profile, it can autonomously execute local git commands within the container—staging the changes, drafting a precise markdown commit message detailing the tools used, and pushing the encrypted delta [[update]] back to a private repository. This gives you a continuous, auditable history of the entire intelligence-gathering pipeline.

Let’s dive into a powerful, cutting-edge architecture: **Building an Autonomous, Self-Healing OSINT (Open Source Intelligence) Collection Pipeline.**

When doing digital footprinting, asset tracking, or network reconnaissance, running community-maintained script tools directly on your host operating system is a massive security risk. It also quickly leads to chaotic, scattered data files.

By containerizing a local **Hermes Agent** using **Docker**, pairing it with **GitHub** to ingest tools dynamically, and enforcing a strict **File System Organization** [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[template]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]], you can create a secure environment where an AI agent safely runs investigations and builds its own procedural memory over time.

##  1. The Sandbox: Hardened Docker Infrastructure

To ensure your host system remains entirely isolated from target network traffic, the execution engine runs inside a containerized sandbox.

The `docker-compose.yml` mounts two specific directories from your host: one for your long-term intelligence data lake and another for the agent's procedural memory.

YAML

```
version: '3.8'

services:
  hermes-osint-core:
    image: nousresearch/hermes-agent:latest
    container_name: hermes_osint_engine
    environment:
      - OPENROUTER_API_KEY=${OPENROUTER_API_KEY}
      - GITHUB_TOKEN=${GITHUB_TOKEN}
    volumes:
      - ./osint_vault:/workspace/osint_vault
      - ./agent_skills:/root/.hermes/skills
    security_opt:
      - no-new-privileges:true
    network_mode: "bridge"
    restart: unless-stopped
```

##  2. The Brains: Hermes Agent & The Closed Learning Loop

Developed by Nous Research, the **Hermes Agent** doesn't just run static scripts. Its defining architectural feature is an autonomous **closed learning loop**.

When you hand Hermes an investigative target (like a corporate domain, an MX record, or an email hash), it initiates an execution cycle:

1. **Discovery:** It parses the request and searches its local filesystem for existing analytical patterns.
    
2. **Dynamic Ingestion:** If it needs a specific utility it doesn't currently have (such as a modern subdomain mapper or an EXIF metadata extractor), it uses your authenticated `GITHUB_TOKEN` to query the GitHub API, locate the official repository, clone it inside the container sandbox, and build the tool on the fly.
    
3. **[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[Skill]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] Reflection:** When Hermes chains commands together and successfully extracts valid target data, it runs an internal evaluation. It abstracts the successful syntax and automatically writes a `[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[SKILL]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]].md` file into your local `./agent_skills` volume. On subsequent runs, it skips discovery and executes directly from its newly acquired procedural knowledge.
    

##  3. The Objective: Automated OSINT [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[Workflows]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

With the engine running, Hermes automates passive and semi-passive reconnaissance phases without manual intervention:

- **Passive Infrastructure Mapping:** Using utilities like `subfinder` or `amass` to map target domains, active subdomains, and DNS records purely from public, third-party datasets.
    
- **Leaked Asset Auditing:** Interfacing with credential leak indices and public breach archives to identify exposed corporate email addresses and potential credential compromises.
    
- **Document Architecture Scrapes:** Systematically scraping public-facing attachments (PDFs, DOCX, images) from the target footprint and running `exiftool` to parse author metadata, internal software versions, server directory strings, and geolocation tags.
    

##  4. Data Provenance: File System Organization

An investigation fails if data sources cannot be verified or tracked. To maintain strict data integrity, Hermes organizes the mounted `osint_vault` using a clean, non-negotiable topology:

Plaintext

```
 osint_vault/
  00_System/               # Operational baselines (SOUL.md, global system prompts)
  10_Skills/               # Autonomously written SKILL.md tool definitions
  20_Operations/           # Active reconnaissance targets
      target_alphacorp/    # Unified alphanumeric, lowercase target directory
          master_brief.md  # Main compiled target intelligence report
          raw_scans/        # Untouched JSON/TXT tool execution output logs
          media_metadata/   # Extracted binary files and scraped text summaries
          network_graphs/   # Resolved IP list grids and DNS routing structures
```

> **The Immutable Raw Log Rule:** Hermes is structurally restricted from modifying files inside `raw_scans/` once they are written. Every conclusion compiled in `master_brief.md` must explicitly cite a raw timestamped file inside the directory. This ensures clear data provenance, allowing a human analyst to trace any metric back to its original raw source.

##  5. Version Control: Automated GitHub Syncing

To prevent local data loss and maintain a clear audit log of your operations, you can leverage the agent's Git capabilities.

When a multi-tool intelligence run concludes, Hermes is instructed to run local git commands inside the container workspace. It automatically stages the updated target folder, writes a structured markdown commit message identifying the tools utilized and metrics updated, and pushes the encrypted delta changes back to a private GitHub repository. Your entire collection workspace updates silently in the background, available for [[review]] across multiple self-hosted instances.



Today, we are flipping the script completely. Instead of using your five platforms to _gather_ intelligence, we are exploring a highly strategic counter-intelligence topic: **Anti-OSINT Decoy Environments (Honey-Volumes).**

When an adversary or an automated scanner performs reconnaissance on your infrastructure, they look for predictable file layouts, exposed Docker sockets, and active GitHub repositories to map your surface area. Anti-OSINT is the practice of building **active decoys** to intentionally misdirect, slow down, and log the tools used by an attacker.

##  1. The Trap: Dockerized Canary Volumes

Instead of hosting real data, we use Docker to deploy a completely isolated, vulnerable-looking container. We intentionally expose this container to a local or internal network segment to act as a tripwire.

A `docker-compose.yml` for an active decoy environment maps an explicitly fake, highly enticing file system structure into a sandboxed space:

YAML

```
version: '3.8'

services:
  decoy-workspace:
    image: alpine:latest
    container_name: production_core_backup
    command: /bin/sh -c "while true; do sleep 3600; done"
    volumes:
      - ./decoy_vault:/workspace/secure_vault:ro # Mount the trap filesystem
    logging:
      driver: "json-file"
      options:
        max-size: "10m"
```

##  2. The Bait: Deceptive File System Organization

An attacker or an automated script running an initial compromise will immediately execute commands like `ls -la` or search for configuration files. If the directory looks empty or generic, they leave. If it looks like a high-value internal project, they stay—and trigger your alarms.

We architect a highly realistic, fake workspace layout designed to look like an active AI development repository:

Plaintext

```
 decoy_vault/
  00_Archive/
  10_Production_Configs/
     openrouter_key.bak      # A fake, disabled API key wrapped in a Canary Token
     db_connection.json.local
  20_Hermes_Agent_Skills/
      SKILL_database_sync.md  # Intentionally messy, realistic documentation
      backup_manifest.git
```

> **The Canary Token Mechanism:** The fake `openrouter_key.bak` file doesn't contain a real key. Instead, it contains a unique string generated via a canary tracking service. The moment an attacker copies that string and attempts to test or execute it against an external API, the tracking server intercepts the request and instantly sends you an alert with the attacker's real public IP address.

##  3. The Actor: Hermes Agent as a Ghost Simulator

Static files are easily spotted by advanced OSINT analysts because they lack changing metadata or active logs. To make the trap completely convincing, we use a local **Hermes Agent** inside a separate administrative container.

Hermes is programmed with a specific system prompt to act as a **Ghost Simulator**:

- **Cron-Driven Activity:** Every hour, Hermes wakes up, execs into the decoy Docker container, and runs harmless terminal commands (e.g., updating a fake markdown file, creating temporary build directories, or modifying timestamps).
    
- **Simulated Git History:** Hermes writes realistic, automated commit messages to simulate a busy developer working in the background.
    

To anyone sniffing the container's bash history or file modification times, the system appears entirely alive and active.

##  4. The Audit: OSINT [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[Workflows]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] for Self-Verification

To ensure your decoy environment is actually convincing, you must turn your own OSINT tools against it. This is a defensive validation workflow:

1. **Metadata Auditing:** Run `exiftool` against the images and documents Hermes generates inside the decoy volume. Ensure they don't accidentally leak your real host machine's username, timezone, or operating system strings.
    
2. **Leak Testing:** Use tools like `trufflehog` or `git-leaks` to scan your decoy directory. If your automated testing tools fail to flag your fake API keys, your bait isn't enticing enough, and you need to rewrite the decoy files to look more convincing.
    

##  5. The Infrastructure: GitHub Token Monitoring

The final layer connects back to **GitHub**. Attackers frequently scrape GitHub for accidentally committed configuration files, leaked tokens, or structural blueprints.

By pushing a dedicated, public "decoy" repository to GitHub that mirrors your fake Docker file system organization—and intentionally leaving a low-privilege, heavily monitored GitHub Personal Access Token (`GITHUB_TOKEN`) inside a dummy script—you create an early-warning radar system. The absolute second that token is used or queried from anywhere in the world, your monitoring stack detects the unauthorized API call, giving you advanced warning that an adversary is actively profiling your digital footprint.


## OSINT Automation with Hermes, Docker, and GitHub

If you want to track a digital footprint, monitor infrastructure, or gather public intelligence efficiently, you don't do it manually anymore. Modern **OSINT (Open-Source Intelligence)** relies on automated pipelines.

Here is how you can link an advanced AI agent, containerized OSINT tools, and version-controlled file structures into a single, automated intelligence workflow.

### 1. The Core Infrastructure: Docker

Instead of cluttering your local environment with dependencies, python scripts, and database drivers for various OSINT tools, you containerize them.

- **The Blueprint (`docker-compose.yml`):** You can spin up an entire intelligence environment—combining tools like **Spiderfoot** (OSINT automation), **Maltego** server instances, or **Amass** (subdomain enumeration)—with a single command.
    
- **The Benefit:** Complete isolation. If an OSINT script gets rate-limited, corrupted, or needs specific legacy dependencies, it won't touch your host system.
    

YAML

```
version: '3.8'
services:
  spiderfoot:
    image: spiderfoot/spiderfoot:latest
    ports:
      - "5001:5001"
    volumes:
      - ./osint_vault/data:/home/spiderfoot/.spiderfoot
```

### 2. The Brain: Hermes Agent

An AI agent built on a model like **Hermes** isn't just a chatbot; it excels at function-calling and unstructured data extraction.

- **The Role:** You give the agent an objective (e.g., _"Find all public-facing assets associated with domain X"_).
    
- **The Execution:** The agent interacts with your local system via command-line tools or APIs. It can automatically write the configurations, trigger the Docker containers, monitor execution, and read the raw JSON or CSV output.
    

### 3. Rigorous File System Organization

An OSINT investigation is only as good as its documentation. When pipelines automate data collection, the output must be strictly organized to avoid chaos. A clean, machine-readable directory structure is vital:

Plaintext

```
 osint_vault/
  targets/
     target_alpha/
         reconnaissance/
           subdomains.txt
           ip_blocks.csv
         credentials/
         metadata/
  tools/
     docker-compose.yml
  intelligence_reports/
     target_alpha_summary.md
```

- **Local-First Markdown:** Storing summaries in highly structured, interconnected Markdown files allows your AI agent (and you) to parse relationships, cross-reference data points, and build a localized semantic knowledge graph of your findings.
    

### 4. The Version Control & Pipeline Hub: GitHub

GitHub acts as the central repository for your custom agent [[[[prompts]]]], automation scripts, and deployment configurations.

- **GitHub Gists:** Perfect for quickly storing and sharing modular, single-file OSINT scraper scripts or custom tool configurations.
    
- **GitHub Actions:** You can trigger OSINT [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[workflows]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] on a schedule (e.g., cron jobs) directly within GitHub’s infrastructure. For instance, run a weekly subdomain scan on a specific target, diff the results against the previous week, and commit the changes back to your repository.
    

### How the Full Workflow Connects

1. You commit a target list to a private **GitHub** repo.
    
2. A **Hermes Agent** detects the [[update]], spins up a **Docker** container running an OSINT tool, and passes the targets.
    
3. The tool dumps raw data into a strictly structured **File System**.
    
4. The agent parses the logs, updates your local **Markdown files**, and flags anomalous changes.
    
Today, we’re diving into a modern powerhouse combination: **Autonomous, Ephemeral OSINT Intel Engines.** Instead of manual OSINT (Open Source Intelligence) investigations—which usually involve opening 50 browser tabs, risking your host IP getting flagged, and drowning in unorganized markdown files—we are going to weaponize an AI agent to do it for us inside an isolated sandbox, tracking the whole thing on Git.

Here is your crash course on wielding this [[setup]] to build a continuous intelligence-gathering machine.

##  The Stack Breakdown

- **Hermes Agent:** An open-source autonomous AI agent by Nous Research. Unlike standard stateless chatbots, Hermes has a built-in learning loop. It executes shell commands, runs web-browsing automation, saves persistent memory, and literally invents its own "[[skills]]" (reusable procedural scripts) the more you use it.
    
- **Docker:** Used as the isolated backend sandbox. Hermes runs natively on your host but executes its tool calls inside a stateless, persistent Docker container. If a target site tries to run malicious canvas fingerprinting or track you, they hit a throwaway Linux container.
    
- **OSINT [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[Workflows]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]:** Targeted data collection (scraping, public registries, code dorks, domain mapping) without manual intervention.
    
- **GitHub:** Version control acting as an automated "Intel [[[[Ledger]]]]," tracking every mutation of our gathered data.
    
- **File System Organization:** A clean, highly machine-readable workspace architecture designed specifically so an AI can traverse it with zero context bloat.
    

##  The Blueprint: The AI-Ready File System

To make an autonomous agent efficient, your directory layout must be pristine. Here is the perfect architecture to spin up inside your project folder:

Plaintext

```
intel-engine/
 .github/workflows/         # Auto-commit workflows
    push-report.yml
 config/
    SOUL.md                # Defines Hermes' persona & investigation rules
    targets.json           # Active entities/domains to investigate
 workspace/                 # The active Docker mount directory
    archive/               # Raw HTML / raw data dumps
    active_leads/          # Current JSON / markdown profiles
    INTEL_LEDGER.md        # The master summary index
 .hermes/                   # Persistent agent skills and memory state
```

>  **AI Edge:** Keeping `SOUL.md` at the root allows you to inject system-level directives. If you tell Hermes in its `SOUL.md` to _"Always verify cross-linked footprints and format outputs using standard markdown tables,"_ it adopts that strategy across the entire run.

##  Setting Up the Engine

You don’t need to spend hours configuring complex infrastructure; you just need to initiate the environment and let Hermes take the wheel.

### 1. Fire up the Isolated Sandbox

Configure Hermes to route all its tool execution through Docker. Initialize the configuration directory with the official stateless image:

Bash

```
mkdir -p ~/.hermes
docker run -it --rm -v ~/.hermes:/opt/data nousresearch/hermes-agent setup
```

Once configured with your API endpoints, run the gateway as a background daemon:

Bash

```
docker run -d \
  --name hermes-osint-gateway \
  --restart unless-stopped \
  -v ~/.hermes:/opt/data \
  -p 8642:8642 \
  nousresearch/hermes-agent gateway run
```

### 2. Delegating the Intelligence Gathering

Now, instead of writing python scrapers yourself, you hand the operational objectives to Hermes via the CLI or its TUI (Terminal User Interface).

You can pass it a multi-layered task like this:

Bash

```
hermes run "Read config/targets.json. For each domain, execute an OSINT workflow: run passive DNS lookups, check for leaked GitHub repositories, extract key executive names via the Tool Gateway browser, and append the findings to workspace/active_leads/ using neat markdown structures."
```

### 3. The Self-Improving Loop

As Hermes runs through the targets, it encounters errors (like a site changing its selectors or anti-bot walls).

- Because it has a **closed learning loop**, it self-corrects the script in real time.
    
- Once it successfully bypasses a blocker or optimizes a search query, it saves that process to its own local procedural directory (`~/.hermes/[[skills]]/`).
    
- The next time you give it a target, it invokes its newly minted [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[skill]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] automatically.
    

### 4. Shipping to the Intel [[[[Ledger]]]]

Because the Docker container has the host's `docker-cli` or local workspace mapped, you can instruct Hermes to handle its own version control:

Bash

```
hermes run "Run a git status on the workspace directory. Commit any new intelligence updates with a timestamped message, and push it up to the main branch on GitHub."
```

##  Why This Matters

By orchestrating Hermes inside Docker, you bypass the manual learning curve of modern infrastructure pipelines and command line utilities. You aren't wasting time configuring network proxies or handling broken Python packages on your local machine; you are directing an autonomous operator that adapts, builds its own tools, and organizes its findings perfectly for your [[review]].


Today, we’re diving into a modern powerhouse combination: **Autonomous, Ephemeral OSINT Intel Engines.** Instead of manual OSINT (Open Source Intelligence) investigations—which usually involve opening 50 browser tabs, risking your host IP getting flagged, and drowning in unorganized markdown files—we are going to weaponize an AI agent to do it for us inside an isolated sandbox, tracking the whole thing on Git.

Here is your crash course on wielding this [[setup]] to build a continuous intelligence-gathering machine.

##  The Stack Breakdown

- **Hermes Agent:** An open-source autonomous AI agent by Nous Research. Unlike standard stateless chatbots, Hermes has a built-in learning loop. It executes shell commands, runs web-browsing automation, saves persistent memory, and literally invents its own "[[skills]]" (reusable procedural scripts) the more you use it.
    
- **Docker:** Used as the isolated backend sandbox. Hermes runs natively on your host but executes its tool calls inside a stateless, persistent Docker container. If a target site tries to run malicious canvas fingerprinting or track you, they hit a throwaway Linux container.
    
- **OSINT [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[Workflows]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]:** Targeted data collection (scraping, public registries, code dorks, domain mapping) without manual intervention.
    
- **GitHub:** Version control acting as an automated "Intel [[[[Ledger]]]]," tracking every mutation of our gathered data.
    
- **File System Organization:** A clean, highly machine-readable workspace architecture designed specifically so an AI can traverse it with zero context bloat.
    

##  The Blueprint: The AI-Ready File System

To make an autonomous agent efficient, your directory layout must be pristine. Here is the perfect architecture to spin up inside your project folder:

Plaintext

```
intel-engine/
 .github/workflows/         # Auto-commit workflows
    push-report.yml
 config/
    SOUL.md                # Defines Hermes' persona & investigation rules
    targets.json           # Active entities/domains to investigate
 workspace/                 # The active Docker mount directory
    archive/               # Raw HTML / raw data dumps
    active_leads/          # Current JSON / markdown profiles
    INTEL_LEDGER.md        # The master summary index
 .hermes/                   # Persistent agent skills and memory state
```

>  **AI Edge:** Keeping `SOUL.md` at the root allows you to inject system-level directives. If you tell Hermes in its `SOUL.md` to _"Always verify cross-linked footprints and format outputs using standard markdown tables,"_ it adopts that strategy across the entire run.

##  Setting Up the Engine

You don’t need to spend hours configuring complex infrastructure; you just need to initiate the environment and let Hermes take the wheel.

### 1. Fire up the Isolated Sandbox

Configure Hermes to route all its tool execution through Docker. Initialize the configuration directory with the official stateless image:

Bash

```
mkdir -p ~/.hermes
docker run -it --rm -v ~/.hermes:/opt/data nousresearch/hermes-agent setup
```

Once configured with your API endpoints, run the gateway as a background daemon:

Bash

```
docker run -d \
  --name hermes-osint-gateway \
  --restart unless-stopped \
  -v ~/.hermes:/opt/data \
  -p 8642:8642 \
  nousresearch/hermes-agent gateway run
```

### 2. Delegating the Intelligence Gathering

Now, instead of writing python scrapers yourself, you hand the operational objectives to Hermes via the CLI or its TUI (Terminal User Interface).

You can pass it a multi-layered task like this:

Bash

```
hermes run "Read config/targets.json. For each domain, execute an OSINT workflow: run passive DNS lookups, check for leaked GitHub repositories, extract key executive names via the Tool Gateway browser, and append the findings to workspace/active_leads/ using neat markdown structures."
```

### 3. The Self-Improving Loop

As Hermes runs through the targets, it encounters errors (like a site changing its selectors or anti-bot walls).

- Because it has a **closed learning loop**, it self-corrects the script in real time.
    
- Once it successfully bypasses a blocker or optimizes a search query, it saves that process to its own local procedural directory (`~/.hermes/[[skills]]/`).
    
- The next time you give it a target, it invokes its newly minted [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[skill]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] automatically.
    

### 4. Shipping to the Intel [[[[Ledger]]]]

Because the Docker container has the host's `docker-cli` or local workspace mapped, you can instruct Hermes to handle its own version control:

Bash

```
hermes run "Run a git status on the workspace directory. Commit any new intelligence updates with a timestamped message, and push it up to the main branch on GitHub."
```

##  Why This Matters

By orchestrating Hermes inside Docker, you bypass the manual learning curve of modern infrastructure pipelines and command line utilities. You aren't wasting time configuring network proxies or handling broken Python packages on your local machine; you are directing an autonomous operator that adapts, builds its own tools, and organizes its findings perfectly for your [[review]].


nstead of treating these tools as separate chores, you can orchestrate them into an automated intelligence pipeline. You can use **Hermes Agent** (the massive self-improving agent framework released by Nous Research) running inside a hardened **Docker** container, executing custom **OSINT** [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[workflows]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]], and organizing the extracted target data cleanly into your structured **local file system**, with everything version-controlled on **GitHub**.

Here is your crash course on how these components lock together to give you an advanced intelligence advantage.

## 1. The Core Infrastructure: Hardened Docker Sandbox

When running OSINT tools (like `sherlock` for username tracking, `theHarvester` for email recon, or custom python scrapers), you never run them directly on your bare-metal system. OSINT scripts often rely on heavy, conflicting dependencies and external connections.

By deploying **Hermes Agent** inside an isolated Docker container, you create a sandboxed execution layer.

- **Why it matters:** Hermes can invoke its `execute_code` tool safely. If it pulls down a malicious or broken script during public intelligence gathering, the blast radius is entirely contained to the container.
    
- **The [[setup]]:** You spin up a Debian-based Docker image containing python, git, and the Hermes runtime, passing only specific local data directories as mounted volumes.
    

## 2. The Orchestrator: Hermes Agent & Self-Evolving [[Skills]]

Unlike static terminal scripts or rigid chatbots, **Hermes Agent** is fully autonomous and persistent. It lives wherever you deploy it (a local server, a VPS, or a Docker container) and stays active 24/7.

- **Persistent Memory:** It maintains a global `SOUL.md` file and memory context, meaning it learns your specific target parameters and doesn’t forget them across sessions.
    
- **Automated [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[Skill]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] Creation (`agentskills.io`):** This is the game-changer. When you tell Hermes to run a complex OSINT workflow—for example, cross-referencing a domain's passive DNS records, scraping matching GitHub profiles, and running an MX record lookup—Hermes collapses that multi-step pipeline into a reusable script. It automatically writes and saves a new, optimized "[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[Skill]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]" document (`[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[SKILL]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]].md`). The next time you give it a target, it doesn't struggle; it instantly fires the [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[skill]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] it built.
    

## 3. The Execution: Smart OSINT [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[Workflows]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

With Hermes handling the orchestration inside Docker, you can point it at automated public intelligence [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[workflows]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]:

- **Passive Reconnaissance:** Hermes uses built-in tools (like web search and page extraction via the Nous Portal or OpenRouter backends) to map a target's digital footprint without ever interacting with the target directly.
    
- **Automated Triage:** Instead of you manually reading hundreds of leaked pastebins or public data endpoints, Hermes spawns **isolated sub-[[agents]]** in parallel. One sub-agent scans public repositories, another analyzes domain configurations, and they [[[[report]]]] back to the master agent with zero added context cost to your primary token budget.
    

## 4. System Architecture: File System Organization

An intelligence pipeline is useless if the data is a scattered mess. You direct Hermes to enforce a strict, predictable directory structure within your mounted volume (which can sync directly into a local knowledge base or markdown-based storage layout):

Plaintext

```
 Intel_Hub/
  01_Targets/
     [Target_Name]/
         target_profile.md   <-- Deep-dive synthesis
         raw_scans/          <-- JSON payloads from tools
         networks/           <-- Domain/IP footprints
  02_Hermes_System/
     SOUL.md                 <-- Agent personality & rules
     custom_skills/          <-- Auto-generated SKILL.md files
  03_Automation/
      cron_recon.json         <-- Scheduled monitoring configurations
```

Every time a target is updated, Hermes uses its built-in cron scheduler to run a nightly delta audit, appending changes directly to `target_profile.md` with natural language summaries.

## 5. The State Machine: GitHub [[Integration]]

To make this workflow bulletproof, you integrate the workspace with **GitHub** using fine-grained personal access tokens scoped strictly to a private repository.

- **Automated Commit Triggers:** Whenever Hermes finishes a scheduled nightly OSINT sweep and modifies your target files, it can automatically execute a git routine: stage changes, commit the diff, and push it to your private repository.
    
- **Change Tracking:** This gives you a flawless time-machine [[[[ledger]]]] of your intelligence data. You can instantly see exactly when an IP address changed or when a new public profile was associated with a target, complete with clear, agent-written commit messages detailing the discoveries.
    

### Wielding the Architecture

By linking these platforms together, you don't need to be an expert in OSINT scripting or a veteran system administrator. You simply command the orchestration:

> _"Hermes, set up a daily cron job to run a passive footprint audit on [Target] inside the Docker container. Log the results into our Target folder structure, build a [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[skill]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] if you optimize the script, and commit the diff to GitHub."_

The AI manages the complexity; you simply leverage the asset.