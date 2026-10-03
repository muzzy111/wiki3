# LLM-Enabled Multi-Agent Systems: Empirical Evaluation and Insights into Emerging Design Patterns & Paradigms - arXiv

Source URL: https://arxiv.org/html/2601.03328v1

LLM-Enabled Multi-Agent Systems: Empirical Evaluation and Insights into Emerging Design Patterns & Paradigms
logo Back to arXiv
https://arxiv.org/
 

https://arxiv.org/abs/2601.03328v1
 

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
https://arxiv.org/abs/2601.03328v1
 
Download PDF
https://arxiv.org/pdf/2601.03328v1
 

javascript:toggleColorScheme()
Table of Contents
Abstract
https://arxiv.org/html/2601.03328v1#abstract
1 Introduction
https://arxiv.org/html/2601.03328v1#S1
1.1 Paper Structure
https://arxiv.org/html/2601.03328v1#S1.SS1
2 Literature Review
https://arxiv.org/html/2601.03328v1#S2
2.1 Academic Literature
https://arxiv.org/html/2601.03328v1#S2.SS1
2.2 Open-Source & Industry Initiatives
https://arxiv.org/html/2601.03328v1#S2.SS2
2.3 Research Gap
https://arxiv.org/html/2601.03328v1#S2.SS3
3 Motivating the use of LLM enabled MAS design patterns in organisations
https://arxiv.org/html/2601.03328v1#S3
3.1 Disparate Data
https://arxiv.org/html/2601.03328v1#S3.SS1
3.2 Unstructured Data
https://arxiv.org/html/2601.03328v1#S3.SS2
3.3 Domain Specific Problems
https://arxiv.org/html/2601.03328v1#S3.SS3
4 An Emerging Paradigm
https://arxiv.org/html/2601.03328v1#S4
4.1 ReAct Agents
https://arxiv.org/html/2601.03328v1#S4.SS1
4.2 Multi-Agent Systems (MAS)
https://arxiv.org/html/2601.03328v1#S4.SS2
5 Case-Series
https://arxiv.org/html/2601.03328v1#S5
5.1 Telecoms Security - Security Operations Centre Agents
https://arxiv.org/html/2601.03328v1#S5.SS1
5.2 National Asset Register - Data Sanitation & Retrieval
https://arxiv.org/html/2601.03328v1#S5.SS2
5.3 Customer Service - Automated Queries & Complaint Responses
https://arxiv.org/html/2601.03328v1#S5.SS3
6 Discussions
https://arxiv.org/html/2601.03328v1#S6
6.1 Rapid Prototype Development
https://arxiv.org/html/2601.03328v1#S6.SS1
6.2 Domain-Specific Adaptability and Efficiency
https://arxiv.org/html/2601.03328v1#S6.SS2
6.3 Human Oversight as a Persistent Requirement
https://arxiv.org/html/2601.03328v1#S6.SS3
6.4 Key Limitations
https://arxiv.org/html/2601.03328v1#S6.SS4
7 Conclusion
https://arxiv.org/html/2601.03328v1#S7
HTML conversions 
sometimes display errors
https://info.dev.arxiv.org/about/accessibility_html_error_messages.html
 due to content that did not convert correctly from the source. This paper uses the following packages that are not yet supported by the HTML conversion tool. Feedback on these issues are not necessary; they are known and are being worked on.
failed: asymptote.sty
Authors: achieve the best HTML results from your LaTeX submissions by following these 
best practices
https://info.arxiv.org/help/submit_latex_best_practices.html
.
License: CC BY 4.0
https://info.arxiv.org/help/license/index.html#licenses-available
arXiv:2601.03328v1 [cs.MA] 06 Jan 2026
LLM-Enabled Multi-Agent Systems: Empirical Evaluation and Insights into Emerging Design Patterns & Paradigms
Report issue for preceding element
Harri Renney
Kaze Technologies
Kaze Consulting
Bath, BA1 2HN, UK
harri@kaze-consulting.com
Maxim N Nethercott
Kaze Technologies
Kaze Consulting
Bath, BA1 2HN, UK
max@kaze-consulting.com
Nathan Renney
University of the West of England
Bristol, UK
nathan.renney@uwe.ac.uk
Peter Hayes
Kaze Technologies
Kaze Consulting
Bath, BA1 2HN, UK
peter@kaze-consulting.com
Report issue for preceding element
Abstract
Report issue for preceding element
This paper formalises the literature on emerging design patterns and paradigms for Large Language Model (LLM)-enabled multi-agent systems (MAS), evaluating their practical utility across various domains. We define key architectural components, including agent orchestration, communication mechanisms, and control-flow strategies, and demonstrate how these enable rapid development of modular, domain-adaptive solutions. Three real-world case studies are tested in controlled, containerised pilots in telecommunications security, national heritage asset management, and utilities customer service automation. Initial empirical results show that, for these case studies, prototypes were delivered within two weeks and pilot-ready solutions within one month, suggesting reduced development overhead compared to conventional approaches and improved user accessibility. However, findings also reinforce limitations documented in the literature, including variability in LLM behaviour that leads to challenges in transitioning from prototype to production maturity. We conclude by outlining critical research directions for improving reliability, scalability, and governance in MAS architectures and the further work needed to mature MAS design patterns to mitigate the inherent challenges.
Report issue for preceding element
1 Introduction
Report issue for preceding element
The concept of distributing problem solving across multiple AI programs is a field in contemporary artificial intelligence (AI) that emerged in the late 1970s with works from VR Lesser [ 10.5555/1624861.1624983] and Hewitt C. [ hewitt1977viewing] . Research explored distributed problem solving, in which multiple AI type programs could cooperate to solve complex tasks that were too large for a single monolithic system to solve at the time. Originating from these concepts, the modern terminology around multi-agent systems (MAS) has been formalised [ abbas2015organization, dorri2018multi] . With the recent emergence of a combination of key enabling technologies, including the transformer [ vaswani2017attention] , large language models (LLMs) [ naveed2025comprehensive] , and access to considerable compute power [ sastry2024computing] , previously conceptual multi-agent designs and MAS are now possible to investigate in practice using LLMs [ renney2025reimagining] .
Report issue for preceding element
Since Google published “Attention is All you Need” [ vaswani2017attention] , modern language models have been converging on the use of 
transformer
 deep learning architecture with significant generative results [ jai.2025.069226] . When model parameters are scaled up, the word by word predictive mechanism leads to impressive emergent abilities. These include solving certain arithmetic calculations [ zhanginterpreting] , creative writing [ gomez2023confederacy] and software code generation [ fakhoury2024llm] . Scaled up versions of language models like GPT [ achiam2023gpt] and PaLM [ chowdhery2023palm] are referred to as LLMs, and particular LLMs have been shown to pass professional exams such as the US medical licensing exam [ brin2023large] and the US law practise BAR examination [ katz2024gpt] , along with convincingly going undetected in writing [ wu2025survey, cmc.2025.064747] and code generation [ 10.1609/aaai.v38i21.30361] .
