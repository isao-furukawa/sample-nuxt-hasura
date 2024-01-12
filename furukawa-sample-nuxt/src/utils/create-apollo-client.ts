import { createHttpLink, InMemoryCache, ApolloClient, split, from,HttpLink, ApolloLink } from '@apollo/client/core';
import { provideApolloClient, DefaultApolloClient } from '@vue/apollo-composable';
import { getMainDefinition, offsetLimitPagination, relayStylePagination } from '@apollo/client/utilities';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';
import { reactive } from 'vue';

/**
 * graphqlの実行結果の戻り値のキャッシュを作成する関数
 * relayスタイルのページキャッシュとかを設定する必要が出てくると思う
 * @returns Apolloキャッシュ
 */
function createCache() {
  // console.groupCollapsed('🔽【plugin】【apollo-client】【createCache】');
  const cache = new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          // jobs: offsetLimitPagination([‘conditions’, [‘corporationId’]]),
          // internships: offsetLimitPagination([
          //   ‘conditions’,
          //   [‘corporationId’],
          // ]),
          // seminars: offsetLimitPagination([‘conditions’, [‘corporationId’]]),
          // feeds: offsetLimitPagination([
          //   ‘conditions’,
          //   [‘corporationId’, ‘categoryId’, ‘sortType’],
          // ]),
          // paginationMessages: relayStylePagination([‘roomId’]),
          // feeds: offsetLimitPagination((context) => {
          //   // console.warn(‘コンテキスト出してみる’);
          //   // console.warn(context);
          //   return !context?.conditions.categoryId
          //     ? [‘conditions’, [‘sortType’]]
          //     : [‘conditions’, [‘categoryId’, ‘sortType’]];
          // }),
        },
      },
    },
  });
  // console.debug(cache);
  // console.groupEnd();
  return cache;
}

/**
 * ApolloClientから利用される接続を作成する
 * 発行されるGraphqlの種類によって
 * 【query,mutation】 -> httpリンク
 * 【subscription】   -> websocketリンク
 * となるようなクエリスプリッティングの機能を有したリンクを作成し、返却する
 * @param authHeaders 認証に利用するヘッダ情報
 * @returns splitLink
 */
function createLink(authHeaders: { [key: string]: string }) {
  // console.groupCollapsed('🔽【plugin】【apollo-client】【createLink】');

  // Graphqlサーバのエンドポイント情報欲しいのでコンフィグ取得
  const runtimeConfig = useRuntimeConfig();

  // graphqlの参照系である【query】の時に使用される接続
  const httpLink = new HttpLink(
    reactive({
      // uri: 'http://localhost:3333/graphql',
      // uri: `${nuxt.$config.API_HOST}/graphql`,
      // uri: nuxt.$config.API_ENDPOINT,

      // TODO: とりあえずベタ書きしておくけど後で良い方法考える
      uri: process.server
            ? `${runtimeConfig.public.API_PROTOCOL}://${runtimeConfig.public.API_HOST}/${runtimeConfig.public.API_PATH}`
            : `${runtimeConfig.public.API_PROTOCOL}://localhost:8080/${runtimeConfig.public.API_PATH}`,
      credentials: 'include', // withCredentials = true 設定
      // uri: runtimeConfig.public.API_ENDPOINT,
      headers: authHeaders,
      // fetch
    })
  );
  // console.debug('httpLink', httpLink);

  // graphqlの購読系である【subscription】の時に使用される接続
  // (※SSR中にsubscriptionすることは無いのでSSR時の実体はhttpLinkを利用しておく)
  const wsLink = process.client
    ? new GraphQLWsLink(
        createClient(
          reactive({
            // TODO: とりあえずベタ書きしておくけど後で環境変数なり何なりから構築するようにする
            // url: nuxt.$config.DOCKER_MODE ? 'wss://local-api.sample.jp/v1/graphql' : 'ws://localhost:8080/v1/graphql',
            // url: runtimeConfig.public.DOCKER_MODE
            //   ? 'wss://local-api.sample.jp/v1/graphql'
            //   : // : 'ws://localhost:8080/v1/graphql',
            //     'wss://qas-api.sample.jp/v1/graphql',

            // TODO: とりあえずベタ書きしておくけど後で良い方法考える
            url: process.server
            ? `${runtimeConfig.public.API_WS_PROTOCOL}://${runtimeConfig.public.API_HOST}/${runtimeConfig.public.API_PATH}`
            : `${runtimeConfig.public.API_WS_PROTOCOL}://localhost:8080/${runtimeConfig.public.API_PATH}`,
            // url: `${runtimeConfig.public.API_WS_PROTOCOL}://${runtimeConfig.public.API_HOST}/${runtimeConfig.public.API_PATH}`,
            // credentials: 'include', // withCredentials = true 設定
            connectionParams: {
              headers: authHeaders,
            },
          })
        )
      )
    : httpLink;
  // console.debug('wsLink', wsLink);

  // クエリの種類によって接続を使い分けるリンク
  const splitLink = split(
    // Apollo-clientに渡されてきたクエリを解析して httpリンクかsubscriptionリンクかを使い分ける
    ({ query }) => {
      // console.groupCollapsed('🔽【plugin】【apollo-client】【query-split】');

      // とりあえず生のクエリの情報をデバッグ出力
      // console.debug('query', query);

      // 生クエリからメタ情報を取り出す
      const definition = getMainDefinition(query);

      // とりあえずメタ情報をデバッグ出力
      // console.debug('definition', definition);

      // メタ情報を元にサブスクリプション型のクエリなのかどうかを判定
      const isSubscriptionQuery = definition.kind === 'OperationDefinition' && definition.operation === 'subscription';

      // とりあえずサブスクリプション型のクエリと判断したのかどうか？をデバッグ出力
      // console.info('is subscription query?', isSubscriptionQuery);

      // console.groupEnd();
      return isSubscriptionQuery;
    },

    // 【購読クエリの時に返却するもの】 -> SSR中はWSを使うことはありえないので、通常のHTTPリンクを返却する
    wsLink,

    // 【通常クエリの時に返却するもの】 -> 常に普通のhttpリンクを返却
    httpLink
  );
  // console.debug('splitLink', splitLink);

  // console.groupEnd();
  return splitLink;
}

