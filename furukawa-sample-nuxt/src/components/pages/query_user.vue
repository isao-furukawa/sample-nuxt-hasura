<template lang="pug">
div クエリのサンプル
  n-table(:single-line='false')
    n-thead
      n-tr
        //- th 期
        n-th ID
        n-th {{ $t('first_name') }}
        n-th {{ $t('family_name') }}
        n-th(v-if="hasGender") {{ $t('gender') }}
        n-th(v-if="hasBirthday") {{ $t('birthday') }}
    n-tbody
      template(v-if="searchUsersQueryLoading")
        n-tr: n-td ロード中
      template(v-else)
        n-tr(v-for='user in searchUsersQueryResult.users', :key='user.id')
          n-td(valign="top" align="left" ) {{ user.id }}
          n-td(valign="top" align="left" ) {{ translate(user.first_name) }}
          n-td(valign="top" align="left") {{ translate(user.family_name) }}
          n-td(v-if="user.gender" valign="top" align="right") {{ user.gender }}
          n-td(v-if="user.birthday" valign="top" align="right") {{ user.birthday }}
</template>
<script lang="ts" setup>
import { NTable, NThead, NTh, NTbody, NTr, NTd, NH1, NGrid, NGridItem, NText } from 'naive-ui';
import { parseISO, parse } from 'date-fns';
import { zonedTimeToUtc, utcToZonedTime, format, formatInTimeZone } from 'date-fns-tz';
import { useSearchUsersQuery } from '@/graphql/generated/graphqlOperations';
import type { Users_Bool_Exp, Users_Order_By } from '@/graphql/generated/graphqlOperations';

// import { definePageMeta } from '#imports';

// definePageMeta({ middleware: 'auth' });

const route = useRoute();
const nuxt = useNuxtApp();
const runtimeConfig = useRuntimeConfig();
const loginUser = useLoginUserState();
console.log('user🐱', loginUser.value);

const Variables = reactive({
  where: {} as Users_Bool_Exp,
  order_by: [] as Array<Users_Order_By>,
  isAdmin: (loginUser.value?.role === 'admin'),
});
console.log('Variables🐱', Variables);

const Options = reactive({
  enabled: true,
});

const {
  result: searchUsersQueryResult,
  loading: searchUsersQueryLoading,
} = useSearchUsersQuery(Variables, Options);
console.log('Current Auth Headers🐶🐶:', authHeaders);

const hasGender = computed(() => {
  return searchUsersQueryResult.value?.users.some(user => user.gender);
});
const hasBirthday = computed(() => {
  return searchUsersQueryResult.value?.users.some(user => user.birthday);
});

const translate = (value: any) => value[nuxt.$i18n.locale.value];

</script>
