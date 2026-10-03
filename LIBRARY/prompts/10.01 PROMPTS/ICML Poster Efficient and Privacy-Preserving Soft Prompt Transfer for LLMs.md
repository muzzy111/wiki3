# ICML Poster Efficient and Privacy-Preserving Soft Prompt Transfer for LLMs

Source URL: https://icml.cc/virtual/2025/poster/44996

ICML Poster Efficient and Privacy-Preserving Soft Prompt Transfer for LLMs
Skip to yearly menu bar
https://icml.cc/virtual/2025/poster/44996#child-menu
 
Skip to main content
https://icml.cc/virtual/2025/poster/44996#main
Main Navigation
ICML
https://icml.cc/virtual/2025/poster/44996
Help/FAQ
https://icml.cc/FAQ
Contact ICML
https://icml.cc/Help/Contact
Create Profile
https://icml.cc/Profile/create
Code of Conduct
https://icml.cc/yearly-document/CodeOfConduct
Privacy Policy
https://icml.cc/public/PrivacyPolicy
Press
https://icml.cc/Conferences/2026/Press
Journal To Conference Track
https://icml.cc/public/JournalToConference
Careers
https://icml.cc/careers
Downloads
https://icml.cc/Downloads
Inclusion
https://icml.cc/public/Inclusion
Future Meetings
https://icml.cc/Conferences/FutureMeetings
My Stuff
https://icml.cc/MyStuff
Login
https://icml.cc/accounts/login?nextp=/virtual/2025/day/7/17
Select Year: (2025)
https://icml.cc/virtual/2025/poster/44996
2026
https://icml.cc/Conferences/2026
2025
https://icml.cc/Conferences/2025
2024
https://icml.cc/Conferences/2024
2023
https://icml.cc/Conferences/2023
2022
https://icml.cc/Conferences/2022
2021
https://icml.cc/Conferences/2021/index.html
2020
https://icml.cc/Conferences/2020/
2019
https://icml.cc/Conferences/2019/
2018
https://icml.cc/Conferences/2018
2017
https://icml.cc/Conferences/2017
2016
https://icml.cc/Conferences/2016
2015
https://icml.cc/Conferences/2015
2014
https://icml.cc/Conferences/2014
2013
https://icml.cc/Conferences/2013
2012
https://icml.cc/Conferences/2012
2011
https://icml.cc/Conferences/2011
2010
https://icml.cc/Conferences/2010
2009
https://icml.cc/Conferences/2009
2008
https://icml.cc/Conferences/2008
2007
https://icml.cc/Conferences/2008
2006
https://icml.cc/Conferences/2007
2005
https://icml.cc/Conferences/2005
2004
https://icml.cc/Conferences/2005
2002
https://icml.cc/Conferences/2002
1996
https://icml.cc/Conferences/1996
IMLS Archives
http://www.machinelearning.org/archive.html
Getting Started
https://icml.cc/virtual/2025/index.html
Schedule
https://icml.cc/virtual/2025/calendar
Tutorials
https://icml.cc/virtual/2025/events/tutorial
Main Conference
https://icml.cc/virtual/2025/poster/44996
Invited Talks
https://icml.cc/virtual/2025/eventlistwithbios/invited%20talk
Orals
https://icml.cc/virtual/2025/events/oral
Awards
https://icml.cc/virtual/2025/awards_detail
Test of Time Award
https://icml.cc/virtual/2025/test-of-time-award
Papers
https://icml.cc/virtual/2025/papers.html
Spotlight Posters
https://icml.cc/virtual/2025/events/2025SpotlightPosters
Workshops
https://icml.cc/virtual/2025/events/workshop
Community
https://icml.cc/virtual/2025/poster/44996
Socials
https://icml.cc/virtual/2025/community?show=socials
Exhibitors
https://icml.cc/virtual/2025/poster/44996
Exhibitors
https://icml.cc/virtual/2025/sponsor_list
Expo
https://icml.cc/virtual/2025/events/expo
Organizers
https://icml.cc/virtual/2025/organizers
Help
https://icml.cc/virtual/2025/poster/44996
FAQ
https://icml.cc/virtual/2025/faq
RocketChat Help
https://chat.icml.cc/
RocketChat Desktop Client
https://icml.cc/virtual/2025/poster/44996
Poster
Efficient and Privacy-Preserving Soft Prompt Transfer for LLMs
Xun Wang ⋅ Jing Xu ⋅ Franziska Boenisch ⋅ Michael Backes ⋅ Christopher A. Choquette Choo ⋅ Adam Dziedzic
2025 Poster
[ 
Poster
https://icml.cc/media/PosterPDFs/ICML%202025/44996.png?t=1752794511.9077928
] [ 
OpenReview
https://openreview.net/forum?id=WnTGpncrxK
]
Abstract
Prompting has become a dominant paradigm for adapting large language models (LLMs).While discrete (textual) prompts are widely used for their interpretability, soft (parameter) prompts have recently gained traction in APIs. This is because they can encode information from more training samples while minimizing the user's token usage, leaving more space in the context window for task-specific input. However, soft prompts are tightly coupled to the LLM they are tuned on, limiting their generalization to other LLMs. This constraint is particularly problematic for 
efficiency
 and 
privacy
: (1) tuning prompts on each LLM incurs high computational costs, especially as LLMs continue to grow in size. Additionally, (2) when the LLM is hosted externally, soft prompt tuning often requires sharing private data with the LLM provider. For instance, this is the case with the NVIDIA NeMo API.To address these issues, we propose POST ( 
Privacy
 
Of
 
Soft
 prompt 
Transfer
), a framework that enables private tuning of soft prompts on a small model and subsequently transfers these prompts to a larger LLM.POST uses knowledge distillation to derive a small model directly from the large LLM to improve prompt transferability, tunes the soft prompt locally, optionally with differential privacy guarantees, and transfers it back to the larger LLM using a small public dataset. Our experiments show that POST reduces computational costs, preserves privacy, and effectively transfers high-utility soft prompts.
Show more
Lay Summary
Large language models (LLMs) like ChatGPT have become powerful tools for various tasks, but customizing them for specific needs often requires sharing sensitive data with the model providers, raising privacy concerns. Additionally, tailoring these massive models can be computationally intensive.This paper introduces POST, a novel method that allows users to personalize LLMs without compromising their private data or needing significant computational resources. The approach works by first creating a smaller version of the large model. Users can then fine-tune this compact model locally using their own data, ensuring privacy. After this local tuning, the adjustments are transferred back to the original large model using publicly available data, eliminating the need to share any private information.POST paves the way for broader and more responsible use of AI technologies by enabling secure and efficient customization of LLMs.
Show more
Video
Next
Cancel
Livestream will start soon!
Livestream has already ended.
Presentation has not been recorded yet!
SlidesLive
title: Efficient and Privacy-Preserving Soft Prompt Transfer for LLMs
LIVE 0:00 / 0:00
Settings
Playlists
Bookmarks
Subtitles Off
Playback rate
Powered by
https://slideslive.com/?utm_source=icml.cc&utm_medium=player_embed&utm_campaign=powered_by
 
SlidesLive
https://slideslive.com/?utm_source=icml.cc&utm_medium=player_embed&utm_campaign=powered_by
Settings
Report Issue
https://report.slideslive.com/?p=eyJsaW5rIjoiaHR0cHM6Ly9pY21sLmNjL3ZpcnR1YWwvMjAyNS9wb3N0ZXIvNDQ5OTYiLCJhbmFseXRpY3NfdXNlcl91dWlkIjoiMjhhYjNlNzItMDEzNy00NzU3LWFiY2YtZjNiN2ZmNzM3MDI1IiwiYW5hbHl0aWNzX3Nlc3Npb25fdXVpZCI6IjdkOTk3MTNlLTBiZjItNDIwZC1hNGY4LTI5NjA1MWVjY2M3NCIsInByZXNlbnRhdGlvbl9pZCI6IjM5MDQxNDEwIiwiY3VycmVudF90aW1lIjowLCJzcGVha2VyX3ZpZGVvX3NvdXJjZV91cmwiOiJodHRwczovL3NsLXlvZGEtdjMtc3RyZWFtLTAwMi1iZXRhLmItY2RuLm5ldC8wcUY5Y2pkMERyYkUvbWFzdGVyLm0zdTgiLCJzcGVha2VyX3ZpZGVvX3F1YWxpdHkiOm51bGwsInNwZWFrZXJfdmlkZW9fcGxheWJhY2tfcmF0ZSI6MSwiY3VycmVudF9zbGlkZV9pbmRleCI6MCwiY3VycmVudF9zbGlkZV90eXBlIjoiaW1hZ2UiLCJjdXJyZW50X3NsaWRlX3VybCI6bnVsbCwiY3VycmVudF9zbGlkZV9xdWFsaXR5IjpudWxsLCJjdXJyZW50X3NsaWRlX3BsYXliYWNrX3JhdGUiOm51bGwsInNsaWRlc192aWRlb19jdXJyZW50X3RpbWUiOm51bGwsInNsaWRlc192aWRlb19zb3VyY2VfdXJsIjpudWxsLCJzbGlkZXNfdmlkZW9fcXVhbGl0eSI6bnVsbCwic2xpZGVzX3ZpZGVvX3BsYXliYWNrX3JhdGUiOm51bGwsImxpdmUiOmZhbHNlLCJsaXZlRmluaXNoZWQiOmZhbHNlLCJwcmVzZW50YXRpb25fbWVkaWFfc2V0X2lkIjozNjcxMzJ9
Debug information
Server sl-yoda-v3-stream-002-beta.b-cdn.net
Quality
Subtitles size Medium
Reload video
Bookmarks
Server
sl-yoda-v3-stream-002-beta.b-cdn.net
sl-yoda-v3-stream-002-alpha.b-cdn.net
1982098372.rsc.cdn77.org
1068207240.rsc.cdn77.org
Subtitles
Off
English
Playback rate
Quality
Subtitles size
Large
Medium
Small
Mode
Video Slideshow
Audio Slideshow
Slideshow
Video
My playlists
Playlist name
Create
Bookmarks
00:00:00
Efficient and Privacy-Preserving Soft Prompt Transfer for LLMs
Slide 1 / 22
Settings
Sync diff
Quality
Settings
Server
Reload slides
Quality
Server
Chat is not available.
bytez
https://bytez.com/
 

