The [SpeechSynthesis](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis). Comes with problems:

### 1. Unlimited String Length Capability

Some available voice doesn't support long text / string.

### 2. Cross Platform Problem

I'm sure that you have the same experience, developing web for cross platform, android, Iphone or Ipad always resulting problem.

- Speech synthesis in IOS or Ipad OS sometimes die unexpected.
- Sometimes speechsynthesis doesn't fire the onpause,onresume event on android, ipad,

### 3. Unpredictable Onboundary

- First, Not all voices have `onboundary` event
- On ipad the `onboundary` event only work with about 30% of the full sentence.
- Also the on boundary event doesn't fire function accurately. for example the text is `2022` the `onboundary` will fire twice `20` and `22`.

### 4. We want Text user see is different with what system speak

Sometimes we need need abbreviation function, for example we need the text that displayed to user is different with the text that we use to give the to the [speech utterance](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance/text)

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

### 5. Bad performance or voice too fast

in API `prepareHL.getVoices()` i implement this flow.

![React Speech Highlight](./img/prepareHL.jpeg)

Then I do research to build this. I took two weeks to solve the problem.