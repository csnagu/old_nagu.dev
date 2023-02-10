---
layout: "@layouts/ArticleLayout.astro"
title: 'Ansible トレイルマップのMt.YAMLに登ってみた'
description: Red Hat から出ている Ansible トレーニングの一つである Mt.YAML を登ってみたおぼえがき
date: 2021-08-08
tags:
  - tech

---

## 背景
某所で一部Ansibleを使っていくことになって、ほとんど何も知らなかったのでTwitterで何もわからんbotになっていたら教えてもらいました。

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">ansibleなんもわからん</p>&mdash; なぐ (@cs_nagu) <a href="https://twitter.com/cs_nagu/status/1421097609104527363?ref_src=twsrc%5Etfw">July 30, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr"><a href="https://t.co/Iquh26pgZQ">https://t.co/Iquh26pgZQ</a><br><br>こういうのいかがでしょうか</p>&mdash; すぎむら (@sugitk) <a href="https://twitter.com/sugitk/status/1421332570915016706?ref_src=twsrc%5Etfw">July 31, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


ありがとうございますmm

## ansible トレイルマップとは

https://www.redhat.com/ja/explore/ansible/trailmap

> Ansibleトレイルマップは、Ansibleを学習し活用する過程を旅になぞらえてお伝えする手引書です。道に迷うことなく歩みを進め、Ansibleの世界を満喫しつつ経験を積み、楽しみながら自らの糧にできることを目指しています。

Red Hat から出ている & 完全日本語なので安心して取り組めそう。

## ヤムル山とは

https://www.redhat.com/ja/explore/ansible/trailmap/yaml

> ヤムル山では、Ansibleの基礎、自分自身の作業・タスクをAnsibleで自動化するために参考となる情報源やその活用方法について理解することができます。これからAnsibleを活用して自動化に取り組んでいこうとしている方におすすめの初級者コースです。

## ヤムル山をやってみたときの状態
* 業務でChefを使った構成管理を2年弱やってる
* YAMLﾁｮｯﾄﾜｶﾙ
* Ansibleなんもわからん

## ヤムル山を通して得られたもの

* Ansibleの簡単な用語や構成
* 変数、Loop、条件分岐、テンプレート、Roleなどの基本文法
* 実際に手を動かして環境の構成をいじる経験
* もっと知りたくなったときに参照するサイト

## 感想戦

### step 1-2-3

Ansibleが解決する課題。Chefなどの他の構成管理ツールと概ね同じにみえる。
STEP2の「Ansible 自動化ジャーニー」は自動化のレベルがまとめられているので印象に残ってる。

Playbook、moduleなどの用語が整理されていて助かりました。Ansibleの基本用語集ありがたや～🙏

エージェントレスって聞いててどうやって動いてるんだ～と思っていたけど、Control Nodeというのがあるのか～など学びがあった。

下記のような図もちょくちょくあって理解が捗ってよきです。

![Ansible Mt.YAML](https://www.redhat.com/cms/managed-files/step3_fig2.png 'Ansible Mt.YAML')

### step 4

実際にAnsibleをハンズオンっぽくPlaybookを書いて実行してみるターン。

[Katacoda](https://www.katacoda.com/)というブラウザでインタラクティブに操作しながら学べるプラットフォーム上にコンテンツや環境が用意されていて敷居がめちゃくちゃ低い。GithubアカウントやTwitterアカウント連携ですぐに使いはじめることができて便利。
Katacoda環境はExpireTimeが決まってるからちょっと休憩（n時間）をすると使ってた環境が綺麗になくなるからやるときは一気に走り切るのが吉。

> The environment has expired. Please refresh to get a new environment.

Chef cookbookとかの構成管理ツール経験があると複雑なことしない限り大体Ansible側の処理のマッピングができた（気がする）。
（関連領域の知識が活かされてるのを感じて気持ちよかった）

予め各種ディレクトリや *.yml ファイルが作られてるためtabキーの予測が効いてストレスなく進められた。細かい気配りに感謝。

### step 5-6

Ansibleを使っていくにあたってのノウハウがまとめられていた。必要になったときに読み返すと良さそう。

---

一日あれば十分に終わるボリューム感なのに学びが多くて良きでした。
わからない部分の調べ方もなんとなくわかってきたし、これでなんとか既存のコードを読み進められそうだ ٩( ᐛ )و