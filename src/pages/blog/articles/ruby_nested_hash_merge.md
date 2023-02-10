---
layout: "@layouts/ArticleLayout.astro"
title:  "RubyでネストしているHashをいい感じにmergeする"
description: "深くネストしているHashデータをRubyのHash#mergeでmergeすると深い階層が上書きされてしまうので対応を模索した話"
date: "2022-01-30"
tags:
  - tech

---

## 結論

[deep_merge](https://rubygems.org/gems/deep_merge/versions/1.2.2)を使う。

## やりたいこと

こんな感じでネストされた Hash データがあるとする。

```ruby
def nested_hash_data
  {
    'target1' => {
      'category1_1' => {
        'resource1_1_1' => {
          'parameter' => 'hogehoge',
        },
        'resource1_1_2' => {
          'parameter' => 'hogehoge',
        },
      },
      'category1_2' => {
        'resource1_2_1' => {
          'parameter' => 'hogehoge',
        },
      },
    },
  }
end
```

「ある条件のときに特定の resource を追加したいよ〜」という要件が出てくる。  
このとき追加差分がわかりやすいように元データと同じ構造で定義していたとする。

```ruby
def ex_data
  {
    'target1' => {
      'category1_1' => {
        'resource1_1_3' => {
          'parameter' => 'hogehoge',
        },
      },
      'category1_2' => {
        'resource1_2_2' => {
          'parameter' => 'hogehoge',
        },
      },
    },
  }
end
```

A と B を単純に merge して、各 category に `resource1_1_3` と `resource1_2_2` を追加したい。期待値としては ↓ な感じ。

```ruby
{
  'target1' => {
    'category1_1' => {
      'resource1_1_1' => {
        'parameter' => 'hogehoge',
      },
      'resource1_1_2' => {
        'parameter' => 'hogehoge',
      },
      'resource1_1_3' => {
        'parameter' => 'hogehoge',
      },
    },
    'category1_2' => {
      'resource1_2_1' => {
        'parameter' => 'hogehoge',
      },
      'resource1_2_2' => {
        'parameter' => 'hogehoge',
      },
    },
  },
}
```

## 課題感

A と B を単純に merge メソッドに渡すと期待通りにマージされない。

```ruby
# nested_hash_data.merge(ex_data)
{
  'target1' => {
    'category1_1' => {
      'resource1_1_3' => {
        'parameter' => 'hogehoge',
      },
    },
    'category1_2' => {
      'resource1_2_2' => {
        'parameter' => 'hogehoge',
      },
    },
  },
}
```

## 解決方法

[deep_merge](https://rubygems.org/gems/deep_merge/versions/1.2.2)を使う。

```shell
$ gem install 'deep_merge'
```

```ruby
require 'deep_merge'
nested_hash_data.deep_merge(ex_data)
```

gem を別途入れないとネストされた Hash データをいい感じに merge できないみたい。

## 余談

今回は deep_merge を見ていたけど activesupport を入れると[いろいろと便利なメソッド](https://railsguides.jp/active_support_core_extensions.html)が提供されていそう。

## 環境

```shell
$ ruby --version
ruby 2.7.5p203 (2021-11-24 revision f69aeb8314) [arm64-darwin21]
```

使っている [deep_merge](https://rubygems.org/gems/deep_merge/versions/1.2.2) が Ruby の require version を `>=0` としているので何でも動くはず。
