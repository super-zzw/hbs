export default ({ app,store }) => {
    app.router.beforeEach((to, from, next) => {
        // console.log(to.path)
        // if(to.path.includes('technology')){
        //     store.commit('setPath','/technology')
        // }else{

          
        // }
       if(to.path.includes('product')||to.path.includes('shimoxi')){
         store.commit('setNav',2)
       }else{
        store.commit('setNav',1)
       }
       store.commit('setPath',to.path)
       next();
      
    });
  };