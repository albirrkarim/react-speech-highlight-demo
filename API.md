# API

The api is a function that you can use to integrate this package into your apps. When read this api docs you can toggle `Outline` (see top right) menu in github so you can navigate easily.

This package is written with typescript, You don't have to read all the docs in here, because this package now support [VS Code IntelliSense](https://code.visualstudio.com/docs/editor/intellisense) what is that? simply its when you hover your mouse into some variable or function [VS Code](https://code.visualstudio.com) will show some popup (simple tutorial) what is the function about, examples, params, etc...

<details>
  <summary>Show Video</summary>
  <br/>

https://github.com/albirrkarim/react-speech-highlight-demo/assets/29292018/05d325f9-469c-47e9-97d3-10053628e18c

</details>

<br/>

see [API_VANILLA.md](API_VANILLA.md) for vanilla js version.

<br/>

**Theres a lot** of function, llm engine and constant that you can import from this package. Here's just few of them. When you have buy the package you can just go to the `index.ts` file and see all the function and constant.

<details>
  <summary>Show How to import something from the package</summary>
  <br/>

```jsx
// v5.0.1 API
import {
  // Main
  markTheWords,
  useTextToSpeech,

  // Utilities function for precision and add more capabilities
  pronunciationCorrection,
  getLangForThisText,
  getTheVoices,
  noAbbreviation,
  speak,
  convertTextIntoClearTranscriptText,

  // Package Data and Cache Integration
  // Your app can read the data used by this package, like:
  PKG,
  PREFERRED_VOICE, // Set global config for the preffered voice
  PKG_STATUS_OPT, // Package status option
  PKG_DEFAULT_LANG, // Package default lang
  LANG_CACHE_KEY, // Package lang sessionStorage key
  OPENAI_CHAT_COMPLETION_API_ENDPOINT,
  getVoiceBasedOnVoiceURI,
  getCachedVoiceInfo,
  getCachedVoiceURI,
  setCachedVoiceInfo,
  getCachedVoiceName,
} from "react-speech-highlight";

// Type data for typescript
import type {
  ControlHLType,
  StatusHLType,
  PrepareHLType,
  SpokenHLType,
  UseTextToSpeechReturnType,
  ActivateGestureProps,
  GetVoicesProps,
  VoiceInfo,
  markTheWordsFuncType,
  ConfigTTS,
  getAudioType,
  getAudioReturnType,
  VisemeMap,
  SentenceInfo,
} from "react-speech-highlight";
```

</details>

<br/>

# Main

## 1. TTS Marker `markTheWords()`

The `markTheWords()` function is to process the string text and give some marker to every word and sentences that system will read.

Also this using react `useMemo()` to avoid unecessary react rerender. i mean it will only execute when the `text` is changing. it's similiar with `useEffect()`.

```jsx
function abbreviationFunction(str) {
  // You can write your custom abbreviation function here
  // example:
  // Input(string) : LMK
  // Ouput(string) : Let me know

  return str;
}

const textHL = useMemo(() => markTheWords(text, abbreviationFunction), [text]);
```

## 2. TTS React Hook `useTextToSpeech()`

### 2.A. CONFIG

There are two config placement, initialConfig and actionConfig.

```jsx
const initialConfig = {
  autoHL: true,
  disableSentenceHL: false,
  disableWordHL: false,
  classSentences: "highlight-sentence",
  classWord: "highlight-spoken",

  lang: "id-ID",
  pitch: 1,
  rate: 0.9,
  volume: 1,
  autoScroll: false,
  clear: true,

  // For viseme mapping,
  visemeMap: {},

  // Prefer or fallback to audio file
  preferAudio: null,
  fallbackAudio: null,

  batchSize: 200,
};

const { controlHL, statusHL, prepareHL, spokenHL } =
  useTextToSpeech(initialConfig);
```

