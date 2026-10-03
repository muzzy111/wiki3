---
aliases: []
tags:
  - agent
  - verifies
  - matrix
  - room
---
The SDK provides you a set of programmatic tools to interact with LLMs, [[embeddings]] models, and agentic flows.

## Installing the SDK

`lmstudio-js` is available as an npm package. You can install it using npm, yarn, or pnpm.

```
npm install @lmstudio/sdk --save
```

For the source code and open source contribution, visit [lmstudio-js](https://github.com/lmstudio-ai/lmstudio-js) on GitHub.

## Features

- Use LLMs to [respond in chats](https://lmstudio.ai/docs/typescript/llm-prediction/chat-completion) or predict [text completions](https://lmstudio.ai/docs/typescript/llm-prediction/completion)
- Define functions as tools, and turn LLMs into [autonomous agents](https://lmstudio.ai/docs/typescript/agent/act) that run completely locally
- [Load](https://lmstudio.ai/docs/typescript/manage-models/loading), [configure](https://lmstudio.ai/docs/typescript/llm-prediction/parameters), and [unload](https://lmstudio.ai/docs/typescript/manage-models/loading) models from memory
- Supports for both browser and any Node-compatible environments
- Generate [[embeddings]] for text, and more!

## Quick Example: Chat with a Llama Model

```
import { LMStudioClient } from "@lmstudio/sdk";
const client = new LMStudioClient();

const model = await client.llm.model("qwen/qwen3-4b-2507");
const result = await model.respond("What is the meaning of life?");

console.info(result.content);
```

### Getting Local Models

The above code requires the [qwen3-4b-2507](https://lmstudio.ai/models/qwen/qwen3-4b-2507). If you don't have the model, run the following command in the terminal to download it.

```
lms get qwen/qwen3-4b-2507
```

Read more about `lms get` in LM Studio's CLI [here](https://lmstudio.ai/docs/cli/get).