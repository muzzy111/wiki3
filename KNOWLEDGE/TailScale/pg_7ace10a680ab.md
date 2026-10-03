# What is Aperture?

Last validated Jul 2, 2026

\[Missing snippet: aperture\_release\_note.mdx]

As organizations adopt AI across development, automation, and internal tools, they face new challenges around security, visibility, and control. API keys are often scattered across developer devices, CI/CD (continuous integration/continuous delivery) systems, and automated agents, increasing the risk of leaks and making credentials difficult to rotate or audit. Teams lack clear insight into who is using which models, how frequently, and at what cost. This makes it difficult for security, platform, and compliance teams to support AI usage at scale without slowing developers down.

Aperture by Tailscale addresses these challenges with a centralized AI gateway that secures, monitors, and routes LLM requests across your organization. After reading this page, you'll understand the gateway model Aperture uses, how it identifies users without distributing API keys, and what visibility it provides into LLM usage across your organization.

## Core concept

Aperture is a reverse proxy that sits between your LLM clients (coding assistants, chat interfaces, automated agents) and upstream LLM providers (OpenAI, Anthropic, Google, and others). Every request passes through Aperture before reaching a provider, and every response passes back through it. This single chokepoint is the foundation for all of Aperture's capabilities: identity, routing, telemetry, cost tracking, and policy enforcement.

Think of Aperture like a corporate mail room. Instead of giving every employee their own shipping account with each carrier, the mail room holds the accounts centrally. Employees drop off packages addressed by recipient (the model name), the mail room selects the right carrier (the provider), applies the organization's shipping account (the API key), and logs every shipment (telemetry). Employees never handle carrier credentials, and the organization has a complete record of what was sent and where. This analogy breaks down in one important way: unlike a mail room, Aperture also inspects and can modify contents in transit, which is how [guardrails][kb-aperture-guardrails] work.

Two properties make this gateway model work without disrupting existing workflows:

