# sample-nuxt-hasura

## 概要説明

Nuxt3 + apollo-client(graphql client) + Hasura(graphql server)
で動作するサンプルアプリ  
docker compose up すると最初に postgresql が起動し、サンプル用の初期データが投入される。その後 Hasura がその postgresql をデータ元の DB として利用しながら起動する。両方が起動し終わったら Nuxt のアプリが起動する。

## 実行方法

#### 1. とりあえず git clone してくる

```
git clone git@github.com:skydisc-laine/sample-nuxt-hasura.git
```

#### 2. 落としてきたディレクトリに移動する

```
cd sample-nuxt-hasura
```

#### 3. 実行する(※サンプルが起動する)

```shell
docker compose up
```

#### 4. ブラウザでアクセスするとアプリの動作が確認できる

http://localhost:8080/console ← Hasura の管理コンソール(Admin Secret 求められたら hogehoge で OK)

http://localhost:2000 ← Nuxt のアプリのホーム画面

## ディレクトリの説明

furukawa-sample-postgresql

```
└── docker-entrypoint-initdb.d
    ├── 01_create_tables.sql ← テーブル作成のSQL
    └── 02_insert_data.sql   ← 少量のサンプルデータインサート用のSQL
```

furukawa-sample-hasura

```
├── Dockerfile
└── hasura ← このディレクトリ以下がHasuraのメタデータフォルダ
    ├── config.yaml
    ├── metadata
    │   ├── actions.graphql
    │   ├── actions.yaml
    │   ├── allow_list.yaml
    │   ├── api_limits.yaml
    │   ├── backend_configs.yaml
    │   ├── cron_triggers.yaml
    │   ├── databases
    │   │   ├── databases.yaml
    │   │   └── sample
    │   │       └── tables
    │   │           ├── public_products.yaml
    │   │           ├── public_receipt_items.yaml
    │   │           ├── public_receipts.yaml
    │   │           ├── public_users.yaml
    │   │           └── tables.yaml
    │   ├── graphql_schema_introspection.yaml
    │   ├── inherited_roles.yaml
    │   ├── metrics_config.yaml
    │   ├── network.yaml
    │   ├── opentelemetry.yaml
    │   ├── query_collections.yaml
    │   ├── remote_schemas.yaml
    │   ├── rest_endpoints.yaml
    │   └── version.yaml
    └── migrations
        └── sample
```

furukawa-sample-nuxt

```
├── Dockerfile
├── README.md
├── codegen.yml ← pnpm codegen コマンドでgraphqlの型生成するための設定ファイル
├── config
│   ├── i18n.config.ts   ← nuxt-i18n(多言語化)の設定ファイル
│   └── robots.config.ts ← @nuxtjs/robots(クローラ対策)の設定ファイル
├── docker-entrypoint.sh ← dockerからの起動スクリプト
├── nuxt.config.ts
├── package.json
├── pnpm-lock.yaml
├── src
│   ├── app.vue
│   ├── assets
│   │   └── logo.png
│   ├── components
│   │   ├── atoms
│   │   │   ├── MyNuxtLink.ts
│   │   │   └── hoge.vue
│   │   ├── organisms
│   │   │   ├── Header.vue   ← 言語切替を用意してあるヘッダー
│   │   │   └── SideMenu.vue ← 多言語化サイドメニュー
│   │   ├── pages
│   │   │   ├── i18n.vue
│   │   │   ├── index.vue     ← ホーム画面
│   │   │   ├── subscribe.vue ← graphqlのsubscriptionサンプル
│   │   │   └── update.vue    ← graphqlのmutationとタイムゾーン日時のサンプル
│   │   └── templates
│   │       ├── default.vue
│   │       ├── hoge.vue
│   │       └── naive-ui-layout.vue
│   ├── composables
│   ├── graphql
│   │   ├── documents
│   │   │   ├── fragment
│   │   │   ├── mutation
│   │   │   │   ├── updateProducts.graphql ← codegenコマンドの元になるgraphql
│   │   │   │   └── updateUsers.graphql ← codegenコマンドの元になるgraphql
│   │   │   ├── query
│   │   │   │   ├── searchProducts.graphql ← codegenコマンドの元になるgraphql
│   │   │   │   └── searchUsers.graphql ← codegenコマンドの元になるgraphql
│   │   │   └── subscription
│   │   │       └── observeProducts.graphql ← codegenコマンドの元になるgraphql
│   │   └── generated
│   │       ├── graphqlOperations.ts ← codegenコマンドで生成されたTypeScriptの型情報
│   │       └── schema.d.ts
│   ├── locales
│   │   ├── en.yml ← 多言語化ファイル(英語)
│   │   ├── ja.yml ← 多言語化ファイル(日本語)
│   │   └── vi.yml ← 多言語化ファイル(ベトナム語)
│   ├── plugins
│   │   ├── 777-provide-apollo-client.ts ← apollo-clientをnuxtに組み込んでいる
│   │   ├── 888-provide-naive-ui.ts ← UIフレームワークをnuxtに組み込んでいる
│   │   ├── 999-provide-vue-gtm.client.ts ← GTM(※無視しておいてください)
│   │   ├── provide-date-fns.ts ← 日時処理用のライブラリをnuxtに組み込み
│   │   └── provide-i18n.ts ← 多言語化ライブラリをnuxtに組み込み
│   ├── server
│   │   └── tsconfig.json
│   └── utils
│       └── create-apollo-client.ts ← apollo-clientインスタンスの生成処理を共通で切り出してある(※後でnuxtのserver middlewareで使うから)
└── tsconfig.json
```

## Hasura の開発の方法

1. 管理コンソールでテーブル作ったりカラム作ったりする
2. docker exec -it (docker ps -aqlf "name=furukawa-sample-hasura") /bin/fish みたいな感じでコンテナの中に入る
3. コンテナの中で Hasura の CLI コマンドを実行する

```
# 移動
cd /hasura

# メタデータ設定ファイルの出力
hasura metadata export
```

4. furukawa-sample-hasura の hasura ディレクトリに出力される。
5. 普通に git で管理すれば良い(コミット,push)
