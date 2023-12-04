/* eslint-disable import/no-duplicates */
import type { NuxtApp } from 'nuxt/dist/app/nuxt';
import { formatDistance, format, setDefaultOptions, parse, parseISO } from 'date-fns';
import { ja, enUS, enGB, vi as viVN } from 'date-fns/locale';
import { cloneDeep } from 'lodash-es';

// @ts-ignore
import buildFormatLongFn from 'date-fns/esm/locale/_lib/buildFormatLongFn/index.js';

// 日本語ロケール用の表示フォーマットをカスタマイズするのでjaロケールをクローンする
// (※クローン自体は必須ではないが、ライブラリ同梱の元のロケールデータを汚さないため)
const jaJP = cloneDeep(ja);

// 日本語ロケールのフォーマット
jaJP.formatLong = {
  date: buildFormatLongFn({
    formats: {
      full: 'y年MM月d日(E)',
      long: 'y年MM月d日',
      medium: 'y/MM/dd',
      short: 'y/MM/dd',
    },
    defaultWidth: 'full',
  }),
  time: buildFormatLongFn({
    formats: {
      full: 'H時mm分ss秒 zzzz',
      // full: 'H時mm分ss秒SSSミリ秒 xxx',
      long: 'H:mm:ss z',
      medium: 'H:mm:ss',
      short: 'H:mm',
    },
    defaultWidth: 'full',
  }),
  dateTime: buildFormatLongFn({
    formats: {
      full: '{{date}} {{time}}',
      long: '{{date}} {{time}}',
      medium: '{{date}} {{time}}',
      short: '{{date}} {{time}}',
    },
    defaultWidth: 'full',
  }),
};

/**
 * 日付操作のためのライブラリ【date-fns】のカスタマイズのためのプラグイン
 * i18n対応のために、各ロケール共通のフォーマット文字列に対応した
 * 表記を変更するために用意されている。
 */
export default defineNuxtPlugin(() => {
  // console.warn('⭐【plugins/provide-date-fns】⭐');

  // Nuxtのi18nオブジェクトを取り出す
  const { $i18n } = useNuxtApp();

  // Nuxtのi18nプラグインのロケール情報を元にdate-fnsのデフォルトロケールを設定しておく
  setDefaultOptions({
    locale: (() => {
      switch ($i18n.locale.value) {
        case 'ja':
          return jaJP;
        case 'en':
          return enUS;
        case 'vi':
          return viVN;  
        // ロケール情報がシステムで把握しているもの以外なら「日本語」にフォールバックする
        default:
          return jaJP;
      }
    })(),
  });

  return {
    provide: {
      datefns: {
        format,
        parse,
        parseISO,
        setDefaultOptions,
        locales: {
          ja: jaJP,
          en: enUS,
          vi: viVN,
        },
      },
      format,
      parse,
      parseISO,
    },
  };
});
