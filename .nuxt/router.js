import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5567706b = () => interopDefault(import('..\\pages\\product\\index.vue' /* webpackChunkName: "pages/product/index" */))
const _76d1bee5 = () => interopDefault(import('..\\pages\\service\\index.vue' /* webpackChunkName: "pages/service/index" */))
const _0742c78e = () => interopDefault(import('..\\pages\\strength\\index.vue' /* webpackChunkName: "pages/strength/index" */))
const _a24e82e4 = () => interopDefault(import('..\\pages\\technology\\index.vue' /* webpackChunkName: "pages/technology/index" */))
const _268951ac = () => interopDefault(import('..\\pages\\walkin\\index.vue' /* webpackChunkName: "pages/walkin/index" */))
const _0ac97825 = () => interopDefault(import('..\\pages\\strength\\tab1.vue' /* webpackChunkName: "pages/strength/tab1" */))
const _0ad78fa6 = () => interopDefault(import('..\\pages\\strength\\tab2.vue' /* webpackChunkName: "pages/strength/tab2" */))
const _0ae5a727 = () => interopDefault(import('..\\pages\\strength\\tab3.vue' /* webpackChunkName: "pages/strength/tab3" */))
const _0af3bea8 = () => interopDefault(import('..\\pages\\strength\\tab4.vue' /* webpackChunkName: "pages/strength/tab4" */))
const _0b01d629 = () => interopDefault(import('..\\pages\\strength\\tab5.vue' /* webpackChunkName: "pages/strength/tab5" */))
const _ceee6f5c = () => interopDefault(import('..\\pages\\walkin\\tab1.vue' /* webpackChunkName: "pages/walkin/tab1" */))
const _ced2405a = () => interopDefault(import('..\\pages\\walkin\\tab2.vue' /* webpackChunkName: "pages/walkin/tab2" */))
const _ceb61158 = () => interopDefault(import('..\\pages\\walkin\\tab3.vue' /* webpackChunkName: "pages/walkin/tab3" */))
const _e79cf2cc = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _c2812066 = () => interopDefault(import('..\\pages\\_lang\\index.vue' /* webpackChunkName: "pages/_lang/index" */))
const _54113098 = () => interopDefault(import('..\\pages\\_lang\\product\\index.vue' /* webpackChunkName: "pages/_lang/product/index" */))
const _757b7f12 = () => interopDefault(import('..\\pages\\_lang\\service\\index.vue' /* webpackChunkName: "pages/_lang/service/index" */))
const _5a263ca8 = () => interopDefault(import('..\\pages\\_lang\\strength\\index.vue' /* webpackChunkName: "pages/_lang/strength/index" */))
const _1aeb7341 = () => interopDefault(import('..\\pages\\_lang\\technology\\index.vue' /* webpackChunkName: "pages/_lang/technology/index" */))
const _2ec057df = () => interopDefault(import('..\\pages\\_lang\\walkin\\index.vue' /* webpackChunkName: "pages/_lang/walkin/index" */))
const _09733852 = () => interopDefault(import('..\\pages\\_lang\\strength\\tab1.vue' /* webpackChunkName: "pages/_lang/strength/tab1" */))
const _09814fd3 = () => interopDefault(import('..\\pages\\_lang\\strength\\tab2.vue' /* webpackChunkName: "pages/_lang/strength/tab2" */))
const _098f6754 = () => interopDefault(import('..\\pages\\_lang\\strength\\tab3.vue' /* webpackChunkName: "pages/_lang/strength/tab3" */))
const _099d7ed5 = () => interopDefault(import('..\\pages\\_lang\\strength\\tab4.vue' /* webpackChunkName: "pages/_lang/strength/tab4" */))
const _09ab9656 = () => interopDefault(import('..\\pages\\_lang\\strength\\tab5.vue' /* webpackChunkName: "pages/_lang/strength/tab5" */))
const _bde2a082 = () => interopDefault(import('..\\pages\\_lang\\walkin\\tab1.vue' /* webpackChunkName: "pages/_lang/walkin/tab1" */))
const _bdc67180 = () => interopDefault(import('..\\pages\\_lang\\walkin\\tab2.vue' /* webpackChunkName: "pages/_lang/walkin/tab2" */))
const _bdaa427e = () => interopDefault(import('..\\pages\\_lang\\walkin\\tab3.vue' /* webpackChunkName: "pages/_lang/walkin/tab3" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/product",
    component: _5567706b,
    name: "product"
  }, {
    path: "/service",
    component: _76d1bee5,
    name: "service"
  }, {
    path: "/strength",
    component: _0742c78e,
    name: "strength"
  }, {
    path: "/technology",
    component: _a24e82e4,
    name: "technology"
  }, {
    path: "/walkin",
    component: _268951ac,
    name: "walkin"
  }, {
    path: "/strength/tab1",
    component: _0ac97825,
    name: "strength-tab1"
  }, {
    path: "/strength/tab2",
    component: _0ad78fa6,
    name: "strength-tab2"
  }, {
    path: "/strength/tab3",
    component: _0ae5a727,
    name: "strength-tab3"
  }, {
    path: "/strength/tab4",
    component: _0af3bea8,
    name: "strength-tab4"
  }, {
    path: "/strength/tab5",
    component: _0b01d629,
    name: "strength-tab5"
  }, {
    path: "/walkin/tab1",
    component: _ceee6f5c,
    name: "walkin-tab1"
  }, {
    path: "/walkin/tab2",
    component: _ced2405a,
    name: "walkin-tab2"
  }, {
    path: "/walkin/tab3",
    component: _ceb61158,
    name: "walkin-tab3"
  }, {
    path: "/",
    component: _e79cf2cc,
    name: "index"
  }, {
    path: "/:lang",
    component: _c2812066,
    name: "lang"
  }, {
    path: "/:lang/product",
    component: _54113098,
    name: "lang-product"
  }, {
    path: "/:lang/service",
    component: _757b7f12,
    name: "lang-service"
  }, {
    path: "/:lang/strength",
    component: _5a263ca8,
    name: "lang-strength"
  }, {
    path: "/:lang/technology",
    component: _1aeb7341,
    name: "lang-technology"
  }, {
    path: "/:lang/walkin",
    component: _2ec057df,
    name: "lang-walkin"
  }, {
    path: "/:lang/strength/tab1",
    component: _09733852,
    name: "lang-strength-tab1"
  }, {
    path: "/:lang/strength/tab2",
    component: _09814fd3,
    name: "lang-strength-tab2"
  }, {
    path: "/:lang/strength/tab3",
    component: _098f6754,
    name: "lang-strength-tab3"
  }, {
    path: "/:lang/strength/tab4",
    component: _099d7ed5,
    name: "lang-strength-tab4"
  }, {
    path: "/:lang/strength/tab5",
    component: _09ab9656,
    name: "lang-strength-tab5"
  }, {
    path: "/:lang/walkin/tab1",
    component: _bde2a082,
    name: "lang-walkin-tab1"
  }, {
    path: "/:lang/walkin/tab2",
    component: _bdc67180,
    name: "lang-walkin-tab2"
  }, {
    path: "/:lang/walkin/tab3",
    component: _bdaa427e,
    name: "lang-walkin-tab3"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
