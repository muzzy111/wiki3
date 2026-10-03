# TextGrad: Textual Gradients for AI Optimization - Emergent Mind

Source URL: https://www.emergentmind.com/papers/2406.07496

TextGrad: Textual Gradients for AI Optimization 

https://www.emergentmind.com/
Papers
https://www.emergentmind.com/
 
Videos
https://www.emergentmind.com/videos
 
Whiteboards
https://www.emergentmind.com/whiteboards
 
Open Problems
https://www.emergentmind.com/open-problems
 
Pricing
https://www.emergentmind.com/pricing?utm_source=nav
 
Log in
https://www.emergentmind.com/users/sign_in
 
Sign up
https://www.emergentmind.com/users/sign_up?redirect_to=https%3A%2F%2Fwww.emergentmind.com%2Fpapers%2F2406.07496
Papers
https://www.emergentmind.com/
 
Whiteboards
https://www.emergentmind.com/whiteboards
 
Videos
https://www.emergentmind.com/videos
 
Open Problems
https://www.emergentmind.com/open-problems
 
Pricing
https://www.emergentmind.com/pricing?utm_source=nav
 
Log in
https://www.emergentmind.com/users/sign_in
 
Sign up
https://www.emergentmind.com/users/sign_up?redirect_to=https%3A%2F%2Fwww.emergentmind.com%2Fpapers%2F2406.07496
2406.07496
Papers
Topics
Authors
Recent
View all
https://www.emergentmind.com/history
Search
Search
Search by paper, topic, or author
Research
Succinct overviews based on relevant paper abstracts
Deep Research Max
In-depth responses based on relevant abstracts and paper content
2000 character limit reached
Chrome Extension
Install our Chrome Extension
https://chromewebstore.google.com/detail/emergent-mind-%E2%80%94-arxiv-int/hgmnadjffdiipehljmhagdgpaoiiklml
 to automatically enhance arXiv.
Sponsor
Promote your business
https://www.emergentmind.com/sponsorship
 to millions of monthly visitors.
TextGrad: Automatic "Differentiation" via Text
Published 11 Jun 2024 in cs.CL, cs.AI, and cs.LG | (2406.07496v1)
Abstract:
 AI is undergoing a paradigm shift, with breakthroughs achieved by systems orchestrating multiple LLMs and other complex components. As a result, developing principled and automated optimization methods for compound AI systems is one of the most important new challenges. Neural networks faced a similar challenge in its early days until backpropagation and automatic differentiation transformed the field by making optimization turn-key. Inspired by this, we introduce TextGrad, a powerful framework performing automatic ``differentiation'' via text. TextGrad backpropagates textual feedback provided by LLMs to improve individual components of a compound AI system. In our framework, LLMs provide rich, general, natural language suggestions to optimize variables in computation graphs, ranging from code snippets to molecular structures. TextGrad follows PyTorch's syntax and abstraction and is flexible and easy-to-use. It works out-of-the-box for a variety of tasks, where the users only provide the objective function without tuning components or prompts of the framework. We showcase TextGrad's effectiveness and generality across a diverse range of applications, from question answering and molecule optimization to radiotherapy treatment planning. Without modifying the framework, TextGrad improves the zero-shot accuracy of GPT-4o in Google-Proof Question Answering from $51%$ to $55%$, yields $20%$ relative performance gain in optimizing LeetCode-Hard coding problem solutions, improves prompts for reasoning, designs new druglike small molecules with desirable in silico binding, and designs radiation oncology treatment plans with high specificity. TextGrad lays a foundation to accelerate the development of the next-generation of AI systems.
Abstract
https://arxiv.org/abs/2406.07496
 
PDF
https://arxiv.org/pdf/2406.07496
 
HTML
https://arxiv.org/html/2406.07496v1
 
