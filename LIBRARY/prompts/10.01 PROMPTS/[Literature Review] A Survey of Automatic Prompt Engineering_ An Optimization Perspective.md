# [Literature Review] A Survey of Automatic Prompt Engineering: An Optimization Perspective

Source URL: https://www.themoonlight.io/en/review/a-survey-of-automatic-prompt-engineering-an-optimization-perspective

[Literature Review] A Survey of Automatic Prompt Engineering: An Optimization Perspective
open navigation menu
Features
https://www.themoonlight.io/features
Pricing
https://www.themoonlight.io/pricing
FAQ
https://docs.themoonlight.io/help
Blog
https://www.themoonlight.io/blog
Explore Literature
https://www.themoonlight.io/explore
2nd Anniversary
https://www.themoonlight.io/events/anniversary
open navigation menu
Features
https://www.themoonlight.io/features
Pricing
https://www.themoonlight.io/pricing
FAQ
https://docs.themoonlight.io/help
Blog
https://www.themoonlight.io/blog
Explore Literature
https://www.themoonlight.io/explore
2nd Anniversary
https://www.themoonlight.io/events/anniversary
EN
Upload Paper
Get Started Free
Sign in
This page provides the most accurate and concise summary worldwide for the paper titled A Survey of Automatic Prompt Engineering: An Optimization Perspective. With Moonlight, your AI research colleague, you can effortlessly and quickly grasp all the papers you read. Install the Chrome extension from https://www.themoonlight.io/ or directly upload files on the web. Moonlight offers features tailored to your needs: - Text Explanation: AI simplifies complex concepts and paragraphs. - Image Explanation: One-click explanations of images, tables, and formulas. - AI Chat: Engage with AI to dive deeper into paper discussions. - Smart Citations: Instantly view information (title, author, summary) of cited papers without scrolling to the References. - Translation: Quickly translate unfamiliar words, sentences, or the entire page. - Auto Highlight: AI highlights key points automatically, helping you identify originality, methods, and results swiftly. - External Link Explanation: AI analyzes external sources and explains their relevance to your document. - Markup: Highlight important sentences and annotate to create personalized research notes. - Save and Share: Store documents in your library and easily share them. - Scholar Deep Search: Receive recommendations of relevant papers based on your stored documents.
[Literature Review] A Survey of Automatic Prompt Engineering: An Optimization Perspective
Open original PDF
https://www.themoonlight.io/file?url=https%3A%2F%2Farxiv.org%2Fpdf%2F2502.11560
 
