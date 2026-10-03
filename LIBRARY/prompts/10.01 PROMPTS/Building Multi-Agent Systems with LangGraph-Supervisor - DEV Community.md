# Building Multi-Agent Systems with LangGraph-Supervisor - DEV Community

Source URL: https://dev.to/sreeni5018/building-multi-agent-systems-with-langgraph-supervisor-138i

Building Multi-Agent Systems with LangGraph-Supervisor - DEV Community
Skip to content
https://dev.to/sreeni5018/building-multi-agent-systems-with-langgraph-supervisor-138i#main-content
Powered by Algolia
https://www.algolia.com/developers/?utm_source=devto&utm_medium=referral
Log in
https://dev.to/enter?signup_subforem=1
 
Create account
https://dev.to/enter?signup_subforem=1&state=new-user
DEV Community
27 Add reaction
 
27 Like
 
 
0 Unicorn
 
 
0 Exploding Head
 
 
0 Raised Hands
 
 
0 Fire
8 Jump to Comments 4 Save Boost
Copy link
Copied to Clipboard
Share to X
https://twitter.com/intent/tweet?text=%22Building%20Multi-Agent%20Systems%20with%20LangGraph-Supervisor%22%20by%20Seenivasa%20Ramadurai%20%23DEVCommunity%20https%3A%2F%2Fdev.to%2Fsreeni5018%2Fbuilding-multi-agent-systems-with-langgraph-supervisor-138i
 
Share to LinkedIn
https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fdev.to%2Fsreeni5018%2Fbuilding-multi-agent-systems-with-langgraph-supervisor-138i&title=Building%20Multi-Agent%20Systems%20with%20LangGraph-Supervisor&summary=In%20today%27s%20rapidly%20evolving%20AI%20landscape%2C%20creating%20sophisticated%20agent%20systems%20that%20collaborate...&source=DEV%20Community
 
Share to Facebook
https://www.facebook.com/sharer.php?u=https%3A%2F%2Fdev.to%2Fsreeni5018%2Fbuilding-multi-agent-systems-with-langgraph-supervisor-138i
 
Share to Mastodon
https://s2f.kytta.dev/?text=https%3A%2F%2Fdev.to%2Fsreeni5018%2Fbuilding-multi-agent-systems-with-langgraph-supervisor-138i
Report Abuse
https://dev.to/report-abuse
Seenivasa Ramadurai
https://dev.to/sreeni5018
Posted on Mar 8, 2025
 
27
 
 
 
 
Building Multi-Agent Systems with LangGraph-Supervisor
In today's rapidly evolving AI landscape, creating sophisticated agent systems that collaborate effectively remains a significant challenge. The LangChain team has addressed this need with the release of two powerful new Python libraries: 
langgraph-supervisor
 and 
langgraph-swarm
. This post explores how langgraph-supervisor enables developers to build complex multi-agent systems with hierarchical organization.
What is LangGraph-Supervisor?
LangGraph-Supervisor is a specialized Python library designed to simplify the creation of hierarchical multi-agent systems using LangGraph. But what does "hierarchical" mean in this context?
In a hierarchical multi-agent system, specialized agents operate under the coordination of a central supervisor agent. This supervisor controls all communication flow and task delegation, making intelligent decisions about which agent to invoke based on the current context and requirements. This approach brings organization and efficiency to complex multi-agent interactions.
Key Features
The library comes equipped with several powerful features that make building multi-agent systems more accessible:
🤖 Supervisor Agent Creation
At the heart of the library is the ability to create a supervisor agent that can orchestrate multiple specialized agents. This supervisor becomes the central intelligence that decides which agent should handle specific parts of a task.
🛠 Tool-Based Agent Handoff
Communication between agents is managed through a tool-based handoff mechanism. This provides a structured way for agents to exchange information and transfer control, ensuring smooth collaboration between different specialized components.
📝 Flexible Message History Management
The library includes sophisticated conversation control through flexible message history management. This allows for maintaining context across different agent interactions, creating a cohesive experience.
Built on top of LangGraph, the library inherits powerful capabilities like streaming, short-term and long-term memory management, and human-in-the-loop functionality, making it suitable for building production-grade agent applications.
Getting Started with LangGraph-Supervisor
We are building a Multi-Agent Application consisting of three agents: a 
General Q&A agent, a Resume Parser agent, and a Google Search agent
. These agents are managed by a Supervisor agent, which analyzes the user's prompt or question and delegates the task to the appropriate agent. 
Installation is straightforward:
**langchain-openai** – This package provides seamless integration between LangChain and OpenAI’s models (e.g., GPT-4, GPT-3.5). It allows developers to interact with OpenAI’s APIs for tasks such as text generation, embeddings, and chat-based conversations within LangChain applications.

