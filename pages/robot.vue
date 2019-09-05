<template>
 <div class="robot">
  <div class="robot-header">
    <div class="h2">将简单、重复的工作交</div>
    <div class="h2">给法智易智能机器人</div>
    <div class="h3">法智易智能机器人所具备的语义分析能力，能够帮助您快速、高效处理合同业务中简单、重复的工作，同时降低风险。
    </div>
    <span></span>
  </div>
  <div class="robot-content paddingtp30">
    <div class="robotList">
        <h2 class="roboth2">您是否正被这些问题困扰</h2>
        <ul class="margintp20">
          <li class="list_one">
              <h3>怎么看</h3>
              <p>合同文本这么长怎么看？</p>
          </li>
          <li class="list_two">
              <h3>怎么填</h3>
              <p>合同表单这么复杂怎么填？</p>
          </li>
          <li class="list_thr">
              <h3>怎么审</h3>
              <p>低级错误这么多怎么审？</p>
          </li>
          <li class="list_four">
              <h3>怎么查</h3>
              <p>盖章合同有没有被换页，怎么查？</p>
          </li>
        </ul>
    </div>
  </div>
  <div class="robot-content robot-content_color-bg margintp40 paddingtp0">
    <div class="robot-content-pic robot-content-pic_1"></div>
    <div class="h2 roboth2 margintp35">法智易为您提供智能化解决方案让合同管理更easy</div>
  </div>
  <div class="robot-content robot-content_color-bg">
    <div class="robot-content-pic robot-content-pic_2"></div>
    <div class="h3">合同摘要快速生成</div>
    <ul>
      <li>自动提取合同关键信息生成摘要，满足<span>快速审批、快速查阅</span>等</li>
      <li>使用场景需求，迅速了解合同内容，节省大量时间成本</li>
    </ul>
  </div>
  <div class="robot-content robot-content_color-bg">
    <div class="robot-content-pic robot-content-pic_3"></div>
    <div class="h3">合同表单一键填写</div>
    <ul>
      <li>上传合同即可将字段信息填入合同管理系统，将经办人<span>从繁琐的合同表单中释放</span>减少录入失误，并在审批过程中保持表单数据更新
      </li>
    </ul>
  </div>
  <div class="robot-content robot-content_color-bg">
    <div class="robot-content-pic robot-content-pic_4"></div>
    <div class="h3">合同智能审查</div>
    <ul>
      <li>按照企业审核规则，<span>几秒内实现合同全文审查</span>，提高法务人员待审
合同的质量，帮助法务人员将精力投放到更能体现专业价值的地方</li>
    </ul>
  </div>
  <div class="robot-content robot-content_color-bg paddingbt60">
    <div class="robot-content-pic robot-content-pic_5"></div>
    <div class="h3">合同智能比对</div>
    <ul>
      <li>
        签字盖章前，比对线上审批文本终稿与线下打印终稿，<span>完美规避合同换页风险</span>，破解线上线下文本不一致难题
      </li>
    </ul>
  </div>
</div>
</template>

<script>
// import swiper from '~/components/swiper'
export default {
  data () {
    return {
     
    }
  },
  mounted() {
  }, 
  components: {
    // swiper
  },
  head () {
    return {
    }
  },
  methods:{
   
  }
}
</script>
<style lang="scss">
.robot .robot-header {
  padding: 53px 25px 0;
  height: 364px;
  text-align: center;
  background: url(/images/robot/robotbanner.png) no-repeat center;
  background-size: contain; }
  .robot .robot-header .h2 {
    margin: 6px auto 0;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    font-size: 20px;
    color: #FFFFFF;
    text-align: center; }
   .robot .robot-header .h2:first-of-type {
      margin-top: 0; }
  .robot .robot-header .h3 {
    margin-top: 33.5px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    font-size: 12px;
    color: #FFFFFF; }
  .robot .robot-header span {
    display: block;
    margin: 38px auto 0;
    width: 207px;
    height: 104px;
    background: url(/images/robot/robot1.png) no-repeat center;
    background-size: cover; }

    .robotList{
        overflow: hidden;
    }
    .robot .robot-content .robotList ul{margin-top:30px;}
    .roboth2{
        font-size: 20px;
        text-align: center;
        font-weight: 400;
        width: 100%;
        color: #47494A;
    }
    .robotList ul li{float: left;margin:15px 10px;text-align: center;}
    .robotList ul li p{width: 110px;margin:0px auto;}
    .robotList ul .list_one{
        background: url(/images/robot/robot2.png) no-repeat;
        background-size: cover;
        width: 136px;
        height: 136px;
    }
    .robotList ul li h3{
        font-size: 16px;
        line-height: 1.4;
        margin-top: 30px;
        margin-bottom: 10px;
    }
     .robotList  ul li p{font-size:13px; line-height: 1.4;}
    .robotList ul .list_one p{ width: 100px; }
    .robotList  ul .list_two{
        background: url(/images/robot/robot3.png) no-repeat;
        background-size: cover;
        width: 136px;
        height: 136px;
    }
    .robotList  ul .list_thr{
        background: url(/images/robot/robot4.png) no-repeat;
        background-size: cover;
        width: 136px;
        height: 136px;
    }
    .robotList  ul .list_four{
        background: url(/images/robot/robot5.png) no-repeat;
        background-size: cover;
        width: 136px;
        height: 136px;
    }
    .robotList  ul .list_four p{ width: 120px; }
   
   .robot .robot-content {
  padding: 60px 25px 0px; }
  .robot .robot-content.robot-content_color-bg {
    background: #F1F3F7; }
  .robot .robot-content .h3 {
    margin-top: 60px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    font-size: 17.5px;
    color: #5B5E5F; }
  .robot .robot-content ul {
    margin-top: 13px;
    font-family: PingFangSC-Regular;
    font-size: 12px;
    overflow: hidden;
    color: #333333; }
  .robot .robot-content .robot-content-pic {
    margin: 0 auto;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover; }
  .robot .robot-content .robot-content-pic_2 {
    width: 214px;
    height: 102.5px;
    background-image: url(/images/robot/robot6.png); }
  .robot .robot-content .robot-content-pic_3 {
    width: 171px;
    height: 169.5px;
    background-image: url(/images/robot/robot7.png); }
  .robot .robot-content .robot-content-pic_4 {
    width: 206.5px;
    height: 135.5px;
    background-image: url(/images/robot/robot8.png); }
   .robot .robot-content .robot-content-pic_5{
    width: 203px;
    height: 163.5px;
    background-image: url(/images/robot/robot9.png); }
    .margintp20{margin-top: 20px;}
   .robot .paddingtp0{padding-top:10px;}
   .robot .paddingbt60{padding-bottom:60px;}
   .margintp40{margin-top: 40px;}
   .robot .robot-content .margintp35{margin-top: 35px;}
   .robot .paddingtp30{padding-top: 30px;}
   .robot-content ul li span{color: #ff8722;}
</style>


