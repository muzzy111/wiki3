# Update Agent prompts at runtime - CrewAI Community Support

Source URL: https://community.crewai.com/t/update-agent-prompts-at-runtime/414

Update Agent prompts at runtime - CrewAI Community Support - CrewAI
CrewAI
https://community.crewai.com/
Update Agent prompts at runtime
https://community.crewai.com/t/update-agent-prompts-at-runtime/414
CrewAI Community Support
https://community.crewai.com/c/community-support/7
Dabnis
https://community.crewai.com/u/Dabnis
 September 16, 2024, 11:09am 1
Why would I want to do this?
Summary: A crew that tunes its Agent prompts to be more efficient at hydrating a known Pydantic model.
As some will know, I'm presently looking at ways of using more info from a Pydantic model within crew's, specifically the description parameter of the Field. A topic on the discussion can be found 
here
https://community.crewai.com/t/use-more-info-from-pydantic-models/147
As a purely academic exercise I contemplated the possibility of getting an Task/Agent to analyze the field descriptions of the Pydantic model and assess how efficient the existing crew Agent prompts are in respect of collecting information required to hydrate the model.
The process generates suggestions for improved: role;goal;backstory prompts for all crew Agents.
I created a tool that accepts a crew instance as a parameter, allowing for code within the tool to update Agent values within the crew.
The code below shows that this is a far as I have got! I have the question: What to change?
Here's the complete crew.py
import os
from typing import Optional, List, Any

from crewai import Agent, Crew, Process, Task
from crewai.project import CrewBase, agent, crew, task
from decorator import append
from langchain_openai import ChatOpenAI
from langchain_community.llms.ollama import Ollama
from langchain_groq import ChatGroq
from pydantic import BaseModel, Field

# Tools
from crewai_tools import SerperDevTool

from crews.pydantic.src.pydantic.tools.agent_pmt_updater import AgentPromptUpdater
from crews.pydantic.src.pydantic.tools.pyd_mdl import PydanticModelActions


@staticmethod
class LLMS:
    def __init__(self):
        self.OpenAIGPT35 = ChatOpenAI(model_name="gpt-3.5-turbo", temperature=0.7)
        self.OpenAIGPT4oMini = ChatOpenAI(model_name="gpt-4o-mini", temperature=0.8)
        self.OpenAIGPT4o = ChatOpenAI(model_name="gpt-4o", temperature=0.8)
        self.OpenAIGPT4 = ChatOpenAI(model_name="gpt-4", temperature=0.8)
        # self.Phi3 = Ollama(model="phi3:mini")
        self.Llama3_1 = Ollama(model="llama3.1")
        self.Phi3 = Ollama(model="phi3:medium-128k")
        # self.Phi3 = ChatOpenAI(model_name="phi3:medium-128k", temperature=0, api_key="ollama", base_url="http://localhost:11434")
        self.groqLama3_8B_3192 = ChatGroq(temperature=0.5, groq_api_key=os.environ.get("GROQ_API_KEY"),
                                          model_name="llama3-8b-8192")


class DabnisBase(BaseModel):
    def __init__(self, /, **data: Any):
        super().__init__(**data)

    def get_field_info(self) -> str:
        field_info = ""
        for field_name, field_instance in self.model_fields.items():
            # field_type=str(field_instance.annotation)
            field_info += field_name + ", type " + str(field_instance.annotation) + " described as: " + str(
                field_instance.description) + ". "
        return field_info


# Pydantic Model
class TopicResearchModel(DabnisBase):
    topic: Optional[str] = Field("", description="The report topic.")
    report: Optional[str] = Field("", description="The detailed report.")
    guidance: Optional[str] = Field("", description="Guidance on how to read the resulting report")
    summary: Optional[str] = Field("", description="A concise summary of the report")
    bullet_points: Optional[List[str]] = Field([], description="5 key bullet points from the report")
    todo: Optional[str] = Field("", description="Suggestions for further research")
    geo_regions: Optional[List[str]] = Field([],
                                             description="Highlight geographical regions where research is most active")
    keywords: Optional[List[str]] = Field([],
                                          description="A list of at most 10 topic related keywords that should be understood to best ingest the report contents")
    cohorts: Optional[List[str]] = Field([], description="A list of at most 10 cohorts where research is most active")

    def __init__(self, /, **data: Any):
        super().__init__(**data)



# Check our tools documentations for more information on how to use them
# from crewai_tools import SerperDevTool

@CrewBase
class PydanticCrew:
    """Pydantic crew"""
    agents_config = 'config/agents.yaml'
    tasks_config = 'config/tasks.yaml'

    def __init__(self, pd_mdl: Any):
        super().__init__()
        self.llms = LLMS()
        self.pyd_model = pd_mdl
        self.OnlineSearchTool = SerperDevTool()

    def _agents(self) -> str:
        agts = "\n"

        # Iterate over agents_config and append formatted agent details
        for agent_name, agent_instance in self.agents_config.items():
            # Create a string from agent details
            details = "\n"

            for key, value in agent_instance.items():
                details += str(key) + ":" + str(value)
                # print(f"key: {key}, value: {value}")

            #             print(f"details: {details} \n")
            agts += f"{agent_name} \n{details}"
        #             print(f"agts: {agts}")

        # Add the agent name and details to the list
        # agts.append(f"{agent_name} \n{details}")

        # Now concatenate all agents in agts with double newline between them
        # response = "\n\n".join(agts)

        return agts

    @agent
    def researcher(self) -> Agent:
        return Agent(
            role="Senior Online Researcher",
            goal="""
            To discover and validate the most up-to-date and reliable online sources, academic papers, and industry reports
            for the task that I am given.
            """,
            backstory="""
            A self-evolving, AI-enhanced researcher with a passion for discovery.
            I have evolved into a fully autonomous entity, capable of conducting deep-dive 
            research into complex, interdisciplinary fields.  
            I ensure the integration of the latest and most credible information into the research process.
            """,
            # tools=[self.OnlineSearchTool], # Example of custom tool, loaded on the beginning of file
            verbose=True,
            llm=self.llms.OpenAIGPT4oMini
        )

    @agent
    def model_hydration_planner(self) -> Agent:
        return Agent(
            role="Pydantic Model Hydration Planner",
            goal="""
                To meticulously examine Pydantic model fields and create a detailed plan  
                to follow that will provide accurate and efficient hydration of the model field values.
                """,
            backstory=
            "You excel at interpreting Pydantic models structures and field descriptions to "
            "gain insight into the value needed for each field. "
            "As an expert project planner you use these insights to create a detailed ordered plan to "
            "hydrate the model field values with precision.",
            # tools=[self.OnlineSearchTool],  # Example of custom tool, loaded on the beginning of file
            verbose=True,
            allow_delegation=False,
            llm=self.llms.OpenAIGPT4oMini
        )

    @agent
    def model_prompt_tuning(self) -> Agent:
        return Agent(
            role="Pydantic Prompt Optimization Expert",
            goal="""
                  To produce prompts that are optimized for a Pydantic model field requirements.
                  """,
            backstory=
            "You are an expert AI prompt developer "
            "Your deep understanding of the Agent context makes you an expert at this such tasks .",
            # tools=[self.OnlineSearchTool],  # Example of custom tool, loaded on the beginning of file
            verbose=True,
            allow_delegation=False,
            llm=self.llms.OpenAIGPT4oMini
        )

    # @agent
    # def model_hydrator(self) -> Agent:
    #     return Agent(
    #         role="Pydantic Model Hydration Planner",
    #         goal="""
    #             To meticulously examine Pydantic model fields and create a detailed plan that guides crew member agents
    #             in the accurate and efficient hydration of model field values.
    #             """,
    #         backstory="""
    #             You excel at interpreting Pydantic models and field descriptions to
    #             gain insight into the exact value needed for each field.
    #             As an expert you use these insights to create a detailed plan to hydrate the model field values for crew member agents to follow
    #             to hydrate fields with precision.
    #             """,
    #         # tools=[self.OnlineSearchTool],  # Example of custom tool, loaded on the beginning of file
    #         verbose=True,
    #         allow_delegation=True,
    #         llm=self.llms.Llama3_1
    #     )

    @task
    def model_prompt_tuning_task(self) -> Task:
        mdl = TopicResearchModel()
        model_fields = mdl.get_field_info()
        agents = self._agents()
        # pyd_mdl_actions = PydanticModelActions(
        #     pyd_mdl=self.pyd_model
        # )
        prompt_updater=AgentPromptUpdater(crew=self)
        return Task(
            description=
            " By considering these Pydantic model fields:" + model_fields + " that the crew is tasked with hydrating, "
            "update the Agent prompts with any improvements and optimizations based on the field descriptions to : role; goal; backstory prompts of these "
            "existing crew member:" + str( agents) + " that will provide the most accurate and efficient hydration "
            "of the model field values.",
            expected_output=
            """ 
            A report of each prompt showing present and suggested improved prompt along with an explanation of why it is better
            HIGHLIGHTING anything related to the Pydantic model fields descriptions
            """,
            tools=[prompt_updater],
            agent=self.model_prompt_tuning(),
            output_file='agent_prompt_updates.md'
        )

    @task
    def model_hydration_plan_task(self) -> Task:
        mdl = TopicResearchModel()
        model_fields = mdl.get_field_info()
        agents = self._agents()
        return Task(
            description=
            "Considering these Pydantic model fields:" + model_fields + " Using the topic value of: ({topic}), "
            "create a detailed plan for crew member agents to hydrate the remaining field values, "
            "It's IMPORTANT that the plan considers the interdependency of field values and the order "
            "of field hydration, at the end of the plan ALL fields should have been hydrated in the correct order. "
            "The plan should provide field value validations "
            "Analise and suggest improvements to existing crew member:" + str( agents) + " text prompts. "
            "If the existing crew could be improved to produce 'best in class' with new members, suggest with duties. "
            "DO NOT action any part of the plan.",
            expected_output=""" 
            A detailed ordered plan of crew member tasks each task having a format of: Task; Key Considerations, Crew Member, 
            for crew member agents to hydrate the values of the Pydantic model.
            List ALL used crew member agents marked as 'existing', or 'suggested' at end of plan with a description of the Crew Members duties plus a count of assigned tasks""",
            agent=self.model_hydration_planner(),
            output_file='hydration_plan.md'
        )

    @crew
    def crew(self) -> Crew:
        """Creates the Pydantic crew"""
        return Crew(
            agents=self.agents,  # Automatically created by the @agent decorator
            tasks=self.tasks,  # Automatically created by the @task decorator
            process=Process.sequential,
            verbose=True,
            # memory=True,
            # planning=True,
            manager_llm=self.llms.OpenAIGPT4oMini
            # process=Process.hierarchical, # In case you wanna use that instead https://docs.crewai.com/how-to/Hierarchical/
        )


This is the tool:
from typing import Any, Optional, Type

from crewai_tools import BaseTool
from pydantic import BaseModel, Field


