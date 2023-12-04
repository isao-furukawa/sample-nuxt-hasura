import type { NuxtApp } from 'nuxt/dist/app/nuxt';
import { createGtm, useGtm } from '@gtm-support/vue-gtm';

/**
 * Google Tag Maanager を利用するためのライブラリ
 * 【@gtm-support/vue-gtm】
 * 設定すると、vue router の遷移時に自動でイベントを飛ばせる
 * 又、任意のタイミングでイベントを飛ばせるオブジェクトを提供する
 */
export default defineNuxtPlugin((nuxt) => {
  // console.warn('⭐【plugins/provide-vue-gtm.client】⭐');
  const { vueApp } = nuxt;
  const runtimeConfig = useRuntimeConfig().public;
  // const { $cookies } = useNuxtApp();

  vueApp.use(
    createGtm({
      id: 'GTM-PKPLBH8',

      // 非同期読み込みによってページを高速化かどうか？
      // true に設定するとトラッキングの精度が下がる
      // (※デフォルト => false)
      defer: false,

      // 【async】と【defer】のpollyfillを注入するかどうか？
      // true にすると古いブラウザに対応できる
      // (※デフォルト => false)
      compatibility: false,

      // GTMタグを実際にページにスクリプトとして注入するかどうか？
      // (※デフォルト => true)
      enabled: runtimeConfig.GTM_ENABLED,

      // コンソールログを表示するかどうか？
      // (※デフォルト => false)
      debug: runtimeConfig.GTM_DEBUG,

      // GTMスクリプトをロードするかどうか？
      // (※既存サイトとかで既に手動でタグが埋まっている時とかにfalseにして連携させる)
      // (※デフォルト => true)
      loadScript: true,

      // Vueルーターインスタンスと連携してページトラッキングを行う
      vueRouter: useRouter(),

      // 指定されたルータのイベントをトリガーしない
      ignoredViews: [],

      // Vue.nextTickでtrackViewを呼び出すかどうか？
      // (※デフォルト => false)
      trackOnNextTick: false,
    })
  );

  // ボタンクリックやフォームサブミット時に
  // 任意のタイミングでGTMにイベントを飛ばすための
  // オブジェクトをNuxtコンテキストに生やしておく
  const gtm = useGtm();
  return {
    provide: {
      gtm,
    },
  };
});
