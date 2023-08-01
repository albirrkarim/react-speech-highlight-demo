# API

The api is a function that you can use to integrate this package into your apps.

```jsx
import {
  // Main
  markTheWords,
  useTextToSpeech,


  // Utilities & add more capabilities
  getTheVoices,
  noAbbreviation,
  speak,
  convertAllNumberIntoWord,
  getLangForThisText,
} from "react-speech-highlight";
```

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
};

controlHL.play(textEl.current, voiceURI, null, actionConfig);
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

</details>

### 2.B. INTERFACE

### controlHL

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
      localStorage.getItem("voice_for_" + lang),
      null,
      {
        lang: lang,
      }
    );
  }
}, []);
```

### statusHL

Some state that give the status of the program

The value it can be `idle|play|calibration|pause|getVoicesLoading`

| Name               | Description                                                                                                                                                                           |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `idle`             | it's initial state                                                                                                                                                                    |
| `calibration`      | system still process the text, so when TTS is playing it will performs accurate and better                                                                                            |
| `play`             | The system still playing TTS                                                                                                                                                          |
| `pause`            | Resume TTS                                                                                                                                                                            |
| `getVoicesLoading` | it mean the the system still processing to get best voices available. status will change to this value if we call `prepareHL.getVoices()` [see](#5-bad-performance-or-voice-too-fast) |

### prepareHL

Contain state and function to preparing the TTS. From all available voices that we can get from the SpeechSynthesis.getVoices() this package will test the voice and give 5 only best voice with language specified before

| Name                  | Description                                                                                           |
| --------------------- | ----------------------------------------------------------------------------------------------------- |
| prepareHL.getVoices() | Some function to tell this program to get the best voice. [see](#5-bad-performance-or-voice-too-fast) |
| prepareHL.voices      | Some react state store the result from `prepareHL.getVoices()`                                        |

### spokenHL

Contain react state for reporting while TTS playing.

| Name                        | Description                                      |
| --------------------------- | ------------------------------------------------ |
| spokenHL.sentence           | Some react state, Get the sentence that read     |
| spokenHL.word               | Some react state, Get the word that read         |
| spokenHL.precentageWord     | Read precentage between 0-100 based on words     |
| spokenHL.precentageSentence | Read precentage between 0-100 based on sentences |
