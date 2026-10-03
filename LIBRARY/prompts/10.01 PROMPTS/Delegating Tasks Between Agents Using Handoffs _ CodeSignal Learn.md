# Delegating Tasks Between Agents Using Handoffs | CodeSignal Learn

Source URL: https://codesignal.com/learn/courses/coordinating-openai-agents-workflows-in-python/lessons/delegating-tasks-between-agents-using-handoffs-and-prompting-strategies

Delegating Tasks Between Agents Using Handoffs | CodeSignal Learn
Skip to main content
https://codesignal.com/learn/courses/coordinating-openai-agents-workflows-in-python/lessons/delegating-tasks-between-agents-using-handoffs-and-prompting-strategies#main-content
 

https://codesignal.com/learn/
Log in Start learning
Menu
Log in Start learning
All paths
https://codesignal.com/learn/course-paths?
OpenAI Agents SDK Mastery Journey in Python
https://codesignal.com/learn/paths/openai-agents-sdk-mastery-journey-in-python
Coordinating OpenAI Agents Workflows in Python
Delegating Tasks Between Agents Using Handoffs
 
Video Player is loading.
Play Video
Play Skip Backward Skip Forward
Mute
Current Time 0:00
/
Duration 6:27
Loaded: 100.00%
0:00
Stream Type LIVE
Seek to live, currently behind live LIVE
Remaining Time - 6:27
1x
Playback Rate
3x
2.75x
2.5x
2.25x
2x
1.75x
1.5x
1.25x
1x, selected
0.75x
0.5x
Chapters
Chapters
Descriptions
descriptions off, selected
Captions
captions settings, opens captions settings dialog
captions off, selected
Audio Track
Fullscreen
This is a modal window.
The media could not be loaded, either because the server or network failed or because the format is not supported.
Beginning of dialog window. Escape will cancel and close the window.
Text Color
White
Black
Red
Green
Blue
Yellow
Magenta
Cyan
Opacity
Opaque
Semi-Transparent
Text Background Color
Black
White
Red
Green
Blue
Yellow
Magenta
Cyan
Opacity
Opaque
Semi-Transparent
Transparent
Caption Area Background Color
Black
White
Red
Green
Blue
Yellow
Magenta
Cyan
Opacity
Transparent
Semi-Transparent
Opaque
Font Size
50%
75%
100%
125%
150%
175%
200%
300%
400%
Text Edge Style
None
Raised
Depressed
Uniform
Drop shadow
Font Family
Proportional Sans-Serif
Monospace Sans-Serif
Proportional Serif
Monospace Serif
Casual
Script
Small Caps
Reset Done
Close Modal Dialog
End of dialog window.
Introduction And Context
Welcome back! In the last lesson, you learned how to chain multiple 
OpenAI agents
 together, passing the output and conversation history from one agent to the next. This approach allowed you to break down complex tasks into smaller, manageable steps, with each agent playing a specific role. You saw how to use the 
to_input_list()
 method to transfer context and how to build collaborative workflows by running agents in sequence.
In this unit, you will take the next step in coordinating agent workflows: delegating tasks dynamically using 
handoffs
. Instead of always following a fixed sequence, you will learn how to set up agents that can route requests to the most appropriate specialist agent based on the user's needs. This lesson will show you how to configure the 
handoffs
 parameter and use prompting strategies to guide agent behavior, making your multi-agent systems more flexible and intelligent.
Understanding Handoffs
In the 
OpenAI Agents SDK
, a 
handoff
 is a way for one agent to delegate a task to another agent. Think of it as a transfer of responsibility: when an agent receives a request that is better handled by a specialist, it can "hand off" the task to that specialist agent. This is especially useful in situations where different agents have different areas of expertise.
For example, imagine a travel assistant system. You might have one agent that is great at recommending destinations and another that specializes in travel safety. With handoffs, you can create a triage agent that listens to the user's request and decides which specialist should handle it. This makes your system more modular, easier to maintain, and able to provide higher-quality responses by letting each agent focus on what it does best.
Handoffs are not just about splitting up work — they also help create a seamless user experience. The user interacts with a single system, but behind the scenes, their request is routed to the right expert. This delegation happens automatically, making your AI workflows smarter and more adaptable.
Defining Specialist Agents
Before setting up delegation, start by defining your specialist agents. For example, you might have one agent focused on travel recommendations and another dedicated to travel safety advice:
Python
Copy to clipboard
from agents import Agent

