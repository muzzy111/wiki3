# : Automatic “Differentiation” via Text - arXiv

Source URL: https://arxiv.org/html/2406.07496v1

: Automatic “Differentiation” via Text
logo Back to arXiv
https://arxiv.org/
 

https://arxiv.org/abs/2406.07496v1
 

javascript:toggleColorScheme()
logo Back to arXiv
https://arxiv.org/
This is 
experimental HTML
 to improve accessibility. We invite you to report rendering errors. Use Alt+Y to toggle on accessible reporting links and Alt+Shift+Y to toggle off. Learn more 
about this project
https://info.arxiv.org/about/accessible_HTML.html
 and 
help improve conversions
https://info.arxiv.org/help/submit_latex_best_practices.html
.
Why HTML?
https://info.arxiv.org/about/accessible_HTML.html
 
Report Issue
#myForm
 
Back to Abstract
https://arxiv.org/abs/2406.07496v1
 
Download PDF
https://arxiv.org/pdf/2406.07496v1
 

javascript:toggleColorScheme()
Table of Contents
Abstract
https://arxiv.org/html/2406.07496v1#abstract
1 Introduction
https://arxiv.org/html/2406.07496v1#S1
2 TextGrad: Optimizing AI systems by backpropagating text feedback
https://arxiv.org/html/2406.07496v1#S2
Example computation graph.
https://arxiv.org/html/2406.07496v1#S2.SSx1.SSS0.Px1
Example gradient computation.
https://arxiv.org/html/2406.07496v1#S2.SSx1.SSS0.Px2
Example optimizer.
https://arxiv.org/html/2406.07496v1#S2.SSx1.SSS0.Px3
3 Results
https://arxiv.org/html/2406.07496v1#S3
3.1 Code optimization
https://arxiv.org/html/2406.07496v1#S3.SS1
3.2 Solution optimization by test-time training to improve problem solving
https://arxiv.org/html/2406.07496v1#S3.SS2
3.3 Prompt optimization for reasoning
https://arxiv.org/html/2406.07496v1#S3.SS3
3.4 Molecule optimization
https://arxiv.org/html/2406.07496v1#S3.SS4
3.5 Radiotherapy treatment plan optimization
https://arxiv.org/html/2406.07496v1#S3.SS5
Method.
https://arxiv.org/html/2406.07496v1#S3.SS5.SSS0.Px1
Evaluation metrics.
https://arxiv.org/html/2406.07496v1#S3.SS5.SSS0.Px2
Results.
https://arxiv.org/html/2406.07496v1#S3.SS5.SSS0.Px3
4 Related work
https://arxiv.org/html/2406.07496v1#S4
5 Discussion
https://arxiv.org/html/2406.07496v1#S5
A TextGrad Details
https://arxiv.org/html/2406.07496v1#A1
A.1 Variables
https://arxiv.org/html/2406.07496v1#A1.SS1
B Code Optimization
https://arxiv.org/html/2406.07496v1#A2
B.1 Methodology
https://arxiv.org/html/2406.07496v1#A2.SS1
C Solution Optimization
https://arxiv.org/html/2406.07496v1#A3
C.1 Methodology
https://arxiv.org/html/2406.07496v1#A3.SS1
C.2 Prompts
https://arxiv.org/html/2406.07496v1#A3.SS2
D Prompt Optimization
https://arxiv.org/html/2406.07496v1#A4
D.1 Tasks
https://arxiv.org/html/2406.07496v1#A4.SS1
E Molecule Optimization
https://arxiv.org/html/2406.07496v1#A5
E.1 Docking and Druglikeness Evaluation
https://arxiv.org/html/2406.07496v1#A5.SS1
E.2 Objective Functions
https://arxiv.org/html/2406.07496v1#A5.SS2
E.3 Benchmarks
https://arxiv.org/html/2406.07496v1#A5.SS3
E.4 Initialization
https://arxiv.org/html/2406.07496v1#A5.SS4
E.5 Chemical Novelty
https://arxiv.org/html/2406.07496v1#A5.SS5
E.6 Implicit Objectives
https://arxiv.org/html/2406.07496v1#A5.SS6
F Treatment Plan Optimization
https://arxiv.org/html/2406.07496v1#A6
F.1 Prompts
https://arxiv.org/html/2406.07496v1#A6.SS1
F.2 Inner-loop optimization for treatment planning
https://arxiv.org/html/2406.07496v1#A6.SS2
F.3 Additional Experimental Details
https://arxiv.org/html/2406.07496v1#A6.SS3
Dataset
https://arxiv.org/html/2406.07496v1#A6.SS3.SSS0.Px1
Method
https://arxiv.org/html/2406.07496v1#A6.SS3.SSS0.Px2
Initialization
https://arxiv.org/html/2406.07496v1#A6.SS3.SSS0.Px3
F.4 Additional Results
https://arxiv.org/html/2406.07496v1#A6.SS4
References
https://arxiv.org/html/2406.07496v1#bib
HTML conversions 
sometimes display errors
https://info.dev.arxiv.org/about/accessibility_html_error_messages.html
 due to content that did not convert correctly from the source. This paper uses the following packages that are not yet supported by the HTML conversion tool. Feedback on these issues are not necessary; they are known and are being worked on.
failed: biblatex.sty
Authors: achieve the best HTML results from your LaTeX submissions by following these 
best practices
https://info.arxiv.org/help/submit_latex_best_practices.html
.
License: CC BY 4.0
https://info.arxiv.org/help/license/index.html#licenses-available
arXiv:2406.07496v1 [cs.CL] 11 Jun 2024
 
: Automatic “Differentiation” via Text
Report issue for preceding element
rt Yuksekgonul 
1
 \email merty@stanford.edu
derico Bianchi 
1
 
*
 \email fede@stanford.edu
seph Boen 
2
 
*
 \email tboen@stanford.edu
eng Liu 
2
 
*
 \email shengl@stanford.edu
i Huang 
2
 
*
 \email zhihuang@stanford.edu
rlos Guestrin 
1,3
 \email guestrin@stanford.edu
mes Zou 
1,2,3
 \email jamesz@stanford.edu 
1
Department of Computer Science, Stanford University 
2
Department of Biomedical Data Science, Stanford University 
3
Chan Zuckerberg Biohub
\email Correspondence: merty@stanford.edu and jamesz@stanford.edu
\email
[Uncaptioned image] Repository and Tutorials
https://github.com/zou-group/textgrad
 Co-first authors.
Report issue for preceding element
Abstract
Report issue for preceding element
AI is undergoing a paradigm shift, with breakthroughs achieved by systems orchestrating multiple large language models (LLMs) and other complex components. As a result, developing principled and automated optimization methods for compound AI systems is one of the most important new challenges. Neural networks faced a similar challenge in its early days until backpropagation and automatic differentiation transformed the field by making optimization turn-key. Inspired by this, we introduce TextGrad, a powerful framework performing automatic “differentiation” via text. TextGrad backpropagates textual feedback provided by LLMs to improve individual components of a compound AI system. In our framework, LLMs provide rich, general, natural language suggestions to optimize variables in computation graphs, ranging from code snippets to molecular structures. TextGrad follows PyTorch's syntax and abstraction and is flexible and easy-to-use. It works out-of-the-box for a variety of tasks, where the users only provide the objective function without tuning components or prompts of the framework. We showcase TextGrad's effectiveness and generality across a diverse range of applications, from question answering and molecule optimization to radiotherapy treatment planning. Without modifying the framework, TextGrad improves the zero-shot accuracy of GPT-4o in Google-Proof Question Answering from 51 % 51% to 55 % 55% , yields 20 % 20% relative performance gain in optimizing LeetCode-Hard coding problem solutions, improves prompts for reasoning, designs new druglike small molecules with desirable in silico binding, and designs radiation oncology treatment plans with high specificity. TextGrad lays a foundation to accelerate the development of the next-generation of AI systems.
Report issue for preceding element
1 Introduction
Report issue for preceding element
There is an emerging paradigm shift in how AI systems are built, owing to the breakthroughs of Large Language Models (LLMs) [ 
1
https://arxiv.org/html/2406.07496v1#bib.bibx1
, 
2
https://arxiv.org/html/2406.07496v1#bib.bibx2
, 
3
https://arxiv.org/html/2406.07496v1#bib.bibx3
, 
4
https://arxiv.org/html/2406.07496v1#bib.bibx4
, 
5
https://arxiv.org/html/2406.07496v1#bib.bibx5
, 
6
https://arxiv.org/html/2406.07496v1#bib.bibx6
] . The new generation of AI applications are increasingly compound systems involving multiple sophisticated components, where each component could be an LLM-based agent, a tool such as a simulator, or web search. For instance, a system of LLMs communicating with symbolic solvers can solve olympiad-level math problems [ 
7
https://arxiv.org/html/2406.07496v1#bib.bibx7
] ; a system of LLMs using search engines and code interpreter tools performs comparably to human competitive programmers [ 
8
https://arxiv.org/html/2406.07496v1#bib.bibx8
] and are solving real-world GitHub issues [ 
9
https://arxiv.org/html/2406.07496v1#bib.bibx9
] . However, many of these breakthroughs came from systems that are hand-crafted by experts in the domain of application and are tweaked through heuristics. Therefore, developing principled and automated ways to optimize AI systems is one of the most crucial challenges for building compound systems with LLMs, and is necessary for unlocking the power of AI [ 
10
https://arxiv.org/html/2406.07496v1#bib.bibx10
, 
11
https://arxiv.org/html/2406.07496v1#bib.bibx11
, 
12
https://arxiv.org/html/2406.07496v1#bib.bibx12
] .
Report issue for preceding element
For the past 15 years, many advances in AI have relied on artificial neural networks and differentiable optimization [ 
13
https://arxiv.org/html/2406.07496v1#bib.bibx13
, 
14
https://arxiv.org/html/2406.07496v1#bib.bibx14
, 
15
https://arxiv.org/html/2406.07496v1#bib.bibx15
, 
16
https://arxiv.org/html/2406.07496v1#bib.bibx16
, 
17
https://arxiv.org/html/2406.07496v1#bib.bibx17
, 
7
https://arxiv.org/html/2406.07496v1#bib.bibx7
] . Different parts of neural networks (e.g., two artificial neurons) communicate through differentiable functions like matrix multiplications [ 
18
https://arxiv.org/html/2406.07496v1#bib.bibx18
] . Therefore, using numerical gradients and backpropagation [ 
19
https://arxiv.org/html/2406.07496v1#bib.bibx19
] , which provide the direction to adjust each parameter to improve a model, has been the natural way to train AI models. Flexible automatic differentiation frameworks implementing backpropagation [ 
20
https://arxiv.org/html/2406.07496v1#bib.bibx20
, 
21
https://arxiv.org/html/2406.07496v1#bib.bibx21
, 
22
https://arxiv.org/html/2406.07496v1#bib.bibx22
, 
23
https://arxiv.org/html/2406.07496v1#bib.bibx23
, 
24
https://arxiv.org/html/2406.07496v1#bib.bibx24
] have been indispensible to the development of AI 
models
.
Report issue for preceding element
To optimize the new generation of AI 
systems
, we introduce TextGrad, automatic differentiation via text. Here we use differentiation and gradients as a metaphor for textual feedback from LLMs. In this framework, each AI system is transformed into a computation graph, where variables are inputs and outputs of complex (not necessarily differentiable) function calls. The feedback to the variables (dubbed 'textual gradients' [ 
25
https://arxiv.org/html/2406.07496v1#bib.bibx25
] ) are provided in the form of informative and interpretable natural language criticism to the variables; describing how a variable should be changed to improve the system. The gradients are propagated through arbitrary functions, such as LLM API calls, simulators, or external numerical solvers.
Report issue for preceding element
We demonstrate the power of our framework in a diverse set of domains, ranging from question answering benchmarks to radiotherapy treatment plan optimization and molecule generation (Fig. 
1
https://arxiv.org/html/2406.07496v1#F1
). LLMs can provide very rich, legible, and expressive natural language gradients to variables in this wide range of domains, such as proposing modifications to molecules, prompts to other LLMs, and code snippets. Our framework is built on the assumption that the current state-of-the-art LLMs are able to reason about individual components and subtasks of the system that it tries to optimize. We demonstrate the flexibility of TextGrad with the following results:
Report issue for preceding element
Coding: In Section 
3.1
https://arxiv.org/html/2406.07496v1#S3.SS1
, we optimize solutions to difficult coding problems from LeetCode [ 
26
https://arxiv.org/html/2406.07496v1#bib.bibx26
] , where we boost the performance of gpt-4o and best existing method by 20 % 20% relevant performance gain. Report issue for preceding element
Problem Solving: In Section 
3.2
https://arxiv.org/html/2406.07496v1#S3.SS2
, we optimize solutions to complex scientific questions to improve the zero-shot performance of GPT-4o. For instance, in Google-Proof Question Answering [ 
27
https://arxiv.org/html/2406.07496v1#bib.bibx27
] benchmark, we improve the zero-shot accuracy from 51 % 51% to 55 % 55% by refining the solutions at test-time. Report issue for preceding element
Reasoning: In Section 
3.3
https://arxiv.org/html/2406.07496v1#S3.SS3
, we optimize prompts to improve the LLM performance, where we push the performance of GPT-3.5 close to GPT-4 in several reasoning tasks. Report issue for preceding element
Chemistry: In Section 
3.4
https://arxiv.org/html/2406.07496v1#S3.SS4
, we design new small molecules with desirable druglikeness and in silico binding affinity to drug targets. Report issue for preceding element
Medicine: In Section 
3.5
https://arxiv.org/html/2406.07496v1#S3.SS5
, we optimize radiation treatment plans for prostate cancer patients to achieve desirable target dosage and reduce side effects. Report issue for preceding element
Our results in a broad set of applications demonstrate the promise of TextGrad to automatically optimize compound AI systems via backpropagation of text feedback. To accelerate progress in this direction, we open-source our framework at 
https://github.com/zou-group/textgrad
https://github.com/zou-group/textgrad
.
Report issue for preceding element
 
