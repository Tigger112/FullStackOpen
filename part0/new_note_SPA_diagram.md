# Single page app new note diagram

``` mermaid
    sequenceDiagram
        participant browser
        participant javascript
        participant server

        browser->>javascript: Sumbit form  
        activate javascript
        javascript-->>javascript: create new note obj { "content" <str>, "date", <date>} 
        javascript-->>javascript: Append new note to list 
        javascript-->>browser: Redraws list with new note 
        javascript->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
        deactivate javascript
        
        note right of javascript: New list to the server

```
