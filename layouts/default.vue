<template>
  <div id="content">
      <!-- 头部 -->
      <my-header/>
      <!-- 中间内容 -->
      <div id="center"> <nuxt /></div>
      <my-footer />
  </div>      
</template>
<script>
import MyHeader from '@/components/header/index.vue'
import MyFooter from '@/components/footer/index.vue'
export default {
  components:{
    MyHeader,
    MyFooter
  }
}
</script>
