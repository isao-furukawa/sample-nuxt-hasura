<template lang="pug">
div このページはBBB
  p: nuxt-link(:to="localePath('/')") トップへのリンク
  p: nuxt-link(:to="localePath('/aaa')") AAAへのリンク
  p: nuxt-link(:to="localePath('/ccc')") CCCへのリンク
</template>
<script lang="ts">
</script>