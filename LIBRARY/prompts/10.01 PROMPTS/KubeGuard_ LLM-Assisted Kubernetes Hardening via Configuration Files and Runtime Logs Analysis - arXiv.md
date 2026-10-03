# KubeGuard: LLM-Assisted Kubernetes Hardening via Configuration Files and Runtime Logs Analysis - arXiv

Source URL: https://arxiv.org/html/2509.04191v1

KubeGuard: LLM-Assisted Kubernetes Hardening via Configuration Files and Runtime Logs Analysis
logo Back to arXiv
https://arxiv.org/
 

https://arxiv.org/abs/2509.04191v1
 

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
https://arxiv.org/abs/2509.04191v1
 
Download PDF
https://arxiv.org/pdf/2509.04191v1
 

javascript:toggleColorScheme()
Table of Contents
Abstract
https://arxiv.org/html/2509.04191v1#abstract
1 Introduction
https://arxiv.org/html/2509.04191v1#S1
2 Related Work
https://arxiv.org/html/2509.04191v1#S2
2.1 K8s Misconfiguration Detection and Mitigation
https://arxiv.org/html/2509.04191v1#S2.SS1
2.2 Secure K8s Configurations Generation
https://arxiv.org/html/2509.04191v1#S2.SS2
3 Proposed Method
https://arxiv.org/html/2509.04191v1#S3
3.1 Data Acquisition and Preprocessing
https://arxiv.org/html/2509.04191v1#S3.SS1
Data Acquisition
https://arxiv.org/html/2509.04191v1#S3.SS1.SSS0.Px1
Data Preprocessing
https://arxiv.org/html/2509.04191v1#S3.SS1.SSS0.Px2
3.1.1 K8s Manifest Files
https://arxiv.org/html/2509.04191v1#S3.SS1.SSS1
3.1.2 Aggregated Audit Logs (AALs)
https://arxiv.org/html/2509.04191v1#S3.SS1.SSS2
3.1.3 Aggregated Network Logs (ANLs)
https://arxiv.org/html/2509.04191v1#S3.SS1.SSS3
3.1.4 Aggregated Provenance Logs (APLs)
https://arxiv.org/html/2509.04191v1#S3.SS1.SSS4
3.2 Attack Surface Reduction Prompt Chains
https://arxiv.org/html/2509.04191v1#S3.SS2
3.2.1 Resource Creation
https://arxiv.org/html/2509.04191v1#S3.SS2.SSS1
3.2.2 Resource Refinement
https://arxiv.org/html/2509.04191v1#S3.SS2.SSS2
4 Experimental Setup
https://arxiv.org/html/2509.04191v1#S4
4.1 Environment Setup
https://arxiv.org/html/2509.04191v1#S4.SS1
4.1.1 LLMs
https://arxiv.org/html/2509.04191v1#S4.SS1.SSS1
4.1.2 K8s Environment
https://arxiv.org/html/2509.04191v1#S4.SS1.SSS2
4.2 Task-Specific Evaluation
https://arxiv.org/html/2509.04191v1#S4.SS2
4.2.1 Synthetic Manifests with Excessive Permissions
https://arxiv.org/html/2509.04191v1#S4.SS2.SSS1
4.3 Evaluation Metrics
https://arxiv.org/html/2509.04191v1#S4.SS3
4.3.1 Task Effectiveness
https://arxiv.org/html/2509.04191v1#S4.SS3.SSS1
4.3.2 Similarity Among Aggregated Logs
https://arxiv.org/html/2509.04191v1#S4.SS3.SSS2
4.4 Experimental Design
https://arxiv.org/html/2509.04191v1#S4.SS4
5 Results
https://arxiv.org/html/2509.04191v1#S5
5.1 Selecting the Best LLM and Prompting Approach
https://arxiv.org/html/2509.04191v1#S5.SS1
5.2 Evaluating the Best Proprietary LLM: GPT-4o
https://arxiv.org/html/2509.04191v1#S5.SS2
5.3 Selecting the Best Local (Open-Source) SLM
https://arxiv.org/html/2509.04191v1#S5.SS3
5.4 Evaluating the Best Local SLM: Llama-3.1-8B
https://arxiv.org/html/2509.04191v1#S5.SS4
5.5 Iterative Security Refinement
https://arxiv.org/html/2509.04191v1#S5.SS5
5.6 Extending from Local SLM to Local LLM
https://arxiv.org/html/2509.04191v1#S5.SS6
5.7 Empirical Comparison to Existing Methods
https://arxiv.org/html/2509.04191v1#S5.SS7
5.8 Sensitivity Analysis
https://arxiv.org/html/2509.04191v1#S5.SS8
5.8.1 Prompt Chain Order
https://arxiv.org/html/2509.04191v1#S5.SS8.SSS1
5.8.2 Sensitivity To Data Collection Duration
https://arxiv.org/html/2509.04191v1#S5.SS8.SSS2
5.9 Ablation Study
https://arxiv.org/html/2509.04191v1#S5.SS9
5.9.1 Effect of Data Explanations
https://arxiv.org/html/2509.04191v1#S5.SS9.SSS1
5.9.2 Effect of Removing the Matching Step from Refinement Prompt Chains
https://arxiv.org/html/2509.04191v1#S5.SS9.SSS2
5.9.3 Effect of Omitting Data Sources in Deployment Refinement
https://arxiv.org/html/2509.04191v1#S5.SS9.SSS3
5.10 Error Analysis
https://arxiv.org/html/2509.04191v1#S5.SS10
6 Limitations
https://arxiv.org/html/2509.04191v1#S6
7 Conclusion
https://arxiv.org/html/2509.04191v1#S7
A Example Deployment Manifest
https://arxiv.org/html/2509.04191v1#A1
B K-V Log Aggregation Algorithm
https://arxiv.org/html/2509.04191v1#A2
C Aggregated Logs Illustrations and Examples
https://arxiv.org/html/2509.04191v1#A3
ANLs
https://arxiv.org/html/2509.04191v1#A3.SS0.SSS0.Px1
APLs
https://arxiv.org/html/2509.04191v1#A3.SS0.SSS0.Px2
D Prompting Techniques Examples
https://arxiv.org/html/2509.04191v1#A4
Zero-Shot
https://arxiv.org/html/2509.04191v1#A4.SS0.SSS0.Px1
Chain-of-Thought
https://arxiv.org/html/2509.04191v1#A4.SS0.SSS0.Px2
E Open-Source Local SLM Processing Time Results
https://arxiv.org/html/2509.04191v1#A5
F Tables of Empirical Comparison to Existing Methods
https://arxiv.org/html/2509.04191v1#A6
Comparison to audit2rbac
https://arxiv.org/html/2509.04191v1#A6.SS0.SSS0.Px1
Comparison to KUBETEUS
https://arxiv.org/html/2509.04191v1#A6.SS0.SSS0.Px2
G Attack Surface Reduction Prompt Chains Illustrations
https://arxiv.org/html/2509.04191v1#A7
NetworkPolicy Creation Prompt Chain
https://arxiv.org/html/2509.04191v1#A7.SS0.SSS0.Px1
Deployment Refinement Prompt Chain
https://arxiv.org/html/2509.04191v1#A7.SS0.SSS0.Px2
References
https://arxiv.org/html/2509.04191v1#bib
HTML conversions 
sometimes display errors
https://info.dev.arxiv.org/about/accessibility_html_error_messages.html
 due to content that did not convert correctly from the source. This paper uses the following packages that are not yet supported by the HTML conversion tool. Feedback on these issues are not necessary; they are known and are being worked on.
failed: mdframed.sty
Authors: achieve the best HTML results from your LaTeX submissions by following these 
best practices
https://info.arxiv.org/help/submit_latex_best_practices.html
.
License: arXiv.org perpetual non-exclusive license
https://info.arxiv.org/help/license/index.html#licenses-available
arXiv:2509.04191v1 [cs.CR] 04 Sep 2025
KubeGuard: LLM-Assisted Kubernetes Hardening via Configuration Files and Runtime Logs Analysis
Report issue for preceding element
Omri Sgan Cohen, Ehud Malul, Yair Meidan, Dudu Mimran, Yuval Elovici, Asaf Shabtai Department of Software and Information Systems Engineering
Ben-Gurion University of The Negev Israel
Report issue for preceding element
Abstract.
Report issue for preceding element
The widespread adoption of Kubernetes (K8s) for orchestrating cloud-native applications has introduced significant security challenges, such as misconfigured resources and overly permissive configurations. Failing to address these issues can result in unauthorized access, privilege escalation, and lateral movement within clusters. Most existing K8s security solutions focus on detecting misconfigurations, typically through static analysis or anomaly detection. In contrast, this paper presents KubeGuard, a novel runtime log-driven recommender framework aimed at mitigating risks by addressing overly permissive configurations. KubeGuard is designed to harden K8s environments through two complementary tasks: Resource Creation and Resource Refinement. It leverages large language models (LLMs) to analyze manifests and runtime logs reflecting actual system behavior, using modular prompt-chaining workflows. This approach enables KubeGuard to create least-privilege configurations for new resources and refine existing manifests to reduce the attack surface. KubeGuard's output manifests are presented as recommendations that users (e.g., developers and operators) can review and adopt to enhance cluster security. Our evaluation demonstrates that KubeGuard effectively generates and refines K8s manifests for Roles, NetworkPolicies, and Deployments, leveraging both proprietary and open-source LLMs. The high precision, recall, and F1-scores affirm KubeGuard's practicality as a framework that translates runtime observability into actionable, least-privilege configuration guidance.
Report issue for preceding element
1. Introduction
Report issue for preceding element
Kubernetes (K8s) is an open-source container orchestration platform that has revolutionized how cloud-native applications are deployed and managed. By automating container scheduling, scaling, and resource allocation, K8s enables highly efficient and resilient distributed infrastructures (Kubernetes, 
2024c
https://arxiv.org/html/2509.04191v1#bib.bib44
) . However, as the complexity of K8s clusters increases, securing them becomes challenging, particularly due to the prevalence of misconfigurations in K8s configuration files (manifests) (Rahman et al., 
2023
https://arxiv.org/html/2509.04191v1#bib.bib77
) . These misconfigurations expose organizations to risks such as unauthorized access, lateral movement, and privilege escalation, underscoring the need for robust and adaptive security solutions that help users apply secure configurations and reduce the likelihood of human error during policy definition (Kampa, 
2024
https://arxiv.org/html/2509.04191v1#bib.bib34
) .
Report issue for preceding element
Most K8s security solutions rely on predefined configurations (Shamim et al., 
2020
https://arxiv.org/html/2509.04191v1#bib.bib88
; Shamim, 
2021
https://arxiv.org/html/2509.04191v1#bib.bib89
) , static analysis (Samir and Dagenborg, 
2023
https://arxiv.org/html/2509.04191v1#bib.bib81
; Mahajan and Mane, 
2022
https://arxiv.org/html/2509.04191v1#bib.bib58
; Diarra et al., 
2024
https://arxiv.org/html/2509.04191v1#bib.bib25
) , or industry-standard rule-based tools (Cloud, 
2019
https://arxiv.org/html/2509.04191v1#bib.bib22
; Tenable, 
2022
https://arxiv.org/html/2509.04191v1#bib.bib94
; Checmarx, 
2021
https://arxiv.org/html/2509.04191v1#bib.bib17
; StackRox, 
2025
https://arxiv.org/html/2509.04191v1#bib.bib91
) . Basic hardening can be achieved using native K8s controls, for example, replacing default allow-all settings with tailored NetworkPolicies or refining overly permissive RBAC Roles; however, both depend on precise configuration and are therefore challenging to maintain at scale. Moreover, although these methods effectively reduce the attack surface, they often lack visibility into runtime behavior and struggle to adapt to dynamic environments and evolving threats. Even advanced approaches leveraging artificial intelligence (AI) and large language models (LLMs) (Malul et al., 
2024
https://arxiv.org/html/2509.04191v1#bib.bib59
; Li et al., 
2024a
https://arxiv.org/html/2509.04191v1#bib.bib55
; Ye et al., 
2025
https://arxiv.org/html/2509.04191v1#bib.bib103
) typically exhibit limited responsiveness to real-time system states. Several studies have employed runtime logs for monitoring and anomaly detection in K8s (Kitahara et al., 
2020
https://arxiv.org/html/2509.04191v1#bib.bib38
; Li et al., 
2024b
https://arxiv.org/html/2509.04191v1#bib.bib53
; Sarika et al., 
2023
https://arxiv.org/html/2509.04191v1#bib.bib85
; Cao et al., 
2022
https://arxiv.org/html/2509.04191v1#bib.bib15
) . More recent methods leveraged various logs using AI, but fed them into static pipelines (Ye et al., 
2025
https://arxiv.org/html/2509.04191v1#bib.bib103
) or generated configurations for just a single resource type (e.g., only NetworkPolicies) (Kim et al., 
2025
https://arxiv.org/html/2509.04191v1#bib.bib37
) , often not even K8s-native (Khan et al., 
2025
https://arxiv.org/html/2509.04191v1#bib.bib35
) .
Report issue for preceding element
 
Figure 1. Example of log-driven manifest hardening. An overly permissive K8s Role is refined by aligning the manifest with observed runtime behavior in aggregated logs. Report issue for preceding element
To address the aforementioned limitations of existing approaches, keep pace with the demands of dynamic environments, and support the required shift from reactive diagnostics to proactive defense, this paper introduces 
KubeGuard
: a novel LLM-based framework for dynamically hardening K8s systems based on prompt-chaining workflows (Anthropic, 
2024a
https://arxiv.org/html/2509.04191v1#bib.bib6
) that leverage multi-source runtime logs (a log-driven hardening example is provided in Fig. 
1
https://arxiv.org/html/2509.04191v1#S1.F1
). KubeGuard uses audit logs (Kubernetes, 
2024
https://arxiv.org/html/2509.04191v1#bib.bib41
) , provenance data (Gehani and Tariq, 
2012
https://arxiv.org/html/2509.04191v1#bib.bib26
) , and network traffic flows (Cilium, 
2025
https://arxiv.org/html/2509.04191v1#bib.bib20
) to extract actionable insights and systematically create or refine K8s manifests. These heterogeneous logs are aggregated into structured activity records, allowing KubeGuard to correlate user actions, network activity, and resource-level changes. The aggregation preserves behavioral security context while compressing high-volume logs into concise summaries (reducing token count by 99.96 % 99.96% ), enabling efficient LLM analysis within token limits.
Report issue for preceding element
KubeGuard acts as a security-aware recommender framework that assists developers and system owners in hardening K8s environments by suggesting least-privilege configurations based on observed application behavior. It addresses two complementary tasks, both aimed at reducing the attack surface of K8s-based systems: 
Resource Creation
 and 