Figure 1: Automatic “Differentiation” via Text (a, b). Backpropagation of gradients is the driving force of deep learning. We do not have gradients for compound systems of blackbox AI systems, but we can construct analogous backpropagation for text-based feedback, forming the basis of TextGrad. Abstractions in TextGrad (c). We share the same abstractions and syntax as PyTorch to our framework generalizable and easy-to-learn. Applications of TextGrad (d,e,f,g). In Section 
3.4
https://arxiv.org/html/2406.07496v1#S3.SS4
, we optimize molecular structures for properties such as druglikeness and protein binding affinity (d). In Section 
3.1
https://arxiv.org/html/2406.07496v1#S3.SS1
, we optimize solutions to coding problems (e). In Section 
3.5
https://arxiv.org/html/2406.07496v1#S3.SS5
, we optimize radiotherapy treatment plans to improve patient outcomes (f). In Section 
3.3
https://arxiv.org/html/2406.07496v1#S3.SS3
, we optimize prompts to improve the reasoning of language models (g). Report issue for preceding element
2 TextGrad: Optimizing AI systems by backpropagating text feedback
Report issue for preceding element
Below we first describe a example to demonstrate what TextGrad looks like for a system made of two LLM calls, and then give the more general form for arbitrarily complex systems.
Report issue for preceding element
Warmup: system with two LLM calls
Report issue for preceding element
Example computation graph.
Report issue for preceding element
In traditional automatic differentiation, we compute gradients that provides a direction that would improve the variable with respect to a downstream loss with the chain-rule. For a simple analog, let us look at the simple system:
Report issue for preceding element
Prediction
= LLM  ( Prompt + Question ) , \displaystyle={\color[rgb]{0.25,0.1,1}\definecolor[named]{pgfstrokecolor}{rgb}{0.25,0.1,1}\pgfsys@color@cmyk@stroke{0.75}{0.90}{0}{0}\pgfsys@color@cmyk@fill{0.75}{0.90}{0}{0}\text{LLM}}({\color[rgb]{.132,.545,.132}\definecolor[named]{pgfstrokecolor}{rgb}{.132,.545,.132}\textbf{\text{Prompt}}}+\text{Question}),
(1)
Evaluation
= LLM  ( Evaluation Instruction + Prediction ) , \displaystyle={\color[rgb]{0.25,0.1,1}\definecolor[named]{pgfstrokecolor}{rgb}{0.25,0.1,1}\pgfsys@color@cmyk@stroke{0.75}{0.90}{0}{0}\pgfsys@color@cmyk@fill{0.75}{0.90}{0}{0}\text{LLM}}(\text{Evaluation Instruction}+\text{Prediction}),
(2)
where we denote the free parameter to optimize, the prompt, with green, and we use + + to denote concatenation of two strings, and use LLM  ( x ) {\color[rgb]{0.25,0.1,1}\definecolor[named]{pgfstrokecolor}{rgb}{0.25,0.1,1}\pgfsys@color@cmyk@stroke{0.75}{0.90}{0}{0}\pgfsys@color@cmyk@fill{0.75}{0.90}{0}{0}\text{LLM}}(x) to give x x as a prompt to a language model to collect the response. We will use the chain notation:
Report issue for preceding element
Prompt + Question → LLM Evaluation Instruction + Prediction → LLM Evaluation , {\color[rgb]{.132,.545,.132}\definecolor[named]{pgfstrokecolor}{rgb}{.132,.545,.132}\textbf{\text{Prompt}}}+\text{Question}\xrightarrow{{\color[rgb]{0.25,0.1,1}\definecolor[named]{pgfstrokecolor}{rgb}{0.25,0.1,1}\pgfsys@color@cmyk@stroke{0.75}{0.90}{0}{0}\pgfsys@color@cmyk@fill{0.75}{0.90}{0}{0}\text{LLM}}}\text{Evaluation Instruction}+\text{Prediction}\xrightarrow{{\color[rgb]{0.25,0.1,1}\definecolor[named]{pgfstrokecolor}{rgb}{0.25,0.1,1}\pgfsys@color@cmyk@stroke{0.75}{0.90}{0}{0}\pgfsys@color@cmyk@fill{0.75}{0.90}{0}{0}\text{LLM}}}\text{Evaluation},
(3)
as another way to denote this system, where we make one LLM call to generate a Prediction for a Question using a Prompt, and another LLM call to evaluate this Prediction.
Report issue for preceding element
Example gradient computation.
Report issue for preceding element
In this example system, to improve the Prompt with respect to the evaluation, we instantiate an analog of the backpropagation [ 
19
https://arxiv.org/html/2406.07496v1#bib.bibx19
] algorithm through the following:
Report issue for preceding element
Gradient computation for the simple graph: Prompt → LLM Prediction → LLM Evaluation \textbf{{\color[rgb]{.132,.545,.132}\definecolor[named]{pgfstrokecolor}{rgb}{.132,.545,.132}{\text{Prompt}}}}\xrightarrow{{\color[rgb]{1,1,1}\definecolor[named]{pgfstrokecolor}{rgb}{1,1,1}\pgfsys@color@gray@stroke{1}\pgfsys@color@gray@fill{1}\text{LLM}}}\text{Prediction}\xrightarrow{{\color[rgb]{1,1,1}\definecolor[named]{pgfstrokecolor}{rgb}{1,1,1}\pgfsys@color@gray@stroke{1}\pgfsys@color@gray@fill{1}\text{LLM}}}\text{Evaluation} ∂ Evaluation ∂ Prediction \displaystyle\frac{\partial\text{Evaluation}}{\partial\text{Prediction}} = ∇ LLM ( Prediction , Evaluation ) , \displaystyle={\color[rgb]{0.25,0.1,1}\definecolor[named]{pgfstrokecolor}{rgb}{0.25,0.1,1}\pgfsys@color@cmyk@stroke{0.75}{0.90}{0}{0}\pgfsys@color@cmyk@fill{0.75}{0.90}{0}{0}{\nabla}
{\text{\text{LLM}}}}(\text{Prediction},\text{Evaluation}), (4) ∂ Evaluation ∂ Prompt = ∂ Evaluation ∂ Prediction ∘ ∂ Prediction ∂ Prompt \displaystyle\frac{\partial\text{Evaluation}}{\partial{\color[rgb]{.132,.545,.132}\definecolor[named]{pgfstrokecolor}{rgb}{.132,.545,.132}\textbf{\text{Prompt}}}}=\frac{\partial\text{Evaluation}}{\partial\text{Prediction}}\circ\frac{\partial\text{Prediction}}{\partial{\color[rgb]{.132,.545,.132}\definecolor[named]{pgfstrokecolor}{rgb}{.132,.545,.132}\textbf{\text{Prompt}}}} = ∇ LLM ( Prompt , Prediction , ∂ Evaluation ∂ Prediction ) , \displaystyle={\color[rgb]{0.25,0.1,1}\definecolor[named]{pgfstrokecolor}{rgb}{0.25,0.1,1}\pgfsys@color@cmyk@stroke{0.75}{0.90}{0}{0}\pgfsys@color@cmyk@fill{0.75}{0.90}{0}{0}{\nabla}
{\text{\text{LLM}}}}({\color[rgb]{.132,.545,.132}\definecolor[named]{pgfstrokecolor}{rgb}{.132,.545,.132}\textbf{\text{Prompt}}},\text{Prediction},\frac{\partial\text{Evaluation}}{\partial\text{Prediction}}), (5) where we use ∇ LLM {\color[rgb]{0.25,0.1,1}\definecolor[named]{pgfstrokecolor}{rgb}{0.25,0.1,1}\pgfsys@color@cmyk@stroke{0.75}{0.90}{0}{0}\pgfsys@color@cmyk@fill{0.75}{0.90}{0}{0}{\nabla}
{\text{\text{LLM}}}} for the gradient operator when the forward function is an LLM call. 1 1 1 Note that we overload the notation to denote both for cases when the output variable does not have successors (e.g., ∇ LLM ( Prediction , Evaluation ) {\color[rgb]{0.25,0.1,1}\definecolor[named]{pgfstrokecolor}{rgb}{0.25,0.1,1}\pgfsys@color@cmyk@stroke{0.75}{0.90}{0}{0}\pgfsys@color@cmyk@fill{0.75}{0.90}{0}{0}{\nabla}
{\text{{\color[rgb]{0.25,0.1,1}\definecolor[named]{pgfstrokecolor}{rgb}{0.25,0.1,1}\pgfsys@color@cmyk@stroke{0.75}{0.90}{0}{0}\pgfsys@color@cmyk@fill{0.75}{0.90}{0}{0}\text{LLM}}}}}(\text{Prediction},\text{Evaluation}) ) and when it has successors, and thus gradients (e.g., ∇ LLM ( Prompt , Prediction , ∂ Loss ∂ Prediction ) {\color[rgb]{0.25,0.1,1}\definecolor[named]{pgfstrokecolor}{rgb}{0.25,0.1,1}\pgfsys@color@cmyk@stroke{0.75}{0.90}{0}{0}\pgfsys@color@cmyk@fill{0.75}{0.90}{0}{0}{\nabla}_{\text{\text{LLM}}}}({\color[rgb]{.132,.545,.132}\definecolor[named]{pgfstrokecolor}{rgb}{.132,.545,.132}\textbf{\text{Prompt}}},\text{Prediction},\frac{\partial\text{Loss}}{\partial\text{Prediction}}) ). In particular, this function returns natural language feedback such as ' This prediction can be improved by…' where the feedback describes how to modify the variable to improve the downstream objective, analogous to gradients in optimization. We first collect feedback to the Prediction variable using the evaluation. Then, given this feedback and the ( Prompt → LLM Prediction {\color[rgb]{.132,.545,.132}\definecolor[named]{pgfstrokecolor}{rgb}{.132,.545,.132}\textbf{\text{Prompt}}}\xrightarrow{{\color[rgb]{0.25,0.1,1}\definecolor[named]{pgfstrokecolor}{rgb}{0.25,0.1,1}\pgfsys@color@cmyk@stroke{0.75}{0.90}{0}{0}\pgfsys@color@cmyk@fill{0.75}{0.90}{0}{0}\text{LLM}}}\text{Prediction} ) call, we collect the feedback on the Prompt. Report issue for preceding element Report issue for preceding element
Below is a flexible way to instantiate ∇ LLM {\color[rgb]{0.25,0.1,1}\definecolor[named]{pgfstrokecolor}{rgb}{0.25,0.1,1}\pgfsys@color@cmyk@stroke{0.75}{0.90}{0}{0}\pgfsys@color@cmyk@fill{0.75}{0.90}{0}{0}{\nabla}_{\text{\text{LLM}}}} to collect feedback for a simple system like x → LLM y → LLM ℒ x\xrightarrow{{\color[rgb]{0.25,0.1,1}\definecolor[named]{pgfstrokecolor}{rgb}{0.25,0.1,1}\pgfsys@color@cmyk@stroke{0.75}{0.90}{0}{0}\pgfsys@color@cmyk@fill{0.75}{0.90}{0}{0}\text{LLM}}}y\xrightarrow{{\color[rgb]{0.25,0.1,1}\definecolor[named]{pgfstrokecolor}{rgb}{0.25,0.1,1}\pgfsys@color@cmyk@stroke{0.75}{0.90}{0}{0}\pgfsys@color@cmyk@fill{0.75}{0.90}{0}{0}\text{LLM}}}\mathcal{L} :
Report issue for preceding element
Example implementation for the gradient operator ∂ ℒ ∂ x = ∇ LLM ( x , y , ∂ ℒ ∂ y ) ≜ \displaystyle\frac{\partial\mathcal{L}}{\partial x}={\color[rgb]{0.25,0.1,1}\definecolor[named]{pgfstrokecolor}{rgb}{0.25,0.1,1}\pgfsys@color@cmyk@stroke{0.75}{0.90}{0}{0}\pgfsys@color@cmyk@fill{0.75}{0.90}{0}{0}{\nabla}_{\text{\text{LLM}}}}(x,y,\frac{\partial\mathcal{L}}{\partial y})\triangleq ”  Here is a conversation with an LLM: {x|y}.  ” \displaystyle\ "\texttt{Here is a conversation with an LLM: {x|y}.}" (6) + \displaystyle\ + LLM ( Here is a conversation with an LLM: {x|y}. \displaystyle\ {\color[rgb]{0.25,0.1,1}\definecolor[named]{pgfstrokecolor}{rgb}{0.25,0.1,1}\pgfsys@color@cmyk@stroke{0.75}{0.90}{0}{0}\pgfsys@color@cmyk@fill{0.75}{0.90}{0}{0}\text{LLM}}(\texttt{Here is a conversation with an LLM: {x|y}.} Below are the criticisms on {y}: { ∂ ℒ ∂ y } \displaystyle\ \phantom{{\color[rgb]{0.25,0.1,1}\definecolor[named]{pgfstrokecolor}{rgb}{0.25,0.1,1}\pgfsys@color@cmyk@stroke{0.75}{0.90}{0}{0}\pgfsys@color@cmyk@fill{0.75}{0.90}{0}{0}\text{LLM}}(}\left{\frac{\partial\mathcal{L}}{\partial y}\right} Explain how to improve {x}. ) , \displaystyle\ \phantom{{\color[rgb]{0.25,0.1,1}\definecolor[named]{pgfstrokecolor}{rgb}{0.25,0.1,1}\pgfsys@color@cmyk@stroke{0.75}{0.90}{0}{0}\pgfsys@color@cmyk@fill{0.75}{0.90}{0}{0}\text{LLM}}(}\texttt{Explain how to improve {x}.}), where the gradient object is a combination of the context in which the variable appears and the feedback obtained from an LLM 
2
 
2
 2 The exact prompts we use are different to ensure generality and flexibility; we use these examples only for exposition., defined analogously to [ 
25
https://arxiv.org/html/2406.07496v1#bib.bibx25
] . Note that this operator does not depend on, e.g., the application domain. Once implemented, the gradient operator for LLM calls are fixed throughout the framework for all applications. Report issue for preceding element Report issue for preceding element
Example optimizer.
Report issue for preceding element
In standard gradient descent, the current value of the variable is combined with the gradients through subtraction, e.g.:
Report issue for preceding element
θ new = GradientDescent.step  ( θ , ∂ ℒ ∂ θ ) = θ − ∂ ℒ ∂ θ . \theta_{\text{new}}={\color[rgb]{0.25,0.1,1}\definecolor[named]{pgfstrokecolor}{rgb}{0.25,0.1,1}\pgfsys@color@cmyk@stroke{0.75}{0.90}{0}{0}\pgfsys@color@cmyk@fill{0.75}{0.90}{0}{0}\text{GradientDescent.step}}(\theta,\frac{\partial\mathcal{L}}{\partial\theta})=\theta-\frac{\partial\mathcal{L}}{\partial\theta}.
(7)
Continuing the gradient-based optimization analogy, we use 
Textual
 Gradient Descent (TGD):
Report issue for preceding element
Updating the Prompt variable in the simple graph via TGD. Prompt new = TGD.step  ( Prompt , ∂ Evaluation ∂ Prompt ) . {\color[rgb]{.132,.545,.132}\definecolor[named]{pgfstrokecolor}{rgb}{.132,.545,.132}\textbf{\text{Prompt}}}_{{\color[rgb]{.132,.545,.132}\definecolor[named]{pgfstrokecolor}{rgb}{.132,.545,.132}\textbf{\text{new}}}}={\color[rgb]{0.25,0.1,1}\definecolor[named]{pgfstrokecolor}{rgb}{0.25,0.1,1}\pgfsys@color@cmyk@stroke{0.75}{0.90}{0}{0}\pgfsys@color@cmyk@fill{0.75}{0.90}{0}{0}\text{TGD.step}}({\color[rgb]{.132,.545,.132}\definecolor[named]{pgfstrokecolor}{rgb}{.132,.545,.132}\textbf{\text{Prompt}}},\frac{\partial\text{Evaluation}}{\partial{\color[rgb]{.132,.545,.132}\definecolor[named]{pgfstrokecolor}{rgb}{.132,.545,.132}\textbf{\text{Prompt}}}}). (8) to update the parameters, in this case, the Prompt. In particular, given the current variable and the gradients (feedback) we collected for this variable, the optimizer seeks to update this variable. Report issue for preceding element Report issue for preceding element
A concrete way to instantiate TGD is the following:
Report issue for preceding element
Example implementation of one TGD iteration x new = TGD.step  ( x , ∂ ℒ ∂ x ) ≜ \displaystyle x_{\textrm{new}}={\color[rgb]{0.25,0.1,1}\definecolor[named]{pgfstrokecolor}{rgb}{0.25,0.1,1}\pgfsys@color@cmyk@stroke{0.75}{0.90}{0}{0}\pgfsys@color@cmyk@fill{0.75}{0.90}{0}{0}\text{TGD.step}}(x,\frac{\partial\mathcal{L}}{\partial x})\triangleq LLM ( Below are the criticisms on {x}: \displaystyle\ {\color[rgb]{0.25,0.1,1}\definecolor[named]{pgfstrokecolor}{rgb}{0.25,0.1,1}\pgfsys@color@cmyk@stroke{0.75}{0.90}{0}{0}\pgfsys@color@cmyk@fill{0.75}{0.90}{0}{0}\text{LLM}}(\texttt{Below are the criticisms on {x}:} (9) { ∂ ℒ ∂ x } \displaystyle\ \phantom{{\color[rgb]{0.25,0.1,1}\definecolor[named]{pgfstrokecolor}{rgb}{0.25,0.1,1}\pgfsys@color@cmyk@stroke{0.75}{0.90}{0}{0}\pgfsys@color@cmyk@fill{0.75}{0.90}{0}{0}\text{LLM}}(}\left{\frac{\partial\mathcal{L}}{\partial x}\right} Incorporate the criticisms, and produce a new variable. ) . \displaystyle\ \phantom{{\color[rgb]{0.25,0.1,1}\definecolor[named]{pgfstrokecolor}{rgb}{0.25,0.1,1}\pgfsys@color@cmyk@stroke{0.75}{0.90}{0}{0}\pgfsys@color@cmyk@fill{0.75}{0.90}{0}{0}\text{LLM}}(}\texttt{Incorporate the criticisms, and produce a new variable.}). where x x is the variable we would like to improve, and ∂ ℒ ∂ x \frac{\partial\mathcal{L}}{\partial x} is the feedback we obtained for the variable during the backward pass 
3
 
3
 3 The exact prompts we use are different to ensure generality and flexibility; we use these examples only for exposition.. Similar to the gradient operator, this function also does not depend on the domain of application, and TGD implementation is the same across all uses of the framework. Report issue for preceding element Report issue for preceding element
The general case
Report issue for preceding element
The abstraction readily applies to arbitrarily complex systems. Define a computation graph by
Report issue for preceding element
v = f v  ( PredecessorsOf  ( v ) ) ∀ v ∈ 𝒱 v={\color[rgb]{0.25,0.1,1}\definecolor[named]{pgfstrokecolor}{rgb}{0.25,0.1,1}\pgfsys@color@cmyk@stroke{0.75}{0.90}{0}{0}\pgfsys@color@cmyk@fill{0.75}{0.90}{0}{0}f_{v}}(\text{PredecessorsOf}(v))\ \ \forall v\in\mathcal{V}
(10)
where v v is a variable in the graph, 𝒱 \mathcal{V} is the set of all variables in the graph, and SuccessorsOf returns the successors and PredecessorsOf returns the predecessors of a variable. Generally speaking, the value of v v can be unstructured data, such as natural language text or images. For most of the results and exposition in this paper, v v is natural language text.
Report issue for preceding element
Further, let us have f v {\color[rgb]{0.25,0.1,1}\definecolor[named]{pgfstrokecolor}{rgb}{0.25,0.1,1}\pgfsys@color@cmyk@stroke{0.75}{0.90}{0}{0}\pgfsys@color@cmyk@fill{0.75}{0.90}{0}{0}f_{v}} as the transformation that consumes a set of variables and produces the variable v v . For instance, we can use an LLM or Numerical Simulator as a transformation. Since different functions will have different ways to compute gradients and collect feedback for, we will generally use ∇ f {\color[rgb]{0.25,0.1,1}\definecolor[named]{pgfstrokecolor}{rgb}{0.25,0.1,1}\pgfsys@color@cmyk@stroke{0.75}{0.90}{0}{0}\pgfsys@color@cmyk@fill{0.75}{0.90}{0}{0}{\nabla}_{\text{f}}} to denote the gradient function for a function f {\color[rgb]{0.25,0.1,1}\definecolor[named]{pgfstrokecolor}{rgb}{0.25,0.1,1}\pgfsys@color@cmyk@stroke{0.75}{0.90}{0}{0}\pgfsys@color@cmyk@fill{0.75}{0.90}{0}{0}f} . For the sake of exposition, we will omit the subscript when the function is obvious.
Report issue for preceding element
The gradients are computed by
Report issue for preceding element
∂ ℒ ∂ v = ⋃ w ∈ SuccessorsOf  ( v )  ∇ f ( v , w , ∂ ℒ ∂ w ) , \frac{\partial\mathcal{L}}{\partial v}=\underset{w\in\text{SuccessorsOf}(v)}{\bigcup}{{\color[rgb]{0.25,0.1,1}\definecolor[named]{pgfstrokecolor}{rgb}{0.25,0.1,1}\pgfsys@color@cmyk@stroke{0.75}{0.90}{0}{0}\pgfsys@color@cmyk@fill{0.75}{0.90}{0}{0}{\nabla}_{\text{f}}}}\left(v,w,\frac{\partial\mathcal{L}}{\partial w}\right),
(11)
where we collect the set of gradients from all successors of v v . Intuitively, we get feedback from every context in which a variable v v was used, and aggregate them.
Report issue for preceding element
Equation 
11
https://arxiv.org/html/2406.07496v1#S2.E11
 recursively computes the gradients of the downstream objective with respect to the desired variables v v in the graph. The ∇ f {\color[rgb]{0.25,0.1,1}\definecolor[named]{pgfstrokecolor}{rgb}{0.25,0.1,1}\pgfsys@color@cmyk@stroke{0.75}{0.90}{0}{0}\pgfsys@color@cmyk@fill{0.75}{0.90}{0}{0}{\nabla}_{\text{f}}} function takes as input the gradients of ℒ \mathcal{L} with respect to the successors of a given variable v v , the value of the variable v v and the successors themselves. Note that the final gradient variable comprises a set of contexts and criticisms for any place a variable was used in.
Report issue for preceding element
Finally, to update any desired variable v v in the graph, we can use an optimizer:
Report issue for preceding element
v new = TGD.step  ( v , ∂ ℒ ∂ v ) , v_{\textrm{new}}={\color[rgb]{0.25,0.1,1}\definecolor[named]{pgfstrokecolor}{rgb}{0.25,0.1,1}\pgfsys@color@cmyk@stroke{0.75}{0.90}{0}{0}\pgfsys@color@cmyk@fill{0.75}{0.90}{0}{0}\text{TGD.step}}\left(v,\frac{\partial\mathcal{L}}{\partial v}\right),
(12)
which updates the value of v v based on its current value and the gradients. For a computation graph where there are n n edges, each iteration of optimization performs at most n n additional language model calls to compute gradients (1 call using the gradient operator for each edge in the computation graph). For implementations of operations in TextGrad, see Appendix 
A
https://arxiv.org/html/2406.07496v1#A1
.
Report issue for preceding element
Objective functions
Report issue for preceding element
In numerical optimization and automatic differentiation, the objective function is typically a differentiable function, such as mean squared error or cross entropy. In TextGrad, the objective can be a complex and potentially nondifferentiable function, where the domain and codomain of the function can be unstructured data. This choice adds important generality and flexibility to the framework. For instance, we demonstrate that the objective can be specified in natural language text and computed by prompting a language model (§ 
3.3
https://arxiv.org/html/2406.07496v1#S3.SS3
), an output of a code interpreter running unit tests (§ 
3.1
https://arxiv.org/html/2406.07496v1#S3.SS1
), or outputs of molecular simulation engines (§ 
3.4
https://arxiv.org/html/2406.07496v1#S3.SS4
). For instance, a simple loss function for a code snippet can be the following:
Report issue for preceding element
Loss  ( code , target goal ) = \displaystyle\text{Loss}({\color[rgb]{.132,.545,.132}\definecolor[named]{pgfstrokecolor}{rgb}{.132,.545,.132}\textbf{\text{code}}},\text{target goal})=
LLM ( Here is a code snippet: { code } . \displaystyle{\color[rgb]{0.25,0.1,1}\definecolor[named]{pgfstrokecolor}{rgb}{0.25,0.1,1}\pgfsys@color@cmyk@stroke{0.75}{0.90}{0}{0}\pgfsys@color@cmyk@fill{0.75}{0.90}{0}{0}\text{LLM}}(\text{Here is a code snippet:}{{\color[rgb]{.132,.545,.132}\definecolor[named]{pgfstrokecolor}{rgb}{.132,.545,.132}\textbf{\text{code}}}}.
(13)
Here is the goal for this snippet:  { target goal } . \displaystyle\phantom{{\color[rgb]{0.25,0.1,1}\definecolor[named]{pgfstrokecolor}{rgb}{0.25,0.1,1}\pgfsys@color@cmyk@stroke{0.75}{0.90}{0}{0}\pgfsys@color@cmyk@fill{0.75}{0.90}{0}{0}\text{LLM}}(}\text{Here is the goal for this snippet:}{\text{target goal}}.
Evaluate the snippet for correctness and runtime complexity. ) , \displaystyle\phantom{{\color[rgb]{0.25,0.1,1}\definecolor[named]{pgfstrokecolor}{rgb}{0.25,0.1,1}\pgfsys@color@cmyk@stroke{0.75}{0.90}{0}{0}\pgfsys@color@cmyk@fill{0.75}{0.90}{0}{0}\text{LLM}}(}\text{Evaluate the snippet for correctness and runtime complexity.}),
where we can use this evaluation signal to optimize the code snippet, powered by the well-documented ability of LLMs to simulate human feedback, self-evaluate, and self-improve [ 
28
https://arxiv.org/html/2406.07496v1#bib.bibx28
, 
29
https://arxiv.org/html/2406.07496v1#bib.bibx29
, 
30
https://arxiv.org/html/2406.07496v1#bib.bibx30
, 
31
https://arxiv.org/html/2406.07496v1#bib.bibx31
, 
32
https://arxiv.org/html/2406.07496v1#bib.bibx32
, 
33
https://arxiv.org/html/2406.07496v1#bib.bibx33
, 
10
https://arxiv.org/html/2406.07496v1#bib.bibx10
] .
Report issue for preceding element
Instance vs Prompt Optimization
Report issue for preceding element
There are two classes of optimization problems we explore.
Report issue for preceding element
In instance optimization, we directly treat a solution to a problem—e.g., a code snippet, the solution to a problem or a molecule—as an optimization variable. For instance, in Equation 
13
https://arxiv.org/html/2406.07496v1#S2.E13
, we have a code instance that we would like to improve at test time. Our framework produces the gradients for and directly optimizes the code variable.
Report issue for preceding element
In prompt optimization, the goal is to find a prompt that improves the performance of an LLM across multiple queries for a task. For example, we may want to find a system prompt to an LLM that improve the performance on mathematical reasoning questions (see Section 
3.3
https://arxiv.org/html/2406.07496v1#S3.SS3
 for examples). In particular, we want the system prompt to generalize, in contrast to instance optimization where the only goal is to improve the solution for a given query at test time.
Report issue for preceding element
Crucially, both types of problems can be solved without hand-crafting the framework.
Report issue for preceding element
Optimization Techniques
Report issue for preceding element
Automatic differentiation is a strong analogy for TextGrad and provides conceptual support for optimization techniques implemented in the framework. Below, we describe some examples.
Report issue for preceding element
Batch Optimization: We implement stochastic minibatch gradient descent [ 
34
https://arxiv.org/html/2406.07496v1#bib.bibx34
, 
18
https://arxiv.org/html/2406.07496v1#bib.bibx18
] for prompt optimization. Specifically, after doing a forward pass with multiple instances in a batch and evaluate individual loss terms, we use the tg.sum function to sum the losses (akin to torch.sum). In the backward pass, gradients on variables through individual loss terms are concatenated, mirroring backpropagating through addition.
Report issue for preceding element
Constrained Optimization: We use natural language constraints, building on constrained optimization as an analogy [ 
35
https://arxiv.org/html/2406.07496v1#bib.bibx35
] . In particular, we use natural language constraints (e.g., such as 'The last line of your response should be of the following format: 'Answer: $LETTER' where LETTER is one of ABCD.”) to guide the behavior of the optimizer. We observe that thanks to instruction-tuning [ 
36
https://arxiv.org/html/2406.07496v1#bib.bibx36
, 
37
https://arxiv.org/html/2406.07496v1#bib.bibx37
] , language models can follow these simple constraints, although their reliability can reduce with too many constraints [ 
38
https://arxiv.org/html/2406.07496v1#bib.bibx38
, 
39
https://arxiv.org/html/2406.07496v1#bib.bibx39
] .
Report issue for preceding element
Momentum: We use the analogy to momentum in gradient descent [ 
40
https://arxiv.org/html/2406.07496v1#bib.bibx40
, 
41
https://arxiv.org/html/2406.07496v1#bib.bibx41
] . When optimizing a variable, the TGD optimizer can optionally see the earlier iterations of the variable when making the update.
Report issue for preceding element
For more details on optimization techniques that are implemented in TextGrad, see Appendix LABEL:appendix:optimizer-extensions.
Report issue for preceding element
3 Results
Report issue for preceding element
We demonstrate the flexibility of TextGrad in a diverse array of applications. In § 
3.1
https://arxiv.org/html/2406.07496v1#S3.SS1
, we optimize code snippets to solve hard coding problems from LeetCode. In § 
3.2
https://arxiv.org/html/2406.07496v1#S3.SS2
, we optimize solutions to science questions. In § 
3.3
https://arxiv.org/html/2406.07496v1#S3.SS3
 we optimize prompts to improve the reasoning of LLMs. In § 
3.4
https://arxiv.org/html/2406.07496v1#S3.SS4
, we optimize chemical structures for improved molecular properties. In § 
3.5
https://arxiv.org/html/2406.07496v1#S3.SS5
, we optimize treatment plans for prostate cancer patients.
Report issue for preceding element
3.1 Code optimization
Report issue for preceding element
Code optimization is a hallmark use case of instance optimization. Here, the goal is to optimize some code to improve e.g., correctness or runtime complexity. We often have a computation graph like the following:
Report issue for preceding element
Code-Refinement Objective = LLM  ( Problem + Code + Test-time Instruction + Local Test Results ) \text{Code-Refinement Objective}={\color[rgb]{0.25,0.1,1}\definecolor[named]{pgfstrokecolor}{rgb}{0.25,0.1,1}\pgfsys@color@cmyk@stroke{0.75}{0.90}{0}{0}\pgfsys@color@cmyk@fill{0.75}{0.90}{0}{0}{\color[rgb]{0.25,0.1,1}\definecolor[named]{pgfstrokecolor}{rgb}{0.25,0.1,1}\pgfsys@color@cmyk@stroke{0.75}{0.90}{0}{0}\pgfsys@color@cmyk@fill{0.75}{0.90}{0}{0}\text{LLM}}}(\text{Problem}+{\color[rgb]{.132,.545,.132}\definecolor[named]{pgfstrokecolor}{rgb}{.132,.545,.132}\textbf{\text{Code}}}+\text{Test-time Instruction + Local Test Results})
(14)
where we optimize the Code to solve a given Problem with limited, local test supervision and self-evaluation through a test-instruction asking to critique the current iteration of the code. Figure 
1
https://arxiv.org/html/2406.07496v1#F1
 e shows an example for the problem You are given an array nums of size n consisting of distinct integers from 1 to n and a positive integer k. Return the number of non-empty subarrays in nums that have a median equal to k. The first solution proposed by gpt-4o does not pass the tests. TextGrad identifies an edge case in the first solution and provides a suggestion on how to improve it. The optimized implementation passes all tests.
Report issue for preceding element
Task: We use the LeetCode Hard dataset [ 
26
https://arxiv.org/html/2406.07496v1#bib.bibx26
] to benchmark code optimization. LeetCode is an online platform that offers coding practice questions in preparation for technical interviews. The LeetCode Hard dataset contains examples of 
hard
 coding problems that are meant to be challenging for both humans and language models, where the success metric is Completion Rate, i.e., passing all test cases for a given problem (GPT-4 reportedly achieved a 7% completion rate [ 
26
https://arxiv.org/html/2406.07496v1#bib.bibx26
] ). LeetCode test cases are not public, and thus, after generation, the code has to be submitted to the LeetCode platform for evaluation on the unseen test cases. This makes the platform more suitable to evaluate the performance of language models.
Report issue for preceding element
Baseline: Reflexion [ 
26
https://arxiv.org/html/2406.07496v1#bib.bibx26
] is the state-of-the-art method on the LeetCode Hard dataset. Their approach prompts an LLM to self-reflect on code snippets and the errors that were generated at test time using candidate unit tests. Given the self-reflection, the LLM is prompted again to provide an updated piece of code, conditioned on the self-reflection and the errors. We ran Reflexion on LeetCodeHard using gpt-4o using 1 in-context demonstration to guide the behavior (one-shot). In addition to Reflexion, we also run a zero-shot baseline using gpt-4o mimicking the same zero-shot baseline described in [ 
26
https://arxiv.org/html/2406.07496v1#bib.bibx26
] . In comparison, TextGrad runs in a zero-shot setting, without any demonstrations.
Report issue for preceding element
Results: Existing results [ 
26
https://arxiv.org/html/2406.07496v1#bib.bibx26
] showed a 7% pass rate for GPT-4 zero-shot and 15% for GPT-4 with Reflexion. We show that these results have now been boosted to 23% for gpt-4o zero-shot and 31% when Reflexion is used. With TextGrad, we can optimize solutions to achieve a performance of 36%. These improvements are more impressive considering that Reflexion was ran with in-context demonstrations and TextGrad did not use any demonstrations (i.e. zero-shot).
Report issue for preceding element
Code Refinement Objective LLM ( {\color[rgb]{0.25,0.1,1}\definecolor[named]{pgfstrokecolor}{rgb}{0.25,0.1,1}\pgfsys@color@cmyk@stroke{0.75}{0.90}{0}{0}\pgfsys@color@cmyk@fill{0.75}{0.90}{0}{0}\text{LLM}}( "You are an intelligent assistant used as an evaluator, and part of an optimization system. You will analyze a code implementation for a coding problem and unit test results. The code will be tested with harder tests, so do not just check if the code passes the provided tests. Think about the correctness of the code and its performance in harder test cases. Give very concise feedback. Investigate the code problem and the provided implementation. For each failed unit test case, start analyzing it by saying "The code did not pass this test because…". Explain why the current implementation is not getting the expected output. Do not provide a revised implementation. Carefully suggest why there are issues with the code and provide feedback. {Test-time Instruction} 
The coding problem:
 {Problem} 
Code generated that must be evaluated for correctness and runtime performance
 { Code} 
The test results:
 {Local test Results} Report issue for preceding element
Table 1: Code optimization for LeetCode Hard using gpt-4o. Results are averaged over 5 seeds.
Task
Method
Completion Rate
LeetCode Hard [ 
26
https://arxiv.org/html/2406.07496v1#bib.bibx26
]
Zero-shot [ 
26
https://arxiv.org/html/2406.07496v1#bib.bibx26
]
0.26 0.26
^^
Reflexion (1 demonstration, 5 iterations) [ 
26
https://arxiv.org/html/2406.07496v1#bib.bibx26
]
0.31 ± 0.012 0.31\pm 0.012
^^
TextGrad (0 demonstrations, 5 iterations)
0.36 ± 0.018 \mathbf{0.36}\pm 0.018
Report issue for preceding element
3.2 Solution optimization by test-time training to improve problem solving
Report issue for preceding element
Here, we focus on the task of 
solution optimization
 via TextGrad. In solution optimization, the goal is to improve the solution to a complex problem, such as a question about quantum mechanics or organic chemistry. In particular, we often have a computation graph like the following:
Report issue for preceding element
Solution Refinement Objective = LLM  ( Question + Solution + Test-time Instruction ) \text{Solution Refinement Objective}={\color[rgb]{0.25,0.1,1}\definecolor[named]{pgfstrokecolor}{rgb}{0.25,0.1,1}\pgfsys@color@cmyk@stroke{0.75}{0.90}{0}{0}\pgfsys@color@cmyk@fill{0.75}{0.90}{0}{0}{\color[rgb]{0.25,0.1,1}\definecolor[named]{pgfstrokecolor}{rgb}{0.25,0.1,1}\pgfsys@color@cmyk@stroke{0.75}{0.90}{0}{0}\pgfsys@color@cmyk@fill{0.75}{0.90}{0}{0}\text{LLM}}}(\text{Question}+{\color[rgb]{.132,.545,.132}\definecolor[named]{pgfstrokecolor}{rgb}{.132,.545,.132}\textbf{\text{Solution}}}+\text{Test-time Instruction})
(15)
where the parameter we optimize is the Solution, and the loss function is obtained by an evaluation of the solution, e.g., with an LLM. At each iteration, the LLM is prompted with the question, current solution, and some test-time instruction asking to critique or investigate the current iteration. Over the optimization trajectory, the solution is refined using this test-time self-evaluation. More generally, this idea is known as test-time training [ 
42
https://arxiv.org/html/2406.07496v1#bib.bibx42
, 
43
https://arxiv.org/html/2406.07496v1#bib.bibx43
] , where a machine learning model is trained on a test instance at test-time, often with a self-supervised objective. Similarly, recent work have shown the merits of self-refinement also for reasoning tasks [ 
30
https://arxiv.org/html/2406.07496v1#bib.bibx30
, 
26
https://arxiv.org/html/2406.07496v1#bib.bibx26
, 
44
https://arxiv.org/html/2406.07496v1#bib.bibx44
] . In particular, even though an LLM may not get the answer to a question or the solution to a problem right at first attempt, it can improve the response through iterative refinement.
Report issue for preceding element
For instance, the objective function for the refinement looks like the following:
Report issue for preceding element
Solution Refinement Objective LLM ( {\color[rgb]{0.25,0.1,1}\definecolor[named]{pgfstrokecolor}{rgb}{0.25,0.1,1}\pgfsys@color@cmyk@stroke{0.75}{0.90}{0}{0}\pgfsys@color@cmyk@fill{0.75}{0.90}{0}{0}{\color[rgb]{0.25,0.1,1}\definecolor[named]{pgfstrokecolor}{rgb}{0.25,0.1,1}\pgfsys@color@cmyk@stroke{0.75}{0.90}{0}{0}\pgfsys@color@cmyk@fill{0.75}{0.90}{0}{0}\text{LLM}}}( "Below is a multi-choice question and a prediction. You are a critical and creative scientist. Your job is to investigate the prediction. Critically go through reasoning steps, and see if there is a reason why the prediction could be incorrect. Use the Janusian Process, think about whether alternative answers could be true. Question: { Question } {\text{Question}} Answer by the language model: { Solution } {{\color[rgb]{.132,.545,.132}\definecolor[named]{pgfstrokecolor}{rgb}{.132,.545,.132}\textbf{\text{Solution}}}} ") Report issue for preceding element
Below is a representative implementation of solution optimization in TextGrad.
Report issue for preceding element
⬇
data:text/plain;base64,IyBBc3N1bWUgd2UgaGF2ZSB0aGUgdGVzdF9kYXRhc2V0IApxdWVzdGlvbiwgYW5zd2VyID0gdGVzdF9kYXRhc2V0W2ldCiMgSW5pdGlhbGl6ZSB0aGUgdGVzdCB0aW1lIGxvc3MgZnVuY3Rpb24KIyBUaGlzIGhhcyB0aGUgc3lzdGVtIHByb21wdCBwcm92aWRlZCBhYm92ZSBhcyBgU29sdXRpb24gUmVmaW5lbWVudCBPYmplY3RpdmUnCnRlc3RfdGltZV9sb3NzX2ZuID0gTXVsdGlwbGVDaG9pY2VUZXN0VGltZSgpCiMgR2V0IGEgemVyby1zaG90IHNvbHV0aW9uIGZyb20gYW4gTExNCnNvbHV0aW9uOiBWYXJpYWJsZSA9IHplcm9fc2hvdF9sbG0ocXVlc3Rpb24pCiMgT3B0aW1pemUgdGhlIHNvbHV0aW9uIGl0c2VsZgpvcHRpbWl6ZXIgPSB0Zy5UZXh0dWFsR3JhZGllbnREZXNjZW50KHBhcmFtZXRlcnM9W3NvbHV0aW9uXSkKCmZvciBpdGVyYXRpb24gaW4gcmFuZ2UobWF4X2l0ZXJhdGlvbnMpOgogICAgb3B0aW1pemVyLnplcm9fZ3JhZCgpCiAgICAjIE5vdGUgaG93IHRoZSBsb3NzIGlzIHNlbGYtc3VwZXJ2aXNlZCAoZG9lcyBub3QgZGVwZW5kIG9uIGFueSBncm91bmQgdHJ1dGguKQogICAgbG9zcyA9IHRlc3RfdGltZV9sb3NzX2ZuKHF1ZXN0aW9uLCBzb2x1dGlvbikKICAgICMgUG9wdWxhdGUgdGhlIGdyYWRpZW50cywgYW5kIHVwZGF0ZSB0aGUgc29sdXRpb24KICAgIGxvc3MuYmFja3dhcmQoKQogICAgb3B0aW1pemVyLnN0ZXAoKQoK
1# Assume we have the test_dataset
2 question, answer = test_dataset[i]
3# Initialize the test time loss function
4# This has the system prompt provided above as 'Solution Refinement Objective'
5 test_time_loss_fn = MultipleChoiceTestTime()
6# Get a zero-shot solution from an LLM
7 solution: Variable = zero_shot_llm( question)
8# Optimize the solution itself
9 optimizer = tg. TextualGradientDescent( parameters=[ solution])
10
11 for iteration in range( max_iterations):
12 optimizer. zero_grad()
13 # Note how the loss is self-supervised (does not depend on any ground truth.)
14 loss = test_time_loss_fn( question, solution)
15 # Populate the gradients, and update the solution
16 loss. backward()
17 optimizer. step()
Code Snippet 1: A representative implementation of solution optimization in TextGrad. Report issue for preceding element
Task: Google-proof Question Answering (GPQA) [ 
27
https://arxiv.org/html/2406.07496v1#bib.bibx27
] is a recent benchmark where challenging multiple-choice questions in physics, biology, and chemistry are created and labeled by domain experts who have or are pursuing PhD degrees. In this benchmark, experts and skilled non-experts are reported to achieve 81 % 81% and 22 % 22% accuracy respectively, demonstrating the difficulty of the questions. Importantly, this is a benchmark where performance has not yet saturated, where to our knowledge, the best reported results, achieved by gpt-4o, gets 53.6 % 53.6% accuracy in the diamond subset. We also use two challenging subsets (Machine Learning and College Physics) of the MMLU [ 
45
https://arxiv.org/html/2406.07496v1#bib.bibx45
] question answering benchmark that is used to track the progress of language modeling and whether LLMs reached human-level performance. Here the expert human accuracy on average is around 90 % 90% . For the details of the question format and prompts, please see Appendix 
C
https://arxiv.org/html/2406.07496v1#A3
.
Report issue for preceding element
Method: We report two baselines. First, the reported results in the gpt-4o release document states 53.6 % 53.6% accuracy. However, their official implementation uses a temperature of 0.5 0.5 for generations, thus we also test gpt-4o with temperature 0 and Chain-of-Thought (CoT) [ 
46
https://arxiv.org/html/2406.07496v1#bib.bibx46
, 
47
https://arxiv.org/html/2406.07496v1#bib.bibx47
] prompting provided in the official implementation 
4
 
4
 4 We do this to minimize randomness, however, 
discussions
https://152334h.github.io/blog/non-determinism-in-gpt-4/
 claim there may be other sources of non-determinism with gpt-4.. For TextGrad, we perform 3 3 iterations of test-time updates (i.e. update the solution three times) and perform majority voting across all solutions to get the final answer. We use string-based metrics to compute the final accuracy of each answer.
Report issue for preceding element
Results: With TextGrad, we improve the performance of gpt-4o in the challenging question-answering tasks and report the results in Table 
2
https://arxiv.org/html/2406.07496v1#T2
. To our best knowledge, 55 % 55% is the best known result in the GPQA dataset so far. Similarly, we improve the performance in MMLU subsets from 85.7 % 85.7% to 88.4 % 88.4% (Machine Learning) and 91.2 % 91.2% to 95.1 % 95.1% (College Physics). These results show that by spending more computation at test-time through TextGrad self-refinement, we can improve the question answering performance of even the most capable models.
Report issue for preceding element
Table 2: Solution optimization for zero-shot question answering with gpt-4o.
Dataset
Method
Accuracy ( % % )
Google-proof QA [ 
27
https://arxiv.org/html/2406.07496v1#bib.bibx27
]
CoT [ 
47
https://arxiv.org/html/2406.07496v1#bib.bibx47
, 
46
https://arxiv.org/html/2406.07496v1#bib.bibx46
]
51.0 51.0
^^
Best reported [ 
48
https://arxiv.org/html/2406.07496v1#bib.bibx48
]
53.6 53.6
^^
TextGrad
55.0 \mathbf{55.0}
MMLU-Machine Learning [ 
45
https://arxiv.org/html/2406.07496v1#bib.bibx45
]
CoT [ 
47
https://arxiv.org/html/2406.07496v1#bib.bibx47
, 
46
https://arxiv.org/html/2406.07496v1#bib.bibx46
]
85.7 85.7
^^
TextGrad
88.4 \mathbf{88.4}
MMLU-College Physics [ 
45
https://arxiv.org/html/2406.07496v1#bib.bibx45
]
CoT [ 
47
https://arxiv.org/html/2406.07496v1#bib.bibx47
, 
46
https://arxiv.org/html/2406.07496v1#bib.bibx46
]
91.2 91.2
^^
TextGrad
95.1 \mathbf{95.1}
Report issue for preceding element
3.3 Prompt optimization for reasoning
Report issue for preceding element
While LLMs demonstrate an impressive performance in reasoning tasks, their performance can be sensitive to the prompt used to guide their behavior. In particular, with the right choice of a prompt, their performance can be significantly improved [ 
49
https://arxiv.org/html/2406.07496v1#bib.bibx49
] . In prompt optimization, the goal is to find a prompt or an instruction to guide the behavior of an LLM, such that it performs well on a given task. In particular, we often have a computation graph like the following:
Report issue for preceding element
Answer
= LLM  ( Prompt , Question ) \displaystyle={\color[rgb]{0.25,0.1,1}\definecolor[named]{pgfstrokecolor}{rgb}{0.25,0.1,1}\pgfsys@color@cmyk@stroke{0.75}{0.90}{0}{0}\pgfsys@color@cmyk@fill{0.75}{0.90}{0}{0}\text{LLM}}({\color[rgb]{.132,.545,.132}\definecolor[named]{pgfstrokecolor}{rgb}{.132,.545,.132}\textbf{\text{Prompt}}},\text{Question})
Evaluation Metric
= Evaluator  ( Answer , Ground Truth ) \displaystyle=\text{Evaluator}(\text{Answer},\text{Ground Truth})
(16)
where we have a Question for the task, an Answer to the question, and an Evaluation Metric indicating the quality of the output given the ground truth answer. For instance, for a question-answering task, the evaluation metric would be the accuracy of the answer, evaluated e.g. using string-based metrics.
Report issue for preceding element
Here, given a handful of training examples to optimize a Prompt, the goal is to maximize the performance of an LLM on the given task. In our experiments, our goal is to improve the performance of a weaker and cheaper model (e.g., gpt-3.5-turbo-0125) using the feedback generated by stronger models (e.g., gpt-4o). This is useful in practice because by paying a fixed cost to optimize a Prompt, the prompt-optimized weaker model can be used with cheaper inference costs instead of using the strong and more expensive model.
Report issue for preceding element
⬇
data:text/plain;base64,IyBJbml0aWFsaXplIHRoZSBzeXN0ZW0gcHJvbXB0CnN5c3RlbV9wcm9tcHQgPSB0Zy5WYXJpYWJsZSgiWW91IGFyZSBhIGhlbHBmdWwgbGFuZ3VhZ2UgbW9kZWwuIFRoaW5rIHN0ZXAgYnkgc3RlcC4iLCAKICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVzX2dyYWQ9VHJ1ZSwKICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvbGVfZGVzY3JpcHRpb249InN5c3RlbSBwcm9tcHQgdG8gdGhlIGxhbmd1YWdlIG1vZGVsIikKCiMgU2V0IHVwIHRoZSBtb2RlbCBvYmplY3QgJ3BhcmFtZXRlcml6ZWQgYnknIHRoZSBwcm9tcHQuCm1vZGVsID0gdGcuQmxhY2tib3hMTE0oc3lzdGVtX3Byb21wdD1zeXN0ZW1fcHJvbXB0KQoKIyBPcHRpbWl6ZSB0aGUgc3lzdGVtIHByb21wdApvcHRpbWl6ZXIgPSB0Zy5UZXh0dWFsR3JhZGllbnREZXNjZW50KHBhcmFtZXRlcnM9W3N5c3RlbV9wcm9tcHRdKQoKZm9yIGl0ZXJhdGlvbiBpbiByYW5nZShtYXhfaXRlcmF0aW9ucyk6CiAgICBiYXRjaF94LCBiYXRjaF95ID0gbmV4dCh0cmFpbl9sb2FkZXIpCiAgICBvcHRpbWl6ZXIuemVyb19ncmFkKCkKICAgICMgRG8gdGhlIGZvcndhcmQgcGFzcwogICAgcmVzcG9uc2VzID0gbW9kZWwoYmF0Y2hfeCkKICAgIGxvc3NlcyA9IFtsb3NzX2ZuKHJlc3BvbnNlLCB5KSBmb3IgKHJlc3BvbnNlLCB5KSBpbiB6aXAocmVzcG9uc2VzLCBiYXRjaF95KV0KICAgIHRvdGFsX2xvc3MgPSB0Zy5zdW0obG9zc2VzKQogICAgIyBQZXJmb3JtIHRoZSBiYWNrd2FyZCBwYXNzIGFuZCBjb21wdXRlIGdyYWRpZW50cwogICAgdG90YWxfbG9zcy5iYWNrd2FyZCgpCiAgICAjIFVwZGF0ZSB0aGUgc3lzdGVtIHByb21wdAogICAgb3B0aW1pemVyLnN0ZXAoKQ==
1# Initialize the system prompt
2 system_prompt = tg. Variable("You are a helpful language model. Think step by step.",
3 requires_grad= True,
4 role_description="system prompt to the language model")
5
6# Set up the model object 'parameterized by' the prompt.
7 model = tg. BlackboxLLM( system_prompt= system_prompt)
8
9# Optimize the system prompt
10 optimizer = tg. TextualGradientDescent( parameters=[ system_prompt])
11
12 for iteration in range( max_iterations):
13 batch_x, batch_y = next( train_loader)
14 optimizer. zero_grad()
15 # Do the forward pass
16 responses = model( batch_x)
17 losses = [ loss_fn( response, y) for ( response, y) in zip( responses, batch_y)]
18 total_loss = tg. sum( losses)
19 # Perform the backward pass and compute gradients
20 total_loss. backward()
21 # Update the system prompt
22 optimizer. step()
Code Snippet 2: A simple implementation of prompt optimization with TextGrad. Report issue for preceding element
Here, we use TextGrad in a minibatch stochastic gradient descent setting [ 
18
https://arxiv.org/html/2406.07496v1#bib.bibx18
, 
34
https://arxiv.org/html/2406.07496v1#bib.bibx34
] . In particular, at each iteration, we use a few training examples to run the forward pass in Equation 
16
https://arxiv.org/html/2406.07496v1#S3.E16
. A pseudocode and short implementation can be found in the snippet above. Full details of prompt optimization can be found in Appendix 
D
https://arxiv.org/html/2406.07496v1#A4
. Unlike instance optimization, where TextGrad tries to optimize each individual solution, the goal here is to optimize a single prompt that works well across all the questions in a benchmark.
Report issue for preceding element
Tasks: We explore prompt optimization in multiple datasets, including the two standard reasoning tasks (Object Counting and Word Sorting) from Big Bench Hard (randomly split into 50/100/100 train/validation/test samples) [ 
50
https://arxiv.org/html/2406.07496v1#bib.bibx50
, 
51
https://arxiv.org/html/2406.07496v1#bib.bibx51
] , GSM8k grade-school math problem solving [ 
52
https://arxiv.org/html/2406.07496v1#bib.bibx52
] (using train/validation/test splits from DSPy). For GSM8k and Object Counting, we use a string-based exact match metric to quantify accuracy (i.e. whether the final number provided in the response is the same as the ground truth answer). For Word Sorting, we use an LLM to compare the response and the ground truth answer. We give more details about the tasks, prompts, and example queries in Appendix 
D.1
https://arxiv.org/html/2406.07496v1#A4.SS1
.
Report issue for preceding element
Methods: We explore improving the performance of gpt-3.5-turbo-0125 using gpt-4o [ 
48
https://arxiv.org/html/2406.07496v1#bib.bibx48
] to provide feedback during backpropagation. In particular, while the forward model that performs the reasoning is gpt-3.5-turbo-0125, we use gpt-4o to provide the feedback and improve the prompt. We use a batch size of 3 3 with 12 12 iterations, i.e., the model sees 36 36 training examples in total, sampled randomly with replacement. After each iteration, we run a validation loop with the validation set of the datasets, and if the performance is better than the previous iteration we update the Prompt.
Report issue for preceding element
Baselines: We have two main baselines:
Report issue for preceding element
Zero-shot Chain-of-Thought (CoT) [ 
47
https://arxiv.org/html/2406.07496v1#bib.bibx47
, 
46
https://arxiv.org/html/2406.07496v1#bib.bibx46
] : We initialize all prompts as zero-shot CoT prompt, where a model is instructed to 'Think step-by-step' to explain its reasoning before giving its answer. This strategy is well-known to be a strong baseline for prompting. Report issue for preceding element
DSPy is a state-of-the-art language model programming and prompt optimization framework [ 
10
https://arxiv.org/html/2406.07496v1#bib.bibx10
] , thus we use it as the reference baseline. We instantiate DSPy's BootstrappedFewShotRandomSearch (BFSR) optimizer with 10 candidate programs and 8 few-shot examples. This optimizer identifies demonstrations to include in the prompt as few-shot examples. This is done through generating traces of LLM inputs and outputs that individually pass the metric (in this case, accuracy) and includes CoT reasoning. It then applies random search over subsets of up to size eight shots with these demonstrations. Report issue for preceding element
Table 3: Prompt optimization for reasoning tasks. With TextGrad, we optimize a system prompt for gpt-3.5-turbo using gpt-4o as the gradient engine that provides the feedback during backpropagation.
Dataset
Method
Accuracy ( % % )
Object Counting [ 
50
https://arxiv.org/html/2406.07496v1#bib.bibx50
, 
51
https://arxiv.org/html/2406.07496v1#bib.bibx51
]
CoT (0-shot) [ 
47
https://arxiv.org/html/2406.07496v1#bib.bibx47
, 
46
https://arxiv.org/html/2406.07496v1#bib.bibx46
]
77.8 77.8
^^
DSPy (BFSR, 8 demonstrations) [ 
10
https://arxiv.org/html/2406.07496v1#bib.bibx10
]
84.9 84.9
^^
TextGrad (instruction-only, 0 demonstrations)
91.9 \mathbf{91.9}
Word Sorting [ 
50
https://arxiv.org/html/2406.07496v1#bib.bibx50
, 
51
https://arxiv.org/html/2406.07496v1#bib.bibx51
]
CoT (0-shot) [ 
47
https://arxiv.org/html/2406.07496v1#bib.bibx47
, 
46
https://arxiv.org/html/2406.07496v1#bib.bibx46
]
76.7 76.7
^^
DSPy (BFSR, 8 demonstrations) [ 
10
https://arxiv.org/html/2406.07496v1#bib.bibx10
]
79.8 \mathbf{79.8}
^^
TextGrad (instruction-only, 0 demonstrations)
79.8 \mathbf{79.8}
GSM8k [ 
52
https://arxiv.org/html/2406.07496v1#bib.bibx52
]
CoT (0-shot) [ 
47
https://arxiv.org/html/2406.07496v1#bib.bibx47
, 
46
https://arxiv.org/html/2406.07496v1#bib.bibx46
]
72.9 72.9
^^
DSPy (BFSR, 8 demonstrations) [ 
10
https://arxiv.org/html/2406.07496v1#bib.bibx10
]
81.1 \mathbf{81.1}
^^
TextGrad (instruction-only, 0 demonstrations)
81.1 \mathbf{81.1}
Report issue for preceding element
Example: TextGrad optimized prompt for gpt-3.5-turbo-0125 Prompt at initialization (GSM8k Accuracy = 72.9 % =72.9% ): You will answer a mathematical reasoning question. Think step by step. Always conclude the last line of your response should be of the following format: 'Answer: $VALUE' where VALUE is a numerical value." Prompt after 12 iterations with batch size 3 (GSM8k Accuracy = 81.1 % =81.1% ): You will answer a mathematical reasoning question. Restate the problem in your own words to ensure understanding. Break down the problem into smaller steps, explaining each calculation in detail. Verify each step and re-check your calculations for accuracy. Use proper mathematical notation and maintain consistency with the context of the question. Always conclude with the final answer in the following format: 'Answer: $VALUE' where VALUE is a numerical value. Report issue for preceding element
Results: Across all three tasks, TextGrad improves the performance of the 0-shot prompt significantly. It performs similarly to DSPy [ 
10
https://arxiv.org/html/2406.07496v1#bib.bibx10
] for Word Sorting and GSM8k, and improves over DSPy by 7% for Object Counting. While the 8 demonstrations in the context can help guide the behavior of the LLM, it can increase the cost of inference. Interestingly, the DSPy optimizer and TextGrad make complementary adjustments—the former adds in-context demonstration examples and latter optimizes the system prompt. Adding the examples selected by DSPy to TextGrad's optimized prompt could further improve performance (for GSM8k, directly combining the demonstrations from DSPy with the instruction from TextGrad increases the accuracy to 82.1%), suggesting that a fruitful direction is to combine both approaches.
Report issue for preceding element
 
Figure 2: Molecule optimization via Text. TextGrad optimizes a starting benzene fragment to improve its druglikeness (higher QED) and binding affinity (lower vina score) to the protein receptor PPARA. The textual gradients for the first three iterations are shown in ( a), and the performance of all ten iterations compared to clinically approved molecules targetting PPARA in ( c). The molecule at the final iteration has low structural similarity with its most similar clinically approved counterpart, and better QED and Vina scores (d) with a highly plausible pose geometry shown in (e). Across 29 targets and three initial fragments, TextGrad successfully designs molecules with similar vina scores and greater QED scores than clinically approved molecules (b). Report issue for preceding element
3.4 Molecule optimization
Report issue for preceding element
TextGrad supports a variety of optimization problems, including multi-objective optimization tasks commonly found in science and engineering applications. For example, in drug discovery, researchers seek to discover or design molecules that maximize a variety of objectives with regards to synthesizability, efficacy, and safety [ 
53
https://arxiv.org/html/2406.07496v1#bib.bibx53
, 
54
https://arxiv.org/html/2406.07496v1#bib.bibx54
] . To demonstrate TextGrad's applications to multi-objective optimization, we apply TextGrad to drug molecule optimization, and show how our framework can interface with computational tools and optimize chemical structures towards simultaneously improving their binding affinity and druglikeness.
Report issue for preceding element
Task: A critical consideration for potential drug molecules is their binding affinity, which represents the strength of the interactions between the molecule and its protein target. Drug designers seek molecules with high binding affinities to relevant drug targets, as they require lower and less frequent doses to achieve efficacy. This affinity can be quantified by free energy Δ  G \Delta G , which describes the ratio of probabilities between bound and unbound ligand-receptor pairs. Δ  G \Delta G can be estimated using “docking” simulations of protein-ligand binding [ 
55
https://arxiv.org/html/2406.07496v1#bib.bibx55
, 
56
https://arxiv.org/html/2406.07496v1#bib.bibx56
] . In our experiments, we employ the Vina score from the Autodock Vina tool, a widely used physics-based docking simulator [ 
57
https://arxiv.org/html/2406.07496v1#bib.bibx57
] . The more negative the Vina score, the greater probability that the drug will bind to its intended target.
Report issue for preceding element
Potential drug molecules are also evaluated by their druglikeness, which estimates how the molecule will behave in vivo, with respect to solubility, permeability, metabolic stability and transporter effects. Molecules with high druglikeness are more likely to be absorbed by the body and reach their targets [ 
58
https://arxiv.org/html/2406.07496v1#bib.bibx58
] . One popular metric for “druglikeness” is the Quantatiative Estimate of Druglikeness (QED) score, a weighted composite metric of important chemical characteristics such as molecular weight, lipophilicity, polar surface area, among others. The QED score ranges from 0 to 1 1 , where 1 1 indicates high druglikeness [ 
59
https://arxiv.org/html/2406.07496v1#bib.bibx59
] .
Report issue for preceding element
Though there are many more considerations for successful molecules, in our experiments, we restrict our objectives to minimizing the Vina score and maximizing the QED, due to the relative maturity of these two metrics. The competing tradeoffs between these two metrics makes the optimization task realistic and challenging. In particular, docking scores tend to prefer larger molecules with many functional groups that maximize interactions with a binding site [ 
60
https://arxiv.org/html/2406.07496v1#bib.bibx60
, 
55
https://arxiv.org/html/2406.07496v1#bib.bibx55
, 
56
https://arxiv.org/html/2406.07496v1#bib.bibx56
] . In contrast, the druglikeness encourages lighter, simpler molecules that have better absorption properties [ 
59
https://arxiv.org/html/2406.07496v1#bib.bibx59
, 
58
https://arxiv.org/html/2406.07496v1#bib.bibx58
] . Thus, simultaneously optimizing both objectives is non-trivial.
Report issue for preceding element
Methods: We apply TextGrad to drug molecule optimization by encoding molecules as SMILES strings and constructing a multi-objective loss from the Vina and QED scores. Namely, we perform instance optimization over SMILES strings, where the gradients generated by TextGrad with respect to the multi-objective loss are used to update the text representing the molecule.
Report issue for preceding element
Evaluation
= LLM ( ( Affinity ( SMILES i , target ) , Druglikeness ( SMILES i ) ) \displaystyle={\color[rgb]{0.25,0.1,1}\definecolor[named]{pgfstrokecolor}{rgb}{0.25,0.1,1}\pgfsys@color@cmyk@stroke{0.75}{0.90}{0}{0}\pgfsys@color@cmyk@fill{0.75}{0.90}{0}{0}\text{LLM}}((\texttt{Affinity}({\color[rgb]{.132,.545,.132}\definecolor[named]{pgfstrokecolor}{rgb}{.132,.545,.132}\textbf{\text{SMILES}}}
{i},\text{target}),\texttt{Druglikeness}({\color[rgb]{.132,.545,.132}\definecolor[named]{pgfstrokecolor}{rgb}{.132,.545,.132}\textbf{\text{SMILES}}}
{i}))
(17)
SMILES i + 1 \displaystyle{\color[rgb]{.132,.545,.132}\definecolor[named]{pgfstrokecolor}{rgb}{.132,.545,.132}\textbf{\text{SMILES}}}_{i+1}
= TGD.step  ( SMILES i , ∂ Evaluation ∂ SMILES i ) \displaystyle={\color[rgb]{0.25,0.1,1}\definecolor[named]{pgfstrokecolor}{rgb}{0.25,0.1,1}\pgfsys@color@cmyk@stroke{0.75}{0.90}{0}{0}\pgfsys@color@cmyk@fill{0.75}{0.90}{0}{0}\text{TGD.step}}\left({\color[rgb]{.132,.545,.132}\definecolor[named]{pgfstrokecolor}{rgb}{.132,.545,.132}\textbf{\text{SMILES}}}
{i},\frac{\partial\text{Evaluation}}{\partial{\color[rgb]{.132,.545,.132}\definecolor[named]{pgfstrokecolor}{rgb}{.132,.545,.132}\textbf{\text{SMILES}}}
{i}}\right)
(18)
We use gpt-4o as our LLM with the prompt text found in Appendix 
E.2
https://arxiv.org/html/2406.07496v1#A5.SS2
. At each iteration, the current molecule is evaluated by estimating its binding affinity to the target protein using the Vina score from Autodock Vina and using the QED score for druglikeness from RDKit (Appendix 
E.1
https://arxiv.org/html/2406.07496v1#A5.SS1
). Each molecule is initialized as a small chemical fragment from a functional group. We apply TextGrad to all 58 58 targets in the DOCKSTRING molecule evaluation benchmark [ 
61
https://arxiv.org/html/2406.07496v1#bib.bibx61
] . These 58 58 targets consist of clinically relevant proteins sampled from a variety of structural classes, 29 29 of which have clinically approved drugs. For each target, we optimize a starting fragment using TextGrad for 10 10 iterations, for 3 3 unique initial fragments. To evaluate our performance, we compare the characteristics of the molecules generated by TextGrad to clinically approved drugs for the respective protein (Appendix 
E.3
https://arxiv.org/html/2406.07496v1#A5.SS3
).
Report issue for preceding element
Results: For all 58 58 targets, TextGrad consistently generates molecules with improved binding affinity and druglikeness irrespective of the initial starting fragment (Appendix 
E.4
https://arxiv.org/html/2406.07496v1#A5.SS4
). For the 29 29 protein targets with clinically approved drugs, we observe that TextGrad generates molecules with highly competitive affinity and druglikeness when compared to clinical molecules evaluated using the same loss function (Figure 
2
https://arxiv.org/html/2406.07496v1#F2
 (b)). The resulting molecules exhibit unique structures compared to their clinical approved counterparts and existing compounds (Appendix 
E.5
https://arxiv.org/html/2406.07496v1#A5.SS5
), while maintaining similar in silico safety profiles (Appendix 
E.6
https://arxiv.org/html/2406.07496v1#A5.SS6
). While there exist alternative machine learning methods for de novo molecular generation, TextGrad offers two key advantages over its counterparts: Firstly, by combining traditonal chemoinformatics tools with the the general knowledge and reasoning capabilities of LLMs, TextGrad produces competitive results even without a prior training set. Secondly, TextGrad's framework of natural language gradients produce explainable decisions, enabling researchers to understand precisely how and why a molecule's structure was constructed. Together, these two characteristics invoke a promising future for the role of AI agents in scientific discovery.
Report issue for preceding element
 
Figure 3: Radiotherapy treatment plan optimization. Visualization of backpropagated textual gradients adjusting importance weights of planning target volumes (PTVs) and organs at risk (OARs) to balance tumor targeting and protection of OARs. Images in (a) show plan evolution from initialization to iteration 5. TextGrad iteratively improves the mean dose and reduces the dose variance to the PTV, achieving the clinical goal over multiple iterations (b). TextGrad keeps the exposure for the bladder and rectum below clinically allowed maximums (c). TextGrad optimized plans have better dose metrics (mean dose and D 95 D_{95} ) for PTV than clinically optimized plans (d), and lower doses on bladder and rectum, indicating better protection of OARs (e). Report issue for preceding element
3.5 Radiotherapy treatment plan optimization
Report issue for preceding element
Radiation therapy, also known as radiotherapy, is a cancer treatment that uses beams of intense energy, such as X-rays, to kill cancer cells. Before treatment begins, a radiotherapy team, including radiation oncologists and planners, collaborates to design an effective treatment plan. This involves determining the necessary dose of radiotherapy and pinpointing the exact locations that need treatment.
Report issue for preceding element
Radiotherapy treatment planning can be formulated as a two-loop optimization problem. The inner loop, known as inverse planning, includes processes such as influence map optimization and direct aperture optimization [ 
62
https://arxiv.org/html/2406.07496v1#bib.bibx62
] . This optimization problem is typically a constrained one, solved by a numerical optimizer, aiming to minimize a weighted cost function balancing multiple conflicting objectives [ 
63
https://arxiv.org/html/2406.07496v1#bib.bibx63
] . These objectives include delivering the prescribed dose to the planning target volume (PTV), which encompasses the tumor and an additional margin to account for uncertainties in planning or treatment delivery, while protecting critical normal tissues, known as organs at risk (OARs), from receiving unsafe doses.
Report issue for preceding element
The main challenge in treatment planning is translating overall clinical goals into weighted objective functions and dose constraints that yield an acceptable plan [ 
62
https://arxiv.org/html/2406.07496v1#bib.bibx62
] . Human planners often use a trial-and-error approach, iteratively adjusting optimization hyperparameters based on the results of the optimization process until the plans meet clinical requirements [ 
62
https://arxiv.org/html/2406.07496v1#bib.bibx62
] . These hyperparameters include the weights assigned to PTVs, organs, and other tissues in the objective function. This process can be subjective, influenced by the planner's experience and the available time, and involves repeatedly using computationally expensive optimization algorithms over many iterations. This makes the process inefficient, time-consuming, and costly [ 
64
https://arxiv.org/html/2406.07496v1#bib.bibx64
] .
Report issue for preceding element
Method.
Report issue for preceding element
We apply TextGrad to perform the outer loop optimization, i.e. hyperparameter optimization for the inner loop numerical optimizer. Instance optimization is performed with gpt-4o over the hyperparameters represented as a string: θ = \theta= “weight for PTV: [PTV WEIGHT], weight for bladder: [BLADDER WEIGHT], weight for rectum: [RECTUM WEIGHT], weight for femoral heads: [FH WEIGHT], weight for body: [BODY WEIGHT]”. When hyperparameters are provided, we obtain the treatment plan by adopting a numerical optimizer and constructing a loss as the mismatch between the current plan and the clinical objectives. Specifically, to compute the gradient, we first solve the inner optimization loop using a numerical optimizer matRad [ 
65
https://arxiv.org/html/2406.07496v1#bib.bibx65
] to obtain the corresponding treatment plan P  ( θ ) = matRad  ( θ ) P(\theta)=\texttt{matRad}(\theta) . The loss is computed on the treatment plan P P and the clinical goals g g using an LLM with prompts provided in Section 
F.1
https://arxiv.org/html/2406.07496v1#A6.SS1
.
Report issue for preceding element
ℒ = LLM  ( P  ( θ ) , g ) \mathcal{L}=\texttt{LLM}(P(\theta),g)
and the new hyperparameters are obtained by a TextGrad descent step
Report issue for preceding element
θ new = TGD.step  ( θ , ∂ ℒ ∂ θ ) . \theta_{\textrm{new}}={\color[rgb]{0,0,.5}\definecolor[named]{pgfstrokecolor}{rgb}{0,0,.5}\text{TGD.step}}\left(\theta,\frac{\partial\mathcal{L}}{\partial\theta}\right).
To further improve LLM's capability to understand the relationship between hyperparameters θ \theta and the resulting plan P P from matRad, a set of paired plans and their corresponding hyperparameters { ( P i , θ i ) } i = 1 N {(P_{i},\theta_{i})}_{i=1}^{N} is provided as context for LLMs during the TGD.step. Therefore,
Report issue for preceding element
θ new = TGD.step ( θ , ∂ ℒ ∂ θ | { ( P i , θ i ) } i = 1 N ) . \theta_{\textrm{new}}={\color[rgb]{0,0,.5}\definecolor[named]{pgfstrokecolor}{rgb}{0,0,.5}\text{TGD.step}}\left(\theta,\frac{\partial\mathcal{L}}{\partial\theta}\middle|{(P_{i},\theta_{i})}_{i=1}^{N}\right).
Evaluation metrics.
Report issue for preceding element
To evaluate a treatment plan, we adopt several commonly used dose metrics as a plan cannot be evaluated using a single metric. We consider the mean dose delivered to the target/organ volume, as well as D q D_{q} , which denotes the minimum dose received by q q % of the target/organ volume.
Report issue for preceding element
Results.
Report issue for preceding element
The gradients generated by TextGrad provide meaningful guidance to improve the hyperparameters. As illustrated in Figure 
3
https://arxiv.org/html/2406.07496v1#F3
, when there is dose spillage outside the Planning Target Volume (PTV), the gradient suggests an increase in the importance weight for the PTV. This adjustment results in a more uniform and confined dose for the PTV. However, this can lead to insufficient protection of the bladder and rectum as their relative weights are reduced. Therefore, in the following step, the gradients suggest slightly increasing the weights for the bladder and rectum, resulting in better protection for these organs. We compared TextGrad optimized plans with the clinical plans used to treat five prostate cancer patients. In Figure 
3
https://arxiv.org/html/2406.07496v1#F3
 (c), we assess TextGrad's capabilities in achieving clinical goals for the PTV region. TextGrad outperforms the clinical plans across all metrics, achieving a higher mean dose, and a D 95 D_{95} that exactly matches the prescribed dose. In Figure 
3
https://arxiv.org/html/2406.07496v1#F3
 (d), we focus on the sparing of healthy organs. TextGrad-optimized plans achieve lower mean doses for these healthy organs, suggesting better organ sparing than the human-optimized plans. We report the averages across five plans and with standard deviation included in the bracket.
Report issue for preceding element
4 Related work
Report issue for preceding element
One related thread of work investigated the problem of prompt optimization. Practitioners demonstrated that prompt engineering strategies such as intelligently picking few-shot examples and in-context learning, CoT, ensembles can significantly boost performance of LLMs [ 
66
https://arxiv.org/html/2406.07496v1#bib.bibx66
] . To automate this process, white-box methods that leverage numerical gradients were developed to optimize prompts [ 
67
https://arxiv.org/html/2406.07496v1#bib.bibx67
, 
68
https://arxiv.org/html/2406.07496v1#bib.bibx68
, 
69
https://arxiv.org/html/2406.07496v1#bib.bibx69
, 
70
https://arxiv.org/html/2406.07496v1#bib.bibx70
] , however, these methods cannot be used with closed-source models as they require access to model parameters. Various works investigated using LLMs as prompt optimizers [ 
12
https://arxiv.org/html/2406.07496v1#bib.bibx12
, 
71
https://arxiv.org/html/2406.07496v1#bib.bibx71
, 
25
https://arxiv.org/html/2406.07496v1#bib.bibx25
] .
Report issue for preceding element
Under prompt optimization, there are two works closest to our philosophy that have been our inspirations. First, DSPy [ 
10
https://arxiv.org/html/2406.07496v1#bib.bibx10
, 
72
https://arxiv.org/html/2406.07496v1#bib.bibx72
, 
73
https://arxiv.org/html/2406.07496v1#bib.bibx73
] pioneered the idea of viewing complex LLM-based systems as programs with potentially many layers, and proposes ways to build and optimize them in a programmatic fashion. The framework is extensive, with results improving LLM performance in various question answering, reasoning, and prompt optimization tasks. Our work takes a different perspective that backpropagation and its extensions can be a general and powerful framework to optimize the new generation of AI systems, and perform multiple tasks outside of prompt optimization. In particular, we treat not only instructions or demonstrations as variables to optimize, but also the instances we care about themselves — such as molecules, treatment plans, code snippets, and so on. Second, greatly inspiring to us, Prompt Optimization with Textual Gradients (ProTeGi) [ 
25
https://arxiv.org/html/2406.07496v1#bib.bibx25
] defines the Textual Gradients in the context of prompt optimization, where gradients are natural language feedback from LLMs given to the mistakes made during the task. While ProTeGi is built on the textual gradient analogy, we expand this analogy more broadly to automatic differentiation, and going substantially beyond prompt optimization tasks. In particular, both DSPy and ProTeGi focused on prompt optimization, while a significant advance of TextGrad, as demonstrated through our diverse applications, is in instance optimization.
Report issue for preceding element
More generally, there is an emerging line of work built on the high-level idea of using LLMs as critics or optimizers [ 
25
https://arxiv.org/html/2406.07496v1#bib.bibx25
, 
74
https://arxiv.org/html/2406.07496v1#bib.bibx74
, 
26
https://arxiv.org/html/2406.07496v1#bib.bibx26
, 
30
https://arxiv.org/html/2406.07496v1#bib.bibx30
, 
75
https://arxiv.org/html/2406.07496v1#bib.bibx75
, 
10
https://arxiv.org/html/2406.07496v1#bib.bibx10
, 
76
https://arxiv.org/html/2406.07496v1#bib.bibx76
, 
71
https://arxiv.org/html/2406.07496v1#bib.bibx71
, 
77
https://arxiv.org/html/2406.07496v1#bib.bibx77
, 
12
https://arxiv.org/html/2406.07496v1#bib.bibx12
, 
78
https://arxiv.org/html/2406.07496v1#bib.bibx78
, 
79
https://arxiv.org/html/2406.07496v1#bib.bibx79
, 
80
https://arxiv.org/html/2406.07496v1#bib.bibx80
] . While many of these earlier frameworks demonstrated the utility of LLMs as optimizers, we propose a single and general framework that was tested successfully in a variety of applications. Within this framework, we can reason about optimizing chains or stacks of LLMs [ 
81
https://arxiv.org/html/2406.07496v1#bib.bibx81
, 
82
https://arxiv.org/html/2406.07496v1#bib.bibx82
, 
83
https://arxiv.org/html/2406.07496v1#bib.bibx83
] : we propagate natural language feedback. Similarly, once viewed as a general-purpose optimization engine, we can formulate many relevant problems instantiated as a few lines of code in our framework, such as test-time training [ 
43
https://arxiv.org/html/2406.07496v1#bib.bibx43
, 
42
https://arxiv.org/html/2406.07496v1#bib.bibx42
] or self-refinement of solutions and self-improvement [ 
30
https://arxiv.org/html/2406.07496v1#bib.bibx30
, 
84
https://arxiv.org/html/2406.07496v1#bib.bibx84
, 
26
https://arxiv.org/html/2406.07496v1#bib.bibx26
, 
85
https://arxiv.org/html/2406.07496v1#bib.bibx85
, 
44
https://arxiv.org/html/2406.07496v1#bib.bibx44
, 
86
https://arxiv.org/html/2406.07496v1#bib.bibx86
, 
87
https://arxiv.org/html/2406.07496v1#bib.bibx87
, 
88
https://arxiv.org/html/2406.07496v1#bib.bibx88
, 
89
https://arxiv.org/html/2406.07496v1#bib.bibx89
, 
90
https://arxiv.org/html/2406.07496v1#bib.bibx90
, 
91
https://arxiv.org/html/2406.07496v1#bib.bibx91
] . Building on the optimization analogy, we already transferred several analogies from the traditional optimization literature such as momentum [ 
40
https://arxiv.org/html/2406.07496v1#bib.bibx40
] through using earlier iterations in the context, use of batch optimization [ 
92
https://arxiv.org/html/2406.07496v1#bib.bibx92
] , constrained optimization [ 
35
https://arxiv.org/html/2406.07496v1#bib.bibx35
] using natural language constraints, and so on. Our work opens up a large space to design the new generation of optimization algorithms, all within the same framework.
Report issue for preceding element
5 Discussion
Report issue for preceding element
TextGrad is built on three key principles: i) It is a general and performant framework that is not hand-crafted for a specific application domain, ii) It is easy-to-use, mirroring PyTorch abstractions thus allowing knowledge transfer, iii) It is fully open-source. Through TextGrad, we obtained state-of-the-art results in code optimization and PhD-level question answering, optimized prompts, and provided proof-of-concept results in scientific applications such as developing molecules and optimizing treatment plans.
Report issue for preceding element
While we took a first step, there are various limitations that motivate future work to realize the potential of automatic differentiation frameworks powered by LLMs. First, while we demonstrated the potential of backpropagating text feedback, there are many applications our framework can be extended to. We hope TextGrad can be used to accelerate iterative processes in scientific discovery and increase the productivity of engineering efforts. For instance, to allow for this, we hope to extend the operations in our computation graphs to include more components used in practical LLM applications, such as for tool use [ 
83
https://arxiv.org/html/2406.07496v1#bib.bibx83
] or retrieval-augmented generation systems [ 
93
https://arxiv.org/html/2406.07496v1#bib.bibx93
] . Second, the automatic differentiation analogy enables a large design space for algorithms. We believe there are many fruitful connections to be drawn between numerical optimization, automatic differentiation, and TextGrad. In particular, increasing the stability of the optimization using variance reduction techniques [ 
94
https://arxiv.org/html/2406.07496v1#bib.bibx94
] , adaptive gradients [ 
95
https://arxiv.org/html/2406.07496v1#bib.bibx95
] , or self-verification using LLMs [ 
96
https://arxiv.org/html/2406.07496v1#bib.bibx96
] are interesting connections. Meta learning approaches [ 
97
https://arxiv.org/html/2406.07496v1#bib.bibx97
, 
98
https://arxiv.org/html/2406.07496v1#bib.bibx98
, 
99
https://arxiv.org/html/2406.07496v1#bib.bibx99
] to optimize the TextGrad framework using methods such as TextGrad itself is also an intriguing direction of future work.
Report issue for preceding element
Finally, while we conducted proof-of-concept applications of TextGrad to design new molecules and treatment plans with in silico validations, the ultimate test requires experimental and clinical assessments, which are outside of the scope of this paper.
Report issue for preceding element
As the paradigm of AI shifts from training individual models to optimizing compound systems involving multiple interacting LLM components and tools, we need a new generation of automated optimizers. TextGrad combines the reasoning power of LLMs with the decomposable efficiency of backpropation to create a general framework to optimize AI systems.
Report issue for preceding element
Acknowledgements
Report issue for preceding element
We would like to thank Duygu Yilmaz, Begum Ergun, Fatih Dinc, Yu Sun, Omar Khattab, Ian Covert, Kyle Swanson, Omer Faruk Akgun, Yusuf Efe, Kevin Y Wu, Eric Wu, Kailas Vodrahalli, Oscar Pastor Serrano, Patrick John Chia, Jacopo Tagliabue, Nitya Thakkar, Elana Simon, Pan Lu, Sabri Eyuboglu, Irena Gao, Lingjiao Chen, and members of the Zou Group for their support and comments on this work.
Report issue for preceding element
References
Report issue for preceding element
[1] ↑ Tom Brown, Benjamin Mann, Nick Ryder, Melanie Subbiah, Jared D Kaplan, Prafulla Dhariwal, Arvind Neelakantan, Pranav Shyam, Girish Sastry and Amanda Askell “Language models are few-shot learners” In 
Advances in neural information processing systems
 33, 2020, pp. 1877–1901
[2] ↑ Josh Achiam, Steven Adler, Sandhini Agarwal, Lama Ahmad, Ilge Akkaya, Florencia Leoni Aleman, Diogo Almeida, Janko Altenschmidt, Sam Altman and Shyamal Anadkat “Gpt-4 technical report” In 
arXiv preprint arXiv:2303.08774
, 2023
[3] ↑ Machel Reid, Nikolay Savinov, Denis Teplyashin, Dmitry Lepikhin, Timothy Lillicrap, Jean-baptiste Alayrac, Radu Soricut, Angeliki Lazaridou, Orhan Firat and Julian Schrittwieser “Gemini 1.5: Unlocking multimodal understanding across millions of tokens of context” In 
arXiv preprint arXiv:2403.05530
, 2024
[4] ↑ AI@Meta “Llama 3 Model Card”, 2024 URL: 
https://github.com/meta-llama/llama3/blob/main/MODEL_CARD.md
https://github.com/meta-llama/llama3/blob/main/MODEL_CARD.md
[5] ↑ AI Anthropic “The Claude 3 Model Family: Opus, Sonnet, Haiku” In 
Claude-3 Model Card
, 2024
[6] ↑ Rishi Bommasani, Drew A Hudson, Ehsan Adeli, Russ Altman, Simran Arora, Sydney Arx, Michael S Bernstein, Jeannette Bohg, Antoine Bosselut and Emma Brunskill “On the opportunities and risks of foundation models” In 
arXiv preprint arXiv:2108.07258
, 2021
[7] ↑ Trieu H Trinh, Yuhuai Wu, Quoc V Le, He He and Thang Luong “Solving olympiad geometry without human demonstrations” In 
Nature
 625.7995 Nature Publishing Group, 2024, pp. 476–482
[8] ↑ Yujia Li, David Choi, Junyoung Chung, Nate Kushman, Julian Schrittwieser, Rémi Leblond, Tom Eccles, James Keeling, Felix Gimeno and Agustin Dal Lago “Competition-level code generation with alphacode” In 
Science
 378.6624 American Association for the Advancement of Science, 2022, pp. 1092–1097
[9] ↑ John Yang, Carlos E. Jimenez, Alexander Wettig, Kilian Lieret, Shunyu Yao, Karthik Narasimhan and Ofir Press “SWE-agent: Agent-Computer Interfaces Enable Automated Software Engineering”, 2024
[10] ↑ Omar Khattab, Arnav Singhvi, Paridhi Maheshwari, Zhiyuan Zhang, Keshav Santhanam, Sri Vardhamanan A, Saiful Haq, Ashutosh Sharma, Thomas T. Joshi, Hanna Moazam, Heather Miller, Matei Zaharia and Christopher Potts “DSPy: Compiling Declarative Language Model Calls into State-of-the-Art Pipelines” In 
The Twelfth International Conference on Learning Representations
, 2024 URL: 
https://openreview.net/forum?id=sY5N0zY5Od
https://openreview.net/forum?id=sY5N0zY5Od
[11] ↑ Matei Zaharia, Omar Khattab, Lingjiao Chen, Jared Quincy Davis, Heather Miller, Chris Potts, James Zou, Michael Carbin, Jonathan Frankle, Naveen Rao and Ali Ghodsi “The Shift from Models to Compound AI Systems”, 
https://bair.berkeley.edu/blog/2024/02/18/compound-ai-systems/
https://bair.berkeley.edu/blog/2024/02/18/compound-ai-systems/
, 2024
[12] ↑ Yongchao Zhou, Andrei Ioan Muresanu, Ziwen Han, Keiran Paster, Silviu Pitis, Harris Chan and Jimmy Ba “Large Language Models are Human-Level Prompt Engineers” In 
The Eleventh International Conference on Learning Representations
, 2023 URL: 
https://openreview.net/forum?id=92gvk82DE-
https://openreview.net/forum?id=92gvk82DE-
[13] ↑ Alex Krizhevsky, Ilya Sutskever and Geoffrey E Hinton “Imagenet classification with deep convolutional neural networks” In 
Advances in neural information processing systems
 25, 2012
[14] ↑ John Jumper, Richard Evans, Alexander Pritzel, Tim Green, Michael Figurnov, Olaf Ronneberger, Kathryn Tunyasuvunakool, Russ Bates, Augustin Žídek and Anna Potapenko “Highly accurate protein structure prediction with AlphaFold” In 
Nature
 596.7873 Nature Publishing Group, 2021, pp. 583–589
[15] ↑ Alhussein Fawzi, Matej Balog, Aja Huang, Thomas Hubert, Bernardino Romera-Paredes, Mohammadamin Barekatain, Alexander Novikov, Francisco J R Ruiz, Julian Schrittwieser and Grzegorz Swirszcz “Discovering faster matrix multiplication algorithms with reinforcement learning” In 
Nature
 610.7930 Nature Publishing Group, 2022, pp. 47–53
[16] ↑ Daniel J Mankowitz, Andrea Michi, Anton Zhernov, Marco Gelmi, Marco Selvi, Cosmin Paduraru, Edouard Leurent, Shariq Iqbal, Jean-Baptiste Lespiau and Alex Ahern “Faster sorting algorithms discovered using deep reinforcement learning” In 
Nature
 618.7964 Nature Publishing Group UK London, 2023, pp. 257–263
[17] ↑ Amil Merchant, Simon Batzner, Samuel S Schoenholz, Muratahan Aykol, Gowoon Cheon and Ekin Dogus Cubuk “Scaling deep learning for materials discovery” In 
Nature
 624.7990 Nature Publishing Group UK London, 2023, pp. 80–85
[18] ↑ Ian Goodfellow, Yoshua Bengio and Aaron Courville “Deep learning” MIT press, 2016
[19] ↑ David E Rumelhart, Geoffrey E Hinton and Ronald J Williams “Learning representations by back-propagating errors” In 
Nature
 323.6088 Nature Publishing Group UK London, 1986, pp. 533–536
[20] ↑ Yangqing Jia, Evan Shelhamer, Jeff Donahue, Sergey Karayev, Jonathan Long, Ross Girshick, Sergio Guadarrama and Trevor Darrell “Caffe: Convolutional Architecture for Fast Feature Embedding” In 
arXiv preprint arXiv:1408.5093
, 2014
[21] ↑ James Bergstra, Olivier Breuleux, Frédéric Bastien, Pascal Lamblin, Razvan Pascanu, Guillaume Desjardins, Joseph Turian, David Warde-Farley and Yoshua Bengio “Theano: A CPU and GPU Math Expression Compiler” In 
Proceedings of the Python for Scientific Computing Conference (SciPy)
, 2010
[22] ↑ Martín Abadi, Paul Barham, Jianmin Chen, Zhifeng Chen, Andy Davis, Jeffrey Dean, Matthieu Devin, Sanjay Ghemawat, Geoffrey Irving and Michael Isard “TensorFlow: A System for Large-Scale Machine Learning” In 
12th USENIX Symposium on Operating Systems Design and Implementation (OSDI 16)
, 2016, pp. 265–283
[23] ↑ Adam Paszke, Sam Gross, Francisco Massa, Adam Lerer, James Bradbury, Gregory Chanan, Trevor Killeen, Zeming Lin, Natalia Gimelshein and Luca Antiga “Pytorch: An imperative style, high-performance deep learning library” In 
Advances in neural information processing systems
 32, 2019
[24] ↑ Ronan Collobert, Samy Bengio and Johnny Mariéthoz “Torch: a modular machine learning software library” Idiap, 2002
[25] ↑ Reid Pryzant, Dan Iter, Jerry Li, Yin Lee, Chenguang Zhu and Michael Zeng “Automatic Prompt Optimization with “Gradient Descent” and Beam Search” In 
Proceedings of the 2023 Conference on Empirical Methods in Natural Language Processing
 Singapore: Association for Computational Linguistics, 2023, pp. 7957–7968 DOI: 
10.18653/v1/2023.emnlp-main.494
https://dx.doi.org/10.18653/v1/2023.emnlp-main.494
[26] ↑ Noah Shinn, Federico Cassano, Ashwin Gopinath, Karthik Narasimhan and Shunyu Yao “Reflexion: language agents with verbal reinforcement learning” In 
Advances in Neural Information Processing Systems
 36, 2023 URL: 
https://proceedings.neurips.cc/paper_files/paper/2023/file/1b44b878bb782e6954cd888628510e90-Paper-Conference.pdf
https://proceedings.neurips.cc/paper_files/paper/2023/file/1b44b878bb782e6954cd888628510e90-Paper-Conference.pdf
[27] ↑ David Rein, Betty Li Hou, Asa Cooper Stickland, Jackson Petty, Richard Yuanzhe Pang, Julien Dirani, Julian Michael and Samuel R Bowman “Gpqa: A graduate-level google-proof q&a benchmark” In 
arXiv preprint arXiv:2311.12022
, 2023
[28] ↑ Xuechen Li, Tianyi Zhang, Yann Dubois, Rohan Taori, Ishaan Gulrajani, Carlos Guestrin, Percy Liang and Tatsunori B Hashimoto “Alpacaeval: An automatic evaluator of instruction-following models”, 2023
[29] ↑ Yuntao Bai, Andy Jones, Kamal Ndousse, Amanda Askell, Anna Chen, Nova DasSarma, Dawn Drain, Stanislav Fort, Deep Ganguli and Tom Henighan “Training a helpful and harmless assistant with reinforcement learning from human feedback” In 
arXiv preprint arXiv:2204.05862
, 2022
[30] ↑ Aman Madaan, Niket Tandon, Prakhar Gupta, Skyler Hallinan, Luyu Gao, Sarah Wiegreffe, Uri Alon, Nouha Dziri, Shrimai Prabhumoye and Yiming Yang “Self-refine: Iterative refinement with self-feedback” In 
Advances in Neural Information Processing Systems
 36, 2024
[31] ↑ Nisan Stiennon, Long Ouyang, Jeffrey Wu, Daniel Ziegler, Ryan Lowe, Chelsea Voss, Alec Radford, Dario Amodei and Paul F Christiano “Learning to summarize with human feedback” In 
Advances in Neural Information Processing Systems
 33, 2020, pp. 3008–3021
[32] ↑ Weizhe Yuan, Richard Yuanzhe Pang, Kyunghyun Cho, Sainbayar Sukhbaatar, Jing Xu and Jason Weston “Self-rewarding language models” In 
arXiv preprint arXiv:2401.10020
, 2024
[33] ↑ Yann Dubois, Chen Xuechen Li, Rohan Taori, Tianyi Zhang, Ishaan Gulrajani, Jimmy Ba, Carlos Guestrin, Percy S Liang and Tatsunori B Hashimoto “Alpacafarm: A simulation framework for methods that learn from human feedback” In 
Advances in Neural Information Processing Systems
 36, 2024
[34] ↑ Léon Bottou “Large-scale machine learning with stochastic gradient descent” In 
Proceedings of COMPSTAT'2010
 Springer, 2010, pp. 177–186
[35] ↑ Stephen Boyd, Stephen P Boyd and Lieven Vandenberghe “Convex optimization” Cambridge university press, 2004
[36] ↑ Long Ouyang, Jeffrey Wu, Xu Jiang, Diogo Almeida, Carroll Wainwright, Pamela Mishkin, Chong Zhang, Sandhini Agarwal, Katarina Slama and Alex Ray “Training language models to follow instructions with human feedback” In 
Advances in neural information processing systems
 35, 2022, pp. 27730–27744
[37] ↑ Jason Wei, Maarten Bosma, Vincent Zhao, Kelvin Guu, Adams Wei Yu, Brian Lester, Nan Du, Andrew M. Dai and Quoc V Le “Finetuned Language Models are Zero-Shot Learners” In 
International Conference on Learning Representations
, 2022 URL: 
https://openreview.net/forum?id=gEZrGCozdqR
https://openreview.net/forum?id=gEZrGCozdqR
[38] ↑ Mert Yuksekgonul, Varun Chandrasekaran, Erik Jones, Suriya Gunasekar, Ranjita Naik, Hamid Palangi, Ece Kamar and Besmira Nushi “Attention Satisfies: A Constraint-Satisfaction Lens on Factual Errors of Language Models” In 
The Twelfth International Conference on Learning Representations
, 2024 URL: 
https://openreview.net/forum?id=gfFVATffPd
https://openreview.net/forum?id=gfFVATffPd
[39] ↑ Marah I Abdin, Suriya Gunasekar, Varun Chandrasekaran, Jerry Li, Mert Yuksekgonul, Rahee Ghosh Peshawaria, Ranjita Naik and Besmira Nushi “KITAB: Evaluating LLMs on Constraint Satisfaction for Information Retrieval” In 
The Twelfth International Conference on Learning Representations
, 2024 URL: 
https://openreview.net/forum?id=b3kDP3IytM
https://openreview.net/forum?id=b3kDP3IytM
[40] ↑ Boris T Polyak “Some methods of speeding up the convergence of iteration methods” In 
USSR Computational Mathematics and Mathematical Physics
 4.5 Elsevier, 1964, pp. 1–17
[41] ↑ Ilya Sutskever, James Martens, George Dahl and Geoffrey Hinton “On the importance of initialization and momentum in deep learning” In 
International conference on machine learning
, 2013, pp. 1139–1147 PMLR
[42] ↑ Yu Sun, Xiaolong Wang, Zhuang Liu, John Miller, Alexei Efros and Moritz Hardt “Test-Time Training with Self-Supervision for Generalization under Distribution Shifts” In 
Proceedings of the 37th International Conference on Machine Learning
, Proceedings of Machine Learning Research PMLR, 2020 URL: 
https://proceedings.mlr.press/v119/sun20b.html
https://proceedings.mlr.press/v119/sun20b.html
[43] ↑ Yu Sun, Xinhao Li, Karan Dalal, Chloe Hsu, Sanmi Koyejo, Carlos Guestrin, Xiaolong Wang, Tatsunori Hashimoto and Xinlei Chen “Learning to (learn at test time)” In 
arXiv preprint arXiv:2310.13807
, 2023
[44] ↑ Shunyu Yao, Jeffrey Zhao, Dian Yu, Nan Du, Izhak Shafran, Karthik R Narasimhan and Yuan Cao “ReAct: Synergizing Reasoning and Acting in Language Models” In 
The Eleventh International Conference on Learning Representations
, 2023 URL: 
https://openreview.net/forum?id=WE_vluYUL-X
https://openreview.net/forum?id=WE_vluYUL-X
[45] ↑ Dan Hendrycks, Collin Burns, Steven Basart, Andy Zou, Mantas Mazeika, Dawn Song and Jacob Steinhardt “Measuring Massive Multitask Language Understanding” In 
International Conference on Learning Representations
, 2021 URL: 
https://openreview.net/forum?id=d7KBjmI3GmQ
https://openreview.net/forum?id=d7KBjmI3GmQ
[46] ↑ Takeshi Kojima, Shixiang Shane Gu, Machel Reid, Yutaka Matsuo and Yusuke Iwasawa “Large language models are zero-shot reasoners” In 
Advances in neural information processing systems
 35, 2022, pp. 22199–22213
[47] ↑ Jason Wei, Xuezhi Wang, Dale Schuurmans, Maarten Bosma, Fei Xia, Ed Chi, Quoc V Le and Denny Zhou “Chain-of-thought prompting elicits reasoning in large language models” In 
Advances in neural information processing systems
 35, 2022, pp. 24824–24837
[48] ↑ OpenAI “Hello GPT-4o” Accessed: 2024-05-18, 2024 URL: 
https://openai.com/index/hello-gpt-4o/
https://openai.com/index/hello-gpt-4o/
[49] ↑ Pengfei Liu, Weizhe Yuan, Jinlan Fu, Zhengbao Jiang, Hiroaki Hayashi and Graham Neubig “Pre-train, prompt, and predict: A systematic survey of prompting methods in natural language processing” In 
ACM Computing Surveys
 55.9 ACM New York, NY, 2023, pp. 1–35
[50] ↑ Mirac Suzgun, Nathan Scales, Nathanael Schärli, Sebastian Gehrmann, Yi Tay, Hyung Won Chung, Aakanksha Chowdhery, Quoc Le, Ed Chi, Denny Zhou and Jason Wei “Challenging BIG-Bench Tasks and Whether Chain-of-Thought Can Solve Them” In 
Findings of the Association for Computational Linguistics: ACL 2023
 Toronto, Canada: Association for Computational Linguistics, 2023 URL: 
https://aclanthology.org/2023.findings-acl.824
https://aclanthology.org/2023.findings-acl.824
[51] ↑ Aarohi Srivastava et al. “Beyond the Imitation Game: Quantifying and extrapolating the capabilities of language models” In 
Transactions on Machine Learning Research
, 2023 URL: 
https://openreview.net/forum?id=uyTL5Bvosj
https://openreview.net/forum?id=uyTL5Bvosj
[52] ↑ Karl Cobbe, Vineet Kosaraju, Mohammad Bavarian, Mark Chen, Heewoo Jun, Lukasz Kaiser, Matthias Plappert, Jerry Tworek, Jacob Hilton, Reiichiro Nakano, Christopher Hesse and John Schulman “Training Verifiers to Solve Math Word Problems” In 
arXiv preprint arXiv:2110.14168
, 2021
[53] ↑ Christos A Nicolaou and Nathan Brown “Multi-objective optimization methods in drug design” In 
Drug Discovery Today: Technologies
 10.3 Elsevier, 2013, pp. e427–e435
[54] ↑ Swen Hoelder, Paul A Clarke and Paul Workman “Discovery of small molecule cancer drugs: successes, challenges and opportunities” In 
Molecular oncology
 6.2 Elsevier, 2012, pp. 155–176
[55] ↑ Maria Kontoyianni “Docking and virtual screening in drug discovery” In 
Proteomics for drug discovery: Methods and protocols
 Springer, 2017, pp. 255–266
[56] ↑ Shweta Agarwal and RJJC Mehrotra “An overview of molecular docking” In 
JSM chem
 4.2, 2016, pp. 1024–1028
[57] ↑ Oleg Trott and Arthur J Olson “AutoDock Vina: improving the speed and accuracy of docking with a new scoring function, efficient optimization, and multithreading” In 
Journal of computational chemistry
 31.2 Wiley Online Library, 2010, pp. 455–461
[58] ↑ Oleg Ursu, Anwar Rayan, Amiram Goldblum and Tudor I Oprea “Understanding drug-likeness” In 
Wiley Interdisciplinary Reviews: Computational Molecular Science
 1.5 Wiley Online Library, 2011, pp. 760–781
[59] ↑ G Richard Bickerton, Gaia V Paolini, Jérémy Besnard, Sorel Muresan and Andrew L Hopkins “Quantifying the chemical beauty of drugs” In 
Nature chemistry
 4.2 Nature Publishing Group, 2012, pp. 90–98
[60] ↑ Brian J Bender, Stefan Gahbauer, Andreas Luttens, Jiankun Lyu, Chase M Webb, Reed M Stein, Elissa A Fink, Trent E Balius, Jens Carlsson and John J Irwin “A practical guide to large-scale docking” In 
Nature protocols
 16.10 Nature Publishing Group UK London, 2021, pp. 4799–4832
[61] ↑ Miguel García-Ortegón, Gregor NC Simm, Austin J Tripp, José Miguel Hernández-Lobato, Andreas Bender and Sergio Bacallado “DOCKSTRING: easy molecular docking yields better benchmarks for ligand design” In 
Journal of chemical information and modeling
 62.15 ACS Publications, 2022, pp. 3486–3502
[62] ↑ Faiz M Khan, Paul W Sperduto and John P Gibbons “Khan's Treatment Planning in Radiation Oncology:.” Lippincott Williams & Wilkins, 2021
[63] ↑ Steve Webb “The physical basis of IMRT and inverse planning” In 
The British journal of radiology
 76.910 British Institute of Radiology, 2003, pp. 678–689
[64] ↑ Mohammad Hussein, Ben J M Heijmen, Dirk Verellen and Andrew Nisbet “Automation in Intensity Modulated Radiotherapy Treatment Planning—a Review of Recent Innovations” In 
British Journal of Radiology
 91.1092, 2018, pp. 20180270 DOI: 
10.1259/bjr.20180270
https://dx.doi.org/10.1259/bjr.20180270
[65] ↑ Hans-Peter Wieser, Eduardo Cisternas, Niklas Wahl, Silke Ulrich, Alexander Stadler, Henning Mescher, Lucas-Raphael Müller, Thomas Klinge, Hubert Gabrys and Lucas Burigo “Development of the open-source dose calculation and optimization toolkit matRad” In 
Medical Physics
 44.6 Wiley Online Library, 2017, pp. 2556–2568 DOI: 
10.1002/mp.12251
https://dx.doi.org/10.1002/mp.12251
[66] ↑ Harsha Nori, Yin Tat Lee, Sheng Zhang, Dean Carignan, Richard Edgar, Nicolo Fusi, Nicholas King, Jonathan Larson, Yuanzhi Li and Weishung Liu “Can generalist foundation models outcompete special-purpose tuning? case study in medicine” In 
arXiv preprint arXiv:2311.16452
, 2023
[67] ↑ Taylor Shin, Yasaman Razeghi, Robert L. Logan IV, Eric Wallace and Sameer Singh “AutoPrompt: Eliciting Knowledge from Language Models with Automatically Generated Prompts” In 
Proceedings of the 2020 Conference on Empirical Methods in Natural Language Processing (EMNLP)
 Online: Association for Computational Linguistics, 2020, pp. 4222–4235 DOI: 
10.18653/v1/2020.emnlp-main.346
https://dx.doi.org/10.18653/v1/2020.emnlp-main.346
[68] ↑ Menglin Jia, Luming Tang, Bor-Chun Chen, Claire Cardie, Serge Belongie, Bharath Hariharan and Ser-Nam Lim “Visual prompt tuning” In 
European Conference on Computer Vision
, 2022, pp. 709–727 Springer
[69] ↑ Xiang Lisa Li and Percy Liang “Prefix-Tuning: Optimizing Continuous Prompts for Generation” In 
Proceedings of the 59th Annual Meeting of the Association for Computational Linguistics and the 11th International Joint Conference on Natural Language Processing (Volume 1: Long Papers)
 Online: Association for Computational Linguistics, 2021, pp. 4582–4597 DOI: 
10.18653/v1/2021.acl-long.353
https://dx.doi.org/10.18653/v1/2021.acl-long.353
[70] ↑ Xiang Chen, Ningyu Zhang, Xin Xie, Shumin Deng, Yunzhi Yao, Chuanqi Tan, Fei Huang, Luo Si and Huajun Chen “Knowprompt: Knowledge-aware prompt-tuning with synergistic optimization for relation extraction” In 
Proceedings of the ACM Web conference 2022
, 2022, pp. 2778–2788
[71] ↑ Qinyuan Ye, Maxamed Axmed, Reid Pryzant and Fereshte Khani “Prompt engineering a prompt engineer” In 
arXiv preprint arXiv:2311.05661
, 2023
[72] ↑ Omar Khattab, Keshav Santhanam, Xiang Lisa Li, David Hall, Percy Liang, Christopher Potts and Matei Zaharia “Demonstrate-Search-Predict: Composing Retrieval and Language Models for Knowledge-Intensive NLP” In 
arXiv preprint arXiv:2212.14024
, 2022
[73] ↑ Arnav Singhvi, Manish Shetty, Shangyin Tan, Christopher Potts, Koushik Sen, Matei Zaharia and Omar Khattab “DSPy Assertions: Computational Constraints for Self-Refining Language Model Pipelines” In 
arXiv preprint arXiv:2312.13382
, 2023
[74] ↑ Chengrun Yang, Xuezhi Wang, Yifeng Lu, Hanxiao Liu, Quoc V Le, Denny Zhou and Xinyun Chen “Large Language Models as Optimizers” In 
The Twelfth International Conference on Learning Representations
, 2024 URL: 
https://openreview.net/forum?id=Bb4VGOWELI
https://openreview.net/forum?id=Bb4VGOWELI
[75] ↑ Xingyou Song, Yingtao Tian, Robert Tjarko Lange, Chansoo Lee, Yujin Tang and Yutian Chen “Position: Leverage Foundational Models for Black-Box Optimization”, 2024 arXiv: 
2405.03547 [cs.LG]
https://arxiv.org/abs/2405.03547
[76] ↑ Tennison Liu, Nicolás Astorga, Nabeel Seedat and Mihaela Schaar “Large Language Models to Enhance Bayesian Optimization” In 
The Twelfth International Conference on Learning Representations
, 2024 URL: 
https://openreview.net/forum?id=OOxotBmGol
https://openreview.net/forum?id=OOxotBmGol
[77] ↑ Ruocheng Wang, Eric Zelikman, Gabriel Poesia, Yewen Pu, Nick Haber and Noah Goodman “Hypothesis Search: Inductive Reasoning with Language Models” In 
The Twelfth International Conference on Learning Representations
, 2024 URL: 
https://openreview.net/forum?id=G7UtIGQmjm
https://openreview.net/forum?id=G7UtIGQmjm
[78] ↑ Luyu Gao, Zhuyun Dai, Panupong Pasupat, Anthony Chen, Arun Tejasvi Chaganty, Yicheng Fan, Vincent Zhao, Ni Lao, Hongrae Lee, Da-Cheng Juan and Kelvin Guu “RARR: Researching and Revising What Language Models Say, Using Language Models” In 
Proceedings of the 61st Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers)
 Toronto, Canada: Association for Computational Linguistics, 2023, pp. 16477–16508 DOI: 
10.18653/v1/2023.acl-long.910
https://dx.doi.org/10.18653/v1/2023.acl-long.910
[79] ↑ Xinyun Chen, Maxwell Lin, Nathanael Schärli and Denny Zhou “Teaching Large Language Models to Self-Debug” In 
The Twelfth International Conference on Learning Representations
, 2024 URL: 
https://openreview.net/forum?id=KuPixIqPiq
https://openreview.net/forum?id=KuPixIqPiq
[80] ↑ Alexander G Shypula, Aman Madaan, Yimeng Zeng, Uri Alon, Jacob R. Gardner, Yiming Yang, Milad Hashemi, Graham Neubig, Parthasarathy Ranganathan, Osbert Bastani and Amir Yazdanbakhsh “Learning Performance-Improving Code Edits” In 
The Twelfth International Conference on Learning Representations
, 2024 URL: 
https://openreview.net/forum?id=ix7rLVHXyY
https://openreview.net/forum?id=ix7rLVHXyY
[81] ↑ Harrison Chase “LangChain”, 2022 URL: 
https://github.com/langchain-ai/langchain
https://github.com/langchain-ai/langchain
[82] ↑ Jerry Liu “LlamaIndex”, 
https://github.com/jerryjliu/llamaindex
https://github.com/jerryjliu/llamaindex
, 2022
[83] ↑ Timo Schick, Jane Dwivedi-Yu, Roberto Dessì, Roberta Raileanu, Maria Lomeli, Eric Hambro, Luke Zettlemoyer, Nicola Cancedda and Thomas Scialom “Toolformer: Language models can teach themselves to use tools” In 
Advances in Neural Information Processing Systems
 36, 2024
[84] ↑ Ofir Press, Muru Zhang, Sewon Min, Ludwig Schmidt, Noah Smith and Mike Lewis “Measuring and Narrowing the Compositionality Gap in Language Models” In 
Findings of the Association for Computational Linguistics: EMNLP 2023
 Singapore: Association for Computational Linguistics, 2023, pp. 5687–5711 DOI: 
10.18653/v1/2023.findings-emnlp.378
https://dx.doi.org/10.18653/v1/2023.findings-emnlp.378
[85] ↑ Eric Zelikman, Yuhuai Wu, Jesse Mu and Noah Goodman “STaR: Bootstrapping Reasoning With Reasoning” In 
Advances in Neural Information Processing Systems
 35 Curran Associates, Inc., 2022, pp. 15476–15488 URL: 
https://proceedings.neurips.cc/paper_files/paper/2022/file/639a9a172c044fbb64175b5fad42e9a5-Paper-Conference.pdf
https://proceedings.neurips.cc/paper_files/paper/2022/file/639a9a172c044fbb64175b5fad42e9a5-Paper-Conference.pdf
[86] ↑ Jiaxin Huang, Shixiang Gu, Le Hou, Yuexin Wu, Xuezhi Wang, Hongkun Yu and Jiawei Han “Large Language Models Can Self-Improve” In 
Proceedings of the 2023 Conference on Empirical Methods in Natural Language Processing
 Singapore: Association for Computational Linguistics, 2023 DOI: 
10.18653/v1/2023.emnlp-main.67
https://dx.doi.org/10.18653/v1/2023.emnlp-main.67
[87] ↑ Kevin Yang, Yuandong Tian, Nanyun Peng and Dan Klein “Re3: Generating Longer Stories With Recursive Reprompting and Revision” In 
Proceedings of the 2022 Conference on Empirical Methods in Natural Language Processing
 Association for Computational Linguistics, 2022 DOI: 
10.18653/v1/2022.emnlp-main.296
https://dx.doi.org/10.18653/v1/2022.emnlp-main.296
[88] ↑ Yuxi Xie, Kenji Kawaguchi, Yiran Zhao, Xu Zhao, Min-Yen Kan, Junxian He and Qizhe Xie “Self-Evaluation Guided Beam Search for Reasoning” In 
Thirty-seventh Conference on Neural Information Processing Systems
, 2023 URL: 
https://openreview.net/forum?id=Bw82hwg5Q3
https://openreview.net/forum?id=Bw82hwg5Q3
[89] ↑ Debjit Paul, Mete Ismayilzada, Maxime Peyrard, Beatriz Borges, Antoine Bosselut, Robert West and Boi Faltings “REFINER: Reasoning Feedback on Intermediate Representations” In 
Proceedings of the 18th Conference of the European Chapter of the Association for Computational Linguistics (Volume 1: Long Papers)
 Association for Computational Linguistics, 2024 URL: 
https://aclanthology.org/2024.eacl-long.67
https://aclanthology.org/2024.eacl-long.67
[90] ↑ Andrew Zhao, Daniel Huang, Quentin Xu, Matthieu Lin, Yong-Jin Liu and Gao Huang “Expel: Llm agents are experiential learners” In 
Proceedings of the AAAI Conference on Artificial Intelligence
 38.17, 2024, pp. 19632–19642
[91] ↑ Hung Le, Hailin Chen, Amrita Saha, Akash Gokul, Doyen Sahoo and Shafiq Joty “CodeChain: Towards Modular Code Generation Through Chain of Self-revisions with Representative Sub-modules” In 
The Twelfth International Conference on Learning Representations
, 2024 URL: 
https://openreview.net/forum?id=vYhglxSj8j
https://openreview.net/forum?id=vYhglxSj8j
[92] ↑ Herbert Robbins and Sutton Monro “A stochastic approximation method” In 
The Annals of Mathematical Statistics
 JSTOR, 1951, pp. 400–407
[93] ↑ Patrick Lewis, Ethan Perez, Aleksandra Piktus, Fabio Petroni, Vladimir Karpukhin, Naman Goyal, Heinrich Küttler, Mike Lewis, Wen-tau Yih and Tim Rocktäschel “Retrieval-augmented generation for knowledge-intensive nlp tasks” In 
Advances in Neural Information Processing Systems
 33, 2020, pp. 9459–9474
[94] ↑ Christian P Robert and George Casella “Simulation and the Monte Carlo method” In 
Springer Texts in Statistics, New York: Springer
 2, 1999
[95] ↑ Diederik Kingma and Jimmy Ba “Adam: A Method for Stochastic Optimization” In 
International Conference on Learning Representations (ICLR)
, 2015
[96] ↑ Hunter Lightman, Vineet Kosaraju, Yuri Burda, Harrison Edwards, Bowen Baker, Teddy Lee, Jan Leike, John Schulman, Ilya Sutskever and Karl Cobbe “Let's Verify Step by Step” In 
The Twelfth International Conference on Learning Representations
, 2024 URL: 
https://openreview.net/forum?id=v8L0pN6EOi
https://openreview.net/forum?id=v8L0pN6EOi
[97] ↑ Jürgen Schmidhuber “Evolutionary Principles in Self-Referential Learning”, 1987
[98] ↑ Sebastian Thrun and Lorien Pratt “Learning to Learn: Introduction and Overview” In 
Learning to Learn
 Springer, 1998, pp. 3–17
[99] ↑ Chelsea Finn, Pieter Abbeel and Sergey Levine “Model-Agnostic Meta-Learning for Fast Adaptation of Deep Networks” In 
Proceedings of the 34th International Conference on Machine Learning
, 2017
[100] ↑ “RDKit: Open-source cheminformatics”, 
http://www.rdkit.org
http://www.rdkit.org/
[101] ↑ James P Hughes, Stephen Rees, S Barrett Kalindjian and Karen L Philpott “Principles of early drug discovery” In 
British journal of pharmacology
 162.6 Wiley Online Library, 2011, pp. 1239–1249
[102] ↑ Mark C Wenlock, Rupert P Austin, Patrick Barton, Andrew M Davis and Paul D Leeson “A comparison of physiochemical property profiles of development and marketed oral drugs” In 
Journal of medicinal chemistry
 46.7 ACS Publications, 2003, pp. 1250–1256
[103] ↑ Craig Knox, Mike Wilson, Christen M Klinger, Mark Franklin, Eponine Oler, Alex Wilson, Allison Pon, Jordan Cox, Na Eun Chin and Seth A Strawbridge “Drugbank 6.0: the drugbank knowledgebase for 2024” In 
Nucleic Acids Research
 52.D1 Oxford University Press, 2024, pp. D1265–D1275
[104] ↑ Michael Berry, Burtram Fielding and Junaid Gamieldien “Practical considerations in virtual screening and molecular docking” In 
Emerging trends in computational biology, bioinformatics, and systems biology
 Elsevier, 2015, pp. 487
[105] ↑ Abeba Birhane, Atoosa Kasirzadeh, David Leslie and Sandra Wachter “Science in the age of large language models” In 
Nature Reviews Physics
 5.5 Nature Publishing Group UK London, 2023, pp. 277–280
[106] ↑ Nina Nikolova and Joanna Jaworska “Approaches to measure chemical similarity–a review” In 
QSAR & Combinatorial Science
 22.9-10 Wiley Online Library, 2003, pp. 1006–1026
[107] ↑ Anna Gaulton, Louisa J Bellis, A Patricia Bento, Jon Chambers, Mark Davies, Anne Hersey, Yvonne Light, Shaun McGlinchey, David Michalovich and Bissan Al-Lazikani “ChEMBL: a large-scale bioactivity database for drug discovery” In 
Nucleic acids research
 40.D1 Oxford University Press, 2012, pp. D1100–D1107
[108] ↑ Kyle Swanson, Parker Walther, Jeremy Leitz, Souhrid Mukherjee, Joseph C Wu, Rabindra V Shivnaraine and James Zou “ADMET-AI: A machine learning ADMET platform for evaluation of large-scale chemical libraries” In 
bioRxiv
 Cold Spring Harbor Laboratory, 2023, pp. 2023–12
[109] ↑ L. Xing, J.. Li, S. Donaldson, Q.. Le and A.. Boyer “Optimization of Importance Factors in Inverse Planning” In 
Physics in Medicine & Biology
 44.10, 1999, pp. 2525 DOI: 
10.1088/0031-9155/44/10/311
https://dx.doi.org/10.1088/0031-9155/44/10/311
Appendix A TextGrad Details
Report issue for preceding element
A.1 Variables
Report issue for preceding element
Variable s are the nodes in the computation graph. Below are the most important attributes of Variable s:
Report issue for preceding element
Value is the unstructured data that the variable contains. Throughout this manuscript, all values are text data. Report issue for preceding element
Role description is an informative string that describes the role of the variable in the computation graph. We use these roles to let the user inject knowledge into the graph and guide the optimization behavior. More information is described below. Report issue for preceding element
Gradients are the natural language feedback provided by the LLMs during the backward pass. These describe the changes to make the variable so that the downstream loss can be improved. For an example backward operation that populates gradients, please read Section LABEL:appendix:llm-op. Report issue for preceding element
Predecessors are the set of variables that are used to generate a given variable. For instance, if we are giving an instruction to an LLM and getting a response, the instruction would be the predecessor of the response. During the backward pass, the gradients on the successor are passed to its predecessors, to provide guidance around how to improve the downstream objective. Report issue for preceding element
Requires grad indicates whether or not the gradients will be populated during the backward pass, analogous to PyTorch. For instance, if the user does not wish to compute gradients for a question, then simply write Variable(value=question, requires_grad=False, …) to indicate this. Report issue for preceding element
Role Description: In TextGrad, each variable has a role description. In particular, this is a string that describes the role of the variable in the computation graph, such as system prompt to the language model or prediction by the language model. While sometimes populated automatically, in general role descriptions are one of the primary ways to inject user knowledge into the optimization process.
Report issue for preceding element
Empirically, we find that role descriptions can significantly steer the optimization process. For instance, setting the role of a prediction to be the final numerical answer to the language model guides the Textual Gradient Descent optimizer, that prompts a language model to update the value of the variable using the feedback, to update the variable such that it is only a numerical value. In comparison, a role description such as the reasoning for the solution and the final prediction guides the optimizer to produce the reasoning along with the final prediction.
Report issue for preceding element
Here is an example usage:
Report issue for preceding element
⬇
data:text/plain;base64,ICAgIGltcG9ydCB0ZXh0Z3JhZCBhcyB0ZwoKICAgIHN5c3RlbV9wcm9tcHQgPSB0Zy5WYXJpYWJsZSgiWW91IHdpbGwgYmUgZ2l2ZW4gYSBxdWVzdGlvbiBhbmQgdGhpbmsgc3RlcC1ieS1zdGVwLiIsIHJlcXVpcmVzX2dyYWQ9VHJ1ZSwgcm9sZV9kZXNjcmlwdGlvbj0ic3lzdGVtIHByb21wdCB0byB0aGUgbGFuZ3VhZ2UgbW9kZWwgdGhhdCB3aWxsIGJlIHJldXNlZCBhY3Jvc3MgcXVlcmllcyIpCgogICAgbW9kZWwgPSB0Zy5CbGFja0JveExMTShzeXN0ZW1fcHJvbXB0PXN5c3RlbV9wcm9tcHQpXGVuZHtsc3RsaXN0aW5nfQogICAgXGxhYmVse2ZpZzpyb2xlX2Rlc2NyaXB0aW9ufQpcZW5ke21pbmlwYWdlfQoKXHN1YnNlY3Rpb257QmFja3Byb3BhZ2F0aW9ufQpcbGFiZWx7YXBwZW5kaXg6YmFja3Byb3B9CgpUaGUgYmFja3Byb3BhZ2F0aW9uIGFsZ29yaXRobSBpbiBcdGV4dGdyYWR+IG1pcnJvcnMgZXhpc3RpbmcgYXV0b2dyYWQgZnJhbWV3b3JrcyBmb3IgZGVlcCBsZWFybmluZy4gU2VlIEFsZ29yaXRobX5ccmVme2FwcGVuZGl4OmJhY2twcm9wLWFsZ29yaXRobX0gZm9yIHRoZSBwc2V1ZG9jb2RlLgoKXGJlZ2lue2FsZ29yaXRobX0KXGNhcHRpb257QmFja3Byb3BhZ2F0aW9uIGluIFx0ZXh0Z3JhZH0KXGxhYmVse2FwcGVuZGl4OmJhY2twcm9wLWFsZ29yaXRobX0KXGJlZ2lue2FsZ29yaXRobWljfVsxXQpcU1RBVEUgXHRleHRiZntJbnB1dDp9IFZhcmlhYmxlcyAkdiBcaW4gXG1hdGhjYWx7Vn0kIGluIGEgZ3JhcGgsIExvc3MgdmFyaWFibGUgJFxtYXRoY2Fse0x9JCwgQmFja3dhcmQgRW5naW5lfihMTE0pICRcbWF0aGNhbHtNfSQgdGhhdCB3aWxsIHByb3ZpZGUgdGV4dHVhbCBncmFkaWVudHMKXFNUQVRFIFxDT01NRU5UVHtJbml0aWFsaXppbmcgZ3JhZGllbnRzfQpcRk9Se2VhY2ggJHYgXGluIFxtYXRoY2Fse1Z9JH0KICAgIFxTVEFURSAkdi5cdGV4dHtncmFkaWVudHN9ID0gXGVtcHR5c2V0JApcRU5ERk9SClxTVEFURSBcQ09NTUVOVFR7VG9wb2xvZ2ljYWwgU29ydGluZ30KXFNUQVRFICRRIFxnZXRzIFx0ZXh0e1RvcG9sb2dpY2FsU29ydH0oRykkClxTVEFURSBcQ09NTUVOVFR7QmFja3Byb3BhZ2F0aW9ufQpcRk9SeyR2JCBpbiAkUSR9CiAgICBcU1RBVEUgXENPTU1FTlRUe1BvcHVsYXRlIGdyYWRpZW50cyBpbiBwcmVkZWNlc3NvcnN9CiAgICBcRk9Se2VhY2ggJHUgXGluIFx0ZXh0e1ByZWRlY2Vzc29yc09mfSh2KSR9CiAgICAgICAgXFNUQVRFIFxDT01NRU5UVHtIZXJlLCB3ZSBhcmUgb21pdHRpbmcgc3Vic2NyaXB0ICR2JCBpbiAkZiQuIFNlbWFudGljYWxseSwgJGYkIGlzIHRoZSBmdW5jdGlvbiB0aGF0IGdlbmVyYXRlcyAkdiQsIGFuZCAkXHRleHRiYWNrd2FyZGNoYWlue2Z9JCBpcyB0aGUgYmFja3dhcmQgb3BlcmF0aW9uIGZvciB0aGF0IGZ1bmN0aW9uLn0KICAgICAgICBcU1RBVEUgXENPTU1FTlRUe1NlbWFudGljYWxseSwgdGhpcyBwcm92aWRlcyBmZWVkYmFjayB0byB0aGUgdmFyaWFibGUgJHUkLCBnaXZlbiBob3cgJHYkIGlzIHByb2R1Y2VkLCBhbmQgdGhlIGZlZWRiYWNrIHdlIGFscmVhZHkgY29sbGVjdGVkIGZvciAkdiQufQogICAgICAgIFxTVEFURSAkdS5cdGV4dHtncmFkaWVudHMuYWRkfVxsZWZ0IChcbWF0aGxhcmdlcntcdGV4dGJhY2t3YXJkY2hhaW57Zn19XGxlZnQodSwgdiwgIFxmcmFje1xwYXJ0aWFsIFxtYXRoY2Fse0x9fXtccGFydGlhbCB2fVxyaWdodClccmlnaHQgKSQKICAgIFxFTkRGT1IKXEVOREZPUgpcZW5ke2FsZ29yaXRobWljfQpcZW5ke2FsZ29yaXRobX0KClxzdWJzZWN0aW9ue0Z1bmN0aW9uc30KXGxhYmVse2FwcGVuZGl4OmZ1bmN0aW9uc30KXHRleHRncmFkfm9mZmVycyBzZXZlcmFsIG9wZXJhdGlvbnMgd2hlcmUgYm90aCB0aGUgZm9yd2FyZCBhbmQgYmFja3dhcmQgY29tcHV0YXRpb25zIGFyZSBkZWZpbmVkIC0tIGFzIHN1Y2gsIHRoZXNlIG9wZXJhdGlvbnMgYXJlIGNvbXBvc2FibGUuClRoZSBhYnN0cmFjdCBcdGV4dHR0e3RleHRncmFkLmF1dG9ncmFkLkZ1bmN0aW9ufSBjbGFzcyBoYXMgdHdvIG1ldGhvZHM6IFx0ZXh0dHR7Zm9yd2FyZH0gYW5kIFx0ZXh0dHR7YmFja3dhcmR9LCBtaXJyb3JpbmcgdGhlIFB5VG9yY2ggc3ludGF4LiBFYWNoIGZ1bmN0aW9uIGhhcyB0byBkZWZpbmUgYm90aCBvZiB0aGVzZSBtZXRob2RzLiBCZWxvdywgd2UgZGVzY3JpYmUgYSBjb3VwbGUgb2YgdGhlIG1vc3QgdXNlZCBvcGVyYXRpb25zIGluIHRoaXMgcGFwZXIuCgpccGFyYWdyYXBoe1x0ZXh0dHR7TExNQ2FsbH0gRnVuY3Rpb246fQpcbGFiZWx7YXBwZW5kaXg6bGxtLW9wfQpDdXJyZW50bHksIHRoZSBtb3N0IGNydWNpYWwgb3BlcmF0aW9uIGluIFx0ZXh0Z3JhZH5pcyB0aGUgY2FsbCB0byBsYW5ndWFnZSBtb2RlbHMuCgpcdGV4dGJme0ZvcndhcmQgbW9kZS59IFRoZSBmb3J3YXJkIG1vZGUgaXMgc2ltcGxlOiBXZSBtYWtlIGEgY2FsbCB0byBhbiBMTE0sIHRocm91Z2ggYW4gQVBJIG9yIHRocm91Z2ggdGhlIGxvY2FsIG1hY2hpbmUuIFdoZW4gYSBjYWxsIGlzIG1hZGUsIGFsbCB0aGUgaW5wdXQgdmFyaWFibGVzIGFyZSByZWdpc3RlcmVkIGFzIHRoZSBwcmVkZWNlc3NvcnMgb2YgdGhlIHJlc3BvbnNlIGZyb20gdGhlIExMTS4gRm9yIGluc3RhbmNlLCBpZiB3ZSBhc2sgYSBxdWVzdGlvbiB0byBhbiBMTE0gdXNpbmcgYW4gXHRleHR0dHtpbnN0cnVjdGlvbn0gYW5kIGEgXHRleHR0dHtxdWVzdGlvbn0gdmFyaWFibGUsIHRoZSBcdGV4dHR0e3Jlc3BvbnNlfSB2YXJpYWJsZSdzIHByZWRlY2Vzc29ycyB3aWxsIGJlIFx0ZXh0dHR7W2luc3RydWN0aW9uLCBxdWVzdGlvbl19LiBXaGVuIGRvaW5nIHRoZSBiYWNrd2FyZCBwYXNzLCB0aGUgZ3JhZGllbnRzIG9uIHRoZSBcdGV4dHR0e3Jlc3BvbnNlfSB3aWxsIGJlIGJhY2twcm9wYWdhdGVkIHRvIFx0ZXh0dHR7cXVlc3Rpb259IGFuZCBcdGV4dHR0e2luc3RydWN0aW9ufS4KCgpcdGV4dGJme0JhY2t3YXJkIG1vZGUufSBUbyBlbnN1cmUgdGhlIGJhY2t3YXJkIGZ1bmN0aW9uIHJ1bnMgc21vb3RobHkgYW5kIGdlbmVyYWxseSwgd2UgYWRkIHRoZSBmb2xsb3dpbmcgZ2xvc3NhcnkgdG8gdGhlIHN5c3RlbSBwcm9tcHQ6CgpcYmVnaW57YXB4dGNvbG9yYm94fVtHbG9zc2FyeSBmb3IgQmFja3dhcmQgTW9kZSBvZiB0aGUgXHRleHR0dHtMTE1DYWxsfSBmdW5jdGlvbl0KXCNcI1wjIEdsb3NzYXJ5IG9mIHRhZ3MgdGhhdCB3aWxsIGJlIHNlbnQgdG8geW91OgoKXCMgLSA8TE1cX1NZU1RFTVxfUFJPTVBUPjogVGhlIHN5c3RlbSBwcm9tcHQgZm9yIHRoZSBsYW5ndWFnZSBtb2RlbC4KClwjIC0gPExNXF9JTlBVVD46IFRoZSBpbnB1dCB0byB0aGUgbGFuZ3VhZ2UgbW9kZWwuCgpcIyAtIDxMTVxfT1VUUFVUPjogVGhlIG91dHB1dCBvZiB0aGUgbGFuZ3VhZ2UgbW9kZWwuCgpcIyAtIDxPQkpFQ1RJVkVcX0ZVTkNUSU9OPjogVGhlIG9iamVjdGl2ZSBvZiB0aGUgb3B0aW1pemF0aW9uIHRhc2suCgpcIyAtIDxWQVJJQUJMRT46IFNwZWNpZmllcyB0aGUgc3BhbiBvZiB0aGUgdmFyaWFibGUuCgpcIyAtIDxST0xFPjogVGhlIHJvbGUgZGVzY3JpcHRpb24gb2YgdGhlIHZhcmlhYmxlLgpcZW5ke2FweHRjb2xvcmJveH0KClVzaW5nIHRoZXNlIHRhZ3MsIHRoZSBMTE0gaXMgbWFkZSBhd2FyZSBvZiB0aGUgb2JqZWN0aXZlLCB0aGUgcm9sZSBhbmQgdGhlIHZhbHVlIG9mIHRoZSB2YXJpYWJsZSB0byBnaXZlIGZlZWRiYWNrIHRvLCBhbmQgdGhlIGZ1bGwgY29udmVyc2F0aW9uIGluIHRoZSBmb3J3YXJkIG1vZGUuCgpUaGlzIGdsb3NzYXJ5IGlzIHByb3ZpZGVkIGluIHRoZSBzeXN0ZW0gcHJvbXB0IHRvIHRoZSBiYWNrd2FyZCBlbmdpbmUgTExNOgoKXGJlZ2lue2FweHRjb2xvcmJveH1bU3lzdGVtIHByb21wdCBmb3IgdGhlIGJhY2t3YXJkIG1vZGUgb2YgdGhlIFx0ZXh0dHR7TExNQ2FsbH0gZnVuY3Rpb25dCllvdSBhcmUgcGFydCBvZiBhbiBvcHRpbWl6YXRpb24gc3lzdGVtIHRoYXQgaW1wcm92ZXMgYSBnaXZlbiB0ZXh0IChpLmUuIHRoZSB2YXJpYWJsZSkuIFlvdSBhcmUgdGhlIGdyYWRpZW50IChmZWVkYmFjaykgZW5naW5lLiBZb3VyIG9ubHkgcmVzcG9uc2liaWxpdHkgaXMgdG8gZ2l2ZSBpbnRlbGxpZ2VudCBhbmQgY3JlYXRpdmUgZmVlZGJhY2sgYW5kIGNvbnN0cnVjdGl2ZSBjcml0aWNpc20gdG8gdmFyaWFibGVzLCBnaXZlbiBhbiBvYmplY3RpdmUgc3BlY2lmaWVkIGluIDxPQkpFQ1RJVkVcX0ZVTkNUSU9OXD4gPC9PQkpFQ1RJVkVcX0ZVTkNUSU9OPiB0YWdzLiBUaGUgdmFyaWFibGVzIG1heSBiZSBzb2x1dGlvbnMgdG8gcHJvYmxlbXMsIHByb21wdHMgdG8gbGFuZ3VhZ2UgbW9kZWxzLCBjb2RlLCBvciBhbnkgb3RoZXIgdGV4dC1iYXNlZCB2YXJpYWJsZS4gUGF5IGF0dGVudGlvbiB0byB0aGUgcm9sZSBkZXNjcmlwdGlvbiBvZiB0aGUgdmFyaWFibGUsIGFuZCB0aGUgY29udGV4dCBpbiB3aGljaCBpdCBpcyB1c2VkLiBZb3Ugc2hvdWxkIGFzc3VtZSB0aGF0IHRoZSB2YXJpYWJsZSB3aWxsIGJlIHVzZWQgaW4gYSBzaW1pbGFyIGNvbnRleHQgaW4gdGhlIGZ1dHVyZS4gT25seSBwcm92aWRlIHN0cmF0ZWdpZXMsIGV4cGxhbmF0aW9ucywgYW5kIG1ldGhvZHMgdG8gY2hhbmdlIGluIHRoZSB2YXJpYWJsZS4gRE8gTk9UIHByb3Bvc2UgYSBuZXcgdmVyc2lvbiBvZiB0aGUgdmFyaWFibGUsIHRoYXQgd2lsbCBiZSB0aGUgam9iIG9mIHRoZSBvcHRpbWl6ZXIuIFlvdXIgb25seSBqb2IgaXMgdG8gc2VuZCBmZWVkYmFjayBhbmQgY3JpdGljaXNtIChjb21wdXRlICdncmFkaWVudHMnKS4gRm9yIGluc3RhbmNlLCBmZWVkYmFjayBjYW4gYmUgaW4gdGhlIGZvcm0gb2YgJ1NpbmNlIGxhbmd1YWdlIG1vZGVscyBoYXZlIHRoZSBYIGZhaWx1cmUgbW9kZS4uLicsICdBZGRpbmcgWCBjYW4gZml4IHRoaXMgZXJyb3IgYmVjYXVzZS4uLicsICdSZW1vdmluZyBYIGNhbiBpbXByb3ZlIHRoZSBvYmplY3RpdmUgZnVuY3Rpb24gYmVjYXVzZS4uLicsICdDaGFuZ2luZyBYIHRvIFkgd291bGQgZml4IHRoZSBtaXN0YWtlIC4uLicsIHRoYXQgZ2V0cyBhdCB0aGUgZG93bnN0cmVhbSBvYmplY3RpdmUuCgpJZiBhIHZhcmlhYmxlIGlzIGFscmVhZHkgd29ya2luZyB3ZWxsIChlLmcuIHRoZSBvYmplY3RpdmUgZnVuY3Rpb24gaXMgcGVyZmVjdCwgYW4gZXZhbHVhdGlvbiBzaG93cyB0aGUgcmVzcG9uc2UgaXMgYWNjdXJhdGUpLCB5b3Ugc2hvdWxkIG5vdCBnaXZlIGZlZWRiYWNrLgoKXHtHTE9TU0FSWVx9ClxlbmR7YXB4dGNvbG9yYm94fQoKCk1vc3Qgb2YgdGhpcyBzZXR1cCBhaW1zIHRvIGVuc3VyZSB0aGF0IHRoZSB1c2VyIGRvZXMgbm90IGhhdmUgdG8gbW9kaWZ5IHRoZSBncmFkaWVudCBjb21wdXRhdGlvbi4gQWxsIG9mIG91ciBleHBlcmltZW50cyBpbiB0aGUgZGl2ZXJzZSBzZXQgb2YgYXBwbGljYXRpb25zIGFyZSBkb25lIHdpdGggdGhlIHNhbWUgYmFja3dhcmQgbW9kZS4KCkZvciBpbnN0YW5jZSwgYW4gZXhhbXBsZSBwcm9tcHQgZm9yIHRoZSBncmFkaWVudCBjb21wdXRhdGlvbiBsb29rcyBsaWtlIHRoZSBmb2xsb3dpbmc6CgoKXGJlZ2lue2FweHRjb2xvcmJveH1bQW4gZXhhbXBsZSBiYWNrd2FyZCBtb2RlIHByb21wdCBmb3IgdGhlIFx0ZXh0dHR7TExNQ2FsbH0gZnVuY3Rpb25dClxmb290bm90ZXNpemUKWW91IHdpbGwgZ2l2ZSBmZWVkYmFjayB0byBhIHZhcmlhYmxlIHdpdGggdGhlIGZvbGxvd2luZyByb2xlOiA8Uk9MRT4gc3lzdGVtIHByb21wdCB0byBhIGxhbmd1YWdlIG1vZGVsIDwvUk9MRT4uIEhlcmUgaXMgYSBjb252ZXJzYXRpb24gd2l0aCBhIGxhbmd1YWdlIG1vZGVsIChMTSk6CgoKPExNXF9TWVNURU1cX1BST01QVD4gWW91IHdpbGwgYW5zd2VyIGEgcmVhc29uaW5nIHF1ZXN0aW9uLiBUaGluayBzdGVwIGJ5IHN0ZXAuIEFsd2F5cyBjb25jbHVkZSB0aGUgbGFzdCBsaW5lIG9mIHlvdXIgcmVzcG9uc2Ugc2hvdWxkIGJlIG9mIHRoZSBmb2xsb3dpbmcgZm9ybWF0OiAnQW5zd2VyOiBcJFZBTFVFJyB3aGVyZSBWQUxVRSBpcyBhIG51bWVyaWNhbCB2YWx1ZS4gPC9MTVxfU1lTVEVNXF9QUk9NUFQ+CgoKPExNXF9JTlBVVD4gSSBoYXZlIGEgY2hpY2tlbiwgYSBmcm9nLCBhIG1vdXNlLCBhIGNhdCwgdHdvIHBpZ3MsIGFuZCB0d28gcmFiYml0cy4gSG93IG1hbnkgYW5pbWFscyBkbyBJIGhhdmU/IDwvTE1cX0lOUFVUPgoKCjxMTVxfT1VUUFVUPiBUbyBmaW5kIHRoZSB0b3RhbCBudW1iZXIgb2YgYW5pbWFscywgd2Ugc2ltcGx5IGFkZCB1cCB0aGUgbnVtYmVyIG9mIGVhY2ggdHlwZSBvZiBhbmltYWw6IDEgY2hpY2tlbiArIDEgZnJvZyArIDEgbW91c2UgKyAxIGNhdCArIDIgcGlncyArIDIgcmFiYml0cyA9IDggYW5pbWFscy4KCgpBbnN3ZXI6IDggPC9MTVxfT1VUUFVUPgoKClRoaXMgY29udmVyc2F0aW9uIGlzIHBhcnQgb2YgYSBsYXJnZXIgc3lzdGVtLiBUaGUgPExNXF9PVVRQVVQ+IHdhcyBsYXRlciB1c2VkIGFzIHJlc3BvbnNlIGZyb20gdGhlIGxhbmd1YWdlIG1vZGVsLgoKCjxPQkpFQ1RJVkVcX0ZVTkNUSU9OPllvdXIgZ29hbCBpcyB0byBnaXZlIGZlZWRiYWNrIHRvIHRoZSB2YXJpYWJsZSB0byBhZGRyZXNzIHRoZSBmb2xsb3dpbmcgZmVlZGJhY2sgb24gdGhlIExNXF9PVVRQVVQ6IFRvIGltcHJvdmUgdGhlIHJ1bnRpbWUgb2YgdGhlIHN0cmluZy1iYXNlZCBmdW5jdGlvbiB0aGF0IGNoZWNrcyBpZiB0aGUgcHJlZGljdGlvbiBpcyBjb3JyZWN0LCBjb25zaWRlciB0aGUgZm9sbG93aW5nIGZlZWRiYWNrOgoKMS4gKipTaW1wbGlmeSB0aGUgUmVzcG9uc2UqKjogRm9yIGV4YW1wbGUsIGluc3RlYWQgb2YgIlRvIGZpbmQgdGhlIHRvdGFsIG51bWJlciBvZiBhbmltYWxzLCB3ZSBzaW1wbHkgYWRkICguLi4pICsgMiBwaWdzICsgMiByYWJiaXRzID0gOCBhbmltYWxzLiBBbnN3ZXI6IDgiLCBhIG1vcmUgY29uY2lzZSByZXNwb25zZSBsaWtlICJUb3RhbCBhbmltYWxzOiA4IiB3b3VsZCBiZSBtb3JlIGVmZmljaWVudC4KClxsZG90cwoKQnkgaW1wbGVtZW50aW5nIHRoZXNlIHN0cmF0ZWdpZXMsIHRoZSByZXNwb25zZSBmcm9tIHRoZSBsYW5ndWFnZSBtb2RlbCBjYW4gYmUgb3B0aW1pemVkIHRvIGltcHJvdmUgdGhlIHJ1bnRpbWUgb2YgdGhlIHN0cmluZy1iYXNlZCBmdW5jdGlvbiB0aGF0IGNoZWNrcyBpZiB0aGUgcHJlZGljdGlvbiBpcyBjb3JyZWN0LiA8L09CSkVDVElWRVxfRlVOQ1RJT04+CgpXZSBhcmUgaW50ZXJlc3RlZCBpbiBnaXZpbmcgZmVlZGJhY2sgdG8gdGhlIHN5c3RlbSBwcm9tcHQgdG8gYSBsYW5ndWFnZSBtb2RlbC4gU3BlY2lmaWNhbGx5LCBnaXZlIGZlZWRiYWNrIHRvIHRoZSBmb2xsb3dpbmcgc3BhbiBvZiB0ZXh0OgoKCjxWQVJJQUJMRT4gWW91IHdpbGwgYW5zd2VyIGEgcmVhc29uaW5nIHF1ZXN0aW9uLiBUaGluayBzdGVwIGJ5IHN0ZXAuICguLi4pIGZvbGxvd2luZyBmb3JtYXQ6ICdBbnN3ZXI6IFwkVkFMVUUnIHdoZXJlIFZBTFVFIGlzIGEgbnVtZXJpY2FsIHZhbHVlLiA8L1ZBUklBQkxFPgoKCkdpdmVuIHRoZSBhYm92ZSBoaXN0b3J5LCBkZXNjcmliZSBob3cgdGhlIHN5c3RlbSBwcm9tcHQgdG8gYSBsYW5ndWFnZSBtb2RlbCBjb3VsZCBiZSBpbXByb3ZlZCB0byBpbXByb3ZlIHRoZSA8T0JKRUNUSVZFXF9GVU5DVElPTj4uIEJlIHZlcnkgY3JlYXRpdmUsIGNyaXRpY2FsLCBhbmQgaW50ZWxsaWdlbnQuClxlbmR7YXB4dGNvbG9yYm94fQoKClxwYXJhZ3JhcGh7QWRkaXRpb24gT3BlcmF0aW9ufQpJbiBudW1lcmljYWwgb3B0aW1pemF0aW9uLCB3ZSBoYXZlIHRoZSBmb2xsb3dpbmc6ClxiZWdpbnthbGlnbn0KICAgIHogJiA9IHgreSAgXFwKICAgIHcgJiA9IHQreiBcXAogICAgXGZyYWN7XHBhcnRpYWwgd317XHBhcnRpYWwgeH0gJiA9IFxmcmFje1xwYXJ0aWFsIHd9e1xwYXJ0aWFsIHp9XGZyYWN7XHBhcnRpYWwgen17XHBhcnRpYWwgeH0gPSBcZnJhY3tccGFydGlhbCB3fXtccGFydGlhbCB6fQpcZW5ke2FsaWdufQoKCkluIG51bWVyaWNhbCBkZXJpdmF0aXZlcywgZHVlIHRvIHRoZSBsaW5lYXJpdHkgb2YgYWRkaXRpb24sIHdlIGhhdmU6ClxiZWdpbntlcXVhdGlvbn0KXGZyYWN7XHBhcnRpYWwgXHN1bV9pXk4gTF9pfXtccGFydGlhbCB7eH19ID0gXHN1bV97aX1eTiBcZnJhY3tccGFydGlhbCBMX2l9e1xwYXJ0aWFsIHt4fX0uClxlbmR7ZXF1YXRpb259CkluIHBhcnRpY3VsYXIsIHRoZSBiYWNrd2FyZCBmdW5jdGlvbiBmb3IgdGhlIGFkZGl0aW9uIG9wZXJhdGlvbiBwYXNzZXMgdGhlIGdyYWRpZW50cyBvbiB0aGUgb3V0cHV0IG9mIHRoZSBhZGRpdGlvbiBvcGVyYXRpb24gdG8gaXRzIGlucHV0cy4KCkluIHBhcnRpY3VsYXIsIHRoZSBiYWNrd2FyZCBmdW5jdGlvbiBmb3IgdGhlIGFkZGl0aW9uIG9wZXJhdGlvbiBwYXNzZXMgdGhlIGdyYWRpZW50cyBvbiB0aGUgb3V0cHV0IG9mIHRoZSBhZGRpdGlvbiBvcGVyYXRpb24gdG8gaXRzIGlucHV0cy4KClxiZWdpbntlcXVhdGlvbn0KICAgIFx0ZXh0dHRncmFke3RnLnN1bSh9TF8xLCBcbGRvdHMsIExfTlx0ZXh0dHRncmFkeyl9ID0gIlx7TF8xXH0gXHRleHR7XHRleHRiYWNrc2xhc2h9IG4gXHtMXzJcfSBcdGV4dHtcdGV4dGJhY2tzbGFzaH0gbiBcbGRvdHMgXHtMX05cfSIKXGVuZHtlcXVhdGlvbn0KCgpTaW1pbGFybHksIGluIFx0ZXh0Z3JhZCwgd2UgaGF2ZSB0aGUgJFx0ZXh0dHRncmFke3RnLnN1bX0kIG9wZXJhdGlvbiwgdGhhdCBsZXRzIHRoZSBncmFkaWVudHN+KGZlZWRiYWNrKSBvbiB0aGUgb3V0cHV0IHZhcmlhYmxlIHBhc3MgdG8gdGhlIGlucHV0IHZhcmlhYmxlcy4KClxiZWdpbntlcXVhdGlvbn0KICAgIFxmcmFje1xwYXJ0aWFsIFx0ZXh0dHRncmFke3RnLnN1bSh9TF8xLCBcbGRvdHMsIExfTlx0ZXh0dHRncmFkeyl9fXtccGFydGlhbCB4fSA9IFx0ZXh0dHRncmFke3RnLnN1bSh9XGZyYWN7XHBhcnRpYWwgTF8xfXtccGFydGlhbCB4fSwgXGxkb3RzLCBcZnJhY3tccGFydGlhbCBMX059e1xwYXJ0aWFsIHh9XHRleHR0dGdyYWR7KX0gPSAgIlx7XGZyYWN7XHBhcnRpYWwgTF8xfXtccGFydGlhbCB4fVx9IFx0ZXh0e1x0ZXh0YmFja3NsYXNofSBuIFxsZG90cyBce1xmcmFje1xwYXJ0aWFsIExfTn17XHBhcnRpYWwgeH1cfSIKXGVuZHtlcXVhdGlvbn0KCndoZXJlIHdlIHVzZSAkKyQgdG8gaW5kaWNhdGUgY29uY2F0ZW5hdGlvbi4KClx0ZXh0YmZ7VXNlIENhc2U6IH0gT25lIGNhbm9uaWNhbCB1c2UgY2FzZSBmb3IgdGhlIGFkZGl0aW9uIG9wZXJhdGlvbiBpcyB0aGUgYmF0Y2ggb3B0aW1pemF0aW9uIGNhc2UuIEluIHBhcnRpY3VsYXIsIHdlIGltcGxlbWVudCBtaW5pYmF0Y2ggZ3JhZGllbnQgZGVzY2VudCB3aGVuIHBlcmZvcm1pbmcgcHJvbXB0IG9wdGltaXphdGlvbn4oU2VjdGlvbn5ccmVme3NlYzpwcm9tcHQtb3B0aW1pemF0aW9ufSkuCgoKXHN1YnNlY3Rpb257VGV4dHVhbCBHcmFkaWVudCBEZXNjZW50IEltcGxlbWVudGF0aW9ufQpTaW1pbGFyIHRvIGJhY2t3YXJkIGNvbXB1dGF0aW9ucywgd2Ugc3RyaXZlIHRvIHByZXNlcnZlIGdlbmVyYWxpdHkgaW4gdGhlIGltcGxlbWVudGF0aW9uIG9mIFRHRC4gSW4gcGFydGljdWxhciwgd2UgdXNlIHRoZSBzYW1lIGdsb3NzYXJ5IG9mIHRhZ3MgcHJvdmlkZWQgYWJvdmUgdG8gaW5qZWN0IGluZm9ybWF0aW9uIHRvIHRoZSBvcHRpbWl6YXRpb24gcHJvY2Vzcy4KClRoZSBjdXJyZW50IHN5c3RlbSBwcm9tcHQgdG8gdGhlIG9wdGltaXplciBjYWxsIGlzIHRoZSBmb2xsb3dpbmc6CgoKXGJlZ2lue2FweHRjb2xvcmJveH1bU3lzdGVtIHByb21wdCBmb3IgdGhlIFx0ZXh0dHR7VGV4dHVhbEdyYWRpZW50RGVzY2VudH0gb3B0aW1pemVyLl0KWW91IGFyZSBwYXJ0IG9mIGFuIG9wdGltaXphdGlvbiBzeXN0ZW0gdGhhdCBpbXByb3ZlcyB0ZXh0IChpLmUuLCB2YXJpYWJsZSkuIFlvdSB3aWxsIGJlIGFza2VkIHRvIGNyZWF0aXZlbHkgYW5kIGNyaXRpY2FsbHkgaW1wcm92ZSBwcm9tcHRzLCBzb2x1dGlvbnMgdG8gcHJvYmxlbXMsIGNvZGUsIG9yIGFueSBvdGhlciB0ZXh0LWJhc2VkIHZhcmlhYmxlLiBZb3Ugd2lsbCByZWNlaXZlIHNvbWUgZmVlZGJhY2ssIGFuZCB1c2UgdGhlIGZlZWRiYWNrIHRvIGltcHJvdmUgdGhlIHZhcmlhYmxlLiBUaGUgZmVlZGJhY2sgbWF5IGJlIG5vaXN5LCBpZGVudGlmeSB3aGF0IGlzIGltcG9ydGFudCBhbmQgd2hhdCBpcyBjb3JyZWN0LiBQYXkgYXR0ZW50aW9uIHRvIHRoZSByb2xlIGRlc2NyaXB0aW9uIG9mIHRoZSB2YXJpYWJsZSwgYW5kIHRoZSBjb250ZXh0IGluIHdoaWNoIGl0IGlzIHVzZWQuIFRoaXMgaXMgdmVyeSBpbXBvcnRhbnQ6IFlvdSBNVVNUIGdpdmUgeW91ciByZXNwb25zZSBieSBzZW5kaW5nIHRoZSBpbXByb3ZlZCB2YXJpYWJsZSBiZXR3ZWVuIDxJTVBST1ZFRFxfVkFSSUFCTEU+IHt7aW1wcm92ZWQgdmFyaWFibGV9fSA8L0lNUFJPVkVEXF9WQVJJQUJMRT4gdGFncy4gVGhlIHRleHQgeW91IHNlbmQgYmV0d2VlbiB0aGUgdGFncyB3aWxsIGRpcmVjdGx5IHJlcGxhY2UgdGhlIHZhcmlhYmxlLgoKXHtHTE9TU0FSWVx9ClxlbmR7YXB4dGNvbG9yYm94fQoKQmVsb3cgaXMgYW4gZXhhbXBsZSBwcm9tcHQgdG8gdGhlIG9wdGltaXplcjoKClxiZWdpbnthcHh0Y29sb3Jib3h9W0FuIGV4YW1wbGUgcHJvbXB0IHRvIHRoZSBvcHRpbWl6ZXJdClxmb290bm90ZXNpemUKSGVyZSBpcyB0aGUgcm9sZSBvZiB0aGUgdmFyaWFibGUgeW91IHdpbGwgaW1wcm92ZTogPFJPTEU+c3lzdGVtIHByb21wdCB0byB0aGUgbGFuZ3VhZ2UgbW9kZWw8L1JPTEU+LgoKVGhlIHZhcmlhYmxlIGlzIHRoZSB0ZXh0IHdpdGhpbiB0aGUgZm9sbG93aW5nIHNwYW46IDxWQVJJQUJMRT4gWW91IHdpbGwgYW5zd2VyIGEgcmVhc29uaW5nIHF1ZXN0aW9uLiBUaGluayBzdGVwIGJ5IHN0ZXAuICguLi4pIGZvbGxvd2luZyBmb3JtYXQ6ICdBbnN3ZXI6IFwkVkFMVUUnIHdoZXJlIFZBTFVFIGlzIGEgbnVtZXJpY2FsIHZhbHVlLiA8L1ZBUklBQkxFPgoKSGVyZSBpcyB0aGUgY29udGV4dCBhbmQgZmVlZGJhY2sgd2UgZ290IGZvciB0aGUgdmFyaWFibGU6Cgo8Q09OVEVYVD4KCgpIZXJlIGlzIGEgY29udmVyc2F0aW9uOgoKCjxDT05WRVJTQVRJT04+PExNXF9TWVNURU1cX1BST01QVD4gWW91IHdpbGwgYW5zd2VyIGEgcmVhc29uaW5nIHF1ZXN0aW9uLiBUaGluayBzdGVwIGJ5IHN0ZXAuIFRoZSBsYXN0IGxpbmUgb2YgeW91ciByZXNwb25zZSBzaG91bGQgYmUgb2YgdGhlIGZvbGxvd2luZyBmb3JtYXQ6ICdBbnN3ZXI6IFwkVkFMVUUnIHdoZXJlIFZBTFVFIGlzIGEgbnVtZXJpY2FsIHZhbHVlLiA8L0xNXF9TWVNURU1cX1BST01QVD4KCgo8TE1cX0lOUFVUPiBJIGhhdmUgYSBjYXJyb3QsIGFuIG9uaW9uLCBhIHN0YWxrIG9mIGNlbGVyeSwgdGhyZWUgeWFtcywgYSBnYXJsaWMsIGEgaGVhZCBvZiBicm9jY29saSwgYW5kIGEgcG90YXRvLiBIb3cgbWFueSB2ZWdldGFibGVzIGRvIEkgaGF2ZT8gPC9MTVxfSU5QVVQ+CgoKPExNXF9PVVRQVVQ+IFRvIGRldGVybWluZSB0aGUgbnVtYmVyIG9mIHZlZ2V0YWJsZXMgeW91IGhhdmUsIHdlIG5lZWQgdG8gY291bnQgZWFjaCBpbmRpdmlkdWFsIHZlZ2V0YWJsZSBpdGVtLgoKMS4gQ2Fycm90CjIuIE9uaW9uCjMuIENlbGVyeQo0LiBZYW1zICgzIHlhbXMpCjUuIEdhcmxpYwo2LiBCcm9jY29saQo3LiBQb3RhdG8KCkNvdW50aW5nIGFsbCB0aGUgaW5kaXZpZHVhbCB2ZWdldGFibGUgaXRlbXMsIHdlIGhhdmUgYSB0b3RhbCBvZiA3IHZlZ2V0YWJsZXMuCgpUaGVyZWZvcmUsIHlvdSBoYXZlIDcgdmVnZXRhYmxlcy4KCkFuc3dlcjogNyA8L0xNXF9PVVRQVVQ+CgoKPC9DT05WRVJTQVRJT04+CgpUaGlzIGNvbnZlcnNhdGlvbiBpcyBwb3RlbnRpYWxseSBwYXJ0IG9mIGEgbGFyZ2VyIHN5c3RlbS4gVGhlIG91dHB1dCBpcyB1c2VkIGFzIHJlc3BvbnNlIGZyb20gdGhlIGxhbmd1YWdlIG1vZGVsCgpIZXJlIGlzIHRoZSBmZWVkYmFjayB3ZSBnb3QgZm9yIHN5c3RlbSBwcm9tcHQgdG8gdGhlIGxhbmd1YWdlIG1vZGVsIGluIHRoZSBjb252ZXJzYXRpb246CgoKPEZFRURCQUNLPlRvIGltcHJvdmUgdGhlIHN0cnVjdHVyZWQgc3lzdGVtIHByb21wdCBmb3IgdGhlIGxhbmd1YWdlIG1vZGVsLCBjb25zaWRlciB0aGUgZm9sbG93aW5nIGZlZWRiYWNrOgoKMS4gKipDbGFyaWZ5IHRoZSBDYWxjdWxhdGlvbiBQcm9jZXNzKio6CiAgIC0gKipDdXJyZW50IElzc3VlKio6IFRoZSBwcm9tcHQgZG9lcyBub3QgZXhwbGljaXRseSBpbnN0cnVjdCB0aGUgbW9kZWwgdG8gb3V0bGluZSBlYWNoIHN0ZXAgb2YgaXRzIGNhbGN1bGF0aW9uIHByb2Nlc3MuCiAgIC0gKipJbXByb3ZlbWVudCoqOiBBZGQgYSBkaXJlY3RpdmUgdGhhdCByZXF1aXJlcyB0aGUgbW9kZWwgdG8gZXhwbGljaXRseSBzdGF0ZSBlYWNoIHF1YW50aXR5IGFuZCB0aGUgc3VtLiBGb3IgZXhhbXBsZSwgIkNsZWFybHkgb3V0bGluZSBlYWNoIHN0ZXAgb2YgeW91ciBjYWxjdWxhdGlvbiBwcm9jZXNzLCBzdGF0aW5nIGVhY2ggcXVhbnRpdHkgYW5kIHRoZSBzdW0uIgoKCjIuICoqVmVyaWZ5IEludGVybWVkaWF0ZSBTdGVwcyoqOgogICAtICoqQ3VycmVudCBJc3N1ZSoqOiBUaGUgcHJvbXB0IGRvZXMgbm90IGluc3RydWN0IHRoZSBtb2RlbCB0byB2ZXJpZnkgZWFjaCBpbnRlcm1lZGlhdGUgc3RlcC4KICAgLSAqKkltcHJvdmVtZW50Kio6IEluY2x1ZGUgYSBkaXJlY3RpdmUgZm9yIHRoZSBtb2RlbCB0byB2ZXJpZnkgZWFjaCBzdGVwIGFnYWluc3Qga25vd24gY29ycmVjdCB2YWx1ZXMuIEZvciBleGFtcGxlLCAiVmVyaWZ5IGVhY2ggaW50ZXJtZWRpYXRlIHN0ZXAgaW4geW91ciBjYWxjdWxhdGlvbiB0byBlbnN1cmUgYWNjdXJhY3kuIgoKPC9GRUVEQkFDSz4KCgo8L0NPTlRFWFQ+CgoKSW1wcm92ZSB0aGUgdmFyaWFibGUgKHN5c3RlbSBwcm9tcHQgdG8gdGhlIGxhbmd1YWdlIG1vZGVsKSB1c2luZyB0aGUgZmVlZGJhY2sgcHJvdmlkZWQgaW4gPEZFRURCQUNLPiB0YWdzLgpTZW5kIHRoZSBpbXByb3ZlZCB2YXJpYWJsZSBpbiB0aGUgZm9sbG93aW5nIGZvcm1hdDoKCjxJTVBST1ZFRFxfVkFSSUFCTEU+e3RoZSBpbXByb3ZlZCB2YXJpYWJsZX08L0lNUFJPVkVEXF9WQVJJQUJMRT4KClNlbmQgT05MWSB0aGUgaW1wcm92ZWQgdmFyaWFibGUgYmV0d2VlbiB0aGUgPElNUFJPVkVEXF9WQVJJQUJMRT4gdGFncywgYW5kIG5vdGhpbmcgZWxzZS4KClxlbmR7YXB4dGNvbG9yYm94fQoKXHNlY3Rpb257T3B0aW1pemVyIEV4dGVuc2lvbnN9ClxsYWJlbHthcHBlbmRpeDpvcHRpbWl6ZXItZXh0ZW5zaW9uc30KClxzdWJzZWN0aW9uKntCYXRjaCBPcHRpbWl6YXRpb259CkluIGJhdGNoIG9wdGltaXphdGlvbiwgd2UgdXNlIHRoZSBcdGV4dHR0e3RnLnN1bX0gZnVuY3Rpb24gZGVzY3JpYmVkIGFib3ZlLiBJbiBwYXJ0aWN1bGFyLCBncmFkaWVudHMgcHJvcGFnYXRpbmcgZnJvbSBtdWx0aXBsZSBpbnN0YW5jZXMgYXJlIGNvbmNhdGVuYXRlZCB0b2dldGhlciwgdGh1cyB0aGUgb3B0aW1pemVyIHNlZXMgYWxsIG9mIHRoZSBmZWVkYmFjayB0byBhIHZhcmlhYmxlIGNvbWluZyBmcm9tIG11bHRpcGxlIHNvdXJjZXMuCgpUaGUgc3ludGF4IGlzIGFzIHNpbXBsZSBhcyB0aGUgZm9sbG93aW5nOgoKXG5vaW5kZW50XGJlZ2lue21pbmlwYWdlfVshaF17XHRleHR3aWR0aH0KICAgIFxjZW50ZXJpbmcKICAgIFxiZWdpbntsc3RsaXN0aW5nfVtsYW5ndWFnZT1QeXRob24sIGNhcHRpb249QW4gZXhhbXBsZSB1c2UgZm9yIGJhdGNoIG9wdGltaXphdGlvbiBmb3IgcXVlc3Rpb24gYW5zd2VyaW5nLl0KbG9zc2VzID0gW2xvc3NfZm4oYW5zd2VyLCBtb2RlbChxdWVzdGlvbikpIGZvciBxdWVzdGlvbiwgYW5zd2VyIGluIGJhdGNoXQp0b3RhbF9sb3NzID0gdGcuc3VtKGxvc3NlcykKdG90YWxfbG9zcy5iYWNrd2FyZCgpXGVuZHtsc3RsaXN0aW5nfQogICAgXGxhYmVse2ZpZzpiYXRjaF9vcHRpbWl6YXRpb259ClxlbmR7bWluaXBhZ2V9CgoKXHN1YnNlY3Rpb24qe0NvbnN0cmFpbmVkIE9wdGltaXphdGlvbiB3aXRoIE5hdHVyYWwgTGFuZ3VhZ2UgQ29uc3RyYWludHN9CgpJbiBcdGV4dGdyYWR+aXQgaXMgcG9zc2libGUgdXNlIGNvbnN0cmFpbnRzIHdoZW4gb3B0aW1pemluZyB2YXJpYWJsZXMuIFRoZXNlIGNvbnN0cmFpbnRzIGFyZSBhbGwgZGVmaW5lZCBhcyBuYXR1cmFsIGxhbmd1YWdlIGRlc2NyaXB0aW9ucy4gRm9yIGV4YW1wbGUsIG9uZSBjYW4gcHJvbXB0IG9wdGltaXplciB0byB1cGRhdGUgdGhlIHZhcmlhYmxlIGJ1dCB0byBjb25jbHVkZSBpdHMgcmVzcG9uc2Ugd2l0aCBhbiBhbnN3ZXIgZHVyaW5nIHRoZSB1cGRhdGU6CgpcYmVnaW57YXB4dGNvbG9yYm94fVtFeGFtcGxlIGNvbnN0cmFpbmVkIG9wdGltaXphdGlvbiBwcm9tcHRdCllvdSBtdXN0IGZvbGxvdyB0aGUgZm9sbG93aW5nIGNvbnN0cmFpbnRzOgoKCjxDT05TVFJBSU5UUz5cdGV4dGl0e2BUaGUgbGFzdCBsaW5lIG9mIHlvdXIgcmVzcG9uc2Ugc2hvdWxkIGJlIG9mIHRoZSBmb2xsb3dpbmcgZm9ybWF0OiAnQW5zd2VyOiBcJExFVFRFUicgd2hlcmUgTEVUVEVSIGlzIG9uZSBvZiBBQkNELicnfTwvQ09OU1RSQUlOVFM+ClxlbmR7YXB4dGNvbG9yYm94fQoKSW4gZ2VuZXJhbCwgdGhlIGNvbnN0cmFpbnQgcG9zdC1maXggaXMgYXBwZW5kZWQgdG8gdGhlIG9wdGltaXplcidzIHByb21wdCwgd2hlcmUgdGhlIGNvbnN0cmFpbnRzIGFyZSB3cml0dGVuIHdpdGhpbiB0aGUgXHRleHR0dHs8Q09OU1RSQUlOVFM+IFx7Y29uc3RyYWludCB0ZXh0XH0gPC9DT05TVFJBSU5UUz59IHRhZ3MuCgpJbiBjb2RlLCB0aGUgdXNlciBjYW4gc2ltcGx5IHBhc3MgaW4gdGhlIGNvbnN0cmFpbnRzIHRvIHRoZSBUR0Qgb3B0aW1pemVyOgoKXG5vaW5kZW50XGJlZ2lue21pbmlwYWdlfVshaF17XHRleHR3aWR0aH0KICAgIFxjZW50ZXJpbmcKICAgIFxiZWdpbntsc3RsaXN0aW5nfVtsYW5ndWFnZT1QeXRob24sIGNhcHRpb249QW4gZXhhbXBsZSB1c2UgZm9yIGNvbnN0cmFpbnRzIHdoZW4gdXBkYXRpbmcgdGhlIHNvbHV0aW9uIHRvIGEgcHJvYmxlbS5dCmNvbnN0cmFpbnRzID0gWyJUaGUgbGFzdCBsaW5lIG9mIHlvdXIgcmVzcG9uc2Ugc2hvdWxkIGJlIG9mIHRoZSBmb2xsb3dpbmcgZm9ybWF0OiAnQW5zd2VyOiBcJExFVFRFUicgd2hlcmUgTEVUVEVSIGlzIG9uZSBvZiBBQkNELiJdCm9wdGltaXplciA9IFRleHR1YWxHcmFkaWVudERlc2NlbnQocGFyYW1ldGVycz1bc29sdXRpb25dLCBjb25zdHJhaW50cz1jb25zdHJhaW50cylcZW5ke2xzdGxpc3Rpbmd9CiAgICBcbGFiZWx7ZmlnOnRnZF9jb25zdHJhaW50c30KXGVuZHttaW5pcGFnZX0KCgpcc3Vic2VjdGlvbip7TW9tZW50dW19CgpcdGV4dGdyYWR+c3VwcG9ydHMgdGhlIHVzZSBvZiBNb21lbnR1bSBpbiB0aGUgVGV4dHVhbCBHcmFkaWVudCBEZXNjZW50LiBJbiBzdGFuZGFyZCBTR0QgbW9tZW50dW0gdXNlcyBhIGxpbmVhciBjb21iaW5hdGlvbiBvZiBwYXN0IGdyYWRpZW50cyBhbmQgdGhlIG1vc3QgcmVjZW50IG9uZSB0byBkZWZpbmUgYSBuZXcgZ3JhZGllbnQgdG8gdXBkYXRlIGEgdmFyaWFibGUuIFNpbWlsYXJseSwgXHRleHRncmFkfmtlZXBzIHRyYWNrIG9mIHBhc3QgaXRlcmF0aW9ucyBvZiB0aGUgdmFyaWFibGUuIFRoaXMgcG9zdGZpeCBpcyBhcHBlbmRlZCB0byB0aGUgcHJvbXB0IGZvciB0aGUgb3B0aW1pemVyLgoKXG5vaW5kZW50XGJlZ2lue21pbmlwYWdlfVshaF17XHRleHR3aWR0aH0KICAgIFxjZW50ZXJpbmcKICAgIFxiZWdpbntsc3RsaXN0aW5nfVtsYW5ndWFnZT1QeXRob24sIGNhcHRpb249SG93IHRvIGVuYWJsZSBtb21lbnR1bSB1c2luZyAzIHByZXZpb3VzIHN0ZXBzIGluIHRoZSBcdGV4dHR0e1RleHR1YWxHcmFkaWVudERlc2NlbnR9IG9wdGltaXplci5dCm9wdGltaXplciA9IFRleHR1YWxHcmFkaWVudERlc2NlbnQocGFyYW1ldGVycz1bc29sdXRpb25dLCBtb21lbnR1bV93aW5kb3c9MylcZW5ke2xzdGxpc3Rpbmd9CiAgICBcbGFiZWx7ZmlnOnRnZF9tb21lbnR1bX0KXGVuZHttaW5pcGFnZX0KClxiZWdpbnthcHh0Y29sb3Jib3h9W01vbWVudHVtIHByb21wdF0KSGVyZSBhcmUgdGhlIHBhc3QgaXRlcmF0aW9ucyBvZiB0aGlzIHZhcmlhYmxlOgoKPFBBU1RcX0lURVJBVElPTlM+XHtwYXN0XF92YWx1ZXNcfTwvUEFTVFxfSVRFUkFUSU9OUz4KXGVuZHthcHh0Y29sb3Jib3h9Cgpcc3Vic2VjdGlvbip7SW4tQ29udGV4dCBFeGFtcGxlc30KSW4tY29udGV4dCBleGFtcGxlcyBjYW4gYmUgdXRpbGl6ZWQgdG8gaW1wcm92ZSB0ZXh0dWFsIGdyYWRpZW50cyBhbmQgdXBkYXRlIHZhcmlhYmxlcyBlZmZlY3RpdmVseS4gVGhlc2UgZXhhbXBsZXMgc2VydmUgYXMgcmVmZXJlbmNlcyB0byBpbGx1c3RyYXRlIHRoZSBjaGFyYWN0ZXJpc3RpY3Mgb2Ygb3B0aW1pemVkIHZhcmlhYmxlcy4gV2hlbiBpbi1jb250ZXh0IGV4YW1wbGVzIGFyZSBhcHBsaWVkLCBcdGV4dGdyYWR+YWRvcHRzIHRoZSBmb2xsb3dpbmcgcHJvbXB0IHRvIGluY29ycG9yYXRlIHRoZW06CgpcYmVnaW57YXB4dGNvbG9yYm94fVtJbi1jb250ZXh0IGV4YW1wbGVzIHByb21wdF0KWW91IG11c3QgYmFzZSBvbiB0aGUgZm9sbG93aW5nIGV4YW1wbGVzIHdoZW4gbW9kaWZ5aW5nIHRoZSBce3JvbGVcX2Rlc2NyaXB0aW9uXH06Cgo8RVhBTVBMRVM+XHtpblxfY29udGV4dFxfZXhhbXBsZXNcfTwvRVhBTVBMRVM+IgpcZW5ke2FweHRjb2xvcmJveH0KCkJ5IGxldmVyYWdpbmcgdGhlc2UgZXhhbXBsZXMsIFx0ZXh0Z3JhZH5jYW4gYmV0dGVyIHVuZGVyc3RhbmQgYW5kIGltcGxlbWVudCB0aGUgcHJvcGVydGllcyBvZiBvcHRpbWl6ZWQgdmFyaWFibGVzLCBlbmhhbmNpbmcgdGhlIG92ZXJhbGwgb3B0aW1pemF0aW9uIHByb2Nlc3M=
1 import textgrad as tg
2
3 system_prompt = tg. Variable("You will be given a question and think step-by-step.", requires_grad= True, role_description="system prompt to the language model that will be reused across queries")
4
5 model = tg. BlackBoxLLM( system_prompt= system_prompt)\ end{ lstlisting}
6 \ label{ fig: role_description}
7\ end{ minipage}
8
9\ subsection{ Backpropagation}
10\ label{ appendix: backprop}
11
12 The backpropagation algorithm in \ textgrad~ mirrors existing autograd frameworks for deep learning. See Algorithm~\ ref{ appendix: backprop- algorithm} for the pseudocode.
13
14\ begin{ algorithm}
15\ caption{ Backpropagation in \ textgrad}
16\ label{ appendix: backprop- algorithm}
17\ begin{ algorithmic}[1]
18\ STATE \ textbf{ Input:} Variables $v \ in \ mathcal{ V}$ in a graph, Loss variable $\ mathcal{ L}$, Backward Engine~( LLM) $\ mathcal{ M}$ that will provide textual gradients
19\ STATE \ COMMENTT{ Initializing gradients}
20\ FOR{ each $v \ in \ mathcal{ V}$}
21 \ STATE $v.\ text{ gradients} = \ emptyset$
22\ ENDFOR
23\ STATE \ COMMENTT{ Topological Sorting}
24\ STATE $Q \ gets \ text{ TopologicalSort}( G)$
25\ STATE \ COMMENTT{ Backpropagation}
26\ FOR{$v$ in $Q$}
27 \ STATE \ COMMENTT{ Populate gradients in predecessors}
28 \ FOR{ each $u \ in \ text{ PredecessorsOf}( v)$}
29 \ STATE \ COMMENTT{ Here, we are omitting subscript $v$ in $f$. Semantically, $f$ is the function that generates $v$, and $\ textbackwardchain{ f}$ is the backward operation for that function.}
30 \ STATE \ COMMENTT{ Semantically, this provides feedback to the variable $u$, given how $v$ is produced, and the feedback we already collected for $v$.}
31 \ STATE $u.\ text{ gradients. add}\ left (\ mathlarger{\ textbackwardchain{ f}}\ left( u, v, \ frac{\ partial \ mathcal{ L}}{\ partial v}\ right)\ right )$
32 \ ENDFOR
33\ ENDFOR
34\ end{ algorithmic}
35\ end{ algorithm}
36
37\ subsection{ Functions}
38\ label{ appendix: functions}
39\ textgrad~ offers several operations where both the forward and backward computations are defined -- as such, these operations are composable.
40 The abstract \ texttt{ textgrad. autograd. Function} class has two methods: \ texttt{ forward} and \ texttt{ backward}, mirroring the PyTorch syntax. Each function has to define both of these methods. Below, we describe a couple of the most used operations in this paper.
41
42\ paragraph{\ texttt{ LLMCall} Function:}
43\ label{ appendix: llm- op}
44 Currently, the most crucial operation in \ textgrad~ is the call to language models.
45
46\ textbf{ Forward mode.} The forward mode is simple: We make a call to an LLM, through an API or through the local machine. When a call is made, all the input variables are registered as the predecessors of the response from the LLM. For instance, if we ask a question to an LLM using an \ texttt{ instruction} and a \ texttt{ question} variable, the \ texttt{ response} variable's predecessors will be \texttt{[instruction, question]}. When doing the backward pass, the gradients on the \texttt{response} will be backpropagated to \texttt{question} and \texttt{instruction}.
47
48
49\textbf{Backward mode.} To ensure the backward function runs smoothly and generally, we add the following glossary to the system prompt:
50
51\begin{apxtcolorbox}[Glossary for Backward Mode of the \texttt{LLMCall} function]
52### Glossary of tags that will be sent to you:
53
54# - <LM_SYSTEM_PROMPT>: The system prompt for the language model.
55
56# - <LM_INPUT>: The input to the language model.
57
58# - <LM_OUTPUT>: The output of the language model.
59
60# - <OBJECTIVE_FUNCTION>: The objective of the optimization task.
61
62# - 
: Specifies the span of the variable.
63
64# - 
: The role description of the variable.
65\end{apxtcolorbox}
66
67 Using these tags, the LLM is made aware of the objective, the role and the value of the variable to give feedback to, and the full conversation in the forward mode.
68
69 This glossary is provided in the system prompt to the backward engine LLM:
70
71\begin{apxtcolorbox}[System prompt for the backward mode of the \texttt{LLMCall} function]
72 You are part of an optimization system that improves a given text (i.e. the variable). You are the gradient (feedback) engine. Your only responsibility is to give intelligent and creative feedback and constructive criticism to variables, given an objective specified in <OBJECTIVE_FUNCTION> </OBJECTIVE_FUNCTION> tags. The variables may be solutions to problems, prompts to language models, code, or any other text-based variable. Pay attention to the role description of the variable, and the context in which it is used. You should assume that the variable will be used in a similar context in the future. Only provide strategies, explanations, and methods to change in the variable. DO NOT propose a new version of the variable, that will be the job of the optimizer. Your only job is to send feedback and criticism (compute ' gradients'). For instance, feedback can be in the form of ' Since language models have the X failure mode...', ' Adding X can fix this error because...', ' Removing X can improve the objective function because...', ' Changing X to Y would fix the mistake ...', that gets at the downstream objective.
73
74 If a variable is already working well (e.g. the objective function is perfect, an evaluation shows the response is accurate), you should not give feedback.
75
76{GLOSSARY}
77\end{apxtcolorbox}
78
79
80 Most of this setup aims to ensure that the user does not have to modify the gradient computation. All of our experiments in the diverse set of applications are done with the same backward mode.
81
82 For instance, an example prompt for the gradient computation looks like the following:
83
84
85\begin{apxtcolorbox}[An example backward mode prompt for the \texttt{LLMCall} function]
86\footnotesize
87 You will give feedback to a variable with the following role: 
 system prompt to a language model 
. Here is a conversation with a language model (LM):
88
89
90<LM_SYSTEM_PROMPT> You will answer a reasoning question. Think step by step. Always conclude the last line of your response should be of the following format: ' Answer: $VALUE' where VALUE is a numerical value. </LM_SYSTEM_PROMPT>
91
92
93<LM_INPUT> I have a chicken, a frog, a mouse, a cat, two pigs, and two rabbits. How many animals do I have? </LM_INPUT>
94
95
96<LM_OUTPUT> To find the total number of animals, we simply add up the number of each type of animal: 1 chicken + 1 frog + 1 mouse + 1 cat + 2 pigs + 2 rabbits = 8 animals.
97
98
99 Answer: 8 </LM_OUTPUT>
100
101
102 This conversation is part of a larger system. The <LM_OUTPUT> was later used as response from the language model.
103
104
105<OBJECTIVE_FUNCTION>Your goal is to give feedback to the variable to address the following feedback on the LM_OUTPUT: To improve the runtime of the string-based function that checks if the prediction is correct, consider the following feedback:
106
107 1. 
Simplify the Response
: For example, instead of "To find the total number of animals, we simply add (...) + 2 pigs + 2 rabbits = 8 animals. Answer: 8", a more concise response like "Total animals: 8" would be more efficient.
108
109\ldots
110
111 By implementing these strategies, the response from the language model can be optimized to improve the runtime of the string-based function that checks if the prediction is correct. </OBJECTIVE_FUNCTION>
112
113 We are interested in giving feedback to the system prompt to a language model. Specifically, give feedback to the following span of text:
114
115
116
 You will answer a reasoning question. Think step by step. (...) following format: ' Answer: $VALUE' where VALUE is a numerical value. 
117
118
119 Given the above history, describe how the system prompt to a language model could be improved to improve the <OBJECTIVE_FUNCTION>. Be very creative, critical, and intelligent.
120\end{apxtcolorbox}
121
122
123\paragraph{Addition Operation}
124 In numerical optimization, we have the following:
125\begin{align}
126 z & = x+y \
127 w & = t+z \
128 \frac{\partial w}{\partial x} & = \frac{\partial w}{\partial z}\frac{\partial z}{\partial x} = \frac{\partial w}{\partial z}
129\end{align}
130
131
132 In numerical derivatives, due to the linearity of addition, we have:
133\begin{equation}
134\frac{\partial \sum_i^N L_i}{\partial {x}} = \sum_{i}^N \frac{\partial L_i}{\partial {x}}.
135\end{equation}
136 In particular, the backward function for the addition operation passes the gradients on the output of the addition operation to its inputs.
137
138 In particular, the backward function for the addition operation passes the gradients on the output of the addition operation to its inputs.
139
140\begin{equation}
141 \textttgrad{tg.sum(}L_1, \ldots, L_N\textttgrad{)} = "{L_1} \text{\textbackslash} n {L_2} \text{\textbackslash} n \ldots {L_N}"
142\end{equation}
143
144
145 Similarly, in \textgrad, we have the $\textttgrad{tg.sum}$ operation, that lets the gradients~(feedback) on the output variable pass to the input variables.
146
147\begin{equation}
148 \frac{\partial \textttgrad{tg.sum(}L_1, \ldots, L_N\textttgrad{)}}{\partial x} = \textttgrad{tg.sum(}\frac{\partial L_1}{\partial x}, \ldots, \frac{\partial L_N}{\partial x}\textttgrad{)} = "{\frac{\partial L_1}{\partial x}} \text{\textbackslash} n \ldots {\frac{\partial L_N}{\partial x}}"
149\end{equation}
150
151 where we use $+$ to indicate concatenation.
152
153\textbf{Use Case: } One canonical use case for the addition operation is the batch optimization case. In particular, we implement minibatch gradient descent when performing prompt optimization~(Section~\ref{sec:prompt-optimization}).
154
155
156\subsection{Textual Gradient Descent Implementation}
157 Similar to backward computations, we strive to preserve generality in the implementation of TGD. In particular, we use the same glossary of tags provided above to inject information to the optimization process.
158
159 The current system prompt to the optimizer call is the following:
160
161
162\begin{apxtcolorbox}[System prompt for the \texttt{TextualGradientDescent} optimizer.]
163 You are part of an optimization system that improves text (i.e., variable). You will be asked to creatively and critically improve prompts, solutions to problems, code, or any other text-based variable. You will receive some feedback, and use the feedback to improve the variable. The feedback may be noisy, identify what is important and what is correct. Pay attention to the role description of the variable, and the context in which it is used. This is very important: You MUST give your response by sending the improved variable between <IMPROVED_VARIABLE> {{improved variable}} </IMPROVED_VARIABLE> tags. The text you send between the tags will directly replace the variable.
164
165{GLOSSARY}
166\end{apxtcolorbox}
167
168 Below is an example prompt to the optimizer:
169
170\begin{apxtcolorbox}[An example prompt to the optimizer]
171\footnotesize
172 Here is the role of the variable you will improve: 
system prompt to the language model
.
173
174 The variable is the text within the following span: 
 You will answer a reasoning question. Think step by step. (...) following format: ' Answer: $VALUE' where VALUE is a numerical value. 
175
176 Here is the context and feedback we got for the variable:
177
178
179
180
181 Here is a conversation:
182
183
184
<LM_SYSTEM_PROMPT> You will answer a reasoning question. Think step by step. The last line of your response should be of the following format: ' Answer: $VALUE' where VALUE is a numerical value. </LM_SYSTEM_PROMPT>
185
186
187<LM_INPUT> I have a carrot, an onion, a stalk of celery, three yams, a garlic, a head of broccoli, and a potato. How many vegetables do I have? </LM_INPUT>
188
189
190<LM_OUTPUT> To determine the number of vegetables you have, we need to count each individual vegetable item.
191
192 1. Carrot
193 2. Onion
194 3. Celery
195 4. Yams (3 yams)
196 5. Garlic
197 6. Broccoli
198 7. Potato
199
200 Counting all the individual vegetable items, we have a total of 7 vegetables.
201
202 Therefore, you have 7 vegetables.
203
204 Answer: 7 </LM_OUTPUT>
205
206
207
208
209 This conversation is potentially part of a larger system. The output is used as response from the language model
210
211 Here is the feedback we got for system prompt to the language model in the conversation:
212
213
214
To improve the structured system prompt for the language model, consider the following feedback:
215
216 1. 
Clarify the Calculation Process
:
217 - 
Current Issue
: The prompt does not explicitly instruct the model to outline each step of its calculation process.
218 - 
Improvement
: Add a directive that requires the model to explicitly state each quantity and the sum. For example, "Clearly outline each step of your calculation process, stating each quantity and the sum."
219
220
221 2. 
Verify Intermediate Steps
:
222 - 
Current Issue
: The prompt does not instruct the model to verify each intermediate step.
223 - 
Improvement
: Include a directive for the model to verify each step against known correct values. For example, "Verify each intermediate step in your calculation to ensure accuracy."
224
225
226
227
228
229
230
231 Improve the variable (system prompt to the language model) using the feedback provided in 
 tags.
232 Send the improved variable in the following format:
233
234<IMPROVED_VARIABLE>{the improved variable}</IMPROVED_VARIABLE>
235
236 Send ONLY the improved variable between the <IMPROVED_VARIABLE> tags, and nothing else.
237
238\end{apxtcolorbox}
239
240\section{Optimizer Extensions}
241\label{appendix:optimizer-extensions}
242
243\subsection*{Batch Optimization}
244 In batch optimization, we use the \texttt{tg.sum} function described above. In particular, gradients propagating from multiple instances are concatenated together, thus the optimizer sees all of the feedback to a variable coming from multiple sources.
245
246 The syntax is as simple as the following:
247
248\noindent\begin{minipage}[!h]{\textwidth}
249 \centering
250 \begin{lstlisting}[language=Python, caption=An example use for batch optimization for question answering.]
251 losses = [loss_fn(answer, model(question)) for question, answer in batch]
252 total_loss = tg.sum(losses)
253 total_loss.backward()\end{lstlisting}
254 \label{fig:batch_optimization}
255\end{minipage}
256
257
258\subsection*{Constrained Optimization with Natural Language Constraints}
259
260 In \textgrad~it is possible use constraints when optimizing variables. These constraints are all defined as natural language descriptions. For example, one can prompt optimizer to update the variable but to conclude its response with an answer during the update:
261
262\begin{apxtcolorbox}[Example constrained optimization prompt]
263 You must follow the following constraints:
264
265
266
\textit{'The last line of your response should be of the following format: ' Answer: $LETTER' where LETTER is one of ABCD.''}
267\end{apxtcolorbox}
268
269 In general, the constraint post-fix is appended to the optimizer' s prompt, where the constraints are written within the \ texttt{< CONSTRAINTS> { constraint text} </ CONSTRAINTS>} tags.
270
271 In code, the user can simply pass in the constraints to the TGD optimizer:
272
273\ noindent\ begin{ minipage}[! h]{\ textwidth}
274 \ centering
275 \ begin{ lstlisting}[ language= Python, caption= An example use for constraints when updating the solution to a problem.]
276 constraints = ["The last line of your response should be of the following format: 'Answer: $LETTER' where LETTER is one of ABCD."]
277 optimizer = TextualGradientDescent( parameters=[ solution], constraints= constraints)\ end{ lstlisting}
278 \ label{ fig: tgd_constraints}
279\ end{ minipage}
280
281
282\ subsection*{ Momentum}
283
284\ textgrad~ supports the use of Momentum in the Textual Gradient Descent. In standard SGD momentum uses a linear combination of past gradients and the most recent one to define a new gradient to update a variable. Similarly, \ textgrad~ keeps track of past iterations of the variable. This postfix is appended to the prompt for the optimizer.
285
286\ noindent\ begin{ minipage}[! h]{\ textwidth}
287 \ centering
288 \ begin{ lstlisting}[ language= Python, caption= How to enable momentum using 3 previous steps in the \ texttt{ TextualGradientDescent} optimizer.]
289 optimizer = TextualGradientDescent( parameters=[ solution], momentum_window=3)\ end{ lstlisting}
290 \ label{ fig: tgd_momentum}
291\ end{ minipage}
292
293\ begin{ apxtcolorbox}[ Momentum prompt]
294 Here are the past iterations of this variable:
295
296< PAST\ _ITERATIONS>{ past\ _values}</ PAST\ _ITERATIONS>
297\ end{ apxtcolorbox}
298
299\ subsection*{ In- Context Examples}
300 In- context examples can be utilized to improve textual gradients and update variables effectively. These examples serve as references to illustrate the characteristics of optimized variables. When in- context examples are applied, \ textgrad~ adopts the following prompt to incorporate them:
301
302\ begin{ apxtcolorbox}[ In- context examples prompt]
303 You must base on the following examples when modifying the { role\ _description}:
304
305< EXAMPLES>{ in\ _context\ _examples}</ EXAMPLES>"
306\end{apxtcolorbox}
307
308 By leveraging these examples, \textgrad~can better understand and implement the properties of optimized variables, enhancing the overall optimization process"
Code Snippet 3: An example usage of a role description. Report issue for preceding element
Appendix B Code Optimization
Report issue for preceding element
B.1 Methodology
Report issue for preceding element
Baseline Details. We re-run Reflexion [ 
26
https://arxiv.org/html/2406.07496v1#bib.bibx26
] using the code by the authors currently available online. We had to make minor changes to ensure it ran correctly in our setting but we also contacted the original authors and ask feedback on our edits to ensure our evaluation was consistent. Moreover, we had to re-extract the LeetCodeHard [ 
26
https://arxiv.org/html/2406.07496v1#bib.bibx26
] dataset using the authors' pipeline; this means that it is likely that the dataset we are using in this manuscript is not the same dataset that was used in the Reflexion paper. While this dataset contains a set of simple tests to check if the code works as expected, the real evaluation in this context is given by passing the tests on the LeetCode platform.
Report issue for preceding element
Reflexion is run with a one shot prompt that is meant to instruct the model on how to provide feedback. The pipeline run by Reflexion is as follows: given in input a prompt to generate code, a language model generates a first solution. If this solution passes the local tests, it is then submitted to the LeetCode platform to be evaluated on harder tests. However, if the solution does not pass the tests, we ask for feedback through Reflexion and optimize the code. Once again, if the new solution passes the local tests, we submit it to the LeetCode platform. We do this optimization for 5 iterations.
Report issue for preceding element
We ran the experiment 5 times with 5 different seeds and we averaged the results. At each iteration of optimization, TextGrad makes 1 call to gpt-4o to evaluate the test time loss, 1 call to collect gradients, and 1 call to update the code snippet. The number of coding problems in LeetCodeHard is 39.
Report issue for preceding element
Example Query for LeetCode Hard def minimumTime(grid: List[List[int]]) -> int: """ You are given a 'm x n' matrix 'grid' consisting of non-negative integers where 'grid[row][col]' represents the minimum time required to be able to visit the cell '(row, col)', which means you can visit the cell '(row, col)' only when the time you visit it is greater than or equal to 'grid[row][col]'. You are standing in the top-left cell of the matrix in the '0th' second, and you must move to any adjacent cell in the four directions: up, down, left, and right. Each move you make takes 1 second. Return the minimum time required in which you can visit the bottom-right cell of the matrix. If you cannot visit the bottom-right cell, then return '-1'. Example 1: Input: grid = [[0,1,3,2],[5,1,2,5],[4,3,8,6]] Output: 7 Explanation: One of the paths that we can take is the following: - at t = 0, we are on the cell (0,0). - at t = 1, we move to the cell (0,1). It is possible because grid[0][1] <= 1. - at t = 2, we move to the cell (1,1). It is possible because grid[1][1] <= 2. - at t = 3, we move to the cell (1,2). It is possible because grid[1][2] <= 3. - at t = 4, we move to the cell (1,1). It is possible because grid[1][1] <= 4. - at t = 5, we move to the cell (1,2). It is possible because grid[1][2] <= 5. - at t = 6, we move to the cell (1,3). It is possible because grid[1][3] <= 6. - at t = 7, we move to the cell (2,3). It is possible because grid[2][3] <= 7. The final time is 7. It can be shown that it is the minimum time possible. Example 2: Input: grid = [[0,2,4],[3,2,1],[1,0,4]] Output: -1 Explanation: There is no path from the top left to the bottom-right cell. Constraints: * 'm == grid.length' * 'n == grid[i].length' * '2 <= m, n <= 1000' * '4 <= m * n <= 105' * '0 <= grid[i][j] <= 105' * 'grid[0][0] == 0' """ Report issue for preceding element
Appendix C Solution Optimization
Report issue for preceding element
C.1 Methodology
Report issue for preceding element
For the CoT 0-shot prediction, we use the question template and system prompt released with GPT-4o in the 
simple-evals
https://github.com/openai/simple-evals/
 repository. In particular, to closely match their evaluations, we use the ChatGPT system prompt: You are ChatGPT, a large language model trained by OpenAI, based on the GPT-4 architecture. \n Knowledge cutoff: 2023-12 \n Current date: 2024-04-01" . Further, we use the following template:
Report issue for preceding element
Multiple Choice Question Answering Template Answer the following multiple choice question. The last line of your response should be of the following format: 'Answer: $LETTER' (without quotes) where LETTER is one of ABCD. Think step by step before answering. {Question} A) {A} B) {B} C) {C} D) {D} Report issue for preceding element
During optimization, we provide the constraint to the optimizer that the prediction should conclude with an answer, following the simple-evals repository, through the following constraint description: The last line of your response should be of the following format: 'Answer: $LETTER' (without quotes) where LETTER is one of ABCD..
Report issue for preceding element
Evaluation: Similarly, using the practice in the 
simple-evals
https://github.com/openai/simple-evals/
 repository, we perform string matching to find the final answer, which is one of the letters ABCD, and compare it to the ground truth answer. GPQA Diamond subset contains 198 198 questions. MMLU Machine Learning subset contains 112 112 questions, and College Physics subset contains 92 92 questions. At each iteration of optimization, we make 1 call to gpt-4o to evaluate the test time loss, 1 call to collect gradients, and 1 call to update the solution.
Report issue for preceding element
C.2 Prompts
Report issue for preceding element
The loss function for this task looks like the following:
Report issue for preceding element
Solution Refinement Objective Below is a multi-choice question and a prediction. You are a critical and creative scientist. Your job is to investigate the prediction. Critically go through reasoning steps, and see if there is a reason why the prediction could be incorrect. Use the Janusian Process, think about whether alternative answers could be true. Question: { Question } {\text{Question}} Answer by the language model: { Solution } {{\color[rgb]{.132,.545,.132}\definecolor[named]{pgfstrokecolor}{rgb}{.132,.545,.132}\textbf{\text{Solution}}}} Report issue for preceding element
Example Query for GPQA Diamond What is the concentration of calcium ions in a solution containing 0.02 M stochiometric Ca-EDTA complex (we assume that the pH is ideal, T = 25 °C). KCa-EDTA = 5  x  10 1  0 5x10^{1}0 . A) 5.0  x  10 −  3 5.0x10^{-}3 M B) 1.0  x  10 −  2 1.0x10^{-}2 M C) 6.3  x  10 −  7 6.3x10^{-}7 M D) 2.0  x  10 −  2 2.0x10^{-}2 M Report issue for preceding element
Appendix D Prompt Optimization
Report issue for preceding element
D.1 Tasks
Report issue for preceding element
Below, we provide an example query for each of the tasks in the prompt optimization section.
Report issue for preceding element
Example Query for Word Sorting Sort the following words alphabetically: List: oakland seaborg jacobi membrane trapezoidal allis marmot toggle anthology. Report issue for preceding element
Example Query for Object Counting I have a couch, a bed, a car, a fridge, two tables, an oven, a toaster, and a chair. How many objects do I have? Report issue for preceding element
Example Query for GSM8k Amber, Micah, and Ahito ran 52 miles in total. Amber ran 8 miles. Micah ran 3.5 times what Amber ran. How many miles did Ahito run? Report issue for preceding element
For word sorting and object counting, we obtain the datasets from the 
BBH repository
https://github.com/suzgunmirac/BIG-Bench-Hard
, and we randomly split examples into 50 (training)/100 (validation)/100 (test) samples. For GSM8k, we use the splits provided in DSPy [ 
10
https://arxiv.org/html/2406.07496v1#bib.bibx10
] which has 200 (training)/300 (validation)/1319 (test) samples.
Report issue for preceding element
Evaluation: For object counting and GSM8k, we use the string-based exact match metric, which looks at the last numerical value provided in the answer, and compares it to the ground truth answer. For word sorting, we prompt gpt-4o to compare the ground truth list to the response provided in the answer, through the following prompt:
Report issue for preceding element
Evaluation system prompt for Word Sorting evaluation System Prompt: Below is a question from a question-answering task, the ground truth answer, and reasoning with the final prediction. Is the final prediction correct, i.e. the same as the ground truth answer? Say only 1 (yes) or 0 (no). Return your response within 
 
 tags. e.g.
 0 
 or 
 1 