https://bytez.com/agent
Efficient and Privacy-Preserving Soft Prompt Transfer for LLMs
12 months ago
·
ICML
Paper
https://bytez.com/docs/icml/44996/paper?_c=eyJ2IjoxLCJyZWxhdGVkIjpbImNvZGUiLCJyZWZlcmVuY2VzIiwiY29uZmVyZW5jZSJdfQ%3D%3D
Abstract
Prompting has become a dominant paradigm for adapting large language models (LLMs). While discrete (textual) prompts are widely used for their interpretability, soft (parameter) prompts have recently gained traction in APIs. This is because they can encode information from more training samples while minimizing the user's token usage, leaving more space in the context window for task-specific input. However, soft prompts are tightly coupled to the LLM they are tuned on, limiting their generalization to other LLMs. This constraint is particularly problematic for efficiency and privacy: (1) tuning prompts on each LLM incurs high computational costs, especially as LLMs continue to grow in size. Additionally, (2) when the LLM is hosted externally, soft prompt tuning often requires sharing private data with the LLM provider. For instance, this is the case with the NVIDIA NeMo API. To address these issues, we propose POST ( P rivacy O f S oft-prompt T ransfer), a framework that enables private tuning of soft prompts on a small model and subsequently transfers these prompts to a larger LLM. POST uses knowledge distillation to derive a small model directly from the large LLM to improve prompt transferability, tunes the soft prompt locally—optionally with differential privacy guarantees—and transfers it back to the larger LLM using a small public dataset. Our experiments show that POST reduces computational costs, preserves privacy, and effectively transfers high-utility soft prompts. Our code is available at https://github. 
com/sprintml/POST
https://github.com/sprintml/POST
.
1. Introduction
Large Language Models (LLMs) are strong general-purpose language generators that can be adapted to solve various private downstream tasks 
(OpenAI,
https://icml.cc/virtual/2025/poster/44996#id-0
 
2023;
https://icml.cc/virtual/2025/poster/44996#id-0
 
Gemini-Team
https://icml.cc/virtual/2025/poster/44996#id-1
 
et al.,
https://icml.cc/virtual/2025/poster/44996#id-1
 
2023)
https://icml.cc/virtual/2025/poster/44996#id-1
. One prominent paradigm for adapting LLMs to private tasks is prompting 
(Devlin et al.,
https://icml.cc/virtual/2025/poster/44996#id-2
 
2018;
https://icml.cc/virtual/2025/poster/44996#id-2
 
Radford
https://icml.cc/virtual/2025/poster/44996#id-3
 
et al.,
https://icml.cc/virtual/2025/poster/44996#id-3
 
2018)
https://icml.cc/virtual/2025/poster/44996#id-3
. Prompting is a more flexible alternative to fine-tuning, as it allows multiple tasks to be solved simultaneously in a single inference pass, leading to higher efficiency and reducing the need for storing multiple fine-tuned model copies. While discrete prompts 
(Schick & Sch
https://icml.cc/virtual/2025/poster/44996#id-4
 ¨utze, 
2020;
https://icml.cc/virtual/2025/poster/44996#id-4
 
2021a;
https://icml.cc/virtual/2025/poster/44996#id-5
 
Shin et al.,
https://icml.cc/virtual/2025/poster/44996#id-6
 
2020;
https://icml.cc/virtual/2025/poster/44996#id-6
 
Han et al.,
https://icml.cc/virtual/2025/poster/44996#id-7
 
2022)
https://icml.cc/virtual/2025/poster/44996#id-7
, which prepend textual tokens to the LLM's input, have been shown relatively successful for LLM adaptations, they require large engineering efforts and lots of trials and errors. As an alternative, soft prompts 
(Shin et al.,
https://icml.cc/virtual/2025/poster/44996#id-6
 
2020;
https://icml.cc/virtual/2025/poster/44996#id-6
 
Lester et al.,
https://icml.cc/virtual/2025/poster/44996#id-8
 
2021;
https://icml.cc/virtual/2025/poster/44996#id-8
 
Li & Liang,
https://icml.cc/virtual/2025/poster/44996#id-9
 
2021;
https://icml.cc/virtual/2025/poster/44996#id-9
 
Zhong et al.,
https://icml.cc/virtual/2025/poster/44996#id-10
 
2021;
https://icml.cc/virtual/2025/poster/44996#id-10
 
Oymak et al.,
https://icml.cc/virtual/2025/poster/44996#id-11
 
2023)
https://icml.cc/virtual/2025/poster/44996#id-11
 prepend trainable embedding vectors to the input, which can be tuned automatically on the private downstream data using standard gradient-based approaches. Such gradient-based approaches are generally known to yield higher performance at lower computational costs 
(Liu et al.,
https://icml.cc/virtual/2025/poster/44996#id-12
 
2022)
https://icml.cc/virtual/2025/poster/44996#id-12
. Additionally, soft prompts can encode information from many more private downstream examples while using fewer input tokens than discrete prompts. This reduces costs—since many APIs charge per token—and leaves more of the context window for the downstream task 
(Varshney & Surla,
https://icml.cc/virtual/2025/poster/44996#id-13
 
2023)
https://icml.cc/virtual/2025/poster/44996#id-13
.
Yet, soft prompt tuning has two major limitations. 1) As LLMs grow in size 
(Geng & Liu,
https://icml.cc/virtual/2025/poster/44996#id-14
 
2023;
https://icml.cc/virtual/2025/poster/44996#id-14
 
Chiang et al.,
https://icml.cc/virtual/2025/poster/44996#id-15
 
2023;
https://icml.cc/virtual/2025/poster/44996#id-15
 
Brown et al.,
https://icml.cc/virtual/2025/poster/44996#id-16
 
2020)
https://icml.cc/virtual/2025/poster/44996#id-16
, it requires significantly more computation to backpropagate through the entire LLM. 2) Backpropagation requires the model and data to be on the same device. For centrally hosted LLMs, this leaves two options: either the user needs to share their private data with the LLM provider, or the LLM provider needs to share their LLM with the user. The latter is impractical as users usually do not have the compute to deploy an LLM. Additionally, the model is the provider's intellectual property 
(Dziedzic
https://icml.cc/virtual/2025/poster/44996#id-17
 
et al.,
https://icml.cc/virtual/2025/poster/44996#id-17
 
2022a;
https://icml.cc/virtual/2025/poster/44996#id-17
 
b;
https://icml.cc/virtual/2025/poster/44996#id-18
 
c;
https://icml.cc/virtual/2025/poster/44996#id-19
 Dubi´ 
nski et al.,
https://icml.cc/virtual/2025/poster/44996#id-20
 
2023)
https://icml.cc/virtual/2025/poster/44996#id-20
 and should be protected. Thus, sharing it would, at the very least, disrupt the provider's business model, as users would no longer be required to pay per query. Therefore, the former, i.e., users sharing their data with the LLM provider, is implemented
 
Figure 1: POST
 
Framework. 1 An LLM provider compresses their LLM
 
into a smaller model
 
through knowledge distillation. 2 The private data owner learns a specific soft prompt
 
on
 
using their private dataset (optionally with differential privacy guarantees). 3 The LLM provider obtains the soft prompt
 
for solving the user's task by transferring
 
to the target LLM
 
—solely relying on a small public dataset and no access to the private data for transfer.
in popular APIs, such as NVIDIA's Nemo API 
(Varshney &
https://icml.cc/virtual/2025/poster/44996#id-13
 
Surla,
https://icml.cc/virtual/2025/poster/44996#id-13
 
2023)
https://icml.cc/virtual/2025/poster/44996#id-13
. However, this approach causes severe privacy concerns for the users when the data is private or sensitive in nature 
(Duan et al.,
https://icml.cc/virtual/2025/poster/44996#id-21
 
2023a;
https://icml.cc/virtual/2025/poster/44996#id-21
 
b;
https://icml.cc/virtual/2025/poster/44996#id-22
 
Hanke et al.,
https://icml.cc/virtual/2025/poster/44996#id-23
 
2024)
https://icml.cc/virtual/2025/poster/44996#id-23
.
A potential solution to both problems is to tune the soft prompt locally on a smaller model and then transfer and use it on the large LLM. This approach, commonly known as “prompt transfer” 
(Su et al.,
https://icml.cc/virtual/2025/poster/44996#id-24
 
2022;
https://icml.cc/virtual/2025/poster/44996#id-24
 
Wu et al.,
https://icml.cc/virtual/2025/poster/44996#id-25
 
2023;
https://icml.cc/virtual/2025/poster/44996#id-25
 
Xiao
https://icml.cc/virtual/2025/poster/44996#id-26
 
et al.,
https://icml.cc/virtual/2025/poster/44996#id-26
 
2023)
https://icml.cc/virtual/2025/poster/44996#id-26
, has proven effective for discrete prompts 
(Rako-
https://icml.cc/virtual/2025/poster/44996#id-27
 
tonirina et al.,
https://icml.cc/virtual/2025/poster/44996#id-27
 
2023;
https://icml.cc/virtual/2025/poster/44996#id-27
 
Hong et al.,
https://icml.cc/virtual/2025/poster/44996#id-28
 
2023;
https://icml.cc/virtual/2025/poster/44996#id-28
 
Wen et al.,
https://icml.cc/virtual/2025/poster/44996#id-29
 
2023)
https://icml.cc/virtual/2025/poster/44996#id-29
. However, soft prompts are highly coupled to the LLM they were tuned on, making them difficult to transfer. Therefore, existing attempts to transfer soft prompts between LLMs face severe limitations: either they require private data access for the LLM provider during transfer 
(Su et al.,
https://icml.cc/virtual/2025/poster/44996#id-24
 
2022)
https://icml.cc/virtual/2025/poster/44996#id-24
, which—as we discussed—raises privacy concerns, or they are ineffective, as the transferred prompts' utility on the large central LLM often underperforms even compared to the prompted small model 
(Wu et al.,
https://icml.cc/virtual/2025/poster/44996#id-25
 
2023)
https://icml.cc/virtual/2025/poster/44996#id-25
, disincentivizing the transfer altogether.
Our proposed POST ( P rivacy O f S oft-prompt T ransfer) framework overcomes these limitations. POST consists of three key steps as shown in Figure 
1.
https://icml.cc/virtual/2025/poster/44996#id-30
 (1) The LLM provider performs knowledge distillation 
(Hinton et al.,
https://icml.cc/virtual/2025/poster/44996#id-31
 
2015)
https://icml.cc/virtual/2025/poster/44996#id-31
 to compress their LLM into a smaller language model. Note that this is a one-time operation, and the same small model can be used by any user for their various tasks. After distillation, the LLM provider sends the small model to the user. Then, (2) the user performs local prompt tuning using their private data on this smaller model, potentially incorporating formal privacy guarantees through differential privacy 
