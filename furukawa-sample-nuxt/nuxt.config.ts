// https://nuxt.com/docs/api/configuration/nuxt-config

// console.warn('😃😃😃😃😃😃😃😃😃😃😃😃😃');
// console.warn(process.env);
// console.warn(process.env.npm_lifecycle_event);

// const lifecycle = process.env.npm_lifecycle_event;

export default defineNuxtConfig({
  /**
   * ⭐⭐⭐ プロジェクトフォルダ直下がごちゃごちゃしないようにソースの場所を一階層下げる
   */
  srcDir: 'src',

  /**
   * ⭐⭐⭐ 自動インポート設定
   */
  imports: {
    dirs: [
      // composablesディレクトリ以下を自動で読み込むための設定
      // デフォルトではNuxt3はcomposables/ディレクトリの直下のファイルのみをスキャンします
      // https://nuxt.com/docs/guide/directory-structure/composables
      'composables/**',
    ],
  },

  /**
   * ⭐⭐⭐ Nuxtの規約のディレクトリを変更できる
   */
  dir: {
    // Atomicデザインに沿うためにlayoutsのディレクトリを変更
    layouts: 'components/templates',

    // Atomicデザインに沿うためにpagesのディレクトリを変更
    pages: 'components/pages',
  },

  /**
   * ⭐⭐⭐ コンポーネント設定
   */
  components: [
    {
      path: '~/components',
      extensions: ['.vue'],
    },
  ],

  /**
   * ⭐⭐⭐ ランタイム時に切り替え可能なコンフィグ
   * 「private」領域はSSR中にサーバサイドでしか値を参照することは出来ない。
   * 「private」領域で設定した値を「public」領域で上書きすることができる。
   * （※ただし、タイムラグがあるのでtemplateの中で直接参照したりするとハイドレーションエラーが出る）
   */
  runtimeConfig: {
    // 🔽🔽🔽 ここから、publicな区画なのでここに記述したものはクライアント、サーバ両方で参照可能(※ブラウザに露出するので注意!!) 🔽🔽🔽
    public: {
      // 実行モード(development or staging or production)
      // (※環境変数が渡されて来なかった場合は development を設定)
      ENV: process.env.NODE_ENV,

      // Docker上で動作しているかどうか？
      DOCKER_MODE: process.env.NUXT_PUBLIC_DOCKER_MODE === 'true',

      // Nuxtのレンダリングモードを一箇所で指定したいので環境変数から取得して設定
      SSR_MODE: process.env.NUXT_PUBLIC_SSR_MODE === 'true',

      // APIホスト(※環境変数が渡されて来なかった場合は安全のためにローカルを設定)
      API_HOST: process.env.NUXT_PUBLIC_API_HOST,

      // APIを呼び出すためのプロトコル
      API_PROTOCOL: process.env.NUXT_PUBLIC_API_PROTOCOL,

      // APIを呼び出すためのプロトコル(※websoket用)
      API_WS_PROTOCOL: process.env.NUXT_PUBLIC_API_WS_PROTOCOL,

      // GraphQLのパス
      API_PATH: process.env.NUXT_PUBLIC_API_PATH,

      // GraphQLのリレー処理用のパス(※Hasuraの場合リレー形式パスが異なる)
      API_PATH_RELAY: process.env.NUXT_PUBLIC_API_PATH_RELAY,

      // Google Tag ManagerのコンテナID
      GTM_ID: process.env.NUXT_PUBLIC_GTM_ID,

      // Google Tag Managerのタグを有効化するかどうか？
      GTM_ENABLED: process.env.NUXT_PUBLIC_GTM_ENABLED === 'true',

      // Google Tag Managerの動作をコンソールログに出力するかどうか？
      GTM_DEBUG: process.env.NUXT_PUBLIC_GTM_DEBUG === 'true',

      // WYSIWYGのエディター(tinymce)を利用するためのAPIキー
      WYSIWYG_EDITOR_API_KEY: process.env.NUXT_PUBLIC_WYSIWYG_EDITOR_API_KEY,

      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://miraikko.com',
    },
    // 🔼🔼🔼 ここまで、publicな区画なのでここに記述したものはクライアント、サーバ両方で参照可能(※ブラウザに露出するので注意!!) 🔼🔼🔼
    // 🔽🔽🔽 ここから、privateな区画なのでここに記述したものはサーバサイドでしか参照できない(※ブラウザ露出しないので安全) 🔽🔽🔽

    // GraphqlのAPIサーバの最高権限シークレット
    X_HASURA_ADMIN_SECRET: process.env.NUXT_X_HASURA_ADMIN_SECRET,

    // SLACKのAPIトークン
    SLACK_API_TOKEN: process.env.NUXT_SLACK_API_TOKEN,

    // GraphqlのAPIサーバ、ACTION経由か判別するキー
    X_HASURA_ACTION_SECRET: process.env.NUXT_X_HASURA_ACTION_SECRET,

    // 🔼🔼🔼 ここまで、privateな区画なのでここに記述したものはサーバサイドでしか参照できない(※ブラウザ露出しないので安全) 🔼🔼🔼
  },

  /**
   * ⭐⭐⭐ ??????
   */
  modules: [
    // HACK: This comment is for "prettier" array line break hacking
    // i18nModule,
    '@vueuse/nuxt',
    '@nuxtjs/robots',
    '@nuxtjs/i18n',
    'nuxt-simple-sitemap',
  ],

  /**
   * ⭐⭐⭐ ??????
   */
  build: {
    // トランスパイルするライブラリをモードによって細かに制御しないと
    // yarn dev は動作するけど、yarn build & start は動作しないとかなる。
    transpile: (() => {
      const target = [];
      // target.push('mdi-vue');
      // target.push('gsap');
      target.push('graphql');
      target.push('@apollo/client');
      target.push('ts-invariant/process');
      target.push('@vue/apollo-composable');
      // target.push('@vee-validate/rules');
      // target.push(/echarts/);
      // 🔽echartsのresize()が走るときに必須pkg
      // target.push('resize-detector');
      if (process.env.npm_lifecycle_event === 'build' || process.env.npm_lifecycle_event === 'generate') {
        // target.push('dayjs');
        target.push('tslib');
        target.push('date-fns');
        target.push('date-fns/locale');
      }
      // 🔽ここから、 native-ui：https://www.naiveui.com/en-US/os-theme/docs/ssr 設定
      if (process.env.NODE_ENV === 'production') {
        target.push('naive-ui');
        target.push('vueuc');
        target.push('@css-render/vue3-ssr');
      }
      target.push('@juggle/resize-observer');
      // 🔼ここまで、 native-ui：https://www.naiveui.com/en-US/os-theme/docs/ssr 設定
      return target;
    })(),
  },

  /**
   * ⭐⭐⭐ ??????
   */
  vite: {
    optimizeDeps: {
      include: (() => {
        const target = [];
        if (process.env.NODE_ENV === 'development') {
          target.push('naive-ui');
          target.push('vueuc');
          target.push('date-fns-tz/formatInTimeZone');
        }
        return target;
      })(),
    },
  },

  /**
   * 🔧🔧🔧【@nuxtjs/i18n】の設定
   */
  i18n: {
    // 多言語ファイルの情報をクライントに遅延ロードするかどうかの設定
    // (true)の場合、現在表示中の言語とデフォルトフォールバック先言語の翻訳だけをロードし、
    // それ以外の多言語情報は、switchLocalePath等を使ったロケールの移動のタイミングで遅延ロードされる
    lazy: true,

    // 翻訳データを遅延ロードするための各言語ファイルが格納されているディレクトリ
    langDir: 'locales',

    // 対応するロケール
    locales: [
      {
        code: 'ja',
        iso: 'ja-JP',
        file: 'ja.ts', // ← 通常は静的ファイル(json)を指定するがymlの言語ファイルを読みたいので独自実装
      },
      {
        code: 'en',
        iso: 'en-US',
        file: 'en.ts', // ← 通常は静的ファイル(json)を指定するがymlの言語ファイルを読みたいので独自実装
      },
      {
        code: 'vi',
        iso: 'vi-VN',
        file: 'vi.ts', // ← 通常は静的ファイル(json)を指定するがymlの言語ファイルを読みたいので独自実装
      },
    ],

    // デフォルトのロケール(prefix_except_defaultストラテジーで使用される)
    defaultLocale: 'ja',

    // URLルーティングの戦略
    // prefix_except_default -> デフォルト以外のすべてのロケールにロケールプレフィックスを追加する
    // prefix                -> すべてのロケールにロケールプレフィックスを追加する
    // prefix_and_default    -> すべてのロケールとデフォルトのロケールプレフィックスを追加する
    strategy: 'prefix_except_default',

    // vue-i18n の設定ファイルのパスを指定
    // (※https://v8.i18n.nuxtjs.org/options/vue-i18n/)
    vueI18n: 'config/i18n.config.ts',

    // ブラウザの言語設定と抽出して最適な言語ページに誘導するための設定
    detectBrowserLanguage: {
      // 言語設定をCookieに保存するかどうか(※falseにするとブラウザの言語設定に基づいて毎回リダイレクトが走る)
      // （デフォルト：true）
      useCookie: true,

      // 言語設定を保存するCookie名
      // （デフォルト：i18n_redirected）
      cookieKey: 'i18n_redirected',

      // Cookieの中に言語設定が含まれていた場合、対象言語のページに自動的に飛ばす設定(true飛ばす,false飛ばさない)
      // （デフォルト：false）
      alwaysRedirect: false,

      // ユーザが設定しているブラウザの言語設定に対応する多言語化が行われていない場合にどの言語にフォールバックするか
      // （デフォルト：''）
      fallbackLocale: 'ja',

      // true に設定する (SEO を向上させるために推奨) と、サイトのルートパス (/) 上のブラウザロケールのみを検出するようになります。
      // no_prefix' 以外の戦略を使用している場合にのみ有効です。
      // （デフォルト：root）
      redirectOn: 'root',

      // trueの場合、フラグSameSite=None; クッキーのクロスドメイン使用を許可するために、クッキーにSecureを設定します(アプリがiframeに埋め込まれている場合に必要です)。
      // （デフォルト：false）
      cookieCrossOrigin: false,

      cookieSecure: false,

      cookieDomain: null,

      // alwaysRedirect: false,
      // cookieCrossOrigin: false,
      // cookieDomain: null,
      // cookieKey: "i18n_redirected",
      // cookieSecure: false,
      // fallbackLocale: "",
      // redirectOn: "root",
      // useCookie: true
    },
  },

  /**
   * 🔧🔧🔧【@nuxtjs/robots】の設定
   */
  robots: {
    configPath: 'config/robots.config.ts',
  },
});
