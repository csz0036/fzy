<template>
<div class="product">
  <div class="product-header">
    <div class="h2">专业的合同管理产品</div>
    <div class="h2">为您的交易保驾护航</div>
    <div class="h3">法智易合同管理产品是北京慧点科技在合同管理领域推出的专业产品，它专注服务企业法务部门，围绕企业合同管理，运用智能化技术，帮助企业促成交易，防控法律风险。</div>
    <span id="globalJoin"></span></div>
  <div class="product-content">
    <div class="product-content-pic product-content-pic_1"></div>
    <div class="h3">引用范本、快速起草合同</div>
    <ul>
      <li>·范本的在线编辑，修改留痕，实现合同的快速起草；</li>
      <li>·标准文本合同，可以一键生成正文；</li>
    </ul>
  </div>
  <div class="product-content product-content_color-bg">
    <div class="product-content-pic product-content-pic_2"></div>
    <div class="h3">灵活的审批流程，满足不同企业的个性化需要</div>
    <ul>
      <li>·用户可以根据制度要求，自定义审批流程；</li>
      <li>·支持多部门会签、条件分支、追加临时处理人、超时提醒、流程跟踪等功能；</li>
      <li>·手机移动审批，保证用户随时随地办公；</li>
    </ul>
  </div>
  <div class="product-content">
    <div class="product-content-pic product-content-pic_3"></div>
    <div class="h3">文本修订留痕，方便审批人快速审批</div>
    <ul>
      <li>·在线审批正文，保留审批痕迹；</li>
      <li>·可在线查看所有审批人的修订记录；</li>
      <li>·保留痕迹稿和清洁稿，便于事后追溯；</li>
    </ul>
  </div>
  <div class="product-content product-content_color-bg">
    <div class="product-content-pic product-content-pic_4"></div>
    <div class="h3">防伪打印，文本比对，防控阴阳合同</div>
    <ul>
      <li>·支持水印、二维码等方式打印，保证线下用印的文本和线上文本一致；</li>
      <li>·文本识别和比对，防控合同换页风险；</li>
    </ul>
  </div>
  <div class="product-content">
    <div class="product-content-pic product-content-pic_5"></div>
    <div class="h3">履约状态跟踪、异常监控，实时掌握履行情况</div>
    <ul>
      <li>·履约状态跟踪，实时了解履约 的完结状态;</li>
      <li>·支持对补充协议、变更、解除等异常状况的处理和跟踪；</li>
    </ul>
  </div>
  <div class="product-content product-content_color-bg">
    <div class="product-content-pic product-content-pic_6"></div>
    <div class="h3">不同的工作看板，简单易用，满足不同用户的需求</div>
    <ul>
      <li>·经办人看板，快速跟踪我的合同；</li>
      <li>·领导看板，快速浏览签约动态；</li>
      <li>·审批人员看板，快速处理审批待办；</li>
    </ul>
  </div>
  <div class="product-content">
    <div class="product-content-pic product-content-pic_7"></div>
    <div class="h3">丰富的智能插件，让您的工作更轻松</div>
    <ul>
      <li>·外部范本，辅助合同起草；</li>
      <li>·智能预审，提高审核效率，防止认为疏漏；</li>
      <li>·电子签约，提高签署效率；</li>
      <li>·相对方征信，使您更了解交易对手；</li>
    </ul>
  </div>
  <div class="product-content product-content_color-bg">
    <div class="product-content-pic product-content-pic_8"></div>
    <div class="h3">标准API接口，支持与企业内部系统的集成</div>
    <ul>
      <li>·组织机构用户接口；</li>
      <li>·客商主数据信息接口；</li>
      <li>·待办信息接口；</li>
      <li>·合同信息接口</li>
    </ul>
  </div>
  <div class="product-3mins" id="playBtn"></div>
  <div class="product-companys">
    <div class="companys">
      <div class="h3"> <span>15年</span>深耕，<span>300+</span>企业的共同选择</div>
      <div class="companys-small" id="productLogo">
        <swiper :banners="banners" :paginationsShow='paginationsShow'></swiper>
      </div>
      <div class="companys-btn"></div>
    </div>
  </div>
