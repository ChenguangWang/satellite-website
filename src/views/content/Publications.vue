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
      <p style="padding: 30px 0px; font-size: 25px; margin: 0px">
        Publications
      </p>
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
      <p class="tab">主页/出版</p>
      <p
        style="
          font-size: 28px;
          color: rgb(69, 69, 69);
          padding: 16px 0px;
          margin: 20px 0px;
        "
      >
        专利
      </p>
      <template v-for="item in patentFileList" :key="item.years">
        <!-- <p
          style="
            color: rgb(69, 69, 69);
            font-size: 22px;
            margin: 0px 0px 13px;
            border-bottom: 1px solid rgb(183, 183, 183);
          "
        >
          {{ item.years }}
        </p> -->
        <template v-for="(file, index) in item.files" :key="file.name">
          <p>
            <a :href="file.path" target="_blank" class="list1">
              <i class="el-icon-link" style="color: rgb(241, 79, 79)"></i>
              [{{ index + 1 }}] {{ file.name }}
            </a>
          </p>
        </template>
        <br />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
// const context = require.context('@/assets/sources', false, /\.pdf$/);
const context: any = import.meta.glob("@/assets/sources/*.pdf", {
  eager: true,
});

const files: any[] = [];

// context.forEach((val,key) => {
//   const arr = key.split('/');
//   files.push({
//     name: arr[arr.length-1],
//     path:key
//   });
// });

Object.values(context).forEach((item: any) => {
  const arr = item.default.split("/");
  files.push({
    name: decodeURIComponent(arr[arr.length - 1]),
    path: item.default,
  });
});

const patentFileList = [
  {
    years: "2024",
    files,
    // files: [
    //   {
    //     name: '【一种面向边缘-云异构下的多级事务调度分配策略】',
    //     path: './source/mobicom24-final298.pdf'
    //   },
    //   {
    //     name: '【一种边缘计算场景下通过休眠降低系统功耗的调度方法】',
    //     path: './source/mobicom24-final298.pdf'
    //   },
    //   {
    //     name: '【一种面向CPU-GPU异构环境的低能耗任务调度分配策略】',
    //     path: './source/mobicom24-final298.pdf'
    //   },
    //   {
    //     name: '【一种移动边缘计算网络中多目标优化的计算卸载方法】',
    //     path: './source/mobicom24-final298.pdf'
    //   },
    //   {
    //     name: '【一种面向云结合架构的资源分配和任务调度方法】',
    //     path: './source/mobicom24-final298.pdf'
    //   },
    //   {
    //     name: '【一种基于遗传算法的异构多核处理器任务分配与调度策略】',
    //     path: './source/mobicom24-final298.pdf'
    //   },
    //   {
    //     name: '【一种面向高性能的适应预取的缓存替换策略】',
    //     path: './source/mobicom24-final298.pdf'
    //   },
    //   {
    //     name: '【边云架构下基于深度强化学习的多目标优化卸载策略】',
    //     path: './source/mobicom24-final298.pdf'
    //   },
    //   {
    //     name: '传感器网络中移动节点的传输功率控制方法及节点装置',
    //     path: './source/mobicom24-final298.pdf'
    //   },
    //   {
    //     name: '无线传感器网络场景下一种实时感知网络状态的方法',
    //     path: './source/mobicom24-final298.pdf'
    //   },
    //   {
    //     name: '一种基于非理想电池模型低轨道卫星网络的链路调度方法',
    //     path: './source/mobicom24-final298.pdf'
    //   },
    //   {
    //     name: '一种基于天地一体化的多源数据管控平台',
    //     path: './source/mobicom24-final298.pdf'
    //   },
    //   {
    //     name: '一种基于图卷积网络的推荐方法',
    //     path: './source/mobicom24-final298.pdf'
    //   },
    //   {
    //     name: '一种基于网站公共安全点击流',
    //     path: './source/mobicom24-final298.pdf'
    //   },
    //   {
    //     name: '一种自适应的软件定义无线网络多控制器部署方法',
    //     path: './source/mobicom24-final298.pdf'
    //   },
    //   {
    //     name: 'MPTCP与网络编码',
    //     path: './source/mobicom24-final298.pdf'
    //   },
    // ]
  },
];
</script>

<style scoped>
.head2 {
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
</style>
