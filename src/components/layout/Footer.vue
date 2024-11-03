<template>
  <div class="footer" style="height: 90px">
    <div class="fo">
      <!-- <div class="fo-menu">
        <h4><a>主页</a></h4>
        <p><a href="#" class="ti">关于我们</a></p>
        <p><a href="pub.html" class="ti">出版论文</a></p>
        <p><a href="award.html" class="ti">获奖</a></p>
        <p><a href="video.html" class="ti">视频</a></p>
        <p><a href="joinus.html" class="ti">加入我们</a></p>
      </div>
      <div class="fo-menu">
        <h4><a>卫星</a></h4>
        <p><a href="sate-B.html" class="ti">天算一号</a></p>
        <p><a href="sate-C.html" class="ti">天算二号</a></p>
        <p><a href="sate-w.html" class="ti">天算三号</a></p>
        <p><a href="sate-by.html" class="ti">北邮一号</a></p>
      </div>
      <div class="fo-menu" style="width: 100px">
        <h4><a>新闻</a></h4>
        <p><a href="new1.html" class="ti">签约仪式</a></p>
        <p><a href="new2.html" class="ti">宝酝号卫星发射</a></p>
        <p><a href="new3.html" class="ti">建立星际航海时代的灯塔</a></p>
      </div>
      <div class="fo-menu">
        <h4><a>方向</a></h4>
        <p><a>6G核心网系统</a></p>
        <p><a>卫星数联网</a></p>
        <p><a>卫星操作系统</a></p>
        <p><a>器件与载荷测试</a></p>
        <p><a>联邦学习与AI加速</a></p>
        <p><a>云原生卫星边缘计算</a></p>
      </div> -->
      <div style="float: left; font-size: 16px; margin-left: 16px">
        <h4>ICP备案</h4>
        <p>
          <a class="ti" href="https://beian.miit.gov.cn" target="_blank">
            京ICP备2024092093号-1
          </a>
        </p>
      </div>
      <div style="float: left; font-size: 16px; margin-left: 16px">
        <h4>京公网安备</h4>
        <p>
          <a
            class="ti"
            href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010502056073"
            target="_blank"
          >
            11010502056073号
          </a>
        </p>
      </div>
      <div style="float: left; margin-left: 40px">
        <h4>相关单位</h4>
        <div style="font-size: 15px">
          <p>北京工业大学</p>
          <p></p>
        </div>
      </div>
      <div style="float: left; font-size: 16px; margin-left: 16px">
        <h4>版权所有</h4>
        <p>
          <router-link to="/join-us" class="ti">
            © 北京九天星联科技有限公司
          </router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>
