<template>
  <div class="page">
    <div class="container">
        <div class="sec1 wow fadeInUp">
          <img src="~assets/image/banner3-1.png" alt="" class="banner">
          <div class="cont">
                  <div class="content1">
          <div class="Box">
            <p class="line1"></p>
            <p class="t1">NEWS</p>
            <p class="t2">品牌资讯</p>
          </div>
          <p class="t3">最新的公司资讯</p>
        
        </div>
          </div>
       
      </div>
      <div class="sec22 wow fadeInUp">
          
         <div class="container" ref="article">
           <!-- <div class="dateBox">
              <p class="date" v-if="article.createTime">{{article.createTime|formatTime}} </p>
              <p class="line"></p>
          </div> -->
          <div class="contentBox" v-html="article.description">
        
          </div>
          <div class="optBox">
              <div class="back" @click="back">
                  <img src="~assets/image/back.png" alt="">
                  回到首页
              </div>
              <div class="go">
                
                   <p @click="changeArticle(-1)" :class="article.topNextModel.top?'':'no'">上一条</p>
                  <span></span>
                  <p @click="changeArticle(1)" :class="article.topNextModel.next?'':'no'">下一条</p> 
                   <!-- <p >上一条</p>
                  <span></span>
                  <p >下一条</p>  -->
              </div>
          </div>
         </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  created(){
      // if(this.$route.query.id){
      //  this.articleId=this.$route.query.id
      // }
  },
  mounted(){
    this.initWow(this)
  },
  data(){
     return{
       articleId:''
     }
  },
  filters:{
    formatTime(data){
      return data.split(' ')[0].split('-').reverse().join('.')
    }
  },
  async asyncData({ app,store,query}) {
    console.log(query)
   let articleList=[]
   let article=null
   let articleId=''
   try {
     
     let res=await await Promise.all([
        app.$axios.get(store.state.api.getConfig, {
            params: {
              pageName: store.state.pageNames.strength1
            }
          }),
        app.$axios.get(store.state.api.getArticleList)
     ])
   
           if (res[0]!= null){
           if (res[0].seoTitle) {
            app.head.title = res[0].seoTitle;
          }
           if (res[0].seoKeys && res[0].seoDesc) {
            app.head.meta = [{
                hid: "homekeywords",
                name: "keywords",
                content: res[0].seoKeys
              },
              {
                hid: "homedescription",
                name: "description",
                content: res[0].seoDesc
              }
            ];
          }
         }
    // if(!this.articleId){
    //  let res1 = await app.$axios.get(store.state.api.getArticleList)
      if(res[1].length){
           articleList=res[1]
          //  console.log(articleList)
          if(!query.id){
             articleId=res[1][0].id
          }
          //  this.articleId=res[1][0].id
          //  this.getArticle()
      }
      if(query.id){
        console.log(query.id)
        articleId=query.id
      }
           let res2=await app.$axios.get(store.state.api.getArticleDetail,{
         params:{id:articleId}
       })
       if(res2){
        // res2.description.replace(/<img/g, "<img style='max-width:100%;height:auto;'");
        article=res2
       
       }
      
    
     
        
        
    
   }catch(e){
    
   }
    return {
        articleList,
        article
      };
 },
 methods:{
   back(){
        this.$router.push('/')
   },
   async getArticle(){
     let article= await this.$axios.get(this.$store.state.api.getArticleDetail,{
         params:{id:this.articleId}
       })
      this.article=article
   },
   async changeArticle(i){
     if(i==-1){
     if(!this.article.topNextModel.top) return
       this.articleId=this.article.topNextModel.topId
       await this.getArticle()
        
     }else{
        if(!this.article.topNextModel.next) return
    this.articleId=this.article.topNextModel.nextId
       await this.getArticle()
     
     }
     console.log(this.$refs.article.offsetTop)
      let clock = setInterval(()=>{
                if(document.documentElement.scrollTop>this.$refs.article.offsetTop-80){
                    document.documentElement.scrollTop -= 40;
                }else{
                    clearInterval(clock);
                }
            },5)
    //  window.scrollTo(0,this.$refs.article.offsetTop)
   }
 }
}
</script>
<style lang="less" scoped>
.cont{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
      }
    .sec1 {
 
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .content1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    .Box {
      width: 312px;
      height: 277px;
      border: 2px solid rgb(65, 65,65);
    //   opacity: 0.2;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 27px;
      .line1 {
        width: 33px;
        height: 8px;
        background: #FFFFFF;
        margin-top: 60px;
        opacity: 1;
      }
      .t1 {
        font-size: 44px;
        font-family:NotoSansCJK-Bold !important;
        color: #FFFFFF;
        line-height: 97px;
        opacity: 1;
      }
      .t2 {
        font-size: 28px;
       font-family:NotoSansCJK-Bold !important;
        color: #FFFFFF;
        line-height: 36px;
      }
    }
    .t3 {
      font-size: 20px;
      font-family: Noto Sans S Chinese;
      font-weight: 400;
      color: #CCCCCC;
      line-height: 36px;
    }
  }
}
.sec22{
    background: #F2F2F2;
    padding: 100px 0;
    display: flex;
    justify-content: center;
    .container{
        width: 1200px;
        .dateBox{
        display: flex;
        align-items: center;
        .date{
            
font-size: 24px;
font-family: SourceHanSansCN;
font-weight: bold;
color: #808080;
line-height: 36px;
margin-right: 30px;
        }
        .line{
   flex: 1;
   
height: 2px;
// border: 2px solid #909090;
opacity: 0.5;
position: relative;
top: 2px;
background: #909090;
        }
    }
    .contentBox{
        margin-top: 20px;
        background: #fff;
        // .pic{
        //     width: 100%;
        //     height: auto;
        // }
        p:first-child>img{
           width: 100% !important;
        }
      
       

    }
   
    .optBox{
        display: flex;
        justify-content: space-between;
        height: 40px;
        background: #F9F9F9;
        .back{
          cursor: pointer;
            display: flex;
            align-items: center;
            padding: 8px;
            background: #707070;
font-size: 16px;
font-family: Adobe Heiti Std;
font-weight: normal;
color: #FFFFFF;

            img{
                width: 20px;
                height: 20px;
                
            }
        }
        .go{
            display: flex;
            align-items: center;
            margin-right: 10px;
            height: 36px;
            p{
                cursor: pointer;
                user-select: none;
font-size: 15px;
font-family: SourceHanSansCN;
font-weight: 400;
color: #808080;

            }
            p.no{
color: #ccc;
            }
            span{
    width: 1px;
height: 15px;
border: 1px solid #808080;
background: #808080;
margin: 0 15px;
position: relative;
}
        }
    }
    }
    
}
</style>