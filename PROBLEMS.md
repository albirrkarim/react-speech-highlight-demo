# Problems

The [SpeechSynthesis](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis). Comes with problems:

### 1. Unlimited String Length Capability

Some available voice doesn't support long text / string. 

How about this package? it can read unlimited string (can't die when playing).

<!-- But when marking the word (more than `2400 sentences, 45700 words, 260500 character`) it getting slow when react ui render (lag). after rendered it will normal again and can play tts. -->

<br/>

### 2. Cross Platform Problem

I'm sure that you have the same experience, developing web for cross platform, android, Iphone or Ipad always resulting problem.

- Speech synthesis in IOS or Ipad OS sometimes die unexpected.
- Sometimes `speechsynthesis` doesn't fire the `onpause`, `onresume` event on android, ipad,

<br/>

### 3. Unpredictable Onboundary

- First, Not all voices have `onboundary` event
- On ipad the `onboundary` event only work with about 30% of the full sentence.
- Also the on boundary event doesn't fire function accurately. for example the text is `2022` the `onboundary` will fire twice `20` and `22`.

<br/>

### 4. We want Text user see is different with what system speak

Sometimes we need need abbreviation function, for example we need the text that displayed to user is different with the text that we use to give the to the [speech utterance](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance/text)

<details>
  <summary>Show details</summary>
  <br/>

**Roman Number**

We need displayed text is `I. II. III.` if we input that same text the system will read as `i. ii. iii.`

We need to change the roman numbers to arabic numbers so the system can read correctly.

**Lang Abbreviation**

in english abbreviation like `FOMO`, `ETA`, etc.

in indonesian

`dgn` = `dengan`

`yg` = `yang`

This package also have built-in abbreviation function, or you can write your own rules.

input:string -> abbreviation function -> output:string.

</details>

<br/>

### 5. Bad performance or voice too fast

in API `prepareHL.getVoices()` i implement this flow.

![React Speech Highlight](./img/prepareHL.jpeg)

<br/>

### 6. Wrong Read Number

With `window.speechSynthesis` the number `9000` will spoken as "nine zero zero zero"
So we must convert into word form number.

example `9000` -> `nine thousand`

example `9001` -> `nine thousand one`

This package needs chat gpt api to do that. [see how to use integrate this package with open ai api](MAKE_BACKEND.md)

<br/>

### 7. The voice is not good enough

With `window.speechSynthesis` the voice is like a robot, doesn't have parameter like:

- Emotions
- Characteristic

It can be achieved by using deep learning (with python) or other paid TTS API.

But in this package i just want to make cheap solution for TTS so i just the `window.speechSynthesis`. maybe in the future i will try to integrate with other voice source.