```jsx
const actionConfig = {
  autoHL: true,
  disableSentenceHL: false,
  disableWordHL: false,
  classSentences: "highlight-sentence",
  classWord: "highlight-spoken",

  lang: "id-ID",
  pitch: 1,
  rate: 0.9,
  volume: 1,
  autoScroll: false,
  clear: true,

  // For viseme mapping,
  visemeMap: {},

  // Prefer or fallback to audio file
  preferAudio: "example.com/some_file.mp3",
  fallbackAudio: "example.com/some_file.mp3",

  batchSize: null, // or 200
};

void controlHL.play({
  textEl: textEl.current,
  onEnded: () => {
    console.log("Callback when tts done");
  },
  actionConfig,
});
```

<details>
  <summary>Show details config</summary>

- `autoHL`

  If the voice is not support the onboundary event, then this package prefer to disable word highlight. instead of trying to mimic onboundary event

- `disableSentenceHL`

  Disable sentence highlight

- `disableWordHL`

  Disable word highlight

- `classSentences`

  You can styling the highlighted sentence with css to some class name

- `classWord`

  You can styling the highlighted word with css to some class name

- `lang`

  The one used for `SpeechSynthesisUtterance.lang`. [see](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance/lang)

- `pitch`

  The one used for `SpeechSynthesisUtterance.pitch`

- `volume`

  The one used for `SpeechSynthesisUtterance.volume`

- `autoScroll`

  Beautifull auto scroll, so the user can always see the highlighted sentences

- `clear`

  if `true` overide previous played TTS with some new TTS that user want, if `false` user want to execute play new TTS but there's still exist played TTS. so it will just entering queue behind it

