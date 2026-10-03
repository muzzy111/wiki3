---
aliases: [SOCMINT, Social Media OSINT]
tags:
  - osint
  - socmint
---
# Social Media Intelligence (SOCMINT)

Social Media Intelligence (SOCMINT) is the subset of OSINT that focuses on data gathered from social media platforms.

## Core Techniques

### Profile Enumeration
- **Username Squatting/Reuse**: People often reuse usernames across platforms. Tools like `WhatsMyName` or `Sherlock` can check hundreds of platforms for a specific username.
- **Avatar Analysis**: Reverse image searching (Google Images, Yandex, TinEye, PimEyes) a profile picture to find other accounts or the original source of the image.
- **Bio/Metadata Analysis**: Extracting links, locations, emails, and phone numbers from profile bios.

### Network Mapping
- Identifying connections between individuals.
- **Follower/Following Analysis**: Finding common connections or identifying key influencers within a target's network.
- **Interaction Analysis**: Identifying who a target interacts with most frequently (likes, replies, mentions) to determine strong ties versus weak ties.

### Content Analysis
- **Temporal Analysis**: Analyzing the timing of posts to determine sleep schedules, time zones, or "pattern of life."
- **Geospatial Analysis**: Extracting location data from check-ins, tagged locations, or visual clues within images (GEOINT).
- **Sentiment/Behavioral Analysis**: Understanding a target's views, affiliations, and potential vulnerabilities based on what they post.

## Platform Specifics
- **Twitter/X**: Highly valuable for real-time events, network graphs, and sentiment. Advanced search operators are critical.
- **LinkedIn**: The primary source for corporate intelligence, employee rosters, and organizational structures.
- **Facebook**: Valuable for familial connections, groups, and historical data, though privacy settings have tightened significantly.
- **Instagram/TikTok**: Primarily visual; requires GEOINT and visual analysis [[skills]].
