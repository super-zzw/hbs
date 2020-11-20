<template>
  <div class="page">
    <div class="container">
       <div class="sec1 wow fadeInUp">
         <img src="~assets/image/banner3-2.png" alt="" class="banner">
         <div class="cont">
               <div class="content1">
          <div class="Box">
            <p class="line1"></p>
            <p class="t1">FACTORY</p>
            <p class="t2">超大规模生产基地</p>
          </div>
          <p class="t3">呼博士拥有自动化生产线及产品检测系统，</p>
          <p class="t3">制作标准化、高品质的新风产品。</p>
        </div>
         </div>
        
      </div>
       <div class="sec22 wow fadeInUp">
         <div class="container">
              <img src="~assets/image/img2-4.png" alt="" class="pic">
         <div class="content1">
             <h2 class="title">生产基地</h2>
             <p class="line"></p>
             <p class="con">呼博士新风生产基地拥有自动化生产线及产品检测系统的一</p>
             <p class="con">体产测服务，秉承“高标准、精细化、零缺陷”的生产管理</p>
             <p class="con">理念，众多国内和世界500强企业多年采用我们的核心技术，</p>
             <p class="con">由我们OEM生产产品，公司总销售额逾60个亿，90%由世界</p>
             <p class="con">500强等国外企业采购。</p>
       
         </div>
         </div>
        
      </div>
      <div class="sec3 wow fadeInUp">
          <div class="container">
              <div class="contentBox">
                  <div class="left">
                      <p class="con">生产基地组建于2000年，拥有建筑面积达7.6万平方米的现代化制造厂房，汇</p>
             <p class="con">集了一批规模超1000人深谙高科技产品、精密制造的高素质员工队伍，建有超</p>
             <p class="con">10条组装线，配备数十台行业领先的专业生产设备。完善的人资和基建配备及</p>
             <p class="con">公司各研发中心强大研发实力支撑使生产基地具备“一站式”的生产能力，可</p>
             <p class="con">以提供从产品定义、软件设计、硬件设计、工业设计、结构设计、测试到生产</p>
             <p class="con">制造的全流程服务。雄厚的研发实力、集采实力和精湛的制造工艺，以及从研</p>
             <p class="con">发设计、材料采购、生产加工等各环节全方位的成本控制分析，使公司能够快</p>
             <p class="con">速响应客户需求，快速交付高品质产品。</p>
                  </div>
                  <div class="right">
                       <h2 class="title">大规模 高标准</h2>
                        <p class="line"></p>
                        <div class="tt">
                             <img src="~assets/image/icon3-1.png" alt="" class="pic">
                             符合国家消杀产品生产标准
                        </div>
                        <div class="tt">
                             <img src="~assets/image/icon3-2.png" alt="" class="pic">
                             6栋国标厂房
                        </div>
                        <div class="tt">
                             <img src="~assets/image/icon3-3.png" alt="" class="pic">
                             建筑面积7.6万m²
                        </div>
                        <div class="tt">
                             <img src="~assets/image/icon3-4.png" alt="" class="pic">
                             年产能可达2365.2万台
                        </div>
                        <div class="tt">
                             <img src="~assets/image/icon3-5.png" alt="" class="pic">
                             国家标准1000级的无尘车间
                        </div>
                  </div>
              </div>
              <div class="imgBox">
                  <img src="~assets/image/img3-4.png" alt="" class="img3-4">
                  <div class="col">
                      <img src="~assets/image/img3-5.png" alt="">
                      <img src="~assets/image/img3-6.png" alt="">
                  </div>
                   <div class="col">
                      <img src="~assets/image/img3-7.png" alt="">
                      <img src="~assets/image/img3-8.png" alt="">
                  </div>
              </div>
          </div>
      </div>
  </div>
  </div>
</template>
<script>
export default {
  mounted(){
    this.initWow(this)
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
  position: relative;
  width: 100%;
  
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
    background: #2C2C2C;
    
   
    // height: 530px;
    display: flex;
    justify-content: center;
    .container{
       width: 1200px;
        display: flex;
    justify-content: center;
        .pic{
        width: 630px;
        height: auto;
        position: relative;
        top: 50px;
        margin-right: 67px;
    }
    .content1{
        // margin-top: 170px;
        justify-content: center;
        display: flex;
        flex-direction: column;
    }
    }
    
}
.sec3{
    padding-bottom: 180px;
    background: #fff;
    display: flex;
    justify-content: center;
    .container{
        margin-top: 100px;
        .contentBox{
            display: flex;
            align-items: center;
            .left{
                margin-right: 100px;
              .con{
                  color: #707070;
              }
            }
            .right{
              .title{
                  color: #505050;
                  line-height: 32px;
              }
              .tt{
                  
font-size: 20px;
font-family: Noto Sans S Chinese;
font-weight: 400;
color: #707070;
display: flex;
align-items: center;
margin-bottom: 15px;
img{
     width: 30px;
    height: auto;
    margin-right: 15px;
}
              }
            }
        }
        .imgBox{
            margin-top: 50px;
            display: flex;
            .img3-4{
                width: 590px;
                // height: 416px;
            }
            .col{
                margin-left: 10px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                img{
                    width: 290px;
                    // height: 202px;
                }
            }
        }
    }
}
 .title{
       
font-size: 32px;
font-family:NotoSansCJK-Bold !important;
color: #FFFFFF;
line-height: 46px;     
 }
 .con{
     
font-size: 18px;
font-family: Noto Sans S Chinese;
font-weight: 400;
color: #FFFFFF;
line-height: 34px;
 }
 .line{
     width: 50px;
height: 2px;

background: #808080;
margin-top: 30px;
margin-bottom: 30px;
 }
</style>