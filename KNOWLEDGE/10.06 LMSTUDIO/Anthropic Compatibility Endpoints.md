---
aliases: []
tags:
  - agent
  - verifies
  - matrix
  - room
---
### Supported endpoints

| Endpoint | Method | Docs |
| --- | --- | --- |
| `/v1/messages` | POST | [Messages](https://lmstudio.ai/docs/developer/anthropic-compat/messages) |

## Using Claude Code with LM Studio

For a full walkthrough, see: [Use Claude Code with LM Studio](https://lmstudio.ai/docs/integrations/claude-code).

```
export ANTHROPIC_BASE_URL=http://localhost:1234
export ANTHROPIC_AUTH_TOKEN=lmstudio
claude --model openai/gpt-oss-20b
```

## [[Authentication]] headers

When Require [[Authentication]] is enabled, LM Studio accepts both `x-api-key` and the standard `Authorization: Bearer <token>` header. To learn more about enabling auth in LM Studio, see [Authentication](https://lmstudio.ai/docs/developer/core/authentication).

## Set the base URL to point to LM Studio

Point your Anthropic client, or any HTTP request, at your local LM Studio server.

Note: The following examples assume the server port is `1234`.

### cURL example

```
- curl https://api.anthropic.com/v1/messages \
+ curl http://localhost:1234/v1/messages \
   -H "Content-Type: application/json" \
+  -H "x-api-key: $LM_API_TOKEN" \
   -d '{
-    "model": "claude-4-5-sonnet",
+    "model": "ibm/granite-4-micro",
     "max_tokens": 256,
     "messages": [
       {"role": "user", "content": "Write a haiku about local LLMs."}
     ]
   }'
```

### Python example

```
from anthropic import Anthropic

client = Anthropic(
    base_url="http://localhost:1234",
    api_key="lmstudio",
)

message = client.messages.create(
    max_tokens=1024,
    messages=[
        {
            "role": "user",
            "content": "Hello from LM Studio",
        }
    ],
    model="ibm/granite-4-micro",
)

print(message.content)
```

If you have not enabled Require [[Authentication]], the `x-api-key` header is optional. For the Python example, you can also omit `api_key` when [[authentication]] is disabled.

If you're running into trouble, hop onto our [Discord](https://discord.gg/lmstudio) and enter the developers channel.