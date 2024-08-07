# Example Code

This is the simple example code. Want more? see the [HOW_TO_USE.md](HOW_TO_USE.md)

### Styling the highlighter

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

### The code example

File `App.js`

```jsx
import "./App.css";
import { useEffect, useMemo, useRef, useState } from "react";
import { markTheWords, useTextToSpeech } from "react-speech-highlight";

export default function App() {
  const text = "Some Input String";
  const textEl = useRef();
  const lang = "en-US";

  const config = {
    disableSentenceHL: false,
    disableWordHL: false,
    autoScroll: false,
    lang: lang,
  }

  const { controlHL, statusHL, prepareHL, spokenHL } = useTextToSpeech(config);

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
            controlHL.resume(config);
          } else {
            controlHL.play(
              textEl.current
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

### Sample TTS Control

File `PanelControlTTS.js`

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