Resource Refinement
. Resource Creation focuses on generating secure log-derived manifests for RBAC Roles and NetworkPolicies, directly from observed application behavior. Additionally, Resource Refinement hardens existing manifests by suggesting elimination and restriction of excessive permissions and unnecessary rules in Roles, NetworkPolicies, and Deployments, based on aggregated runtime logs. By integrating structured prompts into modular chain workflows, KubeGuard aligns security configurations with application behavior and best practices, ensuring robust and adaptive protection throughout the cluster lifecycle.
Report issue for preceding element
We evaluated KubeGuard using two microservice-based applications (Platform, 
2025b
https://arxiv.org/html/2509.04191v1#bib.bib73
; Azure-Samples, 
2024
https://arxiv.org/html/2509.04191v1#bib.bib13
) , each comprising multiple manifests. Log data was collected from audit (Kubernetes, 
2024
https://arxiv.org/html/2509.04191v1#bib.bib41
) , provenance (Gehani and Tariq, 
2012
https://arxiv.org/html/2509.04191v1#bib.bib26
) , and network traffic (Cilium, 
2025
https://arxiv.org/html/2509.04191v1#bib.bib20
) sources during different operational phases. Following an aggregation step, these logs served as input for resource creation and refinement tasks. As part of our preliminary evaluation, we examined several prompting strategies, including zero-shot (Syed and Gadesha, 
2024
https://arxiv.org/html/2509.04191v1#bib.bib92
) , chain-of-thought (CoT) (Wei et al., 
2022
https://arxiv.org/html/2509.04191v1#bib.bib97
) , and prompt chaining (Anthropic, 
2024a
https://arxiv.org/html/2509.04191v1#bib.bib6
) , and evaluated multiple proprietary LLMs to identify the most effective configuration for KubeGuard. Prompt chaining outperformed the other techniques and was adopted as our core approach, and GPT-4o (OpenAI, 
2024
https://arxiv.org/html/2509.04191v1#bib.bib70
) achieved the highest accuracy and generalization, therefore selected as the representative proprietary LLM for further evaluation.
Report issue for preceding element
To support KubeGuard's broader adoption, we extended our evaluation from commercial LLMs to open-source small language models (SLMs). Therefore, our comprehensive evaluation addresses the needs of two organizational profiles: those comfortable with external data sharing via API, typically associated with commercial LLMs, and those requiring stricter privacy and having limited computational resources (Kibriya et al., 
2024
https://arxiv.org/html/2509.04191v1#bib.bib36
; Wang et al., 
2025
https://arxiv.org/html/2509.04191v1#bib.bib96
) . We evaluated multiple SLMs using prompt chaining and selected Llama-3.1-8B (Grattafiori et al., 
2024
https://arxiv.org/html/2509.04191v1#bib.bib27
) as the most effective local model, balancing performance and deployability.
Report issue for preceding element
Evaluation results prove KubeGuard's ability to generate valid, hardened K8s manifests for various tasks and model sizes. Using GPT-4o, KubeGuard achieved a perfect F1-score in Role Creation ( 1.00 1.00 ) and high F1-scores in Role ( 0.953 0.953 ), NetworkPolicy ( 0.961 0.961 ), and Deployment ( 0.929 0.929 ) refinements, demonstrating prompt chaining effectiveness. Although less accurate, Llama-3.1-8B still performed well, reaching an F1-score of 0.808 0.808 in Role Refinement and 0.793 0.793 in NetworkPolicy Creation, affirming it as a practical privacy-preserving alternative.
Report issue for preceding element
The primary contributions of this research are as follows:
Report issue for preceding element
• A comprehensive framework for hardening K8s resources, supporting both resource creation and refinement: By both creating and refining K8s resources, KubeGuard enables broad applicability to diverse workloads and security postures, allowing users to enforce least-privilege principles in both newly developed and already deployed K8s environments. In addition, unlike previously proposed solutions that are limited to one specific resource type (Bringhenti et al., 
2023
https://arxiv.org/html/2509.04191v1#bib.bib14
; Kim et al., 
2025
https://arxiv.org/html/2509.04191v1#bib.bib37
) , KubeGuard operates across multiple critical K8s resources: Roles, NetworkPolicies, and Deployments. Report issue for preceding element
• Log-driven and context-aware configuration optimization for K8s: KubeGuard adopts a log-centric approach, using runtime telemetry to inform configuration decisions. Unlike static tools (Cloud, 
2019
https://arxiv.org/html/2509.04191v1#bib.bib22
; Tenable, 
2022
https://arxiv.org/html/2509.04191v1#bib.bib94
; Checmarx, 
2021
https://arxiv.org/html/2509.04191v1#bib.bib17
; StackRox, 
2025
https://arxiv.org/html/2509.04191v1#bib.bib91
) , it analyzes multi-source logs, including audit, network, and provenance, collected from the running environment. This enables context-aware configuration generation and refinement from application behavior, adapting to changes over time and reducing the attack surface empirically and dynamically. Report issue for preceding element
• Model-agnostic prompt chaining using LLMs and SLMs: KubeGuard integrates large and small language models for context-aware reasoning on logs and manifests, using multiple structured prompt-chaining pipelines. This design supports both high-accuracy API models and privacy-preserving local models, providing flexibility across different organizational constraints. Report issue for preceding element
Table 1. Comparative overview of related work on K8s hardening.
Paper
Method
Input
Goal
Affected Resources
KGSecConfig ( Haque et al., 
2022
https://arxiv.org/html/2509.04191v1#bib.bib29
)
Knowledge graphs-based
Official docs, security reports
Misconfiguration detection and correction
Container orchestrators configurations
GenKubeSec ( Malul et al., 
2024
https://arxiv.org/html/2509.04191v1#bib.bib59
)
Fine-tuned and prompted LLMs
K8s manifests
Misconfiguration detection and correction
K8s manifests
LLMSecConfig ( Ye et al., 
2025
https://arxiv.org/html/2509.04191v1#bib.bib103
)
Retrieval-Augmented Generation, LLM prompting
Static analysis tools output, source code, docs
Misconfiguration correction
Container-focused K8s manifests
Don't Train, Just Prompt ( Kratzke and Drews, 
2024
https://arxiv.org/html/2509.04191v1#bib.bib40
)
Zero- and few-shot prompting, prompt chaining
User-described desired K8s Deployments
K8s resources creation
K8s manifests
Kub-Sec ( Zhu and Gehrmann, 
2022
https://arxiv.org/html/2509.04191v1#bib.bib105
)
Rule-based
Audit logs
AppArmor profile generation
AppArmor policies for Pods
LADs ( Khan et al., 
2025
https://arxiv.org/html/2509.04191v1#bib.bib35
)
Retrieval-Augmented Generation, few-shot and CoT prompting, prompt chaining
Natural language user intent, failure logs, docs, configuration examples
Cloud configurations creation and refinement
Configurations of K8s-deployed cloud services
KubeFence ( Cesarano and Natella, 
2025
https://arxiv.org/html/2509.04191v1#bib.bib16
)
Rule-based
Helm charts, K8s API requests
K8s API security policies generation
K8s security policies
KUBETEUS ( Kim et al., 
2025
https://arxiv.org/html/2509.04191v1#bib.bib37
)
Fine-tuned and prompted LLMs
Natural language intents, real-time K8s API data, configuration files
CNI-compliant K8s NetworkPolicies creation
K8s NetworkPolicies
Our framework (KubeGuard)
Prompt chaining
K8s manifests, audit, provenance, and network logs
K8s resources creation and refinement
K8s Roles, NetworkPolicies, and Deployments
Report issue for preceding element
2. Related Work
Report issue for preceding element
We summarize prior work on K8s hardening in Table 
1
https://arxiv.org/html/2509.04191v1#S1.T1
, describing their methods, inputs, goals, and the resources they affect.
Report issue for preceding element
2.1. K8s Misconfiguration Detection and Mitigation
Report issue for preceding element
Mitigating misconfigurations in K8s has been widely studied, highlighting risks such as overprovisioned permissions and misconfigured RBAC Roles (Shamim et al., 
2020
https://arxiv.org/html/2509.04191v1#bib.bib88
; Kampa, 
2024
https://arxiv.org/html/2509.04191v1#bib.bib34
) . Broader cloud-native practices, aimed at securing Function-as-a-Service (Prechtl et al., 
2020
https://arxiv.org/html/2509.04191v1#bib.bib74
) and DevOps workflows (Alawneh and Abbadi, 
2022
https://arxiv.org/html/2509.04191v1#bib.bib4
; Mycek and Łukaczyk, 
2024
https://arxiv.org/html/2509.04191v1#bib.bib67
) , offer insight but do not address K8s specifics. Most tools emphasize rule-based static analysis (Cloud, 
2019
https://arxiv.org/html/2509.04191v1#bib.bib22
; Tenable, 
2022
https://arxiv.org/html/2509.04191v1#bib.bib94
; StackRox, 
2025
https://arxiv.org/html/2509.04191v1#bib.bib91
; Checmarx, 
2021
https://arxiv.org/html/2509.04191v1#bib.bib17
) and vulnerability assessment and detection (Rahman et al., 
2023
https://arxiv.org/html/2509.04191v1#bib.bib77
; Aqua Security, 
2024
https://arxiv.org/html/2509.04191v1#bib.bib9
; Hirschberg, 
2022
https://arxiv.org/html/2509.04191v1#bib.bib32
; Morfonios, 
2023
https://arxiv.org/html/2509.04191v1#bib.bib65
; Rangta, 
2022
https://arxiv.org/html/2509.04191v1#bib.bib78
) . Complementary work includes misconfiguration detection during deployment (Mahajan and Mane, 
2022
https://arxiv.org/html/2509.04191v1#bib.bib58
) and manifest verification tools (Diarra et al., 
2024
https://arxiv.org/html/2509.04191v1#bib.bib25
) . Although valuable, these efforts mostly detect deviations from best practices without adaptive remediation and rely on predefined rules that overlook runtime context.
Report issue for preceding element
Moving beyond static checks, advanced runtime-capable approaches have emerged. An adaptive controller diagnosed misconfigurations during execution (Samir and Dagenborg, 
2023
https://arxiv.org/html/2509.04191v1#bib.bib81
) , and KGSecConfig synthesized secure manifests using knowledge graphs, given high-quality input (Haque et al., 
2022
https://arxiv.org/html/2509.04191v1#bib.bib29
) . Recent AI-driven approaches embedded LLMs throughout misconfiguration detection, localization, reasoning, and remediation (Malul et al., 
2024
https://arxiv.org/html/2509.04191v1#bib.bib59
) , or together with static analysis for vulnerability detection and mitigation (Li et al., 
2024a
https://arxiv.org/html/2509.04191v1#bib.bib55
; Ye et al., 
2025
https://arxiv.org/html/2509.04191v1#bib.bib103
) , or used LLMs for real-time anomaly detection in K8s (Sheng et al., 
2024
https://arxiv.org/html/2509.04191v1#bib.bib90
; Diaf et al., 
2024
https://arxiv.org/html/2509.04191v1#bib.bib24
) . However, these methods typically do not adapt configurations according to observed runtime behavior.
Report issue for preceding element
Logs have been widely used for monitoring and anomaly or failure analysis, leveraging machine learning (Koryugin, 
2023
https://arxiv.org/html/2509.04191v1#bib.bib39
; MUSTYALA, 
2022
https://arxiv.org/html/2509.04191v1#bib.bib66
; Kitahara et al., 
2020
https://arxiv.org/html/2509.04191v1#bib.bib38
; Li et al., 
2024b
https://arxiv.org/html/2509.04191v1#bib.bib53
; Sarika et al., 
2023
https://arxiv.org/html/2509.04191v1#bib.bib85
; Cao et al., 
2022
https://arxiv.org/html/2509.04191v1#bib.bib15
) , and also for misconfiguration reporting (Russell and Dev, 
2024
https://arxiv.org/html/2509.04191v1#bib.bib80
) , provenance-driven methods (Abbas et al., 
2022
https://arxiv.org/html/2509.04191v1#bib.bib2
; Hassan et al., 
2018
https://arxiv.org/html/2509.04191v1#bib.bib30
) , and network-based risk prediction (Ruan, 
2021
https://arxiv.org/html/2509.04191v1#bib.bib79
) .
Report issue for preceding element
However, these works rarely translate insights into concrete hardening actions. In contrast, KubeGuard leverages multi-source runtime logs to create and refine K8s manifests, shifting from detection of misconfigurations to adaptive, behavior-aware generation of least-privilege configurations as workloads evolve.
Report issue for preceding element
2.2. Secure K8s Configurations Generation
Report issue for preceding element
Beyond static modeling, AI and LLM-based methods have emerged to automate K8s security configurations, including risk profiling with operational data context (Schreiber and Schreiber, 
2025
https://arxiv.org/html/2509.04191v1#bib.bib87
) , workload migration (Ueno and Uchiumi, 
2024
https://arxiv.org/html/2509.04191v1#bib.bib95
) , generating Ansible playbooks for remediation (Ansible, 
2025
https://arxiv.org/html/2509.04191v1#bib.bib5
; Sarda et al., 
2024
https://arxiv.org/html/2509.04191v1#bib.bib84
) , and translating natural language into manifests (Kratzke and Drews, 
2024
https://arxiv.org/html/2509.04191v1#bib.bib40
) . However, these approaches overlook K8s-specific resources and often lack runtime context, risking misconfigurations or overly permissive defaults (Malul et al., 
2024
https://arxiv.org/html/2509.04191v1#bib.bib59
) .
Report issue for preceding element
Building on runtime integration, Kub-Sec used audit logs to generate AppArmor profiles (AppArmor, 
[n. d.]
https://arxiv.org/html/2509.04191v1#bib.bib8
; Zhu and Gehrmann, 
2022
https://arxiv.org/html/2509.04191v1#bib.bib105
) . LADs applied Retrieval-Augmented Generation (Lewis et al., 
2020
https://arxiv.org/html/2509.04191v1#bib.bib52
) , few-shot learning, and iterative feedback (Madaan et al., 
2023
https://arxiv.org/html/2509.04191v1#bib.bib57
) to optimize settings from deployment failures (Khan et al., 
2025
https://arxiv.org/html/2509.04191v1#bib.bib35
) , though reactively.
Report issue for preceding element
Several works focused on generating network-layer configurations, mainly through automatic NetworkPolicy synthesis (Bringhenti et al., 
2023
https://arxiv.org/html/2509.04191v1#bib.bib14
; NP-Guard, 
[n. d.]
https://arxiv.org/html/2509.04191v1#bib.bib68
) . In addition, KUBETEUS proposed an intention-driven framework with fine-tuned LLMs to generate NetworkPolicies (Kim et al., 
2025
https://arxiv.org/html/2509.04191v1#bib.bib37
) . Beyond the network layer, KubeFence (Cesarano and Natella, 
2025
https://arxiv.org/html/2509.04191v1#bib.bib16
) derived API request filters from trusted Operator manifests (Kubernetes, 
2024b
https://arxiv.org/html/2509.04191v1#bib.bib43
) and audit2rbac (Liggitt, 
2023
https://arxiv.org/html/2509.04191v1#bib.bib56
) demonstrated log-driven K8s RBAC generation. An empirical comparison of KubeGuard to audit2rbac and KUBETEUS is presented in Sec. 
5.7
https://arxiv.org/html/2509.04191v1#S5.SS7
. Although effective in scope, these methods remain limited to network or audit configurations and lack integration of diverse runtime data.
Report issue for preceding element
In contrast, KubeGuard combines audit, network, and provenance logs to provide a holistic security view, creating and refining manifests for Roles, NetworkPolicies, and Deployments.
Report issue for preceding element
 
Figure 2. Overview of the KubeGuard framework: (a) collect manifests and runtime logs, (b) preprocess into aggregated behavioral datasets, (c) apply LLM-based prompt chains for attack surface reduction, and (d) output least-privilege manifests. Report issue for preceding element
3. Proposed Method
Report issue for preceding element
Our proposed framework, KubeGuard, illustrated in Fig. 
2
https://arxiv.org/html/2509.04191v1#S2.F2
, adaptively enhances K8s security configurations by analyzing runtime logs. It begins by preprocessing data from multiple sources and then employs a language model using task-tailored prompt chains. Prompt chaining involves using the output of one prompt as the input of the next, facilitating multistep reasoning (Wu et al., 
2022
https://arxiv.org/html/2509.04191v1#bib.bib99
) . Through this approach, KubeGuard systematically progresses from data analysis to manifest optimization, creating or refining core K8s resources: Deployments (Kubernetes, 
2025b
https://arxiv.org/html/2509.04191v1#bib.bib49
) , Roles (Kubernetes, 
2025d
https://arxiv.org/html/2509.04191v1#bib.bib51
) , and NetworkPolicies (Kubernetes, 
2024c
https://arxiv.org/html/2509.04191v1#bib.bib47
) .
Report issue for preceding element
KubeGuard is designed as an assistive recommender framework. System operators can selectively invoke desired prompt chains and apply the output manifests across standard application lifecycle environments. The hardened manifests generated by KubeGuard are correctly formatted and ready to be applied. KubeGuard does not automatically enforce them, so operators can review and adopt recommended configurations while aligning with compliance requirements and operational best practices. The LLM-based reasoning provided along with the generated manifests gives users additional transparency and control to apply hardening actions confidently, based on actual runtime behavior. KubeGuard, described in detail below, upholds the least-privilege principle and strengthens operational security, all while preserving application functionality.
Report issue for preceding element
3.1. Data Acquisition and Preprocessing
Report issue for preceding element
The first part of the proposed method consists of two stages: “Data Acquisition” (Fig. 
2
https://arxiv.org/html/2509.04191v1#S2.F2
(a)), in which logs are collected from the K8s environment, and “Data Preprocessing” (Fig. 
2
https://arxiv.org/html/2509.04191v1#S2.F2
(b)), where logs are aggregated into structured context-rich inputs for LLM analysis.
Report issue for preceding element
Data Acquisition
Report issue for preceding element
K8s manifests define the configuration of workloads and resources within a cluster, therefore serving as a baseline for further optimization (example manifest provided in Listing 
A
https://arxiv.org/html/2509.04191v1#A1
). Given a task (creating or refining a K8s resource), KubeGuard receives logs as input, from three primary data sources, in addition to the manifest (as illustrated in Fig. 
2
https://arxiv.org/html/2509.04191v1#S2.F2
(a)): (1) K8s audit logs (Kubernetes, 
2024
https://arxiv.org/html/2509.04191v1#bib.bib41
) , which capture K8s metadata operations, (2) Hubble flows (Cilium, 
2025
https://arxiv.org/html/2509.04191v1#bib.bib20
) , which detail network communication patterns, and (3) SPADE output (Gehani and Tariq, 
2012
https://arxiv.org/html/2509.04191v1#bib.bib26
) that depicts system-level interactions. These log types are used to provide a complementary view of cluster behavior; audit logs record API requests and authorization decisions, making them indispensable for inferring RBAC permissions; Hubble flows capture pod-level ingress and egress traffic, enabling precise alignment of NetworkPolicies with actual communication patterns; and SPADE's provenance data records low-level OS events within containers, linking operations back to microservices and providing crucial container runtime information. All logs are collected using dedicated open-source tools: K8s auditing (Kubernetes, 
2024
https://arxiv.org/html/2509.04191v1#bib.bib41
) for audit logs, SPADE (([n. d.]), 
ashish gehani
https://arxiv.org/html/2509.04191v1#bib.bib10
) for provenance, and Hubble (Cilium, 
2024
https://arxiv.org/html/2509.04191v1#bib.bib19
) for network traffic.
Report issue for preceding element
Data Preprocessing
Report issue for preceding element
Addressing LLM token and context constraints, KubeGuard employs a structured log aggregation approach that condenses raw logs while preserving all essential information (illustrated as “<K,V> Aggregation” in Fig. 
2
https://arxiv.org/html/2509.04191v1#S2.F2
(b) and exemplified in Fig. 
3
https://arxiv.org/html/2509.04191v1#S3.F3
). Each field (key) in the logs is used as a map key, and its corresponding values are recursively extracted and aggregated into a key→set of values (K–V) HashMap. Not only does this improve organization and readability, but it also minimizes log complexity without compromising critical details (details provided in Algorithm 
1
https://arxiv.org/html/2509.04191v1#algorithm1
). Notably, K-V aggregation reduces log size by up to 99.96 % 99.96% in model input tokens, making large-scale analysis feasible. To maintain context and coherence, logs are aggregated by microservices and logical entities (e.g., users or provenance components (Moreau et al., 
2011
https://arxiv.org/html/2509.04191v1#bib.bib64
) ). This also enables injecting relevant contextual information along the aggregated logs (SPADE provenance data model (ashish-gehani, 
Ashish Gehani
https://arxiv.org/html/2509.04191v1#bib.bib12
) and Hubble predefined network endpoints identities (Project, 
2025
https://arxiv.org/html/2509.04191v1#bib.bib75
) ), helping LLMs better interpret the structure and semantics of the condensed logs. Thus, K-V aggregation transforms raw logs into concise input for efficient and accurate LLM analysis within computational limits.
Report issue for preceding element
The following outlines each KubeGuard input, including their data acquisition and preprocessing steps.
Report issue for preceding element
3.1.1. K8s Manifest Files
Report issue for preceding element
YAML-formatted specifications that define the desired state of resources within a K8s cluster (Kubernetes, 
2024a
https://arxiv.org/html/2509.04191v1#bib.bib42
) . These files contain essential configuration details for managing K8s components such as Pods, Roles, and NetworkPolicies (a Deployment manifest example provided in Listing 
A
https://arxiv.org/html/2509.04191v1#A1
). K8s manifest files are converted into JSON format for usability and uniformity.
Report issue for preceding element
 
