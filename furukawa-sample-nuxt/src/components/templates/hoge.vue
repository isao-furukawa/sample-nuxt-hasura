<template lang="pug">
TemplatesNaiveUiLayout
  n-layout
    n-layout-header(
      style="height: 64px; padding: 24px"
      bordered
    )
    n-space(vertical)
      n-layout.hoge(
        has-sider
      )
        n-layout-sider(
          bordered
          collapse-mode="width"
          :collapsed-width="64"
          :width="240"
          :collapsed="collapsed"
          show-trigger
          @collapse="collapsed = true"
          @expand="collapsed = false"
        )
          OrganismsSideMenu
        n-layout
          slot
</template>
<script lang="ts" setup>
import {
  NLayout,
  NLayoutSider,
  NLayoutHeader,
  NLayoutFooter,
  NLayoutContent,
  NScrollbar,
  // NNotificationProvider,
  // NLoadingBarProvider,
  // NDialogProvider,
  // jaJP,
  // dateJaJP,
  // enUS,
  // dateEnUS,
} from 'naive-ui';
const route = useRoute();
// const { display } = useDisplay({});
// const isDisplayLoading = ref(false);
// const nuxtApp = useNuxtApp();
// const isFooterLoading = ref(false);

// nuxtApp.hook('page:start', () => {
//   isFooterLoading.value = false;
// });
// nuxtApp.hook('page:transition:finish', () => {
//   isFooterLoading.value = true;
// });

// onMounted(async () => {
//   if (display) {
//     isDisplayLoading.value = true;
//   }

//   /**
//    * reload時にはnuxtApp.hookのpage:transition:finishが動かない問題
//    * DOM更新後にfooterが非表示だった場合には強制的にfooterを表示させる
//    * *アニメーションの完了を待てないので一瞬表示画面の最下部にfooterが見えてしまう為
//    * setTimeoutで待つ。他に待つ方法あればリファクタリング。
//    */
//   if (window.name !== 'reloaded') {
//     window.name = 'reloaded';
//     await nextTick();
//     if (!isFooterLoading.value) {
//       setTimeout(() => {
//         isFooterLoading.value = true;
//       }, 600);
//     }
//     window.name = '';
//   } else {
//     window.name = '';
//   }
// });

const runtimeConfig = useRuntimeConfig();
const urlPrefix = runtimeConfig.app.baseURL.length === 1 ? '' : runtimeConfig.app.baseURL;

const i18n = useI18n();
const i18nHead = useLocaleHead({
  addSeoAttributes: true,
  // addSeoAttributes: {
  //   canonicalQueries: ['foo'],
  // },
});

useHead({
  htmlAttrs: {
    lang: i18nHead?.value?.htmlAttrs!.lang,
  },
  meta: [
    { charset: 'utf-8' },
    ...(i18nHead.value.meta || []),
    {
      name: 'viewport',
      content: 'width=device-width, height=device-height, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0',
    },
    { name: 'og:title', content: `App Name - ${route.meta.title}` },
    { name: 'description', content: 'My amazing site.' },
    { name: 'application-name', content: 'sample' },
    { name: 'apple-mobile-web-app-title', content: 'sample' },
    { name: 'msapplication-config', content: `${urlPrefix}/favicons/browserconfig.xml` },
  ],
  link: [
    ...(i18nHead.value.link || []),
    { rel: 'icon', href: `${urlPrefix}/favicons/favicon.ico` },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: `${urlPrefix}/favicons/favicon-16x16.png` },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: `${urlPrefix}/favicons/favicon-32x32.png` },
    { rel: 'apple-touch-icon', sizes: '180x180', href: `${urlPrefix}/favicons/apple-touch-icon.png` },
    { rel: 'manifest', href: `${urlPrefix}/favicons/site.webmanifest` },
    { rel: 'mask-icon', color: '#49a136', href: `${urlPrefix}/favicons/safari-pinned-tab.svg` },
    // { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons%7CMaterial+Icons+Outlined' },
  ],
});
</script>
<style lang="scss" scoped>
// .layout-container {
//   display: flex;
//   position: relative;
//   min-height: 100vh;
//   height: 100%;
//   max-width: 1904px;
//   margin: 0 auto;
//   box-shadow: 0px 0px 0px 0px rgb(3 0 0), 0px 0px 40px -16px rgb(3 0 0);
//   background-color: $bg-color-light;
// }

// .main-container {
//   height: 100%;

//   @include mq-max(sm) {
//     margin-bottom: 200px;
//   }

//   margin-bottom: 140px;
//   // page transitionの崩れ制御のため付与
//   // position: relative;

//   width: 100%;

//   @include mq-min(sm) {
//     width: calc(100% - 170px);
//   }

//   @include mq-min(md) {
//     width: calc(100% - 220px);
//   }
// }

// .main-contents {
//   height: 100%;
// }

// // inputのvalidationエラー表示部分の調整 いったんコメントアウト
// // @include mq-max(md) {
// //   ::v-deep(.n-form-item .n-form-item-feedback-wrapper) {
// //     --n-feedback-height: 14px;
// //     --n-feedback-font-size: 12px;
// //   }
// // }

// // .feedback-invisibleクラス付与時は、n-form-item使用時に上下に発生する余白を無くす
// ::v-deep(.feedback-invisible) {
//   .n-form-item .n-form-item-feedback-wrapper {
//     --n-feedback-height: 0px;
//   }
//   .n-form-item.n-form-item--top-labelled {
//     --n-label-height: 0px !important;
//   }
// }
</style>
