import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _33f540f6 = () => interopDefault(import('..\\pages\\product\\index.vue' /* webpackChunkName: "pages/product/index" */))
const _076fadff = () => interopDefault(import('..\\pages\\service\\index.vue' /* webpackChunkName: "pages/service/index" */))
const _7f7e905f = () => interopDefault(import('..\\pages\\strength\\index.vue' /* webpackChunkName: "pages/strength/index" */))
const _2c677d98 = () => interopDefault(import('..\\pages\\technology\\index.vue' /* webpackChunkName: "pages/technology/index" */))
const _6d441752 = () => interopDefault(import('..\\pages\\walkin\\index.vue' /* webpackChunkName: "pages/walkin/index" */))
const _e0f15b80 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _0c625d67 = () => interopDefault(import('..\\pages\\_lang\\index.vue' /* webpackChunkName: "pages/_lang/index" */))
const _0e96f03e = () => interopDefault(import('..\\pages\\_lang\\product\\index.vue' /* webpackChunkName: "pages/_lang/product/index" */))
const _30013eb8 = () => interopDefault(import('..\\pages\\_lang\\service\\index.vue' /* webpackChunkName: "pages/_lang/service/index" */))
const _691f16c6 = () => interopDefault(import('..\\pages\\_lang\\strength\\index.vue' /* webpackChunkName: "pages/_lang/strength/index" */))
const _25366c4a = () => interopDefault(import('..\\pages\\_lang\\technology\\index.vue' /* webpackChunkName: "pages/_lang/technology/index" */))
const _66510b79 = () => interopDefault(import('..\\pages\\_lang\\walkin\\index.vue' /* webpackChunkName: "pages/_lang/walkin/index" */))

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
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