Figure 3. Illustration and example of Aggregated Audit Logs (AALs). The keys of the AALs are of the original audit logs, with their values aggregated by microservice and user. Report issue for preceding element
3.1.2. Aggregated Audit Logs (AALs)
Report issue for preceding element
Structured datasets derived from K8s audit logs, summarizing security-relevant operations within a cluster. The raw logs are collected through K8s auditing (Kubernetes, 
2024
https://arxiv.org/html/2509.04191v1#bib.bib41
) , following a minimal audit policy that logs all API requests at the Metadata level (Kubernetes, 
2025a
https://arxiv.org/html/2509.04191v1#bib.bib48
) . They are then grouped by microservices and aggregated through K-V aggregation, as illustrated and exemplified in Fig. 
3
https://arxiv.org/html/2509.04191v1#S3.F3
. AALs consolidate details such as request origins and authorization decisions into RBAC-relevant summaries that serve as the ground truth for exercised API actions, enabling inference of least-privilege Roles and removal of unused permissions.
Report issue for preceding element
3.1.3. Aggregated Network Logs (ANLs)
Report issue for preceding element
Structured datasets derived from Hubble output, a network observability tool that captures real-time Pod-level communication events within a K8s cluster (Cilium, 
2025
https://arxiv.org/html/2509.04191v1#bib.bib20
, 
2024
https://arxiv.org/html/2509.04191v1#bib.bib19
) . Hubble network flows are aggregated by Pods using K-V aggregation, resulting in a structured representation of interservice communications (illustration and example provided in Fig. 
9
https://arxiv.org/html/2509.04191v1#A3.F9
). Although provenance data can represent network activity through system calls, it does not natively relate to K8s resources (see Sec. 
3.1.4
https://arxiv.org/html/2509.04191v1#S3.SS1.SSS4
). In contrast, Hubble-originated ANLs enrich network flows with K8s metadata (e.g., Pods, IPs, ports, traffic directions) and directly map higher-layer network events to workloads. This enables immediate correlation of network activity with Pods, facilitating precise and efficient optimization of K8s NetworkPolicies.
Report issue for preceding element
3.1.4. Aggregated Provenance Logs (APLs)
Report issue for preceding element
Structured provenance datasets, derived from SPADE output (Gehani and Tariq, 
2012
https://arxiv.org/html/2509.04191v1#bib.bib26
; ([n. d.]), 
ashish gehani
https://arxiv.org/html/2509.04191v1#bib.bib10
) . APLs document system-level interactions within a K8s cluster by representing causal relationships among components, thus enabling interpretation and correlation of system behavior (example provided in Fig. 
10
https://arxiv.org/html/2509.04191v1#A3.F10
). Provenance complements audit and network data by revealing in-container runtime information outside the K8s control plane visibility (e.g., process executions, file writes, socket activity), allowing identification of workload behaviors relevant to security hardening.
Report issue for preceding element
Next, we outline the complete preprocessing of SPADE output leading to its integration into KubeGuard as APLs.
Report issue for preceding element
First, we collect raw provenance logs using SPADE and its extension CLARION (Chen et al., 
2021
https://arxiv.org/html/2509.04191v1#bib.bib18
; ashish gehani, 
[n. d.]
https://arxiv.org/html/2509.04191v1#bib.bib11
) , which provides Linux namespace awareness (Michael Kerrisk, 
2025
https://arxiv.org/html/2509.04191v1#bib.bib61
) for containerized environments (e.g., K8s). Then, these logs undergo preprocessing, referred to as “Provenance Data Association”, as seen in Fig. 
2
https://arxiv.org/html/2509.04191v1#S2.F2
(b) and depicted in Fig. 
4
https://arxiv.org/html/2509.04191v1#S3.F4
. In this process, we transform SPADE output, including its container context provided by CLARION, into structured records of provenance graph (PG) edges (events) and vertices (artifacts or processes) (Gehani and Tariq, 
2012
https://arxiv.org/html/2509.04191v1#bib.bib26
; Moreau et al., 
2011
https://arxiv.org/html/2509.04191v1#bib.bib64
) . To associate PG nodes and edges with their corresponding application microservices, we construct a microservice→value HashMap with microservice information from the K8s cluster (labels, ports, etc.). We then perform text-based matching between this information and the PG components' attributes, for example, aligning process command lines or executable paths with container images or binaries, or mapping socket IP/port pairs with corresponding K8s Service/Pod metadata. This association step also serves as a filter, as PG components that do not map to any known microservice are discarded, reducing downstream volume. The result is container-aware provenance records enriched with K8s microservices context, ready for further processing. Subsequently, K-V aggregation is applied to these container-aware records by events, producing an APLs dataset representing high-level system behaviors.
Report issue for preceding element
 
Figure 4. Illustration of the provenance data association process. SPADE output is matched with K8s microservices information to produce container-aware provenance records. Report issue for preceding element
3.2. Attack Surface Reduction Prompt Chains
Report issue for preceding element
As shown in Fig. 
2
https://arxiv.org/html/2509.04191v1#S2.F2
(c), our framework performs two complementary tasks, handling both missing and existing configurations, as follows.
Report issue for preceding element
(1) Resource Creation: When an application is missing a required configuration (e.g., absent Role or NetworkPolicy), KubeGuard creates a new, secure manifest from observed runtime behavior, enforcing least-privilege access control, which hardens K8s security (example of a creation prompt chain provided in Fig. 
13
https://arxiv.org/html/2509.04191v1#A7.F13
). Report issue for preceding element
(2) Resource Refinement: When a manifest already exists but is overly permissive, KubeGuard suggests stricter configurations according to runtime logs, generating a hardened manifest by the least-privilege principle, while maintaining application functionality (refinement prompt chain illustrated in Fig. 
5
https://arxiv.org/html/2509.04191v1#S3.F5
). Report issue for preceding element
 
Figure 5. Illustration of the Role Refinement prompt chain process: An overly permissive Role is analyzed, matched with aggregated audit logs (AALs), revised according to recommendations, and output as a hardened Role. Report issue for preceding element
These two tasks are implemented through five structured prompt chains, invoked at users' discretion, each tailored for a target K8s resource and a main task, integrating relevant AALs, ANLs, and APLs. The prompt chains output new manifests as recommendations rather than directly modifying the cluster, so generated manifests can be reviewed and selectively applied to align with organizational policies and application needs. All prompts across all chains follow a carefully designed reasoning structure comprising fixed elements: role (system prompt), task, requirements, instructions, input, and expected output with accompanying justification (SATLE 'Are You AI Ready?' Project Team, 
2024
https://arxiv.org/html/2509.04191v1#bib.bib86
) , while allowing modularity to support diverse workflows.
Report issue for preceding element
The following are descriptions of the prompt chains developed:
Report issue for preceding element
3.2.1. Resource Creation
Report issue for preceding element
This task covers the generation of new, secure K8s manifests through two prompt chains: 
Role Creation
 and 
NetworkPolicy Creation
 (Fig. 
2
https://arxiv.org/html/2509.04191v1#S2.F2
(c.1)). The logical sequencing of these chains begins with analyses of manifests and aggregated logs, followed by prompts that generate the required resources.
Report issue for preceding element
Role Creation: The Role Creation prompt chain generates K8s ServiceAccounts (Kubernetes, 
2024a
https://arxiv.org/html/2509.04191v1#bib.bib45
) , Roles, and RoleBindings (Kubernetes, 
2025d
https://arxiv.org/html/2509.04191v1#bib.bib51
) from Deployment manifests and AALs, aligning RBAC policies with workload requirements to enforce fine-grained access control under the least-privilege principle. The prompt chain involves (1) analyzing AALs to derive observed RBAC context, (2) extracting security insights and vulnerabilities from the Deployment manifest, (3) creating scoped ServiceAccounts, (4) generating Roles with minimal required permissions, and (5) binding Roles to ServiceAccounts by defining RoleBindings. This logical sequence ensures each step's insights guide the generation of subsequent resources. The output is a secure, minimal Role manifest embedded within a cohesive RBAC model, including ServiceAccounts, Roles, and RoleBindings, to ensure consistency with K8s logic and seamless cluster integration.
Report issue for preceding element
NetworkPolicy Creation: This prompt chain generates K8s NetworkPolicies to enforce Pod-level ingress and egress traffic control by aligning Deployment manifests with observed patterns from ANLs (illustrated in Fig. 
13
https://arxiv.org/html/2509.04191v1#A7.F13
). NetworkPolicy Creation consists of (1) analyzing the Deployment manifest to extract security-relevant network configurations, (2) examining ANLs to detect communication patterns, anomalies, and unauthorized access, and (3) generating NetworkPolicies with fine-grained ingress and egress traffic rules. The resulting NetworkPolicy manifest ensures secure inter-Pod communication and mitigates potential vulnerabilities.
Report issue for preceding element
3.2.2. Resource Refinement
Report issue for preceding element
This task hardens K8s security by refining overly permissive manifests based on log analysis, through three prompt chains: 
Role Refinement
, 
NetworkPolicy Refinement
, and 
Deployment Refinement
 (Fig. 
2
https://arxiv.org/html/2509.04191v1#S2.F2
(c.2)). The chains' sequencing logic is based on first analyzing manifests and aggregated logs, matching their findings, and then generating optimization recommendations before revising the target resource manifest accordingly.
Report issue for preceding element
Role Refinement: This prompt chain optimizes existing K8s Roles by eliminating unnecessary permissions and enforcing least-privileged access, as illustrated in Fig. 
5
https://arxiv.org/html/2509.04191v1#S3.F5
. It (1) analyzes AALs to derive security-relevant RBAC insights, (2) evaluates the Deployment manifest for security risks, (3) examines the Role manifest to detect excessive rules and verbs, (4) matches Role definitions with AALs to assess actual usage, (5) generates permission-reduction recommendations, and (6) revises the Role accordingly. The output Role manifest ensures minimal RBAC allocation to harden security, reducing the attack surface while maintaining operational integrity.
Report issue for preceding element
NetworkPolicy Refinement: This prompt chain refines existing K8s NetworkPolicies by enforcing stricter ingress and egress controls and communication rules based on ANLs. The prompt chain (1) analyzes the Deployment manifest for network-relevant configurations, (2) evaluates ANLs for observed traffic patterns, (3) examines the existing NetworkPolicy manifest for security gaps, (4) matches the NetworkPolicy with observed network flows from ANLs to identify misconfigurations and (4.A) validates these log-to-policy matches, (5) generates recommendations for refinement, and (6) revises the NetworkPolicy accordingly. The resulting NetworkPolicy manifest ensures more precise and secure traffic control, aligning with K8s' additive-restrictive NetworkPolicy logic.
Report issue for preceding element
Deployment Refinement: This prompt chain refines existing K8s Deployments. It analyzes AALs, APLs, and the manifest itself and reduces excessive permissions and misconfigurations (illustrated in Fig. 
14
https://arxiv.org/html/2509.04191v1#A7.F14
). The prompt chain (1) extracts RBAC insights from AALs, (2) analyzes APLs to identify only necessary dependencies, (3) assesses the Deployment manifest for vulnerabilities, (4) matches the Deployment analysis against the AALs' analysis and (5) the APLs' analysis to detect security-relevant patterns, (6) generates actionable manifest recommendations, and (7) revises the Deployment manifest to incorporate the recommended changes. The output is a refined Deployment manifest, ensuring reduced overprovisioning while maintaining application functionality.
Report issue for preceding element
4. Experimental Setup
Report issue for preceding element
To quantitatively evaluate KubeGuard, we used two microservice applications and collected their audit, provenance, and network logs. Using both synthetic and real manifests, we evaluated multiple prompting methods and model categories across tasks, including Role, NetworkPolicy, and Deployment creation and refinement. Our experiments also cover prompt strategy design, model benchmarking, comparison to other methods, sensitivity testing, and ablation studies, using precision, recall, and F1-score as key metrics.
Report issue for preceding element
4.1. Environment Setup
Report issue for preceding element
4.1.1. LLMs
Report issue for preceding element
We accessed proprietary LLMs via API and local open-source SLMs through Hugging Face (Wolf et al., 
2019
https://arxiv.org/html/2509.04191v1#bib.bib98
) . All local model evaluations were conducted on machines with NVIDIA RTX 6000 GPU (NVIDIA, 
2024
https://arxiv.org/html/2509.04191v1#bib.bib69
) .
Report issue for preceding element
4.1.2. K8s Environment
Report issue for preceding element
We deployed two K8s-based applications in a self-managed cluster on AWS infrastructure: Google's Microservices Demo (Online Boutique) (Platform, 
2025b
https://arxiv.org/html/2509.04191v1#bib.bib73
) and AKS Store Demo (Azure-Samples, 
2024
https://arxiv.org/html/2509.04191v1#bib.bib13
) . Their logs were collected across standard deployment environments, as representative traffic was produced using the applications' native load generators to simulate realistic usage and ensure comprehensive endpoint coverage (Platform, 
2025a
https://arxiv.org/html/2509.04191v1#bib.bib72
; Samples, 
2025a
https://arxiv.org/html/2509.04191v1#bib.bib82
, 
b
https://arxiv.org/html/2509.04191v1#bib.bib83
) . Open-source tools were used to collect log data. Audit logs were recorded at the Metadata level via K8s' auditing mechanism (Kubernetes, 
2024
https://arxiv.org/html/2509.04191v1#bib.bib41
) , using a minimal audit policy (Kubernetes, 
2025a
https://arxiv.org/html/2509.04191v1#bib.bib48
) . Network traffic data was captured using the Hubble observability tool (Cilium, 
2024
https://arxiv.org/html/2509.04191v1#bib.bib19
) . Provenance data was collected using SPADE (Gehani and Tariq, 
2012
https://arxiv.org/html/2509.04191v1#bib.bib26
; ([n. d.]), 
ashish gehani
https://arxiv.org/html/2509.04191v1#bib.bib10
) and its CLARION extension for containerized environments (Chen et al., 
2021
https://arxiv.org/html/2509.04191v1#bib.bib18
; ashish gehani, 
[n. d.]
https://arxiv.org/html/2509.04191v1#bib.bib11
) . This setup is reproducible with the same workloads and tools.
Report issue for preceding element
4.2. Task-Specific Evaluation
Report issue for preceding element
KubeGuard's tasks were evaluated through log-based assessments by comparing their output manifests with least-privilege baseline policies, derived from real application logs. Refinement tasks were also evaluated using manifests with synthetically injected test cases (see Sec. 
4.2.1
https://arxiv.org/html/2509.04191v1#S4.SS2.SSS1
). For Resource Creation, KubeGuard was evaluated on generating secure, accurate, and complete manifests based on behavioral log data. For Resource Refinement, KubeGuard was evaluated on limiting over-permissive manifests using runtime behavior observed in the logs.
Report issue for preceding element
4.2.1. Synthetic Manifests with Excessive Permissions
Report issue for preceding element
To evaluate refinement in a controlled and measurable manner, we designed synthetic K8s manifests containing security anti-patterns, either by intentionally injecting them or by preserving misconfigurations already present in the original files. These excessive manifests span the three resource types: Roles, NetworkPolicies, and Deployments. The design of these manifests is guided by the taxonomy presented in Fig. 
6
https://arxiv.org/html/2509.04191v1#S4.F6
, which includes misconfigurations such as redundant permissions, overly permissive rules, and unused resource specifications—typical issues observed in real-world scenarios. By using excessive configurations according to this taxonomy, we also enable quantifiable measurement of the attack surface reduction by KubeGuard, directly linking hardening results to taxonomy rules.
Report issue for preceding element
 
