<template>
    <div class="page">
       <div v-html="detail.particulars" class="imgBox"></div>
       
    </div>
</template>
<script>
export default {
    
    async asyncData({store,query,app}) {
        let detail=null
        try{
             let res = await Promise.all([
        //   app.$axios.get(store.state.api.getConfig, {
        //     params: {
        //       pageName: store.state.pageNames.index
        //     }
        //   }),
          app.$axios.get(store.state.api.getProductDetail,{
              params:{id:query.id}
          }),
          
        ]);
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
         if(res[0]){
            //  res[0].particulars.replace(/<img/g, "<img style='width:100%;height:auto;' class='wow fadeInUp'");
            detail=res[0]
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
.imgBox img{
    // display: block;
    width: 100% !important;
}
</style>