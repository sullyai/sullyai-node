# Notes

Types:

- <code><a href="./src/resources/notes.ts">DeleteResponse</a></code>
- <code><a href="./src/resources/notes.ts">NoteCreateResponse</a></code>
- <code><a href="./src/resources/notes.ts">NoteRetrieveResponse</a></code>

Methods:

- <code title="post /v1/notes">client.notes.<a href="./src/resources/notes.ts">create</a>({ ...params }) -> NoteCreateResponse</code>
- <code title="get /v1/notes/{noteId}">client.notes.<a href="./src/resources/notes.ts">retrieve</a>(noteID) -> NoteRetrieveResponse</code>
- <code title="delete /v1/notes/{noteId}">client.notes.<a href="./src/resources/notes.ts">delete</a>(noteID) -> DeleteResponse</code>

# NoteStyles

Types:

- <code><a href="./src/resources/note-styles.ts">NoteStyleCreateResponse</a></code>

Methods:

- <code title="post /v1/note-styles">client.noteStyles.<a href="./src/resources/note-styles.ts">create</a>({ ...params }) -> NoteStyleCreateResponse</code>

# Audio

## Transcriptions

Types:

- <code><a href="./src/resources/audio/transcriptions/transcriptions.ts">TranscriptionCreateResponse</a></code>
- <code><a href="./src/resources/audio/transcriptions/transcriptions.ts">TranscriptionRetrieveResponse</a></code>

Methods:

- <code title="post /v1/audio/transcriptions">client.audio.transcriptions.<a href="./src/resources/audio/transcriptions/transcriptions.ts">create</a>({ ...params }) -> TranscriptionCreateResponse</code>
- <code title="get /v1/audio/transcriptions/{transcriptionId}">client.audio.transcriptions.<a href="./src/resources/audio/transcriptions/transcriptions.ts">retrieve</a>(transcriptionID) -> TranscriptionRetrieveResponse</code>
- <code title="delete /v1/audio/transcriptions/{transcriptionId}">client.audio.transcriptions.<a href="./src/resources/audio/transcriptions/transcriptions.ts">delete</a>(transcriptionID) -> DeleteResponse</code>

### Stream

Types:

- <code><a href="./src/resources/audio/transcriptions/stream.ts">StreamCreateTokenResponse</a></code>

Methods:

- <code title="post /v1/audio/transcriptions/stream/token">client.audio.transcriptions.stream.<a href="./src/resources/audio/transcriptions/stream.ts">createToken</a>({ ...params }) -> StreamCreateTokenResponse</code>
