---
layout: "@layouts/ArticleLayout.astro"
title: '入門 監視を読んでみたおぼえがき'
description: "入門 監視という本を読んでみたおぼえがき"
date: "2019-10-07"
tags:
  - book
---

## はじめに

Mike Julian 著、松浦 隼人 訳な『入門 監視 ――モダンなモニタリングのためのデザインパターン』を読んだおぼえがき。

そもそも『入門 監視』を購入するに至った経緯についてだが、2019 年の下期からログのプラットフォームを運用するチームに配属となった。この時点では「ログや監視まるでわからん」といった感想しか持っていなかったため、流石に「これはいかん」となり、少し前に自分の TL で話題になっていた『入門 監視』を読み始めた。

## 入門 監視を読んでみて

『入門 監視』は、監視ツールに依存しない監視の基本だったり、なぜ監視するのかといった、基本的な部分を丁寧に解説してくれている。
監視のデザインパターン、ビジネス KPI・フロントエンド・アプリ・サーバ・ネットワークなどコンテンツがたくさんあるが、各章では「何を、なんのために、どのように監視するのか」がまとめられていて非常に良い内容だと思う。

そのため、自分のような「どんな背景があって XXX を監視しているのか」「そもそもなぜ監視するのか」といった基本的な部分を補うのに最適であったように思う。

また、OSS バンザイな姿勢ではいけないことを学んだ。

その他にも、運用に関する手順書を作成するのは作業途中に人間の判断が必要な場合だけにして、ログやメトリクスを監視することで積極的に自動化してしまおうといった話題は面白かった。

最後の章には総まとめの例題がある。フィクションのコンサルタントを例に、本書を通して学ぶ「何を、なんのために、どのように監視するのか」を確認させてくれる内容となっていた。全体を思い返すのに非常にいい構成だったと思う。

もう少し実務を積んでから読み返すことで新たな気付きがありそうな気がとてもしている。定期的に読み直していきたい。

https://www.oreilly.co.jp/books/9784873118642/