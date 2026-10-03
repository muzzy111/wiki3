# DSPy GEPA vs MIPROv2: Auto Prompt Optimization 2026 - Particula Tech

Source URL: https://particula.tech/blog/dspy-gepa-vs-miprov2-automatic-prompt-optimization

DSPy GEPA vs MIPROv2: Auto Prompt Optimization 2026
NEW: Introducing Lumen & Notetaker, Self-Hosted AI for Teams →
https://particula.tech/products
Particula Tech
https://particula.tech/
Services
https://particula.tech/services
Products
https://particula.tech/products
Work
https://particula.tech/portfolio
Company
https://particula.tech/about
Blog
https://particula.tech/blog
Get in touch
https://particula.tech/blog/dspy-gepa-vs-miprov2-automatic-prompt-optimization#contact
 

https://particula.tech/
← Back to Blog
https://particula.tech/blog
/ 
AI Development Tools
https://particula.tech/blog/pillar/ai-development-tools
 
June 23, 2026
DSPy GEPA vs MIPROv2: Auto Prompt Optimization 2026
GEPA beats MIPROv2 by over 10% and outperforms GRPO with up to 35x fewer rollouts. Here's how DSPy's reflective prompt optimizer actually works in 2026.
 
Sebastian Mondragon
https://particula.tech/author/sebastian-mondragon
10 min read
 
On this page
Why Hand-Tuning Prompts Doesn't Scale Past a Few Modules
The DSPy Optimizer Landscape and What "Compiling" a Prompt Means
MIPROv2: Bayesian Instruction and Few-Shot Demo Search
GEPA: Reflective Prompt Evolution Instead of Policy Gradients
Benchmarks: GEPA vs GRPO and vs MIPROv2
Running GEPA in DSPy: Dataset Size, Metrics, and a Minimal Example
When to Use Which Optimizer vs Continued Hand-Tuning
FAQ
TL;DR
GEPA is DSPy's reflective prompt optimizer that evolves instructions using natural-language feedback instead of policy gradients. On Qwen3-8B it outperforms GRPO by up to 20% while using up to 35x fewer rollouts (some tasks converge in 678 rollouts), and beats MIPROv2 by over 10%, including +12% on AIME-2025. Use GEPA when you have 20-100 labeled examples and a metric that can return text feedback. Use MIPROv2 when you want fast Bayesian instruction plus few-shot demo search. Hand-tune only single-module prototypes.
Hand-written prompts are technical debt that nobody puts on the balance sheet. They work in the demo, drift in production, and rot the moment you swap models. The fix that actually scales is treating prompts as something you compile, not something you craft by hand, and in 2026 the sharpest tool for that job is DSPy GEPA prompt optimization.
GEPA, short for Genetic-Pareto, was accepted as an ICLR 2026 Oral and ships as an open-source optimizer built on the 
DSPy framework
https://github.com/gepa-ai/gepa
. The headline numbers are hard to ignore. On Qwen3-8B, GEPA outperforms the reinforcement-learning method GRPO by up to 20% while using up to 35x fewer rollouts, and it beats the prior leading prompt optimizer, MIPROv2, by over 10%. It does this not with policy gradients or weight updates but with natural-language reflection: it reads why a prompt failed, in plain English, and rewrites it.
This post is a practitioner's comparison of the two optimizers that matter in DSPy today, MIPROv2 and GEPA. I'll cover what "compiling" a prompt actually means, how each optimizer searches the space, what the benchmarks say when you put them head to head, and a minimal example of running GEPA on a real task. The goal is a clear decision: when to reach for GEPA, when MIPROv2 is the better fit, and when you should still hand-tune.
Why Hand-Tuning Prompts Doesn't Scale Past a Few Modules
A single prompt is tractable. You write it, test a handful of inputs, tweak the wording, and ship. The trouble starts when your system has more than one LLM call.
Most real AI systems are pipelines. A retrieval-augmented generation app might have a query rewriter, a reranker prompt, and an answer synthesizer. An agent might have a planner, a tool-selection step, and a reflection step. Each of those is a prompt, and each prompt's optimal wording depends on the behavior of the ones around it. Change the query rewriter and the synthesizer's ideal instruction shifts with it. This is a coupled optimization problem, and humans are bad at coupled optimization problems with three or more variables.
Across the agent systems we've audited, the most common failure mode is not a single bad prompt. It is a stack of locally-tuned prompts that nobody can reason about jointly. Someone improved the planner last quarter, someone else patched the synthesizer in March, and now no one knows which instruction is carrying the system and which is dead weight. When the underlying model gets upgraded, the whole stack has to be re-tuned by hand, and the institutional knowledge of "why is this sentence in the prompt" has evaporated.
The static-versus-living question matters here too. We've written before about 
dynamic prompts versus static prompts and the maintenance cost
https://particula.tech/blog/dynamic-prompts-vs-static-prompts-maintenance
 each carries, and hand-tuning makes the static case worse: every prompt becomes a frozen artifact whose provenance is a Slack thread. Automatic optimization flips this. The prompt becomes the output of a reproducible process you can re-run when inputs change.
