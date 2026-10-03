---
aliases: []
tags:
  - agent
  - verifies
  - matrix
  - room
---
##### Requires LM Studio 0.4.0 or newer.

LM Studio supports API Tokens for authentication, providing a secure and convenient way to access the [[LM Studio API]].

By default, the [[LM Studio API]] runs **without enforcing authentication**. For production or shared environments, enable API Token authentication for secure access.

Info

## Providing the API Token

There are two ways to provide the API Token when creating an instance of `LMStudioClient`:

1. **Environment Variable (Recommended)**: Set the `LM_API_TOKEN` environment variable, and the SDK will automatically read it.
2. **Function Argument**: Pass the token directly as the `apiToken` parameter in the constructor.

```
// Set environment variables in your terminal before running the code:
// export LM_API_TOKEN="your-token-here"

import { LMStudioClient } from "@lmstudio/sdk";
// The SDK automatically reads from LM_API_TOKEN environment variable
const client = new LMStudioClient();

const model = await client.llm.model("qwen/qwen3-4b-2507");
const result = await model.respond("What is the meaning of life?");

console.info(result.content);
```