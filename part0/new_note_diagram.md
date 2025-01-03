
# New note sequence diagram

```mermaid
    sequenceDiagram
        participant browser
        participant server


        browser->>server: POST form new_note 
        activate server
        server->>server: update data.json 
        server-->>browser: Redirect https://studies.cs.helsinki.fi/exampleapp/notes
        deactivate server

        browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
        activate server
        server-->>browser: HTML document
        deactivate server

        browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
        activate server 
        server-->>browser: CSS file
        deactivate server

        browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
        activate server 
        server-->>browser: JS file
        deactivate server

        Note right of browser: The Javascript fetches the JSON from the server

        browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
        activate server
        server-->>browser: Notes in JSON. [{content [note], date [date]}] 
        deactivate server

        Note left of server: JSON with the updated notes  
        Note right of browser: Javascript callback function Renders the notes   
```
