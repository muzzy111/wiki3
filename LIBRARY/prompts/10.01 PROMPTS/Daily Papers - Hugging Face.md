# Daily Papers - Hugging Face

Source URL: https://huggingface.co/papers?q=compositional%20prompt%20optimization

Daily Papers - Hugging Face
Hugging Face's logo Hugging Face
https://huggingface.co/
Models
https://huggingface.co/models
Datasets
https://huggingface.co/datasets
Spaces
https://huggingface.co/spaces
Buckets new
https://huggingface.co/storage
Docs
https://huggingface.co/docs
Enterprise
https://huggingface.co/enterprise
Pricing
https://huggingface.co/pricing
Website
Tasks
https://huggingface.co/tasks
HuggingChat
https://huggingface.co/chat
Collections
https://huggingface.co/collections
Languages
https://huggingface.co/languages
Organizations
https://huggingface.co/organizations
Community
Blog
https://huggingface.co/blog
Posts
https://huggingface.co/posts
Daily Papers
https://huggingface.co/papers
Learn
https://huggingface.co/learn
Discord
https://huggingface.co/join/discord
Forum
https://discuss.huggingface.co/
GitHub
https://github.com/huggingface
Solutions
Team & Enterprise
https://huggingface.co/enterprise
Hugging Face PRO
https://huggingface.co/pro
Enterprise Support
https://huggingface.co/support
Inference Providers
https://huggingface.co/inference/models
Inference Endpoints
https://huggingface.co/inference-endpoints
Storage Buckets
https://huggingface.co/storage
Log In
https://huggingface.co/login
Sign Up
https://huggingface.co/join
new
Get trending papers in your email inbox once a day!
Get trending papers in your email inbox!
Subscribe
https://huggingface.co/login?next=%2Fpapers
Daily Papers
by 
AK
https://huggingface.co/akhaliq
 and the research community
compositional prompt optimization
Daily
Weekly
Monthly 

https://huggingface.co/papers/trending
 