The DSPy Optimizer Landscape and What "Compiling" a Prompt Means
DSPy's core idea is to separate what you want from how you ask for it. You declare a module with a signature (inputs, outputs, and a task description), and you write a metric that scores outputs. You do not write the final prompt. DSPy's optimizers, historically called teleprompters, generate it for you.
"Compiling" a prompt means running an optimizer over your program plus a training set plus a metric, and getting back a program whose prompts (instructions, few-shot demonstrations, or both) have been tuned to maximize the metric. The mental model is a compiler: high-level intent in, optimized low-level artifact out. This is the same discipline shift we describe in 
context engineering and the post-prompt era
https://particula.tech/blog/context-engineering-post-prompt-era
, where the unit of work moves from clever wording to a measurable system.
DSPy ships several optimizers. The ones worth knowing in 2026:
The split that matters for this post is MIPROv2 versus GEPA. Both optimize the textual prompt without touching model weights, which keeps them cheap and portable. They differ in how they search.
Optimizer
What it tunes
Search strategy
Best when
BootstrapFewShot
Few-shot demos
Bootstrap traces from the program itself
Small data, fast baseline
MIPROv2
Instructions + demos
Bayesian (TPE) over proposals
Scalar metric, joint demo + instruction search
GEPA
Instructions
Reflective evolution on a Pareto frontier
Feedback-rich metric, top instruction quality
BootstrapFinetune
Model weights
Supervised fine-tuning from traces
You can afford to train weights
MIPROv2: Bayesian Instruction and Few-Shot Demo Search
MIPROv2 (Multiprompt Instruction Proposal Optimizer, version 2) is the optimizer most DSPy users reach for first, and for good reason. It does two things at once: it proposes candidate instructions for each module, and it bootstraps candidate few-shot demonstrations from your training data. Then it searches the combined space.
The search itself is Bayesian. MIPROv2 uses a Tree-structured Parzen Estimator to decide which instruction-and-demo combinations to evaluate next, rather than trying every combination or sampling blindly. It proposes a set of instruction candidates (using an LLM that's aware of your data and program structure), bootstraps several sets of demonstrations, and then runs minibatched trials to find the configuration that maximizes your metric.
Two properties make MIPROv2 a strong default. First, it works with a plain scalar metric: return a float and it optimizes against it, no feedback text required. Second, it jointly tunes demonstrations and instructions, which often matters more than instructions alone for smaller models that lean heavily on in-context examples.
The limitation is the flip side of that simplicity. A scalar reward is a thin signal. MIPROv2 learns that configuration A scored 0.62 and configuration B scored 0.67, but it never learns why. It is searching a space, not reasoning about failures. That ceiling is exactly what GEPA was built to break through.
GEPA: Reflective Prompt Evolution Instead of Policy Gradients
GEPA takes a different bet: the most valuable signal in an LLM system is not the score, it is the trace. When a prompt fails, the execution leaves behind a rich record (the reasoning, the tool calls, the wrong answer next to the right one) and most optimizers throw that away to keep a single number. GEPA reads it.
The loop works like this. GEPA runs your program on a batch of examples and collects both the scores and the natural-language feedback your metric produces. It then hands that feedback to a reflection LLM, which diagnoses what went wrong and proposes a revised instruction. The new candidate competes against existing ones, and GEPA maintains a Pareto frontier of prompts that are each best on some subset of the data, mutating the strongest candidates rather than collapsing everything to one winner too early. The "genetic" half is the mutation and selection; the "Pareto" half is keeping diverse strong candidates alive so the search doesn't get stuck.
Contrast this with GRPO, a policy-gradient reinforcement-learning method. GRPO updates model weights from scalar rewards over many rollouts. It needs infrastructure to train weights, a lot of rollouts to get a usable gradient signal, and it produces a new set of weights you then have to host. GEPA keeps the weights frozen and evolves text. Arize's benchmarking frames both GEPA and "Prompt Learning" as applying an RL-style optimization loop to prompts, positioning 
reflective evolution against gradient-based RL methods
https://arize.com/blog/gepa-vs-prompt-learning-benchmarking-different-prompt-optimization-approaches/
 for production prompt engineering. The reflective approach learns more per example because each trace carries far more information than a single reward scalar.
The dependency to internalize: GEPA is only as good as the feedback your metric returns. Give it a bare float and you've handed a reasoning engine a number and asked it to guess. Give it "predicted Paris but the gold answer is Lyon, and the model ignored the date constraint" and it has something to reflect on.
Benchmarks: GEPA vs GRPO and vs MIPROv2
The numbers come from the 
GEPA paper
https://arxiv.org/abs/2507.19457
 and the open-source repo. They hold up because they're measured across multiple tasks, not cherry-picked from one.
Read the GRPO comparison carefully, because the rollout efficiency is the real story. Beating GRPO by 20% would be notable on its own. Beating it by 20% while using up to 35x fewer rollouts means GEPA reaches better prompts at a fraction of the compute. GRPO in the benchmark used 24,000 rollouts; GEPA hit optimal scores on several tasks with 678. That is not an incremental efficiency win, it is a different cost class.
The MIPROv2 comparison is the one most DSPy users care about, since both are drop-in prompt optimizers. A 10% overall lead and 12% on the hardest reasoning benchmark (AIME-2025) is the difference between "good enough" and "ship it" on demanding tasks. The mechanism is the feedback signal: on a math benchmark, GEPA reads the wrong derivation and proposes an instruction that fixes the reasoning step, where MIPROv2 only sees that one prompt scored higher than another.
One caveat worth stating plainly: these are research benchmarks. Your task, your model, and the quality of your feedback metric will move the numbers. The direction is robust; the exact percentages are not a promise.
Comparison
Result
Source
GEPA vs GRPO (Qwen3-8B)
Up to +20% accuracy, up to 35x fewer rollouts
arXiv 2507.19457
GEPA vs GRPO (average)
+~6% across six tasks
arXiv 2507.19457
GEPA convergence
Optimal HotpotQA, IFBench, HoVer, PUPA with as few as 678 rollouts
arXiv 2507.19457
GEPA vs MIPROv2
+10% overall
arXiv 2507.19457
GEPA vs MIPROv2 (AIME-2025)
+12% accuracy
arXiv 2507.19457
GEPA example budget
20-100 examples vs thousands of RL rollouts
github.com/gepa-ai/gepa
Running GEPA in DSPy: Dataset Size, Metrics, and a Minimal Example
GEPA is available as 
dspy.GEPA
 and at 
github.com/gepa-ai/gepa
https://github.com/gepa-ai/gepa
. Here is the shape of a real run.
Start with data. You need 20 to 100 labeled examples, split into a training set GEPA learns from and a validation set it scores candidates against. More is fine, but GEPA's whole point is sample efficiency, so don't block on collecting thousands.
Next, write a feedback metric. This is the load-bearing decision. The function returns both a score and a text explanation.
import dspy

def feedback_metric(example, prediction, trace=None, pred_name=None, pred_trace=None):
    correct = prediction.answer.strip().lower() == example.answer.strip().lower()
    score = 1.0 if correct else 0.0
    if correct:
        feedback = "Correct answer and the reasoning matched the gold rationale."
    else:
        feedback = (
            f"Predicted '{prediction.answer}' but the gold answer is "
            f"'{example.answer}'. The model appears to have ignored the "
            f"constraint in the question. Re-read the input before answering."
        )
    return dspy.Prediction(score=score, feedback=feedback)


Then compile your program.
program = dspy.ChainOfThought("question -> answer")

optimizer = dspy.GEPA(
    metric=feedback_metric,
    auto="medium",                  # optimization budget: light / medium / heavy
    reflection_lm=dspy.LM("openai/gpt-5", temperature=1.0, max_tokens=8000),
)

optimized = optimizer.compile(
    program,
    trainset=trainset,
    valset=valset,
)

optimized.save("optimized_program.json")


Two configuration notes. The 
reflection_lm
 should be a strong model, since it's doing the diagnostic reasoning that drives the whole loop; it's worth spending more here even if your inference model is small. The 
auto
 budget controls how many rollouts GEPA spends, and "medium" is a sane starting point before you scale up.
The metric is where this connects to the rest of your stack. If you already run 
LLM-as-judge for regression testing non-deterministic systems
https://particula.tech/blog/llm-as-judge-regression-testing-non-deterministic
, that judge rubric is a ready-made feedback source: the judge already explains why an output is good or bad, which is exactly what GEPA's reflection LLM wants to read. This is the part of the work where Particula Tech spends most of its time when we build 
eval-driven optimization pipelines
https://particula.tech/blog/evals-driven-development-practical-workflow
 for clients: the optimizer is easy to call, but a feedback metric that actually captures task quality is where the leverage lives.
Treat the output as a build artifact. The optimized prompt is a static string at inference time, so the reflection cost is paid once during compilation, not on every request. Version it, gate it behind your eval suite, and re-run GEPA when your model or data shifts.
When to Use Which Optimizer vs Continued Hand-Tuning
Here is the decision I'd give a team standing at this fork.
Hand-tune
 only for single-module prototypes where you're still discovering what the task even is. Before you have a metric, optimization has nothing to optimize against. Hand-tuning is for the exploration phase, not production.
Use MIPROv2
 when you have a scalar metric and no easy way to produce text feedback, when few-shot demonstrations carry a lot of the performance (common on smaller models), or when you want a fast, well-understood baseline before investing in feedback engineering. It is the lower-friction starting point.
Use GEPA
 when you can write a feedback-rich metric, when you're on a hard reasoning or instruction-following task where the 10-12% gap over MIPROv2 matters, when you want to avoid the cost and infrastructure of weight-updating RL like GRPO, or when sample efficiency is a constraint and you only have a few dozen labeled examples.
A pragmatic sequence works well: hand-write a first prompt to understand the task, run MIPROv2 for a quick optimized baseline, then write a real feedback metric and run GEPA to close the gap. The transition from clever wording to compiled prompts is the same shift that separates 
prompt engineering from fine-tuning as production strategies
https://particula.tech/blog/prompt-engineering-vs-fine-tuning
, and it belongs in the broader toolchain we cover in our 
AI development tools pillar
https://particula.tech/blog/pillar/ai-development-tools
.
Step back and the framing changes. In 2026, the question is no longer whether to optimize prompts automatically. The optimizers are good enough and cheap enough that hand-tuning a multi-module system is a choice to leave performance on the table. The real question is whether you've built a metric worth optimizing against. GEPA rewards that investment more than anything else available.
Frequently Asked Questions
Quick answers to common questions about this topic
What is DSPy GEPA and how does it optimize prompts?
GEPA (Genetic-Pareto) is a prompt optimizer in the DSPy framework that improves prompts through reflective evolution rather than gradient descent. It runs your program, reads the execution trace and the metric's natural-language feedback, then uses an LLM to reflect on failures and propose better instructions. It keeps a Pareto frontier of candidate prompts and mutates the strongest ones. On Qwen3-8B it outperforms the RL method GRPO by up to 20% while using up to 35x fewer rollouts, and it typically needs only 20 to 100 labeled examples instead of thousands of reinforcement-learning rollouts.
GEPA vs MIPROv2: which DSPy optimizer should I use?
How many examples does GEPA need to optimize a prompt?
GEPA vs GRPO: is reflective prompt evolution better than RL?
What metric should I write for GEPA in DSPy?
Is GEPA production-ready and where can I get it?
Need help compiling your DSPy pipeline into a measurable, optimized system? Particula Tech builds eval-gated prompt optimization for production AI.
Contact Us
By subscribing, you agree to our 
Privacy Policy
https://particula.tech/privacy
.
Related Articles
[
 Jun 18, 2026
Spec-Driven Dev Tools: Spec Kit vs Kiro vs Tessl
Spec Kit hit 111k stars and 30+ agents, but Kiro ships 3 files and Tessl makes the spec the source. A 2026 framework for picking the right SDD tool.](https://particula.tech/blog/spec-driven-development-tools-spec-kit-vs-kiro-vs-tessl)
[
 Jun 15, 2026
Code Execution With MCP: Cut Tool Tokens up to 98%
Code execution with MCP cut Anthropic's tool tokens from 150K to 2K (98.7%); third-party tests show 78-99% input cuts. How it works and when to use it.](https://particula.tech/blog/code-execution-mcp-token-reduction-pattern)
[
 Jun 14, 2026
DORA 2025: AI Raised Throughput 98%, Tripled Incidents
DORA 2025 found AI raised PR throughput 98% but pushed incidents per PR up 243% and review time up 441%. The acceleration whiplash data and the fix.](https://particula.tech/blog/dora-2025-ai-acceleration-whiplash-incidents-bugs-pr-review-data)
PARTICULA
https://particula.tech/
AI Insights Newsletter
Subscribe
By subscribing, you agree to our 
Privacy Policy
https://particula.tech/privacy
.
© 2026
Privacy
https://particula.tech/privacy
 
Terms
https://particula.tech/terms
 
Cookies
https://particula.tech/cookies
 
Careers
https://particula.tech/careers
 
FAQ
https://particula.tech/faq
 

https://www.instagram.com/particula.tech/
 

https://www.linkedin.com/company/particula-tech/
 

https://x.com/particulaai
 

https://github.com/particula-tech
EN
 
Sebastian Mondragon Got questions? Let's discuss this article Ask Me →
https://particula.tech/book