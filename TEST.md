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

Unit Test is making test case for each function. make sure individual function is working as expected

Unit test using jest in demo website source code folder `__test__`.

- markTheWords()

Tests: 26 passed, 26 total

- romanTransform()

Tests: 6 failed, 53 passed, 59 total

- isNumber()

Tests: 3 failed, 28 passed, 31 total
