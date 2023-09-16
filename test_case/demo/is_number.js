const test_case_is_number = [
  { input: "1000", is_number: true },
  {
    input: "100.000",
    is_number: true,
  },
  {
    input: "100.xxxx",
    is_number: false,
  },
  { input: "1000", is_number: true },
  { input: "100.000", is_number: true },
  { input: "100.xxxx", is_number: false },
  { input: "1,000,000", is_number: true },
  { input: "3.14", is_number: true },
  { input: "1,234,567.89", is_number: true },
  { input: "abc", is_number: false },
  { input: "", is_number: false },
  { input: "   42   ", is_number: true },
  { input: "-500", is_number: true }, // Negative number,
  { input: "0.25", is_number: true }, // Decimal number less than 1
  { input: "-0.5", is_number: true }, // Negative decimal number
  { input: "12345", is_number: true }, // Large positive integer
  { input: "-9876", is_number: true }, // Large negative integer
  { input: "3.14159265359", is_number: true }, // Long decimal number
  { input: "1,000,000,000", is_number: true }, // Billion
  { input: "1.23e5", is_number: true }, // Scientific notation
  { input: "NaN", is_number: false }, // Not-a-Number
  { input: "Infinity", is_number: false }, // Infinity,
  { input: "-Infinity", is_number: false }, // Negative Infinity
  { input: "0", is_number: true }, // Zero
  { input: "0.0", is_number: true }, // Zero with decimal
  { input: "+1000", is_number: true }, // Positive number with '+' symbol
  { input: "-0", is_number: true }, // Negative zero
  { input: "1/2", is_number: true }, // Fraction
  { input: "42%", is_number: false }, // Percentage
  { input: "0xABC", is_number: false }, // Hexadecimal
  { input: "0b1010", is_number: false }, // Binary
];

export { test_case_is_number };
