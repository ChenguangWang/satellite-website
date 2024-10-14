<template>
  <div class="head" style="background-color: rgb(171, 172, 175)">
    <div class="menu">
      <a-menu
        v-model:selectedKeys="current"
        mode="horizontal"
        theme="dark"
        :items="items"
        @click="changeMenu"
      />
      <!-- <ul
        role="menubar"
        class="el-menu-demo el-menu--horizontal el-menu"
        style="background-color: rgb(171, 172, 175)"
      >
        <li
          role="menuitem"
          tabindex="0"
          class="el-menu-item is-active"
          style="
            color: rgb(255, 208, 75);
            border-bottom-color: rgb(255, 208, 75);
            background-color: rgb(171, 172, 175);
          "
        >
          <span style="font-size: 16px"
            ><a href="./index.html" class="list">主页</a></span
          >
        </li>
        <li
          role="menuitem"
          tabindex="0"
          class="el-menu-item"
          style="
            color: rgb(255, 255, 255);
            border-bottom-color: transparent;
            background-color: rgb(171, 172, 175);
          "
        >
          <span style="font-size: 16px"
            ><a href="./morenews.html" class="list">新闻</a></span
          >
        </li>
        <li
          role="menuitem"
          tabindex="0"
          class="el-menu-item"
          style="
            color: rgb(255, 255, 255);
            border-bottom-color: transparent;
            background-color: rgb(171, 172, 175);
          "
        >
          <span style="font-size: 16px"
            >
            <router-link to="/come-out" class="list">出版</router-link>
            </span
          >
        </li>
        <li
          role="menuitem"
          tabindex="0"
          class="el-menu-item"
          style="
            color: rgb(255, 255, 255);
            border-bottom-color: transparent;
            background-color: rgb(171, 172, 175);
          "
        >
          <span style="font-size: 16px"
            ><a href="./award.html" class="list">获奖</a></span
          >
        </li>
        <li
          role="menuitem"
          tabindex="0"
          class="el-menu-item"
          style="
            color: rgb(255, 255, 255);
            border-bottom-color: transparent;
            background-color: rgb(171, 172, 175);
          "
        >
          <span style="font-size: 16px"
            ><a href="./video.html" class="list">视频</a></span
          >
        </li>
        <li
          role="menuitem"
          tabindex="0"
          class="el-menu-item"
          style="
            color: rgb(255, 255, 255);
            border-bottom-color: transparent;
            background-color: rgb(171, 172, 175);
          "
        >
          <span style="font-size: 16px"
            ><a href="./community.html" class="list">委员会</a></span
          >
        </li>
        <li
          role="menuitem"
          tabindex="0"
          class="el-menu-item"
          style="
            color: rgb(255, 255, 255);
            border-bottom-color: transparent;
            background-color: rgb(171, 172, 175);
          "
        >
          <span style="font-size: 16px"
            ><a href="./joinus.html" class="list">加入我们</a></span
          >
        </li>
      </ul> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { h, ref, watchEffect } from "vue";
import type { MenuProps } from "ant-design-vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const current = ref<string[]>(["home"]);
const items = ref<MenuProps["items"]>([
  {
    key: "home",
    label: "主页",
    title: "主页",
  },
  {
    key: "publications",
    label: "出版",
    title: "出版",
  },
  {
    key: "awards",
    label: "获奖",
    title: "获奖",
  },
  {
    key: "joinUs",
    label: "加入我们",
    title: "加入我们",
  },
]);

const changeMenu = (data: any) => {
  router.push({ name: data.key });
};

watchEffect(() => {
  current.value = typeof route.name === "string" ? [route.name] : [""];
});
</script>

<style scoped>
.ant-menu-dark {
  font-size: 16px;
  background: rgb(171, 172, 175);
}
</style>