**python-dotenv** – This package helps manage environment variables by loading them from a .env file. It’s useful for securely storing API keys, database credentials, and other configuration settings without hardcoding them into the application.

pip install langgraph-supervisor langchain-openai python-dotenv


Building a Multi-Agent System Example
Let's look at a practical example: a multi-agent system for resume parsing, web search, and question answering.
This system can:
Parse resumes (PDF/DOCX)
Perform Google searches
Answer general questions
The system uses a supervisor agent to delegate tasks to specialized agents based on user input.
Requirements
Azure OpenAI API key
Python packages: langchain, langgraph, PyPDF2, python-docx, googlesearch-python, langgraph-supervisor
Implementation
from langchain_openai import AzureChatOpenAI
import os
from dotenv import load_dotenv  
from langgraph.prebuilt import create_react_agent
from PyPDF2 import PdfReader
from docx import Document
from googlesearch import search
from langgraph_supervisor import create_supervisor
from langgraph.checkpoint.memory import InMemorySaver

load_dotenv()

def extract_text_from_pdf(pdf_path: str) -> str:
    reader = PdfReader(pdf_path)
    text = ""
    for page in reader.pages:
        text += page.extract_text() or ""
    return text

def extract_text_from_docx(docx_path: str) -> str:
    doc = Document(docx_path)
    return "\n".join([paragraph.text for paragraph in doc.paragraphs])

# Initialize Azure OpenAI model
model = AzureChatOpenAI(
    deployment_name="gpt-4o-mini",
    model="gpt-4o-mini",
    temperature=0,
    openai_api_version="2023-05-15",
    openai_api_key=os.getenv("AZURE_OPENAI_API_KEY"),
)

def resume_parser(resume_file_path: str):
    if resume_file_path.endswith(".pdf"):
        return extract_text_from_pdf(resume_file_path)
    elif resume_file_path.endswith(".docx"):
        return extract_text_from_docx(resume_file_path)
    else:
        raise ValueError("Unsupported file type")

# Create resume parser agent
resume_parser_agent = create_react_agent(
    model,
    tools=[resume_parser],
    name="resume_parser_agent",
    prompt=(
        "You are a resume parser expert. "
        "Always use the one tool resume_parser to parse the resume."
    )
)

def general_question_answer(question: str):
    response = model.invoke(question)
    return response.content

# Create general Q&A agent
general_question_answer_agent = create_react_agent(
    model,
    tools=[general_question_answer],
    name="general_question_answer_agent",
    prompt=(
        "You are a general question answer expert. "
        "Always use the one tool general_question_answer to answer the question."
    )
)

def google_search(query: str):
    return list(search(query, num_results=5))

# Create Google search agent
google_search_agent = create_react_agent(
    model,
    tools=[google_search],
    name="google_search_agent",
    prompt=(
        "You are a Google search expert. "
        "Always use the one tool google_search to search the internet."
    )
)  

# Create supervisor workflow
workflow = create_supervisor(
    [resume_parser_agent, google_search_agent, general_question_answer_agent],
    model=model,
    prompt=(
        "You are a smart team supervisor managing multiple agents. Analyze the user input and delegate to the appropriate agent:\n"
        "- If the input contains a file path or mentions 'resume', use resume_parser_agent.\n"
        "- If the input contains 'search' or asks to find something online, use google_search_agent.\n"
        "- For all other questions or queries, use general_question_answer_agent.\n"
        "Choose the most appropriate agent based on the user's input."
    ),
    output_mode="last_message"
)

# Initialize checkpointer
checkpointer = InMemorySaver()
app = workflow.compile(checkpointer=checkpointer)
config = {"configurable": {"thread_id": "1"}}

# Main interaction loop
while True:
    user_input = input("\nEnter your query (or 'exit' to quit): ")

    if user_input.lower() == 'exit':
        print("Goodbye!")
        break

    result = app.invoke({
        "messages": [{
            "role": "user",
            "content": user_input
        }]
    }, config=config)

    for m in result["messages"]:
        print(m.content)