(Dwork et al.,
https://icml.cc/virtual/2025/poster/44996#id-32
 
2006)
https://icml.cc/virtual/2025/poster/44996#id-32
. Once the user has tuned the private prompt on their data, they provide this prompt to the LLM provider, who (3) transfers the prompt to achieve strong performance on the large LLM. To perform this transfer without any additional leakage from the user's private data to the LLM provider, we equip POST with a novel prompt transfer method that relies purely on access to a small public dataset during transfer rather than the user's private data.
Our thorough experimental evaluation on both masked language models and auto-regressive language models demonstrates that our method can efficiently, effectively, and privately transfer soft prompts with high utility. Thus, POST has the potential to enable more LLM providers to integrate soft prompts into their APIs, unlocking benefits such as multi-task inference, improved adaptability, extended context windows for users—all while maintaining user privacy.
In summary, we make the following contributions:
•
We propose POST, a framework for privacy of soft prompt transfer. POST preserves the confidentiality of users' private data and can also provide strong privacy guarantees through differential privacy.
•
We design a novel method to transfer private prompts between LLMs by purely relying on public data which we integrate into POST.
•
We provide detailed experimental analysis using five classification datasets and two open-ended generation tasks to simulate our setup and three different types of LLMs to show the effectiveness and efficiency of our method.
2. Background
Prompt Tuning (PT) aims at adapting a publicly pre-trained LLM to various natural language downstream tasks. There are two major types of prompts, 1) hard or discrete prompts 
(Schick & Sch
https://icml.cc/virtual/2025/poster/44996#id-5
 ¨utze, 
2021a;
https://icml.cc/virtual/2025/poster/44996#id-5
 
b;
https://icml.cc/virtual/2025/poster/44996#id-33
 
Gao et al.,
https://icml.cc/virtual/2025/poster/44996#id-34
 
2021)
https://icml.cc/virtual/2025/poster/44996#id-34
, which are discrete textual tokens prepended to the input text of the LLM, and 2) soft prompts 
(Hambardzumyan et al.,
https://icml.cc/virtual/2025/poster/44996#id-35
 
2021;
https://icml.cc/virtual/2025/poster/44996#id-35
 
Qin & Eisner,
https://icml.cc/virtual/2025/poster/44996#id-36
 
2021;
https://icml.cc/virtual/2025/poster/44996#id-36
 
Zhong et al.,
https://icml.cc/virtual/2025/poster/44996#id-10
 
2021)
https://icml.cc/virtual/2025/poster/44996#id-10
, which are tunable embedding vectors prepended to the LLM's input. While discrete prompts require thorough engineering to yield good performance on downstream tasks, soft prompts can be tuned through standard gradient-based training approaches 
(Lester et al.,
https://icml.cc/virtual/2025/poster/44996#id-8
 
2021)
https://icml.cc/virtual/2025/poster/44996#id-8
. Formally, given an input sequence with n tokens
 
, labeled by y, we first prepend l randomly initialized soft prompts
 
before X, where
 
is an embedding vector, and d is the input dimension of the LLM. The training objective is to maximize the likelihood of decoding the correct output y as L = p( y| P, X). The key is that the model itself remains frozen and only P is tunable.
Knowledge Distillation (KD) 
(Hinton et al.,
https://icml.cc/virtual/2025/poster/44996#id-31
 
2015;
https://icml.cc/virtual/2025/poster/44996#id-31
 
Bucilu
https://icml.cc/virtual/2025/poster/44996#id-37
 ˇa 
et al.,
https://icml.cc/virtual/2025/poster/44996#id-37
 
2006)
https://icml.cc/virtual/2025/poster/44996#id-37
 is a compression method for machine learning models. It works by transferring knowledge from a complex model, denoted as the teacher model, to a simpler, smaller model known as the student model. KD has been shown effective in compressing LLMs during the pre-training phase while maintaining their performance 
(Sanh et al.,
https://icml.cc/virtual/2025/poster/44996#id-38
 
2019;
https://icml.cc/virtual/2025/poster/44996#id-38
 
Gu
https://icml.cc/virtual/2025/poster/44996#id-39
 
et al.,
https://icml.cc/virtual/2025/poster/44996#id-39
 
2024;
https://icml.cc/virtual/2025/poster/44996#id-39
 
Sreenivas et al.,
https://icml.cc/virtual/2025/poster/44996#id-40
 
2024)
https://icml.cc/virtual/2025/poster/44996#id-40
. Already pre-trained LLMs can also be compressed successfully through KD 
(Gu
https://icml.cc/virtual/2025/poster/44996#id-39
 
et al.,
https://icml.cc/virtual/2025/poster/44996#id-39
 
2024;
https://icml.cc/virtual/2025/poster/44996#id-39
 
Wang et al.,
https://icml.cc/virtual/2025/poster/44996#id-41
 
2025)
https://icml.cc/virtual/2025/poster/44996#id-41
. In prompt transfer, 
Zhong
https://icml.cc/virtual/2025/poster/44996#id-42
 
et al.
https://icml.cc/virtual/2025/poster/44996#id-42
 
(2024)
https://icml.cc/virtual/2025/poster/44996#id-42
 leverage knowledge distillation to alleviate forgetting between tasks that use transferred prompts. In contrast, our setup considers transferring prompts between models. While, in general, most of the KD approaches aim at generating a student with a similar predictive performance as the teacher, for our purpose, the student's performance is not particularly relevant. The student just needs to match the teacher's predictive behavior to a certain degree in order to facilitate the transfer of the prompt from student to teacher.
Soft Prompt Transfer can be computationally expensive, especially as LLMs grow in size, because soft prompts are trained with backpropagation through the entire LLMs. This motivates the emergence of attempts to transfer, i.e., to reuse, existing soft prompts. There are two broad scenarios for prompt transfer. The first one aims at reusing a soft prompt trained for one downstream task on another (similar) downstream task on the same LLM ( cross-task transfer). This can be implemented, for example, by initializing the parameters of the second soft prompt with the trained existing soft prompt parameters and has been shown to reduce training time for the second prompt 
(Vu et al.,
https://icml.cc/virtual/2025/poster/44996#id-43
 
2022;
https://icml.cc/virtual/2025/poster/44996#id-43
 
Su et al.,
https://icml.cc/virtual/2025/poster/44996#id-24
 
2022;
https://icml.cc/virtual/2025/poster/44996#id-24
 
Zhong et al.,
https://icml.cc/virtual/2025/poster/44996#id-42
 
2024;
https://icml.cc/virtual/2025/poster/44996#id-42
 
Philippy et al.,
https://icml.cc/virtual/2025/poster/44996#id-44
 
2024)
https://icml.cc/virtual/2025/poster/44996#id-44
. The second and more challenging scenario for prompt transfer is a crossmodel transfer scenario. In this scenario, one tries to tune a prompt for a given task on one LLM, and then use it for another LLM. The difficulty arises from the fact that soft prompts (over)fit the LLM they were tuned for and usually do not exhibit a strong performance on other LLMs. 
Su et al.
https://icml.cc/virtual/2025/poster/44996#id-24
 
(2022)
https://icml.cc/virtual/2025/poster/44996#id-24
 address transferring the soft prompt between the LLMs by using the guidance of the private data. However, this approach still exposes the data directly to the second LLM which may not be possible when this LLM is hosted centrally by a service provider ( e.g., OpenAI) and the data is sensitive in nature, as the private data now needs to be shared with the external provider. 
Wu et al.
https://icml.cc/virtual/2025/poster/44996#id-25
 
(2023)
https://icml.cc/virtual/2025/poster/44996#id-25
 present a zero-shot prompt transfer method, where source prompts tuned on a given LLM are encoded into a relative space and used as a form of support vector when finding target prompts on the second, i.e., target model. Unfortunately, in their approach, the target model with the transferred prompt performs worse than the source model, leaving no incentive to use the target model rather than the source model with the prompt. In contrast, our method significantly improves performance on the target models with the transferred prompts. Additionally, their transfer requires the private data, which thereby leaks entirely to the model owner. In contrast, our method performs prompt transfer solely with public data, preserving confidentiality of the private data towards the model provider. Transferring tasks between LLMs has also been explored by 
Xiao et al.
https://icml.cc/virtual/2025/poster/44996#id-26
 
(2023)
https://icml.cc/virtual/2025/poster/44996#id-26
 for transfer learning. While they focus on fine-tuning and their approach is not applicable for soft-prompt tuning, we operate in the same setup and under the same assumptions as they do.
Differential Privacy (DP) 
(Dwork,
https://icml.cc/virtual/2025/poster/44996#id-45
 
2006)
https://icml.cc/virtual/2025/poster/44996#id-45
 is a mathematical framework that provides privacy guarantees for ML by implementing the intuition that a model
 
, trained on two neighboring datasets
 
that differ in only one data point, will yield roughly the same output, i.e.,
 
. The privacy parameter
 
specifies by how much the output is allowed to differ, and
 
is the probability of failure to meet that guarantee. To adapt soft prompts under differential privacy (DP) guarantees, 
Duan et al.
https://icml.cc/virtual/2025/poster/44996#id-21
 
(2023a)
https://icml.cc/virtual/2025/poster/44996#id-21
 introduced the PromptDPSGD algorithm. Initially developed for text classification, PromptDPSGD was subsequently adapted to support text generation tasks as well 
(Hanke et al.,
https://icml.cc/virtual/2025/poster/44996#id-23
 
2024)
https://icml.cc/virtual/2025/poster/44996#id-23
. The algorithm builds on the widely used Differentially Private Stochastic Gradient Descent (DPSGD) method 
(Abadi
https://icml.cc/virtual/2025/poster/44996#id-46
 
et al.,
https://icml.cc/virtual/2025/poster/44996#id-46
 
2016)
https://icml.cc/virtual/2025/poster/44996#id-46
, in which each gradient is clipped to bound its sensitivity (to limit how much each data point influences the trained parameters), and calibrated Gaussian noise is added to the aggregated gradients to ensure a finite DP guarantee.
Private Prompting and Text-to-Text Privatization There exist multiple DP frameworks for private prompting 
(Duan
https://icml.cc/virtual/2025/poster/44996#id-22
 
et al.,
https://icml.cc/virtual/2025/poster/44996#id-22
 
2023b;
https://icml.cc/virtual/2025/poster/44996#id-22
 
Tang et al.,
https://icml.cc/virtual/2025/poster/44996#id-47
 
2024;
https://icml.cc/virtual/2025/poster/44996#id-47
 
Wu et al.,
https://icml.cc/virtual/2025/poster/44996#id-48
 
2024)
https://icml.cc/virtual/2025/poster/44996#id-48
. However, they mainly operate in a different setup and only provide DP guarantees for the model output, yet leak the private data to the model provider 
(Hanke et al.,
https://icml.cc/virtual/2025/poster/44996#id-23
 
2024)
https://icml.cc/virtual/2025/poster/44996#id-23
. In contrast, our work aims at protecting the private data against the model provider. In a similar vein to our work, DP-OPT 
(Hong
https://icml.cc/virtual/2025/poster/44996#id-28
 
et al.,
https://icml.cc/virtual/2025/poster/44996#id-28
 
2023)
https://icml.cc/virtual/2025/poster/44996#id-28
 tries to avoid leakage to the model owner and tunes discrete prompts with DP guarantees on a local surrogate LLM and then transfers these prompts to the large LLM. Their focus on discrete prompts (in contrast to our work that relies on soft prompts) leads to certain words and phrases from the training dataset leaking directly to the LLM provider, as shown in their Figure 3—which does not occur with our method. Additionally, their results show that the local surrogate model needs to be of strong performance ( i.e., large) to obtain good transfer results, leading to very high compute requirements on the user side. In contrast, our method relies on small surrogate models that can be used for prompt tuning with low computing on the user's end. We empirically compare against their method in Table 
5.
https://icml.cc/virtual/2025/poster/44996#id-49
3. Setup and Problem Formulation
The Setup. We consider two parties: an LLM provider and a user. The LLM provider deploys a general-purpose LLM and offers paid query access to it. The user holds private data and wants to adapt the LLM on this data to solve their downstream tasks while ensuring the confidentiality
 
