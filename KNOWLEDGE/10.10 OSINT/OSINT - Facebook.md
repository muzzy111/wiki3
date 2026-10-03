---
aliases: [Facebook OSINT, FB OSINT]
tags:
  - osint
  - socmint
  - facebook
---
# OSINT - Facebook

Facebook remains a massive repository for SOCMINT, particularly for establishing family trees, historical timelines, and geographical tracking, despite severe privacy crackdowns since 2018.

## Profile Enumeration and IDs
- **Facebook ID (FBID)**: Every user, page, and group has a unique numeric ID. Even if a user changes their vanity URL (e.g., `facebook.com/username`), the FBID remains constant.
- **Finding FBIDs**: You can extract the FBID by viewing the page source and searching for `entity_id` or `user_id`. Tools like `FindMyFBID` automate this.
- **Graph Search Legacy**: While the original Graph Search is dead, URL string manipulation can still force Facebook to yield specific results (e.g., searching for people named "John" who live in "London").

## Network and Relational Analysis
- **Friends Lists**: If hidden, a target's friends can sometimes be enumerated by comparing mutual friends of known associates or looking at "Likes" on profile pictures.
- **Family Trees**: Users frequently list family members. Even if hidden, analyzing tagging patterns on holidays (e.g., Thanksgiving, Christmas) often reconstructs the family unit.
- **Groups and Events**: Group memberships and [[[[event]]]] RSVPs reveal ideological leanings, hobbies, and physical locations at specific times. 

## Media Analysis
- **Photo Metadata**: Facebook strips EXIF data upon upload, so GPS coordinates cannot be downloaded from the image file itself. However, manual tagging, check-ins, and visual landmarks (GEOINT) within the photo remain intact.
- **URL Timestamps**: The filename of a downloaded Facebook image (e.g., `123456_7891011_121314_n.jpg`) used to contain the FBID of the uploader. While Meta has obfuscated this, the CDN URL still occasionally leaks upload timelines.

## OPSEC Considerations
- Facebook heavily monitors for scraping and automated activity. Using automated tools often results in rapid account suspension.
- Sockpuppets require extensive "aging" and normal algorithmic interaction (scrolling, liking random non-target pages) to survive.
