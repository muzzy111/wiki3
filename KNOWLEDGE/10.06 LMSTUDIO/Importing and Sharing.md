---
aliases: []
tags:
  - agent
  - verifies
  - matrix
  - room
---
You can import preset files directly from disk, or pull presets made by others via URL.

You can import preset by file or URL. This is useful for sharing presets with others, or for importing presets from other users.

## Import Presets

First, click the presets dropdown in the sidebar. You will see a list of your presets along with 2 buttons: `+ New Preset` and `Import`.

Click the `Import` button to import a preset.

## Import Presets from File

Once you click the Import button, you can select the source of the preset you want to import. You can either import from a file or from a URL.

## Import Presets from URL

Presets that are [published](https://lmstudio.ai/docs/app/presets/publish) to the LM Studio Hub can be imported by providing their URL.

Importing public presets does not require logging in within LM Studio.

### Using lms CLI

You can also use the CLI to import presets from URL. This is useful for sharing presets with others.

```
lms get {author}/{preset-name}
```

Example:

```
lms get neil/qwen3-thinking
```

### Find your config-presets directory

LM Studio manages [[config presets]] on disk. Presets are local and private by default. You or others can choose to share them by sharing the file.

Click on the `•••` button in the Preset dropdown and select "Reveal in Finder" (or "Show in Explorer" on Windows).

This will download the preset file and automatically surface it in the preset dropdown in the app.

### Where Hub shared presets are stored

Presets you share, and ones you download from the LM Studio Hub are saved in `~/.lmstudio/hub` on macOS and Linux, or `%USERPROFILE%\.lmstudio\hub` on Windows.[Config Presets](https://lmstudio.ai/docs/app/presets)

[

Save your system prompts and other parameters as Presets for easy reuse across chats.

](https://lmstudio.ai/docs/app/presets)[

Publish Your Presets

Publish your Presets to the LM Studio Hub. Share your Presets with the community or with your colleagues.

](https://lmstudio.ai/docs/app/presets/publish)

---

## See Also

- [[Config Presets]]
- [[Publish Your Presets]]
- [[Pull Updates]]
- [[Push New Revisions]]