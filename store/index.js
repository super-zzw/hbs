export const state = () => ({
  locales: ['en', 'zh'],
  locale: 'en',
  nav:1,
  path:'/'
})

export const mutations = {
  SET_LANG (state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  },
  setNav(state,val){
 state.nav=val
  },
  setPath(state,val){
    state.path=val
     },
  
}
