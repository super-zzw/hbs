
export default {
    initWow(app){
        if (process.browser) {
            new app.$wow({
                live: true,
                offset: 0
            }).init();
        }
    },
   async search(app,value){
      let res=await app.$axios.get(app.$store.state.api.search,{
           params:{content:value}
       })
       return res
    }
}