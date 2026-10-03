---
aliases: []
tags:
  - agent
  - verifies
  - matrix
  - room
---
You can use compatible models you've downloaded outside of LM Studio by placing them in the expected directory structure.

### Use lms import (experimental)

To import a `GGUF` model you've downloaded outside of LM Studio, run the following command in your terminal:

```
lms import <path/to/model.gguf>
```

###### Follow the interactive prompt to complete the import process.

### LM Studio's expected models directory structure

LM Studio aims to preserves the directory structure of models downloaded from Hugging Face. The expected directory structure is as follows:

```
~/.lmstudio/models/
 publisher/
     model/
         model-file.gguf
```

For example, if you have a model named `ocelot-v1` published by `infra-ai`, the structure would look like this:

```
~/.lmstudio/models/
 infra-ai/
     ocelot-v1/
         ocelot-v1-instruct-q4_0.gguf
```

### Community

Chat with other LM Studio users, discuss LLMs, hardware, and more on the [LM Studio Discord server](https://discord.gg/aPQfnNkxGC).

---

## See Also

- [[Download an LLM]]
- [[Introduction to model.yaml]]
- [[Publish a model.yaml]]
- [[LM Studio, llmster, and lms]]