and privacy of the data towards the LLM provider.
The Problem. Unfortunately, for soft prompt tuning— which involves gradient calculation—both the data and the LLM are required to be on the same device. The problem is that the user may not be able to share their data with the LLM provider due to privacy concerns while the LLM provider cannot share their LLM because of 1) intellectual property concerns and since 2) this would disrupt their business model, as users would no longer be required to pay for accessing model queries. Additionally, most users would lack the necessary computational resources to tune the soft prompt on the large LLM locally, as this requires calculating gradients over the entire model. Due to these limitations, the powerful LLM cannot be used for private tasks.
Our Goal and Solution. Our goal is to protect the private downstream data ( i.e., the “training data”) used to tune the soft prompt from leaking to the LLM provider.1 We propose a solution based on tuning the soft prompt on a small local model and then transferring this prompt to the LLM by using public data. To obtain a suitable small model that facilitates prompt transfer, we propose that the LLM provider performs KD from their LLM. The small model needs to meet three critical requirements: it must (i) be small enough to enable the user to perform local soft prompt tuning on their own hardware, (ii) closely match the semantics of the original LLM to facilitate an effective prompt transfer, and, from the perspective of the LLM provider, (iii) be limited in performance to ensure that users still have an incentive to use the original LLM rather than the small prompted version. Note that the KD is a one-time operation for the LLM provider as the same small model can be used by any user for their various tasks. After distillation, the small model is sent to the user who tunes a soft prompt on it using their private data, potentially with DP to formally bound privacy leakage. Finally, the tuned prompt is sent to the LLM provider who performs a prompt transfer step relying on public data. Eventually, the client can use the LLM using the transferred prompt. We provide an overview of this solution in Figure 
1
https://icml.cc/virtual/2025/poster/44996#id-30
 and detail its building blocks in the following section.
4. Our Private Transfer of Soft Prompts Framework
Our P rivacy O f S oft-prompt T ransfer (POST) framework consists of three main building blocks: (1) a KD from the LLM to a small model, (2) private prompt tuning, and (3) a privacy-preserving prompt transfer using public data. We detail those building blocks below.
4.1. Knowledge Distillation
To derive a small model
 
from the large LLM
 
, we rely on KD. We discuss the advantage of KD for our POST framework over other alternatives for model compression, such as quantization and pruning, in Appendix D.2.
We follow the approach of 
Sanh et al.
https://icml.cc/virtual/2025/poster/44996#id-38
 
(2019)
https://icml.cc/virtual/2025/poster/44996#id-38
 to derive
 
from
 
. Their distillation objective function is given by
 
This objective combines three losses: distillation loss
 
, language modeling loss
 
, and embedding cosine loss
 
. The distillation loss
 
measures the KullbackLeibler divergence between the logits of
 
and
 
. The language modeling loss
 
corresponds to the standard pretraining objective, using cross-entropy to predict masked or next tokens. The embedding cosine loss
 
computes the cosine distance between the embeddings of
 
and
 
. These three losses are weighted by
 
In contrast to prior work 
(Sanh et al.,
https://icml.cc/virtual/2025/poster/44996#id-38
 
2019;
https://icml.cc/virtual/2025/poster/44996#id-38
 
Xiao et al.,
https://icml.cc/virtual/2025/poster/44996#id-26
 
2023)
https://icml.cc/virtual/2025/poster/44996#id-26
 that relies on KD to moderately compress LLMs while maintaining high performance on
 
, our goal is to achieve a significant compression without focus on maintaining
 
performance. Thereby, we ensure that
 
is small enough to fit into the user's hardware for local prompt tuning and is not performant enough to disincentivise the (paid) use of
 
, as desired by the LLM provider. We perform extensive ablations on the setup for the KD, the importance of the individual loss term in Equation 
(1)
https://icml.cc/virtual/2025/poster/44996#id-50
, and the resulting trade-offs between the compressed model's performance and our POST's success in Section 
5.6.
https://icml.cc/virtual/2025/poster/44996#id-51
4.2. Private Prompt Tuning
The goal is to tune a local prompt
 
on the small source model
 
using the private data
 
the loss L on the private downstream task as
 
where x denotes a query input sequence from the task that we want to predict. This approach can be performed with standard PT. It provides confidentiality for the private data since the data is not directly sent to the LLM provider. Recent work 
(Duan et al.,
https://icml.cc/virtual/2025/poster/44996#id-22
 
2023b)
https://icml.cc/virtual/2025/poster/44996#id-22
, however, highlights that private information can leak from tuned discrete prompts. In Section 
5.4,
https://icml.cc/virtual/2025/poster/44996#id-52
 we show that this also holds for soft prompts, motivating the necessity of integrating privacy guarantees.
To formally bound privacy leakage, we propose to tune
 
with DP, for example, using the PromptDPSGD algorithm 
(Duan et al.,
https://icml.cc/virtual/2025/poster/44996#id-21
 
2023a)
https://icml.cc/virtual/2025/poster/44996#id-21
. During optimization, PromptDPSGD clips the per-sample gradients of the loss to a clip norm c and adds Gaussian noise drawn from
 
to provide
 
-DP guarantees (see Appendix C.3 in 
Duan
https://icml.cc/virtual/2025/poster/44996#id-21
 
et al.
https://icml.cc/virtual/2025/poster/44996#id-21
 
(2023a)
https://icml.cc/virtual/2025/poster/44996#id-21
 for the privacy proof). Hence, applying their algorithm bounds the leakage of the private prompt tuning data
 
from
 
to
 
. Because of the DP postprocessing guarantees,
 
can then be shared with the LLM provider without incurring further privacy loss.
4.3. Privacy-Preserving Prompt Transfer through Public Data
The prompt
 
, tuned on the small source model
 
in principle, be directly applied to the large target LLM
 
However, as described above, soft prompts fit very strongly the model that they were tuned on. Hence, they do not initially perform very well on other LLMs. A naive solution is to fine-tune the target prompt
 
on the private data
 
However, this would disclose the private data to the LLM provider and is, hence, not acceptable. As an alternative, we propose the first privacy-preserving prompt transfer that leverages a small dataset
 
in an efficient transfer step to derive a high-utility prompt
 
We start by initializing the target prompt
 
with the same initialization of
 
, then iteratively update
 
. For the itera-
tive update, we design a loss function
 
that consists of two different loss terms. The first loss term aims at mimicking the prompted small model's predictions on the public data closely. It is defined as
 
where KLDiv denotes the Kullback–Leibler divergence. The second loss term aims at replicating the changes to the initial model behavior introduced by the prompt. Formally, the second loss aligns the direction change induced by the private prompt between
 
, on the public data as
 
We need both loss terms, since, particularly when the small model does not have good performance, just mimicking its behavior, rather than matching the impact of the prompt, is not effective.
Based on the design of our loss function, the best choice for
 
in Equation 
(3)
https://icml.cc/virtual/2025/poster/44996#id-53
—controlling the balance between the two loss terms—depends on the zero-shot accuracy of the large LLM on the private task and the performance of the compressed LLM. If the large LLM has a good zero-shot performance, or the compressed LLM has a weak performance, a larger
 
, i.e., putting the emphasis
 
to mimic the prompt behavior, rather than improving the task performance, is more beneficial. We present extensive ablations and guidelines on the choice of
 
in Section 
5.6.
https://icml.cc/virtual/2025/poster/44996#id-51
5. Empirical Evaluation
5.1. Experimental Setup
Models and Distillation. We perform experiments with three LLMs of diverse scale, namely Roberta-base 
(Liu
https://icml.cc/virtual/2025/poster/44996#id-54
 
et al.,
https://icml.cc/virtual/2025/poster/44996#id-54
 
2019)
https://icml.cc/virtual/2025/poster/44996#id-54
, GPT2-XL 
(Radford et al.,
https://icml.cc/virtual/2025/poster/44996#id-55
 
2019)
https://icml.cc/virtual/2025/poster/44996#id-55
, and Llama2-7b 
(Touvron et al.,
https://icml.cc/virtual/2025/poster/44996#id-56
 
2023)
https://icml.cc/virtual/2025/poster/44996#id-56
. We experiment with various degrees of compression in the KD (see Appendix D.4). For the results presented in the main body of the paper, we compress the 12-layer Roberta-base and the 32-layer Llama2-7b to 2 layers, and the 48-layer GPT2-XL to 4 layers. We use the Bookcorpus 
(Zhu et al.,
https://icml.cc/virtual/2025/poster/44996#id-57
 
2015)
https://icml.cc/virtual/2025/poster/44996#id-57
 dataset for the KD.
Datasets. Following prior work 
(Hong et al.,
https://icml.cc/virtual/2025/poster/44996#id-28
 
2023;
https://icml.cc/virtual/2025/poster/44996#id-28
 
Wu
https://icml.cc/virtual/2025/poster/44996#id-25
 
et al.,
https://icml.cc/virtual/2025/poster/44996#id-25
 
2023)
https://icml.cc/virtual/2025/poster/44996#id-25
, we evaluate the performance of our proposed method on five classification-task datasets: sst2 from the GLUE benchmark 
(Wang et al.,
https://icml.cc/virtual/2025/poster/44996#id-58
 
2019)
https://icml.cc/virtual/2025/poster/44996#id-58
, imdb 
(Maas et al.,
https://icml.cc/virtual/2025/poster/44996#id-59
 
2011)
https://icml.cc/virtual/2025/poster/44996#id-59
, tweet 
(Rosenthal et al.,
https://icml.cc/virtual/2025/poster/44996#id-60
 
2017)
https://icml.cc/virtual/2025/poster/44996#id-60
, arisetv 
(Okite,
https://icml.cc/virtual/2025/poster/44996#id-61
 
2022)
https://icml.cc/virtual/2025/poster/44996#id-61
 and mpqa 
(Wiebe et al.,
https://icml.cc/virtual/2025/poster/44996#id-62
 
2005)
https://icml.cc/virtual/2025/poster/44996#id-62
. To show the general applicability of our method on open-ended generation tasks, we go beyond what was shown in prior work, and additionally perform evaluations on the MIT dataset 
(Liu et al.,
https://icml.cc/virtual/2025/poster/44996#id-63
 
2012)
https://icml.cc/virtual/2025/poster/44996#id-63
, which aims to extract the genre or director of a movie given the movie description. This task requires the generation of multiple tokens with varying lengths, highlighting our POST's flexibility. As public data, we also include agnews 
(Zhang et al.,
https://icml.cc/virtual/2025/poster/44996#id-64
 
2015)
https://icml.cc/virtual/2025/poster/44996#id-64
 and boolq 
(Clark et al.,
https://icml.cc/virtual/2025/poster/44996#id-65
 
2019)
https://icml.cc/virtual/2025/poster/44996#id-65
 for the classification task, while for the generation task, we use AIE 
(Kudari,
https://icml.cc/virtual/2025/poster/44996#id-66
 
2022)
https://icml.cc/virtual/2025/poster/44996#id-66
. We also include disaster 
(CrowdFlower,
https://icml.cc/virtual/2025/poster/44996#id-67
 
2019)
https://icml.cc/virtual/2025/poster/44996#id-67
 and trec 
(Li & Roth,
https://icml.cc/virtual/2025/poster/44996#id-68
 
2002)
https://icml.cc/virtual/2025/poster/44996#id-68
 for baseline comparison and ablation on the choice of public data. Further details on the datasets and their tasks are provided in Appendix B.2.
