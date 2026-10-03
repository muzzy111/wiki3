---
aliases: []
tags:
  - agent
  - verifies
  - matrix
  - room
---
LM Studio has a ChatGPT-like interface for chatting with local LLMs. You can create many different conversation threads and manage them in folders.

### Create a new chat

You can create a new chat by clicking the "+" button or by using a keyboard shortcut: `⌘` + `N` on Mac, or `ctrl` + `N` on Windows / Linux.

### Create a folder

Create a new folder by clicking the new folder button or by pressing: `⌘` + `shift` + `N` on Mac, or `ctrl` + `shift` + `N` on Windows / Linux.

### Drag and drop

You can drag and drop chats in and out of folders, and even drag folders into folders!

### Duplicate chats

You can duplicate a whole chat conversation by clicking the `•••` menu and selecting "Duplicate". If the chat has any files in it, they will be duplicated too.

### Split view in chat

You can view two chats side by side by dragging and dropping chat tabs to either half of the window. Alternatively, use the split view icon at the top right of a chat window to split left or right.

Close one side of the split view with the 'x' button in the top right of each pane.

## FAQ

#### Where are chats stored in the file system?

Right-click on a chat and choose "Reveal in Finder" / "Show in File Explorer". Conversations are stored in JSON format. It is NOT recommended to edit them manually, nor to rely on their structure.

#### Does the model learn from chats?

The model doesn't 'learn' from chats. The model only 'knows' the content that is present in the chat or is provided to it via configuration options such as the "system prompt".

## Conversations folder filesystem path

Mac / Linux:

```
~/.lmstudio/conversations/
```

Windows:

```
%USERPROFILE%\.lmstudio\conversations
```

### Community

Chat with other LM Studio users, discuss LLMs, hardware, and more on the [LM Studio Discord server](https://discord.gg/aPQfnNkxGC).[Get started with LM Studio](https://lmstudio.ai/docs/app/basics)

[

Download and run Large Language Models like Qwen, Mistral, Gemma, or gpt-oss in LM Studio.

](https://lmstudio.ai/docs/app/basics)[

Download an LLM

Discover and download supported LLMs in LM Studio

](https://lmstudio.ai/docs/app/basics/download-model)

---

## See Also

- [[Chat with Documents]]
- [[Get started with LM Studio]]
- [[User or Developer]]
- [[Prompt Template]]