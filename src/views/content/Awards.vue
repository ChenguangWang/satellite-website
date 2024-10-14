<template>
  <div class="head2">
    <div
      style="
        margin: 0px auto;
        width: 1100px;
        color: rgb(255, 255, 255);
        background-color: rgb(69, 69, 69);
        height: 90px;
      "
    >
      <p style="padding: 30px 0px; font-size: 25px; margin: 0px">Awards</p>
    </div>
  </div>
  <div class="main">
    <div
      style="
        text-align: left;
        line-height: 30px;
        font-size: 15px;
        color: rgb(107, 107, 107);
        padding: 0px 20px;
      "
    >
      <p class="tab">主页/获奖</p>
      <p
        style="
          font-size: 28px;
          color: rgb(69, 69, 69);
          padding: 16px 0px;
          margin: 20px 0px;
        "
      >
        荣誉
      </p>
      <p
        style="
          color: rgb(69, 69, 69);
          font-size: 22px;
          margin: 0px 0px 18px;
          border-bottom: 1px solid rgb(183, 183, 183);
        "
      >
        2023
      </p>
      <div
        style="
          color: rgb(69, 69, 69);
          width: 1100px;
          height: 330px;
          padding: 10px 0px;
          border-bottom: 1px solid rgb(183, 183, 183);
        "
      >
        <div style="display: inline; float: left">
          <div class="el-image" style="width: 300px; border-radius: 25px">
            <!-- <img src="@/assets/images/awards/hw_thanks.jpg" height="300" class="el-image__inner" /> -->
            <a-image :width="200" :src="image" />
          </div>
        </div>
        <div
          style="
            display: inline;
            width: 650px;
            height: 150px;
            float: left;
            margin: 60px;
          "
        >
          <p style="font-weight: 600; font-size: 25px; line-height: 35px">
            “基于 ARM CPU 的系统仿真平台项目”成果应用证明 ————
            <span
              style="
                font-weight: 600;
                font-size: 28px;
                color: rgb(93, 140, 228);
              "
              >应用于华为的处理器研发取得显著效果</span
            >
          </p>
        </div>
      </div>
    </div>
    <br />
  </div>
</template>

<script setup lang="ts">
import image from "@/assets/images/awards/hw_thanks.jpg";
</script>

<style scoped>
.head2 {
  width: 100%;
  margin: 0 auto;
  height: 90px;
  background-color: #454545;
}

.main {
  text-align: center;
  margin: 0 auto;
  width: 1100px;
  padding-top: 30px;
  padding-bottom: 30px;
}

.el-image {
  text-align: center;
}
</style>