. Example prompt: 
Question for the task:
 {question} 
Ground truth answer:
 {answer} 
Reasoning and prediction from the language model:
 {prediction} Report issue for preceding element
Appendix E Molecule Optimization
Report issue for preceding element
E.1 Docking and Druglikeness Evaluation
Report issue for preceding element
To optimize molecules, we evaluate the binding affinity and druglikeness of chemical structures encoded as SMILES strings. To compute both metrics, the generated SMILES string is first converted into an octet-complete Lewis dot structure using RDKit's MolFromSmiles functionality. This method “sanitizes” molecules by adding explicit hydrogens, kekulizing aromatic rings, standardizing valence states, and assigning radicals [ 
100
https://arxiv.org/html/2406.07496v1#bib.bibx100
] . If this sanitization process fails at any step, whether through a structural ambiguity or an invalid molecule, the QED and Vina scores are replaced with a single string informing TextGrad that the molecule is invalid.
Report issue for preceding element
If the generated SMILES string does represent a valid chemical structure, we compute the QED score using RDKit's Chem.QED function. While QED scores can be quickly and reliably computed, docking scores can vary significantly depending on target and ligand structure preparation. To ensure consistency, we calculate Vina scores using the DOCKSTRING package [ 
61
https://arxiv.org/html/2406.07496v1#bib.bibx61
] , which implements a standardized docking workflow and provides a set of gold-standard targets. In particular, after the ligand has been sanitized by RDKit, DOCKSTRING (de)-protonates it at pH 7.4 using Open Babel, and prepares and refines the 3D geometric structure using the Euclidean distance geometry algorithm ETKG and the classical force field MMFF94. Finally, Gasteiger charges are computed for all ligand atoms, and the resulting structure is saved as a ligand PDBQT file passed to Autodock Vina. For target preparation, the DOCKSTRING benchmark suite provides 58 curated crystal structures of clinically relevant proteins, with the majority at less than 2.5 Å resolution. These structures are specially prepared to improve correlations between theoretical and experimental binding affinities, for example by manual addition of polar hydrogens and removal of residual water and solute molecules. DOCKSTRING also standardizes simulation parameters such as numerical seeds, search box coordinates, and sampling exhausitivity, to ensure reproducible scoring.
Report issue for preceding element
E.2 Objective Functions
Report issue for preceding element
Once the scores have been computed, they are passed to an LLM in the following format.
Report issue for preceding element
Molecule Optimization Prompt Given a docking and a druglikeness score, and a molecule as a SMILES string provide a short criticism to improve the druglikeness of this molecule and its binding affinity with the protein { protein_name}. For docking, lower is better (less than − 10 -10 is considered good) and for druglikeness, 1 1 is the best and 0 is the worst (greater than 0.8 0.8 is considered good). In terms of prioritization, the docking score is { vina_qed_ratio} times as important as the druglikeness score. Make sure your criticism is very succinct and to the point. # if smiles_string is valid SMILES: { smiles_string}, Docking: { Vina}, Druglikeness: { QED} # if smiles_string is invalid SMILES: { smiles_string}, This molecule is invalid. Report issue for preceding element
Note that this prompt allows us to specify both the target name as well as a prioritization between these two objectives. When optimizing promising molecules in late stage drug discovery, medicinal chemists use detailed structural knowledge about a protein target's binding pocket in addition to docking scores, for example through interactive 3 3 D molecular visualization software. To preserve the generality of TextGrad in our experiments, we do not to attempt to provide similar geometric information, as not all LLMs support multimodal inputs. However, we do include the protein_name in the loss prompt to inject supplementary structural information.
Report issue for preceding element
In practice, drug efficacy is typically a higher priority than absorbtion efficiency [ 
101
https://arxiv.org/html/2406.07496v1#bib.bibx101
, 
102
https://arxiv.org/html/2406.07496v1#bib.bibx102
] , so we set the vina_qed_ratio to be 10 10 . Empirically, we observe that by scaling this prioritization factor, we can tune TextGrad's generation towards molecules with differing binding affinity and druglikness tradeoffs. This prioritization also allows us to simplify post-hoc selection and ranking of the generated molecules with a single “overall” score defined as follows, where a lower overall score s overall s_{\texttt{overall}} indicates a better molecule.
Report issue for preceding element
s overall  ( molecule , protein ) = Vina  ( molecule , protein ) + ( 1 − QED  ( molecule ) ) \displaystyle s_{\texttt{overall}}(\text{molecule},\text{protein})=\texttt{Vina}(\text{molecule},\text{protein})+(1-\texttt{QED}(\text{molecule}))
(19)
Since the QED score is bounded between 0 and 1 1 , and the Vina score typically ranges between − 3.0 -3.0 to − 12.0 -12.0 kcal/mol, this overall score places approximately 10 10 times more emphasis on binding affinity than druglikeness.
Report issue for preceding element
E.3 Benchmarks
Report issue for preceding element
To benchmark the performance of TextGrad generated molecules, we compare their characteristics to clinically approved drugs for the same protein targets found in DrugBank, a database of 16 , 619 16,619 drugs [ 
103
https://arxiv.org/html/2406.07496v1#bib.bibx103
] . To ensure that the DrugBank molecules were both comparable and high quality, we filtered for drugs that were small molecules, had full clinical approval, and were designed for orthosteric binding with the same active site in the DOCKSTRING benchmark suite. After these filtering criteria, we identified 118 118 drugs targeting 29 29 of the 58 58 DOCKSTRING proteins. When evaluating binding affinity and druglikeness for the clinically approved drugs, we compute the Vina and QED scores using the same tools and workflow described in section 
E.1
https://arxiv.org/html/2406.07496v1#A5.SS1
, exactly as applied to the TextGrad molecules.
Report issue for preceding element
E.4 Initialization
Report issue for preceding element
 
