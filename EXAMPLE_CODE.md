# Example Code

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
    lang: "en - US",
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
export default function PanelControlTTS({ isPlay, play, pause, stop }) {
  return (
    <>
      <button
        onClick={() => {
          if (isPlay) {
            pause();
          } else {
            play();
          }
        }}
      >
        {isPlay ? "pause" : "play"}
      </button>

      {isPlay && <button onClick={stop}>stop</button>}
    </>
  );
}
```
