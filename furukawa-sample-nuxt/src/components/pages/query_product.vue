<template lang="pug">
div(v-if="isAnonymous")
  p {{ $t('access_denied') }}
div(v-else)
  div プロダクトクエリのサンプル
    n-table(:single-line='false')
      n-thead
        n-tr
          //- th 期
          n-th ID
          n-th {{ $t('product_name') }}
          n-th {{ $t('price') }}
          n-th {{ $t('organization_id') }}
      n-tbody
        template(v-if="searchProductsQueryLoading")
          n-tr: n-td ロード中
        template(v-else)
          n-tr(v-for='product in searchProductsQueryResult.products', :key='product.id')
            n-td(valign="top" align="left" ) {{ product.id }}
            n-td(valign="top" align="left" ) {{ translate(product.name) }}
            n-td(valign="top" align="left") {{ product.price }}
            n-td(valign="top" align="left") {{ product.organization_id }}
</template>
<script lang="ts" setup>
import { NTable, NThead, NTh, NTbody, NTr, NTd, NH1, NGrid, NGridItem, NText } from 'naive-ui';
import { useSearchProductsQuery } from '@/graphql/generated/graphqlOperations';
import { useAuth, definePageMeta } from '#imports';

definePageMeta({ middleware: 'auth' });
const { data, getSession } = useAuth();
await getSession();
const route = useRoute();
const nuxt = useNuxtApp();
const runtimeConfig = useRuntimeConfig();

const isAnonymous = computed(() => data.value?.role === 'anonymous');

const {
  result: searchProductsQueryResult,
  loading: searchProductsQueryLoading,
} = useSearchProductsQuery();
console.log('Current Auth Headers🐶🐶:', authHeaders);

const translate = (value: any) => value[nuxt.$i18n.locale.value];

</script>
