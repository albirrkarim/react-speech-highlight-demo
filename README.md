# React Speech Highlight

React components that use web speech synthesis API to text-to-speech tasks and also highlight the word and sentences that are being spoken

### Demo

[https://albirrkarim.github.io/react-speech-highlight/](https://albirrkarim.github.io/react-speech-highlight/)


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
