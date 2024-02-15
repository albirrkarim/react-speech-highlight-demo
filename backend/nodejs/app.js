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

app.post("/api/v1/public/text-to-speech-elevenlabs", async (req, res) => {
  let text = req.body.text || null;

  if (!text) {
    res.status(400).send({ error: "Text is required." });
    return;
  }

  const voice_id =
    req.body.voice_id == 0
      ? "21m00Tcm4TlvDq8ikWAM"
      : req.body.voice || "21m00Tcm4TlvDq8ikWAM";

  const model = req.body.model || "eleven_multilingual_v2";

  const voice_settings =
    req.body.voice_settings == 0
      ? {
          stability: 0.75,
          similarity_boost: 0.75,
        }
      : req.body.voice_settings || {
          stability: 0.75,
          similarity_boost: 0.75,
        };

  try {
    const response = await axios.post(
      `https://api.elevenlabs.io/v1/text-to-speech/${voice_id}`,
      {
        text: text, // escape inner double quotes ,
        voice_settings: voice_settings,
        model_id: model,
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
    const audioDataURI = `data:audio/mpeg;base64,${base64Audio}`;
    
    res.send({ audio: audioDataURI });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error occurred while processing the request.");
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
