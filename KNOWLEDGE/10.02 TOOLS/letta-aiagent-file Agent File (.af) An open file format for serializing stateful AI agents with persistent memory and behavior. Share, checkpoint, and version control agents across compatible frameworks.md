---
aliases: []
tags:
  - type
  - description
  - string
  - file
---
**Agent File (`.af`)** is an open standard file format for serializing [stateful AI agents](https://www.letta.com/blog/stateful-agents). Originally designed for the [Letta](https://letta.com) framework, Agent File provides a portable way to share [[agents]] with persistent memory and behavior.

Agent Files package all components of a stateful agent: system [[[[prompts]]]], editable memory (personality and user information), tool configurations (code and schemas), and LLM settings. By standardizing these elements in a single format, Agent File enables seamless transfer between compatible frameworks, while allowing for easy checkpointing and version control of agent state.

## Browsing AgentsEach agent in this directory has been trained and tuned for specific purposes. You can explore them at:

```
agents/
 @{owner}/
     {agent-name}/
         {agent-name}.af    # The agent file
         {agent-name}.webp  # Avatar image
```

### Featured [[Agents]]| Agent | Author | Description |
| --- | --- | --- |
| [Loop](/letta-ai/agent-file/blob/main/agents/@letta-ai/loop) | @letta-ai | A ChatGPT alternative focused on memory. Direct, dry, remembers everything. |

## Deploying an AgentYou can deploy any agent file to your own Letta server using the ADE, REST API, or SDK.

### Using the Agent Development Environment (ADE)1. Download the `.af` file from this repository
2. Open [Letta ADE](https://app.letta.com)
3. Click "Import Agent" and select the file

 [![Importing Demo](/letta-ai/agent-file/raw/main/assets/import_demo.gif)](/letta-ai/[[agent-file]]/blob/main/assets/import_demo.gif) ![Importing Demo](https://github.com/letta-ai/agent-file/raw/main/assets/import_demo.gif)### Using the Python SDK\# Install SDK with \`pip install letta-client>=1.0.0\`
from letta\_client import Letta

\# Assuming a Letta Server is running at http://localhost:8283
client \= Letta(base\_url\="http://localhost:8283")

\# Import your .af file from any location
agent\_state \= client.[[agents]].import\_file(file\=open("/path/to/agent/file.af", "rb"))

print(f"Imported agent: {agent\_state.id}")

### Using the TypeScript SDK// Install SDK with \`npm install @letta-ai/letta-client@^1.0.0\`
import { LettaClient } from '@letta-ai/letta-client'
import { readFileSync } from 'fs';
import { Blob } from 'buffer';

// Assuming a Letta Server is running at http://localhost:8283
const client \= new LettaClient({ baseUrl: "http://localhost:8283" });

// Import your .af file from any location
const file \= new Blob(\[readFileSync('/path/to/agent/file.af')\])
const agentState \= await client.agents.importFile(file, {})

console.log(\`Imported agent: ${agentState.id}\`);

### Using cURL# Assuming a Letta Server is running at http://localhost:8283
curl -X POST "http://localhost:8283/v1/agents/import" -F "file=/path/to/agent/file.af"

## Contributing an AgentHave an agent you've trained and want to share? We'd love to include it.

### Quick Start1. **Fork this repository**
2. **Create your agent directory:**
	```
	agents/@{your-github-handle}/{agent-name}/
	```
3. **Export your agent** from Letta using the ADE or via the API (see [Exporting Agents](#exporting-agents) below)
4. **Add required files:**
	- `{agent-name}.af` — Your exported agent file
		- `{agent-name}.webp` — Square avatar image
5. **Submit a pull request**

See [agents/CONTRIBUTING.md](/letta-ai/agent-file/blob/main/agents/CONTRIBUTING.md) for detailed guidelines.

### Exporting AgentsYou can export your own `.af` files to share (or contribute!) by selecting "Export Agent" in the ADE:

 [![Exporting Demo](/letta-ai/agent-file/raw/main/assets/export_demo.gif)](/letta-ai/[[agent-file]]/blob/main/assets/export_demo.gif) ![Exporting Demo](https://github.com/letta-ai/agent-file/raw/main/assets/export_demo.gif)#### cURL# Assuming a Letta Server is running at http://localhost:8283
curl -X GET http://localhost:8283/v1/[[agents]]/{AGENT\_ID}/export

#### Node.js (TypeScript)// Install SDK with \`npm install @letta-ai/letta-client@^1.0.0\`
import { LettaClient } from '@letta-ai/letta-client'

// Assuming a Letta Server is running at http://localhost:8283
const client \= new LettaClient({ baseUrl: "http://localhost:8283" });

// Export your agent into a serialized schema object (which you can write to a file)
const schema \= await client.[[agents]].exportFile("<AGENT\_ID>");

#### Python\# Install SDK with \`pip install letta-client>=1.0.0\`
from letta\_client import Letta

\# Assuming a Letta Server is running at http://localhost:8283
client \= Letta(base\_url\="http://localhost:8283")

\# Export your agent into a serialized schema object (which you can write to a file)
schema \= client.[[agents]].export\_file(agent\_id\="<AGENT\_ID>")

## FAQ### Why Agent File?The AI ecosystem is witnessing rapid growth in agent development, with each framework implementing its own storage mechanisms. Agent File addresses the need for a standard that enables:

-  **Portability**: Move [[agents]] between systems or deploy them to new environments
-  **Collaboration**: Share your [[agents]] with other developers and the community
-  **Preservation**: Archive agent configurations to preserve your work
-  **Versioning**: Track changes to [[agents]] over time through a standardized format

### What state does `.af` include?A `.af` file contains all the state required to re-create the exact same agent:

| Component | Description |
| --- | --- |
| Model configuration | Context window limit, model name, embedding model name |
| Message history | Complete chat history with `in_context` field indicating if a message is in the current context window |
| System prompt | Initial instructions that define the agent's behavior |
| Memory blocks | In-context memory segments for personality, user info, etc. |
| Tool rules | Definitions of how tools should be sequenced or constrained |
| Environment variables | Configuration values for tool execution |
| Tools | Complete tool definitions including source code and JSON schema |

We currently do not support Passages (the units of Archival Memory in Letta/MemGPT), which have support for them on the roadmap.

You can view the entire schema of .af in the Letta repository [here](https://github.com/letta-ai/letta/blob/main/letta/serialize_schemas/pydantic_agent_schema.py).

### Does `.af` work with frameworks other than Letta?Theoretically, other frameworks could also load in `.af` files if they convert the state into their own representations. Some concepts, such as context window "blocks" which can be edited or shared between [[agents]], are not implemented in other frameworks, so may need to be adapted per-framework.

### How can I add Agent File support to my framework?Adding `.af` support requires mapping Agent File components (agent state) to your framework's equivalent featureset. The main steps include parsing the schema, translating [[[[prompts]]]]/tools/memory, and implementing import/export functionality.

For implementation details or to contribute to Agent File, join our [Discord community](https://discord.gg/letta) or check the [Letta GitHub repository](https://github.com/letta-ai/letta).

### How does `.af` handle secrets?[[Agents]] have associated secrets for tool execution in Letta (see [docs](https://docs.letta.com/guides/agents/tool-variables)). When you export [[agents]] with secrets, the secrets are set to `null`.

## Why Share Trained [[Agents]]?Training an agent takes time. You teach it your knowledge embedded in these [[agents]]

Think of preferences, correct its mistakes, build up its context. That investment has value.

By sharing trained [[agents]]:

- **Users** get [[agents]] that already know how to be helpful in specific domains
- **Creators** can distribute [[agents]] they've refined over weeks or months
- **Everyone** benefits from the collective it like sharing a well-configured tool — except this tool remembers how to use itself.

## Local Development# Install dependencies
npm install

# Run the development server
npm run dev

# Build for production (syncs [[agents]] automatically)
npm run build

The web frontend displays all [[agents]] in the `[[agents]]/` directory. During build, agent files are synced to `public/[[agents]]/` for static serving.

## Roadmap- [ ] Support MCP servers/configs
- [ ] Support archival memory passages
- [ ] Support data sources (i.e. files)
- [ ] Migration support between schema changes
- [ ] Multi-agent `.af` files
- [ ] Converters between frameworks