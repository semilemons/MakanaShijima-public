
# MakanaShijima-public

[リンク](https://semilemons.github.io/ShijimaMakana-Publish/)

## 概要

「MakanaShijima-public」は、Gatsbyを使用して構築された静的ウェブサイトプロジェクトです。このプロジェクトは、最新のウェブ技術を活用して、効率的かつ動的なウェブ体験を提供することを目的としています。

## 特徴

- **Gatsbyフレームワーク**: 高速でモダンなサイトを構築
- **動的コンテンツ管理**: Contentful CMSを活用したコンテンツ管理
- **自動デプロイ**: GitHub Actionsを使用した簡単なデプロイプロセス

## ブランチ構成

- **開発ブランチ**: `makana` - 開発用の主要なブランチです。
- **デプロイブランチ**: `gh-pages` - GitHub Pagesにデプロイされるブランチです。

## 始め方

### 前提条件

このプロジェクトをローカルで実行するには、Node.jsがインストールされている必要があります。

### インストール方法

リポジトリをクローンし、必要な依存関係をインストールします。

```bash
git clone -b makana https://github.com/yourusername/MakanaShijima-public.git
cd MakanaShijima-public
npm install
```

## 使い方

ローカルでプロジェクトを実行するには、以下のコマンドを使用します。

```bash
npm start
```

## デプロイ

このプロジェクトはGitHub Actionsを利用して自動的に`gh-pages`ブランチにデプロイされます。デプロイはGitHub上での特定のイベント（例えば、`makana`ブランチへのプッシュ）によってトリガーされます。

## 貢献

このプロジェクトへの貢献に興味がある場合は、プルリクエストを通じて貢献いただけます。貢献前には、既存のissueを確認し、新しいissueを開くことをお勧めします。

## ライセンス

このプロジェクトは、[ライセンス名] ライセンスの下で公開されています。

## 作者または貢献者

- [あなたの名前やGitHubユーザー名]