Report issue for preceding element
The prominence of LLMs in contemporary AI research and industry is unmistakable, with leading multinational corporations investing heavily in their development. Individual LLM builds are estimated to cost between $1 million and $100 million [ chanen2023learnedAI] , and since 2023, at least 86 major releases have been recorded (Figure 
1
https://arxiv.org/html/2601.03328v1#S1.F1
). This trend reflects an unprecedented acceleration in model innovation and capital expenditure, reinforcing the imperative for scalable and systematic design paradigms to support sustainable deployment.
Report issue for preceding element
 
Figure 1: Timeline illustrating the cumulative release of major LLM models by ten leading AI companies since 2023 [ luyen2025howwell] . Report issue for preceding element
Using modern LLMs as the core reasoning engine, specialist AI agents can be formed [ alto2024building] . With a well-designed prompt, access to up-to-date domain data, and the necessary tools, an agent can be tailored to a specific task or field. The agent then becomes highly specialised for a target task, improving its effectiveness whilst reducing execution time and compute costs [ wang2024beyond, kalyuzhnaya2025llm, zhang2025grid] .
Report issue for preceding element
By arranging a number of specialist agents in a network that can hand off the next part of the process to another specialised agent, a MAS solution can be formed. Their efficiency stems from the division of labour inherent in MAS, whereby a complex task is divided into multiple smaller tasks, each of which is assigned to a distinct agent [ rezaee2015average] . It is this flexibility that as we propose in this paper, makes MAS suited to solve problems in a variety of sectors including utilities and telecoms.
Report issue for preceding element
Building on the established foundations of MAS research, this paper articulates the emerging design patterns associated with LLM-enabled MAS and seeks to formalise their use within the community. The approach is evaluated through a series of case studies across multiple domains, from which the results and observations are used to elucidate strengths and limitations. Building on these findings, we identify the critical areas of advancement required to further mature and stabilise this emerging paradigm on the path toward production-ready technology.
Report issue for preceding element
1.1 Paper Structure
Report issue for preceding element
We investigate this space and offer formalisation and results from real-world implementations to better understand the utility and caveats of the LLM-based MAS approach. To that effect, the remainder of this paper is organised as follows:
Report issue for preceding element
• Section 
2
https://arxiv.org/html/2601.03328v1#S2
 reviews the latest academic, industry and open-source literature on LLM-enabled MAS, concluding with how this paper aims to contribute formalised design patterns and test this approach on real-world case-studies. Report issue for preceding element
• Section 
3
https://arxiv.org/html/2601.03328v1#S3
 identifies the motivations for using LLM-based MAS solutions, that address key data challenges being faced by organisations. Report issue for preceding element
• Section 
4
https://arxiv.org/html/2601.03328v1#S4
 presents our formalisation of a common MAS design paradigm, outlining how configured specialist agents and network arrangements according to repeatable design patterns can be applied to solve problem classes such as data retrieval and semi-automated, human-in-the-loop pipelines. Report issue for preceding element
• Section 
5
https://arxiv.org/html/2601.03328v1#S5
 documents the application of this approach across three real-world case studies, capturing the experiences and observations of developers, end-users, and senior business executives. Report issue for preceding element
• Section 
6
https://arxiv.org/html/2601.03328v1#S6
 provides a discussion of the findings, highlighting both strengths and limitations of the proposed design patterns and broader implications for MAS development. Report issue for preceding element
• Finally, Section 
7
https://arxiv.org/html/2601.03328v1#S7
 concludes the paper with a summary of key insights and future research directions in this evolving field. Report issue for preceding element
