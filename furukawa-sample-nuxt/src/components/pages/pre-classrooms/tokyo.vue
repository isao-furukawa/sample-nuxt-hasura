<template lang="pug">
div {{ route.path }}
div
  NuxtLink(:to='switchLocalePath("ja")') 日本語
  NuxtLink(:to='switchLocalePath("en")') 英語
</template>

<script lang="ts" setup>
const route = useRoute();
const nuxt = useNuxtApp();
const runtimeConfig = useRuntimeConfig();

// const gtm = useGtm();
// console.warn(gtm);
</script>

<style lang="scss" scoped></style>
