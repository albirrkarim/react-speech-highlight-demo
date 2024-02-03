# API Vanilla

The only different between [React version](https://react-speech-highlight.vercel.app) and [Vanilla Js Version](https://vanilla-speech-highlight.vercel.app) is just the React state (`useState`)

In the vanilla version we try to mimic the react state with using function callback

```js
// This is just to pointer for the current played tts
var statusHL = document.getElementById("statusHL");
var spokenHL_word = document.getElementById("spokenHL_word");
var spokenHL_sentence = document.getElementById("spokenHL_sentence");
var spokenHL_precentageWord = document.getElementById(
  "spokenHL_precentageWord"
);
var spokenHL_precentageSentence = document.getElementById(
  "spokenHL_precentageSentence"
);

const setStatusHLState = (status) => {
  console.log("Default setStatusHLState function the statusHL is ", status);

  if (statusHL) {
    statusHL.innerHTML = status;
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

const setPrecentageSentence = (precentageSentence) => {
  console.log(
    "Default setPrecentageSentence function, precentageSentence = ",
    precentageSentence
  );

  if (spokenHL_precentageWord) {
    spokenHL_precentageWord.innerHTML = precentageSentence + "%";
  }
};

const setPrecentageWord = (precentageWord) => {
  console.log(
    "Default setPrecentageWord function, precentageWord = ",
    precentageWord
  );

  if (spokenHL_precentageSentence) {
    spokenHL_precentageSentence.innerHTML = precentageWord + "%";
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
  setWordSpoken,
  setSentenceSpoken,
  setPrecentageSentence,
  setPrecentageWord,
};

// Global control HL
const { controlHL } = useTextToSpeech(defaultParams);

// play the tts

controlHL.play();
```

This is the API of `useTextToSpeech()` is like this. minus the react state (i comment it)

```js
function useTextToSpeech() {
  return {
    controlHL: controlHL,
    // statusHL: statusHL,
    // spokenHL: {
    //   sentence: sentenceSpoken,
    //   word: wordSpoken,
    //   precentageSentence: precentageSentence,
    //   precentageWord: precentageWord,
    // },
    prepareHL: {
      // loadingProgress,
      // voices,
      getVoices,
      retestVoices,
      quicklyGetSomeBestVoice,
    },
  };
}
```
