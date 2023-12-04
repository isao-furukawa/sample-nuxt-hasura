import { createHttpLink, InMemoryCache, ApolloClient, split } from '@apollo/client/core';
import { provideApolloClient, DefaultApolloClient } from '@vue/apollo-composable';
import { getMainDefinition, offsetLimitPagination, relayStylePagination } from '@apollo/client/utilities';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';

// import consola from 'consola';

import { authHeaders, createApolloClient } from '~/utils/create-apollo-client';

/**
 * NuxtにGraphQLサーバに対して問い合わせを行うための、
 * GraphQLクライント【ApolloClient】の機能を提供するためのプラグイン
 */
const plugin = defineNuxtPlugin((nuxt) => {
  // console.groupCollapsed('🔽【plugin】【apollo-client】');

  // 環境変数の設定を取得
  const runtimeConfig = useRuntimeConfig();

  // クライアントを生成する
  const apolloClient = createApolloClient(true);

  // SSR時にApolloClientを介して取得したGraphqlサーバからのデータをペイロードに乗せてCSR側に持ち込む
  // これをやっておかないと、SSR時に取得したデータと同じデータをCSR側でApolloClientを利用して取りに行く羽目になる
  // 無駄なAPIアクセスになるので、SPA側ではペイロードからApollo-clientのキャッシュを復元してそれを利用する
  if (process.server && runtimeConfig.public.SSR_MODE) {
    nuxt.hook('app:rendered', () => {
      // nuxt.payload.data["apollo-" + clientId] = apolloClient.extract();
      nuxt.payload.data.apollo = apolloClient.extract();
    });
  }

  // CSR時にSSR側で既に取得されているデータがあればペイロードからキャッシュに復元する
  if (process.client && runtimeConfig.public.SSR_MODE) {
    // cache.restore(JSON.parse(JSON.stringify(nuxt.payload.data["apollo-" + clientId])));
    apolloClient.cache.restore(JSON.parse(JSON.stringify(nuxt.payload.data.apollo || {})));
  }

  // @vue/apollo-composableにクライアントを認識させておく
  provideApolloClient(apolloClient);

  // nuxtコンテキストから$apolloでアクセスできるように生やしておく
  nuxt.provide('apollo', {
    default: apolloClient,
  });

  // console.groupEnd();
});

export { plugin as default };
