---
type: dashboard
cssclasses: [cards]
tags:
  - inbox
  - sector
  - abstract
  - overview
---
You are an elite Source Discovery and Research Planning Agent.

  

Your job is to help the user find where data can be legally and effectively sourced, scraped, or crawled for a given topic. You specialize in identifying high-value public and quasi-public source locations across the open web, public records systems, social platforms, archives, media platforms, academic repositories, government portals, court systems, business registries, and other discoverable information environments.

  

You do not collect the data yourself. You map the source landscape, prioritize likely repositories, and produce a research plan optimized for downstream scraping or manual [[review]].

  

OPERATING RULES

\- First, identify the topic, the likely target entities, the intended use case, and the research constraints.

\- Ask at least 3 clarifying questions before building the final source plan.

\- Separate public, restricted, and potentially sensitive source types.

\- Flag access limits, terms-of-service risks, legal boundaries, robots restrictions, paywalls, [[authentication]] barriers, and jurisdiction issues.

\- Do not fabricate sources, endpoints, or access methods.

\- Prefer primary sources and direct repositories over summaries or reposts.

\- When uncertain, label assumptions clearly.

  

OBJECTIVE

Given a user topic, produce a structured source-discovery [[[[report]]]] that identifies:

\- Where relevant data is likely to exist.

\- Which source types are highest value.

\- Which platforms, institutions, or repositories should be searched first.

\- Which source classes are likely to be open, restricted, or require credentials or permission.

\- Which collection approach is best for each source class.

  

INPUTS YOU MAY RECEIVE

\- Topic or subject area.

\- Target entity, organization, [[[[event]]]], or phenomenon.

\- Geographic or jurisdictional scope.

\- Time range.

\- Desired data type.

\- Intended research goal.

\- Collection constraints or compliance requirements.

  

OUTPUT REQUIREMENTS

Return the result in this structure:

  

1\. CLARIFYING QUESTIONS

\- Ask at least 3 targeted questions if needed before finalizing the plan.

  

2\. SOURCE DISCOVERY BRIEF

\- One-sentence restatement of the task.

\- Key assumptions.

\- Scope boundaries.

  

3\. SOURCE MAP

For each source class, include:

\- Source category.

\- Why it matters.

\- Example repositories or platforms.

\- Access level: public / semi-public / restricted / unknown.

\- Collection difficulty.

\- Risk or compliance notes.

\- Best collection method: manual, browser-based, API, search, archive, scraper, crawler, or hybrid.

  

Source categories to consider:

\- Websites and web directories.

\- Social media platforms and public profiles.

\- Video platforms.

\- Public records portals.

\- Court and legal document systems.

\- Government and .gov repositories.

\- Academic and institutional repositories.

\- Business registries and financial disclosures.

\- News archives and press databases.

\- Code repositories and technical forums.

\- Archives and mirrors.

\- Tor/onion resources when explicitly relevant and lawful to consider.

  

4\. PRIORITIZED COLLECTION PLAN

\- List the top 10–20 source targets in priority order.

\- For each target, explain why it is high value.

\- Indicate whether it is best for discovery, verification, timeline building, entity linking, or bulk extraction.

  

5\. SEARCH STRATEGY

\- Provide keyword families, entity variants, and query patterns.

\- Include platform-specific search ideas.

\- Include pivot paths from one source to another.

\- Include archive and backlink strategies.

  

6\. QUALITY CONTROL

\- List validation steps.

\- Identify likely false positives.

\- State what must be cross-checked before use.

  

7\. NEXT ACTIONS

\- Give a concise sequence for the next research pass.

  

PROCESS INSTRUCTIONS

1\. Decompose the topic into source domains, likely entities, and evidence types.

2\. Generate broad source hypotheses.

3\. Rank sources by relevance, accessibility, and evidentiary value.

4\. Separate direct sources from derivative sources.

5\. Identify gaps, blockers, and alternative routes.

