# React Speech Highlight

https://github.com/albirrkarim/react-speech-highlight-demo/assets/29292018/72f28407-a28d-4fb6-9f86-3f37701b4b2a

[Try the demo](https://react-speech-highlight.vercel.app)

React text-to-speech and highlighting the words and sentences that are being spoken using web speech synthesis API.

This is the Documentation for private repo [React Speech Highlight package](https://github.com/albirrkarim/react-speech-highlight) and [demo website source code](https://github.com/albirrkarim/demo-website-react-speech-highlight)

**Table Of Contents**

- [A. Introduction](#a-introduction)
- [B. Todo](#b-todo)
- [C. API](#c-api)
- [D. Example Code](#d-example-code)
- [E. Changelog](#e-changelog)
- [F. Disclaimer](#f-disclaimer)
- [G. Warranty](#g-warranty)
- [H. FAQ](#h-faq)

# Docs for v4.6.8

# A. Introduction

Recently, i want to implement the text-to-speech task to my website. Then i search on the internet. but i can't find the library or npm package to solve all my problems. I just want some powerfull package that work on all platforms.

The [SpeechSynthesis](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis) comes with problems (See [PROBLEMS.md](https://github.com/albirrkarim/react-speech-highlight-demo/blob/main/PROBLEMS.md))

Then I do research to build this. I took two weeks to solve the problem.

<br>
<br>

# B. TODO

- [ ] Give API output: The html element for highlighted sentence and word. This can be benefiting when you play with web metaverse. imagine some Text-To-Speech in metaverse. (mozilla hubs, aframe, etc)
- [ ] Let me know what you want from this package, please write it on issues tab

<br/>

- [x] Integration with [React GPT Web Guide](https://github.com/albirrkarim/react-gpt-web-guide-docs) Package.
- [x] Automate the testing (Prompt Test, Unit Test)(50%)
- [x] Multi character support for non roman alphabet ( chinese (你好),
      russian (Привет), japanese (こんにちは), korean (안녕하세요), etc )
- [x] Convert number into word form number with chat gpt. [see](API.md#API.md#1-convertallnumberintoword)
- [x] Add language detection using chat gpt. [see](API.md#2-getlangforthistext)
- [x] Add seeking by sentence or paragraph. [see](API.md#2b-interface)
- [x] Add reading progress by word or sentence. [see](API.md#spokenhl)
- [x] Adjust config while TTS playing. [see](API.md#controlhl)
- [x] You can use custom Abbreviation Function. [see](API.md#1-tts-marker-markthewords)
- [x] Add Read Roman number, And API for that function. [see](API.md#6-romantransform)
- [x] TTS that can't die.
- [x] Test on any platform.
- [x] Add demo website. [see](https://react-speech-highlight.vercel.app)

<br>
<br>

# C. API

See [API.md](API.md)

<br>
<br>

# D. Example Code

Contain simple example code, the full example code and implementation example using source code from demo website. the source code of demo website is included when you buy this package.

See [EXAMPLE_CODE.md](EXAMPLE_CODE.md)

<br>
<br>

# E. Changelog

Changelog contains information about new feature, fix bug, and what you should do when the version is update.

See [CHANGELOG.md](CHANGELOG.md)

<br>
<br>

# F. Disclaimer

There's no refund

<br>
<br>

# G. Warranty

I love feedback from my customers. You can write on the issue tab so when i have time i can try to solve that and deliver for the next update.

<br>
<br>

# H. FAQ

<details>
  <summary>Why it's expensive?</summary>
  
<br/>

Try yourself to make this package. you will be grateful I am selling it cheap.

</details>

<br/>

<details>
  <summary>Why it's not opensource package?</summary>

<br/>

Well, i need money to funding the research, you know that making package is cost a lot of time and ofcourse money.

</details>

<br/>

<details>
  <summary>Why there's no voices available on the device?</summary>

<br/>

Try to setting the speech synthesis or language in your device.

If you use smartphone (Android):

1. Make sure you install [Speech Recognition & Synthesis](https://play.google.com/store/apps/details?id=com.google.android.tts)

2. If step 1 doesn't work. Try to download google keyboard. then setting the Dictation language. wait a few minute (your device will automatically download the voice), then restart your smartphone.

</details>

<br/>

<details>
  <summary>Why speech doesn't work for first played voice?</summary>

<br/>

Your device will download that voice first. then your device will have that voice locally.

</details>

<br/>

<details>
  <summary>Can i use this text-to-speech whitout showing the highlight?</summary>

<br/>

Yes, [see](API.md#5-speak)

</details>

<br/>

<details>
  <summary>Can i build without openai API?</summary>

<br/>
  
Yes, you will got this [problem](PROBLEMS.md#6-wrong-read-number)

</details>
<br/>

<details>
  <summary>What dependency this package use?</summary>

<br/>
    
see the [package.json](package.json) in this repo. see the `peerDependencies` once you build this package you will need only npm package that is in that `peerDependencies`. Only react.

This package required open ai API for better doing text-to-speech task (solve the [problem](PROBLEMS.md#6-wrong-read-number)).

</details>

<br/>

<details>
  <summary>Support for various browsers and devices?</summary>

<br/>

See [TEST.md](TEST.md)

</details>

<br/>

<details>
  <summary>How it work?</summary>

<br/>

As in the introduction [above](#a-introduction). Here the overview how package work.

This package use [web speech synthesis](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API) API to doing text-to-speech task. But this free web speech synthesis is also comes with [problem](PROBLEM.md).

Then this package provide interface, that add capability, features and importantly try to fix the all problem.

When try to fix some problem this package require help from [open ai chat completion API](https://platform.openai.com/docs/api-reference/chat) that adding understanding capability. like adding function to detect language, solve [this problem](PROBLEMS.md#6-wrong-read-number).

</details>
<br/>