View More Reviews
https://www.themoonlight.io/en/explore/cs
Original Paper Review
Explore Literature
Computer Science
[Literature Review] A Survey of Automatic Prompt Engineering: An Optimization...
[
[Literature Review] A Survey of Automatic Prompt Engineering: An Optimization Perspective
](https://www.themoonlight.io/file?url=https%3A%2F%2Farxiv.org%2Fpdf%2F2502.11560)
AI Discover the optimization framework behind automated prompt engineering. This survey guides you to maximize foundation model performance efficiently.
Open with AI Viewer
https://www.themoonlight.io/file?url=https%3A%2F%2Farxiv.org%2Fpdf%2F2502.11560
View More Reviews
https://www.themoonlight.io/en/explore/cs
 
The paper titled "A Survey of Automatic Prompt Engineering: An Optimization Perspective" by Wenwu Li et al. offers a comprehensive exploration of automated prompt engineering within the landscape of foundation models (FMs). With the increasing scale of FMs, it addresses the transition from traditional fine-tuning to prompt engineering, highlighting advantages and limitations associated with manual and automated approaches.
Core Methodology
1. Problem Definition and Optimization Formulation:
 The authors frame prompt optimization as a maximization problem, given a black-box foundation model ( f: P \times X \rightarrow Y ), where ( P ) is the prompt from a defined prompt space ( P ), ( X ) represents input queries, and ( Y ) represents model outputs. The task is to find the optimal prompt ( P^* ) that maximizes the expected performance metrics (denoted as ( g )), typically defined over a validation set ( D_{val} ). The foundational structure leads to the classification of the optimization problem into three subclasses—Discrete Prompt Optimization (DPO), Continuous Prompt Optimization (CPO), and Hybrid Prompt Optimization (HPO).
Methodological Structure:
1. Optimization Spaces:
 The paper divides the prompt space ( P ) into three main categories:
Discrete Prompt Space ((P_d))
: Involves hard tokens like instructions, thought sequences, and exemplars.
Continuous Prompt Space ((P_c))
: Consists of soft prompts—trainable vectors optimized through gradient-based methods.
Hybrid Prompt Space ((P_h))
: Combines discrete and continuous elements for a synergistic effect.
Each optimization space is analyzed for its structure, with specific techniques leveraged based on its characteristics.
2. Application of Optimization Techniques:
 The paper categorizes existing optimization methods into four major paradigms:
FM-Based Optimization
: Utilizes foundation models as meta-optimizers to iteratively refine prompts.
Evolutionary Computing
: Implements genetic algorithms or other evolutionary strategies where prompts evolve through mutation, crossover, and selection based on performance metrics.
Gradient-Based Optimization
: Adopts gradient techniques primarily for optimizing continuous prompts, addressing the challenges posed by non-differentiability of discrete prompts.
Reinforcement Learning (RL)
: Frames prompt design as a reinforcement learning problem, employing a reward signal derived from model performance to guide prompt modifications.
Detailed Methodologies:
1. Discrete Variables:
 The optimization of discrete prompts employs combinatorial search strategies, addressing various types of elements:
Instructions
: Natural language directives formulated to guide model output.
Thoughts
: Intermediate steps that enhance reasoning capability, particularly in complex tasks (Chain-of-Thought techniques).
Few-Shot Examples
: Contextual inputs that help the model learn from limited data, focusing on selecting effective exemplary pairs.
2. Continuous Variables:
 Continuous prompts are managed through embedded training vectors integrated with input embeddings, allowing for optimization while maintaining model parameters intact:
Soft Prompt Tuning
: Techniques like prefix-tuning and prompt-tuning apply small trainable parameter sets to existing models, showcasing significant efficiency in resource allocation.
3. Mixed Variables:
 Combining discrete instructions with continuous embeddings leads to innovative approaches to optimize both prompt clarity and adaptive flexibility. This facilitates improved interpretability, crucial in tasks that require real-time adjustments or multi-modal integrations.
4. Objective Functions:
 The authors present various downstream tasks across different domains such as text classification, math reasoning, visual question answering, and commonsense reasoning. These tasks employ tailored performance metrics, confronting unique challenges inherent to the nature of the input and expected output.
Emerging Frontiers and Future Directions:
The paper identifies several key research themes for future exploration, emphasizing:
Constraint Optimization
: Incorporating semantic and ethical constraints within prompt design while ensuring model quality and human alignment.
Multi-Task Optimization
: Creating a framework for shared structures across tasks to minimize negative transfer, improving the generalization of prompts.
Online Optimization
: Developing algorithms for real-time updating of prompts based on fluctuating user inputs.
Cross-Modal Optimization
: Delving into technique variations across textual, visual, and auditory modalities for prompt optimization.
Conclusion:
In summary, this survey successfully consolidates existing automated prompt engineering methods within a unified theoretical framework, facilitating future research and practice. It encourages further exploration of under-researched areas such as multi-objective optimization, online adaptability, and hybrid approaches, taking into account the diverse requirements across different application domains and model types. The results presented not only enrich the current understanding of prompt optimization but also establish a foundation for future advancements in the utilization and design of foundation models.
Was this review helpful?
Helpful Not helpful
Related Papers 
Go to library
https://www.themoonlight.io/en/library
A Systematic Survey of Automatic Prompt Optimization Techniques
"Struggling with LLM prompt engineering? This systematic survey reveals the definitive path to automatic prompt optimization techniques."
View Review
https://www.themoonlight.io/en/review/a-systematic-survey-of-automatic-prompt-optimization-techniques
 
Open original
https://www.themoonlight.io/file?url=http%3A%2F%2Farxiv.org%2Fpdf%2F2502.16923v1.pdf
The Prompt Report: A Systematic Survey of Prompt Engineering Techniques
"Solve prompt engineering confusion: discover a systematic taxonomy and 58 techniques for designing more effective generative AI prompts."
View Review
https://www.themoonlight.io/en/review/the-prompt-report-a-systematic-survey-of-prompt-engineering-techniques
 
Open original
https://www.themoonlight.io/file?url=http%3A%2F%2Farxiv.org%2Fpdf%2F2406.06608v6.pdf
Submodular Evaluation Subset Selection in Automatic Prompt Optimization
"Unlock higher prompt optimization performance and efficiency with principled submodular selection of critical evaluation subsets."
View Review
https://www.themoonlight.io/en/review/submodular-evaluation-subset-selection-in-automatic-prompt-optimization
 
Open original
https://www.themoonlight.io/file?url=http%3A%2F%2Farxiv.org%2Fpdf%2F2601.03493v1.pdf
APEER: Automatic Prompt Engineering Enhances Large Language Model Reranking
"Overcome LLM reranking complexity. APEER pioneers automatic prompt engineering for superior information retrieval relevance."
View Review
https://www.themoonlight.io/en/review/apeer-automatic-prompt-engineering-enhances-large-language-model-reranking
 
Open original
https://www.themoonlight.io/file?url=http%3A%2F%2Farxiv.org%2Fpdf%2F2406.14449v1.pdf
Automatic Prompt Optimization for Knowledge Graph Construction: Insights from an Empirical Study
"Boost LLM triple extraction for knowledge graphs: this empirical study shows automatic prompt optimization conquers manual engineering challenges."
View Review
https://www.themoonlight.io/en/review/automatic-prompt-optimization-for-knowledge-graph-construction-insights-from-an-empirical-study
 
Open original
https://www.themoonlight.io/file?url=http%3A%2F%2Farxiv.org%2Fpdf%2F2506.19773v1.pdf
AI One-Click Summary Real-time Translation AI Q&A
With Free AI PDF Viewer Revolutionize Your Paper Reading
Open This Paper in AI Viewer Now
https://www.themoonlight.io/file?url=https%3A%2F%2Farxiv.org%2Fpdf%2F2502.11560
 
Terms of Use
https://www.themoonlight.io/terms-of-use
 
Privacy Policy
https://www.themoonlight.io/policy
 
Medium
https://medium.com/corca
 
GitHub
https://github.com/corca-ai
 
LinkedIn
https://www.linkedin.com/company/corca-ai
 
Email
mailto:moonlight@corca.ai
Corca, Inc. / CEO Younghyun Chung / Business Registration Number 271-86-02206
6F, 11-8 Teheran-ro 77-gil, Gangnam-gu, Seoul, Republic of Korea, 06159
Contact 02-6925-6978 E-mail: moonlight@corca.ai
© 2026 Corca, Inc. All rights reserved.