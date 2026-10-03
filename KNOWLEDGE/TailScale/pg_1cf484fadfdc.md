# Guardrails

Last validated May 27, 2026

> **Note:** Aperture guardrails is currently in beta.

Guardrails are pre-request hooks that let you inspect, modify, or block LLM requests before data leaves your network. Use guardrails to enforce security policies, scrub PII, or restrict tool usage at the gateway level.

## How guardrails work

Guardrails fire when Aperture receives a request from a client, before Aperture forwards the request to the upstream provider. A guardrail is an HTTP endpoint you deploy that receives request data from Aperture and returns one of three actions: allow, block, or modify.

You define the guardrail endpoint in the Aperture configuration's [`hooks`][kb-configuration-hooks] section, then wire it to requests using a grant with `send_hooks` set to the `pre_request` event. When a request matches the grant, Aperture calls your endpoint and waits for a response before proceeding.

## Actions

A guardrail returns one of three actions:

* **Allow**: The request proceeds unchanged. Use this when the guardrail inspects the request and finds nothing to act on.
* **Block**: Aperture rejects the request. The client receives an error response with a status code and message. The request never reaches the provider. Use this for hard enforcement, such as rejecting requests that contain PII or violate a policy you define.
* **Modify**: The guardrail returns a replacement request body. Aperture forwards the modified body to the provider instead of the original. Use this to scrub sensitive data, remove tool declarations, or rewrite content before it reaches the LLM.

## Hook chains

You can stack multiple guardrails on the same request. When multiple guardrails match, Aperture calls them sequentially:

1. Guardrails run in order of descending `preference` (higher values first), with alphabetical order by hook key as the tiebreak.
2. An `allow` response is a no-op: the chain proceeds to the next guardrail.
3. A `modify` response rewrites the request body in place. The next guardrail in the chain receives the modified body.
4. A `block` response terminates the chain. No subsequent guardrails run.

## Failure behavior

The `fail_policy` setting on each hook definition controls what happens when Aperture cannot reach a guardrail endpoint or the endpoint returns an error:

* **`fail_open`** (default): The request proceeds as if the guardrail returned `allow`. This preserves availability when a guardrail is unhealthy, at the cost of skipping enforcement.
* **`fail_closed`**: Aperture blocks the request with an HTTP 503 error. This preserves enforcement at the cost of availability.

Choose `fail_closed` for guardrails where enforcement is mandatory, such as PII scrubbing where you require enforcement. Choose `fail_open` (or accept the default) for guardrails where availability matters more than enforcement, such as content classification.

## Guardrails versus integration hooks

Guardrails use the `pre_request` event, which is synchronous. Aperture waits for the guardrail response before forwarding the request, so the guardrail can block or modify it inline.

Integration hooks such as [Cerbos][kb-integrate-cerbos] and [Oso][kb-integrate-oso] use `entire_request` or `tool_call_entire_request` events. These are asynchronous: Aperture calls the hook in the background after the response completes. Asynchronous hooks cannot block or modify requests. They are designed for observation, authorization decisions, and audit logging.

If you need to enforce policies before the request reaches the provider, use a guardrail with `pre_request`. If you need to observe completed requests or send data to an external authorization or logging system, use an integration hook with `entire_request` or `tool_call_entire_request`.

## Limitations

The first edition of guardrails supports pre-request filtering only. Aperture does not support post-response guardrails (filtering LLM output after it returns from the provider).

## Guardrails and connector traffic

Guardrails fire on LLM requests sent to upstream providers. They do not fire on:

* **Outbound [MCP tool calls][kb-aperture-connectors]**: When an LLM response triggers a tool call to a registered MCP server, Aperture executes the tool call directly. The `pre_request` hook does not intercept this outbound call.
* **HTTP connector proxy requests**: Requests routed through `/v1/connectors/{id}/` bypass the guardrail pipeline entirely.

A guardrail *can* inspect the LLM request that declares available tools (the `tools` array in the request body) and can block or modify that request before it reaches the provider. However, the guardrail does not intercept the subsequent outbound call when the LLM invokes one of those tools.

This distinction matters for security policy: guardrails enforce policy at the LLM provider boundary, not at the MCP or connector boundary. If you need to control which tools are available to an LLM, use [MCP grants][kb-grant-mcp-tool-access] to limit which tools Aperture exposes, rather than relying on guardrails to filter tool declarations from request bodies.

## Next steps

* [Set up a guardrail][kb-set-up-guardrails] to configure a PII-scrubbing guardrail end-to-end.
* [Integrate Highflame with Aperture][kb-integrate-highflame] for an integration that provides both pre-request enforcement and post-response observability through the same endpoint.
* Review the [hooks configuration reference][kb-configuration-hooks] for the full list of hook fields, response format, and chain ordering.

[kb-aperture-connectors]: /docs/aperture/connectors

[kb-configuration-hooks]: /docs/aperture/configuration#hooks

[kb-grant-mcp-tool-access]: /docs/aperture/how-to/grant-mcp-tool-access

[kb-integrate-cerbos]: /docs/aperture/integrate/cerbos

[kb-integrate-highflame]: /docs/aperture/integrate/highflame

[kb-integrate-oso]: /docs/aperture/integrate/oso

[kb-set-up-guardrails]: /docs/aperture/how-to/set-up-guardrails
