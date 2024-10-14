<template>
  <div class="heaher">
    <div class="title">
      <div class="logo">
        <img
          src="./../assets/logo/logo_text.jpg"
          width="300px"
          style="float: left"
        />
        <!-- <span
          style="
            float: left;
            margin: 45px 0px;
            color: rgb(65, 61, 61);
            font-family: 等线;
            font-weight: 500;
          "
        >
          九天星联
        </span> -->
      </div>
      <div class="short">
        <span
          ><br />
          <br />
          <span style="font-weight: bolder; font-family: 等线; font-size: 15px"
            >面向科技探索，瞄准国际前沿，立足产学研用，坚持开放开源，争创国际领先，服务人类社会。</span
          ></span
        >
      </div>
    </div>
    <div style="background-color: rgba(192, 196, 204, 0.37); height: 5px"></div>
    <Header></Header>

    <div class="content">
      <router-view></router-view>
    </div>

    <Footer></Footer>
  </div>
</template>

<script setup lang="ts">
import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";
</script>

<style scoped>
.content {
  min-height: 300px;
}
</style>
