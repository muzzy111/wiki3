# Troubleshooting Aperture

Last validated Jun 29, 2026

Use the following sections to diagnose and resolve common issues with [Aperture by Tailscale][kb-aperture].

| Symptom                                                                     | Likely cause                                           |
| --------------------------------------------------------------------------- | ------------------------------------------------------ |
| [Cannot connect using hostname][ar-cannot-connect-hostname]                 | MagicDNS disabled, wrong URL                           |
| [HTTP 403 error][ar-http-403]                                               | Missing grant                                          |
| [Instance becomes unreachable][ar-instance-unreachable]                     | Key expiry                                             |
| [HTTP 429 errors][ar-http-429]                                              | Quota misconfiguration                                 |
| [Mullvad exit nodes][ar-mullvad-collision]                                  | Mullvad IP collision                                   |
| [All sessions from same user][ar-same-user-sessions]                        | Tag-based identity                                     |
| [HTTPS connection issues][ar-https-issues]                                  | Use `http://`                                          |
| [Client connection issues][ar-client-connection]                            | Wrong base URL or missing auth                         |
| [HTTP 405 error][ar-http-405]                                               | Double `/v1` in base URL                               |
| [HTTP 404 on `/v1/responses` or `/v1/messages`][ar-http-404-compat]         | Missing compatibility flag                             |
| [Chat UI access issues][ar-chat-ui]                                         | Missing chat grant or chat-compatible model            |
| [Connectors section ignored][ar-connectors-ignored]                         | Feature flag not enabled                               |
| [Connector validation errors][ar-connector-validation]                      | Invalid ID, missing protocol, or auth misconfiguration |
| [OAuth 2.0 authorization fails][ar-oauth-auth-fails]                        | Wrong `auth_url`, callback mismatch, or expired flow   |
| [HTTP connector returns unexpected errors][ar-http-connector-errors]        | 502 from upstream, 405 for unsupported methods         |
| [HTTP connector returns 403 Forbidden][ar-http-connector-403]               | Missing `connectors` grant for proxy access            |
| [Tools from per-user OAuth connector do not appear][ar-oauth-tools-missing] | Lazy population: user must authorize first             |
| [Refresh token failure][ar-refresh-token-failure]                           | Stored credential expired, user must re-authorize      |

## Client connection issues

If a client tool does not connect to Aperture or requests do not appear on the dashboard **Logs** page:

* Confirm the base URL in your client configuration matches your Aperture hostname. For most tools, the URL is `http://<aperture-hostname>` or `http://<aperture-hostname>/v1`.
* Confirm your client has a valid authentication entry. Most tools require a placeholder API key (such as `-`) even though Aperture injects the real credentials.
* Verify your device can reach Aperture by opening `http://<aperture-hostname>/ui/` in a browser.
* If you [connect through ts-unplug][kb-connect-outside-tailnet], confirm ts-unplug is running and use `http://localhost:<port-number>` instead of `http://<aperture-hostname>`.

If requests appear on the **Logs** page after making these changes, the connection issue is resolved. For tool-specific configuration, refer to the [set up LLM clients][kb-use-your-tools] topics, or refer to individual topics for [Claude Code][kb-use-claude-code], [Codex][kb-use-codex], or [OpenAI-compatible tools][kb-use-openai-compatible-tools]. If you use the [Aperture CLI][kb-cli], it handles base URLs and authentication automatically.

## All sessions appear to come from the same user

If you use tag-based identities to authenticate user devices, all LLM sessions from those devices appear to come from the same user. This happens because Tailscale tags do not provide per-user identity. The intended use of tags is service account or server device authentication, not individual user authentication. For example, you might use a tag identity for a fleet of PostgreSQL database servers. Refer to the [tags topic][kb-tags] for more information.

To resolve this issue, ensure that users connect to Aperture from devices associated with their individual Tailscale accounts. After switching to individual accounts, verify that new sessions on the **Logs** page display distinct user names. For details on how Aperture resolves identity for tagged nodes, refer to the [tagged device identity topic][kb-aperture-tagged-identity].