2 Literature Review
Report issue for preceding element
The rapid advances in LLM architectures and the unpredictable emergent behaviours indicate that the technology is still in a formative stage [ berti2025emergent] . Exasperated by the lack of understanding of how LLMs achieve their emergent abilities [ singh2024rethinking] and ethical concerns leading to potential government regulation [ mesko2023imperative] , effective application of LLMs for intelligent agent networks is still ongoing and timely.
Report issue for preceding element
One foundational technique that enables LLMs to exhibit improved reasoning capabilities is Chain-of-Thought (CoT) prompting [ wei2022chain] . This method guides the model through a series of intermediate reasoning steps before producing a final answer, improving accuracy on tasks requiring logical inference. CoT has proven particularly effective for complex problem-solving and offers an interpretable view of the model's reasoning process, revealing how conclusions are reached and where errors may arise. While CoT operates sequentially, an extension known as Tree-of-Thought (ToT) introduces branching reasoning paths, yielding measurable improvements on tasks with high complexity [ yao2024tree] . Notably, ToT reasoning invokes multiple agents to explore alternative reasoning trajectories, representing a rudimentary form of dynamic multi-agent coordination, a concept that this paper expands upon in greater detail.
Report issue for preceding element
Beyond prompt engineering and multi-agent invocation, tool integration has emerged as a critical technique for specialising general-purpose LLMs into task-specific intelligent agents. A prominent example is Retrieval-Augmented Generation (RAG) [ lewis2020retrieval] , introduced by Lewis et al. in 2020, which enables LLMs to access and reason over external datasets not included in their training corpus. By indexing dynamic, domain-specific, or proprietary data sources, RAG allows models to generate informed and contextually grounded outputs, making it an industry-standard option for knowledge-intensive applications [ oche2025systematic] . As one of RAG's pioneering researchers notes [ Kiela2024RAG] :
Report issue for preceding element
“Language models are about 20% of the entire system/solution, and is surrounded by further engineering parts.”
Report issue for preceding element
emphasising the need to design systems rather than relying on building isolated models. Similarly, other specialised agents require interfaces to interact with diverse tools, such as SQL databases, continuing the evolving drive towards MAS, where multiple LLM-powered specialised agents collaborate to solve complex, heterogeneous tasks.
Report issue for preceding element
2.1 Academic Literature
Report issue for preceding element
As specialised agents proliferate, research increasingly explores how they can be connected and coordinated within MAS to address complex, targetted, domain specific problems. Recent literature presents several MAS designs targeting focused applications. For instance, Okonkwo and Onobhayedo [ jai.2024.058649] investigate MAS for requirements capture in software development, demonstrating how LLM-powered agents can assist in eliciting and validating specifications. Similarly, Lin et al. [ lin2024llm] propose a MAS framework for code generation, where agents act as domain experts across different stages of the development lifecycle, interacting with engineers in a human–machine teaming environment. Their findings indicate promising efficacy in adopting engineering roles and facilitating collaborative workflows. Beyond software engineering, Kearney's 
Bots of the SoCs
 study [ kearney2024bots] evaluates MAS integration within Security Operations Centres (SoCs), benchmarking different agent arrangements using the Boss of the SOC dataset [ splunkgh2023BotS] . Results suggest that the most effective MAS configuration tested achieves performance comparable to a junior cyber analyst, highlighting MAS potential to augment human expertise in high-stakes domains.
Report issue for preceding element
Despite the promising results in the literature, MAS implementations face notable challenges. Pan et al. [ pan2025multiagent] highlight that as agent networks scale, coordination complexity can introduce significant overhead, reducing efficiency and responsiveness. This can lead to misalignment of the MAS solutions caused by agents local optimisation conflicting with global goals, the stochastic nature of using LLM's and error propagation where an agent's incorrect reasoning can cascade through a system. Hence, to be effective, the MAS approach needs structured design patterns and paradigms to mitigate intrinsic challenges from MAS including coordination failures and improve reliability. Further, matters of sustainability and ethics will need to be considered as MAS architectures build on LLMs, addressing the emerging challenges inherent to LLM-based systems [ ding_sustainable_2024, hinds_our_2023, kapania_im_2025] . Where, in some cases, a prototype may imply the opportunity to defer the importance of issues such as verified accountability, biases, and new vectors of exploitation, it is important that these be considered and addressed [ jiao_navigating_2025] . It is therefore important to remain attentive to developments in this area as a better understanding emerges, particularly in areas such as censorship, transparency, and intellectual property and plagiarism, which are currently less explored ethical considerations.
Report issue for preceding element
Beyond research focused on domain-specific MAS designs, more ambitious horizon initiatives are emerging. These efforts explore how AI agents might cooperate at scale, potentially evolving into ubiquitous tools that replace existing technologies, including aspects of the internet. A notable example is MIT's NANDA project [ MIT2025NANDA, raskar2025beyond] , which proposes a decentralised 
Internet of AI Agents
 framework designed to support collaboration among billions of specialised agents across a distributed architecture. Positioned between narrowly focused MAS implementations and visionary concepts of global agent autonomy, this paper focuses on formalising emerging design patterns that enable practical MAS solutions for diverse domain-specific problems.
Report issue for preceding element
2.2 Open-Source & Industry Initiatives
Report issue for preceding element
Drawing from the activity outside of the academic literature, the open-source community is pushing ahead with frameworks and architectures for supporting the development of LLM-enabled MAS. The LangChain framework has supplied considerable support for multi-agent LLM programming [ topsakal2023creating] . This includes the LangChain Expression language [ Darmon2024LCEL] , a domain-specific language that is parsed by the LangChain framework to arrange "chains" of agents to feed inputs and outputs between each other, mostly with support for sequential arrangements. The LangChain expression language is extended by the LangGraph project [ jeong2024study] to manage and arrange branching networks of multiple agents for MAS development.
Report issue for preceding element
Major industry vendors are increasingly aligning with community-driven frameworks, actively integrating multi-agent approaches into their products. Notable examples include Microsoft's AutoGen [ wu2023autogen] and Copilot [ khan2024microsoft] , as well as Amazon's Bedrock Agents [ amazon2025bedrockagents] . As organisation and open-source projects expand, the challenge of interoperability becomes more pronounced. In response, Anthropic introduced 
1
 
1
 1 And since handed over to the Agentic AI Foundation, directly funded by the Linux Foundation the Model Context Protocol (MCP), an open standard designed to enable LLMs to connect and interact seamlessly with external tools, data sources, and services [ hou2025model] .
Report issue for preceding element
Most leading cloud compute suppliers and Agentic AI vendors are rushing to develop similar tooling and support within their own proprietary environments, either based off or heavily influenced by the open-standards and initiatives. At the time of writing, Microsoft has it's Agentic AI development tooling in beta phase in Azure AI Foundry [ microsoft2025aifoundry] , and OpenAI offers it's custom ' 
GPT's
 for users to specialise agents that they can then integrate with wider protocols and environments [ eloundou2024gpts] .
