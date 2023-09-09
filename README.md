# React Speech Highlight

https://github.com/albirrkarim/react-speech-highlight-demo/assets/29292018/72f28407-a28d-4fb6-9f86-3f37701b4b2a

[Try the demo](https://react-speech-highlight.vercel.app)

React components that use web speech synthesis API to text-to-speech tasks and also highlight the word and sentences that are being spoken.

This is the Documentation for [private repo React Speech Highlight package](https://github.com/albirrkarim/react-speech-highlight)

**Table Of Contents**

- [A. Introduction](#a-introduction)
- [B. Todo](#b-todo)
- [C. API](#c-api)
- [D. Example Code](#d-example-code)
- [E. Changelog](#e-changelog)
- [F. Disclaimer](#f-disclaimer)
- [G. Warranty](#g-warranty)

# Docs for v4.6.6

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
- [50%] Automate the testing (Prompt Test, Unit Test)
- [x] Multi character support for non roman alphabet ( chinese (你好),
      russian (Привет), japanese (こんにちは), korean (안녕하세요), etc )[see](API.md#3-convertallnumberintoword)
- [x] Convert number into word form number with chat gpt. [see](API.md#3-convertallnumberintoword)
- [x] Add language detection using chat gpt. [see](API.md#4-getlangforthistext)
- [x] Add seeking by sentence or paragraph. [see](API.md#2b-interface)
- [x] Add reading progress by word or sentence. [see](API.md#spokenhl)
- [x] Adjust config while TTS playing. [see](API.md#controlhl)
- [x] You can use custom Abbreviation Function. [see](API.md#1-tts-marker-markthewords)
- [x] Add Read Roman number. [see](https://github.com/albirrkarim/react-speech-highlight-demo/blob/main/API.md#6-romantransform)
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

# G. Warranty

I love feedback from my customers. You can write on the issue tab so when i have time i can try to solve that and deliver for the next update.
