# Testing Report

## A. Unit Test

Unit testing creates test cases for each function to make sure individual functions or engines that use LLM are working as expected over time after many development cycles.

### Function Test

see [changelog](CHANGELOG.md)

### Prompt Test

Testing each prompt so it can be cost-effective.

see [changelog](CHANGELOG.md)

### Engine Test

The [pronunciation correction engine](API.md#1-pronunciationcorrection) combines the LLM (OpenAI chat API) and a good algorithm to achieve accurate and cost-effective results. Of course, it's tested with test cases.

see [changelog](CHANGELOG.md)

<br/>

## B. Data Type Safe & Code Quality

We have now rewritten the package using [TypeScript](https://www.typescriptlang.org/), linting using [eslint](https://eslint.org), and support for [VS Code IntelliSense](https://code.visualstudio.com/docs/editor/intellisense).

<br/>

## C. Compatibility

Now **this package supports all devices and browsers** because this package can use both [Audio File](AUDIO_FILE.md) and [Web Speech Synthesis](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis) API.

### Audio file mode:

Using the prefer or fallback API. You can set this package to do TTS using purely audio files. See [AUDIO_FILE.md](AUDIO_FILE.md).

### Web Speech Synthesis API itself:

See the [Web Speech Synthesis API Browser compatibility](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis#browser_compatibility)

### Devices that I have tested:

- Macbook air m1
- Ipad Pro m1
- Samsung A53
