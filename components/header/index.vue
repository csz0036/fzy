<template>
    <div id="head">
        <div class="detailShow">
            <p  class="logo" @click.prevent="gotoIndex"><router-link :to="'/'"></router-link></p>
            <p class="experience">立即体验</p>
            <p @click='navList' class="button"></p>
        </div>
        <ul v-show="showNav" class="navListButton">
            <li @click='navList'><router-link :to="'/'">首页</router-link></li>
            <li @click='navList'><router-link :to="'product'">产品</router-link></li>
            <li @click='navList'><router-link :to="'robot'">智能应用</router-link></li>
            <li @click='navList'><router-link :to="'price'">价格</router-link></li>
            <li @click='navList'><router-link :to="'about'">公司介绍</router-link></li>
            <li @click='navList'><router-link :to="'join'">伙伴加盟</router-link></li>
        </ul>
    </div>
</template>

<script>
export default {
    name:"MyHeader",
    data(){
        return {
            showNav: false
        }
    },
    mounted(){
    },
    methods:{
        navList(){
            this.showNav = !this.showNav
        },
        gotoIndex(){
            console.log(123123)
            this.showNav = false
            console.log('showNav-----', this.showNav)
        }
    }
}
</script>
<style lang="scss" scoped>
// @import './reset.scss';
#head{
    width: 100%;
    min-height: 1.2rem;
    position: fixed;
    top: 0;
    left: 0;
    background: #fff;
    z-index: 99;
    box-shadow: 0 0.02rem 0.04rem 0 rgba(0,0,0,0.10);
    .detailShow{
        display: flex;
        align-items:center;
        font-size: .44rem;
        height: 1.2rem;
        .logo{
            width: 3.5rem;
            height: .64rem;
            background: url(data:image/png;base64,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) no-repeat left center;
            background-size: contain;
            margin-left: .55rem;
            a{
                width: 100%;
                display: block;
                height: .8rem;
            }
        }
        .experience{
            width: 2.5rem;
            height: .6rem;
            background: url(data:image/png;base64,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) no-repeat 0 center;
            background-size: auto 100%;
            color: #2f8dd0;
            font-size: .3rem;
            line-height: .6rem;
            padding-left: .7rem;
        }
        .button{
            width: .6rem;
            height: .6rem;
            padding:.2rem;
            background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAG1BMVEVMaXEEabgBabcBaLgBabcCabgCarkBaLgBaLcz8mx2AAAACHRSTlMAPbLm/Xp7/jVhSugAAABqSURBVHja7deLCcAgDEBBv232n7grKAQs7d0CkqDCKwAAwOfU1iNFb7VsmHekGXNj3hGJxvrMLVK1sqpHqn7s4GOrfv/lKtfIfE7HPhAAANSiWlSLalEtqkUAALWoFtWiWlSLahEAAP7oAaG4R7kkvEzEAAAAAElFTkSuQmCC) no-repeat center;
            background-size: contain;
        }
    }
    .navListButton{
        font-size: .3rem;
        li{
           height: 1rem;
           line-height: 1rem;
           padding-left: .65rem;
        }
    }
}
</style>
