# How to get Text To Speech Audio File Automatically

When we talk about generating audio file we need do research considering the price, quality, and api support so you can generate audio programmatically.

Here i provide you with the best options:

## Eleven Labs

[Eleven Labs](https://elevenlabs.io/?from=partnermurray4444) is very cheap and perfect option for generating perfect voice for your text. They have API service also.

![Eleven Labs Pricing](img/elevenlabs.png)

[https://elevenlabs.io](https://elevenlabs.io/?from=partnermurray4444)

Here the code how you can integrate elevenlabs or other speech synthesis services with this package.

<details>
  <summary>Example ElevenLabs TTS with Backend with Laravel</summary>

  Router

  ```php
  Route::post('text-to-speech-elevenlabs', 'textToSpeechElevenLabs')->name('text_to_speech_elevenlabs');
  ```

  File `TTSController.php` this will return audio as base64

  ```php
    public function textToSpeech(Request $request)
    {
       $api_key = config('elevenlabs.api_key');
        $voice_id = isset($request['voice_id']) ? $request['voice_id'] : '21m00Tcm4TlvDq8ikWAM'; // Set the ID of the voice to be used

        $client = new Client([
            'headers' => [
                'Accept' => 'audio/mpeg',
                'Content-Type' => 'application/json',
                'xi-api-key' => $api_key,
            ],
        ]);

        try {
            $response = $client->post("https://api.elevenlabs.io/v1/text-to-speech/$voice_id", [
                'json' => $request->all(),
            ]);

            // Check if the request was successful
            if ($response->getStatusCode() === 200) {
                // Get the audio content as a base64-encoded string
                $base64Audio = base64_encode($response->getBody());

                // Return the base64-encoded audio
                return response()->json([
                    'status' => true,
                    'audio' => $base64Audio,
                ]);
            } else {
                // Handle unsuccessful response
                return response()->json([
                    'status' => false,
                    'message' => 'Text-to-speech API request failed.',
                ], $response->getStatusCode());
            }
        } catch (\Exception $e) {
            // Handle Guzzle or other exceptions
            return response()->json([
                'status' => false,
                'message' => 'Error during text-to-speech API request.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

  ```

  Your Client Side Code

  ```jsx
  export const ttsUsingElevenLabs = async (inputText) => {
    // https://github.com/albirrkarim/react-speech-highlight-demo/blob/main/AUDIO_FILE.md#eleven-labs

    // Set the ID of the voice to be used.
    const VOICE_ID = "21m00Tcm4TlvDq8ikWAM";

    const blobUrl = await fetch(
      process.env.NEXT_PUBLIC_ELEVEN_LABS_API_ENDPOINT,
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
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        // Assuming the API response contains a property 'audio' with the base64-encoded audio
        const base64Audio = data.audio;

        // Convert the base64 audio to a Blob
        const byteCharacters = atob(base64Audio);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
          byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray], { type: "audio/mpeg" });

        // Create a Blob URL
        const blobUrl = URL.createObjectURL(blob);

        return blobUrl;
      });

    return blobUrl;
  };

  import { convertTextIntoClearTranscriptText } from "react-speech-highlight";

  var clear_transcript = convertTextIntoClearTranscriptText("This is example text you can set");

  const audioURL = await ttsUsingElevenLabs(clear_transcript)

  const { controlHL, statusHL, prepareHL, spokenHL } = useTextToSpeech({
    lang: "en",
    preferAudio: audioURL,
    //or
  //   fallbackAudio: audioURL,
  });
  ```
</details>


## Open AI TTS

[OpenAI](https://platform.openai.com/docs/guides/text-to-speech) is also providing tts service, for now it come with minimal feature, but its fast latency.


<details>
  <summary>Example OpenAI TTS Backend with Laravel</summary>

  Router

  ```php
  Route::post('text-to-speech-elevenlabs', 'textToSpeechElevenLabs')->name('text_to_speech_elevenlabs');
  ```

  File `TTSController.php` this will return audio as base64

  ```php
  $api_key = config('openai.api_key');

  $client = new Client([
      'headers' => [
          'Authorization' => 'Bearer ' . $api_key,
          'Content-Type' => 'application/json'
      ]
  ]);

  try {
      $response = $client->post("https://api.openai.com/v1/audio/speech", [
          'json' => [
              'model' => isset($request["model"]) ? $request["model"] : 'tts-1',
              'input' => $request["input"],
              'voice' => isset($request["voice"]) ? $request["voice"] : 'nova',
          ]
      ]);

      // Check if the request was successful
      if ($response->getStatusCode() === 200) {
          // Get the audio content as a base64-encoded string
          $base64Audio = base64_encode($response->getBody());

          // Return the base64-encoded audio
          return response()->json([
              'status' => true,
              'audio' => $base64Audio,
          ]);
      } else {
          // Handle unsuccessful response
          return response()->json([
              'status' => false,
              'message' => 'Text-to-speech API request failed.',
          ], $response->getStatusCode());
      }
  } catch (\Exception $e) {
      // Handle Guzzle or other exceptions
      return response()->json([
          'status' => false,
          'message' => 'Error during text-to-speech API request.',
          'error' => $e->getMessage(),
      ], 500);
  }
  ```

  Your Client Side Code

  ```jsx
  const ttsUsingOpenAI = async (inputText) => {
    // Set the ID of the voice to be used.

    const blobUrl = await fetch(process.env.NEXT_PUBLIC_OPENAI_TTS_API_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        input: inputText,
        model: "tts-1", //or tts-1-hd
        voice: "alloy",
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        // Assuming the API response contains a property 'audio' with the base64-encoded audio
        const base64Audio = data.audio;

        // Convert the base64 audio to a Blob
        const byteCharacters = atob(base64Audio);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
          byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray], { type: "audio/mpeg" });

        // Create a Blob URL
        const blobUrl = URL.createObjectURL(blob);

        return blobUrl;
      });

    return blobUrl;
  };


  import { convertTextIntoClearTranscriptText } from "react-speech-highlight";

  var clear_transcript = convertTextIntoClearTranscriptText("This is example text you can set");

  const audioURL = await ttsUsingOpenAI(clear_transcript)

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