Supplementary Figure 1: Molecule Initialization. We initialize TextGrad with fragment molecules from three, diverse functional groups and optimize each initial molecule for 10 10 iterations for all 58 58 targets in the DOCKSTRING benchmark suite. For each fragment and each protein, we perform post selection on the generated molecules using the summary score outlined in equation 
19
https://arxiv.org/html/2406.07496v1#A5.E19
 and visualize the resulting distribution. We observe that while the initial QED and Vina score distributions of the starting fragments varies greatly, the distribution of the optimized molecules is highly overlapping. Report issue for preceding element
In practice, molecular optimization is typically accelerated by large scale pre-optimization screening, where libraries of millions or even billions of existing chemical structures are scored and ranked by docking, druglikeness, and other metrics. Only the most promising structures, termed "leads", are further refined by medicinal chemists [ 
104
https://arxiv.org/html/2406.07496v1#bib.bibx104
] . While TextGrad is capable of optimizing any initial molecule, in this work, to more accurately characterize it's performance and avoid biasing its designs towards existing drugs, we instead select our three initial molecules from simple fragments of common functional groups, shown in Figure 
1
https://arxiv.org/html/2406.07496v1#F1a
. These fragments are highly diverse, and belong to different functional groups. Although these initial fragments have differing druglikness and binding affinity characteristics, the impact of the starting fragment on TextGrad's performance is minimal, and TextGrad is capable of generating molecules with high druglikeness and binding affinity from all three fragments.
Report issue for preceding element
E.5 Chemical Novelty
Report issue for preceding element
 
