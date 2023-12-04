<template lang="pug">
div サブスクリプションのサンプル
  n-table(:single-line='false')
    n-thead
      n-tr
        //- th 期
        n-th ID
        n-th 商品名
        n-th 価格
    n-tbody
      template(v-if="searchProductsQueryLoading")
        n-tr: n-td ロード中
      template(v-else)
        n-tr(v-for='item in searchProductsQueryResult.products', :key='item.id')
          n-td(valign="top" align="left" ) {{ item.id }}
          n-td(valign="top" align="left") {{ translate(item.name) }}
          n-td(valign="top" align="right") {{ item.price }}

  p: button( @click="doIt1") りんごの在庫をランダム変化
  p: button( @click="doIt2") みかんの在庫をランダム変化
  p: button( @click="doIt3") バナナの在庫をランダム変化
  p: button( @click="doIt4") 言語Cookie確認
  //- p: button( @click="doIt5") Apolloキャッシュ

</template>
<script lang="ts" setup>
import { NTable, NThead, NTh, NTbody, NTr, NTd, NH1, NGrid, NGridItem, NText } from 'naive-ui';
import { parseISO, parse } from 'date-fns';
import { zonedTimeToUtc, utcToZonedTime, format, formatInTimeZone } from 'date-fns-tz';
import {
  Order_By,
  useSearchProductsQuery,
  useObserveProductsSubscription,
  useUpdateProductsMutation,
} from '@/graphql/generated/graphqlOperations';
import type { Products_Bool_Exp, Products_Order_By, Products_Set_Input } from '@/graphql/generated/graphqlOperations';

const route = useRoute();
const nuxt = useNuxtApp();
const runtimeConfig = useRuntimeConfig();


// 🔽🔽🔽🔽🔽🔽 ここから、Query 🔽🔽🔽🔽🔽🔽
const useSearchProductsQueryVariables = reactive({
  where: {} as Products_Bool_Exp,
  order_by: [] as Array<Products_Order_By>,
});
const useSearchProductsQueryOptions = reactive({
  enabled: true,
});
useSearchProductsQueryVariables.order_by.push({ id: Order_By.Asc });
useSearchProductsQueryVariables.order_by.push({ name: Order_By.Asc });
useSearchProductsQueryVariables.where = {
  // id: {
  //   _eq: '018774eb-da51-1010-afc5-e62e9e9a264b',
  // },
};

const {
  result: searchProductsQueryResult,
  error: searchProductsQueryError,
  refetch: searchProductsQueryRefetch,
  loading: searchProductsQueryLoading,
  onResult: searchProductsQueryOnResult,
  onError: searchProductsQueryOnError,
} = useSearchProductsQuery(useSearchProductsQueryVariables, useSearchProductsQueryOptions);

searchProductsQueryOnResult((param) => {
  console.warn('ホゲ');
  console.warn(param);
});

// 🔼🔼🔼🔼🔼🔼 ここまで、Query 🔼🔼🔼🔼🔼🔼

// 🔽🔽🔽🔽🔽🔽 ここから、Subscription 🔽🔽🔽🔽🔽🔽
const observeProductsSubscriptionOptions = reactive({
  enabled: true,
});

const observeProductsSubscriptionVariables = reactive({
  where: {} as Products_Bool_Exp,
  order_by: [] as Array<Products_Order_By>,
});
observeProductsSubscriptionVariables.order_by.push({ id: Order_By.Asc });
observeProductsSubscriptionVariables.order_by.push({ name: Order_By.Asc });
observeProductsSubscriptionVariables.where = {
  // id: {
  //   _eq: '018774eb-da51-1010-afc5-e62e9e9a264b',
  // },
};

const {
  loading: observeProductsSubscriptionLoading,
  error: observeProductsSubscriptionError,
  start: observeProductsSubscriptionStart,
  stop: observeProductsSubscriptionStop,
  restart: observeProductsSubscriptionRestart,
  document: observeProductsSubscriptionDocument,
  // variables: observeProductsSubscriptionVariables,
  // options: observeProductsSubscriptionOptions,
  // subscription: observeProductsSubscriptionSubscription,
  onResult: observeProductsSubscriptionOnResult,
  onError: observeProductsSubscriptionOnError,
} = useObserveProductsSubscription();

observeProductsSubscriptionOnResult((param) => {
  console.warn('🐢🐢🐢🐢🐢 observeProductsSubscriptionOnResult 🐢🐢🐢🐢🐢');
  console.warn(param.data?.products);
});
// 🔼🔼🔼🔼🔼🔼 ここまで、Subscription 🔼🔼🔼🔼🔼🔼

const updateProductsMutationVariables = reactive({
  where: {} as Products_Bool_Exp,
  set: {} as Products_Set_Input,
  // order_by: [] as Array<Bbb_Order_By>,
});

const {
  mutate: updateProductsMutationMutate,
  error: updateProductsMutationError,
  loading: updateProductsMutationLoading,
  onDone: updateProductsMutationOnDone,
  onError: updateProductsMutationOnError,
} = useUpdateProductsMutation({
  variables: updateProductsMutationVariables,
});
updateProductsMutationOnDone((param) => {
  console.log('おんだん');
  console.warn(param);
});

updateProductsMutationOnError((param) => {
  console.error('おんえら');
  console.warn(param);
});

const doIt1 = () => {
  updateProductsMutationVariables.where = {
    id: {
      _eq: '090851fb-fbb8-4892-b2d7-766f73a42655',
    },
  };
  updateProductsMutationVariables.set = {
    price: Math.floor(Math.random() * 900) + 100,
  };
  updateProductsMutationMutate();
};

const doIt2 = () => {
  updateProductsMutationVariables.where = {
    id: {
      _eq: '7c5f6daf-b16f-42d1-ba22-af0a48bc243a',
    },
  };
  updateProductsMutationVariables.set = {
    price: Math.floor(Math.random() * 900) + 100,
  };
  updateProductsMutationMutate();
};

const doIt3 = () => {
  updateProductsMutationVariables.where = {
    id: {
      _eq: '17a15789-c683-4499-b01f-8da184845922',
    },
  };
  updateProductsMutationVariables.set = {
    price: Math.floor(Math.random() * 900) + 100,
  };
  updateProductsMutationMutate();
  console.warn(nuxt.$i18n.locale);
};

const doIt4 = () => {
  console.warn('言語確認');
  console.warn(nuxt.$i18n.locale.value);
};

const doIt5 = () => {
  const nuxt = useNuxtApp();
  // console.warn('言語確認');
  // console.warn(nuxt.$i18n.locale.value);
  console.warn(nuxt.apollo);
};

const translate = (value: any) => value[nuxt.$i18n.locale.value];

</script>
