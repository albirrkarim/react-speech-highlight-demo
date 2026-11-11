# API

The API is a set of functions that you can use to integrate this package into your apps. When reading this API documentation, you can toggle the `Outline` (see top right) menu in GitHub so you can navigate easily.

This package is written in TypeScript. You don't have to read all the docs here because this package now supports [VS Code IntelliSense](https://code.visualstudio.com/docs/editor/intellisense). What is that? Simply put, when you hover your mouse over a variable or function in [VS Code](https://code.visualstudio.com), it will show a popup (simple tutorial) explaining what the function does, examples, params, etc.

<details>
  <summary>Show Video</summary>
  <br/>

https://github.com/albirrkarim/react-speech-highlight-demo/assets/29292018/05d325f9-469c-47e9-97d3-10053628e18c

</details>

<br/>

see [API_VANILLA.md](API_VANILLA.md) for vanilla js version.

<br/>

Actually, **there are a lot** of functions, [llm engine](LLM_ENGINE.md), and constants that you can import from this package. Here are just a few of them. When you have bought the package, you can just go to the `index.ts` file and see all the functions and constants. The package has a lot of features, of course it has a lot of APIs.

<details>
  <summary>Show How to import something from the package</summary>
  <br/>

```jsx
// v6.0.0 API
import {
  // Main
  useTextToSpeech,
  markTheWords, // optional since 6.0: put the <sps>/<spw> tags into your page yourself (5.x style)
  isMarkedByApp, // does this element already hold your own <sps> tags?
  activateHoverHelper, // hover a sentence: highlight + "double click to play" tooltip
  DEFAULT_EXCLUDE_ELEMENTS, // page parts never read by default (tables of contents, share bars...)

  // Utilities function for precision and add more capabilities
  getTheVoices,
  noAbbreviation,
  speak,
  convertTextIntoClearTranscriptText,

  // Package Data and Cache Integration
  // Your app can read the data used by this package, like:
  PKG,
  PREFERRED_VOICE, // Set global config for the preferred voice
  PKG_STATUS_OPT, // Package status option
  PKG_DEFAULT_LANG, // Package default lang
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
  MarkTheWordsType,
  ConfigTTS,
  GetAudioType,
  GetAudioReturnType,
  VisemeMap,
  SentenceInfo,
} from "react-speech-highlight";

// Pronunciation correction and language detection are in the demo website's language plugin
// (src/app/lib/plugins/language), not in the package itself.
import { pronunciationCorrection, getLangForThisText } from "@/app/lib/plugins/language";
```

</details>

<br/>

# Main

## 1. Marking: automatic since 6.0

You don't mark your text any more. Render it as it is and pass its element to `controlHL.play()` or `controlHL.activateGesture()`. The package marks a **hidden copy** of it (sentences and words), keeps that marking cached until your text changes, and **paints the highlight over your text**. Your page's HTML is never changed, so React and other frameworks keep their own DOM.

<details>
  <summary>Show Code</summary>
  <br/>

```jsx
const textEl = useRef(null);

// Your text, rendered as usual: no marking step
<div ref={textEl} dangerouslySetInnerHTML={{ __html: text }} />

controlHL.play({ textEl: textEl.current });
```

</details>

**Marking the page yourself (5.x style).** `markTheWords(el, abbreviationFunction?)` still puts `<sps>` (sentence) and `<spw>` (word) tags into your element. When an element already holds `<sps>` tags (`isMarkedByApp(el)` is `true`), the package uses your tags as they are: `sentenceNode.el()` is your element, the highlight is a class on it, and CSS like `sps:hover` works. Use this only when you need the tags themselves.

<details>
  <summary>Show Code</summary>
  <br/>

```jsx
function abbreviationFunction(str) {
  // Input(string) : LMK
  // Output(string) : Let me know
  return str;
}

useEffect(() => {
  if (textEl.current) markTheWords(textEl.current, abbreviationFunction);
}, [text]);
```

</details>

**Page parts that are never read.** Code, buttons and `MARKING_EXCEPTIONS` are skipped, plus, since 6.0, `DEFAULT_EXCLUDE_ELEMENTS`: tables of contents, related posts, author boxes, ratings, share bars, newsletter and comment forms, other audio players, view counters, breadcrumbs and tags.

<br/>

## 2. TTS React Hook `useTextToSpeech()`

### 2.A. CONFIG

There are two config placement, initialConfig and actionConfig.

<details>
  <summary>Show Code</summary>
  <br/>

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

  timestampDetectionMode: "auto",
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

  timestampDetectionMode: "auto", // or rule, ml
};