Upgrade to Chat
https://www.emergentmind.com/pricing?utm_source=chat-button
Authors (7)
Mert Yuksekgonul
https://www.emergentmind.com/search?q=Mert+Yuksekgonul
Federico Bianchi
https://www.emergentmind.com/search?q=Federico+Bianchi
Joseph Boen
https://www.emergentmind.com/search?q=Joseph+Boen
Sheng Liu
https://www.emergentmind.com/search?q=Sheng+Liu
Zhi Huang
https://www.emergentmind.com/search?q=Zhi+Huang
Carlos Guestrin
https://www.emergentmind.com/search?q=Carlos+Guestrin
James Zou
https://www.emergentmind.com/search?q=James+Zou
Related Papers
Automatic Prompt Optimization with "Gradient Descent" and Beam Search
https://www.emergentmind.com/papers/2305.03495
 (2023)
AutoML-GPT: Automatic Machine Learning with GPT
https://www.emergentmind.com/papers/2305.02499
 (2023)
TextGrad: Advancing Robustness Evaluation in NLP by Gradient-Driven Optimization
https://www.emergentmind.com/papers/2212.09254
 (2022)
Trace is the Next AutoDiff: Generative Optimization with Rich Feedback, Execution Traces, and LLMs
https://www.emergentmind.com/papers/2406.16218
 (2024)
REVOLVE: Optimizing AI Systems by Tracking Response Evolution in Textual Optimization
https://www.emergentmind.com/papers/2412.03092
 (2024)
LLM-AutoDiff: Auto-Differentiate Any LLM Workflow
https://www.emergentmind.com/papers/2501.16673
 (2025)
Compound AI Systems Optimization: A Survey of Methods, Challenges, and Future Directions
https://www.emergentmind.com/papers/2506.08234
 (2025)
metaTextGrad: Automatically optimizing language model optimizers
https://www.emergentmind.com/papers/2505.18524
 (2025)
ToolGrad: Efficient Tool-use Dataset Generation with Textual "Gradients"
https://www.emergentmind.com/papers/2508.04086
 (2025)
TextualVerifier: Verify TextGrad Step-by-Step
https://www.emergentmind.com/papers/2511.03739
 (2025)
Citations (10)
View on Semantic Scholar
https://www.semanticscholar.org/search?q=TextGrad%3A%20Automatic%20%22Differentiation%22%20via%20Text
Summary
The paper introduces a novel framework, TextGrad, which uses textual feedback from LLMs to optimize components of compound AI systems.
It achieves significant performance gains over baseline methods in coding, question answering, prompt tuning, molecule design, and treatment planning.
The study highlights potential for reduced manual fine-tuning and opens new research avenues in adaptive, gradient-inspired optimization methods.
TextGrad: Optimizing AI Systems via Textual Gradients
The evolution of AI has transcended single-model architectures to encompass compound systems with multiple intricate components, driven by advancements in LLMs. The paper "TextGrad: Automatic 'Differentiation' via Text" introduces 
TextGrad
, a framework engineered to streamline the optimization of such compound AI systems through the innovative utilization of textual feedback from LLMs. This essay explores the methodology, results, and implications presented in this paper.
Framework Overview
TextGrad draws inspiration from traditional 
automatic differentiation
https://www.emergentmind.com/topics/automatic-differentiation-ad
 methods, which have been fundamental in optimizing neural networks via backpropagation. The framework leverages textual feedback provided by LLMs—termed "textual gradients"—to enhance individual components within a compound AI system. These textual gradients, akin to numerical gradients in differentiable programming, offer actionable natural language feedback aimed at refining system variables (e.g., prompts, solutions, 
code
https://www.emergentmind.com/topics/karpathy-agent-code
 snippets).
The core functionality of TextGrad is encapsulated in a computation graph where variables (inputs and outputs of function calls) and text-based feedback are propagated, akin to gradients in traditional differentiation. The feedback is collected and aggregated across the entire system, facilitating holistic optimization through the 
Textual Gradient Descent
https://www.emergentmind.com/topics/textual-gradient-descent
 (TGD) optimizer.