KD, Prompt Tuning, and Prompt Transfer. We experiment with various setups for the KD. If not indicated otherwise, we use the KD hyperparameters from 
Sanh et al.
https://icml.cc/virtual/2025/poster/44996#id-38
 
(2019)
https://icml.cc/virtual/2025/poster/44996#id-38
. See Appendix B.1 for more details. Following 
Su
https://icml.cc/virtual/2025/poster/44996#id-24
 
et al.
https://icml.cc/virtual/2025/poster/44996#id-24
 
(2022)
https://icml.cc/virtual/2025/poster/44996#id-24
, we initialize our soft prompts with 100 tokens. We include an ablation study on prompt length in Section 
5.6.
https://icml.cc/virtual/2025/poster/44996#id-51
 The hyperparameters for prompt tuning per dataset, including the
 
for the DP setup, are presented in Table 10. During the prompt transfer, the model provider has no access to the private dataset to find the right moment to stop the transfer, so we report the transferred accuracy after a fixed number of steps. We experiment with various numbers of steps and public data points used for transfer in Section 
5.6.
https://icml.cc/virtual/2025/poster/44996#id-51
 By default, we use 5000 steps for Roberta-base, 8000 steps for GPT2-XL, and 6000 steps for Llama2-7b.
Metrics and Baselines. To evaluate the success of our method, we report the accuracy on the test data split of our private datasets for the teacher LLM with the transferred prompt ( Private Transfer). As baselines for comparison, we include the zero-shot performance of the teacher LLM on the private tasks' test sets ( Full ZS), representing the lower bound our method should improve upon. Additionally, we provide the performance of tuning the prompt for the teacher LLM on the private training data, which, due to privacy concerns, is not feasible in practice ( Full PT). This serves as the theoretical upper bound for potential performance. We also report the accuracy of the prompted compressed model after tuning the prompt on it ( Compressed PT), as our private transfer must improve over this metric to justify using the teacher LLM instead of the small student model. Finally, we report the direct transfer accuracy ( Direct Transfer), which is the accuracy achieved when the prompt tuned on the small model is directly applied to the large one. The improvement of POST over this value shows the effectiveness of our prompt transfer step.
5.2. Effective Prompt Transfer with POST
As the main result, in Table 
1,
https://icml.cc/virtual/2025/poster/44996#id-69
 we show POST's effectiveness in transferring soft prompts in both setups, with and without DP. For each private dataset, we experiment with two different public datasets for prompt transfer and report the respective transferred accuracy on the private dataset. We first observe that the transferred performance is significantly higher than the zero-shot performance of the large LLM (Full ZS). This highlights the improvements that a user can gain from adapting the large LLM to their private task using our method. Additionally, after prompt transfer with POST, we outperform the small compressed prompted model (Compressed PT), giving users a strong incentive to transfer their prompt back to the (paid) large LLM, rather than using the small model locally. Further, we show that our prompt transfer described in Section 
4.3
https://icml.cc/virtual/2025/poster/44996#id-70
 is highly effective as it improves over the direct transfer (Direct Transfer) performance by a large margin. In contrast to the soft prompt transfer method by 
Wu et al.
https://icml.cc/virtual/2025/poster/44996#id-25
 
(2023)
https://icml.cc/virtual/2025/poster/44996#id-25
 which showed a decrease in accuracy after transfer, our results highlight for the first time the practical applicability and the benefits of transferring soft prompts.
When using DP during the prompt tuning, we observe that the improvement of the transfer performance to the large LLM over the performance on the prompted compressed model (Compressed PT) is even more significant than in the non-DP setup. For example, on the sst2 dataset, using imdb as public data, we observe an improvement of 18.92% for the DP case, while we only have an improvement of 11.24% in the non-DP case (see first lines of Table 
1b
https://icml.cc/virtual/2025/poster/44996#id-69
 and Table 
1a,
https://icml.cc/virtual/2025/poster/44996#id-69
 respectively). We hypothesize that the noise added for DP during tuning acts as a regularizer that can help to prevent overfitting on the small sensitive datasets and the distilled model, hence, generalizing better to the large LLM. Overall, our results are very close to the non-private upper bound baseline (Full PT) of tuning the prompt directly on the large LLM, which would not only leak private information from the model outputs to third parties querying the adapted model, but also leak the private dataset to the LLM provider.
5.3. Transferring Prompts for Generation Tasks
Since, following 
Li et al.
https://icml.cc/virtual/2025/poster/44996#id-71
 
(2022)
https://icml.cc/virtual/2025/poster/44996#id-71
, we model classification tasks as text-infilling tasks rather than adding a classification head, as detailled in Appendix B.2, our POST method naturally extends to generation tasks. To demonstrate this ability in practice we assess POST's performance on the MIT movie dataset where the task is to extract a movie's director or genre from a given movie description. Instead of generating a single token, as for classification, this open-ended task requires generating multiple tokens of varying lengths. We choose AIE, which aims to extract location from a note, as a public dataset and present our results in Table 
2.
https://icml.cc/virtual/2025/poster/44996#id-72
 POST outperforms Full ZS and Compressed PT, highlighting our method's applicability to open-ended tasks.
Table 1: POST on Llama2-7b with and without DP. We report POST's transfer performance. The baselines are the large models' zero-shot performance on the private data (Full ZS), the accuracy of tuning the prompt with the private data on the large models (Full PT) and the small model (Compressed PT), and the performance of the prompt tuned on the small model when direly applied to the large one (Direct Transfer). POST significantly improves performance over the small prompted model and our prompt transfer yields a strong improvement over the direct transfer. The same improvement can be observed for Roberta-base and GPT2-XL, as shown in Table 13 and Table 14 in the Appendix.
 
Table 2: POST on Generation Tasks (Llama2-7b, no DP). We present POST's performance on the open-ended MIT-D and MIT-G tasks and choose the AIE dataset as the public set. We show its effectiveness over the baselines.
 
5.4. Practical Privacy Implications of POST
We further assess the practical privacy implications of POST. A standard method for analyzing privacy risks in machine learning is membership inference attacks (MIAs) 
(Shokri
https://icml.cc/virtual/2025/poster/44996#id-73
 
et al.,
https://icml.cc/virtual/2025/poster/44996#id-73
 
2017)
https://icml.cc/virtual/2025/poster/44996#id-73
. In our setup, the goal of the attack is to determine whether a given data point was used to train the private soft prompt
 
. Such an attack could be executed by either the LLM owner or a third party to gain knowledge on
 
. We instantiate the Likelihood Ratio Attack (LiRA) 
(Carlini et al.,
https://icml.cc/virtual/2025/poster/44996#id-74
 
2022)
https://icml.cc/virtual/2025/poster/44996#id-74
 against soft prompts tuned on the four datasets for Roberta-base. As we show in Table 
3,
https://icml.cc/virtual/2025/poster/44996#id-75
 with as few as eight shadow models, LiRA achieves a non-trivial level of data leakage, with an AUC of 0.5610 for the sst2 dataset. Applying DP with
 
and
 
significantly decreases the AUC to 0.5258. We also report TPR@1%FPR for the experiments. Results show that DPtuned soft prompts reduce privacy leakage for all datasets. Beyond the privacy risk associated with the private soft prompt
 