Benefits of Using LangGraph-Supervisor
This implementation showcases how langgraph-supervisor can efficiently manage multi-agent collaboration, ensuring:
Seamless task delegation
 - The supervisor intelligently routes tasks to the most appropriate specialized agent
Improved coordination
 - Communication between agents is structured and efficient
Streamlined execution
 - The system handles complex workflows with minimal overhead
By leveraging configurable output modes such as 
last_message
 and 
full_history
 , it provides flexibility in handling responses based on application needs, making it easier to build complex AI-driven applications.
Whether you're building a customer service automation, a research assistant, or any complex AI system requiring multiple specialized capabilities, LangGraph-Supervisor provides a powerful foundation for creating well-organized, efficient multi-agent systems.
Testing the Agent and Output (with 
output_mode="last_message"
)
 
 
After a few conversations, I'm now asking: Do you remember my name? Since we've added an in-memory checkpointer (short-term), it should be able to recall my name.
 
Asking AI Agent to search my name in google
Asking AI Agent to parse my resume
 
 
Coming Soon: Part II - Exploring LangGraph-Swarm
In Part II of this blog series, we will delve into the 
langgraph-swarm Python library
 and explore the key differences between 
langgraph-supervisor
 and 
langgraph-swarm
. when comes to building multi AI Agents application.
**Thanks
Sreeni Ramadorai**
profile MongoDB
https://dev.to/mongodb
Promoted
What's a billboard?
https://dev.to/billboards
Manage preferences
https://dev.to/settings/customization#sponsors
Report billboard
https://dev.to/report-abuse?billboard=263163
Build fast on MongoDB Atlas without the fear of outgrowing.
https://www.mongodb.com/cloud/atlas/lp/try3?utm_campaign=display_dev.to-broad_pl_flighted_atlas_tryatlaslp_prosp_gic-null_ww-all_dev_dv-all_eng_leadgen&utm_source=dev.to&utm_medium=display&utm_content=prototype&bb=263163
Don't let your database dictate your speed. With MongoDB Atlas, the same document model you use for your MVP handles global scale across AWS, Azure, and Google Cloud. Start free and stay fast as you grow.
Start Free
https://www.mongodb.com/cloud/atlas/lp/try3?utm_campaign=display_dev.to-broad_pl_flighted_atlas_tryatlaslp_prosp_gic-null_ww-all_dev_dv-all_eng_leadgen&utm_source=dev.to&utm_medium=display&utm_content=prototype&bb=263163
Read More
Top comments (8)
Subscribe
 
Personal Trusted User
Create template
https://dev.to/settings/response-templates
Templates let you quickly answer FAQs or store snippets for re-use.
Submit Preview 
Dismiss
https://dev.to/404.html
Satya prakash
https://dev.to/satya_prakash_dd215e3c638
Satya prakash
Satya prakash
https://dev.to/satya_prakash_dd215e3c638
Follow
Joined Apr 25, 2025
•
Apr 25 '25
https://dev.to/sreeni5018/building-multi-agent-systems-with-langgraph-supervisor-138i#comment-2n9mp
Copy link
https://dev.to/sreeni5018/building-multi-agent-systems-with-langgraph-supervisor-138i#comment-2n9mp
Hide
Report abuse
https://dev.to/report-abuse?url=https://dev.to/satya_prakash_dd215e3c638/comment/2n9mp
Hi, we're seeing a strange issue during routing from supervisor to agents. There are lot of messages like "Transferred to ..." in the message history which we suspect are confusing the supervisor. Is there a way to trim these off so routing decisions are taken without considering these? Basically cleanup all old routing messages
1 like Like Reply
Seenivasa Ramadurai
https://dev.to/sreeni5018
Seenivasa Ramadurai
Seenivasa Ramadurai
https://dev.to/sreeni5018
Follow
AI Solution Architect with 20+ yrs across Azure, AWS, GCP, AI/ML, LLMs, GenAI, Agentic AI, MCP, A2A, NLP, RAG, LangChain, LangGraph, Vector DBs, MS-Foundry, Bedrock AgentCore, Microsvc, REST, gRPC.
Location Dallas. Texas
Education M.Sc Computer Science
Joined Jul 23, 2024
•
Apr 25 '25
https://dev.to/sreeni5018/building-multi-agent-systems-with-langgraph-supervisor-138i#comment-2na1p
Copy link
https://dev.to/sreeni5018/building-multi-agent-systems-with-langgraph-supervisor-138i#comment-2na1p
Hide
Report abuse
https://dev.to/report-abuse?url=https://dev.to/sreeni5018/comment/2na1p
Hi Satya,
Hope you're returning only the last_message from the agent. Instead of relying on supervisor delegates or routing to other agents, you might want to try using MCP Servers to create your tools and add them to a LangGraph BigTool. That way, a single agent can handle all the decision-making.
We're using MCP Servers along with a Supervisor and Tool Agents. Based on the prompt, the Supervisor delegates to the right agent—and it's been working well for us without any issues. Try improving your supervisor prompt into this setup and see how it goes.
Let me know how it works out!
Thanks
Sreeni Ramadorai
1 like Like Reply
Ernest
https://dev.to/icecoldwatta
Ernest
Ernest
https://dev.to/icecoldwatta
Follow
Joined Apr 14, 2025
•
Apr 14 '25
https://dev.to/sreeni5018/building-multi-agent-systems-with-langgraph-supervisor-138i#comment-2n368
Copy link
https://dev.to/sreeni5018/building-multi-agent-systems-with-langgraph-supervisor-138i#comment-2n368
Hide
Report abuse
https://dev.to/report-abuse?url=https://dev.to/icecoldwatta/comment/2n368
@sreeni5018
https://dev.to/sreeni5018
This was super helpful... thank you! I'm working on a use case where I perform intent detection from natural language queries over business analytics data. For example, if a user asks, 
"Show me omni customer sales data for Q1 2025,"
 the intent detection agent uses an LLM to classify the intent and assign a confidence score. Based on that, the supervisor routes the request to downstream agents like 