Figure 6. Rule taxonomy used to define and evaluate excessive or insecure configurations across core K8s resources. Report issue for preceding element
4.3. Evaluation Metrics
Report issue for preceding element
4.3.1. Task Effectiveness
Report issue for preceding element
To evaluate KubeGuard's effectiveness across Resource Creation and Resource Refinement tasks, we adopted standard classification metrics: precision, recall, and F1-score (F1). These metrics are based on the following definitions:
Report issue for preceding element
True Positive (TP): A permission, rule, or configuration, correctly generated or refined based on runtime behavior observed in logs.
Report issue for preceding element
False Positive (FP): A permission, rule, or configuration added or retained incorrectly without evidence from observed behavior (e.g., an extra Role verb or an incorrect NetworkPolicy rule port).
Report issue for preceding element
False Negative (FN): A required permission or rule that is missing from the hardened output, either because it was not created or not refined by the framework, despite being evidenced in the logs.
Report issue for preceding element
True Negative (TN): A configuration element that was correctly retained, as it did not require hardening.
Report issue for preceding element
4.3.2. Similarity Among Aggregated Logs
Report issue for preceding element
We also assessed how closely aggregated logs from different data collection durations resemble each other using three bag‑of‑tokens scores, which anchor the log-duration sensitivity results discussed in Sec. 
5.8.2
https://arxiv.org/html/2509.04191v1#S5.SS8.SSS2
:
Report issue for preceding element
Cosine Similarity: Cosine  ( A , B ) = ∑ i = 1 n A i  B i ∑ i = 1 n A i 2 ⋅ ∑ i = 1 n B i 2 \text{Cosine}(A,B)=\frac{\sum_{i=1}^{n}A_{i}B_{i}}{\sqrt{\sum_{i=1}^{n}A_{i}^{2}}\cdot\sqrt{\sum_{i=1}^{n}B_{i}^{2}}}
Similarity between two token-frequency vectors via the cosine of the angle between them, capturing how consistently tokens appear regardless of their total counts.
Report issue for preceding element
Overlap Coefficient: Overlap  ( A , B ) = | A ∩ B | min  ( | A | , | B | ) \text{Overlap}(A,B)=\frac{|A\cap B|}{\min(|A|,|B|)}
Fraction of shared tokens in the smaller set, highlighting whether all tokens from the shorter window appear in the longer one.
Report issue for preceding element
Dice Coefficient (Sørensen–Dice): Dice  ( A , B ) = 2 ⋅ | A ∩ B | | A | + | B | \text{Dice}(A,B)=\frac{2\cdot|A\cap B|}{|A|+|B|}
Twice the shared tokens divided by the total tokens in both sets, balancing overlap with overall size to reward shared content and penalize mismatches.
Report issue for preceding element
4.4. Experimental Design
Report issue for preceding element
In our experiments, we examined prompting strategies, model categories, task-specific performance, and robustness. We began by benchmarking three prompting techniques (zero-shot (Syed and Gadesha, 
2024
https://arxiv.org/html/2509.04191v1#bib.bib92
) , CoT (Wei et al., 
2022
https://arxiv.org/html/2509.04191v1#bib.bib97
) , and prompt chaining (Anthropic, 
2024a
https://arxiv.org/html/2509.04191v1#bib.bib6
) ) using several proprietary language models applied to a representative task: NetworkPolicy Creation (described in Sec. 
3.2.1
https://arxiv.org/html/2509.04191v1#S3.SS2.SSS1
 and Fig. 
13
https://arxiv.org/html/2509.04191v1#A7.F13
). This phase aimed to identify the most effective prompting strategy and select the best-performing model for subsequent experiments. Once the prompting approach and LLM were selected, we leveraged their combination across all supported tasks: creating Roles and NetworkPolicies, and refining existing manifests for Deployments, Roles, and NetworkPolicies.
Report issue for preceding element
For local open-source SLMs, we first evaluated various models on the same representative task used for LLM selection. Then, we selected the best-performing SLM for complete evaluation of all tasks. To improve SLM output, we introduced an iterative refinement mechanism that recursively applies the refinement prompt chain to harden the manifest over multiple rounds. To investigate the effect of model scale, we evaluated a larger local LLM on selected tasks, measuring its ability to surpass SLMs.
Report issue for preceding element
We also empirically compared KubeGuard with two other relevant methods. In addition, we conducted a sensitivity analysis to study the impact of prompt chain ordering and log collection duration on KubeGuard's performance. Ablation studies isolated the contributions of specific inputs and prompt chain components (e.g., data explanations, matching steps, log types) to KubeGuard's performance. Error analysis was integrated throughout the results section (Sec. 
5
https://arxiv.org/html/2509.04191v1#S5
) to examine performance limitations.
Report issue for preceding element
5. Results
Report issue for preceding element
This section presents the experimental results of KubeGuard on our testbed applications in multiple evaluation phases. We first identified the best-performing LLM and prompting strategy: GPT-4o and prompt chaining. We then extended their evaluation to multiple tasks and K8s resources. We also addressed privacy and computational constraints by evaluating local SLMs, selecting Llama-3.1-8B as the most capable open-source option. We repeated the complete task evaluation using this model. Recognizing the value of even marginal reductions of the attack surface, we explored recursive prompt chaining, showing that iterative refinement can incrementally enhance security. Additionally, we investigated whether larger local models yield better results. We also empirically compared KubeGuard's capabilities with two other task-equivalent methods. Lastly, sensitivity analysis revealed how prompt order and log collection duration affect performance, while ablation studies quantified the individual contributions of prompt components.
Report issue for preceding element
5.1. Selecting the Best LLM and Prompting Approach
Report issue for preceding element
Our first experiment was designed to identify the most effective LLM and prompting technique. To streamline this resource-intensive evaluation (five prompt chains, three models, three techniques), we selected NetworkPolicy Creation as a balanced baseline—complex enough to challenge models, yet requiring relatively short prompting. We evaluated three prompting techniques: zero-shot (Syed and Gadesha, 
2024
https://arxiv.org/html/2509.04191v1#bib.bib92
) (baseline), CoT (Wei et al., 
2022
https://arxiv.org/html/2509.04191v1#bib.bib97
) , and prompt chaining (Anthropic, 
2024a
https://arxiv.org/html/2509.04191v1#bib.bib6
) , across three proprietary LLMs: GPT-4o (Achiam et al., 
2023
https://arxiv.org/html/2509.04191v1#bib.bib3
) , Gemini-1.5-Pro (Pichai and Hassabis, 
2023
https://arxiv.org/html/2509.04191v1#bib.bib71
) , and Claude-3.5-Sonnet (Anthropic, 
2024b
https://arxiv.org/html/2509.04191v1#bib.bib7
) .
Report issue for preceding element
The results, summarized in Table 
2
https://arxiv.org/html/2509.04191v1#S5.T2
, demonstrate how different prompting strategies impacted model performance: In the zero-shot setting (prompt example provided in Fig. 
11
https://arxiv.org/html/2509.04191v1#A4.F11
), GPT-4o achieved the highest precision ( 0.819 0.819 ) and Claude led in recall ( 0.830 0.830 ) and F1 ( 0.764 0.764 ), while Gemini trailed behind (F1 of 0.700 0.700 ). This setting revealed limited task comprehension across all models. In comparison, structured reasoning through CoT prompting (Wei et al., 
2022
https://arxiv.org/html/2509.04191v1#bib.bib97
) showed notable performance gains (prompt example provided in Fig. 
12
https://arxiv.org/html/2509.04191v1#A4.F12
). Gemini outperformed other models in all metrics, scoring an F1 of 0.827 0.827 , while GPT-4o and Claude remained competitive with F1 of 0.775 0.775 and 0.767 0.767 , respectively; however, GPT-4o had a more consistent performance. Prompt chaining delivered the strongest results (prompt chain example provided in Fig. 
13
https://arxiv.org/html/2509.04191v1#A7.F13
). GPT-4o achieved the highest performance on all metrics: precision 0.945 0.945 , recall 0.926 0.926 , and F1 0.935 0.935 , outperforming Claude and Gemini. As seen in Table 
2
https://arxiv.org/html/2509.04191v1#S5.T2
, although Gemini performed best with CoT, prompt chaining produced the highest F1-scores for the other two models and the best overall performance, justifying its selection as our core technique. We hypothesize that this advantage stems from the sequential nature of our approach, which aligns well with the stepwise structure of prompt chaining. Notably, although GPT-4o did not outperform all models in every setting, it consistently showed competitive results across strategies and excelled in prompt chaining, affirming its selection as the primary model for subsequent evaluations.
Report issue for preceding element
Table 2. Performance comparison of proprietary LLMs on NetworkPolicy Creation across prompting techniques.
Technique
Metric
GPT-4o
Gemini-1.5-Pro
Claude-3.5-Sonnet
Zero-shot
Precision
0.819 ± 0.090 0.819\pm 0.090
0.758 ± 0.154 0.758\pm 0.154
0.737 ± 0.193 0.737\pm 0.193
^^
Recall
0.706 ± 0.108 0.706\pm 0.108
0.685 ± 0.175 0.685\pm 0.175
0.830 ± 0.165 0.830\pm 0.165
^^
F1-Score
0.750 ± 0.072 0.750\pm 0.072
0.700 ± 0.015 0.700\pm 0.015
0.764 ± 0.154 0.764\pm 0.154
CoT
Precision
0.817 ± 0.109 0.817\pm 0.109
0.854 ± 0.111 0.854\pm 0.111
0.820 ± 0.173 0.820\pm 0.173
^^
Recall
0.753 ± 0.127 0.753\pm 0.127
0.822 ± 0.147 0.822\pm 0.147
0.751 ± 0.125 0.751\pm 0.125
^^
F1-Score
0.775 ± 0.097 0.775\pm 0.097
0.827 ± 0.102 0.827\pm 0.102
0.767 ± 0.108 0.767\pm 0.108
Chaining
Precision
0.945 ± 0.079 0.945\pm 0.079
0.869 ± 0.136 0.869\pm 0.136
0.924 ± 0.063 0.924\pm 0.063
^^
Recall
0.926 ± 0.107 0.926\pm 0.107
0.732 ± 0.207 0.732\pm 0.207
0.752 ± 0.060 0.752\pm 0.060
^^
F1-Score
0.935 ± 0.093 0.935\pm 0.093
0.784 ± 0.207 0.784\pm 0.207
0.827 ± 0.047 0.827\pm 0.047
Report issue for preceding element
5.2. Evaluating the Best Proprietary LLM: GPT-4o
Report issue for preceding element
Following the selection of GPT-4o as the top-performing proprietary LLM (Sec. 
5.1
https://arxiv.org/html/2509.04191v1#S5.SS1
), we evaluated it on all five prompt chains (Sec. 
3.2
https://arxiv.org/html/2509.04191v1#S3.SS2
). The results are summarized in Table 
3
https://arxiv.org/html/2509.04191v1#S5.T3
 and discussed below.
Report issue for preceding element
Table 3. Performance of GPT-4o across resource creation and refinement prompt chains.
Task
Precision
Recall
F1-Score
Role Creation
1.00 ± 0.0 1.00\pm 0.0
1.00 ± 0.0 1.00\pm 0.0
1.00 ± 0.0 1.00\pm 0.0
NetworkPolicy Creation
0.945 ± 0.079 0.945\pm 0.079
0.926 ± 0.107 0.926\pm 0.107
0.935 ± 0.093 0.935\pm 0.093
Role Refinement
1.00 ± 0.0 1.00\pm 0.0
0.914 ± 0.084 0.914\pm 0.084
0.953 ± 0.047 0.953\pm 0.047
NetworkPolicy Refinement
0.990 ± 0.019 0.990\pm 0.019
0.940 ± 0.113 0.940\pm 0.113
0.961 ± 0.068 0.961\pm 0.068
Deployment Refinement
0.975 ± 0.053 0.975\pm 0.053
0.894 ± 0.140 0.894\pm 0.140
0.929 ± 0.100 0.929\pm 0.100
Report issue for preceding element
Role Creation: GPT-4o achieved perfect scores across all metrics ( 1.00 1.00 ), demonstrating its ability to generate accurate and complete Role definitions from log-derived behavioral insights, without introducing unnecessary permissions or missing required ones. NetworkPolicy Creation: The model achieved high precision ( 0.945 0.945 ) and recall ( 0.926 0.926 ), resulting in F1 of 0.935 0.935 . These results show that GPT-4o reliably identifies the necessary communication policies. A minor drop in recall was observed due to occasional underspecification of ingress or egress rules. This issue can be mitigated through postprocessing; however, it also increases the risk of overfitting. Role Refinement: GPT-4o maintained perfect precision and achieved high recall ( 0.914 0.914 ) and F1 ( 0.953 0.953 ). These results highlight the model's strong capacity to refine RBACs using audit data. Lower recall was observed in infrastructure-facing services (e.g., MongoDB (MongoDB, 
2025
https://arxiv.org/html/2509.04191v1#bib.bib63
) , RabbitMQ (RabbitMQ, 
2025
https://arxiv.org/html/2509.04191v1#bib.bib76
) ), where additional access permissions not present in the logs were mistakenly retained. Alternatively, Roles can be created from the ground up using Role Creation, as it achieved perfect scores across all metrics. NetworkPolicy Refinement: GPT-4o achieved near-perfect precision ( 0.990 0.990 ), strong recall ( 0.940 0.940 ), and F1 of 0.961 0.961 . Error analysis showed that recall declined for services with high network traffic, where complex logs led the model to miss some communication patterns. This limitation can be mitigated by postprocessing. Deployment Refinement: Using AALs and APLs, GPT-4o achieved precision of 0.975 0.975 , recall of 0.894 0.894 , and F1 of 0.929 0.929 , reflecting strong capabilities in hardening existing overly permissive Deployment manifests. Despite the high precision, a small portion of FPs remained. We investigated them and discovered that most were harmless modifications, mainly involving resource allocation. While these refinements potentially improve security, they fall outside the scope of KubeGuard and were therefore treated as FPs in our evaluation. Recall remained strong at 0.894 0.894 , although occasional omissions, such as incomplete port restrictions, resulted in a few missed refinement cases.
Report issue for preceding element
5.3. Selecting the Best Local (Open-Source) SLM
Report issue for preceding element
To address privacy and computational constraints associated with proprietary LLMs, particularly sending data outside of the organization due to external API usage (Kibriya et al., 
2024
https://arxiv.org/html/2509.04191v1#bib.bib36
) , we conducted experiments using three local open-source SLMs: Qwen2.5-7B (Yang et al., 
2024b
https://arxiv.org/html/2509.04191v1#bib.bib101
) , Ministral-8B (mistralai, 
2024
https://arxiv.org/html/2509.04191v1#bib.bib62
) , and Llama-3.1-8B (Grattafiori et al., 
2024
https://arxiv.org/html/2509.04191v1#bib.bib27
) . Each SLM was evaluated on the NetworkPolicy Creation baseline task, using prompt chaining, which was previously identified as the most effective strategy (Sec. 
5.1
https://arxiv.org/html/2509.04191v1#S5.SS1
), and selected as our primary prompting technique. This design choice enabled us to focus on model comparison.
Report issue for preceding element
Table 4. Performance comparison of local open-source SLMs on NetworkPolicy Creation using prompt chaining.
Model
Precision
Recall
F1-Score
Qwen2.5-7B
0.772 ± 0.122 0.772\pm 0.122
0.763 ± 0.193 0.763\pm 0.193
0.759 ± 0.149 0.759\pm 0.149
Ministral-8B
0.784 ± 0.239 0.784\pm 0.239
0.692 ± 0.271 0.692\pm 0.271
0.724 ± 0.255 0.724\pm 0.255
Llama-3.1-8B
0.813 ± 0.113 0.813\pm 0.113
0.803 ± 0.253 0.803\pm 0.253
0.793 ± 0.181 0.793\pm 0.181
Report issue for preceding element
As shown in Table 
4
https://arxiv.org/html/2509.04191v1#S5.T4
, Llama achieved the highest results; precision of 0.813 0.813 , recall of 0.803 0.803 , and F1 of 0.793 0.793 . Qwen followed with a balanced performance, achieving a recall of 0.763 0.763 and an F1 of 0.759 0.759 , though its precision ( 0.722 0.722 ) trailed slightly behind. Ministral showed competitive precision ( 0.784 0.784 ), outperforming Qwen in that metric, but had the lowest recall ( 0.692 0.692 ), resulting in the lowest F1 ( 0.724 0.724 ). These findings confirm that open-source SLMs can handle complex policy optimization tasks. They are ideal for organizations with cost or privacy constraints, offering a balance between performance and accessibility. While proprietary models lead in performance (Sec. 
5.1
https://arxiv.org/html/2509.04191v1#S5.SS1
), it is important to note that even minor improvements in manifest security are valuable, as they reduce the attack surface by enforcing the principle of least privilege. Thus, SLMs offer a practical privacy-preserving alternative for secure on-premise deployments. Building on the results outlined above, Llama was selected for subsequent experiments, reflecting prioritization of consistent and accurate outputs in security-sensitive contexts.
Report issue for preceding element
5.4. Evaluating the Best Local SLM: Llama-3.1-8B
Report issue for preceding element
With Llama-3.1-8B identified as the best-performing SLM (Sec. 
5.3
https://arxiv.org/html/2509.04191v1#S5.SS3
), we replicated the GPT-4o experiments (Sec. 
5.2
https://arxiv.org/html/2509.04191v1#S5.SS2
), covering all resource creation and refinement tasks (experiment results in Table 
5
https://arxiv.org/html/2509.04191v1#S5.T5
).
Report issue for preceding element
Table 5. Performance of Llama-3.1-8B across resource creation and refinement prompt chains.
Task
Precision
Recall
F1-Score
Role Creation
0.616 ± 0.327 0.616\pm 0.327
0.689 ± 0.244 0.689\pm 0.244
0.607 ± 0.266 0.607\pm 0.266
NetworkPolicy Creation
0.813 ± 0.113 0.813\pm 0.113
0.803 ± 0.253 0.803\pm 0.253
0.793 ± 0.181 0.793\pm 0.181
Role Refinement
0.975 ± 0.065 0.975\pm 0.065
0.758 ± 0.230 0.758\pm 0.230
0.808 ± 0.197 0.808\pm 0.197
NetworkPolicy Refinement
0.889 ± 0.191 0.889\pm 0.191
0.385 ± 0.222 0.385\pm 0.222
0.504 ± 0.228 0.504\pm 0.228
Deployment Refinement
0.689 ± 0.159 0.689\pm 0.159
0.804 ± 0.108 0.804\pm 0.108
0.728 ± 0.089 0.728\pm 0.089
Report issue for preceding element
Role Creation: Llama demonstrated modest effectiveness in generating K8s Roles, achieving a precision of 0.616 0.616 , a recall of 0.689 0.689 , and an F1 of 0.607 0.607 . The model tended to generate more rules than were strictly necessary. Although some of these additions improve security, they were treated as FPs since they were not evidenced in the logs, which contributed to reduced precision. This behavior reflects a recurring pattern also observed with GPT-4o (Sec. 
5.2
https://arxiv.org/html/2509.04191v1#S5.SS2
), where security-enhancing outputs occasionally extended beyond the defined task scope. NetworkPolicy Creation: Llama exhibited strong performance for this task: precision of 0.813 0.813 , recall of 0.803 0.803 , and an F1 of 0.793 0.793 . The model effectively inferred required network rules from ANLs, producing secure and minimal policies. While the model performed well, we observed occasional under-specification of rules, especially in more dynamic communication scenarios. These cases highlight areas where postprocessing may be beneficial to ensure complete policy coverage. Role Refinement: Llama achieved high precision ( 0.975 0.975 ) and strong recall ( 0.758 0.758 ), resulting in an F1 of 0.808 0.808 . It reliably removed unnecessary permissions, but sometimes missed edge-case access rules in ambiguous or infrequent access patterns. These results indicate effective RBAC refinement capabilities with room for improvement in recall. NetworkPolicy Refinement: Llama exhibited mixed performance, with a relatively high precision of 0.889 0.889 , but a low recall of 0.385 0.385 , leading to an F1 of 0.504 0.504 . This low recall was due to the model often missing service connections, a result of the complexity of reconstructing network interactions from dense log data. Nonetheless, even partial refinements contribute to reducing the overall attack surface. Given these limitations, we suggest complementing NetworkPolicy Refinement with NetworkPolicy Creation to uncover additional traffic flows and improve overall security assurance. Deployment Refinement: In this task, Llama exhibited moderate performance, achieving a precision of 0.689 0.689 , a recall of 0.804 0.804 , and an F1 of 0.728 0.728 . The high recall shows that the model successfully captures most necessary refinements, while the moderate precision indicates it also includes some irrelevant or unnecessary changes. Although Llama's precision is moderate, its high recall indicates that it effectively leverages APLs to propose context‑aware, container‑level security improvements.
Report issue for preceding element
Processing time results further confirmed SLMs' practicality, with all Llama-3.1-8B prompt chains completing within usable limits (up to 15 minutes), supporting their integration as offline adaptive hardening workflows (complete results in Table 
9
https://arxiv.org/html/2509.04191v1#A5.T9
).
Report issue for preceding element
In this section ( 
5.4
https://arxiv.org/html/2509.04191v1#S5.SS4
), we evaluated how well an SLM performs when applied to various K8s resource creation and refinement tasks. As expected, the SLM performs relatively well, though not as well as the proprietary LLM (GPT-4o, Sec. 
5.2
https://arxiv.org/html/2509.04191v1#S5.SS2
). The following sections, 
5.5
https://arxiv.org/html/2509.04191v1#S5.SS5
 and 
