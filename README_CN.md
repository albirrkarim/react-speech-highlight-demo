# React / Vanilla 语音高亮

[English](README.md) | [简体中文](README_CN.md) | [Bahasa Indonesia](README_ID.md)

![React / Vanilla Speech Highlight](./img/banner.png)

https://github.com/albirrkarim/react-speech-highlight-demo/assets/29292018/06e7b0a2-8c19-4ffc-826e-1470a275dfcb

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

<a href="https://discordapp.com/channels/@me/884043164908929034" title="Message me with discord">
    <img src="./img/discord.png" width="200em">
</a>

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

# 文档 v5.0.1

**目录**

- [A. 简介](#a-introduction)
- [B. 待办事项](#b-todo)
- [C. API与示例代码](#c-api---example-code)
- [D. 更新日志](#d-changelog)
- [E. 免责声明与保证](#e-disclaimer--warranty)
- [F. 常见问题解答](#f-faq)
- [G. 支付](#g-payment)

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


### 应用场景

- **互动博客**

想象一下，你有一篇长文章并设置了文字转语音（TTS）按钮，用户点击后可以播放文章的语音，并能看到文章阅读的进度。由于这个包具备服务器端渲染（SSR）功能，你的文章将具备搜索引擎优化（SEO）的优势。

- **网络 AI 头像 / NPC**

![viseme](/img/viseme.png)

在我提供的[演示](https://react-speech-highlight.vercel.app/)中，你可以看到来自 [readyplayer.me](https://readyplayer.me/) 的3D头像播放`闲置`动画，并且其嘴部可以与高亮的文字转语音同步。这是因为这个包有反映[当前说话唇形](https://github.com/albirrkarim/react-speech-highlight-demo/blob/main/API.md#spokenhl)的 React 状态。我在演示中使用的唇形列表是 [Oculus OVR LipSync](https://docs.readyplayer.me/ready-player-me/api-reference/avatars/morph-targets/oculus-ovr-libsync)。

<br>
<br>

## B. 待办事项

- [ ] 为中文字符添加唇形支持
- [ ] 请告诉我您希望从这个包中得到什么，请在问题标签页上写下来，或者通过 Discord 向我发送消息 @albirrkarim

<br/>

- [x] 使用 [TypeScript](https://www.typescriptlang.org/) 重写
- [x] 服务器端渲染功能，查看我们的演示使用的是 [Next.js](https://nextjs.org/)
- [x] 批量 API 请求用于制作长文章内容的音频文件。这将提高效率和用户体验。[解决音频播放延迟以及用户触发播放的手势必须接近的问题](https://github.com/albirrkarim/react-speech-highlight-demo/blob/main/PROBLEMS.md#1-the-delay-of-audio-played-and-user-gesture-to-trigger-play-must-be-close)
- [x] 添加示例文字到语音与3D头像唇形同步，3D头像由 [readyplayer.me](https://readyplayer.me) 生成。[查看](https://vanilla-speech-highlight.vercel.app)
- [x] 使用 eslint 进行代码校验
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

## C. API 和示例代码

请参阅 [API.md](API.md) 和 [EXAMPLE_CODE.md](EXAMPLE_CODE.md)，其中包含简单的示例代码。

完整的示例代码和实现示例使用的是 [演示网站](https://react-speech-highlight.vercel.app) 的源代码。购买此套件时将包括演示网站的源代码。

这个包是用 TypeScript 编写的，您不必阅读这里的所有文档，因为这个包现在支持 [VS Code IntelliSense](https://code.visualstudio.com/docs/editor/intellisense)。这是什么？简单来说，当你将鼠标悬停在某些变量或函数上时，[VS Code](https://code.visualstudio.com) 会显示一些弹出窗口（简单教程），说明该函数的内容、示例、参数等...

只需使用演示网站的源代码，您可以直接理解这个包。

<br>
<br>

## D. 更新日志

更新日志包含有关新功能、提高准确性、修复错误以及当版本更新时您应该做什么的信息。

查看 [CHANGELOG.md](CHANGELOG.md)

<br>
<br>

## E. 免责声明与保证

不提供退款。

我喜欢收到客户的反馈。您可以在问题标签页上写下您的反馈，当我有时间时，我可以尝试解决这些问题，并在下次更新时提供解决方案。
<br>
<br>

## F. 常见问题解答

<details>
  <summary>为什么这么贵？为什么不是开源包？</summary>
  
  <br/>

尝试自己制作这个包。你会感激我卖得这么便宜。

嗯，我需要资金来资助研究，你知道制作包需要花费很多时间和当然还有钱。

</details>

<br/>

<details>
  <summary>你能给我一些折扣吗？</summary>
  
  <br/>

可以，如果你是学生。

</details>

<br/>

<details>
  <summary>它有良好的文档和精心制作吗？</summary>
  
  <br/>

你可以在这个仓库中查看文档，这个包是用 TypeScript 编写的，并使用 jest 进行测试以确保质量。

你不必在这里阅读所有文档，因为这个包现在支持 [VS Code IntelliSense](https://code.visualstudio.com/docs/editor/intellisense)，那是什么？简单来说就是当你将鼠标悬停在某些变量或函数上时，[VS Code](https://code.visualstudio.com/) 会显示一些弹出窗口（简单教程），说明该函数的内容、示例、参数等...

只需使用演示网站的源代码，你可以直接理解这个包。

</details>

<br/>

<details>
  <summary>这个包是用 TypeScript 编写的吗？它可以与 jsx 或原生 js 项目混合使用吗？</summary>
  
  <br/>

可以，只需询问 [chat gpt](https://chat.openai.com)，并解释你的问题。

例如：

“我的项目使用 webpack，代码使用 jsx，我想在 jsx 旁边使用 tsx 代码，我该怎么做？”

</details>

<br/>

<details>
  <summary>唇形生成的准确性如何？</summary>
  <br/>
  
  前往 [Vanilla Speech Highlight](https://vanilla-speech-highlight.vercel.app)

我制作了一个演示，将唇形输出到控制台日志中。只需打开浏览器控制台并播放首选的音频示例（英语），你就会看到播放的 TTS 中当前时间的单词和唇形。

</details>

<br/>

<details>
  <summary>高亮显示功能的准确性如何？</summary>
  <br/>
  
  只需查看演示

</details>

<br/>

<details>
  <summary>为什么设备上没有可用的声音？</summary>

  <br/>

尝试使用首选或回退到音频文件，见 [AUDIO_FILE.md](AUDIO_FILE.md)

或

尝试设置你的设备的语音合成或语言。

如果你使用智能手机（Android）：

1. 确保你安装了 [语音识别与合成](https://play.google.com/store/apps/details?id=com.google.android.tts)

2. 如果第一步不起作用。尝试下载 Google 键盘。然后设置口述语言。等待几分钟（你的设备将自动下载语音），然后重启你的智能手机。

</details>

<br/>

<details>
  <summary>为什么第一次播放声音时语音功能不起作用？</summary>

  <br/>

你的设备将首先下载那个声音。然后你的设备将本地拥有那个声音。

尝试使用首选或回退到音频文件，见 [AUDIO_FILE.md](AUDIO_FILE.md)

</details>

<br/>

<details>
  <summary>我可以在不显示高亮的情况下使用这种文字转语音吗？</summary>

  <br/>

是的，[参见](API.md#5-speak)

</details>

<br/>

<details>
  <summary>我可以不使用 openai API 吗？</summary>

  <br/>
    
  可以，但你

会遇到这个 [问题](PROBLEMS.md#6-wrong-read-number)

</details>
<br/>

<details>
  <summary>这个包使用了哪些依赖？</summary>

  <br/>
      
  查看这个仓库中的 [package.json](package.json)，看看 `peerDependencies`，一旦你构建了这个包，你将只需要在那个 `peerDependencies` 中的 npm 包。只需 React。

这个包需要 open ai API 来更好地执行文字转语音任务（解决 [问题](PROBLEMS.md#6-wrong-read-number)）。

</details>

<br/>

<details>
  <summary>支持各种浏览器和设备吗？</summary>

  <br/>

是的，详见 [TEST.md](TEST.md)

或者你可以尝试使用首选或回退到音频文件，见 [AUDIO_FILE.md](AUDIO_FILE.md)

</details>

<br/>

<details>
  <summary>它是如何工作的？</summary>

  <br/>

如 [上文](#a-introduction) 所介绍。这里是包工作的概览。

这个包使用 [web 语音合成](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API) API 来执行文字转语音任务。但这种免费的网络语音合成也带来了 [问题](PROBLEM.md)。

然后，这个包提供了一个接口，增加了功能，尤其是试图解决所有问题。

在尝试解决某些问题时，这个包需要来自 [open ai chat completion API](https://platform.openai.com/docs/api-reference/chat) 的帮助，它增加了理解能力。比如增加检测语言的功能，解决 [这个问题](PROBLEMS.md#6-wrong-read-number)。

更简单的方法是使用首选或回退到音频文件，见 [AUDIO_FILE.md](AUDIO_FILE.md)

</details>

<br/>

## G. 支付

<br/>

价格为70美元。

我接受各种支付方式：

<a href="https://github.com/sponsors/albirrkarim" title="Github Sponsors">
    <img src="https://github.com/albirrkarim/laravel-react-starter-kit-pro/assets/29292018/00e008ed-8d31-4b4c-a54d-a53ac62d9f91" width="350em">
</a>

<br/>
<br/>

如果您所在的国家无法使用 GitHub 赞助商，您可以使用 [wise.com](https://wise.com/invite/dic/albirrkarims)。您可以将价格（70美元）换算成您的货币，然后直接使用您的货币通过 [Wise](https://wise.com/invite/dic/albirrkarims) 发送。


<a href="https://wise.com/pay/me/albirrkarims" title="Wise Payment">
    <img src="https://github.com/albirrkarim/albirrkarim/assets/29292018/7a5fba67-9ec0-4401-b65b-780306128e87" title="@albirrkarims-wisetag" width="200em">
</a>

<br/>
<br/>

如果您在印度尼西亚（我的国家），您可以通过银行和电子钱包（GoPay、Shopee Pay、Jenius）轻松转账。

<img src="./img/payment.png" width="350em">

<br/>
<br/>

<div align="center">

<a href="https://www.producthunt.com/products/react-vanilla-speech-highlight/reviews?utm_source=badge-product_review&utm_medium=badge&utm_souce=badge-react&#0045;vanilla&#0045;speech&#0045;highlight" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/product_review.svg?product_id=574592&theme=light" alt="React&#0032;&#0047;&#0032;Vanilla&#0032;Speech&#0032;Highlight - Highlight&#0032;Anything | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" /></a>

</div>

<br/>

## 关键词

如果您在寻找以下产品，那么这个软件包就是您的答案：

- 最佳文字转语音软件
- 具有唇形同步的文字转语音 JavaScript
- JavaScript 文字转语音高亮显示单词
- 如 Speechify 一样，如何通过高亮显示句子和单词进行文字转语音
- 如何使用 Elevenlabs 通过高亮显示句子和单词进行文字转语音
- 如何使用 OpenAI 通过高亮显示句子和单词进行文字转语音
- 如何使用 Google 语音合成通过高亮显示句子和单词进行文字转语音
- React JS 文字转语音
- JavaScript 文字转语音
- TypeScript 文字转语音
- 高亮显示的文字转语音
- TTS 中的语音高亮
- 带句子高亮的 TTS
- 文字转语音中的单词高亮
- Elevenlabs TTS
- 高亮显示的 Elevenlabs TTS
- OpenAI 文字转语音
- 高亮显示的 OpenAI TTS
- React 文字转语音高亮显示
- 带高亮的 React TTS
- React 语音合成
- React 中的高亮显示 TTS
- React 中的 Google 语音合成
- React JS 文字转语音
- React JS TTS
- React 文字转语音
- React JS 中的 TTS
- React JS 语音合成
- JavaScript 文字转语音
- JavaScript TTS
- JS 中的文字转语音
- JS 语音合成
- JavaScript 中的高亮显示 TTS