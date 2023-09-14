# Testing Report

## Compatibility

This package is based on Native Web Speech Synthesis API if that api doesn't supported then this package is also not support. see the [Web Speech Synthesis API Browser compatibility](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis#browser_compatibility)

Then I do mannually test this package with different OS and browser.

| OS         | Chrome             | Safari (Apple Device) | Firefox            | Microsoft Edge     | Other |
| ---------- | ------------------ | --------------------- | ------------------ | ------------------ | ----- |
| Android 13 | :white_check_mark: |                       | :x:                | :white_check_mark: | :x:   |
| Mac OS     | :white_check_mark: | :white_check_mark:    | :x:                | :white_check_mark: | :x:   |
| IPad OS    | :white_check_mark: | :white_check_mark:    | :white_check_mark: | :white_check_mark: | :x:   |

Info:

- :white_check_mark: = Pass

- :x: = Failed

Other = Opera Mini, UC browser, Brave Browser (Because the Web Speech Synthesis API is also not supported [see](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis#browser_compatibility))

### Device that i have test:

- Macbook air m1
- Ipad Pro m1
- Samsung A53

<br/>

## Unit Test

Unit Test is making test case for each function. make sure individual function is working as expected.

Unit test using jest in demo website source code folder `__test__`.

But for now only this function and some prompt that i have test.

### Function

- markTheWords()

Tests: 26 passed, 26 total

- romanTransform()

Tests: 6 failed, 53 passed, 59 total

- isNumber()

Tests: 3 failed, 28 passed, 31 total


### Prompt Function

The prompt function is different method to test. the chat gpt not always giving exact value.


- convertNumberIntoWordPrompt()

Tests: 1 failed, 12 passed, 13 total

<details>
  <summary>Show test case</summary>

```js
const number_to_word_form = [
  { numbers: [1000], lang: "id-ID", output: ["seribu"] },
  {
    numbers: [1000, 5000, "1.000.000"],
    lang: "en-US",
    output: ["one thousand", "five thousand", "one million"],
  },
  {
    numbers: [100, 250, 500],
    lang: "fr-FR",
    output: ["cent", "deux cent cinquante", "cinq cent"],
  },
  {
    numbers: [200, 789, 1001],
    lang: "es-ES",
    output: ["doscientos", "setecientos ochenta y nueve", "mil uno"],
  },
  {
    numbers: [123, 4567, 89012, 4090],
    lang: "de-DE",
    output: [
      "einhundertdreiundzwanzig",
      "vierthausendfünfhundertsiebenundsechzig",
      "neunundachtzigtausendzwölf",
      "vier­tau­send neun­zig"
    ],
  },
  {
    numbers: [75, 890, 4500],
    lang: "it-IT",
    output: ["settantacinque", "ottocentonovanta", "quattromila cinquecento"],
  },
  {
    numbers: [100, 1000],
    lang: "ja-JP",
    output: ["百", "千"],
  },
  {
    numbers: [9876],
    lang: "zh-CN",
    output: ["九千八百七十六"],
  },

  {
    numbers: [369, 785, 8900],
    lang: "es-MX",
    output: ["trescientos sesenta y nueve", "setecientos ochenta y cinco", "ocho mil novecientos"]
  },
  {
    numbers: [4321],
    lang: "fr-CA",
    output: ["quatre mille trois cent vingt et un"]
  },
  {
    numbers: [123456],
    lang: "it-CH",
    output: ["centoventitremilaquattrocentocinquantasei"]
  },
  {
    numbers: [9999999],
    lang: "ja-JP",
    output: ["九百九十九万九千九百九十九"]
  },
  {
    numbers: [123456789],
    lang: "zh-TW",
    output: ["一億二千三百四十五萬六千七百八十九"]
  }
];

export { number_to_word_form };

```
</details>