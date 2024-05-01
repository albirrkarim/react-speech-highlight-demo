const markWordTestCaseLong = [
  {
    input:
      "demo email@gmail.com Hello world! 12345 67890 This is a test sentence.   Multiple   spaces    here  Hello, world! 12345!@#$%^&*   This     is     a    test.  ",
    output: `<spkn><sps><spw>demo</spw> <spw>email@gmail.com</spw> <spw>Hello</spw> <spw>world!</spw> <spw steps="-1">12345</spw> <spw steps="-1">67890</spw> <spw>This</spw> <spw>is</spw> <spw>a</spw> <spw>test</spw> <spw sp="sentence.">sentence</spw></sps>. <sps><spw>Multiple</spw> <spw>spaces</spw> <spw>here</spw> <spw>Hello,</spw> <spw>world!</spw> <spw steps="-1">12345!@#$%^&amp;*</spw> <spw>This</spw> <spw>is</spw> <spw>a</spw> <spw sp="test.">test</spw></sps>. </spkn>`,
    lang: "en-US",
  },
  {
    input: "",
    output: ``,
    lang: "en-US",
  },
  {
    input: "<p>This is a <b>bold</b> statement.</p>",
    output: `<p><spkn><sps><spw>This</spw> <spw>is</spw> <spw>a</spw> </sps></spkn><b><spkn><sps><spw>bold</spw></sps></spkn></b><spkn><sps> <spw>statement.</spw></sps></spkn></p>`,
    lang: "en-US",
  },
  // Different Lang
  {
    input:
      "Hola mundo! Los gatos son animales maravillosos. Tienen un pelaje suave y son expertos cazadores. ¡Mira cómo cazan los gatos!",
    output: `<spkn><sps><spw>Hola</spw> <spw>mundo!</spw> <spw>Los</spw> <spw>gatos</spw> <spw>son</spw> <spw>animales</spw> <spw sp="maravillosos.">maravillosos</spw></sps>. <sps><spw>Tienen</spw> <spw>un</spw> <spw>pelaje</spw> <spw>suave</spw> <spw>y</spw> <spw>son</spw> <spw>expertos</spw> <spw sp="cazadores.">cazadores</spw></sps>. <sps><spw>¡Mira</spw> <spw>cómo</spw> <spw>cazan</spw> <spw>los</spw> <spw>gatos!</spw></sps></spkn>`,
    lang: "es-ES",
  },
  {
    input:
      "Привет, мир! Коты - это удивительные животные. У них мягкая шерсть, и они отлично ловят мышей. Посмотри, как они играют с мячом!",
    output: `<spkn><sps><spw>Привет,</spw> <spw>мир!</spw> <spw>Коты</spw> <spw>-</spw> <spw>это</spw> <spw>удивительные</spw> <spw sp="животные.">животные</spw></sps>. <sps><spw>У</spw> <spw>них</spw> <spw>мягкая</spw> <spw>шерсть,</spw> <spw>и</spw> <spw>они</spw> <spw>отлично</spw> <spw>ловят</spw> <spw sp="мышей.">мышей</spw></sps>. <sps><spw>Посмотри,</spw> <spw>как</spw> <spw>они</spw> <spw>играют</spw> <spw>с</spw> <spw>мячом!</spw></sps></spkn>`,
    lang: "ru-RU",
  },
  {
    input:
      "القطط هي حيوانات رائعة. لديهم فراء ناعم ويعرفون كيف يصطادون الفئران بشكل ممتاز. انظر كيف يلعبون مع الكرة!",
    output: `<spkn><sps><spw>القطط</spw> <spw>هي</spw> <spw>حيوانات</spw> <spw sp="رائعة.">رائعة</spw></sps>. <sps><spw>لديهم</spw> <spw>فراء</spw> <spw>ناعم</spw> <spw>ويعرفون</spw> <spw>كيف</spw> <spw>يصطادون</spw> <spw>الفئران</spw> <spw>بشكل</spw> <spw sp="ممتاز.">ممتاز</spw></sps>. <sps><spw>انظر</spw> <spw>كيف</spw> <spw>يلعبون</spw> <spw>مع</spw> <spw>الكرة!</spw></sps></spkn>`,
    lang: "ar-SA",
  },
  {
    input:
      "Os gatos são animais incríveis. Eles têm um pelo macio e são excelentes caçadores. Veja como eles brincam com a bola!",
    output: `<spkn><sps><spw>Os</spw> <spw>gatos</spw> <spw>são</spw> <spw>animais</spw> <spw sp="incríveis.">incríveis</spw></sps>. <sps><spw>Eles</spw> <spw>têm</spw> <spw>um</spw> <spw>pelo</spw> <spw>macio</spw> <spw>e</spw> <spw>são</spw> <spw>excelentes</spw> <spw sp="caçadores.">caçadores</spw></sps>. <sps><spw>Veja</spw> <spw>como</spw> <spw>eles</spw> <spw>brincam</spw> <spw>com</spw> <spw>a</spw> <spw>bola!</spw></sps></spkn>`,
    lang: "pt-BR",
  },
  {
    input:
      "猫（ねこ）は、人々にとって特別な存在です。彼らの愛らしい容姿と独立した性格は、世界中で多くの人々に魅力を与えています。猫は古代エジプトから日本まで、さまざまな文化で崇拝され、愛されてきました。",
    output: `<spkn><sps full_s="猫（ねこ）は、人々にとって特別な存在です。"><spw>猫</spw>（<spw>ね</spw><spw>こ</spw>）<spw>は</spw>、<spw>人</spw>々<spw>に</spw><spw>と</spw><spw>っ</spw><spw>て</spw><spw>特</spw><spw>別</spw><spw>な</spw><spw>存</spw><spw>在</spw><spw>で</spw><spw>す</spw></sps>。<sps full_s="彼らの愛らしい容姿と独立した性格は、世界中で多くの人々に魅力を与えています。"><spw>彼</spw><spw>ら</spw><spw>の</spw><spw>愛</spw><spw>ら</spw><spw>し</spw><spw>い</spw><spw>容</spw><spw>姿</spw><spw>と</spw><spw>独</spw><spw>立</spw><spw>し</spw><spw>た</spw><spw>性</spw><spw>格</spw><spw>は</spw>、<spw>世</spw><spw>界</spw><spw>中</spw><spw>で</spw><spw>多</spw><spw>く</spw><spw>の</spw><spw>人</spw>々<spw>に</spw><spw>魅</spw><spw>力</spw><spw>を</spw><spw>与</spw><spw>え</spw><spw>て</spw><spw>い</spw><spw>ま</spw><spw>す</spw></sps>。<sps full_s="猫は古代エジプトから日本まで、さまざまな文化で崇拝され、愛されてきました。"><spw>猫</spw><spw>は</spw><spw>古</spw><spw>代</spw><spw>エ</spw><spw>ジ</spw><spw>プ</spw><spw>ト</spw><spw>か</spw><spw>ら</spw><spw>日</spw><spw>本</spw><spw>ま</spw><spw>で</spw>、<spw>さ</spw><spw>ま</spw><spw>ざ</spw><spw>ま</spw><spw>な</spw><spw>文</spw><spw>化</spw><spw>で</spw><spw>崇</spw><spw>拝</spw><spw>さ</spw><spw>れ</spw>、<spw>愛</spw><spw>さ</spw><spw>れ</spw><spw>て</spw><spw>き</spw><spw>ま</spw><spw>し</spw><spw>た</spw></sps>。</spkn>`,
    lang: "jp-JP",
  },
  {
    input: `你好，世界！猫的奥秘：与这些神秘生物更亲近
  
      猫，是一种令人着迷的动物，它们已经与人类共同生活了数千年。无论是它们的优雅走姿，还是那双独特的瞳孔，猫总是引起人们的兴趣和喜爱。今天，我们将深入探讨这些神秘生物，了解它们的行为、特点以及如何更亲近它们。`,
    output: `<spkn><sps full_s="你好，世界！猫的奥秘：与这些神秘生物更亲近。"><spw>你</spw><spw>好</spw>，<spw>世</spw><spw>界</spw>！<spw>猫</spw><spw>的</spw><spw>奥</spw><spw>秘</spw>：<spw>与</spw><spw>这</spw><spw>些</spw><spw>神</spw><spw>秘</spw><spw>生</spw><spw>物</spw><spw>更</spw><spw>亲</spw><spw>近</spw></sps></spkn><br><spkn><sps full_s="  。"><spw> </spw><spw> </spw></sps></spkn><br><spkn><sps full_s="      猫，是一种令人着迷的动物，它们已经与人类共同生活了数千年。"><spw> </spw><spw> </spw><spw> </spw><spw> </spw><spw> </spw><spw> </spw><spw>猫</spw>，<spw>是</spw><spw>一</spw><spw>种</spw><spw>令</spw><spw>人</spw><spw>着</spw><spw>迷</spw><spw>的</spw><spw>动</spw><spw>物</spw>，<spw>它</spw><spw>们</spw><spw>已</spw><spw>经</spw><spw>与</spw><spw>人</spw><spw>类</spw><spw>共</spw><spw>同</spw><spw>生</spw><spw>活</spw><spw>了</spw><spw>数</spw><spw>千</spw><spw>年</spw></sps>。<sps full_s="无论是它们的优雅走姿，还是那双独特的瞳孔，猫总是引起人们的兴趣和喜爱。"><spw>无</spw><spw>论</spw><spw>是</spw><spw>它</spw><spw>们</spw><spw>的</spw><spw>优</spw><spw>雅</spw><spw>走</spw><spw>姿</spw>，<spw>还</spw><spw>是</spw><spw>那</spw><spw>双</spw><spw>独</spw><spw>特</spw><spw>的</spw><spw>瞳</spw><spw>孔</spw>，<spw>猫</spw><spw>总</spw><spw>是</spw><spw>引</spw><spw>起</spw><spw>人</spw><spw>们</spw><spw>的</spw><spw>兴</spw><spw>趣</spw><spw>和</spw><spw>喜</spw><spw>爱</spw></sps>。<sps full_s="今天，我们将深入探讨这些神秘生物，了解它们的行为、特点以及如何更亲近它们。"><spw>今</spw><spw>天</spw>，<spw>我</spw><spw>们</spw><spw>将</spw><spw>深</spw><spw>入</spw><spw>探</spw><spw>讨</spw><spw>这</spw><spw>些</spw><spw>神</spw><spw>秘</spw><spw>生</spw><spw>物</spw>，<spw>了</spw><spw>解</spw><spw>它</spw><spw>们</spw><spw>的</spw><spw>行</spw><spw>为</spw>、<spw>特</spw><spw>点</spw><spw>以</spw><spw>及</spw><spw>如</spw><spw>何</spw><spw>更</spw><spw>亲</spw><spw>近</spw><spw>它</spw><spw>们</spw></sps>。</spkn>`,
    lang: "zh-CN",
  },
  {
    input: `Kediler harika hayvanlardır. Onların yumuşak tüyleri vardır ve mükemmel avcılardır. Topla nasıl oynadıklarını gör!`,
    output: `<spkn><sps><spw>Kediler</spw> <spw>harika</spw> <spw sp="hayvanlardır.">hayvanlardır</spw></sps>. <sps><spw>Onların</spw> <spw>yumuşak</spw> <spw>tüyleri</spw> <spw>vardır</spw> <spw>ve</spw> <spw>mükemmel</spw> <spw sp="avcılardır.">avcılardır</spw></sps>. <sps><spw>Topla</spw> <spw>nasıl</spw> <spw>oynadıklarını</spw> <spw>gör!</spw></sps></spkn>`,
    lang: "tr-TR",
  },
];

export { markWordTestCaseLong };
