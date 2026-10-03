# Single-Turn vs. Multi-Turn Use Cases - Confident AI

Source URL: https://www.confident-ai.com/knowledge-base/playbook/single-turn-vs-multi-turn-evaluation

Single-Turn vs. Multi-Turn Use Cases - Confident AI
Launch Week 02 wrapped — explore all five launches
https://www.confident-ai.com/launch-week/02
Confident AI
https://www.confident-ai.com/
Products
LLM Evaluation LLM Evaluation Benchmark LLM systems with research-backed metrics.
https://www.confident-ai.com/products/llm-evaluation
LLM Observability LLM Observability Trace, monitor, and alert on production LLM systems.
https://www.confident-ai.com/products/llm-observability
AI Red Teaming AI Red Teaming Stress-test LLM apps against adversarial attacks.
https://www.confident-ai.com/products/ai-red-teaming
AI Governance AI Governance Enforce AI standards and controls across teams.
https://www.confident-ai.com/products/ai-governance
Community
Blog Bedtime stories on AI reliability.
https://www.confident-ai.com/blog
Knowledge Base Manual to navigate the evals landscape.
https://www.confident-ai.com/knowledge-base
DeepEval The open-source LLM evaluation framework.
https://www.confident-ai.com/frameworks/deepeval
DeepTeam The open-source LLM red teaming framework.
https://trydeepteam.com/
Docs
https://www.confident-ai.com/docs
 
Pricing
https://www.confident-ai.com/pricing
 
Careers
https://www.confident-ai.com/careers
NaN
https://github.com/confident-ai/deepeval
 
Book a Demo
https://www.confident-ai.com/book-a-demo
 
Sign Up
https://app.confident-ai.com/auth/signup
Products
LLM Evaluation
https://www.confident-ai.com/products/llm-evaluation
 
LLM Observability
https://www.confident-ai.com/products/llm-observability
 
AI Red Teaming
https://www.confident-ai.com/products/ai-red-teaming
 
AI Governance
https://www.confident-ai.com/products/ai-governance
Community
Blog
https://www.confident-ai.com/blog
 
Knowledge Base
https://www.confident-ai.com/knowledge-base
 
DeepEval
https://www.confident-ai.com/frameworks/deepeval
 
DeepTeam
https://trydeepteam.com/
Docs
https://www.confident-ai.com/docs
 
Pricing
https://www.confident-ai.com/pricing
 
Careers
https://www.confident-ai.com/careers
Book a Demo
https://www.confident-ai.com/book-a-demo
Back
https://www.confident-ai.com/knowledge-base
0.VI: Foundations
Single-Turn vs. Multi-Turn Use Cases
Another important dimension is single-turn versus multi-turn. Typically, multi-turn use cases are more expensive to evaluate. Most of the metrics on Confident AI look at the entire conversation for multi-turn, which means the input tokens can be an orders of magnitude large than single-turn evals.
Multi-turn use cases are also harder to evaluate. For a single-turn use case, oftentimes an input and expected output are all you need for datasets. For multi-turn, however, what you need are scenarios and simulations in order to first curate that conversation so you actually have a conversation to evaluate.
The good news is that tracing really isn't that different for single-turn versus multi-turn. On our platform, all you have to do is provide a unique ID, and we'll simply group together different traces through what we call a thread.
Are inter-agent communications considered multi-turn?
A common misconception with multi-turn use cases is agents talking to different agents. Just because an agent is communicating with an external system, which could also be a swarm of agents or just another agent itself, doesn't mean that's multi-turn. Multi-turn, in our definition, is about the observable I/Os of your system. By observable, I mean observable to the user. This also means that multi-turn use cases are very often user-facing applications.
For example, let's say a user asks a question to a sales agent, the sales agent kickstarts another agent, they talk to one another, and it gives the final output after 30 seconds of internal interaction. This is a multi-turn use case because it talks to the user, and the user can see the final output. What the user doesn't see is the internal communication between the agents. If we were to remove the user from the equation and make this a form-filling interaction instead, where a user would fill a form and let the sales agent run and return something, this would be a single-turn use case because this isn't something that the user sees, and internal communication does not constitute an observable turn.
Previous User-Facing vs. Non-User-Facing Apps
https://www.confident-ai.com/knowledge-base/playbook/user-facing-vs-non-user-facing-apps
 
Next Dev, Staging, and Production
https://www.confident-ai.com/knowledge-base/playbook/dev-staging-and-production
Products
LLM Evaluation
https://www.confident-ai.com/products/llm-evaluation
LLM Observability
https://www.confident-ai.com/products/llm-observability
AI Red Teaming
https://www.confident-ai.com/products/ai-red-teaming
AI Governance
https://www.confident-ai.com/products/ai-governance
Launch Week
https://www.confident-ai.com/launch-week
Blog
LLM evaluation metrics
https://www.confident-ai.com/blog/llm-evaluation-metrics-everything-you-need-for-llm-evaluation
LLM-as-a-judge
https://www.confident-ai.com/blog/why-llm-as-a-judge-is-the-best-llm-evaluation-method
LLM chatbot evaluation
https://www.confident-ai.com/blog/llm-chatbot-evaluation-explained-top-chatbot-evaluation-metrics-and-testing-techniques
LLM testing
https://www.confident-ai.com/blog/llm-testing-in-2024-top-methods-and-strategies
LLM dataset generation
https://www.confident-ai.com/blog/the-definitive-guide-to-synthetic-data-generation-using-llms
LLM red-teaming
https://www.confident-ai.com/blog/red-teaming-llms-a-step-by-step-guide
Resources
Blog
https://www.confident-ai.com/blog
QuickStart
https://www.confident-ai.com/docs
DeepEval Docs
https://www.deepeval.com/
DeepTeam Docs
https://www.trydeepteam.com/
Company
Open-source
https://github.com/confident-ai/deepeval
Pricing
https://www.confident-ai.com/pricing
Careers
https://www.confident-ai.com/careers
Legal Stuff
Terms of Service
https://www.confident-ai.com/terms
Privacy Policy
https://www.confident-ai.com/privacy-policy
Cookie Policy
https://www.confident-ai.com/cookie-policy
Sub-Processors
https://www.confident-ai.com/subprocessors-list
Data Processing Agreement
https://www.confident-ai.com/dpa
Cookie Settings
SOC 2 TYPE II
HIPAA COMPLIANT
GDPR COMPLIANT
Copyright @ 2026 Confident AI Inc. All rights reserved.
 

https://github.com/confident-ai/deepeval
 
 

https://x.com/confident_ai
Confident AI