, we also analyze the potential pretraining data leakage during the KD phase, as shown in Appendix D.7.
5.5. Runtime of POST
A notable advantage of POST is its ability to tune soft prompts on smaller models instead of significantly larger ones. Since tuning a soft prompt involves backpropagation
Table 3: LiRA Membership Inference Attack. We report the results of the LiRA attack against a soft prompt trained on four datasets with Roberta-base. Without DP (
 
), we observe non-trivial leakage. Our method with DP reduces privacy leakage significantly in comparison to the non-private (confidential,
 
 
through the entire model, this approach has the potential to substantially reduce computational complexity. In Table 
4,
https://icml.cc/virtual/2025/poster/44996#id-76
 we present a detailed runtime analysis of POST's individual components and compare them to full PT. Note that in practice, full PT on the large LLM leaks all the private prompt data to the LLM owner and is, hence, not practical. It serves only as a conceptual baseline.
Our findings reveal a significant speedup, particularly for large downstream datasets, where the cost of backpropagating many samples through a large language model is exceptionally high. For instance, on the sst2 dataset, our method achieves a sixfold speedup, reducing runtime from 2,660 minutes to just 409 minutes on an A100 GPU. These results highlight that POST not only enhances privacy but also delivers substantial computational efficiency improvements, especially for large datasets. Further details can be found in Appendix C.2.
5.6. Ablations
We perform various ablations on the inner workings of our method to provide guidance on how to best use it in practice.
Table 4: Runtime of POST (GPT2-XL). We present the runtime for our method, split by its individual components, and compare against full prompt tuning on the large LLM (PT on
 
). We use arisetv and sst2 as private data and execute 5000 steps of transfer. We tune and transfer the prompts for 20 epochs (sst2) and 40 epochs (arisetv). All experiments are executed on a single A100 GPU.
 
 
Figure 2: Effect of Number of Public Samples (arisetv).
Effect of Number of Public Samples used for Transfer. We first investigate the influence of the size of the public dataset required to complete the prompt transfer. Our results in Figure 
2
https://icml.cc/virtual/2025/poster/44996#id-77
 for arisetv as the private dataset with different numbers of public samples from agnews show that we can already yield high transfer performance with less than 100 public data points. The small size of the public datasets needed makes our method highly practical.
Effect of Number of Transfer Steps. We additionally investigate how many transfer steps are required to obtain good performance. Based on the insights from the previous section, we randomly subsample 128 samples from the agnews dataset as public data and report the achieved accuracy on arisetv as private data over different numbers of transfer steps. Our results in Figure 
3
https://icml.cc/virtual/2025/poster/44996#id-78
 highlight that only a small number of transfer steps is enough for convergence and high accuracy on the private task. We observe convergence within around 2000 steps for GPT2-XL and around 1000 steps for Roberta-base.
Choice of Public Dataset. We observe that the choice in the public dataset impacts the final test performance. To evaluate this impact of the public dataset choice on transfer performance, we conduct an ablation study using different public sets for various private datasets, see Table 16. Our findings indicate that the best transfer performance can be achieved with public datasets from the same task family, even if the datasets are not very similar and have, for exam-
 
Figure 3: Effect of Number of Transfer Steps (arisetv).
Table 5: Baseline Comparison. We compare POST against state-of-the-art baselines, DP-OPT 
(Hong et al.,
https://icml.cc/virtual/2025/poster/44996#id-28
 
2023)
https://icml.cc/virtual/2025/poster/44996#id-28
( OPT, DP-OPT) and Zero-Shot Transfer 
(Wu et al.,
https://icml.cc/virtual/2025/poster/44996#id-25
 
2023)
https://icml.cc/virtual/2025/poster/44996#id-25
 ( ZST). We report test accuracies over different private datasets. We use our distilled 2-layer compressed Llama2-7b ( 2-Lay) or GPT2 as the source model, and Llama2-7b as the target model. For the DP versions, we use
 
to Table 10. For our POST, we report the accuracies under the best public data (Table 13 and 14).
 
ple, different numbers of classes. We added a more detailed discussion in Appendix D.1.
Design of the KD. Building on our intuition that more similar models exhibit better prompt transfer, we assess different ways of preserving this similarity during KD (see Equation 
(1)
https://icml.cc/virtual/2025/poster/44996#id-50
). We observe that fixing the language modeling head, i.e., causing higher output similarity, leads to slightly better transfer performance. In contrast, we do not observe a consistent improvement with fixing the embeddings. Detailed results are shown in Appendix D.3.
Impact of Model Compression. We also investigate the trade-offs of different compression ratios. We distill the large LLM to various smaller sizes and report the performance of our POST and the distillation time. As we show in Appendix D.4, as the distilled model becomes larger, the transfer performance generally becomes better. However, it also requires more distillation time and more computational resources from the user to tune the soft prompt locally.
Transfer Loss Design. Our transfer loss in Equation 
(3)
https://icml.cc/virtual/2025/poster/44996#id-53
 has a parameter
 
controlling the balance between the two loss terms. We observe that a good choice of
 
depends largely on the target model's ZS performance and the compressed model's performance. We provide a detailed evaluation and a heuristic for selecting the best
 
in Appendix D.5.
Table 6: Impact of Feature Space Alignment on Transfer Performance. We compare the transfer performance of a distilled 2-layer Llama model and a non-distilled model that is fine-tuned directly on the same BookCorpus dataset. Both models have the same architecture and initialization, but only the distilled model maintains feature alignment with the large model. While the two models perform similarly before prompt transfer, the distilled model consistently achieves higher prompt transfer performance.
 
Effect of Soft Prompt Token Length. We investigate the impact of token length on the transferability of the soft prompt by conducting experiments across various lengths ( Appendix D.6). Our findings suggest that an optimal range lies between 50 and 100 tokens. In contrast, both excessively short and long prompts lead to suboptimal results, with longer prompts also incurring higher computational costs.
Impact of Feature Space Alignment. In addition to the empirical results on prompt transfer, we further investigate why soft prompts trained on the distilled model remain transferable to the target model. Specifically, we conduct an ablation study to examine the role of feature space alignment induced by KD in our POST's transfer performance. We use a model with the same architecture and initial parameters as our distilled 2-layer Llama. Instead of applying knowledge distillation on the BookCorpus dataset, we directly fine-tune this model on BookCorpus to match the performance of the distilled model. This model has no feature space alignment with the large model. We then evaluate its transfer performance and compare it to that of the distilled model, following the same transferring process in Section 
4.3.
https://icml.cc/virtual/2025/poster/44996#id-70
 The results in Table 
6
https://icml.cc/virtual/2025/poster/44996#id-79
 show that, although both models achieve similar prompt tuning performance, the prompt transfer performance for the distilled model is always better. This indicates that using knowledge distillation to preserve feature space alignment between the small model and large model is essential in our designed prompt transfer procedure.
5.7. Comparing against State-of-the-Art Prompt Transfer Approaches
We compare against two state-of-the-art baselines, namely the Zero-Shot transfer by 
Wu et al.
https://icml.cc/virtual/2025/poster/44996#id-25
 
(2023)
https://icml.cc/virtual/2025/poster/44996#id-25
 and DP-OPT by 
Hong et al.
https://icml.cc/virtual/2025/poster/44996#id-28
 
(2023)
https://icml.cc/virtual/2025/poster/44996#id-28
. Zero-Shot transfer operates in the same setup as we do and also relies on soft prompts. DPOPT, in contrast to ours, is designed for discrete prompts. Details on their methods are presented in Appendix C.3. DPOPT first tunes a discrete prompt locally and then directly uses it on the large model. Since their method relies on the small model having good performance, we execute their method in 2 setups for a fair comparison: 1) we tune their source prompt using our compressed model as the small model, and 2) we use GPT2 as the small model. The latter is expected to have significantly higher performance and yield much better prompts. We report DP-OPT's performance on both non-DP (OPT) and DP settings. Our results in Table 
5
https://icml.cc/virtual/2025/poster/44996#id-49
 highlight that our POST significantly outperforms all baselines even in the DP regime. Additional results where we distill from GPT2-XL can be found in Appendix C.3.