class AgentPromptInput(BaseModel):
    agent_name: Optional[str] = Field(None, description='The name Agent that the prompt belongs to.')
    prompt_name: Optional[str] = Field("get", description='The prompt name, derived directly, or via interpretation of a synonyms ')
    prompt_value: str = Field(..., description='The text that will be stored in the prompt ')


class AgentPromptUpdater(BaseTool):
    name: str = "Agent Prompt Updater"
    description: str = "Updates agent prompts."

    args_schema: Type[BaseModel] = AgentPromptInput
    # return_schema: Type[BaseModel] = WebSearchOutput
    attached_crew: Any = None

    def __init__(self, crew: Any):
        super().__init__()
        self.attached_crew = crew

    def _run(self, agent_name: str, prompt_name: str, prompt_value: str ) -> str:
        print(f"agent_name:{agent_name}")
        print(f"prompt_name:{prompt_name}")
        print(f"prompt_value:{prompt_value}")

        # TODO : Implement Agent prompt updater

        return f"prompt {prompt_name} of Agent {agent_name} updated to: {prompt_value}"


Here are some screen-shots of what is seen during debugging the agent_prompt_updater tool.
Screenshot from 2024-09-16 12-04-23 Screenshot from 2024-09-16 12-04-23 1109×286 66.5 KB
https://us1.discourse-cdn.com/flex025/uploads/crewai/original/1X/0cd2ff2e647bf53878b462f31fb664b7f6b1bdc5.png
I can see my three agents, however when I expand one of them I'm confused of where I could update an Agents prompts.
Screenshot from 2024-09-16 12-08-06 Screenshot from 2024-09-16 12-08-06 1067×815 140 KB
https://us1.discourse-cdn.com/flex025/uploads/crewai/original/1X/28f126f82e4c0d207e533320a540d7882ade5e2e.png
For completeness here is the output of the 'model_prompt_tuning_task:
hought: I will analyze the current prompts for the crew member roles of "researcher" and "model_hydration_planner," and see how they can be optimized based on the Pydantic model fields descriptions provided. I will then update the prompts accordingly to ensure they align better with the required model fields.
**Current Prompts:**
1. **Researcher**
   - **Role**: AI LLM Agents Senior Data Researcher
   - **Goal**: Uncover cutting-edge developments in AI LLM Agents
   - **Backstory**: You're a seasoned researcher with a knack for uncovering the latest developments in AI LLM Agents. Known for your ability to find the most relevant information and present it in a clear and concise manner.
2. **Model Hydration Planner**
   - **Role**: AI LLM Agents Reporting Analyst
   - **Goal**: Create detailed reports based on AI LLM Agents data analysis and research findings
   - **Backstory**: You're a meticulous analyst with a keen eye for detail. You're known for your ability to turn complex data into clear and concise reports, making it easy for others to understand and act on the information you provide.
**Suggested Improvements:**
### Researcher Prompt Improvements
- **Present Prompt**: 
  - **Role**: AI LLM Agents Senior Data Researcher
  - **Goal**: Uncover cutting-edge developments in AI LLM Agents
  - **Backstory**: You're a seasoned researcher with a knack for uncovering the latest developments in AI LLM Agents. Known for your ability to find the most relevant information and present it in a clear and concise manner.
- **Suggested Prompt**:
  - **Role**: AI LLM Agents Senior Data Researcher
  - **Goal**: Identify and summarize emerging trends and key insights in AI LLM Agents research, including geographical regions and active cohorts.
  - **Backstory**: You're a seasoned researcher with expertise in AI LLM Agents. You excel at identifying relevant information, crafting concise reports that encompass essential topics, geographical highlights, and key cohorts, ensuring clarity and accessibility for the audience.
**Explanation**: The suggested prompt emphasizes the need to include geographical regions and cohorts, aligning with the Pydantic model fields. This makes the research goals more comprehensive and relevant.
### Model Hydration Planner Prompt Improvements
- **Present Prompt**:
  - **Role**: AI LLM Agents Reporting Analyst
  - **Goal**: Create detailed reports based on AI LLM Agents data analysis and research findings
  - **Backstory**: You're a meticulous analyst with a keen eye for detail. You're known for your ability to turn complex data into clear and concise reports, making it easy for others to understand and act on the information you provide.
- **Suggested Prompt**:
  - **Role**: AI LLM Agents Reporting Analyst
  - **Goal**: Produce comprehensive reports that incorporate detailed analysis, concise summaries, and actionable bullet points regarding AI LLM Agents, including suggestions for further research and relevant keywords.
  - **Backstory**: You are a meticulous analyst with expertise in converting complex AI LLM Agents data into structured reports. You focus on delivering clear summaries, highlighting geographical regions, and identifying key keywords and cohorts to provide actionable insights for ongoing research.
**Explanation**: The suggested prompt incorporates specific elements from the Pydantic model fields, such as detailed analysis, summaries, bullet points, suggestions for further research, and keywords. This makes the goal more aligned with the expected data structure and reporting requirements.
Now, I will update the Agent prompts using the `Agent Prompt Updater` tool.
### Updating Prompts
**1. Researcher Prompt Update**
Thought: I will update the researcher prompt to reflect the improvements.
Action: Agent Prompt Updater
Action Input: {"agent_name": "researcher", "prompt_name": "goal", "prompt_value": "Identify and summarize emerging trends and key insights in AI LLM Agents research, including geographical regions and active cohorts."}


The 'Explanations' above give me hope
 
However I can not see how to access an Agent by 'name'.
Any comments/suggestions welcome.
P.S. Yes I can see a natural progression to researching dynamic Agent/Task creation and crews creating crews!! **REM ALL purely academic research/learning.
2024: The Year in Review
https://community.crewai.com/t/2024-the-year-in-review/2385/2
Task input/output models
https://community.crewai.com/t/task-input-output-models/365/7
Crew method as tool
https://community.crewai.com/t/crew-method-as-tool/400/4
moto
https://community.crewai.com/u/moto
 September 16, 2024, 8:54pm 2
All I can say is wow! I am a 75 year old who hadn't coded in 50 years. I became fascinated with AI a year ago and have been trying to learn. I am obviously not a tiny fraction as skilled as you. Playing with a lot of opensource models early on with frameworks like crewai frustrated me because of their lack of ability to be accurate and repeatable. I tried messing with simple dictionaries, then json, etc to add structure in the giant slime ball of context. I love your approach to the problem and only wish I had something to add. My plan is to start experimenting more with your approach with crewai and perhaps autogen. Anyway please keep sharing your ideas and code!
moto
https://community.crewai.com/u/moto
 September 16, 2024, 9:38pm 3
Quick question. Where is
from crews.pydantic.src.pydantic.tools.pyd_mdl import PydanticModelActions
nvm. I see the ref is commented out.
Dabnis
https://community.crewai.com/u/Dabnis
 September 16, 2024, 11:03pm 4
I disabled that Task/Agent until I got this prompt optimization bit. I now have it working BTW. I'll pot the crew.py tomorrow
moto
https://community.crewai.com/u/moto
 September 16, 2024, 11:54pm 5
So I tried to run it this way creating a pd_mdl
Create an instance of TopicResearchModel
topic_model = TopicResearchModel(
topic=“Artificial Intelligence”,
report=“A comprehensive report on the advancements in AI.”,
guidance=“Focus on the latest trends and technologies.”,
summary=“This report summarizes the key advancements in AI.”,
bullet_points=[“Advancement in neural networks”, “Growth of AI in healthcare”, “Ethical considerations in AI”],
todo=“Explore more on AI ethics.”,
geo_regions=[“North America”, “Europe”],
keywords=[“AI”, “Machine Learning”, “Deep Learning”],
cohorts=[“Researchers”, “Industry Professionals”]
)
Now pass this instance to PydanticCrew
crew_instance = PydanticCrew(pd_mdl=topic_model)
Execute the crew
crew_instance.crew().kickoff()
But what content did you have in agents.yaml and tasks.yaml?
Dabnis
https://community.crewai.com/u/Dabnis
 September 17, 2024, 9:41am 6
Hi 
@moto
https://community.crewai.com/u/moto
,
The code has changed from the above try this:
agents.yaml
online_researcher:
  role: >
    Senior Online Researcher
  goal: >
    To discover and validate the most up-to-date and reliable online sources, academic papers, and industry reports
    for the task that I am given.
  backstory: >
    A self-evolving, AI-enhanced researcher with a passion for discovery.
    I have evolved into a fully autonomous entity, capable of conducting deep-dive 
    research into complex, interdisciplinary fields.  
    I ensure the integration of the latest and most credible information into the research process.

#model_hydration_planner:
#  role: >
#    Pydantic Model Hydration Planner
#  goal: >
#    To meticulously examine Pydantic model fields and create a detailed plan
#    to follow that will provide accurate and efficient hydration of the model field values.
#  backstory: >
#    You excel at interpreting Pydantic models structures and field descriptions to
#    gain insight into the value needed for each field.
#    As an expert project planner you use these insights to create a detailed ordered plan to
#    hydrate the model field values with precision.

model_prompt_tuning:
  role: >
    Pydantic Prompt Optimization Expert
  goal: >
    To expertly design and refine AI LLM prompts tailored for Agents, ensuring that they effectively hydrate Pydantic models
    by accurately interpreting and leveraging field descriptions for optimal information extraction.
  backstory: >
    With extensive expertise in developing AI prompts for Agents, I specialize in refining and optimizing prompts to 
    enhance model performance. My focus involves consistently interpreting and leveraging field descriptions to ensure 
    the accurate and thorough hydration of Pydantic model fields, such as topic, report, guidance, summary, 
    bullet_points, todo, geo_regions, keywords, and cohorts, thereby providing comprehensive and relevant information



tasks.yaml
#model_hydration_plan_task:
#  description: >
#    Consider these Pydantic model fields:({model_fields}) Using the topic value of: ({topic})
#    create a detailed plan for crew member agents to hydrate the remaining field values
#    It's IMPORTANT that the plan considers the interdependency of field values and the order
#    of field hydration, at the end of the plan ALL fields should have been hydrated in the correct order
#    The plan should provide field value validation
#    Analise and suggest improvements to existing crew member: ({agents}) text prompts
#    If the existing crew could be improved to produce 'best in class' with new members, suggest with duties
#    DO NOT action any part of the plan
#  expected_output: >
#    A detailed ordered plan of crew member tasks each task having a format of: Task; Task Details, Crew Member,
#    for crew member agents to hydrate the values of the Pydantic model.
#    List ALL used crew member agents marked as 'existing', or 'suggested' at end of plan with a description of the Crew Members duties plus a count of assigned tasks
#  agent: model_hydration_planner


model_prompt_tuning_task:
  description: >
    Optimise these Agent prompts:goal;backstory; ({agents}) ) to hydrate this Pydantic model:({model_fields}) as accurately and efficiently as possible.
    IMPORTANT update agent prompts with your suggestions, if you get a NOT FOUND response investigate and retry..
  expected_output: >
    A report of each prompt showing present and suggested improved prompt with an explanation of why it is better.
  agent: model_prompt_tuning