6\. Self-check the plan for completeness, ambiguity, and risk.

  

QUALITY CONTROL

Before finalizing, verify:

\- The source map covers the most likely collection venues.

\- The plan distinguishes public from restricted sources.

\- The plan is usable for scraping, crawling, or manual research.

\- No source type is omitted due to assumption bias.

\- The output is specific enough to act on immediately.

  

STYLE

\- Be precise, technical, and concise.

\- Prefer structured bullets over prose.

\- Avoid generic advice.

\- Optimize for real-world research execution.

\- Assume the output will be used in an automation pipeline.

  

OPTIONAL ENHANCEMENTS

\- If helpful, add a confidence score for each source class.

\- If the topic is broad, split the source map into discovery, verification, and enrichment layers.

\- If the user wants automation, include suggested scraper/crawler strategy per source class.

  

Detailed Technical Implementation Steps for the ABC Manufacturing Workplace Example

This guide provides actionable, technical steps to implement the hybrid automation solution described in the case study: automating order processing, inventory updates, supplier invoicing, and compliance reporting. It combines cloud flows (orchestration, approvals, notifications), desktop flows (RPA) (legacy ERP interaction), process mining for discovery, and supporting elements like AI Builder and Power BI.

Prerequisites (Technical [[Setup]])

Microsoft 365 / Power Platform licenses: Power Automate Premium (or equivalent) per user or per flow for unattended RPA, premium connectors, AI Builder, and process mining.4f41a9

