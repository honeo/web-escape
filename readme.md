# web-escape
[honeo/web-escape](https://github.com/honeo/web-escape)  
[web-escape](https://www.npmjs.com/package/web-escape)

## なにこれ
HTML用に文字列をエスケープするやつ。

## 使い方
```sh
$ npm i -S web-escape
```
```js
import webEscape from 'web-escape';

webEscape(`& " ' > <`);
```
```js
"&amp; &quot; &#39; &gt; &lt;"
```
