import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _83285ba8 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _8547194a = () => interopDefault(import('../pages/join.vue' /* webpackChunkName: "pages/join" */))
const _e0ddbc30 = () => interopDefault(import('../pages/price.vue' /* webpackChunkName: "pages/price" */))
const _79e474ce = () => interopDefault(import('../pages/product.vue' /* webpackChunkName: "pages/product" */))
const _23786289 = () => interopDefault(import('../pages/robot.vue' /* webpackChunkName: "pages/robot" */))
const _43b8a61e = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
      path: "/about",
      component: _83285ba8,
      name: "about"
    }, {
      path: "/join",
      component: _8547194a,
      name: "join"
    }, {
      path: "/price",
      component: _e0ddbc30,
      name: "price"
    }, {
      path: "/product",
      component: _79e474ce,
      name: "product"
    }, {
      path: "/robot",
      component: _23786289,
      name: "robot"
    }, {
      path: "/",
      component: _43b8a61e,
      name: "index"
    }],

  fallback: false
}

export function createRouter() {
  return new Router(routerOptions)
}