sql_generation
 .
I'm fronting this through a Streamlit app, and it's working reasonably well so far.
Do you happen to have an example where you're using an interrupt — either due to missing information or to prompt for additional context before continuing?
1 like Like Reply
Seenivasa Ramadurai
https://dev.to/sreeni5018
Seenivasa Ramadurai
Seenivasa Ramadurai
https://dev.to/sreeni5018
Follow
AI Solution Architect with 20+ yrs across Azure, AWS, GCP, AI/ML, LLMs, GenAI, Agentic AI, MCP, A2A, NLP, RAG, LangChain, LangGraph, Vector DBs, MS-Foundry, Bedrock AgentCore, Microsvc, REST, gRPC.
Location Dallas. Texas
Education M.Sc Computer Science
Joined Jul 23, 2024
•
Apr 14 '25
https://dev.to/sreeni5018/building-multi-agent-systems-with-langgraph-supervisor-138i#comment-2n37b
Copy link
https://dev.to/sreeni5018/building-multi-agent-systems-with-langgraph-supervisor-138i#comment-2n37b
Hide
Report abuse
https://dev.to/report-abuse?url=https://dev.to/sreeni5018/comment/2n37b
Thanks, glad it helped! Yes, I have a well-defined delegation prompt in my SupervisorAgent that knows how to route calls to the appropriate downstream agents. I also have an AI_ClassifyAgent that validates the delegation decision, adding an extra layer of confidence before execution.
As for interrupts — yes, I've implemented that as well. For cases where essential info is missing or ambiguous (like "Show me sales data" without a timeframe or region), the agent triggers an interrupt state. This essentially halts the flow and prompts the user for additional context before resuming. I'm managing this via state updates in LangGraph, where the node can loop back to the user prompt step until required fields are filled.
Since you're using Streamlit, you could model this by maintaining a session state and displaying a follow-up question in the UI when an interrupt is triggered. Happy to share a sample workflow if you're interested!
Thanks
Sreeni Ramadorai
2 likes Like Reply
Ernest
https://dev.to/icecoldwatta
Ernest
Ernest
https://dev.to/icecoldwatta
Follow
Joined Apr 14, 2025
•
Apr 14 '25
https://dev.to/sreeni5018/building-multi-agent-systems-with-langgraph-supervisor-138i#comment-2n37c
Copy link
https://dev.to/sreeni5018/building-multi-agent-systems-with-langgraph-supervisor-138i#comment-2n37c
Hide
Report abuse
https://dev.to/report-abuse?url=https://dev.to/icecoldwatta/comment/2n37c
The sample workflow would be really helpful, thanks a lot.
1 like Like Thread
Seenivasa Ramadurai
https://dev.to/sreeni5018
Seenivasa Ramadurai
Seenivasa Ramadurai
https://dev.to/sreeni5018
Follow
AI Solution Architect with 20+ yrs across Azure, AWS, GCP, AI/ML, LLMs, GenAI, Agentic AI, MCP, A2A, NLP, RAG, LangChain, LangGraph, Vector DBs, MS-Foundry, Bedrock AgentCore, Microsvc, REST, gRPC.
Location Dallas. Texas
Education M.Sc Computer Science
Joined Jul 23, 2024
•
Apr 14 '25
https://dev.to/sreeni5018/building-multi-agent-systems-with-langgraph-supervisor-138i#comment-2n37i
Copy link
https://dev.to/sreeni5018/building-multi-agent-systems-with-langgraph-supervisor-138i#comment-2n37i
Hide
Report abuse
https://dev.to/report-abuse?url=https://dev.to/sreeni5018/comment/2n37i
Thank you .
1 like Like Reply
Fenix Compulon
https://dev.to/fenix_compulon_4b27eef64c
Fenix Compulon
Fenix Compulon
https://dev.to/fenix_compulon_4b27eef64c
Follow
Joined Mar 17, 2025
•
Mar 18 '25
https://dev.to/sreeni5018/building-multi-agent-systems-with-langgraph-supervisor-138i#comment-2mekj
Copy link
https://dev.to/sreeni5018/building-multi-agent-systems-with-langgraph-supervisor-138i#comment-2mekj
Hide
Report abuse
https://dev.to/report-abuse?url=https://dev.to/fenix_compulon_4b27eef64c/comment/2mekj
Hello, excellent article. I'm impressed by the level of abstraction and simplification offered by the Supervisor library. Now I see that I don't need to add nodes and their relationships with add_node and add_edge, and the messages HumanMessage, BaseMessage, AIMessage, and SystemMessage are no longer used. And finally, I no longer see ToolNode and Tool....
1 like Like Reply
Seenivasa Ramadurai
https://dev.to/sreeni5018
Seenivasa Ramadurai
Seenivasa Ramadurai
https://dev.to/sreeni5018
Follow
AI Solution Architect with 20+ yrs across Azure, AWS, GCP, AI/ML, LLMs, GenAI, Agentic AI, MCP, A2A, NLP, RAG, LangChain, LangGraph, Vector DBs, MS-Foundry, Bedrock AgentCore, Microsvc, REST, gRPC.
Location Dallas. Texas
Education M.Sc Computer Science
Joined Jul 23, 2024
•
Mar 18 '25
https://dev.to/sreeni5018/building-multi-agent-systems-with-langgraph-supervisor-138i#comment-2mel6
Copy link
https://dev.to/sreeni5018/building-multi-agent-systems-with-langgraph-supervisor-138i#comment-2mel6
Hide
Report abuse
https://dev.to/report-abuse?url=https://dev.to/sreeni5018/comment/2mel6
Yes . Please take a look at the Langgraph swarm agent library. This even eliminates supervisors. I do have blog using this library
1 like Like Reply
Code of Conduct
https://dev.to/code-of-conduct
• 
Report abuse
https://dev.to/report-abuse
Are you sure you want to hide this comment? It will become hidden in your post, but will still be visible via the comment's 
permalink
https://dev.to/sreeni5018/building-multi-agent-systems-with-langgraph-supervisor-138i
.
 
