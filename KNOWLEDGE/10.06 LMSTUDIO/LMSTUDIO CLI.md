---
aliases: []
tags:
  - agent
  - verifies
  - matrix
  - room
---

Yes, there are several ways to run a CLI agent or power external tools using **LM Studio**. Since LM Studio provides an OpenAI-compatible server, almost any tool designed for OpenAI can be "re-wired" to use your local models.

### 1. The Official `lms` CLI

LM Studio comes with its own native CLI called **`lms`**. While primarily for management, it allows you to control the server and load models from your terminal.

- **Installation:** `npx lmstudio install-cli`
    
- **Key Commands:**
    
    - `lms server start` — Launches the local inference server.
        
    - `lms load <model-name>` — Loads a specific model into memory.
        
    - `lms [[status]]` — Checks what is currently running and which model is active.
        

### 2. Autonomous CLI [[Agents]] (Powered by LM Studio)

You can point popular autonomous [[agents]] to LM Studio by changing their `base_url` to `http://localhost:1234/v1`.

|**Tool**|**Type**|**Why it works with LM Studio**|
|---|---|---|
|**Aider**|CLI Code Editor|One of the best CLI-based coding [[agents]]. Use: `aider --openai-api-base http://localhost:1234/v1`|
|**Open Interpreter**|CLI Agent|Allows the LLM to run code on your computer. Run: `interpreter --api_base http://localhost:1234/v1`|
|**Cline (VS Code)**|Dev Agent|Though an extension, it operates like an agent. Select "LM Studio" as the provider in settings.|
|**ShellGPT**|CLI Utility|Use it to generate shell commands or chat in the terminal. Set the `API_BASE` in the config file.|

### 3. "Beledarian’s LM Studio Tools" (Plugin)

There is a specific project called **Beledarian’s LM Studio Tools** designed to give LM Studio-hosted models "agency." It acts as a bridge, allowing the local model to:

- Read/write files on your local system.
    
- Execute Python or JavaScript code.
    
- Search the web via CLI tools.
    
- Manage Git repositories.
    

### 4. Headless Deployment with `llmster`

If you want to run the LM Studio core on a server or CI/CD environment without the GUI, they recently introduced **llmster**. It is effectively the LM Studio engine optimized for headless/CLI environments.

> **Pro Tip:** For the best "agentic" experience (where the tool actually performs actions), use models specifically trained for **[[Tool Use]]** or **Function Calling**, such as **Qwen 2.5 Coder** or **Llama 3.1**, which LM Studio supports natively.