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

// TODO: とーどー１qwerqwerqwerqwerqwerqwerqre
//       aaaa
//       bbbb
//       cccc
// todo: とーどー２wtryuetyurtyurytiryiryituyityuityuityu

/**
 * TODO: ういあ
 *       あああ
 *         あｓｄふぃじゅ
 * aaa
 */

/**
 * BUG: aaa
 * adsfads
 *
 * asdfasdf
 * asdfa
 */

/**
 * aaaa
 * fff
 * BUG: aaa
 * dsafasdf
 */
/**
 * あいうえお
 * TODO: ああああ
 *       aaa
 *       ccc
 *       ddd
 * ここは違う
 * ここも違うでや
 */
// TODO: とーどやでーーーーえええええ
// todo: やっっｄあｆだｆさｄｆｓｄｆ
// HACK: はっく1tyuityutityuityuityuityuityuityuituy
// hack: はっく2ryuiuyityuityuituyotloiutoyiu
// FIXME: ふぃくすみ１h;hio;yio;yio;io;yio;oi;oiu;uio;
// fixme: ふぃすみ２34563456634563456345634563546
// CHECK: ちぇっく１rtygrgsfetgsert5
// check: ちぇｃく２e56he56u65u65u465u456u
// NOTE: のーと１e56u456iu467u456u465utr
// note: のーと２erdthertuertrty
// BUG: ばぐ１35673567356uy65y56y456
// bug: ばぐ２etryertyertyery6356u
// [ ]: dsafadsfertyertyertyerty
// [x]: 888838u3u5eyeuyy56
//     "editor.guides.bracketPairs": true,
//     "editor.bracketPairColorization.enabled": true
// const aaa = () => {
//   console.warn('sss');

//   const bbb = () => {
//     console.warn('あああ');

//     const ccc = () => {
//       console.warn('あｄｓふぁ');
//     };
//   };
// }

const data = [
  'aaaあ1', // hack: prettier
  'aaaあ2',
  'aaaあ3',
  'aaaあ4',
];

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
