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
        <div class="cont1">
            <div class="tt">呼博士为您找到以下相关结果：</div>
            <div class="searchCont">
                <div class="searchItem">
                    <img src="~assets/image/img2-8.png" alt="">
                    <div class="right">
                        <h2 class="title">关于我们</h2>
                        <p class="desc">专注杀毒新风20年<br>打造全方位健康呼吸空间</p>
                          <div class="about">
                    {{ $t("liaojie") }}
                <img src="~assets/image/more.png" alt="" />
              </div>
                    </div>
                 </div>
                 <div class="searchItem">
                    <img src="~assets/image/img2-8.png" alt="">
                    <div class="right">
                        <h2 class="title">关于我们</h2>
                        <p class="desc">专注杀毒新风20年<br>打造全方位健康呼吸空间</p>
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
                  <p >上一页</p>
                  <span></span>
                  <p >下一页</p> 
                   <!-- <p @click="changeArticle(-1)" :class="article.topNextModel.top?'':'no'">上一条</p>
                  <span></span>
                  <p @click="changeArticle(1)" :class="article.topNextModel.next?'':'no'">下一条</p>  -->
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
  mounted() {
    this.initWow(this);
  },
  methods:{
      back(){
           this.$router.push('/') 
      }
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
line-height: 32px;
margin-top: 20px;
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