<i18n locale="ja" lang="yaml">
hello: 'こんにちは、世界!'
</i18n>
<i18n locale="en" lang="yaml">
hello: 'hello world!'
</i18n>
<i18n locale="en" lang="yaml">
ja:
  fuga: 'ふが'
en:
  fuga: 'Fuga!'
</i18n>
<template lang="pug">
.container
  NuxtLink(:to='switchLocalePath("ja")') 日本語
  NuxtLink(:to='switchLocalePath("en")') 英語
  client-only
    div {{ format(new Date(), 'PPPP') }}
    div {{ $format($parse('2021/08/21', 'yyyy/MM/dd', new Date()), 'PPPPpppp') }}
    div {{ isBefore($parse('2021/08/21', 'yyyy/MM/dd', new Date()), $parse('2021/08/21', 'yyyy/MM/dd', new Date())) }}
    div {{ isAfter($parse('2021/08/21', 'yyyy/MM/dd', new Date()), $parse('2021/08/21', 'yyyy/MM/dd', new Date())) }}
  button.l(@click='l_click') 左クリック {{ $t('language.en') }}
  button.r(@click='r_click') 右クリック
  button.r(@click='date_click') 日付
</template>
<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
// import iii from '@nuxtjs/i18n';
import {
  formatDistance,
  format,
  formatISO,
  parse,
  parseISO,
  setDefaultOptions,
  isSameDay,
  isAfter,
  isBefore,
  isFuture,
  isPast,
  compareAsc,
  compareDesc,
} from 'date-fns';

// import { de } from 'date-fns/esm/locale';
// import { buildLoalizeFn } from ''
// import ja from 'date-fns/locale/ja';

const app = useNuxtApp();
const { $dayjs } = useNuxtApp();

const content = ref('');

// .env.xxxx で設定される環境変数へのアクセスの仕方
const config = useRuntimeConfig();
// console.warn(config.ENV);
// console.warn(config.API_HOST);

// VITEでのアクセスの仕方。
// 環境変数のファイルに VITE_ で始まる変数を定義すると
// ↓↓ import.meta.env ってところに組み込まれる
// どういう用途で使うべきなのか？不明
// console.warn(import.meta.env);

// const counter = useCookie('counter');
// counter.value = counter.value || Math.round(Math.random() * 1000)
// const mouse = useMouse();
const route = useRoute();
// const i18n = useI18n();
// const local = useLocal();

// local.setPreferredLanguage();

// setDefaultOptions({
//   locale: ja,
// });

const l_click = () => {
  console.warn('🌸左クリックしたでや');
  // console.warn(local);
  // console.warn(i18n);

  console.warn(format(parseISO('2021-08-21'), 'PPPPpppp'));
  console.warn(format(parseISO('2021-08-21T12'), 'PPPPpppp'));
  console.warn(format(parseISO('2021-08-21T12:23'), 'PPPPpppp'));
  console.warn(format(parseISO('2021-08-21T12:23:55'), 'PPPPpppp'));
  console.warn(format(parseISO('2021-08-21T12:23:55.999'), 'PPPPpppp'));
  console.warn(format(parseISO('2021-08-21T12:23:55+09:00'), 'PPPPpppp'));
  console.warn(format(parseISO('2021-08-21T12:23:55+06:00'), 'PPPPpppp'));
  console.warn(format(parseISO('2021-08-21T12:23:55.999+09:00'), 'PPPPpppp'));
  console.warn(format(parseISO('2021-08-21T12:23:55.999+04:00'), 'PPPPpppp'));

  console.warn(formatISO(new Date(2019, 8, 18, 19, 0, 52), { format: 'basic' }));
  console.warn(formatISO(new Date(2019, 8, 18, 19, 0, 52), { format: 'extended' }));

  console.warn(compareAsc(parseISO('2021-08-21T12:23:55.995'), parseISO('2021-08-21T12:23:55.995')));
  console.warn(compareAsc(parseISO('2021-08-21T12:23:55.995'), parseISO('2021-08-21T12:23:55.996')));
  console.warn(compareAsc(parseISO('2021-08-21T12:23:55.995'), parseISO('2021-08-21T12:23:55.994')));

  console.warn(compareDesc(parseISO('2021-08-21T12:23:55.995'), parseISO('2021-08-21T12:23:55.995')));
  console.warn(compareDesc(parseISO('2021-08-21T12:23:55.995'), parseISO('2021-08-21T12:23:55.996')));
  console.warn(compareDesc(parseISO('2021-08-21T12:23:55.995'), parseISO('2021-08-21T12:23:55.994')));
};

