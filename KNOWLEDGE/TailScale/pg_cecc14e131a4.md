# Use Claude Code with Aperture

Last validated Jun 27, 2026

\[Missing snippet: aperture\_release\_note.mdx]

Configure [Claude Code][xt-claude-code] to send requests through [Aperture by Tailscale][kb-aperture] so your organization gets centralized API key management, usage tracking, and session logging.

## Prerequisites

Before you begin, you need:

* An Aperture instance with at least one configured AI provider (such as Anthropic), accessible from your device. Refer to [get started with Aperture][kb-get-started] if you have not set this up.
* The Aperture host URL accessible from your device. Use `http://`, not `https://`.
* [Claude Code][xt-claude-code] installed on your device.

\[Missing snippet: aperture\_tls\_warning.mdx]

\[Missing snippet: aperture\_any\_provider.mdx]

## Configure Claude Code

To configure Claude Code to use Aperture, create or edit the global Claude Code settings file (`~/.claude/settings.json`) and set `ANTHROPIC_BASE_URL` to your Aperture URL:

```json
{
  "apiKeyHelper": "echo '-'",
  "env": {
    "ANTHROPIC_BASE_URL": "http://<aperture-hostname>"
  }
}
```

The `apiKeyHelper` setting returns a placeholder value because Aperture injects credentials automatically. You do not need to configure an API key on the client.

> **Note:**
>
> To route a Claude subscription account such as Claude Pro or Max through Aperture, the upstream Anthropic provider must use passthrough mode so Aperture forwards Claude Code's own OAuth token to Anthropic. In this case, set only `ANTHROPIC_BASE_URL` and do not set `ANTHROPIC_API_KEY` or `ANTHROPIC_AUTH_TOKEN`. Setting either makes Claude Code send that value instead of its OAuth token, which suppresses the credential you want to pass through. For more information, refer to [Set up passthrough mode][kb-use-passthrough-mode].

> **Tip:**
>
> You can also configure Claude Code using an environment variable instead of a settings file. Set the following environment variable:
>
> ```shell
> export ANTHROPIC_BASE_URL="http://<aperture-hostname>"
> ```

> **Warning:**
>
> Claude Code v1.x requires additional configuration because the `apiKeyHelper` setting does not exist in earlier versions. You must provide a placeholder authentication token and explicitly specify the model.
>
> ```json
> {
>   "model": "claude-sonnet-4-6",
>   "env": {
>     "ANTHROPIC_AUTH_TOKEN": "bearer-managed",
>     "ANTHROPIC_BASE_URL": "http://<aperture-hostname>"
>   }
> }
> ```

### Claude Code with Amazon Bedrock

If your Aperture instance routes through Amazon Bedrock, use the following `settings.json` configuration instead of the default Anthropic configuration shown above:

```json
{
  "env": {
    "ANTHROPIC_MODEL": "claude-sonnet-4-6",
    "ANTHROPIC_BEDROCK_BASE_URL": "http://<aperture-hostname>/bedrock",
    "CLAUDE_CODE_USE_BEDROCK": "1",
    "CLAUDE_CODE_SKIP_BEDROCK_AUTH": "1"
  }
}
```

If you use Claude Code in VS Code with Bedrock, also add `"claudeCode.disableLoginPrompt": true` to your VS Code user settings JSON (open the **Command Palette** and select **Preferences: Open User Settings (JSON)**).

### Claude Code with Vertex AI

If your Aperture instance routes through Vertex AI, use the following `settings.json` configuration instead of the default Anthropic configuration. Replace `<project-id>` with your Google Cloud project ID.

```json
{
  "env": {
    "CLOUD_ML_REGION": "global",
    "ANTHROPIC_VERTEX_PROJECT_ID": "<project-id>",
    "CLAUDE_CODE_USE_VERTEX": "1",
    "CLAUDE_CODE_SKIP_VERTEX_AUTH": "1",
    "ANTHROPIC_VERTEX_BASE_URL": "http://<aperture-hostname>/v1"
  }
}
```

If you use Claude Code in VS Code with Vertex, also add `"claudeCode.disableLoginPrompt": true` to your VS Code user settings JSON (open the **Command Palette** and select **Preferences: Open User Settings (JSON)**).

## Verify the connection

To verify that Claude Code routes requests through Aperture:

1. Send a test message in Claude Code.
2. Open the Aperture dashboard at `http://<aperture-hostname>/ui/` and confirm the request appears on the **Logs** page (admin only).

If the request does not appear, refer to the [Aperture troubleshooting topic][kb-aperture-troubleshooting].

\[Missing snippet: aperture\_connect\_next\_steps.mdx]

[kb-aperture-troubleshooting]: /docs/aperture/troubleshooting

[kb-aperture]: /docs/aperture

[kb-get-started]: /docs/aperture/get-started

[kb-use-passthrough-mode]: /docs/aperture/how-to/use-passthrough-mode

[xt-claude-code]: https://docs.anthropic.com/en/docs/claude-code
