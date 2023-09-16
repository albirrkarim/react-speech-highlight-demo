const mark_word_test_case = [
  {
    input: "email@gmail.com",
    output: `<spkn><sps><spw steps="1" sp="email@gmail.com">email@gmail.com</spw></sps></spkn>`,
    lang: "en-US",
  },
  {
    input: "Hello world!",
    output: `<spkn><sps><spw steps="1" sp="Hello">Hello</spw> <spw steps="1" sp="world!">world!</spw></sps></spkn>`,
    lang: "en-US",
  },
  {
    input: "12345 67890",
    output: `<spkn><sps><spw steps="-1" sp="12345">12345</spw> <spw steps="-1" sp="67890">67890</spw></sps></spkn>`,
    lang: "en-US",
  },
  {
    input: "This is a test sentence.",
    output: `<spkn><sps><spw steps="1" sp="This">This</spw> <spw steps="1" sp="is">is</spw> <spw steps="1" sp="a">a</spw> <spw steps="1" sp="test">test</spw> <spw steps="1" sp="sentence.">sentence.</spw></sps></spkn>`,
    lang: "en-US",
  },
  {
    input: "  Multiple   spaces    here  ",
    output: `<spkn><sps><spw steps="1" sp="Multiple">Multiple</spw> <spw steps="1" sp="spaces">spaces</spw> <spw steps="1" sp="here">here</spw> </sps></spkn>`,
    lang: "en-US",
  },
  {
    input: "",
    output: ``,
    lang: "en-US",
  },
  {
    input: "Hello, world!",
    output: `<spkn><sps><spw steps="1" sp="Hello,">Hello,</spw> <spw steps="1" sp="world!">world!</spw></sps></spkn>`,
    lang: "en-US",
  },
  {
    input: "12345!@#$%^&*",
    output: `<spkn><sps><spw steps="-1" sp="12345!@#$%^&*">12345!@#$%^&*</spw></sps></spkn>`,
    lang: "en-US",
  },
  {
    input: "  This     is     a    test.  ",
    output: `<spkn><sps><spw steps="1" sp="This">This</spw> <spw steps="1" sp="is">is</spw> <spw steps="1" sp="a">a</spw> <spw steps="1" sp="test.">test</spw></sps>. </spkn>`,
    lang: "en-US",
  },

  // Different Lang
  {
    input: "Hey there! How's it going?",
    output: `<spkn><sps><spw steps="1" sp="Hey">Hey</spw> <spw steps="1" sp="there!">there!</spw> <spw steps="1" sp="How's">How's</spw> <spw steps="1" sp="it">it</spw> <spw steps="1" sp="going?">going?</spw></sps></spkn>`,
    lang: "en-US",
  },
  {
    input: "Hola mundo!",
    output: `<spkn><sps><spw steps="1" sp="Hola">Hola</spw> <spw steps="1" sp="mundo!">mundo!</spw></sps></spkn>`,
    lang: "es-ES",
  },
  {
    input: "こんにちは、世界！",
    output: `<spkn><sps><spw steps="1" sp="こんにちは、世界！">こんにちは、世界！</spw></sps></spkn>`,
    lang: "ja-JP",
  },
  {
    input: "你好，世界！",
    output: `<spkn><sps><spw steps="1" sp="你好，世界！">你好，世界！</spw></sps></spkn>`,
    lang: "zh-CN",
  },
  {
    input: "Привет, мир!",
    output: `<spkn><sps><spw steps="1" sp="Привет,">Привет,</spw> <spw steps="1" sp="мир!">мир!</spw></sps></spkn>`,
    lang: "ru-RU",
  },
  {
    input: "مرحبًا، العالم!",
    output: `<spkn><sps><spw steps="1" sp="مرحبًا،">مرحبًا،</spw> <spw steps="1" sp="العالم!">العالم!</spw></sps></spkn>`,
    lang: "ar-SA",
  },
  {
    input: "Olá mundo!",
    output: `<spkn><sps><spw steps="1" sp="Olá">Olá</spw> <spw steps="1" sp="mundo!">mundo!</spw></sps></spkn>`,
    lang: "pt-BR",
  },
];

export { mark_word_test_case };
