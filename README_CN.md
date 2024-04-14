# React / Vanilla 语音高亮

[English](README.md) | [简体中文](README_CN.md)

![React / Vanilla Speech Highlight](./img/description.png)

https://github.com/albirrkarim/react-speech-highlight-demo/assets/29292018/db35ec8b-b84b-45af-8446-9c226314b77e

使用音频文件、文本到语音 API 和网络语音合成 API，通过 React / Vanilla js 文本到语音功能实现在语音播放时高亮显示正在说的单词和句子。

[尝试 React 语音高亮演示](https://react-speech-highlight.vercel.app)

## 其他版本

### Vanilla JS (原生 JavaScript)

<img src="./img/vanilla.png" width="400" alt="Vanilla Speech Highlight" >

我们支持使用原生 js 实现。此包的大小为 86 KB。您可以轻松地将此库与您的网站结合使用，也许您的网站使用了 [jquery](https://jquery.com)

阅读 [API_VANILLA.md](API_VANILLA.md) 以查看区别。

[尝试 Vanilla 语音高亮演示](https://vanilla-speech-highlight.vercel.app)

如果您想要其他实现方式，只需通过 discord 向我询问：
albirrkarim#8171

[通过 discord 给我发消息](https://discordapp.com/channels/@me/884043164908929034)

## 特性：

- 精确高亮
- 类人声音（您可以使用您的音频文件）
- 更好的发音。阅读罗马数字、文档 id、日期范围、自定义缩写函数等。
- 不需要 react 重渲染的高亮动画，因此性能快
- 支持无限字符串长度
- 自动为特定语言找到最佳语音
- 在所有环境下工作 [查看 test.md](TEST.md)
- 解决语音合成问题 [查看 problem.md](PROBLEMS.md)

这是私有仓库 [React 语音高亮包](https://github.com/albirrkarim/react-speech-highlight) 和 [演示网站源代码](https://github.com/albirrkarim/demo-website-react-speech-highlight) 的文档。

<br/>

# 文档 v4.9.2

**目录**

- [A. 引言](#a-introduction)
- [B. 待办事项](#b-todo)
- [C. API](#c-api)
- [D. 示例代码](#d-example-code)
- [E. 更新日志](#e-changelog)
- [F. 免责声明](#f-disclaimer)
- [G. 保修](#g-warranty)
- [H. 常见问题解答](#h-faq)

## A. 引言

### 我想要什么？

最近，我想在我的网站上实现文本到语音功能，并高亮显示正在说的单词和句子。
然后我在互联网上搜索，但我找不到 npm 包来解决我所有的问题，我也不想使用一些 TTS API 的付费订阅。

我只是想要一个在所有平台上都能工作且语音质量好的强大包。

### 我在互联网上搜索时得到了什么：

**使用 [Web SpeechSynthesis](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis)**

伴随着问题（见 [PROBLEMS.md](https://github.com/albirrkarim/react-speech-highlight-demo/blob/main/PROBLEMS.md)）。机器人般的声音，支持的设备可用。

**使用付费订阅的文本到语音合成 API**

当我们谈论好的声音/类人声音时，AI 模型推理应该被涉及。因此，在客户端上进行这样的操作是没有意义的。

然后，像 [ElevenLabs](https://elevenlabs.io/?from=partnermurray4444)，[Google Cloud](https://cloud.google.com/text-to-speech)，[Amazon Polly](https://aws.amazon.com/id/polly/) 和 [Open AI](https://platform.openai.com/docs/guides/text-to-speech) 这样的语音合成 API 提供者发挥了他们的作用。

但他们不提供进行高亮显示的 npm 包。

然后我发现了 [Speechify](https://speechify.com)。但我没有找到任何关于使用与他们的服务集成的 npm 包的文档。（如果有人知道请告诉我）。此外，这是一个付费订阅服务。

再次搜索，然后我发现了 [ElevenLabs](https://elevenlabs.io/?from=partnermurray4444) 如果是每月 10000 字符，且下个月会重置是免费的。**很酷，对吧？** 所以我决定在我的项目中使用这个作为语音合成 API。但这个平台也没有提供高亮显示他们音频的 react npm 包。

### 解决方案

![React 语音高亮工作概览](./img/overview.png)

因此，我决定制作这个 npm 包，结合上述各种方法，保留所有好的东西，抛弃所有不好的东西。

我的包结合了 [内置 Web SpeechSynthesis](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis) 和音频文件（可选）运行。

使用首选/回退到音频文件时，您可以实现高质量的声音，并解决来自 [内置 Web SpeechSynthesis](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis) 的所有兼容性问题。您如何自动获取某些文本的音频文件？您可以使用 [ElevenLabs](https://elevenlabs.io/?from=partnermurray4444)，[Google Cloud](https://cloud.google.com/text-to-speech)，[Amazon Polly](https://aws.amazon.com/id/polly/) 和 [Open AI](https://platform.openai.com/docs/guides/text-to-speech) 或任何其他 TTS API，只要它们能够产生音频文件（mp3、mp4、wav 等）。详见 [AUDIO_FILE.md](AUDIO_FILE.md)。在 [演示网站](https://react-speech-highlight.vercel.app/) 上，我为您提供了使用 ElevenLabs 的示例，甚至您可以在该演示网上试用您自己的音频文件。

当这个包仅接受文本和音频文件输入时，这个包如何知道播放的音频的说话单词或句子的时间？这个包可以检测到被说出的单词和句子。

此外，这个包是一次性支付。没有订阅。谁喜欢订阅？我也不喜欢。

![功能概览](./img/features.png)

<br>
<br>

## B. 待办事项

- [ ] 提供 API 输出：高亮显示正在发言的句子和单词的 HTML 元素。当您在 Web 元宇宙中玩耍时，这将非常有益。想象一下在元宇宙中使用文本到语音技术。（例如 mozilla hubs, aframe 等）
- [ ] 请让我知道您希望从这个包中得到什么，请在 issues 标签页上写下您的想法。

<br/>

- [x] 为那些不使用 react 的人添加 vanilla js 支持，[查看](https://vanilla-speech-highlight.vercel.app)
- [x] 当使用音频文件播放时添加高亮显示能力。
- [x] 当用户的设备中没有内置的语音合成功能，或者可能因为音质比机器声音更好而偏好使用音频文件（.mp3/等）时，添加回退/偏好使用音频文件的功能。[查看](AUDIO_FILE.md)
- [x] 使用 [Eleven Labs](https://elevenlabs.io/?from=partnermurray4444) API 集成文本到语音的文档 [查看演示网站](https://react-speech-highlight.vercel.app)

- [x] 与 [React GPT Web Guide](https://github.com/albirrkarim/react-gpt-web-guide-docs) 包集成。
- [x] 自动化测试（提示测试，单元测试）（50%）
- [x] 支持非罗马字母的多字符（例如中文（你好），俄语（Привет），日语（こんにちは），韩语（안녕하세요）等）
- [x] 使用 chat gpt 将数字转换为单词形式。[查看](API.md#API.md#1-convertallnumberintoword)
- [x] 使用 chat gpt 添加语言检测。[查看](API.md#2-getlangforthistext)
- [x] 添加按句子或段落搜索。[查看](API.md#2b-interface)
- [x] 添加按单词或句子的阅读进度。[查看](API.md#spokenhl)
- [x] 在 TTS 播放时调整配置。[查看](API.md#controlhl)
- [x] 您可以使用自定义缩写函数。[查看](API.md#1-tts-marker-markthewords)
- [x] 添加阅读罗马数字以及该功能的 API。[查看](API.md#6-romantransform)
- [x] 不会死的 TTS。
- [x] 在任何平台上测试。
- [x] 添加演示网站。[查看](https://react-speech-highlight.vercel.app)

<br>
<br>

## C. API

查看 [API.md](API.md)

<br>
<br>

## D. 示例代码

查看 [EXAMPLE_CODE.md](EXAMPLE_CODE.md) 它包含简单的示例代码。

完整的示例代码和实现示例使用了[演示网站](https://react-speech-highlight.vercel.app)的源代码。当您购买此包时，演示网站的源代码将包含在内。

<br>
<br>

## E. 更新日志

更新日志包含有关新功能、提高准确性、修复错误以及当版本更新时您应该做什么的信息。

查看 [CHANGELOG.md](CHANGELOG.md)

<br>
<br>

## F. 免责声明

不予退款

<br>
<br>

## G. 保证

我喜欢收到我的客户的反馈。您可以在问题标签页上写下您的问题，这样当我有时间时，我可以尝试解决问题并在下次更新时提供解决方案。

<br>
<br>

## H. 常见问题解答

<details>
  <summary>为什么它很贵？为什么不是开源包？</summary>
  
  <br/>

尝试自己制作这个包。你会感激我把它卖得这么便宜。

嗯，我需要资金来支持研究，你知道制作包花费了大量的时间和当然还有金钱。

</details>

<br/>

<details>
  <summary>高亮显示功能有多准确？</summary>
  <br/>
  
  查看 [TEST.md](TEST.md) 上的详细信息

</details>

<br/>

<details>
  <summary>为什么设备上没有可用的声音？</summary>

  <br/>

尝试使用首选或回退到音频文件，查看 [AUDIO_FILE.md](AUDIO_FILE.md)

或

尝试在您的设备中设置语音合成或语言。

如果您使用的是智能手机（安卓）：

1. 确保您安装了[语音识别与合成](https://play.google.com/store/apps/details?id=com.google.android.tts)

2. 如果第一步不起作用。尝试下载谷歌键盘，然后设置口述语言。等待几分钟（您的设备将自动下载语音），然后重启您的智能手机。

</details>

<br/>

<details>
  <summary>为什么第一次播放的语音不工作？</summary>

  <br/>

您的设备将首先下载那个声音。然后您的设备将本地拥有那个声音。

尝试使用首选或回退到音频文件，查看 [AUDIO_FILE.md](AUDIO_FILE.md)

</details>

<br/>

<details>
  <summary>我可以在不显示高亮的情况下使用这个文本到语音吗？</summary>

  <br/>

是的，[查看](API.md#5-speak)

</details>

<br/>

<details>
  <summary>我可以不使用 openai API 来构建吗？</summary>

  <br/>
    
  可以，但您将遇到这个[问题](PROBLEMS.md#6-wrong-read-number)

</details>
<br/>

<details>
  <summary>这个包使用哪些依赖？</summary>

  <br/>
      
  查看此仓库中的 [package.json](package.json)。构建此包后，您只需要 `peerDependencies` 中的 npm 包。只需要 react。

这个包需要 open ai API 来更好地完成文本到语音任务（解决[这个问题](PROBLEMS.md#6-wrong-read-number)）。

</details>

<br/>

<details>
  <summary>支持各种浏览器和设备吗？</summary>

  <br/>

是的，查看 [TEST.md](TEST.md) 上的详细信息

或者您可以尝试使用首选或回退到音频文件，查看 [AUDIO_FILE.md](AUDIO_FILE.md)

</details>

<br/>

<details>
  <summary>它是如何工作的？</summary>

  <br/>

如[引言](#a-introduction)中所述。这里是包工作的概述。

这个包使用 [web 语音合成](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API) API 来进行文本到语音任务。但这种免费的网络语音合成也带来了[问题](PROBLEM.md)。

然后，这个包提供了一个接口，增加了功能，重要的是尝试解决所有问题。

在尝试解决某些问题时，这个包需要来自 [open ai chat completion API](https://platform.openai.com/docs/api-reference/chat) 的帮助，增加了理解能力。比如添加检测语言的功能，解决[这个问题](PROBLEMS.md#6-wrong-read-number)。

更简单的方法

是使用首选或回退到音频文件，查看 [AUDIO_FILE.md](AUDIO_FILE.md)

</details>
<br/>
