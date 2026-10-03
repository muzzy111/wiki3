---
aliases: [OSINT Methodologies]
tags:
  - osint
  - framework
  - methodology
---
# OSINT Frameworks and Methodologies

A structured approach is required for effective Open Source Intelligence. Unstructured searching leads to rabbit holes and missed intelligence.

## The Intelligence Cycle
The intelligence cycle is a formalized process used by intelligence agencies and adopted for OSINT:
1. **Planning and Direction**: Defining what information needs to be collected (Intelligence Requirements).
2. **Collection**: Gathering raw data from open sources based on the requirements.
3. **Processing and Exploitation**: Converting raw data into a usable format (translating, decrypting, standardizing).
4. **Analysis and Production**: Synthesizing the processed data, finding patterns, and generating actionable intelligence.
5. **Dissemination and [[Integration]]**: Delivering the finished intelligence product to the consumer (e.g., writing a [[[[report]]]]).

## Key Frameworks
- **OSINT Framework (osintframework.com)**: A popular web-based mind map of OSINT resources organized by category.
- **MITRE ATT&CK**: While primarily for threat modeling, it provides a structured vocabulary for categorizing adversary behavior observed through OSINT.
- **The PASTE Framework**:
    - **P**ublic Records
    - **A**dvertising & Marketing Data
    - **S**ocial Media
    - **T**echnical Infrastructure
    - **E**conomic/Financial Data

## Operational Security (OPSEC)
Before conducting OSINT, OPSEC must be established to prevent tipping off targets.
- **Sockpuppets**: Maintaining segmented, aged, and realistic fake personas for research.
- **Network Isolation**: Using VPNs, Tor, or dedicated research infrastructure (e.g., an AWS EC2 instance) distinct from corporate/personal networks.
- **Browser Fingerprint Mitigation**: Using tools like Tor Browser, or heavily configured browsers to blend in or randomize fingerprints.