Supplementary Figure 2: Structural Novelty In panel (a), we observe increasing novelty over optimization updates, where a generated molecule is considered“novel” if there does not exist any existing molecule in ChEMBL with a Tanimoto similarity score greater than 0.8 0.8 . In panels (b,c,d), we estimate substructure similarity using the Tversky metric between TextGrad molecules and clinically approved drugs for each target. While there are a wide range of similarity scores, we observe that similarity with known drugs has little correlation with molecule performance, suggesting that TextGrad's generation process is weakly influenced by “memorized” knowledge of clinically approved structures. Report issue for preceding element
One of the primary concerns with using LLM models in scientific discovery is their capacity to simply memorize and regurgitate their training sets instead of performing logical reasoning [ 
105
https://arxiv.org/html/2406.07496v1#bib.bibx105
] . Since recent models like gpt-4o are trained on massive, opaque datasets, a key concern is that the molecules TextGrad generates may simply be duplicates of clinically approved molecules for their respective targets. To quantify and test the extent or existence of this “memorization” effect, we compare the molecules that TextGrad generates with approved drugs for their respective protein targets, as well as unrelated but existing druglike chemical compounds.
Report issue for preceding element
We first compare TextGrad generated molecules for a particular protein target with all the clinically approved small molecules found in Drugbank for the same target (see 
E.3
https://arxiv.org/html/2406.07496v1#A5.SS3
 for filtering criteria) using the Tversky similarity score on RDKit daylight chemical fingerprints. The Tversky similarity score is not symmetric, and compares substructures between a variant and reference molecule [ 
106
https://arxiv.org/html/2406.07496v1#bib.bibx106
] . In our application, this is preferred as it assigns a high score to generated (variant) molecules that contain most or all of the substructures in the Drugbank (reference) molecule, even if there exist other extraneous substructures in the generated molecule that reduce the symmetric overlap between the two molecules. A Tversky score of 1.0 1.0 indicates that the TextGrad molecule is a complete subset of the Drugbank molecule, while 0.0 0.0 indicates no overlap.
Report issue for preceding element
In order to analyze the most relevant chemical structures, we restricted our analysis to a set of high performing TextGrad molecules, rather than all molecules from all iterations. In particular, using the overall score described in Equation 
19
https://arxiv.org/html/2406.07496v1#A5.E19
, we selected the best molecule for each protein target and for each initial fragment, for a total of 87 87 generated molecules ( 29 29 druggable targets x 3 3 initial fragments) and 118 118 clinically approved drugs across 29 29 targets. For each target, we compute all pairwise Tversky scores between the 3 3 TextGrad molecules and the Drugbank molecules approved for that target, setting the Drugbank molecule as the reference, and the TextGrad molecule as the variant.
Report issue for preceding element
We observed that the distribution of Tversky similarity scores was quite broad, with a median of 0.42 0.42 but ranging from 0.14 0.14 to 0.90 0.90 (Figure 
2
https://arxiv.org/html/2406.07496v1#F2a
 (b)). However, we observe that Tversky similarity between TextGrad and DrugBnak molecules is actually slightly anti-correlated with molecule performance as measured by the overall score, suggesting that TextGrad 's optimization procedure is at best weakly influenced by prior knowledge of approved drugs. In fact, for a variety of generated molecules along a gradient of similarity scores, the generated molecules exhibit QED and Vina scores that match or even exceed their DrugBank counterparts (Figure 
