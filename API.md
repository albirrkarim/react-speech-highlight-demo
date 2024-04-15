# API

The api is a function that you can use to integrate this package into your apps. When read this api docs you can toggle `Outline` (see top right) menu in github so you can navigate easily.

see [API_VANILLA.md](API_VANILLA.md) for vanilla js version

```jsx
// v4.9.3 API
import {
  // Main
  markTheWords,
  useTextToSpeech,

  // Utilities function for precision and add more capabilities
  convertAllNumberIntoWord,
  getLangForThisText,
  getTheVoices,
  noAbbreviation,
  speak,
  romanTransform,
  convertTextIntoClearTranscriptText,

  // Package Data and Cache Integration
  // Your app can read the data used by this package, like:
  PREFERRED_VOICE, // Set global config for the preffered voice
  PKG_STATUS_OPT, // Package status option
  PKG_DEFAULT_LANG, // Package default lang
  LANG_CACHE_KEY, // Package lang sessionStorage key
  getVoiceBasedOnVoiceURI,
  getCachedVoiceInfo,
  getCachedVoiceURI,
  setCachedVoiceInfo,
  getCachedVoiceName,
} from "react-speech-highlight";
```

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
};

controlHL.play(textEl.current, callback, actionConfig);
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
    controlHL.activateGesture(
      textEl.current,
      () => {
        // callback (optional)
        // Will be called after user doing double click
      },
      {
        lang: lang,
      }
    );
  }
}, []);
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

## 1. convertAllNumberIntoWord()

The purpose of [chat GPT completions api](https://platform.openai.com/docs/api-reference/completions/create) is to convert the number into word form number, because the `window.speechSynthesis` will fail.

With `window.speechSynthesis` the number `9000` will spoken as "nine zero zero zero"
So we must convert into word form number.

example `9000` -> `nine thousand`
example `9001` -> `nine thousand one`

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

useEffect(() => {
  if (textEl.current) {
    convertAllNumberIntoWord(textEl.current, "en-US");
  }
}, [inputText]);

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

## 3. getTheVoices()

The function `getTheVoices()` is to get all available voice with customizable filtering.

For example lets say we have 5 voices

```
1. Grandma, en-US
2. Samantha, en-US
3. Damayanti, id-ID
4. Robert, en-UK
5. Angel, en-AU
```

The language we want is `en-US`

`preferedLang = "en-US"`

if the `withException=true` then we will filter the `grandma` voices.

and if we `wide=true`
Then all the `en` (english) voices will return as an output.

if `wide=false` it mean only the exact match `en-US` language will be returned.

Parameter

```js
function getTheVoices(preferedLang, withException = true, wide = false)
```

Implementation

```jsx
const [arr, setArr] = useState([]);

useEffect(() => {
  var a = speechSynthesis.getVoices();

  if (a.length == 0) {
    speechSynthesis.addEventListener("voiceschanged", () => {
      setArr(getTheVoices(lang, true, true));
    });
  } else {
    setArr(getTheVoices(lang, true, true));
  }
}, []);
```

## 4. noAbbreviation()

Default function that this package use

## 5. speak()

Simple function to just speak with [SpeechSynthesis](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis) without doing highlight or show the text.

```js
speak(
  "Hello this is example text",
  {
    // Event handler
    // https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance/boundary_event
    start: () => {
      // onstart
    },
    end: () => {
      // onend
    },
    boundary: (ev) => {
      // onboundary
    },
  },
  { volume: 0.5, rate: 1 },
  2000 // Timeout (optional) to handle when the voice is die
);
```

## 6. romanTransform()

Convert roman number (I. II.) into arabic number (1, 2)
Since version 4.6.8. The `romanTransform()` now is change string (maybe roman number exist) to a form that makes sense to pronounce. see [test case](test_case/demo/roman_number.js) for this function.

```js
var a = romanTransform("I.");
// 1
```

## 7. convertTextIntoClearTranscriptText()

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
  getVoiceBasedOnVoiceURI,
  getCachedVoiceInfo,
  getCachedVoiceURI,
  setCachedVoiceInfo,
  getCachedVoiceName,
} from "react-speech-highlight";
```

</details>

Usage example:

## Set Preferred Voice

You can set Preferred Voice

```jsx
import { PREFERRED_VOICE } from "react-speech-highlight";

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
}, []);
```