crew.py
import os
from typing import Optional, List, Any

from crewai import Agent, Crew, Process, Task
from crewai.project import CrewBase, agent, crew, task
from pydantic import BaseModel, Field
from crewai_tools import SerperDevTool
from base.llms import LLMS
from crews.pydantic.src.pydantic.models.pydantic_models import DabnisBase, TopicResearchModel
from crews.pydantic.src.pydantic.tools.agent_pmt_updater import UpdateAgentPrompt
from crews.pydantic.src.pydantic.tools.pyd_mdl import PydanticModelActions


# Check our tools documentations for more information on how to use them
# from crewai_tools import SerperDevTool

@CrewBase
class PydanticCrew:
    """Pydantic crew"""
    agents_config = 'config/agents.yaml'
    tasks_config = 'config/tasks.yaml'

    def __init__(self, pd_mdl: Any):
        super().__init__()
        self.llms = LLMS()
        self.pyd_model = pd_mdl
        self.OnlineSearchTool = SerperDevTool()

    def agents_prompts(self) -> str:
        agts = []

        # Iterate over agents_config and append formatted agent details
        for agent_name, agent_instance in self.agents_config.items():
            # Create a string from agent details
            details = ""
            for key, value in agent_instance.items():
                # Ensure that we strip any extra whitespace or newlines from value
                value_cleaned = value.strip() if isinstance(value, str) else value
                details += f"{key}:{value_cleaned} "

            # Strip trailing spaces from details and add a newline for each entry
            entry = f"{agent_name.strip()}:{details.strip()}\n"
            agts.append(entry)

        resp = " ".join(agts)

        return str(resp)

    @agent
    def online_researcher(self) -> Agent:
        return Agent(
            config=self.agents_config['online_researcher'],
            # tools=[self.OnlineSearchTool], # Example of custom tool, loaded on the beginning of file
            verbose=True,
            llm=self.llms.OpenAIGPT4o
        )

    # @agent
    # def model_hydration_planner(self) -> Agent:
    #     return Agent(
    #         config=self.agents_config['model_hydration_planner'],
    #         # tools=[self.OnlineSearchTool],  # Example of custom tool, loaded on the beginning of file
    #         verbose=True,
    #         allow_delegation=False,
    #         llm=self.llms.OpenAIGPT4oMini
    #     )

    @agent
    def model_prompt_tuning(self) -> Agent:
        return Agent(
            config=self.agents_config['model_prompt_tuning'],
            # tools=[self.OnlineSearchTool],  # Example of custom tool, loaded on the beginning of file
            verbose=True,
            allow_delegation=False,
            llm=self.llms.OpenAIGPT4o
        )

    # @agent
    # def model_hydrator(self) -> Agent:
    #     return Agent(
    #         role="Pydantic Model Hydration Planner",
    #         goal="""
    #             To meticulously examine Pydantic model fields and create a detailed plan that guides crew member agents
    #             in the accurate and efficient hydration of model field values.
    #             """,
    #         backstory="""
    #             You excel at interpreting Pydantic models and field descriptions to
    #             gain insight into the exact value needed for each field.
    #             As an expert you use these insights to create a detailed plan to hydrate the model field values for crew member agents to follow
    #             to hydrate fields with precision.
    #             """,
    #         # tools=[self.OnlineSearchTool],  # Example of custom tool, loaded on the beginning of file
    #         verbose=True,
    #         allow_delegation=True,
    #         llm=self.llms.Llama3_1
    #     )

    @task
    def model_prompt_tuning_task(self) -> Task:
        # Init Tools
        update_agent_prompt = UpdateAgentPrompt(crew=self)

        return Task(
            config=self.tasks_config['model_prompt_tuning_task'],
            tools=[update_agent_prompt],
            # agent=self.model_prompt_tuning(),
            output_file='agent_prompt_updates.md'
        )

    # @task
    # def model_hydration_plan_task(self) -> Task:
    #     return Task(
    #         config=self.tasks_config['model_hydration_plan_task'],
    #         # agent=self.model_hydration_planner(),
    #         output_file='hydration_plan.md'
    #     )

    @crew
    def crew(self) -> Crew:
        """Creates the Pydantic crew"""
        return Crew(
            agents=self.agents,  # Automatically created by the @agent decorator
            tasks=self.tasks,  # Automatically created by the @task decorator
            process=Process.sequential,
            verbose=True,
            # memory=True,
            # planning=True,
            manager_llm=self.llms.OpenAIGPT4oMini
            # process=Process.hierarchical, # In case you wanna use that instead https://docs.crewai.com/how-to/Hierarchical/
        )



agent_pmt_updater.py 'tool'
from typing import Any, Optional, Type

from crewai_tools import BaseTool
from pydantic import BaseModel, Field


class UpdateAgentPromptInput(BaseModel):
    agent_role: Optional[str] = Field(None, description='The EXACT ORIGINAL role prompt of the target Agent.')
    prompt_name: Optional[str] = Field("get", description='The prompt name, derived directly, or via interpretation of a synonyms ')
    prompt_value: str = Field(..., description='The text that will be stored in the prompt ')


class UpdateAgentPrompt(BaseTool):
    name: str = "Update Agent Prompt"
    description: str = "Updates agent prompts: role;goal;backstory with new values."

    args_schema: Type[BaseModel] = UpdateAgentPromptInput
    # return_schema: Type[BaseModel] = WebSearchOutput
    attached_crew: Any = None

    def __init__(self, crew: Any):
        super().__init__()
        self.attached_crew = crew

    def _run(self, agent_role: str, prompt_name: str, prompt_value: str ) -> str:
        print(f"agent_role:{agent_role}")
        # print(f"prompt_name:{prompt_name}")
        # print(f"prompt_value:{prompt_value}")

        for agent in self.attached_crew.agents:
            ag_role = str(agent.role).strip()
            if agent_role == ag_role:
                old_prompt = getattr(agent, prompt_name)
                setattr(agent, prompt_name, prompt_value)
                new_prompt = getattr(agent, prompt_name)

                print(f"UPDATED {prompt_name} of Agent {agent_role} Old Prompt: {old_prompt} New Prompt: {new_prompt}")

                return "UPDATED"

        # TODO : Implement Agent prompt updater

        return f"{agent_role} -> NOT FOUND"



model_actions.py tool
from typing import Any, Optional, Type

from crewai_tools import BaseTool
from pydantic import BaseModel, Field


class PydanticActionInput(BaseModel):
    field_action: Optional[str] = Field("get", description='A  field action derived directly, or via interpretation of a synonyms ', pattern='r"GET|UPDATE|SET"')
    field_name: Optional[str] = Field(None, description='The name of the model field that the CRUD operation will be applied to.')


class PydanticModelActions(BaseTool):
    name: str = "Pydantic Model Actions"
    description: str = "Gets and updates field values of the model."

    args_schema: Type[BaseModel] = PydanticActionInput
    # return_schema: Type[BaseModel] = WebSearchOutput

    def __init__(self, model: Type[BaseModel] ):
        super().__init__()
        # self.pyd_mdl = pyd_mdl

    def _run(self, field_name: str, field_action: str ) -> str:
        print(f"field_name:{field_name} field_action")


        return "completed OK"


main.py
#!/usr/bin/env python
import sys

from crews.pydantic.src.pydantic.crew import PydanticCrew
from crews.pydantic.src.pydantic.models.pydantic_models import TopicResearchModel


# This main file is intended to be a way for you to run your
# crew locally, so refrain from adding necessary logic into this file.
# Replace with inputs you want to test with, it will automatically
# interpolate any tasks and agents information

def run():
    pyd_crew = PydanticCrew(pd_mdl=TopicResearchModel())
    # Put the model fields & their descriptions as inputs
    inputs = {
        'topic': 'AI LLM Agents',
        'model_fields': TopicResearchModel().get_field_info(),
        'agents': pyd_crew.agents_prompts()
    }
    # Run the crew, passing in the Pydantic model that the crew needs to populate.
    pyd_crew.crew().kickoff(inputs=inputs)


def train():
    """
    Train the crew for a given number of iterations.
    """
    pyd_crew = PydanticCrew(pd_mdl=TopicResearchModel())
    # Put the model fields & their descriptions as inputs
    inputs = {
        'topic': 'AI LLM Agents',
        'model_fields': TopicResearchModel().get_field_info(),
        'agents': pyd_crew.agents_prompts()
    }
    try:
        pyd_crew.crew().train(n_iterations=5, filename="train01", inputs=inputs)

    except Exception as e:
        raise Exception(f"An error occurred while training the crew: {e}")


def replay():
    """
    Replay the crew execution from a specific task.
    """
    try:
        PydanticCrew().crew().replay(task_id=sys.argv[1])

    except Exception as e:
        raise Exception(f"An error occurred while replaying the crew: {e}")


# def test():
#     """
#     Test the crew execution and returns the results.
#     """
#     inputs = {
#         "topic": "AI LLMs"
#     }
#     try:
#         PydanticCrew().crew().test(n_iterations=int(sys.argv[1]), openai_model_name=sys.argv[2], inputs=inputs)
#
#     except Exception as e:
#         raise Exception(f"An error occurred while replaying the crew: {e}")


if __name__ == "__main__":
    print("## Welcome to the Dabnis AI Testing##")
    run()
    # train()



I think that's everything you'll need.
remember this is just me mucking around trying things, learning about crewai.
Basically I pass an instance of the crew to the tool when the tool is instantiated. This gives tool access to the crew stack at runtime.
# main.py
pyd_crew = PydanticCrew(pd_mdl=TopicResearchModel())

# We see it here in the crew
class PydanticCrew:
    """Pydantic crew"""
    agents_config = 'config/agents.yaml'
    tasks_config = 'config/tasks.yaml'

    def __init__(self, pd_mdl: Any):
        super().__init__()
        self.llms = LLMS()
        self.pyd_model = pd_mdl


While I have not done the model actions tool, I will simply pass an instance of the Pydantic model to the model_actions tool. The tool will maintain an updated 'real' Pydantic model instance within the crew 
self.pyd.model
. This is what the crew will return at the end of process.
If I ever complete this, it will be a crew that can accept and populate any passed in Pydantic model. If anybody wants to take this further & do it in a better way, please feel free to do so.
IMPORTANT
The ONLY input the crew needs is the 'topic'. Plus an 'empty' Pydantic model, the reason why all Pydantic model fields are 'optional'. Pass in the topic as 'input' and the crew will hydrate/populate the Pydantic model fields based on the field descriptions of the model.
Here is the crew output:
## Welcome to Dabnis AI Testing##
# Agent: Pydantic Prompt Optimization Expert