# Define the travel genie agent
travel_genie = Agent(
    name="Travel Genie",
    instructions=(
        "You are Travel Genie, a friendly and knowledgeable travel assistant. "
        "Recommend exciting destinations and offer helpful travel tips."
    ),
    model="gpt-4.1"
)

# Define the travel safety expert agent
safety_expert = Agent(
    name="Travel Safety Expert",
    instructions=(
        "You are a travel safety expert. "
        "Provide safety advice and important precautions for travelers."
    ),
    model="gpt-4.1"
)


Each specialist agent has clear instructions that focus on its area of expertise. This ensures that when a request is handed off, the agent can provide the most relevant and high-quality response.
Configuring the Triage Agent with Handoffs
With your specialist agents defined, you can now create a triage agent responsible for delegating incoming requests. The triage agent uses the 
handoffs
 parameter to specify which agents it can delegate to:
Python
Copy to clipboard
# Define the triage agent that delegates tasks
triage = Agent(
    name="Travel Triage",
    instructions=(
        "You are a travel triage agent. Given a request:\n"
        "- For destination or itinerary questions, transfer to Travel Genie\n"
        "- For safety or health concerns, transfer to the Travel Safety Expert"
    ),
    handoffs=[
        travel_genie,
        safety_expert
    ],
    model="gpt-4.1"
)


The triage agent's instructions clearly describe when to delegate to each specialist. When a user submits a request, the triage agent analyzes it and automatically routes it to the appropriate expert. This modular approach keeps your workflow organized and makes it easy to add or update specialist agents as your system grows.
When a handoff happens, the original agent (in this case, the triage agent) does 
not
 come back in the loop. The specialist agent that receives the handoff takes over and responds to the user. The full conversation history is passed along, so the new agent has all the necessary context and the user does not need to repeat themselves.
How Handoffs Are Represented Internally
You might be wondering how the SDK actually makes it possible for one agent to delegate a task to another. Under the hood, when you specify the 
handoffs
 parameter, the SDK represents each handoff as a special kind of "tool" that the language model can use to transfer control to another agent.
You don't need to worry about the details of how tools work just yet—we'll cover tools in depth in the next course. For now, it's enough to know that for each agent you include in the 
handoffs
 list, the SDK automatically creates a tool with a name like 
transfer_to_<agent_name>
 . The agent's name is converted to lowercase and spaces are replaced with underscores. For example:
If you hand off to an agent named 
Travel Genie
 , the tool will be called 
transfer_to_travel_genie
 .
If you hand off to an agent named 
Travel Safety Expert
 , the tool will be called 
transfer_to_travel_safety_expert
 .
When the triage agent decides to delegate a request, it uses the appropriate transfer tool (for example, 
transfer_to_travel_genie
 ). This action hands off the conversation to the specialist agent, and the triage agent does 
not
 get control back. The specialist agent completes the interaction with the user, using the full conversation history for context.
Again, you don't need to define these transfer tools yourself—the SDK takes care of it automatically when you use the 
handoffs
 parameter. For now, just focus on how agents can delegate tasks to each other, and know that the SDK is handling the details behind the scenes.
Recommended Prompts For Handoffs
When working with handoffs, it's important to provide clear and specific instructions to each agent. The OpenAI Agents SDK offers a 
recommended prompt prefix
 to help agents understand their role in a multi-agent system and handle handoffs correctly.
The recommended prompt prefix is available as 
RECOMMENDED_PROMPT_PREFIX
 in the SDK. This prefix provides essential system context for the agent. You can inspect its contents like this:
Python
Copy to clipboard
from agents.extensions.handoff_prompt import RECOMMENDED_PROMPT_PREFIX

# Print the recommended prompt prefix
print(RECOMMENDED_PROMPT_PREFIX)