Report issue for preceding element
2.3 Research Gap
Report issue for preceding element
Our review reveals a disconnect between two dominant strands of academic literature: (i) highly specialised LLM-enabled MAS designs evaluated in narrow contexts, and (ii) visionary frameworks proposing global, decentralised agent ecosystems. In contrast, industry efforts are rapidly converging on practical MAS development, driven by advanced tooling and open standards that enable organisations to address domain-specific challenges at scale whilst mitigating the inherent challenges that arise from MAS.
Report issue for preceding element
This divergence highlights the need for formalisation of emerging design patterns that underpin these industry-driven solutions. While such patterns are increasingly adopted in practice, they remain under-explored in academic discourse. In this paper, we address this gap by documenting a common MAS design paradigm and evaluating its utility through empirical tests across three case studies. Our findings provide insights into the strengths and limitations of this approach and identify complexities, such as alignment and scalability, that traditional architectures often avoid.
Report issue for preceding element
3 Motivating the use of LLM enabled MAS design patterns in organisations
Report issue for preceding element
Organisations face a multitude of challenges in managing their data-assets effectively [ sarker2022comprehensive, escobar2021quality] . In particular, many have accumulated vast quantities of data [ Pallardy2024howmuchdata] , yet struggle to organise, govern and interpret it in a way that generates meaningful insights for decision-making and supports automation [ ugarte2021data, Sellbery2025howmuchdata] , with as little as 16% being classed as data-driven according to Lewkowicz J. [ Lewkowicz2024datafocus] . In this section we examine three core data challenges confronting organisations that MAS is positioned to address: Disparate Datasets, Unstructured Datasets, and Domain Specific Data Context.
Report issue for preceding element
3.1 Disparate Data
Report issue for preceding element
As organisations grow in scale and complexity, they often encounter significant challenges associated with data fragmentation and siloed information systems [ carruthers2022breaking] . For large organisations in sectors such as Finance [ Johnny2023datasilosgovernance] and Government [ Kelly2025legacygovernment] , data is often generated and stored across multiple departments, locations, and platforms, each of which may employ different data standards, formats, and schemas. Over time, this unmanaged decentralisation leads to inconsistencies and incompatibilities that make data integration, governance, and cross-functional analysis increasingly difficult. Traditional solutions, such as static data pipelines or schema-mapping tools, often struggle to cope with the dynamic and heterogeneous nature of these distributed data environments, especially when applied retrospectively [ bakis2007towards] .
Report issue for preceding element
LLM-enabled MAS offers a promising alternative to overcoming this challenge. Through the use of specialist AI agents capable of interpreting, aligning, and translating disparate data schemas in real time, MAS can dynamically integrate information from multiple, previously isolated sources. These agents can autonomously identify relationships between datasets, resolve schema mismatches, and harmonise data structures to enable unified access and analysis. This adaptability allows agent-based systems to act as intelligent intermediaries, facilitating improved navigation across diverse, distributed, and evolving data landscapes that would usually consume significant workforce time.
Report issue for preceding element
3.2 Unstructured Data
Report issue for preceding element
When data is structured and well-organised at its source, it can be readily managed, queried, and analysed to generate reliable insights. For example, sensor outputs typically conform to predefined schemas [ dunning2015time] , producing consistently formatted records, while transactional data stored in relational databases adheres to established data models and validation rules [ date1989guide] . Such structured datasets are well-suited to conventional analytical and automation techniques [ IBM2025structured] .
Report issue for preceding element
However, organisations are increasingly faced with large volumes of unstructured or semi-structured data, estimated to comprise as much as 90% of enterprise information [ muscolino2023untapped] . These datasets lack consistent schemas or formats [ tredinnick2024managing] and include examples such as interview transcripts, emails, reports, and free-form text, all characterised by ambiguity, context dependency, and linguistic variability [ inmon2007tapping] . These properties make integration and interpretation significantly more challenging, often requiring advanced natural language processing (NLP) and semantic reasoning techniques to extract meaningful structure [ gharehchopogh2011analysis, li2022neural] .
Report issue for preceding element
LLM-based agents offer a powerful capability to address these challenges by performing sophisticated NLP and semantic reasoning on unstructured datasets [ deng2025unstructured] . When orchestrated within a MAS, these agents can operate seamlessly across both structured and unstructured data sources, creating an integrated Single Information Environment (SIE) through which information can be navigated, queried, and understood in real time [ li2024llm, renney2025reimagining] .
Report issue for preceding element
3.3 Domain Specific Problems
Report issue for preceding element
Across industries, organisations often face similar categories of challenges, yet the specific context, constraints, and requirements within each domain introduce nuances that demand tailored solutions [ mohagheghi2010evaluating] . For instance, systems built for healthcare [ arunprasath2024improving] , defence [ yuvathasecure] , or finance [ Kazmi2025dataregsfinance] may share a need for secure data retrieval or analysis, but differ substantially in their data semantics, regulatory obligations, and interpretive logic. Developing and maintaining such bespoke systems traditionally requires specialised software engineering expertise and personnel capable of aligning technical solutions with domain-specific needs, creating dependencies that can limit scalability and agility [ mernik2005and] .
Report issue for preceding element
LLM-enabled MAS provides adaptive AI that when linked to contextual resources and tooling, is quickly configured to meet domain specific needs. By configuring specialist agents with domain-relevant knowledge, ontologies, and reasoning capabilities, a MAS can be rapidly adapted to new contexts without extensive retraining or redevelopment. These agents can interpret domain-specific data [ aryal2024leveraging] , apply contextual understanding [ du2024survey] , and generate informed outputs, effectively bridging the gap between generic AI capability and domain-specialised application. As a result, MAS can reduce reliance on human intervention for bespoke problem-solving [ cambon2023early] , allowing professionals to focus on higher-level analysis while maintaining a flexible, reusable framework for tackling diverse, domain-specific challenges.
Report issue for preceding element
4 An Emerging Paradigm
Report issue for preceding element
Building on the key challenges faced by organisations, this section introduces the foundational elements of the emerging MAS paradigm being documented in this paper. We begin with the latest conceptualisation of specialist autonomous agents, commonly referred to as ReAct Agents and progress towards their integration into collaborative networks. These networks form the basis of broader systems designed to address complex, domain-specific problems.
Report issue for preceding element
4.1 ReAct Agents
Report issue for preceding element
In 2022, the concept of an individual agent operating within a CoT reasoning loop and performing decision-making tasks has been formalised in the definition of the ReAct agent [ yao2022react] . The ReAct agent involves the following core components:
Report issue for preceding element
• Tools: Functions that perform specific tasks, such as querying the Google Search API, accessing an SQL database, executing code via a Python Interpreter [ python2025interpreter] , or performing calculations. Report issue for preceding element
• Reasoning Engine: The large pre-trained model that powers the system. State-of-the-art LLMs are preferred due to their advanced reasoning capabilities. Report issue for preceding element
• Agent orchestration: The overarching system that manages interactions between the LLM and its tools. Report issue for preceding element
• Memory: Mechanisms for tracking past reasoning and inputs to inform current decisions. Short-term memory is typically maintained within the prompt context, while long-term memory is stored externally (e.g., in a vector database) and retrieved using semantic similarity to provide relevant context for ongoing tasks. Report issue for preceding element
Following the workflow loop illustrated in Figure 
2
https://arxiv.org/html/2601.03328v1#S4.F2
, such an agent typically operates through the following steps:
Report issue for preceding element
Query Processing: The system processes an input query from another entity (e.g., a user or another agent). Report issue for preceding element
Tool Utilization: The agent selects an appropriate tool (if necessary), prepares its input, executes the tool, and obtains the output. Report issue for preceding element
Information Processing: The agent interprets the tool's input and output, generates an observation, and determines the next action. Report issue for preceding element
Synthesis & Response: Using the accumulated information, the agent decides whether it has sufficient context to return a response or whether to repeat the process (returning to Step 1) until a coherent answer is formed, as per CoT reasoning. Report issue for preceding element
With this definition of a specialised ReAct Agent, capable of recursive reasoning and action execution, we can begin to consider how such agents can be organised as part of a broader MAS.
Report issue for preceding element
 
