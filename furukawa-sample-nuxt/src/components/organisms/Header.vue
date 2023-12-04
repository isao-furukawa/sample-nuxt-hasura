<template lang="pug">

n-space(justify="space-around" size="large" align="center")
  img.logo(
    width="32"
    height="32"
    src="~assets/logo.png"
  )
  n-button(size="tiny")
    NuxtLink(:to='switchLocalePath("ja")') {{ $t('language.ja') }}
  n-button(size="tiny")
    NuxtLink(:to='switchLocalePath("en")') {{ $t('language.en') }}
  n-button(size="tiny")
    NuxtLink(:to='switchLocalePath("vi")') {{ $t('language.vi') }}
</template>
<script lang="ts" setup>
import { NH1, NH2, NText, NImage, NSpace, NButton } from 'naive-ui';
const route = useRoute();
const localePath = useLocalePath();
const i18n = useI18n();
console.warn('🌹🌹🌹🌹🌹🌹🌹🌹🌹');
console.warn(route.path);
let path = route.path.replace(/^\/[a-z]{2}(-[a-z]{2})?(?=\/|$)/, '');
path = path.length <= 1 ? '/home' : path;
console.warn(path.replaceAll('/', '.'));
// console.warn(i18n.t(`menu${route.path.replace(/^\/[a-z]{2}(-[a-z]{2})?(?=\/)/, '').replaceAll('/', '.')}`));
// console.warn(localePath());

const title = computed(() =>
  i18n.t(
    `menu${
      (() => {
        let path = route.path.replace(/^\/[a-z]{2}(-[a-z]{2})?(?=\/|$)/, '');
        path = path.length <= 1 ? '/home' : path;
        return path.replaceAll('/', '.');
      })()
      // route.path.replace(/^\/[a-z]{2}(-[a-z]{2})?(?=\/)/, '').replaceAll('/', '.')
    }`
  )
);
</script>
<style lang="scss" scoped>
.logo {
}

.name {
  // height: 32px;
  color: red;
  background-color: blue;
}

.hoge {
  height: 100vh;
}
</style>