// 認証状態によってgrahqlサーバへのリクエストヘッダの状態を
// 動的に変更するためのリアクティブヘッダ変数定義
// TODO: とりあえずアドミンシークレットを入れておくが、ここはログインするユーザによって認証情報が変更されるような仕組みが必要
//       たぶん useAuthenticationHeaders みたいな感じになるかな？？？
const authHeaders = reactive<{ [key: string]: string }>({
  // 'x-hasura-admin-secret': 'hogehoge',
});

function updateAuthHeaders() {
  const token = process.client ? sessionStorage.getItem('jwt') : null;
  const userItem = process.client ? sessionStorage.getItem('user') : null;
  const user = userItem ? JSON.parse(userItem) : null;

  if (token) {
    console.log('token', token);
    authHeaders.Authorization = `Bearer ${token}`;
    if (user && user.role) {
      authHeaders['X-Hasura-Role'] = user.role;
    }
    console.log('authHeaders🍋', authHeaders.Authorization);
  } else {
    delete authHeaders.Authorization;
    delete authHeaders['X-Hasura-Role'];
    console.log('Authorization header removed');
  }
  console.log('authHeaders🍑', authHeaders);
}

/**
 * ApolloClientを生成して返却する
 * spa,ssrアプリ両方に対応している
 *
 * @param isCacheable フェッチポリシー
 * @returns ApolloClient
 */
function createApolloClient(isCacheable = true) {
  // 環境変数の設定を取得
  const runtimeConfig = useRuntimeConfig();

  // 実際にApolloClientを作成
  const client = new ApolloClient(
    (() => {
      let config = {
        link: createLink(authHeaders),
        cache: createCache(),
        connectToDevTools: true,
      };
      if (process.server && runtimeConfig.public.SSR_MODE) config = Object.assign(config, { ssrMode: true });
      if (process.client && runtimeConfig.public.SSR_MODE) config = Object.assign(config, { ssrForceFetchDelay: 100 });
      return config;
    })()
  );

  // キャッシュを無効にして取得する場合はこう
  if (isCacheable === false) {
    client.defaultOptions.watchQuery = {
      fetchPolicy: 'no-cache',
    };
  }
  return client;
}

export { createApolloClient, authHeaders, updateAuthHeaders };