5.6
https://arxiv.org/html/2509.04191v1#S5.SS6
, present two strategies that we developed and evaluated to improve the performance of SLMs and support use cases where organizations must rely on a local open-source model.
Report issue for preceding element
5.5. Iterative Security Refinement
Report issue for preceding element
As discussed in Sec. 
5
https://arxiv.org/html/2509.04191v1#S5.T5
, Llama initially showed low recall ( 0.385 0.385 ) in the NetworkPolicy Refinement task, resulting in a moderate F1 of 0.504 0.504 . To address this, we developed an iterative refinement loop that recursively feeds the output of each prompt chain iteration (a refined manifest) back into the model as input for the next. This enables the model to incrementally improve its recommendations by building on previously refined configurations. In our experiments, shown in Fig. 
7
https://arxiv.org/html/2509.04191v1#S5.F7
, NetworkPolicies refined by the SLM became increasingly aligned with observed traffic restrictions over the first three iterations: Recall and F1 improved consistently, from 0.385 0.385 to 0.593 0.593 , and from 0.504 0.504 to 0.673 0.673 , respectively, and precision remained consistently high, only slightly decreasing from 0.889 0.889 to 0.862 0.862 .
Report issue for preceding element
 
Figure 7. Average precision, recall, and F1-score across five NetworkPolicy Refinement iterations. Report issue for preceding element
However, performance declined across all metrics in the fourth iteration, indicating that the model over-pruned some legitimate rules. To verify whether the decline was persistent, we ran a fifth pass, which lifted precision to 0.787 0.787 , recall to 0.633 0.633 , and F1 to 0.682 0.682 . This indicates that the fourth iteration drop was primarily a temporary effect and not a progressive performance drift. The net gain in F1 beyond the third iteration and the alternating drop-recovery pattern reveal an oscillation with diminishing returns, suggesting that continued refinement beyond this point may be unnecessary. In general, iterative refinement improves manifest security through five iterations (cumulative increase of 0.178 0.178 in F1). The only potential drawback is oscillations in later rounds, which a simple early stopping criterion can readily mitigate.
Report issue for preceding element
5.6. Extending from Local SLM to Local LLM
Report issue for preceding element
To explore whether increasing model size improves performance, we evaluated a larger open-source LLM, Qwen2.5-14B (Yang et al., 
2024b
https://arxiv.org/html/2509.04191v1#bib.bib101
) . Despite Llama-3.1-8B being the top-performing SLM in earlier experiments (Sec. 
5.3
https://arxiv.org/html/2509.04191v1#S5.SS3
), its next‐size variant has 70 billion parameters (Meta AI, 
2024
https://arxiv.org/html/2509.04191v1#bib.bib60
) , making it impractical for many local deployments and common users. Consequently, we selected Qwen2.5-14B (Yang et al., 
2024b
https://arxiv.org/html/2509.04191v1#bib.bib101
) as the larger representative local LLM to compare directly with its smaller variant, Qwen2.5-7B, for a fair evaluation of model size. We focused on two tasks that provide a strong benchmark for scaling effects: NetworkPolicy Creation (previously used as baseline in Sec. 
5.3
https://arxiv.org/html/2509.04191v1#S5.SS3
) and NetworkPolicy Refinement, which targets the same resource but is more complex and proved challenging for Llama-3.1-8B (required reasoning across multiple chain outputs in Sec. 
5.5
https://arxiv.org/html/2509.04191v1#S5.SS5
).
Report issue for preceding element
In NetworkPolicy Creation, Qwen2.5-14B achieved precision of 0.781 ± 0.172 0.781\pm 0.172 and recall of 0.774 ± 0.171 0.774\pm 0.171 , yielding F1 of 0.774 ± 0.166 0.774\pm 0.166 . Although this performance was slightly below Llama-3.1-8B, which reached F1 of 0.793 0.793 , it still marked an improvement over its smaller counterpart, Qwen2.5-7B, in all metrics (Table 
4
https://arxiv.org/html/2509.04191v1#S5.T4
). These results suggest that model alignment may be the cause of the performance gap observed with Llama. More notably, in NetworkPolicy Refinement, Qwen2.5-14B reached precision of 0.724 ± 0.316 0.724\pm 0.316 , recall of 0.645 ± 0.352 0.645\pm 0.352 , and F1 of 0.667 ± 0.340 0.667\pm 0.340 . This significantly outperformed Llama-3.1-8B, which only achieved an F1 of 0.504 0.504 with a recall of 0.385 0.385 (Table 
5
https://arxiv.org/html/2509.04191v1#S5.T5
). These findings indicate that scaling to a larger local LLM can yield measurable improvements in certain hardening tasks, particularly refinement. Thus, Qwen2.5-14B offers a promising alternative when additional model capacity is available.
Report issue for preceding element
5.7. Empirical Comparison to Existing Methods
Report issue for preceding element
We evaluated KubeGuard with two methods that perform identical tasks, ensuring a valid empirical comparison: audit2rbac (Liggitt, 
2023
https://arxiv.org/html/2509.04191v1#bib.bib56
) and KUBETEUS (Kim et al., 
2025
https://arxiv.org/html/2509.04191v1#bib.bib37
) (reviewed in Sec. 
2.2
https://arxiv.org/html/2509.04191v1#S2.SS2
). audit2rbac generates Roles and RoleBindings derived from K8s audit logs and API requests for each user. KUBETEUS employs intent-driven LLM prompts on static manifests and live API state to generate NetworkPolicies, and was also evaluated on Online Boutique (Platform, 
2025b
https://arxiv.org/html/2509.04191v1#bib.bib73
) , one of our testbed applications. We evaluated the performance of KubeGuard against each method with the same workloads, quantifying its relative effectiveness under identical conditions.
Report issue for preceding element
We compared KubeGuard (using GPT-4o) with audit2rbac on Role Creation (Table 
10
https://arxiv.org/html/2509.04191v1#A6.T10
). While user-centric audit2rbac achieved perfect recall, it overgenerated rules, thus producing many FPs and resulting in low precision ( 0.208 0.208 ) and F1 ( 0.343 0.343 ). In contrast, the pod-centric approach of KubeGuard achieved perfect scores.
Report issue for preceding element
We evaluated KubeGuard against KUBETEUS on NetworkPolicy Creation under the same constrained compute conditions, using the Deepseek-Coder-1.3B SLM (Guo et al., 
2024
https://arxiv.org/html/2509.04191v1#bib.bib28
) (Table 
11
https://arxiv.org/html/2509.04191v1#A6.T11
). Both methods showed modest performance due to the model's limited capacity, but KubeGuard outperformed KUBETEUS, achieving higher precision ( 0.444 0.444 vs. 0.360 0.360 ), recall ( 0.265 0.265 vs. 0.238 0.238 ), and F1 ( 0.332 0.332 vs. 0.275 0.275 ).
Report issue for preceding element
Through this empirical comparison, we demonstrate how KubeGuard, grounded in Pod-aggregated audit and network data, yields significantly more secure manifests across both Roles and NetworkPolicies, compared to other relevant, task-equivalent tools.
Report issue for preceding element
5.8. Sensitivity Analysis
Report issue for preceding element
5.8.1. Prompt Chain Order
Report issue for preceding element
To assess how prompt ordering affects performance in chain-of-prompts pipelines, we conducted a sensitivity analysis on Deployment Refinement. This task was chosen because it relies on both AALs and APLs, making it one of KubeGuard's longest and most complex prompt chains. The analysis evaluated how varying the order of functional prompts affects model output. We empirically evaluated three prompt chain orders.
Report issue for preceding element
As shown in Table 
6
https://arxiv.org/html/2509.04191v1#S5.T6
, the order in which prompts are chained has a noticeable effect on performance. M  a  n  i  f  e  s  t → L  o  g  s Manifest\rightarrow Logs refers to a reverse chaining strategy, where the model is first given the manifest, followed by the aggregated logs. This contrasts with our original method, L  o  g  s → M  a  n  i  f  e  s  t Logs\rightarrow Manifest , which begins by analyzing behavioral logs before the manifest. The reversed configuration achieved an F1 of 0.909 0.909 , trailing slightly behind the original method's 0.929 0.929 . Unlike our approach, which first analyzed all data sources and then determined their relationship to the manifest, A  n  a  l  y  z  e & M  a  t  c  h Analyze&Match analyzed each data source individually and matched it immediately with its corresponding K8s resource. The A  n  a  l  y  z  e & M  a  t  c  h Analyze&Match configuration yielded the lowest F1 ( 0.848 0.848 ), mainly due to reduced recall ( 0.815 0.815 ). These findings indicate that prompt sequencing is a key factor in KubeGuard's effectiveness. Designing prompt chains to reflect real-world reasoning, by interpreting logs before updating the manifests, improves model alignment and output accuracy.
Report issue for preceding element
Table 6. Performance of different prompt chain orders on Deployment Refinement.
Chain Order
Precision
Recall
F1-Score
L  o  g  s → M  a  n  i  f  e  s  t Logs\rightarrow Manifest
0.975 ± 0.053 0.975\pm 0.053
0.894 ± 0.140 0.894\pm 0.140
0.929 ± 0.100 0.929\pm 0.100
M  a  n  i  f  e  s  t → L  o  g  s Manifest\rightarrow Logs
0.973 ± 0.063 0.973\pm 0.063
0.864 ± 0.157 0.864\pm 0.157
0.909 ± 0.109 0.909\pm 0.109
A  n  a  l  y  z  e & M  a  t  c  h Analyze&Match
0.905 ± 0.145 0.905\pm 0.145
0.815 ± 0.251 0.815\pm 0.251
0.848 ± 0.217 0.848\pm 0.217
Report issue for preceding element
5.8.2. Sensitivity To Data Collection Duration
Report issue for preceding element
To evaluate how the duration of data collection affects the completeness of aggregated logs, we replicated the first step of our method (“Data Acquisition and Preprocessing”, Sec. 
3.1
https://arxiv.org/html/2509.04191v1#S3.SS1
) to produce AALs, ANLs, and APLs of varying durations for comparison. Each demo application was run with its built-in load generator (Platform, 
2025a
https://arxiv.org/html/2509.04191v1#bib.bib72
; Samples, 
2025a
https://arxiv.org/html/2509.04191v1#bib.bib82
, 
b
https://arxiv.org/html/2509.04191v1#bib.bib83
) for seven consecutive days to collect logs accordingly (Fig. 
2
https://arxiv.org/html/2509.04191v1#S2.F2
(a)). The resulting trace was then divided into 100 cumulative segments: segment 1 contains only the earliest events, segment 2 contains all events from segment 1 plus the next segment, and so on, until segment 100 covers the full week. Each cumulative segment was processed to generate AALs, ANLs, and APLs using K-V aggregation (Algorithm 
1
https://arxiv.org/html/2509.04191v1#algorithm1
). We then measured the similarity between consecutive segment pairs ( ⟨ segment i , segment i + 1 ⟩ \langle\text{segment}
{i},\text{segment}
{i+1}\rangle ) for each type of aggregated log using Cosine, Overlap, and Dice similarity metrics (Sec. 
5.9.1
https://arxiv.org/html/2509.04191v1#S5.SS9.SSS1
). This time-lag analysis reveals how quickly each aggregated log type converges as the duration of data collection increases.
Report issue for preceding element
 
Figure 8. Similarity between successive cumulative aggregated log segments across log types and applications. Report issue for preceding element
Each point in Fig. 
8
https://arxiv.org/html/2509.04191v1#S5.F8
 represents the similarity between two consecutive segments: A value of 1 indicates identical content, while lower values reflect changes. The figure includes two graphs, one for each application's results (Google's “Microservices Demo” (Platform, 
2025b
https://arxiv.org/html/2509.04191v1#bib.bib73
) and“AKS Store Demo” (Azure-Samples, 
2024
https://arxiv.org/html/2509.04191v1#bib.bib13
) ), allowing comparison of how quickly each application's logs converge. We observed that all three log types rapidly approached convergence, reaching a similarity score of almost 1.0 1.0 early in the trace, with each type converging at a different point in time. The similarity of APLs and ANLs stabilized in about 4 hours (reaching a similarity of approximately 0.98 0.98 ) while AALs required a longer horizon of about 1.75 1.75 days to reach the same score. Beyond these points, longer runs did not contribute meaningful changes, indicating that aggregation captures and preserves core behavioral patterns early. Thus, once convergence is reached, the duration of data collection no longer impacts the aggregated output, which remains stable across both applications under realistic workloads.
Report issue for preceding element
Notably, aggregation reduced token volume by around 5.6 5.6 million tokens ( 99.96 % 99.96% ) across log types on our evaluation datasets, composed of log data collected after the convergence point, when additional data no longer introduced new information. This substantial compression shows that collecting logs beyond convergence merely inflates the dataset size by millions of tokens without benefit. This efficiency keeps input data within LLM token limits, reduces cost, and improves accuracy. It is important to note that operators should generate representative traffic to ensure adequate coverage before convergence. Moreover, the results show that K-V aggregation helps mitigate sensitivity to data sufficiency, ensuring reliable results even when exact data completeness varies.
Report issue for preceding element
5.9. Ablation Study
Report issue for preceding element
5.9.1. Effect of Data Explanations
Report issue for preceding element
To assess the role of explanatory context, we reversed KubeGuard's default settings by removing log type descriptions where they were originally used and adding them where they were absent. As shown in Table 
7
https://arxiv.org/html/2509.04191v1#S5.T7
, Deployment Refinement (Sec. 
3.2.2
https://arxiv.org/html/2509.04191v1#S3.SS2.SSS2
) performance decreased without additional explanations about the data, with F1 of 0.881 0.881 compared to 0.929 0.929 in the original configuration (Table 
3
https://arxiv.org/html/2509.04191v1#S5.T3
). This reduction suggests that the task benefits from added context, as explanations help the model integrate multiple log sources (AALs and APLs) in more complex tasks for more accurate refinements. Conversely, adding explanations reduced performance in simpler tasks like Role Creation (F1 of 1.00 1.00 vs. 0.735 0.735 ). These declines suggest that when input requirements are minimal, added context can introduce unnecessary noise that disrupts the model's reasoning. Overall, the results suggest that data explanations benefit complex tasks involving multi-source integration but may hinder performance in simpler tasks, where concise inputs better support model reasoning.
Report issue for preceding element
Table 7. GPT-4o performance across prompt chains with and without additional data explanations.
Task
Explanations
Precision
Recall
F1-Score
Role Creation
With
0.776 ± 0.327 0.776\pm 0.327
0.844 ± 0.223 0.844\pm 0.223
0.735 ± 0.250 0.735\pm 0.250
NetworkPolicy Creation
With
0.938 ± 0.091 0.938\pm 0.091
0.871 ± 0.156 0.871\pm 0.156
0.897 ± 0.118 0.897\pm 0.118
Role Refinement
With
1.00 ± 0.0 1.00\pm 0.0
0.860 ± 0.155 0.860\pm 0.155
0.917 ± 0.100 0.917\pm 0.100
NetworkPolicy Refinement
With
0.952 ± 0.061 0.952\pm 0.061
0.889 ± 0.138 0.889\pm 0.138
0.916 ± 0.101 0.916\pm 0.101
Deployment Refinement
Without
0.949 ± 0.107 0.949\pm 0.107
0.826 ± 0.119 0.826\pm 0.119
0.881 ± 0.105 0.881\pm 0.105
Report issue for preceding element
5.9.2. Effect of Removing the Matching Step from Refinement Prompt Chains
Report issue for preceding element
We tested how removing the matching step from refinement prompt chains impacts performance, expecting degradation. Table 
8
https://arxiv.org/html/2509.04191v1#S5.T8
 shows that removing it reduced performance for all tasks: In Role Refinement, recall dropped from 0.914 0.914 to 0.721 0.721 , lowering F1 to 0.835 0.835 ; NetworkPolicy Refinement saw a larger decline, with F1 dropping from 0.961 0.961 to 0.652 0.652 ; Deployment Refinement was less affected, but its performance still decreased (F1 of 0.929 0.929 vs. 0.854 0.854 ). These results highlight the critical role of the matching step in aligning log-derived insights with K8s manifests for refinement chains, facilitating more accurate context-aware recommendations.
