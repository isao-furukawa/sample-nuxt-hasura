<template lang="pug">
div クエリのサンプル
  n-table(:single-line='false')
    n-thead
      n-tr
        //- th 期
        n-th ID
        n-th {{ $t('first_name') }}
        n-th {{ $t('family_name') }}
        n-th {{ $t('gender') }}
        n-th {{ $t('birthday') }}
    n-tbody
      template(v-if="searchUsersQueryLoading")
        n-tr: n-td ロード中
      template(v-else)
        n-tr(v-for='user in searchUsersQueryResult.users', :key='user.id')
          n-td(valign="top" align="left" ) {{ user.id }}
          n-td(valign="top" align="left" ) {{ translate(user.first_name) }}
          n-td(valign="top" align="left") {{ translate(user.family_name) }}
          n-td(valign="top" align="right") {{ user.gender }}
          n-td(valign="top" align="right") {{ user.birthday }}


</template>
<script lang="ts" setup>
import { NTable, NThead, NTh, NTbody, NTr, NTd, NH1, NGrid, NGridItem, NText } from 'naive-ui';
import { parseISO, parse } from 'date-fns';
import { zonedTimeToUtc, utcToZonedTime, format, formatInTimeZone } from 'date-fns-tz';
import { useSearchUsersQuery } from '@/graphql/generated/graphqlOperations';
import type { Users_Bool_Exp, Users_Order_By } from '@/graphql/generated/graphqlOperations';


const route = useRoute();
const nuxt = useNuxtApp();
const runtimeConfig = useRuntimeConfig();


const useSearchUsersQueryVariables = reactive({
  where: {} as Users_Bool_Exp,
  order_by: [] as Array<Users_Order_By>,
});
const useSearchUsersQueryOptions = reactive({
  enabled: true,
});

const {
  result: searchUsersQueryResult,
  error: searchUsersQueryError,
  loading: searchUsersQueryLoading,
  onResult: searchUsersQueryOnResult,
  onError: searchUsersQueryOnError,
} = useSearchUsersQuery(useSearchUsersQueryVariables, useSearchUsersQueryOptions);

const translate = (value: any) => value[nuxt.$i18n.locale.value];

</script>
