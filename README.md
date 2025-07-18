# React / Vanilla Speech Highlight - Text-to-Speech with Word Highlighting

<!-- [English](README.md) | [简体中文](README_CN.md) -->

[![React / Vanilla Speech Highlight](./img/banner.png)](https://react-speech-highlight.vercel.app)

**React / Vanilla Speech Highlight** is a powerful library for integrating **text-to-speech** and **real-time word/sentence highlighting** into your web applications. It supports **audio files**, the **Text-to-Speech API**, and the **Web Speech Synthesis API**, making it ideal for creating interactive, accessible, and dynamic user experiences.

[🌟 Try the Demo: React Speech Highlight](https://react-speech-highlight.vercel.app)

https://github.com/user-attachments/assets/79c6d4f6-f3e2-4c38-9bec-dbb6834d87f8

<!-- https://github.com/albirrkarim/react-speech-highlight-demo/assets/29292018/06e7b0a2-8c19-4ffc-826e-1470a275dfcb -->

## Other Version

### Vanilla JS (Native Javascript)

<a href="https://vanilla-speech-highlight.vercel.app" target="_blank">
  <img src="./img/vanilla.png" width="400" alt="Vanilla Speech Highlight" >
</a>

We support implementation using vanilla js. this package has bundle size of 45 KB. You can easily combine this library with your website, maybe your website using [jquery](https://jquery.com)

Read the [API_VANILLA.md](API_VANILLA.md) to see the different.

[Try the demo Vanilla Speech Highlight](https://vanilla-speech-highlight.vercel.app)

Watch [Youtube Video](https://youtu.be/vDc7L5W7HhU) about implementation vanilla speech highlight for javascript text to speech task.

### React Native Speech Highlight

<a href="https://bit.ly/RNSHL-4-9-9" target="_blank">
  <img src="./img/RNSH.png" width="500" alt="React Native Speech Highlight" >
</a>

<br/>

<details>
  <summary>Show video demo</summary>
  <br/>

https://github.com/albirrkarim/react-speech-highlight-demo/assets/29292018/abb9cb6c-4c55-448b-a9a5-d1856896b455

</details>

Built with react native cli. [Try the demo android app](https://bit.ly/RNSHL-4-9-9)

Do you want other implementation? just ask me via discord: albirrkarim

This is the Documentation for [web version](#--the-web-version-react-and-vanilla-js)

<br/>

# Docs for v5.5.1

**Table Of Contents**

- [A. Introduction](#a-introduction)
- [B. Todo](#b-todo)
- [C. API & Example Code](#c-api--example-code)
- [D. Changelog](#d-changelog)
- [E. Disclaimer & Warranty](#e-disclaimer--warranty)
- [F. FAQ](#f-faq)
- [G. Payment](#g-payment)

## A. Introduction

### What i want?

Recently, I want to implement the text-to-speech with highlight the word and sentence that are being spoken on my website.

Then i do search on the internet. but i can't find the npm package to solve all TTS [problems](PROBLEMS.md)

I just want some powerfull package that flexible and good voice quality.

### Here what i got when i search on internet:

Overall the text to speech task comes with problems (See the detail on [PROBLEMS.md](PROBLEMS.md)) whether using web speech synthesis or the audio file.

**Using [Web SpeechSynthesis](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis)**

They have problems Robot like sound, Supported Devices Available, etc..

**Using paid subscription text-to-speech synthesis API**

When we talk about good sound / human like voices AI models inference should get involved. So it doesn't make sense if doing that on client side.

Then the speech synthesis API provider like [ElevenLabs](https://try.elevenlabs.io/29se7bx2zgw1), [Murf AI](https://get.murf.ai/0big1kdars4f), [Open AI](https://platform.openai.com/docs/guides/text-to-speech), [Amazon Polly](https://aws.amazon.com/id/polly/), and [Google Cloud](https://cloud.google.com/text-to-speech) play their roles.

But they don't provide the npm package to do highlighting.

Then i found [Speechify](https://speechify.com). but i don't find any docs about using some npm package that integrate with their service. Also this is a paid subscriptions services.

Searching again, Then i found [ElevenLabs](https://try.elevenlabs.io/29se7bx2zgw1) its free if the 10000 character / month and will reset on next month. **Cool right?** So i decide to use this as speech synthesis API in my project. This platform also doesn't provide the react npm package to highlight their audio, but they provide [streaming output audio](https://elevenlabs.io/docs/api-reference/websockets#streaming-output-audio) that can be use to produce "when the words is spoken in some audio" (transcript timestamp) like [someone make about this thing](https://medium.com/@brandon.demeria/synchronized-text-highlighting-with-elevenlabs-speech-in-laravel-php-e387c2797396).

**In production you must do cost calculation**, which TTS Service API provider you should choose. The services that have capability streaming audio is promising highlight word. but also comes with high price. **The cheap TTS service API usually don't have much features.**

The [elevenlabs](<(https://try.elevenlabs.io/29se7bx2zgw1)>) have produce good quality voice and many features, but when comes for production they more expensive compares with Open AI TTS, In production the cost is important matter.

### Solutions

![Overview How React Speech Highlight Works](./img/overview.png)

So, I decide to making this npm package that combines various methods above to achives all the good things and throw the bad things. All logic is done in client side, look at the overview above. No need to use advanced backend hosting.

My package combines [Built in Web SpeechSynthesis](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis) and Audio File (optional) to run.

When using prefer/fallback to audio file you can achive high quality sound and remove all compactbility problem from [Built in Web SpeechSynthesis](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis).

How you can automatically get the audio file of some text ? you can use [ElevenLabs](https://try.elevenlabs.io/29se7bx2zgw1),[Murf AI](https://get.murf.ai/0big1kdars4f),[Open AI](https://platform.openai.com/docs/guides/text-to-speech), [Amazon Polly](https://aws.amazon.com/id/polly/), and [Google Cloud](https://cloud.google.com/text-to-speech) or any other TTS API as long as they can produce audio file (mp3, mp4, wav, etc...) for the detail see the [AUDIO_FILE.md](AUDIO_FILE.md). In the [demo website](https://react-speech-highlight.vercel.app/) i provide you example using ElevenLabs and even you can try your own audio file on that demo web.

This package just take input text and audio file, so you can flexible to use any TTS API that can produce audio file, The expensive one or even cheap one when you consider the cost.

How this package know the timing spoken word or sentence of played audio? This package can detect the spoken word and sentence in client side.

This package is one time pay. No Subscription. Who likes subscription? I also don't. see the how to [purchase bellow](#g-payment).

![Positioning](./img/position.png)

![Feature Overview](./img/features.png)

### Use Cases

When you are entrepreneur im sure you have some crazy uses case for this package.

#### Interactive Blog

Imagine that you have long article and have TTS button then played the text to speech and users can see how far the article has been read. you article will be SEO ready because this package has Server Side Rendering (SSR) capability.

#### Web AI Avatar / NPC

![viseme](/img/viseme.png)

In the [demo](https://react-speech-highlight.vercel.app/) i provide, you can see the 3D avatar from [readyplayer.me](https://readyplayer.me/) can alive playing the `idle` animation and their mouth can synchronize with the highlighted text to speech, it because this package has react state that represent [current spoken viseme](https://github.com/albirrkarim/react-speech-highlight-demo/blob/main/API.md#spokenhl). the viseme list that i use in the demo is [Oculus OVR LipSync](https://docs.readyplayer.me/ready-player-me/api-reference/avatars/morph-targets/oculus-ovr-libsync).

#### Language Learning App With Real Human Voice

![Use case Language Learning App](./img/hanacaraka.png)

Look at the example 6 on the [demo](https://react-speech-highlight.vercel.app). its a example of use real human voice for text to speech. Maybe your local language is not supported by the TTS API. you can use this package to use the real human voice. The real human voice is recorded by the real human. The real human voice is more natural than the TTS API.

#### Academic Text Reader

![Pronounciation](/img/pronounciation.png)

The problem when we do TTS on academic text. it contains math equations, formula, symbol that the shown term is different with their pronounciation [see](PROBLEMS.md#1-pronounciation-problem). so we make some pronounciation correction engine utilizing the Open AI API to think what should the term pronounced.

#### Relation Highlight and Word Level Highlighting of Youtube Transcript

https://github.com/user-attachments/assets/799bae21-a43e-44c4-a4c7-ede7ac2d5b51

It has youtube iframe, and the youtube transcript on the right, when you play the youtube video, the transcript will be highlighted. The highlighting is based on the current time of the played video. this package are **follow** the time.

Relation Highlight feature - When you hover into some word, the related word will be highlighted too. Example when you hover into chinese word, the pinyin and english word will be highlighted too and vice versa. How it can? [see](LLM_ENGINE.md).

#### Video Player With Auto Generate Subtitle

https://github.com/user-attachments/assets/f0d8d157-1c1e-43e1-8eba-ebe7dfe3865e

Case: You just have audio or video file without text transcript. Our package can generate the transcript from the audio file. or even transtlate the transcript to other language. The subtitle can be highlighted when the video is played, and maybe it want to show two different language subtitle at once. and also highlight the both based on the meaning of the words.

On that preview video above the video original language is in italian, and i also show the translate in english. and the system is highlight both based on the meaning.

Italian word `bella` have meaning in english `beautiful`

Go to [this video demo page](https://react-speech-highlight.vercel.app/video).

#### Realtime Communication With Highlighted Text

Task that the audio is feed to client side in real time like you are on a phone call, theres no audio file behind it. 

Recently open ai made [realtime api](https://platform.openai.com/docs/guides/realtime) it use [Web RTC (Web Real-Time Communication)](https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API) so you can like have a phone call with AI.

Goto [realtime communication demo](https://react-speech-highlight.vercel.app/#example-realtime).

#### Your use case here

![Covers Everyone’s Needs](./img/adaptable.png)

Just ask me what you want to make, the package architecture is scalable to make various feature.

<br>
<br>

## B. TODO

- [ ] Add discord chat bot using LLM for explaining the API, and just explain what you want to make, and they will give you the code.
- [ ] Automation Brute Force End to End Testing, test all APIs, runtime, sequential action, etc...
- [ ] Add viseme support for chinese character
- [ ] Let me know what you want from this package, the package architecture is scalable to make various feature, please write it on issues tab, or contact me via discord (username: albirrkarim)

<br/>

- [x] Realtime Text to Speech With Highlight - This package can intergrate with [open ai realtime api](https://platform.openai.com/docs/guides/realtime), Imagine you have a phone call with AI the web are displaying the transcript with highlight the current spoken.
- [x] Add example of [streaming TTS with highlight](https://react-speech-highlight.vercel.app/example). it play tts with highlight while even the text is still streamed.
- [x] Re-[Architecture](#solutions) the package into plugins system, and add optional backend-nify the LLM Engine, so it faster, secure and more reliable.
- [x] Making Hybrid engine timestamp detection
- [x] Relation Highlight Feature - Used in Youtube Transcript Highlight. Highlight the words in youtube transcript, and their relations to other word like their translation form.
- [x] Add Virtual Node for flexible highlighting
- [x] React Native Speech Highlight - Now we add support for mobile app version using [React Native](https://reactnative.dev/), [try the demo app](#react-native-speech-highlight)
- [x] Accurate and cost effective [pronounciation correction](PROBLEMS.md#a-common-problem-in-text-to-speech-both-audio-file-and-web-speech-synthesis) Using LLM Open AI Chat Completions for any terms or equations from academic paper, math, physics, computer science, machine learning, and more...
- [x] Server Side Rendering Capability, see our demo is using [next js](https://nextjs.org/)
- [x] Batch API request for making the audio file for long article content. it will improve efficiency and user experience. [it for solve The delay of audio played and user gesture to trigger play must be close.](PROBLEMS.md#1-the-delay-of-audio-played-and-user-gesture-to-trigger-play-must-be-close)
- [x] Add example text to speech with viseme lipsync on 3D avatar generated from [readyplayer.me](https://readyplayer.me). [see](https://vanilla-speech-highlight.vercel.app)
- [x] Add viseme API for current spoken TTS, [see](https://vanilla-speech-highlight.vercel.app)
- [x] Add vanilla js support, for those who don't use react, [see vanilla demo](https://vanilla-speech-highlight.vercel.app)
- [x] Add fallback/prefer to audio file (.mp3/etc) when user doesn't have built in speech synthesis in their devices. or maybe prefer using audio file because the sound is better than robot like sound. [see](AUDIO_FILE.md)
- [x] Docs integration text-to-speech with [Eleven Labs](https://try.elevenlabs.io/29se7bx2zgw1) API [see the demo web](https://react-speech-highlight.vercel.app)
- [x] Integration with [React GPT Web Guide](https://github.com/albirrkarim/react-gpt-web-guide-docs) Package.
- [x] Multi character support for non latin alphabet ( chinese (你好),
      russian (Привет), japanese (こんにちは), korean (안녕하세요), etc ). [see](https://react-speech-highlight.vercel.app/#non-latin)
- [x] Add [language detection using LLM api](API.md#2-getlangforthistext)
- [x] Add [seeking by sentence or paragraph](API.md#2b-interface), [reading progress by word or sentence](API.md#spokenhl), [Adjust config while TTS playing.](API.md#controlhl), [Custom Abbreviation Function](API.md#1-tts-marker-markthewords)
- [x] Realiability: TTS that can't die, Test on any platform, Code Linting using eslint, Using [Typescript](https://www.typescriptlang.org/), [Tested (Prompt Test, Unit Test, Engine Test)](TEST.md)
- [x] Add [demo website](https://react-speech-highlight.vercel.app)

<br>
<br>

## C. API & Example Code

See [API.md](API.md) and [EXAMPLE_CODE.md](EXAMPLE_CODE.md) that contain simple example code.

The full example code and implementation example is using source code from [demo website](https://react-speech-highlight.vercel.app). the source code of demo website is included when you buy this package.

This package is written with typescript, You don't have to read all the docs in here, because this package now support [js doc](https://jsdoc.app) and [VS Code IntelliSense](https://code.visualstudio.com/docs/editor/intellisense) what is that? simply its when you hover your mouse into some variable or function [VS Code](https://code.visualstudio.com) will show some popup (simple tutorial) what is the function about, examples, params, etc...

Just use the source code from demo website, you can literally just understand the package.

https://github.com/albirrkarim/react-speech-highlight-demo/assets/29292018/05d325f9-469c-47e9-97d3-10053628e18c

<br>
<br>

## D. Changelog

Changelog contains information about new feature, improve accuracy, fix bug, and what you should do when the version is update.

See [CHANGELOG.md](CHANGELOG.md)

<br>
<br>

## E. Disclaimer & Warranty

There's no refund.

I love feedback from my customers. You can write on the issue tab so when i have time i can try to solve that and deliver for the next update.

Still worry? see the [reviews on producthunt](https://www.producthunt.com/products/react-vanilla-speech-highlight/reviews)

<a href="https://www.producthunt.com/products/react-vanilla-speech-highlight/reviews" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/product_review.svg?product_id=574592&theme=light" alt="React&#0032;&#0047;&#0032;Vanilla&#0032;Speech&#0032;Highlight - Highlight&#0032;Anything | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" /></a>

<br>
<br>

## F. FAQ

<details>
  <summary>Why it's expensive? Why it's not opensource package?</summary>
  
  <br/>

Well, i need money to funding the research, you know that making complex package is cost a lot of time and of course money, and high engineering skills.

Making marking the sentence and word for all languages with different writing system is really hard. I have do research about that language, then making a lot of test case that make the marking solid and reliable for all languages.

Making the [LLM engines](LLM_ENGINE.md) that combines prompt engineering and efficient algorithm to saving Open AI API cost. Need to be tested and the test is repeatly that cost the API call.

Also i provide support via live private chat to me through discord (username: albirrkarim).

**When you try to make this package by yourself, you will need to spend a lot of time and money to make something like this package.**

This package is a `base` package that can be used for various [use cases](#use-cases). I made a lot of money with package. The limit is your entrepreneurship skill.

</details>

<br/>

<details>
  <summary>How about support?</summary>
  
  <br/>

Tell your problems or difficulties to me, i will show you the way to solve that.

I provide realtime support from me with discord.

Just buy it. remove the headache. and you can focus on your project.

</details>

<br/>

<details>
  <summary>Can you give me some discount?</summary>
  
  <br/>

Yes, if you are student or teacher, you can get discount. Just show me your student card or teacher card.

Yes, if you help me vote this package on [product hunt](https://www.producthunt.com/products/react-vanilla-speech-highlight)

</details>

<br/>

<details>
  <summary>Is it well documented and well crafted?</summary>
  
  <br/>

You can see the docs in this repo, and this package is written with typescript, and tested using jest to make sure the quality.

You don't have to read all the docs in here, because this package now support [VS Code IntelliSense](https://code.visualstudio.com/docs/editor/intellisense) what is that? simply its when you hover your mouse into some variable or function [VS Code](https://code.visualstudio.com/) will show some popup (simple tutorial) what is the function about, examples, params, etc...

Just use the source code from demo website, you can literally just understand the package.

https://github.com/albirrkarim/react-speech-highlight-demo/assets/29292018/05d325f9-469c-47e9-97d3-10053628e18c

</details>

<br/>

<details>
  <summary>This package written in Typescript? Is it can be mixed together with jsx or native js project?</summary>
  
  <br/>

Yes it can, just ask [chat gpt](https://chatgpt.com), and explain your problems.

Example :

"My project is using webpack, code is using jsx, i want to use tsx code along side the jsx, how can i?"

</details>

<br/>

<details>
  <summary>How accurate the viseme generation?</summary>
  <br/>
  
  Goto the [Vanilla Speech Highlight](https://vanilla-speech-highlight.vercel.app)

I make demo for outputing the viseme into console.log. just open the browser console and play the prefer audio example (english). and you will see the word and viseme in the current timing of played tts.

</details>

<br/>

<details>
  <summary>How accurate the highlight capability?</summary>
  <br/>
  
  Just see the [demo](https://react-speech-highlight.vercel.app)

</details>

<br/>

<details>
  <summary>Why there's no voices available on the device?</summary>

  <br/>

Try to use Prefer or Fallback to Audio File see [AUDIO_FILE.md](AUDIO_FILE.md)

or

Try to setting the speech synthesis or language in your device.

If you use smartphone (Android):

1. Make sure you install [Speech Recognition & Synthesis](https://play.google.com/store/apps/details?id=com.google.android.tts)

2. If step 1 doesn't work. Try to download google keyboard. then setting the Dictation language. wait a few minute (your device will automatically download the voice), then restart your smartphone.

</details>

<br/>

<details>
  <summary>Why speech doesn't work for first played voice? (web speech synthesis)</summary>

  <br/>

Your device will download that voice first. then your device will have that voice locally.

Try to use Prefer or Fallback to Audio File see [AUDIO_FILE.md](AUDIO_FILE.md)

</details>

<br/>

<details>
  <summary>Can i use this text-to-speech without showing the highlight?</summary>

  <br/>

Yes, [see](API.md)

</details>

<br/>

<details>
  <summary>Can i use without openai API?</summary>

  <br/>
  
  This package optionally required open ai API for better doing text-to-speech task (solve many problem that i wrote in [PROBLEMS.md](PROBLEMS.md)).

But if you don't want to use open ai API, it can still work. see the FAQ about **_What dependency this package use?_**

</details>
<br/>

<details>
  <summary>What dependency this package use?</summary>

  <br/>

**NPM dependencies:**

- For React Speech Highlight: See the [package.json](package.json) in this repo. see the `peerDependencies` once you build this package you will need only npm package that is in that `peerDependencies`. Only react.

- For [Vanilla Speech Highlight](https://vanilla-speech-highlight.vercel.app): No dependency, just use the vanilla js file.

**AI dependencies:**

- This package optionally required open ai API for better doing text-to-speech task (solve many problem that i wrote in [PROBLEMS.md](PROBLEMS.md)).

- Optionally using any TTS API that can produce audio file for better sound quality. Like [ElevenLabs](https://try.elevenlabs.io/29se7bx2zgw1), [Murf AI](https://get.murf.ai/0big1kdars4f), [Open AI](https://platform.openai.com/docs/guides/text-to-speech), [Amazon Polly](https://aws.amazon.com/id/polly/), and [Google Cloud](https://cloud.google.com/text-to-speech) or any other TTS API as long as they can produce audio file (mp3, mp4, wav, etc...) for the detail see the [AUDIO_FILE.md](AUDIO_FILE.md).

</details>

<br/>

<details>
  <summary>Support for various browsers and devices?</summary>

  <br/>

Yes, See the detail on [TEST.md](TEST.md)

or you can Try to use Prefer or Fallback to Audio File see [AUDIO_FILE.md](AUDIO_FILE.md)

</details>

<br/>

<details>
  <summary>How it work? Is the Package Architecture Scalable?</summary>
  <br/>

It just work. Simple explanation is in the introduction [above](#a-introduction).

The architecture scalable, just ask me what feature you want.

</details>

<br/>

<details>
  <summary>How about API cost of using open AI API for your package use?</summary>
  <br/>

See [LLM_ENGINE.md](LLM_ENGINE.md)

</details>

<br/>

<details>
  <summary>Our Company have already make a lot of audio file, can i just use it for highlighting with your package?</summary>
  <br/>

No, Because my package handle all the [batching system](PROBLEMS.md#2-long-text-request-to-tts-api-capabilty-of-tts-api-handling-long-text), [pronounciation system](PROBLEMS.md#1-pronounciation-problem), and [providing text](API.md#3-converttextintocleartranscripttext) so the TTS API can produce the audio file that can be used for highlighting.

You can just do [caching strategy](AUDIO_FILE.md#a-efficient-cost-strategy) to cache the request response. for both open ai API and TTS API for audio file.

</details>

<br/>

## G. Payment

### - The Web Version (React and Vanilla js)

![The Web Version (React and Vanilla js)](./img/web_version.png)

For individual developer, freelancer, or small business.

Due to the high demand for this library, access is granted through a bidding process.

Submit your bid within the designated timeframe (every month we choose the winner).

Highest bidders get priority access.

[Fill bid form](https://forms.gle/T7ob1k7w1oywCYHP9)

After payment, you’ll be invited to my private repository, where you’ll have access for one year, including all updates during that time.

For continued access in subsequent years, you can pay USD $50 annually to remain in the private repository.

**What you got**

- [The demo website (Next js based)](https://github.com/Web-XR-AI-lab/demo-website-react-speech-highlight)

- [The package repo (React Speech Highlight)](https://github.com/Web-XR-AI-lab/react-speech-highlight)

- [The package repo (Vanilla Speech Highlight)](https://github.com/Web-XR-AI-lab/vanilla-speech-highlight)

<br/>

<!-- 

### - Screencast Tutorial

I know this package is complex, some features requiring architecture & advanced programing skill to use it.

So i make some full screencast tutorial about how to use this kind of advanced weapon.

From the installation to examples of advanced implementation and more.

The price is subscription $5 / month. (Coming soon)

<br/>

<!-- ### - The Enterprise Web Version

![Enterprise Web Version](./img/enterprise_web_version.png)

For you that already have business and want solid package that can be used for long term.

The price is USD $700.

**What you got**

- [Web version](#--the-web-version-react-and-vanilla-js) this package.
- Architecture support, i can make some drawing about the architecture of implementation.
- Implementation code review, i can review your code do best practice implementation.
- 4 years inside private repo and support. 

<br/>


### - The Mobile App Version (React Native)

![The Mobile App Version (React Native)](./img/mobile_version.png)

The price is USD $150.

**What you got**

- [The Demo App source code based on React Native CLI](https://github.com/Web-XR-AI-lab/react-native-speech-highlight-cli-version) (Ready) ([Try demo android app](#react-native-speech-highlight))

<br/>

-->

### Backend Server for Advanced Features

![Backend Server](./img/backend.png)

- [Python server ($20)](https://github.com/Web-XR-AI-lab/rshl_python_helper)

Contains: YouTube relation transcript highlight, Video auto-generate transcript

- [Node js server ($20)](https://github.com/Web-XR-AI-lab/rshl_node)

Contains: Backenify LLM engines

<br/>

<!-- ### - PDF Reader Plugin

![PDF Reader Plugin](./img/pdf_reader_plugin.png)

PDF plugin is used for highlighting the text in the PDF file.

They can read many PDF structure, and determine the sequential reading from left to right. mimic user reading.

They can also read the image (highlight the image with some box) in the PDF file and determine the text in the image using LLM.

Price is $3000

**What you got**

- Demo website that include the plugin and the example use. (Coming soon)

 -->

<br/>

<!-- ### - The Web Version bundled with React GPT Web Guide

[![React GPT Web Guide Banner](https://raw.githubusercontent.com/albirrkarim/react-gpt-web-guide-docs/main/img/banner.png)](https://github.com/albirrkarim/react-gpt-web-guide-docs)

[React GPT Web Guide](https://github.com/albirrkarim/react-gpt-web-guide-docs) ($100) + React Speech Highlight(~~$200~~)($50) = $150

**What you got**

- [The demo website (Next js based)](https://github.com/Web-XR-AI-lab/demo-website-gpt-web-guide)
- All the private repo web version of [React Speech Highlight](#the-web-version-react-and-vanilla-js)

<br/> -->

<br/>

### Payment method

**Github Sponsors**

Choose One Time Tab, Select the option, and follow the next instruction from github.

<a href="https://github.com/sponsors/albirrkarim" title="Github Sponsors">
    <img src="https://github.com/albirrkarim/laravel-react-starter-kit-pro/assets/29292018/00e008ed-8d31-4b4c-a54d-a53ac62d9f91" width="350em">
</a>

<br/>
<br/>

## Keywords

So this package is the answer for you who looking for:

- Best Text to Speech Library
- Text to speech with viseme lipsync javascript
- Javascript text to speech highlight words
- How to text to speech with highlight the sentence and words like speechify
- How to text to speech with highlight the sentence and words using elevenlabs
- How to text to speech with highlight the sentence and words using open ai
- How to text to speech with highlight the sentence and words using google speech synthesis
- Text to speech javascript
- Typescript text to speech
- Highlighted Text to Speech
- Speech Highlighting in TTS
- TTS with Sentence Highlight
- Word Highlight in Text-to-Speech.
- Elevenlabs TTS
- Highlighted TTS Elevenlabs
- OpenAI Text to Speech
- Highlighted Text OpenAI TTS
- React Text to Speech Highlight
- React TTS with Highlight
- React Speech Synthesis
- Highlighted TTS in React
- Google Speech Synthesis in React
- Text to Speech React JS
- React JS TTS
- React Text-to-Speech
- TTS in React JS
- React JS Speech Synthesis
- JavaScript TTS
- Text-to-Speech in JS
- JS Speech Synthesis
- Highlighted TTS JavaScript
- Youtube Transcript Highlight
- Word Highlight in Youtube Transcript
- How to Highlight Words in Youtube Transcript
- Youtube Transcript Word Timing
- Realtime tts with highlight
- Realtime tts streamed audio & text 