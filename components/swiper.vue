<template>
    <div v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">
           <div class="swiper-slide" v-for="(banner,i) in banners" :key="i">
            <img :src="banner">
           </div>
      </div>
      <div v-if="paginationsShow" class="swiper-paginations"></div>
    </div>
</template>
<script>
export default {
    props: {
        banners: Array,
        paginationsShow: {
          type: Boolean,
          default: true
        }
    },
    data () {
        return {
           // 所有配置均为可选（同Swiper配置）  
            swiperOption: {
                autoplay: {
                  delay: 5000,
                  stopOnLastSlide: false,
                  disableOnInteraction: true,
                },
                initialSlide: 1,
                loop: true,
                pagination: {
                    el: '.swiper-paginations',
                    bulletElement : 'li',
                },
            }
        }
    },
    mounted(){
        this.mySwiper.slideTo(1)
    }
}
</script>

<style lang="scss" scoped>
.swiper-slide{
 img{
   width: 100%
 }
}
.swiper-paginations{
  text-align: center;
}
.my-swiper {
    height: 1rem;
    width: 100%;
    .swiper-slide {
      text-align: center;
      font-weight: 700;
      background-color: #eee;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .swiper-pagination {
      > .swiper-pagination-bullet {
        background-color: red;
      }
    }
  }
</style>