6. Conclusions
We present POST, a framework for the private transfer of soft prompts that enables adapting LLMs with private user data while protecting both the user's privacy and the LLM provider's intellectual property. POST relies on distillation to enable an LLM provider to share a small model with limited utility to a client for local prompt tuning on their private data, optionally with DP guarantees. Using our new prompt transfer method that leverages a small set of public data, the LLM provider can then transfer the prompt to their model. Our experiments highlight that the POST framework achieves significant improvements on the private tasks through the prompt transfer, improves the computational efficiency of prompt tuning and outperforms all private prompt transfer baselines. Thereby, our work paves the way for more trustworthy application of LLMs.
Impact Statement
We propose a private transfer of soft prompts from a small language model to a large language model. The primary positive societal impact of our work is that our method can protect local data privacy and also the intellectual property of the large language model provider, which encourages wider and more trustworthy applications of LLMs. Additionally, since our transfer enables more compute-efficient prompt tuning and enables the reuse of existing prompts, it can have a positive environmental impact. We expect that our POST framework will also enable more LLM providers to offer the possibility of adapting their LLMs through soft prompt tuning.
Acknowledgments
The project on which this paper is based was funded by the German Federal Ministry of Education and Research (BMBF) under funding number 16KIS2114K. Responsibility for the content of this publication lies with the authors.
References
Abadi, M., Chu, A., Goodfellow, I., McMahan, H. B., Mironov, I., Talwar, K., and Zhang, L. Deep learning with differential privacy. In Proceedings of the 2016 ACM SIGSAC conference on computer and communications security, pp. 308–318, 2016.
Biderman, S., Schoelkopf, H., Anthony, Q. G., Bradley, H., O'Brien, K., Hallahan, E., Khan, M. A., Purohit, S., Prashanth, U. S., Raff, E., et al. Pythia: A suite for analyzing large language models across training and scaling. In International Conference on Machine Learning, pp. 2397–2430. PMLR, 2023.
Brown, T., Mann, B., Ryder, N., Subbiah, M., Kaplan, J. D., Dhariwal, P., Neelakantan, A., Shyam, P., Sastry, G., Askell, A., et al. Language models are few-shot learners. Advances in neural information processing systems, 33: 1877–1901, 2020.
Bucilu ˇa, C., Caruana, R., and Niculescu-Mizil, A. Model compression. In Proceedings of the 12th ACM SIGKDD international conference on Knowledge discovery and data mining, pp. 535–541, 2006.
Carlini, N., Chien, S., Nasr, M., Song, S., Terzis, A., and Tram`er, F. Membership inference attacks from first principles. In 2022 IEEE Symposium on Security and Privacy (SP), pp. 1897–1914, 2022. doi: 10. 1109/SP46214. 2022. 9833649.
Chiang, W.-L., Li, Z., Lin, Z., Sheng, Y., Wu, Z., Zhang, H., Zheng, L., Zhuang, S., Zhuang, Y., Gonzalez, J. E., Stoica, I., and Xing, E. P. Vicuna: An open-source chatbot impressing gpt-4 with 90%* chatgpt quality, March 2023. URL 
https://lmsys
https://lmsys.org/blog/2023-03-30-vicuna/
. org/blog/ 
2023-03-30-vicuna/
https://lmsys.org/blog/2023-03-30-vicuna/
.
Clark, C., Lee, K., Chang, M.-W., Kwiatkowski, T., Collins, M., and Toutanova, K. BoolQ: Exploring the surprising difficulty of natural yes/no questions. In Burstein, J., Doran, C., and Solorio, T. (eds.), Proceedings of the 2019 Conference of the North American Chapter of the Association for Computational Linguistics: Human Language Technologies, Volume 1 (Long and Short Papers), pp. 2924–2936, Minneapolis, Minnesota, June 2019. Association for Computational Linguistics. doi: 10. 18653/ v1/N19-1300. URL 
https://aclanthology
https://aclanthology.org/N19-1300/
. org/ 
N19-1300/
https://aclanthology.org/N19-1300/
.
CrowdFlower. Disaster response tweets, 2019. URL https://www. kaggle. 
com/c/nlp-getting-
https://www.kaggle.com/c/nlp-getting-started
 
started
https://www.kaggle.com/c/nlp-getting-started
.
Devlin, J., Chang, M.-W., Lee, K., and Toutanova, K. Bert: Pre-training of deep bidirectional transformers for language understanding. arXiv preprint arXiv:1810.04805, 2018.
Duan, H., Dziedzic, A., Papernot, N., and Boenisch, F. Flocks of stochastic parrots: Differentially private prompt learning for large language models. Advances in Neural Information Processing Systems, 36, 2023a.
Duan, H., Dziedzic, A., Yaghini, M., Papernot, N., and Boenisch, F. On the privacy risk of in-context learning. In The 61st Annual Meeting Of The Association For Computational Linguistics, 2023b.
Dubi ´nski, J., Pawlak, S., Boenisch, F., Trzcinski, T., and Dziedzic, A. Bucks for buckets (b4b): Active defenses against stealing encoders. In Thirty-seventh Conference on Neural Information Processing Systems (NeurIPS), 2023.
Dwork, C. Differential privacy. In International colloquium on automata, languages, and programming, pp. 1–12. Springer, 2006.
Dwork, C., McSherry, F., Nissim, K., and Smith, A. Cal- ibrating noise to sensitivity in private data analysis. In Theory of Cryptography: Third Theory of Cryptography Conference, TCC 2006, New York, NY, USA, March 4-7, 2006. Proceedings 3, pp. 265–284. Springer, 2006.
Dziedzic, A., Dhawan, N., Kaleem, M. A., Guan, J., and Pa- pernot, N. On the difficulty of defending self-supervised learning against model extraction. In ICML (International Conference on Machine Learning), 2022a.
Dziedzic, A., Duan, H., Kaleem, M. A., Dhawan, N., Guan, J., Cattan, Y., Boenisch, F., and Papernot, N. Dataset inference for self-supervised models. In NeurIPS (Neural Information Processing Systems), 2022b.
Dziedzic, A., Kaleem, M. A., Lu, Y. S., and Papernot, N. Increasing the cost of model extraction with calibrated proof of work. In International Conference on Learning Representations (ICLR) [SPOTLIGTH], 2022c.
Gao, T., Fisch, A., and Chen, D. Making pre-trained lan- guage models better few-shot learners. In Proceedings of the 59th Annual Meeting of the Association for Computational Linguistics and the 11th International Joint Conference on Natural Language Processing (Volume 1: Long Papers), pp. 3816–3830, 2021.
Gemini-Team, Anil, R., Borgeaud, S., Wu, Y., Alayrac, J.- B., Yu, J., Soricut, R., Schalkwyk, J., Dai, A. M., Hauth, A., et al. Gemini: a family of highly capable multimodal models. arXiv preprint arXiv:2312.11805, 2023.
Geng, X. and Liu, H. Openllama: An open reproduction of llama, May 2023. URL 
https://github
https://github.com/openlm-research/open_llama
. com/ 
openlm-research/open llama
https://github.com/openlm-research/open_llama
.
Gu, Y., Dong, L., Wei, F., and Huang, M. MiniLLM: Knowledge distillation of large language models. In The Twelfth International Conference on Learning Representations, 2024. URL 
https://openreview
https://openreview.net/forum?id=5h0qf7IBZZ
. net/ 
forum?id=5h0qf7IBZZ
https://openreview.net/forum?id=5h0qf7IBZZ
.
Hambardzumyan, K., Khachatrian, H., and May, J. Warp: Word-level adversarial reprogramming. In ACL-IJCNLP 2021-59th Annual Meeting of the Association for Computational Linguistics and the 11th International Joint Conference on Natural Language Processing, Proceedings of the Conference, pp. 4921–4933, 2021.
Han, S., Pool, J., Tran, J., and Dally, W. Learning both weights and connections for efficient neural network. Advances in neural information processing systems, 28, 2015.
Han, S., Mao, H., and Dally, W. J. Deep compression: Compressing deep neural networks with pruning, trained quantization and huffman coding. In International Conference on Learning Representations (ICLR), 2016. URL 
https://arxiv
https://arxiv.org/abs/1510.00149
. org/abs/1510. 00149.
Han, X., Zhao, W., Ding, N., Liu, Z., and Sun, M. Ptr: Prompt tuning with rules for text classification. AI Open, 3:182–192, 2022.
Hanke, V., Blanchard, T., Boenisch, F., Olatunji, I. E., Backes, M., and Dziedzic, A. Open llms are necessary for current private adaptations and outperform their closed alternatives. In Thirty-Eighth Conference on Neural Information Processing Systems (NeurIPS), 2024.
Hinton, G., Vinyals, O., Dean, J., et al. Distilling the knowledge in a neural network. arXiv preprint arXiv:1503.02531, 2(7), 2015.
Hong, J., Wang, J. T., Zhang, C., Li, Z., Li, B., and Wang, Z. Dp-opt: Make large language model your privacy-preserving prompt engineer. ArXiv, abs/2312.03724, 2023. URL 
https:
https://api.semanticscholar.org/CorpusID:266051675
 //api. semanticscholar. 
org/CorpusID:
https://api.semanticscholar.org/CorpusID:266051675
 
266051675
https://api.semanticscholar.org/CorpusID:266051675
.
Jacob, B., Kligys, S., Chen, B., Zhu, M., Tang, M., Howard, A., Adam, H., and Kalenichenko, D. Quantization and training of neural networks for efficient integer-arithmetic-only inference. In Conference on Computer
Vision and Pattern Recognition (CVPR), 2018. URL 
https://arxiv
https://arxiv.org/abs/1712.05877
. org/abs/1712. 05877.
Kudari, V. Acled information extraction dataset. Hugging Face, 2022. URL 
https:
https://huggingface.co/datasets/vinaykudari/acled-information-extraction
 //huggingface. 
co/datasets/vinaykudari/
https://huggingface.co/datasets/vinaykudari/acled-information-extraction
 
acled-information-extraction
https://huggingface.co/datasets/vinaykudari/acled-information-extraction
. Dataset posted on Hugging Face.
Lester, B., Al-Rfou, R., and Constant, N. The power of scale for parameter-efficient prompt tuning. arXiv preprint arXiv:2104.08691, 2021.
Li, H., Kadav, A., Durdanovic, I., Samet, H., and Graf, H. P. Pruning filters for efficient convnets. In International Conference on Learning Representations, 2017. URL 
https://openreview
https://openreview.net/forum?id=rJqFGTslg
. net/ 
forum?id=rJqFGTslg
https://openreview.net/forum?id=rJqFGTslg
.
Li, X. and Roth, D. Learning question classifiers. In COLING 2002: The 19th International Conference on Computational Linguistics, 2002. URL 
https://
https://www.aclweb.org/anthology/C02-1150
 www. aclweb. 
org/anthology/C02-1150
https://www.aclweb.org/anthology/C02-1150
.
Li, X., Tramer, F., Liang, P., and Hashimoto, T. Large lan- guage models can be strong differentially private learners. In International Conference on Learning Representations, 2022. URL 
https://openreview
https://openreview.net/forum?id=bVuP3ltATMz
. net/ 
forum?id=bVuP3ltATMz
https://openreview.net/forum?id=bVuP3ltATMz
.
Li, X. L. and Liang, P. Prefix-tuning: Optimizing continu- ous prompts for generation. In Proceedings of the 59th Annual Meeting of the Association for Computational Linguistics and the 11th International Joint Conference on Natural Language Processing (Volume 1: Long Papers), pp. 4582–4597, 2021.
Liu, H., Tam, D., Muqeeth, M., Mohta, J., Huang, T., Bansal, M., and Raffel, C. A. Few-shot parameter-efficient fine-tuning is better and cheaper than in-context learning. Advances in Neural Information Processing Systems, 35: 1950–1965, 2022.
Liu, J., Cyphers, S., Pasupat, P., Mcgraw, I., and Glass, J. A conversational movie search system based on conditional random fields. 13th Annual Conference of the International Speech Communication Association 2012, INTERSPEECH 2012, 3, 01 2012.
Liu, Y., Ott, M., Goyal, N., Du, J., Joshi, M., Chen, D., Levy, O., Lewis, M., Zettlemoyer, L., and Stoyanov, V. Roberta: A robustly optimized BERT pretraining approach. CoRR, abs/1907.11692, 2019. URL 
http://arxiv
http://arxiv.org/abs/1907.11692
. org/ 
abs/1907
http://arxiv.org/abs/1907.11692
. 11692.
Maas, A. L., Daly, R. E., Pham, P. T., Huang, D., Ng, A. Y., and Potts, C. Learning word vectors for sentiment analysis. In Proceedings of the 49th Annual Meeting of
the Association for Computational Linguistics: Human Language Technologies, pp. 142–150, Portland, Oregon, USA, June 2011. Association for Computational Linguistics. URL http://www. aclweb. 
org/anthology/
http://www.aclweb.org/anthology/P11-1015
 
P11-1015
http://www.aclweb.org/anthology/P11-1015
.
Okite. news-data. Hugging Face, 2022. Dataset posted on Hugging Face.
OpenAI. Gpt-4 technical report, 2023.
Oymak, S., Rawat, A. S., Soltanolkotabi, M., and Thram- poulidis, C. On the role of attention in prompt-tuning. In International Conference on Machine Learning, pp. 26724–26768. PMLR, 2023.
Philippy, F., Guo, S., Haddadan, S., Lothritz, C., Klein, J., and F. Bissyand´e, T. Soft prompt tuning for crosslingual transfer: When less is more. In V´azquez, R., Mickus, T., Tiedemann, J., Vuli´c, I., and ¨Ust¨un, A. (eds.), Proceedings of the 1st Workshop on Modular and Open Multilingual NLP (MOOMIN 2024), pp. 7–15, St Julians, Malta, March 2024. Association for Computational Linguistics. URL 
https://aclanthology
https://aclanthology.org/2024.moomin-1.2/
. org/ 2024. 
moomin-1
https://aclanthology.org/2024.moomin-1.2/
. 2/.
Qin, G. and Eisner, J. Learning how to ask: Querying lms with mixtures of soft prompts. In Proceedings of the 2021 Conference of the North American Chapter of the Association for Computational Linguistics: Human Language Technologies (NAACL-HLT), 2021.
Radford, A., Narasimhan, K., Salimans, T., Sutskever, I., et al. Improving language understanding by generative pre-training. 2018.
Radford, A., Wu, J., Child, R., Luan, D., Amodei, D., and Sutskever, I. Language models are unsupervised multitask learners. 2019.
Rakotonirina, N. C., Dess`ı, R., Petroni, F., Riedel, S., and Baroni, M. Can discrete information extraction prompts generalize across language models? In ICLR 2023. Proceedings of the 11th International Conference on Learning Representations (ICLR); 2023 Mai 1-5; Kigali, Rwanda. International Conference on Learning Representations (ICLR), 2023.
Rosenthal, S., Farra, N., and Nakov, P. Semeval-2017 task 4: Sentiment analysis in twitter. In Proceedings of the 11th international workshop on semantic evaluation (SemEval-2017), pp. 502–518, 2017.
Sanh, V., Debut, L., Chaumond, J., and Wolf, T. Distilbert, a distilled version of bert: smaller, faster, cheaper and lighter. ArXiv, abs/1910.01108, 2019.
Schick, T. and Sch ¨utze, H. Few-shot text generation with pattern-exploiting training. arXiv preprint arXiv:2012.11926, 2020.
Schick, T. and Sch ¨utze, H. Exploiting cloze-questions for few-shot text classification and natural language inference. In Proceedings of the 16th Conference of the European Chapter of the Association for Computational Linguistics: Main Volume, pp. 255–269, 2021a.
Schick, T. and Sch ¨utze, H. It's not just size that matters: Small language models are also few-shot learners. In Proceedings of the 2021 Conference of the North American Chapter of the Association for Computational Linguistics: Human Language Technologies, pp. 2339–2352, 2021b.
Shi, W., Ajith, A., Xia, M., Huang, Y., Liu, D., Blevins, T., Chen, D., and Zettlemoyer, L. Detecting pretraining data from large language models, 2023.
Shin, T., Razeghi, Y., Logan IV, R. L., Wallace, E., and Singh, S. Autoprompt: Eliciting knowledge from language models with automatically generated prompts. In Proceedings of the 2020 Conference on Empirical Methods in Natural Language Processing (EMNLP). Association for Computational Linguistics, 2020.
Shokri, R., Stronati, M., Song, C., and Shmatikov, V. Mem- bership inference attacks against machine learning models. In 2017 IEEE symposium on security and privacy (SP), pp. 3–18. IEEE, 2017.
Sreenivas, S. T., Muralidharan, S., Joshi, R., Chochowski, M., Patwary, M., Shoeybi, M., Catanzaro, B., Kautz, J., and Molchanov, P. Llm pruning and distillation in practice: The minitron approach, 2024. URL 
https:
https://arxiv.org/abs/2408.11796
 //arxiv. 
org/abs/2408
https://arxiv.org/abs/2408.11796
. 11796.
Su, Y., Wang, X., Qin, Y., Chan, C.-M., Lin, Y., Wang, H., Wen, K., Liu, Z., Li, P., Li, J., et al. On transferability of prompt tuning for natural language processing. In Proceedings of the 2022 Conference of the North American Chapter of the Association for Computational Linguistics: Human Language Technologies, pp. 3949–3969, 2022.
Tang, X., Shin, R., Inan, H. A., Manoel, A., Mireshghallah, F., Lin, Z., Gopi, S., Kulkarni, J., and Sim, R. Privacypreserving in-context learning with differentially private few-shot generation. In The Twelfth International Conference on Learning Representations, 2024. URL 
https:
https://openreview.net/forum?id=oZtt0pRnOl
 //openreview. 
