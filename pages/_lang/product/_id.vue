<template>
    <div class="page">
      
       <div v-html="detail.particulars" class="imgBox1"></div>
       
    </div>
</template>
<script>
export default {
    
    async asyncData({store,params,app}) {
        // console.log(query)
        let detail=null
        try{
            //  let res = await Promise.all([
        //   app.$axios.get(store.state.api.getConfig, {
        //     params: {
        //       pageName: store.state.pageNames.index
        //     }
        //   }),
         let res=await app.$axios.get(store.state.api.getProductDetail,{
              params:{id:params.id}
          })
          
        // ]);
        // if (res[0] != null){
        //    if (res[0].seoTitle) {
        //     app.head.title = res[0].seoTitle;
        //   }
        //    if (res[0].seoKeys && res[0].seoDesc) {
        //     app.head.meta = [{
        //         hid: "homekeywords",
        //         name: "keywords",
        //         content: res[0].seoKeys
        //       },
        //       {
        //         hid: "homedescription",
        //         name: "description",
        //         content: res[0].seoDesc
        //       }
        //     ];
        //   }
        //  }
         if(res){
          
            detail=res
         }
        }catch(e){

        }
        return {
            detail
        }
    },
     mounted(){
    this.initWow(this)
  }
}
</script>
<style lang="less" >
.imgBox1 img{
    display: block;
    width: 100% !important;

}
</style>