Report issue for preceding element
Table 8. GPT-4o performance across refinement tasks after removing the matching step from prompt chains.
Task (No Matching)
Precision
Recall
F1-Score
Role Refinement
1.00 ± 0.0 1.00\pm 0.0
0.721 ± 0.075 0.721\pm 0.075
0.835 ± 0.048 0.835\pm 0.048
NetworkPolicy Refinement
0.791 ± 0.298 0.791\pm 0.298
0.562 ± 0.223 0.562\pm 0.223
0.652 ± 0.247 0.652\pm 0.247
Deployment Refinement
0.924 ± 0.109 0.924\pm 0.109
0.810 ± 0.163 0.810\pm 0.163
0.854 ± 0.124 0.854\pm 0.124
Report issue for preceding element
5.9.3. Effect of Omitting Data Sources in Deployment Refinement
Report issue for preceding element
To evaluate the importance of each data source in Deployment Refinement, we removed AALs and APLs separately. Compared to the original configuration, which achieved an F1 of 0.929 ± 0.100 0.929\pm 0.100 (Sec. 
5.2
https://arxiv.org/html/2509.04191v1#S5.SS2
), removing AALs had the strongest effect, lowering F1 to 0.829 ± 0.137 0.829\pm 0.137 , having a precision of 0.928 ± 0.088 0.928\pm 0.088 , and a reduced recall of 0.765 ± 0.177 0.765\pm 0.177 . Omitting APLs led to a smaller drop—F1 of 0.876 ± 0.149 0.876\pm 0.149 , as KubeGuard maintained a precision of 0.938 ± 0.116 0.938\pm 0.116 and a recall of 0.831 ± 0.177 0.831\pm 0.177 . These results underscore that both AALs and APLs contribute uniquely valuable context, and their combined use is essential for accurate and complete manifest hardening, highlighting the value of multi-source integration.
Report issue for preceding element
5.10. Error Analysis
Report issue for preceding element
To better understand KubeGuard's performance and where it struggles, we conducted detailed error analysis for all hardening tasks.
Report issue for preceding element
GPT-4o's errors were rare, interpretable, and often benign, such as configuring source ports instead of destination ports for high-traffic NetworkPolicies, which can be corrected with postprocessing. However, since overall performance is already high, adding more steps to prompt chains would lengthen the pipeline and risk introducing noise without meaningful gains. Role Refinement performed well in general. Its main error, retaining rare infrastructure‑facing permissions, reflects a cautious stance to preserve functionality, hence acceptable. Similarly, NetworkPolicy Refinement had minor recall drops due to missed connections in high‑traffic services, underscoring challenges of reasoning over large‑volume logs. This can be mitigated through postprocessing as well (e.g., rule-based or human-in-the-loop). Deployment Refinement also performed well overall, while its main issue was pretrained LLMs' tendency to add beneficial best‑practice hardenings, although unrequested (Zhou et al., 
2024
https://arxiv.org/html/2509.04191v1#bib.bib104
; Yang et al., 
2024a
https://arxiv.org/html/2509.04191v1#bib.bib102
; Huang et al., 
2025
https://arxiv.org/html/2509.04191v1#bib.bib33
) .
Report issue for preceding element
Llama-3.1-8B, while smaller, demonstrated high precision across tasks. However, like GPT‑4o, it sometimes under-specified ingress or egress rules in traffic-heavy NetworkPolicy refinements, but also missed rare permissions in Role refinements, likely due to low frequency and ambiguous usage, leading to slightly lower recall. In Role Creation, it occasionally added unobserved actions, for example, permissions for persistent storage resources (e.g., PersistentVolumes (Kubernetes, 
2025c
https://arxiv.org/html/2509.04191v1#bib.bib50
) ), even when no storage-related activity was detected. Although potentially security-enhancing, these were out of KubeGuard's scope; therefore, they reduced precision. In general, errors reflected trade-offs between log adherence and operational security, rather than systemic flaws. KubeGuard's iterative refinement and human oversight help resolve such edge cases.
Report issue for preceding element
6. Limitations
Report issue for preceding element
While KubeGuard provides an effective approach to K8s security hardening, it has several limitations. First, although KubeGuard supports both Resource Creation and Refinement, it currently targets only Roles, NetworkPolicies, and Deployments. Future work aims to broaden this scope. Second, although our modular prompt chaining has proved effective across tasks and resources, crafting prompts requires expertise, particularly when adapting to new resource types or domains. Third, although KubeGuard generates ready-to-use hardened manifests, it delegates enforcement to the user. This design prioritizes safety and transparency, but may hinder adoption when automated remediation is required. Regarding strategies for improving SLM performance, although our results are promising, future work could explore adaptive stopping for iterative refinement in depth for further improvement. Notably, capturing sufficient log data requires representative traffic, often a limitation for log-driven approaches, similar to dynamic analysis (Li et al., 
2021
https://arxiv.org/html/2509.04191v1#bib.bib54
; Clausen et al., 
2019
https://arxiv.org/html/2509.04191v1#bib.bib21
; Xiang et al., 
2019
https://arxiv.org/html/2509.04191v1#bib.bib100
) . This can be mitigated through either load generators that exercise relevant endpoints (e.g., Locust (Heyman et al., 
2025
https://arxiv.org/html/2509.04191v1#bib.bib31
; Platform, 
2025a
https://arxiv.org/html/2509.04191v1#bib.bib72
) , Rust-based (Team, 
2025
https://arxiv.org/html/2509.04191v1#bib.bib93
; Samples, 
2025a
https://arxiv.org/html/2509.04191v1#bib.bib82
, 
b
https://arxiv.org/html/2509.04191v1#bib.bib83
) ), or by recording real user traffic. Since KubeGuard can be applied offline and in any standard deployment environment, such activity can be produced without disrupting operational workflows. Moreover, our K-V aggregation method ensured sufficient coverage in our testbed environment (Sec. 
5.8.2
https://arxiv.org/html/2509.04191v1#S5.SS8.SSS2
).
Report issue for preceding element
7. Conclusion
Report issue for preceding element
In this research, we introduced 
KubeGuard
, an LLM-guided log-driven framework that leverages prompt chaining to transform dynamic observability data into actionable least-privileged K8s manifests. By supporting both Resource Creation and Refinement, KubeGuard serves as a practical user-assistive solution for scalable hardening in modern threat-prone environments. By integrating audit, network, and provenance logs into structured prompt chains, KubeGuard generates precise, context-aware, least-privilege manifests that reduce the attack surface. Comprehensive evaluations demonstrated KubeGuard's effectiveness. The best results were achieved by the proprietary GPT-4o model, while among open-source SLMs, Llama-3.1-8B demonstrated solid performance, making it suitable for cost-sensitive or privacy-focused settings.
Report issue for preceding element
While KubeGuard performs well for core K8s resources, future work will expand its coverage to include additional resource types, such as ConfigMaps (Kubernetes, 
2024b
https://arxiv.org/html/2509.04191v1#bib.bib46
) and PersistentVolumes (Kubernetes, 
2025c
https://arxiv.org/html/2509.04191v1#bib.bib50
) . Extending resource support will provide a more comprehensive hardening solution that spans the entire K8s cluster lifecycle. In addition, future work will evaluate larger open-source LLMs (e.g., Llama-3.1-70B/405B (Grattafiori et al., 
2024
https://arxiv.org/html/2509.04191v1#bib.bib27
) , DeepSeek-V3-671B (DeepSeek-AI, 
2024
https://arxiv.org/html/2509.04191v1#bib.bib23
) ) to assess whether greater capacity and reasoning ability improve performance, especially for complex refinement tasks, while preserving the benefits of local privacy-aware inference. Lastly, future research will integrate application-level context, such as system architecture and component roles, to facilitate more targeted security recommendations.
Report issue for preceding element
References
Report issue for preceding element
(1) ↑
Abbas et al. (2022) ↑ Mashal Abbas, Shahpar Khan, Abdul Monum, Fareed Zaffar, Rashid Tahir, David Eyers, Hassaan Irshad, Ashish Gehani, Vinod Yegneswaran, and Thomas Pasquier. 2022. PACED: provenance-based automated container escape detection. In 
2022 IEEE International Conference on Cloud Engineering (IC2E)
. IEEE, 261–272.
Achiam et al. (2023) ↑ Josh Achiam, Steven Adler, Sandhini Agarwal, Lama Ahmad, Ilge Akkaya, Florencia Leoni Aleman, Diogo Almeida, Janko Altenschmidt, Sam Altman, Shyamal Anadkat, et al. 2023. Gpt-4 technical report. 
arXiv preprint arXiv:2303.08774
 (2023).
Alawneh and Abbadi (2022) ↑ Muntaha Alawneh and Imad M Abbadi. 2022. Expanding DevSecOps practices and clarifying the concepts within kubernetes ecosystem. In 
2022 Ninth International Conference on Software Defined Systems (SDS)
. IEEE, 1–7.
Ansible (2025) ↑ Sponsored by Red Hat Ansible. 2025. Ansible Community Documentation - Ansible offers open-source automation that is simple, flexible, and powerful. 
https://docs.ansible.com/
https://docs.ansible.com/
.
Anthropic (2024a) ↑ Anthropic. 2024a. Chain Prompts. 
https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/chain-prompts
https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/chain-prompts
 Accessed: 2025-04-14.
Anthropic (2024b) ↑ Anthropic. 2024b. Claude 3. 
https://www.anthropic.com/news/claude-3-family
https://www.anthropic.com/news/claude-3-family
AppArmor ([n. d.]) ↑ AppArmor. [n. d.]. AppArmor: Linux kernel security module. 
https://apparmor.net/
https://apparmor.net/
.
Aqua Security (2024) ↑ Aqua Security. 2024. kube-hunter: an Open Source Tool for Discovering Security Issues in Kubernetes Clusters. 
https://github.com/aquasecurity/kube-hunter
https://github.com/aquasecurity/kube-hunter
.
(10) ↑ Ashish Gehani (ashish gehani). [n. d.]. SPADE. 
https://github.com/ashish-gehani/SPADE
https://github.com/ashish-gehani/SPADE
.
ashish gehani ([n. d.]) ↑ hassaanirshad ashish gehani. [n. d.]. SPADE: Configuring namespace reporting. 
https://github.com/ashish-gehani/SPADE/wiki/Collecting-system-wide-provenance-on-Linux-with-Audit#configuring-namespace-reporting
https://github.com/ashish-gehani/SPADE/wiki/Collecting-system-wide-provenance-on-Linux-with-Audit#configuring-namespace-reporting
.
ashish-gehani (Ashish Gehani) ↑ hassaanirshad ashish-gehani (Ashish Gehani). 2024. SPADE Audit Provenance: Data Model and Schema. 
https://github.com/ashish-gehani/SPADE/wiki/Audit-provenance
https://github.com/ashish-gehani/SPADE/wiki/Audit-provenance
.
Azure-Samples (2024) ↑ Azure-Samples. 2024. AKS Store Demo. 
https://github.com/Azure-Samples/aks-store-demo
https://github.com/Azure-Samples/aks-store-demo
.
Bringhenti et al. (2023) ↑ Daniele Bringhenti, Riccardo Sisto, and Fulvio Valenza. 2023. Security automation for multi-cluster orchestration in Kubernetes. In 
2023 IEEE 9th International Conference on Network Softwarization (NetSoft)
. IEEE, 480–485.
Cao et al. (2022) ↑ Clinton Cao, Agathe Blaise, Sicco Verwer, and Filippo Rebecchi. 2022. Learning state machines to monitor and detect anomalies on a kubernetes cluster. In 
Proceedings of the 17th International Conference on Availability, Reliability and Security
. 1–9.
Cesarano and Natella (2025) ↑ Carmine Cesarano and Roberto Natella. 2025. KubeFence: Security Hardening of the Kubernetes Attack Surface. arXiv:2504.11126 [cs.CR] 
https://arxiv.org/abs/2504.11126
https://arxiv.org/abs/2504.11126
Checmarx (2021) ↑ Checmarx. 2021. KICS: keeping infrastructure as code secure is an open source solution for static code analysis of Infrastructure as Code. 
https://kics.io/index.html
https://kics.io/index.html
.
Chen et al. (2021) ↑ Xutong Chen, Hassaan Irshad, Yan Chen, Ashish Gehani, and Vinod Yegneswaran. 2021. CLARION: Sound and clear provenance tracking for microservice deployments. In 
30th USENIX Security Symposium (USENIX Security 21)
. 3989–4006.
Cilium (2024) ↑ Cilium. 2024. Hubble. 
https://github.com/cilium/hubble
https://github.com/cilium/hubble
.
Cilium (2025) ↑ Cilium. 2025. 
Inspecting the Cluster's Network Traffic with Hubble Relay
. 
https://docs.cilium.io/en/stable/observability/hubble/hubble-cli/#inspecting-the-cluster-s-network-traffic-with-hubble-relay
https://docs.cilium.io/en/stable/observability/hubble/hubble-cli/#inspecting-the-cluster-s-network-traffic-with-hubble-relay
Clausen et al. (2019) ↑ Henry Clausen, Robert Flood, and David Aspinall. 2019. Traffic generation using containerization for machine learning. In 
Proceedings of the 2019 Workshop on DYnamic and Novel Advances in Machine Learning and Intelligent Cyber Security
. 1–12.
Cloud (2019) ↑ Prisma Cloud. 2019. Checkov: Policy-as-code for everyone. 
https://www.checkov.io/
https://www.checkov.io/
.
DeepSeek-AI (2024) ↑ DeepSeek-AI. 2024. DeepSeek-V3 Technical Report. arXiv:2412.19437 [cs.CL] 
https://arxiv.org/abs/2412.19437
https://arxiv.org/abs/2412.19437
Diaf et al. (2024) ↑ Alaeddine Diaf, Abdelaziz Amara Korba, Nour Elislem Karabadji, and Yacine Ghamri-Doudane. 2024. BARTPredict: Empowering IoT Security with LLM-Driven Cyber Threat Prediction. In 
GLOBECOM 2024-2024 IEEE Global Communications Conference
. IEEE, 1239–1244.
Diarra et al. (2024) ↑ Boubacar Diarra, Karine Guillouard, Meryem Ouzzif, Philippe Merle, and Jean-Bernard Stefani. 2024. In-depth analysis of Kubernetes manifest verification tools for robust CNF deployment. In 
2024 27th Conference on Innovation in Clouds, Internet and Networks (ICIN)
. IEEE, 17–24.
Gehani and Tariq (2012) ↑ Ashish Gehani and Dawood Tariq. 2012. SPADE: Support for provenance auditing in distributed environments. In 
ACM/IFIP/USENIX International Conference on Distributed Systems Platforms and Open Distributed Processing
. Springer, 101–120.
Grattafiori et al. (2024) ↑ Aaron Grattafiori, Abhimanyu Dubey, Abhinav Jauhri, Abhinav Pandey, Abhishek Kadian, Ahmad Al-Dahle, Aiesha Letman, Akhil Mathur, Alan Schelten, Alex Vaughan, et al. 2024. The llama 3 herd of models. 
arXiv preprint arXiv:2407.21783
 (2024).
Guo et al. (2024) ↑ Daya Guo, Qihao Zhu, Dejian Yang, Zhenda Xie, Kai Dong, Wentao Zhang, Guanting Chen, Xiao Bi, Y. Wu, Y. K. Li, Fuli Luo, Yingfei Xiong, and Wenfeng Liang. 2024. DeepSeek-Coder: When the Large Language Model Meets Programming – The Rise of Code Intelligence. arXiv:2401.14196 [cs.SE] 
https://arxiv.org/abs/2401.14196
https://arxiv.org/abs/2401.14196
Haque et al. (2022) ↑ Mubin Ul Haque, M Mehdi Kholoosi, and M Ali Babar. 2022. Kgsecconfig: a knowledge graph based approach for secured container orchestrator configuration. In 
2022 IEEE International Conference on Software Analysis, Evolution and Reengineering (SANER)
. IEEE, 420–431.
Hassan et al. (2018) ↑ Wajih Ul Hassan, Lemay Aguse, Nuraini Aguse, Adam Bates, and Thomas Moyer. 2018. Towards scalable cluster auditing through grammatical inference over provenance graphs. In 
Network and Distributed Systems Security Symposium
.
Heyman et al. (2025) ↑ Jonatan Heyman, Carl Byström, Joakim Hamrén, Hugo Heyman, and contributors. 2025. Locust: An open source load testing tool. 
https://locust.io/
https://locust.io/
.
Hirschberg (2022) ↑ Ben Hirschberg. 2022. Kubescape: A Kubernetes Open-Source Platform Providing a Multi-Cloud Kubernetes Single Pane of Glass. 
https://www.armosec.io/blog/kubescape-the-first-tool-for-runningnsa-and-cisa-kubernetes-hardening-tests/
https://www.armosec.io/blog/kubescape-the-first-tool-for-runningnsa-and-cisa-kubernetes-hardening-tests/
.
Huang et al. (2025) ↑ Lei Huang, Weijiang Yu, Weitao Ma, Weihong Zhong, Zhangyin Feng, Haotian Wang, Qianglong Chen, Weihua Peng, Xiaocheng Feng, Bing Qin, et al. 2025. A survey on hallucination in large language models: Principles, taxonomy, challenges, and open questions. 
ACM Transactions on Information Systems
 43, 2 (2025), 1–55.
Kampa (2024) ↑ Sandeep Kampa. 2024. Navigating the Landscape of Kubernetes Security Threats and Challenges. 
Journal of Knowledge Learning and Science Technology ISSN: 2959-6386 (online)
 3, 4 (2024), 274–281.
Khan et al. (2025) ↑ Ahmad Faraz Khan, Azal Ahmad Khan, Anas Mohamed, Haider Ali, Suchithra Moolinti, Sabaat Haroon, Usman Tahir, Mattia Fazzini, Ali R Butt, and Ali Anwar. 2025. LADs: Leveraging LLMs for AI-Driven DevOps. 
arXiv preprint arXiv:2502.20825
 (2025).
Kibriya et al. (2024) ↑ Hareem Kibriya, Wazir Zada Khan, Ayesha Siddiqa, and Muhammad Khurram Khan. 2024. Privacy issues in large language models: a survey. 
Computers and Electrical Engineering
 120 (2024), 109698.
Kim et al. (2025) ↑ Bom Kim, Hyeonjun Park, and Seungsoo Lee. 2025. KUBETEUS: An Intelligent Network Policy Generation Framework for Containers. 
Cybersecurity Convergence Laboratory (CCLAB) at Incheon National University
 (2025).