At the time this course is being developed. The recommended prompt prefix look like this:
text
Copy to clipboard
# System context
You are part of a multi-agent system called the Agents SDK, designed to make agent coordination and execution easy. 
Agents uses two primary abstraction: **Agents** and **Handoffs**. An agent encompasses instructions and tools and 
can hand off a conversation to another agent when appropriate. Handoffs are achieved by calling a handoff function, 
generally named `transfer_to_<agent_name>`. Transfers between agents are handled seamlessly in the background; do 
not mention or draw attention to these transfers in your conversation with the user.


To use this prefix, you can prepend it to your agent's specific instructions. For example, when defining a triage agent:
Python
Copy to clipboard
from agents import Agent
from agents.extensions.handoff_prompt import RECOMMENDED_PROMPT_PREFIX

# Define the triage agent with the recommended prompt prefix
triage = Agent(
    name="Travel Triage",
    instructions=(
        f"{RECOMMENDED_PROMPT_PREFIX}\n"
        "You are a travel triage agent. Given a request:\n"
        "- For destination or itinerary questions, transfer to Travel Genie\n"
        "- For safety or health concerns, transfer to the Travel Safety Expert"
    ),
    handoffs=[
        travel_genie,
        safety_expert
    ],
    model="gpt-4.1"
)


This approach ensures the agent receives both the system context and its specific task instructions, which helps it delegate tasks better.
Using the Prompt With Handoff Instructions Helper Method
The SDK also provides a helper function, 
prompt_with_handoff_instructions
 , which automatically combines your agent's instructions with the recommended handoff context:
Python
Copy to clipboard
from agents.extensions.handoff_prompt import prompt_with_handoff_instructions

# Write your agent's specific instructions
agent_instructions = (
    "You are a travel triage agent. Given a request:\n"
    "- For destination or itinerary questions, transfer to Travel Genie\n"
    "- For safety or health concerns, transfer to the Travel Safety Expert"
)

# Use the helper to combine your instructions with the recommended handoff context
full_instructions = prompt_with_handoff_instructions(agent_instructions)

# Define the triage agent with the combined instructions and handoff targets
triage = Agent(
    name="Travel Triage",
    instructions=full_instructions,
    handoffs=[
        travel_genie,
        safety_expert
    ],
    model="gpt-4.1"
)


Using either approach ensures your agents are properly primed to handle handoffs, resulting in more reliable and context-aware delegation in your multi-agent workflows.
Running Requests Through The Triage Agent
Let's walk through an example to see how this works in practice. You have three agents: a triage agent, a travel recommendation agent, and a travel safety expert. When a user submits a request, the triage agent analyzes it and decides which specialist agent should handle the response.
Python
Copy to clipboard
import asyncio
from agents import Runner

# Example requests to demonstrate delegation
requests = [
    "Where should I go for a relaxing beach vacation?",
    "Is it safe to travel to Peru right now?"
]

async def main():
    # Run each request through the triage agent
    for req in requests:
        result = await Runner.run(
            starting_agent=triage,
            input=req
        )
        print("Request:", req)
        print("Delegated to:", result.last_agent.name)
        print("Response:\n" + result.final_output + "\n")

if __name__ == "__main__":
    asyncio.run(main())


When you run this code, the triage agent receives each user request and decides which specialist should handle it. For the first request, 
"Where should I go for a relaxing beach vacation?"
, the triage agent delegates to the Travel Genie. For the second request, 
"Is it safe to travel by airplane?"
, it delegates to the Travel Safety Expert.
The output might look like this:
text
Copy to clipboard
Request: Where should I go for a relaxing beach vacation?
Delegated to: Travel Genie
Response:
For a relaxing beach vacation, here are a few top destinations, each with its own unique vibe...

Request: Is it safe to travel to the Amazon?
Delegated to: Travel Safety Expert
Response:
Traveling to the Amazon can be an incredible adventure, but it does come with unique risks...


Notice how the triage agent does not answer the questions itself. Instead, it routes each request to the appropriate specialist, and the user receives a helpful, context-aware response from the right expert.
Summary And Next Steps
In this lesson, you learned how to use the 
handoffs
 parameter to delegate tasks between agents in the 
