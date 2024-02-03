<template lang="pug">
div {{ route.path }}
div
  NuxtLink(:to='switchLocalePath("ja")') 日本語
  NuxtLink(:to='switchLocalePath("en")') 英語

  div: NuxtLink(to='aaa') AAA_NuxtLink
  div: NuxtLink(to='ccc') ccc_NuxtLink
  div: NuxtLink(to='login') login_NuxtLink
  div: a(href="/aaa") AAAへ行くで
  div: a(href="/ccc") CCCへ行くで
</template>

<script lang="ts" setup>
definePageMeta({
  auth: {
    unauthenticatedOnly: true,
  },
});
const route = useRoute();
const nuxt = useNuxtApp();
const runtimeConfig = useRuntimeConfig();
const event = useRequestURL();

console.warn('🦴🦴🦴🦴🦴🦴🦴🦴🦴🦴🦴🦴🦴🦴🦴');
console.warn(event);

// const gtm = useGtm();
// console.warn(gtm);
</script>

<style lang="scss" scoped></style>