2
https://arxiv.org/html/2406.07496v1#F2a
 (d)).
Report issue for preceding element
Beyond the similarity to known drugs, we are also interested in observing if TextGrad is generating novel molecules, or discovering previously unknown properties in existing compounds, for example a strong binding affinity to a protein target in a compound that has not been associated with the protein. To answer this question, we perform a Tanimoto similarity search across all of ChEMBL, a manually curated database of 2.4 2.4 million bioactive molecules with drug-like properties [ 
107
https://arxiv.org/html/2406.07496v1#bib.bibx107
] . Unlike the Tversky score, the Tanimoto metric measures the symetric overlap between two chemical structures, where 1.0 1.0 indicates an exact match, and 0.0 0.0 no overlap. We classify a TextGrad compound as “novel” if and only if there does not exist any molecule in ChEMBL with a with a Tanimoto similarity score over 0.80.
Report issue for preceding element
While the starting fragments are known molecules, we observe that as the number of iterations increases, TextGrad generates molecules that are progressively less likely to be previously known compounds. By the 6 6 th iteration, 95% of all the molecules generated by TextGrad across all 58 58 targets and 3 3 starting fragments are novel using the criteria above (Figure 
2
https://arxiv.org/html/2406.07496v1#F2a
 (a)). By observing the trajectories of generated molecules and analyzing the textual gradients, we hypothesize that the feedback provided by the Vina and QED scores encourages TextGrad to explore chemical space beyond known molecules by progressively adding and removing combinations of functional groups. Since these chemical updates can form a combinatorial number of unique structures, it is reasonable that TextGrad would reach previously unexplored regions of chemical space in a relatively small number of iterations.
