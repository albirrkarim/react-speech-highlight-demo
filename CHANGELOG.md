# CHANGELOG

# 5.5.1

- Support html that rendered by React virtual DOM, with Adding fallback to svg highlighting, when the html is detach form DOM. (pay attention to the function `markTheWords`)

# 5.4.9 - 5.5.0

- Fix bug

# 5.4.8

- High standard Linting Eslint & Type checking typescript

# 5.4.7

- Increase stability, fixing marking for farsi
- Update all deps for demo website, eslint 9, next js 15, material ui 7 etc...

# 5.4.6

- Increase capability swallowing Speech To Text result. with 722 Sample. For all the TTS languages that open ai support.

<details>
  <summary>Report</summary>
  <br/>

```
avgErrWordsMiddle: 0.15255255255255257
Unit: sNodesSTTAlign() is done |
Avg Accuracy Sentence Time 99.97 % of 722 sample |
Avg Accuracy Word Time 98.15 % of 666 sample |
Avg Accuracy Word Middle 99.85 % of 666 sample |
Avg Exec Time: 0.37 ms
```

</details>

# 5.4.5

- Increase capability swallowing Speech To Text result. with 106 Sample. For all the TTS languages that open ai support.

<details>
  <summary>Report</summary>
  <br/>

```
avgErrWordsMiddle: 1.2860759493670888
Unit: ruleTimestampEngine() is done |
Avg Accuracy Sentence Time 99.81 % of 106 sample |
Avg Accuracy Word Time 84.44 % of 79 sample |
Avg Accuracy Word Middle 98.71 % of 79 sample |
Avg Exec Time: 1.59 ms
```

</details>

# 5.4.3 - 5.4.4

- Fix double click gesture
- Fix seeking paragraph

# 5.4.2

- Enhance marking test to 75 test case

# 5.3.9 - 5.4.1

- Add api to overide STT (Speech to text) function

```jsx
import {
  openaiSpeechToTextSimple,
  useTextToSpeech,
  type ConfigTTS,
} from "@lib/react-speech-highlight";

const config: Partial<ConfigTTS> = {
  preferAudio: getPublicAccessibleAudioURL,
  batchSize: 200,
  timestampEngineProps: {
    mode: "ml",
    sttFunction: async (input) => {
      console.log("Optionally Using custom STT function");
      // Maybe you want do overide the api request.
      // since you know the INPUT and the OUTPUT here, so you can create the PROCESS
      // INPUT -> PROCESS -> OUTPUT
      console.log("STT: input", input);
      const output = await openaiSpeechToTextSimple(input);
      console.log("STT: output", output);
      return output;
    },
    onProgress(progress, timeLeftEstimation) {
      console.log("Timestamp Engine Progress", progress);
      setProgress(progress);
      // setMessage("On progress Timestamp Engine (speech to text) ...  -> " + moment.duration(timeLeftEstimation, "seconds").humanize())
    },
  },
};
```

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
- Relation Highlight Feature - Used in Youtube Transcript Highlight. Highlight the words in youtube transcript, and their relations to other word like their translation form.
- Rename config.classSentences into config.classSentence
- Add `ControlHL.followTime()` for following the time of played youtube video in iframe.

# 5.0.0

Stable version release, before i add API for plugin TTS on PDF
