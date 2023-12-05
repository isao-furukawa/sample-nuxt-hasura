# furukawa-sample-app

## 概要説明

Nuxt3 + apollo-client(graphql client) + Hasura(graphql server)
で動作するサンプルアプリ

今のところ確認出来るもの

1. 多言語対応(nuxt-i18n)
1. apollo-client の組み込み方法(ssr+csr の universal モードでの組み込み方法)
1. apollo-composable による reactive な nuxt との連動
1. jsonb 型を利用した DB の永続化データ側での多言語対応
1. timestamptz 型による UTC に統一された日時データとゾーン毎の処理サンプル
1. subscription による websocket でのリアルタイム状態更新

## 実行方法

#### 1. とりあえず git clone してくる

```
git clone git@github.com:skydisc-laine/furukawa-sample-app.git
```

#### 2. 落としてきたディレクトリに移動する

```
cd furukawa-sample-app
```

#### 3. 実行する(※サンプルが起動する)

```shell
docker compose up
```

#### 4. 初期データ投入(※初回のみ furukawa-sample-app をカレントディレクトリにして実行)

↓↓↓ bash 用

```
(cd ./furukawa-sample-hasura/hasura && hasura seed apply)
```

↓↓↓ fish 用

```fish
pushd ./furukawa-sample-hasura/hasura; and hasura seed apply; popd
```

> [!NOTE]
> 開発が進み、新たに増えたテーブルに初期データを投入したい場合等も hasura seed apply を利用する事になる。

#### 5. ブラウザでアクセスするとデモアプリの動作が確認できる

http://localhost:2000 ← Nuxt のアプリのホーム画面

#### 6. ハスラの管理コンソールを起動するにはこちら

```
# Hasuraの設定ファイル config.yaml があるディレクトに移動する
cd ./furukawa-sample-hasura/hasura

# 管理コンソールを起動する(※勝手にブラウザが起動するはず)
hasura console
```

http://localhost:9695/console ← 管理コンソールの URL

> [!IMPORTANT]
> DB に対する操作(※テーブルやビュー、ファンクションの作成など)は**_必ずこの管理コンソール上で行う。_**そうすることによって、/hasura ディレクトリ配下に自動でマイグレーションファイルが同期されていくので、それを github で管理する事によって全員共通の環境を維持することが出来る。マイグレーションファイルは docker compose up 時に自動で読み込まれ環境に適用される。

> [!CAUTION]
> Hasura の Docker 版を起動すると環境変数の HASURA_GRAPHQL_ENABLE_CONSOLE(※デフォルトは true)が true の場合 http:/localhost:8080/console でアクセス出来る管理コンソールが起動するが、この管理コンソールから DB に対する変更を行ってもマイグレーションファイルは同期生成されない。そのため誤解を招かない用に false を設定して起動出来ないようにしてあるので使用しないように！！

## ディレクトリの説明

furukawa-sample-postgresql

```
└── docker-entrypoint-initdb.d ← 一応用意したが初回もそれ以降も使わない
```

furukawa-sample-hasura

```
├── Dockerfile
└── hasura ← このディレクトリ以下がHasuraと同期している
    ├── config.yaml ← これが基本の設定ファイル
    ├── metadata
    │   ├── actions.graphql
    │   ├── actions.yaml
    │   ├── allow_list.yaml
    │   ├── api_limits.yaml
    │   ├── backend_configs.yaml
    │   ├── cron_triggers.yaml
    │   ├── databases
    │   │   ├── databases.yaml ← DBの接続先情報
    │   │   └── sample
    │   │       └── tables
    │   │           ├── public_my_sample_1.yaml
    │   │           ├── public_my_sample_2.yaml
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
    ├── migrations ← DBへの操作、RailsにもあるヤツMigrationでバージョン指定してロールバック出来たりする
    │   └── sample
    │       ├── 1701710768951_init ← それぞれのマイグレーション設定
    │       │   └── up.sql
    │       ├── 1701753412816_create_my_sample_1 ← それぞれのマイグレーション設定
    │       │   ├── down.sql
    │       │   └── up.sql
    │       └── 1701753453636_create_my_sample_2 ← それぞれのマイグレーション設定
    │           ├── down.sql
    │           └── up.sql
    └── seeds ← DBの型定義じゃなくて実データを投入するファイル郡
        └── sample
            ├── 1701711144637_products.sql
            ├── 1701711204164_users.sql
            ├── 1701711245017_receipts.sql
            └── 1701711262867_receipt_items.sql
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

> [!TIP]
> とりあえず、管理コンソールに入って画面からテーブルを作ったり、既存のテーブルのカラムを変更したりしてみてください。何か変更を行ったら、プロジェクトディレクトリで git diff してみてください。Hasura の管理コンソールで行った変更が、furukawa-sample-hasura/hasura ディレクトリにメタデータとして同期されてくるはずです。