Applications and Numerical Results
The paper explores several domains to demonstrate the versatility and efficacy of TextGrad, showcasing substantial improvements in 
performance metrics
https://www.emergentmind.com/topics/performance-metrics
 across the board. Key applications include:
Code Optimization
:
Task
: Solving complex coding problems on LeetCode 
Hard
https://www.emergentmind.com/topics/bigcodebench-hard
.
Results
: TextGrad improved the completion rate from 23% (zero-shot GPT-4) to 36%, surpassing the state-of-the-art Reflexion method which achieved 31%.
Solution Optimization for Question Answering
:
Task
: Enhancing 
zero-shot performance
https://www.emergentmind.com/topics/zero-shot-performance
 on challenging benchmarks like Google-Proof Question Answering ( 
GPQA
https://www.emergentmind.com/topics/gpqa-google-proof-qa
) and 
MMLU
https://www.emergentmind.com/topics/measuring-massive-multitask-language-understanding-mmlu
 subsets.
Results
: TextGrad improved zero-shot accuracy from 51% to 55% on the 
GPQA dataset
https://www.emergentmind.com/topics/gpqa-dataset
 and showed significant gains in MMLU subsets, elevating GPT-4's performance in Machine Learning (85.7% to 88.4%) and College Physics (91.2% to 95.1%).
Prompt Optimization
:
Task
: Optimizing system prompts to enhance reasoning capabilities of weaker, lower-cost models like GPT-3.5-turbo.
Results
: TextGrad achieved notable improvements, reaching 91.9% accuracy on Object Counting, 79.8% on Word Sorting, and 81.1% on GSM8k, with performance comparable or superior to DSPy-optimized models but without few-shot demonstrations.
Molecule Optimization
:
Task
: 
Multi-objective optimization
https://www.emergentmind.com/topics/multi-objective-optimization
 targeting druglikeness (QED score) and binding affinity (Vina score) of small molecules.
Results
: TextGrad designed molecules with improved properties compared to clinically approved drugs, achieving better balance in druglikeness and binding affinity across 29 targets.
Radiotherapy Treatment Plan Optimization
:
Task
: Optimizing hyperparameters for treatment 
planning
https://www.emergentmind.com/topics/dynamic-heuristic-biasing-planning
 to meet clinical goals for prostate cancer patients.
Results
: TextGrad-generated plans showed better dose metrics for PTV and lower doses on organs at risk (OARs) compared to clinically optimized plans, indicating superior treatment balancing.
Implications and Future Directions
TextGrad boldly extends the applicability of optimization techniques in the AI landscape by bridging the capabilities of LLMs with the structured efficiency of backpropagation. Its general-purpose framework, enhanced by the flexibility of Python's PyTorch syntax, underscores its potential to accelerate AI development across a myriad of domains.
The framework's implications are profound both in practical and theoretical contexts:
Practical
: TextGrad can significantly reduce the manual effort required in fine-tuning complex AI systems, making it an invaluable tool for practitioners concerned with efficiency and scalability.
Theoretical
: The analogy to automatic differentiation opens new avenues for research into optimization algorithms, potentially inspiring innovations in variance reduction techniques, adaptive gradients, and meta-learning approaches.
Looking forward, the framework's adaptability to other components like tools and retrieval-augmented systems hints at its expansive potential, suggesting that future developments could further integrate complex operations seamlessly. Moreover, enhancing the stability and robustness of textual gradient propagation mechanisms remains a critical area for future exploration.
Conclusion
TextGrad represents a pivotal advancement in the systematic optimization of compound AI systems, leveraging the rich feedback capabilities of LLMs to realize sophisticated performance gains across diverse applications. As the AI community continues to grapple with the intricacies of multi-component systems, TextGrad offers a promising paradigm, infusing the deterministic rigor of backpropagation with the interpretative strengths of LLMs, thus catalyzing the next generation of AI optimizers.
Markdown
https://www.emergentmind.com/users/sign_up?redirect_to=https%3A%2F%2Fwww.emergentmind.com%2Farticles%2F2406.07496
 
