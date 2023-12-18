<template lang="pug">
n-layout-sider(
  bordered
  collapse-mode="width"
  :collapsed-width="64"
  :width="440"
  :collapsed="collapsed"
  show-trigger
  @collapse="collapsed = true"
  @expand="collapsed = false"
)
  n-menu(
    v-model:value="activeKey"
    :collapsed="collapsed"
    :collapsed-width="64"
    :collapsed-icon-size="22"
    :options="menuOptions"
  )
</template>
<script lang="ts" setup>
import { NSpace, NLayout, NLayoutSider, NMenu, NIcon } from 'naive-ui';
import { h } from 'vue';
import { RouterLink } from 'vue-router';
import type { MenuOption } from 'naive-ui';
// import NuxtLink from 'nuxt/dist/app/components/nuxt-link';
// import { mdicon } from 'mdi-vue/v3';
// import mdicon from 'mdi-vue';
import MyNuxtLink from '~/components/atoms/MyNuxtLink';

// import {
//   BookOutline as BookIcon,
//   PersonOutline as PersonIcon,
//   WineOutline as WineIcon,
// } from '@vicons/ionicons5';
// function renderIcon (icon: Component) {
//   return () => h(NIcon, null, { default: () => h(icon) });
// }

function renderIcon(clazz: string, name: string) {
  // return () => h('mdicon', { name });
  // mdicon(name="react" :width="30" :height="30" spin)
  // @ts-ignore
  // <span class="material-icons">double_arrow</span>
  return () => h('span', { class: clazz }, { default: () => name });
  // return () => h({template: `<div>${name}</div>`});
}

//   mdicon(name="react" :width="30" :height="30" spin)

const localePath = useLocalePath();
const i18n = useI18n();
const activeKey = ref<string | null>(null);
const collapsed = ref(false);

const open = () => {
  console.warn('⭐オープン');
  if (collapsed.value) {
    collapsed.value = false;
  }
};

const menuItemRender = (path: string, labelKey: string) => {
  return h(
    MyNuxtLink,
    {
      to: { path: localePath(path) },
      onClick: () => {
        // console.warn('あああ');
        // collapsed.value = true;
      },
      // style: 'z-index:9999;',
    },
    { default: () => i18n.t(labelKey) }
  );
};

// <span class="material-icons-outlined">
// home
// </span>
const menuOptions: MenuOption[] = [
  {
    key: 'index',
    label: () => menuItemRender('/', 'menu.home'),
    icon: renderIcon('material-icons-outlined', 'home'),
  },
  {
    key: 'update',
    label: () => menuItemRender('/update', 'menu.update'),
    icon: renderIcon('material-icons-outlined', 'update'),
  },
  {
    key: 'subscribe',
    label: () => menuItemRender('/subscribe', 'menu.subscribe'),
    icon: renderIcon('material-icons-outlined', 'subscriptions'),
  },
  {
    key: 'validation_yup',
    label: () => menuItemRender('/validation_yup', 'menu.validate_yup'),
    icon: renderIcon('material-icons-outlined', 'done'),
  },
  {
    key: 'validation_zod',
    label: () => menuItemRender('/validation_zod', 'menu.validate_zod'),
    icon: renderIcon('material-icons-outlined', 'done'),
  },
];
</script>
<style lang="scss" scoped>
.hoge {
  height: 100vh;
}
</style>
