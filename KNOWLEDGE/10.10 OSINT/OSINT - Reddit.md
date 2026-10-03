---
aliases: [Reddit OSINT]
tags:
  - osint
  - socmint
  - forums
---
# OSINT - Reddit

Reddit provides highly compartmentalized, community-driven intelligence. Because it is largely anonymous, users often share details they would never post on identity-linked platforms like Facebook or LinkedIn.

## Deanonymization Techniques
Reddit users frequently leak personal operational security (OPSEC) over years of posting.
- **Location Pinpointing**: Users often post in local subreddits (`/r/Chicago`, `/r/London`) asking for recommendations, inadvertently revealing their city or neighborhood.
- **Career and Income**: Posting in subreddits like `/r/personalfinance` or industry-specific forums often reveals exact salaries, job titles, and workplace frustrations.
- **Age and Demographics**: Comments like "When I was in high school in 1998..." allow analysts to deduce exact birth years.
- **Cross-Referencing**: Combining age, location, profession, and hobbies (e.g., "34-year-old male architect in Seattle who breeds exotic geckos") often narrows the anonymity pool down to a single identifiable person.

## Tools and Archival
- **Pushshift / Unddit**: Reddit users often delete compromising posts. Historically, API databases like Pushshift archived Reddit in real-time, allowing analysts to retrieve deleted comments. While API access has been restricted recently, archives up to early 2023 remain highly accessible.
- **User Analyzers**: Tools like `SnoopSnoo` (historical) or custom Python scripts aggregate a user's entire post history, generating heatmaps of when they post (revealing time zones) and word clouds of frequently used terms.

## Community Intelligence
- **Sentiment and Trend Analysis**: Subreddits act as bellwethers for financial markets (e.g., `/r/wallstreetbets`), political movements, and consumer sentiment.
- **Insider Leaks**: Employees frequently use throwaway accounts to leak corporate malfeasance or upcoming product releases in industry subreddits. Identifying the author requires linguistic analysis and cross-referencing the technical details provided.