Report Issue
https://www.emergentmind.com/users/sign_up?redirect_to=https%3A%2F%2Fwww.emergentmind.com%2Farticles%2F2406.07496
Paper to Video (Beta)
No one has generated a video about this paper yet.
Sign Up to Generate
https://www.emergentmind.com/users/sign_up?redirect_to=https%3A%2F%2Fwww.emergentmind.com%2Farticles%2F2406.07496
 
All Videos
https://www.emergentmind.com/videos
 
Subscribe on YouTube
https://www.youtube.com/@EmergentMindAI?sub_confirmation=1
Whiteboard
No one has generated a whiteboard explanation for this paper yet.
Sign Up to Generate
https://www.emergentmind.com/users/sign_up?redirect_to=https%3A%2F%2Fwww.emergentmind.com%2Farticles%2F2406.07496
Paper Prompts
Sign up for free to create and run prompts on this paper using GPT-5.
Top Community Prompts
Explain it Like I'm 14
https://www.emergentmind.com/paper-prompts/eli14
off on
https://www.emergentmind.com/users/sign_up
Knowledge Gaps
https://www.emergentmind.com/paper-prompts/knowledge-gaps
off on
https://www.emergentmind.com/users/sign_up
Practical Applications
https://www.emergentmind.com/paper-prompts/practical-applications
off on
https://www.emergentmind.com/users/sign_up
Glossary
https://www.emergentmind.com/paper-prompts/glossary
off on
https://www.emergentmind.com/users/sign_up
Conceptual Simplification
https://www.emergentmind.com/paper-prompts/conceptual-simplification
off on
https://www.emergentmind.com/users/sign_up
Sign Up to Activate
https://www.emergentmind.com/users/sign_up
 
View All Prompts
https://www.emergentmind.com/paper-prompts
Open Problems
We haven't generated a list of open problems mentioned in this paper yet.
Generate Now
https://www.emergentmind.com/users/sign_up?redirect_to=https%3A%2F%2Fwww.emergentmind.com%2Farticles%2F2406.07496
Continue Learning
How does TextGrad's approach to utilizing textual gradients differ from traditional numerical gradient methods in terms of convergence stability and optimization efficiency?
https://www.emergentmind.com/search?q=How+does+TextGrad%27s+approach+to+utilizing+textual+gradients+differ+from+traditional+numerical+gradient+methods+in+terms+of+convergence+stability+and+optimization+efficiency%3F+%282406.07496%29&search_mode=research
In what ways can textual feedback from LLMs capture nuanced optimization signals for non-differentiable components compared to traditional black-box methods?
https://www.emergentmind.com/search?q=In+what+ways+can+textual+feedback+from+LLMs+capture+nuanced+optimization+signals+for+non-differentiable+components+compared+to+traditional+black-box+methods%3F+%282406.07496%29&search_mode=research
What are the limitations or potential biases introduced by relying on LLM-generated feedback for critical tasks such as radiotherapy treatment planning or molecule design?
https://www.emergentmind.com/search?q=What+are+the+limitations+or+potential+biases+introduced+by+relying+on+LLM-generated+feedback+for+critical+tasks+such+as+radiotherapy+treatment+planning+or+molecule+design%3F+%282406.07496%29&search_mode=research
How does TextGrad scale when optimizing AI systems with dozens or hundreds of interconnected components, and what engineering challenges might arise in such scenarios?
https://www.emergentmind.com/search?q=How+does+TextGrad+scale+when+optimizing+AI+systems+with+dozens+or+hundreds+of+interconnected+components%2C+and+what+engineering+challenges+might+arise+in+such+scenarios%3F+%282406.07496%29&search_mode=research
Find recent papers about optimization of compound AI systems using language model feedback.
https://www.emergentmind.com/search?q=Find+recent+papers+about+optimization+of+compound+AI+systems+using+language+model+feedback.&search_mode=search
Collections
Sign up for free to add this paper to one or more collections.
Sign Up
https://www.emergentmind.com/users/sign_up?redirect_to=https%3A%2F%2Fwww.emergentmind.com%2Farticles%2F2406.07496
Tweets
Sign up for free to view the 
25 tweets
 with 
