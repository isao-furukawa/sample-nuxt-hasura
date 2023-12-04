<template lang="pug">
n-card.container
  n-h1(prefix="bar")
    n-text() {{ $t("history.page-title") }}
  n-timeline(size='large')
    //- template(v-for="(item, index) in timelineItems")
    //-   n-timeline-item(:time='formatedYear(item.date.source)' type='success' :title='item.title.source')
    //-     div {{ item?.content?.source }}

    n-timeline-item(:time='formatedYear($t("history.timeline[0].date"))' type='success' :title='$t("history.timeline[0].title")')
    n-timeline-item(:time='formatedYear($t("history.timeline[1].date"))' type='success' :title='$t("history.timeline[1].title")')
    n-timeline-item(:time='formatedYear($t("history.timeline[2].date"))' type='success' :title='$t("history.timeline[2].title")')
    n-timeline-item(:time='formatedYear($t("history.timeline[3].date"))' type='success' :title='$t("history.timeline[3].title")')
      div {{ $t('history.timeline[3].content') }}
    n-timeline-item(:time='formatedYear($t("history.timeline[4].date"))' type='success' :title='$t("history.timeline[4].title")')
      div {{ $t('history.timeline[4].content') }}
    n-timeline-item(:time='formatedYear($t("history.timeline[5].date"))' type='success' :title='$t("history.timeline[5].title")')
    n-timeline-item(:time='formatedYear($t("history.timeline[6].date"))' type='success' :title='$t("history.timeline[6].title")')
    n-timeline-item(:time='formatedYear($t("history.timeline[7].date"))' type='success' :title='$t("history.timeline[7].title")')
    n-timeline-item(:time='formatedYear($t("history.timeline[8].date"))' type='success' :title='$t("history.timeline[8].title")')

</template>
<script lang="ts" setup>
import { NTimeline, NTimelineItem, NText, NH1, NCard } from 'naive-ui';
const i18n = useI18n();
const route = useRoute();
const nuxt = useNuxtApp();
const runtimeConfig = useRuntimeConfig();

const formatedYear = (year: string) => {
  return nuxt.$format(nuxt.$parse(year, 'yyyy/MM/dd', new Date()), 'Yo MMMM');
};

// @ts-ignore
const timelineItems = computed(() => i18n.getLocaleMessage(i18n.locale.value).history.timeline);

console.warn('⭐⭐⭐⭐⭐ history page ⭐⭐⭐⭐⭐');

// console.warn(Object.prototype.toString.call(i18n.getLocaleMessage(i18n.locale.value)));
// Object.prototype.toString

// const gtm = useGtm();
// console.warn(i18n.messages.value);
// console.warn(i18n.messages.value.ja);
// console.warn(i18n.getLocaleMessage(i18n.locale.value).history.timeline);
</script>

<style lang="scss" scoped>
.container {
  // width: 100vw;
  // height: 100%;
  min-height: 100vh;
}
</style>
