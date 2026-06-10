require("dotenv").config();

const cors = require('cors');

const express = require("express");
const axios = require("axios");
const app = express();
const port = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use((error, req, res, next) => {
  if (error instanceof SyntaxError && error.status === 400 && "body" in error) {
    console.error(error);
    return res.status(400).send({ message: "Malformed JSON in payload" });
  }
  next();
});

// Default voice settings on a normalized 0..1 scale (same as ElevenLabs uses).
// The 60db provider multiplies these by 100 to match its 0..100 scale.
const DEFAULT_VOICE_SETTINGS = {
  stability: 0.75,
  similarity_boost: 0.75,
};

// Map a 60db output_format to the data URI mime type.
function mimeForFormat(format) {
  switch ((format || "mp3").toLowerCase()) {
    case "wav":
      return "audio/wav";
    case "ogg":
      return "audio/ogg";
    case "flac":
      return "audio/flac";
    default:
      return "audio/mpeg";
  }
}

// ----- Provider: ElevenLabs -----
// Returns a `data:audio/mpeg;base64,...` URI.
async function ttsElevenLabs({ text, voice_id, model, voice_settings }) {
  const id = voice_id || "21m00Tcm4TlvDq8ikWAM";

  const response = await axios.post(
    `https://api.elevenlabs.io/v1/text-to-speech/${id}`,
    {
      text: text,
      voice_settings: voice_settings, // native 0..1 scale
      model_id: model || "eleven_multilingual_v2",
    },
    {
      headers: {
        "Content-Type": "application/json",
        accept: "audio/mpeg",
        "xi-api-key": `${process.env.ELEVENLABS_API_KEY}`,
      },
      responseType: "arraybuffer",
    }
  );

  const audioBuffer = Buffer.from(response.data, "binary");
  const base64Audio = audioBuffer.toString("base64");
  return `data:audio/mpeg;base64,${base64Audio}`;
}

// ----- Provider: 60db -----
// Returns a `data:<mime>;base64,...` URI.
async function tts60db({ text, voice_id, voice_settings, output_format }) {
  const format = output_format || "mp3";

  // Convert the normalized 0..1 settings to 60db's 0..100 scale.
  const body = {
    text: text,
    stability: Math.round((voice_settings.stability ?? 0.75) * 100),
    similarity: Math.round((voice_settings.similarity_boost ?? 0.75) * 100),
    output_format: format,
  };

  if (voice_id) body.voice_id = voice_id;
  // Optional 60db-only knobs, passed through when provided.
  if (voice_settings.speed != null) body.speed = voice_settings.speed;
  if (voice_settings.enhance != null) body.enhance = voice_settings.enhance;

  const response = await axios.post(
    "https://api.60db.ai/tts-synthesize",
    body,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.SIXTYDB_API_KEY}`,
      },
    }
  );

  const data = response.data;
  if (!data || data.success === false || !data.audio_base64) {
    throw new Error(data && data.message ? data.message : "60db returned no audio.");
  }

  const mime = mimeForFormat(data.output_format || format);
  return `data:${mime};base64,${data.audio_base64}`;
}

const PROVIDERS = {
  elevenlabs: ttsElevenLabs,
  "60db": tts60db,
};

// Unified handler. `forcedProvider` pins the provider for back-compat routes.
async function handleTTS(req, res, forcedProvider) {
  const text = req.body.text || null;

  if (!text) {
    res.status(400).send({ error: "Text is required." });
    return;
  }

  const provider = forcedProvider || req.body.provider || "elevenlabs";
  const synthesize = PROVIDERS[provider];

  if (!synthesize) {
    res.status(400).send({ error: `Unknown provider: ${provider}` });
    return;
  }

  const voice_settings = req.body.voice_settings || DEFAULT_VOICE_SETTINGS;

  try {
    const audio = await synthesize({
      text: text,
      voice_id: req.body.voice_id || req.body.voice || null,
      model: req.body.model,
      output_format: req.body.output_format,
      voice_settings: voice_settings,
    });

    res.send({ audio: audio });
  } catch (error) {
    console.error(error && error.response ? error.response.data : error);
    res.status(500).send("Error occurred while processing the request.");
  }
}

// Unified endpoint: pick the engine with `provider` in the body.
app.post("/api/v1/public/tts", (req, res) => handleTTS(req, res));

// Back-compat alias: existing ElevenLabs route, same request/response contract.
app.post("/api/v1/public/text-to-speech-elevenlabs", (req, res) =>
  handleTTS(req, res, "elevenlabs")
);

// Convenience alias for 60db, mirroring the ElevenLabs route name.
app.post("/api/v1/public/text-to-speech-60db", (req, res) =>
  handleTTS(req, res, "60db")
);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
