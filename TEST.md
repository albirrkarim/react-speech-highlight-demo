# Testing Report

## A. Unit Test

Unit Test is making test case for each function. make sure individual function is working as expected.

### Function Test

see [changelog](CHANGELOG.md)

### Prompt Test

Testing each prompt so it can be cost effective

see [changelog](CHANGELOG.md)

### Engine Test

The [pronounciation correction engine](API.md#1-pronunciationcorrection) is combines the LLM (open ai chat API) and good algorithm to achieve accurate and cost effective. Of course it tested with test case.

see [changelog](CHANGELOG.md)

<br/>

## B. Data Type Safe & Code Quality

Now we rewrite the package using [Typescript](https://www.typescriptlang.org/), linting using [eslint](https://eslint.org), and support [VS Code intellisense](https://code.visualstudio.com/docs/editor/intellisense).

<br/>

## C. Compatibility

Now **this package support all devices and browser**, because this package can use both [Audio File](AUDIO_FILE.md) and Web Speech Synthesis API.

### Audio file mode:

Using the prefer of fallback api. you can set this package to do TTS using purely audio file. see [AUDIO_FILE.md](AUDIO_FILE.md). so this mode will

### Web Speech Synthesis API itself:

see the [Web Speech Synthesis API Browser compatibility](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis#browser_compatibility)

### Device that i have test:

- Macbook air m1
- Ipad Pro m1
- Samsung A53

<br/>
