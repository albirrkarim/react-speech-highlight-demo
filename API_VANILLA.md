# API Vanilla

The only different between [React version](https://react-speech-highlight.vercel.app) and [Vanilla Js Version](https://vanilla-speech-highlight.vercel.app) is just the React state (`useState`)

In the vanilla version we try to mimic the react state with using function callback

```js
// This is just to pointer for the current played tts
var statusHL = document.getElementById("statusHL");
var spokenHL_viseme = document.getElementById("spokenHL_viseme");
var spokenHL_word = document.getElementById("spokenHL_word");
var spokenHL_sentence = document.getElementById("spokenHL_sentence");
var spokenHL_percentageWord = document.getElementById(
  "spokenHL_percentageWord"
);
var spokenHL_percentageSentence = document.getElementById(
  "spokenHL_percentageSentence"
);

const setStatusHLState = (status) => {
  console.log("Default setStatusHLState function the statusHL is ", status);

  if (statusHL) {
    statusHL.innerHTML = status;
  }
};

const setVisemeSpoken = (viseme) => {
  console.log("Default setVisemeSpoken function. the viseme ", viseme);

  if (spokenHL_viseme) {
    spokenHL_viseme.innerHTML = viseme;
  }
};

const setWordSpoken = (word) => {
  console.log("Default setWordSpoken function. the word ", word);

  if (spokenHL_word) {
    spokenHL_word.innerHTML = word;
  }
};

const setSentenceSpoken = (sentence) => {
  console.log("Default setSentenceSpoken function ", sentence);

  if (spokenHL_sentence) {
    spokenHL_sentence.innerHTML = sentence;
  }
};

const setPercentageSentence = (percentageSentence) => {
  console.log(
    "Default setPercentageSentence function, percentageSentence = ",
    percentageSentence
  );

  if (spokenHL_percentageWord) {
    spokenHL_percentageWord.innerHTML = percentageSentence + "%";
  }
};

const setPercentageWord = (percentageWord) => {
  console.log(
    "Default setPercentageWord function, percentageWord = ",
    percentageWord
  );

  if (spokenHL_percentageSentence) {
    spokenHL_percentageSentence.innerHTML = percentageWord + "%";
  }
};

var defaultParams = {
  setVoices: (voices) => {
    console.log("Default setVoices function ", voices);
  },
  setLoadingProgress: (progress) => {
    console.log(
      "Default setLoadingProgress function the progress is ",
      progress
    );
  },
  setStatusHLState,
  setVisemeSpoken,
  setWordSpoken,
  setSentenceSpoken,
  setPercentageSentence,
  setPercentageWord,
};

// Global control HL
const { controlHL } = useTextToSpeech(defaultParams);

// play the tts
controlHL.play();
```

This is the API of `useTextToSpeech()` is like this. minus the react state (i comment it)

```jsx
/**
 * Type for control highlight
 */
export interface ControlHLType {
  play: PlayFunction;
  resume: () => void;
  pause: () => void;
  stop: () => void;
  seekSentenceBackward: (config: Partial<ConfigTTS>) => void;
  seekSentenceForward: (config: Partial<ConfigTTS>) => void;
  seekParagraphBackward: (config: Partial<ConfigTTS>) => void;
  seekParagraphForward: (config: Partial<ConfigTTS>) => void;
  activateGesture: ActivateGestureFunction;
  changeConfig: (actionConfig: Partial<ConfigTTS>) => void;
}

export interface PrepareHLType {
  // loadingProgress: number
  // voices: VoiceInfo[]
  getVoices: GetVoicesFunction;
  retestVoices: RetestVoicesFunction;
  quicklyGetSomeBestVoice: QuicklyGetSomeBestVoiceFunction;
}

/**
 * Type for useTextToSpeech
 */
export interface UseTextToSpeechReturnType {
  controlHL: ControlHLType;
  // statusHL: StatusHLType
  // spokenHL: SpokenHLType
  prepareHL: PrepareHLType;
}
```