net/forum?id=oZtt0pRnOl
https://openreview.net/forum?id=oZtt0pRnOl
.
Touvron, H., Martin, L., Stone, K. R., Albert, P., Almahairi, A., Babaei, Y., Bashlykov, N., Batra, S., Bhargava, P., Bhosale, S., Bikel, D. M., Blecher, L., Ferrer, C. C., Chen, M., Cucurull, G., Esiobu, D., Fernandes, J., Fu, J., Fu, W., Fuller, B., Gao, C., Goswami, V., Goyal,
N., Hartshorn, A. S., Hosseini, S., Hou, R., Inan, H., Kardas, M., Kerkez, V., Khabsa, M., Kloumann, I. M., Korenev, A. V., Koura, P. S., Lachaux, M.-A., Lavril, T., Lee, J., Liskovich, D., Lu, Y., Mao, Y., Martinet, X., Mihaylov, T., Mishra, P., Molybog, I., Nie, Y., Poulton, A., Reizenstein, J., Rungta, R., Saladi, K., Schelten, A., Silva, R., Smith, E. M., Subramanian, R., Tan, X., Tang, B., Taylor, R., Williams, A., Kuan, J. X., Xu, P., Yan, Z., Zarov, I., Zhang, Y., Fan, A., Kambadur, M., Narang, S., Rodriguez, A., Stojnic, R., Edunov, S., and Scialom, T. Llama 2: Open foundation and fine-tuned chat models. ArXiv, abs/2307.09288, 2023. URL https://api. 
semanticscholar
https://api.semanticscholar.org/CorpusID:259950998
. org/ 
CorpusID:259950998
https://api.semanticscholar.org/CorpusID:259950998
.
Varshney, T. and Surla, A. An introduction to large lan- guage models: Prompt engineering and p-tuning, 2023. URL 
https://developer
https://developer.nvidia.com/blog/an-introduction-to-large-language-models-prompt-engineering-and-p-tuning
. nvidia. com/blog/ 
an-introduction-to-large-language-
https://developer.nvidia.com/blog/an-introduction-to-large-language-models-prompt-engineering-and-p-tuning
 
models-prompt-engineering-and-p-
https://developer.nvidia.com/blog/an-introduction-to-large-language-models-prompt-engineering-and-p-tuning
 
tuning
https://developer.nvidia.com/blog/an-introduction-to-large-language-models-prompt-engineering-and-p-tuning
.
Vu, T., Lester, B., Constant, N., Al-Rfou, R., and Cer, D. Spot: Better frozen model adaptation through soft prompt transfer. In Proceedings of the 60th Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers), pp. 5039–5059, 2022.
Wang, A., Singh, A., Michael, J., Hill, F., Levy, O., and Bowman, S. R. GLUE: A multi-task benchmark and analysis platform for natural language understanding. 2019. In the Proceedings of ICLR.
Wang, L., Xu, S., Xu, R., Wang, X., and Zhu, Q. Non-transferable learning: A new approach for model ownership verification and applicability authorization. In International Conference on Learning Representations, 2022. URL 
https://openreview
https://openreview.net/forum?id=tYRrOdSnVUy
. net/ 
forum?id=tYRrOdSnVUy
https://openreview.net/forum?id=tYRrOdSnVUy
.
Wang, X., Rachwan, J., G¨unnemann, S., and Charpentier, B. Structurally prune anything: Any architecture, any framework, any time, 2024. URL 
https:
https://arxiv.org/abs/2403.18955
 //arxiv. 
org/abs/2403
https://arxiv.org/abs/2403.18955
. 18955.
Wang, Y., Wang, J., and Zhang, X. Parameter-efficient on- line knowledge distillation for pretrained language models. Expert Systems with Applications, 265:126040, 2025.
Wen, Y., Jain, N., Kirchenbauer, J., Goldblum, M., Geiping, J., and Goldstein, T. Hard prompts made easy: Gradient-based discrete optimization for prompt tuning and discovery. ArXiv, abs/2302.03668, 2023. URL https://api. 
semanticscholar
https://api.semanticscholar.org/CorpusID:256627601
. org/ 
CorpusID:256627601
https://api.semanticscholar.org/CorpusID:256627601
.
Wiebe, J., Wilson, T., and Cardie, C. Annotating expres- sions of opinions and emotions in language. Language Resources and Evaluation, 39(2–3):165–210, 2005.
Wu, T., Panda, A., Wang, J. T., and Mittal, P. Privacy- preserving in-context learning for large language models. In The Twelfth International Conference on Learning Representations, 2024. URL 
https://
https://openreview.net/forum?id=x4OPJ7lHVU
 openreview. 
net/forum?id=x4OPJ7lHVU
https://openreview.net/forum?id=x4OPJ7lHVU
.
Wu, Z., Wu, Y., and Mou, L. Zero-shot continuous prompt transfer: Generalizing task semantics across language models. In The Twelfth International Conference on Learning Representations, 2023.
Xiao, G., Lin, J., and Han, S. Offsite-tuning: Transfer learn- ing without full model. arXiv preprint arXiv:2302.04870, 2023.
Zhang, X., Zhao, J. J., and LeCun, Y. Character-level convo- lutional networks for text classification. In NIPS, 2015.
Zhong, Q., Ding, L., Liu, J., Du, B., and Tao, D. Panda: Prompt transfer meets knowledge distillation for efficient model adaptation. IEEE Transactions on Knowledge and Data Engineering, 2024.
Zhong, Z., Friedman, D., and Chen, D. Factual probing is [mask]: Learning vs. learning to recall. In Proceedings of the 2021 Conference of the North American Chapter of the Association for Computational Linguistics: Human Language Technologies, pp. 5017–5033, 2021.
Zhu, Y., Kiros, R., Zemel, R., Salakhutdinov, R., Urta- sun, R., Torralba, A., and Fidler, S. Aligning books and movies: Towards story-like visual explanations by watching movies and reading books. In The IEEE International Conference on Computer Vision (ICCV), December 2015.
Bytez.com
https://bytez.com/
 - Designed for Accessibility and to further Open Science Send feedback
0cAFcWeA7s2lqJQJfDn0Za8IYDQCmGoxPqKoX2womQ5-FXEajg3i3nHs-2t6w2dK-ok2hbvhNkajLZ6JiuGZ7yVfg7JoAiLornrgv7_juk20vZgdSY13-T__ducbr0gt_Oo3ddywKAagg41TluLkKeWVqFq1TIK9hUXWUv2hMrSGfxxT05hRuFkjcYMrjv8uK_19fZbPMGqWO3hzcxBu7E3WuI9JLeOjshrz4JlBWDAEbkDIjjy4DX-EJ4KLxq56kD2GjWQWvgh04ZFS4CmrBnJ53eAvMh8_t2P9CZ6l3uts-RSul3fzbd7ac2AozkIikhji6QNxYEBY03CXJa4HX6g6NswMKAAg3-MH3zcb--N7JUix4mV7v-9soYP-IkL-crrsuPLZvKf1lMQb-2_69ccNRyYjYbuingbeYFNwP1WBU-wiwB_TrbtOm7D-cGHGNR282AFE-2WuLum-CcrC0CBPi7RVzFae27fZ97PXrRfc5kvDRTRLyVSgLz8GpZ14VJCalFfCB5wW0bmhgI8-oxM8iSvEHWvJ02JBfxqn8gRC53cBny57XZJ7Dn_KEgxwF9EXR7JpI3Nc26rwH_rJUiRqvT2EOzkGmpYisF0a22S7yDvoPaEKkRbDkIcfOLORsaZV5AJ-qcj2EFKRmaER5GjWYS-jVhsn5h2S8yU_aKOWpXFggGrGeSTCZS43Rv8GwjZVID8noBrADM4QkaA6L2WOM7QiDuMEds3JRmDsaiP0ZJ7g9IZPJ_qxbiLWPl33yOrLxUqzOgii8jXUIk_1o5UhAI_qmI42YOeO1c0SnX587AzTKS3d_Uwb6FTFgFLvZV1vIDWgCtZds_lZQqkOb0KEKjBLv_Hhdx8bRu7hwROmoJ5lk0JM5aXm97GXeswpI4qcWi3cK4nO8lUwP88DJ-aBtWJM4hEpDYTuIBvu5bn39eXTsgd9NxOuKdesWQl8Bbgws0LGRbpmyu6QsTINbHt6e56YiokOHd2PrL39vzN7S69qxHi5qH6WJ8Ka9V5ZgKPgPaqelSeOVnfzw8vxuity5wMJS6W5Tjntp55lXtpv7I5EQATs9CYzRSALDbvLXg9pGUyspF4Zff_-2ZLLchAx98jWAwIQp4l8a04K-3Y8v1E8xKHnnwOUWRSA1d4V8jfDFBTDW3oeCO3AO0oBo_UU-nGEAH2r8Innxw2yc_hBe_jDpjskeUBSXvcayFoSoMSBEh4VMKMeYR3RwDbeIaqCJwdRHSPJC-2CsLDS9__X8maBguIbIErshAxInYAsHxlSiTE5PS49ei6BIS7cbjGYTJnjYkiBrOHzKmC_s-iMAxKLqz0ZFKxR1b2NGDDqL4_BBOxwyuWoqN-G46SZFhRtEk9U4rLVfwZiE2GXKeFhktwuc58UE4O6-kO3ZAtdQVdzmVxEeOeHXMttQw7t2qj0AF4vY_PAwrmk1LTg0bMHZqNcNXXnKlyNpa-qX-pojRr8Cgai0yXIzI2iGrueCFa1k4TLbTRBOomwmGDjv9DploMbXTmop5KDUzYAS56ikKa26EXWQgOrsDYcmZb3HQGh1h97gErg3fRD9MJTV3obumxOuAickq_6hmnNQezSvJQlX3fam9l4vtYrduLkmUFVC_JyNmQIslNl35e191eUTc6_E6QeRRA70soQ_GGy0hc0a7tF9tMl8xgeWuVI7n7CK_FPPzPrjiv33xQDjQF9F5qNUY6q475Icom7IrLamF-ZMIdj8pdwYtYd6ocX_WUl45v0foR435QxN5BHJAOvot2M4HDYddg8G8943QV8VzGbU1IVh8uJ-Pc_t3rBC16jEsdbxK6CVUa37ZD8aVbQs1sr1YK1nkPPM_5dvsveCrJ8VQh4CbJTySXdl2NgJW4O4h9fN1mp__eSFV9f03rVOO9hLgAPg7HFWZdAUJErBi6ggJ3wiCBDQxHe_4M8WjQPE800PzhRec7BcgnKiA9GoS4TjeIKW3OKq1mDgKu8DvYFOLyeu-epSp1YJKduh9IYxLAwXOTmB3ulsLwBdUR2ysX_lMP38PnDY3S6Acoas_i07ACZuMOj53X3hP54LCMGiNeMD6kuzzVeRKMpLJdf14WM68_H2JxxNT2EoUBTsFHGaDzcNVX8S5DHiJu89pQh951edsbBvlgjdMwwoS9Hl7o_tBUzJe1JUP6dMivDUBRYwBYt-lzWw7
 
Successful Page Load
ICML uses cookies for essential functions only. We do not sell your personal information. 
Our Privacy Policy »
https://icml.cc/public/PrivacyPolicy
Accept
The ICML Logo above may be used on presentations. Right-click and choose download. It is a vector graphic and may be used at any scale.
Useful links
Contact
1269 Law Street, San Diego CA 92109
Email
https://icml.cc/Help/Contact