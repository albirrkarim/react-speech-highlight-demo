# LLM Engine

What's that ? I make a new engine that use LLM (open ai chat API) and good algorithm to achieve accurate and cost effective. Of course it tested with test case, here the report.

The cost defined in IDR (Indonesian Rupiah) when you currency is USD so just divide by 16.000. For example, IDR 16.000 is about USD $1.

Here the list of the engine:

## 1. Pronunciation Correction

This engine is used to correct the pronunciation of the term that contain equations or term that should be the pronounciation corrected.

```js
import {
  pronunciationCorrection,
  getSentencesNode,
} from "react-speech-highlight";

const textEl = useRef < HTMLDivElement > null;
// the textEl is the element that contains the text and have been marked with markTheWords function

await pronunciationCorrection(textEl.current, (progress) => {
  console.log("progress", progress);
});

const sentencesNode = getSentencesNode(textEl.current);

await pronunciationCorrection(sentencesNode, (progress) => {
  console.log("progress", progress);
});
```

Current version V2 available in version `4.9.7`

<details>
  <summary>Show Report</summary>
  <br/>

I try to optimize the cost while maintaining the accuracy by making new version of engine. v2, v3 etc...

For now, here the test report of the pronoun v2 engines in version `4.9.7` of this library.

```js
const v2_pronoun_engine_reports = {
  overallResults: {
    Name: "v2",
    Detail: "GPT3",
    AvgAcc: "90.50%",
    AvgScore: "92.05%",
    AvgTime: "81.62s",
    AvgCost: "869.53",
    TotalTime: "652.94 s",
    TotalCost: "Rp. 6956.27", // IDR 6956.27 is about USD $0.42 cost of open AI chat completion API
    TotalRecords: 87, // 87 sentence that contain equations or term that should be the pronounciation corrected
    CreatedAt: "29-04-2024 19:07",
  },
  testResults: {
    romanNumberPronounTestCase: {
      AvgAcc: "100.00%",
      AvgScore: "95.83%",
      AvgTime: "5.19s",
      AvgCost: "53.41",
      TotalCost: "320.44",
    },
    mathEquations: {
      AvgAcc: "100.00%",
      AvgScore: "95.62%",
      AvgTime: "5.87s",
      AvgCost: "54.80",
      TotalCost: "273.98",
    },
    demoTestCase: {
      AvgAcc: "95.00%",
      AvgScore: "95.83%",
      AvgTime: "4.71s",
      AvgCost: "32.20",
      TotalCost: "644.00",
    },
    physicalEquations: {
      AvgAcc: "100.00%",
      AvgScore: "97.29%",
      AvgTime: "6.76s",
      AvgCost: "58.16",
      TotalCost: "581.62",
    },
    computerScienceTestCase: {
      AvgAcc: "90.00%",
      AvgScore: "97.58%",
      AvgTime: "7.73s",
      AvgCost: "85.52",
      TotalCost: "855.17",
    },
    machineLeaningTestCase: {
      AvgAcc: "73.68%",
      AvgScore: "80.13%",
      AvgTime: "9.99s",
      AvgCost: "109.85",
      TotalCost: "2087.12",
    },
    biologyTestCase: {
      AvgAcc: "87.50%",
      AvgScore: "96.09%",
      AvgTime: "9.79s",
      AvgCost: "119.12",
      TotalCost: "952.95",
    },
    chemistryTestCase: {
      AvgAcc: "77.78%",
      AvgScore: "78.05%",
      AvgTime: "9.47s",
      AvgCost: "137.89",
      TotalCost: "1240.99",
    },
  },
};
```

</details>

## 2. Get Language from text

This function determines the language of the provided text.

```jsx
import { getLangForThisText } from "react-speech-highlight";

const text = "Hello, world!";
const lang = await getLangForThisText(text);
console.log(lang); // e.g., 'en'
```

PKG version 5.0.7 - getLangForThisText Version v1 - 18 August 2024

Test Report:

```bash
Total Time: 1.90 s
Average Time / Record: 0.01 s @ 136 records
Total Records: 136
Accuracy (correct/total): 100.00 %
Total COST IDR: 43.019
Total COST / Record: 0.316
Text Sample 
- Min 1 words, mean 36.97 words, max 154 words
- Min 2 characters, mean 249.48 characters, max 1055 characters
```

## 3. Translate to some language

Translate text into another language

```js
import { translateTo } from "react-speech-highlight";

const hashContent = md5("Hello"); // hashContent is optional

translateTo("Hello", "id", hashContent);
```

PKG version 5.0.7 - translateTo Version v1 - 18 August 2024

Test Report:

```bash
Total Time: 1.10 s
Average Time / Record: 0.02 s @ 44 records
Total Records: 44
Accuracy (correct/total): 100.00 %
Total COST IDR: 60.361
Total COST / Record: 1.372
Text Sample 
- Min 1 words, mean 12.73 words, max 51 words
- Min 2 characters, mean 77.64 characters, max 290 characters
```


## 4. Relation Finder

Used in youtube translate highlight.

Currently V4 - available in version `5.0.9` - 3 Sept 2024

```
Evaluation:
Data Variation (higher better): 10 unique sentences
Total Iteration: 10 iteration | 100 sentences
Mean Time (lower better): 68.07 s  / 6.81 s each sentence
Mean Accuracy Each Iteration (higher better): 100.00%, 100.00%, 100.00%, 100.00%, 100.00%, 100.00%, 100.00%, 100.00%, 100.00%, 100.00
Mean Accuracy (higher better): 100.00 %
Changes Level (lower better): max: 0.00 % | mean: 0.00 % | min: 0.00 %
Mean LLM Digest Fail (lower better): 0.000 %
Total COST IDR (lower better): 839.06 @ 8.39 each sentence
```