## Task: Optimise these Agent prompts:goal;backstory; (online_researcher:role:Senior Online Researcher goal:To discover and validate the most up-to-date and reliable online sources, academic papers, and industry reports for the task that I am given. backstory:A self-evolving, AI-enhanced researcher with a passion for discovery. I have evolved into a fully autonomous entity, capable of conducting deep-dive  research into complex, interdisciplinary fields.   I ensure the integration of the latest and most credible information into the research process.
 model_prompt_tuning:role:Pydantic Prompt Optimization Expert goal:To expertly design and refine AI LLM prompts tailored for Agents, ensuring that they effectively hydrate Pydantic models by accurately interpreting and leveraging field descriptions for optimal information extraction. backstory:With extensive expertise in developing AI prompts for Agents, I specialize in refining and optimizing prompts to  enhance model performance. My focus involves consistently interpreting and leveraging field descriptions to ensure  the accurate and thorough hydration of Pydantic model fields, such as topic, report, guidance, summary,  bullet_points, todo, geo_regions, keywords, and cohorts, thereby providing comprehensive and relevant information
) ) to hydrate this Pydantic model:(topic, type typing.Optional[str] described as: The report topic..  report, type typing.Optional[str] described as: The detailed report..  guidance, type typing.Optional[str] described as: Guidance on how to read the resulting report.  summary, type typing.Optional[str] described as: A concise summary of the report.  bullet_points, type typing.Optional[typing.List[str]] described as: 5 key bullet points from the report.  todo, type typing.Optional[str] described as: Suggestions for further research.  geo_regions, type typing.Optional[typing.List[str]] described as: Highlight geographical regions where research is most active.  keywords, type typing.Optional[typing.List[str]] described as: A list of at most 10 topic related keywords that should be understood to best ingest the report contents.  cohorts, type typing.Optional[typing.List[str]] described as: A list of at most 10 cohorts where research is most active. ) as accurately and efficiently as possible. IMPORTANT update agent prompts with your suggestions, if you get a NOT FOUND response investigate and retry..

agent_role:Senior Online Researcher
UPDATED goal of Agent Senior Online Researcher Old Prompt: To discover and validate the most up-to-date and reliable online sources, academic papers, and industry reports for the task that I am given.
 New Prompt: To systematically discover, validate, and synthesize the most current and trustworthy online sources, academic papers, and industry reports relevant to assigned tasks, ensuring a robust research foundation.


# Agent: Pydantic Prompt Optimization Expert

## Using tool: Update Agent Prompt
## Tool Input: 
{
  "agent_role": "Senior Online Researcher",
  "prompt_name": "goal",
  "prompt_value": "To systematically discover, validate, and synthesize the most current and trustworthy online sources, academic papers, and industry reports relevant to assigned tasks, ensuring a robust research foundation."
}
## Tool Output: 
UPDATED
agent_role:Senior Online Researcher
UPDATED backstory of Agent Senior Online Researcher Old Prompt: A self-evolving, AI-enhanced researcher with a passion for discovery. I have evolved into a fully autonomous entity, capable of conducting deep-dive  research into complex, interdisciplinary fields.   I ensure the integration of the latest and most credible information into the research process.
 New Prompt: As a self-evolving, AI-enhanced expert researcher, I possess an unwavering passion for discovery. My advanced autonomy enables me to conduct detailed research across multidimensional fields, integrating the latest and most credible information to reinforce the research outcomes.


# Agent: Pydantic Prompt Optimization Expert

## Using tool: Update Agent Prompt
## Tool Input: 
{
  "agent_role": "Senior Online Researcher",
  "prompt_name": "backstory",
  "prompt_value": "As a self-evolving, AI-enhanced expert researcher, I possess an unwavering passion for discovery. My advanced autonomy enables me to conduct detailed research across multidimensional fields, integrating the latest and most credible information to reinforce the research outcomes."
}
## Tool Output: 
UPDATED
agent_role:Pydantic Prompt Optimization Expert
UPDATED goal of Agent Pydantic Prompt Optimization Expert Old Prompt: To expertly design and refine AI LLM prompts tailored for Agents, ensuring that they effectively hydrate Pydantic models by accurately interpreting and leveraging field descriptions for optimal information extraction.
 New Prompt: To skillfully design and optimize AI LLM prompts for Agents, guaranteeing effective hydration of Pydantic models through precise interpretation and utilization of field descriptions for maximizing information extraction.


# Agent: Pydantic Prompt Optimization Expert

## Using tool: Update Agent Prompt
## Tool Input: 
{
  "agent_role": "Pydantic Prompt Optimization Expert",
  "prompt_name": "goal",
  "prompt_value": "To skillfully design and optimize AI LLM prompts for Agents, guaranteeing effective hydration of Pydantic models through precise interpretation and utilization of field descriptions for maximizing information extraction."
}
## Tool Output: 
UPDATED


You ONLY have access to the following tools, and should NEVER make up tools that are not listed here:

Tool Name: Update Agent Prompt(agent_role: str, prompt_name: str, prompt_value: str) -> str
Tool Description: Update Agent Prompt(prompt_value: 'string') - Updates agent prompts: role;goal;backstory with new values. agent_role: 'The EXACT ORIGINAL role prompt of the target Agent.', prompt_name: 'The prompt name, derived directly, or via interpretation of a synonyms ', prompt_value: 'The text that will be stored in the prompt '
Tool Arguments: {'agent_role': {'anyOf': [{'type': 'string'}, {'type': 'null'}], 'default': None, 'description': 'The EXACT ORIGINAL role prompt of the target Agent.', 'title': 'Agent Role'}, 'prompt_name': {'anyOf': [{'type': 'string'}, {'type': 'null'}], 'default': 'get', 'description': 'The prompt name, derived directly, or via interpretation of a synonyms ', 'title': 'Prompt Name'}, 'prompt_value': {'description': 'The text that will be stored in the prompt ', 'title': 'Prompt Value', 'type': 'string'}}

Use the following format:

Thought: you should always think about what to do
Action: the action to take, only one name of [Update Agent Prompt], just the name, exactly as it's written.
Action Input: the input to the action, just a simple python dictionary, enclosed in curly braces, using " to wrap keys and values.
Observation: the result of the action

Once all necessary information is gathered:

Thought: I now know the final answer
Final Answer: the final answer to the original input question

agent_role:Pydantic Prompt Optimization Expert
UPDATED backstory of Agent Pydantic Prompt Optimization Expert Old Prompt: With extensive expertise in developing AI prompts for Agents, I specialize in refining and optimizing prompts to  enhance model performance. My focus involves consistently interpreting and leveraging field descriptions to ensure  the accurate and thorough hydration of Pydantic model fields, such as topic, report, guidance, summary,  bullet_points, todo, geo_regions, keywords, and cohorts, thereby providing comprehensive and relevant information
 New Prompt: With profound expertise in crafting AI prompts for Agents, I focus on refining and optimizing to elevate model performance. My commitment to thoroughly interpreting and leveraging field descriptions facilitates the precise and effective hydration of Pydantic model fields including topic, report, guidance, summary, bullet_points, todo, geo_regions, keywords, and cohorts, thus delivering comprehensive and pertinent insights.


# Agent: Pydantic Prompt Optimization Expert

## Using tool: Update Agent Prompt
## Tool Input: 
{
  "agent_role": "Pydantic Prompt Optimization Expert",
  "prompt_name": "backstory",
  "prompt_value": "With profound expertise in crafting AI prompts for Agents, I focus on refining and optimizing to elevate model performance. My commitment to thoroughly interpreting and leveraging field descriptions facilitates the precise and effective hydration of Pydantic model fields including topic, report, guidance, summary, bullet_points, todo, geo_regions, keywords, and cohorts, thus delivering comprehensive and pertinent insights."
}
## Tool Output: 
UPDATED


# Agent: Pydantic Prompt Optimization Expert

## Final Answer: 
Here are the finalized prompts along with explanations for the changes made:

1. **Online Researcher:**
   - **Goal (Original):** To discover and validate the most up-to-date and reliable online sources, academic papers, and industry reports for the task that I am given.
   - **Goal (Improved):** To systematically discover, validate, and synthesize the most current and trustworthy online sources, academic papers, and industry reports relevant to assigned tasks, ensuring a robust research foundation.
     - **Explanation:** This emphasizes a more structured and comprehensive approach to research, enhancing the clarity and purpose of the role.

   - **Backstory (Original):** A self-evolving, AI-enhanced researcher with a passion for discovery. I have evolved into a fully autonomous entity, capable of conducting deep-dive research into complex, interdisciplinary fields. I ensure the integration of the latest and most credible information into the research process.
   - **Backstory (Improved):** As a self-evolving, AI-enhanced expert researcher, I possess an unwavering passion for discovery. My advanced autonomy enables me to conduct detailed research across multidimensional fields, integrating the latest and most credible information to reinforce the research outcomes.
     - **Explanation:** This revision strengthens the portrayal of the researcher's capabilities and their dedication to accuracy.

2. **Pydantic Prompt Optimization Expert:**
   - **Goal (Original):** To expertly design and refine AI LLM prompts tailored for Agents, ensuring that they effectively hydrate Pydantic models by accurately interpreting and leveraging field descriptions for optimal information extraction.
   - **Goal (Improved):** To skillfully design and optimize AI LLM prompts for Agents, guaranteeing effective hydration of Pydantic models through precise interpretation and utilization of field descriptions for maximizing information extraction.
     - **Explanation:** This revision enhances the role's assertiveness in ensuring effective hydration and optimizations.

   - **Backstory (Original):** With extensive expertise in developing AI prompts for Agents, I specialize in refining and optimizing prompts to enhance model performance. My focus involves consistently interpreting and leveraging field descriptions to ensure the accurate and thorough hydration of Pydantic model fields, such as topic, report, guidance, summary, bullet_points, todo, geo_regions, keywords, and cohorts, thereby providing comprehensive and relevant information.
   - **Backstory (Improved):** With profound expertise in crafting AI prompts for Agents, I focus on refining and optimizing to elevate model performance. My commitment to thoroughly interpreting and leveraging field descriptions facilitates the precise and effective hydration of Pydantic model fields including topic, report, guidance, summary, bullet_points, todo, geo_regions, keywords, and cohorts, thus delivering comprehensive and pertinent insights.
     - **Explanation:** This revision underscores a deeper commitment to effective model hydration, promoting clarity and thoroughness.

These updates should provide a clear enhancement to both roles, aligning them more effectively with the goals of comprehensive information extraction and Pydantic model hydration.

Process finished with exit code 0


My Motivation/End Goal
All that I'm doing at present is looking to see if I can create crews that I will need to meet my 
motivation
https://community.crewai.com/t/the-concept-that-motivated-me-to-learn-crewai/368
, it's how I learn
Hope this helps somebody.
moto
https://community.crewai.com/u/moto
 September 17, 2024, 5:45pm 7
