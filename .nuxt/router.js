import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6fcf777b = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _e0f15b80 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _0c625d67 = () => interopDefault(import('..\\pages\\_lang\\index.vue' /* webpackChunkName: "pages/_lang/index" */))
const _26aafabc = () => interopDefault(import('..\\pages\\_lang\\about.vue' /* webpackChunkName: "pages/_lang/about" */))

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
    path: "/about",
    component: _6fcf777b,
    name: "about"
  }, {
    path: "/",
    component: _e0f15b80,
    name: "index"
  }, {
    path: "/:lang",
    component: _0c625d67,
    name: "lang"
  }, {
    path: "/:lang/about",
    component: _26aafabc,
    name: "lang-about"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
