# CHANGELOG

# 4.6.8

- see folder `test_case` in this repo.
- 100% pass Function Unit test [markTheWords(),isNumber(),romanTransform()].
- 90% pass prompt test.
- Fix bugs: Date range misspelled
- The `romanTransform()` is not convert all into arabic number. because it will cause ambiguity.
  The `romanTransform()` now is change string (maybe roman number exist) to a form that makes sense to pronounce.
- add `setUntilTranslationForLang("sampai","id-ID")` function to cache the english word "until" into some language.
- The `spokenHL.sentenceSpoken` and `spokenHL.wordSpoken` is now showing the text that user see, not that exactly spoken by system.
- Better text marking and preparing text for the system to read.

This will only applied on background so the user seen the original text. this just for the system read correctly.

Foreach word will apply this function
Rules: It's document code or an Idetifier.

`B/1871/M.SM.01.00/2023. -> B / 1871 / M. S_M. 01 .00 / 2023.`

Rules: if the word is two uppercase character

`RI.` -> `R_I`
`NI`  -> `N_I`

Rules: Maybe contains date range

`10 October - 19 November 2023` -> `10 October until 19 November 2023`

<br/>

# 4.6.7

Unit test using jest in demo website source code folder `__test__`.

- markTheWords()

Tests: 26 passed, 26 total

- romanTransform()

Tests: 6 failed, 53 passed, 59 total

- isNumber()

Tests: 3 failed, 28 passed, 31 total

# 4.6.6

- Breaking change

  If you use this following function you need to update your code.

    <details>
    <summary>Show the different</summary>

  Different way to passing voice / selecting voice, see [the demo website repo](https://github.com/albirrkarim/demo-website-react-speech-highlight) for the implementation.

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

# 4.6.5

<img src="img/chat_gpt_api.png" alt="Backend" style="width:400px" />

- Securing secret key with make backend server as a proxy. see [How to make backend api server for this package](MAKE_BACKEND.md)

# 4.6

- Optional integration with openai (chatgpt api)

```jsx
convertAllNumberIntoWord();
getLangForThisText();
```

- Fix bug

# 4.5

- Add precentage of TTS reading by word and sentence

```
spokenHL.precentageWord
spokenHL.precentageSentence
```

- Change config while TTS playing `controlHL.changeConfig()`

- Fix more bug

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

# 4.3

- Still buggy
