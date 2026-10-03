# Aperture dashboard reference

Last validated Jun 24, 2026

\[Missing snippet: aperture\_release\_note.mdx]

\[Missing snippet: aperture\_open\_dashboard.mdx]

The dashboard is organized into groups in the left sidebar. This page documents the pages every user can access, under the **My Aperture** and **Usage & Adoption** groups. For the admin-only pages (Security, Administration, Reference, and the admin pages within Usage & Adoption), refer to the [Aperture admin dashboard reference][kb-web-dashboard-admin], which covers content visible only to users with the admin role.

This topic is part of the [Aperture reference][kb-aperture-reference] documentation. For how-to guides on observing and exporting usage data, refer to [Observe and export AI usage][kb-observe-and-export].

## My Aperture

The **My Aperture** group holds the pages every user can access for their own activity and configuration.

### My Dashboard

> **Warning:**
>
> If you incorrectly authenticate user devices with tag identities, all LLM sessions from those devices appear to come from the tag identity instead of the individual user. This happens because Tailscale tags do not provide per-user identity. Refer to [all sessions appear to come from the same user][kb-incorrect-user-identity] for more information.

The **My Dashboard** page shows token usage for the current user. It includes the following components:

* Total tokens by model (bar chart)
* Recent activity timeline
* Quick stats: total requests, total tokens, active sessions

Admins can access other users' dashboards by going to `/ui/dashboard/:loginName` where `loginName` is the Tailscale login name of the user (for example, `alice`). For instructions on checking and managing budgets, refer to [check and refill budgets][kb-monitor-quota-balances].

### Agent Config

The **Agent Config** page provides setup instructions for connecting an LLM client or agent through Aperture. The instructions adjust based on whether any providers are configured yet, so you can point a client at your Aperture endpoint and start routing requests.

### Models

The **Models** page lists configured models grouped by provider:

* Model ID and provider
* Inline pricing per million tokens (input and output), with an expandable tooltip for cache, reasoning, image, fast-mode pricing, and quotas
* A test button on each row that runs an instant API test against the model. The button is disabled for a model whose provider is configured in [passthrough mode][kb-use-passthrough-mode] with no fallback `apikey`, because the test runs from the Aperture device and has no client credential to forward.

Users can reference this page to choose which model to use through Aperture when configuring LLM clients. For a list of supported providers and API formats, refer to [supported models and providers][kb-provider-compatibility].

### Connectors

The **Connectors** page lets you connect to connector servers, which can expose MCP servers or generic APIs, from your own account. It uses a two-pane layout:

### Connectors tab

> **Note:**
>
> The **Connectors** tab appears in the visual editor when the connectors feature is enabled for your Aperture instance.

The **Connectors** tab in the visual editor lets admins manage outbound connector integrations. Connectors define MCP servers and HTTP APIs that AI agents can access through Aperture.

* **Connector list**: A searchable table showing all configured connectors. Columns display the connector ID, protocol (`mcp` or `http`), upstream URL, and authentication type. Each row expands to show additional details including description and auth-specific fields.
* **Add connector**: Opens a form to create a new connector. Required fields are connector ID (letters and digits only, starting with a letter), protocol, and URL. Optional fields include description, context (prompt information for agents), and authentication settings.
* **Edit connector**: Opens the same form pre-populated with the existing connector's configuration. You can change the connector ID, which deletes the old entry and creates a new one.
* **Delete connector**: Removes a connector after a confirmation dialog. This action cannot be undone.
* **Authentication types**: The form supports seven authentication options: none, bearer token, API key (header or query parameter), HTTP basic, OAuth 2.0 client credentials, OAuth 2.0 authorization code, and OAuth 2.0 dynamic client registration. Each type displays its specific fields when selected.
* **JSON preview**: A live preview panel shows the connector's JSON configuration as you edit, with sensitive fields (secrets, passwords, client secrets) masked.

For the full connector schema and grant model, refer to the [connectors configuration reference][kb-aperture-connectors-config] and the [connectors feature guide][kb-aperture-connectors].

Admins can use a **Manage** button that links to the admin connector configuration. For the admin-side configuration page, refer to [Connectors in the admin dashboard reference][kb-web-dashboard-admin].

### Chat

> **Note:**
>
> The **Chat** link is available when chat is enabled for your account on the Aperture instance.

The **Chat** link opens the Aperture chat application in a new tab. It is an external application outside the dashboard, so it opens at `/chat/` on your Aperture hostname rather than within the `/ui/` dashboard.

## Usage & Adoption

The **Usage & Adoption** group holds organization-wide usage data. The **Usage Overview** page is visible to every user. The remaining pages in this group are admin-only and are documented in the [Aperture admin dashboard reference][kb-web-dashboard-admin].

### Usage Overview

The **Usage Overview** page shows organization-wide adoption metrics:

* A daily aggregate chart of cost or tokens over time.
* Stat cards for active users, total tokens, and estimated cost, with a token-type breakdown.
* A sortable, paginated table of top users showing rank, login name, token counts (input, output, cached, reasoning, total), and average cost per million tokens.

This page helps platform teams understand LLM adoption patterns and identify users who need support or training.

For non-admin users, other users' cost fields are redacted, so each user can access only their own cost. The **Download CSV** button, which exports usage data including token counts per model, user, and date, is available only to admins. To export this data for external analysis, refer to [Export usage data to S3][kb-export-usage-data-to-s3].

## Related

* For the admin-only dashboard pages, refer to the [Aperture admin dashboard reference][kb-web-dashboard-admin].
* For configuration details, refer to the [Aperture configuration reference][kb-aperture-configuration].
* For how-to guides on observing and exporting usage data, refer to [Observe and export AI usage][kb-observe-and-export].
* For supported providers and API formats, refer to the [provider compatibility reference][kb-provider-compatibility].

[kb-aperture-configuration]: /docs/aperture/configuration

[kb-aperture-connectors-config]: /docs/aperture/configuration#connectors

[kb-aperture-connectors]: /docs/aperture/connectors

[kb-aperture-reference]: /docs/aperture/reference

[kb-export-usage-data-to-s3]: /docs/aperture/how-to/export-usage-data-to-s3

[kb-incorrect-user-identity]: /docs/aperture/troubleshooting#all-sessions-appear-to-come-from-the-same-user

[kb-monitor-quota-balances]: /docs/aperture/how-to/check-and-refill-budgets

[kb-observe-and-export]: /docs/aperture/observe-and-export

[kb-provider-compatibility]: /docs/aperture/provider-compatibility

[kb-use-passthrough-mode]: /docs/aperture/how-to/use-passthrough-mode

[kb-web-dashboard-admin]: /docs/aperture/reference/dashboard-admin
