import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _33f540f6 = () => interopDefault(import('..\\pages\\product\\index.vue' /* webpackChunkName: "pages/product/index" */))
const _076fadff = () => interopDefault(import('..\\pages\\service\\index.vue' /* webpackChunkName: "pages/service/index" */))
const _7f7e905f = () => interopDefault(import('..\\pages\\strength\\index.vue' /* webpackChunkName: "pages/strength/index" */))
const _2c677d98 = () => interopDefault(import('..\\pages\\technology\\index.vue' /* webpackChunkName: "pages/technology/index" */))
const _6d441752 = () => interopDefault(import('..\\pages\\walkin\\index.vue' /* webpackChunkName: "pages/walkin/index" */))
const _c9313182 = () => interopDefault(import('..\\pages\\strength\\tab1.vue' /* webpackChunkName: "pages/strength/tab1" */))
const _c9150280 = () => interopDefault(import('..\\pages\\strength\\tab2.vue' /* webpackChunkName: "pages/strength/tab2" */))
const _c8f8d37e = () => interopDefault(import('..\\pages\\strength\\tab3.vue' /* webpackChunkName: "pages/strength/tab3" */))
const _c8dca47c = () => interopDefault(import('..\\pages\\strength\\tab4.vue' /* webpackChunkName: "pages/strength/tab4" */))
const _c8c0757a = () => interopDefault(import('..\\pages\\strength\\tab5.vue' /* webpackChunkName: "pages/strength/tab5" */))
const _617504a2 = () => interopDefault(import('..\\pages\\technology\\aicontrl.vue' /* webpackChunkName: "pages/technology/aicontrl" */))
const _0af68c1e = () => interopDefault(import('..\\pages\\technology\\bianpinhengfeng.vue' /* webpackChunkName: "pages/technology/bianpinhengfeng" */))
const _74e4c454 = () => interopDefault(import('..\\pages\\technology\\liedujiaonang.vue' /* webpackChunkName: "pages/technology/liedujiaonang" */))
const _f6a3ebae = () => interopDefault(import('..\\pages\\technology\\shimoxi.vue' /* webpackChunkName: "pages/technology/shimoxi" */))
const _062bb5ec = () => interopDefault(import('..\\pages\\walkin\\tab1.vue' /* webpackChunkName: "pages/walkin/tab1" */))
const _0639cd6d = () => interopDefault(import('..\\pages\\walkin\\tab2.vue' /* webpackChunkName: "pages/walkin/tab2" */))
const _0647e4ee = () => interopDefault(import('..\\pages\\walkin\\tab3.vue' /* webpackChunkName: "pages/walkin/tab3" */))
const _e0f15b80 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _0c625d67 = () => interopDefault(import('..\\pages\\_lang\\index.vue' /* webpackChunkName: "pages/_lang/index" */))
const _0e96f03e = () => interopDefault(import('..\\pages\\_lang\\product\\index.vue' /* webpackChunkName: "pages/_lang/product/index" */))
const _30013eb8 = () => interopDefault(import('..\\pages\\_lang\\service\\index.vue' /* webpackChunkName: "pages/_lang/service/index" */))
const _691f16c6 = () => interopDefault(import('..\\pages\\_lang\\strength\\index.vue' /* webpackChunkName: "pages/_lang/strength/index" */))
const _25366c4a = () => interopDefault(import('..\\pages\\_lang\\technology\\index.vue' /* webpackChunkName: "pages/_lang/technology/index" */))
const _66510b79 = () => interopDefault(import('..\\pages\\_lang\\walkin\\index.vue' /* webpackChunkName: "pages/_lang/walkin/index" */))
const _780e1010 = () => interopDefault(import('..\\pages\\_lang\\strength\\tab1.vue' /* webpackChunkName: "pages/_lang/strength/tab1" */))
const _77f1e10e = () => interopDefault(import('..\\pages\\_lang\\strength\\tab2.vue' /* webpackChunkName: "pages/_lang/strength/tab2" */))
const _77d5b20c = () => interopDefault(import('..\\pages\\_lang\\strength\\tab3.vue' /* webpackChunkName: "pages/_lang/strength/tab3" */))
const _77b9830a = () => interopDefault(import('..\\pages\\_lang\\strength\\tab4.vue' /* webpackChunkName: "pages/_lang/strength/tab4" */))
const _779d5408 = () => interopDefault(import('..\\pages\\_lang\\strength\\tab5.vue' /* webpackChunkName: "pages/_lang/strength/tab5" */))
const _560932ca = () => interopDefault(import('..\\pages\\_lang\\technology\\aicontrl.vue' /* webpackChunkName: "pages/_lang/technology/aicontrl" */))
const _0043ddd8 = () => interopDefault(import('..\\pages\\_lang\\technology\\bianpinhengfeng.vue' /* webpackChunkName: "pages/_lang/technology/bianpinhengfeng" */))
const _7419b5fb = () => interopDefault(import('..\\pages\\_lang\\technology\\liedujiaonang.vue' /* webpackChunkName: "pages/_lang/technology/liedujiaonang" */))
const _04470510 = () => interopDefault(import('..\\pages\\_lang\\technology\\shimoxi.vue' /* webpackChunkName: "pages/_lang/technology/shimoxi" */))
const _25a7be36 = () => interopDefault(import('..\\pages\\_lang\\walkin\\tab1.vue' /* webpackChunkName: "pages/_lang/walkin/tab1" */))
const _258b8f34 = () => interopDefault(import('..\\pages\\_lang\\walkin\\tab2.vue' /* webpackChunkName: "pages/_lang/walkin/tab2" */))
const _256f6032 = () => interopDefault(import('..\\pages\\_lang\\walkin\\tab3.vue' /* webpackChunkName: "pages/_lang/walkin/tab3" */))

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
    component: _33f540f6,
    name: "product"
  }, {
    path: "/service",
    component: _076fadff,
    name: "service"
  }, {
    path: "/strength",
    component: _7f7e905f,
    name: "strength"
  }, {
    path: "/technology",
    component: _2c677d98,
    name: "technology"
  }, {
    path: "/walkin",
    component: _6d441752,
    name: "walkin"
  }, {
    path: "/strength/tab1",
    component: _c9313182,
    name: "strength-tab1"
  }, {
    path: "/strength/tab2",
    component: _c9150280,
    name: "strength-tab2"
  }, {
    path: "/strength/tab3",
    component: _c8f8d37e,
    name: "strength-tab3"
  }, {
    path: "/strength/tab4",
    component: _c8dca47c,
    name: "strength-tab4"
  }, {
    path: "/strength/tab5",
    component: _c8c0757a,
    name: "strength-tab5"
  }, {
    path: "/technology/aicontrl",
    component: _617504a2,
    name: "technology-aicontrl"
  }, {
    path: "/technology/bianpinhengfeng",
    component: _0af68c1e,
    name: "technology-bianpinhengfeng"
  }, {
    path: "/technology/liedujiaonang",
    component: _74e4c454,
    name: "technology-liedujiaonang"
  }, {
    path: "/technology/shimoxi",
    component: _f6a3ebae,
    name: "technology-shimoxi"
  }, {
    path: "/walkin/tab1",
    component: _062bb5ec,
    name: "walkin-tab1"
  }, {
    path: "/walkin/tab2",
    component: _0639cd6d,
    name: "walkin-tab2"
  }, {
    path: "/walkin/tab3",
    component: _0647e4ee,
    name: "walkin-tab3"
  }, {
    path: "/",
    component: _e0f15b80,
    name: "index"
  }, {
    path: "/:lang",
    component: _0c625d67,
    name: "lang"
  }, {
    path: "/:lang/product",
    component: _0e96f03e,
    name: "lang-product"
  }, {
    path: "/:lang/service",
    component: _30013eb8,
    name: "lang-service"
  }, {
    path: "/:lang/strength",
    component: _691f16c6,
    name: "lang-strength"
  }, {
    path: "/:lang/technology",
    component: _25366c4a,
    name: "lang-technology"
  }, {
    path: "/:lang/walkin",
    component: _66510b79,
    name: "lang-walkin"
  }, {
    path: "/:lang/strength/tab1",
    component: _780e1010,
    name: "lang-strength-tab1"
  }, {
    path: "/:lang/strength/tab2",
    component: _77f1e10e,
    name: "lang-strength-tab2"
  }, {
    path: "/:lang/strength/tab3",
    component: _77d5b20c,
    name: "lang-strength-tab3"
  }, {
    path: "/:lang/strength/tab4",
    component: _77b9830a,
    name: "lang-strength-tab4"
  }, {
    path: "/:lang/strength/tab5",
    component: _779d5408,
    name: "lang-strength-tab5"
  }, {
    path: "/:lang/technology/aicontrl",
    component: _560932ca,
    name: "lang-technology-aicontrl"
  }, {
    path: "/:lang/technology/bianpinhengfeng",
    component: _0043ddd8,
    name: "lang-technology-bianpinhengfeng"
  }, {
    path: "/:lang/technology/liedujiaonang",
    component: _7419b5fb,
    name: "lang-technology-liedujiaonang"
  }, {
    path: "/:lang/technology/shimoxi",
    component: _04470510,
    name: "lang-technology-shimoxi"
  }, {
    path: "/:lang/walkin/tab1",
    component: _25a7be36,
    name: "lang-walkin-tab1"
  }, {
    path: "/:lang/walkin/tab2",
    component: _258b8f34,
    name: "lang-walkin-tab2"
  }, {
    path: "/:lang/walkin/tab3",
    component: _256f6032,
    name: "lang-walkin-tab3"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
