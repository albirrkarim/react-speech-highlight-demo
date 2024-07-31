# LLM Engine

What's that ? I make a new engine that use LLM (open ai chat API) and good algorithm to achieve accurate and cost effective. Of course it tested with test case, here the report.

The cost defined in IDR (Indonesian Rupiah) when you currency is USD so just divide by 16.200. For example, IDR 16.200 is about USD $1.

Here the list of the engine:

## 1. Pronunciation Correction

This engine is used to correct the pronunciation of the term that contain equations or term that should be the pronounciation corrected.

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

## 2. Translate Engine

Evaluation report will available soon.

## 3. Relation Finder 

Used in youtube translate highlight.

Currently V3 - available in version `5.0.1`


```bash
Evaluation:
Total Time: 61.26 s
Average Time / Sentence: 6.13 s @ 10 sentences
Total Sentence: 10
Acc Each Test: 85.00%, 100.00%, 28.57%, 44.44%, 100.00%, 70.00%, 90.91%, 100.00%, 100.00%, 50.00
Mean Accuracy: 76.892 %
Total COST IDR: 80
Total COST / Sentence: 8
```