const r_click = () => {
  console.warn('🌹右クリックしたでや');
  console.warn(app.$i18n.locale.value);
};
// const gtm = useGtm();
const date_click = () => {
  // gtm.trackEvent({
  //   // event: 'test event',
  //   category: 'Debug Test',
  //   action: 'click',
  //   label: 'hoge hoge label',
  //   value: 999,
  //   noninteraction: false, // <- false だと【直帰扱いしない】
  // });
  // console.log(format(new Date(), 'PPPP'));
  // console.log(format(new Date(), 'llll'));
  // console.log(format(new Date(), 'yyyy年MM月dd日', { locale: ja }));
  // console.log(format(new Date(), 'yyyy年MM月dd日', { locale: enUS }));
  // console.log(format(new Date(), 'yyyy-mm-dd(E)'));
  // console.log('日本語(P       )=> ' + format(new Date(), 'P', { locale: ja }));
  // console.log('日本語(PP      )=> ' + format(new Date(), 'PP', { locale: ja }));
  // console.log('日本語(PPP     )=> ' + format(new Date(), 'PPP', { locale: ja }));
  // console.log('日本語(PPPP    )=> ' + format(new Date(), 'PPPP', { locale: ja }));
  // console.log('日本語(PPPPp   )=> ' + format(new Date(), 'PPPPp', { locale: ja }));
  // console.log('日本語(PPPPpp  )=> ' + format(new Date(), 'PPPPpp', { locale: ja }));
  // console.log('日本語(PPPPppp )=> ' + format(new Date(), 'PPPPppp', { locale: ja }));
  // console.log('日本語(PPPPpppp)=> ' + format(new Date(), 'PPPPpppp', { locale: ja }));
  // // console.log(format(new Date(), 'P', { locale: fr }));
  // // console.log(format(new Date(), 'PP', { locale: fr }));
  // // console.log(format(new Date(), 'PPP', { locale: fr }));
  // // console.log(format(new Date(), 'PPPP', { locale: fr }));
  // // console.log(format(new Date(), 'P', { locale: ru }));
  // // console.log(format(new Date(), 'PP', { locale: ru }));
  // // console.log(format(new Date(), 'PPP', { locale: ru }));
  // // console.log(format(new Date(), 'PPPP', { locale: ru }));
  // console.log('---------------------------------------------------------------');
  // console.log('イギリス(P   )=> ' + format(new Date(), 'P', { locale: enUS }));
  // console.log('イギリス(PP  )=> ' + format(new Date(), 'PP', { locale: enUS }));
  // console.log('イギリス(PPP )=> ' + format(new Date(), 'PPP', { locale: enUS }));
  // console.log('イギリス(PPPP)=> ' + format(new Date(), 'PPPP', { locale: enUS }));
  // console.log('---------------------------------------------------------------');
  // console.log('アメリカ(P   )=> ' + format(new Date(), 'P', { locale: enGB }));
  // console.log('アメリカ(PP  )=> ' + format(new Date(), 'PP', { locale: enGB }));
  // console.log('アメリカ(PPP )=> ' + format(new Date(), 'PPP', { locale: enGB }));
  // console.log('アメリカ(PPPP)=> ' + format(new Date(), 'PPPP', { locale: enGB }));
};
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  background-color: white;

  > .list {
    display: flex;
    flex-wrap: wrap;

    > .format {
      width: 50%;
      margin: 0 auto;
      padding: 0;
      // padding-bottom: 20px;
      // margin-bottom: 10px;
      background-color: #dadada;
    }

    > .result {
      width: 50%;
      margin: 0 auto;
      padding: 0;
      // padding-bottom: 20px;
      background-color: #f3f3f3;
      // margin-bottom: 10px;
    }
  }
}
</style>

<style lang="scss"></style>
