<template lang="pug">
div このページはCCC
  p: nuxt-link(:to="localePath('/')") トップへのリンク
  p: nuxt-link(:to="localePath('/aaa')") AAAへのリンク
  p: nuxt-link(:to="localePath('/bbb')") BBBへのリンク
</template>
<script lang="ts">
</script>