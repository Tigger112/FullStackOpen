
# Single page app diagram

``` mermaid
    sequenceDiagram
        participant browser
        participant server

        browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa 
        activate server 
        server-->>browser: HTML document
        deactivate server

        browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
        activate server 
        server-->>browser: CSS file
        deactivate server

        browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
        activate server
        server-->>browser: JS file
        deactivate server

        note right of browser: executed Javascript fetches data.json from the server

        browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
        activate server
        server-->>browser: JSON data obj. [{"content": <string>, "date" <date>}]
        deactivate server

        note right of browser: Renders the list of notes from Javascript callback function

```
