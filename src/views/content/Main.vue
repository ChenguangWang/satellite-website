<template>
  <div class="head2">
    <div style="margin: 0px auto; width: 1100px; padding: 20px 0px">
      <p style="font-size: 36px; margin: 18px 0px">九天星联</p>
      <p
        style="
          font-size: 17px;
          margin: 10px 0px;
          line-height: 30px;
          font-family: 宋体;
        "
      >
        北京九天星联科技有限公司（简称“九天星联”）是北京工业大学成果转化企业，依托北工大山河湾谷创新区建立。九天星联核心科研骨干均毕业于北京工业大学网络与交换技术国家重点实验室，一直以来从事云网融合、边缘计算等相关技术方向的研究，具有二十余年的研究积累，在相关方向具有二百余项国际、国内发明专利。
      </p>
    </div>
  </div>
  <div class="main">
    <img src="./../../assets/images/1.png" class="image" />
    <div
      style="
        text-align: left;
        line-height: 30px;
        font-size: 14px;
        color: rgb(118, 118, 118);
        padding: 10px 0px;
      "
    >
      <br />
      <p>
          近年来围绕卫星互联网、卫星边缘计算方向开展科研攻关与技术研发工作，与中国电子科技集团公司、中国星网集团等单位开展密切合作，共同获得了二十余项中国授权发明专利。九天星联深度参与建设了“天算星座”，主持了其中卫星边缘计算平台的设计与研发。作为副理事长单位与北京工业大学、华为技术有限公司、北京工业大学、天仪研究院联合发起了“天算联盟”，公司同时作为“天算联盟”办公地点，负责联盟日常工作。参与了由中国星网牵头的国家发改委“基于卫星互联网的云网融合关键技术研究”项目，主持了“异构网络聚合”关键技术的研究与工程实现，研制了国内首款“异构卫星网络聚合CPE”，集成至中国星网运营服务平台，并将参与推进异构卫星网络接入标准。九天星联参与了中国气象局“风云”系列遥感卫星地面系统的建设工作，承担了由国家卫星气象中心、国家气象信息中心所委托的多项关键技术研究及研制任务。“异构卫星网络聚合CPE”将在“风云”系列遥感卫星地面接收站中安装部署，支撑通信与遥感应用的融合。
      </p>
      <p>
          公司技术团队成员来自各大数据服务、企业服务厂商，具有丰富的网站/交付软件/APP/大数据实施经验，除以上科研类研究外还可为企业提供数字化咨询、交互体验、产品设计、软件开发服务。服务过金融、零售、广告、汽车、教育、政府等行业客户，可提供从市场调研到项目实施交付的完整服务和定制服务。
      </p>
      <!-- <i
        class="el-icon-caret-right"
        style="color: rgba(255, 0, 0, 0.596); font-size: 20px"
      ></i> -->
    </div>
  </div>
  <div class="btn">
    征集成员：九天星联面向企业，高校和科研院所等征集首批成员，用星际灯塔指引文明探索之路！
    <router-link to="/join-us" class="list">
          <a-button type="primary" danger style="height: 30px; padding: 4px 10px"><span><span style="font-size: 13px;font-weight: 500">了解</span></span></a-button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Main",
};
</script>

<style scoped>
.head2 {
  height: auto;
}
</style>