- `visemeMap`

  The data for this parameter i provide in the [demo website source code](https://github.com/albirrkarim/demo-website-react-speech-highlight).

- `preferAudio`

  Some API to pass `string` or `async function` that return audio url like this `example.com/some_file.mp3` as preferred audio.

  So the package will use this audio instead of the built in web speech synthesis.

- `fallbackAudio`

  Some API to pass `string` or `async function` that return audio url like this`example.com/some_file.mp3` as fallback audio.

  When the built in web speech synthesis error or user doesn't have any voice. the fallback audio file will be used.

  ```jsx
  async function getAudioForThisText(){
   var res = await getAudioFromTTSAPI("elevenlabs/api....",text);
   // convert to audio file, convert again to audio url

   return res;
  }

  const config = {
    preferAudio: getAudioForThisText // will only call if needed (if user want to play) so you can save cost
    fallbackAudio: getAudioForThisText // will only call if needed (if web speech synthesis fail)  so you can save cost
  }

  const { controlHL, statusHL, prepareHL, spokenHL } = useTextToSpeech(config)
  ```

- `batchSize`

  The batch size for the audio file.

  When you set the batch is null so they send all the text. then you set for 200 package will chunk the text into 200 character.

  Example: 200
  so package will batched send 200 characters per request to TTS API

  [Readmore about batch system in this package](PROBLEMS.md#1-the-delay-of-audio-played-and-user-gesture-to-trigger-play-must-be-close)

</details>

### 2.B. INTERFACE

#### controlHL

**Basic**

| Name                              | Description           | Parameter                                         |
| --------------------------------- | --------------------- | ------------------------------------------------- |
| controlHL.play()                  | Play TTS              | controlHL.play(HTML_ELEMENT,VoiceURI,callbackEnd) |
| controlHL.pause()                 | Pause TTS             | Just call                                         |
| controlHL.resume()                | Resume TTS            | Resume TTS                                        |
| controlHL.stop()                  | Stop TTS              | Stop TTS                                          |
| controlHL.seekSentenceBackward()  | seekSentenceBackward  | -                                                 |
| controlHL.seekSentenceForward()   | seekSentenceForward   | -                                                 |
| controlHL.seekParagraphBackward() | seekParagraphBackward | -                                                 |
| controlHL.seekParagraphForward()  | seekParagraphForward  | -                                                 |

**New**

`controlHL.changeConfig()`

Change config while playing / realtime.

```jsx
controlHL.changeConfig({
  volume: 1, // 0-1
});
```

```jsx
controlHL.changeConfig({
  rate: 0.9, // 0.1 - 2
});
```

```jsx
controlHL.changeConfig({
  pitch: 1, // 0.1 - 2
});
```

`controlHL.activateGesture()`

Activate double click event

Example:

```jsx
useEffect(() => {
  if (textEl.current) {
     controlHL.activateGesture({
        textEl: textRef.current,
        onAfterDoubleClick: async ()=>{
          // Some function that maybe you want to do after double click
          // and the package will wait until the function is done
          // maybe you want to do pronounciation correction
          // await pronunciationCorrection(textEl.current,(progress)=>{
          //   console.log(progress);
          // });
        },
        onEnded:()=>{
          // Some function that maybe you want to do after TTS done
        }
        actionConfig: currentConfig // Config for the TTS
      })
  }
}, [textEl.current]);
```

#### statusHL

Some state that give the status of the program

The value it can be `idle|play|calibration|pause|getVoicesLoading`

you can fixed the value with accessing from `PKG_STATUS_OPT`

| Name               | Description                                                                                                                                                                           |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `idle`             | it's initial state                                                                                                                                                                    |
| `calibration`      | system still process the text, so when TTS is playing it will performs accurate and better                                                                                            |
| `play`             | The system still playing TTS                                                                                                                                                          |
| `pause`            | Resume TTS                                                                                                                                                                            |
| `getVoicesLoading` | it mean the the system still processing to get best voices available. status will change to this value if we call `prepareHL.getVoices()` [see](#5-bad-performance-or-voice-too-fast) |

#### prepareHL

Contain state and function to preparing the TTS. From all available voices that we can get from the SpeechSynthesis.getVoices() this package will test the voice and give 5 only best voice with language specified before.

| Name                      | Description                                                                                      |
| ------------------------- | ------------------------------------------------------------------------------------------------ |
| prepareHL.getVoices()     | Function to tell this package to get the best voice. [see](#5-bad-performance-or-voice-too-fast) |
| prepareHL.voices          | React state store the result from `prepareHL.getVoices()`                                        |
| prepareHL.loadingProgress | React state for knowing voice testing progress                                                   |

#### spokenHL

Contain react state for reporting while TTS playing.

| Name                        | Description                                      |
| --------------------------- | ------------------------------------------------ |
| spokenHL.sentence           | Some react state, Get the sentence that read     |
| spokenHL.word               | Some react state, Get the word that read         |
| spokenHL.viseme             | Some react state, Get the current viseme         |
| spokenHL.precentageWord     | Read precentage between 0-100 based on words     |
| spokenHL.precentageSentence | Read precentage between 0-100 based on sentences |

# Utilities

Utilities function for precision and add more capabilities

## 1. pronunciationCorrection()

The common problem is the text display to user is different with their spoken form. like math symbol, equations, terms, etc.. [readmore about pronounciation problem](PROBLEMS.md)

[How to build this package with open ai api integration](MAKE_BACKEND.md)

```jsx
const inputText = `
<ul>
  <li>1000</li>
  <li>4090</li>
  <li>1.000.000</li>
  <li>1,2</li>
  <li>9.001</li>
  <li>30,1</li>
</ul>
`;

const textEl = useRef();

const pronounciation = async (): Promise<void> => {
  if (textEl.current) {
    await pronunciationCorrection(textEl.current, (progress) => {
      console.log(progress);
    });
  }
};

useEffect(() => {
  if (textEl.current) {
    console.log("pronounciation");
    void pronounciation();
  }
  // eslint-disable-next-line
}, []);

const textHL = useMemo(() => markTheWords(inputText), [inputText]);

return (
  <div ref={textEl}>
    <p
      dangerouslySetInnerHTML={{
        __html: textHL,
      }}
    ></p>
  </div>
);
```

## 2. getLangForThisText()

For example you want to implement this package into blog website with multi language, it's hard to know the exact language for each post / article.

Then i use chat gpt api to detect what language from some text. see [How to build this package with open ai api integration](MAKE_BACKEND.md)

```jsx
var timeout = null;

const inputText = `
Hallo, das ist ein deutscher Beispieltext
`;

async function getLang() {
  var predictedLang = await getLangForThisText(textEl.current);

  // will return `de`
  if (predictedLang) {
    setLang(predictedLang);
  }
}

useEffect(() => {
  if (textEl.current) {
    if (inputText != "") {
      // The timeout is for use case: text change frequently.
      // if the text doesn't change just call getLang();
      if (timeout) {
        clearTimeout(timeout);
      }

      timeout = setTimeout(() => {
        getLang();
      }, 2000);
    }
  }
}, [inputText]);
```

## 3. convertTextIntoClearTranscriptText()

Function to convert your input string (just text or html string) into [Speech Synthesis Markup Language (SSML)](https://cloud.google.com/text-to-speech/docs/ssml) clear format that this package **can understand** when making transcript timestamp.

**You must use this function when making the audio file**

```jsx
var convertInto = "ssml"; // or "plain_text"
var clear_transcript = convertTextIntoClearTranscriptText(
  "your string here",
  convertInto
);
// with the clear_transcript you can make audio file with help of other speech synthesis platforms like elevenlabs etc.
```

# Package Data and Cache Integration

The data or cache (sessionStorage / localStorage) that this package use can be accessed outside. The one that used by [React GPT Web Guide](https://github.com/albirrkarim/react-gpt-web-guide-docs).

<details>
  <summary>Show</summary>

```js
import {
  // ...other API

  // Your app can read the data / cache used by this package, like:
  PREFERRED_VOICE, // Set global config for the preffered voice
  PKG_STATUS_OPT, // Package status option
  PKG_DEFAULT_LANG, // Package default lang
  LANG_CACHE_KEY, // Package lang sessionStorage key
  OPENAI_CHAT_COMPLETION_API_ENDPOINT, // Key to set open ai chat completion api
  getVoiceBasedOnVoiceURI,
  getCachedVoiceInfo,
  getCachedVoiceURI,
  setCachedVoiceInfo,
  getCachedVoiceName,
} from "react-speech-highlight";
```

</details>

Usage example:

## Set custom constant value for this package

```jsx
import {
  PREFERRED_VOICE,
  OPENAI_CHAT_COMPLETION_API_ENDPOINT,
  REQUEST_HEADERS,
} from "react-speech-highlight";

// set global preferred voice
useEffect(() => {
  const your_defined_preferred_voice = {
    // important! Define language code (en-us) with lowercase letter
    "de-de": ["Helena", "Anna"],
  };
  sessionStorage.setItem(
    PREFERRED_VOICE,
    JSON.stringify(your_defined_preferred_voice)
  );

  // Set open ai chat completion api
  // example in demo website (next js using environment variable) src/Components/ClientProvider.tsx
  if (process.env.NEXT_PUBLIC_OPENAI_CHAT_COMPLETION_API_ENDPOINT) {
    // Setting up the OpenAI chat completion API endpoint before the app starts
    sessionStorage.setItem(
      OPENAI_CHAT_COMPLETION_API_ENDPOINT,
      process.env.NEXT_PUBLIC_OPENAI_CHAT_COMPLETION_API_ENDPOINT
    );
  }

  // or
  sessionStorage.setItem(
    OPENAI_CHAT_COMPLETION_API_ENDPOINT,
    "http://localhost:8000/api/v1/public/text-to-speech-elevenlabs"
  );

  // You can set the headers for the fetch API request with this key in sessionStorage
  const headers = {
    Authorization: `Bearer xxx_YOUR_PLATFORM_AUTH_TOKEN_HERE_xxx`,
  };

  // Tips: Hover your mouse over the REQUEST_HEADERS variable to see the example and docs
  sessionStorage.setItem(REQUEST_HEADERS, JSON.stringify(headers));
}, []);
```