Report issue for preceding element
E.6 Implicit Objectives
Report issue for preceding element
 
Supplementary Figure 3: Safety Properties We evaluate the predicted harmfullness of TextGrad molecules using the ADMET-AI model and compare them to clinically approved drugs. For both mutagenicity and clinical toxicity, 1.0 1.0 indicates a highly likelihood for harm and 0.0 0.0 a low likelihood. We observe that despite the fact that neither of these characteristics are directly encoded into TextGrad's objective function, TextGrad implicitly avoids proposing harmful molecules. Report issue for preceding element
Another key concern in applying LLMs in science is their propensity for hallucinations, where models generate factually incorrect or illogical responses while attempting to satisfy user requests [ 
105
https://arxiv.org/html/2406.07496v1#bib.bibx105
] . In our setting, this hallucinations could manifest by TextGrad proposing invalid, toxic, or otherwise undesirable molecules in order to optimize its objective function. We control for severe hallucinations by preprocessing molecules using RDKit sanitization, ensuring at the bare minimum that TextGrad generates chemically valid molecules. However, this simple preprocessing step does not completely specify desirable chemical behavior. A direct strategy would be to exhaustively encode all possible metrics for desirability in drug molecules beyond druglikeness and binding affinity into the objective function, and extend it to include sythesizability, toxicity, among other criteria. Unfortunately, this approach is not realistically feasible as not all criteria for desirability have mature computational metrics. Thus, a key question is whether TextGrad obeys so-called implicit objectives during its optimization process that curtails illogical or undesirable behavior.
Report issue for preceding element
To evaluate the extent or existence of undesirable molecules, we can characterize the harmfulness of the generated molecules, focusing on mutagenisis and clinical toxicity. Mutagenicity refers to the ability of a drug to induce genetic alterations, which may lead to DNA damage and harmful long-term affects. Clinical toxicity refers to a broad range of adverse short or long-term side effects. Importantly, neither druglikeness nor binding affinity are strongly correlated with these criteria, and thus these desirability metrics are not directly optimized or otherwise explicitly encoded in TextGrad's objectives.
Report issue for preceding element
To evaluate the propensity for mutagenisis and clinical toxicity, we employ the ADMET-AI model, that predicts these scores from the chemical structures of molecules [ 
108
https://arxiv.org/html/2406.07496v1#bib.bibx108
] . ADMET-AI employs a deep learning model trained on multiple relevant datasets. In particular, for mutagenicity, ADMET-AI is trained on 7 , 255 7,255 drugs from the Ames dataset, a bacterial reverse mutation assay for rapidly screening large numbers of compounds for can induced genetic damage and frameshift mutations. A predicted label of 1.0 1.0 indicates a high likelihood that the drug will induce mutagenesis, while a label of 0.0 0.0 indicates a low likelihood. For clinical toxicity, ADMET-AI is trained on the ClinTox dataset, a dataset of 1 , 484 1,484 drugs consisting of molecules that have failed clinical trials for toxicity reasons and also drugs that are associated with successful trials. Similarly, a predicted label of 1.0 1.0 indicates a high likelihood of clinical toxicity, while a label of 0.0 0.0 indicates a low likelihood.
Report issue for preceding element
Once again, we restrict our analysis to the best performing generated molecules with druggable targets as measured by the overall score, and select the best molecule for each protein target and for each initial fragment, for a total of 87 87 generated molecules. We then compare their predicted mutagenisis and clinical toxicity to the the 118 118 clinically approved molecules from DrugBank. We observe that for both Mutagenicity and Clinical Toxicity, the molecules generated by TextGrad have predicted distributions that indicate a low likelihood of harmful effects, and closely match the distributions of the clinically approved molecules. Together, these results suggest that TextGrad implicitly avoids proposing harmful molecules, even though these criteria are not directly encoded in its loss function.
Report issue for preceding element
Appendix F Treatment Plan Optimization
Report issue for preceding element
F.1 Prompts
Report issue for preceding element
Radiotherapy treatment plan evaluation can based on various dimensions, therefore there is no single score that can indicate the quality of plans. We adopt LLM to compute the “loss” by prompting it to assess the plan quality with clinical protocols. Specifically, LLM is used to compare each protocol with the current plan and produce the final assessment.
Report issue for preceding element
Treatment Plan Loss Prompt Please act as an impartial and objective professional radiation oncologist. Your job is to evaluate the quality of radiation therapy treatment plans based on their dose volume histogram. You should consider the following protocols: 
 Note that the order above does not indicate priority; always prioritize the regions that have protocols that are more significantly violated. Here is the dose-volume histograms of the candidate plans for evaluation; each entry in the dose-volume histograms (DVH) table indicates the percentage of volume receiving a dose higher than a certain Gy (specified in the first column). 
 We also provide the statistics of the above DVH table for ease of evaluation. 
 Now, based on the protocols, and the DVH, please evaluate the plans. Avoid any positional biases and ensure that the order in which the responses are presented does not influence your decision. Be as objective as possible. Your answer must: 1. (Evidence) Extract the corresponding entries from the DVH table based on the factors to consider. 2. (Interpretation) Based on the extracted entries from DVH table, interpret them as: {percentage}% of volume encompassing the dose more than {dose} Gy for {organ}. 3. (Analysis) Combine the interpretation and the factors, analyze whether each of the numerical factors are met. Based on the analysis on DVH tables, you need to produce a final evaluation. When all factors are satisfied, you should always answer no improvement is needed. If improvements are required, please provide suggestions on where to improve. Please ensure to follow the format below to return the evaluation results: 
 Decision: [The plan does/doesn't need to be improved.] Reasons: [list all factors that are not satisfied with detailed reasons, e.g. protocol X on (PTV/rectum/bladder/fh/body) is not satisfied because …] 
 The final answer in the end must strictly follow the format above. Report issue for preceding element Report issue for preceding element
F.2 Inner-loop optimization for treatment planning
Report issue for preceding element
We employ a two-loop optimization approach [ 
109
https://arxiv.org/html/2406.07496v1#bib.bibx109
] , which includes (i) an inner loop for inverse planning and (ii) an outer loop for optimizing the hyperparameters of the inner loop. The inner loop focuses on traditional fluence map optimization, seeking to determine the optimal fluence map x x by minimizing a cost function that combines multiple weighted objectives for various targets and organs at risk. This cost function is defined as:
Report issue for preceding element
min x \displaystyle\min_{x}
∑ t = 1 N t w t  ( [ K  x ] t − d t ) 2 + ∑ s = 1 N s w s  Θ  ( [ K  x ] s − d s )  ( [ K  x ] s − d s ) \displaystyle\sum_{t=1}^{N_{t}}w_{t}([Kx]
{t}-d
{t})^{2}+\sum_{s=1}^{N_{s}}w_{s}\Theta([Kx]
{s}-d
{s})([Kx]
{s}-d
{s})
(20)
s.t.
D 95  ( [ K  x ] t ) = d t , \displaystyle D_{95}([Kx]
{t})=d
{t},
^^
x ≥ 0 , \displaystyle x\geq 0,
^^
Here, { w t } t = 1 N t {w_{t}}
{t=1}^{N
{t}} and { w s } s = 1 N s {w_{s}}
{s=1}^{N
{s}} are the importance weights (the hyperparameters optimized by TextGrad) that balance the various objectives for N t N_{t} PTV targets and N s N_{s} OARs, respectively. K K denotes the dose influence matrix, which specifies the dose per fluence unit delivered to each voxel in the volume by each beamlet. { d t } t = 1 N t {d_{t}}
{t=1}^{N
{t}} and { d s } s = 1 N s {d_{s}}
{s=1}^{N
{s}} are the scalar objective doses for each structure. The cost function essentially penalizes squared deviations from the target objective doses for the PTV targets and penalizes squared overdosing for the OARs only when doses exceed d s d_{s} . The Heaviside function Θ \Theta is used to ensure the objective considers only positive values. The minimization is constrained to positive x x values and ensures that D 95 D_{95} — the minimum dose received by 95% of the structure volume — matches the prescribed dose for the clinical goal. We use matRad [ 
65
https://arxiv.org/html/2406.07496v1#bib.bibx65
] with interior point algorithms to solve the inner-loop optimization.
Report issue for preceding element
F.3 Additional Experimental Details
Report issue for preceding element
Dataset
Report issue for preceding element
The dataset used in this study comprised imaging and treatment plans for 5 prostate cancer patients who underwent intensity-modulated radiation therapy (IMRT). Available data for each patient includes CT scans, delineated anatomical structures, and clinically approved treatment plans obtained via Eclipse 
®
.
Report issue for preceding element
Method
Report issue for preceding element
As we mentioned in 
3.5
https://arxiv.org/html/2406.07496v1#S3.SS5
, TextGrad is used to optimize the hyperparameters (e.g., importance weights for PTV and OARs) of the inner-loop numerical optimizer that generates the treatment plan. This optimization is done using a variation of vanilla TextGrad, i.e. “projected gradient descent with momentum updates”.In particular, three prostate cancer treatment plans optimized by clinicians, along with their corresponding hyperparameters, are provided. These examples guide the updates of the hyperparameters. This procedure can be viewed as an analogy to projection, as the updated hyperparameters are “softly projected” onto a feasible set defined by the three in-context examples. Moreover, the historical hyperparameters and the textual gradients from past iterations, as an analogy to momentum, are also included in the prompts for updating the hyperparameters. This additional context helps refine the optimization process. The optimization will be stopped if the loss suggests all protocols meet, other wise, it will be stopped if the maximum number of iterations (we set it to 10) is reached.
Report issue for preceding element
Initialization
Report issue for preceding element
The hyperparameters i.e. the importance weights are all initialized at 100 for different organs. The dose objectives are set to 70.20 for PTV, 0.00 for bladder and rectum, and 30.00 for femoral heads and body, and fixed during optimization.
Report issue for preceding element
F.4 Additional Results
Report issue for preceding element
In Supplementary Table 
1
https://arxiv.org/html/2406.07496v1#T1a
 and 
2
https://arxiv.org/html/2406.07496v1#T2a
, we show additional results on comparing TextGrad optimized plan with clinicians optimized plans.
Report issue for preceding element
Supplementary Table 1: PTV dose metrics. Several dose metrics of the PTV target are displayed for all the clinical and TextGrad optimized plans, including the mean and minimum doses, as well as the D 95 D_{95} . For all the metrics, we include the average deviations from the clinical goal across 5 plans and the standard deviation in brackets. Values in bold represent the best for each PTV target.
Target
Method
Mean dose [Gy]
Min dose [Gy]
Max dose [Gy]
D 95 \textbf{D}_{95} [Gy]
PTV
Clinical Goal
70.20
≈ 70.20 \approx 70.20
≈ 70.20 \approx 70.20
70.20
^^
Radiation Oncologist
+1.97 (0.36)
-8.88 (2.31)
+4.66 (0.82 )
-0.10 (0.15)
^^
TextGrad
+0.51 (0.09)
-8.48 (2.38)
+3.63 (0.87)
+0.00 (0.00)
Report issue for preceding element Supplementary Table 2: Organs at Risk (OARs) dose metrics. We show mean dose capturing OAR sparing. Lower values demonstrate better OAR sparing which is desirable, as this number indicates organs at risk, which should not get more than dosage than what is listed in the clinical guidelines. For all the metrics, we include the average mean dose across 5 plans and the standard deviation in brackets.
Organ
Method
Mean dose [Gy] ↓ \downarrow
D 5 \textbf{D}_{5} ↓ \downarrow
D 50 \textbf{D}_{50} ↓ \downarrow
Rectum
Radiation Oncologist
23.88 (6.45)
64.26 (10.00)
20.04 (5.50)
^^
TextGrad
17.18 (4.2)
58.82 (18.81)
9.54 (0.70)
Bladder
Radiation Oncologist
22.39 (5.55)
67.81 (6.44)
14.78 (8.42)
^^
TextGrad
20.92 (0.79)
65.96 (6.96)
14.11 (3.17)
Report issue for preceding element
Report Issue
Report GitHub Issue
Title:
Content selection saved. Describe the issue below:
Description:
Submit without GitHub Submit in GitHub
Report Issue for Selection
Generated by 
L A T E xml[LOGO]
https://math.nist.gov/~BMiller/LaTeXML/
Instructions for reporting errors
We are continuing to improve HTML versions of papers, and your feedback helps enhance accessibility and mobile support. To report errors in the HTML that will help us improve conversion and rendering, choose any of the methods listed below:
Click the "Report Issue" button.
Open a report feedback form via keyboard, use " 
Ctrl + ?
".
Make a text selection and click the "Report Issue for Selection" button near your cursor.
You can use Alt+Y to toggle on and Alt+Shift+Y to toggle off accessible reporting links at each section.
Our team has already identified 
the following issues
https://github.com/arXiv/html_feedback/issues
. We appreciate your time reviewing and reporting rendering errors we may not have found yet. Your efforts will help us improve the HTML versions for all readers, because disability should not be a barrier to accessing research. Thank you for your continued support in championing open access for all.
Have a free development cycle? Help support accessibility at arXiv! Our collaborators at LaTeXML maintain a 
list of packages that need conversion
https://github.com/brucemiller/LaTeXML/wiki/Porting-LaTeX-packages-for-LaTeXML
, and welcome 
developer contributions
https://github.com/brucemiller/LaTeXML/issues
.