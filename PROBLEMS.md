# Problems

## A. Common problem in Text to Speech (Both audio file and Web Speech Synthesis)

### 1. Pronounciation Problem

We want text user see is different with what system should speak. 

What we do ? we make some engine that can do accurate and cost effective pronounciation correction Using LLM Open AI Chat Completions for any terms or equations from academic paper, math, physics, computer science, machine learning, and more...

<details>
  <summary>Show details</summary>
  <br/>

  **Auto Pronounciation Correction**

  This package needs chat gpt api to do that. [see how to use integrate this package with open ai api](MAKE_BACKEND.md)

  <br/>

  **Manual Pronounciation Correction**

  in english abbreviation like `FOMO`, `ETA`, etc.

  in indonesian

  `dgn` = `dengan`

  `yg` = `yang`

  This package also have built-in abbreviation function, or you can write your own rules.

  ```
  input:string -> abbreviation function -> output:string.
  ```
</details>

<br/>

## B. When Using Audio File

### 1. The delay of audio played and user gesture to trigger play must be close.

When user click play button the system will preparing the audio file with send request to TTS API like eleven labs, what if the api request is so long (because the text you send is long)? what if your TTS API has limitation

It will causing bad experience to the user.

<details>
  <summary>Read more</summary>

  It will causing bad experience to the user. even in device like ipad and iphon they have rules that the delay between user interaction and the audio played must not exceed 4seconds or it will be fail.

  They will give error like this

  ```
  Unhandled Promise Rejection: NotAllowedError: The request is not allowed by the user agent or the platform in the current context, possibly because the user denied permission.
  ```

  So what the solution for this?

  I set this package to make batch request for API call.
</details>

### 2. Long text request to TTS API (Capabilty of TTS API handling long text)

All tts api has limitation of character that can be sent to them.

### The solution is using Batch Request System

<details>
  <summary>Read more</summary>

  **How it work?**

  Let says you have 10000 character long of text, and let says your tts api service will be done making the audio file in 60 seconds. (so your user will waiting to play 60 second after they want ? it so bad)

  So, My package will chunk it into close to the 200 character each.

  10000/200 = 50 request.

  60/10000\*200 = 1.2 seconds

  my package will send the first chunk, and the tts api will give the audio file in just 1,2 then the audio is played.

  So the delay between user click button play and the tts start to play will be just 1,2 seconds. what about other chunks. i manage to send other chunk in the background while tts is played. and enchance efficiency of character used in tts api. you pay the tts api service based on the character right?.

  lets say we have

  ```
  chunk0 <- user still playing this
  chunk1
  chunk2 <- my package will try to prepare until this
  chunk3
  ...
  chunk49
  ```

  This method will, solve other problem like maximal character that your tts api can handle. for example on elvenlabs they only can do [5000](https://help.elevenlabs.io/hc/en-us/articles/13298164480913-What-s-the-maximum-amount-of-characters-and-text-I-can-generate) character for audio generation.

</details>

<br/>
<br/>

## C. When Using Web Speech Synthesis

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

### 4. Bad performance or voice too fast

in API `prepareHL.getVoices()` i implement this flow:

<details>
  <summary>Show flow</summary>
  <br/>

![React Speech Highlight](./img/prepareHL.png)

</details>

<br/>

### 5. The voice is not good enough

With `window.speechSynthesis` the voice is like a robot, doesn't have parameter like:

- Emotions
- Characteristic

It can be achieved by using deep learning (with python) or other paid TTS API.

In this package i just want to make cheap solution for TTS so i just the `window.speechSynthesis`.

Now this package has Prefer / Fallback to Audio file.

Options to play:

preferAudio(if defined) > Web Speech Synthesis > fallbackAudio(if defined)

see [AUDIO_FILE.md](AUDIO_FILE.md) and the config [API.md](API.md#2a-config)
