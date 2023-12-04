<template lang="pug">
//- n-config-provider(
//-   :theme-overrides='themeOverrides', 
//-   :breakpoints='{ xs:BREAKPOINT.xs, s: BREAKPOINT.sm, m: BREAKPOINT.md, l:BREAKPOINT.lg, xl:BREAKPOINT.xl }',
//-   :locale="locale",
//-   :date-locale="dateLocale"
//- )
n-config-provider(
  :theme-overrides='themeOverrides', 
)
  n-message-provider
    n-notification-provider
      n-loading-bar-provider
        n-dialog-provider
          slot
</template>
<script lang="ts" setup>
import type { GlobalThemeOverrides } from 'naive-ui';
import {
  NConfigProvider,
  NMessageProvider,
  NNotificationProvider,
  NLoadingBarProvider,
  NDialogProvider,
  jaJP,
  dateJaJP,
  enUS,
  dateEnUS,
} from 'naive-ui';

import { useI18n } from 'vue-i18n';
// import { BREAKPOINT } from '@/constant/styles/breakpoint';
// import { COLOR } from '@/constant/styles/color';

const themeOverrides: GlobalThemeOverrides = {
  // common: {
  //   // primaryColor: COLOR.primary,
  //   // primaryColorHover: '#69be5a',
  //   // primaryColorPressed: '#2BA014',
  //   // successColor: COLOR.secondary,
  //   // warningColor: COLOR.accent,
  //   // warningColorHover: '#ffb967',
  //   // warningColorPressed: '#fc9927',
  //   // errorColor: COLOR.warning,
  //   // errorColorHover: '#ec7471',
  //   // errorColorPressed: '#e13834',
  // },
};

// NOTE: リアクティブじゃないので、動的に切り替えたい場合は修正必要
// const setLocale = () => {
//   switch (useI18n().locale.value) {
//     case 'ja':
//       return { locale: jaJP, dateLocale: dateJaJP };
//     case 'en':
//       // アメリカ英語
//       return { locale: enUS, dateLocale: dateEnUS };
//     default:
//       // デフォは日本語
//       return { locale: jaJP, dateLocale: dateJaJP };
//   }
// };
// const { locale, dateLocale } = setLocale();
</script>