## HTTPS connection issues

If you encounter HTTPS connection issues when accessing the [Aperture dashboard][kb-web-dashboard] or using LLM clients, verify that you're using `http://` and not `https://` for the Aperture URL. For example, use `http://<aperture-hostname>/ui/`. For more information on configuring Aperture, refer to the [Aperture configuration topic][kb-aperture-configuration].

If the hostname does not resolve at all, the problem might be that MagicDNS is disabled rather than an HTTPS issue. Refer to [cannot connect to Aperture using hostname][ar-cannot-connect-hostname].

## Cannot connect to Aperture using hostname

If you cannot connect to Aperture using its short hostname (for example, `http://<aperture-hostname>`), [MagicDNS][kb-magicdns] might be disabled in your tailnet. Aperture relies on MagicDNS to resolve its hostname. When MagicDNS is off, the hostname does not resolve, and connection attempts fail.

Do not use `tailscale ping` to diagnose this issue. `tailscale ping` succeeds even when MagicDNS is disabled because it routes traffic through DERP relay using the Tailscale IP address directly. Instead, run `tailscale dns status` to verify that MagicDNS is active, or check the [DNS](https://login.tailscale.com/admin/dns) settings page of the Tailscale admin console. You can also run `nslookup <hostname>.<tailnet>.ts.net` to test resolution directly. Replace `<hostname>` with your Aperture hostname (`ai` is the default, but it might be a custom name). If the generated client configurations show a placeholder URL such as `http://your-aperture-host`, MagicDNS is likely not enabled.

To resolve this issue, enable MagicDNS in the Tailscale admin console under [DNS](https://login.tailscale.com/admin/dns) settings. Refer to the [MagicDNS topic][kb-magicdns] for setup instructions. Alternatively, bypass hostname resolution by using the Tailscale IP address directly (for example, `http://<tailscale-ip>/` instead of `http://<aperture-hostname>/`). You can find the Aperture device's IP address on the [Machines](https://login.tailscale.com/admin/machines) of the admin console.

## HTTP 403 access denied error

If you receive an HTTP 403 error with the message `access denied: no role granted`, the issue is a missing or misconfigured grant. Aperture uses two independent layers of access control, and both must be configured correctly:

1. **tailnet access control rule**: A rule in the tailnet policy file that permits network connections to the Aperture device. Without this rule, the connection fails before reaching Aperture.
2. **Aperture grant**: A grant in the [Aperture configuration][kb-aperture-configuration] that assigns a user or group access to specific models and a role. Without a matching grant, Aperture returns a 403 error.

The most common causes are a missing access control rule in the tailnet policy file, a missing grant in the Aperture configuration, or an incorrect `src` pattern. For step-by-step instructions on configuring Aperture grants, refer to [grant access to models][kb-grant-model-access] and [set up admin access][kb-set-up-admin-access]. The `src` field requires an exact match. For tagged devices, the `src` value must match the exact comma-joined tag string that Aperture generates. Refer to the [tagged device identity topic][kb-aperture-tagged-identity] for details on how Aperture matches tagged devices.

To help diagnose this issue, use the [Preview rules](https://login.tailscale.com/admin/acls/preview) in the Tailscale admin console to check that the user's device can reach the Aperture instance. Then check that the Aperture configuration includes a grant with a `src` pattern matching the connecting user or tag. If the 403 errors are intermittent and correlate with VPN use, refer to [intermittent failures with Mullvad exit nodes][ar-mullvad-collision] for a related cause.

## Chat UI access issues

If you cannot open the [chat UI][kb-set-up-chat-ui] or the chat model picker is empty, the cause is usually a missing grant or an incompatible provider:

* **Cannot open the chat UI**: The chat UI is available by default, so a grant that sets `enable_chat_ui` to `false` is the usual cause. Confirm no grant disables it for the user.
* **Chat picker is empty**: The user can open the chat UI but has no chat-compatible model. Confirm the user's `models` grant covers at least one model whose provider declares a chat-compatible `compatibility` flag (`anthropic_messages`, `openai_chat`, `openai_responses`, `gemini_generate_content`, or `google_generate_content`).
* **A granted, chat-compatible model is missing**: The model's provider is likely configured in [passthrough mode][kb-use-passthrough-mode] with no fallback `apikey`. A passthrough-only provider serves only requests that carry a client credential, so Aperture hides its models from the chat UI even though they still appear in the `/v1/models` endpoint. To make the model available in the chat UI, configure a fallback `apikey` for the provider.
* **Expected models are missing**: If you curate the picker with `chat_models`, only models matching a non-`hidden` entry appear. Confirm the model matches an entry.

For setup steps, refer to [set up the chat UI][kb-set-up-chat-ui].

## Aperture instance becomes unreachable

If an Aperture instance that was previously working becomes unreachable, the most likely cause is node key expiry. When the key expires, the instance repeatedly restarts and waits for reauthorization that never completes, remaining in a `NeedsLogin` state. The same behavior occurs if you accidentally delete the device from the [Machines](https://login.tailscale.com/admin/machines). Check the [Machines](https://login.tailscale.com/admin/machines) to determine whether the device is listed as expired or missing.

Aperture displays a warning banner of the admin console when a node key is within 7 days of expiring. This banner is visible only to admin users.

There is no way to recover an expired instance. You must deploy a new Aperture instance and reconfigure your clients. To prevent this, disable key expiry for the Aperture device from the [Machines](https://login.tailscale.com/admin/machines), or deploy Aperture as a [tagged device][kb-tags]. Refer to the [key expiry documentation][kb-key-expiry] for more information.

## HTTP 429 rate limit errors

If you receive an HTTP 429 rate limit error when you expect to have access, the issue is likely a misconfigured quota in the Aperture configuration. Aperture's quota system fails closed: if the quota configuration cannot be parsed, Aperture rejects all requests matching that quota with a 429 error. Common causes include a typo in the quota bucket name, an invalid quota value, or a quota limit set to zero.

Check the Aperture configuration for quota fields and verify that bucket names are spelled correctly and that values are valid. Refer to the [quota configuration topic][kb-aperture-quotas] for the expected syntax. To resolve the issue, correct the quota value in the configuration. If you do not need custom quotas, remove the quota field entirely to use the default settings. For step-by-step instructions on checking and refilling budgets, refer to [check and refill budgets][kb-monitor-quota-balances].

## Intermittent failures with Mullvad exit nodes

If you experience intermittent 403 errors or connection failures when accessing Aperture while a Mullvad exit node is active, this is due to an IP address range collision. Tailscale assigns device addresses from the CGNAT range `100.64.0.0/10`, and Mullvad also uses addresses in this range. When a Mullvad exit node is active, traffic destined for Tailscale addresses can be misrouted through Mullvad, causing grant evaluation failures that are indistinguishable from [grant permission issues][ar-http-403].

To confirm this is the cause, disconnect from the Mullvad exit node and retry the connection. If the errors stop, use [Tailscale exit nodes][kb-exit-nodes] instead, or exclude the Tailscale interface from Mullvad's routing configuration if your Mullvad client supports split tunneling.

## HTTP 405 error from upstream provider

If every request returns HTTP 405 Method Not Allowed from the upstream provider, the provider's `baseurl` likely includes a path segment (typically `/v1`) that duplicates a segment in the request path. Aperture appends the full incoming request path to `baseurl`, so a `baseurl` like `https://ai-gateway.vercel.sh/v1` produces an upstream URL of `https://ai-gateway.vercel.sh/v1/v1/chat/completions`.

To resolve this issue, remove the path segment from `baseurl`. For cloud providers, `baseurl` should be the API root without `/v1`. For example, use `https://api.openai.com` instead of `https://api.openai.com/v1`. Refer to the [provider compatibility topic][kb-provider-compatibility] for the correct `baseurl` for each provider. For details on how Aperture constructs upstream URLs, refer to [how Aperture builds upstream URLs][kb-aperture-url-construction].

## HTTP 404 on /v1/responses or /v1/messages

If requests to `/v1/responses` or `/v1/messages` return HTTP 404 but `/v1/chat/completions` works, the provider's `compatibility` block does not include the corresponding flag. When `compatibility` is omitted entirely, only `openai_chat` is enabled by default. The `openai_responses` and `anthropic_messages` flags must be set explicitly.

To resolve this issue, add the appropriate flag to the provider's `compatibility` block:

```json
{
  "compatibility": {
    "openai_chat": true,
    "openai_responses": true,
    "anthropic_messages": true
  }
}
```

Set `openai_responses` to `true` to enable the `/v1/responses` endpoint, or `anthropic_messages` to `true` to enable `/v1/messages`. Refer to the [compatibility flags topic][kb-provider-compatibility-flags] for the full list of flags.

## Related

The following topics provide additional information about Aperture configuration and management:

* For the full configuration schema, refer to the [Aperture configuration topic][kb-aperture-configuration].
* For supported providers and API formats, refer to the [provider compatibility topic][kb-provider-compatibility].
* For the Aperture dashboard, refer to the [dashboard topic][kb-web-dashboard].

## Get help

If your issue is not covered in this topic or the suggested resolution does not work, contact [Tailscale Support][co-contact-support] with details about the error, your Aperture configuration, and the steps you have already tried.

## Connectors section ignored

If you add a `connectors` section while the connectors feature flag is off, the behavior depends on whether the connector is new:

* **Newly added connectors are rejected on save.** Aperture returns an error such as `connector "github" cannot be added: connectors feature is not available on this instance`, and the configuration does not save.
* **Connectors migrated from a legacy `mcp.servers` section are allowed through**, but they have no effect: the **Connectors** tab, the `/v1/connectors/` endpoints, and connector tools remain unavailable until you enable the feature flag.

In both cases, the connectors feature requires an explicit feature flag in the configuration.

To resolve this issue, add the `connectors` flag to your configuration:

```json
{
  "flags": {
    "connectors": {
      "value": true
    }
  }
}
```

The `connectors` flag has Hidden visibility. To toggle it in the Aperture UI, press Shift+F to reveal hidden flags, or edit the configuration directly in the JSON editor. Refer to the [flags configuration reference][kb-aperture-flags] for more information.

## Connector validation errors

If the Aperture configuration is rejected on save or at startup with a connector-related error, the connector definition contains a validation error. The following table lists the most common validation errors and their causes.

| Error                | Cause                                                                                                                                                                                                                                  |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Invalid connector ID | The `id` field must match the pattern `[a-zA-Z][a-zA-Z0-9]*`. IDs must start with a letter and contain only letters and digits.                                                                                                        |
| Protocol required    | Each connector must specify `"protocol": "mcp"` or `"protocol": "http"`.                                                                                                                                                               |
| Reserved ID          | The IDs `tailscale` and `internal` are reserved, as are the IDs of Aperture's built-in system connectors (currently `aperture`). You cannot use these for user-defined connectors.                                                     |
| Duplicate ID         | A connector ID must be unique across both `mcp.servers` and `connectors.servers`. If the same ID appears in both sections, validation fails.                                                                                           |
| Missing auth fields  | A `bearer_token` auth block requires a `secret` field. An `oauth2_authorization_code` auth block requires `client_id`, `auth_url`, and `token_url`. The `client_secret` field is optional (not required for PKCE-only public clients). |

To resolve these errors, correct the connector definition in your configuration and save again. Refer to the [connectors configuration reference][kb-aperture-connectors-config] for the full schema.

## OAuth 2.0 authorization fails

If an OAuth 2.0 authorization flow fails during the consent screen, callback, or token exchange, the connector's `oauth2_authorization_code` configuration is incorrect or the flow has expired. The following symptoms indicate the specific failure:

| Symptom                                                                   | Cause                                                                                                                                 |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| Authorization fails after the consent screen has been open too long       | The authorization flow was not completed within 15 minutes. The user must start the flow again.                                       |
| Authorization is rejected because it was not started by the current user  | The user completing the callback is not the same user who initiated the flow.                                                         |
| Authorization is rejected because the application identity does not match | The `client_id` returned in the callback does not match the connector's configured `client_id`.                                       |
| Authorization fails at the final token exchange step                      | The token exchange with the OAuth 2.0 provider failed. Check that `client_id`, `client_secret`, and `token_url` are correct.          |
| The callback is rejected because a required parameter is missing          | A required parameter is missing from the callback URL. This usually indicates a misconfigured redirect URI at the OAuth 2.0 provider. |

Common scenarios include an incorrect `auth_url` that points to the wrong provider endpoint, a callback URL mismatch between the connector configuration and the OAuth 2.0 provider's registered redirect URIs, and missing `auth_params` required by the provider (for example, Google requires `"access_type": "offline"` to issue a refresh token).

## HTTP connector returns unexpected errors

If an HTTP connector returns errors that do not originate from your application logic, the issue is likely related to how Aperture proxies HTTP connector requests. The following table lists common error responses and their causes.

| Response                            | Cause                                                                                                                                     |
| ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| 502 Bad Gateway                     | The upstream server returned an error or is unreachable. Verify that the connector's `url` is correct and the upstream server is running. |
| 502 Bad Gateway (malformed request) | The request to the upstream server could not be constructed. Check that the connector's `url` is a valid URL.                             |
| 405 Method Not Allowed              | The HTTP method is not supported. Aperture blocks `TRACE` requests and can block other methods depending on the connector configuration.  |
| 404 Not Found                       | The connector ID in the request path does not match any configured connector.                                                             |

Aperture strips the `Authorization`, `Cookie`, and `Set-Cookie` headers from proxied HTTP connector requests and responses for security. If the upstream server requires authentication, configure it through the connector's `auth` block rather than passing headers directly.

Aperture enforces a 50 MB response body limit for HTTP connector responses. Responses exceeding this limit are truncated.

## HTTP connector returns 403 Forbidden

If an HTTP connector returns 403 Forbidden, the connecting user does not have a `connectors` grant that permits access to the connector's proxy endpoint. Aperture requires a grant with a pattern matching `<connector-id>/proxy` or a broader pattern like `<connector-id>/**`.

To resolve this issue, add a `connectors` grant to the user's Aperture grant configuration:

```json
{
  "grants": [
    {
      "src": ["autogroup:members"],
      "app": {
        "tailscale.com/cap/aperture": [
          {"connectors": ["github/proxy"]}
        ]
      }
    }
  ]
}
```

Replace `github` with the connector ID and adjust the `src` pattern to match the appropriate users or groups. Refer to the [connectors feature guide][kb-aperture-connectors] for details on grant patterns.

## Tools from per-user OAuth connector do not appear

If a connector is configured with `oauth2_authorization_code` authentication and its tools do not appear for a user, the user has not yet authorized the connector. Connectors that use per-user OAuth 2.0 populate their tools lazily: the tool list is empty until the user completes the OAuth 2.0 authorization flow. Each user must individually authorize the connector because the credentials are per-user, not shared.

To resolve this issue, instruct the user to authorize the connector through the Aperture UI. After authorization completes, the connector's tools become available. Refer to the [connectors feature guide][kb-aperture-connectors] for instructions on authorizing connectors.

## Refresh token failure

If a previously working per-user OAuth connector stops working, the stored refresh token has likely expired, or the OAuth 2.0 provider has revoked it. When this happens, Aperture attempts to refresh the access token. The refresh fails, the connector stops working for that user, and the user must re-authorize the connector to obtain a new token.

Common causes include the OAuth 2.0 provider revoking the refresh token due to inactivity, the user revoking access from the provider's account settings, or the provider's refresh token lifetime expiring. For Google OAuth 2.0 connectors, ensure that `auth_params` includes `"access_type": "offline"` to request a refresh token during authorization. Without this parameter, Google issues only a short-lived access token.

To resolve this issue, have the user re-authorize the connector through the Aperture UI. Refer to the [connectors feature guide][kb-aperture-connectors] for authorization instructions.

## Related

* [Aperture by Tailscale documentation][kb-aperture]
* [Aperture configuration reference][kb-aperture-configuration]
* [Connectors feature guide][kb-aperture-connectors]
* [Connectors configuration reference][kb-aperture-connectors-config]

## Get help

If the issue persists after following the troubleshooting steps, contact Tailscale support. Include the Aperture version, the relevant configuration (with secrets redacted), and any error messages returned to your LLM client.

[ar-cannot-connect-hostname]: #cannot-connect-to-aperture-using-hostname

[ar-chat-ui]: #chat-ui-access-issues

[ar-client-connection]: #client-connection-issues

[ar-connector-validation]: #connector-validation-errors

[ar-connectors-ignored]: #connectors-section-ignored

[ar-http-403]: #http-403-access-denied-error

[ar-http-404-compat]: #http-404-on-v1responses-or-v1messages

[ar-http-405]: #http-405-error-from-upstream-provider

[ar-http-429]: #http-429-rate-limit-errors

[ar-http-connector-403]: #http-connector-returns-403-forbidden

[ar-http-connector-errors]: #http-connector-returns-unexpected-errors

[ar-https-issues]: #https-connection-issues

[ar-instance-unreachable]: #aperture-instance-becomes-unreachable

[ar-mullvad-collision]: #intermittent-failures-with-mullvad-exit-nodes

[ar-oauth-auth-fails]: #oauth-20-authorization-fails

[ar-oauth-tools-missing]: #tools-from-per-user-oauth-connector-do-not-appear

[ar-refresh-token-failure]: #refresh-token-failure

[ar-same-user-sessions]: #all-sessions-appear-to-come-from-the-same-user

[co-contact-support]: /contact/support

[kb-aperture-configuration]: /docs/aperture/configuration

[kb-aperture-connectors-config]: /docs/aperture/configuration#connectors

[kb-aperture-connectors]: /docs/aperture/connectors

[kb-aperture-flags]: /docs/aperture/configuration#flags

[kb-aperture-quotas]: /docs/aperture/configuration#quotas

[kb-aperture-tagged-identity]: /docs/aperture/how-aperture-works#tagged-device-identity

[kb-aperture-url-construction]: /docs/aperture/configuration#how-aperture-builds-upstream-urls

[kb-aperture]: /docs/aperture

[kb-cli]: /docs/aperture/cli

[kb-connect-outside-tailnet]: /docs/aperture/connect-outside-tailnet

[kb-exit-nodes]: /docs/features/exit-nodes

[kb-grant-model-access]: /docs/aperture/how-to/grant-model-access

[kb-key-expiry]: /docs/features/access-control/key-expiry

[kb-magicdns]: /docs/features/magicdns

[kb-monitor-quota-balances]: /docs/aperture/how-to/check-and-refill-budgets

[kb-provider-compatibility-flags]: /docs/aperture/provider-compatibility#compatibility-flags

[kb-provider-compatibility]: /docs/aperture/provider-compatibility

[kb-set-up-admin-access]: /docs/aperture/how-to/set-up-admin-access

[kb-set-up-chat-ui]: /docs/aperture/how-to/set-up-chat-ui

[kb-tags]: /docs/features/tags

[kb-use-claude-code]: /docs/aperture/how-to/use-claude-code

[kb-use-codex]: /docs/aperture/how-to/use-codex

[kb-use-openai-compatible-tools]: /docs/aperture/how-to/use-openai-compatible-tools

[kb-use-passthrough-mode]: /docs/aperture/how-to/use-passthrough-mode

[kb-use-your-tools]: /docs/aperture/use-your-tools

[kb-web-dashboard]: /docs/aperture/reference/dashboard
