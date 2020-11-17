import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _41906dca = () => interopDefault(import('..\\pages\\service\\index.vue' /* webpackChunkName: "pages/service/index" */))
const _ad51fed0 = () => interopDefault(import('..\\pages\\technology\\index.vue' /* webpackChunkName: "pages/technology/index" */))
const _3a512cbd = () => interopDefault(import('..\\pages\\product\\tab1.vue' /* webpackChunkName: "pages/product/tab1" */))
const _3a5f443e = () => interopDefault(import('..\\pages\\product\\tab2.vue' /* webpackChunkName: "pages/product/tab2" */))
const _3a6d5bbf = () => interopDefault(import('..\\pages\\product\\tab3.vue' /* webpackChunkName: "pages/product/tab3" */))
const _732f825b = () => interopDefault(import('..\\pages\\strength\\tab1.vue' /* webpackChunkName: "pages/strength/tab1" */))
const _733d99dc = () => interopDefault(import('..\\pages\\strength\\tab2.vue' /* webpackChunkName: "pages/strength/tab2" */))
const _734bb15d = () => interopDefault(import('..\\pages\\strength\\tab3.vue' /* webpackChunkName: "pages/strength/tab3" */))
const _7359c8de = () => interopDefault(import('..\\pages\\strength\\tab4.vue' /* webpackChunkName: "pages/strength/tab4" */))
const _7367e05f = () => interopDefault(import('..\\pages\\strength\\tab5.vue' /* webpackChunkName: "pages/strength/tab5" */))
const _3037e808 = () => interopDefault(import('..\\pages\\walkin\\tab1.vue' /* webpackChunkName: "pages/walkin/tab1" */))
const _3045ff89 = () => interopDefault(import('..\\pages\\walkin\\tab2.vue' /* webpackChunkName: "pages/walkin/tab2" */))
const _3054170a = () => interopDefault(import('..\\pages\\walkin\\tab3.vue' /* webpackChunkName: "pages/walkin/tab3" */))
const _9669537a = () => interopDefault(import('..\\pages\\service\\_id.vue' /* webpackChunkName: "pages/service/_id" */))
const _4ccb07a4 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _366e8f83 = () => interopDefault(import('..\\pages\\_lang\\index.vue' /* webpackChunkName: "pages/_lang/index" */))
const _b8d4a7c8 = () => interopDefault(import('..\\pages\\_lang\\service\\index.vue' /* webpackChunkName: "pages/_lang/service/index" */))
const _130ab1f7 = () => interopDefault(import('..\\pages\\_lang\\technology\\index.vue' /* webpackChunkName: "pages/_lang/technology/index" */))
const _0f1a659c = () => interopDefault(import('..\\pages\\_lang\\product\\tab1.vue' /* webpackChunkName: "pages/_lang/product/tab1" */))
const _0f287d1d = () => interopDefault(import('..\\pages\\_lang\\product\\tab2.vue' /* webpackChunkName: "pages/_lang/product/tab2" */))
const _0f36949e = () => interopDefault(import('..\\pages\\_lang\\product\\tab3.vue' /* webpackChunkName: "pages/_lang/product/tab3" */))
const _378d655c = () => interopDefault(import('..\\pages\\_lang\\strength\\tab1.vue' /* webpackChunkName: "pages/_lang/strength/tab1" */))
const _379b7cdd = () => interopDefault(import('..\\pages\\_lang\\strength\\tab2.vue' /* webpackChunkName: "pages/_lang/strength/tab2" */))
const _37a9945e = () => interopDefault(import('..\\pages\\_lang\\strength\\tab3.vue' /* webpackChunkName: "pages/_lang/strength/tab3" */))
const _37b7abdf = () => interopDefault(import('..\\pages\\_lang\\strength\\tab4.vue' /* webpackChunkName: "pages/_lang/strength/tab4" */))
const _37c5c360 = () => interopDefault(import('..\\pages\\_lang\\strength\\tab5.vue' /* webpackChunkName: "pages/_lang/strength/tab5" */))
const _15f6d16e = () => interopDefault(import('..\\pages\\_lang\\walkin\\tab1.vue' /* webpackChunkName: "pages/_lang/walkin/tab1" */))
const _15daa26c = () => interopDefault(import('..\\pages\\_lang\\walkin\\tab2.vue' /* webpackChunkName: "pages/_lang/walkin/tab2" */))
const _15be736a = () => interopDefault(import('..\\pages\\_lang\\walkin\\tab3.vue' /* webpackChunkName: "pages/_lang/walkin/tab3" */))
const _79980584 = () => interopDefault(import('..\\pages\\_lang\\service\\_id.vue' /* webpackChunkName: "pages/_lang/service/_id" */))

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
    path: "/service",
    component: _41906dca,
    name: "service"
  }, {
    path: "/technology",
    component: _ad51fed0,
    name: "technology"
  }, {
    path: "/product/tab1",
    component: _3a512cbd,
    name: "product-tab1"
  }, {
    path: "/product/tab2",
    component: _3a5f443e,
    name: "product-tab2"
  }, {
    path: "/product/tab3",
    component: _3a6d5bbf,
    name: "product-tab3"
  }, {
    path: "/strength/tab1",
    component: _732f825b,
    name: "strength-tab1"
  }, {
    path: "/strength/tab2",
    component: _733d99dc,
    name: "strength-tab2"
  }, {
    path: "/strength/tab3",
    component: _734bb15d,
    name: "strength-tab3"
  }, {
    path: "/strength/tab4",
    component: _7359c8de,
    name: "strength-tab4"
  }, {
    path: "/strength/tab5",
    component: _7367e05f,
    name: "strength-tab5"
  }, {
    path: "/walkin/tab1",
    component: _3037e808,
    name: "walkin-tab1"
  }, {
    path: "/walkin/tab2",
    component: _3045ff89,
    name: "walkin-tab2"
  }, {
    path: "/walkin/tab3",
    component: _3054170a,
    name: "walkin-tab3"
  }, {
    path: "/service/:id",
    component: _9669537a,
    name: "service-id"
  }, {
    path: "/",
    component: _4ccb07a4,
    name: "index"
  }, {
    path: "/:lang",
    component: _366e8f83,
    name: "lang"
  }, {
    path: "/:lang/service",
    component: _b8d4a7c8,
    name: "lang-service"
  }, {
    path: "/:lang/technology",
    component: _130ab1f7,
    name: "lang-technology"
  }, {
    path: "/:lang/product/tab1",
    component: _0f1a659c,
    name: "lang-product-tab1"
  }, {
    path: "/:lang/product/tab2",
    component: _0f287d1d,
    name: "lang-product-tab2"
  }, {
    path: "/:lang/product/tab3",
    component: _0f36949e,
    name: "lang-product-tab3"
  }, {
    path: "/:lang/strength/tab1",
    component: _378d655c,
    name: "lang-strength-tab1"
  }, {
    path: "/:lang/strength/tab2",
    component: _379b7cdd,
    name: "lang-strength-tab2"
  }, {
    path: "/:lang/strength/tab3",
    component: _37a9945e,
    name: "lang-strength-tab3"
  }, {
    path: "/:lang/strength/tab4",
    component: _37b7abdf,
    name: "lang-strength-tab4"
  }, {
    path: "/:lang/strength/tab5",
    component: _37c5c360,
    name: "lang-strength-tab5"
  }, {
    path: "/:lang/walkin/tab1",
    component: _15f6d16e,
    name: "lang-walkin-tab1"
  }, {
    path: "/:lang/walkin/tab2",
    component: _15daa26c,
    name: "lang-walkin-tab2"
  }, {
    path: "/:lang/walkin/tab3",
    component: _15be736a,
    name: "lang-walkin-tab3"
  }, {
    path: "/:lang/service/:id",
    component: _79980584,
    name: "lang-service-id"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
