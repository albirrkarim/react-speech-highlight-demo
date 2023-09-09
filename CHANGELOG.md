# CHANGELOG

# 4.6.6

- Breaking change
  
  If you use this following function you need to update your code.

    <details>
    <summary>Show the different</summary>

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

```jsx
// v4.6.6 API
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

# 4.6.5

<img src="img/chat_gpt_api.png" alt="Backend" style="max-width:400px" />

- Securing secret key with make backend server as a proxy

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
