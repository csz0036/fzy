<template>
  <div class="join">
      <div class="h2">伙伴加盟</div>
      <ul class="join-type">
          <li class="active" data-value="销售服务商">
              <em></em>
              销售服务商
          </li>
          <li data-value="营销合伙人">
              <em></em>
              营销合伙人
          </li>
      </ul>
      <article>
          <div>
              <span>*</span>
              <input id="js-join-city" type="text" placeholder="请选择城市" readonly="true">
          </div>
          <div>
              <span>*</span>
              <input type="text" name="name" placeholder="姓名">
          </div>
          <div>
              <span>*</span>
              <input type="tel" name="phone" placeholder="请输入手机号">
          </div>
          <div>
              <input type="text" name="company" placeholder="公司名称">
          </div>
          <div>
              <input type="text" name="email" placeholder="请输入联系邮箱">
          </div>
      </article>
      <div class="btns">
          <div class="btn">提交申请</div>
      </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        
      }
    },
    mounted() {
    
    }
  }
</script>


<style lang="scss" scoped>
 
.join { padding:.63rem 0 .4rem; }
.join .h2 {
  margin-bottom:.53rem;
  font-family: PingFangSC-Regular;
  font-weight: 400;
  font-size: .44rem;
  color: #333333;
  letter-spacing: 0;
  text-align: center;
  line-height:.44rem; 
}
.join .join-type {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
      align-items: center;
  margin: 0 1.3rem .53rem;
  font-family: PingFangSC-Regular;
  font-size: .3rem;
  color: #333333; 
}
.join .join-type li {
  -ms-flex: 1;
      flex: 1;
  text-align: center;
  cursor: pointer; 
}
      .join .join-type li.active em {
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABSCAMAAAD0B6OUAAADAFBMVEVMaXE6nf8ylPxAmvs+nf81lvs1lftCnv+A//88mfxHqv8/mvsvkvsylP9AnP1Ns/9Vqv8+l/8vlPwzlPwwk/07nv8+mvpCnPxCm/xBm/tCm/s0lP03mv83l/w5mP9Bm/wvlPwtkfw+mfsvkvxCm/o3lvs+mf00lfw9mfsymP1Bmvszk/wzlPwukvwvkvs/mvsylPsxlPwvk/0+mfsuk/w/mvwuk/xAnP8/mvw0l/9Bm/wvkv0+m/wylP09mPs8mPwuk/stk/w9mPxAm/swk/0wk/w7l/swk/s5l/w4lvs3lfsukvtCmvo6l/stkvw7mPo6l/s6l/w2lfs1lfxBm/wwk/8vkvwvkv0ukf0/mfw/mftAmfwtkvw2lvs3lvovkvw3lvw4l/w2lfo1lfxCmvtBmvtAmvw/mfs7mfz///86mfw6mPs5mPs6l/o5l/o6l/k/mftAmvsvkvsukfs5l/k6lvg+mfo5lvcukvs5lPU3k/NAmfowkvs3k/I0lfs9mPo5lfYwk/stkfsyk/s3ke84lvc8mPo5lvg2lfs4lPQ2j+w0iuQzlPs7l/o3kvE0lPswk/xBmvs3lvs6l/s5lvo1jek2kO02jus1jOc4lPU4lvs+mfw4lfY5l/s3kO4yhNoyk/o5mPw0lPoukfo4kfA8mPs9mfs0i+Y1lvs7mfsziOE7mPswkvpAmvw3lvo2lfo3lfo0h941jeg3jusxgtYyhds+mPo0ieIzlfw4l/w3kfA1lfo9mfoxk/oxgNPs8/z+/v40iOAzh980i+UzlPoxlPv7/f4zht0xgtc9mPs8mfwzhdw2lvzX6PtGnPc6mPqMwvrt9f70+f2HteUwgdQxg9g+mvxCmvhpr/l+uvqSxfvK4/yNuOW92vnH4PuFvPVjntw2hNY6hdXI3fJbnuW42PpeqPVenuCEt+7W5vY7mPdJm/JTl9+30/I8h9NIkNrX6v1jrPfi7vnG3fZNofdGlOXj8P282fZYpfZ3q+B4q+A8l/pBjt8zk/tAjt8yhdwqnh1XAAAAkXRSTlMAFLBoE8unEQKwCcvLNTMFBiFQ+2ge4Xlf6jhuJ1kvUV/9/f1s825j+jKOmuzojongXW1z4n+/LF0sT3pjc5qmzf7sv3/w+4nm/NnFzcvsboDvgO+TO1Jsef3w8JPm2ZPm89mwxcV8l//////////////////////////////////////////////////////+JPKsyAAACYpJREFUeNq9mQdUG0caxxc7xrj33mOn9957v8S59ORarvjuPYFYrRHSCgkkIaPeiAUqcEggDJIAPaoxPQ7NxiW2E6f33nu/ft/M7rIrJC3YeS//N+9pjXZ++5/vm29mViYm1ymrN6zcsmLFlpUbVp9C/EzN3PDQ31bt5FS4s3DVXx/aMPNkactW3IMh0BCOv75nxbITpy1YeUteYVrl3bJywQnhZp++XIDLK8yDNoG5fMvsKeOypq8qpAtpaKgnXET6IyD6BZoW/n3V9Kyp8ebPYTvRiNUgyeEkyZEcbIjw3xXOmT8F3MKzd8LNjACWQpIX6Lw8Oo8GnXr2wsl4i+ZgFNz/94NgKY3AJ6s5i8R5V/+O3r6d3k7T/TnikvSzxN9eLcabfio32CRAjgSa8LpJT++h4dm/mZ6edxkN9+zZQ9cnQNIqQjP3X5aOdwENcyNC9x9MBvFw4b8PMuPec0Fq3iV6Wg9qSASJwxtoPUJekop3ZQR9uad/cpBQEX0EtSuTeavP1KNvGsQhydAGvb5f33/m6qSFarmeHa9oQoRgJPgAImj5xEVtFrg7EKlPhkwON+vNen1kViLvWjPoXw2pHAihqUPQcAD1vjZhlb/ZjP6Y1oW464PmAwfMB24W7g/Xm+vN9fVNErFEiAy9yYz6Xy9YsJpcZpf5KN8xGSBehkdR/8h8PiP19a56V6pOuUjSXCm08c9UzlF/13hermhygaRJTx+HkTJGGI/+luRcighNV7DAG1xNoIlxY1zlAoeUUZSCUigQk2TdThw2IrhuYHgZt7tIkmxInCqMFwAoKMpy5KWXX3nl5ZeOWAAMblO5bABE2e0ZGHg62USSRxPjx8RMRlIK5YvHXt2XjbXv1WMvWsAo6zIxREddLtL1awzcWkaWlUkFWWX9IXfKT449ky3QM8c+ASQbzYTZ0AQOya2It5ZESsharhREkgql6buvsifoq+9UFkomk6J7JMJhI2DZWjTiMnTFwXh/CoXF9DVvjzf5NRApIIKEU6esrLysHI15FroICh2ip5MUpSz+6dnsFHr2pyolJEcIxDbKAQRTMev+8mB5UFgZrD9T1ZEfslPqhyNVJggk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); }
      .join .join-type li em {
        display: inline-block;
        margin-right: .15remx;
        width: .4rem;
        height: .4rem;
        background: url(data:image/png;base64,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) no-repeat center;
        background-size: cover;
        vertical-align: middle; }
  .join > article > div {
    position: relative;
    margin-bottom: .15rem;
    padding: 0 .39rem; }
    .join > article > div .join-citys {
      display: -ms-flexbox;
      display: flex;
      -ms-flex-align: center;
          align-items: center; }
      .join > article > div .join-citys .h6 {
        margin-left: .2rem;
        -ms-flex: 1;
            flex: 1;
        height: 1rem;
        border: 1px solid #E1E1E1; }
        .join > article > div .join-citys .h6:first-of-type {
          margin-left: 0; }
    .join > article > div span {
      position: absolute;
      top: 50%;
      left: .1rem;
      margin-top: -.1rem;
      display: inline-block;
      font-family: PingFangSC-Regular;
      font-size: .32rem;
      color: #E3001C;
      text-align: left;
      line-height: .32rem; }
    .join > article > div input,
    .join > article > div textarea {
      padding: 0 .24rem;
      display: block;
      width: 100%;
      font-family: PingFangSC-Regular;
      font-size:.3rem;
      color: #333333;
      background: #FFFFFF;
      border: 1px solid #E1E1E1;
      border-radius: 1.5px; }
    .join > article > div textarea {
      padding-top: .41rem;
      padding-bottom: .41rem;
      height: 2.27rem; }
    .join > article > div input {
      height: .9rem; }
  .join .join-distpicker {
    visibility: hidden; }
  .join .btns {
    padding:.4rem .37rem 0; }
    .join .btns .btn {
      display: block;
      padding: .27rem 0;
      width: 100%;
      background: #008DD1;
      border-radius: .06rem;
      font-family: PingFangSC-Regular;
      font-size: .36rem;
      color: #FFFFFF;
      text-align: center;
      cursor: pointer; }

</style>