Figure 2: Workflow loop of a ReAct agent, depicting iterative reasoning and action execution of key stages, enabling recursive reasoning through chain-of-thought reasoning. Report issue for preceding element
4.2 Multi-Agent Systems (MAS)
Report issue for preceding element
While a single agent can be highly effective when tailored to perform a specialised task [ ferrag2025llm] , increasing its scope by adding too many available tools often introduces complexity and degrades performance. Empirical evidence shows that agent performance often degrades when the toolkit expands beyond 8–12 tools, due to context-window overload and cognitive interference [ hinthorn2025benchmark, prompt2025MCPoverload] . This underpins the rationale for delegating capabilities to specialist agents in a MAS, rather than a single, overburdened general model.
Report issue for preceding element
With MAS, capabilities can be distributed across specialist agents that communicate and share reasoning with one another. This approach preserves the effectiveness of individual agents while enabling the system to tackle more complex, multi-faceted problems. The resulting MAS offers several key benefits: (i) Modularity: Independent agents simplify development, testing, and maintenance; (ii) Specialisation: Expert agents can focus on specific domains, improving accuracy and efficiency; (iii) Control: Each agent can be explicitly configured and managed, offering finer grained control to improve alignment with system objectives; (iv) Economic: Tasks are allocated only to relevant agents, meaning agents that are not required remain inactive. This modular activation reduces computational overhead and operational costs. Furthermore, agents can be distilled into smaller, more efficient versions optimised for their specialised tasks [ yang2024effective] .
Report issue for preceding element
Defining communication mechanisms is a critical step in assembling a MAS. Building on the concept of specialist ReAct Agents introduced in Section 
4.1
https://arxiv.org/html/2601.03328v1#S4.SS1
, Table 
1
https://arxiv.org/html/2601.03328v1#S4.T1
 covers key components of MAS architectures that will be referred back to in this paper, including control flow strategies, interaction styles, history-sharing policies, and network configurations to coordinate agent behaviour effectively. Figure 
3
https://arxiv.org/html/2601.03328v1#S4.F3
 illustrates these components within an abstract Single Information Environment (SIE) configuration. In this example, a strategic decision-maker interacts with the system as a human-on-the-loop, requesting reports through a coordinator agent. The coordinator employs a dynamic control flow to determine, at runtime, which specialist data-retrieval agents should be engaged via agent handoff with history sharing. One specialist agent uses an explicit tool flow to fetch data, while another operates under an explicit human-in-the-loop control flow for data acquisition. This diagram syntax will be used throughout the remainder of the paper to convey MAS network configurations concisely.
Report issue for preceding element
Aspect
Description
Control Flow
Explicit: Predefined sequence of agent interactions via graph edges. Dynamic: LLM decides flow at runtime.
Interaction Styles
Handoff: Passes prompt to a new agent. Tool Flow: Leaf nodes call tools; intermediate nodes manage handoffs.
History Sharing
Full reasoning trace: Agents share a labelled log of all agent actions, communications and reasoning steps as part of their handoff prompts. Final results only: Internal steps between input and results are not exchanged in handoff between agents.
Network Configurations
Supervisor: Leaf node agents coordinated by supervisor agents. Swarm: A decentralised structure without any hierarchy where agents dynamically hand off tasks to each other based on specialisation. Hierarchical: A layered architecture that organises agents under multiple supervisory tiers for scalability and structured control. Single Information Environment (SIE): A data-centric design where agents specialise in unique datasets, with coordinators routing queries to the appropriate agent..
Human Interaction
Human-in-the-loop: Approve/reject, review tool calls, interrupts. Human-on-the-loop: Oversight only.
Table 1: Stack of common definitions for key components used for defining MAS architectures. Report issue for preceding element
 
Figure 3: Abstract representation of a Multi-Agent System configured as a Single Information Environment (SIE). The diagram illustrates dynamic control flow, agent handoff strategies, and human-on-the-loop oversight for coordinated data retrieval and decision-making. Report issue for preceding element
5 Case-Series
Report issue for preceding element
This section applies the emerging paradigm that leverages MAS patterns and LLMs as core reasoning engines for each agent in a series of three proofs-of-concept (PoCs) and pilot studies outlined in Table 
2
https://arxiv.org/html/2601.03328v1#S5.T2
 addressing real-world challenges across multiple industries. These include telecommunications, government defence, national heritage, and utilities, demonstrating the versatility and scalability of MAS in diverse, high-stakes domains.
