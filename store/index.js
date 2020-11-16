export const state = () => ({
  locales: ['en', 'zh'],
  locale: 'en',
  nav:1
})

export const mutations = {
  SET_LANG (state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  },
  setNav(state,val){
 state.nav=val
  }
}
