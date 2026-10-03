# GEPA: Evolutionary Algorithm for Prompt Optimization | Future AGI Docs

Source URL: https://docs.futureagi.com/docs/optimization/optimizers/gepa/

GEPA: Evolutionary Algorithm for Prompt Optimization | Future AGI Docs 

https://docs.futureagi.com/
Docs
https://docs.futureagi.com/docs
 
Integrations
https://docs.futureagi.com/docs/integrations
 
Cookbooks
https://docs.futureagi.com/docs/cookbook
 
SDK
https://docs.futureagi.com/docs/sdk
 
API
https://docs.futureagi.com/docs/api
Search... 
⌘K
 Ask AI 

https://github.com/future-agi
Request demo
https://meetings.hubspot.com/salil-kolhe/help-futureagi-app
 
Dashboard
https://app.futureagi.com/
Docs
https://docs.futureagi.com/docs
 
Integrations
https://docs.futureagi.com/docs/integrations
 
Cookbooks
https://docs.futureagi.com/docs/cookbook
 
SDK
https://docs.futureagi.com/docs/sdk
 
API
https://docs.futureagi.com/docs/api
Search docs Ask AI 
Request demo
https://meetings.hubspot.com/salil-kolhe/help-futureagi-app
 
Dashboard →
https://app.futureagi.com/
 
ESC
AI Assistant Beta
FutureAGI AI Assistant
Ask me anything about the FutureAGI platform — I can search across all docs instantly.
Explain: GEPA: Evolutionary Algorithm… What can FutureAGI do? How do I run my first evaluation? How do I set up tracing? How do I detect hallucinations?
Built by FAGI with ❤
Optimization
Get Started
https://docs.futureagi.com/docs
 
Agent Playground
https://docs.futureagi.com/docs/agent-playground
 
Annotations
https://docs.futureagi.com/docs/annotations
 
Agent Command Center
https://docs.futureagi.com/docs/command-center
 
Dataset
https://docs.futureagi.com/docs/dataset
 
Error Feed
https://docs.futureagi.com/docs/error-feed
 
Evaluation
https://docs.futureagi.com/docs/evaluation
 
Falcon AI
https://docs.futureagi.com/docs/falcon-ai
 
Knowledge Base
https://docs.futureagi.com/docs/knowledge-base
 
Observability
https://docs.futureagi.com/docs/observe
 
Optimization
https://docs.futureagi.com/docs/optimization
 
Prompt
https://docs.futureagi.com/docs/prompt
 
Protect
https://docs.futureagi.com/docs/protect
 
Prototype
https://docs.futureagi.com/docs/prototype
 
Resources
https://docs.futureagi.com/docs/admin-settings
 
Simulation
https://docs.futureagi.com/docs/simulation
Optimization
Overview
https://docs.futureagi.com/docs/optimization
Concepts
Understanding Optimization
https://docs.futureagi.com/docs/optimization/concepts/concept
 
Bayesian Search
https://docs.futureagi.com/docs/optimization/optimizers/bayesian-search
 
Meta-Prompt
https://docs.futureagi.com/docs/optimization/optimizers/meta-prompt
 
ProTeGi
https://docs.futureagi.com/docs/optimization/optimizers/protegi
 
PromptWizard
https://docs.futureagi.com/docs/optimization/optimizers/promptwizard
 
GEPA
https://docs.futureagi.com/docs/optimization/optimizers/gepa
 
Random Search
https://docs.futureagi.com/docs/optimization/optimizers/random-search
Features
Using Python SDK
https://docs.futureagi.com/docs/optimization/features/using-python-sdk
 
Using Platform
https://docs.futureagi.com/docs/optimization/features/using-platform
Docs
https://docs.futureagi.com/docs
/ 
Optimization
https://docs.futureagi.com/docs/optimization
/ Optimizers
/ GEPA: Evolutionary Algorithm for Prompt Optimization
Copy page
Copy page
Copy page as Markdown for LLMs
Open in ChatGPT Ask questions about this page
https://chatgpt.com/?q=Read%20the%20documentation%20at%20https%3A%2F%2Fdocs.futureagi.com%2Fdocs%2Foptimization%2Foptimizers%2Fgepa%2F%20and%20answer%20my%20questions%20about%20it.
Open in Claude Ask questions about this page
https://claude.ai/new?q=Read%20the%20documentation%20at%20https%3A%2F%2Fdocs.futureagi.com%2Fdocs%2Foptimization%2Foptimizers%2Fgepa%2F%20and%20answer%20my%20questions%20about%20it.
Install Docs MCP server Add to Cursor, Claude Code, VS Code, etc
https://docs.futureagi.com/docs/quickstart/setup-mcp-server
GEPA: Evolutionary Algorithm for Prompt Optimization
GEPA (Genetic Pareto) is an evolutionary algorithm that evolves prompts over generations using reflection and mutation for complex optimization.
GEPA (Genetic Pareto) is a powerful, state-of-the-art evolutionary algorithm that evolves a population of prompts over multiple generations. It uses a powerful “reflection” language model to analyze failures and provide feedback, which guides the mutation and evolution process toward creating better-performing prompts. It is designed for complex, high-stakes problems where achieving the best possible performance is critical.
When to Use GEPA
✅ Best For
Complex, agentic AI systems
High-stakes optimization problems
Finding state-of-the-art prompts
Production-grade deployments
Effective alternative to Reinforcement Learning
❌ Not Ideal For
Simple, straightforward tasks
Quick experiments or baseline testing
Projects with a low computational budget
Requires the external 
gepa
 library to be installed
