Project ideas (involving (read-only) client-server interaction, some beginner-to-midlevel javascript and, ideally, some amount of React or other high-level JavaScript library or framework - if we go w/ high-level library or framework, we incorporate some sort of "asynchronous" connection between client and server):

    - Possible categories:
        - Game (complexity TBD)
            - "Real-time" Game
            - Turn-based
            - Multiplayer or single player (single player easier to support w/ limited scope)
        - Game statistics/information storage app  (see https://publicapis.io/igdb.com-api as possible data source)
            - Choose a single game to track stats?
            - Aggregate data from multiple games?
            - Collectible game collection storage?

Design Constraints:
- Client-server interaction is read-only
- Client-server interaction is via HTTP via client-side JavaScript
- Need at minimum:
    - Home page
    - About page
    - Contact page (with contact form including reply-to email address, message body, and form validation)
    
- Should otherwise be as simple as possible (i.e. minimize number of overall pages, components, etc.)
- Should be responsive
- Should be deployable to GitHub Pages
- Focus on single-player experience first

Design Considerations:
- Focus on single-player experience first
- If turn-based single player, might have computer opponent
- If real-time single player, might not require "opponent" entity

As part of developing our project, we will:
1) Understand inputs and outputs for all significant components
2) Identify solutions we'd like to consider for each components
3) Choose some solution among the possible solutions
4) Plan/implement/test our solution