Report issue for preceding element
ID
Domain
MAS Architecture
Evaluation Metrics
CS1
Telecommunications Security
SIE
Stakeholder Feedback
CS2
National Heritage Sector
SIE
Stakeholder Feedback & Open-Ended review per Query
CS3
Utilities Sector
Hierarchical
UAT, Likert ratings, categorisation labelling
Table 2: Summary table of the case studies covered within this study. Report issue for preceding element
Beyond these examples, the approach is also being extended to intelligent and secure data migration within the Government Defence sector, which will be evaluated as part of future work.
Report issue for preceding element
5.1 Telecoms Security - Security Operations Centre Agents
Report issue for preceding element
In this case study, the security division of a major UK telecommunications provider sought to enhance intelligent tooling and data support within its SOC. The organisation's existing approach to cyber threat intelligence was heavily human-centric, requiring dozens of analysts to manage vast volumes of data [ crowley2019SOC] . This approach is increasingly unsustainable, unable to keep pace with the exponential growth and complexity of the global threat landscape [ zidan2024assessing] . For additional context, publicly disclosed vulnerabilities, representing only a fraction of SOC data feeds, have surged from a few thousand in 2016 to over 46,000 annually in 2025 
2
 
2
 2 
https://www.cvedetails.com/browse-by-date.php
https://www.cvedetails.com/browse-by-date.php
. Additionally, from the estimated 400 million terabytes of data generated online each day [ Loy2025terabytes] , open-source intelligence (OSINT) must be gathered, filtered and analysed. Managing this manually is far beyond the capacity of traditional human-centric analysis [ stolovitch2006handbook] .
Report issue for preceding element
Compounding this challenge, the cybersecurity domain suffers from inconsistent threat taxonomies, fragmented data sources, and a pronounced Western-centric bias [ cristiano2023cybersecurity] . This convergence of data overload, analytical fragmentation, and intelligence gaps creates a critical bottleneck in cyber defence. Forward-thinking organisations, are exploring how LLMs can power specialist agents for automated data retrieval and insight generation within SOC environments.
Report issue for preceding element
This study explored how a MAS architecture could support SOC analysts by automating critical tasks such as data analysis and cross-correlation. The prototype, shown in Figure 
4
https://arxiv.org/html/2601.03328v1#S5.F4
, implemented a SIE to enable seamless integration of structured SOC datasets with unstructured OSINT feeds. To enhance usability, the solution incorporated a conversational chatbot interface, allowing analysts to query and navigate complex data sources intuitively and in real time.
Report issue for preceding element
 
Figure 4: MAS architecture deployed in a Telecom SOC case study. The design integrates specialised agents for threat intelligence retrieval and correlation, coordinated through a central supervisor agent, with a conversational interface for analyst interaction. Report issue for preceding element
Figure 
5
https://arxiv.org/html/2601.03328v1#S5.F5
 depicts an example of the reasoning stages logged within the Telecoms SOC case study. In this example, a user initiates a query via the Chatbot Interface Agent, requesting details on a specific CVE and its associated CVSS score. The Coordinator Agent delegates tasks to two specialised agents: the Cellular Agent, which performs vector similarity searches to extract contextual threat intelligence, and the Vulnerability Agent, which executes SQL queries using CoT reasoning to retrieve CVSS scores. This multi-agent workflow demonstrates the MAS paradigm's ability to integrate heterogeneous data sources, combining structured vulnerability databases with unstructured threat reports, while preserving modularity and adaptability for SOC operations. Furthermore, the Coordinator Agent optimises resource utilisation by recognising when a query requires only a single source and delegating tasks accordingly, thereby reducing unnecessary computational overhead.
Report issue for preceding element
 
Figure 5: Example of MAS reasoning stages in the Telecoms SOC case study. This demonstrates seamless integration of structured and unstructured data sources, supporting efficient and context-rich responses to analyst queries. Report issue for preceding element
To ensure compliance with telecommunications security policies, the MAS solution was deployed as a portable Docker container, enabling secure on-premises implementation. The PoC was tested with key stakeholders and received highly positive feedback on usability and potential impact. Analysts noted that the system could significantly reduce workload by automating data navigation and correlation across heterogeneous sources.
Report issue for preceding element
Following the demonstration and subsequent discussion with the Chief Information Security Officer (CISO), they planned further investigation into this approach to augment existing SOC analyst tooling. This feedback indicates the viability of MAS as a method for scaling SOC operations amid increasing cyber complexity. It underscores both the operational benefits for analysts and the strategic potential for senior leadership pursuing digital transformation toward a data-centric SOC model.
Report issue for preceding element
5.2 National Asset Register - Data Sanitation & Retrieval
Report issue for preceding element
This case study focuses on a large UK national organisation managing extensive assets and inventories across numerous sites. Over time, siloed datasets emerged at every location, each adopting unique data capture methods and structural conventions. This fragmentation resulted in poor data standardisation, making asset inventory management and retrieval highly inconsistent and inaccessible for staff. Consequently, each site's dataset required a different interpretation approach, complicating integration efforts.
Report issue for preceding element
While a long-term initiative to standardise data storage and schema design was planned, an interim solution was needed to enable seamless access and querying of asset information across all UK sites. To address this, a MAS PoC was developed using the design paradigm outlined in this paper. The solution implemented an SIE MAS architecture focused on bridging inconsistencies between structured and unstructured datasets.
Report issue for preceding element
Through stakeholder discovery sessions and business requirement workshops, the SIE MAS architecture shown in Figure 
6
https://arxiv.org/html/2601.03328v1#S5.F6
 (a) was defined. It features a coordinated framework of specialised agents, beginning with a coordinator agent that dynamically hands off prompts to the appropriate data-retrieval specialists that are trained and equipped with data retrieval tooling. To maximise accessibility for non-technical staff, the interface was designed as a natural language chatbot, requiring minimal training and enabling intuitive interaction.