void controlHL.play({
  textEl: textEl.current,
  onEnded: () => {
    console.log("Callback when tts done");
  },
  actionConfig,
});
```

</details>

<details>
  <summary>Show details config</summary>

- `autoHL`

  If the voice does not support the onboundary event, then this package prefers to disable word highlighting instead of trying to mimic the onboundary event.

- `disableSentenceHL`

  Disable sentence highlight

- `disableWordHL`

  Disable word highlight

- `classSentences`

  You can style the highlighted sentence with CSS using this class name

- `classWord`

  You can style the highlighted word with CSS using this class name

  Since 6.0 the highlight is a box painted over your text, and these classes are on the boxes: set `background-color`, `border-radius` and the like. CSS that changes the text itself (`color`, `font-weight`) doesn't apply any more. A page you marked yourself (`markTheWords`) keeps the 5.x behaviour: the class goes on your `<sps>`/`<spw>` elements.

- `lang`

  The one used for `SpeechSynthesisUtterance.lang`. [see](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance/lang)

- `pitch`

  The one used for `SpeechSynthesisUtterance.pitch`

- `volume`

  The one used for `SpeechSynthesisUtterance.volume`

- `autoScroll`

  Beautiful auto-scroll, so the user can always see the highlighted sentences

- `clear`

  If `true`, override the previously playing TTS with the new TTS that the user wants. If `false`, when the user wants to execute a new TTS but there's still an existing playing TTS, it will just enter the queue behind it.

- `visemeMap`

  The data for this parameter I provide in the [demo website source code](https://github.com/Web-XR-AI-lab/demo-website-react-speech-highlight).

- `preferAudio`

  An API to pass a `string` or `async function` that returns an audio URL like `example.com/some_file.mp3` as preferred audio.

  So the package will use this audio instead of the built-in web speech synthesis.

- `fallbackAudio`

  An API to pass a `string` or `async function` that returns an audio URL like `example.com/some_file.mp3` as fallback audio.

  When the built-in web speech synthesis errors or the user doesn't have any voice, the fallback audio file will be used.

  ```jsx
  async function getAudioForThisText(text){
   var res = await getAudioFromTTSAPI("https://yourbackend.com/api/elevenlabs....",text);
   // convert to audio file, convert again to audio url

   return res;
  }

  const config = {
    preferAudio: getAudioForThisText // will only call if needed (if user wants to play) so you can save cost
    fallbackAudio: getAudioForThisText // will only call if needed (if web speech synthesis fails)  so you can save cost
  }

  const { controlHL, statusHL, prepareHL, spokenHL } = useTextToSpeech(config)
  ```

- `batchSize`

  The batch size for the audio file.

  When you set the batch to null, they send all the text. When you set it to 200, the package will chunk the text into 200-character segments.

  Example: 200
  The package will send 200 characters per request to the TTS API in batches.

  [Read more about batch system in this package](PROBLEMS.md#1-the-delay-of-audio-played-and-user-gesture-to-trigger-play-must-be-close)

- `timestampDetectionMode`

  Detection mode for timestamp engine. [see private docs](https://github.com/Web-XR-AI-lab/demo-website-react-speech-highlight/tree/main/docs)

</details>

### 2.B. INTERFACE

#### controlHL

```js
controlHL.play();
controlHL.pause();
controlHL.resume();
controlHL.stop();
controlHL.seekSentenceBackward();
controlHL.seekSentenceForward();
controlHL.seekParagraphBackward();
controlHL.seekParagraphForward();
controlHL.changeConfig();
controlHL.activateGesture();
```

#### Double click and hover: `controlHL.activateGesture()`

Double click a sentence to read from there. Since 6.0 hovering a sentence also highlights it with a "double click to play" tooltip.

```jsx
useEffect(() => {
  controlHL.activateGesture({
    textEl: textEl.current,
    hover: true, // default; a string is the tooltip text ("Double click to read"); false turns hover off
    onAfterDoubleClick: (clickReport) => true, // return false to stop the play
  });
}, []);
```

A double click on an excluded element (your player's buttons, a share bar) leaves the current reading alone.

#### statusHL

A React state that gives the status of the program. The value can be `idle|play|calibration|pause|loading`. You can get the fixed value by accessing the `PKG_STATUS_OPT` constant.

| Name          | Description                                                                                                                                                                                      |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `idle`        | It's the initial state                                                                                                                                                                           |
| `calibration` | System is still processing the text, so when TTS is playing, it will perform accurately and better                                                                                               |
| `play`        | The system is still playing TTS                                                                                                                                                                  |
| `pause`       | Paused TTS (use resume to continue)                                                                                                                                                              |
| `loading`     | it mean the the system still processing to get best voices available. status will change to this value if we call `prepareHL.getVoices()` [see](PROBLEMS.md#4-bad-performance-or-voice-too-fast) |

#### prepareHL

Contains state and functions for preparing the TTS. From all available voices that we can get from SpeechSynthesis.getVoices(), this package will test the voices and give only the 5 best voices with the specified language.

| Name                      | Description                                                                                                 |
| ------------------------- | ----------------------------------------------------------------------------------------------------------- |
| prepareHL.getVoices()     | Function to tell this package to get the best voice. [see](PROBLEMS.md#4-bad-performance-or-voice-too-fast) |
| prepareHL.voices          | React state stores the result from `prepareHL.getVoices()`                                                  |
| prepareHL.loadingProgress | React state for knowing voice testing progress                                                              |

#### spokenHL

Contains React states for reporting while TTS is playing.

| Name                        | Description                                      |
| --------------------------- | ------------------------------------------------ |
| spokenHL.sentence           | React state: Get the sentence being read         |
| spokenHL.word               | React state: Get the word being read             |
| spokenHL.viseme             | React state: Get the current viseme              |
| spokenHL.percentageWord     | Read percentage between 0-100 based on words     |
| spokenHL.percentageSentence | Read percentage between 0-100 based on sentences |

# Utilities

Utilities function for precision and add more capabilities

## 1. pronunciationCorrection()

The common problem is that the text displayed to the user is different from their spoken form, like math symbols, equations, terms, etc. [Read more about pronunciation problems](PROBLEMS.md)

[How to build this package with OpenAI API integration](MAKE_BACKEND.md)

<details>
  <summary>Show Code</summary>
  <br/>

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

const pronunciation = async (): Promise<void> => {
  if (textEl.current) {
    await pronunciationCorrection(textEl.current, (progress) => {
      console.log(progress);
    });
  }
};

useEffect(() => {
  if (textEl.current) {
    console.log("pronunciation");
    void pronunciation();
  }
  // eslint-disable-next-line
}, []);

return (
  <div ref={textEl}>
    <p
      dangerouslySetInnerHTML={{
        __html: inputText,
      }}
    ></p>
  </div>
);
```

