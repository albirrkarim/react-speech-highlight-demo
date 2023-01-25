# React Speech Highlight

React components that use web speech synthesis API to text-to-speech tasks and also highlight the word and sentences that are being spoken

## Version 3.8

## Demo

[https://albirrkarim.github.io/react-speech-highlight/](https://albirrkarim.github.io/react-speech-highlight/)

## API

```jsx
const { controlHL, statusHL, prepareHL, spokenHL } = useTextToSpeech({
  classSentences: "highlight-sentence",
  classWord: "highlight-spoken",

  lang: "id-ID",
  pitch: 1,
  rate: 0.9,
  volume: 1,
  autoScroll: false,
  clear: true,
});
```

### controlHL

| Name             | Description |
| ---------------- | ----------- |
| controlHL.play   | Play TTS    |
| controlHL.pause  | Pause TTS   |
| controlHL.resume | Resume TTS  |
| controlHL.stop   | Stop TTS    |

### statusHL

Some state that give the status of the program

The value it can be `idle|play|calibartion|resume|pause|getVoicesLoading` 

### prepareHL

Contain state and function to preparing the TTS. From all available voices that we can get from the SpeechSynthesis.getVoices() this package will test the voice and give 5 only best voice with language specified before

| Name                  | Description                                                    |
| --------------------- | -------------------------------------------------------------- |
| prepareHL.getVoices() | Some function to tell this program to get the best voice       |
| prepareHL.voices      | Some react state store the result from `prepareHL.getVoices()` |

### spokenHL

Contain state and function to preparing the TTS.

| Name              | Description                                  |
| ----------------- | -------------------------------------------- |
| spokenHL.sentence | Some react state, Get the sentence that read |
| spokenHL.word     | Some react state, Get the word that read     |

<br>
<br>
<br>

### Code

```jsx
import { useEffect, useMemo, useRef, useState } from "react";
import { markTheWords, useTextToSpeech } from "./TextToSpeech/TextToSpeech";

function Example() {
  const text = "Some Input String";
  const textEl = useRef();
  const { controlHL, statusHL, prepareHL, spokenHL } = useTextToSpeech({
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
