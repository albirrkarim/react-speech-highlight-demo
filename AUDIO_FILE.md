# How to get Text To Speech Audio File Automatically

When we talk about generating audio file we need do research considering the price, quality, and api support so you can generate audio programmatically.

Here i provide you with the best options:

## Eleven Labs

[Eleven Labs](https://elevenlabs.io/?from=partnermurray4444) is very cheap and perfect option for generating perfect voice for your text. They have API service also.

![Eleven Labs Pricing](img/elevenlabs.png)

[https://elevenlabs.io](https://elevenlabs.io/?from=partnermurray4444)

Here the code how you can integrate elevenlabs or other speech synthesis services with this package.

<details>
  <summary>Backend with Laravel</summary>

  ```php
    public function textToSpeech(Request $request)
    {
      $api_key = config('elevenlabs.api_key');

      $voice_id = isset($request['voice_id']) ? $request['voice_id'] : '21m00Tcm4TlvDq8ikWAM'; // Set the ID of the voice to be used

      $client = new \GuzzleHttp\Client([
          'headers' => [
              'Accept' => 'audio/mpeg',
              'Content-Type' => 'application/json',
              'xi-api-key' => $api_key
          ]
      ]);

      $response = $client->request('POST', "https://api.elevenlabs.io/v1/text-to-speech/$voice_id", [
          'json' => $request->all(),
          'sink' => storage_path('app/public/audio.mp3') // Save the audio response to a file
      ]);

      // Return the audio file as a response
      return response()->file(storage_path('app/public/audio.mp3'), [
          'Content-Type' => 'audio/mpeg',
          'Content-Disposition' => 'inline; filename="audio.mp3"'
      ]);
    }

  ```

  ```jsx
  export const textToSpeechUsingElvenLabs = async (inputText) => {
    // Set the ID of the voice to be used.
    const VOICE_ID = "21m00Tcm4TlvDq8ikWAM";

    const response = await fetch(
      process.env.NEXT_PUBLIC_ELEVEN_LABS_API_ENDPOINT, // Your backend enpoint
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          voice_id: VOICE_ID,
          text: inputText,
          model_id: "eleven_multilingual_v2",
          stability: 0.5, // The stability for the converted speech
          similarity_boost: 0.5, // The similarity boost for the converted speech
          style: 1, // The style exaggeration for the converted speech
          speaker_boost: true, // The speaker boost for the converted speech
        }),
      }
    );

    // Convert the response data to a Blob
    const data = await response.blob();

    // Create a Blob URL
    const blobUrl = URL.createObjectURL(data);

    return blobUrl;
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
</details>


<br>

## Local AI TTS

You can also use the local AI system, to do speech synthesis. You can use local PC or Google Colab.

Then synchronize (text <-> audio) it with your server.

Of course its not easy it will face many problems like:

- Is you have knowledge about python and AI ?
- How you get the models for your language ?
  When its english you can easily got the models.

When i have time i will make tutorial about how to doing local speech synthesis.