* **Identity from the network.** Aperture uses [Tailscale's identity layer][kb-tailscale-identity] to automatically identify every user and device. Because Tailscale already authenticates devices when they join the [tailnet][kb-tailnet], Aperture inherits that identity without requiring separate login credentials or API keys from users. The proxy injects provider API keys from its [server configuration][kb-aperture-configuration] on behalf of the user.
* **Routing by model name.** Clients specify which model they want (for example, `claude-sonnet-4-20250514` or `gpt-4o`), and Aperture routes the request to the correct provider. Clients don't need to know provider URLs or manage multiple endpoints. This means existing tools work with Aperture by changing only the base URL, not the tool's configuration or code.

## What Aperture provides

The gateway position gives Aperture visibility and control that are difficult to achieve when clients connect directly to providers.

* **Centralized API key management.** API keys stay in the [server configuration][kb-aperture-configuration], never on developer devices. Aperture injects the appropriate key for each request. When a key needs rotation, you update it in one place.

* **Built-in chat UI.** Aperture includes a [chat UI][kb-aperture-set-up-chat-ui] that lets users talk to your configured models directly from their browser, without setting up a separate client.

* **Usage visibility and cost tracking.** Aperture captures every request with user attribution, model identification, and token counts (input, output, cached, and reasoning). The [Aperture dashboard][kb-aperture-dashboard] aggregates this data by user, model, and time period. This data feeds into [exports][kb-aperture-export-s3] for cost analysis, and you can [set budgets and per-user spending limits][kb-aperture-manage-spending] to prevent cost overruns.

* **Adoption analytics.** The **Usage Overview** page of the [Aperture dashboard][kb-aperture-dashboard] shows organization-wide usage patterns, active users over time, and histograms of usage distribution, answering questions like which teams use which tools and how frequently.

* **Request and response capture.** Aperture stores full request and response bodies for review. The capture system preserves headers, payloads, and tool use data. Configure a [retention policy][kb-aperture-retention] to control how long Aperture keeps capture data, and [export logs and events][kb-aperture-export-s3] to your SIEM (security information and event management) system for durable storage and review. For strict data-handling requirements, enable [zero data retention][kb-aperture-privacy] so Aperture never writes prompt or response content to disk.

* **Guardrails.** [Guardrails][kb-aperture-guardrails] inspect, modify, or block requests at the gateway level before they leave your network. Use cases include scrubbing personally identifiable information (PII) from prompts, restricting tool declarations, and enforcing content policies.

* **Session debugging.** The **Logs** page of the Aperture dashboard (visible to admins) groups related requests into sessions, letting you trace the flow of a conversation or coding task by reviewing full request and response data.

* **Outbound integrations.** Aperture can proxy connections to external [MCP servers][kb-aperture-mcp-server] and HTTP APIs through [connectors][kb-aperture-connectors]. Connectors centralize authentication for external services, so individual users do not need separate API keys or OAuth tokens configured in their local tools. AI agents discover available connectors through the MCP tool list.

## Limitations

Consider the following limitations before deployment. Tailscale is actively developing Aperture, so this list updates frequently.

* **Tailscale requirement**

  The Aperture server runs in a tailnet. Clients can connect from inside the tailnet or from outside it using [`ts-unplug`][xt-gh-ts-plug]. Both paths provide Tailscale-based identity. Aperture does not support direct public internet access.

* **Provider support**

  Metrics extraction relies on parsing provider response formats. Aperture handles OpenAI, Anthropic, Gemini, and OpenAI-compatible APIs. Refer to the [provider compatibility reference][kb-aperture-provider-compatibility] for details. New providers or format changes might require updates.

* **Reducing quota capacity caps existing balances**

  Aperture persists quota bucket balances. When you reduce a bucket's capacity, Aperture caps the existing balance at the new value. The excess is not recoverable. Aperture removes buckets whose quota definitions you delete from the configuration. For details, refer to [bucket lifecycle][kb-aperture-bucket-lifecycle].

* **Subscription plans use passthrough mode rather than centralized keys**

  By default, Aperture authenticates with LLM providers using API keys from provider developer platforms, and centrally manages those keys for shared use. Consumer and business subscription plans (such as [Claude Pro or Claude Max][xt-anthropic-plans], [ChatGPT Plus, Pro, or Team][xt-openai-plans], or [Gemini Advanced][xt-gemini-plans]) provide OAuth tokens rather than these API keys, so they don't fit the default centralized model. To use a subscription plan, configure a provider in [passthrough mode][kb-use-passthrough-mode]. The client forwards its own subscription credential through Aperture to the upstream. Aperture does not hold, manage, or log in to the subscription itself, so per-user authentication and billing stay under the client's control.

## FAQ

**What happens if a user tries to connect from outside the tailnet?**

Users outside the tailnet can [connect through `ts-unplug`][kb-aperture-connect-outside-tailnet], which creates a lightweight tailnet node and proxies local traffic to Aperture. Without `ts-unplug`, the connection fails at the network level because Aperture listens on Tailscale interfaces.

**What happens when I add a new LLM provider to the configuration?**

Clients can immediately use models from that provider by specifying the model name in their requests. No client changes are required because the proxy routes based on model name.

**What happens if a streaming response is interrupted mid-stream?**

The proxy captures whatever data arrived before the interruption. Metrics extraction might fail or report partial data, but the proxy stores the partial capture for debugging.

**Do clients need API keys to use Aperture?**

No. Aperture identifies users through Tailscale and injects provider API keys automatically. Clients connect without credentials.

**Can I use my Claude Max, ChatGPT Plus, or other subscription plan with Aperture?**

Yes, through passthrough mode. Subscription plans such as [Claude Pro or Claude Max][xt-anthropic-plans], [ChatGPT Plus, Pro, or Team][xt-openai-plans], or [Gemini Advanced][xt-gemini-plans] provide OAuth tokens rather than developer-platform API keys. To use one, configure a provider with `auth_mode: "passthrough"`: the client forwards its own subscription credential through Aperture to the upstream unchanged, so the subscription stays under the client's control. Aperture does not hold, manage, or log in to the subscription. For setup, refer to [Set up passthrough mode][kb-use-passthrough-mode]. Standard API keys from the provider's developer platform (for example, the [Anthropic Console][xt-anthropic-console], [OpenAI Platform][xt-openai-platform], or [Google AI Studio][xt-google-ai-studio]) remain the default when you want shared, centrally managed authentication.

**Can I use Aperture with providers not listed in the documentation?**

Yes, if the provider uses an OpenAI-compatible API format. Configure it as a provider with `openai_chat: true` compatibility and the appropriate authorization type.

**Can I use Aperture with self-hosted LLMs?**

Yes, you can proxy self-hosted LLMs with Aperture without exposing the endpoints to the public internet.

**Where is Aperture hosted?**

Aperture instances are currently hosted in the European Union. Support for additional locations is planned for the future. For details about where captured data is stored and how it leaves Aperture, refer to [Privacy and data retention][kb-aperture-privacy].

**Can I use Aperture in CI/CD environments, such as GitHub Actions?**

Yes, as long as you can run Tailscale. Aperture works in common containerized environments such as GitHub Actions without needing to expose either the agent or the gateway to the public internet.

**Can I use Aperture with several tailnets?**

Yes, you can [connect to Aperture from another tailnet][kb-aperture-connect-outside-tailnet] using [`ts-unplug`][xt-gh-ts-plug]. You can also use `ts-unplug` to connect from environments that aren't in a tailnet at all.

**Can I use Aperture to connect AI agents to external APIs and MCP servers?**

Yes. Aperture supports [connectors][kb-aperture-connectors] that proxy connections to remote MCP servers and HTTP APIs. Aperture injects authentication automatically, so agents access external services without managing individual credentials. Refer to [MCP server proxying][kb-aperture-mcp-server] for MCP-specific setup and the [connectors feature guide][kb-aperture-connectors] for HTTP API proxying.

## Related resources

* [How Aperture works][kb-aperture-how-aperture-works]: a deeper look at request routing, telemetry capture, and session tracking.
* [Get started with Aperture][kb-aperture-get-started]: sign up, configure providers, and connect your first LLM client.
* [Provider compatibility][kb-aperture-provider-compatibility]: supported providers, API formats, and compatibility details.
* [Connect from outside the tailnet][kb-aperture-connect-outside-tailnet]: use `ts-unplug` to connect clients that aren't in the tailnet.

[kb-aperture-bucket-lifecycle]: /docs/aperture/configuration#bucket-lifecycle

[kb-aperture-configuration]: /docs/aperture/configuration

[kb-aperture-connect-outside-tailnet]: /docs/aperture/connect-outside-tailnet

[kb-aperture-connectors]: /docs/aperture/connectors

[kb-aperture-dashboard]: /docs/aperture/reference/dashboard

[kb-aperture-export-s3]: /docs/aperture/how-to/export-usage-data-to-s3

[kb-aperture-get-started]: /docs/aperture/get-started

[kb-aperture-guardrails]: /docs/aperture/guardrails

[kb-aperture-how-aperture-works]: /docs/aperture/how-aperture-works

[kb-aperture-manage-spending]: /docs/aperture/manage-spending

[kb-aperture-mcp-server]: /docs/aperture/mcp-server

[kb-aperture-privacy]: /docs/aperture/privacy-and-data-retention

[kb-aperture-provider-compatibility]: /docs/aperture/provider-compatibility

[kb-aperture-retention]: /docs/aperture/configuration#database

[kb-aperture-set-up-chat-ui]: /docs/aperture/how-to/set-up-chat-ui

[kb-aperture-set-up-providers]: /docs/aperture/set-up-providers

[kb-tailnet]: /docs/concepts/tailnet

[kb-tailscale-identity]: /docs/concepts/tailscale-identity

[kb-use-passthrough-mode]: /docs/aperture/how-to/use-passthrough-mode

[xt-anthropic-console]: https://console.anthropic.com

[xt-anthropic-plans]: https://www.anthropic.com/pricing

[xt-gemini-plans]: https://gemini.google.com

[xt-gh-ts-plug]: https://github.com/tailscale/ts-plug

[xt-google-ai-studio]: https://aistudio.google.com

[xt-openai-plans]: https://openai.com/chatgpt/pricing

[xt-openai-platform]: https://platform.openai.com