1225 likes
 about this paper.
Sign Up for Free
https://www.emergentmind.com/users/sign_up?redirect_to=https%3A%2F%2Fwww.emergentmind.com%2Farticles%2F2406.07496
YouTube
NEW TextGrad by Stanford: Better than DSPy 20K views
Tap to unmute
Your browser can't play this video.
Learn more
https://www.youtube.com/supported_browsers
 

https://www.youtube.com/
An error occurred.
Try watching this video on www.youtube.com
https://www.youtube.com/watch?v=Qks4UEsRwl0
, or enable JavaScript if it is disabled in your browser.
The complete TextGrad Tutorial - Easily optimize LLM prompts, math, and code! 6.9K views
Tap to unmute
Your browser can't play this video.
Learn more
https://www.youtube.com/supported_browsers
 

https://www.youtube.com/
An error occurred.
Try watching this video on www.youtube.com
https://www.youtube.com/watch?v=6pyYc8Upl-0
, or enable JavaScript if it is disabled in your browser.
Ep 25. TextGrad: Automatic "Differentiation" via Text 517 views
Tap to unmute
Your browser can't play this video.
Learn more
https://www.youtube.com/supported_browsers
 

https://www.youtube.com/
An error occurred.
Try watching this video on www.youtube.com
https://www.youtube.com/watch?v=9N-pyagF4jg
, or enable JavaScript if it is disabled in your browser.
AI Newsletter - March 30, 2025: Are Gemma and Gemini all you need? 332 views
TextGrad: Automatic "Differentiation" via Text - Audio Podcast 144 views
Show All Videos
https://www.emergentmind.com/papers/2406.07496
HackerNews
TextGrad: Automatic "Differentiation" via Text
https://news.ycombinator.com/item?id=40695533
 (6 points, 0 comments)
TextGrad: Automatic "Differentiation" via Text
https://news.ycombinator.com/item?id=40655506
 (2 points, 0 comments)
TextGrad – Backpropagation through text feedback
https://news.ycombinator.com/item?id=40900351
 (2 points, 0 comments)
Content
Paper
https://www.emergentmind.com/papers/2406.07496#paper
 
Summary
https://www.emergentmind.com/papers/2406.07496#summary
 
Paper to Video
https://www.emergentmind.com/papers/2406.07496#video
 
Whiteboard
https://www.emergentmind.com/papers/2406.07496#whiteboard
 
Paper Prompts
https://www.emergentmind.com/papers/2406.07496#prompts
 
Open Problems
https://www.emergentmind.com/papers/2406.07496#open-problems
 
Continue Learning
https://www.emergentmind.com/papers/2406.07496#continue-learning
 
Collections
https://www.emergentmind.com/papers/2406.07496#collections
 
Tweets
https://www.emergentmind.com/papers/2406.07496#x
 
YouTube
https://www.emergentmind.com/papers/2406.07496#youtube
 
HackerNews
https://www.emergentmind.com/papers/2406.07496#hn
Stay informed about trending AI papers:
 
Subscribe
About
https://www.emergentmind.com/about
 
Labs
https://www.emergentmind.com/labs
 
API
https://www.emergentmind.com/docs/api
 
Email Digest
https://www.emergentmind.com/subscribe
 
Chrome Extension
https://chromewebstore.google.com/detail/emergent-mind-%E2%80%94-arxiv-int/hgmnadjffdiipehljmhagdgpaoiiklml
 
RSS
https://www.emergentmind.com/feeds/rss
 
Terms
https://www.emergentmind.com/terms
 
Privacy
https://www.emergentmind.com/privacy
 
Contact
https://www.emergentmind.com/contact
 
Twitter
https://twitter.com/EmergentMind
 
Discord
https://discord.gg/BhfTC4mTXq