export default ({ app,store }) => {
    app.router.beforeEach((to, from, next) => {
       console.log(to)
       if(to.path.includes('product')){
         store.commit('setNav',2)
       }
       next();
      
    });
  };