</div>
</template>

<script>
// import $ from 'jquery'
import swiper from '~/components/swiper'
export default {
  data () {
    return {
      banners: [ '/images/index/companyLogo1.png'],
      paginationsShow:false
    }
  },
  mounted() {
    
  }, 
  components: {
    swiper
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
.product .product-header {
  padding: 53*.02rem 25*.02rem 0;
  height: 350*.02rem;
  background: url(/images/product/product_bg.jpeg) no-repeat center;
  background-size: contain; }
  .product .product-header .h2 {
    margin: 6*.02rem auto 0;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    font-size: 20*.02rem;
    color: #FFFFFF;
    text-align: center; }
    .product .product-header .h2:first-of-type {
      margin-top: 0; }
  .product .product-header .h3 {
    margin-top: 33.5*.02rem;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    font-size: 14*.02rem;
    color: #FFFFFF; }
  .product .product-header span {
    display: block;
    margin: 38*.02rem auto 0;
    width: 135*.02rem;
    height: 46.5*.02rem;
    background: url(data:image/png;base64,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) no-repeat center;
    background-size: contain; }

.product .product-content {
  padding: 45*.02rem 25*.02rem 40*.02rem; }
  .product .product-content.product-content_color-bg {
    background: #F1F3F7; }
  .product .product-content .h3 {
    margin-top: 35*.02rem;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    font-size: 17.5*.02rem;
    color: #5B5E5F; }
  .product .product-content ul {
    margin-top: 13*.02rem;
    font-family: PingFangSC-Regular;
    font-size: 12*.02rem;
    color: #333333; }
  .product .product-content .product-content-pic {
    margin: 0 auto;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover; }
  .product .product-content .product-content-pic_1 {
    width: 186.5*.02rem;
    height: 157.5*.02rem;
    background-image: url(/images/product/prod_1.png); }
  .product .product-content .product-content-pic_2 {
    width: 300*.02rem;
    height: 199.5*.02rem;
    background-image: url(/images/product/prod_2.png); }
  .product .product-content .product-content-pic_3 {
    width: 300*.02rem;
    height: 199.5*.02rem;
    background-image: url(/images/product/prod_3.png); }
  .product .product-content .product-content-pic_4 {
    width: 300*.02rem;
    height: 199.5*.02rem;
    background-image: url(/images/product/prod_4.png); }
  .product .product-content .product-content-pic_5 {
    width: 300*.02rem;
    height: 165*.02rem;
    background-image: url(/images/product/prod_5.png); }
  .product .product-content .product-content-pic_6 {
    width: 300*.02rem;
    height: 165*.02rem;
    background-image: url(/images/product/prod_6.png); }
  .product .product-content .product-content-pic_7 {
    width: 325*.02rem;
    height: 165*.02rem;
    background-image: url(/images/product/prod_7.png); }
  .product .product-content .product-content-pic_8 {
    width: 325*.02rem;
    height: 165*.02rem;
    background-image: url(/images/product/prod_8.png); }

.product .product-3mins {
  height: 221*.02rem;
  background: url(/images/product/prod_9.png) no-repeat center;
  background-size: cover;
  cursor: pointer; }
  .companys {
  margin: 70*.02rem auto 32.5*.02rem; }
  .companys > .h3 {
    margin-bottom: 33.5*.02rem;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    font-size: 17.5*.02rem;
    text-align: center;
    color: #333; }
    .companys > .h3 span {
      font-size: 17.5*.02rem;
      color: #0068CE; }
  .companys > .companys-btn {
    margin: 45*.02rem auto 0;
    width: 135*.02rem;
    height: 46.5*.02rem;
    background: url(/images/index/p_1.png) no-repeat center;
    background-size: contain;
    cursor: pointer; }
</style>


