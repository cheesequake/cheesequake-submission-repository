```mermaid
    sequenceDiagram
    participant browser
    participant server


    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    Note right of browser: An object containing note from text input field along with a date object is sent to the server
    activate server
    server-->>browser: Status 201 : Created
    deactivate server

    Note right of browser: New note gets appended directly to the front-end.
```