[-] 1
Hide child comments as well
Confirm
For further actions, you may consider blocking this person and/or 
reporting abuse
https://dev.to/report-abuse
profile The DEV Team
https://dev.to/devteam
Promoted
What's a billboard?
https://dev.to/billboards
Manage preferences
https://dev.to/settings/customization#sponsors
Report billboard
https://dev.to/report-abuse?billboard=263657
Dialling Our Agents to 11: My Favourite MCP Servers
https://dev.to/gde/dialling-our-agents-to-11-my-favourite-mcp-servers-3hbm?bb=263657
I'd like to tell you about a few of the MCP servers and agent skills that I use most often. I'll tell you what they do, how I use them, and how to install them.
This first part will cover the MCP servers, and I'll share my favourite agent skills in the second part.
Read more →
https://dev.to/gde/dialling-our-agents-to-11-my-favourite-mcp-servers-3hbm?bb=263657
Seenivasa Ramadurai
https://dev.to/sreeni5018
Follow
AI Solution Architect with 20+ yrs across Azure, AWS, GCP, AI/ML, LLMs, GenAI, Agentic AI, MCP, A2A, NLP, RAG, LangChain, LangGraph, Vector DBs, MS-Foundry, Bedrock AgentCore, Microsvc, REST, gRPC.
Location Dallas. Texas
Education M.Sc Computer Science
Joined Jul 23, 2024
Trending on 
DEV Community
https://dev.to/
Syed Ahmer Shah profile image The Edge Latency Lie: Solving Global Consistency # webdev # programming # productivity # java
https://dev.to/thesiliconarchitect/the-edge-latency-lie-solving-global-consistency-25dp
Mir Shah profile image ORVIX, Open-source Self-Organizing AI Engineering Company # discuss # opensource # showdev # ai
https://dev.to/mirshah12/orvix-open-source-self-organizing-ai-engineering-company-4cd1
𝕋𝕙𝕖 𝕃𝕒𝕫𝕪 𝔾𝕚𝕣𝕝 profile image 🎨Behind the Code: Show Us Your Developer Setup💺🖥 # discuss # programming # beginners
https://dev.to/technogamerz/behind-the-code-show-us-your-developer-setup-2gh9
profile MongoDB
https://dev.to/mongodb
Promoted
What's a billboard?
https://dev.to/billboards
Manage preferences
https://dev.to/settings/customization#sponsors
Report billboard
https://dev.to/report-abuse?billboard=263130
3 reasons why developers scale faster on MongoDB Atlas.
https://www.mongodb.com/cloud/atlas/lp/try3?utm_campaign=display_dev.to-broad_pl_flighted_atlas_tryatlaslp_prosp_gic-null_ww-all_dev_dv-all_eng_leadgen&utm_source=dev.to&utm_medium=display&utm_content=fastcode&bb=263130
A flexible schema, integrated search, and automated global distribution so you can innovate and innovate with speed and agility. Build gen AI apps that run anywhere and scale everywhere.
Start Free
https://www.mongodb.com/cloud/atlas/lp/try3?utm_campaign=display_dev.to-broad_pl_flighted_atlas_tryatlaslp_prosp_gic-null_ww-all_dev_dv-all_eng_leadgen&utm_source=dev.to&utm_medium=display&utm_content=fastcode&bb=263130
DEV Takeovers
What's a billboard?
https://dev.to/billboards
Manage preferences
https://dev.to/settings/customization#sponsors
Report billboard
https://dev.to/report-abuse?billboard=263822
5 Winners, $200 Each: The DEV Weekend Challenge Is Here.
Four tech-specific categories and one overall winner. Build something inspired by passion this weekend for your shot at a prize.
Join Now
https://dev.to/devteam/join-our-dev-weekend-challenge-passion-edition-1000-in-prizes-across-five-winners-submissions-10j5?bb=263822
💎 DEV Diamond Sponsors
Thank you to our Diamond Sponsors for supporting the DEV Community
Google AI is the official AI Model and Platform Partner of DEV
Neon is the official database partner of DEV
Algolia is the official search partner of DEV
DEV Community
https://dev.to/
 — A space to discuss and keep up software development and manage your software career
Home
https://dev.to/
DEV Challenges
https://dev.to/challenges
DEV++
https://dev.to/++
Videos
https://dev.to/videos
DEV Education Tracks
https://dev.to/deved
DEV Help
https://dev.to/help
Advertise on DEV
https://dev.to/advertise
Organization Accounts
https://dev.to/organizations
DEV Showcase
https://dev.to/showcase
About
https://dev.to/about
Contact
https://dev.to/contact
Free Postgres Database
https://dev.to/free-postgres-database-tier
DEV Shop
https://shop.forem.com/
MLH
https://mlh.io/
Code of Conduct
https://dev.to/code-of-conduct
Privacy Policy
https://dev.to/privacy
Terms of Use
https://dev.to/terms
Built on 
Forem
https://www.forem.com/
 — the 
open source
https://dev.to/t/opensource
 software that powers 
DEV
https://dev.to/
 and other inclusive communities.
Made with love and 
Ruby on Rails
https://dev.to/t/rails
. DEV Community © 2016 - 2026.
 
We're a place where coders share, stay up-to-date and grow their careers.
Log in
https://dev.to/enter?signup_subforem=1
 
Create account
https://dev.to/enter?signup_subforem=1&state=new-user