const test_case_roman_number_to_arabic = [
  // Common use case
  { roman: "I", spoken_as: "I" },
  { roman: "II", spoken_as: 2 },
  { roman: "III", spoken_as: 3 },

  { roman: "I am", spoken_as: "I am" },
  { roman: "I want to eat", spoken_as: "I want to eat" },
  { roman: "InvalidInput", spoken_as: "InvalidInput" },
  { roman: "I am Louise IX", spoken_as: "I am Louise IX" },
  { roman: "InvalidVII.", spoken_as: "InvalidVII." },

  // The roman number is all upppercase only or all lowercase
  { roman: "ini.", spoken_as: "ini." },
  { roman: "resmi.", spoken_as: "resmi." },

  { roman: "di ", spoken_as: "di " },
  { roman: "di", spoken_as: "di" },
  { roman: "Di", spoken_as: "Di" },
  { roman: "Di.", spoken_as: "Di." },

  { roman: " NI ", spoken_as: " NI " },
  { roman: " RI ", spoken_as: " RI " },
  { roman: " RI.", spoken_as: " RI." },

  // Follow with space
  { roman: "I ", spoken_as: "I " },
  { roman: "II ", spoken_as: 2 },
  { roman: "III ", spoken_as: 3 },

  // Follow with dot
  { roman: "I.", spoken_as: 1 },
  { roman: "II.", spoken_as: 2 },
  { roman: "III.", spoken_as: 3 },

  { roman: "i.", spoken_as: 1 },
  { roman: "ii.", spoken_as: 2 },
  { roman: "iii.", spoken_as: 3 },

  // Follow with comma
  { roman: "I,", spoken_as: 1 },
  { roman: "II,", spoken_as: 2 },
  { roman: "III,", spoken_as: 3 },

  // wrap with []
  { roman: "[I]", spoken_as: 1 },
  { roman: "[II]", spoken_as: 2 },
  { roman: "[III]", spoken_as: 3 },

  // wrap with ()
  { roman: "(I)", spoken_as: 1 },
  { roman: "(II)", spoken_as: 2 },
  { roman: "(III)", spoken_as: 3 },

  // wrap with ()
  { roman: "(i)", spoken_as: 1 },
  { roman: "(ii)", spoken_as: 2 },
  { roman: "(iv)", spoken_as: 4 },

  // Its alphabet numbering A. B.
  { roman: "C.", spoken_as: "C." }, // 100
  { roman: "D.", spoken_as: "D." }, // 200
  { roman: "L.", spoken_as: "L." }, // 50

  { roman: "v", spoken_as: "v" },
  { roman: "cm", spoken_as: "cm" },
  { roman: "m", spoken_as: "m" },
  { roman: "mm", spoken_as: "mm" },

  // More roman number
  { roman: "IV", spoken_as: "IV" },
  { roman: "V", spoken_as: "V" },
  { roman: "VI", spoken_as: "VI" },
  { roman: "VII", spoken_as: "VII" },
  { roman: "VIII", spoken_as: "VIII" },
  { roman: "IX", spoken_as: "IX" },
  { roman: "X", spoken_as: "X" },
  { roman: "XI", spoken_as: "XI" },
  { roman: "XX", spoken_as: "XX" },
  { roman: "XXX", spoken_as: "XXX" },
  { roman: "XL", spoken_as: "XL" },
  { roman: "L", spoken_as: "L" },
  { roman: "LX", spoken_as: "LX" },
  { roman: "LXX", spoken_as: "LXX" },
  { roman: "LXXX", spoken_as: "LXXX" },
  { roman: "XC", spoken_as: "XC" },
  { roman: "C", spoken_as: "C" },
  { roman: "CC", spoken_as: "CC" },
  { roman: "CD", spoken_as: "CD" },
  { roman: "D", spoken_as: "D" },
  { roman: "CM", spoken_as: "CM" },
  { roman: "M", spoken_as: "M" },
  { roman: "MM", spoken_as: "MM" },
  { roman: "MMM", spoken_as: "MMM" },
  { roman: "MCMXCIV", spoken_as: "MCMXCIV" },
  { roman: "MMXXIII", spoken_as: "MMXXIII" },
];

export { test_case_roman_number_to_arabic };
