# Avoiding Infinite Loops in Multi-Agent Systems - Thomas Tsoi

Source URL: https://www.thomastsoi.com/blog/avoiding-infinite-loops-in-multi-agent-systems

Avoiding Infinite Loops in Multi-Agent Systems - Thomas Tsoi
Logo Thomas Tsoi
https://www.thomastsoi.com/blog
Portfolio
https://www.thomastsoi.com/
Graph
https://www.thomastsoi.com/blog/graph
Blog
https://www.thomastsoi.com/blog
 
Back to Blog
https://www.thomastsoi.com/blog
Avoiding Infinite Loops in Multi-Agent Systems
June 6, 2026
· 
multi-agent system
https://www.thomastsoi.com/blog/tag/multi-agent%20system
 
langgraph
https://www.thomastsoi.com/blog/tag/langgraph
 
python
https://www.thomastsoi.com/blog/tag/python
 
llm
https://www.thomastsoi.com/blog/tag/llm
 
artificial intelligence
https://www.thomastsoi.com/blog/tag/artificial%20intelligence
 
workflow optimization
https://www.thomastsoi.com/blog/tag/workflow%20optimization
I am working on my first multi-agent system using LangGraph, and I ran into a problem where the workflow sometimes gets stuck in an infinite loop.
The setup is simple: a writer agent generates an essay, and a verifier checks it. If it fails, it gets sent back to the writer.
The problem is that when the failure is not actually the writer's fault, the system just keeps looping. For example, I inject references into the task, but some are irrelevant. The writer keeps rewriting the essay using the same references, and the verifier keeps rejecting it.
This is especially bad because looping means you are spending a lot of tokens without making any real progress. You are repeatedly paying for generations that do not move the system forward. In practice, it can quickly dominate your cost profile without improving output quality.
I figured out a few ways to handle this.
1. Route failures properly
Do not always send failures back to the writer. Instead, send each failure to the component that can actually fix the cause, such as reference selection for bad sources or a planner for conflicting constraints. This makes the workflow act more like a graph than a loop.
Once routing matches the root cause, most infinite loops disappear.
2. Make verifier output structured feedback
Instead of just pass/fail, the verifier should explain what failed and why. Even a simple classification of the failure type is already a big improvement.
This allows the system to route fixes to the correct stage instead of blindly retrying generation. It also makes debugging much easier because you can see recurring failure patterns across runs.
3. Add retry limits
Set a maximum number of retries per stage. After that, stop or escalate. Otherwise you can burn unlimited tokens on the same failure.
This acts as a safety net when routing logic is wrong or when the task is actually unsatisfiable. It also forces the system to recover instead of staying stuck in a local loop.
4. Detect stagnation
If outputs barely change across retries, the system is stuck. At that point, continuing just wastes tokens. This often shows up when the model is rephrasing the same idea without addressing the underlying issue.
You can detect this by comparing similarity between outputs or tracking repeated failure reasons. Once stagnation is detected, it is usually better to reset or replan rather than retry.
5. Validate inputs early
Filter bad or irrelevant inputs before generation so you avoid downstream failures entirely. This is especially important for things like references, constraints, or tool outputs.
It is much cheaper to reject a bad input early than to let it propagate through multiple agent steps. Early validation reduces both token cost and the likelihood of entering loops.
Takeaway
Infinite loops are expensive. They do not just represent a bug, they represent continuous token spend with no progress. Fixing routing and adding safeguards matters more than retrying the same step repeatedly. In most cases, preventing the loop is far cheaper than trying to escape it after it starts.
Related Posts
[
Automate Workflows with Claude Routine Runs
Apr 24, 2026](https://www.thomastsoi.com/blog/automate-workflows-with-claude-routine-runs)
Back to Blog
https://www.thomastsoi.com/blog
© 2026 Thomas Tsoi. All rights reserved.