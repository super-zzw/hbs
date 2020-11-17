export default ({ app,store }) => {
    app.router.beforeEach((to, from, next) => {
        // console.log(to.path)
        store.commit('setPath',to.path)
       if(to.path.includes('product')){
         store.commit('setNav',2)
       }else{
        store.commit('setNav',1)
       }
       next();
      
    });
  };