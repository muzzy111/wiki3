# [TIP] How to Stop AI Agent Infinite Loops: A Simple Two-Tier Guardrail Setup

Source URL: https://discuss.ai.google.dev/t/tip-how-to-stop-ai-agent-infinite-loops-a-simple-two-tier-guardrail-setup/171401

[TIP] How to Stop AI Agent Infinite Loops: A Simple Two-Tier Guardrail Setup - Google Antigravity - Google AI Developers Forum
Google AI Developers Forum
https://discuss.ai.google.dev/
[TIP] How to Stop AI Agent Infinite Loops: A Simple Two-Tier Guardrail Setup
https://discuss.ai.google.dev/t/tip-how-to-stop-ai-agent-infinite-loops-a-simple-two-tier-guardrail-setup/171401
Google Antigravity
https://discuss.ai.google.dev/c/antigravity/64
models
https://discuss.ai.google.dev/tag/models
, 
bug
https://discuss.ai.google.dev/tag/bug
, 
feedback
https://discuss.ai.google.dev/tag/feedback
, 
prompt
https://discuss.ai.google.dev/tag/prompt
, 
gemini
https://discuss.ai.google.dev/tag/gemini
Gabriel_Nilo
https://discuss.ai.google.dev/u/Gabriel_Nilo
 June 15, 2026, 6:09pm 1
Hey everyone,
If you've ever come back to an AI agent stuck repeating the same action or message, you're not alone.
I use a simple Two-Tier Loop Prevention Guardrail that combines platform safeguards with behavioral instructions to stop repetitive cycles.
Here's how it works:
Tier 1: The Platform Safety Net ( hooks.json )
We configure a hard limit at the execution manager level to kill the session if it runs too many consecutive automated turns.
Path:
 
~/.gemini/config/hooks.json
 (or your platform's hooks directory)
Configuration:
{
  "max_consecutive_replies": 3
}


Why it works:
 If the agent tries to talk to itself or repeat turns more than 3 times without human input, the execution manager forcibly terminates the session.
Tier 2: The Behavioral Instruction Layer ( safeguards.md )
We define rules in the agent's instructions (like a project rules markdown file) so it actively monitors its own history and stops 
before
 the platform manager has to kill it.
The Rule:
### Repetitive Response & Loop Prevention
*   **No Periodic Repetition**: Do not output the same status, instructions, warnings, or message sequences across multiple turns.
*   **Self-Termination Guard**: If you observe that your previous 2 turns generated identical or highly similar messages, instructions, or planning statuses, immediately halt execution and output a single message asking the user for manual guidance.
*   **Duplicate Tool Calls**: Do not execute the same tool with identical arguments more than twice in the same conversation thread.


By combining these two tiers, you get a polite behavioral self-halt at 2 loops, and a hard engine-level cutoff at 3 loops if the agent fails to self-police.
Prompt to Ask Your Agent to Set This Up for You:
Copy and paste this prompt into your agent chat to have it set up the same guardrails automatically:
Please configure a two-tier loop prevention guardrail for my environment:

1. Create or update the local config file `~/.gemini/config/hooks.json` to define a strict loop stopping condition:
{
  "max_consecutive_replies": 3
}

2. Add a section to my project's agent rules or safeguards markdown file instructing agents to self-police:
### Repetitive Response & Loop Prevention
*   **No Periodic Repetition**: Do not output the same status, instructions, warnings, or message sequences across multiple turns.
*   **Self-Termination Guard**: If you observe that your previous 2 turns generated identical or highly similar messages, instructions, or planning statuses, immediately halt execution and output a single message asking the user for manual guidance.
*   **Duplicate Tool Calls**: Do not execute the same tool with identical arguments more than twice in the same conversation thread.


.
.
.
.
.
For Google folks:
If anything is wrong or could be improved, feel free to let me know.
If this post is relevant to the current issues, feel free to pin it or use it however you think is appropriate.
Related topics
Topic
Replies
Views
Activity
[Bug] Gemini 3 Pro - Constant Looping
https://discuss.ai.google.dev/t/bug-gemini-3-pro-constant-looping/123259
 
Google Antigravity
https://discuss.ai.google.dev/c/antigravity/64
 
performance
https://discuss.ai.google.dev/tag/performance/312
3
395
February 25, 2026
Infinite loop bug while using the Gemini 3
https://discuss.ai.google.dev/t/infinite-loop-bug-while-using-the-gemini-3/119986
 
Google Antigravity
https://discuss.ai.google.dev/c/antigravity/64
 
bug
https://discuss.ai.google.dev/tag/bug/7
17
1359
March 31, 2026
Bug Loop with Gemini Model
https://discuss.ai.google.dev/t/bug-loop-with-gemini-model/128545
 
Google Antigravity
https://discuss.ai.google.dev/c/antigravity/64
 
bug
https://discuss.ai.google.dev/tag/bug/7
2
253
March 5, 2026
Technical Feedback: 3 Weeks with Antigravity (Agent Rules, Win11 Stability, and MCP)
https://discuss.ai.google.dev/t/technical-feedback-3-weeks-with-antigravity-agent-rules-win11-stability-and-mcp/116440
 
Google Antigravity
https://discuss.ai.google.dev/c/antigravity/64
 
bug
https://discuss.ai.google.dev/tag/bug/7
 , 
gemini
https://discuss.ai.google.dev/tag/gemini/44
 , 
prompt
https://discuss.ai.google.dev/tag/prompt/67
4
995
March 23, 2026
Tasks run forever, after finishing the whole purpose for them
https://discuss.ai.google.dev/t/tasks-run-forever-after-finishing-the-whole-purpose-for-them/170909
 
Google Antigravity
https://discuss.ai.google.dev/c/antigravity/64
 
feedback
https://discuss.ai.google.dev/tag/feedback/5
 , 
bug
https://discuss.ai.google.dev/tag/bug/7
3
113
June 13, 2026
Home
https://discuss.ai.google.dev/
Categories
https://discuss.ai.google.dev/categories
Guidelines
https://discuss.ai.google.dev/guidelines
Terms of Service
https://policies.google.com/terms
Privacy Policy
https://policies.google.com/privacy
Powered by 
Discourse
https://www.discourse.org/
, best viewed with JavaScript enabled