Report issue for preceding element
The platform-agnostic design was deployed in the organisation's Microsoft Azure cloud environment, leveraging native agent services to ensure scalability and compliance. For validation, the PoC was tested by ten senior staff members over one month, with open-ended qualitative feedback collected with a record of comments per use of the solution. Sentiment analysis using Lexicon-Based Matching [ inproceedings2019jennifer] categorised responses into positive and negative segments, as shown in Figure 
6
https://arxiv.org/html/2601.03328v1#S5.F6
 (b). Overall, feedback at 61% was weighted slightly more positively with detail in the feedback indicating how adjustments could be made to quickly improve this. This assumption for the PoC's potential was acknowledged as the stakeholders requested follow-up work to expand the solution. Additionally, planning discussions were held on evolving the internal tool into a customer-facing chatbot to enhance user experience by providing holistic insights into their national assets.
Report issue for preceding element
This PoC demonstrated that SIE MAS architectures have potential to unify fragmented datasets without requiring immediate schema standardisation. The conversational interface lowered adoption barriers for non-technical users, while cloud deployment ensured scalability and compliance. However, considering the speed of development taking place within just one month, results indicated that improvements on consistency and reliability are needed. Despite these limitations, strong stakeholder interest in extending the solution to customer-facing applications underscores its potential for broader organisational impact with further testing.
Report issue for preceding element
 
( a)
Report issue for preceding element
 
( b)
Report issue for preceding element
Figure 6: (a) MAS architecture for the National Asset Register case study, featuring dynamic agent orchestration for cross-site data retrieval and sanitation.(b) Sentiment analysis of stakeholder feedback, categorised into positive and negative responses, indicating overall favourable reception but with clear area for improvement. Report issue for preceding element
5.3 Customer Service - Automated Queries & Complaint Responses
Report issue for preceding element
This case study examines a UK utilities company seeking to improve the efficiency and consistency of its customer service operations, with a particular focus on automating first‑time response (FTR) emails. The organisation had previously commissioned two external contractors to address this challenge; however, neither produced a solution that was either viable or scalable. The present study therefore explored a MAS approach to assess whether targeted automation could deliver measurable performance gains while retaining necessary human oversight.
Report issue for preceding element
Following discovery sessions, analysis of the incumbent architecture, and stakeholder consultations, key opportunities for automation were identified in email triage, knowledge retrieval, and response drafting. The original design was adapted as iterative spiral development was conducted [ sari2022systematic] . The final resulting MAS architecture (Figure 
7
https://arxiv.org/html/2601.03328v1#S5.F7
) integrates domain‑specific contextual knowledge from Knowledge Base Articles (KBA) with up‑to‑date customer records from the Customer Relationship Management (CRM) system. Specialised agents perform information extraction from inbound emails, retrieval and synthesis of relevant KBA and CRM context, and generation of draft responses aligned with predefined templates. Human‑in‑the‑loop checkpoints remain embedded for risk‑sensitive decisions and quality assurance, particularly at the user-refinment stage to transition a FTR refined silver email into a gold email ready to send. This configuration constitutes a domain‑specific automation strategy that exceeds the flexibility of conventional scripted or purely rule‑based pipelines.
Report issue for preceding element
 
Figure 7: End-to-end MAS pipeline for customer service automation, integrating email triage, contextual knowledge retrieval, and response drafting. Human-in-the-loop checkpoints ensure compliance and quality assurance within the automated workflow. Report issue for preceding element
The solution was implemented using a platform‑agnostic design and deployed to Microsoft Azure, utilising Azure's agent services and hosted within the Microsoft Fabric ecosystem. Integration with Power BI provided operational monitoring and business analytics. In this environment, the MAS produced approximately five FTR emails per minute at an estimated operational cost of ~£0.05 per email, with horizontal scalability achievable through distributed, parallel execution. By comparison, the fully manual baseline generated about three FTR emails per minute at a substantially higher ~£0.33 per‑email according to the business' estimates, indicating potential improvements in both throughput and cost efficiency.
Report issue for preceding element
From an engineering perspective, the MAS paradigm accelerated delivery of initial capabilities. As a point of comparison, the lead developer reported on the project a conventional regular‑expression (regex) categorisation baseline required ~4.5 hours to achieve first testable outputs, whereas an equivalent MAS specialist agent produced comparable first results in less than an hour, reflecting gains in development velocity and extensibility.
Report issue for preceding element
A pilot User Acceptance Test (UAT) involved three participants, who assessed 24 real customer emails. Participants tracked in Figure 
8
https://arxiv.org/html/2601.03328v1#S5.F8
 ( a) rated system output of FTR using five Likert‑scale dimensions: correctness, usefulness, clarity, groundedness, and safety (1 = poor; 5 = excellent) 
3
 
3
 3 For the interested reader, full details and data are hosted at: 
https://osf.io/4dzmv/overview
https://osf.io/4dzmv/overview
. The evaluation considered two tasks: (i) categorisation of incoming emails and (ii) FTR generation aligned with organisational templates.
Report issue for preceding element
Email categorisation achieved 100% accuracy when aggregating judgements across all participants. For FTR generation email quality, mean scores (Figure 
8
https://arxiv.org/html/2601.03328v1#S5.F8
 ( b)) on each dimension exceeded 3/5, with clarity and safety averaging ~4/5. Although inter‑participant variability was observed (e.g., safety ratings ranged from 3.3 to 5.0), overall performance surpassed the manual baseline on time‑to‑draft and exhibited promising quality indicators.
Report issue for preceding element
 
( a)
Report issue for preceding element
 