https://huggingface.co/papers/date/2026-07-03
Jul 6
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2605.28360
Prompt Codebooks: Discrete Compositional Optimization for Language Model Instruction Refinement
https://huggingface.co/papers/2605.28360
Automatic prompt optimization (APO) has driven significant gains in LLM-based agentic workflows. However, existing methods treat each task's prompt as a monolithic, instance-blind string optimized through global edits, producing brittle updates and preventing the reuse of learned sub-behaviors. We propose Prompt Codebooks (PCO), a novel compositional prompt optimization framework that recasts APO as discrete learning over a finite vocabulary of natural-language instincts - atomic, reusable instruction units. PCO organizes prompt-construction knowledge in a discrete codebook and routes each input to a small subset of entries via an LLM-based encoder; a generator composes them into a prompt for the frozen target model; a critic emits a structured verdict that decomposes by attribution into per-variable textual gradients, jointly training the encoder, generator, and codebook under a language-valued min-max objective. The resulting routing is per-instance: different inputs in the same task receive different instinct compositions, a regime structurally inexpressible under instance-blind methods. Across six benchmarks on Qwen3-8B and LLaMA-3.1-8B, PCO improves over zero-shot by up to +30.36 points, surpasses the strongest prior baseline (GEPA) by +3.34 on HotpotQA and +1.11 in aggregate, and reduces deployed prompt length by up to 14.1x versus MIPROv2 and 3.0x versus GEPA using only K=16 instincts.
https://huggingface.co/papers/2605.28360
[
3 authors](https://huggingface.co/papers/2605.28360)
·
May 26
 [-] 12
https://huggingface.co/login?next=%2Fpapers%2F2510.20206
RAPO++: Cross-Stage Prompt Optimization for Text-to-Video Generation via Data Alignment and Test-Time Scaling
https://huggingface.co/papers/2510.20206
Prompt design plays a crucial role in text-to-video (T2V) generation, yet user-provided prompts are often short, unstructured, and misaligned with training data, limiting the generative potential of diffusion-based T2V models. We present RAPO++, a cross-stage prompt optimization framework that unifies training-data--aligned refinement, test-time iterative scaling, and large language model (LLM) fine-tuning to substantially improve T2V generation without modifying the underlying generative backbone. In Stage 1, Retrieval-Augmented Prompt Optimization (RAPO) enriches user prompts with semantically relevant modifiers retrieved from a relation graph and refactors them to match training distributions, enhancing compositionality and multi-object fidelity. Stage 2 introduces Sample-Specific Prompt Optimization (SSPO), a closed-loop mechanism that iteratively refines prompts using multi-source feedback -- including semantic alignment, spatial fidelity, temporal coherence, and task-specific signals such as optical flow -- yielding progressively improved video generation quality. Stage 3 leverages optimized prompt pairs from SSPO to fine-tune the rewriter LLM, internalizing task-specific optimization patterns and enabling efficient, high-quality prompt generation even before inference. Extensive experiments across five state-of-the-art T2V models and five benchmarks demonstrate that RAPO++ achieves significant gains in semantic alignment, compositional reasoning, temporal stability, and physical plausibility, outperforming existing methods by large margins. Our results highlight RAPO++ as a model-agnostic, cost-efficient, and scalable solution that sets a new standard for prompt optimization in T2V generation. The code is available at https://github.com/Vchitect/RAPO.
https://huggingface.co/papers/2510.20206
 

https://huggingface.co/papers/2510.20206
SJTU Shanghai Jiao Tong University
https://huggingface.co/SJTU
·
Oct 22, 2025 
1
https://huggingface.co/papers/2510.20206#community
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2402.12004
Direct Consistency Optimization for Compositional Text-to-Image Personalization
https://huggingface.co/papers/2402.12004
Text-to-image (T2I) diffusion models, when fine-tuned on a few personal images, are able to generate visuals with a high degree of consistency. However, they still lack in synthesizing images of different scenarios or styles that are possible in the original pretrained models. To address this, we propose to fine-tune the T2I model by maximizing consistency to reference images, while penalizing the deviation from the pretrained model. We devise a novel training objective for T2I diffusion models that minimally fine-tunes the pretrained model to achieve consistency. Our method, dubbed Direct Consistency Optimization, is as simple as regular diffusion loss, while significantly enhancing the compositionality of personalized T2I models. Also, our approach induces a new sampling method that controls the tradeoff between image fidelity and prompt fidelity. Lastly, we emphasize the necessity of using a comprehensive caption for reference images to further enhance the image-text alignment. We show the efficacy of the proposed method on the T2I personalization for subject, style, or both. In particular, our method results in a superior Pareto frontier to the baselines. Generated examples and codes are in our project page( https://dco-t2i.github.io/).
https://huggingface.co/papers/2402.12004
[
4 authors](https://huggingface.co/papers/2402.12004)
·
Feb 18, 2024
 [-] 1
https://huggingface.co/login?next=%2Fpapers%2F2509.23457
No Concept Left Behind: Test-Time Optimization for Compositional Text-to-Image Generation
https://huggingface.co/papers/2509.23457
Despite recent advances in text-to-image (T2I) models, they often fail to faithfully render all elements of complex prompts, frequently omitting or misrepresenting specific objects and attributes. Test-time optimization has emerged as a promising approach to address this limitation by refining generation without the need for retraining. In this paper, we propose a fine-grained test-time optimization framework that enhances compositional faithfulness in T2I generation. Unlike most of prior approaches that rely solely on a global image/text similarity score, our method decomposes the input prompt into semantic concepts and evaluates alignment at both the global and concept levels. A fine-grained variant of CLIP is used to compute concept-level correspondence, producing detailed feedback on missing or inaccurate concepts. This feedback is fed into an iterative prompt refinement loop, enabling the large language model to propose improved prompts. Experiments on DrawBench and CompBench prompts demonstrate that our method significantly improves concept coverage and human-judged faithfulness over both standard test-time optimization and the base T2I model. Code is available at: https://github.com/AmirMansurian/NoConceptLeftBehind
https://huggingface.co/papers/2509.23457
[
6 authors](https://huggingface.co/papers/2509.23457)
·
Sep 27, 2025
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2603.18528
Correlation-Weighted Multi-Reward Optimization for Compositional Generation
https://huggingface.co/papers/2603.18528
Text-to-image models produce images that align well with natural language prompts, but compositional generation has long been a central challenge. Models often struggle to satisfy multiple concepts within a single prompt, frequently omitting some concepts and resulting in partial success. Such failures highlight the difficulty of jointly optimizing multiple concepts during reward optimization, where competing concepts can interfere with one another. To address this limitation, we propose Correlation-Weighted Multi-Reward Optimization (\ours), a framework that leverages the correlation structure among concept rewards to adaptively weight each attribute concept in optimization. By accounting for interactions among concepts, \ours balances competing reward signals and emphasizes concepts that are partially satisfied yet inconsistently generated across samples, improving compositional generation. Specifically, we decompose multi-concept prompts into pre-defined concept groups (\eg, objects, attributes, and relations) and obtain reward signals from dedicated reward models for each concept. We then adaptively reweight these rewards, assigning higher weights to conflicting or hard-to-satisfy concepts using correlation-based difficulty estimation. By focusing optimization on the most challenging concepts within each group, \ours encourages the model to consistently satisfy all requested attributes simultaneously. We apply our approach to train state-of-the-art diffusion models, SD3.5 and FLUX.1-dev, and demonstrate consistent improvements on challenging multi-concept benchmarks, including ConceptMix, GenEval 2, and T2I-CompBench.
https://huggingface.co/papers/2603.18528
[
3 authors](https://huggingface.co/papers/2603.18528)
·
Mar 18
 [-] 2
https://huggingface.co/login?next=%2Fpapers%2F2605.28615
Compositional Text-to-Image Generation Via Region-aware Bimodal Direct Preference Optimization
https://huggingface.co/papers/2605.28615
Despite the rapid progress of text-to-image (T2I) models, generating images that accurately reflect complex compositional prompts (covering attribute bindings, object relationships, counting) still remains challenging. To address this, we propose BiDPO, a framework to enhance T2I model's capability of compositional text-to-image generation. We begin by introducing an carefully designed pipeline to construct a large-scale preference dataset, BiComp, with strictly quality control. Then, we extend Diffusion DPO to jointly optimize image and text preferences, which is shown to greatly effective in improving the models to follow complex text prompt in generation. To further enhance the models for fine-grained alignment, we employ a region-level guidance method to focus on regions relevant to compositional concepts. Experimental results demonstrate that our BiDPO substantially improves compositional fidelity, consistently outperforming prior methods across multiple benchmarks. Our approach highlights the potential of preference-based fine-tuning for complex text-to-image tasks, offering a flexible and scalable alternative to existing techniques.
https://huggingface.co/papers/2605.28615
[
4 authors](https://huggingface.co/papers/2605.28615)
·
May 26 
2
https://huggingface.co/papers/2605.28615#community
 [-] 3
https://huggingface.co/login?next=%2Fpapers%2F2603.08239
Fibration Policy Optimization
https://huggingface.co/papers/2603.08239
Large language models are increasingly trained as heterogeneous systems spanning multiple domains, expert partitions, and agentic pipelines, yet prevalent proximal objectives operate at a single scale and lack a principled mechanism for coupling token-level, trajectory-level, and higher-level hierarchical stability control. To bridge this gap, we derive the Aggregational Policy Censoring Objective (APC-Obj), the first exact unconstrained reformulation of sample-based TV-TRPO, establishing that clipping-based surrogate design and trust-region optimization are dual formulations of the same problem. Building on this foundation, we develop Fiber Bundle Gating (FBG), an algebraic framework that organizes sampled RL data as a fiber bundle and decomposes ratio gating into a base-level gate on trajectory aggregates and a fiber-level gate on per-token residuals, with provable first-order agreement with the true RL objective near on-policy. From APC-Obj and FBG we derive Fibration Policy Optimization (or simply, FiberPO), a concrete objective whose Jacobian is block-diagonal over trajectories, reduces to identity at on-policy, and provides better update direction thus improving token efficiency. The compositional nature of the framework extends beyond the trajectory-token case: fibrations compose algebraically into a Fibration Gating Hierarchy (FGH) that scales the same gating mechanism to arbitrary hierarchical depth without new primitives, as demonstrated by FiberPO-Domain, a four-level instantiation with independent trust-region budgets at the domain, prompt group, trajectory, and token levels. Together, these results connect the trust-region theory, a compositional algebraic structure, and practical multi-scale stability control into a unified framework for LLM policy optimization.
https://huggingface.co/papers/2603.08239
[
5 authors](https://huggingface.co/papers/2603.08239)
·
Mar 9
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2504.15032
DyST-XL: Dynamic Layout Planning and Content Control for Compositional Text-to-Video Generation
https://huggingface.co/papers/2504.15032
Compositional text-to-video generation, which requires synthesizing dynamic scenes with multiple interacting entities and precise spatial-temporal relationships, remains a critical challenge for diffusion-based models. Existing methods struggle with layout discontinuity, entity identity drift, and implausible interaction dynamics due to unconstrained cross-attention mechanisms and inadequate physics-aware reasoning. To address these limitations, we propose DyST-XL, a training-free framework that enhances off-the-shelf text-to-video models (e.g., CogVideoX-5B) through frame-aware control. DyST-XL integrates three key innovations: (1) A Dynamic Layout Planner that leverages large language models (LLMs) to parse input prompts into entity-attribute graphs and generates physics-aware keyframe layouts, with intermediate frames interpolated via trajectory optimization; (2) A Dual- Prompt Controlled Attention Mechanism that enforces localized text-video alignment through frame-aware attention masking, achieving precise control over individual entities; and (3) An Entity-Consistency Constraint strategy that propagates first-frame feature embeddings to subsequent frames during denoising, preserving object identity without manual annotation. Experiments demonstrate that DyST-XL excels in compositional text-to-video generation, significantly improving performance on complex prompts and bridging a crucial gap in training-free video synthesis. The code is released in https://github.com/XiaoBuL/DyST-XL.
https://huggingface.co/papers/2504.15032
[
5 authors](https://huggingface.co/papers/2504.15032)
·
Apr 21, 2025
 [-] 1
https://huggingface.co/login?next=%2Fpapers%2F2302.03668
Hard Prompts Made Easy: Gradient-Based Discrete Optimization for Prompt Tuning and Discovery
https://huggingface.co/papers/2302.03668
The strength of modern generative models lies in their ability to be controlled through text-based prompts. Typical "hard" prompts are made from interpretable words and tokens, and must be hand-crafted by humans. There are also "soft" prompts, which consist of continuous feature vectors. These can be discovered using powerful optimization methods, but they cannot be easily interpreted, re-used across models, or plugged into a text-based interface. We describe an approach to robustly optimize hard text prompts through efficient gradient-based optimization. Our approach automatically generates hard text-based prompts for both text-to-image and text-to-text applications. In the text-to-image setting, the method creates hard prompts for diffusion models, allowing API users to easily generate, discover, and mix and match image concepts without prior knowledge on how to prompt the model. In the text-to-text setting, we show that hard prompts can be automatically discovered that are effective in tuning LMs for classification.
https://huggingface.co/papers/2302.03668
[
6 authors](https://huggingface.co/papers/2302.03668)
·
Feb 7, 2023
 [-] 79
https://huggingface.co/login?next=%2Fpapers%2F2309.03409
Large Language Models as Optimizers
https://huggingface.co/papers/2309.03409
Optimization is ubiquitous. While derivative-based algorithms have been powerful tools for various problems, the absence of gradient imposes challenges on many real-world applications. In this work, we propose Optimization by PROmpting (OPRO), a simple and effective approach to leverage large language models (LLMs) as optimizers, where the optimization task is described in natural language. In each optimization step, the LLM generates new solutions from the prompt that contains previously generated solutions with their values, then the new solutions are evaluated and added to the prompt for the next optimization step. We first showcase OPRO on linear regression and traveling salesman problems, then move on to prompt optimization where the goal is to find instructions that maximize the task accuracy. With a variety of LLMs, we demonstrate that the best prompts optimized by OPRO outperform human-designed prompts by up to 8% on GSM8K, and by up to 50% on Big-Bench Hard tasks.
https://huggingface.co/papers/2309.03409
[
7 authors](https://huggingface.co/papers/2309.03409)
·
Sep 6, 2023 
4
https://huggingface.co/papers/2309.03409#community
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2410.15397
IPO: Interpretable Prompt Optimization for Vision-Language Models
https://huggingface.co/papers/2410.15397
Pre-trained vision-language models like CLIP have remarkably adapted to various downstream tasks. Nonetheless, their performance heavily depends on the specificity of the input text prompts, which requires skillful prompt template engineering. Instead, current approaches to prompt optimization learn the prompts through gradient descent, where the prompts are treated as adjustable parameters. However, these methods tend to lead to overfitting of the base classes seen during training and produce prompts that are no longer understandable by humans. This paper introduces a simple but interpretable prompt optimizer (IPO), that utilizes large language models (LLMs) to generate textual prompts dynamically. We introduce a Prompt Optimization Prompt that not only guides LLMs in creating effective prompts but also stores past prompts with their performance metrics, providing rich in-context information. Additionally, we incorporate a large multimodal model (LMM) to condition on visual content by generating image descriptions, which enhance the interaction between textual and visual modalities. This allows for thae creation of dataset-specific prompts that improve generalization performance, while maintaining human comprehension. Extensive testing across 11 datasets reveals that IPO not only improves the accuracy of existing gradient-descent-based prompt learning methods but also considerably enhances the interpretability of the generated prompts. By leveraging the strengths of LLMs, our approach ensures that the prompts remain human-understandable, thereby facilitating better transparency and oversight for vision-language models.
https://huggingface.co/papers/2410.15397
[
3 authors](https://huggingface.co/papers/2410.15397)
·
Oct 20, 2024
 [-] 18
https://huggingface.co/login?next=%2Fpapers%2F2507.14241
Promptomatix: An Automatic Prompt Optimization Framework for Large Language Models
https://huggingface.co/papers/2507.14241
Large Language Models (LLMs) perform best with well-crafted prompts, yet prompt engineering remains manual, inconsistent, and inaccessible to non-experts. We introduce Promptomatix, an automatic prompt optimization framework that transforms natural language task descriptions into high-quality prompts without requiring manual tuning or domain expertise. Promptomatix supports both a lightweight meta-prompt-based optimizer and a DSPy-powered compiler, with modular design enabling future extension to more advanced frameworks. The system analyzes user intent, generates synthetic training data, selects prompting strategies, and refines prompts using cost-aware objectives. Evaluated across 5 task categories, Promptomatix achieves competitive or superior performance compared to existing libraries, while reducing prompt length and computational overhead making prompt optimization scalable and efficient.
https://huggingface.co/papers/2507.14241
[
9 authors](https://huggingface.co/papers/2507.14241)
·
Jul 17, 2025 
2
https://huggingface.co/papers/2507.14241#community
 [-] 2
https://huggingface.co/login?next=%2Fpapers%2F2310.16427
PromptAgent: Strategic Planning with Language Models Enables Expert-level Prompt Optimization
https://huggingface.co/papers/2310.16427
Highly effective, task-specific prompts are often heavily engineered by experts to integrate detailed instructions and domain insights based on a deep understanding of both instincts of large language models (LLMs) and the intricacies of the target task. However, automating the generation of such expert-level prompts remains elusive. Existing prompt optimization methods tend to overlook the depth of domain knowledge and struggle to efficiently explore the vast space of expert-level prompts. Addressing this, we present PromptAgent, an optimization method that autonomously crafts prompts equivalent in quality to those handcrafted by experts. At its core, PromptAgent views prompt optimization as a strategic planning problem and employs a principled planning algorithm, rooted in Monte Carlo tree search, to strategically navigate the expert-level prompt space. Inspired by human-like trial-and-error exploration, PromptAgent induces precise expert-level insights and in-depth instructions by reflecting on model errors and generating constructive error feedback. Such a novel framework allows the agent to iteratively examine intermediate prompts (states), refine them based on error feedbacks (actions), simulate future rewards, and search for high-reward paths leading to expert prompts. We apply PromptAgent to 12 tasks spanning three practical domains: BIG-Bench Hard (BBH), as well as domain-specific and general NLP tasks, showing it significantly outperforms strong Chain-of-Thought and recent prompt optimization baselines. Extensive analyses emphasize its capability to craft expert-level, detailed, and domain-insightful prompts with great efficiency and generalizability.
https://huggingface.co/papers/2310.16427
[
9 authors](https://huggingface.co/papers/2310.16427)
·
Oct 24, 2023
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2505.09930
Rethinking Prompt Optimizers: From Prompt Merits to Optimization
https://huggingface.co/papers/2505.09930
Prompt optimization (PO) offers a practical alternative to fine-tuning large language models (LLMs), enabling performance improvements without altering model weights. Existing methods typically rely on advanced, large-scale LLMs like GPT-4 to generate optimized prompts. However, due to limited downward compatibility, verbose, instruction-heavy prompts from advanced LLMs can overwhelm lightweight inference models and degrade response quality. In this work, we rethink prompt optimization through the lens of interpretable design. We first identify a set of model-agnostic prompt quality merits and empirically validate their effectiveness in enhancing prompt and response quality. We then introduce MePO, a merit-guided, lightweight, and locally deployable prompt optimizer trained on our preference dataset built from merit-aligned prompts generated by a lightweight LLM. Unlike prior work, MePO avoids online optimization reliance, reduces cost and privacy concerns, and, by learning clear, interpretable merits, generalizes effectively to both large-scale and lightweight inference models. Experiments demonstrate that MePO achieves better results across diverse tasks and model types, offering a scalable and robust solution for real-world deployment. Our model and dataset are available at: https://github.com/MidiyaZhu/MePO
https://huggingface.co/papers/2505.09930
[
8 authors](https://huggingface.co/papers/2505.09930)
·
May 14, 2025
 [-] 3
https://huggingface.co/login?next=%2Fpapers%2F2505.16307
PMPO: Probabilistic Metric Prompt Optimization for Small and Large Language Models
https://huggingface.co/papers/2505.16307
Prompt optimization offers a practical and broadly applicable alternative to fine-tuning for improving large language model (LLM) performance. However, existing methods often rely on costly output generation, self-critiquing abilities, or human-annotated preferences, which limit their scalability, especially for smaller or non-instruction-tuned models. We introduce PMPO (Probabilistic Metric Prompt Optimization), a unified framework that refines prompts using token-level cross-entropy loss as a direct, lightweight evaluation signal. PMPO identifies low-quality prompt segments by masking and measuring their impact on loss, then rewrites and selects improved variants by minimizing loss over positive and negative examples. Unlike prior methods, it requires no output sampling or human evaluation during optimization, relying only on forward passes and log-likelihoods. PMPO supports both supervised and preference-based tasks through a closely aligned loss-based evaluation strategy. Experiments show that PMPO consistently outperforms prior methods across model sizes and tasks: it achieves the highest average accuracy on BBH, performs strongly on GSM8K and AQUA-RAT, and improves AlpacaEval 2.0 win rates by over 19 points. These results highlight PMPO's effectiveness, efficiency, and broad applicability.
https://huggingface.co/papers/2505.16307
[
5 authors](https://huggingface.co/papers/2505.16307)
·
May 21, 2025
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2508.02452
LatentPrompt: Optimizing Promts in Latent Space
https://huggingface.co/papers/2508.02452
Recent advances have shown that optimizing prompts for Large Language Models (LLMs) can significantly improve task performance, yet many optimization techniques rely on heuristics or manual exploration. We present LatentPrompt, a model-agnostic framework for prompt optimization that leverages latent semantic space to automatically generate, evaluate, and refine candidate prompts without requiring hand-crafted rules. Beginning with a set of seed prompts, our method embeds them in a continuous latent space and systematically explores this space to identify prompts that maximize task-specific performance. In a proof-of-concept study on the Financial PhraseBank sentiment classification benchmark, LatentPrompt increased classification accuracy by approximately 3 percent after a single optimization cycle. The framework is broadly applicable, requiring only black-box access to an LLM and an automatic evaluation metric, making it suitable for diverse domains and tasks.
https://huggingface.co/papers/2508.02452
[
4 authors](https://huggingface.co/papers/2508.02452)
·
Aug 4, 2025
 [-] 72
https://huggingface.co/login?next=%2Fpapers%2F2505.09666
System Prompt Optimization with Meta-Learning
https://huggingface.co/papers/2505.09666
Large Language Models (LLMs) have shown remarkable capabilities, with optimizing their input prompts playing a pivotal role in maximizing their performance. However, while LLM prompts consist of both the task-agnostic system prompts and task-specific user prompts, existing work on prompt optimization has focused on user prompts specific to individual queries or tasks, and largely overlooked the system prompt that is, once optimized, applicable across different tasks and domains. Motivated by this, we introduce the novel problem of bilevel system prompt optimization, whose objective is to design system prompts that are robust to diverse user prompts and transferable to unseen tasks. To tackle this problem, we then propose a meta-learning framework, which meta-learns the system prompt by optimizing it over various user prompts across multiple datasets, while simultaneously updating the user prompts in an iterative manner to ensure synergy between them. We conduct experiments on 14 unseen datasets spanning 5 different domains, on which we show that our approach produces system prompts that generalize effectively to diverse user prompts. Also, our findings reveal that the optimized system prompt enables rapid adaptation even to unseen tasks, requiring fewer optimization steps for test-time user prompts while achieving improved performance.
https://huggingface.co/papers/2505.09666
[
3 authors](https://huggingface.co/papers/2505.09666)
·
May 14, 2025 
3
https://huggingface.co/papers/2505.09666#community
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2501.03486
Align-Pro: A Principled Approach to Prompt Optimization for LLM Alignment
https://huggingface.co/papers/2501.03486
The alignment of large language models (LLMs) with human values is critical as these models become increasingly integrated into various societal and decision-making processes. Traditional methods, such as reinforcement learning from human feedback (RLHF), achieve alignment by fine-tuning model parameters, but these approaches are often computationally expensive and impractical when models are frozen or inaccessible for parameter modification. In contrast, prompt optimization is a viable alternative to RLHF for LLM alignment. While the existing literature has shown empirical promise of prompt optimization, its theoretical underpinning remains under-explored. We address this gap by formulating prompt optimization as an optimization problem and try to provide theoretical insights into the optimality of such a framework. To analyze the performance of the prompt optimization, we study theoretical suboptimality bounds and provide insights in terms of how prompt optimization depends upon the given prompter and target model. We also provide empirical validation through experiments on various datasets, demonstrating that prompt optimization can effectively align LLMs, even when parameter fine-tuning is not feasible.
https://huggingface.co/papers/2501.03486
[
6 authors](https://huggingface.co/papers/2501.03486)
·
Jan 6, 2025
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2402.11811
FIPO: Free-form Instruction-oriented Prompt Optimization with Preference Dataset and Modular Fine-tuning Schema
https://huggingface.co/papers/2402.11811
In the quest to facilitate the deep intelligence of Large Language Models (LLMs) accessible in final-end user-bot interactions, the art of prompt crafting emerges as a critical yet complex task for the average user. Contrast to previous model-oriented yet instruction-agnostic Automatic Prompt Optimization methodologies, yielding polished results for predefined target models while suffering rapid degradation with out-of-box models, we present Free-form Instruction-oriented Prompt Optimization (FIPO). This approach is supported by our large-scale prompt preference dataset and employs a modular fine-tuning schema. The FIPO schema reimagines the optimization process into manageable modules, anchored by a meta prompt that dynamically adapts content. This allows for the flexible integration of the raw task instruction, the optional instruction response, and the optional ground truth to produce finely optimized task prompts. The FIPO preference dataset is meticulously constructed using the optimal and suboptimal LLMs, undergoing rigorous cross-verification by human experts and analytical models. Applying the insights from the data with Tulu2 models and fine-tuning strategies, we validate the efficacy of FIPO schema across five public benchmarks. Codes, data and scripts are here: https://github.com/LuJunru/FIPO_Project.
https://huggingface.co/papers/2402.11811
[
6 authors](https://huggingface.co/papers/2402.11811)
·
Feb 18, 2024
 [-] 2
https://huggingface.co/login?next=%2Fpapers%2F2305.03495
Automatic Prompt Optimization with "Gradient Descent" and Beam Search
https://huggingface.co/papers/2305.03495
Large Language Models (LLMs) have shown impressive performance as general purpose agents, but their abilities remain highly dependent on prompts which are hand written with onerous trial-and-error effort. We propose a simple and nonparametric solution to this problem, Automatic Prompt Optimization (APO), which is inspired by numerical gradient descent to automatically improve prompts, assuming access to training data and an LLM API. The algorithm uses minibatches of data to form natural language gradients'' that criticize the current prompt. The gradients are then propagated'' into the prompt by editing the prompt in the opposite semantic direction of the gradient. These gradient descent steps are guided by a beam search and bandit selection procedure which significantly improves algorithmic efficiency. Preliminary results across three benchmark NLP tasks and the novel problem of LLM jailbreak detection suggest that Automatic Prompt Optimization can outperform prior prompt editing techniques and improve an initial prompt's performance by up to 31%, by using data to rewrite vague task descriptions into more precise annotation instructions.
https://huggingface.co/papers/2305.03495
[
6 authors](https://huggingface.co/papers/2305.03495)
·
May 4, 2023
 [-] 1
https://huggingface.co/login?next=%2Fpapers%2F2405.18369
PromptWizard: Task-Aware Prompt Optimization Framework
https://huggingface.co/papers/2405.18369
Large language models (LLMs) have transformed AI across diverse domains, with prompting being central to their success in guiding model outputs. However, manual prompt engineering is both labor-intensive and domain-specific, necessitating the need for automated solutions. We introduce PromptWizard, a novel, fully automated framework for discrete prompt optimization, utilizing a self-evolving, self-adapting mechanism. Through a feedback-driven critique and synthesis process, PromptWizard achieves an effective balance between exploration and exploitation, iteratively refining both prompt instructions and in-context examples to generate human-readable, task-specific prompts. This guided approach systematically improves prompt quality, resulting in superior performance across 45 tasks. PromptWizard excels even with limited training data, smaller LLMs, and various LLM architectures. Additionally, our cost analysis reveals a substantial reduction in API calls, token usage, and overall cost, demonstrating PromptWizard's efficiency, scalability, and advantages over existing prompt optimization strategies.
https://huggingface.co/papers/2405.18369
[
6 authors](https://huggingface.co/papers/2405.18369)
·
May 28, 2024
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2505.02273
Demystifying optimized prompts in language models
https://huggingface.co/papers/2505.02273
Modern language models (LMs) are not robust to out-of-distribution inputs. Machine generated (``optimized'') prompts can be used to modulate LM outputs and induce specific behaviors while appearing completely uninterpretable. In this work, we investigate the composition of optimized prompts, as well as the mechanisms by which LMs parse and build predictions from optimized prompts. We find that optimized prompts primarily consist of punctuation and noun tokens which are more rare in the training data. Internally, optimized prompts are clearly distinguishable from natural language counterparts based on sparse subsets of the model's activations. Across various families of instruction-tuned models, optimized prompts follow a similar path in how their representations form through the network.
https://huggingface.co/papers/2505.02273
[
3 authors](https://huggingface.co/papers/2505.02273)
·
May 4, 2025
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2410.14826
SPRIG: Improving Large Language Model Performance by System Prompt Optimization
https://huggingface.co/papers/2410.14826
Large Language Models (LLMs) have shown impressive capabilities in many scenarios, but their performance depends, in part, on the choice of prompt. Past research has focused on optimizing prompts specific to a task. However, much less attention has been given to optimizing the general instructions included in a prompt, known as a system prompt. To address this gap, we propose SPRIG, an edit-based genetic algorithm that iteratively constructs prompts from prespecified components to maximize the model's performance in general scenarios. We evaluate the performance of system prompts on a collection of 47 different types of tasks to ensure generalizability. Our study finds that a single optimized system prompt performs on par with task prompts optimized for each individual task. Moreover, combining system and task-level optimizations leads to further improvement, which showcases their complementary nature. Experiments also reveal that the optimized system prompts generalize effectively across model families, parameter sizes, and languages. This study provides insights into the role of system-level instructions in maximizing LLM potential.
https://huggingface.co/papers/2410.14826
[
5 authors](https://huggingface.co/papers/2410.14826)
·
Oct 18, 2024
 [-] 1
https://huggingface.co/login?next=%2Fpapers%2F2404.02717
Automatic Prompt Selection for Large Language Models
https://huggingface.co/papers/2404.02717
Large Language Models (LLMs) can perform various natural language processing tasks with suitable instruction prompts. However, designing effective prompts manually is challenging and time-consuming. Existing methods for automatic prompt optimization either lack flexibility or efficiency. In this paper, we propose an effective approach to automatically select the optimal prompt for a given input from a finite set of synthetic candidate prompts. Our approach consists of three steps: (1) clustering the training data and generating candidate prompts for each cluster using an LLM-based prompt generator; (2) synthesizing a dataset of input-prompt-output tuples for training a prompt evaluator to rank the prompts based on their relevance to the input; (3) using the prompt evaluator to select the best prompt for a new input at test time. Our approach balances prompt generality-specificity and eliminates the need for resource-intensive training and inference. It demonstrates competitive performance on zero-shot question-answering datasets: GSM8K, MultiArith, and AQuA.
https://huggingface.co/papers/2404.02717
[
8 authors](https://huggingface.co/papers/2404.02717)
·
Apr 3, 2024 
2
https://huggingface.co/papers/2404.02717#community
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2403.02993
Localized Zeroth-Order Prompt Optimization
https://huggingface.co/papers/2403.02993
The efficacy of large language models (LLMs) in understanding and generating natural language has aroused a wide interest in developing prompt-based methods to harness the power of black-box LLMs. Existing methodologies usually prioritize a global optimization for finding the global optimum, which however will perform poorly in certain tasks. This thus motivates us to re-think the necessity of finding a global optimum in prompt optimization. To answer this, we conduct a thorough empirical study on prompt optimization and draw two major insights. Contrasting with the rarity of global optimum, local optima are usually prevalent and well-performed, which can be more worthwhile for efficient prompt optimization (Insight I). The choice of the input domain, covering both the generation and the representation of prompts, affects the identification of well-performing local optima (Insight II). Inspired by these insights, we propose a novel algorithm, namely localized zeroth-order prompt optimization (ZOPO), which incorporates a Neural Tangent Kernel-based derived Gaussian process into standard zeroth-order optimization for an efficient search of well-performing local optima in prompt optimization. Remarkably, ZOPO outperforms existing baselines in terms of both the optimization performance and the query efficiency, which we demonstrate through extensive experiments.
https://huggingface.co/papers/2403.02993
[
8 authors](https://huggingface.co/papers/2403.02993)
·
Mar 5, 2024
 [-] 9
https://huggingface.co/login?next=%2Fpapers%2F2604.08801
p1: Better Prompt Optimization with Fewer Prompts
https://huggingface.co/papers/2604.08801
Prompt optimization improves language models without updating their weights by searching for a better system prompt, but its effectiveness varies widely across tasks. We study what makes a task amenable to prompt optimization. We show that the reward variance across different system prompts can be decomposed into two components: variance among responses, which captures generation stochasticity, and variance among system prompts, which captures differences in system prompt quality. Prompt optimization succeeds when variance among system prompts is sufficiently large, but fails when variance among responses dominates the variance of the system prompts. Surprisingly, we further show that scaling to more user prompts can hurt optimization by reducing variance among system prompts, especially on heterogeneous datasets where different user prompts favor different system prompts. Motivated by this insight, we propose p1, a simple user prompt filtering method that selects a small subset of user prompts with high variance across candidate system prompts. This subset of user prompts allows one to distinguish a good system prompt from a bad one, making system optimization easier. Experiments on reasoning benchmarks show that p1 substantially improves prompt optimization over training on the full dataset and outperforms strong baselines such as GEPA. Notably, training on only two prompts from AIME 24 yields a system prompt that generalizes well to other reasoning benchmarks.
https://huggingface.co/papers/2604.08801
[
7 authors](https://huggingface.co/papers/2604.08801)
·
Apr 8 
2
https://huggingface.co/papers/2604.08801#community
 [-] 18
https://huggingface.co/login?next=%2Fpapers%2F2502.06855
Self-Supervised Prompt Optimization
https://huggingface.co/papers/2502.06855
Well-designed prompts are crucial for enhancing Large language models' (LLMs) reasoning capabilities while aligning their outputs with task requirements across diverse domains. However, manually designed prompts require expertise and iterative experimentation. While existing prompt optimization methods aim to automate this process, they rely heavily on external references such as ground truth or by humans, limiting their applicability in real-world scenarios where such data is unavailable or costly to obtain. To address this, we propose Self-Supervised Prompt Optimization (SPO), a cost-efficient framework that discovers effective prompts for both closed and open-ended tasks without requiring external reference. Motivated by the observations that prompt quality manifests directly in LLM outputs and LLMs can effectively assess adherence to task requirements, we derive evaluation and optimization signals purely from output comparisons. Specifically, SPO selects superior prompts through pairwise output comparisons evaluated by an LLM evaluator, followed by an LLM optimizer that aligns outputs with task requirements. Extensive experiments demonstrate that SPO outperforms state-of-the-art prompt optimization methods, achieving comparable or superior results with significantly lower costs (e.g., 1.1% to 5.6% of existing methods) and fewer samples (e.g., three samples). The code is available at https://github.com/geekan/MetaGPT.
https://huggingface.co/papers/2502.06855
[
9 authors](https://huggingface.co/papers/2502.06855)
·
Feb 7, 2025 
1
https://huggingface.co/papers/2502.06855#community
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2502.06487
Adaptive Prompting: Ad-hoc Prompt Composition for Social Bias Detection
https://huggingface.co/papers/2502.06487
Recent advances on instruction fine-tuning have led to the development of various prompting techniques for large language models, such as explicit reasoning steps. However, the success of techniques depends on various parameters, such as the task, language model, and context provided. Finding an effective prompt is, therefore, often a trial-and-error process. Most existing approaches to automatic prompting aim to optimize individual techniques instead of compositions of techniques and their dependence on the input. To fill this gap, we propose an adaptive prompting approach that predicts the optimal prompt composition ad-hoc for a given input. We apply our approach to social bias detection, a highly context-dependent task that requires semantic understanding. We evaluate it with three large language models on three datasets, comparing compositions to individual techniques and other baselines. The results underline the importance of finding an effective prompt composition. Our approach robustly ensures high detection performance, and is best in several settings. Moreover, first experiments on other tasks support its generalizability.
https://huggingface.co/papers/2502.06487
[
7 authors](https://huggingface.co/papers/2502.06487)
·
Feb 10, 2025
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2311.08364
Plum: Prompt Learning using Metaheuristic
https://huggingface.co/papers/2311.08364
Since the emergence of large language models, prompt learning has become a popular method for optimizing and customizing these models. Special prompts, such as Chain-of-Thought, have even revealed previously unknown reasoning capabilities within these models. However, the progress of discovering effective prompts has been slow, driving a desire for general prompt optimization methods. Unfortunately, few existing prompt learning methods satisfy the criteria of being truly "general", i.e., automatic, discrete, black-box, gradient-free, and interpretable all at once. In this paper, we introduce metaheuristics, a branch of discrete non-convex optimization methods with over 100 options, as a promising approach to prompt learning. Within our paradigm, we test six typical methods: hill climbing, simulated annealing, genetic algorithms with/without crossover, tabu search, and harmony search, demonstrating their effectiveness in black-box prompt learning and Chain-of-Thought prompt tuning. Furthermore, we show that these methods can be used to discover more human-understandable prompts that were previously unknown, opening the door to a cornucopia of possibilities in prompt optimization. We release all the codes in https://github.com/research4pan/Plum.
https://huggingface.co/papers/2311.08364
[
7 authors](https://huggingface.co/papers/2311.08364)
·
Nov 14, 2023
 [-] 13
https://huggingface.co/login?next=%2Fpapers%2F2502.04295
Beyond Prompt Content: Enhancing LLM Performance via Content-Format Integrated Prompt Optimization
https://huggingface.co/papers/2502.04295
Large Language Models (LLMs) have shown significant capability across various tasks, with their real-world effectiveness often driven by prompt design. While recent research has focused on optimizing prompt content, the role of prompt formatting, a critical but often overlooked dimension, has received limited systematic investigation. In this paper, we introduce Content-Format Integrated Prompt Optimization (CFPO), an innovative methodology that jointly optimizes both prompt content and formatting through an iterative refinement process. CFPO leverages natural language mutations to explore content variations and employs a dynamic format exploration strategy that systematically evaluates diverse format options. Our extensive evaluations across multiple tasks and open-source LLMs demonstrate that CFPO demonstrates measurable performance improvements compared to content-only optimization methods. This highlights the importance of integrated content-format optimization and offers a practical, model-agnostic approach to enhancing LLM performance. Code will be available at https://github.com/HenryLau7/CFPO.
https://huggingface.co/papers/2502.04295
[
9 authors](https://huggingface.co/papers/2502.04295)
·
Feb 6, 2025 
2
https://huggingface.co/papers/2502.04295#community
 [-] 19
https://huggingface.co/login?next=%2Fpapers%2F2506.17930
Evolving Prompts In-Context: An Open-ended, Self-replicating Perspective
https://huggingface.co/papers/2506.17930
We propose a novel prompt design paradigm that challenges conventional wisdom in large language model (LLM) prompting. While conventional wisdom prioritizes well-crafted instructions and demonstrations for in-context learning (ICL), we show that pruning random demonstrations into seemingly incoherent "gibberish" can remarkably improve performance across diverse tasks. Notably, the "gibberish" always matches or surpasses state-of-the-art automatic prompt optimization techniques, achieving substantial gains regardless of LLM alignment. Nevertheless, discovering an effective pruning strategy is non-trivial, as existing attribution methods and prompt compression algorithms fail to deliver robust results, let alone human intuition. In terms of this, we propose a self-discover prompt optimization framework, PromptQuine, an evolutionary search framework that automatically searches for the pruning strategy by itself using only low-data regimes. Much like the emergent complexity in nature--such as symbiosis and self-organization--arising in response to resource constraints, our framework evolves and refines unconventional yet highly effective prompts by leveraging only the tokens present within the context. We demonstrate its effectiveness across classification, multi-choice question answering, generation and math reasoning tasks across LLMs, while achieving decent runtime efficiency. We hope our findings can guide mechanistic studies on in-context learning, and provide a call to action, to pave the way for more open-ended search algorithms for more effective LLM prompting.
https://huggingface.co/papers/2506.17930
[
3 authors](https://huggingface.co/papers/2506.17930)
·
Jun 21, 2025 
2
https://huggingface.co/papers/2506.17930#community
 [-] 11
https://huggingface.co/login?next=%2Fpapers%2F2409.13449
Minstrel: Structural Prompt Generation with Multi-Agents Coordination for Non-AI Experts
https://huggingface.co/papers/2409.13449
LLMs have demonstrated commendable performance across diverse domains. Nevertheless, formulating high-quality prompts to assist them in their work poses a challenge for non-AI experts. Existing research in prompt engineering suggests somewhat scattered optimization principles and designs empirically dependent prompt optimizers. Unfortunately, these endeavors lack a structural design, incurring high learning costs and it is not conducive to the iterative updating of prompts, especially for non-AI experts. Inspired by structured reusable programming languages, we propose LangGPT, a structural prompt design framework. Furthermore, we introduce Minstrel, a multi-generative agent system with reflection to automate the generation of structural prompts. Experiments and the case study illustrate that structural prompts generated by Minstrel or written manually significantly enhance the performance of LLMs. Furthermore, we analyze the ease of use of structural prompts through a user survey in our online community.
https://huggingface.co/papers/2409.13449
[
11 authors](https://huggingface.co/papers/2409.13449)
·
Sep 20, 2024 
2
https://huggingface.co/papers/2409.13449#community
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2501.06689
TAPO: Task-Referenced Adaptation for Prompt Optimization
https://huggingface.co/papers/2501.06689
Prompt engineering can significantly improve the performance of large language models (LLMs), with automated prompt optimization (APO) gaining significant attention due to the time-consuming and laborious nature of manual prompt design. However, much of the existing work in APO overlooks task-specific characteristics, resulting in prompts that lack domain specificity and are not well-suited for task-specific optimization. In this paper, we introduce TAPO, a multitask-aware prompt optimization framework composed of three key modules. First, a task-aware metric selection module is proposed to enhance task-specific prompt generation capabilities. Second, we present a multi-metrics evaluation module to jointly evaluate prompts from multiple perspectives. Third, an evolution-based optimization framework is introduced for automatic prompt refinement, which improves adaptability across various tasks. Extensive experiments on six datasets demonstrate the effectiveness of our approach, and our code is publicly available.
https://huggingface.co/papers/2501.06689
[
6 authors](https://huggingface.co/papers/2501.06689)
·
Jan 11, 2025
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2507.20133
Sem-DPO: Mitigating Semantic Inconsistency in Preference Optimization for Prompt Engineering
https://huggingface.co/papers/2507.20133
Generative AI can now synthesize strikingly realistic images from text, yet output quality remains highly sensitive to how prompts are phrased. Direct Preference Optimization (DPO) offers a lightweight, off-policy alternative to RL for automatic prompt engineering, but its token-level regularization leaves semantic inconsistency unchecked as prompts that win higher preference scores can still drift away from the user's intended meaning. We introduce Sem-DPO, a variant of DPO that preserves semantic consistency yet retains its simplicity and efficiency. Sem-DPO adjusts the DPO loss using a weight based on how different the winning prompt is from the original, reducing the impact of training examples that are semantically misaligned. We provide the first analytical bound on semantic drift for preference-tuned prompt generators, showing that Sem-DPO keeps learned prompts within a provably bounded neighborhood of the original text. On three standard text-to-image prompt-optimization benchmarks and two language models, Sem-DPO achieves 8-12% higher CLIP similarity and 5-9% higher human-preference scores (HPSv2.1, PickScore) than DPO, while also outperforming state-of-the-art baselines. These findings suggest that strong flat baselines augmented with semantic weighting should become the new standard for prompt-optimization studies and lay the groundwork for broader, semantics-aware preference optimization in language models.
https://huggingface.co/papers/2507.20133
[
8 authors](https://huggingface.co/papers/2507.20133)
·
Jul 26, 2025
 [-] 5
https://huggingface.co/login?next=%2Fpapers%2F2412.09722
GReaTer: Gradients over Reasoning Makes Smaller Language Models Strong Prompt Optimizers
https://huggingface.co/papers/2412.09722
The effectiveness of large language models (LLMs) is closely tied to the design of prompts, making prompt optimization essential for enhancing their performance across a wide range of tasks. Many existing approaches to automating prompt engineering rely exclusively on textual feedback, refining prompts based solely on inference errors identified by large, computationally expensive LLMs. Unfortunately, smaller models struggle to generate high-quality feedback, resulting in complete dependence on large LLM judgment. Moreover, these methods fail to leverage more direct and finer-grained information, such as gradients, due to operating purely in text space. To this end, we introduce GReaTer, a novel prompt optimization technique that directly incorporates gradient information over task-specific reasoning. By utilizing task loss gradients, GReaTer enables self-optimization of prompts for open-source, lightweight language models without the need for costly closed-source LLMs. This allows high-performance prompt optimization without dependence on massive LLMs, closing the gap between smaller models and the sophisticated reasoning often needed for prompt refinement. Extensive evaluations across diverse reasoning tasks including BBH, GSM8k, and FOLIO demonstrate that GReaTer consistently outperforms previous state-of-the-art prompt optimization methods, even those reliant on powerful LLMs. Additionally, GReaTer-optimized prompts frequently exhibit better transferability and, in some cases, boost task performance to levels comparable to or surpassing those achieved by larger language models, highlighting the effectiveness of prompt optimization guided by gradients over reasoning. Code of GReaTer is available at https://github.com/psunlpgroup/GreaTer.
https://huggingface.co/papers/2412.09722
[
6 authors](https://huggingface.co/papers/2412.09722)
·
Dec 12, 2024 
3
https://huggingface.co/papers/2412.09722#community
 [-] 2
https://huggingface.co/login?next=%2Fpapers%2F2406.11695
Optimizing Instructions and Demonstrations for Multi-Stage Language Model Programs
https://huggingface.co/papers/2406.11695
Language Model Programs, i.e. sophisticated pipelines of modular language model (LM) calls, are increasingly advancing NLP tasks, but they require crafting prompts that are jointly effective for all modules. We study prompt optimization for LM programs, i.e. how to update these prompts to maximize a downstream metric without access to module-level labels or gradients. To make this tractable, we factorize our problem into optimizing the free-form instructions and few-shot demonstrations of every module and introduce several strategies to craft task-grounded instructions and navigate credit assignment across modules. Our strategies include (i) program- and data-aware techniques for proposing effective instructions, (ii) a stochastic mini-batch evaluation function for learning a surrogate model of our objective, and (iii) a meta-optimization procedure in which we refine how LMs construct proposals over time. Using these insights we develop MIPRO, a novel algorithm for optimizing LM programs. MIPRO outperforms baseline optimizers on five of seven diverse multi-stage LM programs using a best-in-class open-source model (Llama-3-8B), by as high as 13% accuracy. We have released our new optimizers and benchmark in DSPy at http://dspy.ai
https://huggingface.co/papers/2406.11695
[
7 authors](https://huggingface.co/papers/2406.11695)
·
Jun 17, 2024
 [-] 1
https://huggingface.co/login?next=%2Fpapers%2F2511.00203
Diffusion LLMs are Natural Adversaries for any LLM
https://huggingface.co/papers/2511.00203
We introduce a novel framework that transforms the resource-intensive (adversarial) prompt optimization problem into an efficient, amortized inference task. Our core insight is that pretrained, non-autoregressive generative LLMs, such as Diffusion LLMs, which model the joint distribution over prompt-response pairs, can serve as powerful surrogates for prompt search. This approach enables the direct conditional generation of prompts, effectively replacing costly, per-instance discrete optimization with a small number of parallelizable samples. We provide a probabilistic analysis demonstrating that under mild fidelity assumptions, only a few conditional samples are required to recover high-reward (harmful) prompts. Empirically, we find that the generated prompts are low-perplexity, diverse jailbreaks that exhibit strong transferability to a wide range of black-box target models, including robustly trained and proprietary LLMs. Beyond adversarial prompting, our framework opens new directions for red teaming, automated prompt optimization, and leveraging emerging Flow- and Diffusion-based LLMs.
https://huggingface.co/papers/2511.00203
[
5 authors](https://huggingface.co/papers/2511.00203)
·
Oct 31, 2025
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2310.16730
MultiPrompter: Cooperative Prompt Optimization with Multi-Agent Reinforcement Learning
https://huggingface.co/papers/2310.16730
Recently, there has been an increasing interest in automated prompt optimization based on reinforcement learning (RL). This approach offers important advantages, such as generating interpretable prompts and being compatible with black-box foundation models. However, the substantial prompt space size poses challenges for RL-based methods, often leading to suboptimal policy convergence. This paper introduces MultiPrompter, a new framework that views prompt optimization as a cooperative game between prompters which take turns composing a prompt together. Our cooperative prompt optimization effectively reduces the problem size and helps prompters learn optimal prompts. We test our method on the text-to-image task and show its ability to generate higher-quality images than baselines.
https://huggingface.co/papers/2310.16730
[
5 authors](https://huggingface.co/papers/2310.16730)
·
Oct 25, 2023
 [-] 50
https://huggingface.co/login?next=%2Fpapers%2F2510.09201
Multimodal Prompt Optimization: Why Not Leverage Multiple Modalities for MLLMs
https://huggingface.co/papers/2510.09201
Large Language Models (LLMs) have shown remarkable success, and their multimodal expansions (MLLMs) further unlock capabilities spanning images, videos, and other modalities beyond text. However, despite this shift, prompt optimization approaches, designed to reduce the burden of manual prompt crafting while maximizing performance, remain confined to text, ultimately limiting the full potential of MLLMs. Motivated by this gap, we introduce the new problem of multimodal prompt optimization, which expands the prior definition of prompt optimization to the multimodal space defined by the pairs of textual and non-textual prompts. To tackle this problem, we then propose the Multimodal Prompt Optimizer (MPO), a unified framework that not only performs the joint optimization of multimodal prompts through alignment-preserving updates but also guides the selection process of candidate prompts by leveraging earlier evaluations as priors in a Bayesian-based selection strategy. Through extensive experiments across diverse modalities that go beyond text, such as images, videos, and even molecules, we demonstrate that MPO outperforms leading text-only optimization methods, establishing multimodal prompt optimization as a crucial step to realizing the potential of MLLMs.
https://huggingface.co/papers/2510.09201
 

https://huggingface.co/papers/2510.09201
kaist-ai KAIST AI
https://huggingface.co/kaist-ai
·
Oct 9, 2025 
5
https://huggingface.co/papers/2510.09201#community
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2410.08696
AMPO: Automatic Multi-Branched Prompt Optimization
https://huggingface.co/papers/2410.08696
Prompt engineering is very important to enhance the performance of large language models (LLMs). When dealing with complex issues, prompt engineers tend to distill multiple patterns from examples and inject relevant solutions to optimize the prompts, achieving satisfying results. However, existing automatic prompt optimization techniques are only limited to producing single flow instructions, struggling with handling diverse patterns. In this paper, we present AMPO, an automatic prompt optimization method that can iteratively develop a multi-branched prompt using failure cases as feedback. Our goal is to explore a novel way of structuring prompts with multi-branches to better handle multiple patterns in complex tasks, for which we introduce three modules: Pattern Recognition, Branch Adjustment, and Branch Pruning. In experiments across five tasks, AMPO consistently achieves the best results. Additionally, our approach demonstrates significant optimization efficiency due to our adoption of a minimal search strategy.
https://huggingface.co/papers/2410.08696
[
13 authors](https://huggingface.co/papers/2410.08696)
·
Oct 10, 2024
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2402.16929
LangGPT: Rethinking Structured Reusable Prompt Design Framework for LLMs from the Programming Language
https://huggingface.co/papers/2402.16929
LLMs have demonstrated commendable performance across diverse domains. Nevertheless, formulating high-quality prompts to instruct LLMs proficiently poses a challenge for non-AI experts. Existing research in prompt engineering suggests somewhat scattered optimization principles and designs empirically dependent prompt optimizers. Unfortunately, these endeavors lack a structured design template, incurring high learning costs and resulting in low reusability. In addition, it is not conducive to the iterative updating of prompts. Inspired by structured reusable programming languages, we propose LangGPT, a dual-layer prompt design framework as the programming language for LLMs. LangGPT has an easy-to-learn normative structure and provides an extended structure for migration and reuse. Experiments illustrate that LangGPT significantly enhances the performance of LLMs. Moreover, the case study shows that LangGPT leads LLMs to generate higher-quality responses. Furthermore, we analyzed the ease of use and reusability of LangGPT through a user survey in our online community.
https://huggingface.co/papers/2402.16929
[
14 authors](https://huggingface.co/papers/2402.16929)
·
Feb 26, 2024
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2603.19311
PrefPO: Pairwise Preference Prompt Optimization
https://huggingface.co/papers/2603.19311
Prompt engineering is effective but labor-intensive, motivating automated optimization methods. Existing methods typically require labeled datasets, which are often unavailable, and produce verbose, repetitive prompts. We introduce PrefPO, a minimal prompt optimization approach inspired by reinforcement learning from human feedback (RLHF). Its preference-based approach reduces the need for labeled data and hyperparameter tuning-only a starting prompt and natural language criteria are needed. PrefPO uses an LLM discriminator to express pairwise preferences over model outputs and provide feedback to an LLM optimizer, iteratively improving performance. We evaluate PrefPO on 9 BIG-Bench Hard (BBH) tasks and IFEval-Hard, a newly-curated, challenging subset of IFEval. PrefPO matches or exceeds SOTA methods, including GEPA, MIPRO, and TextGrad, on 6/9 tasks and performs comparably to TextGrad on IFEval-Hard (82.4% vs 84.5%). Unlike other methods, PrefPO can optimize in both labeled and unlabeled settings. Without labels, PrefPO closely matches its labeled performance on 6/9 tasks, proving effective without ground truth. PrefPO also improves prompt hygiene: we find existing methods produce prompts 14.7x their original length or with 34% repetitive content; PrefPO reduces these issues by 3-5x. Furthermore, both LLM and human judges rate PrefPO's prompts higher than TextGrad's. Finally, we identify prompt hacking in prompt optimizers, where methods game evaluation criteria, and find PrefPO is susceptible at half the rate of TextGrad (37% vs 86%), generating fewer brittle, misaligned prompts.
https://huggingface.co/papers/2603.19311
[
3 authors](https://huggingface.co/papers/2603.19311)
·
Mar 13
 [-] 1
https://huggingface.co/login?next=%2Fpapers%2F2602.18449
Prompt Optimization Via Diffusion Language Models
https://huggingface.co/papers/2602.18449
We propose a diffusion-based framework for prompt optimization that leverages Diffusion Language Models (DLMs) to iteratively refine system prompts through masked denoising. By conditioning on interaction traces, including user queries, model responses, and optional feedback, our method enables flexible, span-level prompt updates without requiring gradient access or modifying the downstream language model. Across diverse benchmarks (e.g., τ-bench, SST-2, SST-5), DLM-optimized prompts consistently improve the performance of a frozen target LLM (e.g., GPT-4o-mini). We further show that moderate diffusion step counts provide the best balance between refinement quality and stability. These results highlight diffusion-based prompt optimization as a general, model-agnostic, and scalable approach for enhancing LLM performance through iterative prompt refinement.
https://huggingface.co/papers/2602.18449
[
11 authors](https://huggingface.co/papers/2602.18449)
·
Jan 29
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2402.08702
PRompt Optimization in Multi-Step Tasks (PROMST): Integrating Human Feedback and Heuristic-based Sampling
https://huggingface.co/papers/2402.08702
Prompt optimization aims to find the best prompt to a large language model (LLM) for a given task. LLMs have been successfully used to help find and improve prompt candidates for single-step tasks. However, realistic tasks for agents are multi-step and introduce new challenges: (1) Prompt content is likely to be more extensive and complex, making it more difficult for LLMs to analyze errors, (2) the impact of an individual step is difficult to evaluate, and (3) different people may have varied preferences about task execution. While humans struggle to optimize prompts, they are good at providing feedback about LLM outputs; we therefore introduce a new LLM-driven discrete prompt optimization framework PRompt Optimization in Multi-Step Tasks (PROMST) that incorporates human-designed feedback rules to automatically offer direct suggestions for improvement. We also use an extra learned heuristic model that predicts prompt performance to efficiently sample from prompt candidates. This approach significantly outperforms both human-engineered prompts and several other prompt optimization methods across 11 representative multi-step tasks (an average 10.6%-29.3% improvement to current best methods on five LLMs respectively). We believe our work can serve as a benchmark for automatic prompt optimization for LLM-driven multi-step tasks. Datasets and Codes are available at https://github.com/yongchao98/PROMST. Project Page is available at https://yongchao98.github.io/MIT-REALM-PROMST.
https://huggingface.co/papers/2402.08702
[
6 authors](https://huggingface.co/papers/2402.08702)
·
Feb 13, 2024
 [-] 1
https://huggingface.co/login?next=%2Fpapers%2F2605.14443
Prompting Policies for Multi-step Reasoning and Tool-Use in Black-box LLMs with Iterative Distillation of Experience
https://huggingface.co/papers/2605.14443
The shift toward interacting with frozen, "black-box" Large Language Models (LLMs) has transformed prompt engineering from a heuristic exercise into a critical optimization challenge. We propose a Reinforcement Learning (RL) framework for training learned prompting policies via iterative distillation of experience. In this architecture, a lightweight prompter model is optimized to maximize task-specific rewards for a larger, frozen worker LLM. By utilizing a contrastive experience buffer that couples scalar rewards with dense textual critiques, our approach effectively amortizes iterative prompt refinement into single-shot policy weights. Our experimental analysis focuses on the Big Bench Extra Hard (BBEH) and Tau-bench suites, covering a diverse range of multi-step reasoning and tool-use tasks. We demonstrate significant gains, improving performance from 55% to 90% in logic-intensive reasoning and 74% to 91% in tool-use tasks. Furthermore, we analyze the structural evolution of prompts, demonstrating how the policy discovers specialized algorithmic heuristics. We provide comprehensive comparisons against state-of-the-art evolutionary baselines like GEPA, showing that iterative distillation achieves superior performance with higher sample efficiency.
https://huggingface.co/papers/2605.14443
[
3 authors](https://huggingface.co/papers/2605.14443)
·
May 13
 [-] 9
https://huggingface.co/login?next=%2Fpapers%2F2605.21781
Reflective Prompt Tuning through Language Model Function-Calling
https://huggingface.co/papers/2605.21781
Large language models (LLMs) have become increasingly capable of following instructions and complex reasoning, making prompting a flexible interface for adapting models without parameter updates. Yet prompt design remains labor-intensive and highly sensitive to formatting, phrasing, and instruction order, motivating automated prompt optimization methods that reduce manual effort while preserving inference-time flexibility. However, existing methods often search over prompt candidates or use fixed critique-refine pipelines driven by individual examples or small batches, limiting their ability to capture systematic error patterns and make targeted edits grounded in failure history. We propose Reflective Prompt Tuning (RPT), a framework that uses LLM function calling to simulate the iterative workflow of human prompt engineers. An LLM optimizer calls a diagnostic function that evaluates the target model over an entire optimization set, summarizes recurring failure modes, and returns a structured diagnostic report. The optimizer uses this report, together with an accumulated memory of prior reports, to revise the prompt for the next iteration. RPT further supports confidence-aware optimization by using calibration signals in diagnostic feedback and final prompt selection. Across three reasoning tasks, RPT improves over initial prompts by up to 12.9 points, remains competitive with state of the art, and improves confidence calibration. Our analyses show that RPT is especially effective on multi-hop and mathematical reasoning, producing targeted prompt revisions that align with diagnosed failure patterns and lead to gains in task performance and calibration.
https://huggingface.co/papers/2605.21781
 

https://huggingface.co/papers/2605.21781
megagon Megagon Labs
https://huggingface.co/megagon
·
May 19 
2
https://huggingface.co/papers/2605.21781#community
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2310.12774
Survival of the Most Influential Prompts: Efficient Black-Box Prompt Search via Clustering and Pruning
https://huggingface.co/papers/2310.12774
Prompt-based learning has been an effective paradigm for large pretrained language models (LLM), enabling few-shot or even zero-shot learning. Black-box prompt search has received growing interest recently for its distinctive properties of gradient-free optimization, proven particularly useful and powerful for model-as-a-service usage. However, the discrete nature and the complexity of combinatorial optimization hinder the efficiency of modern black-box approaches. Despite extensive research on search algorithms, the crucial aspect of search space design and optimization has been largely overlooked. In this paper, we first conduct a sensitivity analysis by prompting LLM, revealing that only a small number of tokens exert a disproportionate amount of influence on LLM predictions. Leveraging this insight, we propose the Clustering and Pruning for Efficient Black-box Prompt Search (ClaPS), a simple black-box search method that first clusters and prunes the search space to focus exclusively on influential prompt tokens. By employing even simple search methods within the pruned search space, ClaPS achieves state-of-the-art performance across various tasks and LLMs, surpassing the performance of complex approaches while significantly reducing search costs. Our findings underscore the critical role of search space design and optimization in enhancing both the usefulness and the efficiency of black-box prompt-based learning.
https://huggingface.co/papers/2310.12774
[
4 authors](https://huggingface.co/papers/2310.12774)
·
Oct 19, 2023
 [-] 1
https://huggingface.co/login?next=%2Fpapers%2F2405.16434
The Importance of Directional Feedback for LLM-based Optimizers
https://huggingface.co/papers/2405.16434
We study the potential of using large language models (LLMs) as an interactive optimizer for solving maximization problems in a text space using natural language and numerical feedback. Inspired by the classical optimization literature, we classify the natural language feedback into directional and non-directional, where the former is a generalization of the first-order feedback to the natural language space. We find that LLMs are especially capable of optimization when they are provided with {directional feedback}. Based on this insight, we design a new LLM-based optimizer that synthesizes directional feedback from the historical optimization trace to achieve reliable improvement over iterations. Empirically, we show our LLM-based optimizer is more stable and efficient in solving optimization problems, from maximizing mathematical functions to optimizing prompts for writing poems, compared with existing techniques.
https://huggingface.co/papers/2405.16434
[
4 authors](https://huggingface.co/papers/2405.16434)
·
May 25, 2024
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2401.08189
PRewrite: Prompt Rewriting with Reinforcement Learning
https://huggingface.co/papers/2401.08189
Prompt engineering is critical for the development of LLM-based applications. However, it is usually done manually in a "trial and error" fashion. This manual procedure can be time consuming, ineffective, and the generated prompts are, in a lot of cases, sub-optimal. Even for the prompts which seemingly work well, there is always a lingering question: can the prompts be made better with further modifications? To address these questions, in this paper, we investigate prompt engineering automation. We consider a specific use case scenario in which developers/users have drafted initial prompts, but lack the time/expertise to optimize them. We propose PRewrite, an automated tool to rewrite these drafts and to generate highly effective new prompts. PRewrite is based on the Reinforcement Learning (RL) framework which allows for end-to-end optimization and our design allows the RL search to happen in a large action space. The automated tool leverages manually crafted prompts as starting points which makes the rewriting procedure more guided and efficient. The generated prompts are human readable, and self-explanatory, unlike some of those in previous works. We conducted extensive experiments on diverse datasets and found that the prompts generated with this new method not only outperform professionally crafted prompts, but also prompts generated with other previously proposed methods.
https://huggingface.co/papers/2401.08189
[
5 authors](https://huggingface.co/papers/2401.08189)
·
Jan 15, 2024 
1
https://huggingface.co/papers/2401.08189#community
 [-] 23
https://huggingface.co/login?next=%2Fpapers%2F2311.05661
Prompt Engineering a Prompt Engineer
https://huggingface.co/papers/2311.05661
Prompt engineering is a challenging yet crucial task for optimizing the performance of large language models (LLMs). It requires complex reasoning to examine the model's errors, hypothesize what is missing or misleading in the current prompt, and communicate the task with clarity. While recent works indicate that LLMs can be meta-prompted to perform automatic prompt engineering, their potentials may not be fully untapped due to the lack of sufficient guidance to elicit complex reasoning capabilities in LLMs in the meta-prompt. In this work, we investigate the problem of "prompt engineering a prompt engineer" -- constructing a meta-prompt that more effectively guides LLMs to perform automatic prompt engineering. We introduce and analyze key components, such as a step-by-step reasoning template and context specification, which lead to improved performance. In addition, inspired by common optimization concepts such as batch size, step size and momentum, we introduce their verbalized counterparts to the meta-prompt and investigate their effects. Our final method, named PE2, finds a prompt that outperforms "let's think step by step" by 6.3% on the MultiArith dataset and 3.1% on the GSM8K dataset. To demonstrate its versatility, we apply PE2 to the Instruction Induction benchmark, a suite of counterfactual tasks, and a lengthy, real-world industrial prompt. In these settings, PE2 achieves strong performance and outperforms prior automatic prompt engineering baselines. Further, we show that PE2 makes meaningful and targeted prompt edits, amends erroneous or incomplete prompts, and presents non-trivial counterfactual reasoning abilities.
https://huggingface.co/papers/2311.05661
[
4 authors](https://huggingface.co/papers/2311.05661)
·
Nov 8, 2023 
2
https://huggingface.co/papers/2311.05661#community
 [-] 2
https://huggingface.co/login?next=%2Fpapers%2F2403.04894
ConstitutionalExperts: Training a Mixture of Principle-based Prompts
https://huggingface.co/papers/2403.04894
Large language models (LLMs) are highly capable at a variety of tasks given the right prompt, but writing one is still a difficult and tedious process. In this work, we introduce ConstitutionalExperts, a method for learning a prompt consisting of constitutional principles (i.e. rules), given a training dataset. Unlike prior methods that optimize the prompt as a single entity, our method incrementally improves the prompt by surgically editing individual principles. We also show that we can improve overall performance by learning unique prompts for different semantic regions of the training data and using a mixture-of-experts (MoE) architecture to route inputs at inference time. We compare our method to other state of the art prompt-optimization techniques across six benchmark datasets. We also investigate whether MoE improves these other techniques. Our results suggest that ConstitutionalExperts outperforms other prompt optimization techniques by 10.9% (F1) and that mixture-of-experts improves all techniques, suggesting its broad applicability.
https://huggingface.co/papers/2403.04894
[
5 authors](https://huggingface.co/papers/2403.04894)
·
Mar 7, 2024
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2508.17890
UniAPO: Unified Multimodal Automated Prompt Optimization
https://huggingface.co/papers/2508.17890
Prompting is fundamental to unlocking the full potential of large language models. To automate and enhance this process, automatic prompt optimization (APO) has been developed, demonstrating effectiveness primarily in text-only input scenarios. However, extending existing APO methods to multimodal tasks, such as video-language generation introduces two core challenges: (i) visual token inflation, where long visual token sequences restrict context capacity and result in insufficient feedback signals; (ii) a lack of process-level supervision, as existing methods focus on outcome-level supervision and overlook intermediate supervision, limiting prompt optimization. We present UniAPO: Unified Multimodal Automated Prompt Optimization, the first framework tailored for multimodal APO. UniAPO adopts an EM-inspired optimization process that decouples feedback modeling and prompt refinement, making the optimization more stable and goal-driven. To further address the aforementioned challenges, we introduce a short-long term memory mechanism: historical feedback mitigates context limitations, while historical prompts provide directional guidance for effective prompt optimization. UniAPO achieves consistent gains across text, image, and video benchmarks, establishing a unified framework for efficient and transferable prompt optimization.
https://huggingface.co/papers/2508.17890
[
8 authors](https://huggingface.co/papers/2508.17890)
·
Aug 24, 2025
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2506.23138
VisualPrompter: Semantic-Aware Prompt Optimization with Visual Feedback for Text-to-Image Synthesis
https://huggingface.co/papers/2506.23138
The notable gap between user-provided and model-preferred prompts poses a significant challenge for generating high-quality images with text-to-image models, compelling the need for prompt engineering. Current studies on prompt engineering can effectively enhance the style and aesthetics of generated images. However, they often neglect the semantic alignment between generated images and user descriptions, resulting in visually appealing but content-wise unsatisfying outputs. In this work, we propose VisualPrompter, a novel training-free prompt engineering framework that refines user inputs to model-preferred sentences. VisualPrompter utilizes an automatic self-reflection module that identifies absent concepts in the generated images, followed by a target-specific prompt optimization mechanism that revises the prompts in a fine-grained manner. By deconstructing prompts, introducing new elements at the atomic semantic level, and then reassembling them, our framework is able to maintain semantic consistency and integrity throughout the optimization process. Extensive experiments demonstrate the effectiveness of VisualPrompter, which achieves new state-of-the-art performance on multiple benchmarks for text-image alignment evaluation. Additionally, our framework features a plug-and-play design, making it highly adaptable to various generative models. Our code is available at https://github.com/teheperinko541/VisualPrompter.
https://huggingface.co/papers/2506.23138
[
5 authors](https://huggingface.co/papers/2506.23138)
·
Jun 28, 2025
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2205.12548
RLPrompt: Optimizing Discrete Text Prompts with Reinforcement Learning
https://huggingface.co/papers/2205.12548
Prompting has shown impressive success in enabling large pretrained language models (LMs) to perform diverse NLP tasks, especially when only few downstream data are available. Automatically finding the optimal prompt for each task, however, is challenging. Most existing work resorts to tuning soft prompt (e.g., embeddings) which falls short of interpretability, reusability across LMs, and applicability when gradients are not accessible. Discrete prompt, on the other hand, is difficult to optimize, and is often created by "enumeration (e.g., paraphrasing)-then-selection" heuristics that do not explore the prompt space systematically. This paper proposes RLPrompt, an efficient discrete prompt optimization approach with reinforcement learning (RL). RLPrompt formulates a parameter-efficient policy network that generates the desired discrete prompt after training with reward. To overcome the complexity and stochasticity of reward signals by the large LM environment, we incorporate effective reward stabilization that substantially enhances the training efficiency. RLPrompt is flexibly applicable to different types of LMs, such as masked (e.g., BERT) and left-to-right models (e.g., GPTs), for both classification and generation tasks. Experiments on few-shot classification and unsupervised text style transfer show superior performance over a wide range of existing finetuning or prompting methods. Interestingly, the resulting optimized prompts are often ungrammatical gibberish text; and surprisingly, those gibberish prompts are transferrable between different LMs to retain significant performance, indicating LM prompting may not follow human language patterns.
https://huggingface.co/papers/2205.12548
[
9 authors](https://huggingface.co/papers/2205.12548)
·
May 24, 2022
 [-] 1
https://huggingface.co/login?next=%2Fpapers%2F2511.19965
HiCoGen: Hierarchical Compositional Text-to-Image Generation in Diffusion Models via Reinforcement Learning
https://huggingface.co/papers/2511.19965
Recent advances in diffusion models have demonstrated impressive capability in generating high-quality images for simple prompts. However, when confronted with complex prompts involving multiple objects and hierarchical structures, existing models struggle to accurately follow instructions, leading to issues such as concept omission, confusion, and poor compositionality. To address these limitations, we propose a Hierarchical Compositional Generative framework (HiCoGen) built upon a novel Chain of Synthesis (CoS) paradigm. Instead of monolithic generation, HiCoGen first leverages a Large Language Model (LLM) to decompose complex prompts into minimal semantic units. It then synthesizes these units iteratively, where the image generated in each step provides crucial visual context for the next, ensuring all textual concepts are faithfully constructed into the final scene. To further optimize this process, we introduce a reinforcement learning (RL) framework. Crucially, we identify that the limited exploration of standard diffusion samplers hinders effective RL. We theoretically prove that sample diversity is maximized by concentrating stochasticity in the early generation stages and, based on this insight, propose a novel Decaying Stochasticity Schedule to enhance exploration. Our RL algorithm is then guided by a hierarchical reward mechanism that jointly evaluates the image at the global, subject, and relationship levels. We also construct HiCoPrompt, a new text-to-image benchmark with hierarchical prompts for rigorous evaluation. Experiments show our approach significantly outperforms existing methods in both concept coverage and compositional accuracy.
https://huggingface.co/papers/2511.19965
[
7 authors](https://huggingface.co/papers/2511.19965)
·
Nov 24, 2025
 [-] 1
https://huggingface.co/login?next=%2Fpapers%2F2509.04545
PromptEnhancer: A Simple Approach to Enhance Text-to-Image Models via Chain-of-Thought Prompt Rewriting
https://huggingface.co/papers/2509.04545
Recent advancements in text-to-image (T2I) diffusion models have demonstrated remarkable capabilities in generating high-fidelity images. However, these models often struggle to faithfully render complex user prompts, particularly in aspects like attribute binding, negation, and compositional relationships. This leads to a significant mismatch between user intent and the generated output. To address this challenge, we introduce PromptEnhancer, a novel and universal prompt rewriting framework that enhances any pretrained T2I model without requiring modifications to its weights. Unlike prior methods that rely on model-specific fine-tuning or implicit reward signals like image-reward scores, our framework decouples the rewriter from the generator. We achieve this by training a Chain-of-Thought (CoT) rewriter through reinforcement learning, guided by a dedicated reward model we term the AlignEvaluator. The AlignEvaluator is trained to provide explicit and fine-grained feedback based on a systematic taxonomy of 24 key points, which are derived from a comprehensive analysis of common T2I failure modes. By optimizing the CoT rewriter to maximize the reward from our AlignEvaluator, our framework learns to generate prompts that are more precisely interpreted by T2I models. Extensive experiments on the HunyuanImage 2.1 model demonstrate that PromptEnhancer significantly improves image-text alignment across a wide range of semantic and compositional challenges. Furthermore, we introduce a new, high-quality human preference benchmark to facilitate future research in this direction.
https://huggingface.co/papers/2509.04545
[
12 authors](https://huggingface.co/papers/2509.04545)
·
Sep 4, 2025
 [-] 1
https://huggingface.co/login?next=%2Fpapers%2F2504.16005
CAPO: Cost-Aware Prompt Optimization
https://huggingface.co/papers/2504.16005
Large language models (LLMs) have revolutionized natural language processing by solving a wide range of tasks simply guided by a prompt. Yet their performance is highly sensitive to prompt formulation. While automatic prompt optimization addresses this challenge by finding optimal prompts, current methods require a substantial number of LLM calls and input tokens, making prompt optimization expensive. We introduce CAPO (Cost-Aware Prompt Optimization), an algorithm that enhances prompt optimization efficiency by integrating AutoML techniques. CAPO is an evolutionary approach with LLMs as operators, incorporating racing to save evaluations and multi-objective optimization to balance performance with prompt length. It jointly optimizes instructions and few-shot examples while leveraging task descriptions for improved robustness. Our extensive experiments across diverse datasets and LLMs demonstrate that CAPO outperforms state-of-the-art discrete prompt optimization methods in 11/15 cases with improvements up to 21%p in accuracy. Our algorithm achieves better performances already with smaller budgets, saves evaluations through racing, and decreases average prompt length via a length penalty, making it both cost-efficient and cost-aware. Even without few-shot examples, CAPO outperforms its competitors and generally remains robust to initial prompts. CAPO represents an important step toward making prompt optimization more powerful and accessible by improving cost-efficiency.
https://huggingface.co/papers/2504.16005
[
4 authors](https://huggingface.co/papers/2504.16005)
·
Apr 22, 2025
 [-] 3
https://huggingface.co/login?next=%2Fpapers%2F2209.11711
Best Prompts for Text-to-Image Models and How to Find Them
https://huggingface.co/papers/2209.11711
Recent progress in generative models, especially in text-guided diffusion models, has enabled the production of aesthetically-pleasing imagery resembling the works of professional human artists. However, one has to carefully compose the textual description, called the prompt, and augment it with a set of clarifying keywords. Since aesthetics are challenging to evaluate computationally, human feedback is needed to determine the optimal prompt formulation and keyword combination. In this paper, we present a human-in-the-loop approach to learning the most useful combination of prompt keywords using a genetic algorithm. We also show how such an approach can improve the aesthetic appeal of images depicting the same descriptions.
https://huggingface.co/papers/2209.11711
[
2 authors](https://huggingface.co/papers/2209.11711)
·
Sep 23, 2022 
1
https://huggingface.co/papers/2209.11711#community
 [-] 7
https://huggingface.co/login?next=%2Fpapers%2F2505.17540
RePrompt: Reasoning-Augmented Reprompting for Text-to-Image Generation via Reinforcement Learning
https://huggingface.co/papers/2505.17540
Despite recent progress in text-to-image (T2I) generation, existing models often struggle to faithfully capture user intentions from short and under-specified prompts. While prior work has attempted to enhance prompts using large language models (LLMs), these methods frequently generate stylistic or unrealistic content due to insufficient grounding in visual semantics and real-world composition. Inspired by recent advances in reasoning for language model, we propose RePrompt, a novel reprompting framework that introduces explicit reasoning into the prompt enhancement process via reinforcement learning. Instead of relying on handcrafted rules or stylistic rewrites, our method trains a language model to generate structured, self-reflective prompts by optimizing for image-level outcomes. The tailored reward models assesse the generated images in terms of human preference, semantic alignment, and visual composition, providing indirect supervision to refine prompt generation. Our approach enables end-to-end training without human-annotated data. Experiments on GenEval and T2I-Compbench show that RePrompt significantly boosts spatial layout fidelity and compositional generalization across diverse T2I backbones, establishing new state-of-the-art results.
https://huggingface.co/papers/2505.17540
[
17 authors](https://huggingface.co/papers/2505.17540)
·
May 22, 2025 
2
https://huggingface.co/papers/2505.17540#community
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2409.08775
What You Say = What You Want? Teaching Humans to Articulate Requirements for LLMs
https://huggingface.co/papers/2409.08775
Prompting ChatGPT to achieve complex goals (e.g., creating a customer support chatbot) often demands meticulous prompt engineering, including aspects like fluent writing and chain-of-thought techniques. While emerging prompt optimizers can automatically refine many of these aspects, we argue that clearly conveying customized requirements (e.g., how to handle diverse inputs) remains a human-centric challenge. In this work, we introduce Requirement-Oriented Prompt Engineering (ROPE), a paradigm that focuses human attention on generating clear, complete requirements during prompting. We implement ROPE through an assessment and training suite that provides deliberate practice with LLM-generated feedback. In a study with 30 novices, we show that requirement-focused training doubles novices' prompting performance, significantly outperforming conventional prompt engineering training and prompt optimization. We also demonstrate that high-quality LLM outputs are directly tied to the quality of input requirements. Our work paves the way for more effective task delegation in human-LLM collaborative prompting.
https://huggingface.co/papers/2409.08775
[
5 authors](https://huggingface.co/papers/2409.08775)
·
Sep 13, 2024
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2402.02101
Are Large Language Models Good Prompt Optimizers?
https://huggingface.co/papers/2402.02101
LLM-based Automatic Prompt Optimization, which typically utilizes LLMs as Prompt Optimizers to self-reflect and refine prompts, has shown promising performance in recent studies. Despite the success, the underlying mechanism of this approach remains unexplored, and the true effectiveness of LLMs as Prompt Optimizers requires further validation. In this work, we conducted a comprehensive study to uncover the actual mechanism of LLM-based Prompt Optimization. Our findings reveal that the LLM optimizers struggle to identify the true causes of errors during reflection, tending to be biased by their own prior knowledge rather than genuinely reflecting on the errors. Furthermore, even when the reflection is semantically valid, the LLM optimizers often fail to generate appropriate prompts for the target models with a single prompt refinement step, partly due to the unpredictable behaviors of the target models. Based on the observations, we introduce a new "Automatic Behavior Optimization" paradigm, which directly optimizes the target model's behavior in a more controllable manner. We hope our study can inspire new directions for automatic prompt optimization development.
https://huggingface.co/papers/2402.02101
[
8 authors](https://huggingface.co/papers/2402.02101)
·
Feb 2, 2024
 [-] 2
https://huggingface.co/login?next=%2Fpapers%2F2507.04632
Can Prompt Difficulty be Online Predicted for Accelerating RL Finetuning of Reasoning Models?
https://huggingface.co/papers/2507.04632
Recent advances have witnessed the effectiveness of reinforcement learning (RL) finetuning in enhancing the reasoning capabilities of large language models (LLMs). The optimization process often requires numerous iterations to achieve satisfactory performance, resulting in high computational costs due to the need for frequent prompt evaluations under intensive LLM interactions and repeated policy updates. Appropriate online prompt selection methods reduce iteration steps by prioritizing informative prompts during training, while the pipeline's reliance on exhaustive prompt evaluation and subset selection for optimization still incurs substantial computational overhead due to frequent LLM inference calls. Distinguished from these direct evaluate-then-select schemes, this work investigates iterative approximate evaluation for arbitrary prompts and introduces Model Predictive Prompt Selection (MoPPS), a Bayesian risk-predictive framework that online estimates prompt difficulty without requiring costly LLM interactions. Technically, MoPPS models each prompt's success rate as a latent variable, performs streaming Bayesian inference, and employs posterior sampling in a constructed multi-armed bandit machine, enabling sample efficient and adaptive prompt selection. Extensive experiments across mathematics, planning, and vision-based geometry tasks show that MoPPS reliably predicts prompt difficulty and accelerates training with significantly reduced LLM rollouts.
https://huggingface.co/papers/2507.04632
[
6 authors](https://huggingface.co/papers/2507.04632)
·
Jul 6, 2025
 [-] 1
https://huggingface.co/login?next=%2Fpapers%2F2209.15003
Compositional Semantic Parsing with Large Language Models
https://huggingface.co/papers/2209.15003
Humans can reason compositionally when presented with new tasks. Previous research shows that appropriate prompting techniques enable large language models (LLMs) to solve artificial compositional generalization tasks such as SCAN. In this work, we identify additional challenges in more realistic semantic parsing tasks with larger vocabulary and refine these prompting techniques to address them. Our best method is based on least-to-most prompting: it decomposes the problem using prompting-based syntactic parsing, then uses this decomposition to select appropriate exemplars and to sequentially generate the semantic parse. This method allows us to set a new state of the art for CFQ while requiring only 1% of the training data used by traditional approaches. Due to the general nature of our approach, we expect similar efforts will lead to new results in other tasks and domains, especially for knowledge-intensive applications.
https://huggingface.co/papers/2209.15003
[
8 authors](https://huggingface.co/papers/2209.15003)
·
Sep 29, 2022
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2601.15286
Iterative Refinement Improves Compositional Image Generation
https://huggingface.co/papers/2601.15286
Text-to-image (T2I) models have achieved remarkable progress, yet they continue to struggle with complex prompts that require simultaneously handling multiple objects, relations, and attributes. Existing inference-time strategies, such as parallel sampling with verifiers or simply increasing denoising steps, can improve prompt alignment but remain inadequate for richly compositional settings where many constraints must be satisfied. Inspired by the success of chain-of-thought reasoning in large language models, we propose an iterative test-time strategy in which a T2I model progressively refines its generations across multiple steps, guided by feedback from a vision-language model as the critic in the loop. Our approach is simple, requires no external tools or priors, and can be flexibly applied to a wide range of image generators and vision-language models. Empirically, we demonstrate consistent gains on image generation across benchmarks: a 16.9% improvement in all-correct rate on ConceptMix (k=7), a 13.8% improvement on T2I-CompBench (3D-Spatial category) and a 12.5% improvement on Visual Jenga scene decomposition compared to compute-matched parallel sampling. Beyond quantitative gains, iterative refinement produces more faithful generations by decomposing complex prompts into sequential corrections, with human evaluators preferring our method 58.7% of the time over 41.3% for the parallel baseline. Together, these findings highlight iterative self-correction as a broadly applicable principle for compositional image generation. Results and visualizations are available at https://iterative-img-gen.github.io/
https://huggingface.co/papers/2601.15286
[
8 authors](https://huggingface.co/papers/2601.15286)
·
Jan 21
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2412.15156
Prompt-A-Video: Prompt Your Video Diffusion Model via Preference-Aligned LLM
https://huggingface.co/papers/2412.15156
Text-to-video models have made remarkable advancements through optimization on high-quality text-video pairs, where the textual prompts play a pivotal role in determining quality of output videos. However, achieving the desired output often entails multiple revisions and iterative inference to refine user-provided prompts. Current automatic methods for refining prompts encounter challenges such as Modality-Inconsistency, Cost-Discrepancy, and Model-Unaware when applied to text-to-video diffusion models. To address these problem, we introduce an LLM-based prompt adaptation framework, termed as Prompt-A-Video, which excels in crafting Video-Centric, Labor-Free and Preference-Aligned prompts tailored to specific video diffusion model. Our approach involves a meticulously crafted two-stage optimization and alignment system. Initially, we conduct a reward-guided prompt evolution pipeline to automatically create optimal prompts pool and leverage them for supervised fine-tuning (SFT) of the LLM. Then multi-dimensional rewards are employed to generate pairwise data for the SFT model, followed by the direct preference optimization (DPO) algorithm to further facilitate preference alignment. Through extensive experimentation and comparative analyses, we validate the effectiveness of Prompt-A-Video across diverse generation models, highlighting its potential to push the boundaries of video generation.
https://huggingface.co/papers/2412.15156
[
12 authors](https://huggingface.co/papers/2412.15156)
·
Dec 19, 2024
 [-] 5
https://huggingface.co/login?next=%2Fpapers%2F2402.10949
The Unreasonable Effectiveness of Eccentric Automatic Prompts
https://huggingface.co/papers/2402.10949
Large Language Models (LLMs) have demonstrated remarkable problem-solving and basic mathematics abilities. However, their efficacy is highly contingent on the formulation of the prompt. This study endeavors to quantify the influence of incorporating "positive thinking" into the system message of the prompt, then compare that to systematic prompt optimization. We assess the performance of 60 combinations of system message snippets, tested with and without Chain of Thought prompting, across three models with parameters ranging from 7 to 70 billion on the GSM8K dataset. Our findings reveal that results do not universally generalize across models. In most instances, the inclusion of "positive thinking" prompts positively affected model performance. Notably, however, Llama2-70B exhibited an exception when not utilizing Chain of Thought, as the optimal system message was found to be none at all. Given the combinatorial complexity, and thus computation time, of experimenting with hand-tuning prompts for large black-box models, we then compared the performance of the best "positive thinking" prompt against the output of systematic prompt optimization. We show that employing an automated prompt optimizer emerges as the most effective method for enhancing performance, even when working with smaller open-source models. Additionally, our findings reveal that the highest-scoring, automatically-optimized prompt exhibits a degree of peculiarity far beyond expectations.
https://huggingface.co/papers/2402.10949
[
2 authors](https://huggingface.co/papers/2402.10949)
·
Feb 9, 2024 
1
https://huggingface.co/papers/2402.10949#community
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2505.16763
Self-Rewarding Large Vision-Language Models for Optimizing Prompts in Text-to-Image Generation
https://huggingface.co/papers/2505.16763
Text-to-image models are powerful for producing high-quality images based on given text prompts, but crafting these prompts often requires specialized vocabulary. To address this, existing methods train rewriting models with supervision from large amounts of manually annotated data and trained aesthetic assessment models. To alleviate the dependence on data scale for model training and the biases introduced by trained models, we propose a novel prompt optimization framework, designed to rephrase a simple user prompt into a sophisticated prompt to a text-to-image model. Specifically, we employ the large vision language models (LVLMs) as the solver to rewrite the user prompt, and concurrently, employ LVLMs as a reward model to score the aesthetics and alignment of the images generated by the optimized prompt. Instead of laborious human feedback, we exploit the prior knowledge of the LVLM to provide rewards, i.e., AI feedback. Simultaneously, the solver and the reward model are unified into one model and iterated in reinforcement learning to achieve self-improvement by giving a solution and judging itself. Results on two popular datasets demonstrate that our method outperforms other strong competitors.
https://huggingface.co/papers/2505.16763
[
4 authors](https://huggingface.co/papers/2505.16763)
·
May 22, 2025
 [-] 1
https://huggingface.co/login?next=%2Fpapers%2F2504.18722
MODP: Multi Objective Directional Prompting
https://huggingface.co/papers/2504.18722
Recent advances in large language models (LLMs) have led to their popularity across multiple use-cases. However, prompt engineering, the process for optimally utilizing such models, remains approximation-driven and subjective. Most of the current research on prompt engineering focuses on task-specific optimization, while neglecting the behavior of the LLM under consideration during prompt development. This paper introduces MODP -- Multi Objective Directional Prompting, a framework based on two key concepts: 1) multi-objectivity: the importance of considering an LLM's intrinsic behavior as an additional objective in prompt development, and 2) directional prompting: a metrics-driven method for prompt engineering to ensure development of robust and high-precision prompts. We demonstrate the effectiveness of our proposed ideas on a summarization task, using a synthetically created dataset, achieving a 26% performance gain over initial prompts. Finally, we apply MODP to develop prompts for Dell's Next Best Action support tool, which is now in production and is used by more than 10,000 internal support agents and serving millions of customers worldwide.
https://huggingface.co/papers/2504.18722
[
4 authors](https://huggingface.co/papers/2504.18722)
·
Apr 25, 2025
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2406.19486
LoPT: Low-Rank Prompt Tuning for Parameter Efficient Language Models
https://huggingface.co/papers/2406.19486
In prompt tuning, a prefix or suffix text is added to the prompt, and the embeddings (soft prompts) or token indices (hard prompts) of the prefix/suffix are optimized to gain more control over language models for specific tasks. This approach eliminates the need for hand-crafted prompt engineering or explicit model fine-tuning. Prompt tuning is significantly more parameter-efficient than model fine-tuning, as it involves optimizing partial inputs of language models to produce desired outputs. In this work, we aim to further reduce the amount of trainable parameters required for a language model to perform well on specific tasks. We propose Low-rank Prompt Tuning (LoPT), a low-rank model for prompts that achieves efficient prompt optimization. The proposed method demonstrates similar outcomes to full parameter prompt tuning while reducing the number of trainable parameters by a factor of 5. It also provides promising results compared to the state-of-the-art methods that would require 10 to 20 times more parameters.
https://huggingface.co/papers/2406.19486
[
3 authors](https://huggingface.co/papers/2406.19486)
·
Jun 27, 2024
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2510.12246
PromptFlow: Training Prompts Like Neural Networks
https://huggingface.co/papers/2510.12246
Large Language Models (LLMs) have demonstrated profound impact on Natural Language Processing (NLP) tasks. However, their effective deployment across diverse domains often require domain-specific adaptation strategies, as generic models may underperform when faced with specialized data distributions. Recent advances in prompt engineering (PE) offer a promising alternative to extensive retraining by refining input instructions to align LLM outputs with task objectives. This paradigm has emerged as a rapid and versatile approach for model fine-tuning. Despite its potential, manual prompt design remains labor-intensive and heavily depends on specialized expertise, often requiring iterative human effort to achieve optimal formulations. To address this limitation, automated prompt engineering methodologies have been developed to systematically generate task-specific prompts. However, current implementations predominantly employ static update rules and lack mechanisms for dynamic strategy selection, resulting in suboptimal adaptation to varying NLP task requirements. Furthermore, most methods treat and update the whole prompts at each step, without considering editing prompt sections at a finer granularity. At last, in particular, the problem of how to recycle experience in LLM is still underexplored. To this end, we propose the PromptFlow, a modular training framework inspired by TensorFlow, which integrates meta-prompts, operators, optimization, and evaluator. Our framework can be equipped with the latest optimization methods and autonomously explores optimal prompt refinement trajectories through gradient-based meta-learning, requiring minimal task-specific training data. Specifically, we devise a reinforcement learning method to recycle experience for LLM in the PE process. Finally, we conduct extensive experiments on various datasets, and demonstrate the effectiveness of PromptFlow.
https://huggingface.co/papers/2510.12246
[
4 authors](https://huggingface.co/papers/2510.12246)
·
Oct 13, 2025
 [-] 24
https://huggingface.co/login?next=%2Fpapers%2F2308.00304
Skills-in-Context Prompting: Unlocking Compositionality in Large Language Models
https://huggingface.co/papers/2308.00304
We consider the problem of eliciting compositional generalization capabilities in large language models (LLMs) with a novel type of prompting strategy. Compositional generalization empowers the LLMs to solve problems that are harder than the ones they have seen (i.e., easy-to-hard generalization), which is a critical reasoning capability of human-like intelligence. However, even the current state-of-the-art LLMs still struggle with this form of reasoning. To bridge this gap, we propose skills-in-context (SKiC) prompting, which instructs LLMs how to compose basic skills to resolve more complex problems. We find that it is crucial to demonstrate both the skills and the compositional examples within the same prompting context. With as few as two examplars, our SKiC prompting initiates strong synergies between skills and their composition capabilities. Notably, it empowers LLMs to solve unseen problems that require innovative skill compositions, achieving near-perfect generalization on a broad range of challenging compositionality tasks. Intriguingly, SKiC prompting unlocks the latent potential of LLMs, enabling them to leverage pre-existing internal skills acquired during earlier pre-training stages, even when these skills are not explicitly presented in the prompting context. This results in the capability of LLMs to solve unseen complex problems by activating and composing internal competencies. With such prominent features, SKiC prompting is able to achieve state-of-the-art performance on challenging mathematical reasoning benchmarks (e.g., MATH).
https://huggingface.co/papers/2308.00304
[
7 authors](https://huggingface.co/papers/2308.00304)
·
Jul 31, 2023 
1
https://huggingface.co/papers/2308.00304#community
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2404.01077
Efficient Prompting Methods for Large Language Models: A Survey
https://huggingface.co/papers/2404.01077
Prompting is a mainstream paradigm for adapting large language models to specific natural language processing tasks without modifying internal parameters. Therefore, detailed supplementary knowledge needs to be integrated into external prompts, which inevitably brings extra human efforts and computational burdens for practical applications. As an effective solution to mitigate resource consumption, Efficient Prompting Methods have attracted a wide range of attention. We provide mathematical expressions at a high level to deeply discuss Automatic Prompt Engineering for different prompt components and Prompt Compression in continuous and discrete spaces. Finally, we highlight promising future directions to inspire researchers interested in this field.
https://huggingface.co/papers/2404.01077
[
7 authors](https://huggingface.co/papers/2404.01077)
·
Apr 1, 2024
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2603.02792
From Heuristic Selection to Automated Algorithm Design: LLMs Benefit from Strong Priors
https://huggingface.co/papers/2603.02792
Large Language Models (LLMs) have already been widely adopted for automated algorithm design, demonstrating strong abilities in generating and evolving algorithms across various fields. Existing work has largely focused on examining their effectiveness in solving specific problems, with search strategies primarily guided by adaptive prompt designs. In this paper, through investigating the token-wise attribution of the prompts to LLM-generated algorithmic codes, we show that providing high-quality algorithmic code examples can substantially improve the performance of the LLM-driven optimization. Building upon this insight, we propose leveraging prior benchmark algorithms to guide LLM-driven optimization and demonstrate superior performance on two black-box optimization benchmarks: the pseudo-Boolean optimization suite (pbo) and the black-box optimization suite (bbob). Our findings highlight the value of integrating benchmarking studies to enhance both efficiency and robustness of the LLM-driven black-box optimization methods.
https://huggingface.co/papers/2603.02792
[
5 authors](https://huggingface.co/papers/2603.02792)
·
Mar 2
 [-] 10
https://huggingface.co/login?next=%2Fpapers%2F2602.01382
PromptRL: Prompt Matters in RL for Flow-Based Image Generation
https://huggingface.co/papers/2602.01382
Flow matching models (FMs) have revolutionized text-to-image (T2I) generation, with reinforcement learning (RL) serving as a critical post-training strategy for alignment with reward objectives. In this research, we show that current RL pipelines for FMs suffer from two underappreciated yet important limitations: sample inefficiency due to insufficient generation diversity, and pronounced prompt overfitting, where models memorize specific training formulations and exhibit dramatic performance collapse when evaluated on semantically equivalent but stylistically varied prompts. We present PromptRL (Prompt Matters in RL for Flow-Based Image Generation), a framework that incorporates language models (LMs) as trainable prompt refinement agents directly within the flow-based RL optimization loop. This design yields two complementary benefits: rapid development of sophisticated prompt rewriting capabilities and, critically, a synergistic training regime that reshapes the optimization dynamics. PromptRL achieves state-of-the-art performance across multiple benchmarks, obtaining scores of 0.97 on GenEval, 0.98 on OCR accuracy, and 24.05 on PickScore. Furthermore, we validate the effectiveness of our RL approach on large-scale image editing models, improving the EditReward of FLUX.1-Kontext from 1.19 to 1.43 with only 0.06 million rollouts, surpassing Gemini 2.5 Flash Image (also known as Nano Banana), which scores 1.37, and achieving comparable performance with ReasonNet (1.44), which relied on fine-grained data annotations along with a complex multi-stage training. Our extensive experiments empirically demonstrate that PromptRL consistently achieves higher performance ceilings while requiring over 2times fewer rollouts compared to naive flow-only RL. Our code is available at https://github.com/G-U-N/UniRL.
https://huggingface.co/papers/2602.01382
 

https://huggingface.co/papers/2602.01382
CUHK CUHK
https://huggingface.co/CUHK
·
Feb 1 
2
https://huggingface.co/papers/2602.01382#community
 [-] 1
https://huggingface.co/login?next=%2Fpapers%2F2508.09378
APIO: Automatic Prompt Induction and Optimization for Grammatical Error Correction and Text Simplification
https://huggingface.co/papers/2508.09378
Recent advancements in large language models (LLMs) have enabled a wide range of natural language processing (NLP) tasks to be performed through simple prompt-based interactions. Consequently, several approaches have been proposed to engineer prompts that most effectively enable LLMs to perform a given task (e.g., chain-of-thought prompting). In settings with a well-defined metric to optimize model performance, automatic prompt optimization (APO) methods have been developed to refine a seed prompt. Advancing this line of research, we propose APIO, a simple but effective prompt induction and optimization approach for the tasks of Grammatical Error Correction (GEC) and Text Simplification, without relying on manually specified seed prompts. APIO achieves a new state-of-the-art performance for purely LLM-based prompting methods on these tasks. We make our data, code, prompts, and outputs publicly available.
https://huggingface.co/papers/2508.09378
[
5 authors](https://huggingface.co/papers/2508.09378)
·
Aug 12, 2025
 [-] 1
https://huggingface.co/login?next=%2Fpapers%2F2407.02211
PromptIntern: Saving Inference Costs by Internalizing Recurrent Prompt during Large Language Model Fine-tuning
https://huggingface.co/papers/2407.02211
Large language models (LLMs) have played a fundamental role in various natural language processing tasks with powerful prompt techniques. However, in real-world applications, there are often similar prompt components for repeated queries, which causes significant computational burdens during inference. Existing prompt compression and direct fine-tuning methods aim to tackle these challenges, yet they frequently struggle to strike an optimal balance between cost-efficiency and performance effectiveness, especially in complex tasks such as NL2Code. In this paper, we propose a novel method namely PromptIntern to internalize the prompt knowledge into model parameters via progressive fine-tuning. Our method enables LLMs to emulate the human learning process for a new task, where detailed templates and examples in a prompt are gradually internalized and phased out progressively as the model grows accustomed to the task. Extensive experiments demonstrate that our method reduces inference tokens over 90%, speedups inference by 4.2 times, and saves 88.3% monetary cost.
https://huggingface.co/papers/2407.02211
 

https://huggingface.co/papers/2407.02211
microsoft Microsoft
https://huggingface.co/microsoft
·
Jul 2, 2024
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2402.12760
A User-Friendly Framework for Generating Model-Preferred Prompts in Text-to-Image Synthesis
https://huggingface.co/papers/2402.12760
Well-designed prompts have demonstrated the potential to guide text-to-image models in generating amazing images. Although existing prompt engineering methods can provide high-level guidance, it is challenging for novice users to achieve the desired results by manually entering prompts due to a discrepancy between novice-user-input prompts and the model-preferred prompts. To bridge the distribution gap between user input behavior and model training datasets, we first construct a novel Coarse-Fine Granularity Prompts dataset (CFP) and propose a novel User-Friendly Fine-Grained Text Generation framework (UF-FGTG) for automated prompt optimization. For CFP, we construct a novel dataset for text-to-image tasks that combines coarse and fine-grained prompts to facilitate the development of automated prompt generation methods. For UF-FGTG, we propose a novel framework that automatically translates user-input prompts into model-preferred prompts. Specifically, we propose a prompt refiner that continually rewrites prompts to empower users to select results that align with their unique needs. Meanwhile, we integrate image-related loss functions from the text-to-image model into the training process of text generation to generate model-preferred prompts. Additionally, we propose an adaptive feature extraction module to ensure diversity in the generated results. Experiments demonstrate that our approach is capable of generating more visually appealing and diverse images than previous state-of-the-art methods, achieving an average improvement of 5% across six quality and aesthetic metrics.
https://huggingface.co/papers/2402.12760
[
6 authors](https://huggingface.co/papers/2402.12760)
·
Feb 19, 2024
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2305.10713
Flatness-Aware Prompt Selection Improves Accuracy and Sample Efficiency
https://huggingface.co/papers/2305.10713
With growing capabilities of large language models, prompting them has become the dominant way to access them. This has motivated the development of strategies for automatically selecting effective language prompts. In this paper, we introduce prompt flatness, a new metric to quantify the expected utility of a language prompt. This metric is inspired by flatness regularization in statistical learning that quantifies the robustness of the model towards its parameter perturbations. We provide theoretical foundations for this metric and its relationship with other prompt selection metrics, providing a comprehensive understanding of existing methods. Empirically, we show that combining prompt flatness with existing metrics improves both performance and sample efficiency. Our metric outperforms the previous prompt selection metrics with an average increase of 5% in accuracy and 10% in Pearson correlation across 6 classification benchmarks.
https://huggingface.co/papers/2305.10713
[
4 authors](https://huggingface.co/papers/2305.10713)
·
May 17, 2023
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2405.17346
Prompt Optimization with Human Feedback
https://huggingface.co/papers/2405.17346
Large language models (LLMs) have demonstrated remarkable performances in various tasks. However, the performance of LLMs heavily depends on the input prompt, which has given rise to a number of recent works on prompt optimization. However, previous works often require the availability of a numeric score to assess the quality of every prompt. Unfortunately, when a human user interacts with a black-box LLM, attaining such a score is often infeasible and unreliable. Instead, it is usually significantly easier and more reliable to obtain preference feedback from a human user, i.e., showing the user the responses generated from a pair of prompts and asking the user which one is preferred. Therefore, in this paper, we study the problem of prompt optimization with human feedback (POHF), in which we aim to optimize the prompt for a black-box LLM using only human preference feedback. Drawing inspiration from dueling bandits, we design a theoretically principled strategy to select a pair of prompts to query for preference feedback in every iteration, and hence introduce our algorithm named automated POHF (APOHF). We apply our APOHF algorithm to various tasks, including optimizing user instructions, prompt optimization for text-to-image generative models, and response optimization with human feedback (i.e., further refining the response using a variant of our APOHF). The results demonstrate that our APOHF can efficiently find a good prompt using a small number of preference feedback instances. Our code can be found at https://github.com/xqlin98/APOHF.
https://huggingface.co/papers/2405.17346
[
6 authors](https://huggingface.co/papers/2405.17346)
·
May 27, 2024
 [-] 4
https://huggingface.co/login?next=%2Fpapers%2F2309.06553
Offline Prompt Evaluation and Optimization with Inverse Reinforcement Learning
https://huggingface.co/papers/2309.06553
The recent advances in the development of Large Language Models (LLMs) like ChatGPT have achieved remarkable performance by leveraging human expertise. Yet, fully eliciting LLMs' potential for complex tasks requires navigating the vast search space of natural language prompts. While prompt engineering has shown promise, the requisite human-crafted prompts in trial-and-error attempts and the associated costs pose significant challenges. Crucially, the efficiency of prompt optimization hinges on the costly procedure of prompt evaluation. This work introduces Prompt-OIRL, an approach rooted in offline inverse reinforcement learning that seeks to bridge the gap between effective prompt evaluation and affordability. Our method draws on offline datasets from expert evaluations, employing Inverse-RL to derive a reward model for offline, query-dependent prompt evaluations. The advantages of Prompt-OIRL are manifold: it predicts prompt performance, is cost-efficient, produces human-readable results, and efficiently navigates the prompt space. We validate our method across four LLMs and three arithmetic datasets, highlighting its potential as a robust and effective tool for offline prompt evaluation and optimization. Our code as well as the offline datasets are released, and we highlight the Prompt-OIRL can be reproduced within a few hours using a single laptop using CPU
https://huggingface.co/papers/2309.06553
[
1 authors](https://huggingface.co/papers/2309.06553)
·
Sep 12, 2023
 [-] 1
https://huggingface.co/login?next=%2Fpapers%2F2306.04933
InfoPrompt: Information-Theoretic Soft Prompt Tuning for Natural Language Understanding
https://huggingface.co/papers/2306.04933
Soft prompt tuning achieves superior performances across a wide range of few-shot tasks. However, the performances of prompt tuning can be highly sensitive to the initialization of the prompts. We also empirically observe that conventional prompt tuning methods cannot encode and learn sufficient task-relevant information from prompt tokens. In this work, we develop an information-theoretic framework that formulates soft prompt tuning as maximizing mutual information between prompts and other model parameters (or encoded representations). This novel view helps us to develop a more efficient, accurate and robust soft prompt tuning method InfoPrompt. With this framework, we develop two novel mutual information based loss functions, to (i) discover proper prompt initialization for the downstream tasks and learn sufficient task-relevant information from prompt tokens and (ii) encourage the output representation from the pretrained language model to be more aware of the task-relevant information captured in the learnt prompt. Extensive experiments validate that InfoPrompt can significantly accelerate the convergence of the prompt tuning and outperform traditional prompt tuning methods. Finally, we provide a formal theoretical result for showing to show that gradient descent type algorithm can be used to train our mutual information loss.
https://huggingface.co/papers/2306.04933
[
9 authors](https://huggingface.co/papers/2306.04933)
·
Jun 7, 2023
 [-] 1
https://huggingface.co/login?next=%2Fpapers%2F2305.13954
Robust Prompt Optimization for Large Language Models Against Distribution Shifts
https://huggingface.co/papers/2305.13954
Large Language Model (LLM) has demonstrated significant ability in various Natural Language Processing tasks. However, their effectiveness is highly dependent on the phrasing of the task prompt, leading to research on automatic prompt optimization using labeled task data. We reveal that these prompt optimization techniques are vulnerable to distribution shifts such as subpopulation shifts, which are common for LLMs in real-world scenarios such as customer reviews analysis. In this light, we propose a new problem of robust prompt optimization for LLMs against distribution shifts, which requires the prompt optimized over the labeled source group can simultaneously generalize to an unlabeled target group. To solve this problem, we propose Generalized Prompt Optimization framework, which incorporates the unlabeled data from the target group into prompt optimization. Extensive experimental results demonstrate the effectiveness of the proposed framework with significant performance improvement on the target group and comparable performance on the source group.
https://huggingface.co/papers/2305.13954
[
6 authors](https://huggingface.co/papers/2305.13954)
·
May 23, 2023
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2505.12592
PromptPrism: A Linguistically-Inspired Taxonomy for Prompts
https://huggingface.co/papers/2505.12592
Prompts are the interface for eliciting the capabilities of large language models (LLMs). Understanding their structure and components is critical for analyzing LLM behavior and optimizing performance. However, the field lacks a comprehensive framework for systematic prompt analysis and understanding. We introduce PromptPrism, a linguistically-inspired taxonomy that enables prompt analysis across three hierarchical levels: functional structure, semantic component, and syntactic pattern. We show the practical utility of PromptPrism by applying it to three applications: (1) a taxonomy-guided prompt refinement approach that automatically improves prompt quality and enhances model performance across a range of tasks; (2) a multi-dimensional dataset profiling method that extracts and aggregates structural, semantic, and syntactic characteristics from prompt datasets, enabling comprehensive analysis of prompt distributions and patterns; (3) a controlled experimental framework for prompt sensitivity analysis by quantifying the impact of semantic reordering and delimiter modifications on LLM performance. Our experimental results validate the effectiveness of our taxonomy across these applications, demonstrating that PromptPrism provides a foundation for refining, profiling, and analyzing prompts.
https://huggingface.co/papers/2505.12592
[
6 authors](https://huggingface.co/papers/2505.12592)
·
May 18, 2025
 [-] 45
https://huggingface.co/login?next=%2Fpapers%2F2503.16874
MARS: A Multi-Agent Framework Incorporating Socratic Guidance for Automated Prompt Optimization
https://huggingface.co/papers/2503.16874
The basic question-answering format of large language models involves inputting a prompt and receiving a response, and the quality of the prompt directly impacts the effectiveness of the response. Automated Prompt Optimization (APO) aims to break free from the cognitive biases of manually designed prompts and explores a broader design space for prompts. However, existing APO methods suffer from limited flexibility of fixed templates and inefficient search in prompt spaces as key issues. To this end, we propose a Multi-Agent framework Incorporating Socratic guidance (MARS), which utilizes multi-agent fusion technology for automatic planning, with gradual continuous optimization and evaluation. Specifically, MARS comprises seven agents, each with distinct functionalities, which autonomously use the Planner to devise an optimization path that ensures flexibility. Additionally, it employs a Teacher-Critic-Student Socratic dialogue pattern to iteratively optimize the prompts while conducting effective search. We conduct extensive experiments on various datasets to validate the effectiveness of our method, and perform additional analytical experiments to assess the model's advancement as well as the interpretability.
https://huggingface.co/papers/2503.16874
[
6 authors](https://huggingface.co/papers/2503.16874)
·
Mar 20, 2025 
2
https://huggingface.co/papers/2503.16874#community
 [-] 12
https://huggingface.co/login?next=%2Fpapers%2F2509.03516
Easier Painting Than Thinking: Can Text-to-Image Models Set the Stage, but Not Direct the Play?
https://huggingface.co/papers/2509.03516
Text-to-image (T2I) generation aims to synthesize images from textual prompts, which jointly specify what must be shown and imply what can be inferred, thereby corresponding to two core capabilities: composition and reasoning. However, with the emerging advances of T2I models in reasoning beyond composition, existing benchmarks reveal clear limitations in providing comprehensive evaluations across and within these capabilities. Meanwhile, these advances also enable models to handle more complex prompts, whereas current benchmarks remain limited to low scene density and simplified one-to-one reasoning. To address these limitations, we propose T2I-CoReBench, a comprehensive and complex benchmark that evaluates both composition and reasoning capabilities of T2I models. To ensure comprehensiveness, we structure composition around scene graph elements (instance, attribute, and relation) and reasoning around the philosophical framework of inference (deductive, inductive, and abductive), formulating a 12-dimensional evaluation taxonomy. To increase complexity, driven by the inherent complexities of real-world scenarios, we curate each prompt with high compositional density for composition and multi-step inference for reasoning. We also pair each prompt with a checklist that specifies individual yes/no questions to assess each intended element independently to facilitate fine-grained and reliable evaluation. In statistics, our benchmark comprises 1,080 challenging prompts and around 13,500 checklist questions. Experiments across 27 current T2I models reveal that their composition capability still remains limited in complex high-density scenarios, while the reasoning capability lags even further behind as a critical bottleneck, with all models struggling to infer implicit elements from prompts. Our project page: https://t2i-corebench.github.io/.
https://huggingface.co/papers/2509.03516
[
9 authors](https://huggingface.co/papers/2509.03516)
·
Sep 3, 2025 
2
https://huggingface.co/papers/2509.03516#community
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2510.05921
Prompt reinforcing for long-term planning of large language models
https://huggingface.co/papers/2510.05921
Large language models (LLMs) have achieved remarkable success in a wide range of natural language processing tasks and can be adapted through prompting. However, they remain suboptimal in multi-turn interactions, often relying on incorrect early assumptions and failing to track user goals over time, which makes such tasks particularly challenging. Prior works in dialogue systems have shown that long-term planning is essential for handling interactive tasks. In this work, we propose a prompt optimisation framework inspired by reinforcement learning, which enables such planning to take place by only modifying the task instruction prompt of the LLM-based agent. By generating turn-by-turn feedback and leveraging experience replay for prompt rewriting, our proposed method shows significant improvement in multi-turn tasks such as text-to-SQL and task-oriented dialogue. Moreover, it generalises across different LLM-based agents and can leverage diverse LLMs as meta-prompting agents. This warrants future research in reinforcement learning-inspired parameter-free optimisation methods.
https://huggingface.co/papers/2510.05921
[
9 authors](https://huggingface.co/papers/2510.05921)
·
Oct 7, 2025
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2311.09569
Strings from the Library of Babel: Random Sampling as a Strong Baseline for Prompt Optimisation
https://huggingface.co/papers/2311.09569
Recent prompt optimisation approaches use the generative nature of language models to produce prompts -- even rivaling the performance of human-curated prompts. In this paper, we demonstrate that randomly sampling tokens from the model vocabulary as ``separators'' can be as effective as language models for prompt-style text classification. Our experiments show that random separators are competitive baselines, having less than a 1% difference compared to previous self-optimisation methods and showing a 12% average relative improvement over strong human baselines across nine text classification tasks and eight language models. We further analyse this phenomenon in detail using three different random generation strategies, establishing that the language space is rich with potentially good separators, with a greater than 40% average chance that a randomly drawn separator performs better than human-curated separators. These observations challenge the common assumption that an effective prompt should be human readable or task relevant and establish a strong baseline for prompt optimisation research.
https://huggingface.co/papers/2311.09569
[
5 authors](https://huggingface.co/papers/2311.09569)
·
Nov 15, 2023
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2406.07844
Understanding and Mitigating Compositional Issues in Text-to-Image Generative Models
https://huggingface.co/papers/2406.07844
Recent text-to-image diffusion-based generative models have the stunning ability to generate highly detailed and photo-realistic images and achieve state-of-the-art low FID scores on challenging image generation benchmarks. However, one of the primary failure modes of these text-to-image generative models is in composing attributes, objects, and their associated relationships accurately into an image. In our paper, we investigate this compositionality-based failure mode and highlight that imperfect text conditioning with CLIP text-encoder is one of the primary reasons behind the inability of these models to generate high-fidelity compositional scenes. In particular, we show that (i) there exists an optimal text-embedding space that can generate highly coherent compositional scenes which shows that the output space of the CLIP text-encoder is sub-optimal, and (ii) we observe that the final token embeddings in CLIP are erroneous as they often include attention contributions from unrelated tokens in compositional prompts. Our main finding shows that the best compositional improvements can be achieved (without harming the model's FID scores) by fine-tuning {\it only} a simple linear projection on CLIP's representation space in Stable-Diffusion variants using a small set of compositional image-text pairs. This result demonstrates that the sub-optimality of the CLIP's output space is a major error source. We also show that re-weighting the erroneous attention contributions in CLIP can also lead to improved compositional performances, however these improvements are often less significant than those achieved by solely learning a linear projection head, highlighting erroneous attentions to be only a minor error source.
https://huggingface.co/papers/2406.07844
[
7 authors](https://huggingface.co/papers/2406.07844)
·
Jun 11, 2024
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2509.23387
No Loss, No Gain: Gated Refinement and Adaptive Compression for Prompt Optimization
https://huggingface.co/papers/2509.23387
Prompt engineering is crucial for leveraging the full potential of large language models (LLMs). While automatic prompt optimization offers a scalable alternative to costly manual design, generating effective prompts remains challenging. Existing methods often struggle to stably generate improved prompts, leading to low efficiency, and overlook that prompt optimization easily gets trapped in local optima. Addressing this, we propose GRACE, a framework that integrates two synergistic strategies: Gated Refinement and Adaptive Compression, achieving Efficient prompt optimization. The gated refinement strategy introduces a feedback regulation gate and an update rejection gate, which refine update signals to produce stable and effective prompt improvements. When optimization stagnates, the adaptive compression strategy distills the prompt's core concepts, restructuring the optimization trace and opening new paths. By strategically introducing information loss through refinement and compression, GRACE delivers substantial gains in performance and efficiency. In extensive experiments on 11 tasks across three practical domains, including BIG-Bench Hard (BBH), domain-specific, and general NLP tasks, GRACE achieves significant average relative performance improvements of 4.7%, 4.4% and 2.7% over state-of-the-art methods, respectively. Further analysis shows that GRACE achieves these gains using only 25% of the prompt generation budget required by prior methods, highlighting its high optimization efficiency and low computational overhead. Our code is available at https://github.com/Eric8932/GRACE.
https://huggingface.co/papers/2509.23387
[
9 authors](https://huggingface.co/papers/2509.23387)
·
Sep 27, 2025
 [-] 1
https://huggingface.co/login?next=%2Fpapers%2F2606.01967
Training Prompt Matters: State-Adaptive Optimization for Robust Fine-Tuning
https://huggingface.co/papers/2606.01967
While prompt engineering is instrumental in maximizing the capabilities of Large Language Models (LLMs) during inference, the role of prompts during training remains critically underexplored. Prevailing fine-tuning paradigms typically treat training prompts as mere surface forms, assuming that semantically equivalent instructions yield identical learning outcomes. However, we reveal that this equivalence is deceptive: while paraphrased prompts often lead to comparable in-task performance, they induce drastically different cross-task impacts regarding catastrophic forgetting and generalization. Crucially, these impacts are positively correlated across tasks, indicating the existence of superior prompts that consistently yield better performance. Furthermore, we discover that these superior prompts can be robustly identified by task loss prior to learning. Leveraging these insights, we introduce State-Adaptive Prompt Optimization (SAPO), a lightweight yet effective training strategy that shifts task formulation from a static input to a dynamic, state-adaptive variable. Comprehensive experiments on diverse benchmarks confirm its effectiveness, which significantly mitigates forgetting while improving generalization, achieving substantial performance gains over state-of-the-art methods. These results provide insights into how training prompts shape learning dynamics and offer a practical recipe for robust fine-tuning. Our code is available at https://github.com/Eric8932/SAPO.
https://huggingface.co/papers/2606.01967
[
8 authors](https://huggingface.co/papers/2606.01967)
·
May 31
 [-] 1
https://huggingface.co/login?next=%2Fpapers%2F2312.06562
On Meta-Prompting
https://huggingface.co/papers/2312.06562
Certain statistical models are capable of interpreting input strings as instructions, or prompts, and carry out tasks based on them. Many approaches to prompting and pre-training these models involve the automated generation of these prompts. We call these approaches meta-prompting, or prompting to obtain prompts. We propose a theoretical framework based on category theory to generalize and describe them. This framework is flexible enough to account for LLM stochasticity; and allows us to obtain formal results around task agnosticity and equivalence of various meta-prompting approaches. We experiment with meta-prompting in two active areas of model research: creativity and ideation. We find that user preference favors (p < 0.01) the prompts generated under meta-prompting, as well as their corresponding outputs, over a series of hardcoded baseline prompts that include the original task prompt. Using our framework, we argue that meta-prompting is more effective than basic prompting at generating desirable outputs.
https://huggingface.co/papers/2312.06562
[
4 authors](https://huggingface.co/papers/2312.06562)
·
Dec 11, 2023 
1
https://huggingface.co/papers/2312.06562#community
 [-] 2
https://huggingface.co/login?next=%2Fpapers%2F2402.07927
A Systematic Survey of Prompt Engineering in Large Language Models: Techniques and Applications
https://huggingface.co/papers/2402.07927
Prompt engineering has emerged as an indispensable technique for extending the capabilities of large language models (LLMs) and vision-language models (VLMs). This approach leverages task-specific instructions, known as prompts, to enhance model efficacy without modifying the core model parameters. Rather than updating the model parameters, prompts allow seamless integration of pre-trained models into downstream tasks by eliciting desired model behaviors solely based on the given prompt. Prompts can be natural language instructions that provide context to guide the model or learned vector representations that activate relevant knowledge. This burgeoning field has enabled success across various applications, from question-answering to commonsense reasoning. However, there remains a lack of systematic organization and understanding of the diverse prompt engineering methods and techniques. This survey paper addresses the gap by providing a structured overview of recent advancements in prompt engineering, categorized by application area. For each prompting approach, we provide a summary detailing the prompting methodology, its applications, the models involved, and the datasets utilized. We also delve into the strengths and limitations of each approach and include a taxonomy diagram and table summarizing datasets, models, and critical points of each prompting technique. This systematic analysis enables a better understanding of this rapidly developing field and facilitates future research by illuminating open challenges and opportunities for prompt engineering.
https://huggingface.co/papers/2402.07927
[
6 authors](https://huggingface.co/papers/2402.07927)
·
Feb 5, 2024 
1
https://huggingface.co/papers/2402.07927#community
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2409.17972
BEATS: Optimizing LLM Mathematical Capabilities with BackVerify and Adaptive Disambiguate based Efficient Tree Search
https://huggingface.co/papers/2409.17972
Large Language Models (LLMs) have exhibited exceptional performance across a broad range of tasks and domains. However, they still encounter difficulties in solving mathematical problems due to the rigorous and logical nature of mathematics. Previous studies have employed techniques such as supervised fine-tuning (SFT), prompt engineering, and search-based methods to improve the mathematical problem-solving abilities of LLMs. Despite these efforts, their performance remains suboptimal and demands substantial computational resources. To address this issue, we propose a novel approach, BEATS, to enhance mathematical problem-solving abilities. Our method leverages newly designed prompts that guide the model to iteratively rewrite, advance by one step, and generate answers based on previous steps. Additionally, we introduce a new back-verification technique that uses LLMs to validate the correctness of the generated answers. Furthermore, we employ a pruning tree search to optimize search time while achieving strong performance. Notably, our method improves Qwen2-7b-Instruct's score from 36.94 to 61.52, outperforming GPT4's 42.5 on the MATH benchmark.
https://huggingface.co/papers/2409.17972
[
7 authors](https://huggingface.co/papers/2409.17972)
·
Sep 26, 2024
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2310.01260
SPELL: Semantic Prompt Evolution based on a LLM
https://huggingface.co/papers/2310.01260
Prompt engineering is a new paradigm for enhancing the performance of trained neural network models. For optimizing text-style prompts, existing methods usually individually operate small portions of a text step by step, which either breaks the fluency or could not globally adjust a prompt. Since large language models (LLMs) have powerful ability of generating coherent texts token by token, can we utilize LLMs for improving prompts? Based on this motivation, in this paper, considering a trained LLM as a text generator, we attempt to design a black-box evolution algorithm for automatically optimizing texts, namely SPELL (Semantic Prompt Evolution based on a LLM). The proposed method is evaluated with different LLMs and evolution parameters in different text tasks. Experimental results show that SPELL could rapidly improve the prompts indeed. We further explore the evolution process and discuss on the limitations, potential possibilities and future work.
https://huggingface.co/papers/2310.01260
[
2 authors](https://huggingface.co/papers/2310.01260)
·
Oct 2, 2023
 [-] 1
https://huggingface.co/login?next=%2Fpapers%2F2407.00256
One Prompt is not Enough: Automated Construction of a Mixture-of-Expert Prompts
https://huggingface.co/papers/2407.00256
Large Language Models (LLMs) exhibit strong generalization capabilities to novel tasks when prompted with language instructions and in-context demos. Since this ability sensitively depends on the quality of prompts, various methods have been explored to automate the instruction design. While these methods demonstrated promising results, they also restricted the searched prompt to one instruction. Such simplification significantly limits their capacity, as a single demo-free instruction might not be able to cover the entire complex problem space of the targeted task. To alleviate this issue, we adopt the Mixture-of-Expert paradigm and divide the problem space into a set of sub-regions; Each sub-region is governed by a specialized expert, equipped with both an instruction and a set of demos. A two-phase process is developed to construct the specialized expert for each region: (1) demo assignment: Inspired by the theoretical connection between in-context learning and kernel regression, we group demos into experts based on their semantic similarity; (2) instruction assignment: A region-based joint search of an instruction per expert complements the demos assigned to it, yielding a synergistic effect. The resulting method, codenamed Mixture-of-Prompts (MoP), achieves an average win rate of 81% against prior arts across several major benchmarks.
https://huggingface.co/papers/2407.00256
[
6 authors](https://huggingface.co/papers/2407.00256)
·
Jun 28, 2024
 [-] 4
https://huggingface.co/login?next=%2Fpapers%2F2605.28742
CORE: Contrastive Reflection Enables Rapid Improvements in Reasoning
https://huggingface.co/papers/2605.28742
Language models can use verifiable rewards to improve at a wide variety of reasoning tasks. However, both parametric (e.g. RLVR) and non-parametric (e.g. prompt optimization) approaches to doing so typically require hundreds of training samples and thousands of model rollouts, making them expensive in the best case and intractable in the worst. To address this challenge, we introduce Contrastive Reflection (CORE), a non-parametric learning algorithm that compares past reasoning traces to generate insights: short natural-language descriptions of reasoning strategies and constraints that capture differences between successful and unsuccessful problem attempts. Across four reasoning tasks, we demonstrate that CORE enables more rapid improvement than both parametric (GRPO) and non-parametric (GEPA, episodic RAG, and MemRL) methods, while using fewer rollouts. Under fixed rollout budgets with as few as five training samples, we then show that CORE also achieves comparable or greater performance gains than each baseline. Finally, we highlight how CORE is also substantially more context-efficient than non-parametric baselines, requiring fewer prompt tokens while storing learned knowledge as compact, interpretable natural-language insights. Our results therefore suggest that distilling contrasts between successful and unsuccessful reasoning traces into abstract and useful insights can provide a more efficient and interpretable route to model self-improvement than weight updates, prompt optimization, or direct reuse of stored reasoning traces.
https://huggingface.co/papers/2605.28742
 

https://huggingface.co/papers/2605.28742
StanfordUniversity Stanford University
https://huggingface.co/StanfordUniversity
·
May 26 
2
https://huggingface.co/papers/2605.28742#community
 [-] 1
https://huggingface.co/login?next=%2Fpapers%2F2406.15708
Teach Better or Show Smarter? On Instructions and Exemplars in Automatic Prompt Optimization
https://huggingface.co/papers/2406.15708
Large language models have demonstrated remarkable capabilities, but their performance is heavily reliant on effective prompt engineering. Automatic prompt optimization (APO) methods are designed to automate this and can be broadly categorized into those targeting instructions (instruction optimization, IO) vs. those targeting exemplars (exemplar selection, ES). Despite their shared objective, these have evolved rather independently, with IO recently receiving more research attention. This paper seeks to bridge this gap by comprehensively comparing the performance of representative IO and ES techniques, both isolation and combination, on a diverse set of challenging tasks. Our findings reveal that intelligently reusing model-generated input-output pairs obtained from evaluating prompts on the validation set as exemplars consistently improves performance over IO methods but is currently under-investigated. We also find that despite the recent focus on IO, how we select exemplars can outweigh how we optimize instructions, with ES strategies as simple as random search outperforming state-of-the-art IO methods with seed instructions without any optimization. Moreover, we observe synergy between ES and IO, with optimal combinations surpassing individual contributions. We conclude that studying exemplar selection as a standalone method and its optimal combination with instruction optimization remains a crucial aspect of APO and deserves greater consideration in future research, even in the era of highly capable instruction-following models.
https://huggingface.co/papers/2406.15708
[
4 authors](https://huggingface.co/papers/2406.15708)
·
Jun 21, 2024
 [-] 1
https://huggingface.co/login?next=%2Fpapers%2F2506.05305
ProRefine: Inference-time Prompt Refinement with Textual Feedback
https://huggingface.co/papers/2506.05305
Agentic workflows, where multiple AI agents collaborate to accomplish complex tasks like reasoning or planning, are becoming increasingly prevalent. However, these workflows often suffer from error propagation and sub-optimal performance, largely due to poorly designed prompts that fail to effectively guide individual agents. This is a critical problem because it limits the reliability and scalability of these powerful systems. We introduce ProRefine, an innovative inference-time prompt optimization method that leverages textual feedback from large language models (LLMs) to address this challenge. ProRefine dynamically refines prompts for multi-step reasoning tasks without additional training or ground truth labels. Evaluated on five benchmark mathematical reasoning datasets, ProRefine significantly surpasses zero-shot Chain-of-Thought baselines by 3 to 37 percentage points. This approach not only boosts accuracy but also allows smaller models to match the performance of larger ones, highlighting its potential for efficient and scalable AI deployment, and democratizing access to high-performing AI.
https://huggingface.co/papers/2506.05305
[
5 authors](https://huggingface.co/papers/2506.05305)
·
Jun 5, 2025
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2104.06599
Learning How to Ask: Querying LMs with Mixtures of Soft Prompts
https://huggingface.co/papers/2104.06599
Natural-language prompts have recently been used to coax pretrained language models into performing other AI tasks, using a fill-in-the-blank paradigm (Petroni et al., 2019) or a few-shot extrapolation paradigm (Brown et al., 2020). For example, language models retain factual knowledge from their training corpora that can be extracted by asking them to "fill in the blank" in a sentential prompt. However, where does this prompt come from? We explore the idea of learning prompts by gradient descent -- either fine-tuning prompts taken from previous work, or starting from random initialization. Our prompts consist of "soft words," i.e., continuous vectors that are not necessarily word type embeddings from the language model. Furthermore, for each task, we optimize a mixture of prompts, learning which prompts are most effective and how to ensemble them. Across multiple English LMs and tasks, our approach hugely outperforms previous methods, showing that the implicit factual knowledge in language models was previously underestimated. Moreover, this knowledge is cheap to elicit: random initialization is nearly as good as informed initialization.
https://huggingface.co/papers/2104.06599
[
2 authors](https://huggingface.co/papers/2104.06599)
·
Apr 13, 2021
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2412.08639
Fast Prompt Alignment for Text-to-Image Generation
https://huggingface.co/papers/2412.08639
Text-to-image generation has advanced rapidly, yet aligning complex textual prompts with generated visuals remains challenging, especially with intricate object relationships and fine-grained details. This paper introduces Fast Prompt Alignment (FPA), a prompt optimization framework that leverages a one-pass approach, enhancing text-to-image alignment efficiency without the iterative overhead typical of current methods like OPT2I. FPA uses large language models (LLMs) for single-iteration prompt paraphrasing, followed by fine-tuning or in-context learning with optimized prompts to enable real-time inference, reducing computational demands while preserving alignment fidelity. Extensive evaluations on the COCO Captions and PartiPrompts datasets demonstrate that FPA achieves competitive text-image alignment scores at a fraction of the processing time, as validated through both automated metrics (TIFA, VQA) and human evaluation. A human study with expert annotators further reveals a strong correlation between human alignment judgments and automated scores, underscoring the robustness of FPA's improvements. The proposed method showcases a scalable, efficient alternative to iterative prompt optimization, enabling broader applicability in real-time, high-demand settings. The codebase is provided to facilitate further research: https://github.com/tiktok/fast_prompt_alignment
https://huggingface.co/papers/2412.08639
[
5 authors](https://huggingface.co/papers/2412.08639)
·
Dec 11, 2024
 [-] 16
https://huggingface.co/login?next=%2Fpapers%2F2410.06154
GLOV: Guided Large Language Models as Implicit Optimizers for Vision Language Models
https://huggingface.co/papers/2410.06154
In this work, we propose a novel method (GLOV) enabling Large Language Models (LLMs) to act as implicit Optimizers for Vision-Langugage Models (VLMs) to enhance downstream vision tasks. Our GLOV meta-prompts an LLM with the downstream task description, querying it for suitable VLM prompts (e.g., for zero-shot classification with CLIP). These prompts are ranked according to a purity measure obtained through a fitness function. In each respective optimization step, the ranked prompts are fed as in-context examples (with their accuracies) to equip the LLM with the knowledge of the type of text prompts preferred by the downstream VLM. Furthermore, we also explicitly steer the LLM generation process in each optimization step by specifically adding an offset difference vector of the embeddings from the positive and negative solutions found by the LLM, in previous optimization steps, to the intermediate layer of the network for the next generation step. This offset vector steers the LLM generation toward the type of language preferred by the downstream VLM, resulting in enhanced performance on the downstream vision tasks. We comprehensively evaluate our GLOV on 16 diverse datasets using two families of VLMs, i.e., dual-encoder (e.g., CLIP) and encoder-decoder (e.g., LLaVa) models -- showing that the discovered solutions can enhance the recognition performance by up to 15.0% and 57.5% (3.8% and 21.6% on average) for these models.
https://huggingface.co/papers/2410.06154
[
15 authors](https://huggingface.co/papers/2410.06154)
·
Oct 8, 2024 
2
https://huggingface.co/papers/2410.06154#community
 [-] 1
https://huggingface.co/login?next=%2Fpapers%2F2501.01424
Object-level Visual Prompts for Compositional Image Generation
https://huggingface.co/papers/2501.01424
We introduce a method for composing object-level visual prompts within a text-to-image diffusion model. Our approach addresses the task of generating semantically coherent compositions across diverse scenes and styles, similar to the versatility and expressiveness offered by text prompts. A key challenge in this task is to preserve the identity of the objects depicted in the input visual prompts, while also generating diverse compositions across different images. To address this challenge, we introduce a new KV-mixed cross-attention mechanism, in which keys and values are learned from distinct visual representations. The keys are derived from an encoder with a small bottleneck for layout control, whereas the values come from a larger bottleneck encoder that captures fine-grained appearance details. By mixing keys and values from these complementary sources, our model preserves the identity of the visual prompts while supporting flexible variations in object arrangement, pose, and composition. During inference, we further propose object-level compositional guidance to improve the method's identity preservation and layout correctness. Results show that our technique produces diverse scene compositions that preserve the unique characteristics of each visual prompt, expanding the creative potential of text-to-image generation.
https://huggingface.co/papers/2501.01424
[
8 authors](https://huggingface.co/papers/2501.01424)
·
Jan 2, 2025
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2603.02630
MASPOB: Bandit-Based Prompt Optimization for Multi-Agent Systems with Graph Neural Networks
https://huggingface.co/papers/2603.02630
Large Language Models (LLMs) have achieved great success in many real-world applications, especially the one serving as the cognitive backbone of Multi-Agent Systems (MAS) to orchestrate complex workflows in practice. Since many deployment scenarios preclude MAS workflow modifications and its performance is highly sensitive to the input prompts, prompt optimization emerges as a more natural approach to improve its performance. However, real-world prompt optimization for MAS is impeded by three key challenges: (1) the need of sample efficiency due to prohibitive evaluation costs, (2) topology-induced coupling among prompts, and (3) the combinatorial explosion of the search space. To address these challenges, we introduce MASPOB (Multi-Agent System Prompt Optimization via Bandits), a novel sample-efficient framework based on bandits. By leveraging Upper Confidence Bound (UCB) to quantify uncertainty, the bandit framework balances exploration and exploitation, maximizing gains within a strictly limited budget. To handle topology-induced coupling, MASPOB integrates Graph Neural Networks (GNNs) to capture structural priors, learning topology-aware representations of prompt semantics. Furthermore, it employs coordinate ascent to decompose the optimization into univariate sub-problems, reducing search complexity from exponential to linear. Extensive experiments across diverse benchmarks demonstrate that MASPOB achieves state-of-the-art performance, consistently outperforming existing baselines.
https://huggingface.co/papers/2603.02630
[
8 authors](https://huggingface.co/papers/2603.02630)
·
Mar 2
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2204.03574
Learning to Compose Soft Prompts for Compositional Zero-Shot Learning
https://huggingface.co/papers/2204.03574
We introduce compositional soft prompting (CSP), a parameter-efficient learning technique to improve the zero-shot compositionality of large-scale pretrained vision-language models (VLMs) like CLIP. We develop CSP for compositional zero-shot learning, the task of predicting unseen attribute-object compositions (e.g., old cat and young tiger). VLMs have a flexible text encoder that can represent arbitrary classes as natural language prompts but they often underperform task-specific architectures on the compositional zero-shot benchmark datasets. CSP treats the attributes and objects that define classes as learnable tokens of vocabulary. During training, the vocabulary is tuned to recognize classes that compose tokens in multiple ways (e.g., old cat and white cat). At test time, we recompose the learned attribute-object vocabulary in new combinations to recognize novel classes. We show that CSP outperforms the CLIP on benchmark datasets by an average of 10.9 percentage points on AUC. CSP also outperforms CoOp, a soft prompting method that fine-tunes the prefix context tokens, by an average of 5.8 percentage points on AUC. We perform additional experiments to show that CSP improves generalization to higher-order attribute-attribute-object compositions (e.g., old white cat) and combinations of pretrained attributes and fine-tuned objects. The code is available at https://github.com/BatsResearch/csp.
https://huggingface.co/papers/2204.03574
[
3 authors](https://huggingface.co/papers/2204.03574)
·
Apr 7, 2022
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2311.01967
The language of prompting: What linguistic properties make a prompt successful?
https://huggingface.co/papers/2311.01967
The latest generation of LLMs can be prompted to achieve impressive zero-shot or few-shot performance in many NLP tasks. However, since performance is highly sensitive to the choice of prompts, considerable effort has been devoted to crowd-sourcing prompts or designing methods for prompt optimisation. Yet, we still lack a systematic understanding of how linguistic properties of prompts correlate with task performance. In this work, we investigate how LLMs of different sizes, pre-trained and instruction-tuned, perform on prompts that are semantically equivalent, but vary in linguistic structure. We investigate both grammatical properties such as mood, tense, aspect and modality, as well as lexico-semantic variation through the use of synonyms. Our findings contradict the common assumption that LLMs achieve optimal performance on lower perplexity prompts that reflect language use in pretraining or instruction-tuning data. Prompts transfer poorly between datasets or models, and performance cannot generally be explained by perplexity, word frequency, ambiguity or prompt length. Based on our results, we put forward a proposal for a more robust and comprehensive evaluation standard for prompting research.
https://huggingface.co/papers/2311.01967
[
3 authors](https://huggingface.co/papers/2311.01967)
·
Nov 3, 2023
 [-] 1
https://huggingface.co/login?next=%2Fpapers%2F2505.12831
Contrastive Prompting Enhances Sentence Embeddings in LLMs through Inference-Time Steering
https://huggingface.co/papers/2505.12831
Extracting sentence embeddings from large language models (LLMs) is a practical direction, as it requires neither additional data nor fine-tuning. Previous studies usually focus on prompt engineering to guide LLMs to encode the core semantic information of the sentence into the embedding of the last token. However, the last token in these methods still encodes an excess of non-essential information, such as stop words, limiting its encoding capacity. To this end, we propose a Contrastive Prompting (CP) method that introduces an extra auxiliary prompt to elicit better sentence embedding. By contrasting with the auxiliary prompt, CP can steer existing prompts to encode the core semantics of the sentence, rather than non-essential information. CP is a plug-and-play inference-time intervention method that can be combined with various prompt-based methods. Extensive experiments on Semantic Textual Similarity (STS) tasks and downstream classification tasks demonstrate that our method can improve the performance of existing prompt-based methods across different LLMs. Our code will be released at https://github.com/zifengcheng/CP.
https://huggingface.co/papers/2505.12831
[
7 authors](https://huggingface.co/papers/2505.12831)
·
May 18, 2025
 [-] 1
https://huggingface.co/login?next=%2Fpapers%2F2501.02527
Vision-Driven Prompt Optimization for Large Language Models in Multimodal Generative Tasks
https://huggingface.co/papers/2501.02527
Vision generation remains a challenging frontier in artificial intelligence, requiring seamless integration of visual understanding and generative capabilities. In this paper, we propose a novel framework, Vision-Driven Prompt Optimization (VDPO), that leverages Large Language Models (LLMs) to dynamically generate textual prompts from visual inputs, guiding high-fidelity image synthesis. VDPO combines a visual embedding prompt tuner, a textual instruction generator, and a vision generation module to achieve state-of-the-art performance in diverse vision generation tasks. Extensive experiments on benchmarks such as COCO and Sketchy demonstrate that VDPO consistently outperforms existing methods, achieving significant improvements in FID, LPIPS, and BLEU/CIDEr scores. Additional analyses reveal the scalability, robustness, and generalization capabilities of VDPO, making it a versatile solution for in-domain and out-of-domain tasks. Human evaluations further validate the practical superiority of VDPO in generating visually appealing and semantically coherent outputs.
https://huggingface.co/papers/2501.02527
[
3 authors](https://huggingface.co/papers/2501.02527)
·
Jan 5, 2025
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2605.29678
Spurious Prompts: Can Irrelevant Prompts Steer Large Language Models?
https://huggingface.co/papers/2605.29678
Large language models are highly sensitive to prompts, but this sensitivity is usually studied through task-relevant instructions, demonstrations, or reasoning cues. In this paper, we study a different form of prompt sensitivity: whether prompts that are semantically unrelated to the task can nevertheless steer model behavior. We call them spurious prompts and show their surprising efficacy. We also propose a simple black-box search procedure for discovering them. Across reasoning and question-answering benchmarks, using models ranging from 0.8B to 27B parameters and spanning three model families, we show that spurious prompts can improve performance, often matching or outperforming standard prompting baselines and task-aware prompt optimization. We further show that they can steer models toward unintended behaviors, such as repeatedly selecting the first answer option, producing incorrect answers, returning an even, prime or small number without explicitly instructing the model to do so. These findings reveal a new kind of prompt sensitivity: LLMs can be systematically steered by prompts that are unrelated to the task they are asked to solve. Our code is available at https://github.com/Batorskq/spurious
https://huggingface.co/papers/2605.29678
[
5 authors](https://huggingface.co/papers/2605.29678)
·
May 27
 [-] 32
https://huggingface.co/login?next=%2Fpapers%2F2311.04934
Prompt Cache: Modular Attention Reuse for Low-Latency Inference
https://huggingface.co/papers/2311.04934
We present Prompt Cache, an approach for accelerating inference for large language models (LLM) by reusing attention states across different LLM prompts. Many input prompts have overlapping text segments, such as system messages, prompt templates, and documents provided for context. Our key insight is that by precomputing and storing the attention states of these frequently occurring text segments on the inference server, we can efficiently reuse them when these segments appear in user prompts. Prompt Cache employs a schema to explicitly define such reusable text segments, called prompt modules. The schema ensures positional accuracy during attention state reuse and provides users with an interface to access cached states in their prompt. Using a prototype implementation, we evaluate Prompt Cache across several LLMs. We show that Prompt Cache significantly reduce latency in time-to-first-token, especially for longer prompts such as document-based question answering and recommendations. The improvements range from 8x for GPU-based inference to 60x for CPU-based inference, all while maintaining output accuracy and without the need for model parameter modifications.
https://huggingface.co/papers/2311.04934
[
6 authors](https://huggingface.co/papers/2311.04934)
·
Nov 7, 2023 
2
https://huggingface.co/papers/2311.04934#community
 [-] 1
https://huggingface.co/login?next=%2Fpapers%2F2204.04392
Contrastive Demonstration Tuning for Pre-trained Language Models
https://huggingface.co/papers/2204.04392
Pretrained language models can be effectively stimulated by textual prompts or demonstrations, especially in low-data scenarios. Recent works have focused on automatically searching discrete or continuous prompts or optimized verbalizers, yet studies for the demonstration are still limited. Concretely, the demonstration examples are crucial for an excellent final performance of prompt-tuning. In this paper, we propose a novel pluggable, extensible, and efficient approach named contrastive demonstration tuning, which is free of demonstration sampling. Furthermore, the proposed approach can be: (i) Plugged into any previous prompt-tuning approaches; (ii) Extended to widespread classification tasks with a large number of categories. Experimental results on 16 datasets illustrate that our method integrated with previous approaches LM-BFF and P-tuning can yield better performance. Code is available in https://github.com/zjunlp/PromptKG/tree/main/research/Demo-Tuning.
https://huggingface.co/papers/2204.04392
[
6 authors](https://huggingface.co/papers/2204.04392)
·
Apr 8, 2022
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2509.17458
CARINOX: Inference-time Scaling with Category-Aware Reward-based Initial Noise Optimization and Exploration
https://huggingface.co/papers/2509.17458
Text-to-image diffusion models, such as Stable Diffusion, can produce high-quality and diverse images but often fail to achieve compositional alignment, particularly when prompts describe complex object relationships, attributes, or spatial arrangements. Recent inference-time approaches address this by optimizing or exploring the initial noise under the guidance of reward functions that score text-image alignment without requiring model fine-tuning. While promising, each strategy has intrinsic limitations when used alone: optimization can stall due to poor initialization or unfavorable search trajectories, whereas exploration may require a prohibitively large number of samples to locate a satisfactory output. Our analysis further shows that neither single reward metrics nor ad-hoc combinations reliably capture all aspects of compositionality, leading to weak or inconsistent guidance. To overcome these challenges, we present Category-Aware Reward-based Initial Noise Optimization and Exploration (CARINOX), a unified framework that combines noise optimization and exploration with a principled reward selection procedure grounded in correlation with human judgments. Evaluations on two complementary benchmarks covering diverse compositional challenges show that CARINOX raises average alignment scores by +16% on T2I-CompBench++ and +11% on the HRS benchmark, consistently outperforming state-of-the-art optimization and exploration-based methods across all major categories, while preserving image quality and diversity. The project page is available at https://amirkasaei.com/carinox/{this URL}.
https://huggingface.co/papers/2509.17458
[
8 authors](https://huggingface.co/papers/2509.17458)
·
Sep 21, 2025
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2410.07838
Minority-Focused Text-to-Image Generation via Prompt Optimization
https://huggingface.co/papers/2410.07838
We investigate the generation of minority samples using pretrained text-to-image (T2I) latent diffusion models. Minority instances, in the context of T2I generation, can be defined as ones living on low-density regions of text-conditional data distributions. They are valuable for various applications of modern T2I generators, such as data augmentation and creative AI. Unfortunately, existing pretrained T2I diffusion models primarily focus on high-density regions, largely due to the influence of guided samplers (like CFG) that are essential for high-quality generation. To address this, we present a novel framework to counter the high-density-focus of T2I diffusion models. Specifically, we first develop an online prompt optimization framework that encourages emergence of desired properties during inference while preserving semantic contents of user-provided prompts. We subsequently tailor this generic prompt optimizer into a specialized solver that promotes generation of minority features by incorporating a carefully-crafted likelihood objective. Extensive experiments conducted across various types of T2I models demonstrate that our approach significantly enhances the capability to produce high-quality minority instances compared to existing samplers. Code is available at https://github.com/soobin-um/MinorityPrompt.
https://huggingface.co/papers/2410.07838
[
2 authors](https://huggingface.co/papers/2410.07838)
·
Oct 10, 2024
 [-] 18
https://huggingface.co/login?next=%2Fpapers%2F2603.20667
REVERE: Reflective Evolving Research Engineer for Scientific Workflows
https://huggingface.co/papers/2603.20667
Existing prompt-optimization techniques rely on local signals to update behavior, often neglecting broader and recurring patterns across tasks, leading to poor generalization; they further rely on full-prompt rewrites or unstructured merges, resulting in knowledge loss. These limitations are magnified in research-coding workflows, which involve heterogeneous repositories, underspecified environments, and weak feedback, where reproducing results from public codebases is an established evaluation regime. We introduce Reflective Evolving Research Engineer (REVERE), a framework that continuously learns from Global Training Context, recognizes recurring failure modes in cross-repository execution trajectories, distills them into reusable heuristics, and performs targeted edits across three configurable fields: the system prompt, a task-prompt template, and a cumulative cheatsheet. REVERE, via this reflective optimization framework, improves performance over prior state-of-the-art expert-crafted instructions on research coding tasks by 4.50% on SUPER, 3.51% on ResearchCodeBench, and 4.89% on ScienceAgentBench across their respective metrics. These results demonstrate that agents equipped with mechanisms for continual learning and global memory consolidation can meaningfully evolve their capabilities over time.
https://huggingface.co/papers/2603.20667
[
4 authors](https://huggingface.co/papers/2603.20667)
·
Mar 20 
2
https://huggingface.co/papers/2603.20667#community
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2210.03350
Measuring and Narrowing the Compositionality Gap in Language Models
https://huggingface.co/papers/2210.03350
We investigate the ability of language models to perform compositional reasoning tasks where the overall solution depends on correctly composing the answers to sub-problems. We measure how often models can correctly answer all sub-problems but not generate the overall solution, a ratio we call the compositionality gap. We evaluate this ratio by asking multi-hop questions with answers that require composing multiple facts unlikely to have been observed together during pretraining. In the GPT-3 family of models, as model size increases we show that the single-hop question answering performance improves faster than the multi-hop performance does, therefore the compositionality gap does not decrease. This surprising result suggests that while more powerful models memorize and recall more factual knowledge, they show no corresponding improvement in their ability to perform this kind of compositional reasoning. We then demonstrate how elicitive prompting (such as chain of thought) narrows the compositionality gap by reasoning explicitly instead of implicitly. We present a new method, self-ask, that further improves on chain of thought. In our method, the model explicitly asks itself (and then answers) follow-up questions before answering the initial question. We finally show that self-ask's structured prompting lets us easily plug in a search engine to answer the follow-up questions, which additionally improves accuracy.
https://huggingface.co/papers/2210.03350
[
6 authors](https://huggingface.co/papers/2210.03350)
·
Oct 6, 2022
 [-] 10
https://huggingface.co/login?next=%2Fpapers%2F2605.19952
Rethinking How to Remember: Beyond Atomic Facts in Lifelong LLM Agent Memory
https://huggingface.co/papers/2605.19952
To enable reliable long-term interaction, LLM agents require a memory system that can faithfully store, efficiently retrieve, and deeply reason over accumulated dialogue history. Most existing methods adopt an extracted fact based paradigm: handcrafted static prompts compress raw dialogues into atomic facts, which are then stored, matched, and injected into downstream reasoning. Nevertheless, such fact-centric designs inevitably discard fine-grained details in original dialogues and fail to support deep reasoning over scattered isolated facts. Moreover, static prompts cannot maintain consistent extraction granularity across diverse dialogue styles. To address these limitations, we propose TriMem, which maintains three coexisting representation granularities, including raw dialogue segments anchored by source identifiers for storage fidelity, extracted atomic facts for efficient memory retrieval, synthesized profiles that aggregate dispersed facts into holistic semantic understanding for deep reasoning. We further adopt TextGrad-based prompt optimization, which iteratively refines extraction and profiling prompts via response quality feedback, achieving lifelong evolution without any parameter updating. Extensive experiments on LoCoMo and PerLTQA across multiple LLM backbones demonstrate that TriMem consistently outperforms strong memory baselines. The code is available at https://TMLR-TriMem.github.io .
https://huggingface.co/papers/2605.19952
 

https://huggingface.co/papers/2605.19952
TMLR-Group-HF TMLR Group
https://huggingface.co/TMLR-Group-HF
·
May 18 
2
https://huggingface.co/papers/2605.19952#community
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2210.10258
Continued Pretraining for Better Zero- and Few-Shot Promptability
https://huggingface.co/papers/2210.10258
Recently introduced language model prompting methods can achieve high accuracy in zero- and few-shot settings while requiring few to no learned task-specific parameters. Nevertheless, these methods still often trail behind full model finetuning. In this work, we investigate if a dedicated continued pretraining stage could improve "promptability", i.e., zero-shot performance with natural language prompts or few-shot performance with prompt tuning. We reveal settings where existing continued pretraining methods lack promptability. We also identify current methodological gaps, which we fill with thorough large-scale experiments. We demonstrate that a simple recipe, continued pretraining that incorporates a trainable prompt during multi-task learning, leads to improved promptability in both zero- and few-shot settings compared to existing methods, up to 31% relative. On the other hand, we find that continued pretraining using MAML-style meta-learning, a method that directly optimizes few-shot promptability, yields subpar performance. We validate our findings with two prompt tuning methods, and, based on our results, we provide concrete recommendations to optimize promptability for different use cases.
https://huggingface.co/papers/2210.10258
[
7 authors](https://huggingface.co/papers/2210.10258)
·
Oct 18, 2022
 [-] 1
https://huggingface.co/login?next=%2Fpapers%2F2601.02896
Bridging Mechanistic Interpretability and Prompt Engineering with Gradient Ascent for Interpretable Persona Control
https://huggingface.co/papers/2601.02896
Controlling emergent behavioral personas (e.g., sycophancy, hallucination) in Large Language Models (LLMs) is critical for AI safety, yet remains a persistent challenge. Existing solutions face a dilemma: manual prompt engineering is intuitive but unscalable and imprecise, while automatic optimization methods are effective but operate as "black boxes" with no interpretable connection to model internals. We propose a novel framework that adapts gradient ascent to LLMs, enabling targeted prompt discovery. In specific, we propose two methods, RESGA and SAEGA, that both optimize randomly initialized prompts to achieve better aligned representation with an identified persona direction. We introduce fluent gradient ascent to control the fluency of discovered persona steering prompts. We demonstrate RESGA and SAEGA's effectiveness across Llama 3.1, Qwen 2.5, and Gemma 3 for steering three different personas, sycophancy, hallucination, and myopic reward. Crucially, on sycophancy, our automatically discovered prompts achieve significant improvement (49.90% compared with 79.24%). By grounding prompt discovery in mechanistically meaningful features, our method offers a new paradigm for controllable and interpretable behavior modification.
https://huggingface.co/papers/2601.02896
[
3 authors](https://huggingface.co/papers/2601.02896)
·
Apr 21
 [-] 34
https://huggingface.co/login?next=%2Fpapers%2F2509.19894
PromptCoT 2.0: Scaling Prompt Synthesis for Large Language Model Reasoning
https://huggingface.co/papers/2509.19894
Large language models (LLMs) are evolving from conversational systems into strong reasoners for tasks such as Olympiad mathematics and competitive programming. While scaling parameters and test-time computation has driven progress, a key bottleneck is the lack of high-quality training problems: human-curated datasets are costly and limited, while existing synthetic corpora are often too easy or narrow. PromptCoT 1.0 showed that injecting rationales into prompt synthesis increases problem difficulty. Building on this, we present PromptCoT 2.0, a scalable framework that replaces hand-crafted heuristics with an expectation-maximization (EM) loop, where rationales are iteratively refined to guide prompt construction. This produces problems that are both harder and more diverse than prior corpora. The synthetic prompts support two post-training regimes: (1) Self-Play, where strong models improve autonomously via verifiable feedback without stronger teachers; and (2) Supervised Fine-Tuning (SFT), where weaker models learn from teacher-distilled traces. Extensive experiments demonstrate the effectiveness of this approach. In self-play, applying PromptCoT 2.0 to Qwen3-30B-A3B-Thinking-2507 sets new state-of-the-art results at the 30B scale, with +4.4, +4.8, and +5.3 on AIME 24/25 and HMMT 25, +6.1 and +5.0 on LiveCodeBench v5/v6, and +35 Elo on Codeforces. In SFT, training Qwen2.5-7B-Instruct solely on synthetic prompts boosts accuracy to 73.1 (AIME 24), 65.6 (AIME 25), and 53.4 (LiveCodeBench v5), surpassing models trained on human or hybrid data. Analyses further confirm that PromptCoT 2.0 yields fundamentally harder and distributionally distinct problems. These results establish prompt synthesis as a new axis for scaling reasoning and position PromptCoT 2.0 as a scalable foundation for future open-source models. The implementation is available at https://github.com/inclusionAI/PromptCoT.
https://huggingface.co/papers/2509.19894
[
5 authors](https://huggingface.co/papers/2509.19894)
·
Sep 23, 2025 
5
https://huggingface.co/papers/2509.19894#community
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2602.06166
M3: High-fidelity Text-to-Image Generation via Multi-Modal, Multi-Agent and Multi-Round Visual Reasoning
https://huggingface.co/papers/2602.06166
Generative models have achieved impressive fidelity in text-to-image synthesis, yet struggle with complex compositional prompts involving multiple constraints. We introduce M3 (Multi-Modal, Multi-Agent, Multi-Round), a training-free framework that systematically resolves these failures through iterative inference-time refinement. M3 orchestrates off-the-shelf foundation models in a robust multi-agent loop: a Planner decomposes prompts into verifiable checklists, while specialized Checker, Refiner, and Editor agents surgically correct constraints one at a time, with a Verifier ensuring monotonic improvement. Applied to open-source models, M3 achieves remarkable results on the challenging OneIG-EN benchmark, with our Qwen-Image+M3 surpassing commercial flagship systems including Imagen4 (0.515) and Seedream 3.0 (0.530), reaching state-of-the-art performance (0.532 overall). This demonstrates that intelligent multi-agent reasoning can elevate open-source models beyond proprietary alternatives. M3 also substantially improves GenEval compositional metrics, effectively doubling spatial reasoning performance on hardened test sets. As a plug-and-play module compatible with any pre-trained T2I model, M3 establishes a new paradigm for compositional generation without costly retraining.
https://huggingface.co/papers/2602.06166
[
5 authors](https://huggingface.co/papers/2602.06166)
·
Feb 4
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2404.19335
StablePT: Towards Stable Prompting for Few-shot Learning via Input Separation
https://huggingface.co/papers/2404.19335
Large language models have shown their ability to become effective few-shot learners with prompting, revoluting the paradigm of learning with data scarcity. However, this approach largely depends on the quality of prompt initialization, and always exhibits large variability among different runs. Such property makes prompt tuning highly unreliable and vulnerable to poorly constructed prompts, which limits its extension to more real-world applications. To tackle this issue, we propose to treat the hard prompt and soft prompt as separate inputs to mitigate noise brought by the prompt initialization. Furthermore, we optimize soft prompts with contrastive learning for utilizing class-aware information in the training process to maintain model performance. Experimental results demonstrate that \sysname outperforms state-of-the-art methods by 7.20% in accuracy and reduces the standard deviation by 2.02 on average. Furthermore, extensive experiments underscore its robustness and stability across 7 datasets covering various tasks.
https://huggingface.co/papers/2404.19335
[
7 authors](https://huggingface.co/papers/2404.19335)
·
Apr 29, 2024
Previous
https://huggingface.co/papers/date/2026-07-03
System theme
Company
TOS
https://huggingface.co/terms-of-service
 
Privacy
https://huggingface.co/privacy
 
About
https://huggingface.co/huggingface
 
Careers
https://apply.workable.com/huggingface/
 

https://huggingface.co/
Website
Models
https://huggingface.co/models
 
Datasets
https://huggingface.co/datasets
 
Spaces
https://huggingface.co/spaces
 
Pricing
https://huggingface.co/pricing
 
Docs
https://huggingface.co/docs
Trending Papers ranked by GitHub stars activity