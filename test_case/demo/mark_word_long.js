const mark_word_test_case_long = [
  {
    input:
      "demo email@gmail.com Hello world! 12345 67890 This is a test sentence.   Multiple   spaces    here  Hello, world! 12345!@#$%^&*   This     is     a    test.  ",
    output: `<spkn><sps><spw steps="1" sp="demo">demo</spw> <spw steps="1" sp="email@gmail.com">email@gmail.com</spw> <spw steps="1" sp="Hello">Hello</spw> <spw steps="1" sp="world!">world!</spw> <spw steps="-1" sp="12345">12345</spw> <spw steps="-1" sp="67890">67890</spw> <spw steps="1" sp="This">This</spw> <spw steps="1" sp="is">is</spw> <spw steps="1" sp="a">a</spw> <spw steps="1" sp="test">test</spw> <spw steps="1" sp="sentence.">sentence</spw></sps>. <sps><spw steps="1" sp="Multiple">Multiple</spw> <spw steps="1" sp="spaces">spaces</spw> <spw steps="1" sp="here">here</spw> <spw steps="1" sp="Hello,">Hello,</spw> <spw steps="1" sp="world!">world!</spw> <spw steps="-1" sp="12345!@#$%^&amp;*">12345!@#$%^&amp;*</spw> <spw steps="1" sp="This">This</spw> <spw steps="1" sp="is">is</spw> <spw steps="1" sp="a">a</spw> <spw steps="1" sp="test.">test</spw></sps>. </spkn>`,
    lang: "en-US",
  },
  {
    input: "",
    output: ``,
    lang: "en-US",
  },
  {
    input: "<p>This is a <b>bold</b> statement.</p>",
    output: `<p><spkn><sps><spw steps="1" sp="This">This</spw> <spw steps="1" sp="is">is</spw> <spw steps="1" sp="a">a</spw> </sps></spkn><b><spkn><sps><spw steps="1" sp="bold">bold</spw></sps></spkn></b><spkn><sps> <spw steps="1" sp="statement.">statement.</spw></sps></spkn></p>`,
    lang: "en-US",
  },
  // Different Lang
  {
    input:
      "Hola mundo! Los gatos son animales maravillosos. Tienen un pelaje suave y son expertos cazadores. ¡Mira cómo cazan los gatos!",
    output: `<spkn><sps><spw steps="1" sp="Hola">Hola</spw> <spw steps="1" sp="mundo!">mundo!</spw> <spw steps="1" sp="Los">Los</spw> <spw steps="1" sp="gatos">gatos</spw> <spw steps="1" sp="son">son</spw> <spw steps="1" sp="animales">animales</spw> <spw steps="1" sp="maravillosos.">maravillosos</spw></sps>. <sps><spw steps="1" sp="Tienen">Tienen</spw> <spw steps="1" sp="un">un</spw> <spw steps="1" sp="pelaje">pelaje</spw> <spw steps="1" sp="suave">suave</spw> <spw steps="1" sp="y">y</spw> <spw steps="1" sp="son">son</spw> <spw steps="1" sp="expertos">expertos</spw> <spw steps="1" sp="cazadores.">cazadores</spw></sps>. <sps><spw steps="1" sp="¡Mira">¡Mira</spw> <spw steps="1" sp="cómo">cómo</spw> <spw steps="1" sp="cazan">cazan</spw> <spw steps="1" sp="los">los</spw> <spw steps="1" sp="gatos!">gatos!</spw></sps></spkn>`,
    lang: "es-ES",
  },
  {
    input:
      "Привет, мир! Коты - это удивительные животные. У них мягкая шерсть, и они отлично ловят мышей. Посмотри, как они играют с мячом!",
    output: `<spkn><sps><spw steps="1" sp="Привет,">Привет,</spw> <spw steps="1" sp="мир!">мир!</spw> <spw steps="1" sp="Коты">Коты</spw> <spw steps="1" sp="-">-</spw> <spw steps="1" sp="это">это</spw> <spw steps="1" sp="удивительные">удивительные</spw> <spw steps="1" sp="животные.">животные</spw></sps>. <sps><spw steps="1" sp="У">У</spw> <spw steps="1" sp="них">них</spw> <spw steps="1" sp="мягкая">мягкая</spw> <spw steps="1" sp="шерсть,">шерсть,</spw> <spw steps="1" sp="и">и</spw> <spw steps="1" sp="они">они</spw> <spw steps="1" sp="отлично">отлично</spw> <spw steps="1" sp="ловят">ловят</spw> <spw steps="1" sp="мышей.">мышей</spw></sps>. <sps><spw steps="1" sp="Посмотри,">Посмотри,</spw> <spw steps="1" sp="как">как</spw> <spw steps="1" sp="они">они</spw> <spw steps="1" sp="играют">играют</spw> <spw steps="1" sp="с">с</spw> <spw steps="1" sp="мячом!">мячом!</spw></sps></spkn>`,
    lang: "ru-RU",
  },
  {
    input:
      "القطط هي حيوانات رائعة. لديهم فراء ناعم ويعرفون كيف يصطادون الفئران بشكل ممتاز. انظر كيف يلعبون مع الكرة!",
    output: `<spkn><sps><spw steps="1" sp="القطط">القطط</spw> <spw steps="1" sp="هي">هي</spw> <spw steps="1" sp="حيوانات">حيوانات</spw> <spw steps="1" sp="رائعة.">رائعة</spw></sps>. <sps><spw steps="1" sp="لديهم">لديهم</spw> <spw steps="1" sp="فراء">فراء</spw> <spw steps="1" sp="ناعم">ناعم</spw> <spw steps="1" sp="ويعرفون">ويعرفون</spw> <spw steps="1" sp="كيف">كيف</spw> <spw steps="1" sp="يصطادون">يصطادون</spw> <spw steps="1" sp="الفئران">الفئران</spw> <spw steps="1" sp="بشكل">بشكل</spw> <spw steps="1" sp="ممتاز.">ممتاز</spw></sps>. <sps><spw steps="1" sp="انظر">انظر</spw> <spw steps="1" sp="كيف">كيف</spw> <spw steps="1" sp="يلعبون">يلعبون</spw> <spw steps="1" sp="مع">مع</spw> <spw steps="1" sp="الكرة!">الكرة!</spw></sps></spkn>`,
    lang: "ar-SA",
  },
  {
    input:
      "Os gatos são animais incríveis. Eles têm um pelo macio e são excelentes caçadores. Veja como eles brincam com a bola!",
    output: `<spkn><sps><spw steps="1" sp="Os">Os</spw> <spw steps="1" sp="gatos">gatos</spw> <spw steps="1" sp="são">são</spw> <spw steps="1" sp="animais">animais</spw> <spw steps="1" sp="incríveis.">incríveis</spw></sps>. <sps><spw steps="1" sp="Eles">Eles</spw> <spw steps="1" sp="têm">têm</spw> <spw steps="1" sp="um">um</spw> <spw steps="1" sp="pelo">pelo</spw> <spw steps="1" sp="macio">macio</spw> <spw steps="1" sp="e">e</spw> <spw steps="1" sp="são">são</spw> <spw steps="1" sp="excelentes">excelentes</spw> <spw steps="1" sp="caçadores.">caçadores</spw></sps>. <sps><spw steps="1" sp="Veja">Veja</spw> <spw steps="1" sp="como">como</spw> <spw steps="1" sp="eles">eles</spw> <spw steps="1" sp="brincam">brincam</spw> <spw steps="1" sp="com">com</spw> <spw steps="1" sp="a">a</spw> <spw steps="1" sp="bola!">bola!</spw></sps></spkn>`,
    lang: "pt-BR",
  },
  {
    input:
      "猫（ねこ）は、人々にとって特別な存在です。彼らの愛らしい容姿と独立した性格は、世界中で多くの人々に魅力を与えています。猫は古代エジプトから日本まで、さまざまな文化で崇拝され、愛されてきました。",
    output: `<spkn><sps><spw steps="1" sp="猫（ねこ）は、人々にとって特別な存在です。">猫（ねこ）は、人々にとって特別な存在です</spw></sps>。<sps><spw steps="1" sp="。彼らの愛らしい容姿と独立した性格は、世界中で多くの人々に魅力を与えています。">彼らの愛らしい容姿と独立した性格は、世界中で多くの人々に魅力を与えています</spw></sps>。<sps><spw steps="1" sp="。猫は古代エジプトから日本まで、さまざまな文化で崇拝され、愛されてきました。">猫は古代エジプトから日本まで、さまざまな文化で崇拝され、愛されてきました</spw></sps>。</spkn>`,
    lang: "jp-JP",
  },
  {
    input: `你好，世界！猫的奥秘：与这些神秘生物更亲近
  
      猫，是一种令人着迷的动物，它们已经与人类共同生活了数千年。无论是它们的优雅走姿，还是那双独特的瞳孔，猫总是引起人们的兴趣和喜爱。今天，我们将深入探讨这些神秘生物，了解它们的行为、特点以及如何更亲近它们。`,
    output: `<spkn><sps><spw steps="1" sp="你好，世界！猫的奥秘：与这些神秘生物更亲近">你好，世界！猫的奥秘：与这些神秘生物更亲近</spw> <spw steps="1" sp="猫，是一种令人着迷的动物，它们已经与人类共同生活了数千年。">猫，是一种令人着迷的动物，它们已经与人类共同生活了数千年</spw></sps>。<sps><spw steps="1" sp="。无论是它们的优雅走姿，还是那双独特的瞳孔，猫总是引起人们的兴趣和喜爱。">无论是它们的优雅走姿，还是那双独特的瞳孔，猫总是引起人们的兴趣和喜爱</spw></sps>。<sps><spw steps="1" sp="。今天，我们将深入探讨这些神秘生物，了解它们的行为、特点以及如何更亲近它们。">今天，我们将深入探讨这些神秘生物，了解它们的行为、特点以及如何更亲近它们</spw></sps>。</spkn>`,
    lang: "zh-CN",
  },
  {
    input: `Kediler harika hayvanlardır. Onların yumuşak tüyleri vardır ve mükemmel avcılardır. Topla nasıl oynadıklarını gör!`,
    output: `<spkn><sps><spw steps="1" sp="Kediler">Kediler</spw> <spw steps="1" sp="harika">harika</spw> <spw steps="1" sp="hayvanlardır.">hayvanlardır</spw></sps>. <sps><spw steps="1" sp="Onların">Onların</spw> <spw steps="1" sp="yumuşak">yumuşak</spw> <spw steps="1" sp="tüyleri">tüyleri</spw> <spw steps="1" sp="vardır">vardır</spw> <spw steps="1" sp="ve">ve</spw> <spw steps="1" sp="mükemmel">mükemmel</spw> <spw steps="1" sp="avcılardır.">avcılardır</spw></sps>. <sps><spw steps="1" sp="Topla">Topla</spw> <spw steps="1" sp="nasıl">nasıl</spw> <spw steps="1" sp="oynadıklarını">oynadıklarını</spw> <spw steps="1" sp="gör!">gör!</spw></sps></spkn>`,
    lang: "tr-TR",
  },
];

export { mark_word_test_case_long };
