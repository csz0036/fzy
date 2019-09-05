import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1b1f68c2 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _7cf97f88 = () => interopDefault(import('../pages/join.vue' /* webpackChunkName: "pages/join" */))
const _78d4c94a = () => interopDefault(import('../pages/price.vue' /* webpackChunkName: "pages/price" */))
const _829f44fe = () => interopDefault(import('../pages/product.vue' /* webpackChunkName: "pages/product" */))
const _577cdbfc = () => interopDefault(import('../pages/robot.vue' /* webpackChunkName: "pages/robot" */))
const _12282664 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
      path: "/about",
      component: _1b1f68c2,
      name: "about"
    }, {
      path: "/join",
      component: _7cf97f88,
      name: "join"
    }, {
      path: "/price",
      component: _78d4c94a,
      name: "price"
    }, {
      path: "/product",
      component: _829f44fe,
      name: "product"
    }, {
      path: "/robot",
      component: _577cdbfc,
      name: "robot"
    }, {
      path: "/",
      component: _12282664,
      name: "index"
    }],

  fallback: false
}

export function createRouter() {
  return new Router(routerOptions)
}