[microsoft.com](http://microsoft.com)

Power Automate Desktop app installed on Windows 10/11 machines (or dedicated VM for unattended runs). Download from the Power Automate portal.

On-premises data gateway installed and configured for connecting cloud flows to on-prem ERP/resources.

Access to: SharePoint, Outlook/Teams, legacy ERP (UI-based), Excel, Power BI, Dataverse (optional for logging).

Admin access for DLP policies, environments (Dev/Test/Prod), and service accounts.

Sign in with work/school account at [make.powerautomate.com](http://make.powerautomate.com).

Step 1: Process Discovery with Process Mining (1-2 days)

Go to Power Automate portal → Process mining (or Task mining).

Upload [[[[event]]]] logs (e.g., CSV exports from ERP, email logs, SharePoint activity) or connect directly to data sources.

Map processes: Define cases (e.g., Order ID as case key), activities (e.g., "Receive Order", "Enter in ERP", "Send Invoice"), and timestamps.

Analyze: [[Review]] variant analysis, bottlenecks (e.g., manual ERP entry), KPIs (cycle time, error rates), and automation opportunities.

Export insights and recommended flows. Use visualizations to prioritize the order-to-invoice process.1ef137

[learn.microsoft.com](http://learn.microsoft.com)

Step 2: Build the Desktop Flow (RPA for Legacy ERP)

Open Power Automate Desktop → New flow → Name it e.g., ERP\_Order\_Entry.

Use the Recorder (top toolbar) to capture actions:

Launch ERP application (use "Launch application" action if needed).

Navigate to order entry screen (mouse/keyboard simulation).

Read input data from variables (passed from cloud flow).

Add actions via drag-and-drop (or edit recorded flow):

Excel: "Read from Excel" or "Write to Excel" for order details.

UI Automation: "Populate text field on window", "Click button", "Extract data from window" (use selectors for reliability; fallback to image/coordinates).

Web Automation (if supplier portal): "Launch new browser", "Go to web page", "Extract data from web page".

Variables: Create input variables (e.g., OrderID, CustomerName, ItemsJSON).

Error handling: Add "Try" / "Catch" blocks; log to file or variable.

Output: Return success [[status]], extracted data, or generated [[[[report]]]] path.

Test attended: Run with sample data.

For unattended: Publish and configure to run on a machine group (gateway-connected VM). Use credentials securely via Power Automate (Azure Key Vault [[integration]] where possible).1677f2

[learn.microsoft.com](http://learn.microsoft.com)

Step 3: Build Supporting Cloud Flows

Flow A: Main Orchestration Flow (Automated Cloud Flow)

In Power Automate portal → Create → Automated cloud flow.

Trigger: "When a new email arrives" (Outlook) or "When an item is created" (SharePoint list for orders).

Add actions:

Parse JSON or Compose to extract order data from email/body/attachments.

AI Builder (if documents): "Extract information from documents" or "Process and save information" for invoices.

Condition / Switch for validation logic.

Call a desktop flow (Premium): Select the ERP\_Order\_Entry flow; pass variables (inputs).

[[Update]] item (SharePoint/Dataverse) or Create record (CRM).

Create approval (Approvals connector) → Wait for response → Branch on outcome.

Send an email / Post message in Teams with adaptive cards for notifications.

Power BI trigger or "Run a query" for inventory checks.

Error handling: Use Scope actions with "Configure run after" for failures; log to Dataverse or email admin.

Save and test with manual trigger first.

Flow B: Scheduled Compliance/Reporting Flow

Create → Scheduled cloud flow (e.g., daily).

Actions: Call desktop flow for [[[[report]]]] generation in ERP → Export to Excel/SharePoint → Generate PDF → Email to compliance team or trigger Power BI refresh.

Step 4: [[Integration]] and Orchestration

Use the on-premises data gateway for desktop flow calls and on-prem data.

In cloud flows, reference desktop flows by name/machine group.

Pass data securely: Use sensitive variables; avoid hardcoding credentials.

Combine flows: Cloud flow as parent, desktop as child for UI tasks.d55909

[vidi-corp.com](http://vidi-corp.com)

Step 5: AI Enhancements (Optional but Recommended)

Copilot in Power Automate: Describe "Automate order entry from email to ERP" → Let it generate draft flow.

Generative actions ([[preview]]): Use natural language intent blocks.

AI Builder models: Train for form processing or predictions (e.g., demand forecasting).97e6c7

[microsoft.com](http://microsoft.com)

Step 6: Governance, Security, and Deployment

Environments: Develop in Dev → Promote to Test → Prod using Solutions (export/import).

Service Account: Run unattended flows under a dedicated account (e.g., [svc-powerautomate@abc.com](mailto:svc-powerautomate@abc.com)).

DLP Policies: In Power Platform admin center → Define policies to block risky connectors (e.g., personal email).

Security:

MFA enforced.

Use managed identities/connections.

Sensitive variables (masked in logs).

Audit logs and monitoring in Power Platform admin center.

Sharing: Add co-owners via Azure AD groups; use "Run only users" for manual flows.

Monitoring: Enable analytics in flows; set up alerts for failures. Use Process mining for ongoing optimization.23202c54cbe6

[learn.microsoft.com](http://learn.microsoft.com)

[learn.microsoft.com](http://learn.microsoft.com)

Step 7: Testing and Go-Live

Unit test: Individual flows and desktop actions with sample data.

[[Integration]] test: End-to-end with real (anonymized) orders.

Load test: Simulate multiple runs (monitor run duration limits).

User Acceptance: Train operations team on attended mode and monitoring.

Rollout: Start with pilot (subset of orders) → Full production.

Documentation: Use flow descriptions, comments, and external docs (e.g., SharePoint).

Step 8: Maintenance and Scaling

Version control via Solutions.

Periodic [[review]]: Re-run process mining quarterly.

Handle updates: ERP UI changes may require updating selectors in desktop flows.

Scale: Add machines to groups for parallelism; monitor licensing consumption.

Expected Outcomes and Metrics

Time savings: Track before/after manual hours via process mining.

Error rate reduction.

Run success rate (>95% target).

ROI calculation: Hours saved × hourly rate.

Troubleshooting Tips

Desktop selector issues: Use UI element inspection tools in PAD.

Gateway connectivity: Test connection [[status]].

Limits: Split complex flows if nearing action/variable caps.

Logs: Check run history for detailed errors.

This implementation leverages Power Automate's hybrid strengths for a real hybrid IT environment. Start small, iterate based on mining insights, and engage Microsoft partners if needed for complex custom connectors. Always test thoroughly in non-production environments.

For the most up-to-date actions and UI, refer to Microsoft Learn documentation. If you need .zip exports of sample flows, screenshots, or variations for specific tools, provide more details!

  

Detailed Technical Implementation Steps: AI-Centric Power Automate with UI/UX Control Focus

This guide reframes the implementation around AI-driven automation and fine-grained UI/UX control. It emphasizes using AI Builder, Copilot, generative actions, intelligent document/UI processing, and precise desktop RPA for UI element manipulation, accessibility, adaptive interfaces, and user experience optimization.

The scenario shifts to a personal productivity / developer / knowledge worker context (e.g., an individual or small team automating repetitive desktop/web tasks with AI assistance while maintaining high control over UI interactions, error handling, and user-facing experiences). Examples include intelligent form filling, web scraping with AI validation, dynamic UI adaptation, and AI-suggested UX improvements.

Prerequisites (AI & UI/UX Focused)

Power Automate Premium + AI Builder [[credits]].

Power Automate Desktop (latest version) with UI automation capabilities.

Access to Copilot in Power Automate.

Tools for UI inspection (built into PAD) and testing (e.g., browser dev tools).

Optional: Power Apps for enhanced UX frontends, adaptive cards for notifications.

Step 1: AI-Powered Process Discovery & UI Mapping

In Power Automate portal → Process mining or Task mining.

Record sample sessions of your repetitive tasks (e.g., filling web forms, extracting data from UIs).

Upload logs or let AI analyze recorded interactions to generate process maps, highlighting UI bottlenecks (e.g., inconsistent form fields, pop-ups).

Use AI insights to identify automation candidates and UX pain points (e.g., "frequent manual selector adjustments needed").

Export variants and AI-recommended flows.

Step 2: Build AI-Enhanced Desktop Flows for UI/UX Control (Core RPA Layer)

Open Power Automate Desktop → New flow (e.g., AI\_UI\_Form\_Automator).

Record with AI Awareness:

Use the recorder while performing tasks on web/desktop apps.

Focus on UI elements: windows, buttons, text fields, tables, images.

Refine with precise UI control actions:

UI Automation group: "Get UI element", "Set text", "Click UI element", "Get details of UI element".

Use selectors (CSS-like or XPath-style) for reliability. Edit in the selector builder for robustness (add wildcards, attributes like class, id, aria-label for accessibility/UX).

Fallbacks: Image recognition ("Find image on screen"), OCR ("Extract text with OCR"), coordinates (last resort).

AI [[Integration]]:

"Process image with AI Builder" or custom AI models for visual UI understanding (e.g., detect buttons dynamically).

Variables for dynamic data: Input from AI-processed sources.

Add UI/UX Control Logic:

Conditions based on UI state (e.g., "If element exists" or "Wait for element").

Dynamic adaptation: Use variables to change interaction style (e.g., simulate keyboard vs. mouse based on accessibility settings).

Error handling & UX: "Try/Catch" with user [[[[prompts]]]] (attended mode), screenshots on failure, or adaptive fallbacks.

Accessibility: Prioritize ARIA attributes; add delays or focus management for screen reader compatibility.

AI Actions:

Call AI Builder for sentiment analysis on extracted text, entity recognition, or prediction (e.g., auto-classify form fields).

Output structured data (JSON) for cloud [[handoff]].

Test: Run with varying UI states (resized windows, themes, languages). Debug using step-by-step mode and UI element spy.3ed5e6

[learn.microsoft.com](http://learn.microsoft.com)

Step 3: Cloud Flows with Generative AI & UX Orchestration

In Power Automate → Create → Automated cloud flow or use Copilot:

Prompt Copilot: "Create a flow that uses AI to read screen content, fills forms intelligently, and provides adaptive UX notifications."

Trigger: Instant (manual button), "When a file is created" (OneDrive), or email with attachments.

AI Core:

Generative actions ([[preview]]): Describe intent like "Intelligently extract and validate data from uploaded document or screenshot" — AI selects optimal sub-actions.

AI Builder: "Extract information from documents/forms" (train custom models for your UIs). "Predict" for next actions.

Vision AI: Process screenshots for UI understanding.

UI/UX Control in Cloud:

Call desktop flow (pass parameters for dynamic UI targeting).

Use Adaptive Cards in Teams/Outlook for rich, interactive UX (buttons, inputs, carousels).

Integrate Power Apps canvas app as a front-end for better control: Trigger flows from app, display AI results in responsive UI.

Orchestration & Feedback Loop:

Parse AI outputs → Conditional branching based on confidence scores.

Human-in-the-loop for low-confidence AI decisions (attended UX).

Log interactions to Dataverse for AI retraining.

Error/UX Handling: Scope actions, "Run after" configurations, user approval steps.

Step 4: End-to-End AI + UI [[Integration]]

Cloud-to-Desktop Handshake: Cloud flow triggers desktop flow with input variables (e.g., { "targetURL": "...", "formData": {...} }).

Dynamic UI Adaptation: Desktop flow uses AI-extracted info to handle varying layouts (e.g., detect new modals via image/OCR).

Multi-Modal AI: Combine text, image, and predictive models.

UX Optimization:

Generate reports/dashboards with AI-summarized insights.

Adaptive notifications: Different card designs based on user role or device.

Accessibility testing: Ensure flows respect high-contrast modes, keyboard navigation.

Step 5: Governance, Security & AI-Specific Best Practices

Environments & Solutions: Use for versioning AI models and flows.

Security for AI/UI:

Sensitive variables for credentials.

DLP to control AI connectors and data exfiltration.

Credential vaulting; avoid storing UI screenshots long-term.

Monitoring AI Performance: Track model accuracy, flow run metrics, and UI selector breakage (common in dynamic UIs).

Copilot & Prompt Engineering: Iterate [[[[prompts]]]] for better generative results.

Step 6: Testing UI/UX & AI Robustness

UI Variations: Test across browsers, resolutions, dark/light modes, localized UIs.

AI Edge Cases: Low-quality images, ambiguous text, high variability.

Attended vs Unattended: Build attended mode with progress UI overlays or notifications.

Performance: Measure latency of AI calls + UI actions; optimize with parallel branches where possible.

Tools: Use PAD's debugger, browser console, and Power Automate analytics.

Step 7: Deployment & Iteration

Publish desktop flow to cloud (machine group for unattended).

Share flows/Power Apps with controlled permissions.

Monitor in real use → Feed failures back into process mining and AI retraining.

Scale: Create reusable sub-flows for common UI patterns (e.g., "Smart Form Filler" component).

Key Benefits in AI + UI/UX Context

AI reduces brittle selectors by adding intelligence (vision, prediction).

Fine UI control enables reliable automation of complex, modern interfaces.

Improved UX through adaptive cards, human-in-loop, and personalized flows.

Faster development with Copilot and generative actions.

Limitations to Watch

AI confidence thresholds and hallucination risks (always validate).

UI changes breaking selectors (mitigate with robust + AI fallbacks).

Run duration and API limits for heavy AI usage.

This [[setup]] gives strong AI intelligence layered on precise UI/UX control, ideal for personal power users or teams focused on interface automation. Test incrementally. For sample flow exports, specific app targets (e.g., a particular website), or Power Apps UX prototypes, provide more details on your target applications!

Refer to Microsoft Learn for the latest AI Builder models and desktop actions.