</details>

## 2. getLangForThisText()

For example, if you want to implement this package into a blog website with multiple languages, it's hard to know the exact language for each post/article.

Then I use the ChatGPT API to detect the language from the text. See [How to build this package with OpenAI API integration](MAKE_BACKEND.md)

<details>
  <summary>Show Code</summary>
  <br/>

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

</details>

## 3. convertTextIntoClearTranscriptText()

Function to convert your input string (just text or HTML string) into [Speech Synthesis Markup Language (SSML)](https://cloud.google.com/text-to-speech/docs/ssml) clear format that this package **can understand** when making transcript timestamps.

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

The data or cache (storage) that this package uses can be accessed externally. This is used by [React GPT Web Guide](https://github.com/albirrkarim/react-gpt-web-guide-docs).

<details>
  <summary>Show</summary>

```js
import {
  // ...other API

  // Your app can read the data / cache used by this package, like:
  PREFERRED_VOICE, // Set global config for the preferred voice
  PKG_STATUS_OPT, // Package status option
  PKG_DEFAULT_LANG, // Package default lang
  OPENAI_CHAT_COMPLETION_API_ENDPOINT, // Key to set OpenAI chat completion API
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
import { setupKey, storage } from "@/app/react-speech-highlight";

// set global preferred voice
useEffect(() => {
  const your_defined_preferred_voice = {
    // important! Define language code (en-us) with lowercase letter
    "de-de": ["Helena", "Anna"],
  };

  storage.setItem(
    "global",
    setupKey.PREFERRED_VOICE,
    yourDefinedPreferredVoice
  );

  // Set OpenAI chat completion API
  // example in demo website (next js using environment variable) src/Components/ClientProvider.tsx
  if (process.env.NEXT_PUBLIC_OPENAI_CHAT_COMPLETION_API_ENDPOINT) {
    storage.setItem(
      "global",
      setupKey.OPENAI_CHAT_COMPLETION_API_ENDPOINT,
      process.env.NEXT_PUBLIC_OPENAI_CHAT_COMPLETION_API_ENDPOINT
    );
  }

  // or
  storage.setItem(
    "global",
    OPENAI_CHAT_COMPLETION_API_ENDPOINT,
    "http://localhost:8000/api/v1/public/chat"
  );

  // You can set the headers for the fetch API request with this key in sessionStorage
  const headers = {
    Authorization: `Bearer xxx_YOUR_PLATFORM_AUTH_TOKEN_HERE_xxx`,
  };

  // Tips: Hover your mouse over the REQUEST_HEADERS variable to see the example and docs
  storage.setItem("global", setupKey.REQUEST_HEADERS, headers);

  // Speech to Text API endpoint
  if (process.env.NEXT_PUBLIC_OPENAI_STT_API_ENDPOINT) {
    storage.setItem(
      "global",
      setupKey.OPENAI_SPEECH_TO_TEXT_API_ENDPOINT,
      process.env.NEXT_PUBLIC_OPENAI_STT_API_ENDPOINT
    );
  }
}, []);
```