OpenAI Agents SDK
. You saw how to define specialist agents, configure a triage agent to route requests, and use clear prompting strategies to guide agent behavior. By leveraging handoffs, you can build modular, flexible, and intelligent multi-agent systems that provide a seamless user experience.
You are now ready to practice configuring handoffs and writing effective prompts in your own code. In the next set of exercises, you will get hands-on experience building agent workflows that can dynamically delegate tasks. Keep up the great work — each lesson brings you closer to mastering the art of coordinating OpenAI agents in Python!
Previous Lesson
https://codesignal.com/learn/courses/coordinating-openai-agents-workflows-in-python/lessons/chaining-openai-agents-for-sequential-workflows
Previous
https://codesignal.com/learn/courses/coordinating-openai-agents-workflows-in-python/lessons/chaining-openai-agents-for-sequential-workflows
Next Lesson: Customizing Agent Handoffs with Validation and Callbacks
https://codesignal.com/learn/courses/coordinating-openai-agents-workflows-in-python/lessons/customizing-agent-handoffs-with-validation-and-callbacks
Next Lesson: Customizing Agent Handoffs with Validation and Callbacks
https://codesignal.com/learn/courses/coordinating-openai-agents-workflows-in-python/lessons/customizing-agent-handoffs-with-validation-and-callbacks
Next
https://codesignal.com/learn/courses/coordinating-openai-agents-workflows-in-python/lessons/customizing-agent-handoffs-with-validation-and-callbacks
 
Join the 1M+ learners on CodeSignal
Be a part of our community of 1M+ users who develop and demonstrate their skills on CodeSignal
Start learning today!
Home
https://codesignal.com/learn/course-paths
Company
About
https://codesignal.com/about
 
Careers
https://codesignal.com/careers
 
Leadership
https://codesignal.com/leadership
 
Talent Science
https://codesignal.com/talent-science
 
Newsroom
https://codesignal.com/newsroom
Collections
Generative AI
https://codesignal.com/learn/course-paths/browse?collection=cmb6fd1bp0014jo04pruo1af1
 
Business & Leadership
https://codesignal.com/learn/course-paths/browse?collection=cmb6fd6nd0015jo04kuoo2npa
 
Interview Prep
https://codesignal.com/learn/course-paths/browse?collection=clxv0cdhc000g6npkfy2mavw7
 
AI & Machine Learning
https://codesignal.com/learn/course-paths/browse?collection=clxv0c62e000c6npk5d8douqp
 
Learn to Code
https://codesignal.com/learn/course-paths/browse?collection=clxv0c9iq000f6npkz16lx77o
 
Data Science & Engineering
https://codesignal.com/learn/course-paths/browse?collection=clxv0bycs000a6npkk9i1s12w
Platform
Platform Overview
https://codesignal.com/platform
 
Skills Assessments
https://codesignal.com/skills-assessments
 
Live Tech Interviews
https://codesignal.com/live-tech-interviews
 
AI Interviewer
https://codesignal.com/ai-interviewer
 
AI Role-Play
https://codesignal.com/ai-roleplay
 
AI Tutoring with Cosmo
https://codesignal.com/cosmo
 
Certified Assessments
https://codesignal.com/certified-evaluations
Roles
Talent Acquisition
https://codesignal.com/solutions/talent-acquisition
 
Engineering Leaders
https://codesignal.com/solutions/engineering-leaders
 
Sales Leaders
https://codesignal.com/ai-interviewer
 
CS & Support Leaders
https://codesignal.com/ai-interviewer
 
IO Psychologists
https://codesignal.com/solutions/io-psychologists
 
Individuals
https://codesignal.com/learn-app
Resources
Resource Library
https://codesignal.com/resources
 
Blog
https://codesignal.com/blog
 
Customer Stories
https://codesignal.com/customers
 
Interview Prep
https://codesignal.com/blog/interview-prep
 
API Docs
https://developer.codesignal.com/
Support
Knowledge Base
https://support.codesignal.com/hc/en-us
Home
https://codesignal.com/learn/course-paths
Company
Collections
Platform
Roles
Resources
Support
Copyright © 2025 CodeSignal
Privacy
https://codesignal.com/privacy
 
Terms
https://codesignal.com/terms
 
Security & Compliance
https://codesignal.com/security-compliance
 

https://www.linkedin.com/company/codesignal/
 

https://www.youtube.com/channel/UCr2DuuSNzMihvRDyskKlKpA/
 

https://x.com/CodeSignalCom/
 

https://www.facebook.com/codesignalcom/