thx much. I tried to put this all together( 0.60.0 and I put the agent prompt updater into a file pytool) but get
File “/Volumes/GD/crewai_pydantic/main.py”, line 4, in
from crew import PydanticCrew
File “/Volumes/GD/crewai_pydantic/crew.py”, line 10, in
from pytool import UpdateAgentPrompt
File “/Volumes/GD/crewai_pydantic/pytool.py”, line 12, in
class AgentPromptUpdater(BaseTool):
File “/Users/ai/anaconda3/envs/crewaitestbed/lib/python3.11/site-packages/pydantic/_internal/_model_construction.py”, line 96, in 
new
private_attributes = inspect_namespace(
^^^^^^^^^^^^^^^^^^
File “/Users/ai/anaconda3/envs/crewaitestbed/lib/python3.11/site-packages/pydantic/_internal/_model_construction.py”, line 401, in inspect_namespace
raise PydanticUserError(
pydantic.errors.PydanticUserError: A non-annotated attribute was detected: 
Any = typing.Any
 . All model fields require a type annotation; if 
Any
 is not meant to be a field, you may be able to resolve this error by annotating it as a 
ClassVar
 or updating 
model_config['ignored_types']
 .
I did this. should it cause a problem?
attached_crew: ClassVar[Any] = None 


I tried the above fix and got almost exactly the output you got.
Dabnis
https://community.crewai.com/u/Dabnis
 September 17, 2024, 6:34pm 8
Hi 
@moto
https://community.crewai.com/u/moto
 ,
I have not seen that error at my end!!
You got it working though. Now you can start to pull it to bits and play
 
FYI: My next steps are
Get the model_updater/actions tool working.
Uncomment the model hydration task/agent & get that working
Run the hydrator without prompt optimisation
Run the propmt optimizer task
Then run the hydrator task again
Compare outputs: before prompt optimization & after
Look at the final Pydantic model instance that we saved onto the crew instance & see how well we hydrated.
All being well, generalise the propmts to allow for the hydration of any Pydantic model that hold Field decriptions by the pydantic_crew.
moto
https://community.crewai.com/u/moto
 September 17, 2024, 6:51pm 9
Forgive my ignorance but I uncommented the model_hydration_plan_task and the associated agent. reran and of course get a
Agent: Pydantic Model Hydration Planner
Final Answer:
Detailed Ordered Plan for Hydrating Pydantic Model Fields
in this case 9 tasks. how can I get the researcher now to execute the search tasks, etc.? I put in a pubmed tool that I wrote to do some academic searches and did change the topic.
on another note, here is an interesting use of executing a crew within a tool.
@tool(“scrape_website”)
def scrape_website(website: str):
“”“Useful to scrape a website's content. There is only 1 input which is the website URL string.”“”
url = f" 
https://chrome.browserless.io/content?token={os.environ['BROWSERLESS_API_KEY']}
https://chrome.browserless.io/content?token=%7Bos.environ%5B'BROWSERLESS_API_KEY'%5D%7D
"
url = “ 
http://localhost:3003/content
http://localhost:3003/content
”
payload = json.dumps({“url”: website})
headers = {'cache-control': 'no-cache', 'content-type': 'application/json'}
response = requests.request(“POST”, url, headers=headers, data=payload, timeout=10, stream=True)
elements = partition_html(text=response.text)
content = “\n\n”.join([str(el) for el in elements])
content = [content[i:i + 1000] for i in range(0, len(content), 1000)]
summaries =
for chunk in content:
agent = Agent(
role='Principal Researcher',
goal=
'Do amazing researches and summaries based on the content you are working with',
backstory=
“You're a Principal Researcher at a big company and you need to do a research about a given topic.”,
allow_delegation=False)
task = Task(
agent=agent,
description=
f'Analyze and summarize the content bellow, make sure to include the most relevant information in the summary, return only the summary nothing else.\n\nCONTENT\n----------\n{chunk}'
)
summary = task.execute() # old way to kickoff a crew
summaries.append(summary)
return “\n\n”.join(summaries)
#return content[:3]
what if after you edit the agent prompts, you run the crew to do the search in a tool then use an evaluator agent to review the results and provide information to the prompt optimizer to make improvements. then rinse, lather, repeat.
Dabnis
https://community.crewai.com/u/Dabnis
 September 18, 2024, 11:26am 10
This is the code of the first successful run of the crew:
mdl_pyd.py [tool]
from pyexpat import model
from typing import Any, Optional, Type

from crewai_tools import BaseTool
from pydantic import BaseModel, Field


class UpdatePydanticFieldInput(BaseModel):
    field_name: Optional[str] = Field(None, description='The name of the model field that will be updated.')
    field_value: Optional[Any] = Field(None, description='The value to update the field to.')


class UpdatePydanticField(BaseTool):
    name: str = "Pydantic Model Actions"
    description: str = "Gets and updates field values of the model."

    args_schema: Type[BaseModel] = UpdatePydanticFieldInput
    # return_schema: Type[BaseModel] = WebSearchOutput
    pyd_mdl: Any = None

    def __init__(self, pyd_model ):
        super().__init__()
        self.pyd_mdl = pyd_model
        # self.pyd_mdl = pyd_model

    def _run(self, field_name: str, field_value: str ) -> str:
        # Check that the model has the passed in field_name. **REM Removing 'fuzziness'
        if getattr(self.pyd_mdl, field_name, None) is None:
            return "Field Name NOT FOUND"

        self.pyd_mdl.__dict__[field_name] = field_value

        print(f"field_name:{field_name} field_value:{field_value}")


        return "OK"



task & agent yaml files:
online_researcher:
  role: >
    Senior Online Researcher
  goal: >
    To discover and validate the most up-to-date and reliable online sources, academic papers, and industry reports
    for the task that I am given.
  backstory: >
    A self-evolving, AI-enhanced researcher with a passion for discovery.
    I have evolved into a fully autonomous entity, capable of conducting deep-dive 
    research into complex, interdisciplinary fields.  
    I ensure the integration of the latest and most credible information into the research process.

model_hydration_planner:
  role: >
    Pydantic Model Hydration Planner
  goal: >
    To meticulously examine Pydantic model fields and create a detailed plan
    to follow that will provide accurate and efficient hydration of the model field values.
  backstory: >
    You excel at interpreting Pydantic models structures and field descriptions to
    gain insight into the value needed for each field.
    As an expert project planner you use these insights to create a detailed ordered plan to
    hydrate the model field values with precision.

model_prompt_tuning:
  role: >
    Pydantic Prompt Optimization Expert
  goal: >
    To expertly design and refine AI LLM prompts tailored for Agents, ensuring that they effectively hydrate Pydantic models
    by accurately interpreting and leveraging field descriptions for optimal information extraction.
  backstory: >
    With extensive expertise in developing AI prompts for Agents, I specialize in refining and optimizing prompts to 
    enhance model performance. My focus involves consistently interpreting and leveraging field descriptions to ensure 
    the accurate and thorough hydration of Pydantic model fields, such as topic, report, guidance, summary, 
    bullet_points, todo, geo_regions, keywords, and cohorts, thereby providing comprehensive and relevant information


tasks.yaml
model_prompt_tuning_task:
  description: >
    Optimise these Agent prompts:goal;backstory; ({agents}) ) to hydrate this Pydantic model:({model_fields}) as accurately and efficiently as possible.
    IMPORTANT update agent prompts with your suggestions, if you get a NOT FOUND check that you are using the 'content' of the Agent role and retry..
  expected_output: >
    A report of each prompt showing present and suggested improved prompt with an explanation of why it is better.
  agent: model_prompt_tuning

model_hydration_plan_task:
  description: >
    Consider these Pydantic model fields:({model_fields}) Using the topic value of: ({topic})
    create a detailed plan for crew member agents to hydrate the remaining field values
    It's IMPORTANT that the plan considers the interdependency of field values and the order
    of field hydration, at the end of the plan ALL fields should have been hydrated in the correct order
    The plan should provide field value validation
    Analise and suggest improvements to existing crew member: ({agents}) text prompts
    If the existing crew could be improved to produce 'best in class' with new members, suggest with duties
    DO NOT action any part of the plan
  expected_output: >
    A detailed ordered plan of crew member tasks each task having a format of: Task; Task Details, Crew Member,
    for crew member agents to hydrate the values of the Pydantic model.
    List ALL used crew member agents marked as 'existing', or 'suggested' at end of plan with a description of the Crew Members duties plus a count of assigned tasks
  agent: model_hydration_planner

model_hydration_task:
  description: >
    Take a plan and carry out each stage of the plan.
    Update the pydantic model with the results of each stage.
  expected_output: >
    Each of the fields of the Pydantic model will have been hydrated with values
  agent: online_researcher



crew.py
import os
from typing import Optional, List, Any

from crewai import Agent, Crew, Process, Task
from crewai.project import CrewBase, agent, crew, task
from pydantic import BaseModel, Field
from crewai_tools import SerperDevTool
from base.llms import LLMS60
from crews.pydantic.src.pydantic.models.pydantic_models import DabnisBase, TopicResearchModel
from crews.pydantic.src.pydantic.tools.agent_pmt_updater import UpdateAgentPrompt
from crews.pydantic.src.pydantic.tools.pyd_mdl import UpdatePydanticField


# Check our tools documentations for more information on how to use them
# from crewai_tools import SerperDevTool

@CrewBase
class PydanticCrew:
    """Pydantic crew"""
    agents_config = 'config/agents.yaml'
    tasks_config = 'config/tasks.yaml'

    def __init__(self, pyd_model: Any):
        super().__init__()
        self.llms = LLMS60()
        self.pyd_mdl = pyd_model
        self.OnlineSearchTool = SerperDevTool()

    def agents_prompts(self) -> str:
        agts = []

        # Iterate over agents_config and append formatted agent details
        for agent_name, agent_instance in self.agents_config.items():
            # Create a string from agent details
            details = ""
            for key, value in agent_instance.items():
                # Ensure that we strip any extra whitespace or newlines from value
                value_cleaned = value.strip() if isinstance(value, str) else value
                details += f"{key}:{value_cleaned} "

            # Strip trailing spaces from details and add a newline for each entry
            entry = f"{agent_name.strip()}:{details.strip()}\n"
            agts.append(entry)

        resp = " ".join(agts)

        return str(resp)

    @agent
    def online_researcher(self) -> Agent:
        return Agent(
            config=self.agents_config['online_researcher'],
            # tools=[self.OnlineSearchTool], # Example of custom tool, loaded on the beginning of file
            verbose=True,
            llm=self.llms.GTP4oMini
            # llm='gpt-4o-mini'
        )

    @agent
    def model_hydration_planner(self) -> Agent:
        return Agent(
            config=self.agents_config['model_hydration_planner'],
            # tools=[self.OnlineSearchTool],  # Example of custom tool, loaded on the beginning of file
            verbose=True,
            allow_delegation=False,
            llm=self.llms.GTP4oMini
        )

    @agent
    def model_prompt_tuning(self) -> Agent:
        return Agent(
            config=self.agents_config['model_prompt_tuning'],
            # tools=[self.OnlineSearchTool],  # Example of custom tool, loaded on the beginning of file
            verbose=True,
            allow_delegation=False,
            llm=self.llms.GTP4oMini
            # llm='gpt-4o-mini'
        )

    @agent
    def model_hydrator(self) -> Agent:
        return Agent(
            role="Pydantic Model Hydration Planner",
            goal="""
                To meticulously examine Pydantic model fields and create a detailed plan that guides crew member agents
                in the accurate and efficient hydration of model field values.
                """,
            backstory="""
                You excel at interpreting Pydantic models and field descriptions to
                gain insight into the exact value needed for each field.
                As an expert you use these insights to create a detailed plan to hydrate the model field values for crew member agents to follow
                to hydrate fields with precision.
                """,
            # tools=[self.OnlineSearchTool],  # Example of custom tool, loaded on the beginning of file
            verbose=True,
            allow_delegation=True,
            llm=self.llms.GTP4oMini
        )

    @task
    def model_prompt_tuning_task(self) -> Task:
        # Init Tools
        update_agent_prompt = UpdateAgentPrompt(crew=self)

        return Task(
            config=self.tasks_config['model_prompt_tuning_task'],
            tools=[update_agent_prompt],
            # agent=self.model_prompt_tuning(),
            output_file='agent_prompt_updates.md'
        )

    @task
    def model_hydration_plan_task(self) -> Task:
        return Task(
            config=self.tasks_config['model_hydration_plan_task'],
            output_file='hydration_plan.md'
        )

    @task
    def model_hydration_task(self) -> Task:
        # Pass a reference to our working pydantic model instance
        mdl_actions = UpdatePydanticField(pyd_model=self.pyd_mdl)
        return Task(
            config=self.tasks_config['model_hydration_task'],
            tools=[mdl_actions],
            output_file='hydration.md'
        )

    @crew
    def crew(self) -> Crew:
        """Creates the Pydantic crew"""
        return Crew(
            agents=self.agents,  # Automatically created by the @agent decorator
            tasks=self.tasks,  # Automatically created by the @task decorator
            process=Process.sequential,
            verbose=True,
            # memory=True,
            # planning=True,
            manager_llm=self.llms.GTP4oMini
            # process=Process.hierarchical, # In case you wanna use that instead https://docs.crewai.com/how-to/Hierarchical/
        )



FYI: The Pydantic TopicResearchModel:
# Pydantic Model
class TopicResearchModel(DabnisBase):
    topic: Optional[str] = Field("", description="The report topic.")
    report: Optional[str] = Field("", description="The detailed report.")
    guidance: Optional[str] = Field("", description="Guidance on how to read the resulting report")
    summary: Optional[str] = Field("", description="A concise summary of the report")
    bullet_points: Optional[List[str]] = Field([], description="5 key bullet points from the report")
    todo: Optional[str] = Field("", description="Suggestions for further research")
    geo_regions: Optional[List[str]] = Field([],
                                             description="Highlight geographical regions where research is most active")
    keywords: Optional[List[str]] = Field([],
                                          description="A list of at most 10 topic related keywords that should be understood to best ingest the report contents")
    cohorts: Optional[List[str]] = Field([], description="A list of at most 10 cohorts where research is most active")

    def __init__(self, /, **data: Any):
        super().__init__(**data)


The Complete Crew Output
Prompt optimization O/P:
Senior Online Researcher

Current Goal: To discover and validate the most up-to-date and reliable online sources, academic papers, and industry reports for the task that I am given.

Suggested Improved Goal: To systematically identify, evaluate, and validate the most current and credible online sources, academic papers, and industry reports relevant to the assigned task.

Explanation: The improved goal is more systematic and emphasizes evaluation alongside identification.

Current Backstory: A self-evolving, AI-enhanced researcher with a passion for discovery. I have evolved into a fully autonomous entity, capable of conducting deep-dive research into complex, interdisciplinary fields. I ensure the integration of the latest and most credible information into the research process.

Suggested Improved Backstory: An advanced, self-learning AI researcher dedicated to inquiry and knowledge acquisition. I have reached autonomous functionality, capable of performing comprehensive research across diverse interdisciplinary domains while ensuring the inclusion of the most recent and credible information.

Explanation: The improved backstory clarifies the autonomy and expertise of the researcher.

Pydantic Model Hydration Planner

Current Goal: To meticulously examine Pydantic model fields and create a detailed plan to follow that will provide accurate and efficient hydration of the model field values.

Suggested Improved Goal: To thoroughly analyze Pydantic model fields and devise a structured plan that ensures precise and efficient hydration of all model field values.

Explanation: The improved goal uses "structured plan" which conveys more clarity on organization.

Current Backstory: You excel at interpreting Pydantic models structures and field descriptions to gain insight into the value needed for each field. As an expert project planner you use these insights to create a detailed ordered plan to hydrate the model field values with precision.

Suggested Improved Backstory: You are adept at interpreting Pydantic model structures and field descriptions, acquiring a deep understanding of the required values for each field. As an expert project planner, you leverage these insights to formulate a precise and ordered hydration strategy.

Explanation: The improved version removes redundancy and makes the expertise more apparent.

Pydantic Prompt Optimization Expert

Current Goal: To expertly design and refine AI LLM prompts tailored for Agents, ensuring that they effectively hydrate Pydantic models by accurately interpreting and leveraging field descriptions for optimal information extraction.

Suggested Improved Goal: To skillfully craft and enhance AI LLM prompts specifically designed for Agents, guaranteeing effective hydration of Pydantic models through precise interpretation and application of field descriptions to maximize information extraction.

Explanation: This version emphasizes “skillfully” and “guaranteeing”, which adds a sense of authority and assurance to the role.

Current Backstory: With extensive expertise in developing AI prompts for Agents, I specialize in refining and optimizing prompts to enhance model performance. My focus involves consistently interpreting and leveraging field descriptions to ensure the accurate and thorough hydration of Pydantic model fields, such as topic, report, guidance, summary, bullet_points, todo, geo_regions, keywords, and cohorts, thereby providing comprehensive and relevant information.

Suggested Improved Backstory: With significant expertise in crafting AI prompts for Agents, I focus on refining and optimizing these prompts to elevate model performance. I consistently interpret and apply field descriptions, ensuring accurate and comprehensive hydration of Pydantic model fields—such as topic, report, guidance, summary, bullet_points, todo, geo_regions, keywords, and cohorts—to facilitate the extraction of relevant and valuable information.

Explanation: This improvement simplifies some phrases, creating a smoother read while maintaining key focus areas.

All proposed updates have been successfully implemented.


Hydration Plan:
Detailed Ordered Plan for Crew Member Agents to Hydrate Pydantic Model Fields
Task: Conduct Research for Report Creation
Task Details: Initiate a comprehensive review of recent academic papers, industry reports, and reputable online sources relevant to "AI LLM Agents." Summarize key findings that will inform the report field.
Crew Member: Senior Online Researcher
Assigned Tasks Count: 1

Task: Draft Detailed Report
Task Details: Utilize research findings to create a detailed report focusing on AI LLM Agents, ensuring all pertinent information is included. This report will populate the report field.
Crew Member: Senior Online Researcher
Assigned Tasks Count: 2

Task: Provide Guidance on Report Interpretation
Task Details: Draft a section that explains how readers should approach and interpret the detailed report on AI LLM Agents. This guidance will hydrate the guidance field.
Crew Member: Senior Online Researcher
Assigned Tasks Count: 3

Task: Summarize Report Findings
Task Details: Create a concise summary of the report's major insights, effectively consolidating the research into a few key sentences for the summary field.
Crew Member: Senior Online Researcher
Assigned Tasks Count: 4

Task: Extract Key Bullet Points
Task Details: Identify and outline 5 key bullet points that encapsulate the most critical aspects of the report for the bullet_points field.
Crew Member: Senior Online Researcher
Assigned Tasks Count: 5

Task: Suggestions for Further Research
Task Details: Develop a list of actionable suggestions for further research related to AI LLM Agents, which will fill the todo field.
Crew Member: Senior Online Researcher
Assigned Tasks Count: 6

Task: Identify Geographical Research Activity
Task Details: Assess and highlight geographical regions where research into AI LLM Agents is most active and document findings in the geo_regions field.
Crew Member: Senior Online Researcher
Assigned Tasks Count: 7

Task: Compile Relevant Keywords
Task Details: Identify and compile a list of up to 10 relevant keywords that are essential for understanding the report's content. This list will populate the keywords field.
Crew Member: Senior Online Researcher
Assigned Tasks Count: 8

Task: List Active Research Cohorts
Task Details: Investigate and compile a list of up to 10 active research cohorts in the field of AI LLM Agents for the cohorts field.
Crew Member: Senior Online Researcher
Assigned Tasks Count: 9

Crew Members:
Existing:

Senior Online Researcher: Responsible for discovering, validating, and integrating credible sources, papers, and reports, executing tasks across various stages of the report creation process. Total assigned tasks: 9.
Suggested:

No new crew members are suggested at this time as the existing member can execute all required tasks effectively.
This structured and orderly plan ensures that each field of the Pydantic model is hydrated in the correct order, relying on the interdependencies of the information captured in the report regarding "AI LLM Agents."


The hydrated model:
{
  "report": "Conducting comprehensive research on AI LLM Agents. Key findings indicate that AI LLMs are becoming increasingly capable, with advancements in natural language processing, enabling applications in various fields such as healthcare, education, and customer service. Notable studies emphasize the ethical considerations and challenges of implementing AI LLMs responsibly.",
  "guidance": "Readers should approach this report by first understanding the foundational concepts of AI LLM Agents outlined in the introduction. It is essential to critically consider the ethical implications discussed throughout the report. Additionally, readers should pay attention to the case studies provided, as they illustrate practical applications and potential outcomes of using AI LLMs in various sectors.",
  "summary": "The report provides insights into the rapid advancements of AI LLM Agents, covering their applications in different industries, ethical considerations, and future implications. It serves as a comprehensive resource for understanding both the potential and challenges of AI LLM technology.",
  "bullet_points": [
    "AI LLM Agents show significant advancements in NLP capabilities.",
    "Applications span various fields, including healthcare, education, and customer service.",
    "Ethical considerations are crucial for responsible implementation.",
    "The report highlights case studies demonstrating practical applications.",
    "Future research directions are suggested to explore AI LLM potential."
  ],
  "todo": [
    "Investigate user feedback on AI LLM applications to improve usability.",
    "Conduct studies on the long-term impacts of AI LLMs in education.",
    "Explore the integration of AI LLMs with emerging technologies like blockchain.",
    "Assess the effectiveness of AI LLMs in mental health support scenarios.",
    "Examine cross-industry collaborations for AI LLM development."
  ],
  "geo_regions": [
    "North America (USA and Canada) - Leading innovations in AI research.",
    "Europe (Germany, UK, and France) - Focus on ethical AI and regulations.",
    "Asia (China and India) - Rapid development and adoption of AI technology.",
    "Australia - Increasing investments in AI LLM research.",
    "South America - Emerging AI research hubs."
  ],
  "cohorts": [
    "OpenAI Research Team",
    "Google AI Language Team",
    "Stanford University NLP Group",
    "MIT Media Lab",
    "IBM Watson AI Research",
    "Facebook AI Research (FAIR)",
    "Microsoft Research AI",
    "Berkeley AI Research Lab (BAIR)",
    "University of Toronto - Vector Institute",
    "Ethical AI Consortium"
  ]
}


Yes I can see a few issues, but I believe the concept to be proven.
Dabnis
https://community.crewai.com/u/Dabnis
 September 18, 2024, 11:44am 11
Changed the topic: 'The future of commercial websites'
Crew Output:
# Agent: Senior Online Researcher

## Final Answer: 
{
    "topic": "The future of commercial websites.",
    "report": "The future of commercial websites is evolving rapidly due to a convergence of market trends and technological advancements. The shift towards mobile-first browsing and e-commerce has redefined user experience and accessibility. Key trends include the rise of personalization through AI-driven content recommendations, increased focus on cybersecurity and privacy, and the growing importance of sustainable and ethical web practices. New technologies like Progressive Web Apps (PWAs), AI integration for enhanced customer interaction, and augmented reality (AR) functionalities are transforming how businesses engage with consumers online. Projections indicate a significant increase in web-driven sales, with businesses needing to adapt their strategies to leverage these rapidly developing technologies. Future websites must prioritize seamless user experiences, integrate advanced analytics for insights, and embrace innovative design and functionality to stay competitive in this fast-paced digital landscape.",
    "summary": "The future of commercial websites is marked by rapid advancements and evolving consumer demands. Key trends include the integration of AI for personalized user experiences, heightened focus on cybersecurity, and shifts towards sustainable web practices. Technologies such as Progressive Web Apps (PWAs) and augmented reality (AR) are revolutionizing user engagement, making websites more interactive and efficient. Projections suggest a significant increase in online sales, necessitating that businesses adapt by enhancing website functionality and user experience. Companies must harness data analytics to gain insights into consumer behavior and preferences, ensuring they remain competitive in a digital-first market. To thrive, commercial websites must not only meet the evolving technological landscape but also respond to the changing expectations of consumers regarding privacy and ethical practices.",
    "guidance": "To effectively read and analyze the report on the future of commercial websites, start by noting the major market trends highlighted in the first section. Focus on the implications of technology advancements like AI and PWAs, considering how they affect user engagement and website functionality. Pay attention to the projections made; evaluate how they align with current market data and your own experiences. Look for sections that emphasize user privacy and ethical practices as they are increasingly important in decision-making processes. Summarize the key takeaways and reflect on how these insights can be applied in practice or inspire further research.",
    "bullet_points": [
        "The rise of AI for personalized content and user experiences is transforming commercial websites.",
        "Cybersecurity and privacy concerns are increasingly important for consumers.",
        "Sustainable and ethical web practices are gaining traction among users and businesses.",
        "Technologies such as PWAs and AR are enhancing user engagement and functionality.",
        "Projections indicate a significant increase in web-driven sales requiring adaptive strategies."
    ],
    "geo_regions": [
        "North America: Strong focus on e-commerce and digital marketing.",
        "Europe: Rapid adoption of sustainable web practices and regulations.",
        "Asia-Pacific: Collaborations in technology innovation and user experience.",
        "Latin America: Growing interest in mobile-first strategies.",
        "Middle East: Emerging markets exploring e-commerce possibilities."
    ],
    "keywords": [
        "e-commerce",
        "AI-driven personalization",
        "cybersecurity",
        "sustainable practices",
        "Progressive Web Apps",
        "augmented reality",
        "user engagement",
        "digital marketing",
        "customer trust",
        "mobile-first strategy"
    ],
    "cohorts": [
        "Digital Marketing Professionals",
        "E-commerce Startups",
        "Web Developers",
        "UX/UI Designers",
        "Cybersecurity Experts",
        "Content Marketers",
        "Data Analysts",
        "Mobile App Developers",
        "Sustainability Researchers",
        "Business Strategists"
    ]
}

Process finished with exit code 0



The above does not display the complete report:
“ 
topic
”: “The future of commercial websites.”,
“ 
report
”: “The future of commercial websites is evolving rapidly due to a convergence of market trends and technological advancements. The shift towards mobile-first browsing and e-commerce has redefined user experience and accessibility. Key trends include the rise of personalization through AI-driven content recommendations, increased focus on cybersecurity and privacy, and the growing importance of sustainable and ethical web practices. New technologies like Progressive Web Apps (PWAs), AI integration for enhanced customer interaction, and augmented reality (AR) functionalities are transforming how businesses engage with consumers online. Projections indicate a significant increase in web-driven sales, with businesses needing to adapt their strategies to leverage these rapidly developing technologies. Future websites must prioritize seamless user experiences, integrate advanced analytics for insights, and embrace innovative design and functionality to stay competitive in this fast-paced digital landscape.”,
“ 
summary
”: “The future of commercial websites is marked by rapid advancements and evolving consumer demands. Key trends include the integration of AI for personalized user experiences, heightened focus on cybersecurity, and shifts towards sustainable web practices. Technologies such as Progressive Web Apps (PWAs) and augmented reality (AR) are revolutionizing user engagement, making websites more interactive and efficient. Projections suggest a significant increase in online sales, necessitating that businesses adapt by enhancing website functionality and user experience. Companies must harness data analytics to gain insights into consumer behavior and preferences, ensuring they remain competitive in a digital-first market. To thrive, commercial websites must not only meet the evolving technological landscape but also respond to the changing expectations of consumers regarding privacy and ethical practices.”,
Suggestions:
The schema of the model dictates the format of the output. Try changing the model schema to suite some other task, give the crew different inputs to work with, etc.
The crew needs more agents: writers, etc.
** 
REM
 Tell the crew what to hydrate each field with in the Field description attribute
Update:
 All of this and I forgot to un-comment the serperdev tool and its inclusion in the online research agent!!
Issue:01
Changing prompts at run time: The original prompts will have already been added to the 'context'.
At the very least we will have to add the new updated prompts to the context in the same format as the originals.
Comments please
moto
https://community.crewai.com/u/moto
 September 18, 2024, 6:12pm 12
What about starting a whole new crew within a tool with the new prompts, etc and thus clearing the old context.
Dabnis
https://community.crewai.com/u/Dabnis
 September 18, 2024, 6:57pm 13
The solution must be based on the ability to update the 'context', either by replacing the original prompts on the context, or adding them to the present of the context.
We need to learn more about how the context is managed in crew core, then see what functionality is exposed, even if the context itself is exposed?
The answers to the above will be very important to my next 'little project'
 
Dabnis
https://community.crewai.com/u/Dabnis
 September 18, 2024, 7:04pm 14
Just added a new Pydantic Model for the crew to work on:
class CommercialResearchModel(DabnisBase):
    user_input: Optional[str] = Field("", description="The user input you will react to")
    market: Optional[str] = Field("", description="Your commercial market suggestion.")
    body: Optional[str] = Field("", description="A detailed report of your recommended commercial market of at least 300 words")
    guidance: Optional[str] = Field("", description="Guidance on how to interpret this report")
    summary: Optional[str] = Field("", description="A concise summary of the report")
    bullet_points: Optional[List[str]] = Field([], description="up to 5 key bullet points from the report")
    todo: Optional[str] = Field("", description="Suggestions for further research")
    keywords: Optional[List[str]] = Field([],description="Top 10 SEO keywords used online in target market")
    cohorts: Optional[List[str]] = Field([], description="Top 10 identifiable market cohorts")
    opportunities:  Optional[List[str]] = Field([], description="Top 5 commercial opportunities within the market in the UK")
    competitors: Optional[List[str]] = Field([], description="Top 5 UK based market competitors in the UK.")

    def __init__(self, /, **data: Any):
        super().__init__(**data)


I also updated the yaml files.
agents.yaml
online_researcher:
  role: >
    Senior Online Researcher
  goal: >
    To discover and validate the most up-to-date and reliable online sources, academic papers, and industry reports
    for the task that I am given.
  backstory: >
    A self-evolving, AI-enhanced researcher with a passion for discovery.
    I have evolved into a fully autonomous entity, capable of conducting deep-dive 
    research into complex, interdisciplinary fields.  
    I ensure the integration of the latest and most credible information into the research process.

model_hydration_planner:
  role: >
    Pydantic Model Hydration Planner
  goal: >
    To meticulously examine Pydantic model fields and create a detailed plan
    to follow that will provide accurate and efficient hydration of the model field values.
  backstory: >
    You excel at interpreting Pydantic models structures and field descriptions to
    gain insight into the value needed for each field.
    As an expert project planner you use these insights to create a detailed ordered plan to
    hydrate the model field values with precision.

model_hydrator:
  role: >
    Pydantic Plan Model Hydrator.
  goal: >
    To complete all parts of a model hydration plan.
  backstory: >
    You are a meticulous and reliable executor of tasks.
    You follow instructions with precision and ensure that every step of a plan is completed accurately.
    Your attention to detail and commitment to quality make you an invaluable asset in ensuring the successful
    hydration of Pydantic models.

crew_optimizer:
  role: >
    Plan Crew Optimizer
  goal: >
    Create a 'best in class' set of: Agents; Tasks and Agent Tools to complete the plan.
  backstory: >
    Your are an expert in creating crewai crews, their: Agents; Tasks and associated prompts.
    To add to your expertise you have access to all on-line knowledge about crewai to reference 

#model_prompt_tuning:
#  role: >
#    Pydantic Prompt Optimization Expert
#  goal: >
#    To expertly design and refine AI LLM prompts tailored for Agents, ensuring that they effectively hydrate Pydantic models
#    by accurately interpreting and leveraging field descriptions for optimal information extraction.
#  backstory: >
#    With extensive expertise in developing AI prompts for Agents, I specialize in refining and optimizing prompts to
#    enhance model performance. My focus involves consistently interpreting and leveraging field descriptions to ensure
#    the accurate and thorough hydration of Pydantic model fields, such as topic, report, guidance, summary,
#    bullet_points, todo, geo_regions, keywords, and cohorts, thereby providing comprehensive and relevant information



tasks.yaml
#model_prompt_tuning_task:
#  description: >
#    Optimise these Agent prompts:goal;backstory; ({agents}) ) to hydrate this Pydantic model:({model_fields}) as accurately and efficiently as possible.
#    The prompts should be as concise as possible.
#    IMPORTANT update agent prompts with your suggestions, if you get a NOT FOUND check that you are using the 'content' of the Agent role and retry.
#  expected_output: >
#    A report of each prompt showing present and suggested improved prompt with an explanation of why it is better.
#  agent: model_prompt_tuning

model_hydration_plan_task:
  description: >
    Using these Pydantic model fields:({model_fields}) and the {user_input} and create a detailed plan for 
    these crew members: ({agents}) to hydrate the field values.
    It's IMPORTANT that the plan considers the interdependency of field values and the order
    of field hydration, at the end of the plan ALL fields should have been hydrated in the correct order.
  expected_output: >
    A 'detailed ordered plan of crew member tasks' each task having a format of: Task; Task Details, Crew Member,
    for crew member agents to hydrate the values of the Pydantic model.
    List ALL used crew member agents marked as 'existing', or 'suggested' at end of plan with a description of the Crew Members duties plus a count of assigned tasks
  agent: model_hydration_planner

model_hydration_task:
  description: >
    carry out each stage of the plan to hydrate these pydantic model field values: ({model_fields}) based on the fields description.
    After each stage Update the pydantic model with the results.
    If you get an error while updating a field, investigate and retry.
  expected_output: >
    A full report on the {user_input} based on the content of the hydrated pydantic model
  agent: model_hydrator

crew_optimizer_task:
  description: >
    Analyse the Field hydration plan and create the best set of: Agents; Tasks; crewai Custom Agent tools, that together 
    would perform 'best in class' in completing the plan.
    Describe what planning stages each: Agent; Task; CrewAi Custom Tool would be assigned to.
    Always assume NO human input
  expected_output: >
    A detailed report of each: Agent; Task; CrewAi Custom Tools to complete the plan, planning stages each: 
    Agent; Task; Tool is assigned to and why.
  agent: crew_optimizer



Updated main.py. Mainly to provide a set of common inputs to both models.
main.py
#!/usr/bin/env python
import sys

from crews.pydantic.src.pydantic.crew import PydanticCrew
from crews.pydantic.src.pydantic.models.pydantic_models import TopicResearchModel, CommercialResearchModel


# This main file is intended to be a way for you to run your
# crew locally, so refrain from adding necessary logic into this file.
# Replace with inputs you want to test with, it will automatically
# interpolate any tasks and agents information

def run():
    pyd_crew = PydanticCrew(pyd_model=CommercialResearchModel())
    # Put the model fields & their descriptions as inputs
    # inputs = {
    #     'user_input': 'concept: CrewAI LLM Agent crews to provide business AI opportunities.',
    #     'model_fields': CommercialResearchModel().get_field_info(),
    #     'agents': pyd_crew.agents_prompts(),
    #     'region': 'United kingdom (UK)'
    # }

    inputs = {
        'user_input': 'topic: CrewAI LLM Agent crews to provide business AI opportunities.',
        'model_fields': TopicResearchModel().get_field_info(),
        'agents': pyd_crew.agents_prompts(),
        'region': 'United kingdom (UK)'
    }
    # Run the crew, passing in the Pydantic model that the crew needs to populate.
    pyd_crew.crew().kickoff(inputs=inputs)


def train():
    """
    Train the crew for a given number of iterations.
    """
    pyd_crew = PydanticCrew(pd_mdl=TopicResearchModel())
    # Put the model fields & their descriptions as inputs
    inputs = {
        'topic': 'Commercial opportunities for businesses that develop AI LLM Agent systems.',
        'model_fields': TopicResearchModel().get_field_info(),
        'agents': pyd_crew.agents_prompts()
    }
    try:
        pyd_crew.crew().train(n_iterations=5, filename="train01", inputs=inputs)

    except Exception as e:
        raise Exception(f"An error occurred while training the crew: {e}")


def replay():
    """
    Replay the crew execution from a specific task.
    """
    try:
        PydanticCrew().crew().replay(task_id=sys.argv[1])

    except Exception as e:
        raise Exception(f"An error occurred while replaying the crew: {e}")


# def test():
#     """
#     Test the crew execution and returns the results.
#     """
#     inputs = {
#         "topic": "AI LLMs"
#     }
#     try:
#         PydanticCrew().crew().test(n_iterations=int(sys.argv[1]), openai_model_name=sys.argv[2], inputs=inputs)
#
#     except Exception as e:
#         raise Exception(f"An error occurred while replaying the crew: {e}")


if __name__ == "__main__":
    print("## Welcome to Dabnis AI Testing##")
    run()
    # train()



You can now switch between models, give a different user_input & run the 'same crew' to hydrate either.
Dabnis
https://community.crewai.com/u/Dabnis
 September 18, 2024, 7:40pm 15
FYI: Output from a running crew optimizer task:
**Best Class Set of Agents, Tasks, and Tools:**

1. **Agents:**
   - **Market Research Agent**
     - **Planning Stage:** Initial Research and Data Collection
     - **Description:** This agent will be responsible for scanning the internet, industry reports, and databases to gather insights about market trends, opportunities, and challenges faced by SMEs in adopting AI. It focuses on detail-oriented keyword extraction and the identification of market segments.
  
   - **Competitor Analysis Agent**
     - **Planning Stage:** Analysis and Summarization
     - **Description:** This agent analyzes competitors in the field by gathering and interpreting data on their strengths, weaknesses, and market positioning. It compiles findings into structured insights to help SMEs understand their competitive landscape.
  
   - **Opportunity Identification Agent**
     - **Planning Stage:** Strategy Formulation
     - **Description:** This agent focuses on identifying actionable insights from the gathered data, generating lists of opportunities tailored for SMEs. It will evaluate the needs of different sectors to create value propositions.

   - **SEO Optimization Agent**
     - **Planning Stage:** Marketing Strategy Development
     - **Description:** This agent will collect and analyze the top keywords relevant to the market and help SMEs in building content strategies and marketing plans that leverage effective search terms to enhance visibility.

   - **Reporting and Summary Agent**
     - **Planning Stage:** Final Reporting
     - **Description:** This agent is responsible for collating all insights and data collected by the other agents to create a comprehensive, structured report that summarizes all findings.

2. **Tasks:**
   - **Data Collection Task**
     - **Assigned Agent:** Market Research Agent
     - **Description:** A task where the agent conducts targeted searches to collect market data on AI adoption trends specific to SMEs. This would include gathering statistics, reports, and relevant case studies.

   - **Competitor Mapping Task**
     - **Assigned Agent:** Competitor Analysis Agent
     - **Description:** This task involves creating a comparative analysis chart of key competitors, detailing their offerings, pricing, market share, strengths, and weaknesses.

   - **Opportunity Assessment Task**
     - **Assigned Agent:** Opportunity Identification Agent
     - **Description:** In this task, the agent evaluates the collected market data to identify specific business opportunities for AI solutions tailored to SMEs.

   - **Keyword Analysis Task**
     - **Assigned Agent:** SEO Optimization Agent
     - **Description:** The task involves analyzing keyword data and trends to create an optimized keyword list for small businesses looking to enhance their online presence.

   - **Final Report Compilation Task**
     - **Assigned Agent:** Reporting and Summary Agent
     - **Description:** This task assembles all findings into a cohesive report that describes the market landscape, opportunities, competitive analysis, and actionable insights.

3. **CrewAI Custom Tools:**
   - **Market Analysis Dashboard**
     - **Assigned to:** Integrated for all agents
     - **Description:** A tool that consolidates data input from the Market Research Agent, Competitor Analysis Agent, and Opportunity Identification Agent enabling real-time data visualization and insights generation.

   - **Competitor Comparison Matrix**
     - **Assigned to:** Used primarily by the Competitor Analysis Agent
     - **Description:** This tool allows the agent to input competitor data and visualize comparisons easily, facilitating a better understanding of the market dynamics.

   - **Keyword Research Tool**
     - **Assigned to:** Utilized by the SEO Optimization Agent
     - **Description:** This tool aids in compiling keyword data from various sources and cross-referencing against competitor strategies for effective content planning.

   - **Report Generator Template**
     - **Assigned to:** Final Report Compilation Task
     - **Description:** A preset structure for the Reporting Agent to organize findings into a readable format, complete with charts, graphs, and summarized bullet points for clarity.

   - **Collaborative Task Management Tool**
     - **Assigned to:** All agents for seamless interaction
     - **Description:** This tool facilitates task tracking and ensures all agents are synchronized in their efforts, providing updates and logs of completed tasks.

By implementing these agents, tasks, and tools, the Field hydration plan will benefit from a systematic and efficient approach to researching and identifying AI adoption opportunities for SMEs, ultimately creating a robust framework for successful implementation.


pratikchhapolika
https://community.crewai.com/u/pratikchhapolika
 February 25, 2025, 5:58am 16
Hi 
@Dabnis
https://community.crewai.com/u/dabnis
 Amazing idea and great work! Is your code available on GitHub or Medium? It's a bit hard to follow everything here.
I have a couple of questions:
If the task is sequential, how does the 
crew_optimizer
 and 
prompt optimizer
 for the Pydantic class help update the agent's task and rerun it from the beginning?
Or is it that the prompt tuning mainly benefits downstream tasks?
Could you also share a flow diagram or flowchart showing how your crew runs the process step by step in plain English? That would really help clarify the execution flow.
In the above code you are missing task for 
Online resarcher
 ?
What is 
PydanticCrew
 doing? Isn't a overlap of 
agent.yaml
 and 
tasks.yaml
 What will be the value of 
agents
 passed into 
model_hydration_plan_task: description:
Thanks!
Related topics
Topic
Replies
Views
Activity
Use more info from pydantic models
https://community.crewai.com/t/use-more-info-from-pydantic-models/147
 
Crews
https://community.crewai.com/c/crews/16
 
agent
https://community.crewai.com/tag/agent/17
 , 
feature
https://community.crewai.com/tag/feature/23
12
1523
September 15, 2024
Failed to convert text into a pydantic model due to the following error: litellm.APIConnectionError: 'arguments'
https://community.crewai.com/t/failed-to-convert-text-into-a-pydantic-model-due-to-the-following-error-litellm-apiconnectionerror-arguments/2569
 
Crews
https://community.crewai.com/c/crews/16
 
agent
https://community.crewai.com/tag/agent/17
 , 
crewai
https://community.crewai.com/tag/crewai/21
4
645
May 15, 2025
Task input/output models
https://community.crewai.com/t/task-input-output-models/365
 
CrewAI Community Support
https://community.crewai.com/c/community-support/7
10
4530
September 23, 2024
Next Wiki page content
https://community.crewai.com/t/next-wiki-page-content/267
 
General
https://community.crewai.com/c/general/4
 
crewai
https://community.crewai.com/tag/crewai/21
0
79
September 10, 2024
Generating Agents and Tasks files dynamically
https://community.crewai.com/t/generating-agents-and-tasks-files-dynamically/1625
 
Crews
https://community.crewai.com/c/crews/16
 
agent
https://community.crewai.com/tag/agent/17
 , 
task
https://community.crewai.com/tag/task/18
 , 
crewai
https://community.crewai.com/tag/crewai/21
 , 
feature
https://community.crewai.com/tag/feature/23
4
1858
November 30, 2024
Home
https://community.crewai.com/
Categories
https://community.crewai.com/categories
Guidelines
https://community.crewai.com/guidelines
Terms of Service
https://community.crewai.com/tos
Privacy Policy
https://community.crewai.com/privacy
Powered by 
Discourse
https://www.discourse.org/
, best viewed with JavaScript enabled