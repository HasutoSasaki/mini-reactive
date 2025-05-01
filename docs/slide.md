---
marp: true
theme: custom
header: "Vue中級者向け勉強会"
---

<!--
class: slide
header: "はじめに"
 -->

## Vue 中級者向け勉強会 ✨

---

<!--
class: slide
header: "はじめに"
 -->

## アジェンダ

1. 自己紹介と講義の目的（2 分）
2. Vue.js とは（3 分）
3. Vue.js を構成する主要な要素(3 分)
4. Vue.js の設計を見てみよう (4 分)
5. リアクティビティシステムの前提知識(5 分)
6. ミニリアクティビティシステムを作ってみよう！
7. まとめと質疑応答（2 分）

---

<!--
class: slide
header: "1. 自己紹介と講義の目的"
 -->

# 自己紹介と講義の目的

---

<!--
class: slide
header: "1. 自己紹介と講義の目的"
 -->

## 自己紹介

ポジション：フロント・バックエンドエンジニア
業務：ユーザー向けの Web アプリケーション構築、社内向けのシステム構築
言語・技術：Vue,Nuxt,TypeScript,Node.js,AWS

---

<!--
class: slide
header: "1. 自己紹介と講義の目的"
 -->

## 講義の目的

# Vue のリアクティブシステムの仕組みを知る！✨

---

<!--
class: slide
header: "2. Vue.js とは"
 -->

# Vue.js とは

---

<!--
class: slide
header: "2. Vue.js とは"
 -->

## Vue.js とは

> Vue（発音は /vjuː/、view と同様）は、ユーザーインターフェースの構築のための JavaScript フレームワークです。標準的な HTML、CSS、JavaScript の上に構築され、あらゆる複雑さのユーザーインターフェースを効率的に開発するのに役立つ、宣言的でコンポーネントベースのプログラミングモデルを提供します。

[Vue.js とは](https://ja.vuejs.org/guide/introduction.html#what-is-vue)

---

<!--
class: slide
header: "3. Vue.js を構成する主要な要素"
 -->

# Vue.js を構成する主要な要素

---

<!--
class: slide
header: "3. Vue.js を構成する主要な要素"
 -->

## ランタイムとコンパイラ

[Vue.js を構成する主要な要素](https://book.chibivue.land/ja/00-introduction/030-vue-core-components.html)

---

<!--
class: slide
header: "4. Vue.js の設計を見てみよう"
 -->

## ランタイムのパッケージ設計

中でもランタイムの部分を見ていく

---

<!--
class: slide
header: "4. Vue.js の設計を見てみよう"
 -->

## runtime-dom と runtime-core

---

<!--
class: slide
header: "4. Vue.js の設計を見てみよう"
 -->

## runtime-dom

> runtime-dom というのは名前の通り，DOM に依存した実装を置くディレクトリです．ざっくり「ブラウザに依存した処理」という理解をしてもらえれば問題ないです．
> 例を挙げると querySelector や createElement などの DOM 操作が含まれます．

---

<!--
class: slide
header: "4. Vue.js の設計を見てみよう"
 -->

## runtime-core

> runtime-core ではそういった処理は書かず，あくまで純粋な TypeScript の世界の中で Vue.js のランタイムに関するコアロジックを記述するような設計になっています．
> 例を挙げると，仮想 DOM に関する実装であったり，コンポーネントに関する実装だったりです．

---

<!--
class: slide
header: "4. Vue.js の設計を見てみよう"
 -->

## runtime-dom と runtime-core の関係

renderer の設計を軽く見てみよう！✨

[パッケージ設計](https://book.chibivue.land/ja/10-minimum-example/015-package-architecture.html#%E3%83%8F%E3%82%9A%E3%83%83%E3%82%B1%E3%83%BC%E3%82%B7%E3%82%99%E3%81%AE%E8%A8%AD%E8%A8%88)

---

<!--
class: slide
header: "4. Vue.js の設計を見てみよう"
 -->

## Tips:ファクトリ関数とは

> ファクトリパターン (factory pattern) では、新しいオブジェクトを作成するためにファクトリ関数 (factory function) を使用します。関数が new キーワードを使わずに新しいオブジェクトを返すとき、その関数はファクトリ関数であるといえます。

[デザインパターン集：ファクトリパターン](https://www.patterns.dev/vanilla/factory-pattern/)

---

<!--
class: slide
header: "5. リアクティビティシステムの前提知識"
 -->

## リアクティビティシステムとは？

> Vue の最も特徴的な機能の 1 つは、控えめな Reactivity System です。コンポーネントの状態はリアクティブな JavaScript オブジェクトで構成されています。状態を変更すると、ビュー (View) が更新されます。

[引用元](https://ja.vuejs.org/guide/extras/reactivity-in-depth)

---

<!--
class: slide
header: "6. ミニリアクティビティシステムを作ってみよう！"
 -->

## ミニリアクティビティシステムを作ってみよう！

1. `Proxy Object` について
2. `JavaScript` で `mini-reactive` を書いてみよう！

---

<!--
class: slide
header: "6. ミニリアクティビティシステムを作ってみよう！"
 -->

## Proxy Object とは

[MDN : Proxy](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy)
[参考記事](https://zenn.dev/oreo2990/articles/a28abc47bc22b5)

---

<!--
class: slide
header: "6. ミニリアクティビティシステムを作ってみよう！"
 -->

## ミニリアクティブを作って見てみよう！

※時間の関係でできたものを解説します

---

<!--
class: slide
header: "7. まとめ　質疑応答"
 -->

## まとめ

---

<!--
class: slide
header: "7. まとめ　質疑応答"
 -->

## 質疑応答

---
