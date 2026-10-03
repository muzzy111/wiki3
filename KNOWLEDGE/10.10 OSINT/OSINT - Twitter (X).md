---
aliases: [Twitter OSINT, X OSINT]
tags:
  - osint
  - socmint
  - twitter
---
# OSINT - Twitter (X)

Twitter (X) is unparalleled for real-time intelligence, sentiment analysis, and mapping professional or ideological networks.

## Advanced Search Operators
Twitter's native search is incredibly powerful if used correctly:
- `from:username`: Tweets sent by a specific user.
- `to:username`: Tweets sent to a specific user.
- `since:yyyy-mm-dd until:yyyy-mm-dd`: Restricts searches to a timeframe.
- `near:"City" within:15mi`: Geospatial searching (relies on user having location enabled).
- `filter:media`, `filter:links`: Isolates specific content types.

## Account Metadata
- **Twitter ID**: Like Facebook, Twitter uses a static numerical ID. If a target changes their handle (`@username`), the ID remains the same.
- **Creation Date**: The exact second an account was created can indicate coordinated inauthentic behavior (e.g., bot nets created within minutes of each other).
- **Client Identification**: Historical tweets often show the "source label" (e.g., "Twitter for iPhone", "Twitter Web App"). This establishes a device profile for the target.

## Network Analysis
- **Following/Follower Overlap**: Tools can compare the followers of two disparate accounts to find the intersection, revealing mutual networks.
- **Bot Detection**: High tweeting frequency (e.g., >100 tweets a day), lack of original content (only retweets), and stolen profile pictures (identifiable via reverse image search) are indicators of bot networks.

## Data Preservation
- Tweets can be deleted instantly. Archiving tools like `Archive.today` or automated scripts using the Twitter API (though severely restricted recently) must be used immediately upon discovering relevant intelligence.
- Third-party scrapers (like `snscrape` or `Twint`) were historically used to bypass API limits, though platform changes frequently break them.
