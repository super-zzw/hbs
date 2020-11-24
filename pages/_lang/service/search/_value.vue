<template>
  <div class="page">
    <div class="sec1 wow fadeInUp">
      <img src="~assets/image/banner6-1.png" alt="" class="banner" />
      <div class="cont">
        <div class="content1">
          <div class="Box">
            <p class="line1"></p>
            <p class="t1">SUPPORT</p>
            <p class="t2">360°无忧服务支持</p>
          </div>
          <p class="t3">
            呼博士为您提供售前、售中、售后360°一站式无忧服务支持，
          </p>
          <p class="t3">保障您随时享受健康空气，无后顾之忧。</p>
        </div>
      </div>
    </div>
    <div class="sec2">
        <div class="cont1" v-if="searchList.list.length>0">
            <div class="tt">呼博士为您找到以下相关结果：</div>
            <div class="searchCont">
                <div class="searchItem" v-for="(item,i) in searchList.list" :key="i" @click="toDetail(item)">
                    <img src="~assets/image/img2-8.png" alt="">
                    <div class="right">
                        <h2 class="title">{{item.bubble}}</h2>
                        <p class="desc" v-html="item.summary"></p>
                          <div class="about">
                    {{ $t("liaojie") }}
                <img src="~assets/image/more.png" alt="" />
              </div>
                    </div>
                 </div>
                  <div class="optBox">
              <div class="back" @click="back">
                  <img src="~assets/image/back.png" alt="">
                  回到首页
              </div>
              <div class="go">
                  <!-- <p >上一页</p>
                  <span></span>
                  <p >下一页</p>  -->
                  <p @click="getSearchList(-1)" :class="searchList.hasPreviousPage?'':'no'">上一条</p>
                  <span></span>
                  <p @click="getSearchList(1)" :class="searchList.hasNextPage?'':'no'">下一条</p> 
              </div>
          </div>
            </div>
           
        </div>
        <div v-else class="cont1">
            <div class="tt">没有查询到相关搜索，建议换个关键词试试，如
                <nuxt-link to="/service/search/杀毒" style="color:#c7000b">杀毒</nuxt-link> </div>
        </div>
        
    </div>
  </div>
</template>
<script>

export default {
    async asyncData({ app, store,params }) {
    let searchList = [];
     
    try {
      let res = await app.$axios.get(store.state.api.search, {
          params: {
            content: params.value,
          },
        })
      
     
      if (res) {
       searchList=res
        
      }
    
    } catch (e) {}
    return {
     searchList
    };
  },
  data(){
       return{
          pageNum:1
       }
       
  },
  mounted() {
      
    this.initWow(this);

  },
  created(){
    //    console.log(this.$route.params)
  },
  methods:{
      toDetail(item){
        if(item.type==1){
            this.$router.push('/walkin/tab4?id='+item.id)
        }else if(item.type==2){
            this.$router.push('/product/'+item.id)
        }
      },
      back(){
           this.$router.push('/') 
      },
      async getSearchList(val){
         
          if(val==-1){
               if(!this.searchList.hasPreviousPage) return
              this.pageNum--
          }else{
                 if(!this.searchList.hasNextPage) return
              this.pageNum++
          }
     let searchList= await this.$axios.get(this.$store.state.api.search,{
         params:{
             content:this.$route.params.value,
             pageNum:this.pageNum,
             language:this.$store.state.locale=='zh'?'zh-CN':'en-US'
         }
       })
      this.searchList=searchList
   },
  }
};
</script>
<style lang="less" scoped>
.cont {
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
      border: 2px solid rgb(65, 65, 65);
      //   opacity: 0.2;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 27px;
      .line1 {
        width: 33px;
        height: 8px;
        background: #ffffff;
        margin-top: 60px;
        opacity: 1;
      }
      .t1 {
        font-size: 44px;
        font-family: NotoSansCJK-Bold !important;
        color: #ffffff;
        line-height: 97px;
        opacity: 1;
      }
      .t2 {
        font-size: 28px;
        font-family: NotoSansCJK-Bold !important;
        color: #ffffff;
        line-height: 36px;
      }
    }
    .t3 {
      font-size: 20px;
      font-family: Noto Sans S Chinese;
      font-weight: 400;
      color: #cccccc;
      line-height: 36px;
    }
  }
}
.sec2{
    background: #F2F2F2;
    display: flex;
    justify-content: center;
    .cont1{
        width: 1200px;
        padding: 80px 0;
        .tt{
           padding-left: 20px;
font-size: 28px;
color: #808080;
margin-bottom: 55px;
        }
        .searchCont{
           
            .searchItem{
                background: #fff;
                display: flex;
                margin-top: 39px;
                img{
                    width: 487px;
height: 298px;
                }
                .right{
                    margin-left: 35px;
                    .title{
margin-top: 60px;                      
font-size: 30px;
font-family: SourceHanSansCN;
font-weight: 400;
color: #909090;
line-height: 40px;
                    }
                    .desc{
                        
font-size: 20px;
font-family: SourceHanSansCN;
font-weight: 400;
color: #909090;
line-height: 20px;
margin-top: 30px;
white-space: pre-line
                    }
                    .about {
          margin-top: 50px;

          font-size: 18px;

          font-weight: 400;
          color: #808080;
          display: flex;
          align-items: center;
          img {
            width: 20px;
            height: 20px;
          }
        }
                }
            }
             .searchItem:first-child{
                margin-top: 0;
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
}
</style>