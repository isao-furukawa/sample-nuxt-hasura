<template lang="pug">
div このページはAAA
  p: nuxt-link(:to="localePath('/')") トップへのリンク
  p: nuxt-link(:to="localePath('/bbb')") BBBへのリンク
  p: nuxt-link(:to="localePath('/ccc')") CCCへのリンク
</template>
<script lang="ts">
</script>