How It Works
GEPA uses a sophisticated evolutionary loop to systematically refine prompts. The process is managed by the external 
gepa
 library, which our optimizer adapts to.
1. Initialization
The process starts with a single 
seed_candidate
 prompt. An adapter is initialized to bridge our evaluation framework with the GEPA engine.
2. Evaluation
GEPA's engine runs the current generation of prompts against the dataset. Our internal adapter calls our standard 
Evaluator
 to score the outputs, feeding the results back to GEPA.
3. Reflection
GEPA uses a powerful 
reflection_lm
 to analyze the evaluation results, especially the failures. It creates a “reflective dataset” that contains detailed feedback on why certain outputs were poor.
4. Evolution (Mutation)
The reflective dataset is used to guide the evolution process. The reflection model generates a new population of candidate prompts (mutations) that are specifically designed to avoid the failures of the previous generation.
5. Selection & Repetition
The new generation of prompts is evaluated, and the best-performing ones are selected to continue. This cycle repeats until a predefined budget (e.g., 
max_metric_calls
 ) is exhausted, ensuring the process is efficient.
Basic Usage
To use the GEPA optimizer, you need to provide two key models: one for reflection and one for generation.
from fi.opt.optimizers import GEPAOptimizer
from fi.opt.datamappers import BasicDataMapper
from fi.opt.base.evaluator import Evaluator

# 1. Setup the evaluator to score prompt performance
evaluator = Evaluator(
    eval_template="summary_quality",
    eval_model_name="turing_flash",
    fi_api_key="your_key",
    fi_secret_key="your_secret"
)

# 2. Setup the data mapper
data_mapper = BasicDataMapper(
    key_map={"input": "article", "output": "generated_output"}
)

# 3. Initialize the GEPA optimizer
# The reflection_model should be a powerful LLM (e.g., GPT-4 Turbo)
# The generator_model is the model your final prompt will use
optimizer = GEPAOptimizer(
    reflection_model="gpt-4-turbo",
    generator_model="gpt-4o-mini"
)

# 4. Run the optimization
# GEPA works towards a budget of total evaluations (max_metric_calls)
result = optimizer.optimize(
    evaluator=evaluator,
    data_mapper=data_mapper,
    dataset=my_dataset,
    initial_prompts=["Summarize this article concisely: {article}"],
    max_metric_calls=200  # Total number of evaluations to perform
)

print(f"Best prompt found: {result.best_generator.get_prompt_template()}")
print(f"Final score: {result.final_score:.4f}")


Parameters
Parameter
Type
Default
Description
reflection_model
str
required
Model for reflection and mutation (e.g. gpt-4-turbo, claude-3-opus)
generator_model
str
gpt-4o-mini
Model for generated outputs (typically your production model)
max_metric_calls
int
150
Total evaluation budget across all generations
Key concepts:
 
GEPAOptimizer
 wraps the external 
gepa
 library; an internal adapter translates between our Evaluator and GEPA's engine (evaluate prompts, format reflection data). Install the 
gepa
 package to use this optimizer.
Tips:
 Use a strong reflection model; set 
max_metric_calls
 (e.g. 100–150 for experiments). Library not found: install the external 
gepa
 library.
Underlying Research
GEPA is based on recent advancements in evolutionary algorithms for prompt engineering, showing significant gains over traditional methods.
Core Paper
: The method is detailed in “ 
GEPA: Reflective Prompt Evolution Can Outperform Reinforcement …
https://arxiv.org/abs/2507.19457
”, which demonstrates that it can outperform RL-based methods with far fewer evaluations.
Efficiency
: As highlighted by the Databricks Blog, GEPA can lead to massive cost reductions for agent optimization. It is integrated into leading optimization frameworks like Opik and SuperOptiX.
Next steps
[
Try Meta-Prompt
For a different refinement approach](https://docs.futureagi.com/docs/optimization/optimizers/meta-prompt)
[
Compare Optimizers
See all optimization strategies.](https://docs.futureagi.com/docs/optimization/concepts/concept)
Previous PromptWizard
https://docs.futureagi.com/docs/optimization/optimizers/promptwizard
Next Random Search
https://docs.futureagi.com/docs/optimization/optimizers/random-search
Was this page helpful?
Yes No
Questions & Discussion
Loading comments…
On this page
When to Use GEPA
https://docs.futureagi.com/docs/optimization/optimizers/gepa/#when-to-use-gepa
 
How It Works
https://docs.futureagi.com/docs/optimization/optimizers/gepa/#how-it-works
 
Basic Usage
https://docs.futureagi.com/docs/optimization/optimizers/gepa/#basic-usage
 
Parameters
https://docs.futureagi.com/docs/optimization/optimizers/gepa/#parameters
 
Underlying Research
https://docs.futureagi.com/docs/optimization/optimizers/gepa/#underlying-research
 
Next steps
https://docs.futureagi.com/docs/optimization/optimizers/gepa/#next-steps
Edit on GitHub
https://github.com/future-agi/docs
 
Send feedback
https://github.com/future-agi/docs/issues/new?title=Feedback%20for%20%22%20GEPA%3A%20Evolutionary%20Algorithm%20for%20Prompt%20Optimization%20%22
 Ask a question