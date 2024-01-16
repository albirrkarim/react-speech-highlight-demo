# How to get Text To Speech Audio File Automatically

When we talk about generating audio file we need do research considering the price, quality, and api support so you can generate audio programmatically.

Here i provide you with the best options:

## Eleven Labs

[Eleven Labs](https://elevenlabs.io/?from=partnermurray4444) is very cheap and perfect option for generating perfect voice for your text. They have API service also.

![Eleven Labs Pricing](img/elevenlabs.png)

[https://elevenlabs.io](https://elevenlabs.io/?from=partnermurray4444)

Here the code how you can integrate elevenlabs or other speech synthesis services with this package.

```jsx
// Define a function called textToSpeech that takes in a string called inputText as its argument.
const textToSpeechUsingElvenLabs = async (inputText) => {
  // Set the API key for ElevenLabs API.
  // Do not use directly. Use environment variables.
  const API_KEY = process.env.NEXT_PUBLIC_ELEVEN_LABS_API_KEY; // d25044f64b7xxxxxxxxxxxxx
  // Set the ID of the voice to be used.
  const VOICE_ID = "21m00Tcm4TlvDq8ikWAM";

  // Set options for the API request.
  const options = {
    method: "POST",
    url: `https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}`,
    headers: {
      accept: "audio/mpeg", // Set the expected response type to audio/mpeg.
      "content-type": "application/json", // Set the content type to application/json.
      "xi-api-key": `${API_KEY}`, // Set the API key in the headers.
    },
    data: {
      text: inputText, // Pass in the inputText as the text to be converted to speech.
    },
    responseType: "arraybuffer", // Set the responseType to arraybuffer to receive binary data as response.
  };

  // Send the API request using Axios and wait for the response.
  const speechDetails = await axios.request(options);

  // Return the binary audio data received from the API response.
  const blob = new Blob([speechDetails.data], { type: "audio/mpeg" });
  // Create a URL for the blob object
  const url = URL.createObjectURL(blob);
  return url;
};

import { convertTextIntoClearTranscriptText } from "react-speech-highlight";

var clear_transcript = convertTextIntoClearTranscriptText("This is example text you can set");

const audioURL = await textToSpeechUsingElvenLabs(clear_transcript)

const { controlHL, statusHL, prepareHL, spokenHL } = useTextToSpeech({
  lang: "en",
  preferAudio: audioURL,
  //or
//   fallbackAudio: audioURL,
});
```

<br>

## Local AI TTS

You can also use the local AI system, to do speech synthesis. You can use local PC or Google Colab.

Then synchronize (text <-> audio) it with your server.

Of course its not easy it will face many problems like:

- Is you have knowledge about python and AI ?
- How you get the models for your language ?
  When its english you can easily got the models.

When i have time i will make tutorial about how to doing local speech synthesis.