Kitahara et al. (2020) ↑ Hirokuni Kitahara, Kugamoorthy Gajananan, and Yuji Watanabe. 2020. Highly-scalable container integrity monitoring for large-scale kubernetes cluster. In 
2020 IEEE International Conference on Big Data (Big Data)
. IEEE, 449–454.
Koryugin (2023) ↑ Danila Koryugin. 2023. 
Analysing and alerting on application logs within Kubernetes infrastructure
. B.S. thesis. University of Twente.
Kratzke and Drews (2024) ↑ Nane Kratzke and André Drews. 2024. Don't Train, Just Prompt: Towards a Prompt Engineering Approach for a More Generative Container Orchestration Management.. In 
CLOSER
. 248–256.
Kubernetes (2024) ↑ Kubernetes. 2024. Auditing. 
https://kubernetes.io/docs/tasks/debug/debug-cluster/audit/
https://kubernetes.io/docs/tasks/debug/debug-cluster/audit/
.
Kubernetes (2024a) ↑ Kubernetes. 2024a. Describing a Kubernetes Object. 
https://kubernetes.io/docs/concepts/overview/working-with-objects/#describing-a-kubernetes-object
https://kubernetes.io/docs/concepts/overview/working-with-objects/#describing-a-kubernetes-object
.
Kubernetes (2024b) ↑ Kubernetes. 2024b. Kubernetes - Operator Pattern. 
https://kubernetes.io/docs/concepts/extend-kubernetes/operator/
https://kubernetes.io/docs/concepts/extend-kubernetes/operator/
.
Kubernetes (2024c) ↑ Kubernetes. 2024c. Kubernetes Documentation / Concepts / Overview. 
https://kubernetes.io/docs/concepts/overview/
https://kubernetes.io/docs/concepts/overview/
.
Kubernetes (2024a) ↑ Kubernetes. 2024a. Kubernetes Documentation / Concepts / Security / Service Accounts. 
https://kubernetes.io/docs/concepts/security/service-accounts/
https://kubernetes.io/docs/concepts/security/service-accounts/
.
Kubernetes (2024b) ↑ Kubernetes. 2024b. Kubernetes Documentation / Concepts Configuration / ConfigMaps. 
https://kubernetes.io/docs/concepts/configuration/configmap/
https://kubernetes.io/docs/concepts/configuration/configmap/
.
Kubernetes (2024c) ↑ Kubernetes. 2024c. Network Policies - Kubernetes. 
https://kubernetes.io/docs/concepts/services-networking/network-policies/
https://kubernetes.io/docs/concepts/services-networking/network-policies/
.
Kubernetes (2025a) ↑ Kubernetes. 2025a. Auditing – Audit policy (minimal audit policy file to log all requests at the Metadata level). 
https://kubernetes.io/docs/tasks/debug/debug-cluster/audit/
https://kubernetes.io/docs/tasks/debug/debug-cluster/audit/
.
Kubernetes (2025b) ↑ Kubernetes. 2025b. Kubernetes Deployment. 
https://kubernetes.io/docs/concepts/workloads/controllers/deployment/
https://kubernetes.io/docs/concepts/workloads/controllers/deployment/
.
Kubernetes (2025c) ↑ Kubernetes. 2025c. Kubernetes Documentation / Concepts / Storage / Persistent Volumes. 
https://kubernetes.io/docs/concepts/storage/persistent-volumes/
https://kubernetes.io/docs/concepts/storage/persistent-volumes/
.
Kubernetes (2025d) ↑ Kubernetes. 2025d. Kubernetes Documentation / Reference / API Access Control / Using RBAC Authorization - Kubernetes Role. 
https://kubernetes.io/docs/reference/access-authn-authz/rbac/
https://kubernetes.io/docs/reference/access-authn-authz/rbac/
.
Lewis et al. (2020) ↑ Patrick Lewis, Ethan Perez, Aleksandra Piktus, Fabio Petroni, Vladimir Karpukhin, Naman Goyal, Heinrich Küttler, Mike Lewis, Wen-tau Yih, Tim Rocktäschel, et al. 2020. Retrieval-augmented generation for knowledge-intensive nlp tasks. 
Advances in neural information processing systems
 33 (2020), 9459–9474.
Li et al. (2024b) ↑ Haoran Li, Jun Sun, and Xiong Ke. 2024b. AI-driven optimization system for large-scale Kubernetes clusters: Enhancing cloud infrastructure availability, security, and disaster recovery. 
Journal of Artificial Intelligence General science (JAIGS) ISSN: 3006-4023
 2, 1 (2024), 281–306.
Li et al. (2021) ↑ Xing Li, Yan Chen, Zhiqiang Lin, Xiao Wang, and Jim Hao Chen. 2021. Automatic policy generation for { { Inter-Service } } access control of microservices. In 
30th USENIX Security Symposium (USENIX Security 21)
. 3971–3988.
Li et al. (2024a) ↑ Z Li, S Dutta, and M Naik. 2024a. LLM-Assisted Static Analysis for Detecting Security Vulnerabilities. arXiv 2024. 
arXiv preprint arXiv:2405.17238
 (2024).
Liggitt (2023) ↑ Jordan Liggitt. 2023. audit2rbac: Autogenerate RBAC policies based on Kubernetes audit logs. 
https://github.com/liggitt/audit2rbac
https://github.com/liggitt/audit2rbac
.
Madaan et al. (2023) ↑ Aman Madaan, Niket Tandon, Prakhar Gupta, Skyler Hallinan, Luyu Gao, Sarah Wiegreffe, Uri Alon, Nouha Dziri, Shrimai Prabhumoye, Yiming Yang, et al. 2023. Self-refine: Iterative refinement with self-feedback. 
Advances in Neural Information Processing Systems
 36 (2023), 46534–46594.
Mahajan and Mane (2022) ↑ Vijay B Mahajan and Sunil B Mane. 2022. Detection, analysis and countermeasures for container based misconfiguration using docker and kubernetes. In 
2022 International Conference on Computing, Communication, Security and Intelligent Systems (IC3SIS)
. IEEE, 1–6.
Malul et al. (2024) ↑ Ehud Malul, Yair Meidan, Dudu Mimran, Yuval Elovici, and Asaf Shabtai. 2024. GenKubeSec: LLM-Based Kubernetes Misconfiguration Detection, Localization, Reasoning, and Remediation. 
arXiv preprint arXiv:2405.19954
 (2024).
Meta AI (2024) ↑ Meta AI. 2024. Llama-3.1-70B-Instruct. 
https://huggingface.co/meta-llama/Llama-3.1-70B-Instruct
https://huggingface.co/meta-llama/Llama-3.1-70B-Instruct
.
Michael Kerrisk (2025) ↑ Michael Kerrisk. 2025. 
namespaces(7) — Linux manual page
. man7.org. 
https://man7.org/linux/man-pages/man7/namespaces.7.html
https://man7.org/linux/man-pages/man7/namespaces.7.html
mistralai (2024) ↑ mistralai. 2024. ministral. 
https://mistral.ai/news/ministraux
https://mistral.ai/news/ministraux
MongoDB (2025) ↑ MongoDB. 2025. MongoDB: The World's Leading Modern Database. 
https://www.mongodb.com/
https://www.mongodb.com/
.
Moreau et al. (2011) ↑ Luc Moreau, Ben Clifford, Juliana Freire, Joe Futrelle, Yolanda Gil, Paul Groth, Natalia Kwasnikowska, Simon Miles, Paolo Missier, Jim Myers, et al. 2011. The open provenance model core specification (v1. 1). 
Future generation computer systems
 27, 6 (2011), 743–756.
Morfonios (2023) ↑ Ioannis Morfonios. 2023. 
Kubernetes cybersecurity
. Master's thesis. Π \Pi α \alpha ν \nu ε \varepsilon π \pi ι \iota σ \sigma τ \tau η ´ \acute{\eta} μ \mu ι \iota o Π \Pi ε \varepsilon ι \iota ρ \rho α \alpha ι \iota ω ´ \acute{\omega} ς \varsigma .
MUSTYALA (2022) ↑ ANIRUDH MUSTYALA. 2022. Comprehensive Monitoring and Logging in Kubernetes: Best Practices and Tools. 
EPH-International Journal of Science And Engineering
 8, 4 (2022), 05–14.
Mycek and Łukaczyk (2024) ↑ Andrzej Mycek and Maryna Łukaczyk. 2024. SECURITY OF CONTAINERIZATION PLATFORMS: THREAT MODELLING, VULNERABILITY ANALYSIS, AND RISK MITIGATION. 
ECMS - The European Council for Modelling and Simulation
 (2024).
NP-Guard ([n. d.]) ↑ NP-Guard. [n. d.]. NP-Guard: Shift-left Automation for Generating and Maintaining Kubernetes Network Policies. 
https://np-guard.github.io/
https://np-guard.github.io/
.
NVIDIA (2024) ↑ NVIDIA. 2024. rtx6000. 
https://www.nvidia.com/en-us/design-visualization/rtx-6000/
https://www.nvidia.com/en-us/design-visualization/rtx-6000/
OpenAI (2024) ↑ OpenAI. 2024. GPT-4o System Card. 
https://openai.com/index/gpt-4o-system-card/
https://openai.com/index/gpt-4o-system-card/
.
Pichai and Hassabis (2023) ↑ Sundar Pichai and Demis Hassabis. 2023. Introducing Gemini: our largest and most capable AI model. 
Google. Retrieved December
 8 (2023), 2023.
Platform (2025a) ↑ Google Cloud Platform. 2025a. Load Generator for microservices-demo (Online Boutique). 
https://github.com/GoogleCloudPlatform/microservices-demo/tree/main/src/loadgenerator
https://github.com/GoogleCloudPlatform/microservices-demo/tree/main/src/loadgenerator
. Part of the microservices-demo repository.
Platform (2025b) ↑ Google Cloud Platform. 2025b. Online Boutique: Microservices Demo Application. 
https://github.com/GoogleCloudPlatform/microservices-demo
https://github.com/GoogleCloudPlatform/microservices-demo
Prechtl et al. (2020) ↑ Mike Prechtl, Robin Lichtenthäler, and Guido Wirtz. 2020. Investigating possibilites for protecting and hardening installable faas platforms. In 
Symposium and Summer School on Service-oriented Computing
. Springer, 107–126.
Project (2025) ↑ Cilium Project. 2025. Special Identities — Cilium Documentation. 
https://docs.cilium.io/en/latest/gettingstarted/terminology/#special-identities
https://docs.cilium.io/en/latest/gettingstarted/terminology/#special-identities
.
RabbitMQ (2025) ↑ RabbitMQ. 2025. RabbitMQ: One broker to queue them all. 
https://www.rabbitmq.com/
https://www.rabbitmq.com/
.
Rahman et al. (2023) ↑ Akond Rahman, Shazibul Islam Shamim, Dibyendu Brinto Bose, and Rahul Pandita. 2023. Security misconfigurations in open source kubernetes manifests: An empirical study. 
ACM Transactions on Software Engineering and Methodology
 32, 4 (2023), 1–36.
Rangta (2022) ↑ Monika Rangta. 2022. 
Tools for Security Auditing and Hardening in Microservices Architecture
. Master's thesis. Aalto University.
Ruan (2021) ↑ Zhengping Ruan. 2021. Network security prediction method based on kubernetes. In 
Journal of Physics: Conference Series
, Vol. 2010. IOP Publishing, 012109.
Russell and Dev (2024) ↑ Eoghan Russell and Kapal Dev. 2024. Centralized Defense: Logging and Mitigation of Kubernetes Misconfigurations with Open Source Tools. 
arXiv preprint arXiv:2408.03714
 (2024).
Samir and Dagenborg (2023) ↑ Areeg Samir and Håvard Dagenborg. 2023. Adaptive Controller to Identify Misconfigurations and Optimize the Performance of Kubernetes Clusters and IoT Edge Devices. In 
European Conference on Service-Oriented and Cloud Computing
. Springer, 170–187.
Samples (2025a) ↑ Azure Samples. 2025a. virtual-customer (AKS Store Demo). 
https://github.com/Azure-Samples/aks-store-demo/tree/main/src/virtual-customer
https://github.com/Azure-Samples/aks-store-demo/tree/main/src/virtual-customer
. Part of the AKS Store Demo microservices sample for Azure Kubernetes Service.
Samples (2025b) ↑ Azure Samples. 2025b. virtual-worker (AKS Store Demo). 
https://github.com/Azure-Samples/aks-store-demo/tree/main/src/virtual-worker
https://github.com/Azure-Samples/aks-store-demo/tree/main/src/virtual-worker
. Part of the AKS Store Demo microservices sample for Azure Kubernetes Service.
Sarda et al. (2024) ↑ Komal Sarda, Zakeya Namrud, Marin Litoiu, Larisa Shwartz, and Ian Watts. 2024. Leveraging Large Language Models for the Auto-remediation of Microservice Applications: An Experimental Study. In 
Companion Proceedings of the 32nd ACM International Conference on the Foundations of Software Engineering
. 358–369.
Sarika et al. (2023) ↑ Pawan Kumar Sarika, Deepika Badampudi, Sai Prashanth Josyula, and Muhammad Usman. 2023. Automating Microservices Test Failure Analysis using Kubernetes Cluster Logs. In 
Proceedings of the 27th International Conference on Evaluation and Assessment in Software Engineering
. 192–195.
SATLE 'Are You AI Ready?' Project Team (2024) ↑ University College Dublin SATLE 'Are You AI Ready?' Project Team. 2024. 
Are You AI Ready? Investigating AI Tools in Higher Education / The Structure of a Good Prompt
. University College Dublin. 
https://ucddublin.pressbooks.pub/StudentResourcev1_od/chapter/the-structure-of-a-good-prompt/
https://ucddublin.pressbooks.pub/StudentResourcev1_od/chapter/the-structure-of-a-good-prompt/
Schreiber and Schreiber (2025) ↑ Amir Schreiber and Ilan Schreiber. 2025. AI for cyber-security risk: harnessing AI for automatic generation of company-specific cybersecurity risk profiles. 
Information & Computer Security
 (2025).
Shamim et al. (2020) ↑ Md Shazibul Islam Shamim, Farzana Ahamed Bhuiyan, and Akond Rahman. 2020. Xi commandments of kubernetes security: A systematization of knowledge related to kubernetes security practices. 
2020 IEEE Secure Development (SecDev)
 (2020), 58–64.
Shamim (2021) ↑ Shazibul Islam Shamim. 2021. Mitigating security attacks in kubernetes manifests for security best practices violation. In 
Proceedings of the 29th ACM Joint Meeting on European Software Engineering Conference and Symposium on the Foundations of Software Engineering
. 1689–1690.
Sheng et al. (2024) ↑ Ze Sheng, Fenghua Wu, Xiangwu Zuo, Chao Li, Yuxin Qiao, and Hang Lei. 2024. Research on the LLM-Driven Vulnerability Detection System Using LProtector. In 
2024 IEEE 4th International Conference on Data Science and Computer Application (ICDSCA)
. IEEE, 192–196.
StackRox (2025) ↑ StackRox. 2025. KubeLinter: static analysis tool that checks Kubernetes YAML files and Helm charts to ensure the applications represented in them adhere to best practices. 
https://github.com/stackrox/kube-linter
https://github.com/stackrox/kube-linter
.
Syed and Gadesha (2024) ↑ Meredith Syed and Vrunda Gadesha. 2024. 
What is Zero-Shot Prompting?
 IBM. 
https://www.ibm.com/think/topics/zero-shot-prompting
https://www.ibm.com/think/topics/zero-shot-prompting
Team (2025) ↑ Rust Team. 2025. Rust — A Language Empowering Everyone to Build Reliable and Efficient Software. 
https://www.rust-lang.org/
https://www.rust-lang.org/
.
Tenable (2022) ↑ Tenable. 2022. Terrascan: Policy as Code for Secure Cloud Infrastructure. 
https://runterrascan.io/
https://runterrascan.io/
.
Ueno and Uchiumi (2024) ↑ Masaru Ueno and Tetsuya Uchiumi. 2024. Migrating Existing Container Workload to Kubernetes–LLM Based Approach and Evaluation. 
arXiv preprint arXiv:2408.11428
 (2024).
Wang et al. (2025) ↑ Kun Wang, Guibin Zhang, Zhenhong Zhou, Jiahao Wu, Miao Yu, Shiqian Zhao, Chenlong Yin, Jinhu Fu, Yibo Yan, Hanjun Luo, Liang Lin, Zhihao Xu, Haolang Lu, Xinye Cao, Xinyun Zhou, Weifei Jin, Fanci Meng, Junyuan Mao, Hao Wu, Minghe Wang, Fan Zhang, Junfeng Fang, Chengwei Liu, Yifan Zhang, Qiankun Li, Chongye Guo, Yalan Qin, Yi Ding, Donghai Hong, Jiaming Ji, Xinfeng Li, Yifan Jiang, Dongxia Wang, Yihao Huang, Yufei Guo, Jen tse Huang, Yanwei Yue, Wenke Huang, Guancheng Wan, Tianlin Li, Lei Bai, Jie Zhang, Qing Guo, Jingyi Wang, Tianlong Chen, Joey Tianyi Zhou, Xiaojun Jia, Weisong Sun, Cong Wu, Jing Chen, Xuming Hu, Yiming Li, Xiao Wang, Ningyu Zhang, Luu Anh Tuan, Guowen Xu, Tianwei Zhang, Xingjun Ma, Xiang Wang, Bo An, Jun Sun, Mohit Bansal, Shirui Pan, Yuval Elovici, Bhavya Kailkhura, Bo Li, Yaodong Yang, Hongwei Li, Wenyuan Xu, Yizhou Sun, Wei Wang, Qing Li, Ke Tang, Yu-Gang Jiang, Felix Juefei-Xu, Hui Xiong, Xiaofeng Wang, Shuicheng Yan, Dacheng Tao, Philip S. Yu, Qingsong Wen, and Yang Liu. 2025. A Comprehensive Survey in LLM(-Agent) Full Stack Safety: Data, Training and Deployment. arXiv:2504.15585 [cs.CR] 
https://arxiv.org/abs/2504.15585
https://arxiv.org/abs/2504.15585
Wei et al. (2022) ↑ Jason Wei, Xuezhi Wang, Dale Schuurmans, Maarten Bosma, Fei Xia, Ed Chi, Quoc V Le, Denny Zhou, et al. 2022. Chain-of-thought prompting elicits reasoning in large language models. 
Advances in neural information processing systems
 35 (2022), 24824–24837.
Wolf et al. (2019) ↑ Thomas Wolf, Lysandre Debut, Victor Sanh, Julien Chaumond, Clement Delangue, Anthony Moi, Pierric Cistac, Tim Rault, Rémi Louf, Morgan Funtowicz, et al. 2019. Huggingface's transformers: State-of-the-art natural language processing. 
arXiv preprint arXiv:1910.03771
 (2019).
