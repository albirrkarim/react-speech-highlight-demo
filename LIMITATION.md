# Limitation

This package is designed to be no limit, but for now it has some limitations:

1. The highlight is painted over your text (since 6.0), so CSS can set its background and shape but not the text's own color or weight. If you need that, mark the page yourself with `markTheWords(el)`: the highlight classes then go on your own `<sps>`/`<spw>` tags, as in 5.x.

(Before 6.0 the package put a `sps` tag around every sentence and a `spw` tag around every word into your page. It no longer changes your page's HTML.)

It's all the limitation that i know.