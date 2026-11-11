# Example Code

This is the simple example code. Want more? see the [HOW_TO_USE.md](HOW_TO_USE.md)

### Styling the highlighter

File `App.css`

```css
/* Since 6.0 these classes are on the boxes painted over your text: style their background, not the text color. */
.highlight-spoken {
  background-color: #ff6f00 !important;
  border-radius: 5px;
}

.highlight-sentence {
  background-color: #ffe082 !important;
  border-radius: 5px;
}
```

### The code example

File `App.js`

```jsx
import "./App.css";
import { useEffect, useRef } from "react";
import { useTextToSpeech } from "react-speech-highlight";

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

  // 6.0: no marking step. Double click a sentence to read from there; hovering shows a "double click to play" tooltip.
  useEffect(() => {
    controlHL.activateGesture({ textEl: textEl.current });
  }, []);

  return (
    <>
      <div ref={textEl}>
        <div
          dangerouslySetInnerHTML={{
            __html: text,
          }}
        ></div>
      </div>

      <PanelControlTTS
        isPlay={statusHL == "play" || statusHL == "calibration"}
        play={() => {
          if (statusHL == "pause") {
            controlHL.resume();
          } else {
            controlHL.play({ textEl: textEl.current });
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