Wu et al. (2022) ↑ Tongshuang Wu, Michael Terry, and Carrie Jun Cai. 2022. Ai chains: Transparent and controllable human-ai interaction by chaining large language model prompts. In 
Proceedings of the 2022 CHI conference on human factors in computing systems
. 1–22.
Xiang et al. (2019) ↑ Chengcheng Xiang, Yudong Wu, Bingyu Shen, Mingyao Shen, Haochen Huang, Tianyin Xu, Yuanyuan Zhou, Cindy Moore, Xinxin Jin, and Tianwei Sheng. 2019. Towards continuous access control validation and forensics. In 
Proceedings of the 2019 ACM SIGSAC conference on computer and communications security
. 113–129.
Yang et al. (2024b) ↑ An Yang, Baosong Yang, Binyuan Hui, Bo Zheng, Bowen Yu, Chang Zhou, Chengpeng Li, Chengyuan Li, Dayiheng Liu, Fei Huang, Guanting Dong, Haoran Wei, Huan Lin, Jialong Tang, Jialin Wang, Jian Yang, Jianhong Tu, Jianwei Zhang, Jianxin Ma, Jin Xu, Jingren Zhou, Jinze Bai, Jinzheng He, Junyang Lin, Kai Dang, Keming Lu, Keqin Chen, Kexin Yang, Mei Li, Mingfeng Xue, Na Ni, Pei Zhang, Peng Wang, Ru Peng, Rui Men, Ruize Gao, Runji Lin, Shijie Wang, Shuai Bai, Sinan Tan, Tianhang Zhu, Tianhao Li, Tianyu Liu, Wenbin Ge, Xiaodong Deng, Xiaohuan Zhou, Xingzhang Ren, Xinyu Zhang, Xipin Wei, Xuancheng Ren, Yang Fan, Yang Yao, Yichang Zhang, Yu Wan, Yunfei Chu, Yuqiong Liu, Zeyu Cui, Zhenru Zhang, and Zhihao Fan. 2024b. Qwen2 Technical Report. 
arXiv preprint arXiv:2407.10671
 (2024).
Yang et al. (2024a) ↑ Jingfeng Yang, Hongye Jin, Ruixiang Tang, Xiaotian Han, Qizhang Feng, Haoming Jiang, Shaochen Zhong, Bing Yin, and Xia Hu. 2024a. Harnessing the power of llms in practice: A survey on chatgpt and beyond. 
ACM Transactions on Knowledge Discovery from Data
 18, 6 (2024), 1–32.
Ye et al. (2025) ↑ Ziyang Ye, Triet Huynh Minh Le, and M Ali Babar. 2025. LLMSecConfig: An LLM-Based Approach for Fixing Software Container Misconfigurations. 
arXiv preprint arXiv:2502.02009
 (2025).
Zhou et al. (2024) ↑ Ce Zhou, Qian Li, Chen Li, Jun Yu, Yixin Liu, Guangjing Wang, Kai Zhang, Cheng Ji, Qiben Yan, Lifang He, et al. 2024. A comprehensive survey on pretrained foundation models: A history from bert to chatgpt. 
International Journal of Machine Learning and Cybernetics
 (2024), 1–65.
Zhu and Gehrmann (2022) ↑ Hui Zhu and Christian Gehrmann. 2022. Kub-Sec, an automatic Kubernetes cluster AppArmor profile generation engine. In 
2022 14th International Conference on COMmunication Systems & NETworkS (COMSNETS)
. IEEE, 129–137.
Appendix A Example Deployment Manifest
Report issue for preceding element
Listing 
A
https://arxiv.org/html/2509.04191v1#A1
 provides an example of a simple K8s Deployment manifest, named nginx-deployment, which runs two replicas of the official nginx:1.14.2 container image. Each container exposes port 80. This example demonstrates the typical structure of a Deployment object, including metadata, selectors, and Pod specifications.
Report issue for preceding element
⬇
data:text/plain;base64,YXBpVmVyc2lvbjogYXBwcy92MQpraW5kOiBEZXBsb3ltZW50Cm1ldGFkYXRhOgogIG5hbWU6IG5naW54LWRlcGxveW1lbnQKc3BlYzoKICByZXBsaWNhczogMgogIHNlbGVjdG9yOgogICAgbWF0Y2hMYWJlbHM6CiAgICAgIGFwcDogbmdpbngKICB0ZW1wbGF0ZToKICAgIG1ldGFkYXRhOgogICAgICBsYWJlbHM6CiAgICAgICAgYXBwOiBuZ2lueAogICAgc3BlYzoKICAgICAgY29udGFpbmVyczoKICAgICAgLSBuYW1lOiBuZ2lueAogICAgICAgIGltYWdlOiBuZ2lueDoxLjE0LjIKICAgICAgICBwb3J0czoKICAgICAgICAtIGNvbnRhaW5lclBvcnQ6IDgw
 apiVersion: apps/ v1 kind: Deployment metadata: name: nginx- deployment spec: replicas: 2 selector: matchLabels: app: nginx template: metadata: labels: app: nginx spec: containers: - name: nginx image: nginx:1.14.2 ports: - containerPort: 80 Report issue for preceding element
Appendix B K-V Log Aggregation Algorithm
Report issue for preceding element
Algorithm 
1
https://arxiv.org/html/2509.04191v1#algorithm1
 outlines the process of log aggregation used in KubeGuard to reduce the input size for downstream LLM-based analysis while preserving semantic relevance. This recursive algorithm takes a nested JSON log object as input and aggregates values for each key into sets, effectively flattening the structure and reducing redundancy. The result is a mapping from each key to a set of unique observed values across the input structure. The algorithm defines a recursive function Aggregate, which traverses the JSON object: If a key maps to a primitive value (e.g., string, number, or boolean), the value is added to the set associated with that key. If the value is a nested dictionary or list, the function recurses into the structure. Lists are treated as unordered sequences of items to recursively aggregate. The final output is a HashMap where each key from the original (possibly deeply nested) log is mapped into a set of unique values. This representation reduces verbosity and repetition, making it suitable for token-efficient LLM input. This aggregation process is applied to logs at the preprocessing stage (Sec. 
3.1
https://arxiv.org/html/2509.04191v1#S3.SS1
) to distill log data while retaining its semantic footprint. It supports coherent downstream interpretation by LLMs under token and context constraints.
Report issue for preceding element
Input: A JSON object J J
Output: A dictionary A A mapping each key to a set of values
1 A ← A\leftarrow empty map of sets;
2 Aggregate( 
J J , A A
 );
3 return A A ;
4 Function 
Aggregate( x x , A A )
:
5 if 
x x is a dictionary
 then
6 foreach 
key, value in x x
 do
7 if 
v  a  l  u  e value is primitive
 then
8 A  [ k  e  y ] ← A  [ k  e  y ] ∪ { v  a  l  u  e } A[key]\leftarrow A[key]\cup{value} ;
9
10 else
11 Aggregate( 
v  a  l  u  e value , A A
 );
12
13
14
15 if 
x x is a list
 then
16 foreach 
i  t  e  m item in x x
 do
17 Aggregate( 
i  t  e  m item , A A
 );
18
19
20
Algorithm 1 KeyValueAggregationFromNestedJSON Report issue for preceding element
Appendix C Aggregated Logs Illustrations and Examples
Report issue for preceding element
ANLs
Report issue for preceding element
Fig. 
9
https://arxiv.org/html/2509.04191v1#A3.F9
 shows an illustration and an example of Aggregated Network Logs (ANLs, Sec. 
3.1.3
https://arxiv.org/html/2509.04191v1#S3.SS1.SSS3
). The illustration outlines the network aggregation process, where Pod-level communication flows are captured using Hubble (Cilium, 
2025
https://arxiv.org/html/2509.04191v1#bib.bib20
, 
2024
https://arxiv.org/html/2509.04191v1#bib.bib19
) and grouped by communicating service pairs. The example output demonstrates ANLs' structure used in KubeGuard, in which network events (e.g., ingress and egress connections, ports, and protocols) are stored as deduplicated key-value mappings. This representation enables precise mapping between observed network behavior and declared NetworkPolicy rules, forming the basis for policy hardening while retaining only essential service-relevant communication data.
Report issue for preceding element
 
Figure 9. Illustration and example of Aggregated Network Logs (ANLs). Report issue for preceding element
APLs
Report issue for preceding element
Fig. 
10
https://arxiv.org/html/2509.04191v1#A3.F10
 presents an illustration and an example of Aggregated Provenance Logs (APLs, Sec. 
3.1.4
https://arxiv.org/html/2509.04191v1#S3.SS1.SSS4
). The illustration depicts the provenance aggregation process, where low-level system events, such as file operations, process creations, and inter-process communications, are collected by SPADE (Gehani and Tariq, 
2012
https://arxiv.org/html/2509.04191v1#bib.bib26
; ([n. d.]), 
ashish gehani
https://arxiv.org/html/2509.04191v1#bib.bib10
) and mapped to application-level microservices. The example output shows APLs' representation used in KubeGuard, in which provenance graph vertices and edges relevant to a specific service are condensed into key–value records. This structured format preserves essential causal relationships while reducing log volume, enabling efficient manifest analysis and hardening (e.g., for Deployments).
Report issue for preceding element
 
Figure 10. Illustration and example of Aggregated Provenance Logs (APLs). Report issue for preceding element
Appendix D Prompting Techniques Examples
Report issue for preceding element
Zero-Shot
Report issue for preceding element
Fig. 
11
https://arxiv.org/html/2509.04191v1#A4.F11
 presents an example of a zero-shot prompt used for the NetworkPolicy Creation task. In this approach, the language model receives a direct instruction, without intermediate examples or reasoning-structured context, to generate K8s NetworkPolicy manifests based solely on the input Deployment manifest and aggregated network logs (ANLs). The prompt includes the relevant K8s Pod specification and a summary of the Pod's observed communication patterns. The LLM is expected to analyze this information and generate precise NetworkPolicy rules that follow the principle of least privilege, ensuring secure inter-Pod communication while maintaining application functionality. Zero-shot prompting serves as a baseline for evaluating LLMs' capacity to understand task intent and generate correct outputs without auxiliary guidance or step-by-step reasoning. While effective in simpler scenarios, it may lack the robustness and specificity provided by more advanced prompting techniques, such as chain-of-thought or prompt-chaining strategies.
Report issue for preceding element
 
Figure 11. Zero-shot prompt example of the NetworkPolicy Creation task. Report issue for preceding element
Chain-of-Thought
Report issue for preceding element
Fig. 
12
https://arxiv.org/html/2509.04191v1#A4.F12
 illustrates a chain-of-thought (CoT) prompt used for the NetworkPolicy Creation task. Unlike zero-shot prompting, the CoT prompt explicitly guides the LLM through a step-by-step reasoning process to support the generation of precise, security-focused Kubernetes NetworkPolicy manifests. The prompt outlines a structured procedure: first, analyzing the Pod Deployment manifest; second, reviewing aggregated network logs (ANLs) to identify legitimate communication patterns; third, designing least-privilege NetworkPolicy rules; and finally, explaining and justifying each rule. This decomposition helps the model internalize the logical flow required to align security configurations with real-world application behavior. The CoT strategy improves interpretability and reduces the likelihood of errors or omissions by breaking the task into smaller, manageable reasoning steps. This makes it particularly useful for complex scenarios where understanding context and explaining policy decisions is essential to ensuring correctness and trust in the generated outputs.
Report issue for preceding element
 
Figure 12. Chain-of-thought prompt example of the NetworkPolicy Creation task. Report issue for preceding element
Appendix E Open-Source Local SLM Processing Time Results
Report issue for preceding element
We monitored the processing time of each prompt chain powered by the best-performing local SLM, Llama-3.1-8B (Sec. 
5.4
https://arxiv.org/html/2509.04191v1#S5.SS4
). The results show that each chain completes within practical bounds: Role Creation finishes in a median of 4.69 minutes (min), NetworkPolicy Creation in a median of 8.46 min, Role Refinement in a median of 10.78 min, NetworkPolicy Refinement in a median of 12.91 min, and Deployment Refinement in a median of 11.31 min. In addition, even in the case of occasional long runs, all prompt chains remained under a 5-hour ceiling, and most have completed in under 15 minutes, affirming their suitability for adaptive security-hardening workflows.
Report issue for preceding element
Table 
9
https://arxiv.org/html/2509.04191v1#A5.T9
 lists the complete aggregated processing time statistics (all values in minutes) for each prompt chain. We report the mean, minimum, maximum, median (P50), 75th, 90th, 95th, and 99th percentiles, as well as the interquartile range (IQR). We define these statistics as follows:
Report issue for preceding element
Mean::
Arithmetic average of all observed processing times; conveys the expected overall latency.
Report issue for preceding element
Min::
Shortest observed processing time; indicates the best‐case performance.
Report issue for preceding element
Max::
Longest observed processing time; indicates the worst‐case or tail latency.
Report issue for preceding element
P50 (Median)::
50th percentile; the processing time at which half of the runs complete faster and half slower, robust to outliers.
Report issue for preceding element
P75::
75th percentile; 75% of runs complete within this time, highlighting the upper‐middle range.
Report issue for preceding element
P90::
90th percentile; useful to gauge how often runs approach the longer tail.
Report issue for preceding element
P95::
95th percentile; captures near‐worst‐case latency without being dominated by extreme outliers.
Report issue for preceding element
P99::
99th percentile; illustrates the very-long‐tail behavior critical for worst‐case planning.
Report issue for preceding element
IQR (Interquartile Range)::
Difference between P75 and P25; measures variability around the median and the spread of the middle 50% of runs.
Report issue for preceding element
Table 9. Aggregated Llama-3.1-8B processing times statistics for each prompt‐chain, in minutes.
Prompt Chain
Mean
Min
Max
P50
P75
P90
P95
P99
IQR
Role Creation
4.69
4.68
4.70
4.69
4.69
4.70
4.70
4.70
0.00
NetworkPolicy Creation
9.91
5.44
20.20
8.46
9.14
19.89
20.20
20.20
3.14
Role Refinement
27.88
7.32
193.04
10.78
18.15
89.49
124.84
160.48
13.46
NetworkPolicy Refinement
40.07
6.70
290.22
12.91
41.99
175.41
204.15
290.22
32.72
Deployment Refinement
12.92
8.32
20.84
11.31
15.70
20.82
20.82
20.83
5.61
Report issue for preceding element
Appendix F Tables of Empirical Comparison to Existing Methods
Report issue for preceding element
Comparison to audit2rbac
Report issue for preceding element
Table 
10
https://arxiv.org/html/2509.04191v1#A6.T10
 presents a comparison of Role Creation performance between audit2rbac (Liggitt, 
2023
https://arxiv.org/html/2509.04191v1#bib.bib56
) and KubeGuard. KubeGuard's pod-centric approach achieved perfect scores, while user-centric audit2rbac overgenerated rules, and despite full recall, yielded low precision due to excessive FPs.
Report issue for preceding element
Table 10. Comparison of Role Creation performance between audit2rbac (Liggitt, 
2023
https://arxiv.org/html/2509.04191v1#bib.bib56
) and KubeGuard (using GPT-4o).
Method
Precision
Recall
F1-Score
audit2rbac
0.208 ± 0.042 0.208\pm 0.042
1.00 ± 0.0 1.00\pm 0.0
0.343 ± 0.057 0.343\pm 0.057
KubeGuard
1.00 ± 0.0 1.00\pm 0.0
1.00 ± 0.0 1.00\pm 0.0
1.00 ± 0.0 1.00\pm 0.0
Report issue for preceding element
Comparison to KUBETEUS
Report issue for preceding element
We evaluated KUBETEUS (Kim et al., 
2025
https://arxiv.org/html/2509.04191v1#bib.bib37
) and KubeGuard on NetworkPolicy Creation using the same SLM, Deepseek-Coder-1.3B (Guo et al., 
2024
https://arxiv.org/html/2509.04191v1#bib.bib28
) , to ensure a fair comparison under constrained compute environments. As shown in Table 
11
https://arxiv.org/html/2509.04191v1#A6.T11
, despite modest absolute performance due to the SLM's limited capacity, KubeGuard consistently generated more secure NetworkPolicies, with higher scores across all metrics.
Report issue for preceding element
Table 11. Comparison of NetworkPolicy Creation performance between KUBETEUS (Kim et al., 
2025
https://arxiv.org/html/2509.04191v1#bib.bib37
) and KubeGuard, both using the Deepseek‑Coder‑1.3B SLM.
Method
Precision
Recall
F1-Score
KUBETEUS
0.360 ± 0.339 0.360\pm 0.339
0.238 ± 0.248 0.238\pm 0.248
0.275 ± 0.270 0.275\pm 0.270
KubeGuard
0.444 ± 0.355 0.444\pm 0.355
0.265 ± 0.234 0.265\pm 0.234
0.332 ± 0.250 0.332\pm 0.250
Report issue for preceding element
Appendix G Attack Surface Reduction Prompt Chains Illustrations
Report issue for preceding element
This section includes illustrations of two attack surface reduction prompt chains (Sec. 
3.2
https://arxiv.org/html/2509.04191v1#S3.SS2
): NetworkPolicy Creation and Deployment Refinement.
Report issue for preceding element
NetworkPolicy Creation Prompt Chain
Report issue for preceding element
Fig. 
13
https://arxiv.org/html/2509.04191v1#A7.F13
 presents the complete prompt chain used for creating K8s NetworkPolicies based on Deployment manifests and aggregated network logs (ANLs). The process begins by extracting relevant network configurations from Deployment manifests, followed by analyzing ANLs to identify communication patterns, detect anomalies, and flag unauthorized access attempts. The prompt chain then guides the LLM through the generation of fine-grained ingress and egress rules that enforce secure, least-privilege inter-Pod communication. Each step builds on the previous one to ensure coherent and progressive refinement, ultimately producing NetworkPolicy manifests that align with observed runtime behavior and mitigate potential vulnerabilities.
Report issue for preceding element
 
Figure 13. NetworkPolicy Creation prompt chain. Report issue for preceding element
Deployment Refinement Prompt Chain
Report issue for preceding element
Fig. 
14
https://arxiv.org/html/2509.04191v1#A7.F14
 presents a high-level overview of the Deployment Refinement prompt chain, which guides the LLM through a structured, multi-step analysis to harden Kubernetes Deployment manifests. The process begins with the extraction of security-relevant information from aggregated audit logs (Step 1) and aggregated provenance logs (Step 2), both aimed at identifying potential vulnerabilities and deviations in run-time behavior. The Deployment manifest is then analyzed (Step 3) with a focus on security-critical sections such as permissions and role specifications. Subsequent steps involve matching the manifest specifications against the audit log analysis (Step 4) and provenance log analysis (Step 5) to establish precise correlations between declared configurations and observed behaviors. This matching step ensures that recommendations (Step 6) are grounded in concrete run-time evidence, targeting the removal of unnecessary resources, over-privileged permissions, and redundant configurations. The final stage (Step 7) revises the manifest by implementing the validated recommendations, producing a hardened, security-optimized version aligned with least-privilege and minimal-attack-surface principles.
Report issue for preceding element
 
Figure 14. High-level illustration of the Deployment Refinement prompt chain. Report issue for preceding element
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