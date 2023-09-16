const number_to_word_form = [
  {
    numbers: [1000, 17, 1, 2, 3, 4, 5],
    lang: "id-ID",
    output: ["seribu", "tujuh belas", "satu", "dua", "tiga", "empat", "lima"],
  },
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
  // {
  //   numbers: [123, 4567, 89012, 4090],
  //   lang: "de-DE",
  //   output: [
  //     "einhundertdreiundzwanzig",
  //     "vierthausendfünfhundertsiebenundsechzig",
  //     "neunundachtzigtausendzwölf",
  //     "vier­tau­send neun­zig"
  //   ],
  // },
  // {
  //   numbers: [75, 890, 4500],
  //   lang: "it-IT",
  //   output: ["settantacinque", "ottocentonovanta", "quattromila cinquecento"],
  // },
  // {
  //   numbers: [100, 1000],
  //   lang: "ja-JP",
  //   output: ["百", "千"],
  // },
  // {
  //   numbers: [9876],
  //   lang: "zh-CN",
  //   output: ["九千八百七十六"],
  // },

  // {
  //   numbers: [369, 785, 8900],
  //   lang: "es-MX",
  //   output: ["trescientos sesenta y nueve", "setecientos ochenta y cinco", "ocho mil novecientos"]
  // },
  // {
  //   numbers: [4321],
  //   lang: "fr-CA",
  //   output: ["quatre mille trois cent vingt et un"]
  // },
  // {
  //   numbers: [123456],
  //   lang: "it-CH",
  //   output: ["centoventitremilaquattrocentocinquantasei"]
  // },
  // {
  //   numbers: [9999999],
  //   lang: "ja-JP",
  //   output: ["九百九十九万九千九百九十九"]
  // },
  // {
  //   numbers: [123456789],
  //   lang: "zh-TW",
  //   output: ["一億二千三百四十五萬六千七百八十九"]
  // }
];

export { number_to_word_form };