( b)
Report issue for preceding element
Figure 8: (a) Evaluation results from the UAT per participant, showing Likert-scale ratings across five dimensions: correctness, usefulness, clarity, groundedness, and safety. (b) Same results aggregated as the mean across participants. Report issue for preceding element
This pilot study indicates that an MAS architecture can materially enhance operational efficiency and response consistency in customer service workflows, delivering measurable gains in throughput and unit cost while accelerating development cycles. Notwithstanding the limited scope of evaluation and the identified variability in response quality, stakeholder interest in scaling the system and extending it towards first‑contact resolution underscores its potential as a scalable, adaptable approach to enterprise customer engagement. Future work that prioritises expanded trials is needed, with rigorous A/B testing against manual baselines, and targeted tuning to reduce variance across safety and clarity metrics.
Report issue for preceding element
6 Discussions
Report issue for preceding element
The case series presented in this paper provides an opportunity to reflect on the practical implications of adopting MAS architectures powered by LLMs as the agent reasoning engine. Drawing on insights from three distinct domains: telecommunications security, national asset management, and customer service automation, the discussion considers the strengths, limitations, and future directions of this emerging paradigm. The following subsections examine three key themes that emerged across all case studies.
Report issue for preceding element
6.1 Rapid Prototype Development
Report issue for preceding element
The case series demonstrates that MAS architectures significantly accelerate prototyping, enabling functional solutions to be developed in weeks rather than months. For instance, in Case Study 3 (Customer Service Automation), two previous contractors failed to deliver any viable solution after several months of development. In contrast, using the MAS approach, the prototype and UAT were completed within one month.
Report issue for preceding element
This acceleration is further supported by the platform-agnostic nature of MAS, which allows deployment across on-premises containers and cloud ecosystems without major infrastructure changes, effectively bridging interoperability gaps. However, this speed advantage introduces a critical trade-off: while early-stage development is expedited, transitioning to production requires extensive tuning to address alignment issues and additional compute costs inherent to LLMs, such as variability in outputs and compliance constraints. These challenges may offset initial time savings, underscoring the need for future research to evaluate full lifecycle costs, reliability, and performance benchmarks for MAS at scale.
Report issue for preceding element
6.2 Domain-Specific Adaptability and Efficiency
Report issue for preceding element
A key strength of MAS architectures lies in their adaptability across diverse domains, particularly when combined with LLM reasoning and contextual enrichment through RAG and tool integration. Unlike rigid, rule-based workflows, MAS enables dynamic orchestration of specialised agents, allowing systems to align with domain-specific semantics, compliance requirements, and operational constraints.
Report issue for preceding element
This flexibility was evident in the case studies: for example, the SOC prototype automated cross-correlation of heterogeneous threat intelligence sources, a task traditionally requiring extensive manual analysis, while the customer service solution integrated CRM and knowledge base data to generate contextually grounded responses that a specialist would typically have to learn.
Report issue for preceding element
Beyond adaptability, MAS delivers efficiency gains by reducing reliance on large development teams and accelerating innovation cycles. These benefits extend beyond speed; they reflect the ability of MAS to scale across problem spaces without wholesale redesign, positioning this paradigm as a reusable foundation for bespoke, high-stakes applications.
Report issue for preceding element
The immediate consequence is disruptive organisational impact, as highlighted in emerging enterprise AI research [ puavualoaia2023artificial] . Rapid domain-specific adaptability could reshape workforce structures, potentially reducing the need for certain specialised roles and prompting a re-evaluation of organisational strategies.
Report issue for preceding element
6.3 Human Oversight as a Persistent Requirement
Report issue for preceding element
Despite the automation gains observed, all case studies reaffirm the necessity of human involvement, either in-the-loop or on-the-loop, to ensure accountability, compliance, and contextual judgement. As emphasised by Brown [ brown2024impactai] , “The future of leadership lies in complementarity [AI], not replacement.” MAS architectures can automate routine tasks and provide actionable insights, but they cannot replicate the nuanced decision-making and ethical considerations inherent to human oversight. In practice, this manifested as supervisory checkpoints in the customer service PoC and strategic decision-maker roles in the SOC and asset management solutions. These findings reinforce the argument that MAS should be positioned as augmentative rather than substitutive technologies within organisational workflows.
Report issue for preceding element
6.4 Key Limitations
Report issue for preceding element
The case series highlights several strengths of the MAS paradigm, such as the initial rapid development lifecycle. However, key limitations are presented through observations by the developers, users and stakeholder feedback. The dependency on LLM reasoning, even when paired with domain specific context via RAG and other tools, inherently has risks of hallucination, grounding errors and and interpretability that can propagate throughout the MAS. This was apparent in the results from Case study 2 and 3, where measurements of reliability and correctness indicate room for improvement. Extended effort is needed to create robust design patterns and guardrails that scale solutions beyond initial rapid development to transition the prototypes into production/release. These issues become more pronounced in high-stakes domains such as cybersecurity or highly regulated industries, reinforcing the need for robust validation pipelines and human-in-the-loop oversight.
Report issue for preceding element
Finally, while MAS architectures offer platform-agnostic deployment flexibility, they remain constrained by compute requirements and dependency management. Organisations with limited infrastructure or strict data residency policies may face integration hurdles, particularly when scaling across heterogeneous environments.
Report issue for preceding element
7 Conclusion
Report issue for preceding element
This study formalised emerging design patterns for LLM-enabled MAS and evaluated their practical utility across diverse domains through three real-world case studies. The results demonstrate that MAS architectures can significantly accelerate prototyping, reduce development overhead, and deliver adaptable solutions for complex, domain-specific challenges. By leveraging modularity, specialisation, and dynamic orchestration, MAS offers a reusable paradigm that bridges gaps between rigid rule-based workflows and bespoke engineering approaches.
Report issue for preceding element
The findings also reinforce persistent limitations. Variability in LLM behaviour, risks of hallucination, and interpretability challenges remain critical barriers to production maturity, particularly in high-stakes or regulated environments. Furthermore, while MAS architectures exhibit strong potential for scalability and interoperability, they introduce dependencies on compute resources and governance frameworks that organisations must address.
Report issue for preceding element
Future research will focus on iterative user studies to rigorously evaluate and refine this approach, informing the development of enhanced design features that meet stringent requirements. These efforts will prioritise strengthening validation pipelines and implementing robust guardrails [ jai.2025.069841] to mitigate reliability and safety risks.
Report issue for preceding element
Availability of Data and Materials: The data supporting the findings of this study are openly available from the Open Science Framework at 
https://osf.io/4dzmv/overview
https://osf.io/4dzmv/overview
.
Report issue for preceding element
Ethics Approval: Ethical approval for this study was obtained from the Kaze Consulting review board, and all research protocols were conducted in accordance with company guidelines. All data collected was anonymised and securely stored in compliance with company policies and data protection regulations to ensure the confidentiality and safety of participant information.
Report issue for preceding element
Conflicts of Interest: The authors declare no conflicts of interest to report regarding the present study.
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