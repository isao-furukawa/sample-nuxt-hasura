<template lang="pug">
div Update Mutationのサンプル
  template(v-if="getUsersQueryLoading")
      span ロード中
  template(v-else)
    ul
      li(v-for="data in getUsersQueryResult.users" :key="data.id")
        div
          p {{ formatInTimeZone(parseISO(data.birthday), 'Asia/Tokyo', 'yyyy-MM-dd HH:mm:ss.SSSXXX') }}    日本時間(+09:00)として表示
          p {{ formatInTimeZone(parseISO(data.birthday), 'Europe/Berlin', 'yyyy-MM-dd HH:mm:ss.SSSXXX') }} ベルリン(+01:00)として表示
          p {{ $format(parseISO(data.birthday), 'PPPPpppp') }} 多言語対応の表示

  //- div {{ getUsersQueryResult }}
  p: button( @click="doIt1") 現在日時をベトナム(+07:00)とみなして更新
  p: button( @click="doIt2") 現在日時をサンティアゴ(-04:00)とみなして更新
  p: button( @click="doIt3") 現在日時を東京(+09:00)とみなして更新
  //- p: nuxt-link(:to="localePath('/')") トップへのリンク
  //- p: nuxt-link(:to="localePath('/aaa')") AAAへのリンク
  //- p: nuxt-link(:to="localePath('/ccc')") CCCへのリンク
</template>
<script lang="ts" setup>
import { parseISO, parse } from 'date-fns';
import { zonedTimeToUtc, utcToZonedTime, format, formatInTimeZone } from 'date-fns-tz';
import { Order_By, useSearchUsersQuery, useUpdateUsersMutation } from '@/graphql/generated/graphqlOperations';
import type { Users_Bool_Exp, Users_Order_By, Users_Set_Input } from '@/graphql/generated/graphqlOperations';

const route = useRoute();
const nuxt = useNuxtApp();
const runtimeConfig = useRuntimeConfig();

const getUsersQueryOptions = reactive({
  enabled: true,
});

const getUsersQueryVariables = reactive({
  where: {} as Users_Bool_Exp,
  order_by: [] as Array<Users_Order_By>,
});
getUsersQueryVariables.order_by.push({ id: Order_By.Asc });
// getUsersQueryVariables.order_by.push({ area: Order_By.Asc });
// getUsersQueryVariables.order_by.push({ school_name: Order_By.Asc });

// getUsersQueryVariables.where.id?._eq = '';

getUsersQueryVariables.where = {
  id: {
    _eq: '40bc12a8-99dd-4bf4-b2b9-ba6cb393b110',
  },
};

const {
  result: getUsersQueryResult,
  error: getUsersQueryError,
  refetch: getUsersQueryRefetch,
  loading: getUsersQueryLoading,
  onResult: getUsersQueryOnResult,
  onError: getUsersQueryOnError,
} = useSearchUsersQuery(getUsersQueryVariables, getUsersQueryOptions);

watch(
  getUsersQueryResult,
  (now, old) => {
    console.warn('状態変更');
    console.warn(now);
  },
  { immediate: true }
);

// const getUsersQueryOptions = reactive({
//   enabled: true,
// });

const updateUsersMutationVariables = reactive({
  where: {} as Users_Bool_Exp,
  set: {} as Users_Set_Input,
  // order_by: [] as Array<Users_Order_By>,
});

const {
  mutate: updateUsersMutationMutate,
  error: updateUsersMutationError,
  loading: updateUsersMutationLoading,
  onDone: updateUsersMutationOnDone,
  onError: updateUsersMutationOnError,
} = useUpdateUsersMutation({
  variables: updateUsersMutationVariables,
});

// const { mutate, onDone, onError } = useUpdateCorporationActionMutation({
//   variables: updateCorporationActionMutationVariables,
// });
// // ログイン処理完了イベント
// onDone((param) => {
//   console.warn('更新完了！！！！！！');
//   console.warn(param);

// onDone((param) => {
//   console.warn('更新完了！！！！！！');
//   console.warn(param);

// });
// onError((param) => {
//   console.warn('エラー！！！！！！');
//   console.warn(param);
// });

updateUsersMutationOnDone((param) => {
  console.log('おんだん');
  console.warn(param);
});

updateUsersMutationOnError((param) => {
  console.error('おんえら');
  console.warn(param);
});

updateUsersMutationVariables.where = {
  id: {
    _eq: '40bc12a8-99dd-4bf4-b2b9-ba6cb393b110',
  },
};

const doIt1 = () => {
  // タイムゾーンの情報を欠落させたLocalDateTime文字列にする
  const nowStr = format(new Date(), 'yyyy-MM-dd HH:mm:ss.SSS');

  // LocalDateTimeをホーチミンの時間だった事にする
  const dateUTC = zonedTimeToUtc(nowStr, 'Asia/Ho_Chi_Minh');

  updateUsersMutationVariables.set = {
    birthday: formatInTimeZone(dateUTC, 'Asia/Ho_Chi_Minh', 'yyyy-MM-dd HH:mm:ss.SSSXXX'),
  };
  updateUsersMutationMutate();
};

const doIt2 = () => {
  // タイムゾーンの情報を欠落させたLocalDateTime文字列にする
  const nowStr = format(new Date(), 'yyyy-MM-dd HH:mm:ss.SSS');

  // LocalDateTimeをドバイの時間だった事にする
  const dateUTC = zonedTimeToUtc(nowStr, 'America/Santiago');

  updateUsersMutationVariables.set = {
    birthday: formatInTimeZone(dateUTC, 'America/Santiago', 'yyyy-MM-dd HH:mm:ss.SSSXXX'),
  };
  updateUsersMutationMutate();
};

const doIt3 = () => {
  // タイムゾーンの情報を欠落させたLocalDateTime文字列にする
  const nowStr = format(new Date(), 'yyyy-MM-dd HH:mm:ss.SSS');

  // LocalDateTimeを東京の時間だった事にする
  const dateUTC = zonedTimeToUtc(nowStr, 'Asia/Tokyo');

  updateUsersMutationVariables.set = {
    birthday: formatInTimeZone(dateUTC, 'Asia/Tokyo', 'yyyy-MM-dd HH:mm:ss.SSSXXX'),
  };
  updateUsersMutationMutate();
};
</script>
