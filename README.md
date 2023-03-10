# React Speech Highlight

https://user-images.githubusercontent.com/29292018/215037509-1acf8cfd-2e23-4a96-b87c-a031438cc190.mp4

React components that use web speech synthesis API to text-to-speech tasks and also highlight the word and sentences that are being spoken.

**Table Of Contents**

- [A. Introduction](#a-introduction)
- [B. Todo](#b-todo)
- [C. Demo](#c-demo)
- [D. API](#d-api)
- [E. Example Code](#e-example-code)

# A. Introduction

Recently, i want to implement the text-to-speech task to my website. Then i search on the internet. but i can't find the library or npm package to solve all my problems. I just want some powerfull package that work on all platforms.

The [SpeechSynthesis](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis). Comes with problems:

### 1. Unlimited String Length Capability

Some available voice doesn't support long text / string.

### 2. Cross Platform Problem

I'm sure that you have the same experience, developing web for cross platform, android, Iphone or Ipad always resulting problem.

- Speech synthesis in IOS or Ipad OS sometimes die unexpected.
- Sometimes speechsynthesis doesn't fire the onpause,onresume event on android, ipad,

### 3. Unpredictable Onboundary

- First, Not all voices have `onboundary` event
- On ipad the `onboundary` event only work with about 30% of the full sentence.
- Also the on boundary event doesn't fire function accurately. for example the text is `2022` the `onboundary` will fire twice `20` and `22`.

### 4. We want Text user see is different with what system speak

Sometimes we need need abbreviation function, for example we need the text that displayed to user is different with the text that we use to give the to the [speech utterance](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance/text)

**Roman Number**

We need displayed text is `I. II. III.` if we input that same text the system will read as `i. ii. iii.`

We need to change the roman numbers to arabic numbers so the system can read correctly.

**Lang Abbreviation**

in english abbreviation like `FOMO`, `ETA`, etc.

in indonesian

`dgn` = `dengan`

`yg` = `yang`

This package also have built-in abbreviation function, or you can write your own rules.

input:string -> abbreviation function -> output:string.

### 5. Bad performance or voice too fast

in API `prepareHL.getVoices()` i implement this flow.

![React Speech Highlight](./img/prepareHL.jpeg)

Then I do research to build this. I took two weeks to solve the problem.

# B. TODO

- Give API for custom abbreviation function (done)
- Give API for turn on / off highlight sentence and word (done)
- onboundary on ipad os sometime only works on just 30% of words in a sentence
- Give API output: The html element for highlighted sentence and word. This can be benefiting when you play in web metaverse. imagine some Text-To-Speech in metaverse.
- **Let me know what you want from this package, please write it on issues tab**

# C. Demo

**Current version is 4.0**

I will update this package. to solve any known problem. so let me know the problem.

**Demo**

[https://albirrkarim.github.io/react-speech-highlight/](https://albirrkarim.github.io/react-speech-highlight/)

# D. API

## 1. TTS Marker

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

## 2. TTS React Hook

```jsx
const config = {
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

const { controlHL, statusHL, prepareHL, spokenHL } = useTextToSpeech(config);
```

### CONFIG

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

### INTERFACE

### controlHL

| Name               | Description | Parameter                                         |
| ------------------ | ----------- | ------------------------------------------------- |
| controlHL.play()   | Play TTS    | controlHL.play(HTML_ELEMENT,VoiceURI,callbackEnd) |
| controlHL.pause()  | Pause TTS   | Just call                                         |
| controlHL.resume() | Resume TTS  | Resume TTS                                        |
| controlHL.stop()   | Stop TTS    | Stop TTS                                          |

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

Contain state and function to preparing the TTS.

| Name              | Description                                  |
| ----------------- | -------------------------------------------- |
| spokenHL.sentence | Some react state, Get the sentence that read |
| spokenHL.word     | Some react state, Get the word that read     |

<br>
<br>

# E. Example Code

File `App.css`
```css
.highlight-spoken {
  color: black !important;
  background-color: #ff6f00 !important;
  border-radius: 5px;
}

.highlight-sentence {
  color: #000000 !important;
  background-color: #ffe082 !important;
  border-radius: 5px;
}
```

File `App.js`
```jsx
import "./App.css";
import { useEffect, useMemo, useRef, useState } from "react";
import { markTheWords, useTextToSpeech } from "./TextToSpeech/TextToSpeech";

function Example() {
  const text = "Some Input String";
  const textEl = useRef();
  const { controlHL, statusHL, prepareHL, spokenHL } = useTextToSpeech({
    disableSentenceHL: false,
    disableWordHL: false,
    autoScroll: false,
    lang: en - US,
  });

  const textHL = useMemo(() => markTheWords(text), [text]);

  return (
    <>
      <div ref={textEl}>
        <div
          dangerouslySetInnerHTML={{
            __html: textHL,
          }}
        ></div>
      </div>

      <PanelControlTTS
        isPlay={statusHL == "play" || statusHL == "calibration"}
        play={() => {
          if (statusHL == "pause") {
            controlHL.resume();
          } else {
            controlHL.play(
              textEl.current,
              localStorage.getItem("voice_for_" + lang)
            );
          }
        }}
        pause={controlHL.pause}
        stop={controlHL.stop}
      />
    </>
  );
}
```

Sample TTS Control with material UI

```jsx
import { IconButton } from "@mui/material";
import PauseIcon from "@mui/icons-material/Pause";
import StopIcon from "@mui/icons-material/Stop";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

export default function PanelControlTTS({ isPlay, play, pause, stop }) {
  return (
    <>
      <IconButton
        onClick={() => {
          if (isPlay) {
            pause();
          } else {
            play();
          }
        }}
      >
        {isPlay ? <PauseIcon /> : <PlayArrowIcon />}
      </IconButton>

      {isPlay && (
        <IconButton onClick={stop}>
          <StopIcon />
        </IconButton>
      )}
    </>
  );
}
```
