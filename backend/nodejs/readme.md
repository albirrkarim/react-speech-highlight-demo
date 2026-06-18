# Example Integration Node js Backend with ElevenLabs & 60db TTS API

This backend exposes one unified endpoint that can synthesize speech with either
**ElevenLabs** or **60db**, and always returns the audio in the same shape so the
frontend code is identical for both providers.

## Setup

after you download or clone this folder then

```
cp .env.template .env
```

Fill with your API keys. Open the `.env`, you will see something like this:

```
ELEVENLABS_API_KEY=your_elevenlabs_api_key_here
SIXTYDB_API_KEY=your_60db_api_key_here
PORT=3001
```

You only need the key(s) for the provider(s) you intend to use.

install deps

```
npm install
```

Run the server

```
npm start
```

Now it runs on localhost:3001

## API

### `POST /api/v1/public/tts` (unified)

Pick the engine with the `provider` field. Everything else is the same for both.

```json
{
  "provider": "elevenlabs",        // or "60db"  (default: "elevenlabs")
  "text": "Hello world",
  "voice_id": "21m00Tcm4TlvDq8ikWAM",
  "model": "eleven_multilingual_v2", // ElevenLabs only, ignored by 60db
  "output_format": "mp3",            // 60db only: mp3 | wav | ogg | flac
  "voice_settings": {
    "stability": 0.75,               // normalized 0..1 for BOTH providers
    "similarity_boost": 0.75,        // normalized 0..1 for BOTH providers
    "speed": 1,                      // 60db only (0.5..2.0), passed through
    "enhance": true                  // 60db only, passed through
  }
}
```

Response (identical for both providers):

```json
{ "audio": "data:audio/mpeg;base64,...." }
```

**Voice settings are always on a 0..1 scale.** For 60db (which expects 0..100) the
backend multiplies `stability`/`similarity_boost` by 100 automatically, so the
frontend never has to know which provider it is talking to.

### Back-compat / convenience aliases

These behave exactly like `/tts` with the provider pinned:

- `POST /api/v1/public/text-to-speech-elevenlabs`
- `POST /api/v1/public/text-to-speech-60db`

The ElevenLabs alias keeps the original request/response contract unchanged.
