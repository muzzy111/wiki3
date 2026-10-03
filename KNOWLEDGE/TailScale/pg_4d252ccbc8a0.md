# Enable the chat sandbox

Last validated Jun 16, 2026

> **Note:** Aperture chat sandbox is currently in alpha.

\[Missing snippet: contact\_account\_manager.mdx]

The chat sandbox gives the Aperture assistant access to an isolated Linux environment where it can execute commands, view and edit files, and share downloadable output with users during a conversation.

## Prerequisites

Before you begin, ensure the following:

* You have admin access to edit the Aperture configuration. Refer to [set up admin access][kb-set-up-admin-access].
* Users who need sandbox access can reach the chat interface, which is available by default. Refer to [control model access][kb-grant-model-access].

> **Note:**
>
> Tailscale provisions and manages the infrastructure that runs the sandbox for your Aperture instance. You enable the feature through configuration. No infrastructure setup is required on your side. For more about what the sandbox does and how it works, refer to [Aperture chat sandbox][kb-chat-sandbox].

## Enable the chat sandbox feature flag

Enable the `chat_sandbox` feature flag so that sandbox tools appear in the chat interface.

Open the **Settings** page of the Aperture dashboard, switch to the **JSON editor**, and add the `chat_sandbox` flag to the `flags` section:

```json
{
  "flags": {
    "chat_sandbox": { "value": true }
  }
}
```

Save the configuration. The change takes effect after saving.

> **Note:**
>
> The `chat_sandbox` flag controls the chat assistant's sandbox tools. It is unrelated to the `sandboxes` configuration block, which controls the separate workstation provisioning feature.

## Restrict chat access (optional)

The chat UI is available by default, so users can reach the sandbox without any extra grant. To restrict chat access, set `enable_chat_ui` to `false` in a grant for the users or groups you want to exclude:

```json
{
  "grants": [
    {
      "src": ["group:contractors"],
      "app": {
        "tailscale.com/cap/aperture": [
          { "enable_chat_ui": false }
        ]
      }
    }
  ]
}
```

Replace the `src` value with the users or groups you want to exclude. Refer to [control model access][kb-grant-model-access] for details on grant configuration.

## Verify the sandbox is working

After enabling the feature flag, confirm that sandbox tools are available:

1. Open the Aperture chat interface.
2. Start a new conversation.
3. Ask the assistant to run a command. For example: "What operating system is the sandbox running?".
4. The assistant uses a tool to execute the command in the sandbox and returns the result.

If the tools do not appear, confirm that the `chat_sandbox` feature flag is enabled. If the tools still do not appear, contact your Tailscale account manager or email `aperture@tailscale.com`, since the sandbox infrastructure for your instance is managed by Tailscale.

## Disable the sandbox

To turn off the sandbox, set the `chat_sandbox` flag to `false` or remove it from the configuration:

```json
{
  "flags": {
    "chat_sandbox": { "value": false }
  }
}
```

Sandbox tools stop appearing in new conversation turns immediately. Existing conversations are unaffected, and no data is lost. In-progress sandboxes continue running until their idle timeout expires.

## What changes when sandbox is enabled

When the chat sandbox is active, the following capabilities become available:

* The assistant gains five tools: command execution, file viewing, file creation, file editing, and file sharing.
* The assistant's system instructions include guidance on using the sandbox for code execution and file generation.
* A file download endpoint becomes active so users can download files the assistant creates during a conversation.

## Next steps

* [Manage sandbox operations][kb-manage-sandbox] for monitoring and other operational tasks.
* [Sandbox reference][kb-sandbox-reference] for tool parameters, size limits, timeouts, and error messages.
* [Troubleshoot sandbox issues][kb-troubleshoot-sandbox] for diagnosing common problems.
* Refer to [Aperture configuration][kb-configuration] for the full configuration reference, including feature flags and grant capabilities.
* [Control model access][kb-grant-model-access] to configure which models are available in the chat interface.
* [Set up admin access][kb-set-up-admin-access] to manage who can change instance settings.

[kb-chat-sandbox]: /docs/aperture/chat-sandbox

[kb-configuration]: /docs/aperture/configuration

[kb-grant-model-access]: /docs/aperture/how-to/grant-model-access

[kb-manage-sandbox]: /docs/aperture/how-to/manage-sandbox

[kb-sandbox-reference]: /docs/aperture/reference/sandbox

[kb-set-up-admin-access]: /docs/aperture/how-to/set-up-admin-access

[kb-troubleshoot-sandbox]: /docs/aperture/troubleshooting/sandbox
