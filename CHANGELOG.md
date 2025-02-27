# CHANGELOG

# 5.3.8

- Better marking sps (sentence) & spw (word) tag with over 69 test case from various wierd data.

# 5.3.7

- Realtime Text to Speech With Highlight - This package can intergrate with [open ai realtime api](https://platform.openai.com/docs/guides/realtime), Imagine you have a phone call with AI the web are displaying the transcript with highlight the current spoken.

# 5.3.6

- Fixing marking `sps` and `spw`
- Tag `spkn` now deprecated

# 5.3.1 - 5.3.5

- Fixing bug

# 5.3.0

- Better timestamp engine
- Better API design ( Breaking changes! )

# 5.2.9

- Enhancing timestamp engine capability v4

# 5.2.7 - 5.2.8

- Fix bug

# 5.2.4 - 5.2.6

- Add non latin support like chinese, japanese, korean, greek, etc...

# 5.2.3

- Update `toJSON` method in virtual node
- Better LLM ENGINE

# 5.2.1 - 5.2.2

- Adding more jsdocs
- Some little refactor

# 5.2.0

- Add example of generating SRT with `onEnded` event [see](https://react-speech-highlight.vercel.app/example)

# 5.1.9

- Begin the plugin architecture
- Backend-nify the LLM engine using node js server (optional)

# 5.1.8

- Fix bug

# 5.1.7

- Rename storage API

# 5.1.3 - 5.1.6

 - Fix bug
 - Renaming API
 - Virtual Storage (to mimic sessionStorage)
 - Local state tts [see demo example page](https://react-speech-highlight.vercel.app/example)
 - Add better error event

# 5.1.0 - 5.1.2

- Development of hybrid transcript timestamp engine
- Fix bug

# 5.0.9

Relation Finder v4 see the evaluation on [LLM_ENGINE](LLM_ENGINE.md)

# 5.0.7 - 5.0.8

- Fix bug

# 5.0.2 - 5.0.6

- Fix bug
- Improve Translate To some language engine, with chunking system it can handle more a lot of text

# 5.0.1
- Introduction virtual nodes, Sentence Node and Word Node. for flexible text to speech. Used in PDF TTS Highlight and Relation Highlight Features.
- Relation Highlight Feature - Used in Youtube Transcript Highlight. Highlight the  words in youtube transcript, and their relations to other word like their translation form.
- Rename config.classSentences into config.classSentence
- Add `ControlHL.followTime()` for following the time of played youtube video in iframe.

# 5.0.0

Stable version release, before i add API for plugin TTS on PDF

# 4.9.9

- Fix bug
- Change params controlHL.play() to controlHL.activateGesture() for more clear API
- Refactor
- Add more js docs
- Preparing more testing

# 4.9.8

- Fix bug
- remove `romanTransform()` because we now prefer using LLM for pronounciation correction
- Add more js docs
- Add Add way to set custom headers (Your platform API Auth) when communicating with OPEN AI API on Your Backend. [see](API.md#package-data-and-cache-integration)
- Minor Refactor

# 4.9.7

Accurate and cost effective pronounciation correction Using LLM Open AI Chat Completions for any terms or equations from academic paper, math, physics, computer science, machine learning, and more...

the api `convertAllNumberIntoWord()` deprecated replaced with `pronunciationCorrection()` for general solution for pronounciation problem

```js
const v2_pronoun_engine_reports = {
  overallResults: {
    Name: "v2",
    Detail: "GPT3",
    AvgAcc: "90.50%",
    AvgScore: "92.05%",
    AvgTime: "81.62s",
    AvgCost: "869.53",
    TotalTime: "652.94 s",
    TotalCost: "Rp. 6956.27", // IDR 6956.27 is about USD $0.42 cost of open AI chat completion API
    TotalRecords: 87, // 87 sentence that contain equations or term that should be the pronounciation corrected
    CreatedAt: "29-04-2024 19:07",
  },
  testResults: {
    romanNumberPronounTestCase: {
      AvgAcc: "100.00%",
      AvgScore: "95.83%",
      AvgTime: "5.19s",
      AvgCost: "53.41",
      TotalCost: "320.44",
    },
    mathEquations: {
      AvgAcc: "100.00%",
      AvgScore: "95.62%",
      AvgTime: "5.87s",
      AvgCost: "54.80",
      TotalCost: "273.98",
    },
    demoTestCase: {
      AvgAcc: "95.00%",
      AvgScore: "95.83%",
      AvgTime: "4.71s",
      AvgCost: "32.20",
      TotalCost: "644.00",
    },
    physicalEquations: {
      AvgAcc: "100.00%",
      AvgScore: "97.29%",
      AvgTime: "6.76s",
      AvgCost: "58.16",
      TotalCost: "581.62",
    },
    computerScienceTestCase: {
      AvgAcc: "90.00%",
      AvgScore: "97.58%",
      AvgTime: "7.73s",
      AvgCost: "85.52",
      TotalCost: "855.17",
    },
    machineLeaningTestCase: {
      AvgAcc: "73.68%",
      AvgScore: "80.13%",
      AvgTime: "9.99s",
      AvgCost: "109.85",
      TotalCost: "2087.12",
    },
    biologyTestCase: {
      AvgAcc: "87.50%",
      AvgScore: "96.09%",
      AvgTime: "9.79s",
      AvgCost: "119.12",
      TotalCost: "952.95",
    },
    chemistryTestCase: {
      AvgAcc: "77.78%",
      AvgScore: "78.05%",
      AvgTime: "9.47s",
      AvgCost: "137.89",
      TotalCost: "1240.99",
    },
  },
};
```

# 4.9.3 - 4.9.6

Fix bug

# 4.9.2

- Rewrite using Typescript, and make comments for all feature so the VS Code will show some tutorial when you hover your mouse over some function. ([VS Code IntelliSense](https://code.visualstudio.com/docs/editor/intellisense))

# 4.9.1

- fix bug, double click gesture

# 4.9.0

- Add Server Side Rendering Capability, and some example on demo website because we use next js

# 4.8.9

- fix problem. The delay of audio played and user gesture to trigger play must be close. in ipad or iphone they have rule maximal delay must not more than 4 seconds or it will error.

# 4.8.8

- Batch API request for making audio file

# 4.8.7

- High precision for viseme, increase refresh rate for the viseme change with 10ms

# 4.8.6

- Increase the accuracy of word highlighting

# 4.8.5

- rename `charToVisemeMap` into `visemeMap`
- Fix bug

# 4.8.4

- Fix bug

# 4.8.3

- Use code lintings eslint for code quality

# 4.8.2

- Add viseme for current spoken.
- Introduction react state `spokenHL.viseme` as a state for current viseme. [see](https://github.com/albirrkarim/react-speech-highlight-demo/blob/main/API.md#spokenhl)
- For now only support language that use the Latin alphabet like English, German, Italian, and French, also the russian.

# 4.8.1

Support text to speech with highlight sentence and word for chinese and japanese character. but the accuracy of highlighting word is less accurate.

# 4.8.0

Refactor code,

# 4.7.9

- Increase avg accuracy of the sentence HL to 97.19 %

  <details>
  <summary>See test log</summary>
  ```bash
  console.log
    Text ID:  noodles  | Duration:  89.03 s  | Error Start:  7.19 s  | Error Total  15.07 s  | Error Precentage :  8.07 %

  console.log
  Text ID: preferto | Duration: 4.87 s | Error Start: 0.10 s | Error Total 0.10 s | Error Precentage : 2.05 %

  console.log
  Text ID: cat | Duration: 21.39 s | Error Start: 0.15 s | Error Total 1.11 s | Error Precentage : 0.72 %

  console.log
  Text ID: french text | Duration: 159.37 s | Error Start: 4.67 s | Error Total 9.34 s | Error Precentage : 2.93 %

  console.log
  Text ID: german text | Duration: 117.11 s | Error Start: 0.10 s | Error Total 0.75 s | Error Precentage : 0.08 %

  console.log
  Text ID: italia text | Duration: 117.63 s | Error Start: 0.48 s | Error Total 1.09 s | Error Precentage : 0.41 %

  console.log
  Text ID: html blog table | Duration: 96.68 s | Error Start: 7.94 s | Error Total 17.09 s | Error Precentage : 8.22 %

  console.log
  TEST END \_\_\_

  console.log
  Total duration error 44.56 Seconds

  console.log
  AVG LOSS 2.81 %

  console.log
  AVG ACCURACY 97.19 %

  ```
  </details>
  ```

# 4.7.8

Fix Highlight word bug

# 4.7.7

- Fix Previous and Next paragraph index
- Transcript time detection engine

  what is LOSS precentage?

  let say we have 10 seconds of audio. and fail predict start & end time of a sentence total in 2 seconds, so, the Loss precentage is 20%

  AVG LOSS 5.96 % (lower better)
  AVG ACCURACY 94 % (higher better)

  <details>

    <summary>See test log</summary>

  ```
  console.log
    id  noodles Duration:  89.03 Error:  5.14 Precentage :  5.77 %

      at log (src/__test__/test_functions/AudioFIle.test.js:44:15)

  console.log
    Error Total  11.317938041659438

      at log (src/__test__/test_functions/AudioFIle.test.js:58:15)

  console.log
    id  preferto Duration:  4.87 Error:  0.10 Precentage :  2.05 %

      at log (src/__test__/test_functions/AudioFIle.test.js:44:15)

  console.log
    Error Total  0.10199999999999979

      at log (src/__test__/test_functions/AudioFIle.test.js:58:15)

  console.log
    id  cat Duration:  21.39 Error:  0.09 Precentage :  0.42 %

      at log (src/__test__/test_functions/AudioFIle.test.js:44:15)

  console.log
    Error Total  1.0269453125000876

      at log (src/__test__/test_functions/AudioFIle.test.js:58:15)

  console.log
    id  french text Duration:  159.37 Error:  4.67 Precentage :  2.93 %

      at log (src/__test__/test_functions/AudioFIle.test.js:44:15)

  console.log
    Error Total  9.339446999995845

      at log (src/__test__/test_functions/AudioFIle.test.js:58:15)

  console.log
    id  html blog table Duration:  96.68 Error:  18.01 Precentage :  18.62 %

      at log (src/__test__/test_functions/AudioFIle.test.js:44:15)

  console.log
    Error Total  34.976419200012415

      at log (src/__test__/test_functions/AudioFIle.test.js:58:15)

  console.log
    Error Total TEST 56.76274955416778

      at Object.log (src/__test__/test_functions/AudioFIle.test.js:69:13)

  console.log
    AVG LOSS 5.96 %
  ```

  </details>

<br>

# 4.7.6

- convertInto into convertTextIntoClearTranscriptText(text,convertInto)

# 4.7.5

- We support [Vanilla Speech Highlight](https://vanilla-speech-highlight.vercel.app)

# 4.7.4

Improve accuracy make transcript timestamp.

Add new API:

- convertTextIntoClearTranscriptText(text)

Deprecation:

- setUntilTranslationForLang

# 4.7.3

- Improve Transcript timestamp detection when TTS using audio file.

# 4.7.2

- Add Highlight capability when using Prefer / Fallback To Audio File.

# 4.7.1

- Add Prefer / Fallback To Audio File

This feature enable integration with any services that provide audio url or maybe you have your own audio file url.

Integration with other Text To Speech / Speech Synthesis API. Like Eleven Labs

[see AUDIO_FILE.md](AUDIO_FILE.md)

# 4.7.0

Efficiency memory

# 4.6.9

- Introduction API `prepareHL.loadingProgress` for knowing the testing progress

![prepareHL.loadingProgress](./img/prepareHL.loadingProgress.png)

- Optimize finding best voice, see the flow bellow:

![voice recomendation flow](./img/interaction.png)

<details>
<summary>Show detail voice recomendation flow</summary>

![voice recomendation flow](./img/prepareHL.png)

</details>

<br/>

You can set preferred voice

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

<br/>
<br/>

# 4.6.8

- 100% pass Function Unit test `markTheWords()`, `isNumber()` , `romanTransform()`.
- 90% pass prompt test.
- Fix bugs: Date range misspelled
- The `romanTransform()` is not convert all into arabic number. because it will cause ambiguity.
  The `romanTransform()` now is change string (maybe roman number exist) to a form that makes sense to pronounce.
- The `spokenHL.sentenceSpoken` and `spokenHL.wordSpoken` is now showing the text that user see, not that exactly spoken by system.
- Better pronunciation preparing text for the system to read.
  <details>
      <summary>Show details</summary>

  <br/>
  This will only applied on background so the user seen the original text. this just for the system read correctly.

  Foreach word will apply this function
  Rules: It's document code or an Idetifier.

  `B/1871/M.SM.01.00/2023. -> B / 1871 / M. S_M. 01 .00 / 2023.`

  Rules: if the word is two uppercase character

  `RI.` -> `R_I`
  `NI` -> `N_I`

  Rules: Maybe contains date range

  `10 October - 19 November 2023` -> `10 October until 19 November 2023`
    </details>

<br/>

# 4.6.7

Unit test using jest in demo website source code folder `__test__`.

- `markTheWords()` Tests: 26 passed, 26 total

- `romanTransform()` Tests: 6 failed, 53 passed, 59 total

- `isNumber()` Tests: 3 failed, 28 passed, 31 total

<br/>

# 4.6.6

- Breaking change

  If you use this following function you need to update your code.

    <details>
    <summary>Show the different</summary>

  Different way to passing voice / selecting voice, see [the demo website repo](https://github.com/Web-XR-AI-lab/demo-website-react-speech-highlight) for the implementation.

  see the component `src/Demo/ButtonSelectVoice.js` the component will save voice Info into `sessionStorage` and the package will use that voice info as the voice for playing tts.

  New:

  ```js
  controlHL.play(textEl.current, callbackDone, actionConfig);
  ```

  Old

  ```js
  controlHL.play(textEl.current, voiceURI, callbackDone, actionConfig);
  ```

    <br/>
    <br/>

  New:

  ```js
  controlHL.activateGesture(textEl.current, callback, {
    // config
    lang: lang,
  });
  ```

  Old:

  ```js
  controlHL.activateGesture(textEl.current, voiceURI, callback, {
    // config
    lang: lang,
  });
  ```

    </details>

    <br/>

- Refactor demo website with new package API
- Update marking the word function, Partially support for other character like chinese (你好), russian (Привет), japanese (こんにちは), korean (안녕하세요), etc.
- Add unit test for function, prompt engineering.
- Add `prepareHL.quicklyGetSomeBestVoice()`, `prepareHL.retestVoices()`
- Fix bug
- Add more package api, so the data and cache can be read outside package, (this package can be integrate to other package)

    <details>
      <summary>Show APIs</summary>

  ```jsx
  import {
    // Main
    markTheWords,
    useTextToSpeech,

    // Utilities for TTS & add more capabilities,
    convertAllNumberIntoWord,
    getLangForThisText,
    getTheVoices,
    noAbbreviation,
    speak,
    romanTransform,

    // Your app can read the data used by this package, like:
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

<br/>

# 4.6.5

<img src="img/chat_gpt_api.png" alt="Backend" style="width:400px" />

- Securing secret key with make backend server as a proxy. see [How to make backend api server for this package](MAKE_BACKEND.md)

<br/>

# 4.6

- Optional integration with openai (chatgpt api)

```jsx
convertAllNumberIntoWord();
getLangForThisText();
```

- Fix bug

<br/>

# 4.5

- Add precentage of TTS reading by word and sentence

```
spokenHL.precentageWord
spokenHL.precentageSentence
```

- Change config while TTS playing `controlHL.changeConfig()`

- Fix more bug

<br/>

# 4.4

- Convert into npm package, you can implement this package as local npm package

- Add seeking by sentence and paragraph

```jsx
controlHL.seekSentenceBackward();
controlHL.seekSentenceForward();
controlHL.seekParagraphBackward();
controlHL.seekParagraphForward();
```

- Add Gesture Based

```jsx
controlHL.activateGesture();
```

- Update demo website
- Fix more bug
- Refactor

<br/>

# 4.3

- Still buggy
