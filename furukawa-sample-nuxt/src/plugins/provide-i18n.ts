import { Locale } from '@nuxtjs/i18n/dist/runtime/composables';
import type { NuxtApp } from 'nuxt/dist/app/nuxt';

/**
 * 多言語対応のためのライブラリ
 * 【@nuxtjs/i18n】
 * 言語切替時にシステム全体で利用している日時に関するライブラリ【date-fns】の
 * デフォルト言語の切り替えを行う
 */
export default defineNuxtPlugin((nuxt) => {
  // console.warn('⭐【plugins/provide-i18n】⭐');

  // Nuxtのdate-fnsのオブジェクトを取り出す
  const { $datefns } = useNuxtApp();

  /**
   * 言語の切り替え前にコールされるイベントハンドラ
   *
   * @param oldLocale 変更前の(言語、国・地域)
   * @param newLocale 変更後の(言語、国・地域)
   * @param initialSetup アプリの読み込み時にトリガーされる最初のロケール スイッチである場合に true で入ってくる
   * @param context Nuxtコンテキスト
   */
  nuxt.hook('i18n:beforeLocaleSwitch', ({ oldLocale, newLocale, initialSetup, context }) => {
    // date-fnsのデフォルトロケールを切り替える
    $datefns.setDefaultOptions({
      locale: (() => {
        switch (newLocale.toLocaleLowerCase()) {
          case 'ja':
            return $datefns.locales.ja;
          case 'en':
            return $datefns.locales.en;
          case 'vi':
            return $datefns.locales.vi;
          default:
            return $datefns.locales.ja;
        }
      })(),
    });
  });

  /**
   * 言語の辺kの雨後にコールされるイベントハンドラ
   * @param oldLocale 変更前の(言語、国・地域)
   * @param newLocale 変更後の(言語、国・地域)
   */
  nuxt.hook('i18n:localeSwitched', ({ oldLocale, newLocale }) => {
    // console.log('onLanguageSwitched', oldLocale, newLocale);
  });

  // @ts-ignore
  // const i18n = nuxt.vueApp.i18n;
  // return {
  //   provide: {
  //     i18n,
  //   },
  // };
});
