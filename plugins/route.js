export default ({ app,store }) => {
    app.router.beforeEach(async (to, from, next) => {
        // console.log(to.path)
        // if(to.path.includes('technology')){
        //     store.commit('setPath','/technology')
        // }else{

          
        // }
        if(store.state.productList.length==0){
       
        let res= await app.$axios.get(store.state.api.getProductList)
        // console.log(res)
     
         if(res.length>0){
       console.log(123,res)
          store.commit('setProductList',res)
         }
        }
       if(to.path.includes('product')||to.path.includes('shimoxi')){
         store.commit('setNav',2)
       }else{
        store.commit('setNav',1)
       }
       store.commit('setPath',to.path)
       next();
      
    });
  };